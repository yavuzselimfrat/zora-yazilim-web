'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * A slow, living gradient field behind the hero — the "canlı" ambient motif.
 * Two soft blurred masses drift on independent loops and nudge toward the
 * cursor on desktop. No video/3D asset: pure CSS blur + a touch of Framer
 * Motion, kept inside the single "dawn" accent so it reads as depth, not
 * decoration.
 *
 * The endless drift loop runs as a CSS animation (see .drift-hero-a / .drift-hero-b
 * in globals.css), not Framer Motion's `animate: {..., transition: {repeat: Infinity}}`.
 * That used to tick on the JS thread forever — Lighthouse's mobile run flagged
 * the resulting main-thread work. CSS keyframes hand the loop to the compositor
 * instead, at effectively zero JS cost. Framer Motion still drives the much
 * cheaper, event-driven mouse-follow nudge on an inner element, layered on
 * top of the CSS drift.
 */
const AuroraBackground: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.6 });

  const blobAX = useTransform(springX, (v) => v * 26);
  const blobAY = useTransform(springY, (v) => v * 18);
  const blobBX = useTransform(springX, (v) => v * -18);
  const blobBY = useTransform(springY, (v) => v * -12);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* base horizon field, static */}
      <div className="absolute inset-x-0 top-0 h-[560px] horizon-glow pointer-events-none" />

      {/* drifting mass A — outer div: CSS drift loop + blur; inner: mouse-follow nudge */}
      <div
        className="drift-hero-a absolute left-[8%] top-[-10%] w-[420px] h-[420px] rounded-full blur-[90px] pointer-events-none"
      >
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            x: blobAX,
            y: blobAY,
            background:
              'radial-gradient(circle, color-mix(in srgb, var(--color-dawn-400) 38%, transparent) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* drifting mass B */}
      <div
        className="drift-hero-b absolute right-[10%] top-[6%] w-[360px] h-[360px] rounded-full blur-[100px] pointer-events-none"
      >
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            x: blobBX,
            y: blobBY,
            background:
              'radial-gradient(circle, color-mix(in srgb, var(--color-dawn-600) 30%, transparent) 0%, transparent 72%)',
          }}
        />
      </div>

      {/* filmic grain, very low opacity, gives the gradient a tactile finish */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
