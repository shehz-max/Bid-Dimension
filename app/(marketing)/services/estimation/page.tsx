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
      'Accurate construction cost estimation and material quantity takeoff services. 7-14 day turnaround, 50-state coverage.',
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
      heroSubtitle="CSI MasterFormat itemized cost estimates, PlanSwift material quantity takeoffs, labor pricing, and bid-winning proposals for contractors and developers."
      heroImage="/images/hero-estimation-bg.jpg"
      overview={{
        paragraph1:
          'We deliver accurate, itemized material quantity takeoffs and construction cost estimates aligned with CSI MasterFormat 50 divisions to help contractors win profitable bids.',
        paragraph2:
          'Using digital takeoff tools like PlanSwift and RSMeans localized labor/material pricing databases, our estimators calculate precise material quantities, labor hours, and equipment costs so you never underbid or leave money on the table.',
      }}
      targetAudiences={[
        {
          iconName: 'hardhat',
          title: 'General Contractors',
          text: 'Need comprehensive line-item bid estimates to submit competitive, profitable proposals without spending 40+ hours doing manual takeoffs.',
        },
        {
          iconName: 'building',
          title: 'Trade Subcontractors (Framing, Concrete, MEP)',
          text: 'Require specialized trade material quantity takeoffs (sqft, linear ft, cubic yards, poundage) with zero waste factors.',
        },
        {
          iconName: 'briefcase',
          title: 'Real Estate Developers & Investors',
          text: 'Seeking preliminary conceptual budgets and feasibility estimates to evaluate project ROI before architectural completion.',
        },
        {
          iconName: 'home',
          title: 'Property Owners',
          text: 'Looking for independent third-party construction cost verification to review contractor bids and prevent overcharging.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Blueprint & Scope Review',
          text: 'Audit architectural, structural, and MEP drawing sheets, addenda, and project specifications.',
        },
        {
          number: 2,
          title: 'Digital Quantity Takeoff',
          text: 'Measure all line items using PlanSwift (square footage, linear lengths, counts, volumes).',
        },
        {
          number: 3,
          title: 'CSI MasterFormat Classification',
          text: 'Organize every line item into standard CSI 50 divisions for clear contractor transparency.',
        },
        {
          number: 4,
          title: 'Localized Material & Labor Pricing',
          text: 'Apply current RSMeans and local zip-code market pricing for materials, skilled labor, and equipment.',
        },
        {
          number: 5,
          title: 'Markups, Profit & Contingency',
          text: 'Calculate subcontractor markups, general conditions, overhead, and risk contingencies.',
        },
        {
          number: 6,
          title: 'Final Bid Package Delivery',
          text: 'Deliver formatted Excel takeoff workbooks, color-coded markup PDFs, and executive summary sheets.',
        },
      ]}
      deliverables={[
        'CSI MasterFormat Itemized Cost Estimate Book',
        'PlanSwift Color-Coded Markup Drawing PDFs',
        'Material Quantity Takeoff (MTO) Excel Sheets',
        'Labor Hours & Wage Rate Breakdown',
        'Equipment Rental & Logistics Budget',
        'Subcontractor Bid Comparison Matrix',
        'Value Engineering Cost Reduction Report',
        'Conceptual Feasibility Cost Model',
      ]}
      softwareList={[
        'PlanSwift',
        'Bluebeam Revu',
        'RSMeans Online',
        'ProEst',
        'Microsoft Excel Advanced Workbooks',
        'HeavyBid',
      ]}
      faqs={[
        {
          question: 'What format do you deliver the cost estimates in?',
          answer:
            'We deliver fully editable Microsoft Excel spreadsheets categorized by CSI MasterFormat divisions, along with color-coded PlanSwift PDF drawing markups.',
        },
        {
          question: 'How do you price labor and material costs accurately for my area?',
          answer:
            'We utilize zip-code specific RSMeans cost databases and regional supplier quotes to reflect local labor wage rates, material pricing, and regional union scales.',
        },
        {
          question: 'What is your turnaround time for a complete quantity takeoff?',
          answer:
            'Standard residential and commercial quantity takeoffs are delivered within 7 to 14 days with complete CSI MasterFormat line-item breakdowns.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
