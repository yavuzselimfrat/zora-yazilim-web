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

export const articles: Article[] = [
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

export const categories = ['Tümü', 'Yapay Zeka', 'Web Siteleri', 'Büyüme'];

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

const TURKISH_MONTHS: Record<string, string> = {
  'ocak': '01',
  'şubat': '02',
  'mart': '03',
  'nisan': '04',
  'mayıs': '05',
  'haziran': '06',
  'temmuz': '07',
  'ağustos': '08',
  'eylül': '09',
  'ekim': '10',
  'kasım': '11',
  'aralık': '12',
};

/**
 * "Ağustos 2026" gibi ay+yıl metnini ISO tarihe (ayın 1'i) çevirir.
 * Günü belirtmiyoruz çünkü makalelerin tam yayın günü kayıtlı değil —
 * sadece ay/yıl biliniyor; structured data için en yakın güvenilir
 * yaklaşım bu. Çözümlenemezse undefined döner.
 */
export function articleDateToIso(dateLabel: string): string | undefined {
  const parts = dateLabel.trim().toLowerCase().split(' ');
  if (parts.length !== 2) return undefined;
  const [monthName, year] = parts;
  const month = TURKISH_MONTHS[monthName];
  if (!month || !/^\d{4}$/.test(year)) return undefined;
  return `${year}-${month}-01`;
}
