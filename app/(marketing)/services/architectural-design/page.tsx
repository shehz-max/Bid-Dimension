import React from 'react';
import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/templates/ServiceDetailTemplate';
import { HardHat, Building2, Home, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Architectural Design Services | Permit-Ready Floor Plans | Bid Dimensions',
  description:
    'Permit-ready architectural design services for residential and commercial projects. Complete floor plans, exterior elevations, Revit 3D BIM, and city permit sets.',
  keywords: [
    'architectural design services',
    'permit ready floor plans',
    'building elevations',
    'commercial architecture',
    'residential architectural design',
    'Revit BIM architectural modeling',
  ],
  alternates: {
    canonical: 'https://biddimensions.us/services/architectural-design',
  },
  openGraph: {
    title: 'Architectural Design Services | Permit-Ready Floor Plans',
    description:
      'Permit-ready architectural design services for residential and commercial projects. 7-14 day turnaround, 50-state coverage.',
    url: 'https://biddimensions.us/services/architectural-design',
    images: [{ url: '/images/arch-hero-spec.jpg', width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Architectural Design Services',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bid Dimensions',
    url: 'https://biddimensions.us',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Full-service architectural design including permit floor plans, exterior elevations, building sections, door/window schedules, and 3D BIM coordination.',
};

export default function ArchitecturalDesignPage() {
  return (
    <ServiceDetailTemplate
      serviceSlug="architectural-design"
      title="Architectural Design Services"
      heroSubtitle="Permit-ready architectural floor plans, exterior elevations, building sections, and Revit 3D BIM models for commercial and residential construction."
      heroImage="/images/hero-architectural-bg.jpg"
      overview={{
        paragraph1:
          'We deliver permit-ready architectural plans, dimensioned floor layouts, exterior elevations, and building sections that satisfy municipal zoning and plan check codes nationwide.',
        paragraph2:
          'Our architectural team collaborates closely with structural and MEP engineers from day one, eliminating coordination clashes and expediting city approvals for custom homes, commercial build-outs, and renovations.',
      }}
      targetAudiences={[
        {
          iconName: 'hardhat',
          title: 'General Contractors',
          text: 'Need clear, constructible architectural plan sets that minimize RFIs and eliminate on-site confusion.',
        },
        {
          iconName: 'building',
          title: 'Commercial Developers',
          text: 'Require optimized tenant improvements, occupancy calculations, and ADA-compliant accessibility drawings.',
        },
        {
          iconName: 'home',
          title: 'Custom Home Builders',
          text: 'Seeking architectural floor plans, 3D renderings, and permit documentation for luxury residences and ADUs.',
        },
        {
          iconName: 'briefcase',
          title: 'Real Estate Investors',
          text: 'Looking to evaluate property buildability, zoning envelopes, and maximize usable square footage.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Programming & Concept Intake',
          text: 'Review client design intent, site boundaries, existing drawings, and municipal zoning envelopes.',
        },
        {
          number: 2,
          title: 'Schematic Design',
          text: 'Draft preliminary space planning layouts, circulation paths, and room dimensions.',
        },
        {
          number: 3,
          title: 'Design Development',
          text: 'Develop exterior elevations, building wall sections, and architectural window/door schedules.',
        },
        {
          number: 4,
          title: 'MEP & Structural Coordination',
          text: 'Coordinate load-bearing walls, shear locations, and mechanical chases in 3D BIM.',
        },
        {
          number: 5,
          title: 'Permit Documentation',
          text: 'Assemble complete architectural plan sheets with egress, Title 24/energy, and code notes.',
        },
        {
          number: 6,
          title: 'Plan Check Support',
          text: 'Provide immediate revisions and responses to city plan check review comments.',
        },
      ]}
      deliverables={[
        'Dimensioned Floor Plans (A-1.0)',
        'Exterior Building Elevations (A-2.0)',
        'Building Longitudinal Sections (A-3.0)',
        'Door, Window & Finish Schedules',
        'Reflected Ceiling Plans (RCP)',
        'Life Safety & Egress Plans',
        'Accessibility / ADA Compliance Details',
        'Revit 3D BIM Model Files',
      ]}
      softwareList={['Autodesk Revit', 'AutoCAD', 'SketchUp', 'Navisworks', 'Bluebeam Revu', 'Rhino 3D']}
      faqs={[
        {
          question: 'Are your architectural plans ready for city permit submittal?',
          answer:
            'Yes. All drawings include complete code compliance data, title blocks, dimensioned layouts, and required general notes tailored to your municipal jurisdiction.',
        },
        {
          question: 'Can you work from hand sketches or existing PDF drawings?',
          answer:
            'Absolutely. We can convert paper blueprints, sketches, and redlined PDFs into precise CAD/Revit drawing sets.',
        },
        {
          question: 'Do you provide 3D exterior and interior renderings with design sets?',
          answer:
            'Yes. We offer photorealistic 3D visualization and rendering services alongside our architectural permit sets for client presentations and design approvals.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
