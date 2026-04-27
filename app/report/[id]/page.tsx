"use client";

import { useEffect, useState, use } from "react";
import dynamic from "next/dynamic";
import StatusBadge from "@/components/StatusBadge";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);

type Report = {
  id: string;
  title: string;
  description: string;
  location: string;
  lat: string;
  long: string;
  status: "pending" | "process" | "done";
  images: string[];
  created_at: string;
};

function Skeleton() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 mt-20">
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="h-32 bg-slate-200 animate-pulse rounded-2xl" />
        <div className="h-64 bg-slate-200 animate-pulse rounded-2xl" />
        <div className="h-64 bg-slate-200 animate-pulse rounded-2xl" />
      </div>
    </div>
  );
}

export default function ReportDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  // ================= FETCH =================
  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await fetch(`/api/report/${id}`);

        if (!res.ok) {
        throw new Error("Failed to fetch report");
        }

        const contentType = res.headers.get("content-type");

        if (!contentType?.includes("application/json")) {
        throw new Error("Response is not JSON (API route error)");
        }

        const data = await res.json();

        if (!res.ok) throw new Error(data.error);

        setReport(data);
      } catch (err) {
        console.error(err);
        setReport(null);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [id]);

  if (loading) return <Skeleton />;

  if (!report) {
    return (
      <div className="text-center py-20 mt-20">
        <h2 className="text-xl font-bold">Data tidak ditemukan</h2>
      </div>
    );
  }

  const hasLocation =
    typeof report.lat === "string" &&
    typeof report.long === "string";

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6 mt-20">

      <div className="max-w-5xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">

          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-slate-800">
              {report.title}
            </h1>

            <StatusBadge status={report.status} />
          </div>

          <p className="text-slate-500 mt-3">
            {report.description}
          </p>

          <div className="flex justify-between text-sm text-slate-400 mt-4">
            <span>📍 {report.location}</span>
            <span>
              📅{" "}
              {new Date(report.created_at).toLocaleDateString("id-ID")}
            </span>
          </div>

        </div>

        {/* IMAGES */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">

          <h2 className="font-bold mb-4">Dokumentasi</h2>

          {report.images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {report.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="h-40 w-full object-cover rounded-xl hover:scale-105 transition"
                />
              ))}
            </div>
          ) : (
            <p className="text-slate-400">Tidak ada gambar</p>
          )}

        </div>

        {/* MAP */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">

          <h2 className="font-bold mb-4">Lokasi Aduan</h2>

          {hasLocation ? (
            <div className="h-[300px] rounded-xl overflow-hidden">
              <MapContainer
                center={[parseFloat(report.lat), parseFloat(report.long)]}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[parseFloat(report.lat), parseFloat(report.long)]} />
              </MapContainer>
            </div>
          ) : (
            <div className="h-[300px] flex items-center justify-center bg-slate-100 rounded-xl text-slate-500">
              Lokasi tidak tersedia
            </div>
          )}

        </div>

      </div>
    </div>
  );
}