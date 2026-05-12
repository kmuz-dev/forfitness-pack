import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Watch, Users, Sparkles, Activity } from 'lucide-react';

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
      <circle cx={180} cy={250} r={55} fill="hsl(var(--slide-accent))" />
      <text x={180} y={50} textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize={18} fontWeight={700} fill="hsl(var(--slide-gray-700))" letterSpacing={3}>TAM</text>
      <text x={180} y={140} textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize={18} fontWeight={700} fill="hsl(var(--slide-gray-700))" letterSpacing={3}>SAM</text>
      <text x={180} y={245} textAnchor="middle" fontFamily="Syne" fontSize={20} fontWeight={800} fill="#fff" letterSpacing={2}>SOM</text>
      <text x={180} y={272} textAnchor="middle" fontFamily="Syne" fontSize={28} fontWeight={800} fill="#fff">80K</text>
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
          <div className="col-span-5 fs-card flex flex-col gap-4" style={{ padding: 24 }}>
            <span className="fs-eyebrow" style={{ fontSize: 16 }}>Market sizing — UK</span>
            <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
              <div className="flex items-center justify-center min-h-0">
                <TamSamSomCircles />
              </div>
              <div className="flex flex-col justify-center gap-5">
                {[
                  { label: 'TAM', val: '15M', sub: 'UK gym members + active adults' },
                  { label: 'SAM', val: '3.5M', sub: 'Urban 18–30, owns a wearable' },
                  { label: 'SOM', val: '80K', sub: 'Y1–2: pods in 4 UK cities' },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col">
                    <span className="fs-eyebrow" style={{ fontSize: 14, color: 'hsl(var(--slide-accent))' }}>{row.label}</span>
                    <span className="fs-stat" style={{ fontSize: 44, color: 'hsl(var(--slide-gray-900))' }}>{row.val}</span>
                    <span style={{ fontSize: 18, color: 'hsl(var(--slide-gray-600))' }}>{row.sub}</span>
                  </div>
                ))}
              </div>
            </div>
            <span style={{ fontSize: 14, color: 'hsl(var(--slide-gray-400))' }}>
              Estimates from UKactive State of the UK Fitness Industry & ONS active-living surveys.
            </span>
          </div>

          {/* Why now */}
          <div className="col-span-7 grid grid-cols-2 gap-5">
            <div className="fs-card flex flex-col gap-2" style={{ padding: 22 }}>
              <div className="flex items-center gap-3">
                <Watch className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent))' }} />
                <span style={{ fontSize: 22, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>Wearables ubiquity</span>
              </div>
              <div style={{ height: 110 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={wearables} margin={{ top: 6, right: 6, bottom: 0, left: -20 }}>
                    <XAxis dataKey="y" tick={{ fontSize: 12, fill: 'hsl(var(--slide-gray-500))' }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 60]} />
                    <Line type="monotone" dataKey="v" stroke="hsl(var(--slide-accent))" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <span style={{ fontSize: 16, color: 'hsl(var(--slide-gray-600))' }}>
                <strong style={{ color: 'hsl(var(--slide-gray-900))' }}>~54%</strong> of UK adults own a smart wearable (2025).
              </span>
            </div>

            <div className="fs-card flex flex-col gap-2" style={{ padding: 22 }}>
              <div className="flex items-center gap-3">
                <Users className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent))' }} />
                <span style={{ fontSize: 22, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>Run-club boom</span>
              </div>
              <div style={{ height: 110 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={runclubs} margin={{ top: 6, right: 6, bottom: 0, left: -20 }}>
                    <XAxis dataKey="c" tick={{ fontSize: 12, fill: 'hsl(var(--slide-gray-500))' }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Bar dataKey="n" fill="hsl(var(--slide-accent))" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <span style={{ fontSize: 16, color: 'hsl(var(--slide-gray-600))' }}>
                Strava reported <strong style={{ color: 'hsl(var(--slide-gray-900))' }}>+59% YoY</strong> in run-club activity (2024).
              </span>
            </div>

            <div className="fs-card flex flex-col gap-2" style={{ padding: 22 }}>
              <div className="flex items-center gap-3">
                <Sparkles className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent))' }} />
                <span style={{ fontSize: 22, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>Health-conscious Gen Z</span>
              </div>
              <span className="fs-stat" style={{ fontSize: 64, color: 'hsl(var(--slide-accent))' }}>72%</span>
              <span style={{ fontSize: 16, color: 'hsl(var(--slide-gray-600))' }}>
                of UK 18–30s say fitness is "important to my identity" (Mintel, 2024).
              </span>
            </div>

            <div className="fs-card flex flex-col gap-2" style={{ padding: 22 }}>
              <div className="flex items-center gap-3">
                <Activity className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent))' }} />
                <span style={{ fontSize: 22, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>Social-fitness category</span>
              </div>
              <span className="fs-stat" style={{ fontSize: 64, color: 'hsl(var(--slide-accent))' }}>£2.1B</span>
              <span style={{ fontSize: 16, color: 'hsl(var(--slide-gray-600))' }}>
                Global behaviour-change app spend, growing <strong>~22% YoY</strong>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
