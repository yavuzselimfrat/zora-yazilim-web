'use client';

import React from 'react';
import { Bot, Cpu, Globe, ArrowRight, Search, Compass, Rocket } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Bot,
    title: 'Otonom AI Ajanları & LLM',
    description: 'İşletmenizin veri kaynaklarıyla entegre çalışan, müşteri destek, analiz ve karar alma süreçlerini otomatikleştiren Multi-Agent çözümleri.',
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
  {
    icon: Cpu,
    title: 'Ölçeklenebilir Backend Systems',
    description: 'Yüksek eşzamanlı kullanıcı trafiği altında tıkanmayan, mikrohizmet mimarisine sahip Node.js ve cloud veritabanı çözümleri.',
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
  {
    icon: Globe,
    title: 'Özel Web Platformları',
    description: 'SEO standartlarına uygun, Next.js ve Tailwind CSS altyapılı, milisaniyeler seviyesinde sayfa açılış hızına sahip kurumsal platformlar.',
    color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  },
];

const steps = [
  {
    number: "01",
    title: "Keşif & Teknik Analiz",
    description: "İş ihtiyaçlarınızı, darboğazlarınızı ve hedeflerinizi dinler; projenize özel mimari şemayı oluştururuz.",
    icon: Search,
  },
  {
    number: "02",
    title: "Mimari & Prototip Tasarımı",
    description: "Veritabanı modellerini, API uç noktalarını ve AI/LLM entegrasyon kanallarını ölçeklenebilir biçimde kurgularız.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Çevik (Agile) Geliştirme",
    description: "Haftalık sprintler halinde şeffaf kodlama süreci yürütür, sürekli entegrasyon (CI/CD) ile gelişimi test ettiririz.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Canlıya Alım & İzleme (SLA)",
    description: "Projenizi yüksek performanslı sunuculara canlıya alır, kesintisiz izleme ve bakım desteği sağlarız.",
    icon: Rocket,
  },
];

const techStack = [
  'React', 'Next.js 14', 'Node.js', 'TypeScript', 'Tailwind CSS',
  'Python', 'LangChain', 'CrewAI', 'PostgreSQL', 'Docker', 'Plesk', 'cPanel'
];

export default function ServicesPage() {
  return (
    <main className="pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* B2B HİZMETLERİMİZ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
              B2B Hizmetlerimiz
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              İşinizi Büyütecek <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                Yazılım Çözümleri
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv, index) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-2xl ${srv.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {srv.title}
                    </h3>

                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
                    >
                      <span>Detaylı Bilgi Alın</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* METODOLOJİ SÜRECİ */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
              Uçtan Uca Süreç
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Projenizi Nasıl Geliştiriyoruz?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 relative space-y-4 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-indigo-600/30 dark:text-indigo-400/30">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEKNOLOJİ YIĞINI */}
      <section className="py-16 bg-white dark:bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-8">
            Kullandığımız Modern Teknoloji Yığını
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}