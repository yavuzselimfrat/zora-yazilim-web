import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Hero />
      <BentoGrid />

      <section className="py-20 text-center relative z-10 border-t border-slate-200 dark:border-slate-800/80">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Ölçeklenebilir altyapılar ve otonom yapay zeka çözümleri için hemen teklif alın.
          </p>
          <div className="pt-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-500/25 active:scale-95 transition-all"
            >
              Proje Başlatın <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}