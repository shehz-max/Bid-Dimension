'use client';

import React, { useState } from 'react';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'ARCHITECTURAL',
    question: 'What is included in architectural design services?',
    answer:
      'Architectural design services typically include concept development, floor plans, elevations, building sections, site plans, permit-ready drawings, code compliance reviews, and complete construction documentation.',
  },
  {
    id: 'faq-2',
    category: 'PERMITS',
    question: 'Can you prepare drawings for permit submission?',
    answer:
      'Yes. Our architectural and engineering designs are developed as permit-ready drawing packages in accordance with local building codes and jurisdictional requirements.',
  },
  {
    id: 'faq-3',
    category: 'COORDINATION',
    question: 'How do you coordinate with structural engineers?',
    answer:
      'Our architectural team collaborates closely with structural engineers to deliver coordinated, code-compliant designs that improve constructability, reduce design conflicts, and support efficient project delivery.',
  },
  {
    id: 'faq-4',
    category: 'BIM & 3D',
    question: 'Can you create a 3D BIM model from 2D drawings?',
    answer:
      'Yes. We can develop 3D BIM models in Autodesk Revit from architectural, structural, MEP, CAD, PDF, and other available project documentation.',
  },
  {
    id: 'faq-5',
    category: 'CLASH DETECTION',
    question: 'Do you provide multidisciplinary clash detection?',
    answer:
      'Yes. We review coordinated models in Navisworks Manage to identify potential spatial conflicts between architectural, structural, mechanical, electrical, and plumbing elements before construction.',
  },
  {
    id: 'faq-6',
    category: 'TURNAROUND',
    question: 'What is your standard turnaround time for PE-stamped plans?',
    answer:
      'Our standard engineering turnaround is 7 to 14 days for complete residential and commercial calculation packages and PE-stamped permit drawing sets.',
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-gray-200/80 text-bd-navy relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-gray-200 rounded text-bd-navy font-mono text-[11px] font-semibold tracking-widest uppercase mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
              <span>06 // FREQUENTLY ASKED QUESTIONS</span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="font-display font-bold text-2xl sm:text-36px leading-tight text-bd-navy mb-2">
              Clear Answers to Your Engineering Questions
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="font-body text-xs sm:text-sm text-bd-gray max-w-xl leading-relaxed">
              Everything you need to know about our permit-ready drawings, PE stamping, turnarounds, and multidisciplinary coordination.
            </p>
          </FadeInUp>
        </div>

        {/* Clean Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3.5 mb-10">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs transition-all duration-200 hover:border-bd-blue"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-bd-blue"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] font-bold text-bd-blue bg-bd-blue/10 border border-bd-blue/30 px-2 py-0.5 uppercase tracking-wider shrink-0 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-bd-navy">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#EBF3FA] border border-[#4A8AB8]/30 flex items-center justify-center text-bd-blue shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-bd-navy text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-gray-100 text-bd-gray font-body text-sm leading-relaxed animate-in fade-in duration-200">
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Footer Card */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-bd-blue/10 border border-bd-blue/30 flex items-center justify-center text-bd-blue shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-bd-navy">
                Have a specific question about your project?
              </span>
              <span className="font-body text-xs text-bd-gray">
                Our PE licensed engineering team is ready to evaluate your project scope and plans.
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-bd-navy text-white font-display font-semibold text-xs rounded hover:bg-bd-blue transition-colors shrink-0"
          >
            <span>Ask an Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
