'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import LiveHorizon from './LiveHorizon';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Splits a line into words and reveals them one by one with a soft
 * blur-to-focus motion, staggered left to right. Reads as a "live" typing-in
 * headline without any video/3D asset — pure text + timing.
 */
const HeadlineWords: React.FC<{ text: string; delayStart: number; className?: string }> = ({
  text,
  delayStart,
  className,
}) => {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.65, delay: delayStart + i * 0.06, ease: EASE_OUT }}
          className={`inline-block ${className ?? ''}`}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-background transition-colors duration-300">
      <LiveHorizon />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.25rem] font-semibold tracking-tight text-foreground leading-[1.02]">
          <HeadlineWords text="Ölçeklenebilir altyapılar," delayStart={0.1} />
          <br />
          <HeadlineWords text="otonom AI ajanları." delayStart={0.1 + 3 * 0.06} className="text-dawn" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: EASE_OUT }}
          className="mt-7 text-lg sm:text-xl text-foreground/55 max-w-xl leading-relaxed"
        >
          KOBİ’den kurumsal şirketlere, ölçeğinize uygun web ve yapay zeka çözümleri sunuyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.68, ease: EASE_OUT }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href="/iletisim"
            className="group px-7 py-3.5 rounded-lg bg-dawn text-white font-semibold text-sm shadow-lg shadow-dawn-700/20 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.97] transition-[filter,transform] duration-200"
          >
            <span>Proje Başlatın</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/projeler"
            className="px-7 py-3.5 text-foreground/70 hover:text-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <span>Projelerimizi inceleyin</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue: a breathing line, not a decorative dot. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-9 bg-gradient-to-b from-foreground/0 via-foreground/35 to-foreground/0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
