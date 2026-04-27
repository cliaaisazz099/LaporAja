import { Bell, MapPin, TriangleAlert } from 'lucide-react'
import React from 'react'

const Problems = () => {
    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto px-8 text-center" data-aos="fade-up">
                <header className="mb-16">
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Masalah Umum</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Hambatan dalam Pelayanan Publik</h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <article data-aos="fade-up" data-aos-delay="100">
                        <div  className="bg-slate-50 p-10 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="bg-red-50 text-red-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-8">
                                <TriangleAlert />
                            </div>
                            <h3 className="font-bold text-xl mb-4">Jalan Rusak</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Lubang jalan yang membahayakan pengendara namun jarang mendapatkan perhatian cepat dari otoritas terkait.</p>
                        </div>
                    </article>
                    <article data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-slate-50 h-full p-10 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="bg-orange-50 text-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-8">
                                <MapPin />
                            </div>
                            <h3 className="font-bold text-xl mb-4">Fasilitas Umum</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Taman, trotoar, dan jembatan yang terabaikan mengurangi kualitas hidup serta mobilitas warga.</p>
                        </div>
                    </article>
                    <article data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-slate-50 h-full p-10 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="bg-yellow-50 text-yellow-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-8">
                                <Bell />
                            </div>
                            <h3 className="font-bold text-xl mb-4">Penerangan Jalan</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Lokasi gelap rawan kriminalitas dan kecelakaan akibat lampu jalan yang mati tak terpelihara.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Problems
