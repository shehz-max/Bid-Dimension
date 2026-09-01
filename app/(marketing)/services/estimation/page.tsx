import React from 'react';
import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/templates/ServiceDetailTemplate';
import { HardHat, Building2, Briefcase, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Estimation & Quantity Takeoffs | PlanSwift | Bid Dimensions',
  description:
    'Accurate construction cost estimation and material quantity takeoff services. CSI MasterFormat itemized estimates, PlanSwift takeoffs, and bid proposals.',
  keywords: [
    'construction cost estimation',
    'quantity takeoff services',
    'PlanSwift material takeoffs',
    'CSI MasterFormat estimating',
    'contractor bid proposals',
    'RSMeans construction pricing',
  ],
  alternates: {
    canonical: 'https://biddimensions.us/services/estimation',
  },
  openGraph: {
    title: 'Construction Estimation & Quantity Takeoffs | Bid Dimensions',
    description:
      'Accurate construction cost estimation and material quantity takeoff services. 5-10 day turnaround, 50-state coverage.',
    url: 'https://biddimensions.us/services/estimation',
    images: [{ url: '/images/est-hero-spec.jpg', width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Construction Estimation & Quantity Takeoffs',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bid Dimensions',
    url: 'https://biddimensions.us',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Professional construction cost estimation, material quantity takeoffs (MTO), CSI MasterFormat line-item breakdowns, and PlanSwift color-coded drawing sets.',
};

export default function EstimationPage() {
  return (
    <ServiceDetailTemplate
      serviceSlug="estimation"
      title="Estimation & Quantity Takeoffs"
      heroSubtitle="Detailed quantity takeoffs and construction estimates for residential, commercial, and industrial projects, providing organized material quantities and cost information to support accurate bidding and budgeting."
      heroImage="/images/hero-estimation-bg.jpg"
      overview={{
        paragraph1:
          'We provide detailed construction estimates and quantity takeoffs for residential, commercial, and industrial projects. Our estimating services help contractors, subcontractors, and developers understand project quantities, material requirements, and anticipated costs before work begins.',
        paragraph2:
          'We organize project information into clear, trade-specific estimates that make it easier to prepare competitive bids, evaluate project costs, and make informed decisions throughout the bidding and planning process.',
      }}
      targetAudiences={[
        {
          iconName: 'hardhat',
          title: 'General Contractors',
          text: 'Need reliable quantity and cost information to prepare competitive bids and evaluate project profitability.',
        },
        {
          iconName: 'building',
          title: 'Subcontractors',
          text: 'Require detailed takeoffs for specific trades such as concrete, framing, drywall, roofing, painting, electrical, plumbing, and HVAC.',
        },
        {
          iconName: 'briefcase',
          title: 'Developers',
          text: 'Need project cost information and quantity data to evaluate budgets, feasibility, and construction requirements.',
        },
        {
          iconName: 'home',
          title: 'Builders & Property Owners',
          text: 'Need clear estimates to understand material quantities and projected construction costs before starting a project.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Plan Review',
          text: 'Review drawings, specifications, schedules, addenda, and project requirements to establish the estimating scope.',
        },
        {
          number: 2,
          title: 'Quantity Takeoff',
          text: 'Measure and quantify the required materials, labor items, and construction components from the project documents.',
        },
        {
          number: 3,
          title: 'Cost Estimation',
          text: 'Organize quantities and apply applicable unit costs, labor rates, and pricing information to develop the estimate.',
        },
        {
          number: 4,
          title: 'Review & Delivery',
          text: 'Check quantities and calculations, organize the results, and deliver the completed estimate in a clear, easy-to-review format.',
        },
      ]}
      deliverables={[
        'Detailed Material & Quantity Lists',
        'Excel-Based Takeoff Spreadsheets',
        'Color-Coded Drawing Markups',
        'CSI Division-Based Quantity Breakdowns',
        'Slab, Framing & Structural Quantity Reports',
      ]}
      softwareList={[
        'Bluebeam Revu',
        'PlanSwift',
        'On-Screen Takeoff',
        'Microsoft Excel',
      ]}
      faqs={[
        {
          question: 'What format do you deliver the cost estimates in?',
          answer:
            'We deliver fully editable Microsoft Excel spreadsheets categorized by trade and CSI divisions, along with color-coded drawing markups.',
        },
        {
          question: 'How do you price labor and material costs accurately for my area?',
          answer:
            'We utilize localized cost databases and current market pricing information to reflect regional labor wage rates and material costs.',
        },
        {
          question: 'What is your turnaround time for a complete quantity takeoff?',
          answer:
            'Standard residential and commercial quantity takeoffs are delivered within 10 to 12 days with complete itemized material breakdowns.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
