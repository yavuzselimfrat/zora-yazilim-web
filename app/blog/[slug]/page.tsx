import { articles, getArticleById, articleDateToIso } from '@/data/articles';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';

const BASE_URL = 'https://zorayazilim.com';
const SITE_NAME = 'Zora Yazılım';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleById(slug);
  if (!article) return {};

  const url = `${BASE_URL}/blog/${article.id}`;

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/blog/${article.id}` },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.summary,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleById(slug);
  if (!article) notFound();

  const isoDate = articleDateToIso(article.date);
  const url = `${BASE_URL}/blog/${article.id}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.summary,
    url,
    ...(isoDate ? { datePublished: isoDate } : {}),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  const otherArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="pt-40 pb-24 md:pt-48">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: article.title },
            ]}
          />

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/50">
              <span className="px-3 py-1 rounded-full border border-dawn-500/30 text-dawn-600 dark:text-dawn-300 uppercase tracking-wider">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.2]">
              {article.title}
            </h1>
          </div>

          <div className="my-8 border-b border-foreground/10" />

          <div
            className="prose dark:prose-invert max-w-none text-sm md:text-base text-foreground/65 leading-relaxed [&_h3]:font-display [&_h3]:text-foreground [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-10 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              href="/iletisim"
              className="text-xs font-semibold text-dawn-600 dark:text-dawn-300 hover:underline"
            >
              Bu konuyu projenizde konuşmak ister misiniz? İletişime geçin →
            </Link>
            <Link
              href="/blog"
              className="shrink-0 px-6 py-2.5 rounded-lg border border-foreground/15 text-xs font-semibold text-foreground/70 hover:border-foreground/30 hover:text-foreground transition-colors duration-200 text-center"
            >
              Tüm yazılara dön
            </Link>
          </div>

          {otherArticles.length > 0 && (
            <div className="mt-16 pt-10 border-t border-foreground/10">
              <h2 className="text-sm font-semibold text-foreground/70 mb-5">Diğer yazılar</h2>
              <div className="space-y-5">
                {otherArticles.map((other) => (
                  <Link
                    key={other.id}
                    href={`/blog/${other.id}`}
                    className="group flex items-center justify-between gap-4 py-2"
                  >
                    <span className="text-sm text-foreground/80 group-hover:text-dawn-600 dark:group-hover:text-dawn-300 transition-colors duration-200">
                      {other.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground/40 group-hover:text-dawn-600 dark:group-hover:text-dawn-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
