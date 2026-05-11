'use client';

import { motion } from 'motion/react';

import {
  BarChart3,
  Clock,
  CheckCircle2,
  TrendingUp,
  Users,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';

import { useRouter } from 'next/navigation';

import { Report } from '@/app/types/report';
import StatusBadge from '@/components/ui/StatusBadge';

interface AdminDashboardProps {
  reports: Report[];
}

export default function AdminDashboard({
  reports,
}: AdminDashboardProps) {
  const router = useRouter();

  const activeReports = reports.filter(
    (r) => !r.deleted_at
  );

  const stats = [
    {
      label: 'Total Laporan',
      value: activeReports.length,
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'bg-primary',
    },
    {
      label: 'Menunggu',
      value: activeReports.filter(
        (r) => r.status === 'pending'
      ).length,
      icon: <Clock className="w-5 h-5" />,
      color: 'bg-amber-500',
    },
    {
      label: 'Diproses',
      value: activeReports.filter(
        (r) => r.status === 'process'
      ).length,
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-accent',
    },
    {
      label: 'Selesai',
      value: activeReports.filter(
        (r) => r.status === 'done'
      ).length,
      icon: (
        <CheckCircle2 className="w-5 h-5" />
      ),
      color: 'bg-emerald-500',
    },
  ];

  const recentReports = [...activeReports]
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
    )
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary tracking-tight">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 font-light mt-1">
          Pantau performa dan statistik
          penanganan aduan masyarakat.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: i * 0.1,
            }}
            key={stat.label}
            className="panel p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-2 rounded-lg text-white ${stat.color}`}
              >
                {stat.icon}
              </div>

              <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded">
                +12%
              </span>
            </div>

            <div className="text-2xl font-bold text-primary">
              {stat.value}
            </div>

            <div className="text-gray-400 text-sm font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">
              Aktivitas Terbaru
            </h2>

            <button className="text-accent text-sm font-bold hover:underline">
              Lihat Semua
            </button>
          </div>

          <div className="panel overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Pelapor
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Judul
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">
                      Aksi
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border">
                  {recentReports.map((report) => (
                    <tr
                      key={report.id}
                      className="hover:bg-surface transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-xs uppercase">
                            {report.title.charAt(0)}
                          </div>

                          <span className="text-sm font-medium text-primary">
                            Anonymous
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-primary line-clamp-1">
                          {report.title}
                        </p>

                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                          <MapPin className="w-3 h-3" />

                          {report.location}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <StatusBadge status={report.status} />
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() =>
                            router.push(
                              `/admin/reports/${report.id}`
                            )
                          }
                          className="p-2 hover:bg-accent hover:text-white rounded-lg transition-all text-gray-400"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary">
            Bantuan & Tip
          </h2>

          <div className="panel bg-primary p-8 text-white">
            <h3 className="text-lg font-bold mb-2">
              Respon Cepat
            </h3>

            <p className="text-white/70 text-sm font-light mb-6">
              Jangan biarkan laporan menunggu
              lebih dari 24 jam untuk
              meningkatkan kepuasan publik.
            </p>

            <button className="w-full py-3 bg-accent rounded-xl font-bold text-sm shadow-lg shadow-accent/20">
              Panduan Admin
            </button>
          </div>

          <div className="panel p-6 border-dashed">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-secondary" />

              <div>
                <h4 className="font-bold text-primary text-sm">
                  Tim Lapangan
                </h4>

                <p className="text-xs text-gray-400">
                  8 Anggota Aktif
                </p>
              </div>
            </div>

            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold"
                >
                  U{i}
                </div>
              ))}

              <div className="w-8 h-8 rounded-full border-2 border-white bg-accent text-white flex items-center justify-center text-[10px] font-bold">
                +3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

