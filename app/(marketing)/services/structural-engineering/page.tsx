import React from 'react';
import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/templates/ServiceDetailTemplate';
import { Building2, Briefcase, Home, HardHat } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Licensed Structural Engineering Services | PE Stamped Plans | Bid Dimensions',
  description:
    'Licensed PE structural engineering services for commercial & residential construction. Permit-ready foundation plans, framing calculations, & lateral seismic design.',
  keywords: [
    'structural engineering services',
    'PE stamped structural plans',
    'licensed structural engineer',
    'foundation engineering',
    'framing plans',
    'seismic load calculations',
  ],
  alternates: {
    canonical: 'https://biddimensions.us/services/structural-engineering',
  },
  openGraph: {
    title: 'Licensed Structural Engineering Services | PE Stamped Plans',
    description:
      'Licensed PE structural engineering services for commercial & residential construction. 7-14 day turnaround, 50-state coverage.',
    url: 'https://biddimensions.us/services/structural-engineering',
    images: [{ url: '/images/struct-hero-spec.jpg', width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Structural Engineering Services',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bid Dimensions',
    url: 'https://biddimensions.us',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Full-service PE-stamped structural calculations, foundation design, steel framing, lateral seismic analysis, and city permit submittal sets.',
};

export default function StructuralEngineeringPage() {
  return (
    <ServiceDetailTemplate
      serviceSlug="structural-engineering"
      title="Structural Engineering Services"
      heroSubtitle="We deliver structural calculations, load schedules, foundation designs, and PE-stamped structural drawings nationwide for all construction permits."
      heroImage="/images/struct-hero-spec.jpg"
      overview={{
        paragraph1:
          'We deliver structural calculations, load schedules, foundation designs, and PE-stamped structural drawings nationwide for all construction permits.',
        paragraph2:
          'Our focus on pre-construction coordination ensures that designs are not just aesthetically complete but completely aligned with structural requirements, local building codes, and construction budgets. We eliminate field issues before contractors break ground.',
      }}
      targetAudiences={[
        {
          iconName: 'building',
          title: 'Architects',
          text: 'Require calculations, load schedules, and structural framing coordinates to complement architectural plans.',
        },
        {
          iconName: 'briefcase',
          title: 'Developers',
          text: 'Seeking material optimization (value engineering) for concrete, structural steel, or timber framings.',
        },
        {
          iconName: 'home',
          title: 'Property Managers',
          text: 'Demanding structural reports, load capacity calculations, and seismic or hurricane resilience checks.',
        },
        {
          iconName: 'hardhat',
          title: 'General Contractors',
          text: 'Need foundation, shoring plans, and structural repair details for field construction challenges.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Initial Intake',
          text: 'Review architectural plans, geotechnical soil reports, and local wind/seismic coefficients.',
        },
        {
          number: 2,
          title: 'Load Calculations',
          text: 'Apply gravity, live, snow, seismic, and wind loads to formulate primary framing models.',
        },
        {
          number: 3,
          title: 'Foundation Design',
          text: 'Analyze soil bearing capacities to design shallow slabs-on-grade, crawlspaces, or deep pile caps.',
        },
        {
          number: 4,
          title: 'Framing & Truss Design',
          text: 'Configure columns, beams, girders, joists, and connections in steel, concrete, wood, or masonry.',
        },
        {
          number: 5,
          title: 'Detail Documentation',
          text: 'Draft connection schedules, reinforcement steel parameters, and structural general notes.',
        },
        {
          number: 6,
          title: 'Engineer Stamp/Signoff',
          text: 'Transmit calculations and a PE-stamped drawing sheets matching jurisdiction demands.',
        },
      ]}
      deliverables={[
        'Structural Calculation Booklet',
        'Framing Plan Configurations',
        'Structural Steel Connection Details',
        'Engineering Assessment Reports',
        'Geotechnical Foundation Designs',
        'Reinforced Concrete Detail Sheets',
        'Timber Post & Beam Designs',
        'City Plan Check Response Sets',
      ]}
      softwareList={['ETABS', 'SAP2000', 'AutoCAD', 'Revit', 'RISA-3D', 'Enercalc', 'Bluebeam']}
      faqs={[
        {
          question: 'What building codes do you follow?',
          answer:
            'Our calculations comply strictly with IBC 2024, ASCE 7-22, ACI 318 for concrete, AISC 360 for steel, and NDS for wood framing, as well as local state amendments (CBC, FBC, etc.).',
        },
        {
          question: 'Can you provide stamped calculations for building departments?',
          answer:
            'Yes. Our licensed Professional Engineers (PE) provide signed and sealed calculation packages ready for direct submission to any city or county building department across all 50 states.',
        },
        {
          question: 'Do you design foundation repairs and retrofits?',
          answer:
            'Yes. We engineer foundation underpinning, helical pier additions, retaining wall stabilization, and seismic soft-story retrofits with full permit documentation.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
