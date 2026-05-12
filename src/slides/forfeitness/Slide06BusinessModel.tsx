import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { Megaphone, Users, Building2, Activity, ArrowRight } from 'lucide-react';

const revenue = [
  { stream: 'Subscription', value: 4.99, color: 'hsl(var(--slide-accent))' },
  { stream: 'Transaction fee (+2%)', value: 1.20, color: 'hsl(var(--slide-primary))' },
];

const milestones = ['100 pods', '1,000 paying users', 'Break-even'];

const channels = [
  { icon: Megaphone, title: 'Organic social', body: 'TikTok + Instagram UGC, relatable "skip" content.' },
  { icon: Users, title: 'Founder-seeded pods', body: 'Hand-picked friend groups in London, Manchester.' },
  { icon: Building2, title: 'Gyms & run clubs', body: 'Partnerships, in-app referral codes, leaderboards.' },
  { icon: Activity, title: 'Strava / Apple Health', body: 'Distribution inside apps users already open daily.' },
];

export default function Slide06BusinessModel() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-14 gap-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="fs-eyebrow">06 · Business Model & Growth</span>
            <h2 style={{ fontSize: 60, color: 'hsl(var(--slide-gray-900))', lineHeight: 1.05 }}>
              Two revenue streams. <span style={{ color: 'hsl(var(--slide-accent))' }}>Friend-led growth.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
          {/* Revenue */}
          <div className="col-span-5 fs-card flex flex-col gap-4" style={{ padding: 28 }}>
            <span className="fs-eyebrow" style={{ fontSize: 16 }}>Revenue per active user / month</span>

            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenue} layout="vertical" margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="stream" width={170} tick={{ fontSize: 16, fill: 'hsl(var(--slide-gray-700))', fontWeight: 600 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'hsl(var(--slide-gray-100))' }} formatter={(v: number) => `£${v.toFixed(2)}`} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={42}>
                    {revenue.map((r, i) => <Cell key={i} fill={r.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div style={{ fontSize: 14, color: 'hsl(var(--slide-gray-500))', fontWeight: 700, letterSpacing: 2 }}>SUBSCRIPTION</div>
                <div className="fs-stat" style={{ fontSize: 48, color: 'hsl(var(--slide-accent))' }}>£4.99<span style={{ fontSize: 22, color: 'hsl(var(--slide-gray-500))' }}>/mo</span></div>
              </div>
              <div>
                <div style={{ fontSize: 14, color: 'hsl(var(--slide-gray-500))', fontWeight: 700, letterSpacing: 2 }}>TRANSACTION FEE</div>
                <div className="fs-stat" style={{ fontSize: 48, color: 'hsl(var(--slide-gray-900))' }}>+2%<span style={{ fontSize: 22, color: 'hsl(var(--slide-gray-500))' }}>/stake</span></div>
              </div>
            </div>

            <div style={{ background: 'hsl(var(--slide-accent-muted))', borderRadius: 16, padding: '14px 18px', fontSize: 18, color: 'hsl(var(--slide-gray-700))' }}>
              At <strong>£15</strong> stake × 4 weeks → <strong>£1.20</strong>/user/mo from forfeit flow,
              on top of Stripe processing.
            </div>
          </div>

          {/* Growth engine */}
          <div className="col-span-7 flex flex-col gap-4">
            <span className="fs-eyebrow">Growth engine</span>
            <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
              {channels.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="fs-card flex flex-col gap-2" style={{ padding: 22 }}>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-2xl" style={{ width: 52, height: 52, background: 'hsl(var(--slide-accent-muted))' }}>
                      <Icon className="w-6 h-6" style={{ color: 'hsl(var(--slide-accent))' }} strokeWidth={2.2} />
                    </div>
                    <span className="fs-stat" style={{ fontSize: 32, color: 'hsl(var(--slide-gray-300))' }}>0{i + 1}</span>
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>{title}</div>
                  <div style={{ fontSize: 18, color: 'hsl(var(--slide-gray-600))', lineHeight: 1.4 }}>{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones strip */}
        <div className="flex items-center gap-3 pt-2">
          <span className="fs-eyebrow" style={{ fontSize: 16 }}>Milestones</span>
          {milestones.map((m, i) => (
            <React.Fragment key={m}>
              <span className="fs-pill" style={{ fontSize: 22 }}>{m}</span>
              {i < milestones.length - 1 && <ArrowRight className="w-5 h-5" style={{ color: 'hsl(var(--slide-gray-400))' }} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
