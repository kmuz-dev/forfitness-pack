import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Watch, Users, Sparkles, Network } from 'lucide-react';

const wearables = [
  { y: '20', v: 21 },
  { y: '21', v: 28 },
  { y: '22', v: 35 },
  { y: '23', v: 41 },
  { y: '24', v: 48 },
  { y: '25', v: 54 },
];

const runclubs = [
  { c: '22', n: 100 },
  { c: '23', n: 145 },
  { c: '24', n: 220 },
  { c: '25', n: 340 },
];

function TamSamSomCircles() {
  return (
    <svg viewBox="0 0 360 360" width="100%" height="100%">
      <circle cx={180} cy={180} r={170} fill="hsl(var(--slide-accent-muted))" />
      <circle cx={180} cy={210} r={110} fill="hsl(var(--slide-accent) / 0.35)" />
      <circle cx={180} cy={250} r={60} fill="hsl(var(--slide-accent))" />
      <text x={180} y={50} textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize={18} fontWeight={700} fill="hsl(var(--slide-gray-700))" letterSpacing={3}>TAM</text>
      <text x={180} y={140} textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize={18} fontWeight={700} fill="hsl(var(--slide-gray-700))" letterSpacing={3}>SAM</text>
      <text x={180} y={244} textAnchor="middle" fontFamily="Syne" fontSize={16} fontWeight={800} fill="#fff" letterSpacing={2}>SOM</text>
      <text x={180} y={272} textAnchor="middle" fontFamily="Syne" fontSize={26} fontWeight={800} fill="#fff">£6M</text>
    </svg>
  );
}

export default function Slide04Market() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-14 gap-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="fs-eyebrow">04 · Market Opportunity</span>
            <h2 style={{ fontSize: 64, color: 'hsl(var(--slide-gray-900))', lineHeight: 1.05 }}>
              Big market. <span style={{ color: 'hsl(var(--slide-accent))' }}>Perfect timing.</span>
            </h2>
          </div>
          <span className="fs-pill">Behaviour change is the unmet job</span>
        </div>

        <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
          {/* TAM/SAM/SOM */}
          <div className="col-span-5 fs-card flex flex-col gap-4" style={{ padding: 28 }}>
            <span className="fs-eyebrow" style={{ fontSize: 16 }}>Market sizing — UK (annual revenue)</span>
            <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
              <div className="flex items-center justify-center min-h-0">
                <TamSamSomCircles />
              </div>
              <div className="flex flex-col justify-center gap-5">
                {[
                  { label: 'TAM', val: '£900M', sub: '15M UK gym members + active adults' },
                  { label: 'SAM', val: '£210M', sub: '3.5M urban 18–30 with a wearable' },
                  { label: 'SOM', val: '£6M', sub: '80K users · pods in 4 UK cities (Y1–2)' },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col">
                    <span className="fs-eyebrow" style={{ fontSize: 14, color: 'hsl(var(--slide-accent))' }}>{row.label}</span>
                    <span className="fs-stat" style={{ fontSize: 40, color: 'hsl(var(--slide-gray-900))' }}>{row.val}</span>
                    <span style={{ fontSize: 17, color: 'hsl(var(--slide-gray-600))' }}>{row.sub}</span>
                  </div>
                ))}
              </div>
            </div>
            <span style={{ fontSize: 13, color: 'hsl(var(--slide-gray-400))' }}>
              Revenue figures = users × £6.19 ARPU/month (subscription + transaction fee) × 12.
            </span>
          </div>

          {/* Why now */}
          <div className="col-span-7 grid grid-cols-2 gap-5">
            {/* Wearables — full-card chart */}
            <div className="fs-card flex flex-col" style={{ padding: 24 }}>
              <div className="flex items-center gap-3">
                <Watch className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent))' }} />
                <span style={{ fontSize: 22, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>Wearables ubiquity</span>
              </div>
              <div className="flex items-center justify-center gap-4 my-3">
                <span className="fs-stat" style={{ fontSize: 64, color: 'hsl(var(--slide-accent))' }}>54%</span>
                <span style={{ fontSize: 17, color: 'hsl(var(--slide-gray-600))', lineHeight: 1.3 }}>
                  of UK adults<br />own a smart wearable (2025)
                </span>
              </div>
              <div className="flex-1" style={{ minHeight: 0 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={wearables} margin={{ top: 6, right: 12, bottom: 6, left: -12 }}>
                    <XAxis dataKey="y" tick={{ fontSize: 13, fill: 'hsl(var(--slide-gray-500))' }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 60]} />
                    <Line type="monotone" dataKey="v" stroke="hsl(var(--slide-accent))" strokeWidth={4} dot={{ r: 4, fill: 'hsl(var(--slide-accent))' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Run-club boom */}
            <div className="fs-card flex flex-col" style={{ padding: 24 }}>
              <div className="flex items-center gap-3">
                <Users className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent))' }} />
                <span style={{ fontSize: 22, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>Run-club boom</span>
              </div>
              <div className="flex items-center justify-center gap-4 my-3">
                <span className="fs-stat" style={{ fontSize: 64, color: 'hsl(var(--slide-accent))' }}>+59%</span>
                <span style={{ fontSize: 17, color: 'hsl(var(--slide-gray-600))', lineHeight: 1.3 }}>
                  YoY growth in<br />Strava run-club activity (2024)
                </span>
              </div>
              <div className="flex-1" style={{ minHeight: 0 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={runclubs} margin={{ top: 6, right: 12, bottom: 6, left: -12 }}>
                    <XAxis dataKey="c" tick={{ fontSize: 13, fill: 'hsl(var(--slide-gray-500))' }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Bar dataKey="n" fill="hsl(var(--slide-accent))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Network effects */}
            <div className="fs-card flex flex-col gap-2" style={{ padding: 24, background: 'hsl(var(--slide-accent-muted))' }}>
              <div className="flex items-center gap-3">
                <Network className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent))' }} />
                <span style={{ fontSize: 22, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>Network effects</span>
              </div>
              <span className="fs-stat" style={{ fontSize: 56, color: 'hsl(var(--slide-accent))' }}>1 → 5</span>
              <span style={{ fontSize: 17, color: 'hsl(var(--slide-gray-700))', lineHeight: 1.35 }}>
                Growth is <strong>organic and viral</strong> — every pod requires inviting 3–8 friends. Each new user
                becomes a recruiter.
              </span>
            </div>

            {/* Health-conscious Gen Z */}
            <div className="fs-card flex flex-col gap-2" style={{ padding: 24 }}>
              <div className="flex items-center gap-3">
                <Sparkles className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent))' }} />
                <span style={{ fontSize: 22, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>Health-first Gen Z</span>
              </div>
              <span className="fs-stat" style={{ fontSize: 64, color: 'hsl(var(--slide-accent))' }}>72%</span>
              <span style={{ fontSize: 17, color: 'hsl(var(--slide-gray-600))', lineHeight: 1.35 }}>
                of UK 18–30s say fitness is "important to my identity" (Mintel, 2024).
              </span>
            </div>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
