import React from 'react';
import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/templates/ServiceDetailTemplate';
import { HardHat, Building2, Home, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MEP Engineering Services | PE Stamped Mechanical, Electrical, Plumbing | Bid Dimensions',
  description:
    'Licensed PE mechanical, electrical, and plumbing engineering services. Permit-ready HVAC duct design, electrical SLD, plumbing risers, and Title 24 energy calculations.',
  keywords: [
    'MEP engineering services',
    'mechanical engineering HVAC',
    'electrical single-line diagram',
    'plumbing riser diagrams',
    'Title 24 energy calculations',
    'PE stamped MEP drawings',
  ],
  alternates: {
    canonical: 'https://biddimensions.us/services/mep-engineering',
  },
  openGraph: {
    title: 'MEP Engineering Services | Mechanical, Electrical, Plumbing',
    description:
      'Licensed PE mechanical, electrical, and plumbing engineering services. 7-14 day turnaround, 50-state coverage.',
    url: 'https://biddimensions.us/services/mep-engineering',
    images: [{ url: '/images/mep-hero-spec.jpg', width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'MEP Engineering Services',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bid Dimensions',
    url: 'https://biddimensions.us',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Full-service mechanical, electrical, and plumbing (MEP) engineering, Title 24 energy calculations, HVAC design, electrical single-line diagrams, and PE stamped permit packages.',
};

export default function MepEngineeringPage() {
  return (
    <ServiceDetailTemplate
      serviceSlug="mep-engineering"
      title="MEP Engineering Services"
      heroSubtitle="Professional MEP engineering solutions for residential, commercial, and industrial projects, covering mechanical, electrical, and plumbing systems with coordinated, permit-ready designs."
      heroImage="/images/hero-mep-bg.jpg"
      overview={{
        paragraph1:
          'At Bid Dimensions, we provide licensed MEP engineering services that deliver efficient, coordinated, and code-compliant mechanical, electrical, and plumbing designs for residential, commercial, and industrial projects.',
        paragraph2:
          'Our multidisciplinary approach ensures every MEP system is fully coordinated with the architectural and structural design before construction begins. By identifying potential conflicts early, optimizing system layouts, and preparing permit-ready documentation, we help minimize costly revisions, simplify the permitting process, and support efficient construction from start to finish.',
      }}
      targetAudiences={[
        {
          iconName: 'hardhat',
          title: 'General Contractors',
          text: 'Need coordinated MEP plans and single-line diagrams that prevent field conflicts and simplify trade coordination.',
        },
        {
          iconName: 'building',
          title: 'Commercial Developers',
          text: 'Require energy-efficient mechanical, electrical, and plumbing systems optimized for building performance and code compliance.',
        },
        {
          iconName: 'home',
          title: 'Architects',
          text: 'Seeking integrated MEP engineering packages that align with architectural layouts, ceiling clearances, and aesthetics.',
        },
        {
          iconName: 'briefcase',
          title: 'Facility Managers',
          text: 'Looking for reliable MEP documentation for system upgrades, tenant improvements, and equipment replacements.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Load & Demand Intake',
          text: 'Analyze architectural floor plans, equipment schedules, and building occupancy loads.',
        },
        {
          number: 2,
          title: 'HVAC & Ventilation Sizing',
          text: 'Calculate heating and cooling loads to design energy-efficient mechanical ductwork and equipment layouts.',
        },
        {
          number: 3,
          title: 'Electrical Distribution Design',
          text: 'Size main service panels, electrical single-line diagrams (SLD), and lighting controls.',
        },
        {
          number: 4,
          title: 'Plumbing & Gas Piping',
          text: 'Design water supply systems, DWV drain risers, and gas piping layouts.',
        },
        {
          number: 5,
          title: 'Energy Code Compliance',
          text: 'Execute Title 24, COMcheck, or REScheck energy compliance documentation.',
        },
        {
          number: 6,
          title: 'PE Stamping & Signoff',
          text: 'Deliver certified, PE-sealed MEP drawing sets ready for permit approval.',
        },
      ]}
      deliverables={[
        'HVAC Plans & Equipment Layouts',
        'Air Distribution & Ductwork Plans',
        'Electrical Power & Lighting Plans',
        'Single-Line Diagrams',
        'Panel Schedules & Load Calculations',
        'Plumbing Plans & Piping Layouts',
        'Water Supply & Drainage Systems',
        'Fire Protection Coordination',
        'Mechanical, Electrical & Plumbing Details',
        'Equipment Schedules',
        'MEP Coordination Drawings',
        'Energy Compliance Documentation',
      ]}
      softwareList={['Autodesk Revit MEP', 'AutoCAD MEP', 'Trane TRACE 700', 'Elite Software', 'DIALux evo']}
      faqs={[
        {
          question: 'Do you coordinate with utility providers?',
          answer:
            'Yes. We prepare the engineering documentation required for utility reviews, including single-line diagrams, electrical load summaries, and other supporting documents for new or upgraded utility connections.',
        },
        {
          question: 'Is fire protection design included in your MEP services?',
          answer:
            'Yes. We provide fire protection system design and coordination, including sprinkler layouts, riser diagrams, and supporting documentation, where required by the project scope and applicable codes.',
        },
        {
          question: 'Do you provide PE stamps for MEP drawings?',
          answer:
            'Yes. Our licensed Professional Engineers (PE) sign and seal mechanical, electrical, and plumbing drawings for city permit approval in all 50 states.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
