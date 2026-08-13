import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { ProcessTimeline } from '@/components/organisms/ProcessTimeline';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { ShieldCheck, Award, CheckCircle, Users, Compass, HardHat, Cpu, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Bid Dimensions | Licensed Engineering & Design Firm',
  description:
    'Learn about Bid Dimensions — licensed structural engineers, architectural designers, & MEP specialists delivering PE-stamped permit sets across all 50 states.',
  alternates: {
    canonical: 'https://biddimensions.us/about',
  },
};

export default function AboutPage() {
  const pillars = [
    {
      icon: HardHat,
      title: 'Structural Safety First',
      desc: 'Every calculation is verified through finite element analysis (FEA) to ensure structures stand the test of time and seismic forces.',
    },
    {
      icon: Compass,
      title: 'Coordinated Design',
      desc: 'We integrate structural, architectural, and MEP disciplines early, eliminating 90% of field clashes before concrete is poured.',
    },
    {
      icon: Cpu,
      title: '24-48h Speed',
      desc: 'Our streamlined CAD and Revit BIM workflows deliver permit-ready engineering packages in standard 24–48 hour turnarounds.',
    },
    {
      icon: ShieldCheck,
      title: '50-State PE Stamps',
      desc: 'Our network of licensed Professional Engineers holds registrations across all 50 states, ensuring local code compliance everywhere.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero
        variant="page"
        headline="Engineering That Carries the Weight"
        subheadline="Bid Dimensions is a full-service engineering and design firm delivering licensed structural calculations, multidisciplinary building plans, and permit-ready documentation."
        cta={{ text: 'Request an Engineering Quote', href: '/contact' }}
        hudBadge={{ label: 'FIRM STANDARDS', spec: 'IBC 2024 // 50-STATE LICENSED' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      {/* Story & Philosophy Section */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                  OUR PHILOSOPHY
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-charcoal mb-6">
                  Drawings That Hold Up on the Job Site — Not Just on Paper
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
                  Most structural issues don't begin during construction — they begin during design. An overlooked load path, an undersized foundation footing, or an uncoordinated connection detail can lead to costly revisions, city plan check rejections, and project delays.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.45}>
                <p className="font-body text-base text-bd-navy font-semibold leading-relaxed">
                  At Bid Dimensions, our multidisciplinary engineering team resolves these challenges before groundbreaking. We combine licensed structural engineering, permit-ready architectural design, and 3D Revit MEP clash detection under one roof.
                </p>
              </FadeInUp>
            </div>

            <div className="lg:col-span-6">
              <FadeInUp delay={0.3}>
                <div className="border border-gray-200 bg-bd-surface-light p-4 shadow-md">
                  <img
                    src="/images/hero-finished-commercial.webp"
                    alt="Commercial engineering building render"
                    className="w-full h-auto object-cover mb-4"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-bd-navy text-white font-mono text-xs">
                    <span>MULTIDISCIPLINARY ENGINEERING</span>
                    <span className="text-bd-blue">PE STAMP APPROVED</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-bd-surface-light text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                OUR CORE VALUES
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal">
                Built on Engineering Excellence
              </h2>
            </FadeInUp>
          </div>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <Icon className="w-8 h-8 text-bd-blue mb-4" />
                    <h3 className="font-display font-bold text-xl text-bd-navy mb-2">
                      {p.title}
                    </h3>
                    <p className="font-body text-xs text-bd-gray leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Engineering Process */}
      <ProcessTimeline variant="horizontal" />

      {/* CTA Section */}
      <section className="py-20 bg-bd-navy-deep blueprint-grid border-t border-bd-border-dark text-center text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-48px text-white mb-4">
            Partner With Licensed Engineers
          </h2>
          <p className="font-body text-base text-bd-text-muted mb-8">
            Upload your plans today for a fast 24–48h PE-stamped quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Get Your Free Quote
            </Button>
            <a
              href="tel:7472237815"
              className="flex items-center gap-2 font-mono text-sm text-bd-text-light hover:text-bd-blue transition-colors"
            >
              <Phone className="w-4 h-4 text-bd-blue" />
              <span>Call (747) 223-7815</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
