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
  image: string;
  badge: string;
  scopes: string[];
}

export const ALL_SIX_SERVICES: ServiceCardItem[] = [
  {
    id: 'structural',
    title: 'Structural Engineering',
    shortDesc: 'Professional structural engineering services providing analysis, foundation and framing design, and detailed permit-ready documentation.',
    href: '/services/structural-engineering',
    icon: HardHat,
    image: '/images/service-thumb-structural.jpg',
    badge: 'PE LICENSED STAMP',
    scopes: ['Foundation Design', 'Framing Calculations', 'Seismic Analysis'],
  },
  {
    id: 'architectural',
    title: 'Architectural Design',
    shortDesc: 'Professional architectural design solutions from concept development and floor plans to detailed, permit-ready construction drawings.',
    href: '/services/architectural-design',
    icon: Compass,
    image: '/images/service-thumb-architectural.jpg',
    badge: 'PERMIT READY SETS',
    scopes: ['Floor & Site Plans', 'Building Elevations', 'Revit 3D Modeling'],
  },
  {
    id: 'mep',
    title: 'MEP Engineering',
    shortDesc: 'Professional MEP engineering covering mechanical, electrical, and plumbing systems with coordinated, permit-ready designs.',
    href: '/services/mep-engineering',
    icon: Cpu,
    image: '/images/service-thumb-mep.jpg',
    badge: 'IBC & TITLE 24',
    scopes: ['HVAC & Air Distribution', 'Electrical SLD & Load', 'Plumbing Risers'],
  },
  {
    id: 'bim-cad',
    title: 'BIM & CAD Services',
    shortDesc: 'Accurate BIM & CAD solutions including Revit modeling, CAD drafting, shop drawings, and clash detection to resolve conflicts before construction.',
    href: '/services/bim-cad-services',
    icon: Layers,
    image: '/images/service-thumb-bim.jpg',
    badge: 'CLASH DETECTION',
    scopes: ['Revit 3D Modeling', 'Shop Drawings', '2D CAD Drafting'],
  },
  {
    id: 'rendering',
    title: '3D Rendering Services',
    shortDesc: 'High-quality architectural renderings that bring designs to life, helping visualize the finished space before construction begins.',
    href: '/services/rendering-services',
    icon: Sparkles,
    image: '/images/service-thumb-rendering.jpg',
    badge: 'REALISTIC 3D VISUALS',
    scopes: ['Interior & Exterior 3D', '3D Walkthroughs', 'Aerial Site Views'],
  },
  {
    id: 'estimation',
    title: 'Estimation & Takeoffs',
    shortDesc: 'Detailed quantity takeoffs and construction estimates for projects, providing organized material quantities and cost information.',
    href: '/services/estimation',
    icon: Calculator,
    image: '/images/service-thumb-estimation.jpg',
    badge: 'ASPE & AACE METHOD',
    scopes: ['PlanSwift Takeoffs', 'Material Quantity Lists', 'CSI Division Breakdowns'],
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-14 sm:py-16 bg-white border-b border-gray-200/80 text-bd-navy relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header (Extracted 100% from Web.docx) */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-gray-200 rounded text-bd-navy font-mono text-[11px] font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
              <span>01 // OUR SERVICES</span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="font-display font-bold text-2xl sm:text-36px leading-tight text-bd-navy mb-2">
              Innovation in Every Dimension
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="font-body text-xs sm:text-sm text-bd-gray max-w-xl leading-relaxed">
              From concept to permit, we deliver drawings and documentation that hold up on the job site — not just on paper.
            </p>
          </FadeInUp>
        </div>

        {/* Compact Single-Screen Viewport 3x2 Grid with Project Image Thumbnails */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {ALL_SIX_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id}>
                <Link
                  href={service.href}
                  className="group relative bg-[#F8FAFC] border border-gray-200 rounded-xl overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:border-bd-blue hover:bg-white hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Top Image Thumbnail Container */}
                    <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-gray-100 border-b border-gray-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Icon Badge Overlay */}
                      <div className="absolute top-2.5 left-2.5 p-1.5 bg-bd-navy/90 border border-bd-blue/40 text-bd-blue backdrop-blur-xs shadow-md rounded">
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Top Right Scope Tag */}
                      <span className="absolute top-2.5 right-2.5 font-mono text-[9px] font-bold text-white bg-bd-navy/90 border border-bd-blue/40 px-2 py-0.5 uppercase tracking-wider backdrop-blur-xs rounded">
                        {service.badge}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="font-display font-bold text-base sm:text-lg text-bd-navy group-hover:text-bd-blue transition-colors">
                          {service.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-bd-gray group-hover:text-bd-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                      </div>

                      <p className="font-body text-xs text-bd-gray leading-relaxed mb-3 line-clamp-2">
                        {service.shortDesc}
                      </p>

                      {/* Scope Tags */}
                      <div className="pt-2.5 border-t border-gray-200/80 flex flex-wrap gap-1.5">
                        {service.scopes.map((scope) => (
                          <span
                            key={scope}
                            className="font-mono text-[9px] text-bd-navy bg-white border border-gray-200 px-2 py-0.5 rounded font-semibold"
                          >
                            {scope}
                          </span>
                        ))}
                      </div>
                    </div>
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
