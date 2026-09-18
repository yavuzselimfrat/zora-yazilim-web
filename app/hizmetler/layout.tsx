import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Yapay zeka ajanlarından ölçeklenebilir backend sistemlerine ve kurumsal web platformlarına kadar sunduğumuz hizmetler.",
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Hizmetler | Zora Yazılım",
    description:
      "Yapay zeka ajanlarından ölçeklenebilir backend sistemlerine ve kurumsal web platformlarına kadar sunduğumuz hizmetler.",
    url: "/hizmetler",
  },
};

export default function HizmetlerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
