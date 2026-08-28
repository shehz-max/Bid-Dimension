'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import { FadeInUp } from '@/components/animation/FadeInUp';

export const NationwideLicenseSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#EBF3FA] border-t border-[#4A8AB8]/20 text-bd-navy text-center relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <FadeInUp>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2 block">
            50-STATE PE LICENSE NETWORK
          </span>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h3 className="font-display font-bold text-2xl sm:text-36px text-bd-navy mb-3">
            Licensed Professional Engineers Across All 50 States
          </h3>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="font-body text-xs sm:text-sm text-bd-gray leading-relaxed mb-6 max-w-2xl mx-auto">
            Our multi-state PE engineering network prepares permit drawings fully compliant with IBC, CBC, IRC, ASCE 7, Title 24, and local city amendments nationwide.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs text-bd-navy">
            {['CALIFORNIA', 'TEXAS', 'FLORIDA', 'NEW YORK', 'ILLINOIS', 'GEORGIA', 'WASHINGTON', '+ 43 MORE STATES'].map((state) => (
              <span key={state} className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-md shadow-xs font-semibold">
                ✓ {state}
              </span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
