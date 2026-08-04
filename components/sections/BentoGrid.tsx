'use client';

import React, { useState } from 'react';
import { Bot, Cpu, Layers, Sparkles, Terminal, Play, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const agentScenarios = [
  {
    id: 'inventory',
    title: 'Stok Otomasyon Ajanı',
    desc: 'Kritik stok seviyelerini tespit edip otomatik tedarik siparişi oluşturur.',
    steps: [
      { type: 'thought', text: 'Depo veritabanı sorgulanıyor... [SQL: SELECT * FROM stock WHERE level < min]' },
      { type: 'tool', text: 'Tedarikçi API entegrasyonu çağrıldı. Fiyat analizi yapılıyor...' },
      { type: 'result', text: 'Ajan Başarılı: 150 adet yedek parça siparişi oluşturuldu.' },
    ],
  },
  {
    id: 'support',
    title: 'B2B Müşteri Destek Ajanı',
    desc: 'Gelen teknik faturayı ve sözleşmeyi analiz edip müşteriye yanıt döner.',
    steps: [
      { type: 'thought', text: 'PDF sözleşme metni vektör veritabanından çekiliyor (RAG Search)...' },
      { type: 'tool', text: 'Sözleşme maddesi #4.2 doğrulandı. Yanıt taslağı hazırlanıyor...' },
      { type: 'result', text: 'Ajan Başarılı: KVKK uyumlu teknik destek yanıtı iletildi.' },
    ],
  },
];

const BentoGrid: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(agentScenarios[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);

  const runSimulation = (scenario: typeof agentScenarios[0]) => {
    setActiveScenario(scenario);
    setIsRunning(true);
    setCurrentStep(0);

    setTimeout(() => setCurrentStep(1), 1200);
    setTimeout(() => setCurrentStep(2), 2400);
    setTimeout(() => setIsRunning(false), 3200);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* ÜST BAŞLIK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Mühendislik Gücümüz
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Geleceğin Dijital Sistemleri İçin <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Modern Altyapı
            </span>
          </h2>
        </motion.div>

        {/* 🤖 LIVE AI AGENT PLAYGROUND / SIMULATOR TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-slate-100 shadow-2xl space-y-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  Zora AI Agent Execution Sandbox
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h3>
                <p className="text-xs text-slate-400">Multi-Agent otonom karar mekanizmasını canlı test edin.</p>
              </div>
            </div>

            {/* Senaryo Seçim Butonları */}
            <div className="flex flex-wrap gap-2">
              {agentScenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => runSimulation(sc)}
                  disabled={isRunning}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeScenario.id === sc.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  <Play className="w-3 h-3" />
                  <span>{sc.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Çıktı Alanı */}
          <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800/80 font-mono text-xs space-y-3 min-h-[160px]">
            <div className="text-slate-500 text-[11px]">// Senaryo: {activeScenario.desc}</div>

            {currentStep >= 0 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-indigo-400 flex items-start gap-2">
                <span>[THOUGHT]:</span>
                <span className="text-slate-300">{activeScenario.steps[0].text}</span>
              </motion.div>
            )}

            {currentStep >= 1 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-purple-400 flex items-start gap-2">
                <span>[TOOL CALL]:</span>
                <span className="text-slate-300">{activeScenario.steps[1].text}</span>
              </motion.div>
            )}

            {currentStep >= 2 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-emerald-400 font-bold flex items-center gap-2 pt-2 border-t border-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{activeScenario.steps[2].text}</span>
              </motion.div>
            )}

            {isRunning && currentStep < 2 && (
              <div className="flex items-center gap-2 text-slate-500 text-[11px] pt-1">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                <span>Ajan adımı işleniyor...</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* 3'LÜ BENTO KARTLARI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="md:col-span-2 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Multi-Agent & LLM Mimarileri</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                İş süreçlerinizi otomatikleştiren, kararlar alabilen ve karmaşık görevleri otonom şekilde yürüten özelleştirilmiş yapay zeka ajanları geliştiriyoruz.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-4 h-4" />
              <span>LangChain & CrewAI Entegrasyonları</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ölçeklenebilir Backend</h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Mikrohizmet mimarileri ile yüksek trafik altında tıkanmayan Node.js altyapıları.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-xs font-semibold text-purple-600 dark:text-purple-400">
              Mikrohizmet & Bulut
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;