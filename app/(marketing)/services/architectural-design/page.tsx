import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { ProcessTimeline } from '@/components/organisms/ProcessTimeline';
import { FAQItem } from '@/components/molecules/FAQItem';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { CadDrawingViewer } from '@/components/molecules/CadDrawingViewer';
import { ScopePackageCalculator } from '@/components/molecules/ScopePackageCalculator';
import { Compass, Users, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Permit-Ready Architectural Design Services | Bid Dimensions',
  description:
    'Full-service architectural design, Revit 3D BIM coordination, floor plans, & permit packages for developers & contractors. Get a 24h proposal.',
  alternates: {
    canonical: 'https://biddimensions.us/services/architectural-design',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in architectural design services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Architectural design services typically include concept development, floor plans, elevations, building sections, site plans, permit-ready drawings, code compliance reviews, and complete construction documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you prepare drawings for permit submission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our architectural designs are developed as permit-ready drawing packages in accordance with local building codes and jurisdictional requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you coordinate with structural engineers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our architectural team collaborates closely with structural engineers to deliver coordinated, code-compliant designs that improve constructability, reduce design conflicts, and support efficient project delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work on both residential and commercial projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We design both residential projects (custom homes, ADUs, additions) and commercial projects (retail, office interiors, tenant improvements, and multi-family).',
      },
    },
    {
      '@type': 'Question',
      name: 'What software do you use for architectural design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We leverage industry-leading software including AutoCAD, Autodesk Revit, SketchUp, and Enscape for accurate BIM coordination and visualization.',
      },
    },
  ],
};

const ARCHITECTURAL_SHEETS = [
  {
    id: 'sheet-a1',
    sheetNumber: 'A-1.0',
    title: 'Dimensioned Architectural Floor Plan',
    category: 'Spatial Design & Code Compliance',
    image: '/images/architectural-elevation.webp',
    highlights: [
      'Exact room dimensions & floor-area ratios',
      'ADA accessibility clearance callouts',
      'Door & window schedules cross-referenced',
      'Permit-ready city submittal format',
    ],
  },
  {
    id: 'sheet-a2',
    sheetNumber: 'A-2.0',
    title: 'Exterior Building Elevations & Wall Sections',
    category: 'Building Envelope & Finishes',
    image: '/images/architectural-elevation.webp',
    highlights: [
      'North, South, East, West facade views',
      'Roof line & exterior finish callouts',
      'Wall assembly insulation & shear specs',
      'Reflected ceiling & lighting layout',
    ],
  },
];

const ARCHITECTURAL_SCOPES = [
  {
    id: 'commercial-arch',
    label: 'Commercial & Multi-Family',
    subtitle: 'Retail, office interiors & tenant improvements',
    deliverables: [
      'Dimensioned Floor Plans & Reflected Ceiling Plans',
      'Exterior Building Elevations & Cross-Sections',
      'Door, Window & Hardware Schedules',
      'ADA Compliance & Accessibility Details',
      'Revit 3D BIM Coordination Set',
      'City Permit Submission Package',
    ],
    turnaround: '3–5 Days',
    stampType: 'Permit Ready Set',
  },
  {
    id: 'residential-arch',
    label: 'Custom Home & ADU Design',
    subtitle: 'New custom residences, additions & ADUs',
    deliverables: [
      'Conceptual Design & Floor Layouts',
      'Site Plot Plan & Setback Verification',
      'Roof Plan & Exterior Elevations',
      'Wall Sections & Foundation Interface Details',
      'Title 24 Energy Calculation Set',
      'Permit Construction Documentation',
    ],
    turnaround: '3–4 Days',
    stampType: 'Permit Ready Set',
  },
  {
    id: 'ti-renovation',
    label: 'Tenant Improvement (TI)',
    subtitle: 'Interior fit-outs, space planning & remodels',
    deliverables: [
      'As-Built Verification & Demo Plans',
      'Proposed Partition & Seating Layouts',
      'Reflected Ceiling & Lighting Plans',
      'Egress & Occupancy Load Analysis',
      'Interior Finish & Fixture Specs',
      'City Building Department Package',
    ],
    turnaround: '24–48 Hours',
    stampType: 'Permit Ready Set',
  },
];

export default function ArchitecturalDesignPage() {
  const audiences = [
    {
      title: 'Developers',
      desc: 'Require architectural designs that streamline permitting, support efficient project planning, and keep developments on schedule.',
    },
    {
      title: 'Homeowners',
      desc: 'Planning new homes, renovations, additions, or custom residences that require thoughtful, permit-ready, and code-compliant design.',
    },
    {
      title: 'General Contractors',
      desc: 'Need coordinated construction documents that minimize field conflicts and keep projects moving efficiently.',
    },
    {
      title: 'Real Estate Investors',
      desc: 'Need permit-ready designs for renovations, additions, adaptive reuse, and property improvements.',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Project Consultation', description: 'Review project goals, site information, client requirements, and applicable building codes.', badge: 'GOALS & CODES' },
    { number: '02', title: 'Concept Development', description: "Develop preliminary layouts and design concepts based on the project's functional requirements.", badge: 'CONCEPT SET' },
    { number: '03', title: 'Design Development', description: 'Refine floor plans, elevations, sections, and architectural details for coordination and approval.', badge: 'REVIT MODEL' },
    { number: '04', title: 'Design Coordination', description: 'Coordinate architectural drawings with structural and MEP disciplines to improve constructability.', badge: 'CLASH SYNC' },
    { number: '05', title: 'Construction Documentation', description: 'Prepare detailed permit-ready drawings, schedules, notes, and technical documentation.', badge: 'PERMIT PACKAGE' },
    { number: '06', title: 'Final Review & Delivery', description: 'Complete a comprehensive quality review before delivering the final drawing package.', badge: 'CITY SUBMITTAL' },
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <Hero
        variant="page"
        headline="Permit-Ready Architectural Design & BIM Services"
        subheadline="At Bid Dimensions, we craft architectural designs that balance functionality, aesthetics, and code compliance for residential, commercial, and tenant improvement builds."
        cta={{ text: 'Start Your Architectural Project', href: '/contact' }}
        image="/images/architectural-elevation.webp"
        hudBadge={{ label: 'SPEC LEVEL', spec: 'REVIT 3D BIM // PERMIT READY' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Architectural Design', href: '/services/architectural-design' },
        ]}
      />

      {/* 2. Overview Section */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block flex items-center gap-2">
                  <Compass className="w-4 h-4 text-bd-blue" />
                  DESIGN EXCELLENCE
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-charcoal mb-6">
                  Balancing Vision, Aesthetics, and Code Compliance
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
                  At Bid Dimensions, we craft architectural designs that balance functionality, aesthetics, and code compliance. Whether you're pursuing new construction, a renovation, a tenant improvement, or a building addition, our team develops practical, tailored solutions that align with your vision and project goals.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.45}>
                <p className="font-body text-base text-bd-navy font-semibold leading-relaxed">
                  From initial concept through permit-ready construction documents, we collaborate closely with clients to deliver coordinated architectural plans that streamline construction and support a smooth approval process.
                </p>
              </FadeInUp>
            </div>

            <div className="lg:col-span-6">
              <FadeInUp delay={0.3}>
                <div className="border border-gray-200 bg-bd-surface-light p-3 shadow-md">
                  <img
                    src="/images/architectural-elevation.webp"
                    alt="Architectural elevation drawing showing modern building exterior line art"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-bd-navy text-white font-mono text-xs flex justify-between items-center mt-2">
                    <span>ARCHITECTURAL ELEVATION DRAWING</span>
                    <span className="text-bd-blue">PERMIT READY</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive CAD Drawing Viewer */}
      <CadDrawingViewer title="Architectural Specimen Drawing Package" sheets={ARCHITECTURAL_SHEETS} />

      {/* 4. Scope Package Calculator */}
      <ScopePackageCalculator title="Architectural Scope & Deliverables Calculator" options={ARCHITECTURAL_SCOPES} />

      {/* 5. Who We Work With */}
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

      {/* 6. Process Timeline */}
      <ProcessTimeline variant="vertical" steps={processSteps} />

      {/* 7. FAQ Accordion */}
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

      {/* 8. CTA Banner */}
      <section className="py-20 bg-bd-navy-deep blueprint-grid border-t border-bd-border-dark text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-48px text-white mb-4">
            Turn Your Concept Into Permit-Ready Plans
          </h2>
          <p className="font-body text-base text-bd-text-muted mb-8">
            Upload your project outline or preliminary sketches for an architectural estimate in 24h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Request Architectural Quote
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
