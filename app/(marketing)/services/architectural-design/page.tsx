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
      'Permit-ready architectural design services for residential and commercial projects. 5-10 day turnaround, 50-state coverage.',
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
      heroSubtitle="Professional architectural design solutions for residential, commercial, and industrial projects, from concept development and floor plans to detailed, permit-ready construction drawings."
      heroImage="/images/hero-architectural-bg.jpg"
      overview={{
        paragraph1:
          "At Bid Dimensions, we craft architectural designs that balance functionality, aesthetics, and code compliance. Whether you're pursuing new construction, a renovation, a tenant improvement, or a building addition, our team develops practical, tailored solutions that align with your vision and project goals.",
        paragraph2:
          'From initial concept through permit-ready construction documents, we collaborate closely with clients to deliver coordinated architectural plans that streamline construction and support a smooth approval process.',
      }}
      targetAudiences={[
        {
          iconName: 'briefcase',
          title: 'Developers',
          text: 'Require architectural designs that streamline permitting, support efficient project planning, and keep developments on schedule.',
        },
        {
          iconName: 'home',
          title: 'Homeowners',
          text: 'Planning new homes, renovations, additions, or custom residences that require thoughtful, permit-ready, and code-compliant design.',
        },
        {
          iconName: 'hardhat',
          title: 'General Contractors',
          text: 'Need coordinated construction documents that minimize field conflicts and keep projects moving efficiently.',
        },
        {
          iconName: 'building',
          title: 'Real Estate Investors',
          text: 'Need permit-ready designs for renovations, additions, adaptive reuse, and property improvements.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Project Consultation',
          text: 'Review project goals, site information, client requirements, and applicable building codes.',
        },
        {
          number: 2,
          title: 'Concept Development',
          text: "Develop preliminary layouts and design concepts based on the project's functional requirements.",
        },
        {
          number: 3,
          title: 'Design Development',
          text: 'Refine floor plans, elevations, sections, and architectural details for coordination and approval.',
        },
        {
          number: 4,
          title: 'Design Coordination',
          text: 'Coordinate architectural drawings with structural and MEP disciplines to improve constructability.',
        },
        {
          number: 5,
          title: 'Construction Documentation',
          text: 'Prepare detailed permit-ready drawings, schedules, notes, and technical documentation.',
        },
        {
          number: 6,
          title: 'Final Review & Delivery',
          text: 'Complete a comprehensive quality review before delivering the final drawing package.',
        },
      ]}
      deliverables={[
        'Floor Plans',
        'Site Plans',
        'Roof Plans',
        'Exterior Elevations',
        'Building Sections',
        'Wall Sections',
        'Door & Window Schedules',
        'Finish Schedules',
        'Reflected Ceiling Plans',
        'Architectural Details',
        'Permit Sets',
        'Construction Documents',
      ]}
      softwareList={['AutoCAD', 'Autodesk Revit', 'SketchUp', 'Enscape']}
      faqs={[
        {
          question: 'What is included in architectural design services?',
          answer:
            'Architectural design services typically include concept development, floor plans, elevations, building sections, site plans, permit-ready drawings, code compliance reviews, and complete construction documentation.',
        },
        {
          question: 'Can you prepare drawings for permit submission?',
          answer:
            'Yes. Our architectural designs are developed as permit-ready drawing packages in accordance with local building codes and jurisdictional requirements.',
        },
        {
          question: 'How do you coordinate with structural engineers?',
          answer:
            'Our architectural team collaborates closely with structural engineers to deliver coordinated, code-compliant designs that improve constructability, reduce design conflicts, and support efficient project delivery.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
