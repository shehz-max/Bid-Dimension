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
    <section id="services" className="py-10 sm:py-12 bg-white border-b border-gray-200/80 text-bd-navy relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Compact Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <FadeInUp>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2 block">
              OUR SERVICES
            </span>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="font-display font-bold text-2xl sm:text-32px leading-tight text-bd-navy mb-1.5">
              Innovation in Every Dimension
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="font-body text-xs sm:text-sm text-bd-gray max-w-lg leading-relaxed">
              From concept to permit, we deliver drawings and documentation that hold up on the job site.
            </p>
          </FadeInUp>
        </div>

        {/* Ultra-Compact 3x2 Single-Screen Viewport Grid (Zero-Scroll Card Architecture) */}
        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4"
        >
          {ALL_SIX_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id}>
                <Link
                  href={service.href}
                  className="group relative bg-[#F8FAFC] border border-gray-200 rounded-xl p-3 sm:p-3.5 flex flex-row items-center gap-3.5 transition-all duration-300 hover:border-bd-blue hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
                >
                  {/* Left Side: Crisp Image Thumbnail */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Icon Overlay Badge */}
                    <div className="absolute top-1.5 left-1.5 p-1.5 bg-bd-navy/90 border border-bd-blue/40 text-bd-blue backdrop-blur-xs shadow-xs rounded">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Right Side: Information & Scope Tags */}
                  <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5 h-full">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <h3 className="font-display font-bold text-sm sm:text-base text-bd-navy group-hover:text-bd-blue transition-colors truncate">
                          {service.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-bd-gray group-hover:text-bd-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                      </div>

                      <p className="font-body text-[11px] sm:text-xs text-bd-gray leading-relaxed mb-2 line-clamp-2">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Scope Micro-Pills */}
                    <div className="flex flex-wrap gap-1 pt-1.5 border-t border-gray-200/80">
                      {service.scopes.slice(0, 2).map((scope) => (
                        <span
                          key={scope}
                          className="font-mono text-[9px] text-bd-navy bg-white border border-gray-200 px-1.5 py-0.5 rounded font-semibold truncate"
                        >
                          {scope}
                        </span>
                      ))}
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
