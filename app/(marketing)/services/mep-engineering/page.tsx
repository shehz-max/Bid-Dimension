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
      'Licensed PE mechanical, electrical, and plumbing engineering services. 24-48h turnaround, 50-state coverage.',
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
      heroSubtitle="PE-stamped mechanical (HVAC), electrical, plumbing, and Title 24 energy calculations for commercial, industrial, and residential projects."
      heroImage="/images/mep-hero-spec.jpg"
      overview={{
        paragraph1:
          'We deliver PE-stamped mechanical, electrical, and plumbing (MEP) design packages engineered for efficiency, building code compliance, and ease of construction installation.',
        paragraph2:
          'From HVAC ductwork sizing and electrical single-line diagrams to plumbing isometric risers and Title 24/ASHRAE 90.1 energy compliance, our engineers resolve trade interferences before work begins on-site.',
      }}
      targetAudiences={[
        {
          iconName: 'hardhat',
          title: 'Mechanical & Electrical Contractors',
          text: 'Require coordinated single-line diagrams, panel schedules, and duct sizing ready for field installation.',
        },
        {
          iconName: 'building',
          title: 'Commercial Facility Managers',
          text: 'Need power distribution upgrades, EV charging infrastructure, and HVAC replacement calculations.',
        },
        {
          iconName: 'home',
          title: 'Architects',
          text: 'Seeking fully integrated MEP plans that respect ceiling heights, structural clearances, and architectural aesthetics.',
        },
        {
          iconName: 'briefcase',
          title: 'General Contractors',
          text: 'Looking for 3D Revit MEP clash detection to eliminate expensive routing changes and field delays.',
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
          text: 'Calculate heating/cooling loads (Manual J/S/D or ASHRAE) and configure duct distribution.',
        },
        {
          number: 3,
          title: 'Electrical Distribution Design',
          text: 'Size main service panels, electrical single-line diagrams (SLD), and lighting controls.',
        },
        {
          number: 4,
          title: 'Plumbing & Gas Piping',
          text: 'Design water supply fixture units (WSFU), DWV drain risers, and gas piping schematics.',
        },
        {
          number: 5,
          title: 'Energy Code Compliance',
          text: 'Execute Title 24 (California), COMcheck, or REScheck energy calculations.',
        },
        {
          number: 6,
          title: 'PE Stamping & Signoff',
          text: 'Deliver certified, PE-sealed MEP drawing sets ready for permit approval.',
        },
      ]}
      deliverables={[
        'HVAC Ductwork & Equipment Plans (M-1.0)',
        'Electrical Power & Single-Line Diagrams (E-1.0)',
        'Lighting Plans & Photometric Calculations',
        'Plumbing Water & DWV Riser Diagrams (P-1.0)',
        'Gas Piping Sizing Schematics',
        'Title 24 & COMcheck Energy Compliance Books',
        'Mechanical Heating/Cooling Load Reports',
        'Fire Protection / Sprinkler Schematic Layouts',
      ]}
      softwareList={[
        'AutoCAD MEP',
        'Autodesk Revit MEP',
        'Carrier HAP',
        'Trane TRACE 3D',
        'COMcheck',
        'REScheck',
        'EnergyPro',
        'Navisworks',
      ]}
      faqs={[
        {
          question: 'Do you provide PE stamps for MEP drawings?',
          answer:
            'Yes. Our licensed Professional Engineers (PE) sign and seal mechanical, electrical, and plumbing drawings for city permit approval in all 50 states.',
        },
        {
          question: 'Can you perform Title 24 and COMcheck energy compliance calculations?',
          answer:
            'Yes. We include complete building envelope, lighting, and mechanical Title 24 / COMcheck / REScheck compliance certificates with our MEP packages.',
        },
        {
          question: 'How do you prevent MEP clashes with structural framing?',
          answer:
            'We build full 3D Revit models to coordinate ductwork, plumbing risers, and electrical conduits against structural beams and ceiling envelopes before drawings are issued.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
