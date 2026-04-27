import { CircleCheck } from 'lucide-react'
import React from 'react'

const solutions = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8" data-aos="fade-right">
                    <span className="inline-block py-1 px-4 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full uppercase tracking-widest">Solusi Cerdas</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Jembatan Efisien Antara Warga dan Pemerintah</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">LaporAja menyederhanakan komunikasi publik. Kami menyediakan platform dimana setiap laporan divalidasi dan diteruskan secara otomatis ke instansi terkait.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 font-semibold bg-white p-4 rounded-xl border border-slate-200 shadow-sm" data-aos="fade-up" data-aos-delay="100">
                            <CircleCheck className="text-blue-600" />
                            <span>Transparansi Penuh</span>
                        </div>
                        <div className="flex items-center gap-3 font-semibold bg-white p-4 rounded-xl border border-slate-200 shadow-sm" data-aos="fade-up" data-aos-delay="200">
                            <CircleCheck className="text-blue-600" />
                            <span>Otomatisasi Disposisi</span>
                        </div>
                        <div className="flex items-center gap-3 font-semibold bg-white p-4 rounded-xl border border-slate-200 shadow-sm" data-aos="fade-up" data-aos-delay="300">
                            <CircleCheck className="text-blue-600" />
                            <span>Real-time Tracker</span>
                        </div>
                        <div className="flex items-center gap-3 font-semibold bg-white p-4 rounded-xl border border-slate-200 shadow-sm" data-aos="fade-up" data-aos-delay="400">
                            <CircleCheck className="text-blue-600" />
                            <span>Verifikasi GPS</span>
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:flex" data-aos="fade-left">
                    <div className="absolute inset-0 bg-blue-600/5 rounded-[2.5rem] blur-2xl -z-10 translate-x-4 translate-y-4"></div>
                    <img src="/images/city.jpg" alt="Kota" className="rounded-3xl shadow-2xl border border-slate-200 hover:scale-[1.02] transition-transform duration-500" />
                </div>
            </div>
        </section>
    )
}

export default solutions
