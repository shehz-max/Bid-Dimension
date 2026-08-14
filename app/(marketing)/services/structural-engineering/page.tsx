import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { FAQItem } from '@/components/molecules/FAQItem';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { CadDrawingViewer } from '@/components/molecules/CadDrawingViewer';
import { ScopePackageCalculator } from '@/components/molecules/ScopePackageCalculator';
import { HardHat, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Licensed Structural Engineering Services | PE Stamped Plans | Bid Dimensions',
  description:
    'Licensed PE structural engineering services for commercial & residential construction. Permit-ready foundation plans, framing calculations, & lateral seismic design.',
  keywords: [
    'structural engineering services',
    'PE stamped structural plans',
    'licensed structural engineer',
    'foundation engineering',
    'framing plans',
    'seismic load calculations',
  ],
  alternates: {
    canonical: 'https://biddimensions.us/services/structural-engineering',
  },
  openGraph: {
    title: 'Licensed Structural Engineering Services | PE Stamped Plans',
    description:
      'Licensed PE structural engineering services for commercial & residential construction. 24-48h turnaround, 50-state coverage.',
    url: 'https://biddimensions.us/services/structural-engineering',
    images: [{ url: '/images/struct-hero-spec.jpg', width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://biddimensions.us' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://biddimensions.us/#services' },
    { '@type': 'ListItem', position: 3, name: 'Structural Engineering', item: 'https://biddimensions.us/services/structural-engineering' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Structural Engineering Services',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bid Dimensions',
    url: 'https://biddimensions.us',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Full-service PE-stamped structural calculations, foundation design, steel framing, lateral seismic analysis, and city permit submittal sets.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is a PE stamp required for structural engineering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Professional Engineer (PE) stamp is required by municipal building departments for commercial new builds, structural wall removals, additions, retaining walls over 4ft, and seismic retrofits to ensure structural safety.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a structural permit drawing set?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete structural permit set includes foundation plans, framing layouts, column and beam schedules, connection details, lateral load calculations, and General Structural Notes (GSN).',
      },
    },
    {
      '@type': 'Question',
      name: 'What building codes do your structural calculations comply with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our calculations comply with IBC 2024, ASCE 7-22 seismic/wind provisions, ACI 318 for concrete, AISC 360 for steel, and NDS for timber construction.',
      },
    },
  ],
};

const STRUCTURAL_SHEETS = [
  {
    id: 'sheet-s1',
    sheetNumber: 'S-1.0',
    title: 'Reinforced Foundation & Footing Plan',
    category: 'Substructure Engineering',
    image: '/images/found-compare-spec.jpg',
    highlights: [
      'Engineered concrete pier & grade beam layout',
      'Continuous wall footing rebar schedules',
      'Soil bearing capacity load transfer details',
      'PE stamp & city plan check approval block',
    ],
  },
  {
    id: 'sheet-s2',
    sheetNumber: 'S-2.0',
    title: 'Structural Steel Framing & Beam Schedules',
    category: 'Superstructure Engineering',
    image: '/images/struct-hero-spec.jpg',
    highlights: [
      'ASTM A992 steel column & I-beam framing grid',
      'Moment connection FEA stress calculation notes',
      'Lateral seismic shear wall tie-down specs',
      'Anchor bolt & base plate elevation details',
    ],
  },
];

const STRUCTURAL_SCOPES = [
  {
    id: 'commercial-struct',
    label: 'Commercial Multi-Story Structural Scope',
    subtitle: 'Complete PE calculations, steel framing & foundation design',
    deliverables: [
      'S-1.0 Concrete Foundation & Pier Layout',
      'S-2.0 Superstructure Steel Framing Set',
      'S-3.0 Structural Connection Schedules',
      'FEA Seismic & Wind Load Calculation Book',
      '50-State PE Stamp & Digital Signature',
      '100% City Plan Check Support Guarantee',
    ],
    turnaround: '48 Hours',
    stampType: 'PE Sealed (50 States)',
  },
  {
    id: 'residential-struct',
    label: 'Custom Home & ADU Framing Scope',
    subtitle: 'Timber framing, foundation & load-bearing wall removals',
    deliverables: [
      'S-1.0 Slab & Stem Wall Foundation Plan',
      'S-2.0 Timber Floor & Roof Framing Layout',
      'S-3.0 Load-Bearing Wall Removal Headers',
      'Retaining Wall & Hillside Calculations',
      'PE Stamp & City Plan Check Approval Set',
      'Fast 24-48 Hour Delivery',
    ],
    turnaround: '24–36 Hours',
    stampType: 'PE Sealed (50 States)',
  },
  {
    id: 'retrofit-struct',
    label: 'Seismic & Structural Retrofit Scope',
    subtitle: 'Soft-story strengthening & shear wall tie-downs',
    deliverables: [
      'S-1.0 Existing Condition Audit Layout',
      'S-2.0 Steel Moment Frame Upgrade Details',
      'S-3.0 Plywood Shear Wall Nail Schedules',
      'City Mandatory Ordinance Compliance',
      'PE Seal & Calculation Binder',
      'Contractor Construction Details',
    ],
    turnaround: '24 Hours',
    stampType: 'PE Sealed (50 States)',
  },
];

export default function StructuralEngineeringPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <Hero
        variant="page"
        headline="Licensed Structural Engineering Services"
        subheadline="Full-service PE-stamped structural calculations, foundation engineering, framing design, and seismic analysis delivered in 24–48 hours."
        cta={{ text: 'Request Structural Quote', href: '/contact' }}
        image="/images/struct-hero-spec.jpg"
        hudBadge={{ label: 'STRUCTURAL FEA', spec: 'AISC 360 // PE SEALED' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Structural Engineering', href: '/services/structural-engineering' },
        ]}
      />

      {/* Overview Section */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block flex items-center gap-2">
                  <HardHat className="w-4 h-4 text-bd-blue" />
                  PE STAMPED INTEGRITY
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-charcoal mb-6">
                  Engineered Structural Safety for Commercial & Residential Builds
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
                  Structural integrity is the backbone of any successful construction project. At Bid Dimensions, our licensed Professional Engineers (PE) evaluate vertical dead/live loads, lateral seismic forces, and soil bearing dynamics to produce code-compliant engineering calculations.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.45}>
                <p className="font-body text-base text-bd-navy font-semibold leading-relaxed">
                  We guarantee 100% city plan check approval on every structural drawing package we seal — backed by 24 to 48 hour standard turnarounds.
                </p>
              </FadeInUp>
            </div>

            <div className="lg:col-span-6">
              <FadeInUp delay={0.3}>
                <div className="border border-gray-200 bg-bd-surface-light p-3 shadow-md">
                  <img
                    src="/images/found-compare-spec.jpg"
                    alt="Engineered concrete foundation CAD drawing showing deep pile rebar schedule and soil bearing load lines"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-bd-navy text-white font-mono text-xs flex justify-between items-center mt-2">
                    <span>ENGINEERED FOUNDATION SPECIMEN</span>
                    <span className="text-bd-blue">PE STAMPED</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Cad Drawing Specimen Viewer */}
      <CadDrawingViewer title="Structural Engineering Drawing Package" sheets={STRUCTURAL_SHEETS} />

      {/* Scope Package Calculator */}
      <ScopePackageCalculator title="Structural Scope & Package Calculator" options={STRUCTURAL_SCOPES} />

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
            Need PE-Stamped Structural Drawings?
          </h2>
          <p className="font-body text-base text-bd-text-muted mb-8">
            Upload your plans today for a fast 24h PE-stamped engineering proposal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Upload Plans for Structural Quote
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
