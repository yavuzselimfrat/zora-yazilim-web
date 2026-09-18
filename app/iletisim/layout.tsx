import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";
import Script from "next/script";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Projenizi anlatın, ekibimiz 24 saat içinde size dönsün. Hizmet ihtiyacınızı ve iletişim bilgilerinizi paylaşın.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | Zora Yazılım",
    description:
      "Projenizi anlatın, ekibimiz 24 saat içinde size dönsün. Hizmet ihtiyacınızı ve iletişim bilgilerinizi paylaşın.",
    url: "/iletisim",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
