import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceDot } from 'recharts';
import { Users, PoundSterling, Trophy } from 'lucide-react';

const decay = [
  { week: 'W1', sessions: 4 },
  { week: 'W2', sessions: 4 },
  { week: 'W3', sessions: 3 },
  { week: 'W4', sessions: 3 },
  { week: 'W5', sessions: 2 },
  { week: 'W6', sessions: 2 },
  { week: 'W7', sessions: 1 },
  { week: 'W8', sessions: 1 },
  { week: 'W9', sessions: 0 },
  { week: 'W10', sessions: 0 },
  { week: 'W11', sessions: 0 },
  { week: 'W12', sessions: 0 },
];

function ProgressRing({ pct = 1 }: { pct?: number }) {
  const r = 70;
  const c = 2 * Math.PI * r;
  return (
    <svg width={180} height={180} viewBox="0 0 180 180">
      <circle cx={90} cy={90} r={r} stroke="hsl(var(--slide-gray-200))" strokeWidth={14} fill="none" />
      <circle
        cx={90}
        cy={90}
        r={r}
        stroke="hsl(var(--slide-accent))"
        strokeWidth={14}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        transform="rotate(-90 90 90)"
      />
      <text x={90} y={88} textAnchor="middle" fontFamily="Syne" fontWeight={800} fontSize={42} fill="hsl(var(--slide-gray-900))">4/4</text>
      <text x={90} y={118} textAnchor="middle" fontFamily="Plus Jakarta Sans" fontWeight={600} fontSize={20} fill="hsl(var(--slide-gray-500))">sessions</text>
    </svg>
  );
}

export default function Slide03ProblemSolution() {
  return (
    <MSSlideLayout variant="default">
      <div className="grid grid-cols-2 gap-10 h-full px-20 py-16">
        {/* Problem */}
        <div className="flex flex-col gap-6 pr-6">
          <span className="fs-eyebrow">02 · The Problem</span>
          <h2 style={{ fontSize: 88, lineHeight: 1.0, color: 'hsl(var(--slide-gray-900))' }}>
            <span style={{ color: 'hsl(var(--slide-forfeit))' }}>"</span>I'll go tomorrow.<span style={{ color: 'hsl(var(--slide-forfeit))' }}>"</span>
          </h2>
          <p style={{ fontSize: 24, color: 'hsl(var(--slide-gray-600))', lineHeight: 1.45 }}>
            Tomorrow becomes Thursday. Thursday becomes the weekend. The weekend becomes next week.
            And suddenly it's been a month.
          </p>
          <div className="fs-card flex-1 flex flex-col gap-3" style={{ padding: 24 }}>
            <span className="fs-eyebrow" style={{ fontSize: 16 }}>Typical attendance decay</span>
            <div className="flex-1" style={{ minHeight: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={decay} margin={{ top: 8, right: 12, bottom: 8, left: 0 }}>
                  <XAxis dataKey="week" tick={{ fontSize: 14, fill: 'hsl(var(--slide-gray-500))' }} axisLine={{ stroke: 'hsl(var(--slide-gray-200))' }} tickLine={false} />
                  <YAxis tick={{ fontSize: 14, fill: 'hsl(var(--slide-gray-500))' }} axisLine={false} tickLine={false} domain={[0, 5]} />
                  <Line type="monotone" dataKey="sessions" stroke="hsl(var(--slide-forfeit))" strokeWidth={4} dot={false} />
                  <ReferenceDot x="W9" y={0} r={8} fill="hsl(var(--slide-forfeit))" stroke="none" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <span style={{ fontSize: 18, color: 'hsl(var(--slide-gray-500))' }}>Sessions/week — gym membership goes unused.</span>
          </div>
        </div>

        {/* Solution */}
        <div className="flex flex-col gap-6 pl-6 border-l" style={{ borderColor: 'hsl(var(--slide-gray-200))' }}>
          <span className="fs-eyebrow" style={{ color: 'hsl(var(--slide-accent))' }}>03 · The Solution</span>
          <h2 style={{ fontSize: 56, lineHeight: 1.05, color: 'hsl(var(--slide-gray-900))' }}>
            Money + mates.<br />
            <span style={{ color: 'hsl(var(--slide-accent))' }}>You actually show up.</span>
          </h2>

          <div className="flex flex-col gap-4 pt-2">
            {[
              { icon: Users, title: 'Form a pod', body: '3–8 mates who know each other.' },
              { icon: PoundSterling, title: 'Stake £15/wk', body: 'Real money on a weekly target.' },
              { icon: Trophy, title: 'Hit target → keep £', body: 'Miss → your stake splits among hitters.' },
            ].map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="fs-card flex items-center gap-5" style={{ padding: 18 }}>
                <div className="flex items-center justify-center rounded-2xl" style={{ width: 64, height: 64, background: 'hsl(var(--slide-accent-muted))' }}>
                  <Icon className="w-8 h-8" style={{ color: 'hsl(var(--slide-accent))' }} strokeWidth={2.2} />
                </div>
                <div className="flex flex-col">
                  <span style={{ fontSize: 24, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>{i + 1}. {title}</span>
                  <span style={{ fontSize: 20, color: 'hsl(var(--slide-gray-600))' }}>{body}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-2">
            <ProgressRing pct={1} />
            <div className="flex flex-col gap-2">
              <span style={{ fontSize: 28, fontWeight: 700, color: 'hsl(var(--slide-gray-900))' }}>Verified weekly.</span>
              <span style={{ fontSize: 20, color: 'hsl(var(--slide-gray-600))' }}>
                Auto-sync via Strava, Apple Health, Google Fit. Photo proof for the social layer.
              </span>
            </div>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
