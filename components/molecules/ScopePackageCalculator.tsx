'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface ScopeOption {
  id: string;
  label: string;
  subtitle: string;
  deliverables: string[];
  turnaround: string;
  stampType: string;
}

interface ScopePackageCalculatorProps {
  title?: string;
  options: ScopeOption[];
}

export const ScopePackageCalculator: React.FC<ScopePackageCalculatorProps> = ({
  title = 'Interactive Scope & Deliverables Calculator',
  options,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState(options[0]?.id || '');
  const activeOption = options.find((o) => o.id === selectedOptionId) || options[0];

  return (
    <section className="py-16 sm:py-20 bg-white text-bd-charcoal">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2.5 block flex items-center gap-2">
            <Layers className="w-4 h-4 text-bd-blue" />
            SCOPE CALCULATOR
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-48px text-bd-charcoal max-w-2xl">
            {title}
          </h2>
          <p className="font-body text-sm sm:text-base text-bd-gray mt-2 sm:mt-3 max-w-lg">
            Select your project type below to see the exact drawing sheets and calculations included in your engineering package.
          </p>
        </div>

        {/* Project Type Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {options.map((opt) => {
            const isSelected = opt.id === selectedOptionId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedOptionId(opt.id)}
                className={`p-5 sm:p-6 text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-bd-navy text-white border-bd-blue shadow-lg ring-2 ring-bd-blue/40 -translate-y-0.5'
                    : 'bg-bd-surface-light text-bd-navy border-gray-200 hover:border-bd-blue/50 hover:bg-white'
                }`}
              >
                <div>
                  <span className={`font-mono text-[10px] uppercase font-bold tracking-wider block mb-1.5 ${isSelected ? 'text-bd-blue' : 'text-bd-gray'}`}>
                    PROJECT TYPE
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl mb-1">
                    {opt.label}
                  </h3>
                  <p className={`font-body text-xs ${isSelected ? 'text-bd-text-muted' : 'text-bd-gray'}`}>
                    {opt.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-bd-blue/20 flex items-center justify-between text-xs font-mono">
                  <span>Turnaround: {opt.turnaround}</span>
                  <span className="text-bd-blue font-semibold">✓ Custom Scope</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deliverables Output Box */}
        <div className="bg-bd-surface-light border border-gray-200 p-5 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-gray-200 mb-6">
            <div>
              <span className="font-mono text-[11px] sm:text-xs text-bd-blue font-bold uppercase tracking-wider block mb-1">
                PACKAGE CONTENTS FOR: {activeOption.label.toUpperCase()}
              </span>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-bd-charcoal">
                Complete Permit-Ready Drawing Set
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-bd-navy bg-white px-2.5 py-1.5 border border-gray-200">
                <ShieldCheck className="w-4 h-4 text-bd-blue" />
                <span>{activeOption.stampType}</span>
              </div>
              <div className="font-mono text-[11px] sm:text-xs text-bd-blue font-bold bg-bd-blue/10 px-2.5 py-1.5 border border-bd-blue/20">
                {activeOption.turnaround} TURNAROUND
              </div>
            </div>
          </div>

          {/* Staggered Animated Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {activeOption.deliverables.map((item, idx) => (
              <motion.div
                key={`${selectedOptionId}-${item}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="p-3.5 sm:p-4 bg-white border border-gray-200 font-body text-xs sm:text-sm font-semibold text-bd-navy flex items-center gap-3 shadow-xs hover:border-bd-blue transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-bd-blue shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <span className="font-body text-xs text-bd-gray">
              Need a specialized scope or custom Engineering Report? Upload your plans for a custom proposal.
            </span>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-bd-navy text-white font-display font-semibold text-xs hover:bg-bd-blue transition-all shadow-glow-blue shrink-0"
            >
              <span>Get Proposal for {activeOption.label}</span>
              <ArrowRight className="w-4 h-4 text-bd-blue" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
