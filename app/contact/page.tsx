'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <main className="bg-[#F8F9FA] pt-32 pb-24 px-6 md:px-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-primary leading-[1.1] mb-8">
            Hubungi Tim Kami <br className="hidden md:block" /> Untuk Bantuan.
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Punya pertanyaan mengenai sistem kami atau butuh bantuan dalam melaporkan aduan? Kami siap membantu Anda kapan saja.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="panel bg-white rounded-xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary leading-none">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-primary tracking-tight">Kirim Pesan</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Nama Lengkap</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-[#F8F9FA] border border-border px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Alamat Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-[#F8F9FA] border border-border px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Subjek Pesan</label>
              <select className="w-full bg-[#F8F9FA] border border-border px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary transition-all font-medium text-sm appearance-none cursor-pointer">
                <option>Bantuan Teknis</option>
                <option>Kemitraan</option>
                <option>Keluhan Platform</option>
                <option>Lainnya</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Pesan Anda</label>
              <textarea 
                required
                rows={5}
                placeholder="Tuliskan pesan Anda di sini..."
                className="w-full bg-[#F8F9FA] border border-border px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary transition-all font-medium text-sm resize-none"
              ></textarea>
            </div>

            <button 
              disabled={formState !== 'idle'}
              type="submit"
              className={cn(
                "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]",
                formState === 'success' ? "bg-emerald-500 text-white" : "bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20"
              )}
            >
              {formState === 'idle' && (
                <>
                  Kirim Sekarang
                  <Send className="w-4 h-4" />
                </>
              )}
              {formState === 'sending' && (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              {formState === 'success' && (
                <>
                  Pesan Terkirim
                  <ShieldCheck className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Info Cards */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="panel bg-white rounded-lg p-8 group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#F8F9FA]/50 border border-border rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-primary mb-2">Email Resmi</h4>
              <p className="text-gray-400 text-sm font-light">support@aduankita.id</p>
              <p className="text-gray-400 text-sm font-light">admin@aduankita.id</p>
            </div>

            <div className="panel bg-white rounded-lg p-8 group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#F8F9FA]/50 border border-border rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-primary mb-2">Call Center</h4>
              <p className="text-gray-400 text-sm font-light">+62 (21) 500-1234</p>
              <p className="text-gray-400 text-sm font-light">+62 812 3456 7890</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="panel p-8 md:p-12 bg-primary rounded-2xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 blur-3xl -mr-24 -mt-24 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-8 italic font-serif">Kantor Pusat</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-white/50 shrink-0" />
                  <div>
                    <p className="text-lg font-light leading-relaxed">
                      Menara Aura Tower, Lantai 42 <br />
                      Jl. Jenderal Sudirman Kav. 52-53 <br />
                      Jakarta Selatan, 12190
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-6 mt-6 grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/60">
                      <Clock className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Operational Hours</span>
                    </div>
                    <p className="text-sm font-medium">Senin - Jumat <br /> 09:00 - 18:00 WIB</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/60">
                      <Globe className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Global Network</span>
                    </div>
                    <p className="text-sm font-medium">Melayani 38 Provinsi <br /> di seluruh Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
