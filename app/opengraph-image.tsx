import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Zora Yazılım — Web ve Yapay Zeka Çözümleri';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#120c08',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(217,119,6,0.35) 0%, rgba(18,12,8,0) 45%), radial-gradient(circle at 85% 85%, rgba(194,65,12,0.30) 0%, rgba(18,12,8,0) 50%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #f59e0b, #c2410c)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            Z
          </div>
          <div style={{ display: 'flex', fontSize: 56, fontWeight: 700, color: 'white' }}>
            ZORA<span style={{ color: '#f59e0b' }}>.</span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 48,
            fontSize: 40,
            fontWeight: 600,
            color: 'white',
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          Web siteniz ve yapay zeka sistemleriniz için, ölçeğinize uygun çözümler.
        </div>
        <div style={{ display: 'flex', marginTop: 32, fontSize: 24, color: 'rgba(255,255,255,0.55)' }}>
          zorayazilim.com
        </div>
      </div>
    ),
    { ...size }
  );
}
