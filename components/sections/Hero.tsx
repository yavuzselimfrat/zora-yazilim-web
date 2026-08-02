"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden px-6 transition-colors duration-300">

            {/* Sağ Üst Tema Değiştirici Buton */}
            <div className="absolute top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            {/* Arka Plan Glow / Şafak Efekti */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-orange-500/20 to-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center z-10 space-y-8 mt-12">
                {/* Rozet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 backdrop-blur-md shadow-sm"
                >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Boşnakça "Şafak" — Teknolojide Yeni Bir Devir</span>
                </motion.div>

                {/* Ana Başlık */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
                >
                    Ölçeklenebilir Mimariler & <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 dark:from-amber-400 dark:via-orange-500 dark:to-indigo-400">
            Yapay Zeka Çözümleri
          </span>
                </motion.h1>

                {/* Alt Metin */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed"
                >
                    Zora Yazılım; modern web platformları, otonom yapay zeka ajanları ve yüksek performanslı yazılım altyapıları ile işinizi geleceğe taşır.
                </motion.p>

                {/* Butonlar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-md">
                        <span>Proje Başlatın</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm">
                        <Code2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                        <span>Teknolojilerimiz</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}