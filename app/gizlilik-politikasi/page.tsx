'use client';

import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';
import { motion } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sections = [
  {
    title: 'Hangi verileri topluyoruz',
    body: [
      'İletişim formunu doldurduğunuzda; adınızı, e-posta adresinizi, seçtiğiniz hizmet ve bütçe bilgisini (belirtirseniz) ve projeniz hakkında yazdığınız açıklamayı alırız.',
      'WhatsApp butonuna tıkladığınızda sizi doğrudan WhatsApp uygulamasına yönlendiririz; bu görüşmede paylaştığınız bilgiler WhatsApp’ın kendi gizlilik koşullarına tabidir.',
      'Sitede karanlık/aydınlık tema tercihiniz, tarayıcınızda yerel olarak saklanır; bu bilgi bizim sunucularımıza gönderilmez.',
    ],
  },
  {
    title: 'Verilerinizi ne için kullanıyoruz',
    body: [
      'Paylaştığınız bilgileri yalnızca talebinizi değerlendirmek, sizinle iletişime geçmek ve varsa teklif sürecini yürütmek için kullanırız.',
      'Verileriniz pazarlama amacıyla üçüncü taraflara satılmaz veya kiralanmaz.',
    ],
  },
  {
    title: 'Çerezler',
    body: [
      'Site, oturum ve tema tercihi gibi temel işlevler dışında takip amaçlı reklam veya analiz çerezi kullanmaz. Bu durum değişirse bu sayfayı güncelleriz.',
    ],
  },
  {
    title: 'Verilerin saklanması ve güvenliği',
    body: [
      'Bize ulaştırdığınız bilgileri, talebinizle ilgili yazışma süresince ve makul bir süre boyunca saklarız; gereksiz yere uzun süre tutmayız.',
      'Verilerinizi yetkisiz erişime karşı korumak için makul teknik ve idari önlemler alırız.',
    ],
  },
  {
    title: 'KVKK kapsamındaki haklarınız',
    body: [
      '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, düzeltilmesini veya silinmesini isteme haklarına sahipsiniz.',
      'Bu haklarınızı kullanmak için contact@zorayazilim.com adresinden bizimle iletişime geçebilirsiniz.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Gizlilik Politikası' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]"
          >
            Gizlilik Politikası
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
            className="mt-5 text-base text-foreground/55 leading-relaxed"
          >
            Bu sayfa, Zora Yazılım olarak hangi verileri topladığımızı, bunları nasıl kullandığımızı
            ve haklarınızı basit bir dille açıklar. Son güncelleme: Eylül 2026.
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: EASE_OUT }}
              className="border-t border-foreground/10 pt-8"
            >
              <h2 className="font-display text-lg md:text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((p) => (
                  <p key={p} className="text-sm md:text-base text-foreground/60 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
