'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AgentSandbox from './AgentSandbox';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    n: '01',
    title: 'Otonom AI Ajanları & LLM',
    desc: 'Kararlar alan, sizin yerinize harekete geçen yapay zeka sistemleri kuruyoruz — müşteri desteğinden stok takibine kadar, günlük işlerinizi otomatikleştirir.',
  },
  {
    n: '02',
    title: 'Ölçeklenebilir Backend Sistemleri',
    desc: 'Ziyaretçi sayınız artsa da yavaşlamayan, çökmeyen sistemler kurarız — işiniz büyüdükçe altyapınız da sorunsuz büyür.',
  },
  {
    n: '03',
    title: 'Özel Web Platformları',
    desc: 'Google\u2019da kolay bulunan, hızlı açılan ve kolayca güncelleyebileceğiniz kurumsal web siteleri tasarlarız.',
  },
];

/**
 * Kutulu ikon-kart grid'i yerine editoryal, numaralı bir liste — Process
 * bölümüyle aynı tipografik dil. Sağda tek gerçek görsel kanıtımız olan
 * ajan terminali duruyor; metin ile gösterimi yan yana koyup ayrı ayrı
 * benzer kart bloklarını çoğaltmak yerine birbirini tamamlıyorlar.
 */
const Services: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-10"
          >
            Ne inşa ediyoruz
          </motion.h2>

          <div>
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE_OUT }}
                className="group relative py-7 pl-5 -ml-5 border-t border-foreground/10 first:border-t-0 first:pt-0 cursor-default"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 ${i === 0 ? 'top-0' : 'top-7'} bottom-7 w-[2px] bg-dawn-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-out`}
                />
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-xl text-dawn-600 dark:text-dawn-300 font-semibold shrink-0 transition-colors duration-300 group-hover:text-dawn-500">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-foreground/55 leading-relaxed max-w-md">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
            className="mt-2 pt-6 border-t border-foreground/10 text-xs text-foreground/40"
          >
            Her proje gizlilik sözleşmesiyle yürütülür, kod mülkiyeti tamamen sizde kalır.
          </motion.p>

          <Link
            href="/hizmetler"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-dawn-600 dark:text-dawn-300 hover:gap-2.5 transition-all duration-200"
          >
            Tüm hizmetlerimizi inceleyin <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="lg:sticky lg:top-28"
        >
          <AgentSandbox />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
