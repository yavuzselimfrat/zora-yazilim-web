import React from 'react';

/**
 * A quieter cousin of Hero's aurora — two slow-drifting blurred masses at
 * lower opacity, meant to sit behind a short section (not a full hero) so
 * the "canlı" motion language threads through the whole page instead of
 * living only above the fold.
 *
 * Pure CSS (see .drift-a / .drift-b in globals.css) instead of Framer
 * Motion: this renders on every page that uses it, so keeping it off the
 * JS thread matters for mobile performance. No "use client" needed either.
 */
const AmbientGlow: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="drift-a absolute left-[6%] top-[0%] w-[340px] h-[340px] rounded-full blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-dawn-400) 20%, transparent) 0%, transparent 72%)',
        }}
      />
      <div
        className="drift-b absolute right-[8%] bottom-[-5%] w-[300px] h-[300px] rounded-full blur-[110px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-dawn-600) 16%, transparent) 0%, transparent 74%)',
        }}
      />
    </div>
  );
};

export default AmbientGlow;
