"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Circle,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import L from "leaflet";
import { reverseGeocode } from "@/lib/helpers/geocode";

// ================= CONFIG =================
const CENTER = { lat: -7.9528, lng: 112.61 };
const RADIUS = 10000; // 10km

// ================= FIX ICON =================
function useLeafletFix() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);
}

// ================= DISTANCE =================
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371e3;
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) *
      Math.cos(φ2) *
      Math.sin(Δλ / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

// ================= MARKER =================
function DraggableMarker({ position, setPosition }: any) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return (
    <Marker
      draggable
      position={position}
      eventHandlers={{
        dragend: (e) => {
          const marker = e.target;
          setPosition(marker.getLatLng());
        },
      }}
    />
  );
}

// ================= MAIN =================
export default function MapPickerModal({
  isOpen,
  onClose,
  onSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (data: {
    lat: number;
    long: number;
    address: string;
  }) => void;
}) {
  useLeafletFix();

  const [position, setPosition] = useState(CENTER);
  const [address, setAddress] = useState("Mencari alamat...");
  const [loadingAddress, setLoadingAddress] = useState(false);

  // ================= DEBOUNCE =================
  useEffect(() => {
    const timeout = setTimeout(async () => {
      setLoadingAddress(true);

      const result = await reverseGeocode(position.lat, position.lng);

      if (result) {
        setAddress(result.displayName);
      } else {
        setAddress("Alamat tidak ditemukan");
        toast.error("Gagal mengambil alamat lokasi");
      }

      setLoadingAddress(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [position]);

  // ================= DISTANCE =================
  const distance = getDistance(
    CENTER.lat,
    CENTER.lng,
    position.lat,
    position.lng
  );

    const isOutside = distance > RADIUS;
    useEffect(() => {
        if (isOutside) {
            toast.warning("Lokasi berada di luar radius 10 km");
        }
    }, [isOutside]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center">
      <div className="bg-white w-[95%] max-w-2xl rounded-2xl p-6 shadow-xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">
            Pilih Lokasi Laporan
          </h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* MAP */}
        <div className="rounded-xl overflow-hidden border">
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: "320px", width: "100%" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle
              center={CENTER}
              radius={RADIUS}
              pathOptions={{
                color: "#2563eb",
                fillOpacity: 0.1,
              }}
            />

            <DraggableMarker
              position={position}
              setPosition={setPosition}
            />
          </MapContainer>
        </div>

        {/* INFO */}
        <div className="mt-4 text-sm space-y-2">

          <p>
            <strong>Latitude:</strong> {position.lat}
          </p>

          <p>
            <strong>Longitude:</strong> {position.lng}
          </p>

          <p>
            <strong>Alamat:</strong>{" "}
            {loadingAddress ? "Loading..." : address}
          </p>

          {isOutside && (
            <p className="text-red-500 font-medium">
              ⚠️ Lokasi di luar jangkauan 10 km
            </p>
          )}
        </div>

        {/* ACTION */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border"
          >
            Batal
          </button>

          <button
            onClick={() => {
                toast.success("Lokasi berhasil dipilih");
                onSelect({
                    lat: position.lat,
                    long: position.lng,
                    address,
                });
                onClose();
            }}
            disabled={isOutside}
            className={`px-5 py-2 text-white rounded-xl ${
              isOutside
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-600"
            }`}
          >
            Gunakan Lokasi Ini
          </button>
        </div>
      </div>
    </div>
  );
}