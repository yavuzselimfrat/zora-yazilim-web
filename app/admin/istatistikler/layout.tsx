import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ziyaretçi İstatistikleri",
  robots: { index: false, follow: false },
};

export default function IstatistiklerAdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
