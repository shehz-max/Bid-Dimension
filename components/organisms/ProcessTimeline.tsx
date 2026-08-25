'use client';

import React from 'react';
import { ProcessStep } from '@/components/molecules/ProcessStep';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

export interface ProcessTimelineProps {
  variant?: 'horizontal' | 'vertical';
  steps?: { number: string; title: string; description: string; badge?: string }[];
}

const defaultSteps = [
  {
    number: '01',
    title: 'Project Evaluation & Code Check',
    description: 'Comprehensive zoning review, feasibility analysis, and local building code verification.',
    badge: 'FEASIBILITY REPORT',
  },
  {
    number: '02',
    title: 'Structural Analysis & FEA Load Calcs',
    description: 'Finite element structural calculations for gravity, seismic, and lateral wind resistance.',
    badge: 'PE CALCULATIONS',
  },
  {
    number: '03',
    title: 'Geotechnical & Foundation Planning',
    description: 'Soil bearing capacity analysis, footing design, and foundation slab layout engineering.',
    badge: 'FOUNDATION PLAN',
  },
  {
    number: '04',
    title: 'Superstructure Framing Layouts',
    description: 'Detailed structural steel framing, I-beam sizing, and reinforced concrete/timber specs.',
    badge: 'A992 STEEL SET',
  },
  {
    number: '05',
    title: 'Construction Documentation Package',
    description: 'Complete 2D CAD drafting, 3D Revit BIM coordination, and permit-ready drawing sheets.',
    badge: 'PERMIT DRAWINGS',
  },
  {
    number: '06',
    title: 'Quality Assurance & PE Stamping',
    description: 'Final multi-point engineering review, licensed Professional Engineer seal, and city submittal.',
    badge: 'PE SEAL & STAMP',
  },
];

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  variant = 'horizontal',
  steps = defaultSteps,
}) => {
  if (variant === 'horizontal') {
    return (
      <section id="process" className="py-24 sm:py-32 bg-[#EBF3FA] border-y border-[#4A8AB8]/30 relative overflow-hidden text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <FadeInUp>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
                OUR METHODOLOGY
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-navy max-w-2xl mb-4">
                From Concept to Permit in Six Steps
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.25}>
              <p className="font-body text-base sm:text-lg text-bd-gray max-w-xl leading-relaxed">
                A streamlined engineering workflow designed for speed, structural safety, and 100% city permit approval.
              </p>
            </FadeInUp>
          </div>

          {/* Clean 3x2 Grid Layout */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                badge={step.badge}
                variant="horizontal"
                theme="light"
                isLast={idx === steps.length - 1}
              />
            ))}
          </StaggerContainer>
        </div>
      </section>
    );
  }

  // Vertical variant for service pages
  return (
    <section className="py-20 bg-white text-bd-charcoal">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-start mb-12">
          <FadeInUp>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
              METHODOLOGY
            </span>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal">
              Our Engineering Process
            </h2>
          </FadeInUp>
        </div>

        <StaggerContainer staggerDelay={0.15} className="flex flex-col">
          {steps.map((step, idx) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              badge={step.badge}
              variant="vertical"
              isLast={idx === steps.length - 1}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
