import React from 'react';
import { cn } from '@/lib/utils';
import logoMark from '@/assets/forfeitness-logo.png';

interface MSSlideLayoutProps {
  children: React.ReactNode;
  variant?: 'default' | 'title' | 'dark';
  className?: string;
}

/**
 * Slide Layout Component
 * Inspired by IBM Carbon Design System
 * 
 * Variants:
 * - default: White background, dark text
 * - dark/title: Deep navy background, white text
 */
export function MSSlideLayout({ children, variant = 'default', className }: MSSlideLayoutProps) {
  const isDark = variant === 'dark' || variant === 'title';
  
  return (
    <div 
      className={cn(
        'w-full h-full relative font-sans slide-content',
        isDark 
          ? 'bg-slide-primary text-white' 
          : 'bg-[#FCFBF8] text-slide-gray-900',
        className
      )}
    >
      {/* Logo mark - Top Right */}
      <div className="absolute top-10 right-20 z-10">
        <LogoMark variant={isDark ? 'light' : 'dark'} />
      </div>
      
      {/* Content */}
      <div className="w-full h-full">
        {children}
      </div>
      
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slide-accent" />
    </div>
  );
}

interface LogoMarkProps {
  variant?: 'dark' | 'light';
  className?: string;
}

/**
 * Minimal logo mark - can be customized per brand
 */
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

// Re-export with legacy name for backwards compatibility
export const MSLogo = LogoMark;
