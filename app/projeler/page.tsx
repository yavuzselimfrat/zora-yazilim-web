'use client';

import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AmbientGlow from '@/components/sections/AmbientGlow';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const clientProjects = [
  {
    title: 'Üri Otomotiv',
    category: 'Kurumsal Web Sitesi',
    desc: 'Forklift lastiği ve otomotiv sektöründe faaliyet gösteren firma için kurumsal web sitesi. Arama motorlarında bulunabilirlik ve hızlı sayfa açılışı önceliğimizdi.',
    highlights: ['Hızlı yüklenen sayfalar', 'Arama motoru uyumlu yapı'],
    link: 'https://uriotomotiv.com',
  },
  {
    title: 'Derka Teknik',
    category: 'Kurumsal Web Sitesi',
    desc: 'Endüstriyel makine firması için modern bir kurumsal site. Harita entegrasyonu ile şube ve bayi konumlarını ziyaretçilere net şekilde gösterdik.',
    highlights: ['Harita ve konum entegrasyonu', 'Kolay güncellenebilir içerik'],
    link: 'https://derkateknik.com',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      {/* GİRİŞ */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Projeler' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]"
          >
            İhtiyaçtan doğan, <span className="text-dawn-600 dark:text-dawn-300">sahada çalışan</span> işler.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
            className="mt-6 text-lg md:text-xl text-foreground/55 leading-relaxed max-w-2xl"
          >
            Kurumsal web sitelerinden kendi ürettiğimiz yazılıma kadar, hayata geçirdiğimiz
            projelerden bazıları.
          </motion.p>
        </div>
      </section>

      {/* ÖNE ÇIKAN — Vetly */}
      <section className="py-4 md:py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="relative overflow-hidden rounded-3xl border border-foreground/10 p-8 md:p-14"
          >
            <AmbientGlow />
            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-dawn-600 dark:text-dawn-300 border border-dawn-500/30 rounded-full px-3 py-1 mb-6">
                Kendi ürünümüz
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                Vetly
              </h2>
              <p className="mt-2 text-sm md:text-base text-foreground/50 uppercase tracking-wide">
                Veteriner klinikleri için yönetim yazılımı
              </p>
              <p className="mt-6 text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl">
                Randevu takviminden hasta kayıtlarına, stok takibinden faturalandırmaya kadar bir
                veteriner kliniğinin ihtiyaç duyduğu her şeyi tek ekranda topluyoruz. Kendi
                ürettiğimiz ve geliştirmeye devam ettiğimiz bir yazılım.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {['Randevu ve hasta takibi', 'Stok ve faturalandırma', 'Yapay zeka destekli klinik araçları'].map(
                  (h) => (
                    <span key={h} className="text-sm text-foreground/60 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-dawn-500" aria-hidden="true" />
                      {h}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://vetly.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200"
              >
                vetly.com.tr <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DİĞER PROJELER */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-10"
          >
            Kurumsal projeler
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {clientProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE_OUT }}
                className="py-8 md:py-10 border-t border-foreground/10"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/40">{p.category}</p>
                <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm md:text-base text-foreground/55 leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-3 py-1.5 rounded-full border border-foreground/15 text-foreground/60"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200"
                >
                  Siteyi görüntüle <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM ÇAĞRISI — sade, çerçevesiz */}
      <section className="py-20 md:py-28 border-t border-foreground/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="max-w-3xl mx-auto px-6 text-left md:text-center space-y-6"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Sıradaki proje sizinki olsun
          </h2>
          <div className="pt-2 flex flex-col items-start md:items-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-dawn rounded-lg shadow-lg shadow-dawn-700/20 active:scale-[0.97] hover:brightness-110 transition-[filter,transform] duration-200"
            >
              Projenizi Anlatın <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/hizmetler"
              className="text-sm font-semibold text-foreground/50 hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200"
            >
              Hizmetlerimizi inceleyin
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
