'use client';

import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Server, Globe2, Search, Blocks, GitBranch, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import AmbientGlow from '@/components/sections/AmbientGlow';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    n: '01',
    icon: Bot,
    title: 'Otonom AI Ajanları',
    desc: 'Kararlar alan, sizin yerinize harekete geçen yapay zeka sistemleri kurarız. Müşteri sorularını yanıtlamaktan stok takibine kadar, tekrar eden işleri devralır.',
    note: 'Örnekler: müşteri desteği, randevu yönetimi, stok ve sipariş takibi.',
  },
  {
    n: '02',
    icon: Server,
    title: 'Ölçeklenebilir Backend Sistemleri',
    desc: 'Ziyaretçi ya da kullanıcı sayınız artsa da yavaşlamayan, çökmeyen sistemler kurarız. İşiniz büyüdükçe altyapınız da sorunsuz şekilde büyür.',
    note: 'Yoğun trafik dönemlerinde de kesintisiz çalışacak şekilde tasarlarız.',
  },
  {
    n: '03',
    icon: Globe2,
    title: 'Kurumsal Web Platformları',
    desc: 'Google’da kolay bulunan, hızlı açılan ve mobilde sorunsuz görünen web siteleri tasarlarız. Sonrasında içeriklerinizi kolayca güncelleyebilirsiniz.',
    note: 'Küçük bir işletmenin ilk web sitesinden, çok sayfalı kurumsal platformlara kadar.',
  },
];

const steps = [
  { n: '01', icon: Search, title: 'Keşif & Analiz', desc: 'İhtiyaçlarınızı, hedeflerinizi ve teknik kısıtları birlikte çıkarırız.' },
  { n: '02', icon: Blocks, title: 'Mimari & Prototip', desc: 'Sistemin nasıl çalışacağını önce prototip üzerinde netleştiririz.' },
  { n: '03', icon: GitBranch, title: 'Çevik Geliştirme', desc: 'Haftalık olarak sizinle paylaşarak, şeffaf şekilde geliştiririz.' },
  { n: '04', icon: Rocket, title: 'Canlıya Alım & İzleme', desc: 'Sitenizi ya da sisteminizi yayına alır, sonrasında da düzenli olarak takip etmeye devam ederiz.' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      {/* GİRİŞ */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hizmetler' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]"
          >
            İhtiyacınıza göre şekillenen{' '}
            <span className="text-dawn-600 dark:text-dawn-300">yazılım çözümleri</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
            className="mt-6 text-lg md:text-xl text-foreground/55 leading-relaxed max-w-2xl"
          >
            Küçük bir işletmenin ilk web sitesinden, büyük bir şirketin otonom yapay zeka
            sistemlerine kadar, ölçeğinize uygun çözümler sunarız.
          </motion.p>
        </div>
      </section>

      {/* HİZMETLER — büyük rakamlı satır bloklar */}
      <section className="py-20 md:py-28 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4"
          >
            Neler yapıyoruz
          </motion.h2>
          <div>
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE_OUT }}
                className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-12 items-start py-10 md:py-14 border-t border-foreground/10"
              >
                <span className="font-display text-5xl md:text-6xl font-bold text-dawn-600 dark:text-dawn-300 leading-none">
                  {s.n}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-dawn-500/10 text-dawn-600 dark:text-dawn-300 shrink-0">
                      <s.icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm md:text-base text-foreground/55 leading-relaxed max-w-2xl">{s.desc}</p>
                  <p className="mt-4 text-xs text-foreground/40 uppercase tracking-wide">{s.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SÜREÇ — dikey zaman çizelgesi */}
      <section className="py-20 border-y border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-14"
          >
            Süreç nasıl işliyor
          </motion.h2>

          <div className="relative pl-8 md:pl-10">
            <div className="absolute left-[3px] md:left-[4px] top-2 bottom-2 w-px bg-foreground/10" aria-hidden="true" />
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE_OUT }}
                className="relative pb-12 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[27px] md:-left-[31px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-dawn-500/10 border border-dawn-500/40 ring-4 ring-background"
                >
                  <step.icon className="w-3.5 h-3.5 text-dawn-600 dark:text-dawn-300" />
                </span>
                <span className="text-xs font-semibold text-dawn-600 dark:text-dawn-300">{step.n}</span>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground/55 leading-relaxed max-w-md">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM ÇAĞRISI */}
      <section className="relative py-20 overflow-hidden">
        <AmbientGlow />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-left md:text-center space-y-6"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Projenize en uygun çözümü birlikte belirleyelim
          </h2>
          <div className="pt-2 flex flex-col items-start md:items-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-dawn rounded-lg shadow-lg shadow-dawn-700/20 active:scale-[0.97] hover:brightness-110 transition-[filter,transform] duration-200"
            >
              Teklif Alın <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projeler"
              className="text-sm font-semibold text-foreground/50 hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200"
            >
              Tamamladığımız projelere göz atın
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
