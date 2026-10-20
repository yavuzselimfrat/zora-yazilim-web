'use client';

import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AmbientGlow from '@/components/sections/AmbientGlow';
import { articles, categories } from '@/data/articles';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async () => {
    if (subscribeStatus === 'loading') return;
    const trimmed = subscribeEmail.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setSubscribeStatus('error');
      return;
    }

    setSubscribeStatus('loading');
    try {
      const res = await fetch('/api/abone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error('request_failed');
      setSubscribeStatus('success');
      setSubscribeEmail('');
    } catch {
      setSubscribeStatus('error');
    }
  };

  const filteredArticles = selectedCategory === 'Tümü'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const featuredArticle = articles.find((a) => a.featured);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="pt-40 pb-24 md:pt-48">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-16">
          {/* ÜST BAŞLIK */}
          <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Blog' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
              Blog
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/55 leading-relaxed">
              Yazılım ve yapay zeka üzerine, anlaşılır dilde yazılar.
            </p>
          </motion.div>

          {/* ÖNE ÇIKAN MAKALE */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-foreground/10 p-8 md:p-12"
            >
              <AmbientGlow />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between md:items-center">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/50">
                    <span className="px-3 py-1 rounded-full border border-dawn-500/30 text-dawn-600 dark:text-dawn-300 uppercase tracking-wider">
                      Öne çıkan yazı
                    </span>
                    <span>{featuredArticle.date}</span>
                    <span>·</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-sm md:text-base text-foreground/55 leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>
                <div className="shrink-0">
                  <Link
                    href={`/blog/${featuredArticle.id}`}
                    className="w-full md:w-auto px-6 py-3.5 rounded-lg bg-dawn text-white font-semibold text-sm shadow-lg shadow-dawn-700/20 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.97] transition-[filter,transform] duration-200"
                  >
                    Makaleyi Oku <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* KATEGORİ FİLTRELERİ */}
          <div className="flex flex-wrap items-center gap-3 border-b border-foreground/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 ${
                  selectedCategory === cat
                    ? 'bg-dawn text-white'
                    : 'border border-foreground/15 text-foreground/60 hover:border-foreground/30 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* MAKALELER GRİDİ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/blog/${art.id}`}
                  className="p-7 rounded-2xl border border-foreground/10 hover:border-dawn-500/40 transition-colors duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-foreground/40 mb-4">
                      <span className="font-semibold text-dawn-600 dark:text-dawn-300 uppercase tracking-wide">
                        {art.category}
                      </span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-dawn-600 dark:group-hover:text-dawn-300 transition-colors duration-200">
                      {art.title}
                    </h3>
                    <p className="text-sm text-foreground/55 leading-relaxed mb-6">{art.summary}</p>
                  </div>
                  <div className="pt-4 border-t border-foreground/10 flex items-center justify-between text-xs font-semibold text-foreground/70 group-hover:text-dawn-600 dark:group-hover:text-dawn-300 transition-colors duration-200">
                    <span>Okumaya devam et</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* BÜLTEN KUTUSU */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-foreground/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="max-w-md">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                Yeni yazılardan haberdar olun
              </h3>
              <p className="mt-2 text-sm text-foreground/55 leading-relaxed">
                Ayda bir, sadece yeni yazı yayınlandığında e-posta gönderiyoruz. Spam yok.
              </p>
            </div>
            <div className="w-full md:w-auto">
              {subscribeStatus === 'success' ? (
                <p className="text-sm font-semibold text-dawn-600 dark:text-dawn-300 md:min-w-[360px]">
                  Teşekkürler, aboneliğiniz alındı.
                </p>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row gap-3 md:min-w-[360px]">
                    <input
                      type="email"
                      value={subscribeEmail}
                      onChange={(e) => {
                        setSubscribeEmail(e.target.value);
                        if (subscribeStatus === 'error') setSubscribeStatus('idle');
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSubscribe();
                      }}
                      placeholder="E-posta adresiniz"
                      className="w-full px-4 py-3 rounded-lg border border-foreground/15 bg-transparent text-foreground placeholder-foreground/35 text-sm focus:outline-none focus:border-dawn-500/50 transition-colors duration-200"
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={subscribeStatus === 'loading'}
                      className="shrink-0 px-6 py-3 rounded-lg bg-dawn text-white font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-[filter,transform] duration-200 disabled:opacity-60"
                    >
                      {subscribeStatus === 'loading' ? 'Gönderiliyor...' : 'Abone Ol'}
                    </button>
                  </div>
                  {subscribeStatus === 'error' && (
                    <p className="mt-2 text-xs text-red-500">
                      Geçerli bir e-posta adresi girin ya da tekrar deneyin.
                    </p>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
