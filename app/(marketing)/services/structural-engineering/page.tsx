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
      'Licensed PE structural engineering services for commercial & residential construction. 10-12 day turnaround, 50-state coverage.',
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
      heroSubtitle="Professional structural engineering services for residential, commercial, and industrial projects, providing structural analysis, foundation and framing design, and detailed permit-ready engineering documentation."
      heroImage="/images/hero-structural-bg.jpg"
      overview={{
        paragraph1:
          "At Bid Dimensions, we provide structural engineering solutions focused on safety, performance, efficiency, and code compliance. Whether you're planning new construction, a renovation, a building addition, or a structural modification, we develop practical and efficient structural systems tailored to your project's requirements.",
        paragraph2:
          'From structural analysis and foundation design to framing, connection design, and detailed construction documentation, our engineering team develops accurate, permit-ready structural drawings and calculations that support efficient construction and provide a reliable foundation for every project.',
      }}
      targetAudiences={[
        {
          iconName: 'building',
          title: 'Architects',
          text: 'We provide structural systems that integrate seamlessly with architectural designs while maintaining functionality, efficiency, and code compliance.',
        },
        {
          iconName: 'hardhat',
          title: 'General Contractors',
          text: 'Our engineering documentation supports efficient construction, reduces field conflicts, and simplifies project coordination throughout every stage of the build.',
        },
        {
          iconName: 'briefcase',
          title: 'Developers',
          text: 'We help optimize structural systems to improve constructability, maximize material efficiency, and support project budgets without compromising safety or performance.',
        },
        {
          iconName: 'home',
          title: 'Property Owners',
          text: "Whether constructing a new building, renovating an existing structure, or evaluating structural modifications, we provide engineering solutions tailored to your project's requirements.",
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Project Evaluation',
          text: 'Analyze architectural drawings, applicable building codes, geotechnical data, and site-specific wind and seismic requirements.',
        },
        {
          number: 2,
          title: 'Structural Analysis',
          text: 'Analyze structural loads to develop a safe, efficient, and code-compliant structural system.',
        },
        {
          number: 3,
          title: 'Foundation Planning',
          text: 'Determine the most suitable foundation system based on soil conditions, structural loads, and project requirements.',
        },
        {
          number: 4,
          title: 'Structural Framing',
          text: 'Design beams, columns, joists, girders, and structural connections using steel, concrete, timber, or masonry systems.',
        },
        {
          number: 5,
          title: 'Construction Documentation',
          text: 'Prepare detailed structural drawings, reinforcement details, connection schedules, and engineering notes for construction and permitting.',
        },
        {
          number: 6,
          title: 'Quality Assurance & Approval',
          text: 'Verify design accuracy and prepare the final engineering package for permitting and construction.',
        },
      ]}
      deliverables={[
        'Structural Design Calculations',
        'Foundation Plans & Details',
        'Framing Plans',
        'Reinforced Concrete Details',
        'Structural Steel Connection Details',
        'Timber Framing Details',
        'Beam & Column Schedules',
        'Structural Sections & Details',
        'General Structural Notes',
        'Engineering Reports',
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
