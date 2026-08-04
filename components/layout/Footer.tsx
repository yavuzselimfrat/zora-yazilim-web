'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100/80 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-base shadow-sm">
            Z
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            ZORA<span className="text-indigo-600 dark:text-indigo-400">.</span> YAZILIM
          </span>
        </Link>

        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
          © {new Date().getFullYear()} Zora Yazılım. Tüm hakları saklıdır.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-600 dark:text-slate-400 font-medium">
          <Link href="/hakkimizda" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Hakkımızda</Link>
          <Link href="/hizmetler" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Hizmetler</Link>
          <Link href="/projeler" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projeler</Link>
          <Link href="/insights" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Insights</Link>
          <Link href="/iletisim" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">İletişim</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;