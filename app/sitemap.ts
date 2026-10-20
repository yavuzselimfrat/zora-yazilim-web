import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';

const BASE_URL = 'https://zorayazilim.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/hakkimizda', '/hizmetler', '/projeler', '/blog', '/iletisim', '/gizlilik-politikasi'];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
