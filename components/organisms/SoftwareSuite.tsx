'use client';

import React from 'react';
import { FadeInUp } from '@/components/animation/FadeInUp';

const ROW_1_TOOLS = [
  {
    name: 'AutoCAD',
    category: '2D Drafting & Permits',
    logo: '/images/software/logo-autocad.jpg',
    badge: 'AUTODESK',
  },
  {
    name: 'Autodesk Revit',
    category: '3D BIM Coordination',
    logo: '/images/software/logo-revit.jpg',
    badge: 'BIM LOD 400',
  },
  {
    name: 'ETABS',
    category: 'Structural Analysis',
    logo: '/images/software/logo-etabs.jpg',
    badge: 'CSI AMERICA',
  },
  {
    name: 'Tekla Structures',
    category: 'Steel & Concrete Detailing',
    logo: '/images/software/logo-tekla.jpg',
    badge: 'TRIMBLE',
  },
];

const ROW_2_TOOLS = [
  {
    name: 'PlanSwift',
    category: 'Quantity Takeoffs',
    logo: '/images/software/logo-planswift.jpg',
    badge: 'ESTIMATING',
  },
  {
    name: 'Bluebeam Revu',
    category: 'PDF Drawing Markups',
    logo: '/images/software/logo-bluebeam.jpg',
    badge: 'NEMETSCHEK',
  },
  {
    name: 'Navisworks',
    category: '3D Clash Detection',
    logo: '/images/software/logo-navisworks.jpg',
    badge: 'AUTODESK',
  },
  {
    name: 'CSI SAFE',
    category: 'Foundation Engineering',
    logo: '/images/software/logo-safe.jpg',
    badge: 'CSI AMERICA',
  },
];

export const SoftwareSuite: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-gray-200/80 text-bd-navy relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <FadeInUp>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2 block">
              INDUSTRIAL SOFTWARE SUITE
            </span>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="font-display font-bold text-2xl sm:text-36px leading-tight text-bd-navy mb-2">
              Powered by Industry-Standard Software
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="font-body text-xs sm:text-sm text-bd-gray max-w-xl leading-relaxed">
              We leverage leading BIM, CAD, FEA analysis, and estimating software platforms for 100% permit-ready precision.
            </p>
          </FadeInUp>
        </div>

        {/* Official Software Logo Ticker Matrix */}
        <div className="space-y-4 sm:space-y-5 mb-10">
          {/* Row 1 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {ROW_1_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="group p-5 bg-[#F8FAFC] border border-gray-200 rounded-xl hover:border-bd-blue hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 p-2 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] font-bold text-bd-blue uppercase tracking-wider mb-0.5">
                    {tool.badge}
                  </span>
                  <h3 className="font-display font-bold text-base text-bd-navy group-hover:text-bd-blue transition-colors">
                    {tool.name}
                  </h3>
                  <span className="font-body text-xs text-bd-gray">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROW_2_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="group p-5 bg-[#F8FAFC] border border-gray-200 rounded-xl hover:border-bd-blue hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 p-2 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] font-bold text-bd-blue uppercase tracking-wider mb-0.5">
                    {tool.badge}
                  </span>
                  <h3 className="font-display font-bold text-base text-bd-navy group-hover:text-bd-blue transition-colors">
                    {tool.name}
                  </h3>
                  <span className="font-body text-xs text-bd-gray">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
