'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="iletisim" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* BAŞLIK */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            İletişim & Teklif
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projenizi Birlikte <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Hayata Geçirelim
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Aklınızdaki fikri veya ihtiyacınızı paylaşın, en kısa sürede size özel teknik mimari ve teklifimizle dönüş yapalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* İLETİŞİM BİLGİLERİ (SOL) */}
          <div className="lg:col-span-5 space-y-8 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Bize Ulaşın
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Sorularınız veya iş birlikleri için aşağıdaki kanallardan doğrudan bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">E-Posta</h4>
                  <p className="text-base font-medium text-slate-900 dark:text-slate-200 mt-0.5">contact@zorayazilim.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Telefon</h4>
                  <p className="text-base font-medium text-slate-900 dark:text-slate-200 mt-0.5">+90 (850) 000 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Lokasyon</h4>
                  <p className="text-base font-medium text-slate-900 dark:text-slate-200 mt-0.5">İstanbul / Türkiye</p>
                </div>
              </div>
            </div>
          </div>

          {/* İLETİŞİM FORMU (SAĞ) */}
          <div id="teklif" className="lg:col-span-7 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Mesajınız Alındı!</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-sm">
                  Talebiniz ekibimize ulaştı. En kısa sürede inceleyip belirttiğiniz e-posta adresi üzerinden dönüş yapacağız.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Orh. Ahmet Yılmaz"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      E-Posta Adresiniz
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ahmet@sirket.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Proje Konusu
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Yapay Zeka Tabanlı SaaS Uygulaması"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Mesajınız / Detaylar
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Projenizden, hedeflerinizden veya beklediğiniz özelliklerden kısaca bahsedin..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Teklif Talebi Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;