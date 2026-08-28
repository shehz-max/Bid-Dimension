import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';
import { QuoteForm } from '@/components/organisms/QuoteForm';
import { NationwideLicenseSection } from '@/components/organisms/NationwideLicenseSection';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { ShieldCheck, Phone, Mail, Clock, Compass, HardHat, Cpu, Send, FileCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Contact | Bid Dimensions Engineering & Design',
  description:
    'Founded in 2008 with 18+ years of experience. Learn about Bid Dimensions — licensed structural engineers, architectural designers, & MEP specialists delivering PE-stamped permit sets across all 50 states.',
  alternates: {
    canonical: 'https://biddimensions.us/about',
  },
};

const ICON_LOOKUP: Record<string, React.FC<{ className?: string }>> = {
  hardhat: HardHat,
  compass: Compass,
  cpu: Cpu,
  shield: ShieldCheck,
};

const pillars = [
  {
    iconName: 'hardhat',
    title: 'Structural Safety First',
    desc: 'Every calculation is verified through finite element analysis (FEA) to ensure structures stand the test of time and seismic forces.',
  },
  {
    iconName: 'compass',
    title: 'Coordinated Design',
    desc: 'We integrate structural, architectural, and MEP disciplines early, eliminating 90% of field clashes before concrete is poured.',
  },
  {
    iconName: 'cpu',
    title: '7-14 Day Turnaround',
    desc: 'Our streamlined CAD and Revit BIM workflows deliver permit-ready engineering packages in standard 7–14 day turnarounds.',
  },
  {
    iconName: 'shield',
    title: '50-State PE Stamps',
    desc: 'Our network of licensed Professional Engineers holds registrations across all 50 states, ensuring local code compliance everywhere.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <Hero
        variant="page"
        headline="Engineering That Carries the Weight"
        subheadline="Founded in 2008, Bid Dimensions has spent over 18 years delivering licensed engineering calculations, permit-ready architectural drawings, MEP coordination, and nationwide PE stamping."
        cta={{ text: 'Get a Quote', href: '#quote' }}
        hudBadge={{ label: 'ESTABLISHED 2008', spec: '18+ YEARS OF EXCELLENCE' }}
        image="/images/about-hero-construction.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      {/* 2. Story & Founding (18 Years Experience & 2008 Founded) */}
      <section className="py-16 sm:py-20 bg-white text-bd-navy border-b border-gray-200/80">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-gray-200 rounded text-bd-navy font-mono text-[11px] font-semibold tracking-widest uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
                  <span>OUR STORY & PHILOSOPHY</span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="font-display font-bold text-2xl sm:text-38px leading-tight text-bd-navy mb-4">
                  From the Field to the Drawing Board
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="font-body text-sm sm:text-base text-bd-gray leading-relaxed mb-4">
                  Bid Dimensions was founded in 2008 by a team of project managers, estimators, and structural drafters who spent years on construction sites watching preventable engineering mistakes cost contractors millions.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <p className="font-body text-sm sm:text-base text-bd-gray leading-relaxed mb-5">
                  Over the past 18+ years, we have grown into a multidisciplinary engineering and design firm trusted across all 50 states. We resolve every connection detail, load path, and system conflict before groundbreaking so projects pass city plan check on the first submittal.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <p className="font-body text-sm sm:text-base text-bd-navy font-semibold leading-relaxed border-l-3 border-bd-blue pl-4 py-0.5">
                  We treat every drawing like it is going to a live job site — because it is. Every estimate like it is funding a payroll — because it is.
                </p>
              </FadeInUp>
            </div>

            <div className="lg:col-span-6">
              <FadeInUp delay={0.25}>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col gap-3.5">
                  <div className="rounded-xl overflow-hidden border border-gray-100">
                    <img
                      src="/images/about-team-office.jpg"
                      alt="Bid Dimensions engineering team reviewing structural drawings"
                      className="w-full h-52 sm:h-64 object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center pt-1">
                    <div className="p-2.5 bg-[#F8FAFC] rounded-lg border border-gray-100">
                      <span className="font-display font-bold text-lg sm:text-xl text-bd-navy block">2008</span>
                      <span className="font-mono text-[9px] text-bd-gray uppercase font-semibold">Founded</span>
                    </div>
                    <div className="p-2.5 bg-[#F8FAFC] rounded-lg border border-gray-100">
                      <span className="font-display font-bold text-lg sm:text-xl text-bd-blue block">18+</span>
                      <span className="font-mono text-[9px] text-bd-gray uppercase font-semibold">Years Exp</span>
                    </div>
                    <div className="p-2.5 bg-[#F8FAFC] rounded-lg border border-gray-100">
                      <span className="font-display font-bold text-lg sm:text-xl text-bd-navy block">50</span>
                      <span className="font-mono text-[9px] text-bd-gray uppercase font-semibold">States</span>
                    </div>
                    <div className="p-2.5 bg-[#F8FAFC] rounded-lg border border-gray-100">
                      <span className="font-display font-bold text-lg sm:text-xl text-bd-blue block">7–14d</span>
                      <span className="font-mono text-[9px] text-bd-gray uppercase font-semibold">Turnaround</span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars */}
      <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-gray-200/80 text-bd-navy">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-10">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded text-bd-navy font-mono text-[11px] font-semibold tracking-widest uppercase mb-3 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
                <span>OUR CORE VALUES</span>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="font-display font-bold text-2xl sm:text-36px text-bd-navy">
                Built on 18 Years of Engineering Excellence
              </h2>
            </FadeInUp>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {pillars.map((p) => {
              const Icon = ICON_LOOKUP[p.iconName] || HardHat;
              return (
                <div
                  key={p.title}
                  className="bg-white p-5 sm:p-6 border border-gray-200 rounded-xl shadow-xs hover:border-bd-blue hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-[#EBF3FA] rounded-lg flex items-center justify-center text-bd-blue mb-4 border border-[#4A8AB8]/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-bd-navy mb-1.5">
                      {p.title}
                    </h3>
                    <p className="font-body text-xs text-bd-gray leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Combined Contact Info & Quote Form Section */}
      <section id="quote" className="py-16 sm:py-20 bg-white border-b border-gray-200/80 text-bd-navy scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Direct Contact Details & Photo */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF3FA] border border-[#4A8AB8]/30 font-mono text-xs font-semibold text-bd-blue uppercase rounded-md">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DIRECT LINE TO LEADERSHIP</span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="font-display font-bold text-2xl sm:text-36px text-bd-navy leading-tight">
                  Request an Engineering Proposal
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="font-body text-xs sm:text-sm text-bd-gray leading-relaxed">
                  Have questions about structural feasibility, city plan check requirements, or project scope? Connect directly with our team or upload your drawings for a fixed-fee proposal.
                </p>
              </FadeInUp>

              {/* Direct Info Blocks */}
              <FadeInUp delay={0.3}>
                <div className="flex flex-col gap-3 pt-1">
                  {/* Phone */}
                  <a
                    href="tel:7472237815"
                    className="flex items-start gap-3.5 p-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl hover:border-bd-blue shadow-xs transition-all group"
                  >
                    <div className="w-10 h-10 bg-[#EBF3FA] border border-[#4A8AB8]/30 rounded-lg flex items-center justify-center text-bd-blue shrink-0 group-hover:bg-bd-navy group-hover:text-white transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-bd-gray block uppercase font-semibold">Direct Telephone</span>
                      <span className="font-display font-bold text-base text-bd-navy group-hover:text-bd-blue transition-colors">
                        (747) 223-7815
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@biddimensions.us"
                    className="flex items-start gap-3.5 p-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl hover:border-bd-blue shadow-xs transition-all group"
                  >
                    <div className="w-10 h-10 bg-[#EBF3FA] border border-[#4A8AB8]/30 rounded-lg flex items-center justify-center text-bd-blue shrink-0 group-hover:bg-bd-navy group-hover:text-white transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-bd-gray block uppercase font-semibold">Email Proposals</span>
                      <span className="font-display font-semibold text-sm text-bd-navy group-hover:text-bd-blue transition-colors">
                        info@biddimensions.us
                      </span>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5 p-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-xs">
                    <div className="w-10 h-10 bg-[#EBF3FA] border border-[#4A8AB8]/30 rounded-lg flex items-center justify-center text-bd-blue shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-bd-gray block uppercase font-semibold">Operating Hours</span>
                      <span className="font-body text-xs text-bd-navy font-medium">
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

      {/* 5. 50-State Nationwide License Coverage Section */}
      <NationwideLicenseSection />
    </div>
  );
}
