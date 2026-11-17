const homepage = `# Zora Yazılım

Zora Yazılım, Türkiye'deki küçük işletmeler ve kurumsal şirketler için web siteleri ve yapay zeka çözümleri geliştirir.

## Hizmetler

- Kurumsal web siteleri ve KOBİ web siteleri
- İş süreçleri için yapay zeka ajanları ve otomasyon
- Backend geliştirme ve sistem entegrasyonu

## Proje ve iletişim

- [Hizmetler](https://zorayazilim.com/hizmetler)
- [Tamamlanan projeler](https://zorayazilim.com/projeler)
- [Zora Yazılım hakkında](https://zorayazilim.com/hakkimizda)
- [Proje teklifi ve iletişim](https://zorayazilim.com/iletisim)
- [Gizlilik politikası](https://zorayazilim.com/gizlilik-politikasi)
`;

export function GET() {
  return new Response(homepage, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "private, no-store",
    },
  });
}
