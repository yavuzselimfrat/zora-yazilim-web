"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck, ArrowUpRight, Bot } from "lucide-react";

const services = [
    {
        title: "Yapay Zeka & Otonom Ajanlar",
        description: "İş süreçlerinizi otomatikleştiren LLM entegrasyonları, özel veri modelleri ve akıllı ajan mimarileri.",
        icon: Bot,
        span: "col-span-1 md:col-span-2 shadow-amber-500/5",
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
        badge: "Öne Çıkan",
    },
    {
        title: "Ölçeklenebilir SaaS Mimarisi",
        description: "Yüksek trafik altında bile kesintisiz çalışan, bulut tabanlı modern yazılım altyapıları.",
        icon: Cpu,
        span: "col-span-1",
        gradient: "from-indigo-500/10 to-transparent",
    },
    {
        title: "Ultra Hızlı Modern Web Platformları",
        description: "Next.js ve mikro-önuç mimarileri ile ışık hızında açılan, SEO uyumlu dijital deneyimler.",
        icon: Zap,
        span: "col-span-1",
        gradient: "from-blue-500/10 to-transparent",
    },
    {
        title: "Güvenli API & Sistem Entegrasyonu",
        description: "Farklı yazılımlarınızı birbiriyle pürüzsüz konuşturan güvenli ve yüksek hızlı veri mimarileri.",
        icon: ShieldCheck,
        span: "col-span-1 md:col-span-2",
        gradient: "from-emerald-500/10 to-transparent",
    },
];

export default function BentoGrid() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-6 relative transition-colors duration-300">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Başlık ve Açıklama */}
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                        Uzmanlık Alanlarımız
                    </h2>
                    <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                        Geleceğin Teknolojileri ile Güçlendirilen Çözümler
                    </p>
                </div>

                {/* Bento Grid Yapısı */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative group rounded-3xl p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${service.span}`}
                            >
                                {/* Kart Arka Plan Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                                />

                                <div className="relative z-10 space-y-6 flex flex-col justify-between h-full">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        {service.badge && (
                                            <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        {service.badge}
                      </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-500 transition-colors flex items-center gap-2">
                                            {service.title}
                                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}