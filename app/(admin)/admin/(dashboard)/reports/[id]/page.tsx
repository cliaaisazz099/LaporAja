import {
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";

import { notFound } from "next/navigation";
import StatusBadge from "@/components/ui/StatusBadge";
import { supabase } from "@/lib/supabase";
import StatusUpdater from "../../components/StatusUpdater";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReportDetailPage({
  params,
}: PageProps) {
  const { id } = await params;

  const { data: report, error } = await supabase
    .from("reports")
    .select(`
      *,
      report_images (
        image_url
      )
    `)
    .eq("id", id)
    .single();

  if (error || !report) {
    notFound();
  }

  // normalize images
  const images =
    Array.isArray(report.report_images)
      ? report.report_images.map((img: any) => img.image_url)
      : [];

      console.log("REPORT ID:", report.id);
      console.log("PARAM ID:", id);
      const { data: user } = await supabase.auth.getUser();
console.log("USER:", user);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-primary">
          Detail Aduan
        </h1>

        <p className="text-gray-500 mt-1">
          Informasi lengkap laporan masyarakat.
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white rounded-2xl border shadow-sm p-8 space-y-8">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-bold mb-3">
              #{report.id.substring(0, 8)}
            </p>

            <h2 className="text-2xl font-bold text-primary">
              {report.title}
            </h2>

            <div className="flex items-center gap-3 mt-3">
              <StatusBadge status={report.status} />
              <span className="text-xs text-gray-400">
                ID: {report.id}
              </span>
            </div>
          </div>

        </div>

        {/* STATUS CONTROL */}
        <div className="panel p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-l-4 border-primary">

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Status Laporan
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Ubah status laporan masyarakat
            </p>
          </div>

          <StatusUpdater
            id={report.id}
            currentStatus={report.status}
          />
        </div>

        {/* INFO GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="panel p-5">
            <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-2">
              <MapPin className="w-4 h-4" />
              Lokasi
            </div>

            <p className="font-semibold text-primary">
              {report.location}
            </p>
          </div>

          <div className="panel p-5">
            <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-2">
              <Calendar className="w-4 h-4" />
              Tanggal
            </div>

            <p className="font-semibold text-primary">
              {new Date(report.created_at).toLocaleDateString(
                "id-ID",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }
              )}
            </p>
          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="panel p-6">
          <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-4">
            <Clock className="w-4 h-4" />
            Deskripsi Aduan
          </div>

          <p className="text-primary leading-relaxed whitespace-pre-line">
            {report.description}
          </p>
        </div>

        {/* IMAGES */}
        {images.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
              Bukti Foto
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  className="h-44 w-full object-cover rounded-xl hover:scale-105 transition shadow-sm"
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}