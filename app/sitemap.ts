import type { MetadataRoute } from 'next';

const BASE_URL = 'https://zorayazilim.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/hakkimizda', '/hizmetler', '/projeler', '/blog', '/iletisim', '/gizlilik-politikasi'];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
