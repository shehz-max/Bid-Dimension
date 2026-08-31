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

  // Subpage Hero Variant: Dark Executive Cinematic Blueprint Header (Concept 1)
  return (
    <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 bg-[#0A1628] border-b border-[#1E3A8A]/30 overflow-hidden text-white">
      {/* Background Architectural Artwork with High-Tech Dark Ambient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={image || '/images/hero-structural-bg.jpg'}
          alt={headline || 'Engineering discipline background'}
          className="w-full h-full object-cover object-center opacity-20 filter contrast-125 saturate-50"
        />

        {/* Ambient Engineering Blueprint Glow Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(circle at 75% 35%, rgba(74, 138, 184, 0.22) 0%, rgba(10, 22, 40, 0.75) 45%, #0A1628 90%)',
          }}
        />

        {/* Subtle Architectural Blueprint Grid Lines */}
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Breadcrumb, Discipline Badge, Headline, Subheadline, Actions (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {breadcrumb && breadcrumb.length > 0 && (
              <FadeInUp delay={0.05}>
                <nav className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-3.5">
                  {breadcrumb.map((crumb, idx) => (
                    <React.Fragment key={crumb.href}>
                      {idx > 0 && <span className="text-slate-600">/</span>}
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

            <FadeInUp delay={0.08}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-bd-blue/15 border border-bd-blue/30 rounded-md mb-3.5 text-bd-blue font-mono text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
                <span>{label || '50-STATE PE LICENSED • IBC 2024 COMPLIANT'}</span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h1 className="font-display font-bold text-3xl sm:text-44px lg:text-50px leading-[1.1] tracking-tight text-white mb-4">
                {headline}
              </h1>
            </FadeInUp>

            {subheadline && (
              <FadeInUp delay={0.2}>
                <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed mb-7 max-w-2xl">
                  {subheadline}
                </p>
              </FadeInUp>
            )}

            <FadeInUp delay={0.3}>
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                {cta && (
                  <Link
                    href={cta.href}
                    className="relative overflow-hidden group px-6 py-3.5 bg-bd-blue hover:bg-white text-bd-navy font-display font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-2">
                      {cta.text}
                      <ChevronRight className="w-4 h-4 text-bd-navy" />
                    </span>
                  </Link>
                )}

                <a
                  href="tel:7472237815"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-semibold text-sm rounded-lg transition-all backdrop-blur-xs"
                >
                  <span>(747) 223-7815</span>
                </a>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column: Engineering Credential HUD Card (4 Columns) */}
          <div className="lg:col-span-4 w-full">
            <FadeInUp delay={0.25}>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-7 backdrop-blur-md shadow-xl flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[10px] uppercase font-bold text-bd-blue tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-bd-blue" />
                    PE SPECIFICATIONS
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 font-semibold">
                    100% PERMIT READY
                  </span>
                </div>

                <div className="flex flex-col gap-3 font-body text-xs text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-bd-blue shrink-0" />
                    <span>Active PE Licenses Across All 50 States</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-bd-blue shrink-0" />
                    <span>Standard 10–12 Day Drawing Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-bd-blue shrink-0" />
                    <span>IBC 2024, CBC, IRC, & ASCE 7-22 Calibrated</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-bd-blue shrink-0" />
                    <span>Multidisciplinary BIM LOD 400 Coordination</span>
                  </div>
                </div>

                <div className="mt-1 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-slate-400">Plan Check Guarantee:</span>
                  <span className="text-bd-blue font-bold">100% City Approval</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};
