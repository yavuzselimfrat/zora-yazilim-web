import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Zora Yazılım olarak hangi verileri topladığımızı, nasıl kullandığımızı ve haklarınızı açıklıyoruz.",
  alternates: { canonical: "/gizlilik-politikasi" },
  robots: { index: true, follow: true },
};

export default function GizlilikLayout({ children }: { children: React.ReactNode }) {
  return children;
}
