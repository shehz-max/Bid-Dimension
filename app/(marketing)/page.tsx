import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { ServicesGrid } from '@/components/organisms/ServicesGrid';
import { ProcessTimeline } from '@/components/organisms/ProcessTimeline';
import { StatCounter } from '@/components/molecules/StatCounter';
import { TestimonialCard } from '@/components/molecules/TestimonialCard';
import { Button } from '@/components/atoms/Button';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { Phone, Mail, ShieldCheck, Award, CheckCircle, Upload, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Engineering That Carries the Weight | Bid Dimensions',
  description:
    'Full-service structural engineering, architectural design, and MEP services. PE-stamped drawings, 24-48h turnaround. Get your free quote today.',
  alternates: {
    canonical: 'https://biddimensions.us/',
  },
};

const TOOLS_SUITE = [
  { name: 'AutoCAD', desc: '2D Permit Sets & Construction Documentation' },
  { name: 'Revit 3D', desc: 'BIM Coordination & Clash Detection' },
  { name: 'Tekla Structures', desc: 'Steel Framing & Concrete Detailing' },
  { name: 'ETABS', desc: 'Seismic & Structural Load Analysis' },
  { name: 'SAFE', desc: 'Foundation Slab & Footing Design' },
  { name: 'Trimble', desc: 'Field Surveying & Geotechnical Data' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (100vh) */}
      <Hero
        variant="homepage"
        label="END-TO-END ENGINEERING & DESIGN"
        headline="Engineering That Carries the Weight"
        subheadline="Licensed structural engineering, multidisciplinary design, and permit-ready documentation for projects that stand the test of time."
        cta={{ text: 'Get a Free Quote', href: '/contact' }}
        secondaryCta={{ text: 'Our Process', href: '#process' }}
        image="/images/hero-isometric.webp"
      />

      {/* 2. Services Preview (3-Column Grid + Scope Tags & Blueprint Grid Hover) */}
      <ServicesGrid />

      {/* 3. Process Timeline (Horizontal 6 Steps + CAD Pipeline Line & Deliverable Badges) */}
      <ProcessTimeline variant="horizontal" />

      {/* 4. High-Tech Glass Key Stats Bar (Dark Navy Console) */}
      <section className="py-20 bg-bd-navy-deep blueprint-grid border-b border-bd-border-dark text-white relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-bd-navy/80 border border-bd-blue/30 backdrop-blur-md p-8 md:p-12 shadow-glow-blue">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-bd-blue/20">
              <StatCounter
                value={25}
                suffix="+"
                label="Years Experience"
                sublabel="Licensed Structural Engineers"
              />
              <StatCounter
                value={500}
                suffix="+"
                label="Projects Delivered"
                sublabel="Commercial & Residential"
                className="pt-6 lg:pt-0"
              />
              <StatCounter
                value={48}
                suffix="h"
                label="Average Turnaround"
                sublabel="24h Initial Review Option"
                className="pt-6 lg:pt-0"
              />
              <StatCounter
                value={99}
                suffix="%"
                label="Client Satisfaction"
                sublabel="100% City Permit Approval"
                className="pt-6 lg:pt-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Software & Certifications (White bg + Interactive Capability Badges) */}
      <section className="py-24 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                TRUSTED TECHNOLOGY
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal">
                Built on Industry-Standard Tools
              </h2>
            </FadeInUp>
          </div>

          {/* Software Badges with Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {TOOLS_SUITE.map((tool) => (
              <div
                key={tool.name}
                className="group p-6 bg-bd-surface-light border border-gray-200 hover:border-bd-blue/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono font-bold text-lg text-bd-navy group-hover:text-bd-blue transition-colors">
                    {tool.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-bd-blue/40 group-hover:bg-bd-blue group-hover:animate-ping transition-all" />
                </div>
                <p className="font-body text-xs text-bd-gray leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 border-t border-gray-100 pt-10">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-bd-navy">
              <ShieldCheck className="w-5 h-5 text-bd-blue" />
              <span>PE STAMP LICENSED IN ALL 50 STATES</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-bd-navy">
              <Award className="w-5 h-5 text-bd-blue" />
              <span>AACE INTERNATIONAL MEMBER</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-bd-navy">
              <CheckCircle className="w-5 h-5 text-bd-blue" />
              <span>ASPE CERTIFIED ESTIMATORS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials (Client Reviews) */}
      <section className="py-24 sm:py-32 bg-bd-surface-light text-bd-charcoal border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                CLIENT WORDS
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal">
                Trusted by Contractors, Architects & Developers
              </h2>
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Bid Dimensions delivered PE-stamped foundation and framing calculations in under 36 hours. Their speed saved our framing schedule."
              name="Marcus Vance"
              role="Senior Project Manager"
              company="Vance Commercial Builders"
            />
            <TestimonialCard
              quote="Their architectural and MEP coordination eliminated 90% of field clashes before we poured concrete. Exceptional technical precision."
              name="Elena Rostova"
              role="Principal Architect"
              company="Rostova Studio"
            />
            <TestimonialCard
              quote="Fast turnaround, clear drafting, and immediate responsiveness during city permit reviews. The most reliable engineering firm we work with."
              name="David Sterling"
              role="Managing Director"
              company="Sterling Properties"
            />
          </div>
        </div>
      </section>

      {/* 7. Enhanced Final CTA Banner with Interactive Plan Upload Teaser & Quick Action Cards */}
      <section className="py-24 bg-bd-navy-deep blueprint-grid border-t border-bd-border-dark relative overflow-hidden text-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                  READY TO BUILD?
                </span>
              </FadeInUp>

              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-4xl sm:text-56px leading-tight mb-6">
                  Ready to Start Your Engineering Project?
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <p className="font-body text-lg text-bd-text-muted leading-relaxed mb-8">
                  Get a comprehensive, PE-stamped engineering proposal within 24 hours. Upload your architectural drawings or CAD files for instant evaluation.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.45}>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button variant="primary" size="lg" href="/contact">
                    Get Your Free Quote
                  </Button>
                  <a
                    href="tel:7472237815"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-bd-blue/40 text-white font-display font-semibold text-sm hover:bg-bd-blue/10 hover:border-bd-blue transition-all"
                  >
                    <Phone className="w-4 h-4 text-bd-blue" />
                    <span>(747) 223-7815</span>
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Interactive Plan Upload Teaser Card */}
            <div className="lg:col-span-6">
              <FadeInUp delay={0.3}>
                <div className="bg-bd-navy/90 border border-bd-blue/40 p-8 shadow-glow-blue flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-bd-blue/10 border border-bd-blue/30 flex items-center justify-center text-bd-blue">
                        <Upload className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-lg text-white">
                          Upload Plans for 24h Review
                        </span>
                        <span className="font-mono text-xs text-bd-text-muted">
                          Accepts PDF, DWG, RVT & Images
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-sm text-bd-text-muted leading-relaxed">
                    Have architectural drafts, floor plans, or site surveys? Submit your files through our secure quote form for immediate PE review.
                  </p>

                  <Link
                    href="/contact"
                    className="group flex items-center justify-between p-4 bg-bd-navy-deep border border-bd-blue/30 hover:border-bd-blue hover:bg-bd-navy transition-all text-bd-blue font-mono text-xs uppercase tracking-wider font-semibold"
                  >
                    <span>Launch Quote Wizard & Drop Files</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
