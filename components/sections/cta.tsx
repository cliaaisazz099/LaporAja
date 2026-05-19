'use client'

import { useState } from "react"
import Link from "next/link"
import ReportModal from "../modal/ReportModal"

const Cta = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section id="kontak" className="py-24 px-8 max-w-6xl mx-auto">
                <div className="bg-[#002B5B] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl" data-aos="zoom-out">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Bersama Wujudkan Kota <br /> yang <span className="text-blue-400">Lebih Baik</span></h2>
                        <p className="text-blue-100/60 max-w-xl mx-auto mb-10 text-lg leading-relaxed">Platform aspirasi warga untuk akselerasi pembangunan secara transparan. Ambil tindakan sekarang.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => setOpen(true)} className="open-modal bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30">Mulai Lapor Sekarang</button>
                            <Link href="/contact">
                                <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">Hubungi Bantuan</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px]"></div>
                </div>
            </section>

            <ReportModal isOpen={isOpen} onClose={() => setOpen(false)} />  
        </>
    )
}

export default Cta
