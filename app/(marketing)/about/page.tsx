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

const ICON_LOOKUP: Record<string, React.FC<{ className?: string }>> = {
  hardhat: HardHat,
  compass: Compass,
  cpu: Cpu,
  shield: ShieldCheck,
};

const pillars = [
  {
    iconName: 'hardhat',
    title: 'Structural Safety First',
    desc: 'Every calculation is verified through finite element analysis (FEA) to ensure structures stand the test of time and seismic forces.',
  },
  {
    iconName: 'compass',
    title: 'Coordinated Design',
    desc: 'We integrate structural, architectural, and MEP disciplines early, eliminating 90% of field clashes before concrete is poured.',
  },
  {
    iconName: 'cpu',
    title: '24-48h Speed',
    desc: 'Our streamlined CAD and Revit BIM workflows deliver permit-ready engineering packages in standard 24–48 hour turnarounds.',
  },
  {
    iconName: 'shield',
    title: '50-State PE Stamps',
    desc: 'Our network of licensed Professional Engineers holds registrations across all 50 states, ensuring local code compliance everywhere.',
  },
];

export default function AboutPage() {

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
                <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-navy mb-6">
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
                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-3 shadow-md">
                  <img
                    src="/images/about-team-office.jpg"
                    alt="Bid Dimensions multidisciplinary engineering team collaborating on architectural plans"
                    className="w-full h-auto object-cover rounded-xl mb-3"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-[#EBF3FA] border border-[#4A8AB8]/30 rounded-lg text-bd-navy font-mono text-xs font-semibold">
                    <span>MULTIDISCIPLINARY ENGINEERING</span>
                    <span className="text-bd-blue font-bold">50-STATE PE REGISTERED</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Construction & Execution Visual Section */}
      <section className="py-16 bg-[#F8FAFC] border-y border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <FadeInUp delay={0.2}>
                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-3 shadow-md">
                  <img
                    src="/images/about-hero-construction.jpg"
                    alt="Commercial steel construction jobsite engineered by Bid Dimensions"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </FadeInUp>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                  PRECISION ON-SITE
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-44px leading-tight text-bd-navy mb-6">
                  Engineered for Zero Field Clashes & 100% City Approval
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
                  Every calculation, connection schedule, and structural plan set we deliver is verified against the latest IBC, CBC, and local jurisdiction building codes. We work directly with contractors and builders to ensure zero ambiguity in the field.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.45}>
                <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-bd-navy font-semibold">
                  <span className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-md shadow-xs">✓ IBC 2024 Compliant</span>
                  <span className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-md shadow-xs">✓ 24-48h Speed</span>
                  <span className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-md shadow-xs">✓ Licensed PE Seals</span>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                OUR CORE VALUES
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-navy">
                Built on Engineering Excellence
              </h2>
            </FadeInUp>
          </div>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = ICON_LOOKUP[p.iconName] || HardHat;
              return (
                <div
                  key={p.title}
                  className="bg-[#F8FAFC] p-7 border border-gray-200 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#EBF3FA] rounded-xl flex items-center justify-center text-bd-blue mb-5 border border-[#4A8AB8]/30">
                      <Icon className="w-6 h-6" />
                    </div>
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
      <section className="py-20 bg-[#F8FAFC] border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="bg-white p-8 sm:p-12 border border-gray-200 shadow-sm rounded-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-navy mb-4">
              Partner With Licensed Engineers
            </h2>
            <p className="font-body text-base text-bd-gray mb-8">
              Upload your plans today for a fast 24–48h PE-stamped quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Get Your Free Quote
              </Button>
              <a
                href="tel:7472237815"
                className="flex items-center gap-2 font-mono text-sm text-bd-navy hover:text-bd-blue transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 text-bd-blue" />
                <span>Call (747) 223-7815</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
