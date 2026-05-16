import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';

export default function Slide01Title() {
  return (
    <MSSlideLayout variant="default" logoPosition="center">
      <div className="flex flex-col h-full px-20 py-16 justify-between relative">
        <div className="flex items-center gap-4 relative z-10">
          <span className="fs-eyebrow">Pitch Deck · 2026</span>
        </div>

        <div className="flex items-center relative z-10">
          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                fontSize: 133,
                lineHeight: 0.9,
                color: 'hsl(var(--slide-accent))',
              }}
            >
              FORFEITNESS
            </h1>
            <div className="fs-divider-lime" />
            <p
              className="max-w-5xl"
              style={{
                fontSize: 44,
                lineHeight: 1.2,
                fontWeight: 600,
                color: 'hsl(var(--slide-gray-800))',
                fontFamily: 'Syne, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Pledge your money. Hit your target. Earn it—or hand it to your mates.
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between relative z-10">
          <div className="flex flex-col gap-2">
            <span style={{ fontSize: 22, color: 'hsl(var(--slide-gray-500))' }}>Founder</span>
            <span style={{ fontSize: 28, fontWeight: 600, color: 'hsl(var(--slide-gray-900))' }}>Kudakwashe Mutasa</span>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
