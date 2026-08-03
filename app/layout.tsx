import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zora Yazılım — Ölçeklenebilir Mimariler & AI Çözümleri",
  description: "Zora Yazılım; otonom yapay zeka ajanları, yüksek performanslı backend altyapıları ve modern web platformları geliştiren ileri teknoloji şirketidir.",
  keywords: [
    "Zora Yazılım",
    "Yapay Zeka",
    "Multi-Agent Systems",
    "Ölçeklenebilir Yazılım",
    "Next.js",
    "Node.js",
    "B2B Yazılım Solutions",
    "Web Tasarım ve Geliştirme",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}