import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { GraduationCap, Briefcase, Wrench, Heart, Check, Sparkles, Megaphone, Target } from 'lucide-react';

export default function Slide07WhyMe() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col h-full px-20 py-14 gap-8">
        <div>
          <span className="fs-eyebrow" style={{ color: 'hsl(var(--slide-accent-light))' }}>07 · Why me, why now</span>
          <h2 className="text-white" style={{ fontSize: 72, lineHeight: 1.0 }}>
            The <span style={{ color: 'hsl(var(--slide-accent-light))' }}>right person</span>, at the <span style={{ color: 'hsl(var(--slide-accent-light))' }}>right moment</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
          {/* Why me */}
          <div className="fs-card-dark flex flex-col gap-5" style={{ padding: 32 }}>
            <span className="fs-eyebrow" style={{ color: 'hsl(var(--slide-accent-light))', fontSize: 16 }}>Why me</span>
            {[
              { icon: GraduationCap, title: "Master's in Digital Transformation", body: 'Trained to ship technology-led change.' },
              { icon: Briefcase, title: 'Undergraduate degree in Business', body: 'Commercial fluency: pricing, growth, ops.' },
              { icon: Wrench, title: 'Built the prototype solo', body: 'From brand to working iOS UI in 12 weeks.' },
              { icon: Heart, title: 'I am the customer', body: 'Urban 20s, gym member, lived the skip cycle.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-2xl flex-shrink-0" style={{ width: 56, height: 56, background: 'hsl(var(--slide-accent) / 0.2)' }}>
                  <Icon className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent-light))' }} strokeWidth={2.2} />
                </div>
                <div className="flex flex-col">
                  <span style={{ fontSize: 24, fontWeight: 700, color: '#fff' }}>{title}</span>
                  <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.65)' }}>{body}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Why now + support */}
          <div className="flex flex-col gap-5">
            <div className="fs-card-dark flex flex-col gap-4" style={{ padding: 32 }}>
              <span className="fs-eyebrow" style={{ color: 'hsl(var(--slide-accent-light))', fontSize: 16 }}>Why now</span>
              {[
                'Wearables are ubiquitous — verification is finally trivial.',
                'Post-pandemic accountability gap — solo habits are fragile.',
                'Gen Z is comfortable mixing money, social, and health.',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <Check className="w-7 h-7 flex-shrink-0 mt-1" style={{ color: 'hsl(var(--slide-accent-light))' }} strokeWidth={3} />
                  <span style={{ fontSize: 22, color: '#fff', lineHeight: 1.35 }}>{t}</span>
                </div>
              ))}
            </div>

            <div className="fs-card-dark flex flex-col gap-3" style={{ padding: 32, background: 'hsl(var(--slide-accent))', border: 'none', color: '#fff' }}>
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
