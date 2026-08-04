'use client';

import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Cpu, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { icon: Zap, value: "%99.9", label: "Uptime & Kararlılık", sub: "Kesintisiz altyapı garantisi", color: "text-indigo-600 dark:text-indigo-400" },
  { icon: Cpu, value: "<200ms", label: "API Yanıt Süresi", sub: "Maksimum backend performansı", color: "text-purple-600 dark:text-purple-400" },
  { icon: Code2, value: "%100", label: "Tip Güvenli Kod", sub: "TypeScript & Temiz mimari", color: "text-pink-600 dark:text-pink-400" },
  { icon: ShieldCheck, value: "Enterprise", label: "Güvenlik Standartları", sub: "NDA ve KVKK/GDPR uyumlu", color: "text-emerald-600 dark:text-emerald-400" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      <Hero />

      {/* 📊 METRİKLER & İSTATİSTİK BANDI (ANIMATED) */}
      <section className="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="space-y-1 cursor-default p-2 rounded-xl transition-all"
              >
                <div className={`flex items-center justify-center gap-2 ${item.color} mb-2`}>
                  <Icon className="w-5 h-5" />
                  <span className="text-3xl md:text-4xl font-extrabold">{item.value}</span>
                </div>
                <p className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">{item.label}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-500">{item.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      
      <BentoGrid />

      {/* İletişim Çağrısı (CTA) */}
      <section className="py-20 text-center relative z-10 border-t border-slate-200 dark:border-slate-800/80">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Ölçeklenebilir altyapılar ve otonom yapay zeka çözümleri için hemen teklif alın.
          </p>
          <div className="pt-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-500/25 active:scale-95 hover:scale-105 transition-all"
            >
              Proje Başlatın <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}