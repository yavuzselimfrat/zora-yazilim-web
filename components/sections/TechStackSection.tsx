'use client';

import React from 'react';

interface TechCategory {
  category: string;
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    category: 'Yapay Zeka & Ajan Sistemleri',
    items: ['LangChain', 'CrewAI', 'OpenAI API', 'LLM Entegrasyonları', 'Multi-Agent Systems'],
  },
  {
    category: 'Full-Stack Web Geliştirme',
    items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
  },
  {
    category: 'Mimari & Bulut Altyapısı',
    items: ['Mikrohizmetler', 'REST API & GraphQL', 'Docker', 'Plesk / cPanel', 'Linux Sunucu Yönetimi'],
  },
];

const TechStackSection: React.FC = () => {
  return (
    <section id="urunler" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/20 border-y border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* BAŞLIK */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Teknolojilerimiz
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Güçlü ve Modern <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Teknoloji Ekosistemi
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Projelerimizin performanslı, güvenli ve ölçeklenebilir olması için endüstri standardı en güncel araçları kullanıyoruz.
          </p>
        </div>

        {/* KATEGORİLER GRİDİ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((cat, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:border-indigo-500/50 transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-900/40"
                    >
                      {item}
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

export default TechStackSection;