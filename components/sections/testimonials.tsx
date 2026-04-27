import { ArrowRight, CircleCheck, Quote, Star } from 'lucide-react'
import React from 'react'

const testimonials = () => {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-12" data-aos="fade-right">
                    <div className="space-y-6">
                        <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] block">Dampak Nyata</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight">Suara Warga</h2>
                        <p className="text-slate-300 max-w-md text-lg leading-relaxed">Keberhasilan LaporAja tidak hanya diukur dari jumlah laporan, tetapi dari senyum warga yang merasakan perubahan langsung.</p>
                    </div>

                    {/* Large Quote Car */}
                    <div data-aos="zoom-in-up">
                        <div className="bg-white text-slate-900 p-12 rounded-[2.5rem] rounded-tr-none shadow-2xl relative mt-16 hover:shadow-xl hover:scale-110 transition-all duration-500">
                            <Quote className="w-16 h-16 text-slate-100 absolute -top-8 -left-2 -z-0" />
                            <blockquote className="relative z-10 space-y-6">
                                <p className="text-2xl font-bold leading-relaxed italic">"Kota kami jadi lebih hidup semenjak semua orang bisa berparticipasi dengan mudah."</p>
                                <footer className="text-slate-500 font-semibold">— Walikota Inspiratif</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 md:pt-16" data-aos="fade-left">
                    {/* Article  */}
                    <article className="bg-white text-slate-900 p-10 rounded-[2.5rem] rounded-bl-none shadow-xl space-y-6 transition-transform hover:-translate-y-2" aria-labelledby="testimonial-1">
    
                        <h3 id="testimonial-1" className="sr-only">Testimoni Stevandean</h3>

                        <div className="flex gap-1" role="img" aria-label="5 dari 5 bintang">
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                        </div>

                        <p className="text-slate-700 leading-relaxed font-medium">
                            "Awalnya saya skeptis, tapi ternyata laporan lampu jalan di depan rumah diperbaiki hanya dalam 3 hari. Sangat responsif!"
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <CircleCheck className='w-5 h-5' />
                                </div>
                                <span className="font-bold">Stevandean</span>
                            </div>
                            <button className="text-blue-600 font-bold text-sm flex items-center gap-2">
                                Baca Cerita 
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                    </article>
 
                    {/* Article  */}
                    <article className="bg-white text-slate-900 p-10 rounded-[2.5rem] rounded-bl-none shadow-xl space-y-6 transition-transform hover:-translate-y-2">

                        <h3 id="testimonial-2" className="sr-only">Testimoni Tri Handra</h3>

                        <div className="flex gap-1" role="img" aria-label="5 stars rating">
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                        </div>
                        <p className="text-slate-700 leading-relaxed font-medium">"Fitur unggah foto dan GPS-nya sangat membantu. Kita tidak perlu bingung menjelaskan lokasi secara detail, cukup satu klik."</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <CircleCheck className='w-5 h-5' />
                                </div>
                                <span className="font-bold">Tri Handra</span>
                            </div>
                            <button className="text-blue-600 font-bold text-sm flex items-center gap-2">Baca Cerita <ArrowRight className="w-4 h-4" /></button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default testimonials
