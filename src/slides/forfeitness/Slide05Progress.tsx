import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Check } from 'lucide-react';

function PhoneMock() {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 360,
        height: 740,
        background: '#0a0a0a',
        borderRadius: 56,
        padding: 14,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 2px hsl(0 0% 18%)',
      }}
    >
      <div style={{ width: '100%', height: '100%', background: 'hsl(60 14% 97%)', borderRadius: 44, padding: 20, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
        {/* Status bar */}
        <div className="flex items-center justify-between" style={{ fontSize: 13, color: '#0a0a0a', fontWeight: 600 }}>
          <span>9:41</span>
          <span>FORFEITNESS</span>
          <span>●●●</span>
        </div>

        {/* Stake card */}
        <div style={{ background: '#0a0a0a', borderRadius: 24, padding: 16, color: '#fff' }}>
          <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.6, fontWeight: 700 }}>THIS WEEK</div>
          <div className="flex items-end justify-between mt-1">
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 36 }}>£15.00</span>
            <span style={{ fontSize: 12, color: 'hsl(152 60% 60%)', fontWeight: 600 }}>● ON TRACK</span>
          </div>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>3 of 4 sessions verified</div>
        </div>

        {/* Week calendar */}
        <div className="grid grid-cols-7 gap-1.5">
          {['M','T','W','T','F','S','S'].map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span style={{ fontSize: 10, color: '#666', fontWeight: 600 }}>{d}</span>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: 10,
                  background: i < 3 ? 'hsl(152 60% 28%)' : i === 3 ? 'hsl(152 38% 92%)' : '#eee',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: i < 3 ? '#fff' : 'hsl(152 60% 28%)',
                  fontWeight: 700, fontSize: 11,
                }}
              >
                {i < 3 ? '✓' : ''}
              </div>
            </div>
          ))}
        </div>

        {/* Pod card */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 14, border: '1px solid #eee' }}>
          <div className="flex items-center justify-between" style={{ fontSize: 13, fontWeight: 700, color: '#0a0a0a' }}>
            <span>The Gym Mafia</span>
            <span style={{ fontSize: 11, color: '#666', fontWeight: 600 }}>5 mates</span>
          </div>
          <div className="flex gap-2 mt-3">
            {[1,1,1,0.75,0.5].map((p, i) => (
              <svg key={i} width={42} height={42} viewBox="0 0 42 42">
                <circle cx={21} cy={21} r={17} stroke="#eee" strokeWidth={4} fill="none" />
                <circle cx={21} cy={21} r={17} stroke="hsl(152 60% 28%)" strokeWidth={4} fill="none" strokeDasharray={2*Math.PI*17} strokeDashoffset={2*Math.PI*17*(1-p)} transform="rotate(-90 21 21)" strokeLinecap="round" />
                <text x={21} y={25} textAnchor="middle" fontFamily="Syne" fontWeight={800} fontSize={11} fill="#0a0a0a">{Math.round(p*4)}</text>
              </svg>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 14, border: '1px solid #eee', flex: 1 }}>
          <div style={{ fontSize: 11, letterSpacing: 2, color: '#666', fontWeight: 700 }}>ACTIVITY</div>
          <div className="flex items-center gap-2 mt-2" style={{ fontSize: 12, color: '#0a0a0a' }}>
            <span style={{ width: 28, height: 28, borderRadius: 14, background: 'hsl(152 38% 92%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'hsl(152 60% 28%)' }}>J</span>
            <span><b>Jamie</b> logged a 5K run · 32m</span>
          </div>
          <div className="flex items-center gap-2 mt-2" style={{ fontSize: 12, color: '#0a0a0a' }}>
            <span style={{ width: 28, height: 28, borderRadius: 14, background: 'hsl(152 38% 92%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'hsl(152 60% 28%)' }}>S</span>
            <span><b>Sam</b> hit weekly target 💪</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Slide05Progress() {
  return (
    <MSSlideLayout variant="default">
      <div className="grid grid-cols-12 gap-12 h-full px-20 py-14 items-center">
        <div className="col-span-5 flex justify-center">
          <PhoneMock />
        </div>

        <div className="col-span-7 flex flex-col gap-8">
          <span className="fs-eyebrow">05 · Progress</span>
          <h2 style={{ fontSize: 80, lineHeight: 1.0, color: 'hsl(var(--slide-gray-900))' }}>
            Already built.<br />
            <span style={{ color: 'hsl(var(--slide-accent))' }}>Already validated.</span>
          </h2>
          <p style={{ fontSize: 24, lineHeight: 1.4, maxWidth: 700, color: 'hsl(var(--slide-gray-600))' }}>
            Target users confirmed demand. Core mechanic tested and approved through user research.
          </p>

          <div className="grid grid-cols-3 gap-5">
            {[
              { stat: '6', label: 'Core screens shipped', sub: 'Home · Pod · Feed · Profile · Reveal · Log' },
              { stat: '1', label: 'Live prototype', sub: 'Clickable iOS UI kit' },
              { stat: '6', label: 'Weeks of build', sub: 'Solo design + dev' },
            ].map((c) => (
              <div key={c.label} className="fs-card" style={{ padding: 20 }}>
                <span className="fs-stat" style={{ fontSize: 72, color: 'hsl(var(--slide-accent))' }}>{c.stat}</span>
                <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4, color: 'hsl(var(--slide-gray-900))' }}>{c.label}</div>
                <div style={{ fontSize: 18, color: 'hsl(var(--slide-gray-500))', marginTop: 4 }}>{c.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {['Design system shipped', 'User flows tested', 'Brand identity defined'].map((t) => (
              <span key={t} className="fs-pill">
                <Check className="w-5 h-5" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
