'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground/[0.02] border-t border-foreground/10 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-dawn flex items-center justify-center text-white font-display font-bold text-base shadow-sm">
            Z
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            ZORA<span className="text-dawn-500">.</span> YAZILIM
          </span>
        </Link>

        <p className="text-xs text-foreground/50 text-center">
          © {new Date().getFullYear()} Zora Yazılım. Tüm hakları saklıdır.
        </p>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-foreground/60 font-medium">
            <Link href="/hakkimizda" onClick={(e) => handleNavClick(e, '/hakkimizda')} className="hover:text-dawn-500 transition-colors">Hakkımızda</Link>
            <Link href="/hizmetler" onClick={(e) => handleNavClick(e, '/hizmetler')} className="hover:text-dawn-500 transition-colors">Hizmetler</Link>
            <Link href="/projeler" onClick={(e) => handleNavClick(e, '/projeler')} className="hover:text-dawn-500 transition-colors">Projeler</Link>
            <Link href="/blog" onClick={(e) => handleNavClick(e, '/blog')} className="hover:text-dawn-500 transition-colors">Blog</Link>
            <Link href="/iletisim" onClick={(e) => handleNavClick(e, '/iletisim')} className="hover:text-dawn-500 transition-colors">İletişim</Link>
          </div>
          <Link href="/gizlilik-politikasi" onClick={(e) => handleNavClick(e, '/gizlilik-politikasi')} className="text-[11px] text-foreground/35 hover:text-dawn-500 transition-colors">
            Gizlilik Politikası
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
