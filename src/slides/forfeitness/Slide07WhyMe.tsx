import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { GraduationCap, Briefcase, Wrench, Heart, Check, Sparkles, Megaphone, Target } from 'lucide-react';

export default function Slide07WhyMe() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-14 gap-8">
        <div>
          <span className="fs-eyebrow">07 · Why me, why now</span>
          <h2 style={{ fontSize: 72, lineHeight: 1.0, color: 'hsl(var(--slide-gray-900))' }}>
            The <span style={{ color: 'hsl(var(--slide-accent))' }}>right person</span>, at the <span style={{ color: 'hsl(var(--slide-accent))' }}>right moment</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
          {/* Why me */}
          <div className="fs-card flex flex-col gap-6 justify-center" style={{ padding: 44 }}>
            <span className="fs-eyebrow" style={{ fontSize: 18 }}>Why me</span>
            {[
              { icon: GraduationCap, title: "Master's in Digital Transformation", body: 'Trained to ship technology-led change.' },
              { icon: Briefcase, title: 'Undergraduate degree in Business', body: 'Commercial fluency: pricing, growth, ops.' },
              { icon: Wrench, title: 'Built the prototype solo', body: 'From brand to working iOS UI in 4 weeks.' },
              { icon: Heart, title: 'I am the customer', body: 'Urban 20s, gym member, lived the skip cycle.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="flex items-center justify-center rounded-2xl flex-shrink-0" style={{ width: 72, height: 72, background: 'hsl(var(--slide-accent-muted))' }}>
                  <Icon className="w-9 h-9" style={{ color: 'hsl(var(--slide-accent))' }} strokeWidth={2.2} />
                </div>
                <div className="flex flex-col gap-1">
                  <span style={{ fontSize: 30, fontWeight: 700, color: 'hsl(var(--slide-gray-900))', lineHeight: 1.1 }}>{title}</span>
                  <span style={{ fontSize: 22, color: 'hsl(var(--slide-gray-600))', lineHeight: 1.35 }}>{body}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Why now + support */}
          <div className="flex flex-col gap-5">
            <div className="fs-card flex flex-col gap-5 justify-center flex-1" style={{ padding: 40 }}>
              <span className="fs-eyebrow" style={{ fontSize: 18 }}>Why now</span>
              {[
                'Wearables are ubiquitous, so verification is finally trivial.',
                'A digitally native generation lives inside smart watches and tracks every workout.',
                'Health-conscious culture spans Gen Z and beyond; fitness is identity.',
                'Comfort mixing money, social, and health unlocks new product shapes.',
              ].map((t) => (
                <div key={t} className="flex items-start gap-4">
                  <Check className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: 'hsl(var(--slide-accent))' }} strokeWidth={3} />
                  <span style={{ fontSize: 24, color: 'hsl(var(--slide-gray-800))', lineHeight: 1.3 }}>{t}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3" style={{ padding: 32, borderRadius: 28, background: 'hsl(var(--slide-accent))', color: '#fff' }}>
              <span className="fs-eyebrow" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16 }}>What the support unlocks</span>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Sparkles, label: 'AI tools for build velocity' },
                  { icon: Megaphone, label: 'UGC content production' },
                  { icon: Target, label: 'Paid social acquisition' },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="fs-pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                    <Icon className="w-5 h-5" /> {label}
                  </span>
                ))}
              </div>
              <p className="fs-stat" style={{ fontSize: 32, lineHeight: 1.15, color: '#fff', marginTop: 8 }}>
                Let's make skipping cost something.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
