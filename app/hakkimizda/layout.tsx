import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Zora Yazılım kimdir, nasıl çalışır ve hangi değerlerle iş yapar? Ekibimizi ve çalışma prensiplerimizi tanıyın.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | Zora Yazılım",
    description:
      "Zora Yazılım kimdir, nasıl çalışır ve hangi değerlerle iş yapar? Ekibimizi ve çalışma prensiplerimizi tanıyın.",
    url: "/hakkimizda",
  },
};

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
