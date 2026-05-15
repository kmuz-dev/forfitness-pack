import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';

export default function Slide02Vision() {
  return (
    <MSSlideLayout variant="default">
      <div className="grid grid-cols-12 gap-10 h-full px-20 py-16">
        <div className="col-span-5 flex flex-col justify-center gap-8">
          <span className="fs-eyebrow">01 · Vision</span>
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: 24, color: 'hsl(var(--slide-gray-500))' }}>Founder</span>
            <span className="fs-stat" style={{ fontSize: 48, color: 'hsl(var(--slide-gray-900))' }}>Kudakwashe Mutasa</span>
          </div>
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: 24, color: 'hsl(var(--slide-gray-500))' }}>Building</span>
            <span className="fs-stat" style={{ fontSize: 56, color: 'hsl(var(--slide-accent))', letterSpacing: '-0.02em' }}>FORFEITNESS</span>
          </div>
        </div>

        <div className="col-span-7 flex flex-col justify-center gap-10 border-l pl-12" style={{ borderColor: 'hsl(var(--slide-gray-200))' }}>
          <span className="fs-eyebrow">One-line vision</span>
          <h2 style={{ fontSize: 60, lineHeight: 1.1, color: 'hsl(var(--slide-gray-900))' }}>
            A weekly fitness pact between mates that turns social pressure into skin in the game, because{' '}
            <span style={{ color: 'hsl(var(--slide-accent))' }}>"I'll go tomorrow" just got expensive.</span>
          </h2>
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="fs-pill">Financial</span>
            <span className="fs-pill">Behavioral</span>
            <span className="fs-pill">Accountability</span>
            <span className="fs-pill">Community</span>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
