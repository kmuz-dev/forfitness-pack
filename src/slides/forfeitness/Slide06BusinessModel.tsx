import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Megaphone, Users, Building2, Activity } from 'lucide-react';

const channels = [
  { icon: Megaphone, title: 'Organic social', body: 'TikTok + Instagram UGC, relatable "skip" content drives top of funnel.' },
  { icon: Users, title: 'Founder-seeded pods', body: 'Hand-picked friend groups in London and Manchester to seed the network.' },
  { icon: Building2, title: 'Gyms & run clubs', body: 'Partnerships, in-app referral codes, branded leaderboards.' },
  { icon: Activity, title: 'Strava / Apple Health', body: 'Distribution inside apps users already open daily.' },
];

export default function Slide06BusinessModel() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-14 gap-8">
        <div>
          <span className="fs-eyebrow">06 · Business Model & Growth</span>
          <h2 style={{ fontSize: 60, color: 'hsl(var(--slide-gray-900))', lineHeight: 1.05 }}>
            Two revenue streams. <span style={{ color: 'hsl(var(--slide-accent))' }}>Friend-led growth.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
          {/* Revenue – fills full height, large numerals */}
          <div className="col-span-5 fs-card flex flex-col" style={{ padding: 36 }}>
            <span className="fs-eyebrow" style={{ fontSize: 16 }}>Revenue per active user / month</span>

            <div className="flex flex-col gap-6 flex-1 justify-center">
              <div className="flex flex-col gap-3 pb-6" style={{ borderBottom: '1px solid hsl(var(--slide-gray-200))' }}>
                <span style={{ fontSize: 16, color: 'hsl(var(--slide-gray-500))', fontWeight: 700, letterSpacing: 2 }}>SUBSCRIPTION</span>
                <div className="flex items-baseline gap-2">
                  <span className="fs-stat" style={{ fontSize: 96, color: 'hsl(var(--slide-accent))' }}>£4.99</span>
                  <span style={{ fontSize: 26, color: 'hsl(var(--slide-gray-500))' }}>/mo</span>
                </div>
                <span style={{ fontSize: 18, color: 'hsl(var(--slide-gray-600))' }}>
                  Predictable monthly recurring revenue per user.
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <span style={{ fontSize: 16, color: 'hsl(var(--slide-gray-500))', fontWeight: 700, letterSpacing: 2 }}>TRANSACTION FEE</span>
                <div className="flex items-baseline gap-2">
                  <span className="fs-stat" style={{ fontSize: 96, color: 'hsl(var(--slide-gray-900))' }}>+2%</span>
                  <span style={{ fontSize: 26, color: 'hsl(var(--slide-gray-500))' }}>/stake</span>
                </div>
                <span style={{ fontSize: 18, color: 'hsl(var(--slide-gray-600))' }}>
                  £15 stake × 4 weeks → <strong>£1.20</strong>/user/mo on top of Stripe.
                </span>
              </div>
            </div>

            <div style={{ background: 'hsl(var(--slide-accent-muted))', borderRadius: 16, padding: '16px 20px', fontSize: 22, color: 'hsl(var(--slide-gray-800))', marginTop: 16 }}>
              Blended ARPU ≈ <strong style={{ color: 'hsl(var(--slide-accent))' }}>£6.19</strong>/user/month.
            </div>
          </div>

          {/* Growth engine – larger boxes that fill space */}
          <div className="col-span-7 flex flex-col gap-4">
            <span className="fs-eyebrow">Growth engine</span>
            <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
              {channels.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="fs-card flex flex-col gap-4" style={{ padding: 32 }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center rounded-2xl" style={{ width: 72, height: 72, background: 'hsl(var(--slide-accent-muted))' }}>
                      <Icon className="w-9 h-9" style={{ color: 'hsl(var(--slide-accent))' }} strokeWidth={2.2} />
                    </div>
                    <span className="fs-stat" style={{ fontSize: 52, color: 'hsl(var(--slide-gray-300))' }}>0{i + 1}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div style={{ fontSize: 32, fontWeight: 700, color: 'hsl(var(--slide-gray-900))', lineHeight: 1.1 }}>{title}</div>
                    <div style={{ fontSize: 22, color: 'hsl(var(--slide-gray-600))', lineHeight: 1.4 }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
