'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100/80 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LOGO VE MARKA */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-base shadow-sm">
            Z
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            ZORA<span className="text-indigo-600 dark:text-indigo-400">.</span> YAZILIM
          </span>
        </div>

        {/* TELİF HAKKI */}
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
          © {new Date().getFullYear()} Zora Yazılım. Tüm hakları saklıdır.
        </p>

        {/* LİNK GRUBU */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-600 dark:text-slate-400 font-medium">
          <a href="#hakkimizda" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Hakkımızda</a>
          <a href="#projeler" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projeler</a>
          <a href="#cozumler" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Çözümlerimiz</a>
          <a href="#teknolojiler" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Teknolojiler</a>
          <a href="#insights" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Insights</a>
          <a href="#iletisim" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">İletişim</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;