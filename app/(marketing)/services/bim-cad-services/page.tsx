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
      'Professional BIM & CAD services. Revit 3D modeling, clash detection, shop drawings. 7-14 day turnaround, 50-state coverage.',
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
      heroSubtitle="Revit 3D BIM modeling, Navisworks clash detection, LOD 200–400 documentation, and precise 2D AutoCAD drafting for seamless trade coordination."
      heroImage="/images/service-thumb-bim.jpg"
      overview={{
        paragraph1:
          'We provide comprehensive Building Information Modeling (BIM) and computer-aided drafting (CAD) services to coordinate architectural, structural, and MEP systems before construction.',
        paragraph2:
          'By creating intelligent LOD 200–400 3D models and running automated Navisworks clash detection, we eliminate trade interferences, generate precise shop drawings, and streamline field fabrication.',
      }}
      targetAudiences={[
        {
          iconName: 'hardhat',
          title: 'Trade Contractors (Steel, MEP, Framing)',
          text: 'Need fabrication-level shop drawings, spool drawings, and clash-resolved models.',
        },
        {
          iconName: 'building',
          title: 'General Contractors & BIM Managers',
          text: 'Require federated Navisworks models and automated clash detection reports to manage job sites.',
        },
        {
          iconName: 'home',
          title: 'Architects & Engineers',
          text: 'Seeking BIM conversion from 2D CAD/PDF drawings into parametric Revit families.',
        },
        {
          iconName: 'briefcase',
          title: 'Facility Owners',
          text: 'Looking for As-Built BIM models (LOD 500) for ongoing digital facility operations and maintenance.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Model Setup & Standards',
          text: 'Establish shared coordinates, project templates, BIM execution plan (BEP), and grid systems.',
        },
        {
          number: 2,
          title: 'Parametric 3D Modeling',
          text: 'Build intelligent architectural, structural, and MEP Revit models (LOD 200 to 400).',
        },
        {
          number: 3,
          title: 'Federated Model Assembly',
          text: 'Combine multidisciplinary models into Navisworks for comprehensive clash analysis.',
        },
        {
          number: 4,
          title: 'Clash Resolution Coordination',
          text: 'Conduct clash review meetings with trades and adjust routing to achieve 0 soft/hard clashes.',
        },
        {
          number: 5,
          title: 'Shop & Spool Drawing Extraction',
          text: 'Generate dimensioned 2D fabrication sheets, sleeve locations, and hanger schedules directly from the model.',
        },
        {
          number: 6,
          title: 'Final Model Handover',
          text: 'Deliver coordinated Revit RVT, Navisworks NWD, IFC, and PDF drawing packages.',
        },
      ]}
      deliverables={[
        'Parametric Revit 3D Models (LOD 200-400)',
        'Navisworks Federated Clash Detection Reports',
        'Pre-Fabrication Shop Drawings',
        'MEP Penetration & Sleeve Layouts',
        '2D AutoCAD Drafting & Conversion Sets',
        'As-Built Model Verification Sets (LOD 500)',
        'IFC & OpenBIM Coordination Files',
        'Material Quantity Schedules from BIM',
      ]}
      softwareList={[
        'Autodesk Revit',
        'Autodesk Navisworks',
        'AutoCAD 2D/3D',
        'Tekla Structures',
        'Bluebeam Revu',
        'Autodesk Construction Cloud (ACC)',
      ]}
      faqs={[
        {
          question: 'What Level of Development (LOD) can you model to?',
          answer:
            'We provide BIM models from LOD 200 (schematic massing) up to LOD 400 (fabrication & installation detailing) and LOD 500 (as-built facility management).',
        },
        {
          question: 'Can you convert our existing 2D CAD files and PDF blueprints into Revit models?',
          answer:
            'Yes. We regularly convert legacy 2D DWG drawings, hand sketches, and PDF plan sets into fully parameterized 3D Revit models.',
        },
        {
          question: 'How do you share and report clash detection results?',
          answer:
            'We provide detailed Navisworks clash matrix reports with pinpoint coordinates, screenshot callouts, trade responsibility assignments, and resolution recommendations.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
