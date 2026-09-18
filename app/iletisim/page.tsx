'use client';

import Breadcrumb from '@/components/Breadcrumb';
import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, Bot, Globe, Cpu, Sparkles, ChevronDown, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AmbientGlow from '@/components/sections/AmbientGlow';
import { faqs } from '@/lib/faqs';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const serviceOptions = [
  { id: 'ai', label: 'Yapay Zeka Sistemleri', icon: Bot },
  { id: 'web', label: 'Web Platformu', icon: Globe },
  { id: 'backend', label: 'Backend & Altyapı', icon: Cpu },
  { id: 'other', label: 'Diğer / Danışmanlık', icon: Sparkles },
];

const budgetOptions = ['50.000 TL altı', '50.000 - 150.000 TL', '150.000 TL ve üzeri', 'Henüz bilmiyorum'];

const guarantees = [
  { label: '24 saate kadar yanıt', desc: 'Formu gönderdiğinizde ekibimiz kısa sürede size döner.' },
  { label: 'Gizlilik güvencesi', desc: 'Paylaştığınız fikirler ve belgeler gizlilik sözleşmesiyle korunur.' },
  { label: 'Doğrudan ekiple görüşme', desc: 'Aracı satış temsilcisi yerine doğrudan yazılım ekibimizle konuşursunuz.' },
];

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [weeklyHours, setWeeklyHours] = useState<number>(20);
  const [teamSize, setTeamSize] = useState<number>(4);
  const savedHoursYearly = Math.round(weeklyHours * teamSize * 48 * 0.75);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      {/* GİRİŞ + FORM */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'İletişim' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="max-w-2xl mb-14"
          >
            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
              Projenizi <span className="text-dawn-600 dark:text-dawn-300">hayata geçirelim</span>.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/55 leading-relaxed">
              İhtiyacınızı kısaca anlatın, ekibimiz 24 saat içinde size dönsün.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* SOL BİLGİ PANELİ */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="lg:col-span-5 space-y-5"
            >
              <div className="p-7 rounded-2xl border border-foreground/10 space-y-5">
                <h3 className="font-display text-xl font-semibold text-foreground">Doğrudan ekiple görüşün</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  Aracı olmadan, projenizi doğrudan yazılım ekibimizle konuşun.
                </p>
                <div className="space-y-3 pt-4 border-t border-foreground/10">
                  <div>
                    <p className="text-[11px] text-foreground/40 font-semibold uppercase tracking-wide">
                      Kurumsal e-posta
                    </p>
                    <a
                      href="mailto:contact@zorayazilim.com"
                      className="text-sm font-semibold text-foreground hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200"
                    >
                      contact@zorayazilim.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] text-foreground/40 font-semibold uppercase tracking-wide">
                      Yanıt süresi
                    </p>
                    <p className="text-sm font-semibold text-foreground">En geç 24 saat içinde</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-foreground/40 font-semibold uppercase tracking-wide">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/905531656132?text=Merhaba%2C%20Zora%20Yaz%C4%B1l%C4%B1m%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-foreground hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200"
                    >
                      0553 165 61 32
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-dawn-500/25 bg-dawn-500/[0.04] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-dawn-600 dark:text-dawn-300">
                  Güvence
                </span>
                <h4 className="font-display text-base font-semibold text-foreground">Gizlilik sözleşmesi</h4>
                <p className="text-xs text-foreground/55 leading-relaxed">
                  Paylaştığınız tüm fikirler ve belgeler, görüşmenin ilk anından itibaren gizlilik
                  sözleşmesiyle korunur.
                </p>
              </div>

              {/* HESAPLAYICI */}
              <div className="p-6 rounded-2xl border border-foreground/10 space-y-4">
                <div className="pb-3 border-b border-foreground/10">
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    Ne kadar zaman kazanırsınız?
                  </h4>
                  <p className="text-[11px] text-foreground/45 mt-0.5">
                    Otomasyonun ekibinize kazandırabileceği süreyi tahmin edin
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground/60">Kişi başı haftalık manuel iş</span>
                      <span className="text-dawn-600 dark:text-dawn-300 font-semibold">{weeklyHours} saat</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={weeklyHours}
                      onChange={(e) => setWeeklyHours(Number(e.target.value))}
                      aria-label="Kişi başı haftalık manuel iş (saat)"
                      className="w-full accent-[var(--color-dawn-500)] cursor-pointer h-1 rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground/60">Ekip büyüklüğü</span>
                      <span className="text-dawn-600 dark:text-dawn-300 font-semibold">{teamSize} kişi</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      aria-label="Ekip büyüklüğü (kişi)"
                      className="w-full accent-[var(--color-dawn-500)] cursor-pointer h-1 rounded-lg"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-foreground/[0.03] border border-foreground/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-foreground/40 font-semibold uppercase block">
                      Tahmini yıllık kazanım
                    </span>
                    <motion.span
                      key={savedHoursYearly}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-xl font-bold text-foreground block"
                    >
                      ~{savedHoursYearly.toLocaleString('tr-TR')} saat
                    </motion.span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-dawn-500" />
                </div>
              </div>
            </motion.div>

            {/* SAĞ FORM */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="lg:col-span-7"
            >
              <div className="relative p-8 md:p-10 rounded-3xl border border-foreground/10 overflow-hidden min-h-[560px]">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      className="space-y-7"
                    >
                      <div className="space-y-3">
                        <label className="text-xs uppercase tracking-wider font-semibold text-foreground/50">
                          İhtiyacınız olan hizmet
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {serviceOptions.map((item) => {
                            const Icon = item.icon;
                            const isSelected = selectedService === item.id;
                            return (
                              <motion.button
                                type="button"
                                key={item.id}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setSelectedService(item.id)}
                                className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-colors duration-200 ${
                                  isSelected
                                    ? 'bg-dawn text-white border-dawn-600'
                                    : 'border-foreground/15 text-foreground/70 hover:border-dawn-500/40'
                                }`}
                              >
                                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-dawn-600 dark:text-dawn-300'}`} />
                                <span className="text-xs font-semibold">{item.label}</span>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs uppercase tracking-wider font-semibold text-foreground/50">
                          Bütçe aralığınız <span className="text-foreground/35 normal-case font-normal">(opsiyonel)</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {budgetOptions.map((budget) => (
                            <motion.button
                              type="button"
                              key={budget}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => setSelectedBudget(budget)}
                              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors duration-200 ${
                                selectedBudget === budget
                                  ? 'bg-dawn text-white'
                                  : 'border border-foreground/15 text-foreground/60 hover:border-dawn-500/40'
                              }`}
                            >
                              {budget}
                            </motion.button>
                          ))}
                        </div>
                        <p className="text-xs text-foreground/40">
                          Bütçeniz netleşmediyse sorun değil, birlikte konuşuruz.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="contact-name" className="text-xs font-semibold text-foreground/60">Adınız Soyadınız</label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            placeholder="Ahmet Yılmaz"
                            className="w-full px-4 py-3.5 rounded-lg border border-foreground/15 bg-transparent text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-dawn-500/60 transition-colors duration-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="contact-email" className="text-xs font-semibold text-foreground/60">E-posta Adresiniz</label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="ahmet@sirketiniz.com"
                            className="w-full px-4 py-3.5 rounded-lg border border-foreground/15 bg-transparent text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-dawn-500/60 transition-colors duration-200"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="contact-summary" className="text-xs font-semibold text-foreground/60">Projeniz hakkında kısa özet</label>
                        <textarea
                          id="contact-summary"
                          name="summary"
                          rows={4}
                          required
                          placeholder="Projenizin hedefleri, mevcut altyapınız ve eklemek istediğiniz özellikler..."
                          className="w-full px-4 py-3.5 rounded-lg border border-foreground/15 bg-transparent text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-dawn-500/60 transition-colors duration-200 resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 rounded-lg bg-dawn text-white font-semibold text-sm shadow-lg shadow-dawn-700/20 flex items-center justify-center gap-2 hover:brightness-110 transition-[filter] duration-200"
                      >
                        <Send className="w-4 h-4" />
                        <span>Teklif Talebini Gönder</span>
                      </motion.button>
                      <p className="text-center text-[11px] text-foreground/35">
                        Gönder’e basarak{' '}
                        <Link href="/gizlilik-politikasi" className="underline hover:text-foreground/60 transition-colors">
                          Gizlilik Politikası
                        </Link>
                        ’nı kabul etmiş olursunuz.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-full min-h-[480px] flex flex-col items-center justify-center text-center gap-5"
                    >
                      <motion.div
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.6, bounce: 0.45, delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-dawn-500/10 border border-dawn-500/30 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-8 h-8 text-dawn-500" />
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          Talebiniz alındı
                        </h3>
                        <p className="text-sm text-foreground/55 max-w-xs mx-auto leading-relaxed">
                          En geç 24 saat içinde size dönüş yapacağız.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-2 text-xs font-semibold text-foreground/50 hover:text-dawn-600 dark:hover:text-dawn-300 transition-colors duration-200"
                      >
                        Yeni bir talep gönder
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GÜVENCE ŞERİDİ */}
      <section className="py-14 border-y border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 md:divide-x divide-foreground/10">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: EASE_OUT }}
              className="py-5 md:py-0 md:px-7 first:md:pl-0 border-t md:border-t-0 border-foreground/10 first:border-t-0"
            >
              <h4 className="font-display text-sm font-semibold text-foreground">{g.label}</h4>
              <p className="mt-1.5 text-xs text-foreground/55 leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-10"
          >
            Sıkça sorulan sorular
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: EASE_OUT }}
                className="rounded-xl border border-foreground/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-foreground text-sm md:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-dawn-600 dark:text-dawn-300 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                      className="px-6 text-sm text-foreground/55 leading-relaxed overflow-hidden"
                    >
                      <div className="pb-5 pt-1 border-t border-foreground/10 mt-1">{faq.answer}</div>
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
