import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          position: 'relative',
        }}
      >
        {/* Gradient background */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #5865F2 0%, #9333EA 50%, #EC4899 100%)',
            borderRadius: '6px',
          }}
        />

        {/* FS Text */}
        <div
          style={{
            position: 'relative',
            fontSize: '18px',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          FS
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
