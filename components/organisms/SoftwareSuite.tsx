'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { ShieldCheck, Cpu } from 'lucide-react';

const ROW_1_TOOLS = [
  {
    name: 'AutoCAD',
    category: '2D Drafting & Permits',
    logo: '/images/software/logo-autocad.jpg',
    badge: 'AUTODESK',
    spec: 'DWG / DXF Standard',
  },
  {
    name: 'Autodesk Revit',
    category: '3D BIM Coordination',
    logo: '/images/software/logo-revit.jpg',
    badge: 'BIM LOD 400',
    spec: 'Multidiscipline BIM',
  },
  {
    name: 'ETABS',
    category: 'Structural FEA Analysis',
    logo: '/images/software/logo-etabs.jpg',
    badge: 'CSI AMERICA',
    spec: 'Nonlinear Seismic',
  },
  {
    name: 'Tekla Structures',
    category: 'Steel & Concrete Detailing',
    logo: '/images/software/logo-tekla.jpg',
    badge: 'TRIMBLE',
    spec: 'Fabrication Models',
  },
];

const ROW_2_TOOLS = [
  {
    name: 'PlanSwift',
    category: 'Quantity Takeoffs',
    logo: '/images/software/logo-planswift.jpg',
    badge: 'ESTIMATING',
    spec: 'CSI 16-Division',
  },
  {
    name: 'Bluebeam Revu',
    category: 'PDF Drawing Markups',
    logo: '/images/software/logo-bluebeam.jpg',
    badge: 'NEMETSCHEK',
    spec: 'Plan Check QA/QC',
  },
  {
    name: 'Navisworks Manage',
    category: '3D Clash Detection',
    logo: '/images/software/logo-navisworks.jpg',
    badge: 'AUTODESK',
    spec: 'Spatial Coordination',
  },
  {
    name: 'CSI SAFE',
    category: 'Foundation Engineering',
    logo: '/images/software/logo-safe.jpg',
    badge: 'CSI AMERICA',
    spec: 'Slab & Mat Design',
  },
];

// Tripled list for infinite seamless conveyor loop
const LOOP_ROW_1 = [...ROW_1_TOOLS, ...ROW_1_TOOLS, ...ROW_1_TOOLS];
const LOOP_ROW_2 = [...ROW_2_TOOLS, ...ROW_2_TOOLS, ...ROW_2_TOOLS];

export const SoftwareSuite: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#EBF4FB] border-y border-[#4A8AB8]/20 text-bd-navy relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 mb-10 sm:mb-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
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
              We leverage leading BIM, CAD, FEA analysis, and estimating platforms calibrated to IBC 2024 and city plan check standards.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Dual Velocity Moving Marquee Tracks */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-5">
        {/* Left & Right Edge Vignette Gradients for Organic Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#EBF4FB] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#EBF4FB] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left to Right Marquee */}
        <div className="flex overflow-hidden touch-pan-y">
          <motion.div
            className="flex gap-3.5 sm:gap-5 shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 28,
                ease: 'linear',
              },
            }}
            whileHover={{ transition: { duration: 60 } }}
          >
            {LOOP_ROW_1.map((tool, idx) => (
              <div
                key={`${tool.name}-${idx}`}
                className="w-[260px] sm:w-[320px] shrink-0 p-3.5 sm:p-5 bg-white border border-gray-200/90 rounded-2xl shadow-xs hover:border-bd-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 sm:gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F8FAFC] border border-gray-200 p-2 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono text-[9px] font-bold text-bd-blue uppercase tracking-wider bg-[#EBF3FA] px-2 py-0.5 rounded">
                      {tool.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xs sm:text-base text-bd-navy group-hover:text-bd-blue transition-colors truncate">
                    {tool.name}
                  </h3>
                  <span className="font-body text-[11px] sm:text-xs text-bd-gray truncate">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div className="flex overflow-hidden touch-pan-y">
          <motion.div
            className="flex gap-3.5 sm:gap-5 shrink-0"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 32,
                ease: 'linear',
              },
            }}
            whileHover={{ transition: { duration: 70 } }}
          >
            {LOOP_ROW_2.map((tool, idx) => (
              <div
                key={`${tool.name}-${idx}`}
                className="w-[260px] sm:w-[320px] shrink-0 p-3.5 sm:p-5 bg-white border border-gray-200/90 rounded-2xl shadow-xs hover:border-bd-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 sm:gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F8FAFC] border border-gray-200 p-2 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono text-[9px] font-bold text-bd-blue uppercase tracking-wider bg-[#EBF3FA] px-2 py-0.5 rounded">
                      {tool.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xs sm:text-base text-bd-navy group-hover:text-bd-blue transition-colors truncate">
                    {tool.name}
                  </h3>
                  <span className="font-body text-[11px] sm:text-xs text-bd-gray truncate">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
