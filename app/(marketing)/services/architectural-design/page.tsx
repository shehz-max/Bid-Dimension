import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { FAQItem } from '@/components/molecules/FAQItem';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { CadDrawingViewer } from '@/components/molecules/CadDrawingViewer';
import { ScopePackageCalculator } from '@/components/molecules/ScopePackageCalculator';
import { Compass, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Architectural Design & Permit Drawings | Revit 3D BIM | Bid Dimensions',
  description:
    'Permit-ready architectural design services & Revit 3D BIM models. Dimensioned floor plans, building elevations, wall sections, & 24-48h turnaround.',
  keywords: [
    'architectural design services',
    'Revit 3D BIM modeling',
    'permit ready floor plans',
    'building elevations',
    'wall sections',
    'ADA compliance drawings',
  ],
  alternates: {
    canonical: 'https://biddimensions.us/services/architectural-design',
  },
  openGraph: {
    title: 'Architectural Design & Permit Drawings | Revit 3D BIM',
    description:
      'Permit-ready architectural floor plans, elevations, wall sections, and 3D Revit BIM modeling. 24-48h turnaround.',
    url: 'https://biddimensions.us/services/architectural-design',
    images: [{ url: '/images/arch-hero-spec.jpg', width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://biddimensions.us' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://biddimensions.us/#services' },
    { '@type': 'ListItem', position: 3, name: 'Architectural Design', item: 'https://biddimensions.us/services/architectural-design' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Architectural Design Services',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bid Dimensions',
    url: 'https://biddimensions.us',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Permit-ready architectural floor plans, exterior elevations, wall sections, ADA compliance drawings, and Revit 3D BIM modeling.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What sheets are included in an architectural permit package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full architectural permit package includes A-1.0 Site Plan, A-2.0 Dimensioned Floor Plans, A-3.0 Building Elevations, A-4.0 Wall Sections & Construction Details, and Door/Window Schedules.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create 3D Revit BIM models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! All architectural projects are modeled in Autodesk Revit to produce 3D BIM representations and permit drawings with zero spatial clashes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your architectural drawings city permit ready?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our architectural sets comply with local zoning, ADA accessibility standards, and building codes (IBC/IRC) for 100% city plan check approval.',
      },
    },
  ],
};

const ARCHITECTURAL_SHEETS = [
  {
    id: 'sheet-a1',
    sheetNumber: 'A-1.0',
    title: 'Dimensioned Architectural Floor Plan',
    category: 'Interior Layout & ADA Compliance',
    image: '/images/arch-hero-spec.jpg',
    highlights: [
      'Precision room dimensions & egress pathways',
      'ADA accessibility clearances & door schedules',
      'Reflected ceiling & lighting layout integration',
      'City zoning setbacks & area calculation tables',
    ],
  },
  {
    id: 'sheet-a2',
    sheetNumber: 'A-2.0',
    title: 'Building Elevations & Wall Assemblies',
    category: 'Exterior Facade & Construction Details',
    image: '/images/arch-elev-spec.jpg',
    highlights: [
      'North, South, East, West facade height callouts',
      'Exterior finish materials & glazing schedules',
      'Full-height wall assembly insulation sections',
      'Parapet, flashing & roof waterproofing details',
    ],
  },
];

const ARCHITECTURAL_SCOPES = [
  {
    id: 'commercial-arch',
    label: 'Commercial Architectural BIM Package',
    subtitle: 'Full Revit 3D BIM model, floor plans, elevations & tenant improvement',
    deliverables: [
      'A-1.0 Site Plan & Parking Stall Details',
      'A-2.0 Dimensioned Architectural Floor Plans',
      'A-3.0 Exterior Elevations & Finish Specs',
      'A-4.0 Wall Sections & Egress Plans',
      'Autodesk Revit 3D BIM Model (.RVT)',
      'ADA Compliance & Zoning Clearance Set',
    ],
    turnaround: '48 Hours',
    stampType: 'Architectural Permit Set',
  },
  {
    id: 'residential-arch',
    label: 'Custom Home & ADU Architectural Set',
    subtitle: 'Permit drawings for custom homes, additions & ADU builds',
    deliverables: [
      'A-1.0 Site Plan & Property Lines',
      'A-2.0 Proposed Floor Plan & Room Sizes',
      'A-3.0 Exterior Elevations (4 Views)',
      'A-4.0 Roof Framing & Ceiling Details',
      'Door & Window Energy Efficiency Schedules',
      'Fast 24-48 Hour Turnaround',
    ],
    turnaround: '24–36 Hours',
    stampType: 'Architectural Permit Set',
  },
  {
    id: 'remodel-arch',
    label: 'Renovation & Exterior Facade Scope',
    subtitle: 'As-built documentation & exterior facade upgrades',
    deliverables: [
      'A-1.0 Existing vs Proposed Layout Comparison',
      'A-2.0 Demolition Floor Plan',
      'A-3.0 Exterior Facade Elevation Details',
      'Interior Joinery & Cabinetry Callouts',
      'City Permit Submittal Drawings',
      'Digital CAD & PDF Formats',
    ],
    turnaround: '24 Hours',
    stampType: 'Architectural Permit Set',
  },
];

export default function ArchitecturalDesignPage() {
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
        headline="Architectural Design & Permit Drawings"
        subheadline="Permit-ready architectural floor plans, exterior elevations, wall sections, and 3D Revit BIM modeling delivered in 24–48 hours."
        cta={{ text: 'Request Architectural Proposal', href: '/contact' }}
        image="/images/arch-hero-spec.jpg"
        hudBadge={{ label: 'REVIT 3D BIM', spec: 'LOD 300 // PERMIT READY' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Architectural Design', href: '/services/architectural-design' },
        ]}
      />

      {/* Overview Section */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block flex items-center gap-2">
                  <Compass className="w-4 h-4 text-bd-blue" />
                  CREATIVE PRECISION
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-charcoal mb-6">
                  Design Aesthetics Blended With Structural Feasibility
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
                  Great architecture must be visually inspiring — but it must also pass city plan checks and be structurally buildable. At Bid Dimensions, our architectural designers develop permit plans inside Autodesk Revit, ensuring seamless coordination with structural steel and MEP utility systems.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.45}>
                <p className="font-body text-base text-bd-navy font-semibold leading-relaxed">
                  From commercial tenant improvements to custom residential luxury homes, we deliver complete permit-ready architectural packages in as little as 24 hours.
                </p>
              </FadeInUp>
            </div>

            <div className="lg:col-span-6">
              <FadeInUp delay={0.3}>
                <div className="border border-gray-200 bg-bd-surface-light p-3 shadow-md">
                  <img
                    src="/images/arch-elev-spec.jpg"
                    alt="High-definition 2D CAD architectural exterior building elevation drawing with material schedule"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-bd-navy text-white font-mono text-xs flex justify-between items-center mt-2">
                    <span>ARCHITECTURAL ELEVATION CAD DRAWING</span>
                    <span className="text-bd-blue">PERMIT APPROVED</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Cad Drawing Specimen Viewer */}
      <CadDrawingViewer title="Architectural Specimen Package" sheets={ARCHITECTURAL_SHEETS} />

      {/* Scope Package Calculator */}
      <ScopePackageCalculator title="Architectural Scope & Package Calculator" options={ARCHITECTURAL_SCOPES} />

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
            Need Permit-Ready Architectural Plans?
          </h2>
          <p className="font-body text-base text-bd-text-muted mb-8">
            Upload your sketch or project notes today for a fast 24h proposal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Upload Sketch for Quote
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
