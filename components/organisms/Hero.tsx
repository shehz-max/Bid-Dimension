'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { ChevronRight, ArrowDown, ShieldCheck, CheckCircle2, FileCheck } from 'lucide-react';

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
      <section className="relative min-h-screen flex items-center pt-28 pb-16 bg-[#F8FAFC] overflow-hidden border-b border-gray-200 text-bd-navy">
        {/* WARM OPEN ARCHITECTURAL BLUEPRINT DRAWING BOOK BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/images/hero-blueprint-paper-canvas.jpg"
            alt="Warm architectural blueprint drawing book background"
            className="w-full h-full object-cover object-right opacity-90 filter contrast-105"
          />

          {/* Soft Left Fade: Left 28% sits on pristine light canvas, right 72% displays warm drawing book */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(to right, #F8FAFC 0%, #F8FAFC 28%, rgba(248, 250, 252, 0.6) 48%, transparent 72%)',
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Zone 1: Left Content (Exact Text Copy 100% from Web.docx) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {label && (
                <FadeInUp delay={0.1}>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-4 block">
                    {label}
                  </span>
                </FadeInUp>
              )}

              <FadeInUp delay={0.2}>
                <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-60px leading-[1.08] tracking-tight text-bd-navy mb-6">
                  {headline}
                </h1>
              </FadeInUp>

              {subheadline && (
                <FadeInUp delay={0.35}>
                  <p className="font-body text-base sm:text-lg text-bd-gray max-w-[540px] leading-relaxed mb-8">
                    {subheadline}
                  </p>
                </FadeInUp>
              )}

              <FadeInUp delay={0.5}>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="lg" href={cta.href}>
                    {cta.text}
                  </Button>

                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-300 font-display font-semibold text-sm text-bd-navy hover:border-bd-blue hover:text-bd-blue transition-all shadow-xs"
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

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bd-gray z-10">
          <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-scroll-bounce text-bd-blue" />
        </div>
      </section>
    );
  }

  // Service & Subpage Hero variant (Clean Architectural 2-Column Hero - No Blurry Fades)
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-[#F8FAFC] border-b border-gray-200/90 text-bd-navy">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Breadcrumb, Typography, Badges, and CTA (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {breadcrumb && breadcrumb.length > 0 && (
              <FadeInUp delay={0.05}>
                <nav className="flex items-center gap-1.5 text-xs text-bd-gray font-mono mb-3">
                  {breadcrumb.map((crumb, idx) => (
                    <React.Fragment key={crumb.href}>
                      {idx > 0 && <span className="text-gray-300">/</span>}
                      {idx === breadcrumb.length - 1 ? (
                        <span className="text-bd-blue font-semibold">{crumb.label}</span>
                      ) : (
                        <Link href={crumb.href} className="hover:text-bd-navy transition-colors">
                          {crumb.label}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              </FadeInUp>
            )}

            {label && (
              <FadeInUp delay={0.08}>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2.5 block">
                  {label}
                </span>
              </FadeInUp>
            )}

            <FadeInUp delay={0.1}>
              <h1 className="font-display font-bold text-3xl sm:text-42px lg:text-46px leading-[1.12] tracking-tight text-bd-navy mb-4">
                {headline}
              </h1>
            </FadeInUp>

            {subheadline && (
              <FadeInUp delay={0.2}>
                <p className="font-body text-sm sm:text-base text-bd-gray leading-relaxed mb-6 max-w-xl">
                  {subheadline}
                </p>
              </FadeInUp>
            )}

            <FadeInUp delay={0.3}>
              <div className="flex flex-wrap items-center gap-3.5">
                {cta && (
                  <Button variant="primary" size="md" href={cta.href}>
                    {cta.text}
                  </Button>
                )}

                {secondaryCta && (
                  <Button variant="secondary" size="md" href={secondaryCta.href}>
                    {secondaryCta.text}
                  </Button>
                )}
              </div>
            </FadeInUp>
          </div>

          {/* Right Column: Crisp Architectural Image Viewport Card (5 Columns) */}
          <div className="lg:col-span-5 w-full">
            <FadeInUp delay={0.25}>
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/90 shadow-lg bg-white p-2.5 group">
                <div className="relative h-64 sm:h-72 lg:h-80 w-full rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={image || '/images/hero-structural-bg.jpg'}
                    alt={headline || 'Engineering discipline showcase'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Floating Spec Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white">
                    <span className="px-2.5 py-1 bg-bd-navy/90 backdrop-blur-md border border-white/20 rounded-md font-semibold">
                      50-STATE PE LICENSED
                    </span>
                    <span className="px-2.5 py-1 bg-bd-blue/90 backdrop-blur-md rounded-md font-bold">
                      10–12D TURNAROUND
                    </span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};
