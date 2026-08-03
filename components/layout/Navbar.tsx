'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sayfa içi bölümlere tam uyumlu güncel navigasyon linkleri
  const navLinks: NavLink[] = [
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'Projeler', href: '#projeler' },
    { name: 'Çözümlerimiz', href: '#cozumler' },
    { name: 'Teknolojiler', href: '#teknolojiler' },
    { name: 'Insights', href: '#insights' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-xl shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            Z
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              ZORA<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </span>
            <span className="text-[10px] tracking-widest font-semibold text-slate-500 dark:text-slate-400 uppercase -mt-1">
              Yazılım
            </span>
          </div>
        </a>

        {/* MASAÜSTÜ MENÜ LİNKLERİ */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 dark:after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* AKSİYON BUTONU */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#teklif"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 transition-all"
          >
            Teklif Alın
          </a>
        </div>

        {/* MOBİL MENÜ BUTONU */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ PANOLU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <a
              href="#teklif"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 text-sm font-semibold text-white bg-indigo-600 rounded-xl shadow-md"
            >
              Teklif Alın
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;