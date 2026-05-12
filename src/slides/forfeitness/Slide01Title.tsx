import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';

export default function Slide01Title() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col h-full px-20 py-16 justify-between">
        <div className="flex items-center gap-4">
          <span className="fs-eyebrow" style={{ color: 'hsl(var(--slide-gray-400))' }}>
            Pitch Deck · 2026
          </span>
        </div>

        <div className="flex flex-col gap-10">
          <h1
            className="fs-stat text-white"
            style={{ fontSize: 220, lineHeight: 0.9 }}
          >
            FORFEIT<span style={{ color: 'hsl(var(--slide-accent-light))' }}>NESS</span>
          </h1>
          <div className="fs-divider-lime" />
          <p className="text-white/85 max-w-3xl" style={{ fontSize: 40, lineHeight: 1.25, fontWeight: 500 }}>
            Skipping the gym should cost something.
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-white/60" style={{ fontSize: 22 }}>Founder</span>
            <span className="text-white" style={{ fontSize: 28, fontWeight: 600 }}>Your Name</span>
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
