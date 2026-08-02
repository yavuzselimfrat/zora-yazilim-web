'use client';

import React from 'react';
import { Bot, Cpu, Globe, Cloud, ShieldCheck, Zap } from 'lucide-react';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceCard[] = [
  {
    icon: <Bot className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
    title: 'Otonom Yapay Zeka Ajanları',
    description:
      'İş süreçlerinizi otomatikleştiren, LLM ve Multi-Agent sistemler üzerine kurulu akıllı otonom ajan çözümleri.',
    tags: ['Multi-Agent', 'LLM', 'LangChain', 'CrewAI'],
  },
  {
    icon: <Cpu className="w-7 h-7 text-purple-600 dark:text-purple-400" />,
    title: 'Ölçeklenebilir Mimariler',
    description:
      'Yüksek trafik ve veri yükü altında kesintisiz çalışan, mikrohizmet odaklı ve esnek backend sistemleri.',
    tags: ['Node.js', 'Distributed Systems', 'SaaS Architecture'],
  },
  {
    icon: <Globe className="w-7 h-7 text-pink-600 dark:text-pink-400" />,
    title: 'Modern Web Platformları',
    description:
      'SEO uyumlu, ultra hızlı responsive web uygulamaları ve dinamik kullanıcı deneyimleri.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    icon: <Cloud className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: 'Bulut Ve Sunucu Yönetimi',
    description:
      'Performans optimizasyonu yapılmış, güvenli ve esnek cloud dağıtım ile sunucu yapılandırmaları.',
    tags: ['Docker', 'DevOps', 'Plesk/cPanel', 'CI/CD'],
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
    title: 'Güvenlik & Kod Analizi',
    description:
      'Yazılım projeleriniz için kod kalitesi, performans testleri ve güvenlik standartlarına uyum çözümleri.',
    tags: ['Clean Code', 'Security Audit', 'Performance Tuning'],
  },
  {
    icon: <Zap className="w-7 h-7 text-amber-600 dark:text-amber-400" />,
    title: 'Özel API Entegrasyonları',
    description:
      'Üçüncü parti servisler, ödeme sistemleri ve veri kaynakları ile sorunsuz ve hızlı entegrasyonlar.',
    tags: ['REST API', 'GraphQL', 'Webhooks'],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="cozumler" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
      {/* Arkaplan Şeffaf Işık Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* BAŞLIK VE AÇIKLAMA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Çözümlerimiz
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Geleceğin Teknolojilerini <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Bugünden İnşa Ediyoruz
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">
            İhtiyacınıza özel, yüksek performanslı ve sürdürülebilir yazılım çözümleriyle dijital dönüşümünüzü hızlandırın.
          </p>
        </div>

        {/* HİZMET KARTLARI GRİDİ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                {/* İkon Alanı */}
                <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Başlık ve Açıklama */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
                  {service.description}
                </p>
              </div>

              {/* Etiketler (Tags) */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-transparent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;