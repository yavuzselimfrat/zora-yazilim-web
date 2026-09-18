'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const steps = [
  {
    n: '01',
    title: 'Keşif & Analiz',
    desc: 'İhtiyaçlarınızı, veri kaynaklarınızı ve teknik kısıtları birlikte çıkarırız.',
  },
  {
    n: '02',
    title: 'Mimari & Prototip',
    desc: 'Sistemin mimarisini ve kritik akışları önce prototip üzerinde netleştiririz.',
  },
  {
    n: '03',
    title: 'Çevik Geliştirme',
    desc: 'Haftalık olarak sizinle paylaşarak, şeffaf şekilde geliştiririz.',
  },
  {
    n: '04',
    title: 'Canlıya Alım & İzleme',
    desc: 'Sitenizi yayına alır, sonrasında da düzenli olarak takip etmeye devam ederiz.',
  },
];

/**
 * Bilinen dört aşamalı süreci (Keşif, Mimari, Geliştirme, Canlıya Alım)
 * sayılı bir editoryal şerit olarak gösterir. Önceki "hedeflenen" istatistik
 * şeridinin yerine geçer: o sayılar doğrulanmamış yer tutucuydu, bu bölüm
 * yerine doğrulanabilir, gerçek bir süreç anlatıyor.
 */
const Process: React.FC = () => {
  return (
    <section className="py-20 bg-background transition-colors duration-300 border-y border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-12 max-w-lg"
        >
          Dört adımda <span className="text-dawn-600 dark:text-dawn-300">projeden üretime</span>
        </motion.h2>

        <div className="relative h-px w-full bg-foreground/10 mb-12 overflow-hidden" aria-hidden="true">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: EASE_OUT, delay: 0.15 }}
            style={{ transformOrigin: 'left' }}
            className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-dawn-600 via-dawn-500 to-dawn-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x divide-foreground/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: EASE_OUT }}
              className="py-6 md:py-0 md:px-7 first:md:pl-0 border-t md:border-t-0 border-foreground/10 first:border-t-0"
            >
              <span className="font-display text-sm text-dawn-600 dark:text-dawn-300 font-semibold">{step.n}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-foreground/55 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
