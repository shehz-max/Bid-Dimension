import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bid Dimensions',
  description:
    'Privacy Policy for Bid Dimensions engineering & design services. Learn how we protect your confidential CAD drawings, project plans, and personal data.',
  alternates: {
    canonical: 'https://biddimensions.us/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <Hero
        variant="page"
        headline="Privacy Policy"
        subheadline="Bid Dimensions is committed to safeguarding your personal data and confidential project documentation."
        hudBadge={{ label: 'DATA PROTECTION', spec: '256-BIT ENCRYPTION // CONFIDENTIAL' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy' },
        ]}
      />

      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="prose prose-lg max-w-none text-bd-charcoal font-body leading-relaxed">
            <span className="font-mono text-xs text-bd-blue uppercase font-bold block mb-2">
              LAST UPDATED: AUGUST 2026
            </span>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-base text-bd-gray mb-6">
              When you submit a quote request, contact us, or upload project files to Bid Dimensions, we collect information including your name, email address, phone number, company name, project location, and any uploaded CAD/PDF architectural drawings.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              2. Confidentiality of Project Drawings
            </h2>
            <p className="text-base text-bd-gray mb-6">
              All architectural, structural, and MEP plans uploaded to Bid Dimensions are treated as strictly confidential proprietary intellectual property. We do not sell, share, or disclose client drawing files to third parties, except as required to perform engineering services or as mandated by law.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-base text-bd-gray mb-6">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-bd-gray space-y-2 mb-6">
              <li>Evaluate project scope and prepare PE engineering fee proposals.</li>
              <li>Communicate regarding plan check reviews, structural calculations, and permit deliverables.</li>
              <li>Deliver completed CAD and Revit BIM drawing packages.</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-base text-bd-gray mb-6">
              We implement industry-standard 256-bit SSL encryption and secure cloud infrastructure to protect your personal information and uploaded files against unauthorized access or disclosure.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-4">
              5. Contact Us Regarding Privacy
            </h2>
            <p className="text-base text-bd-gray mb-6">
              If you have any questions regarding this Privacy Policy, please contact us at:
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
