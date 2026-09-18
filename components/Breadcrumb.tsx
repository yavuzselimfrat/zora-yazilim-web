'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Script from 'next/script';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const BASE_URL = 'https://zorayazilim.com';

const Breadcrumb: React.FC<{ items: BreadcrumbItem[]; center?: boolean }> = ({ items, center }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-xs text-foreground/40 mb-6 ${center ? 'justify-center' : ''}`}>
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3 h-3 shrink-0" aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-dawn-500 transition-colors duration-200">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/55 font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumb;
