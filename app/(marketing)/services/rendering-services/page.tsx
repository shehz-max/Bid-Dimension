import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { ProcessTimeline } from '@/components/organisms/ProcessTimeline';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { CheckCircle2, Sparkles, Image, Video, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3D Rendering Services | Architectural Visualizations | Bid Dimensions',
  description:
    'High-quality architectural renderings that bring designs to life, helping clients, developers, and project teams visualize the finished space before construction begins.',
};

const SCOPES = [
  'Exterior 3D Renderings',
  'Interior 3D Renderings',
  'Architectural Visualization',
  '3D Walkthroughs & Animations',
  'Aerial & Site Renderings',
  '360° Panoramic Views',
  'Marketing Renderings',
  'Conceptual 3D Visualization',
];

const SOFTWARE_LIST = [
  'Lumion',
  'Enscape',
  'SketchUp',
  '3ds Max',
  'V-Ray',
  'Adobe Photoshop',
];

export default function RenderingPage() {
  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <Hero
        variant="page"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: '3D Rendering Services', href: '/services/rendering-services' },
        ]}
        headline="3D Rendering Services"
        subheadline="High-quality architectural renderings that bring designs to life, helping clients, developers, and project teams visualize the finished space before construction begins."
        cta={{ text: 'Request 3D Rendering Quote', href: '/contact' }}
        hudBadge={{ label: 'VISUALS', spec: '4K ARCHITECTURAL RENDER' }}
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
                  Photorealistic 3D Visualizations & Walkthroughs
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="font-body text-base sm:text-lg text-bd-gray leading-relaxed mb-6">
                  We create realistic 3D visuals that communicate the design, materials, finishes, lighting, and overall appearance of a project before it is built. Our renderings help clients review design concepts, make informed decisions, present projects to stakeholders, and market properties with confidence.
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
                  Rendering Software
                </h3>
                <div className="flex flex-col gap-3 mb-6">
                  {SOFTWARE_LIST.map((sw) => (
                    <div key={sw} className="flex items-center justify-between p-3 bg-white border border-gray-200 font-mono text-xs text-bd-navy font-semibold">
                      <span>{sw}</span>
                      <span className="text-bd-blue">PHOTOREALISTIC</span>
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
            Bring Your Architectural Designs to Life
          </h2>
          <p className="font-body text-base sm:text-lg text-bd-gray max-w-2xl mb-8">
            Upload your floor plans, elevations, CAD files, or sketches for a photorealistic 3D rendering proposal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Upload Plans for 3D Render
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
