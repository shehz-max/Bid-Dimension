'use client';

import React from 'react';
import Link from 'next/link';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { ArrowRight, ShieldCheck, Clock, FileCheck } from 'lucide-react';

export interface CtaBannerProps {
  tagline?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  tagline = 'READY TO START YOUR PROJECT?',
  headline = 'Get Your Permit-Ready Plans in 5–10 Days',
  subheadline = 'Upload your CAD or PDF drawings today for a detailed, fixed-fee engineering proposal and swift city permit turnaround.',
  primaryCtaText = 'Get a Quote',
  primaryCtaHref = '/contact',
}) => {
  return (
    <section className="py-16 sm:py-20 bg-[#EBF3FA] border-t border-[#4A8AB8]/20 text-bd-navy relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Eyebrow Tagline */}
        <FadeInUp>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2.5 block">
            {tagline}
          </span>
        </FadeInUp>

        {/* Headline */}
        <FadeInUp delay={0.1}>
          <h2 className="font-display font-bold text-2xl sm:text-40px text-bd-navy mb-3.5 leading-tight max-w-2xl mx-auto">
            {headline}
          </h2>
        </FadeInUp>

        {/* Subheadline */}
        <FadeInUp delay={0.2}>
          <p className="font-body text-xs sm:text-base text-bd-gray max-w-xl mx-auto mb-8 leading-relaxed">
            {subheadline}
          </p>
        </FadeInUp>

        {/* Primary Action Button (Clean, Centered, Quote-Focused) */}
        <FadeInUp delay={0.3}>
          <div className="flex items-center justify-center mb-10">
            <Link
              href={primaryCtaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-bd-navy text-white hover:bg-bd-blue font-display font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 rounded-xl border border-bd-navy hover:border-bd-blue group"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-bd-blue group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeInUp>

        {/* Trust Badges */}
        <FadeInUp delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-gray-200/80 max-w-2xl mx-auto font-mono text-[10px] sm:text-[11px] text-bd-navy font-semibold">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-bd-blue shrink-0" />
              <span>5–10 DAY TURNAROUND</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-bd-blue shrink-0" />
              <span>50-STATE PE LICENSED</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-bd-blue shrink-0" />
              <span>100% CITY PERMIT APPROVAL</span>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
