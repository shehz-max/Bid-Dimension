import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { ProcessTimeline } from '@/components/organisms/ProcessTimeline';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { CheckCircle2, ShieldCheck, Layers, FileCheck, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BIM & CAD Services | Revit Modeling & Clash Detection | Bid Dimensions',
  description:
    'Accurate BIM & CAD solutions for contractors and developers, including Revit modeling, CAD drafting, shop drawings, and clash detection to resolve conflicts before construction.',
};

const SCOPES = [
  '2D AutoCAD Drawings',
  '3D Revit Models',
  'Architectural BIM Models',
  'Structural BIM Models',
  'MEP BIM Models',
  'Construction Documentation',
  'Shop Drawings',
  'Coordination Drawings',
  'Clash Detection Reports',
  'Revit Families',
  'As-Built Drawings & Models',
  'Quantity & Model Data',
];

const SOFTWARE_LIST = [
  'Autodesk Revit',
  'AutoCAD',
  'Navisworks Manage',
  'BIM 360 / ACC',
  'BIMcollab',
];

export default function BimCadPage() {
  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <Hero
        variant="page"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'BIM & CAD Services', href: '/services/bim-cad-services' },
        ]}
        headline="BIM & CAD Services"
        subheadline="Accurate BIM & CAD solutions for contractors and developers, including Revit modeling, CAD drafting, shop drawings, and clash detection to identify and resolve conflicts before construction."
        cta={{ text: 'Request BIM Proposal', href: '/contact' }}
        hudBadge={{ label: 'WORKFLOW', spec: 'LOD 300-400 BIM' }}
      />

      {/* Service Overview & Target Audience */}
      <section className="py-20 bg-white text-bd-navy">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                  SERVICE OVERVIEW
                </span>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-44px leading-tight mb-6 text-bd-navy">
                  Coordinated 3D BIM & Precision 2D CAD Drafting
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base sm:text-lg text-bd-gray leading-relaxed mb-6">
                  Our BIM and CAD services turn design information into accurate, coordinated, and usable project documentation. We develop models and drawings that help identify design issues, improve communication between trades, and provide contractors with reliable information for construction.
                </p>
                <p className="font-body text-base text-bd-gray leading-relaxed mb-8">
                  Whether you need a new BIM model, CAD drafting, shop drawings, coordination support, or as-built documentation, our team delivers solutions based on your project's scope and requirements.
                </p>
              </FadeInUp>

              {/* Deliverables Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {SCOPES.map((scope) => (
                  <div key={scope} className="flex items-center gap-2 text-xs font-mono font-semibold text-bd-navy">
                    <CheckCircle2 className="w-4 h-4 text-bd-blue shrink-0" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#EBF3FA] border border-[#4A8AB8]/30 p-8 shadow-sm">
                <h3 className="font-display font-bold text-xl text-bd-navy mb-4 border-b border-gray-200 pb-3">
                  Software Suite
                </h3>
                <div className="flex flex-col gap-3 mb-6">
                  {SOFTWARE_LIST.map((sw) => (
                    <div key={sw} className="flex items-center justify-between p-3 bg-white border border-gray-200 font-mono text-xs text-bd-navy font-semibold">
                      <span>{sw}</span>
                      <span className="text-bd-blue">STANDARD</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="md" href="/contact" className="w-full text-center">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Methodology */}
      <ProcessTimeline variant="horizontal" />

      {/* CTA Section */}
      <section className="py-20 bg-[#EBF3FA] border-t border-[#4A8AB8]/30 text-bd-navy">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
          <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-navy mb-4">
            Need Coordinated BIM Models or Shop Drawings?
          </h2>
          <p className="font-body text-base sm:text-lg text-bd-gray max-w-2xl mb-8">
            Upload your architectural, structural, or MEP drawings for an immediate proposal and 24-48h turnaround review.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Upload Drawings for Quote
            </Button>
            <a
              href="tel:7472237815"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-bd-navy text-bd-navy font-display font-semibold text-sm hover:bg-bd-navy hover:text-white transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-bd-blue" />
              <span>(747) 223-7815</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
