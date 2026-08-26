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
    description: 'We understand your project requirements, goals, and constraints to define the right scope.',
    badge: 'SCOPE & GOALS',
    detail: 'Feasibility check & zoning review',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Planning & Design',
    description: 'Our team prepares concept drawings and detailed plans tailored to your vision and applicable codes.',
    badge: 'CAD & REVIT 3D',
    detail: 'Detailed architectural & structural set',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Quality & Code Review',
    description: 'We conduct internal reviews and code checks to ensure accuracy, safety, and full regulatory compliance.',
    badge: 'IBC 2024 REVIEW',
    detail: 'Multidisciplinary clash check',
  },
  {
    number: '04',
    icon: Award,
    title: 'Stamping & Approval',
    description: 'Licensed engineer stamps the drawings to certify compliance and readiness for permit submission.',
    badge: 'PE SEAL STAMP',
    detail: 'Certified engineering calculation book',
  },
  {
    number: '05',
    icon: Send,
    title: 'Delivery & Support',
    description: 'We deliver a complete set of documents and remain available for revisions and project support.',
    badge: 'PERMIT READY',
    detail: 'City submittal support & revisions',
  },
];

export const ProcessTimeline: React.FC<ProcessTimelineProps> = () => {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-gray-200/80 relative overflow-hidden text-bd-navy">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[1px] w-8 bg-bd-blue" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue">
                OUR PROCESS
              </span>
              <span className="h-[1px] w-8 bg-bd-blue" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-navy mb-3">
              From Concept to Completion – Our Proven Process
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <p className="font-body text-sm sm:text-base text-bd-gray max-w-2xl leading-relaxed">
              A clear, collaborative workflow that ensures accurate designs, code compliance, and on-time deliverables.
            </p>
          </FadeInUp>
          <div className="w-16 h-1 bg-[#4A8AB8] mt-4 rounded-full" />
        </div>

        {/* Top Interactive Pipeline Stepper Bar (Desktop View) */}
        <div className="hidden lg:block relative mb-16 px-12">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-20 right-20 h-[3px] bg-gray-200 -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 left-20 right-20 h-[3px] bg-gradient-to-r from-bd-blue via-bd-blue to-bd-navy -translate-y-1/2 z-0 opacity-70" />

          {/* 5 Stepper Nodes */}
          <div className="relative z-10 flex items-center justify-between">
            {FIVE_PROCESS_STEPS.map((step) => {
              const isHovered = activeHover === step.number;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveHover(step.number)}
                  onMouseLeave={() => setActiveHover(null)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-base transition-all duration-300 shadow-md ${
                      isHovered
                        ? 'bg-bd-navy text-white scale-110 shadow-glow-blue ring-4 ring-bd-blue/30'
                        : 'bg-white text-bd-blue border-2 border-bd-blue/40 group-hover:border-bd-blue'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className={`font-display font-bold text-xs mt-3 transition-colors ${
                    isHovered ? 'text-bd-blue' : 'text-bd-navy'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Spacious 3+2 Process Cards Grid */}
        <div className="space-y-6">
          {/* Top Row: 3 Cards */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FIVE_PROCESS_STEPS.slice(0, 3).map((step) => {
              const Icon = step.icon;
              const isHovered = activeHover === step.number;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveHover(step.number)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`group relative bg-white border rounded-xl p-7 flex flex-col justify-between transition-all duration-300 shadow-sm ${
                    isHovered
                      ? 'border-bd-blue shadow-2xl -translate-y-2'
                      : 'border-gray-200 hover:border-bd-blue/60 hover:shadow-lg'
                  }`}
                >
                  {/* Glowing Top Border Highlight */}
                  <div className={`absolute top-0 inset-x-0 h-1 rounded-t-xl transition-all duration-300 ${
                    isHovered ? 'bg-bd-blue shadow-[0_0_10px_#4A8AB8]' : 'bg-transparent'
                  }`} />

                  <div>
                    {/* Top Row: Icon + Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#EBF3FA] border border-[#4A8AB8]/30 flex items-center justify-center text-bd-blue group-hover:bg-bd-navy group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] font-bold text-bd-blue bg-bd-blue/10 border border-bd-blue/30 px-2.5 py-0.5 uppercase tracking-wider rounded-full">
                          {step.badge}
                        </span>
                        <span className="font-mono font-bold text-2xl text-bd-blue opacity-80">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display font-bold text-xl text-bd-navy mb-3 group-hover:text-bd-blue transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="font-body text-sm text-bd-gray leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Detail Bullet */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-bd-navy font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bd-blue shrink-0" />
                      <span>{step.detail}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-bd-gray group-hover:text-bd-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </StaggerContainer>

          {/* Bottom Row: 2 Centered Cards */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {FIVE_PROCESS_STEPS.slice(3, 5).map((step) => {
              const Icon = step.icon;
              const isHovered = activeHover === step.number;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveHover(step.number)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`group relative bg-white border rounded-xl p-7 flex flex-col justify-between transition-all duration-300 shadow-sm ${
                    isHovered
                      ? 'border-bd-blue shadow-2xl -translate-y-2'
                      : 'border-gray-200 hover:border-bd-blue/60 hover:shadow-lg'
                  }`}
                >
                  {/* Glowing Top Border Highlight */}
                  <div className={`absolute top-0 inset-x-0 h-1 rounded-t-xl transition-all duration-300 ${
                    isHovered ? 'bg-bd-blue shadow-[0_0_10px_#4A8AB8]' : 'bg-transparent'
                  }`} />

                  <div>
                    {/* Top Row: Icon + Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#EBF3FA] border border-[#4A8AB8]/30 flex items-center justify-center text-bd-blue group-hover:bg-bd-navy group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] font-bold text-bd-blue bg-bd-blue/10 border border-bd-blue/30 px-2.5 py-0.5 uppercase tracking-wider rounded-full">
                          {step.badge}
                        </span>
                        <span className="font-mono font-bold text-2xl text-bd-blue opacity-80">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display font-bold text-xl text-bd-navy mb-3 group-hover:text-bd-blue transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="font-body text-sm text-bd-gray leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Detail Bullet */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-bd-navy font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bd-blue shrink-0" />
                      <span>{step.detail}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-bd-gray group-hover:text-bd-blue group-hover:translate-x-1 transition-all" />
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
