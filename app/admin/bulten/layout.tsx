import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bülten Gönder",
  robots: { index: false, follow: false },
};

export default function BultenAdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
