'use client';

import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Sparkles, Mail, X, Clock, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 'multi-agent-systems',
    title: 'Multi-Agent Sistemler ile İş Süreçlerinde Otonom Dönem',
    category: 'Yapay Zeka',
    date: 'Ağustos 2026',
    readTime: '5 dk okuma',
    summary: 'CrewAI ve LangChain kullanarak büyük dil modellerini tek bir amaca hizmet eden otonom ajan ekiplerine dönüştürmenin yolları ve mimari detaylar.',
    content: `
      <p>Geleneksel yapay zeka entegrasyonları tek bir istem (prompt) ve yanıt zincirine dayanırken, Multi-Agent (Çoklu Ajan) mimarileri belirli roller üstlenen otonom yapılar sunar.</p>
      
      <h3>1. Ajan Rollerinin Tanımlanması</h3>
      <p>CrewAI altyapısında her bir ajan için spesifik bir uzmanlık alanı (Role), hedef (Goal) ve arka plan hikayesi (Backstory) kurgulanır. Örneğin; bir Araştırmacı Ajan veriyi toplarken, Analist Ajan veriyi anlamlandırır.</p>

      <h3>2. LangChain ile Bellek ve Araç Entegrasyonu</h3>
      <p>Ajanların karar alabilmesi için vektör veritabanları (Pinecone, ChromaDB) ve harici API araçları ile zenginleştirilmiş bellek mekanizmaları kurulur.</p>

      <h3>3. B2B İş Süreçlerinde Sonuçlar</h3>
      <p>Bu mimari sayesinde müşteri hizmetleri, raporlama ve veri analiz süreçleri insan müdahalesine ihtiyaç duymadan %90'a varan zaman tasarrufu ile tamamlanır.</p>
    `,
    featured: true,
  },
  {
    id: 'backend-architecture',
    title: 'Yüksek Trafikli SaaS Uygulamalarında Backend Mimari Stratejileri',
    category: 'Sistem Mimarisi',
    date: 'Temmuz 2026',
    readTime: '7 dk okuma',
    summary: 'Node.js ve veritabanı katmanlarında mikrohizmet yaklaşımı ile darboğazları engelleme teknikleri.',
    content: `
      <p>Yüksek anlık trafik alan sistemlerde en büyük darboğaz veritabanı bağlantıları ve eşzamanlı I/O işlemleridir.</p>

      <h3>1. Redis Caching Katmanı</h3>
      <p>Sık sorgulanan verileri ana veritabanına girmeden Redis in-memory cache üzerinden <20ms sürelerde sunmak sistem yükünü %70 azaltır.</p>

      <h3>2. Mikrohizmet Ayırımı</h3>
      <p>Monolitik yapıları kimlik doğrulama, ödeme ve bildirim gibi bağımsız mikrohizmet servislerine bölerek yatay ölçeklenebilirlik (Horizontal Scaling) sağlıyoruz.</p>
    `,
  },
  {
    id: 'nextjs-seo-performance',
    title: 'Next.js 14 ve Tailwind CSS ile Maksimum SEO ve Performance Optimizasyonu',
    category: 'Web Teknolojileri',
    date: 'Haziran 2026',
    readTime: '4 dk okuma',
    summary: 'Google Web Vitals skorlarını %100’e ulaştırmak için uygulanması gereken modern frontend mimarisi.',
    content: `
      <p>Google sıralama kriterlerinde en kritik faktörlerden biri sayfa yüklenme hızı (LCP) ve düzen kaymalarıdır (CLS).</p>

      <h3>Server Components ve Minimal JS Bundle</h3>
      <p>Next.js 14 App Router mimarisi sayesinde JavaScript yükünü sunucu tarafında işleyip istemciye sadece ihtiyaç duyduğu bileşenleri gönderiyoruz.</p>
    `,
  },
  {
    id: 'llm-data-security',
    title: 'LLM Veri Güvenliği: On-Premise vs Cloud Dağıtım Modelleri',
    category: 'Yapay Zeka',
    date: 'Mayıs 2026',
    readTime: '6 dk okuma',
    summary: 'Hassas kurumsal verileri yapay zeka modellerine beslerken dikkat edilmesi gereken KVKK ve GDPR standartları.',
    content: `
      <p>Kurumsal şirketlerin yapay zeka dönüşümündeki en büyük çekincesi veri mahremiyetidir.</p>

      <h3>On-Premise (Yerel) Kurulum</h3>
      <p>Açık kaynaklı modellerin (Llama, Mistral) kurumun kendi sunucularında çalıştırılması, verilerin dışarıya çıkmasını tamamen engeller.</p>
    `,
  },
];

const categories = ['Tümü', 'Yapay Zeka', 'Sistem Mimarisi', 'Web Teknolojileri'];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles = selectedCategory === 'Tümü'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  const featuredArticle = articles.find(a => a.featured);

  return (
    <main className="pt-28 pb-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* ÜST BAŞLIK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block">
            Mühendislik Blogu
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Teknoloji & Mimariler Üzerine <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Derinlemesine Bakış
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            Yapay zeka ajanları, mikrohizmetler ve modern web ekosistemindeki son teknik tecrübelerimiz.
          </p>
        </motion.div>

        {/* ÖNE ÇIKAN MAKALE BANNER'I */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-900/10 via-slate-900/5 to-purple-900/10 dark:from-indigo-950/40 dark:via-slate-900/60 dark:to-purple-950/40 border border-indigo-500/20 relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center relative z-10">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 uppercase tracking-wider">
                    Öne Çıkan Yazı
                  </span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {featuredArticle.summary}
                </p>
              </div>

              <div className="w-full md:w-auto">
                <button
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2 group-hover:scale-105 transition-all"
                >
                  <span>Makaleyi Oku</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* KATEGORİ FİLTRELERİ */}
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-6">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MAKALELER GRİDİ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveArticle(art)}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between shadow-sm group cursor-pointer"
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
            </motion.div>
          ))}
        </div>

        {/* BÜLTEN KUTUSU */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-indigo-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Teknik Bültene Abone Olun</h3>
            <p className="text-xs md:text-sm text-indigo-100">
              Yapay zeka mimarileri, sistem optimizasyonu ve yazılım makalelerimizi ayda bir kez kutunuza gönderelim. Spam yok.
            </p>
          </div>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="E-posta adresinizi yazın..."
              className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-200 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-bold text-sm hover:bg-indigo-50 transition-colors whitespace-nowrap">
              Abone Ol
            </button>
          </div>
        </motion.div>

      </div>

      {/* 🚀 MAKALEYİ OKU POP-UP (MODAL) */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 sm:p-10">
            
            {/* SİYAH ARKA PLAN OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* MODAL İÇERİK KUTUSU */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl z-10 text-slate-900 dark:text-slate-100"
            >
              {/* KAPATMA BUTONU */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* ÜST BİLGİLER */}
              <div className="space-y-4 pr-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 uppercase">
                    {activeArticle.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" /> {activeArticle.date}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" /> {activeArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                  {activeArticle.title}
                </h2>
              </div>

              {/* ÇİZGİ */}
              <div className="my-6 border-b border-slate-200 dark:border-slate-800" />

              {/* METİN İÇERİĞİ */}
              <div
                className="prose dark:prose-invert max-w-none text-sm md:text-base text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
              />

              {/* ALT KAPATMA AKSİYONU */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Kapat
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}