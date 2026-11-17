export function GET() {
  return new Response(
    "# Sayfa bulunamadı\n\nİstediğiniz adreste bir sayfa bulunamadı. " +
      "Mevcut sayfaları [site haritasından](https://zorayazilim.com/sitemap.xml) bulabilirsiniz.\n",
    {
      status: 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept",
        "Cache-Control": "private, no-store",
      },
    },
  );
}
