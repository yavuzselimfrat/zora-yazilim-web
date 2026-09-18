import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CookieNotice from "../components/CookieNotice";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const displaySans = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-sans",
});

const accentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["italic"],
  variable: "--font-accent-serif",
});

const BASE_URL = "https://zorayazilim.com";
const SITE_NAME = "Zora Yazılım";
const DEFAULT_DESCRIPTION =
  "Küçük işletmelerden kurumsal şirketlere kadar, ölçeğinize uygun web siteleri ve yapay zeka çözümleri geliştiren yazılım şirketi.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Zora Yazılım | Web ve Yapay Zeka Çözümleri",
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Zora Yazılım",
    "yapay zeka ajanları",
    "kurumsal web sitesi",
    "KOBİ web sitesi",
    "backend geliştirme",
    "yazılım şirketi",
    "web tasarım",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: "Zora Yazılım | Web ve Yapay Zeka Çözümleri",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zora Yazılım | Web ve Yapay Zeka Çözümleri",
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  email: "contact@zorayazilim.com",
  description: DEFAULT_DESCRIPTION,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${displaySans.variable} ${accentSerif.variable} font-sans bg-background text-foreground transition-colors duration-300`}
      >
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <CookieNotice />
        </ThemeProvider>
      </body>
    </html>
  );
}
