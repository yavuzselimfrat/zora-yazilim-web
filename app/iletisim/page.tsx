'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Bot, Globe, Cpu, Sparkles, MessageSquare, ChevronDown, Mail, Clock, ShieldCheck, Calculator, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceOptions = [
  { id: 'ai', label: 'Multi-Agent AI & LLM', icon: Bot },
  { id: 'web', label: 'Özel Web Platformu', icon: Globe },
  { id: 'backend', label: 'Ölçeklenebilir Backend', icon: Cpu },
  { id: 'other', label: 'Diğer / Danışmanlık', icon: Sparkles },
];

const budgetOptions = ['50.000 TL - 100.000 TL', '100.000 TL - 250.000 TL', '250.000 TL+'];

const faqs = [
  {
    question: "Mevcut sistemlerimize veya veritabanımıza entegre olabilir misiniz?",
    answer: "Evet. Zora Yazılım olarak var olan Node.js, Python, PostgreSQL veya legacy altyapılarınıza dokunmadan, RESTful API veya gRPC üzerinden modüler entegrasyonlar gerçekleştiriyoruz."
  },
  {
    question: "Yapay zeka otonom ajanlarını kendi sunucularımızda çalıştırabilir miyiz?",
    answer: "Kesinlikle. İşletmenizin veri gizliliği politikalarına göre AI çözümlerimizi ister cloud altyapımızda ister kendi local sunucularınızda (On-Premise) yayına alabiliyoruz."
  },
  {
    question: "Proje teslim edildikten sonra bakım ve teknik destek sağlıyor musunuz?",
    answer: "Evet. Canlıya alım sonrasında 1 ila 12 aylık SLA (Service Level Agreement) bakım paketlerimizle sistemlerinizin 7/24 kesintisiz çalışmasını sağlıyoruz."
  },
  {
    question: "Proje fiyatlandırması ve ödeme koşulları nasıl belirleniyor?",
    answer: "Proje kapsamına (Scope of Work) göre 'Sabit Fiyat' veya 'Aylık Dedicated Mühendislik' modeli sunuyoruz. Ödemeler milestone (aşama) bazlı gerçekleştirilir."
  }
];

const guarantees = [
  { icon: Clock, label: "24 Saat İçinde Yanıt", desc: "Form doldurulduktan hemen sonra teknik ekibimiz dönüş yapar." },
  { icon: ShieldCheck, label: "Gizlilik (NDA) Garantisi", desc: "Paylaştığınız tüm fikirler ve belgeler güvence altındadır." },
  { icon: Mail, label: "Direkt Mühendis Ulaşımı", desc: "Satış temsilcisi yerine doğrudan yazılım ekibimizle görüşürsünüz." },
];

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState<string>('ai');
  const [selectedBudget, setSelectedBudget] = useState<string>('100.000 TL - 250.000 TL');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ROI Calculator State
  const [weeklyHours, setWeeklyHours] = useState<number>(20);
  const [teamSize, setTeamSize] = useState<number>(4);
  const savedHoursYearly = Math.round(weeklyHours * teamSize * 48 * 0.75);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* 🚀 İLETİŞİM VE TEKLİF FORMU BÖLÜMÜ */}
      <section id="teklif" className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
              Birlikte Üretelim
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Projenizi <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                Hayata Geçirelim
              </span>
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm md:text-base">
              İhtiyaçlarınızı belirleyin, teknik ekibimiz 24 saat içinde özel mimari teklifle dönüş yapsın.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* SOL BİLGİ PANELİ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Doğrudan Mühendislik Ekibiyle İletişim
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Araya satış temsilcisi koymadan, doğrudan sistem mimarlarımız ve yazılım ekibimizle teknik detayları görüşün.
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
                      @
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase">Kurumsal E-posta</p>
                      <a href="mailto:contact@zorayazilim.com" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600">
                        contact@zorayazilim.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase">Yanıt Süresi</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Maksimum 24 Saat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white space-y-2 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">Güvenilirlik</span>
                <h4 className="text-lg font-bold">Gizlilik (NDA) ve Tip Güvenli Mimari</h4>
                <p className="text-xs text-indigo-100 leading-relaxed">
                  Tüm proje görüşmeleri ilk andan itibaren NDA güvencesi altındadır.
                </p>
              </div>

              {/* 🧮 HESAPLAYICI MODÜLÜ (UI BOZMADAN EKLENDİ) */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <Calculator className="w-5 h-5 text-indigo-400" />
                  <div>
                    <h4 className="text-sm font-bold">AI Zaman Tasarrufu Hesaplayıcı</h4>
                    <p className="text-[11px] text-slate-400">Otomasyonun ekibinize kazandıracağı süre</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300">Manuel İş Saati (Haftalık/Kişi):</span>
                      <span className="text-indigo-400 font-bold">{weeklyHours} Saat</span>
                    </div>
                    <input
                      type="range" min="5" max="50" value={weeklyHours}
                      onChange={(e) => setWeeklyHours(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer h-1 bg-slate-800 rounded-lg"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300">Ekip Büyüklüğü:</span>
                      <span className="text-indigo-400 font-bold">{teamSize} Kişi</span>
                    </div>
                    <input
                      type="range" min="1" max="25" value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer h-1 bg-slate-800 rounded-lg"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-indigo-300 font-bold uppercase block">Tahmini Yıllık Kazanım</span>
                    <span className="text-xl font-black text-white">~{savedHoursYearly.toLocaleString()} Saat</span>
                  </div>
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
              </div>

            </motion.div>

            {/* SAĞ İNTERAKTİF FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-3xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 space-y-8 shadow-xl backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                    1. İhtiyacınız Olan Hizmet Türü
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map((item) => {
                      const Icon = item.icon;
                      const isSelected = selectedService === item.id;
                      return (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setSelectedService(item.id)}
                          className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20'
                              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`} />
                          <span className="text-xs font-bold">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                    2. Öngörülen Bütçe Aralığı
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setSelectedBudget(budget)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          selectedBudget === budget
                            ? 'bg-purple-600 text-white shadow-sm'
                            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-purple-400'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Adınız & Soyadınız</label>
                    <input
                      type="text"
                      required
                      placeholder="Ahmet Yılmaz"
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">E-posta Adresiniz</label>
                    <input
                      type="email"
                      required
                      placeholder="ahmet@sirketiniz.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Projeniz Hakkında Kısa Özet</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Projenizin hedefleri, mevcut altyapınız ve eklemek istediğiniz özellikler..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 active:scale-95 hover:scale-[1.01] transition-all"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Teklif Talebiniz Alındı!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Teklif Talebini Gönder</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 🛡️ İLETİŞİM GÜVENCE BANDI */}
      <section className="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((g, index) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{g.label}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{g.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ❓ SIKÇA SORULAN SORULAR */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
              Aklınıza Takılanlar
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-sm hover:border-indigo-500/30 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}