'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { HeroBuilding } from './HeroBuilding';
import { ChevronRight, ArrowDown, ShieldCheck, FileCheck } from 'lucide-react';

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
  secondaryCta = { text: 'View Our Work', href: '/#process' },
  image,
  breadcrumb,
  hudBadge,
}) => {
  if (variant === 'homepage') {
    return (
      <section className="relative min-h-screen flex items-center pt-28 pb-16 bg-[#F4F7FA] overflow-hidden border-b border-gray-200">
        {/* PrimeCost Style CAD Drafting Sheet Blueprint Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/images/hero-light-cad-bg.jpg"
            alt="Engineering CAD drawing blueprint background overlay"
            className="w-full h-full object-cover mix-blend-multiply opacity-15 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FA]/95 via-[#F4F7FA]/80 to-transparent" />
        </div>

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <FadeInUp delay={0.1}>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-4 block">
                  {label}
                </span>
              </FadeInUp>

              <FadeInUp delay={0.25}>
                <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-72px leading-[1.05] tracking-tight text-bd-navy mb-6">
                  {headline}
                </h1>
              </FadeInUp>

              {subheadline && (
                <FadeInUp delay={0.4}>
                  <p className="font-body text-lg sm:text-xl text-bd-gray max-w-[520px] leading-relaxed mb-8">
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

            <div className="lg:col-span-5 relative flex items-center justify-center w-full">
              <FadeInUp delay={0.4} className="w-full">
                <HeroBuilding />
              </FadeInUp>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bd-gray z-10">
          <span className="font-mono text-[11px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-scroll-bounce text-bd-blue" />
        </div>
      </section>
    );
  }

  // Service & Subpage Hero variant (55-60vh) with off-white background and light CAD overlay
  return (
    <section className="relative pt-36 pb-20 bg-[#F4F7FA] border-b border-gray-200 overflow-hidden">
      {/* Subpage CAD Blueprint Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15 mix-blend-multiply">
        <img
          src="/images/hero-light-cad-bg.jpg"
          alt="Engineering CAD drawing background overlay"
          className="w-full h-full object-cover filter contrast-125"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            {breadcrumb && (
              <FadeInUp delay={0.1}>
                <nav className="flex items-center gap-2 font-mono text-xs text-bd-gray mb-6">
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
              <h1 className="font-display font-bold text-4xl sm:text-56px leading-tight text-bd-navy mb-4">
                {headline}
              </h1>
            </FadeInUp>

            {subheadline && (
              <FadeInUp delay={0.35}>
                <p className="font-body text-lg sm:text-xl text-bd-gray leading-relaxed mb-8 max-w-2xl">
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
              <div className="relative group p-6 bg-bd-navy text-white border border-bd-blue/40 shadow-2xl w-full max-w-md">
                {/* Laser scanline effect */}
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
