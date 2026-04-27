import React from 'react'

const HowItWork = () => {
    return (
        <section id="carakerja" className="py-32 bg-white border-y border-slate-100 overflow-hidden">
            <div className="max-w-6xl mx-auto px-8 text-center">
                <header className="mb-24" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Cara Kerja LaporAja</h2>
                    <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </header>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-slate-200 -z-0"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10">
                        {/* Step 01 */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-16 h-16 bg-[#1D61FF] text-white rounded-[1.25rem] flex items-center justify-center text-xl font-bold shadow-[0_12px_24px_-8px_rgba(29,97,255,0.5)] transform transition-transform hover:scale-110 cursor-default">01</div>
                            <h3 className="font-bold text-2xl text-primary mt-10 mb-4">Buat Aduan</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">Isi laporan kerusakan infrastruktur yang Anda temukan di lapangan.</p>
                        </div>

                        {/* Step 02 */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-16 h-16 bg-[#1D61FF] text-white rounded-[1.25rem] flex items-center justify-center text-xl font-bold shadow-[0_12px_24px_-8px_rgba(29,97,255,0.5)] transform transition-transform hover:scale-110 cursor-default">02</div>
                            <h3 className="font-bold text-2xl text-primary mt-10 mb-4">Upload Bukti</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">Lampirkan foto lokasi dan biarkan sistem mendeteksi GPS secara otomatis.</p>
                        </div>

                        {/* Step 03 */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-16 h-16 bg-[#1D61FF] text-white rounded-[1.25rem] flex items-center justify-center text-xl font-bold shadow-[0_12px_24px_-8px_rgba(29,97,255,0.5)] transform transition-transform hover:scale-110 cursor-default">03</div>
                            <h3 className="font-bold text-2xl text-primary mt-10 mb-4">Verifikasi</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">Sistem AI kami akan memvalidasi laporan sebelum diteruskan ke dinas.</p>
                        </div>

                        {/* Step 04 */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
                            <div className="w-16 h-16 bg-[#1D61FF] text-white rounded-[1.25rem] flex items-center justify-center text-xl font-bold shadow-[0_12px_24px_-8px_rgba(29,97,255,0.5)] transform transition-transform hover:scale-110 cursor-default">04</div>
                            <h3 className="font-bold text-2xl text-primary mt-10 mb-4">Selesaikan</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">Pantau pengerjaan oleh petugas hingga status laporan berubah tuntas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork
