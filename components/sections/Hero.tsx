'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Arka Plan Glow Efekti (Animated) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* ROZET */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Geleceğin Teknolojileri ile Güçlendirilmiş Mimariler</span>
          </motion.div>

          {/* ANA BAŞLIK */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Ölçeklenebilir Altyapılar & <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Otonom AI Ajanları
            </span>
          </motion.h1>

          {/* AÇIKLAMA PARAGRAFI */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Zora Yazılım; işletmeler için yüksek performanslı web platformları, otonom yapay zeka ajanları ve kesintisiz çalışan backend mimarileri inşa eder.
          </motion.p>

          {/* AKSİYON BUTONLARI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/iletisim"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Projenizi Başlatın</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projeler"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Terminal className="w-4 h-4 text-indigo-500" />
              <span>Projelerimizi İnceleyin</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;