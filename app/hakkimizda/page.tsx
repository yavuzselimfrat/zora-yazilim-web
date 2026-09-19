'use client';

import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const values = [
  {
    n: '01',
    title: 'Mühendislik önce gelir',
    desc: 'Güzel görünen ama arkası boş sistemler kurmayız. Önce sağlam ve güvenilir çalışsın isteriz, görünüm sonra gelir.',
  },
  {
    n: '02',
    title: 'Ölçeğinize göre esneriz',
    desc: 'Küçük bir işletme de olsanız büyük bir kurum da, aynı özenle ve aynı ciddiyetle çalışırız.',
  },
  {
    n: '03',
    title: 'Söz verdiğimizin arkasında dururuz',
    desc: 'Kanıtlayamayacağımız rakamları kullanmayız. Ne söylüyorsak, teslim ederiz.',
  },
];

const guarantees = ['Gizlilik sözleşmesi', '%100 kod mülkiyeti', 'Garantili destek'];

const stats = [
  { value: '3+', label: 'Yıldır aktif geliştirme' },
  { value: '2', label: 'Tamamlanmış kurumsal proje' },
  { value: '1', label: 'Kendi ürettiğimiz SaaS ürün' },
];

const workedWith = ['Üri Otomotiv', 'Derka Teknik', 'Vetly'];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      {/* GİRİŞ — sakin, ortalanmış bir manifesto */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden border-b border-foreground/10">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[640px] h-[640px] rounded-full blur-[150px] opacity-70"
            style={{
              background:
                'radial-gradient(circle, color-mix(in srgb, var(--color-dawn-400) 16%, transparent) 0%, transparent 70%)',
            }}
          />
        </div>
        <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hakkımızda' }]} center />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="font-display font-semibold text-4xl md:text-6xl text-foreground leading-[1.15] tracking-tight"
          >
            Yazılım ve yapay zekayı aynı çatı altında buluşturan bir ekibiz.
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
            className="mt-8 mx-auto w-12 h-px bg-dawn-500"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE_OUT }}
            className="mt-8 text-base md:text-lg text-foreground/55 leading-relaxed max-w-xl mx-auto"
          >
            Küçük bir işletmenin ilk web sitesinden, büyük bir şirketin otonom sistemlerine kadar
            aynı özenle çalışırız.
          </motion.p>
        </div>
      </section>

      {/* HİKAYE + RAKAMLAR */}
      <section className="py-20 md:py-28 border-b border-foreground/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="md:col-span-3 space-y-4"
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Nereden geliyoruz
            </h2>
            <p className="text-base text-foreground/60 leading-relaxed">
              Zora Yazılım&rsquo;ı, bilgisayar mühendisliği kökenli ve imalat sektöründe
              donanım-yazılım geliştirme deneyimine sahip bir ekip kurdu. Sahada edindiğimiz
              &ldquo;önce sağlam çalışsın&rdquo; ilkesini bugün web ve yapay zeka
              projelerimize taşıyoruz.
            </p>
            <p className="text-base text-foreground/60 leading-relaxed">
              Üç yıldan uzun süredir kurumsal web sitelerinden kendi ürettiğimiz yazılımlara kadar
              farklı ölçeklerde projeler geliştiriyoruz.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
            className="md:col-span-2 grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-dawn-500">{s.value}</div>
                <div className="mt-1 text-xs md:text-sm text-foreground/50 leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEĞERLER — zikzak düzen, büyük soluk rakamlar */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-16 text-center"
          >
            Nasıl çalışırız
          </motion.h2>
          <div className="space-y-14 md:space-y-20">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
                className={`relative flex items-start gap-5 md:gap-10 ${
                  i % 2 === 1 ? 'md:flex-row-reverse text-right md:text-right' : 'text-left'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="font-display text-7xl md:text-8xl font-bold text-dawn-500/10 leading-none shrink-0 select-none"
                >
                  {v.n}
                </span>
                <div className={i % 2 === 1 ? 'md:flex md:flex-col md:items-end' : ''}>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-foreground/55 leading-relaxed max-w-md">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAMAMLADIĞIMIZ İŞLER */}
      <section className="py-4 md:py-8">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-widest text-foreground/40 font-semibold mb-6">
            Birlikte çalıştıklarımız
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-display text-lg font-medium text-foreground/60">
            {workedWith.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-dawn-600 dark:text-dawn-300 hover:underline underline-offset-4"
          >
            Projelerimize göz atın <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* GÜVENCELER — sade rozet satırı */}
      <section className="py-14 border-y border-foreground/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-widest text-foreground/40 font-semibold mb-6">
            Güvenceler
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {guarantees.map((g) => (
              <span
                key={g}
                className="px-4 py-2 rounded-full border border-foreground/15 text-sm text-foreground/70"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM ÇAĞRISI — sakin, çerçeveli kutu */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 md:p-10 rounded-2xl border border-foreground/10"
          >
            <div className="max-w-sm space-y-3">
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                Bizi tanıdınız, şimdi projenizi konuşalım
              </h2>
              <p className="text-sm text-foreground/50">
                <Link href="/hizmetler" className="font-semibold hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200">
                  Hizmetlerimize
                </Link>
                {' '}veya{' '}
                <Link href="/projeler" className="font-semibold hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200">
                  tamamladığımız projelere
                </Link>
                {' '}göz atabilirsiniz.
              </p>
            </div>
            <Link
              href="/iletisim"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-dawn rounded-lg shadow-lg shadow-dawn-700/20 active:scale-[0.97] hover:brightness-110 transition-[filter,transform] duration-200"
            >
              İletişime Geçin <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
