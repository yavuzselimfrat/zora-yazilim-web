'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AmbientGlow from './AmbientGlow';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Editoryal bir "neden biz" arası durağı. PRODUCT.md'deki Positioning
 * bölümünden geliyor (uydurma iddia değil) — rakiplerin çoğu ya web
 * tasarımı ya da AI entegrasyonu sunarken ikisini birlikte, mühendislik
 * derinliğiyle sunma farkı. Tek bir italik serif vurgusu (font-accent),
 * sans-only bir sayfada nadir kullanılan bir "tasarlanmış" dokunuşu.
 * Arkada Hero'nun aurorasının sakin bir versiyonu — hareket sadece
 * hero'da kalmasın diye.
 */
const Positioning: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background transition-colors duration-300 overflow-hidden">
      <AmbientGlow />
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]"
        >
          Sadece bir <span className="font-accent italic font-normal text-dawn-600 dark:text-dawn-300">ajans</span> değil.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
          className="mt-6 text-lg md:text-xl text-foreground/55 leading-relaxed max-w-2xl"
        >
          Rakiplerin çoğu ya web tasarımı ya da yapay zeka çözümü sunar. Zora, ikisini
          bir arada sunan az sayıdaki firmadan biri — hem görünümünüzü hem arka
          plandaki sistemlerinizi biz kurarız.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
        >
          <Link
            href="/hakkimizda"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-dawn-600 dark:text-dawn-300 hover:gap-2.5 transition-all duration-200"
          >
            Ekibimizi ve çalışma şeklimizi tanıyın <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Positioning;
