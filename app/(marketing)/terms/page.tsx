import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Bid Dimensions',
  description:
    'Terms and Conditions for BID DIMENSIONS LLC. Expert construction estimating services, material takeoffs, architectural designs, payment terms, and client responsibilities.',
  alternates: {
    canonical: 'https://biddimensions.us/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      <Hero
        variant="page"
        headline="Terms and Conditions"
        subheadline="General terms and conditions governing the performance of estimating, design, and engineering services by BID DIMENSIONS LLC."
      />

      <section className="py-16 sm:py-20 bg-white text-bd-charcoal">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="prose prose-lg max-w-none text-bd-charcoal font-body leading-relaxed">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-bd-gray uppercase font-semibold mb-6 pb-4 border-b border-gray-200">
              <span><strong className="text-bd-navy">Effective Date:</strong> March 11, 2026</span>
              <span>•</span>
              <span><strong className="text-bd-navy">Company:</strong> BID DIMENSIONS LLC</span>
              <span>•</span>
              <span>
                <strong className="text-bd-navy">Website:</strong>{' '}
                <a href="https://www.biddimensions.us" target="_blank" rel="noopener noreferrer" className="text-bd-blue hover:underline">
                  www.biddimensions.us
                </a>
              </span>
            </div>

            {/* Service Overview */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-6 mb-3">
              Service Overview
            </h2>
            <p className="text-base text-bd-gray mb-3">
              At Bid Dimensions, we specialize in providing expert construction estimating services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-bd-gray space-y-1.5 mb-4">
              <li>Detailed material takeoffs</li>
              <li>Quantity takeoffs</li>
              <li>Labor estimates</li>
              <li>Bid worksheets in Excel format</li>
              <li>Drafting and design services (Architectural Designs)</li>
            </ul>
            <p className="text-base text-bd-gray mb-6">
              We cater to all construction sectors, such as commercial, residential, public, and private projects. Our team comprises dedicated estimators for each specific trade to ensure precision and quality in every project.
            </p>

            {/* Basis of Estimates */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              Basis of Estimates
            </h2>
            <p className="text-base text-bd-gray mb-6">
              Our estimates and takeoffs are generated based on scaled PDF drawings provided by the client, unless otherwise agreed upon in writing. If there are any assumptions or deviations from the original scope, these will be clearly noted in the delivered estimates.
            </p>

            {/* Revisions & Additional Services */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              Revisions &amp; Additional Services
            </h2>
            <p className="text-base text-bd-gray mb-6">
              We do not charge separately for filling out basic bid forms, minor revisions, or information forms related to the project. However, if the project’s design changes by more than 50% compared to the original plan, additional fees may apply. We will notify the client in advance and seek approval before incurring any extra charges.
            </p>

            {/* Payment Terms */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              Payment Terms
            </h2>
            <ul className="list-disc pl-6 text-bd-gray space-y-1.5 mb-6">
              <li>Once the project scope is confirmed, we will send a secure invoice payment link.</li>
              <li>Payments can be made using credit or debit cards.</li>
              <li>Work will commence only after payment is received and confirmed.</li>
            </ul>

            {/* Pricing and Value */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              Pricing and Value
            </h2>
            <p className="text-base text-bd-gray mb-6">
              We offer competitive rates while maintaining high-quality standards. Our goal is to build long-term business relationships and act as a valuable extension of your estimating team.
            </p>

            {/* Client Responsibilities */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              Client Responsibilities
            </h2>
            <p className="text-base text-bd-gray mb-3">
              The client agrees to:
            </p>
            <ul className="list-disc pl-6 text-bd-gray space-y-1.5 mb-6">
              <li>Provide accurate and complete project drawings and documentation.</li>
              <li>Review all estimates and notify us promptly of any discrepancies or necessary adjustments.</li>
              <li>Ensure timely payments as agreed upon.</li>
            </ul>

            {/* Limitations of Liability */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              Limitations of Liability
            </h2>
            <p className="text-base text-bd-gray mb-6">
              Although we strive for the utmost accuracy in our estimates, Bid Dimensions will not be held liable for any financial loss, missed bids, or construction errors resulting from the use of our estimates. It is the client&apos;s responsibility to review, verify, and confirm the estimates before submitting them or using them for bidding purposes.
            </p>

            {/* Confidentiality */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              Confidentiality
            </h2>
            <p className="text-base text-bd-gray mb-6">
              We prioritize the confidentiality of client information and project data. All documents shared with us are handled securely and will not be disclosed to third parties without prior consent from the client.
            </p>

            {/* Modifications to Terms */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              Modifications to Terms
            </h2>
            <p className="text-base text-bd-gray mb-6">
              We reserve the right to update or modify these Terms and Conditions at any time. Any revisions will be posted on our website, and continued use of our services will be considered as acceptance of the updated terms.
            </p>

            {/* Contact Information */}
            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              Contact Information
            </h2>
            <p className="text-base text-bd-gray mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="p-5 bg-[#F8FAFC] border border-gray-200 rounded-xl font-body text-sm text-bd-navy space-y-2">
              <p>
                <strong className="font-display font-bold">Email:</strong>{' '}
                <a href="mailto:info@biddimensions.us" className="text-bd-blue hover:underline font-semibold">
                  info@biddimensions.us
                </a>
              </p>
              <p>
                <strong className="font-display font-bold">Phone:</strong>{' '}
                <a href="tel:7472237815" className="text-bd-navy hover:text-bd-blue">
                  +1 (747) 223-7815
                </a>
              </p>
              <p>
                <strong className="font-display font-bold">Website:</strong>{' '}
                <a href="https://www.biddimensions.us" target="_blank" rel="noopener noreferrer" className="text-bd-blue hover:underline">
                  www.biddimensions.us
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
