import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import logo from '@/assets/forfeitness-logo.png';

export default function Slide01Title() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16 justify-between relative overflow-hidden">
        {/* Decorative oversized logo watermark */}
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{
            right: -120,
            bottom: -80,
            width: 720,
            height: 'auto',
            opacity: 0.05,
          }}
        />

        <div className="flex items-center gap-4 relative z-10">
          <span className="fs-eyebrow">Pitch Deck · 2026</span>
        </div>

        <div className="flex items-center gap-10 relative z-10">
          <img
            src={logo}
            alt="Forfeitness logo"
            style={{ width: 260, height: 'auto', flexShrink: 0 }}
          />
          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                fontSize: 133,
                lineHeight: 0.9,
                color: 'hsl(var(--slide-gray-900))',
              }}
            >
              FORFEIT<span style={{ color: 'hsl(var(--slide-accent))' }}>NESS</span>
            </h1>
            <div className="fs-divider-lime" />
            <p
              className="max-w-5xl"
              style={{
                fontSize: 58,
                lineHeight: 1.15,
                fontWeight: 600,
                color: 'hsl(var(--slide-gray-800))',
                fontFamily: 'Syne, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Skipping the gym should cost something.
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between relative z-10">
          <div className="flex flex-col gap-2">
            <span style={{ fontSize: 22, color: 'hsl(var(--slide-gray-500))' }}>Founder</span>
            <span style={{ fontSize: 28, fontWeight: 600, color: 'hsl(var(--slide-gray-900))' }}>Kudakwashe Mutasa</span>
          </div>
          <div className="fs-pill" style={{ background: 'hsl(var(--slide-accent))', color: '#fff', fontSize: 28, padding: '14px 28px' }}>
            <span className="fs-stat" style={{ fontSize: 32 }}>£15</span>
            <span style={{ fontWeight: 500 }}>weekly stake</span>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
