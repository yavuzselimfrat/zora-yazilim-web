# AGENTS.md — Zora Yazılım Kodlama Kılavuzu

## Proje Özeti
- **Proje Adı**: Zora Yazılım Resmi Web Sitesi
- **Teknoloji Yığını**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, Lucide React.
- **Tasarım Çizgisi**: Modern, karanlık mod (Dark Mode) odaklı, yüksek teknolojili, akıcı ve şık mikro animasyonlar.

---

## Temel Kurallar ve Standartlar

### 1. Next.js ve React Standartları
- **App Router**: Her zaman yeni Next.js App Router (`app/` dizini) yapısını kullan.
- **Sunucu ve İstemci Bileşenleri (Server vs Client)**:
    - Bileşenleri varsayılan olarak **Server Component** yap.
    - Sadece animasyon (Framer Motion), durum yönetimi (`useState`) veya tıklama olayları varsa bileşenin en üstüne `"use client"` ekle.
- **İçe Aktarmalar (Imports)**: Modül yollarında her zaman `@/...` takma adını kullan (Örn: `import Hero from "@/components/sections/Hero"`).

### 2. Stil ve Tasarım
- Bütün stillendirmeler için **Tailwind CSS** kullan.
- Tasarımın mobil, tablet ve masaüstü (`sm:`, `md:`, `lg:`) cihazlara tam uyumlu (Responsive) olmasını sağla.
- **Zora (Boşnakça "Şafak")** konseptine uygun olarak koyu slate/zinc arka planlar (`bg-slate-950`) ve amber/turuncu/indigo vurgu renkleri kullan.
- İkonlar için sadece `lucide-react` kütüphanesinden yararlan.

### 3. Dosya Düzeni
- `app/`: Sayfa ve rota tanımları.
- `components/sections/`: Sayfa bölümleri (Hero, BentoGrid, Hizmetler vb.).
- `components/ui/`: Tekrar kullanılabilir küçük buton ve kart bileşenleri.
- `data/`: Sitedeki sabit metinler ve proje verileri.

### 4. Kod Kalitesi
- Kod yazarken kesinlikle TypeScript türlerini (Types/Interfaces) eksiksiz belirt, `any` türünü kullanma.
- Görseller için her zaman `next/image` modülünün `<Image />` bileşenini kullan.