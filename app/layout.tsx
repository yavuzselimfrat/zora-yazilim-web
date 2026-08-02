import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"; // Footer'ı dahil ettik

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zora Yazılım — Geleceğin Yazılım Teknolojileri",
  description: "Ölçeklenebilir mimariler, yapay zeka ajanları ve modern web çözümleri.",
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