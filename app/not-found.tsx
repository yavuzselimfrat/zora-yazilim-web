'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import AmbientGlow from '@/components/sections/AmbientGlow';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const quickLinks = [
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground transition-colors duration-300 px-6">
      <AmbientGlow />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="relative z-10 max-w-xl text-center"
      >
        <span className="font-display text-7xl md:text-8xl font-bold text-dawn-500/20 leading-none select-none">
          404
        </span>
        <h1 className="mt-4 font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          Bu sayfayı bulamadık
        </h1>
        <p className="mt-4 text-base text-foreground/55 leading-relaxed">
          Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Ana sayfaya dönebilir ya da
          aşağıdaki sayfalardan birine göz atabilirsiniz.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-dawn rounded-lg shadow-lg shadow-dawn-700/20 hover:brightness-110 active:scale-[0.97] transition-[filter,transform] duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-foreground/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/60 hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200"
            >
              {link.label} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
