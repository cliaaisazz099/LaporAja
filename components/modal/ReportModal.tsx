"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { useRef } from "react";

const MapPickerModal = dynamic(
    () => import("./MapPickerModal"),
    { ssr: false }
);

export default function ReportModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [images, setImages] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const [openMap, setOpenMap] = useState(false);
    const isMaxImages = images.length >= 5;
    const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

    // ================= IMAGE =================
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        const remaining = 5 - images.length;

        if (remaining <= 0) {
            toast.error("Maksimal 5 gambar");
            return;
        }

        if (files.length > remaining) {
            toast.warning(`Hanya ${remaining} gambar yang akan diambil`);

            const allowedFiles = files.slice(0, remaining);
            setImages((prev) => [...prev, ...allowedFiles]);
            return;
        }

        toast.success(`${files.length} gambar berhasil dipilih`);

        setImages((prev) => [...prev, ...files]);
    };

    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
        toast.success("Gambar berhasil dihapus");
    };

    // ================= SUBMIT =================
    const handleSubmit = async () => {
        if (!title || !description || !location) {
        toast.error("Semua field wajib diisi");
        return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("location", location);
            formData.append("lat", lat.toString());
            formData.append("long", long.toString());

            images.forEach((file) => {
                formData.append("images", file);
            });

            const res = await fetch("/api/report", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            toast.success("Laporan berhasil dikirim");
            onClose();
            window.location.reload();
        } catch (err: any) {
            toast.error(err.message || "Terjadi kesalahan");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* OVERLAY */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center">

                {/* MODAL */}
                <div className="bg-white w-[95%] max-w-xl rounded-[2rem] p-6 md:p-8 shadow-2xl relative">

                    {/* CLOSE */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 text-slate-400 hover:text-slate-700"
                    >
                        ✕
                    </button>

                    {/* HEADER */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-extrabold text-primary">
                        Buat Laporan
                        </h2>
                        <p className="text-sm text-slate-500">
                        Sampaikan masalah yang Anda temukan di sekitar Anda
                        </p>
                    </div>

                    {/* FORM */}
                    <div className="space-y-5">

                        {/* TITLE */}
                        <div>
                            <label className="text-sm font-semibold text-slate-700">
                                Judul Laporan
                            </label>
                            <input
                                type="text"
                                placeholder="Contoh: Jalan berlubang"
                                className="w-full mt-2 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 p-3 rounded-xl outline-none transition"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        {/* DESCRIPTION */}
                        <div>
                            <label className="text-sm font-semibold text-slate-700">
                                Deskripsi
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Jelaskan detail masalah..."
                                className="w-full mt-2 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 p-3 rounded-xl outline-none transition"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        {/* LOCATION */}
                        <div>
                            <label className="text-sm font-semibold text-slate-700">
                                Lokasi
                            </label>

                            <div className="flex gap-2 mt-2">
                                <input
                                type="text"
                                placeholder="Pilih dari map"
                                className="flex-1 border border-slate-200 p-3 rounded-xl bg-slate-50"
                                value={`${location} (${lat}, ${long})`}
                                readOnly
                                />
                                <button
                                onClick={() => setOpenMap(true)}
                                className="bg-primary text-white px-4 rounded-xl font-semibold hover:opacity-90"
                                >
                                Pilih
                                </button>
                            </div>
                        </div>

                        {/* IMAGE UPLOAD */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-slate-700">
                                Upload Gambar (max 5)
                            </label>
                            <p className="text-xs text-slate-400 mt-1">
                                {images.length}/5 gambar terupload
                            </p>

                            {/* <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                                disabled={isMaxImages}
                                className={`mt-2 border px-4 py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer 
                                    ${isMaxImages 
                                        ? "opacity-50 cursor-not-allowed bg-slate-100" 
                                        : "border-primary text-primary hover:bg-secondary hover:text-white"
                                    }`
                                }
                            /> */}

                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    if (isMaxImages) {
                                        toast.error("Maksimal 5 gambar");
                                        return;
                                    }

                                    fileInputRef.current?.click();
                                }}
                                className={`mt-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300
                                    ${isMaxImages
                                        ? "opacity-50 cursor-not-allowed bg-slate-100 text-slate-400"
                                        : "border border-primary text-primary hover:bg-secondary hover:text-white"
                                    }`
                                }
                            >
                                Pilih Gambar
                            </button>

                            {/* PREVIEW */}
                            <div className="grid grid-cols-3 gap-3 mt-3">
                                {images.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative group"
                                >
                                    <img
                                    src={URL.createObjectURL(img)}
                                    className="w-full h-24 object-cover rounded-xl"
                                    />

                                    {/* REMOVE */}
                                    <button
                                    onClick={() => 
                                        removeImage(i)}
                                    className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100"
                                    >
                                    ✕
                                    </button>
                                </div>
                                ))}
                            </div>
                        </div>

                        {/* SUBMIT */}
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-secondary transition disabled:opacity-50"
                            >
                            {loading ? "Mengirim..." : "Kirim Laporan"}
                        </button>
                    </div>
                </div>
            </div>

            {/* MAP MODAL */}
            <MapPickerModal
                isOpen={openMap}
                onClose={() => setOpenMap(false)}
                onSelect={(data) => {
                setLocation(`${data.address}`);
                setLat(data.lat);
                setLong(data.long);
                }}
            />
        </>
    );
}