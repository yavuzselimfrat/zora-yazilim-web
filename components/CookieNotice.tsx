'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'zora-cookie-notice-dismissed';

/**
 * A lightweight, honest cookie notice — not a granular consent picker,
 * because the site (per gizlilik-politikasi) doesn't set tracking/analytics
 * cookies. It just discloses the essential (theme preference) storage and
 * links to the privacy policy, then remembers it was dismissed.
 *
 * Starts hidden (matches server render, avoids a hydration flash) and is
 * revealed by the effect below only when the client confirms it hasn't
 * been dismissed yet.
 */
const CookieNotice: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let alreadyDismissed = false;
    try {
      alreadyDismissed = Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      // localStorage erişilemiyorsa (gizli sekme vb.) bandı hiç göstermiyoruz.
      alreadyDismissed = true;
    }
    if (!alreadyDismissed) {
      // Mount-only reveal, gated on client-only localStorage — a single
      // conditional setState here, not a state->effect->state loop.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // yoksayılabilir
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 inset-x-0 z-[60] p-4 md:p-5"
        >
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-md shadow-xl px-5 py-4">
            <p className="text-sm text-foreground/65 leading-relaxed flex-1">
              Bu site, tema tercihiniz gibi temel işlevler dışında takip amaçlı reklam veya analiz
              çerezi kullanmıyor.{' '}
              <Link
                href="/gizlilik-politikasi"
                className="font-semibold text-foreground hover:text-dawn-600 dark:hover:text-dawn-300 underline underline-offset-2"
              >
                Gizlilik politikamızı
              </Link>{' '}
              inceleyebilirsiniz.
            </p>
            <button
              onClick={dismiss}
              className="shrink-0 px-5 py-2.5 text-sm font-semibold text-white bg-dawn rounded-lg shadow-md shadow-dawn-700/20 active:scale-[0.97] hover:brightness-110 transition-[filter,transform] duration-200"
            >
              Anladım
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieNotice;
