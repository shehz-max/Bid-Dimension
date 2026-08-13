'use client';

import React from 'react';
import { Quote } from 'lucide-react';

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  company,
  avatar,
  className = '',
}) => {
  // Generate initials for avatar fallback
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div
      className={`bg-white border border-gray-200 p-8 flex flex-col justify-between rounded-none shadow-sm relative ${className}`}
    >
      <Quote className="w-8 h-8 text-bd-blue/20 mb-4" />

      {/* Quote text */}
      <p className="font-body text-lg italic text-bd-charcoal leading-relaxed mb-6">
        "{quote}"
      </p>

      <div>
        {/* Divider */}
        <div className="w-10 h-[1px] bg-gray-200 mb-6" />

        {/* Attribution */}
        <div className="flex items-center gap-4">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border border-bd-blue/20"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-bd-navy text-white flex items-center justify-center font-mono font-bold text-sm border border-bd-blue/30">
              {initials}
            </div>
          )}
          <div className="flex flex-col">
            <h4 className="font-display font-semibold text-base text-bd-charcoal">
              {name}
            </h4>
            <span className="font-body text-xs text-bd-gray">
              {role}, <span className="font-semibold text-bd-navy">{company}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
