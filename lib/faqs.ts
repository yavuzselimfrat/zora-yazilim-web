export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Mevcut sistemlerimizle çalışabilir misiniz?',
    answer:
      'Evet. Kullandığınız sistemlere dokunmadan, onlarla konuşacak şekilde entegrasyon kurarız — sıfırdan başlamanız gerekmez.',
  },
  {
    question: 'Yapay zeka sistemi kendi sunucularımızda çalışabilir mi?',
    answer:
      'Evet, tercihinize göre. İsterseniz kendi sunucularınızda, isterseniz bizim önerdiğimiz altyapıda çalıştırabiliriz; karar veri gizliliği önceliklerinize göre birlikte verilir.',
  },
  {
    question: 'Proje bittikten sonra destek alıyor muyuz?',
    answer: 'Evet. Siteniz ya da sisteminiz yayına alındıktan sonra da düzenli destek ve bakım sağlıyoruz.',
  },
  {
    question: 'Fiyatlandırma ve ödeme nasıl işliyor?',
    answer:
      'Projenin kapsamına göre sabit fiyat ya da aylık çalışma modeli sunuyoruz. Ödemeler proje aşamalarına bağlı olarak parçalar halinde alınır.',
  },
  {
    question: 'Küçük bir işletme olarak da başvurabilir miyiz?',
    answer:
      'Kesinlikle. Sadece büyük kurumsal projelerle çalışmıyoruz; küçük bir işletmenin ilk web sitesinden büyük bir şirketin sistemine kadar, ölçeğinize uygun şekilde çalışıyoruz.',
  },
];
