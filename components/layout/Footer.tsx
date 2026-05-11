import React from 'react'

const footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-8" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">L</div>
                            <span className="text-white text-xl font-bold">LaporAja</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm">Layanan integrasi pengaduan masyarakat untuk infrastruktur publik yang lebih inklusif dan berkelanjutan di seluruh Indonesia.</p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest">Perusahaan</h3>
                        <ul className="text-sm space-y-4 font-medium">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Career</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest">Support</h3>
                        <ul className="text-sm space-y-4 font-medium">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Kontak</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Pusat Bantuan</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <p>&copy; 2026 LaporAja Platform. All Rights Reserved.</p>
                    <div className="flex gap-8 items-center">
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer
