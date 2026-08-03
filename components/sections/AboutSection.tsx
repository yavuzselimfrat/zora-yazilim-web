'use client';

import React from 'react';
import { Target, Cpu, ShieldCheck, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="hakkimizda" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* SOL: VİZYON VE METİN */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block">
              Vizyon & Yaklaşım
            </span>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Geleceğin Yazılımlarını <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                AI Odaklı Mimarilerle
              </span> İnşa Ediyoruz
            </h2>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Zora Yazılım; modern web teknolojileri, otonom yapay zeka ajanları (Multi-Agent Systems) ve ölçeklenebilir backend altyapılarını bir araya getiren bir teknoloji şirketidir. 
            </p>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Geleneksel yazılım yaklaşımlarının ötesine geçerek; işletmelerin iş süreçlerini otomatikleştiren, yüksek trafik altında kesintisiz çalışan ve sürdürülebilir kod standartlarına sahip mimariler tasarlıyoruz.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-2xl font-black text-indigo-600 dark:text-indigo-400">%99.9</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sistem Erişilebilirliği & Performans</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-2xl font-black text-purple-600 dark:text-purple-400">AI-First</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Otonom Ajan Entegrasyonu</p>
              </div>
            </div>
          </div>

          {/* SAĞ: İLKELER KARTLARI */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">İleri Teknoloji</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                LLM'ler, mikrohizmetler ve modern JS ekosisteminin en güncel araçlarını kullanırız.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ölçeklenebilirlik</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                İşiniz büyüdükçe tıkanmayan, esnek ve modüler veritabanı/backend mimarileri.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Temiz Kod & Güvenlik</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Güvenlik standartlarına uygun, bakımı kolay ve dokümante edilmiş kod altyapısı.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Yüksek Hız</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                SEO ve kullanıcı deneyimi için optimize edilmiş ultra hızlı sayfa yüklenmeleri.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;