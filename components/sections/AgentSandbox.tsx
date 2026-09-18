'use client';

import React, { useState } from 'react';
import { Play, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const agentScenarios = [
  {
    id: 'inventory',
    title: 'Stok Otomasyonu',
    desc: 'Kritik stok seviyelerini tespit edip otomatik tedarik siparişi oluşturur.',
    steps: [
      { label: 'SORGU', text: 'Depo veritabanı kontrol ediliyor, kritik stok seviyeleri tespit ediliyor' },
      { label: 'ARAÇ', text: 'Tedarikçi sistemine bağlanılıyor, fiyat karşılaştırması yapılıyor' },
      { label: 'SONUÇ', text: '150 adet yedek parça siparişi oluşturuldu' },
    ],
  },
  {
    id: 'support',
    title: 'Müşteri Destek',
    desc: 'Gelen teknik faturayı ve sözleşmeyi analiz edip müşteriye yanıt döner.',
    steps: [
      { label: 'SORGU', text: 'Sözleşme metninde ilgili bölüm otomatik olarak bulunuyor' },
      { label: 'ARAÇ', text: 'Sözleşme maddesi 4.2 doğrulandı, yanıt taslağı hazırlanıyor' },
      { label: 'SONUÇ', text: 'KVKK uyumlu teknik destek yanıtı iletildi' },
    ],
  },
];

/**
 * Örnek bir ajan akışını canlandıran interaktif önizleme. Adımlar önceden
 * yazılmış bir senaryoyu takip eder; gerçek bir üretim çağrısı değildir.
 * Pencere çerçevesi (trafik ışıkları + dosya adı) bunu bir kod/terminal
 * ekran görüntüsü gibi okutmak için — özel bir widget değil, gerçek bir
 * araç penceresi hissi.
 */
const AgentSandbox: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(agentScenarios[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);

  const runSimulation = (scenario: typeof agentScenarios[0]) => {
    setActiveScenario(scenario);
    setIsRunning(true);
    setCurrentStep(0);
    setTimeout(() => setCurrentStep(1), 1100);
    setTimeout(() => setCurrentStep(2), 2200);
    setTimeout(() => setIsRunning(false), 2900);
  };

  return (
    <div className="rounded-lg bg-[#0d0d12] border border-white/10 text-slate-100 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <span className="ml-1 text-[11px] font-mono text-slate-500">agent-runner.ts</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-white/10">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-white truncate">Ajan Çalışma Önizlemesi</p>
          <p className="text-[11px] text-slate-500 truncate">{activeScenario.desc}</p>
        </div>
        <div className="flex gap-1.5 shrink-0">
          {agentScenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => runSimulation(sc)}
              disabled={isRunning}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-colors duration-200 flex items-center gap-1 ${
                activeScenario.id === sc.id
                  ? 'bg-dawn text-white'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              <Play className="w-2.5 h-2.5" />
              <span>{sc.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 font-mono text-[12px] space-y-3 min-h-[168px]">
        {currentStep >= 0 && (
          <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-2">
            <span className="text-dawn-400 shrink-0">[{activeScenario.steps[0].label}]</span>
            <span className="text-slate-300">{activeScenario.steps[0].text}</span>
          </motion.div>
        )}
        {currentStep >= 1 && (
          <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-2">
            <span className="text-dawn-500 shrink-0">[{activeScenario.steps[1].label}]</span>
            <span className="text-slate-300">{activeScenario.steps[1].text}</span>
          </motion.div>
        )}
        {currentStep >= 2 && (
          <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-2 pt-2 border-t border-white/10 text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <span>{activeScenario.steps[2].text}</span>
          </motion.div>
        )}
        {isRunning && currentStep < 2 && (
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <Loader2 className="w-3 h-3 animate-spin" />
            <span>Ajan adımı işleniyor</span>
          </div>
        )}
        {currentStep === -1 && !isRunning && (
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <span>Bir senaryo seçip adımları izleyin.</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
              className="inline-block w-[6px] h-[13px] bg-dawn-400/70"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentSandbox;
