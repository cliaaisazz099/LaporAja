'use client';

import { motion } from 'motion/react';
import { 
  BarChart3, 
  FileText, 
  Settings, 
  LogOut, 
  ShieldCheck,
  Bell,
  Search,
  ChevronRight,
  Menu
} from 'lucide-react';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { logoutAdmin } from '@/app/actions/auth/logout';

interface AdminLayoutProps {
  children: React.ReactNode;
  adminName?: string | null;
}

export default function AdminLayout({ children, adminName }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { id: '/admin', label: 'Dashboard', icon: <BarChart3 className="w-5 h-5" /> },
    { id: '/admin/reports', label: 'Laporan', icon: <FileText className="w-5 h-5" /> },
  ];

  const initials = adminName
    ? adminName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : 'AD';

  const handleLogout = async () => {
    await logoutAdmin();

    router.replace('/admin/auth');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar */}
      <aside className={cn(
        "bg-primary text-white h-screen sticky top-0 transition-all duration-300 z-50 overflow-hidden flex flex-col",
        sidebarOpen ? "w-72" : "w-0 md:w-20"
      )}>
        {/* Logo Section */}
        <div className="p-8 pb-12 flex items-center gap-4">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
             <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          {sidebarOpen && (
            <span className="font-bold tracking-tighter text-xl truncate">
              ADUANKITA ADMIN
            </span>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(item.id)}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-xl transition-all group whitespace-nowrap",
                pathname === item.id 
                  ? "bg-accent text-white shadow-xl shadow-accent/20" 
                  : "text-white/50 hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="shrink-0">{item.icon}</div>
              {sidebarOpen && (
                <span className="font-bold text-sm tracking-widest uppercase">
                  {item.label}
                </span>
              )}
              {sidebarOpen && pathname === item.id && (
                <ChevronRight className="ml-auto w-4 h-4" />
              )}
            </button>
          ))}
        </nav>

        {/* Footer Sidebar */}
        <div className="p-4 mt-auto border-t border-white/10 space-y-2">
          <button className="w-full flex items-center gap-4 p-4 rounded-xl text-white/50 hover:bg-white/5 transition-all whitespace-nowrap">
            <Settings className="w-5 h-5 shrink-0" />
            {sidebarOpen && (
              <span className="font-bold text-sm tracking-widest uppercase">
                Setelan
              </span>
            )}
          </button>

          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-red-400 hover:bg-red-400/10 transition-all whitespace-nowrap"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {sidebarOpen && (
              <span className="font-bold text-sm tracking-widest uppercase">
                Keluar
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-border h-20 sticky top-0 z-40 flex items-center px-8 justify-between">
          <div className="flex items-center gap-4">
             <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-surface rounded-lg transition-colors"
              >
               <Menu className="w-6 h-6 text-primary" />
             </button>

             <div className="hidden lg:flex items-center gap-3 bg-surface border border-border px-4 py-2 rounded-xl group focus-within:ring-1 focus-within:ring-accent transition-all">
                <Search className="w-4 h-4 text-gray-400 group-focus-within:text-accent" />
                <input 
                  type="text" 
                  placeholder="Cari data cepat..." 
                  className="bg-transparent border-none outline-none text-sm font-medium w-64" 
                />
             </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>

            <div className="h-8 w-px bg-border mx-2" />

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-primary leading-none truncate max-w-37.5">
                  {adminName || 'Super Admin'}
                </div>
                <div className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1">
                  Full Access
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm border-2 border-surface shadow-sm">
                {initials}
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Outlet */}
        <main className="p-8 md:p-12 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}