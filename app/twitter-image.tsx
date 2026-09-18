import { ogSize, ogContentType, renderOgImage } from '@/lib/ogImage';

export const runtime = 'edge';
export const alt = 'Zora Yazılım — Web ve Yapay Zeka Çözümleri';
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return renderOgImage();
}
