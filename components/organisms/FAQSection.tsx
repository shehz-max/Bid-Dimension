'use client';

import React, { useState } from 'react';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';
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
      'Architectural design services include concept development, floor plans, elevations, building sections, site plans, permit-ready drawings, and code compliance reviews.',
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
      'Our team collaborates closely across disciplines to deliver coordinated designs that eliminate field clashes, improve constructability, and speed up plan check approval.',
  },
  {
    id: 'faq-4',
    category: 'BIM & 3D',
    question: 'Can you create a 3D BIM model from 2D drawings?',
    answer:
      'Yes. We develop coordinated 3D BIM models in Autodesk Revit from existing 2D AutoCAD DWGs, PDF blueprints, or conceptual hand sketches.',
  },
  {
    id: 'faq-5',
    category: 'CLASH DETECTION',
    question: 'Do you provide multidisciplinary clash detection?',
    answer:
      'Yes. We review models in Navisworks Manage to identify potential spatial conflicts between architectural, structural, and MEP elements before construction.',
  },
  {
    id: 'faq-6',
    category: 'TURNAROUND',
    question: 'What is your standard turnaround time for PE plans?',
    answer:
      'Our standard engineering turnaround is 10 to 12 days for complete residential and commercial calculation packages and PE-stamped permit drawing sets.',
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 sm:py-12 bg-white border-b border-gray-200/80 text-bd-navy relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Section Header + Help Card */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <FadeInUp>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2 block">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="font-display font-bold text-2xl sm:text-32px leading-tight text-bd-navy mb-2">
                  Clear Answers to Your Questions
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="font-body text-xs sm:text-sm text-bd-gray leading-relaxed mb-6">
                  Everything you need to know about our permit-ready drawings, PE stamping, 10–12 day turnarounds, and multidisciplinary coordination.
                </p>
              </FadeInUp>
            </div>

            {/* Compact Ask an Engineer Card */}
            <FadeInUp delay={0.3}>
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-4 sm:p-5 flex flex-col gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EBF3FA] border border-[#4A8AB8]/30 flex items-center justify-center text-bd-blue shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-bd-navy">Have a custom question?</h3>
                    <p className="font-body text-[11px] text-bd-gray">Our PE engineers evaluate scopes within hours.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200/80">
                  <a href="tel:7472237815" className="font-mono text-xs font-semibold text-bd-navy hover:text-bd-blue transition-colors">
                    (747) 223-7815
                  </a>
                  <a
                    href="mailto:info@biddimensions.us?subject=Custom%20Engineering%20Question%20-%20Bid%20Dimensions"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bd-navy hover:bg-bd-blue text-white font-display font-semibold text-xs rounded transition-colors shadow-xs"
                  >
                    <span>Ask an Engineer</span>
                    <ArrowRight className="w-3.5 h-3.5 text-bd-blue" />
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column: Compact Accordion List */}
          <div className="lg:col-span-7 flex flex-col gap-2.5">
            {FAQ_LIST.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-[#F8FAFC] border rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-bd-blue bg-white shadow-sm' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 focus:outline-none"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-mono text-[9px] font-bold text-bd-blue bg-bd-blue/10 border border-bd-blue/20 px-2 py-0.5 uppercase tracking-wider shrink-0 rounded">
                        {faq.category}
                      </span>
                      <h3 className="font-display font-bold text-xs sm:text-sm text-bd-navy truncate">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-bd-blue shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-bd-navy text-white border-bd-navy' : ''
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-3.5 sm:px-4 pb-3.5 pt-0 text-bd-gray font-body text-xs leading-relaxed border-t border-gray-100">
                      <p className="mt-2">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
