'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tags?: string[];
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  tags = [],
  className = '',
}) => {
  return (
    <div
      className={`group relative bg-white border border-bd-border-dark/15 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-bd-blue/80 hover:shadow-glow-blue overflow-hidden rounded-none ${className}`}
    >
      {/* Subtle Blueprint Grid Texture Revealed on Hover */}
      <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon & Deliverable Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-bd-surface-light border border-bd-blue/20 flex items-center justify-center text-bd-blue group-hover:bg-bd-navy group-hover:text-bd-blue group-hover:border-bd-blue/50 transition-all duration-300 shadow-sm">
            <Icon className="w-7 h-7 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
          </div>

          <span className="font-mono text-[10px] text-bd-blue font-semibold uppercase tracking-widest px-2.5 py-1 bg-bd-surface-light border border-bd-blue/20">
            ENGINEERING SET
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-2xl text-bd-charcoal mb-3 group-hover:text-bd-navy transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
          {description}
        </p>

        {/* Deliverable Scope Badges */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 bg-bd-surface-light text-bd-navy border border-bd-border-dark/20 group-hover:border-bd-blue/30 group-hover:text-bd-blue transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Link */}
      <Link
        href={href}
        className="relative z-10 inline-flex items-center gap-2 font-display font-semibold text-sm text-bd-blue group-hover:text-bd-navy transition-colors group/link"
      >
        <span>Explore Service</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
      </Link>
    </div>
  );
};
