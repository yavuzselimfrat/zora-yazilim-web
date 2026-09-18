'use client';

import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import React, { useState } from 'react';
import { ArrowUpRight, X, Clock, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AmbientGlow from '@/components/sections/AmbientGlow';

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 'ai-ajanlari-ne-kazandirir',
    title: 'Yapay zeka ajanları işletmenize gerçekte ne kazandırır?',
    category: 'Yapay Zeka',
    date: 'Ağustos 2026',
    readTime: '5 dk okuma',
    summary: 'Bir yapay zeka ajanı, ekibinizin her gün tekrar tekrar yaptığı işleri sizin yerinize üstlenen bir sistemdir. Bunun pratikte ne anlama geldiğine bakalım.',
    content: `
      <p>"Yapay zeka ajanı" kulağa karmaşık gelebilir ama fikir aslında basit: sisteme belirli bir görev tanımlarsınız, o da bu görevi sizin yerinize, insan müdahalesi olmadan tamamlar.</p>

      <h3>Nerede işe yarar?</h3>
      <p>Müşteri sorularını ilk aşamada yanıtlamak, gelen siparişleri stok sistemine işlemek, randevu taleplerini takvime yerleştirmek gibi tekrar eden işlerde büyük zaman kazandırır. Ekibiniz bu işlerle uğraşmak yerine daha önemli konulara odaklanabilir.</p>

      <h3>Her şeyi otomatikleştirmek zorunda değilsiniz</h3>
      <p>En iyi sonuç, küçük ve net tanımlı bir işten başlayıp zamanla genişletmekten geçiyor. Biz de projelere genelde böyle başlıyoruz: tek bir sorunu çözen, ölçülebilir bir sistemden.</p>
    `,
    featured: true,
  },
  {
    id: 'web-sitesi-neden-yavas',
    title: 'Web siteniz neden yavaş açılıyor olabilir?',
    category: 'Web Siteleri',
    date: 'Temmuz 2026',
    readTime: '4 dk okuma',
    summary: 'Yavaş açılan bir site hem ziyaretçi kaybettirir hem de Google aramalarında sizi geride bırakır. En sık karşılaştığımız nedenlere bakalım.',
    content: `
      <p>Bir ziyaretçi sitenizin açılmasını birkaç saniyeden fazla beklemez. Bu bekleme süresi uzadıkça hem ziyaretçi kaybedersiniz hem de Google, sitenizi arama sonuçlarında daha geride gösterir.</p>

      <h3>En sık karşılaştığımız nedenler</h3>
      <p>Sıkıştırılmamış büyük görseller, gereksiz eklentiler ve eski, verimsiz altyapılar yavaşlığın en büyük sebepleri arasında. Bunların çoğu, siteyi baştan kurarken doğru tercihler yapılarak önlenebilir.</p>

      <h3>Hız, tek seferlik bir iş değil</h3>
      <p>Bir siteyi hızlı teslim etmek yeterli değil; zamanla eklenen içerik ve görsellerle site yeniden yavaşlayabilir. Bu yüzden düzenli kontrolü de sürecin bir parçası olarak görüyoruz.</p>
    `,
  },
  {
    id: 'altyapi-ne-zaman-degismeli',
    title: 'Büyüyen bir işletme için altyapı ne zaman değişmeli?',
    category: 'Büyüme',
    date: 'Haziran 2026',
    readTime: '5 dk okuma',
    summary: 'İşiniz büyüdükçe ilk kurulan sistemler yetersiz kalabilir. Bunun sinyallerini erken fark etmek, ileride yaşanacak kesintilerin önüne geçer.',
    content: `
      <p>Küçük bir işletme için kurulan basit bir sistem, kullanıcı ve veri sayısı arttıkça yavaşlamaya, hatta zaman zaman çökmeye başlayabilir.</p>

      <h3>Dikkat edilmesi gereken belirtiler</h3>
      <p>Yoğun saatlerde sitenin veya uygulamanın yavaşlaması, sık sık hata almanız ya da yeni özellik eklemenin giderek zorlaşması, altyapının artık sınırlarına geldiğinin işaretleridir.</p>

      <h3>Büyüme öncesi planlamak daha ucuza gelir</h3>
      <p>Sistemi bir kriz anında değil, ihtiyaç belli olduğunda güçlendirmek hem daha az maliyetli hem de daha az riskli oluyor. Ölçeklenebilir sistemler kurarken bunu baştan göz önünde bulunduruyoruz.</p>
    `,
  },
  {
    id: 'yapay-zeka-veri-guvenligi',
    title: 'Yapay zeka ile çalışırken verileriniz güvende mi?',
    category: 'Yapay Zeka',
    date: 'Mayıs 2026',
    readTime: '4 dk okuma',
    summary: 'Kurumsal verileri bir yapay zeka sistemine bağlarken en çok sorulan soru bu. Sorunun cevabı, verinin nerede ve nasıl işlendiğinde gizli.',
    content: `
      <p>Bir yapay zeka sistemi kurarken müşterilerimizin en çok merak ettiği konu, hassas verilerinin nereye gittiği.</p>

      <h3>Veri nerede işleniyor?</h3>
      <p>Hangi verinin sisteme dahil edileceğini, nerede saklanacağını ve kimlerin erişebileceğini proje başında birlikte netleştiriyoruz. Gereğinden fazla veri asla sisteme dahil edilmez.</p>

      <h3>KVKK uyumluluğu bir seçenek değil</h3>
      <p>Türkiye'de faaliyet gösteren her sistem, kişisel verilerin korunmasına dair yasal yükümlülüklere uymak zorunda. Kurduğumuz sistemlerde bunu baştan bir gereklilik olarak ele alıyoruz.</p>
    `,
  },
];

const categories = ['Tümü', 'Yapay Zeka', 'Web Siteleri', 'Büyüme'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles = selectedCategory === 'Tümü'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const featuredArticle = articles.find((a) => a.featured);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="pt-40 pb-24 md:pt-48">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-16">
          {/* ÜST BAŞLIK */}
          <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Blog' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
              Blog
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/55 leading-relaxed">
              Yazılım ve yapay zeka üzerine, anlaşılır dilde yazılar.
            </p>
          </motion.div>

          {/* ÖNE ÇIKAN MAKALE */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-foreground/10 p-8 md:p-12"
            >
              <AmbientGlow />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between md:items-center">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/50">
                    <span className="px-3 py-1 rounded-full border border-dawn-500/30 text-dawn-600 dark:text-dawn-300 uppercase tracking-wider">
                      Öne çıkan yazı
                    </span>
                    <span>{featuredArticle.date}</span>
                    <span>·</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-sm md:text-base text-foreground/55 leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>
                <div className="shrink-0">
                  <button
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="w-full md:w-auto px-6 py-3.5 rounded-lg bg-dawn text-white font-semibold text-sm shadow-lg shadow-dawn-700/20 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.97] transition-[filter,transform] duration-200"
                  >
                    Makaleyi Oku <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* KATEGORİ FİLTRELERİ */}
          <div className="flex flex-wrap items-center gap-3 border-b border-foreground/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 ${
                  selectedCategory === cat
                    ? 'bg-dawn text-white'
                    : 'border border-foreground/15 text-foreground/60 hover:border-foreground/30 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* MAKALELER GRİDİ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveArticle(art)}
                className="p-7 rounded-2xl border border-foreground/10 hover:border-dawn-500/40 transition-colors duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-foreground/40 mb-4">
                    <span className="font-semibold text-dawn-600 dark:text-dawn-300 uppercase tracking-wide">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-dawn-600 dark:group-hover:text-dawn-300 transition-colors duration-200">
                    {art.title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed mb-6">{art.summary}</p>
                </div>
                <div className="pt-4 border-t border-foreground/10 flex items-center justify-between text-xs font-semibold text-foreground/70 group-hover:text-dawn-600 dark:group-hover:text-dawn-300 transition-colors duration-200">
                  <span>Okumaya devam et</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* BÜLTEN KUTUSU */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-foreground/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="max-w-md">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                Yeni yazılardan haberdar olun
              </h3>
              <p className="mt-2 text-sm text-foreground/55 leading-relaxed">
                Ayda bir, sadece yeni yazı yayınlandığında e-posta gönderiyoruz. Spam yok.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 md:min-w-[360px]">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-3 rounded-lg border border-foreground/15 bg-transparent text-foreground placeholder-foreground/35 text-sm focus:outline-none focus:border-dawn-500/50 transition-colors duration-200"
              />
              <button className="shrink-0 px-6 py-3 rounded-lg bg-dawn text-white font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-[filter,transform] duration-200">
                Abone Ol
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MAKALE MODALI */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-background border border-foreground/10 rounded-3xl p-6 md:p-10 shadow-2xl z-10 text-foreground"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-foreground/10 text-foreground/50 hover:text-foreground transition-colors duration-200"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 pr-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/50">
                  <span className="px-3 py-1 rounded-full border border-dawn-500/30 text-dawn-600 dark:text-dawn-300 uppercase">
                    {activeArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {activeArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {activeArticle.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {activeArticle.title}
                </h2>
              </div>

              <div className="my-6 border-b border-foreground/10" />

              <div
                className="prose dark:prose-invert max-w-none text-sm md:text-base text-foreground/65 leading-relaxed [&_h3]:font-display [&_h3]:text-foreground [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2"
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
              />

              <div className="mt-8 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Link
                  href="/iletisim"
                  className="text-xs font-semibold text-dawn-600 dark:text-dawn-300 hover:underline"
                >
                  Bu konuyu projenizde konuşmak ister misiniz? İletişime geçin →
                </Link>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="shrink-0 px-6 py-2.5 rounded-lg border border-foreground/15 text-xs font-semibold text-foreground/70 hover:border-foreground/30 hover:text-foreground transition-colors duration-200"
                >
                  Kapat
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
