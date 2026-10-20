'use client';

import React, { useState } from 'react';

interface Summary {
  today: number;
  last7Days: number;
  last30Days: number;
  allTime: number;
  topPages: { path: string; count: number }[];
}

export default function IstatistiklerPage() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');
  const [summary, setSummary] = useState<Summary | null>(null);

  const handleLoad = async () => {
    if (status === 'loading') return;
    if (!password.trim()) {
      setStatus('error');
      setErrorText('Şifreyi gir.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/istatistikler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        const errorMessages: Record<string, string> = {
          wrong_password: 'Şifre yanlış.',
          server_not_configured: 'Sunucuda bülten şifresi tanımlı değil.',
        };
        setErrorText(errorMessages[data.error] || 'Yüklenemedi, tekrar dene.');
        setStatus('error');
        return;
      }

      setSummary(data.summary);
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorText('Bağlantı hatası, tekrar dene.');
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-start justify-center px-6 py-24">
      <div className="w-full max-w-2xl space-y-8">
        <div>
          <h1 className="font-display text-2xl font-semibold">Ziyaretçi İstatistikleri</h1>
          <p className="mt-2 text-sm text-foreground/55">
            Kişisel veri tutmadan, sadece anonim sayfa görüntülenme sayısı.
          </p>
        </div>

        {!summary && (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleLoad();
              }}
              placeholder="Şifre"
              className="w-full px-4 py-3 rounded-lg border border-foreground/15 bg-transparent text-foreground text-sm focus:outline-none focus:border-dawn-500/50"
            />
            <button
              onClick={handleLoad}
              disabled={status === 'loading'}
              className="shrink-0 px-6 py-3 rounded-lg bg-dawn text-white font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-[filter,transform] duration-200 disabled:opacity-60"
            >
              {status === 'loading' ? 'Yükleniyor...' : 'Göster'}
            </button>
          </div>
        )}

        {status === 'error' && errorText && <p className="text-sm text-red-500">{errorText}</p>}

        {summary && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Bugün', value: summary.today },
                { label: 'Son 7 gün', value: summary.last7Days },
                { label: 'Son 30 gün', value: summary.last30Days },
                { label: 'Toplam', value: summary.allTime },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-2xl border border-foreground/10">
                  <div className="text-2xl font-display font-semibold">{stat.value}</div>
                  <div className="mt-1 text-xs text-foreground/50">{stat.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-sm font-semibold text-foreground/70 mb-3">En çok görüntülenen sayfalar</h2>
              {summary.topPages.length === 0 ? (
                <p className="text-sm text-foreground/50">Henüz veri yok.</p>
              ) : (
                <div className="divide-y divide-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
                  {summary.topPages.map((p) => (
                    <div key={p.path} className="flex items-center justify-between px-5 py-3 text-sm">
                      <span className="text-foreground/80">{p.path === '/' ? 'Ana Sayfa' : p.path}</span>
                      <span className="font-semibold">{p.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
