'use client';

import React from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  imageBg: string; // Görsel yer tutucu / arka plan gradyanı
  features: string[];
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Derka Teknik',
    category: 'Endüstriyel Kurumsal Web Platformu',
    description:
      'Makine ve teknik ekipman sektöründe faaliyet gösteren Derka Teknik için geliştirilmiş; Linux cPanel üzerinde yüksek performansla çalışan, dinamik Google Maps entegrasyonlu ve modern kurumsal platform.',
    imageBg: 'from-blue-600 to-indigo-900',
    features: ['Google Search Console & SEO Altyapısı', 'Dinamik Harita & İletişim Entegrasyonu', 'Mobil Uyumlu Modern UX/UI'],
    tags: ['Next.js', 'Tailwind CSS', 'cPanel Deployment', 'SEO Optimization'],
  },
  {
    title: 'Üri Otomotiv',
    category: 'Sektörel Web & SEO Sistemleri',
    description:
      'Forklift ve iş makinesi lastikleri alanında hizmet veren marka için sıfırdan kurgulanan; arama motoru görünürlüğü (SEO) optimize edilmiş ve Google dizin entegrasyonu tamamlanmış yüksek hızlı web platformu.',
    imageBg: 'from-amber-600 to-slate-900',
    features: ['Google Search Console Doğrulaması', 'Sitemap & Endeksleme Optimizasyonu', 'Sektörel Katalog & İletişim Modülü'],
    tags: ['React', 'SEO Architecture', 'Responsive Design', 'Web Vitals'],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projeler" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* BAŞLIK */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Başarı Hikayeleri
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Öne Çıkan <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Saha Projelerimiz
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Farklı sektörlerdeki müşterilerimiz için geliştirdiğimiz yüksek performanslı ve arama motoru odaklı dijital çözümler.
          </p>
        </div>

        {/* PROJE KARTLARI LISTESI */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 p-8 md:p-12 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* PROJE GÖRSEL / MOCKUP ALANI (SOL) */}
              <div className="lg:col-span-5 h-64 md:h-80 rounded-2xl relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageBg} opacity-90 group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                
                {/* Proje Başlık Kartı (Görsel İçinde) */}
                <div className="relative z-10 text-center">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-wider uppercase drop-shadow-md">
                    {project.title}
                  </span>
                  <p className="text-xs text-white/80 font-medium tracking-widest mt-2 uppercase">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* PROJE DETAYLARI (SAĞ) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* ÖNE ÇIKAN ÖZELLİKLER */}
                <div className="space-y-2 pt-2">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* TEKNOLOJİ ETİKETLERİ */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;