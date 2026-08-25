'use client';

import React from 'react';
import { Check } from 'lucide-react';

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  badge?: string;
  variant?: 'horizontal' | 'vertical';
  theme?: 'light' | 'dark';
  isLast?: boolean;
  className?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  badge,
  variant = 'horizontal',
  theme = 'light',
  isLast = false,
  className = '',
}) => {
  const isLight = theme === 'light';

  if (variant === 'horizontal') {
    return (
      <div
        className={`group relative p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 rounded-none ${
          isLight
            ? 'bg-white border border-gray-200 hover:border-bd-blue hover:shadow-md'
            : 'bg-bd-navy/50 border border-bd-blue/20 hover:border-bd-blue/70 hover:shadow-glow-blue'
        } ${className}`}
      >
        <div>
          {/* Top Row: Step Number & Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono font-bold text-3xl text-bd-blue tracking-tight opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all">
              {number}
            </span>

            {badge && (
              <span className={`inline-flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 ${
                isLight
                  ? 'text-bd-navy bg-bd-blue/10 border border-bd-blue/30'
                  : 'text-bd-blue/90 bg-bd-blue/10 border border-bd-blue/30'
              }`}>
                <Check className="w-3 h-3 text-bd-blue" />
                <span>{badge}</span>
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className={`font-display font-bold text-xl mb-3 group-hover:text-bd-blue transition-colors ${
            isLight ? 'text-bd-navy' : 'text-white'
          }`}>
            {title}
          </h4>

          {/* Description */}
          <p className={`font-body text-sm leading-relaxed ${
            isLight ? 'text-bd-gray' : 'text-bd-text-muted'
          }`}>
            {description}
          </p>
        </div>
      </div>
    );
  }

  // Vertical variant for service detail pages
  return (
    <div className={`relative flex gap-6 pb-12 ${isLast ? 'pb-0' : ''} ${className}`}>
      {/* Connecting vertical line */}
      {!isLast && (
        <div className="absolute left-4 top-10 bottom-0 w-[1px] bg-bd-blue/30" />
      )}

      {/* Node number */}
      <div className="w-8 h-8 bg-bd-navy border border-bd-blue flex items-center justify-center font-mono font-bold text-xs text-bd-blue shrink-0 z-10">
        {number}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-1">
          <h4 className="font-display font-bold text-xl text-bd-charcoal">
            {title}
          </h4>
          {badge && (
            <span className="font-mono text-[10px] uppercase font-semibold text-bd-blue bg-bd-surface-light border border-bd-blue/20 px-2 py-0.5">
              {badge}
            </span>
          )}
        </div>
        <p className="font-body text-base text-bd-gray leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
