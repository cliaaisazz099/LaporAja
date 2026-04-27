"use client";

import { useEffect, useState } from "react";
import StatusBadge from "@/components/StatusBadge";

type Report = {
  status: "pending" | "process" | "done";
  id: string;
  title: string;
  description: string;
  location: string;
  created_at: string;
};

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH DATA =================
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch("/api/report");

        if (!res.ok) {
          throw new Error("Failed to fetch reports");
        }

        const data = await res.json();

        const safeData = Array.isArray(data) ? data : [];

        setReports(safeData);
      } catch (err) {
        console.error("Error fetching reports:", err);
        setReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10 mt-24">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-extrabold text-slate-800">
          Aduan Masyarakat
        </h1>
        <p className="text-slate-500 mt-1">
          Daftar laporan masyarakat yang masuk secara real-time
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto">

        {loading ? (
          <Skeleton />
        ) : reports.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-4">

            {reports.map((report) => (
              <button
                key={report.id}
                onClick={() => (window.location.href = `/report/${report.id}`)}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >

                {/* TITLE */}
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-bold text-slate-800">
                    {report.title}
                    </h2>
                    <StatusBadge status={report.status as "pending" | "process" | "done"} />
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                  {report.description}
                </p>

                {/* META */}
                <div className="flex justify-between items-center mt-4 text-xs text-slate-400">

                  <span className="flex items-center gap-1">
                    {report.location}
                  </span>

                  <span>
                    {" "}
                    {new Date(report.created_at).toLocaleDateString("id-ID")}
                  </span>

                </div>

              </button>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="grid gap-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="h-24 rounded-2xl bg-slate-100 animate-pulse"
        />
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20">
      <h3 className="text-xl font-bold text-slate-700">
        Belum ada laporan
      </h3>
      <p className="text-slate-500 mt-2">
        Jadilah yang pertama membuat laporan 🚀
      </p>
    </div>
  );
}