'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Hizmetler', href: '/hizmetler' },
    { name: 'Projeler', href: '/projeler' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-foreground/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-dawn flex items-center justify-center text-white font-display font-bold text-xl shadow-md shadow-dawn-700/20 group-hover:scale-105 transition-transform duration-200">
            Z
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-semibold tracking-tight text-foreground">
              ZORA<span className="text-dawn-500">.</span>
            </span>
            <span className="text-[10px] tracking-widest font-semibold text-foreground/50 uppercase -mt-1">
              Yazılım
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-dawn-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/iletisim"
            onClick={(e) => handleNavClick(e, '/iletisim')}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-dawn rounded-lg shadow-md shadow-dawn-700/20 hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200"
          >
            Proje Başlatın
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground/80"
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-foreground/10 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, link.href);
              }}
              className="block text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-foreground/10">
            <Link
              href="/iletisim"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, '/iletisim');
              }}
              className="block w-full text-center py-3 text-sm font-semibold text-white bg-dawn rounded-lg shadow-md"
            >
              Proje Başlatın
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
