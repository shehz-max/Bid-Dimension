import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { ServicesGrid } from '@/components/organisms/ServicesGrid';
import { ProcessTimeline } from '@/components/organisms/ProcessTimeline';
import { SoftwareSuite } from '@/components/organisms/SoftwareSuite';
import { FAQSection } from '@/components/organisms/FAQSection';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { Phone, Upload, ArrowRight, Building2, HardHat, Briefcase, Home, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'End-to-End Engineering, Design & Construction Solutions | Bid Dimensions',
  description:
    'Full-service engineering and design firm delivering licensed structural engineering, multidisciplinary building design, permit-ready construction documentation, and technical support.',
  alternates: {
    canonical: 'https://biddimensions.us/',
  },
};

// 4 Credential Cards directly below Hero (Extracted 100% from Client Picture 1)
const HERO_CREDENTIAL_BAR = [
  {
    title: 'ISO 9001',
    subtitle: 'Quality Management',
  },
  {
    title: 'PE Licensed',
    subtitle: 'Active in 50 States',
  },
  {
    title: 'Bonded',
    subtitle: '$10M Liability Bond',
  },
  {
    title: 'Insured',
    subtitle: 'Comprehensive Professional Liability',
  },
];

const PARTNER_ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  building: Building2,
  hardhat: HardHat,
  briefcase: Briefcase,
  home: Home,
};

const TARGET_PARTNERS = [
  {
    iconName: 'building',
    title: 'Architects',
    text: 'We provide structural systems that integrate seamlessly with architectural designs while maintaining functionality, efficiency, and code compliance.',
  },
  {
    iconName: 'hardhat',
    title: 'General Contractors',
    text: 'Our engineering documentation supports efficient construction, reduces field conflicts, and simplifies project coordination throughout every stage of the build.',
  },
  {
    iconName: 'briefcase',
    title: 'Developers',
    text: 'We help optimize structural systems to improve constructability, maximize material efficiency, and support project budgets without compromising safety or performance.',
  },
  {
    iconName: 'home',
    title: 'Property Owners',
    text: "Whether constructing a new building, renovating an existing structure, or evaluating structural modifications, we provide engineering solutions tailored to your project's requirements.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Light Theme Hero Section (PrimeCost Style Paper Canvas + Web.docx Copy) */}
      <Hero
        variant="homepage"
        headline="End-to-End Engineering, Design & Construction Solutions"
        subheadline="Bid Dimensions is a full-service engineering and design firm delivering licensed structural engineering, multidisciplinary building design, permit-ready construction documentation, and technical support for residential, commercial, and industrial projects."
        cta={{ text: 'Get a Quote', href: '/contact' }}
        secondaryCta={{ text: 'Our Process', href: '#process' }}
      />

      {/* 2. Credentials Bar Directly Below Hero (Extracted 100% from Client Picture 1) */}
      <section className="py-6 bg-[#F8FAFC] border-b border-gray-200/80 text-bd-navy relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {HERO_CREDENTIAL_BAR.map((cred) => (
              <div
                key={cred.title}
                className="bg-white border border-gray-200/90 p-4 rounded-xl flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all"
              >
                <div className="p-2 rounded-lg bg-[#FAF3E0] border border-[#D4AF37]/30 text-[#B8860B] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-bd-navy">
                    {cred.title}
                  </span>
                  <span className="font-body text-xs text-bd-gray">
                    {cred.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section (Single-Screen Viewport 3x2 Grid with Ultra-Sharp Photography Thumbnails) */}
      <ServicesGrid />

      {/* 3.5. Who We Are / Our Story Section (From the Field to the Drawing Board - Extracted from Client Screenshot 2) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-gray-200/80 text-bd-navy relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Story Prose */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded text-bd-navy font-mono text-[11px] font-semibold tracking-widest uppercase mb-3 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
                  <span>02 // OUR STORY & BACKGROUND</span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="font-display font-bold text-2xl sm:text-36px leading-tight text-bd-navy mb-4">
                  From the Field to the Drawing Board
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="font-body text-sm sm:text-base text-bd-gray leading-relaxed mb-4">
                  Bid Dimensions was founded in 2008 by a team of project managers, estimators, and drafters who spent years on construction sites watching preventable mistakes cost contractors millions.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <p className="font-body text-sm sm:text-base text-bd-gray leading-relaxed mb-4">
                  Over the past 18+ years, we saw permit sets rejected for missing details. We saw material orders come up short because takeoffs were done by eye. We saw bids lost because the drawings didn't match the scope.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <p className="font-body text-sm sm:text-base text-bd-navy font-semibold leading-relaxed border-l-3 border-bd-blue pl-4 py-0.5">
                  So we built a company that treats every drawing like it's going to a job site — because it is. Every estimate like it's funding a payroll — because it is.
                </p>
              </FadeInUp>
            </div>

            {/* Right Column: Visual Card */}
            <div className="lg:col-span-5">
              <FadeInUp delay={0.25}>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col gap-3.5">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="/images/about-team-office.jpg"
                      alt="Bid Dimensions engineering team reviewing structural drawings"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center pt-1">
                    <div className="p-2.5 bg-[#F8FAFC] rounded-lg border border-gray-100">
                      <span className="font-display font-bold text-base sm:text-lg text-bd-navy block">2008</span>
                      <span className="font-mono text-[9px] text-bd-gray uppercase font-semibold">Founded</span>
                    </div>
                    <div className="p-2.5 bg-[#F8FAFC] rounded-lg border border-gray-100">
                      <span className="font-display font-bold text-base sm:text-lg text-bd-blue block">18+</span>
                      <span className="font-mono text-[9px] text-bd-gray uppercase font-semibold">Years Exp</span>
                    </div>
                    <div className="p-2.5 bg-[#F8FAFC] rounded-lg border border-gray-100">
                      <span className="font-display font-bold text-base sm:text-lg text-bd-navy block">50</span>
                      <span className="font-mono text-[9px] text-bd-gray uppercase font-semibold">States</span>
                    </div>
                    <div className="p-2.5 bg-[#F8FAFC] rounded-lg border border-gray-100">
                      <span className="font-display font-bold text-base sm:text-lg text-bd-blue block">7–14d</span>
                      <span className="font-mono text-[9px] text-bd-gray uppercase font-semibold">Turnaround</span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Target Partners Section ("Engineering Solutions for Every Project Partner") */}
      <section className="py-14 sm:py-16 bg-[#F1F5F9] border-b border-gray-200/80 text-bd-navy">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded text-bd-navy font-mono text-[11px] font-semibold tracking-widest uppercase mb-3 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
                <span>03 // WHO WE WORK WITH</span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h2 className="font-display font-bold text-2xl sm:text-36px leading-tight text-bd-navy mb-2">
                Engineering Solutions for Every Project Partner
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="font-body text-xs sm:text-sm text-bd-gray max-w-xl leading-relaxed">
                Customized engineering, design, and documentation support tailored to your project role.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {TARGET_PARTNERS.map((partner) => {
              const Icon = (partner.iconName && PARTNER_ICON_MAP[partner.iconName]) || Building2;
              return (
                <div
                  key={partner.title}
                  className="bg-white border border-gray-200 p-5 rounded-xl flex flex-col items-start hover:border-bd-blue hover:shadow-lg transition-all"
                >
                  <div className="p-2.5 bg-bd-blue/10 border border-bd-blue/30 text-bd-blue mb-3.5 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-bd-navy mb-1.5">
                    {partner.title}
                  </h3>
                  <p className="font-body text-xs text-bd-gray leading-relaxed">
                    {partner.text}
                  </p>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Process Section (5-Step Process Extracted 100% from Client Picture 2) */}
      <ProcessTimeline variant="horizontal" />

      {/* 6. Software & Engineering Technology Section */}
      <SoftwareSuite />

      {/* 7. Clean Interactive FAQ Section */}
      <FAQSection />

      {/* 8. Bottom CTA Banner ("Have a project? Let's build it right.") */}
      <section className="py-16 bg-[#F8FAFC] border-t border-gray-200 text-bd-navy">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-white border border-gray-300 p-8 sm:p-10 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start max-w-xl">
              <h2 className="font-display font-bold text-2xl sm:text-36px text-bd-navy mb-2">
                Have a project? Let's build it right.
              </h2>
              <p className="font-body text-sm text-bd-gray leading-relaxed">
                Upload your plans or reach out to our team to discuss your scope and get a fast, accurate proposal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-bd-navy text-white font-display font-semibold text-sm hover:bg-bd-blue transition-colors shadow-sm rounded"
              >
                <Upload className="w-4 h-4 text-bd-blue" />
                <span>Upload Plans</span>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-bd-blue text-bd-navy-deep font-display font-bold text-sm hover:opacity-90 transition-opacity shadow-sm rounded"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
