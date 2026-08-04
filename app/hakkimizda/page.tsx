'use client';

import React from 'react';
import { Target, Cpu, ShieldCheck, Zap, FileText, ShieldAlert, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const principles = [
  {
    icon: Cpu,
    title: "İleri Teknoloji",
    description: "LLM'ler, mikrohizmetler ve modern JS ekosisteminin en güncel araçlarını kullanırız.",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Target,
    title: "Ölçeklenebilirlik",
    description: "İşiniz büyüdükçe tıkanmayan, esnek ve modüler veritabanı/backend mimarileri.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: ShieldCheck,
    title: "Temiz Kod & Güvenlik",
    description: "Güvenlik standartlarına uygun, bakımı kolay ve dokümante edilmiş kod altyapısı.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Zap,
    title: "Yüksek Hız",
    description: "SEO ve kullanıcı deneyimi için optimize edilmiş ultra hızlı sayfa yüklenmeleri.",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
];

const guarantees = [
  {
    icon: FileText,
    title: "Gizlilik Sözleşmesi (NDA)",
    description: "İş fikriniz, kaynak kodlarınız ve kurum içi verileriniz henüz proje başlamadan önce imzalanan NDA ile tamamen koruma altına alınır.",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Code,
    title: "%100 Kod Mülkiyeti",
    description: "Geliştirilen tüm repository'ler, veritabanı mimarileri ve lisans hakları teslimat sonunda tamamen kurumunuza devredilir.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: ShieldAlert,
    title: "Sözleşmeli Destek (SLA)",
    description: "Canlıya alım sonrasında oluşabilecek teknik acil durumlara müdahale süreleri sözleşme ile garanti altına alınır.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* VİZYON & YAKLAŞIM SECTION */}
      <section className="py-24 relative border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block">
                Vizyon & Yaklaşım
              </span>
              
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Geleceğin Yazılımlarını <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                  AI Odaklı Mimarilerle
                </span> İnşa Ediyoruz
              </h1>

              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Zora Yazılım; modern web teknolojileri, otonom yapay zeka ajanları (Multi-Agent Systems) ve ölçeklenebilir backend altyapılarını bir araya getiren bir teknoloji şirketidir.
              </p>

              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Geleneksel yazılım yaklaşımlarının ötesine geçerek; işletmelerin iş süreçlerini otomatikleştiren, yüksek trafik altında kesintisiz çalışan ve sürdürülebilir kod standartlarına sahip mimariler tasarlıyoruz.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
                >
                  <h4 className="text-2xl font-black text-indigo-600 dark:text-indigo-400">%99.9</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sistem Erişilebilirliği & Performans</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
                >
                  <h4 className="text-2xl font-black text-purple-600 dark:text-purple-400">AI-First</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Otonom Ajan Entegrasyonu</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-indigo-500/40 space-y-3 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* TAAHHÜTLER & GÜVENCELER SECTION */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
              Şeffaflık & Güven
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Kurumsal Taahhütlerimiz
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm md:text-base">
              İş ortaklarımıza sunduğumuz hukuki, teknik ve operasyonel güvenceler.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 space-y-4 hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}