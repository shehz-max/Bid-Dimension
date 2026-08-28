import React from 'react';
import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/templates/ServiceDetailTemplate';
import { Building2, Home, HardHat, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: '3D Architectural Rendering Services | Photorealistic Visuals | Bid Dimensions',
  description:
    'Photorealistic 3D architectural rendering services. Exterior building renders, interior design visuals, 360 virtual tours, and cinematic animations.',
  keywords: [
    '3D architectural rendering',
    'photorealistic exterior rendering',
    'interior 3D rendering',
    '3D floor plans',
    'architectural visualization',
    'virtual tour 360 rendering',
  ],
  alternates: {
    canonical: 'https://biddimensions.us/services/rendering-services',
  },
  openGraph: {
    title: '3D Architectural Rendering Services | Photorealistic Visuals',
    description:
      'Photorealistic 3D architectural rendering services. 7-14 day turnaround, 50-state coverage.',
    url: 'https://biddimensions.us/services/rendering-services',
    images: [{ url: '/images/service-thumb-rendering.jpg', width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: '3D Architectural Rendering & Visualization',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bid Dimensions',
    url: 'https://biddimensions.us',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Professional 3D architectural rendering, exterior building visualization, photorealistic interior renders, 3D floor plans, and animation walkthroughs.',
};

export default function RenderingServicesPage() {
  return (
    <ServiceDetailTemplate
      serviceSlug="rendering-services"
      title="3D Rendering & Visualization"
      heroSubtitle="High-quality architectural renderings that bring designs to life, helping clients, developers, and project teams visualize the finished space before construction begins."
      heroImage="/images/hero-rendering-bg.jpg"
      overview={{
        paragraph1:
          'We create realistic 3D visuals that communicate the design, materials, finishes, lighting, and overall appearance of a project before it is built.',
        paragraph2:
          'Our renderings help clients review design concepts, make informed decisions, present projects to stakeholders, and market properties with confidence.',
      }}
      targetAudiences={[
        {
          iconName: 'briefcase',
          title: 'Developers',
          text: 'Showcase proposed developments through realistic visuals for presentations, approvals, leasing, and marketing.',
        },
        {
          iconName: 'home',
          title: 'Architects & Designers',
          text: 'Present design concepts, materials, finishes, lighting, and spatial layouts clearly to clients.',
        },
        {
          iconName: 'hardhat',
          title: 'Contractors',
          text: 'Use visualizations to communicate design intent and help clients understand the finished project.',
        },
        {
          iconName: 'building',
          title: 'Property Owners',
          text: 'Visualize renovations, additions, interiors, and exterior improvements before construction begins.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: 'Project Review',
          text: 'Review drawings, 3D models, specifications, materials, and project requirements.',
        },
        {
          number: 2,
          title: '3D Development',
          text: 'Build or refine the 3D model based on the approved design.',
        },
        {
          number: 3,
          title: 'Materials & Finishes',
          text: 'Apply realistic materials, textures, colors, fixtures, and finishes.',
        },
        {
          number: 4,
          title: 'Lighting & Environment',
          text: 'Develop interior or exterior lighting, landscaping, surroundings, and other visual elements.',
        },
        {
          number: 5,
          title: 'Preview & Review',
          text: 'Provide draft views for camera angles, materials, and overall presentation.',
        },
        {
          number: 6,
          title: 'Final Rendering',
          text: 'Produce high-resolution final images and animations in the required format.',
        },
      ]}
      deliverables={[
        'Exterior 3D Renderings',
        'Interior 3D Renderings',
        'Architectural Visualization',
        '3D Walkthroughs',
        'Video Animations',
        'Aerial / Site Renderings',
        '360° Panoramic Views',
        'Marketing Renderings',
        'Conceptual 3D Visualization',
      ]}
      softwareList={[
        'Lumion',
        'Enscape',
        'SketchUp',
        '3ds Max',
        'V-Ray',
        'Adobe Photoshop',
        'Adobe Premiere Pro',
      ]}
      faqs={[
        {
          question: 'Can you create renderings from 2D drawings?',
          answer:
            'Yes. We can develop 3D visualizations from floor plans, elevations, CAD drawings, PDFs, sketches, or existing 3D models.',
        },
        {
          question: 'Do you provide both interior and exterior renderings?',
          answer:
            'Yes. We create realistic visualizations for residential, commercial, and industrial interiors and exteriors.',
        },
        {
          question: 'Can you match specific materials and finishes?',
          answer:
            'Yes. We can incorporate selected materials, colors, finishes, fixtures, furniture, landscaping, and other design elements.',
        },
        {
          question: 'Can you create walkthrough videos?',
          answer:
            'Yes. We can produce animated walkthroughs that allow viewers to experience the proposed space from different perspectives.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
