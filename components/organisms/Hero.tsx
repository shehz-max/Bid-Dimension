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

  // Service & Subpage Hero variant (Clean, Crisp Discipline Showcase Layout)
  return (
    <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 bg-[#F8FAFC] border-b border-gray-200 overflow-hidden text-bd-navy">
      {/* Subtle Ambient Blueprint Paper Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <img
          src="/images/hero-blueprint-paper-canvas.jpg"
          alt="Architectural paper background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/95 to-[#F8FAFC]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography, Breadcrumbs, and CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {breadcrumb && (
              <FadeInUp delay={0.05}>
                <nav className="flex items-center gap-2 font-mono text-xs text-bd-gray mb-4">
                  {breadcrumb.map((item, idx) => (
                    <React.Fragment key={item.href}>
                      {idx > 0 && <span className="text-gray-300">/</span>}
                      <Link
                        href={item.href}
                        className="hover:text-bd-blue transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    </React.Fragment>
                  ))}
                </nav>
              </FadeInUp>
            )}

            {hudBadge && (
              <FadeInUp delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200/90 rounded-md font-mono text-[11px] font-semibold text-bd-navy uppercase mb-3 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
                  <span>{hudBadge.label}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-bd-blue font-bold">{hudBadge.spec}</span>
                </div>
              </FadeInUp>
            )}

            <FadeInUp delay={0.15}>
              <h1 className="font-display font-bold text-3xl sm:text-44px lg:text-48px leading-tight tracking-tight text-bd-navy mb-4">
                {headline}
              </h1>
            </FadeInUp>

            {subheadline && (
              <FadeInUp delay={0.25}>
                <p className="font-body text-sm sm:text-base text-bd-gray leading-relaxed mb-6 max-w-2xl">
                  {subheadline}
                </p>
              </FadeInUp>
            )}

            {cta && (
              <FadeInUp delay={0.35}>
                <div className="flex items-center gap-4">
                  <Button variant="primary" size="md" href={cta.href}>
                    {cta.text}
                  </Button>
                </div>
              </FadeInUp>
            )}
          </div>

          {/* Right Column: Clean, Framed High-Resolution Discipline Showcase Card */}
          {image && (
            <div className="lg:col-span-5">
              <FadeInUp delay={0.25}>
                <div className="bg-white border border-gray-200 p-2.5 sm:p-3 rounded-2xl shadow-lg relative group overflow-hidden">
                  <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                    <img
                      src={image}
                      alt={headline || 'Engineering discipline drawing showcase'}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bd-navy/60 via-transparent to-transparent" />
                    
                    {/* Bottom Tag Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 bg-bd-navy/90 border border-bd-blue/30 backdrop-blur-xs rounded-lg text-white font-mono text-[10px] sm:text-[11px] font-semibold">
                      <span>VERIFIED SPECIFICATION</span>
                      <span className="text-bd-blue">100% ACCURATE</span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
