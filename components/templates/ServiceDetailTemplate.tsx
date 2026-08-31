'use client';

import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/organisms/Hero';
import { FAQItem } from '@/components/molecules/FAQItem';
import { NationwideLicenseSection } from '@/components/organisms/NationwideLicenseSection';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { CheckCircle2, ChevronRight, ArrowRight, ShieldCheck, Building2, HardHat, Home, Briefcase, Sparkles, Layers } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  building: Building2,
  hardhat: HardHat,
  home: Home,
  briefcase: Briefcase,
  sparkles: Sparkles,
  layers: Layers,
};

export interface ServiceDetailProps {
  serviceSlug: string;
  title: string;
  heroSubtitle: string;
  heroImage?: string;
  overview: {
    paragraph1: string;
    paragraph2: string;
  };
  targetAudiences: Array<{
    iconName?: 'building' | 'hardhat' | 'home' | 'briefcase' | 'sparkles' | 'layers' | string;
    title: string;
    text: string;
  }>;
  processSteps: Array<{
    number: number;
    title: string;
    text: string;
  }>;
  deliverables: string[];
  softwareList: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  jsonLdSchema?: object;
}

const ALL_SOLUTIONS = [
  { label: 'Architectural Design', href: '/services/architectural-design', slug: 'architectural-design' },
  { label: 'Structural Engineering', href: '/services/structural-engineering', slug: 'structural-engineering' },
  { label: 'MEP Engineering', href: '/services/mep-engineering', slug: 'mep-engineering' },
  { label: 'BIM & CAD Services', href: '/services/bim-cad-services', slug: 'bim-cad-services' },
  { label: '3D Rendering & Visualization', href: '/services/rendering-services', slug: 'rendering-services' },
  { label: 'Quantity Takeoff & Estimation', href: '/services/estimation', slug: 'estimation' },
  { label: 'Shop Drawing & CAD Drafting', href: '/services/bim-cad-services', slug: 'shop-drawings' },
  { label: 'Sign & PE Stamp Services', href: '/services/structural-engineering', slug: 'pe-stamping' },
  { label: 'Permit Correction & Plan Check', href: '/contact', slug: 'permit-correction' },
  { label: 'Pre-Construction Engineering', href: '/contact', slug: 'pre-construction' },
];

export const ServiceDetailTemplate: React.FC<ServiceDetailProps> = ({
  serviceSlug,
  title,
  heroSubtitle,
  heroImage = '/images/hero-light-cad-bg.jpg',
  overview,
  targetAudiences,
  processSteps,
  deliverables,
  softwareList,
  faqs,
  jsonLdSchema,
}) => {
  return (
    <div className="flex flex-col">
      {jsonLdSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      )}

      {/* Subpage Hero with Full Bleed Discipline Background */}
      <Hero
        variant="page"
        headline={title}
        subheadline={heroSubtitle}
        image={heroImage}
        cta={{ text: 'Get a Quote', href: '/contact' }}
      />

      {/* 2-Column Main Layout Matching Primecost Reference */}
      <section className="py-16 sm:py-20 bg-[#EBF3FA] border-b border-[#4A8AB8]/20 text-bd-navy">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: 6 Structured White Cards (8 Columns) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Card 1: Service Overview & Business Outcomes */}
              <FadeInUp>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-1.5 block">
                    SERVICE OVERVIEW
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-28px text-bd-navy mb-4">
                    Service Overview & Business Outcomes
                  </h2>
                  <p className="font-body text-sm sm:text-base text-bd-gray leading-relaxed mb-4">
                    {overview.paragraph1}
                  </p>
                  <p className="font-body text-sm sm:text-base text-bd-gray leading-relaxed">
                    {overview.paragraph2}
                  </p>
                </div>
              </FadeInUp>

              {/* Card 2: Who Needs {Service Name}? */}
              <FadeInUp delay={0.1}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-1.5 block">
                    TARGET PARTNERS
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-28px text-bd-navy mb-6">
                    Who Needs {title}?
                  </h2>
                  <div className="grid grid-cols-1 gap-3.5">
                    {targetAudiences.map((audience) => {
                      const Icon = (audience.iconName && ICON_MAP[audience.iconName]) || Building2;
                      return (
                        <div
                          key={audience.title}
                          className="flex items-start gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-bd-blue/40 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#EBF3FA] border border-[#4A8AB8]/30 flex items-center justify-center text-bd-blue shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-base text-bd-navy mb-0.5">
                              {audience.title}
                            </h3>
                            <p className="font-body text-xs sm:text-sm text-bd-gray leading-relaxed">
                              {audience.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeInUp>

              {/* Card 3: Our Execution Process */}
              <FadeInUp delay={0.15}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-1.5 block">
                    6-STEP WORKFLOW
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-28px text-bd-navy mb-1.5">
                    Our Execution Process
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-bd-gray mb-6">
                    We maintain a strict 6-stage development pipeline to check codes, structural alignment, and model accuracy:
                  </p>

                  <div className="flex flex-col gap-4">
                    {processSteps.map((step) => (
                      <div
                        key={step.number}
                        className="flex items-start gap-4 p-3.5 sm:p-4 rounded-xl border border-gray-100 hover:bg-[#F8FAFC] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-bd-navy text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base text-bd-navy mb-1">
                            {step.title}
                          </h3>
                          <p className="font-body text-xs sm:text-sm text-bd-gray leading-relaxed">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              {/* Card 4: Complete Listing of Deliverables */}
              <FadeInUp delay={0.2}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-1.5 block">
                    PROJECT DELIVERABLES
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-28px text-bd-navy mb-1.5">
                    Complete Listing of Deliverables
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-bd-gray mb-6">
                    We compile and deliver standardized engineering files, drawings, calculations, and data sheets:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 p-3 bg-[#F8FAFC] border border-gray-100 rounded-xl text-xs sm:text-sm font-body text-bd-navy font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-bd-blue shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              {/* Card 5: Industrial Software Applied */}
              <FadeInUp delay={0.25}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-1.5 block">
                    DESIGN TECHNOLOGY
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-28px text-bd-navy mb-1.5">
                    Industrial Software Applied
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-bd-gray mb-6">
                    Our engineering stamps and designs are drafted in industry-standard programs to enable easy contractor file sharing:
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {softwareList.map((software) => (
                      <span
                        key={software}
                        className="px-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-xl font-mono text-xs text-bd-navy font-semibold shadow-2xs hover:border-bd-blue hover:text-bd-blue transition-colors"
                      >
                        • {software}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              {/* Card 6: Service Specific Q&A */}
              <FadeInUp delay={0.3}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-1.5 block">
                    FAQ & SUPPORT
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-28px text-bd-navy mb-6">
                    Service Specific Q&A
                  </h2>
                  <div className="flex flex-col gap-3">
                    {faqs.map((faq, idx) => (
                      <FAQItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                        defaultOpen={idx === 0}
                      />
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* RIGHT COLUMN: Sticky Sidebar (4 Columns) */}
            <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-24 lg:top-28">
              
              {/* Card 1: Our Solutions Navigation */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                <h3 className="font-display font-bold text-lg text-bd-navy mb-4 pb-3 border-b border-gray-100">
                  Our Solutions
                </h3>
                <nav className="flex flex-col gap-1.5">
                  {ALL_SOLUTIONS.map((sol) => {
                    const isActive = sol.slug === serviceSlug;
                    return (
                      <Link
                        key={sol.label}
                        href={sol.href}
                        className={`px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm flex items-center justify-between transition-all group ${
                          isActive
                            ? 'bg-bd-navy text-white font-semibold shadow-xs'
                            : 'text-bd-navy hover:bg-[#EBF3FA] hover:text-bd-blue font-medium'
                        }`}
                      >
                        <span>{sol.label}</span>
                        {isActive ? (
                          <ArrowRight className="w-4 h-4 text-bd-blue shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-bd-blue transition-colors shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Card 2: Need a PE Stamp? Dark Navy Card (Preserved Exact Scenario as Required) */}
              <div className="bg-bd-navy text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col gap-4 border border-[#1A3A5C]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-bd-blue font-bold tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-bd-blue" />
                  <span>50-STATE PE NETWORK</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  Need a PE Stamp?
                </h3>
                <p className="font-body text-xs sm:text-sm text-bd-text-muted leading-relaxed">
                  We compile permit-ready drawing packs and structural calculations signed by licensed Professional Engineers nationwide.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  href="/contact"
                  className="w-full bg-[#D4AF37] hover:bg-[#C59B27] text-bd-navy font-bold border-none shadow-sm mt-2 rounded-xl"
                >
                  Get a Quote
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 50-State Nationwide License Coverage Section on Every Service Page */}
      <NationwideLicenseSection />
    </div>
  );
};
