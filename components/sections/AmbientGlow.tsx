'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * A quieter cousin of Hero's aurora — two slow-drifting blurred masses at
 * lower opacity, meant to sit behind a short section (not a full hero) so
 * the "canlı" motion language threads through the whole page instead of
 * living only above the fold.
 */
const AmbientGlow: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        animate={{ x: [0, 26, -16, 0], y: [0, -16, 10, 0], scale: [1, 1.07, 0.96, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[6%] top-[0%] w-[340px] h-[340px] rounded-full blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-dawn-400) 20%, transparent) 0%, transparent 72%)',
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 14, 0], y: [0, 14, -12, 0], scale: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 29, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute right-[8%] bottom-[-5%] w-[300px] h-[300px] rounded-full blur-[110px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-dawn-600) 16%, transparent) 0%, transparent 74%)',
        }}
      />
    </div>
  );
};

export default AmbientGlow;
