'use client';

import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Üri Otomotiv',
    category: 'Kurumsal Web & Endüstriyel Platform',
    description: 'Forklift lastik ve otomotiv sektöründe faaliyet gösteren firma için SEO altyapılı, yüksek performanslı web platformu ve arama konsolu entegrasyonu.',
    tech: ['Next.js', 'Tailwind CSS', 'Plesk', 'Google Console'],
    link: 'https://uriotomotiv.com',
  },
  {
    title: 'Derka Teknik',
    category: 'Makine & Endüstriyel Çözümler',
    description: 'Endüstriyel makine firması için modern arayüz tasarımı, dinamik harita entegrasyonu ve Linux cPanel altyapılı kurumsal dijitalleşme projesi.',
    tech: ['React', 'Node.js', 'cPanel', 'Maps API'],
    link: 'https://derkateknik.com',
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-20 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Saha Tecrübemiz
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tamamlanan Referans <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Başarı Hikayeleri
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {proj.title}
                </h2>

                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Canlı Proje</span>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>Siteyi Ziyaret Et</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}