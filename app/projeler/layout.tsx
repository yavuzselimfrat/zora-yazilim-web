import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Vetly gibi kendi ürettiğimiz yazılımlardan kurumsal müşteri projelerine kadar hayata geçirdiğimiz işler.",
  alternates: { canonical: "/projeler" },
  openGraph: {
    title: "Projeler | Zora Yazılım",
    description:
      "Vetly gibi kendi ürettiğimiz yazılımlardan kurumsal müşteri projelerine kadar hayata geçirdiğimiz işler.",
    url: "/projeler",
  },
};

export default function ProjelerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
