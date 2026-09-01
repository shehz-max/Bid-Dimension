import React from 'react';
import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/templates/ServiceDetailTemplate';
import { HardHat, Building2, Home, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'BIM & CAD Drafting Services | Revit 3D Clash Detection | Bid Dimensions',
  description:
    'Professional BIM & CAD services. Revit 3D modeling (LOD 200-400), Navisworks clash detection, shop drawings, and 2D CAD drafting.',
  keywords: [
    'BIM services',
    'Revit 3D modeling',
    'Navisworks clash detection',
    'CAD drafting services',
    'shop drawings',
    'LOD 300 LOD 400 BIM',
  ],
  alternates: {
    canonical: 'https://biddimensions.us/services/bim-cad-services',
  },
  openGraph: {
    title: 'BIM & CAD Drafting Services | Revit 3D Clash Detection',
    description:
      'Professional BIM & CAD services. Revit 3D modeling, clash detection, shop drawings. 5-10 day turnaround, 50-state coverage.',
    url: 'https://biddimensions.us/services/bim-cad-services',
    images: [{ url: '/images/primecost-cad-bg.jpg', width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'BIM & CAD Drafting Services',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bid Dimensions',
    url: 'https://biddimensions.us',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Comprehensive Building Information Modeling (BIM) and CAD drafting, Revit LOD 200-400 modeling, Navisworks clash detection, and shop drawings.',
};

export default function BimCadServicesPage() {
  return (
    <ServiceDetailTemplate
      serviceSlug="bim-cad-services"
      title="BIM & CAD Services"
      heroSubtitle="Accurate BIM & CAD solutions for contractors and developers, including Revit modeling, CAD drafting, shop drawings, and clash detection to identify and resolve conflicts before construction."
      heroImage="/images/hero-bim-cad-bg.jpg"
      overview={{
        paragraph1:
          'Our BIM and CAD services turn design information into accurate, coordinated, and usable project documentation. We develop models and drawings that help identify design issues, improve communication between trades, and provide contractors with reliable information for construction.',
        paragraph2:
          "Whether you need a new BIM model, CAD drafting, shop drawings, coordination support, or as-built documentation, our team delivers solutions based on your project's scope and requirements.",
      }}
      targetAudiences={[
        {
          iconName: 'hardhat',
          title: 'General Contractors',
          text: 'We provide coordinated BIM models, construction drawings, and shop drawings to support planning, installation, and project coordination.',
        },
        {
          iconName: 'building',
          title: 'Subcontractors',
          text: 'We create detailed trade-specific drawings and models for mechanical, electrical, plumbing, structural, and architectural scopes.',
        },
        {
          iconName: 'briefcase',
          title: 'Developers',
          text: 'We develop accurate digital models and project documentation that support design review, construction planning, and project management.',
        },
        {
          iconName: 'home',
          title: 'Architects & Engineers',
          text: 'We provide additional BIM and CAD production support, including modeling, drafting, detailing, and documentation.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Project Review',
          text: 'Review the available drawings, models, specifications, and project requirements to establish the scope.',
        },
        {
          number: 2,
          title: 'Model & CAD Setup',
          text: 'Set up project standards, levels, grids, coordinates, layers, and drawing templates.',
        },
        {
          number: 3,
          title: 'Modeling & Drafting',
          text: "Develop 2D CAD drawings or 3D BIM models based on the project's requirements and available information.",
        },
        {
          number: 4,
          title: 'Coordination',
          text: 'Review the model and drawings for accuracy, consistency, and conflicts between building elements and disciplines.',
        },
        {
          number: 5,
          title: 'Documentation',
          text: 'Generate plans, sections, elevations, details, schedules, shop drawings, and other required documentation.',
        },
        {
          number: 6,
          title: 'Final Review & Delivery',
          text: 'Complete a quality review and deliver the final models and drawings in the required formats.',
        },
      ]}
      deliverables={[
        '2D AutoCAD Drawings',
        '3D Revit Models',
        'Architectural BIM Models',
        'Structural BIM Models',
        'MEP BIM Models',
        'Construction Documentation',
        'Shop Drawings',
        'Coordination Drawings',
        'Clash Detection Reports',
        'Revit Families',
        'As-Built Drawings & Models',
        'Quantity & Model Data',
        'Drawing Sheets & Schedules',
      ]}
      softwareList={[
        'Autodesk Revit',
        'AutoCAD',
        'Navisworks Manage',
        'BIM 360 / Autodesk Construction Cloud',
        'BIMcollab',
      ]}
      faqs={[
        {
          question: 'What BIM services do you provide?',
          answer:
            'We provide BIM modeling, multidisciplinary coordination, clash detection, shop drawings, CAD drafting, Revit documentation, and as-built modeling.',
        },
        {
          question: 'Can you create a BIM model from 2D drawings?',
          answer:
            'Yes. We can develop 3D BIM models from architectural, structural, MEP, CAD, PDF, and other available project documentation.',
        },
        {
          question: 'Do you provide clash detection?',
          answer:
            'Yes. We review coordinated models to identify potential conflicts between architectural, structural, mechanical, electrical, and plumbing elements.',
        },
        {
          question: 'Can you update BIM models for as-built conditions?',
          answer:
            'Yes. We can update existing models based on field information, revisions, and construction changes to create accurate as-built documentation.',
        },
        {
          question: 'Can you provide shop drawings from BIM models?',
          answer:
            'Yes. We can extract and develop detailed shop and coordination drawings from BIM models based on the project’s requirements.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
