'use client';

import React, { useState } from 'react';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { Search, PenTool, ShieldCheck, Award, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export interface ProcessTimelineProps {
  variant?: 'horizontal' | 'vertical';
}

const FIVE_PROCESS_STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Initial Consultation',
    description: 'We analyze project requirements, architectural concepts, and zoning constraints to establish a precise engineering scope.',
    badge: 'SCOPE & GOALS',
    detail: 'Feasibility & code review',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Planning & Design',
    description: 'Our team develops comprehensive 2D CAD drafting and Revit 3D BIM models tailored to your structural criteria.',
    badge: 'CAD & REVIT 3D',
    detail: 'Complete drawing set',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Quality & Code Review',
    description: 'Every calculation is validated through finite element analysis and multidisciplinary clash detection against IBC 2024.',
    badge: 'IBC 2024 REVIEW',
    detail: 'Clash detection audit',
  },
  {
    number: '04',
    icon: Award,
    title: 'Stamping & Approval',
    description: 'Licensed Professional Engineers apply signed PE seals and generate certified structural calculation books ready for submittal.',
    badge: 'PE SEAL STAMP',
    detail: '50-state PE stamped book',
  },
  {
    number: '05',
    icon: Send,
    title: 'Delivery & Support',
    description: 'We deliver permit-ready packages and provide ongoing municipal plan check support until 100% city approval is achieved.',
    badge: 'PERMIT READY',
    detail: 'Plan check approval support',
  },
];

export const ProcessTimeline: React.FC<ProcessTimelineProps> = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section id="process" className="py-14 sm:py-16 bg-white border-y border-gray-200/80 text-bd-navy relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Subtle Section Header with Index Tag */}
        <div className="flex flex-col items-center text-center mb-10">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-gray-200 rounded text-bd-navy font-mono text-[11px] font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
              <span>04 // OUR EXECUTION PROCESS</span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="font-display font-bold text-2xl sm:text-36px leading-tight text-bd-navy mb-2">
              From Concept to Permit — Our Proven Process
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="font-body text-xs sm:text-sm text-bd-gray max-w-xl leading-relaxed">
              A structured 5-stage engineering workflow ensuring 100% code compliance, zero site clashes, and on-time municipal approval.
            </p>
          </FadeInUp>
        </div>

        {/* Sleek 5-Column Single Viewport Grid */}
        <div className="relative">
          {/* Top Connecting Pipeline Track (Desktop Only) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-bd-blue/20 via-bd-blue/40 to-bd-blue/20 z-0" />

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 relative z-10"
          >
            {FIVE_PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = activeStep === step.number;
              const isLast = idx === FIVE_PROCESS_STEPS.length - 1;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(step.number)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`group relative bg-[#F8FAFC] border rounded-xl p-4.5 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
                    isHovered
                      ? 'border-bd-blue bg-white shadow-xl -translate-y-1'
                      : 'border-gray-200 hover:border-bd-blue/50 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {/* Top Step Pill & Number */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Step Circle with Icon */}
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 shadow-xs ${
                          isHovered
                            ? 'bg-bd-navy text-white scale-105'
                            : 'bg-white border border-[#4A8AB8]/30 text-bd-blue group-hover:bg-[#EBF3FA]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Number Badge */}
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[9px] font-bold text-bd-blue bg-bd-blue/10 border border-bd-blue/30 px-2 py-0.5 uppercase tracking-wider rounded">
                          {step.badge}
                        </span>
                        <span className="font-mono font-bold text-lg text-bd-navy/70">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display font-bold text-base text-bd-navy mb-2 group-hover:text-bd-blue transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="font-body text-xs text-bd-gray leading-relaxed mb-4 line-clamp-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Verification Bullet */}
                  <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between text-[11px] font-mono text-bd-navy font-semibold">
                    <span className="flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bd-blue shrink-0" />
                      <span className="truncate">{step.detail}</span>
                    </span>
                    {!isLast && (
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-bd-blue group-hover:translate-x-0.5 transition-all hidden lg:block shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
