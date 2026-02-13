import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get('title') || 'FlowShot';
    const subtitle = searchParams.get('subtitle') || 'Operating System for Photo & Video Studios';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            padding: '60px',
          }}
        >
          {/* Main Content Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '32px',
              padding: '80px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxWidth: '1000px',
            }}
          >
            {/* Logo/Title */}
            <div
              style={{
                fontSize: 80,
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: 32,
                color: '#64748b',
                textAlign: 'center',
                maxWidth: '800px',
                lineHeight: 1.4,
                marginBottom: '40px',
              }}
            >
              {subtitle}
            </div>

            {/* Features Pills */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {['Offer Catalog', 'Project Pipeline', 'Team Management', 'Brand Kit'].map((feature) => (
                <div
                  key={feature}
                  style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Text */}
            <div
              style={{
                marginTop: '48px',
                fontSize: 24,
                color: '#94a3b8',
                fontWeight: 500,
              }}
            >
              Built by creators, for creators
            </div>
          </div>

          {/* Bottom Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '16px 32px',
              borderRadius: '16px',
              fontSize: 20,
              color: '#64748b',
              fontWeight: 600,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
          >
            flowshot.app
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: unknown) {
    console.log(e instanceof Error ? e.message : 'Unknown error');
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
