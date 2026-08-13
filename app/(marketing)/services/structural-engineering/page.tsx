import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { ProcessTimeline } from '@/components/organisms/ProcessTimeline';
import { FAQItem } from '@/components/molecules/FAQItem';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { ShieldAlert, Users, Layers, CheckCircle2, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PE Stamped Structural Engineering Services | Bid Dimensions',
  description:
    'Licensed PE structural engineering, foundation design, framing calculations, & stamped permit drawings for commercial & residential builds. Call (747) 223-7815.',
  alternates: {
    canonical: 'https://biddimensions.us/services/structural-engineering',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in structural engineering services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our structural engineering services include load calculations, foundation design, framing plans, reinforced concrete/steel details, lateral wind and seismic analysis, and PE-stamped construction documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide PE-stamped drawings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our structural engineering drawings and calculations are reviewed, signed, and stamped by licensed Professional Engineers (PE).',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does structural engineering take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turnaround time typically ranges between 24 to 48 hours for standard residential and commercial projects, depending on project complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What software do you use for structural analysis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We utilize industry-leading software including AutoCAD, Revit, ETABS, SAFE, Tekla Structures, and PlanSwift.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work directly with my architect or general contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We collaborate directly with architects, general contractors, developers, and property owners to ensure seamless coordination and 100% code compliance.',
      },
    },
  ],
};

export default function StructuralEngineeringPage() {
  const deliverables = [
    'Structural Design Calculations',
    'Foundation Plans & Concrete Footing Details',
    'Floor & Roof Framing Plans',
    'Reinforced Concrete Details',
    'Structural Steel Connection Details',
    'Timber Framing & Truss Details',
    'Beam & Column Schedules',
    'Structural Sections & Details',
    'General Structural Notes & Specifications',
    'Engineering Reports & FEA Analysis',
  ];

  const audiences = [
    {
      title: 'Architects',
      desc: 'We provide structural systems that integrate seamlessly with architectural designs while maintaining functionality, efficiency, and code compliance.',
    },
    {
      title: 'General Contractors',
      desc: 'Our engineering documentation supports efficient construction, reduces field conflicts, and simplifies project coordination throughout every stage of the build.',
    },
    {
      title: 'Developers',
      desc: 'We help optimize structural systems to improve constructability, maximize material efficiency, and support project budgets without compromising safety or performance.',
    },
    {
      title: 'Property Owners',
      desc: 'Whether constructing a new building, renovating an existing structure, or evaluating structural modifications, we provide engineering solutions tailored to your requirements.',
    },
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero (60vh) */}
      <Hero
        variant="page"
        headline="PE-Stamped Structural Engineering Services"
        subheadline="Licensed structural calculations, foundation design, and framing plans engineered to resolve field conflicts long before construction starts."
        cta={{ text: 'Request a Structural Quote', href: '/contact' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Structural Engineering', href: '/services/structural-engineering' },
        ]}
      />

      {/* 2. The Cost of Getting It Wrong (2-column) */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  RISK MITIGATION
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-charcoal mb-6">
                  The Cost of Getting It Wrong
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
                  Most structural issues don't begin during construction — they begin during design. An overlooked load path, an undersized foundation, or an uncoordinated connection detail can lead to costly revisions, project delays, and unexpected challenges in the field.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.45}>
                <p className="font-body text-base text-bd-navy font-semibold leading-relaxed">
                  Our engineering process identifies and resolves these issues early, delivering coordinated, code-compliant designs that keep construction moving with confidence.
                </p>
              </FadeInUp>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6">
              <FadeInUp delay={0.3}>
                <div className="border border-gray-200 bg-bd-surface-light p-3 shadow-md">
                  <img
                    src="/images/foundation-before-after.webp"
                    alt="Split technical illustration comparing failing foundation sketch versus engineered structural foundation detail"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-bd-navy text-white font-mono text-xs flex justify-between items-center mt-2">
                    <span>ENGINEERED FOUNDATION SPEC</span>
                    <span className="text-bd-blue">PE STAMPED</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Work With */}
      <section className="py-20 bg-bd-surface-light text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                PARTNERSHIPS
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal">
                Who We Work With
              </h2>
            </FadeInUp>
          </div>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((aud) => (
              <div
                key={aud.title}
                className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <Users className="w-8 h-8 text-bd-blue mb-4" />
                  <h3 className="font-display font-bold text-xl text-bd-navy mb-2">
                    {aud.title}
                  </h3>
                  <p className="font-body text-xs text-bd-gray leading-relaxed">
                    {aud.desc}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Our Engineering Process (Vertical Timeline) */}
      <ProcessTimeline variant="vertical" />

      {/* 5. Project Deliverables */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start mb-12">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block flex items-center gap-2">
                <Layers className="w-4 h-4 text-bd-blue" />
                PACKAGE SCOPE
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal">
                Project Deliverables
              </h2>
            </FadeInUp>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="p-4 bg-bd-surface-light border border-gray-200 font-body text-sm font-semibold text-bd-navy flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-bd-blue shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-20 bg-bd-surface-light text-bd-charcoal">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col items-start mb-12">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                QUESTIONS & ANSWERS
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal">
                Frequently Asked Questions
              </h2>
            </FadeInUp>
          </div>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-sm">
            {faqSchema.mainEntity.map((item, idx) => (
              <FAQItem
                key={item.name}
                question={item.name}
                answer={item.acceptedAnswer.text}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="py-20 bg-bd-navy-deep blueprint-grid border-t border-bd-border-dark text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-48px text-white mb-4">
            Get Structural Engineering You Can Trust
          </h2>
          <p className="font-body text-base text-bd-text-muted mb-8">
            Upload your plans today for a fast 24–48h PE-stamped quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Upload Your Plans for a Free Quote
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
