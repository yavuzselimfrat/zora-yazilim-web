'use client';

import React from 'react';
import { Bot, Cpu, Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Mühendislik Gücümüz
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Geleceğin Dijital Sistemleri İçin <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Modern Altyapı
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* BENTO KART 1: AI & OTONOM AJANLAR (GENİŞ) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="md:col-span-2 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Multi-Agent & LLM Sistemleri
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                İş süreçlerinizi otomatikleştiren, kararlar alabilen ve karmaşık görevleri otonom şekilde yürüten özelleştirilmiş yapay zeka ajanları geliştiriyoruz.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-4 h-4" />
              <span>LangChain & CrewAI Entegrasyonları</span>
            </div>
          </motion.div>

          {/* BENTO KART 2: YÜKSEK PERFORMANS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Ölçeklenebilir Backend
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Mikrohizmet mimarileri ile yüksek trafik altında tıkanmayan Node.js altyapıları.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-xs font-semibold text-purple-600 dark:text-purple-400">
              Mikrohizmet & Bulut
            </div>
          </motion.div>

          {/* BENTO KART 3: MODERN FRONTEND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="md:col-span-3 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-pink-500/50 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Ultra Hızlı Web Platformları
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Next.js, React ve Tailwind CSS ile arama motorlarında üst sıralara çıkan, SEO odaklı ve milisaniyeler içinde yüklenen kullanıcı deneyimleri.
              </p>
            </div>
            <div className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap shadow-sm">
              Next.js & SEO Ready
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;