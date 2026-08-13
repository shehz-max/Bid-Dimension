import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { FAQItem } from '@/components/molecules/FAQItem';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { CadDrawingViewer } from '@/components/molecules/CadDrawingViewer';
import { ScopePackageCalculator } from '@/components/molecules/ScopePackageCalculator';
import { Cpu, CheckCircle2, Phone, ShieldCheck, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Licensed MEP Engineering Services | Title 24 & BIM | Bid Dimensions',
  description:
    'Licensed MEP engineering services for commercial & residential builds. Mechanical HVAC ductwork, electrical single-line diagrams, plumbing risers, & Title 24 compliance.',
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
      name: 'What does MEP engineering stand for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEP stands for Mechanical (HVAC ductwork & air distribution), Electrical (power distribution & panel schedules), and Plumbing (domestic water, DWV waste, & gas piping) engineering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Title 24 energy calculations included in MEP packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! All MEP drawing packages include certified energy code compliance documentation (Title 24 for California / IECC for national jurisdictions).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does 3D clash detection prevent job site delays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By modeling MEP utility trades inside Revit 3D BIM, we identify and resolve spatial collisions between ductwork, steel joists, and plumbing risers prior to construction.',
      },
    },
  ],
};

const MEP_SHEETS = [
  {
    id: 'sheet-m1',
    sheetNumber: 'M-1.0',
    title: 'HVAC Ductwork & Air Distribution Layout',
    category: 'Mechanical System Engineering',
    image: '/images/mep-hero-spec.jpg',
    highlights: [
      'CFM airflow calculations & duct sizing schedules',
      'Rooftop unit (RTU) curb & structural mounting details',
      'Thermostat zone control & diffuser layout',
      'Title 24 mechanical energy compliance sheets',
    ],
  },
  {
    id: 'sheet-e1',
    sheetNumber: 'E-1.0',
    title: 'Electrical Single-Line Diagram & Panel Schedules',
    category: 'Electrical Power Engineering',
    image: '/images/mep-clash-spec.jpg',
    highlights: [
      'Main service panel load calculations & feeder sizes',
      'Single-Line Diagram (SLD) riser representation',
      'Egress emergency lighting & GFCI outlet layout',
      'Photovoltaic (Solar PV) grid-tie connection details',
    ],
  },
];

const MEP_SCOPES = [
  {
    id: 'commercial-mep',
    label: 'Commercial Multi-Trade MEP Package',
    subtitle: 'Mechanical HVAC, electrical SLD, plumbing & fire sprinkler specs',
    deliverables: [
      'M-1.0 HVAC Ductwork & Equipment Sizing',
      'E-1.0 Electrical Power & Panel Schedules',
      'P-1.0 Plumbing DWV & Water Riser Diagram',
      'FP-1.0 Fire Sprinkler Head Layout',
      'Title 24 / IECC Energy Code Binder',
      '3D Revit MEP Clash Detection Model',
    ],
    turnaround: '48 Hours',
    stampType: 'PE Sealed (MEP)',
  },
  {
    id: 'residential-mep',
    label: 'Custom Home & ADU MEP Scope',
    subtitle: 'HVAC manual J/S/D calculations, electrical service & plumbing',
    deliverables: [
      'Mechanical Heat Loss & Duct Sizing',
      '200A Electrical Main Panel Load Calc',
      'Plumbing Gas & Water Supply Isometric',
      'Title 24 Energy Compliance Set',
      'PE Stamp & Permit Approval Set',
      'Fast 24-48 Hour Turnaround',
    ],
    turnaround: '24–36 Hours',
    stampType: 'PE Sealed (MEP)',
  },
  {
    id: 'trade-mep',
    label: 'Single Discipline Utility Scope',
    subtitle: 'Focused HVAC replacement, solar PV or electrical upgrade',
    deliverables: [
      'Single Discipline CAD Drawing Sheet',
      'Panel Load Calc or Duct CFM Schedule',
      'PE Engineering Stamp & Signature',
      'City Permit Submittal Set',
      'Contractor Equipment Specs',
      'Digital PDF Delivery',
    ],
    turnaround: '24 Hours',
    stampType: 'PE Sealed (MEP)',
  },
];

export default function MEPEngineeringPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <Hero
        variant="page"
        headline="Licensed MEP Engineering Services"
        subheadline="Full-service PE-stamped mechanical HVAC, electrical single-line diagrams, plumbing risers, and Title 24 energy calculations delivered in 24–48 hours."
        cta={{ text: 'Request MEP Quote', href: '/contact' }}
        image="/images/mep-hero-spec.jpg"
        hudBadge={{ label: 'MEP REVIT BIM', spec: 'CLASH FREE // PE STAMPED' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'MEP Engineering', href: '/services/mep-engineering' },
        ]}
      />

      {/* Overview Section */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-bd-blue" />
                  COORDINATED UTILITIES
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-charcoal mb-6">
                  Zero Field Interference Between HVAC, Electrical & Structure
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
                  Building MEP systems account for over 35% of total construction costs. Uncoordinated ductwork or misplaced plumbing risers lead to job site delays and change orders.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.45}>
                <p className="font-body text-base text-bd-navy font-semibold leading-relaxed">
                  Our licensed MEP engineers run 3D Revit clash detection to ensure ductwork, electrical switchboards, and plumbing risers fit inside structural ceiling cavities before installation starts.
                </p>
              </FadeInUp>
            </div>

            <div className="lg:col-span-6">
              <FadeInUp delay={0.3}>
                <div className="border border-gray-200 bg-bd-surface-light p-3 shadow-md">
                  <img
                    src="/images/mep-clash-spec.jpg"
                    alt="3D MEP Revit clash detection model"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-bd-navy text-white font-mono text-xs flex justify-between items-center mt-2">
                    <span>3D MEP CLASH DETECTION MODEL</span>
                    <span className="text-bd-blue">PASSED // ZERO CLASH</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Cad Drawing Specimen Viewer */}
      <CadDrawingViewer title="MEP Engineering Drawing Package" sheets={MEP_SHEETS} />

      {/* Scope Package Calculator */}
      <ScopePackageCalculator title="MEP Scope & Package Calculator" options={MEP_SCOPES} />

      {/* FAQ Accordion */}
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

      {/* CTA Banner */}
      <section className="py-20 bg-bd-navy-deep blueprint-grid border-t border-bd-border-dark text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-48px text-white mb-4">
            Need PE-Stamped MEP Drawings?
          </h2>
          <p className="font-body text-base text-bd-text-muted mb-8">
            Upload your plans today for a fast 24h PE-stamped engineering proposal.
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
