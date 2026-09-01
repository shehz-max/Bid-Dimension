import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { QuoteForm } from '@/components/organisms/QuoteForm';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { Phone, Mail, Clock, ShieldCheck, FileCheck, Send, CheckCircle2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Free PE Engineering Proposal | Bid Dimensions',
  description:
    'Upload your CAD/PDF plans for a free PE engineering proposal. Licensed in all 50 states for commercial & residential projects.',
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
      desc: 'We issue a comprehensive, fixed-price proposal detailing engineering deliverables, PE stamping, and turnaround timeline in 5–10 days.',
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
      {/* 1. Hero */}
      <Hero
        variant="page"
        headline="Request a Free PE Engineering Proposal"
        subheadline="Upload your project plans and receive a detailed, fixed-fee engineering proposal within 5 to 10 days."
        hudBadge={{ label: 'PROPOSAL RESPONSE', spec: 'DELIVERED IN 5-10 DAYS' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* 2. Contact Info + Multi-Step Form (Two-column) */}
      <section className="py-20 bg-[#EBF3FA] border-b border-[#4A8AB8]/20 relative text-bd-navy">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Info & Photo */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2 block">
                  DIRECT CONSULTATION
                </span>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-navy leading-tight">
                  Direct Line to Engineering Leadership
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <p className="font-body text-base text-bd-gray leading-relaxed">
                  Have questions about structural feasibility, city plan check requirements, or project scope? Connect directly with our licensed engineering team.
                </p>
              </FadeInUp>

              {/* Direct Info Blocks */}
              <FadeInUp delay={0.45}>
                <div className="flex flex-col gap-4 pt-2">
                  {/* Address / Google Maps */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=15442+Ventura+Blvd+Ste+201-2215+Sherman+Oaks+CA+91403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-bd-blue shadow-xs transition-all group"
                  >
                    <div className="w-11 h-11 bg-[#EBF3FA] border border-[#4A8AB8]/30 rounded-lg flex items-center justify-center text-bd-blue shrink-0 group-hover:bg-bd-navy group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-bd-gray block uppercase font-semibold">Office Location</span>
                      <span className="font-display font-semibold text-sm text-bd-navy group-hover:text-bd-blue transition-colors block">
                        15442 Ventura Blvd., Ste 201-2215
                      </span>
                      <span className="font-body text-xs text-bd-gray block">
                        Sherman Oaks, CA 91403
                      </span>
                      <span className="text-[10px] font-mono text-bd-blue group-hover:underline block mt-0.5">
                        Open in Google Maps ↗
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:7472237815"
                    className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-bd-blue shadow-xs transition-all group"
                  >
                    <div className="w-11 h-11 bg-[#EBF3FA] border border-[#4A8AB8]/30 rounded-lg flex items-center justify-center text-bd-blue shrink-0 group-hover:bg-bd-navy group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-bd-gray block uppercase font-semibold">Direct Line</span>
                      <span className="font-display font-bold text-lg text-bd-navy group-hover:text-bd-blue transition-colors">
                        (747) 223-7815
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@biddimensions.us"
                    className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-bd-blue shadow-xs transition-all group"
                  >
                    <div className="w-11 h-11 bg-[#EBF3FA] border border-[#4A8AB8]/30 rounded-lg flex items-center justify-center text-bd-blue shrink-0 group-hover:bg-bd-navy group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-bd-gray block uppercase font-semibold">Email Proposals</span>
                      <span className="font-display font-semibold text-base text-bd-navy group-hover:text-bd-blue transition-colors">
                        info@biddimensions.us
                      </span>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <div className="w-11 h-11 bg-[#EBF3FA] border border-[#4A8AB8]/30 rounded-lg flex items-center justify-center text-bd-blue shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-bd-gray block uppercase font-semibold">Operating Hours</span>
                      <span className="font-body text-sm text-bd-charcoal">
                        Monday – Friday, 9:00am – 6:00pm PST
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              {/* Photo Card */}
              <FadeInUp delay={0.6}>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-2">
                  <img
                    src="/images/contact-engineers.jpg"
                    alt="Licensed structural engineers reviewing blueprints"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between font-mono text-[11px] text-bd-navy">
                    <span className="font-semibold">ENGINEERING CONSULTATION</span>
                    <span className="text-bd-blue font-bold">50-STATE PE REGISTERED</span>
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
      <section className="py-20 bg-white text-bd-charcoal border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                THE WORKFLOW
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-navy">
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
                  className="bg-[#F8FAFC] p-8 border border-gray-200 rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-bd-navy text-white rounded-lg flex items-center justify-center font-mono font-bold text-lg">
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

      {/* 4. Interactive Nationwide License Coverage Console */}
      <section className="py-20 bg-[#EBF3FA] border-t border-[#4A8AB8]/20 text-bd-navy text-center">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <FadeInUp>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2 block">
              50-STATE PE LICENSE NETWORK
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h3 className="font-display font-bold text-3xl sm:text-48px text-bd-navy mb-4">
              Licensed Professional Engineers Across All 50 States
            </h3>
          </FadeInUp>
          <p className="font-body text-base text-bd-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            Our multi-state PE engineering network prepares permit drawings fully compliant with IBC, CBC, IRC, ASCE 7, Title 24, and local city amendments nationwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-bd-navy">
            {['CALIFORNIA', 'TEXAS', 'FLORIDA', 'NEW YORK', 'ILLINOIS', 'GEORGIA', 'WASHINGTON', '+ 43 MORE STATES'].map((state) => (
              <span key={state} className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-md shadow-xs font-semibold">
                ✓ {state}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
