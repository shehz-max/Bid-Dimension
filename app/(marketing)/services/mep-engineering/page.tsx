import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { FAQItem } from '@/components/molecules/FAQItem';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { Cpu, CheckCircle2, Phone, Layers, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Licensed MEP Engineering & Title 24 | Bid Dimensions',
  description:
    'Coordinated MEP engineering for HVAC, electrical power, plumbing, & Title 24 energy compliance. Minimize field clashes & pass city permits.',
  alternates: {
    canonical: 'https://biddimensions.us/services/mep-engineering',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you coordinate with utility providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We prepare the engineering documentation required for utility reviews, including single-line diagrams, electrical load summaries, and other supporting documents for new or upgraded utility connections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is fire protection design included in your MEP services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide fire protection system design and coordination, including sprinkler layouts, riser diagrams, and supporting documentation, where required by the project scope and applicable codes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does MEP engineering cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEP engineering encompasses Mechanical (HVAC ducting, load calculations), Electrical (power distribution, panel schedules, lighting design), and Plumbing (water supply, waste, gas piping) systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide Title 24 energy compliance calculations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide certified Title 24 energy compliance documentation for building envelope, mechanical HVAC, and electrical lighting systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you prevent MEP field clashes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We utilize Autodesk Revit MEP 3D BIM modeling to run automated spatial collision detection between HVAC ducts, structural steel, and plumbing risers prior to construction.',
      },
    },
  ],
};

export default function MepEngineeringPage() {
  const deliverables = [
    'HVAC Plans & Equipment Layouts',
    'Air Distribution & Ductwork Plans',
    'Electrical Power & Lighting Plans',
    'Single-Line Diagrams (SLD)',
    'Panel Schedules & Load Calculations',
    'Plumbing Plans & Piping Layouts',
    'Water Supply & Drainage Systems',
    'Fire Protection Coordination Details',
    'Mechanical, Electrical & Plumbing Details',
    'Equipment Schedules',
    'MEP Coordination Drawings',
    'Energy Compliance Documentation (Title 24)',
  ];

  const technologies = [
    { name: 'Autodesk Revit MEP', role: '3D BIM Multi-System Clash Detection' },
    { name: 'AutoCAD MEP', role: '2D Drafting & System Schematics' },
    { name: 'Trane TRACE 700', role: 'HVAC Load & Thermal Analysis' },
    { name: 'Elite Software', role: 'Plumbing & Electrical Load Calcs' },
    { name: 'DIALux evo', role: 'Photometric Lighting Calculation' },
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
        headline="Coordinated MEP Engineering & Energy Compliance"
        subheadline="At Bid Dimensions, we provide licensed MEP engineering services that deliver efficient, coordinated, and code-compliant mechanical, electrical, and plumbing designs."
        cta={{ text: 'Request MEP Engineering Quote', href: '/contact' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'MEP Engineering', href: '/services/mep-engineering' },
        ]}
      />

      {/* 2. Overview Section (2-column) */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-bd-blue" />
                  SYSTEM INTEGRATION
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-charcoal mb-6">
                  Multidisciplinary Mechanical, Electrical, & Plumbing Design
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
                  At Bid Dimensions, we provide licensed MEP engineering services that deliver efficient, coordinated, and code-compliant mechanical, electrical, and plumbing designs for residential, commercial, and industrial projects.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.45}>
                <p className="font-body text-base text-bd-navy font-semibold leading-relaxed">
                  Our multidisciplinary approach ensures every MEP system is fully coordinated with the architectural and structural design before construction begins. By identifying potential conflicts early, optimizing system layouts, and preparing permit-ready documentation, we help minimize costly revisions, simplify permitting, and support efficient construction from start to finish.
                </p>
              </FadeInUp>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6">
              <FadeInUp delay={0.3}>
                <div className="border border-gray-200 bg-bd-surface-light p-3 shadow-md">
                  <img
                    src="/images/mep-coordination.webp"
                    alt="MEP coordination drawing showing HVAC ductwork, electrical conduits, and plumbing pipes cross-section"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-bd-navy text-white font-mono text-xs flex justify-between items-center mt-2">
                    <span>3D MEP CLASH DETECTION MODEL</span>
                    <span className="text-bd-blue">CODE COMPLIANT</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Design Technology Section */}
      <section className="py-20 bg-bd-surface-light text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                DESIGN TECHNOLOGY
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal">
                Powered by Industry-Standard Technology
              </h2>
            </FadeInUp>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <ShieldCheck className="w-8 h-8 text-bd-blue mb-4" />
                  <h3 className="font-display font-bold text-xl text-bd-navy mb-2">
                    {tech.name}
                  </h3>
                  <p className="font-body text-xs text-bd-gray leading-relaxed">
                    {tech.role}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Project Deliverables */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start mb-12">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block flex items-center gap-2">
                <Layers className="w-4 h-4 text-bd-blue" />
                SYSTEM DELIVERABLES
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

      {/* 5. FAQ Accordion */}
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

      {/* 6. CTA Banner */}
      <section className="py-20 bg-bd-navy-deep blueprint-grid border-t border-bd-border-dark text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-48px text-white mb-4">
            Optimize Your Building's MEP Systems
          </h2>
          <p className="font-body text-base text-bd-text-muted mb-8">
            Upload your plans for a comprehensive MEP engineering quote delivered in 24–48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Upload Plans for MEP Quote
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
