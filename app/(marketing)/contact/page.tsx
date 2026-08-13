import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { QuoteForm } from '@/components/organisms/QuoteForm';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { Phone, Mail, Clock, ShieldCheck, FileCheck, Send, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Upload Your Plans',
  description:
    'Upload your architectural or structural plans and receive a detailed engineering estimate within 24-48 hours. Structural, architectural, and MEP services.',
  alternates: {
    canonical: 'https://biddimensions.us/contact',
  },
};

export default function ContactPage() {
  const nextSteps = [
    {
      num: '01',
      icon: Send,
      title: '1. We Review',
      desc: 'Our licensed engineering team analyzes your submitted architectural plans, scope notes, and structural criteria within 4 hours.',
    },
    {
      num: '02',
      icon: FileCheck,
      title: '2. We Quote',
      desc: 'We issue a comprehensive, fixed-price proposal detailing engineering deliverables, PE stamping, and turnaround timeline in 24–48 hours.',
    },
    {
      num: '03',
      icon: CheckCircle2,
      title: '3. We Deliver',
      desc: 'Upon approval, our engineers generate permit-ready CAD/Revit drawing packages and PE calculations ready for city plan check.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero (50vh) */}
      <Hero
        variant="page"
        headline="Get Your Free Quote"
        subheadline="Upload your project plans and receive a detailed, fixed-fee engineering proposal within 24 to 48 hours."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* 2. Contact Info + Multi-Step Form (Two-column) */}
      <section className="py-20 bg-bd-navy-deep blueprint-grid relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-bd-blue/10 border border-bd-blue/30 font-mono text-xs text-bd-blue uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>24–48 HOUR TURNAROUND GUARANTEE</span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.15}>
                <h2 className="font-display font-bold text-3xl sm:text-4px text-white leading-tight">
                  Direct Line to Engineering Leadership
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-text-muted leading-relaxed">
                  Have questions about structural feasibility, city plan check requirements, or project scope? Connect directly with our engineering team.
                </p>
              </FadeInUp>

              {/* Direct Info Blocks */}
              <FadeInUp delay={0.45}>
                <div className="flex flex-col gap-6 pt-4 border-t border-bd-border-dark">
                  {/* Phone */}
                  <a
                    href="tel:7472237815"
                    className="flex items-start gap-4 p-4 bg-white/5 border border-bd-blue/20 hover:border-bd-blue transition-colors group"
                  >
                    <div className="w-10 h-10 bg-bd-navy flex items-center justify-center text-bd-blue border border-bd-blue/30 shrink-0 group-hover:bg-bd-blue group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-bd-text-muted block uppercase">Direct Call</span>
                      <span className="font-display font-bold text-xl text-white group-hover:text-bd-blue transition-colors">
                        (747) 223-7815
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@biddimensions.us"
                    className="flex items-start gap-4 p-4 bg-white/5 border border-bd-blue/20 hover:border-bd-blue transition-colors group"
                  >
                    <div className="w-10 h-10 bg-bd-navy flex items-center justify-center text-bd-blue border border-bd-blue/30 shrink-0 group-hover:bg-bd-blue group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-bd-text-muted block uppercase">Email Proposals</span>
                      <span className="font-display font-semibold text-base text-white group-hover:text-bd-blue transition-colors">
                        info@biddimensions.us
                      </span>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-bd-blue/20">
                    <div className="w-10 h-10 bg-bd-navy flex items-center justify-center text-bd-blue border border-bd-blue/30 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-bd-text-muted block uppercase">Operating Hours</span>
                      <span className="font-body text-sm text-bd-text-light">
                        Monday – Friday, 9:00am – 6:00pm PST
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right Column: Multi-step Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Happens Next (Reassurance) */}
      <section className="py-24 bg-bd-surface-light text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                THE WORKFLOW
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal">
                What Happens Next
              </h2>
            </FadeInUp>
          </div>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-bd-navy text-white flex items-center justify-center font-mono font-bold text-lg">
                        <Icon className="w-6 h-6 text-bd-blue" />
                      </div>
                      <span className="font-mono font-bold text-2xl text-bd-blue/40">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-bd-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-bd-gray leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Service Area / Location */}
      <section className="py-16 bg-white text-bd-charcoal border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2 block">
            NATIONWIDE COVERAGE
          </span>
          <h3 className="font-display font-bold text-2xl text-bd-navy mb-4">
            Engineering Solutions Across All 50 States
          </h3>
          <p className="font-body text-sm text-bd-gray leading-relaxed">
            Our multi-state PE network prepares permit drawings compliant with IBC, CBC, IRC, ASCE 7, and local city amendments nationwide.
          </p>
        </div>
      </section>
    </div>
  );
}
