import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

/**
 * Shared OG/Twitter share-card renderer. Reuses the site's real brand mark
 * (the logo icon + "ZORA" wordmark from the navbar) and its dawn color
 * tokens, so link previews on WhatsApp/LinkedIn/Twitter match the actual
 * site instead of showing a blank card.
 */
export async function renderOgImage() {
  const logoSrc = await fetch(new URL('./assets/logo-icon-v4.png', import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090d',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: '50%',
            backgroundColor: 'rgba(201,122,66,0.16)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            right: -100,
            width: 420,
            height: 420,
            borderRadius: '50%',
            backgroundColor: 'rgba(179,95,52,0.14)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img
            src={logoSrc as unknown as string}
            width={104}
            height={91}
            style={{ display: 'flex' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#f5f2ec', letterSpacing: -1 }}>
              ZORA
            </div>
            <div style={{ display: 'flex', fontSize: 20, fontWeight: 600, letterSpacing: 6, color: 'rgba(245,242,236,0.5)', marginTop: -4 }}>
              YAZILIM
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 40,
            fontSize: 30,
            fontWeight: 500,
            color: 'rgba(245,242,236,0.75)',
            textAlign: 'center',
            maxWidth: 820,
          }}
        >
          Web ve Yapay Zeka Çözümleri
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
