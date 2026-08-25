'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { HeroBuilding } from './HeroBuilding';
import { ChevronRight, ArrowDown, ShieldCheck } from 'lucide-react';

export interface HeroProps {
  variant: 'homepage' | 'page';
  label?: string;
  headline: string;
  subheadline?: string;
  cta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image?: string;
  breadcrumb?: { label: string; href: string }[];
  hudBadge?: { label: string; spec: string };
}

export const Hero: React.FC<HeroProps> = ({
  variant,
  label = 'END-TO-END ENGINEERING & DESIGN',
  headline,
  subheadline,
  cta = { text: 'Get a Free Quote', href: '/contact' },
  secondaryCta = { text: 'Our Process', href: '#process' },
  image,
  breadcrumb,
  hudBadge,
}) => {
  if (variant === 'homepage') {
    return (
      <section className="relative min-h-screen flex items-center pt-28 pb-16 bg-bd-navy-deep blueprint-grid noise-overlay overflow-hidden text-white">
        {/* ATMOSPHERIC BACKGROUND LAYER: Refined Vector Drafting Mesh & Dual Volumetric Spotlights */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Volumetric Cyan Spotlight behind 3D Model Stage */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(circle at 75% 50%, rgba(74, 138, 184, 0.14) 0%, rgba(11, 27, 46, 0.4) 60%, transparent 85%)',
            }}
          />

          {/* Deep Navy Left Vignette Core (Guarantees Pristine Headline Legibility) */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(to right, rgba(11, 27, 46, 1) 0%, rgba(11, 27, 46, 0.94) 55%, transparent 100%)',
            }}
          />

          {/* Crisp Mathematical Vector Drafting Mesh (Axis Target Circles, Elevation Ticks & Scale Crosshairs) */}
          <svg className="w-full h-full absolute inset-0 opacity-[0.18]" fill="none">
            {/* Axis Targets */}
            <g stroke="#4A8AB8" strokeWidth="1">
              <circle cx="65%" cy="15%" r="14" strokeDasharray="2 2" />
              <text x="65%" y="15.5%" fill="#4A8AB8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                AXIS A
              </text>

              <circle cx="90%" cy="15%" r="14" strokeDasharray="2 2" />
              <text x="90%" y="15.5%" fill="#4A8AB8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                AXIS B
              </text>

              <circle cx="65%" cy="85%" r="14" strokeDasharray="2 2" />
              <text x="65%" y="85.5%" fill="#4A8AB8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                GRID 01
              </text>

              <circle cx="90%" cy="85%" r="14" strokeDasharray="2 2" />
              <text x="90%" y="85.5%" fill="#4A8AB8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                GRID 02
              </text>
            </g>

            {/* Scale Dimension Lines */}
            <path d="M 65% 15% L 90% 15%" stroke="#4A8AB8" strokeWidth="1" strokeDasharray="4 2" />
            <text x="77.5%" y="12%" fill="#4A8AB8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
              SPAN: 18,500mm // STEEL BEAM
            </text>

            <path d="M 65% 15% L 65% 85%" stroke="#4A8AB8" strokeWidth="1" strokeDasharray="6 3" />
            <text
              x="63.5%"
              y="50%"
              fill="#4A8AB8"
              fontSize="9"
              fontFamily="JetBrains Mono"
              textAnchor="middle"
              transform="rotate(-90, 63.5%, 50%)"
            >
              HEIGHT: EL +36.00m // LOD 300
            </text>

            {/* Pulsing Grid Crosshairs */}
            <g stroke="#4A8AB8" strokeWidth="1.5" className="animate-pulse">
              <path d="M 60 40 L 80 40 M 70 30 L 70 50" />
              <path d="M 60 300 L 80 300 M 70 290 L 70 310" />
              <path d="M 92% 40 L 94% 40 M 93% 30 L 93% 50" />
            </g>

            {/* Technical CAD Specification Footer Mark */}
            <text x="50" y="95%" fill="#4A8AB8" fontSize="10" fontFamily="JetBrains Mono" opacity="0.75">
              CAD SPEC: BD-SPEC-2026 // ASCE 7-22 & IBC 2024 COMPLIANT // PE SEAL APPROVED
            </text>
          </svg>
        </div>

        {/* FOREGROUND CONTENT & 3D STAGE */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Zone 1: Left Content (Pristine High-Contrast Navy Space) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <FadeInUp delay={0.1}>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-4 block">
                  {label}
                </span>
              </FadeInUp>

              <FadeInUp delay={0.25}>
                <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-72px leading-[1.05] tracking-tight text-bd-text-light mb-6">
                  {headline}
                </h1>
              </FadeInUp>

              {subheadline && (
                <FadeInUp delay={0.4}>
                  <p className="font-body text-lg sm:text-xl text-bd-text-muted max-w-[520px] leading-relaxed mb-8">
                    {subheadline}
                  </p>
                </FadeInUp>
              )}

              <FadeInUp delay={0.55}>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="lg" href={cta.href}>
                    {cta.text}
                  </Button>

                  {secondaryCta && (
                    <Button variant="ghost" size="lg" href={secondaryCta.href}>
                      <span>{secondaryCta.text}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </FadeInUp>
            </div>

            {/* Zone 2: Right 3D BIM Stage (Volumetric Rim Lighting, Seamless Animation) */}
            <div className="lg:col-span-5 relative flex items-center justify-center w-full">
              <FadeInUp delay={0.4} className="w-full">
                <HeroBuilding />
              </FadeInUp>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bd-text-muted z-10">
          <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-scroll-bounce text-bd-blue" />
        </div>
      </section>
    );
  }

  // Service & Subpage Hero variant (55-60vh)
  return (
    <section className="relative pt-36 pb-20 bg-bd-navy-deep blueprint-grid border-b border-bd-border-dark overflow-hidden text-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            {breadcrumb && (
              <FadeInUp delay={0.1}>
                <nav className="flex items-center gap-2 font-mono text-xs text-bd-text-muted mb-6">
                  {breadcrumb.map((item, idx) => (
                    <React.Fragment key={item.href}>
                      {idx > 0 && <span>/</span>}
                      <Link
                        href={item.href}
                        className="hover:text-bd-blue transition-colors"
                      >
                        {item.label}
                      </Link>
                    </React.Fragment>
                  ))}
                </nav>
              </FadeInUp>
            )}

            <FadeInUp delay={0.2}>
              <h1 className="font-display font-bold text-4xl sm:text-56px leading-tight text-bd-text-light mb-4">
                {headline}
              </h1>
            </FadeInUp>

            {subheadline && (
              <FadeInUp delay={0.35}>
                <p className="font-body text-lg sm:text-xl text-bd-text-muted leading-relaxed mb-8 max-w-2xl">
                  {subheadline}
                </p>
              </FadeInUp>
            )}

            {cta && (
              <FadeInUp delay={0.5}>
                <Button variant="primary" size="md" href={cta.href}>
                  {cta.text}
                </Button>
              </FadeInUp>
            )}
          </div>

          {/* Right Floating CAD HUD Visual Card */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end">
            <FadeInUp delay={0.4}>
              <div className="relative group p-6 bg-bd-navy/90 border border-bd-blue/30 backdrop-blur-md shadow-glow-blue w-full max-w-md">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-bd-blue shadow-[0_0_10px_#4A8AB8] animate-laser-scan pointer-events-none" />

                <div className="flex items-center justify-between border-b border-bd-blue/20 pb-3 mb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-bd-blue font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>PE LICENSED SCOPE</span>
                  </div>
                  <span className="font-mono text-[10px] text-bd-text-muted">LOD 300 BIM</span>
                </div>

                {image ? (
                  <div className="relative overflow-hidden mb-4 border border-bd-blue/20">
                    <img src={image} alt={headline} className="w-full h-44 object-cover filter contrast-105" />
                  </div>
                ) : (
                  <div className="p-4 bg-bd-navy-deep border border-bd-blue/20 font-mono text-xs text-bd-text-muted flex flex-col gap-2 mb-4">
                    <div className="flex items-center justify-between text-white font-semibold">
                      <span>SPECIFICATION LEVEL:</span>
                      <span className="text-bd-blue">100% PERMIT READY</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>TURNAROUND TIME:</span>
                      <span className="text-bd-blue">24–48 HOURS</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>CODE COMPLIANCE:</span>
                      <span className="text-bd-blue">IBC / CBC / Title 24</span>
                    </div>
                  </div>
                )}

                {hudBadge && (
                  <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-bd-blue/20">
                    <span className="text-bd-text-muted">{hudBadge.label}:</span>
                    <span className="text-bd-blue font-bold">{hudBadge.spec}</span>
                  </div>
                )}
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};
