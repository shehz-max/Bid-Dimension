'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border-b border-gray-200 py-5 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="font-display font-semibold text-lg text-bd-charcoal group-hover:text-bd-navy transition-colors">
          {question}
        </h3>
        <div
          className={`w-8 h-8 rounded-full bg-bd-surface-light flex items-center justify-center text-bd-blue transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-180 bg-bd-navy text-white' : ''
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-base text-bd-gray leading-relaxed pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
