'use client';

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Positioning from "@/components/sections/Positioning";
import Process from "@/components/sections/Process";
import AmbientGlow from "@/components/sections/AmbientGlow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <Hero />

      <Services />

      <Positioning />

      <Process />

      {/* İLETİŞİM ÇAĞRISI */}
      <section className="py-20 relative z-10 border-t border-foreground/10 overflow-hidden">
        <AmbientGlow />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-left md:text-center space-y-6"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Projenizi birlikte hayata geçirelim
          </h2>
          <p className="text-foreground/60 text-base md:text-lg max-w-xl md:mx-auto">
            Kurumsal web sitesinden otonom AI sistemlerine, ölçeğinize uygun çözümler için hemen teklif alın.
          </p>
          <div className="pt-2 flex flex-col items-start md:items-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-dawn rounded-lg shadow-lg shadow-dawn-700/20 active:scale-[0.97] hover:brightness-110 transition-[filter,transform] duration-200"
            >
              Proje Başlatın <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-foreground/40">
              Gizlilik sözleşmesiyle korunan süreç · %100 kod mülkiyeti · Garantili destek
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
