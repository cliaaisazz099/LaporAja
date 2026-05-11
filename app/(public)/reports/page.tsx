"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";

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
  const [filtered, setFiltered] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  // ================= FETCH =================
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch("/api/report");

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        const safeData = Array.isArray(data) ? data : [];

        setReports(safeData);
        setFiltered(safeData);
      } catch (err) {
        console.error(err);
        setReports([]);
        setFiltered([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  // ================= FILTER =================
  useEffect(() => {
    let result = [...reports];

    if (search) {
      result = result.filter((r) =>
        r.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== "all") {
      result = result.filter((r) => r.status === status);
    }

    setFiltered(result);
  }, [search, status, reports]);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 mt-20">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10">

        <h1 className="text-3xl font-extrabold text-slate-800">
          Aduan Masyarakat
        </h1>

        <p className="text-slate-500 mt-2">
          Pantau laporan masyarakat secara transparan dan real-time
        </p>

        {/* FILTER BAR */}
        <div className="mt-6 flex flex-col md:flex-row gap-3">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Cari kata kunci atau lokasi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-primary px-5 py-3 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          {/* STATUS FILTER */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-primary px-4 py-3 rounded-2xl bg-white"
          >
            <option value="all">Semua Status</option>
            <option value="pending">Menunggu</option>
            <option value="process">Diproses</option>
            <option value="done">Selesai</option>
          </select>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto">

        {loading ? (
          <Skeleton />
        ) : filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-4">

            {filtered.map((report) => (
              <Link
                key={report.id}
                href={`/reports/${report.id}`}
                className="group"
              >
                <div className="flex items-center justify-between bg-white border border-primary rounded-2xl px-6 py-5 hover:shadow-md hover:border-slate-300 transition-all duration-200">

                  {/* LEFT */}
                  <div className="flex-1">

                    {/* TITLE + STATUS */}
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-lg font-semibold text-slate-800 group-hover:text-primary transition">
                        {report.title}
                      </h2>

                      <StatusBadge status={report.status} />
                    </div>

                    {/* DESC */}
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                      {report.description}
                    </p>

                    {/* META */}
                    <div className="flex items-center gap-6 mt-3 text-xs text-slate-400">

                      <span className="flex items-center gap-1">
                        {report.location}
                      </span>

                      <span className="flex items-center gap-1">
                        {new Date(report.created_at).toLocaleDateString("id-ID")}
                      </span>

                    </div>

                  </div>

                  {/* RIGHT ARROW */}
                  <div className="ml-4 flex items-center justify-center w-10 h-10 rounded-full border border-primary group-hover:bg-primary transition">
                    <span className="text-primary group-hover:translate-x-1 group-hover:text-white transition-all duration-300">
                      →
                    </span>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="grid gap-4 max-w-6xl mx-auto">
      {[...Array(6)].map((_, i) => (
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
    <div className="text-center py-24">
      <h3 className="text-xl font-bold text-slate-700">
        Tidak ada laporan ditemukan
      </h3>
      <p className="text-slate-500 mt-2">
        Coba ubah filter atau buat laporan baru 🚀
      </p>
    </div>
  );
}