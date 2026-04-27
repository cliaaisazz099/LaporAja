import { ArrowRight, Camera, MapPin, Send } from 'lucide-react'
import React from 'react'

const features = () => {
    return (
      <section id="fitur"  className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-8 text-center" data-aos="fade-up">
                <header className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Fitur Unggulan Kami</h2>
                    <p className="text-slate-500 max-w-xl mx-auto">Didesain untuk memberikan kemudahan akses laporan bagi warga di seluruh wilayah.</p>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <article className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200" data-aos="zoom-in" data-aos-delay="100">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                         <Send />
                        </div>
                        <h3 className="font-extrabold text-xl mb-3">Form Aduan</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Laporkan masalah hanya dalam hitungan detik dengan formulir yang ringkas.</p>
                    </article>
                    <article className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200" data-aos="zoom-in" data-aos-delay="200">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                          <Camera />
                        </div>
                        <h3 className="font-extrabold text-xl mb-3">Kamera LIVE</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Lampirkan bukti foto otentik langsung melalui integrasi kamera aplikasi.</p>
                    </article>
                    <article className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200" data-aos="zoom-in" data-aos-delay="300">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                          <MapPin />
                        </div>
                        <h3 className="font-extrabold text-xl mb-3">Geo-Tagging</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Penentuan lokasi otomatis yang akurat menggunakan teknologi GPS terkini.</p>
                    </article>
                    <article className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200" data-aos="zoom-in" data-aos-delay="400">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                          <ArrowRight />
                        </div>
                        <h3 className="font-extrabold text-xl mb-3">Real Tracker</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Dapatkan notifikasi progres perbaikan langsung ke perangkat Anda.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default features
