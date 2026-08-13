'use client';

import React from 'react';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { HardHat, Compass, Cpu } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: HardHat,
      title: 'Structural Engineering',
      description: 'Calculations, foundation design, framing plans, and PE-stamped drawings.',
      href: '/services/structural-engineering',
      tags: ['PE STAMPED', 'FOUNDATION PLAN', 'CALCULATIONS'],
    },
    {
      icon: Compass,
      title: 'Architectural Design',
      description: 'Concept designs through permit-ready construction documentation sets.',
      href: '/services/architectural-design',
      tags: ['PERMIT SET', 'REVIT 3D BIM', 'ELEVATIONS'],
    },
    {
      icon: Cpu,
      title: 'MEP Engineering',
      description: 'Mechanical, electrical, plumbing systems, and Title 24 compliance.',
      href: '/services/mep-engineering',
      tags: ['HVAC & PLUMBING', 'TITLE 24', 'SINGLE LINE DWG'],
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white text-bd-charcoal relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <FadeInUp>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
              WHAT WE DO
            </span>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <h2 className="font-display font-bold text-3xl sm:text-48px leading-tight text-bd-charcoal">
              Innovation in Every Dimension
            </h2>
          </FadeInUp>
        </div>

        {/* 3 Column Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              tags={service.tags}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
