'use client';

import React from 'react';
import Link from 'next/link';
import { HardHat, Compass, Cpu, Layers, Sparkles, Calculator, ArrowUpRight } from 'lucide-react';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

export interface ServiceCardItem {
  id: string;
  title: string;
  shortDesc: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  scopes: string[];
}

export const ALL_SIX_SERVICES: ServiceCardItem[] = [
  {
    id: 'structural',
    title: 'Structural Engineering',
    shortDesc: 'Structural analysis, foundation & framing design, and permit-ready engineering documentation.',
    href: '/services/structural-engineering',
    icon: HardHat,
    badge: 'PE LICENSED STAMP',
    scopes: ['Foundation Design', 'Framing Calculations', 'Seismic Analysis'],
  },
  {
    id: 'architectural',
    title: 'Architectural Design',
    shortDesc: 'Concept development, floor plans, site plans, and detailed permit-ready construction drawings.',
    href: '/services/architectural-design',
    icon: Compass,
    badge: 'PERMIT READY SETS',
    scopes: ['Floor & Site Plans', 'Building Elevations', 'Revit 3D Modeling'],
  },
  {
    id: 'mep',
    title: 'MEP Engineering',
    shortDesc: 'Mechanical, electrical, plumbing, HVAC layouts, single-line diagrams, and Title 24 compliance.',
    href: '/services/mep-engineering',
    icon: Cpu,
    badge: 'IBC & TITLE 24',
    scopes: ['HVAC & Air Distribution', 'Electrical SLD & Load', 'Plumbing Risers'],
  },
  {
    id: 'bim-cad',
    title: 'BIM & CAD Services',
    shortDesc: 'Revit 3D modeling, 2D CAD drafting, shop drawings, and clash detection to resolve conflicts.',
    href: '/services/bim-cad-services',
    icon: Layers,
    badge: 'CLASH DETECTION',
    scopes: ['Revit 3D Modeling', 'Shop Drawings', '2D CAD Drafting'],
  },
  {
    id: 'rendering',
    title: '3D Rendering Services',
    shortDesc: 'Realistic 3D interior & exterior visuals, walkthrough animations, and marketing renderings.',
    href: '/services/rendering-services',
    icon: Sparkles,
    badge: 'REALISTIC 3D VISUALS',
    scopes: ['Interior & Exterior 3D', '3D Walkthroughs', 'Aerial Site Views'],
  },
  {
    id: 'estimation',
    title: 'Estimation & Takeoffs',
    shortDesc: 'Quantity takeoffs and trade-specific construction estimates for accurate bidding & budgeting.',
    href: '/services/estimation',
    icon: Calculator,
    badge: 'ASPE & AACE METHOD',
    scopes: ['PlanSwift Takeoffs', 'Material Quantity Lists', 'CSI Division Breakdowns'],
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-gray-200 text-bd-navy relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header (Extracted 100% from Web.docx) */}
        <div className="flex flex-col items-center text-center mb-10">
          <FadeInUp>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2 block">
              OUR SERVICES
            </span>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <h2 className="font-display font-bold text-3xl sm:text-44px leading-tight text-bd-navy mb-3">
              Innovation in Every Dimension
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <p className="font-body text-sm sm:text-base text-bd-gray max-w-2xl leading-relaxed">
              From concept to permit, we deliver drawings and documentation that hold up on the job site — not just on paper.
            </p>
          </FadeInUp>
        </div>

        {/* Compact Single-Screen Viewport 3x2 Grid (All 6 Cards visible at once without scrolling!) */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ALL_SIX_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id}>
                <Link
                  href={service.href}
                  className="group relative bg-[#F8FAFC] border border-gray-200 p-5 sm:p-6 flex flex-col justify-between h-full transition-all duration-300 hover:border-bd-blue hover:bg-white hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Icon + Badge + Arrow */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-bd-blue/10 border border-bd-blue/20 text-bd-blue group-hover:bg-bd-blue group-hover:text-bd-navy transition-all duration-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] font-bold text-bd-blue bg-bd-blue/10 border border-bd-blue/30 px-2 py-0.5 uppercase tracking-wider">
                          {service.badge}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-bd-gray group-hover:text-bd-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg sm:text-xl text-bd-navy mb-2 group-hover:text-bd-blue transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="font-body text-xs text-bd-gray leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Scope Tags */}
                  <div className="pt-3 border-t border-gray-200/80 flex flex-wrap gap-1.5">
                    {service.scopes.map((scope) => (
                      <span
                        key={scope}
                        className="font-mono text-[9px] text-bd-navy/80 bg-white border border-gray-200 px-2 py-0.5"
                      >
                        {scope}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
