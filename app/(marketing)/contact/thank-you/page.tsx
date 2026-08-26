import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { CheckCircle2, Phone, Mail, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You for Requesting a Quote | Bid Dimensions',
  description:
    'Thank you for submitting your engineering proposal request. Our PE structural engineering team is reviewing your plans and will respond within 7-14 days.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-36 pb-24 bg-bd-navy-deep blueprint-grid text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
        {/* Success Animated Icon */}
        <div className="w-20 h-20 bg-bd-blue/20 border-2 border-bd-blue rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow-blue animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-bd-blue" />
        </div>

        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
          PROPOSAL REQUEST RECEIVED
        </span>

        <h1 className="font-display font-bold text-4xl sm:text-56px text-white mb-6 leading-tight">
          Thank You! Your Engineering Request Is Under Review
        </h1>

        <p className="font-body text-lg text-bd-text-muted leading-relaxed mb-10 max-w-xl mx-auto">
          We have received your project details and uploaded plans. Our licensed Professional Engineers (PE) are evaluating your scope and will send a fixed-fee proposal within <strong className="text-bd-blue">7 to 14 days</strong>.
        </p>

        {/* 3-Step Reassurance Workflow */}
        <div className="bg-bd-navy/90 border border-bd-blue/30 p-6 sm:p-8 shadow-glow-blue text-left mb-10">
          <h3 className="font-mono text-xs font-bold uppercase text-bd-blue tracking-wider mb-6 flex items-center gap-2">
            <FileCheck className="w-4 h-4" />
            <span>Next Steps in Our Process:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono font-bold text-lg text-bd-blue">01. Plan Review</span>
              <span className="font-body text-xs text-bd-text-muted">
                Initial plan evaluation & code check within 4 hours.
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono font-bold text-lg text-bd-blue">02. Fixed Proposal</span>
              <span className="font-body text-xs text-bd-text-muted">
                Detailed scope, deliverables & turnaround quote sent to your email.
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono font-bold text-lg text-bd-blue">03. Permit Set</span>
              <span className="font-body text-xs text-bd-text-muted">
                PE-stamped drawing set generated for city submittal.
              </span>
            </div>
          </div>
        </div>

        {/* Urgent Contact Box */}
        <div className="p-6 bg-white/5 border border-bd-blue/20 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="font-display font-bold text-base text-white block">
              Have an Urgent Bidding Deadline?
            </span>
            <span className="font-body text-xs text-bd-text-muted">
              Speak directly with our engineering team right now.
            </span>
          </div>
          <a
            href="tel:7472237815"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-bd-blue text-bd-navy-deep font-mono text-xs font-bold uppercase hover:bg-white transition-all shadow-glow-blue shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call (747) 223-7815</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="md" href="/">
            Return to Homepage
          </Button>
          <Button variant="ghost" size="md" href="/projects">
            <span>Explore Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
