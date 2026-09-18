'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ProjectShotProps {
  images: string[];
  alt: string;
  /** Aspect ratio class for the screenshot area, e.g. "aspect-[4/3]" or "aspect-video" */
  aspect?: string;
  delay?: number;
  /** Mark the first slide as high priority when it's likely above the fold */
  priority?: boolean;
  /** Auto-advance interval in ms; set to 0 to disable */
  intervalMs?: number;
}

/**
 * A "browser window" style preview card: a slim chrome bar on top and the
 * project's real screenshots below, auto-cycling through a small carousel.
 * The chrome bar's three dots double as slide indicators — the active one
 * lights up in the brand's dawn color — so the whole thing reads as one
 * deliberate, professional visual instead of a static screenshot.
 */
const ProjectShot: React.FC<ProjectShotProps> = ({
  images,
  alt,
  aspect = 'aspect-[4/3]',
  delay = 0,
  priority = false,
  intervalMs = 3800,
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (intervalMs <= 0 || images.length <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs, paused]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative group"
    >
      {/* ambient glow behind the frame */}
      <div
        className="absolute -inset-4 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-dawn-400) 28%, transparent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="relative rounded-2xl border border-foreground/10 bg-background shadow-lg group-hover:shadow-2xl group-hover:border-dawn-500/30 transition-[box-shadow,border-color] duration-500 overflow-hidden">
        {/* browser chrome bar — doubles as slide indicator */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-foreground/[0.04] border-b border-foreground/10">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Görsel ${i + 1}`}
              aria-current={i === index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? 'bg-dawn-500 shadow-[0_0_6px_var(--color-dawn-500)] scale-110'
                  : 'bg-foreground/15 hover:bg-dawn-400/50'
              }`}
            />
          ))}
        </div>
        <div className={`relative ${aspect} overflow-hidden`}>
          <AnimatePresence initial={false}>
            <motion.div
              key={images[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={priority && index === 0}
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectShot;
