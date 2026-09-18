import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Yazılım ve yapay zeka üzerine, anlaşılır dilde yazılar ve rehberler.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Zora Yazılım",
    description: "Yazılım ve yapay zeka üzerine, anlaşılır dilde yazılar ve rehberler.",
    url: "/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
