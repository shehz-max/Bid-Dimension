'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { ChevronRight, ArrowDown, ShieldCheck, CheckCircle2, FileCheck, Phone } from 'lucide-react';

export interface HeroProps {
  variant: 'homepage' | 'page';
  label?: string;
  headline?: string;
  subheadline?: string;
  cta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image?: string;
  breadcrumb?: { label: string; href: string }[];
  hudBadge?: { label: string; spec: string };
}

export const Hero: React.FC<HeroProps> = ({
  variant,
  label,
  headline = 'End-to-End Engineering, Design & Construction Solutions',
  subheadline = 'Bid Dimensions is a full-service engineering and design firm delivering licensed structural engineering, multidisciplinary building design, permit-ready construction documentation, and technical support for residential, commercial, and industrial projects.',
  cta = { text: 'Get a Free Quote', href: '/contact' },
  secondaryCta = { text: 'Our Process', href: '#process' },
  image,
  breadcrumb,
  hudBadge,
}) => {
  if (variant === 'homepage') {
    return (
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 bg-[#F8FAFC] overflow-hidden border-b border-gray-200 text-bd-navy">
        {/* WARM OPEN ARCHITECTURAL BLUEPRINT DRAWING BOOK BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/images/hero-blueprint-paper-canvas.jpg"
            alt="Warm architectural blueprint drawing book background"
            className="w-full h-full object-cover object-center md:object-right opacity-90 sm:opacity-95 filter contrast-105 saturate-105"
          />

          {/* Mobile Overlay: Balanced atmospheric fade to reveal the drawing book concept vibrantly */}
          <div
            className="absolute inset-0 z-0 block md:hidden"
            style={{
              background:
                'linear-gradient(to bottom, rgba(248, 250, 252, 0.75) 0%, rgba(248, 250, 252, 0.45) 45%, rgba(248, 250, 252, 0.25) 75%, rgba(248, 250, 252, 0.85) 100%)',
            }}
          />

          {/* Desktop Overlay: Soft Left Fade (Left sits on light canvas, right displays warm drawing book) */}
          <div
            className="absolute inset-0 z-0 hidden md:block"
            style={{
              background:
                'linear-gradient(to right, #F8FAFC 0%, #F8FAFC 28%, rgba(248, 250, 252, 0.6) 48%, transparent 72%)',
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Zone 1: Left Content (Exact Text Copy 100% from Web.docx) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {label && (
                <FadeInUp delay={0.1}>
                  <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 sm:mb-4 block">
                    {label}
                  </span>
                </FadeInUp>
              )}

              <FadeInUp delay={0.2}>
                <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-bd-navy mb-4 sm:mb-6">
                  {headline}
                </h1>
              </FadeInUp>

              {subheadline && (
                <FadeInUp delay={0.35}>
                  <p className="font-body text-sm sm:text-base lg:text-lg text-bd-gray max-w-[540px] leading-relaxed mb-6 sm:mb-8">
                    {subheadline}
                  </p>
                </FadeInUp>
              )}

              <FadeInUp delay={0.5}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                  <Button variant="primary" size="lg" href={cta.href} className="w-full sm:w-auto text-center">
                    {cta.text}
                  </Button>

                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-300 font-display font-semibold text-sm text-bd-navy hover:border-bd-blue hover:text-bd-blue transition-all shadow-xs"
                    >
                      <span>{secondaryCta.text}</span>
                      <ChevronRight className="w-4 h-4 text-bd-blue" />
                    </Link>
                  )}
                </div>
              </FadeInUp>
            </div>

            {/* Zone 2: Right Side (Clean Warm Drawing Book Bleeds Edge-to-Edge with 0 Overlay Badges) */}
            <div className="lg:col-span-5 hidden lg:block" />
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-bd-gray z-10 pointer-events-none">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-scroll-bounce text-bd-blue" />
        </div>
      </section>
    );
  }

  // Subpage Hero Variant: Clean Vibrant Blue Cinematic Header (Clean, Zero Clutter, No Buttons)
  return (
    <section className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] flex items-center pt-24 sm:pt-32 pb-10 sm:pb-14 bg-[#0C2340] border-b border-[#1E3A8A]/40 overflow-hidden text-white">
      {/* Background Architectural Artwork with High Clarity & Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={image || '/images/hero-structural-bg.jpg'}
          alt={headline || 'Engineering discipline background'}
          className="w-full h-full object-cover object-center opacity-70 sm:opacity-75 filter contrast-110 saturate-95"
        />

        {/* Mobile Gradient: Top-to-Bottom Blueprint Shading (Prevents any text collision on narrow screens) */}
        <div
          className="absolute inset-0 z-0 block md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(12, 35, 64, 0.96) 0%, rgba(12, 35, 64, 0.85) 55%, rgba(12, 35, 64, 0.65) 100%)',
          }}
        />

        {/* Desktop Gradient: Left-to-Right Balanced Blue Gradient */}
        <div
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            background:
              'linear-gradient(to right, rgba(12, 35, 64, 0.94) 0%, rgba(12, 35, 64, 0.80) 35%, rgba(12, 35, 64, 0.35) 62%, rgba(12, 35, 64, 0.05) 100%)',
          }}
        />

        {/* Subtle Bottom Transition to keep bottom section border sharp */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(to top, rgba(12, 35, 64, 0.85) 0%, transparent 16%)',
          }}
        />

        {/* Subtle Architectural Blueprint Grid Lines */}
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Breadcrumb, Headline, Subheadline (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {breadcrumb && breadcrumb.length > 0 && (
              <FadeInUp delay={0.05}>
                <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300 font-mono mb-2.5 sm:mb-3.5">
                  {breadcrumb.map((crumb, idx) => (
                    <React.Fragment key={crumb.href}>
                      {idx > 0 && <span className="text-slate-500">/</span>}
                      {idx === breadcrumb.length - 1 ? (
                        <span className="text-bd-blue font-semibold">{crumb.label}</span>
                      ) : (
                        <Link href={crumb.href} className="hover:text-white transition-colors">
                          {crumb.label}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              </FadeInUp>
            )}

            <FadeInUp delay={0.1}>
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight text-white mb-3 sm:mb-4">
                {headline}
              </h1>
            </FadeInUp>

            {subheadline && (
              <FadeInUp delay={0.15}>
                <p className="font-body text-xs sm:text-sm lg:text-base text-slate-100 leading-relaxed max-w-2xl">
                  {subheadline}
                </p>
              </FadeInUp>
            )}
          </div>

          {/* Right Column: Clean Open Space */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
