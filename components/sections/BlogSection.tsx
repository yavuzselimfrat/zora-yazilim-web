'use client';

import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface Article {
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
}

const articles: Article[] = [
  {
    title: 'Multi-Agent Sistemler ile İş Süreçlerinde Otonom Dönem',
    category: 'Yapay Zeka',
    date: 'Temmuz 2026',
    readTime: '5 dk okuma',
    summary: 'CrewAI ve LangChain kullanarak büyük dil modellerini tek bir amaca hizmet eden otonom ajan ekiplerine dönüştürmenin yolları.',
  },
  {
    title: 'Yüksek Trafikli SaaS Uygulamalarında Backend Mimari Stratejileri',
    category: 'Sistem Mimarisi',
    date: 'Haziran 2026',
    readTime: '7 dk okuma',
    summary: 'Node.js ve veritabanı katmanlarında mikrohizmet yaklaşımı ile darboğazları engelleme teknikleri.',
  },
  {
    title: 'Next.js 14 ve Tailwind CSS ile Maksimum SEO ve Performance Optimizasyonu',
    category: 'Web Teknolojileri',
    date: 'Mayıs 2026',
    readTime: '4 dk okuma',
    summary: 'Google Web Vitals skorlarını %100’e ulaştırmak için uygulanması gereken modern frontend mimarisi.',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section id="insights" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* BAŞLIK */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Teknik Bilgi & Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Teknoloji Dünyasından <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Güncel Yazılarımız
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Mühendislik ekibimizin yazılım mimarisi, yapay zeka ve sistem optimizasyonu üzerine paylaştığı teknik içerikler.
          </p>
        </div>

        {/* MAKALELER GRİDİ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <span>Okumaya Devam Et</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;