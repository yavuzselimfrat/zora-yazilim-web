'use client';

import React, { useState } from 'react';

export default function BultenGonderPage() {
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [resultText, setResultText] = useState('');

  const handleSend = async () => {
    if (status === 'loading') return;
    if (!password.trim() || !subject.trim() || !message.trim()) {
      setStatus('error');
      setResultText('Tüm alanları doldur.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/bulten-gonder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, subject, message }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        const errorMessages: Record<string, string> = {
          wrong_password: 'Şifre yanlış.',
          server_not_configured: 'Sunucuda bülten şifresi tanımlı değil.',
          smtp_not_configured: 'Sunucuda e-posta ayarları eksik.',
          missing_fields: 'Eksik bilgi var.',
        };
        setResultText(errorMessages[data.error] || 'Gönderilemedi, tekrar dene.');
        setStatus('error');
        return;
      }

      setResultText(`${data.sent} aboneye gönderildi${data.failed ? `, ${data.failed} tanesi başarısız oldu` : ''} (toplam ${data.total} abone).`);
      setStatus('success');
      setSubject('');
      setMessage('');
    } catch {
      setStatus('error');
      setResultText('Bağlantı hatası, tekrar dene.');
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-lg space-y-6">
        <div>
          <h1 className="font-display text-2xl font-semibold">Bülten Gönder</h1>
          <p className="mt-2 text-sm text-foreground/55">
            Blog&apos;dan abone olan herkese e-posta gönderir. Bu sayfa herkese açık değil, sadece linki bilenler görür.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-foreground/60 mb-1.5">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-foreground/15 bg-transparent text-foreground text-sm focus:outline-none focus:border-dawn-500/50"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-foreground/60 mb-1.5">Konu</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Örn: Yeni yazı: Web siteniz neden yavaş açılıyor olabilir?"
              className="w-full px-4 py-3 rounded-lg border border-foreground/15 bg-transparent text-foreground placeholder-foreground/35 text-sm focus:outline-none focus:border-dawn-500/50"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-foreground/60 mb-1.5">Mesaj</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              placeholder="Abonelere gidecek metni buraya yaz."
              className="w-full px-4 py-3 rounded-lg border border-foreground/15 bg-transparent text-foreground placeholder-foreground/35 text-sm focus:outline-none focus:border-dawn-500/50 resize-none"
            />
          </div>

          <button
            onClick={handleSend}
            disabled={status === 'loading'}
            className="w-full px-6 py-3.5 rounded-lg bg-dawn text-white font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-[filter,transform] duration-200 disabled:opacity-60"
          >
            {status === 'loading' ? 'Gönderiliyor...' : 'Abonelere Gönder'}
          </button>

          {resultText && (
            <p className={`text-sm ${status === 'success' ? 'text-dawn-600 dark:text-dawn-300' : 'text-red-500'}`}>
              {resultText}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
