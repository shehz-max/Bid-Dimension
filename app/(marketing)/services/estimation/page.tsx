import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { FAQItem } from '@/components/molecules/FAQItem';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { CadDrawingViewer } from '@/components/molecules/CadDrawingViewer';
import { ScopePackageCalculator } from '@/components/molecules/ScopePackageCalculator';
import { Calculator, CheckCircle2, Phone, ShieldCheck, Layers, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Cost Estimation & Material Takeoff | Bid Dimensions',
  description:
    'PlanSwift & RSMeans construction cost estimation services. Accurate material quantity takeoffs, structural steel cost analysis, & 24h turnaround for contractors.',
  alternates: {
    canonical: 'https://biddimensions.us/services/estimation',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What software do you use for cost estimation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We utilize industry-leading software including PlanSwift, Bluebeam Revu, RSMeans location-based pricing databases, and custom Excel takeoff models.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your average turnaround time for a takeoff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard quantity takeoffs and material cost estimates are completed within 24 to 48 hours depending on total square footage and trade scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate are your cost estimates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our takeoffs achieve over 99.4% accuracy against final contractor bids by utilizing zip-code specific labor and material pricing databases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What formats do you deliver takeoffs in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deliverables are provided in organized Excel spreadsheets (.XLSX), color-coded PDF drawing markups, and itemized MasterFormat CSI trade summaries.',
      },
    },
  ],
};

const ESTIMATION_SHEETS = [
  {
    id: 'sheet-e1',
    sheetNumber: 'EST-1.0',
    title: 'Itemized Material Quantity Takeoff Summary',
    category: 'Material & Labor Quantification',
    image: '/images/hero-steel.webp',
    highlights: [
      'CSI MasterFormat trade-by-trade breakdown',
      'Structural steel tonnage & rebar linear feet',
      'Location-adjusted RSMeans zip code pricing',
      'Exportable Excel & PDF summary reports',
    ],
  },
  {
    id: 'sheet-e2',
    sheetNumber: 'EST-2.0',
    title: 'Color-Coded PlanSwift Drawing Markups',
    category: 'Plan Check & Takeoff Verification',
    image: '/images/hero-steel.webp',
    highlights: [
      'Exact area, linear footage & count verification',
      'Structural beam & slab volume color maps',
      'Wastage factor & contingency inclusions',
      'Bid comparison & margin analysis sheet',
    ],
  },
];

const ESTIMATION_SCOPES = [
  {
    id: 'commercial-est',
    label: 'Commercial & Multi-Family Takeoff',
    subtitle: 'Structural steel, concrete & full MEP trade estimates',
    deliverables: [
      'CSI MasterFormat 16-Division Cost Breakdown',
      'Structural Steel Tonnage & Rebar Schedules',
      'Concrete & Slab Volume Estimates',
      'PlanSwift Color-Coded Plan Markups',
      'Location-Specific RSMeans Unit Pricing',
      'Exportable Excel Takeoff Workbook',
    ],
    turnaround: '24–48 Hours',
    stampType: 'Certified Takeoff',
  },
  {
    id: 'residential-est',
    label: 'Residential Custom Build Estimate',
    subtitle: 'Lumber framing, foundation & finish quantity takeoffs',
    deliverables: [
      'Lumber & Timber Framing Cut Lists',
      'Foundation Concrete & Gravel Cubic Yards',
      'Roofing, Siding & Drywall Material Counts',
      'Subcontractor Bid Comparison Sheets',
      'Material Wastage & Contingency Analysis',
      'Permit Estimate Summary',
    ],
    turnaround: '24 Hours',
    stampType: 'Certified Takeoff',
  },
  {
    id: 'trade-est',
    label: 'Single-Trade Material Audit',
    subtitle: 'Focused structural, MEP or drywall quantity takeoff',
    deliverables: [
      'Trade-Specific Material Count',
      'Labor Hours & Crew Productivity Estimate',
      'Equipment Rental & Scaffolding Breakdown',
      'Plan Check Audit Notes',
      'Supplier Quote Verification',
      'Bid Submission Package',
    ],
    turnaround: '12–24 Hours',
    stampType: 'Certified Takeoff',
  },
];

export default function EstimationServicesPage() {
  const audiences = [
    {
      title: 'General Contractors',
      desc: 'Win more competitive bids with fast, 99.4% accurate PlanSwift material takeoffs and Zip-code specific labor pricing.',
    },
    {
      title: 'Subcontractors',
      desc: 'Save hundreds of estimating hours every month with trade-specific cut lists, rebar counts, and lumber schedules.',
    },
    {
      title: 'Real Estate Developers',
      desc: 'Verify feasibility budgets early with reliable square-foot cost benchmarking before ground-breaking.',
    },
    {
      title: 'Property Owners',
      desc: 'Audit contractor bids and material proposals to ensure transparent pricing for renovations and additions.',
    },
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
        headline="Construction Cost Estimation & Takeoff Services"
        subheadline="Accurate, PlanSwift & RSMeans-backed material quantity takeoffs, structural steel cost analysis, and bid estimates delivered in 24 hours."
        cta={{ text: 'Request an Estimate Quote', href: '/contact' }}
        image="/images/hero-steel.webp"
        hudBadge={{ label: 'ACCURACY RATE', spec: '99.4% // 24H TURNAROUND' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Estimation Services', href: '/services/estimation' },
        ]}
      />

      {/* Overview Section */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-bd-blue" />
                  PRECISION BIDDING
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-charcoal mb-6">
                  Bid With Confidence & Protect Your Profit Margins
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-6">
                  In construction, bidding too high loses the job — while bidding too low destroys your profit margin. Bid Dimensions provides certified material quantity takeoffs and labor cost estimates that give contractors a competitive edge on bid day.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.45}>
                <p className="font-body text-base text-bd-navy font-semibold leading-relaxed">
                  Our estimators leverage PlanSwift digital takeoff software and location-adjusted RSMeans pricing databases to deliver itemized Excel workbooks and marked-up plan sets in as little as 24 hours.
                </p>
              </FadeInUp>
            </div>

            <div className="lg:col-span-6">
              <FadeInUp delay={0.3}>
                <div className="border border-gray-200 bg-bd-surface-light p-3 shadow-md">
                  <img
                    src="/images/hero-steel.webp"
                    alt="Structural steel estimation and quantity takeoff CAD drawing"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-bd-navy text-white font-mono text-xs flex justify-between items-center mt-2">
                    <span>PLANSWIFT MATERIAL TAKEOFF</span>
                    <span className="text-bd-blue">99.4% ACCURACY</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Drawing Specimen Viewer */}
      <CadDrawingViewer title="Takeoff & Estimation Specimen Package" sheets={ESTIMATION_SHEETS} />

      {/* Scope Package Calculator */}
      <ScopePackageCalculator title="Estimation Scope & Takeoff Calculator" options={ESTIMATION_SCOPES} />

      {/* Who We Work With */}
      <section className="py-20 bg-bd-surface-light text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                CLIENT TYPES
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
            Need an Accurate Bid Takeoff in 24 Hours?
          </h2>
          <p className="font-body text-base text-bd-text-muted mb-8">
            Upload your plans today for a fast 24h takeoff proposal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Upload Plans for Takeoff Quote
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
