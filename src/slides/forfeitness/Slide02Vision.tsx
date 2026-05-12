import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';

export default function Slide02Vision() {
  return (
    <MSSlideLayout variant="default">
      <div className="grid grid-cols-12 gap-12 h-full px-20 py-16">
        <div className="col-span-5 flex flex-col justify-center gap-8">
          <span className="fs-eyebrow">01 · Vision</span>
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: 24, color: 'hsl(var(--slide-gray-500))' }}>Founder</span>
            <span className="fs-stat" style={{ fontSize: 56, color: 'hsl(var(--slide-gray-900))' }}>Your Name</span>
          </div>
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: 24, color: 'hsl(var(--slide-gray-500))' }}>Building</span>
            <span className="fs-stat" style={{ fontSize: 80, color: 'hsl(var(--slide-accent))' }}>FORFEITNESS</span>
          </div>
        </div>

        <div className="col-span-7 flex flex-col justify-center gap-10 border-l pl-12" style={{ borderColor: 'hsl(var(--slide-gray-200))' }}>
          <span className="fs-eyebrow">One-line vision</span>
          <h2 style={{ fontSize: 64, lineHeight: 1.1, color: 'hsl(var(--slide-gray-900))' }}>
            A weekly fitness pact between mates —{' '}
            <span style={{ color: 'hsl(var(--slide-accent))' }}>backed by money</span> —
            so showing up beats skipping out.
          </h2>
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="fs-pill">Social</span>
            <span className="fs-pill">Accountable</span>
            <span className="fs-pill">Financial stake</span>
            <span className="fs-pill">Friend-led</span>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
