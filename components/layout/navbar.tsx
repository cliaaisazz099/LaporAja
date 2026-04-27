import React from 'react'

const navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 h-20 bg-white backdrop-blur-2xl">
            <nav className="max-w-6xl mx-auto px-8 h-full flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-2xl font-bold tracking-tight text-primary">LaporAja</span>
                </div>
                
                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
                    <li><a href="/" className="text-primary font-bold border-b-2 border-primary pb-1 transition-all">Beranda</a></li>
                    <li><a href="/report" className="text-slate-400 hover:text-primary transition-all">Reports</a></li>
                    <li><a href="/services" className="text-slate-400 hover:text-primary transition-all">services</a></li>
                    <li><a href="/about" className="text-slate-400 hover:text-primary transition-all">About Us</a></li>
                    <li><a href="/contact" className="text-slate-400 hover:text-primary transition-all">Contact</a></li>
                </ul>

                <button className="open-modal bg-primary text-white px-8 py-2.5 rounded-full font-bold shadow-lg shadow-blue-900/10 hover:bg-slate-900 transition-all hidden md:block">Mulai Lapor</button>

                {/* Mobile Toggle */}
                <button id="mobile-menu-toggle" className="md:hidden text-primary p-2" aria-label="Toggle Menu">
                    <i data-lucide="menu" id="menu-icon"></i>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div id="mobile-menu" className="hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 shadow-xl md:hidden">
                <ul className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-primary">
                    <li><a href="/" className="mobile-link">Beranda</a></li>
                    <li><a href="/report" className="mobile-link">Reports</a></li>
                    <li><a href="/services" className="mobile-link">services</a></li>
                    <li><a href="/about" className="mobile-link">About Us</a></li>
                    <li><a href="/contact" className="mobile-link">Contact</a></li>
                    <li className="pt-4">
                        <button className="open-modal w-full bg-primary text-white py-4 rounded-xl">Mulai Lapor</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default navbar
