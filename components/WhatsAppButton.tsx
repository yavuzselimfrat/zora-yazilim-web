'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '905531656132';
const DEFAULT_MESSAGE = 'Merhaba, Zora Yazılım hakkında bilgi almak istiyorum.';

const WhatsAppButton: React.FC = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yazın"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, type: 'spring', bounce: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex items-center"
    >
      <span className="relative w-14 h-14 shrink-0">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"
        />
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/20 group-hover:brightness-105 transition-[filter] duration-200">
          <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7" aria-hidden="true">
            <path d="M16.004 2.667c-7.36 0-13.333 5.973-13.333 13.333 0 2.351.615 4.646 1.785 6.666l-1.897 6.934a1 1 0 0 0 1.226 1.226l6.934-1.897a13.28 13.28 0 0 0 6.666 1.785h.006c7.36 0 13.333-5.973 13.333-13.333S23.664 2.667 16.304 2.667h-.3zm7.844 18.825c-.335.94-1.657 1.72-2.708 1.945-.721.155-1.663.279-4.833-1.037-4.055-1.68-6.665-5.788-6.868-6.056-.196-.267-1.633-2.17-1.633-4.14 0-1.97 1.03-2.94 1.396-3.343.335-.365.732-.457.976-.457.244 0 .488.002.7.013.224.011.526-.085.822.628.303.727 1.032 2.508 1.121 2.69.09.183.15.396.03.64-.12.244-.18.396-.36.61-.18.213-.379.475-.541.638-.18.18-.368.375-.158.735.21.36.93 1.534 1.997 2.485 1.372 1.223 2.529 1.602 2.889 1.783.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.099.99 2.459 1.17.36.18.6.27.69.42.09.15.09.865-.245 1.805z" />
          </svg>
        </span>
      </span>
      <span className="max-w-0 group-hover:max-w-[220px] overflow-hidden whitespace-nowrap transition-all duration-300 ease-out">
        <span className="ml-3 mr-1 inline-block px-4 py-2 rounded-full bg-background border border-foreground/10 text-foreground text-sm font-semibold shadow-lg">
          WhatsApp&apos;tan yazın
        </span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
