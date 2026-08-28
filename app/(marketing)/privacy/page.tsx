import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/organisms/Hero';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bid Dimensions',
  description:
    'Privacy Policy for Bid Dimensions LLC. Learn how we collect, use, protect, and handle your personal information and project data.',
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
        subheadline="Bid Dimensions LLC is committed to safeguarding your personal data and project specifications."
      />

      <section className="py-16 sm:py-20 bg-white text-bd-charcoal">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="prose prose-lg max-w-none text-bd-charcoal font-body leading-relaxed">
            <span className="font-mono text-xs text-bd-blue uppercase font-bold block mb-4">
              LAST UPDATED: MARCH 11, 2026
            </span>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-6 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-base text-bd-gray mb-3">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-bd-gray space-y-1.5 mb-6">
              <li>Name, email address, and phone number</li>
              <li>Company information</li>
              <li>Project plans and specifications</li>
              <li>Communications with our team</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-base text-bd-gray mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-bd-gray space-y-1.5 mb-6">
              <li>Provide construction estimation services</li>
              <li>Communicate with you about your projects</li>
              <li>Send you updates and marketing communications</li>
              <li>Improve our services</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              3. Information Sharing
            </h2>
            <p className="text-base text-bd-gray mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              4. Data Security
            </h2>
            <p className="text-base text-bd-gray mb-6">
              We implement appropriate security measures to protect your personal information and project files. All data is stored on secure servers with encrypted connections.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              5. Your Rights
            </h2>
            <p className="text-base text-bd-gray mb-6">
              You have the right to access, update, or delete your personal information. Contact us at{' '}
              <a href="mailto:info@biddimensions.us" className="text-bd-blue font-semibold hover:underline">
                info@biddimensions.us
              </a>{' '}
              for any requests.
            </p>

            <h2 className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3">
              6. Contact Us
            </h2>
            <p className="text-base text-bd-gray mb-4">
              If you have questions about this Privacy Policy, please contact us at:
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
