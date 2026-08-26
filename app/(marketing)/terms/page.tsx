import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';

export const metadata: Metadata = {
  title: 'Terms of Service | Bid Dimensions',
  description:
    'Terms of Service for Bid Dimensions engineering, architectural design, and MEP services. Engineering contracts, PE stamping scope, & liability terms.',
  alternates: {
    canonical: 'https://biddimensions.us/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      <Hero
        variant="page"
        headline="Terms of Service"
        subheadline="General terms and conditions governing the performance of engineering, design, and estimation services by Bid Dimensions."
        hudBadge={{ label: 'LEGAL GOVERNANCE', spec: 'PE SERVICES CONTRACT // IBC COMPLIANT' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service', href: '/terms' },
        ]}
      />

      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="prose prose-lg max-w-none text-bd-charcoal font-body leading-relaxed">
            <span className="font-mono text-xs text-bd-blue uppercase font-bold block mb-2">
              LAST UPDATED: AUGUST 2026
            </span>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-base text-bd-gray mb-6">
              By accessing this website, requesting a quote, or engaging Bid Dimensions for professional engineering, architectural design, or estimation services, you agree to be bound by these Terms of Service.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              2. Professional Engineering Scope & PE Stamping
            </h2>
            <p className="text-base text-bd-gray mb-6">
              Professional structural engineering calculations and signed/stamped drawings are executed under the supervision of licensed Professional Engineers (PE). Stamped packages are developed based on architectural criteria, geotechnical reports, and site data supplied by the client. Client is responsible for providing accurate site information.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              3. Turnaround Times & Proposals
            </h2>
            <p className="text-base text-bd-gray mb-6">
              Estimated turnaround times (e.g. 7–14 days) begin upon receipt of complete architectural drawings, structural criteria, and formal project authorization. Unforeseen city plan check comments or major client design changes may adjust delivery timelines.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-base text-bd-gray mb-6">
              Bid Dimensions performs services in accordance with applicable building codes (IBC, CBC, IRC, ASCE 7) and professional engineering standards of care. Engineering liability is limited to the fee paid for the specific engineering scope performed.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              5. Contact Us
            </h2>
            <p className="text-base text-bd-gray mb-6">
              For legal inquiries regarding these Terms of Service, please contact:
            </p>
            <div className="p-4 bg-bd-surface-light border border-gray-200 font-mono text-xs text-bd-navy">
              Bid Dimensions Engineering Services<br />
              Email: info@biddimensions.us<br />
              Phone: (747) 223-7815
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
