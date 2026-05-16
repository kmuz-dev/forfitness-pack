import React from 'react';
import { cn } from '@/lib/utils';
import logoMark from '@/assets/forfeitness-logo.png';

interface MSSlideLayoutProps {
  children: React.ReactNode;
  variant?: 'default' | 'title' | 'dark';
  className?: string;
  logoPosition?: 'bottom-right' | 'center';
}

export function MSSlideLayout({ children, variant = 'default', className, logoPosition = 'bottom-right' }: MSSlideLayoutProps) {
  const isDark = variant === 'dark' || variant === 'title';

  const logoStyle: React.CSSProperties =
    logoPosition === 'center'
      ? {
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 960,
          height: 'auto',
          opacity: 0.06,
          filter: isDark ? 'brightness(0) invert(1)' : undefined,
        }
      : {
          right: -120,
          bottom: -80,
          width: 720,
          height: 'auto',
          opacity: 0.05,
          filter: isDark ? 'brightness(0) invert(1)' : undefined,
        };

  return (
    <div
      className={cn(
        'w-full h-full relative font-sans slide-content overflow-hidden',
        isDark
          ? 'bg-slide-primary text-white'
          : 'bg-[#FCFBF8] text-slide-gray-900',
        className
      )}
    >
      {/* Decorative oversized logo watermark */}
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none z-0"
        style={logoStyle}
      />

      {/* Content */}
      <div className="relative w-full h-full z-10">
        {children}
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slide-accent z-10" />
    </div>
  );
}

interface LogoMarkProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function LogoMark({ variant = 'dark', className }: LogoMarkProps) {
  return (
    <img
      src={logoMark}
      alt="Forfeitness"
      className={cn('h-12 w-auto object-contain', className)}
      style={variant === 'light' ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  );
}

export const MSLogo = LogoMark;
