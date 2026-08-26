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
      heroSubtitle="Photorealistic 3D exterior building renders, interior design visualizations, 360-degree virtual tours, and site animations for developers and investors."
      heroImage="/images/service-thumb-rendering.jpg"
      overview={{
        paragraph1:
          'We craft photorealistic 3D architectural renderings, interior visual experiences, and cinematic walkthroughs that help developers, architects, and builders secure investment, city approvals, and pre-sales.',
        paragraph2:
          'Using advanced ray-tracing lighting engines, physically accurate materials, and detailed environmental staging, we turn CAD/Revit drawing sets into marketing-grade visual assets.',
      }}
      targetAudiences={[
        {
          iconName: 'building',
          title: 'Real Estate Developers',
          text: 'Need striking marketing imagery and virtual tours to pre-lease commercial spaces and sell residential units.',
        },
        {
          iconName: 'home',
          title: 'Architects & Interior Designers',
          text: 'Require accurate lighting studies, material finish evaluations, and design presentation visuals for clients.',
        },
        {
          iconName: 'hardhat',
          title: 'General Contractors & Builders',
          text: 'Looking to present clear visual design intent to homeowners and commercial clients before construction starts.',
        },
        {
          iconName: 'briefcase',
          title: 'Marketing & Sales Agencies',
          text: 'Seeking ultra-high-resolution 4K/8K imagery for billboards, brochures, and digital campaigns.',
        },
      ]}
      processSteps={[
        {
          number: 1,
          title: '3D Model & Camera Setup',
          text: 'Import CAD/Revit models and configure cinematic camera angles, focal lengths, and compositions.',
        },
        {
          number: 2,
          title: 'Material & Texture Application',
          text: 'Apply physically accurate architectural materials including glass, concrete, wood grains, and metals.',
        },
        {
          number: 3,
          title: 'Lighting & Environmental Staging',
          text: 'Configure realistic sunlight, interior fixture illumination, golden hour atmosphere, and surrounding landscape.',
        },
        {
          number: 4,
          title: 'Draft Preview Review',
          text: 'Provide preliminary watermarked render proofs for client angle and material feedback.',
        },
        {
          number: 5,
          title: 'High-Resolution Final Render',
          text: 'Render high-fidelity passes in 4K/8K with ray-traced reflections and Global Illumination (GI).',
        },
        {
          number: 6,
          title: 'Post-Processing & Delivery',
          text: 'Perform color grading, lens flare adjustments, and deliver print-ready and web-ready image packages.',
        },
      ]}
      deliverables={[
        'Photorealistic Exterior 3D Renderings (4K)',
        'Interior Design & Lighting Visualizations',
        '360-Degree Interactive Virtual Tours',
        'Architectural Video Walkthrough Animations',
        'Site Plan & Landscape Staging Renders',
        'Cutaway 3D Floor Plan Views',
        'Material Option Comparison Renders',
        'Marketing Package High-Res Image Sets',
      ]}
      softwareList={[
        '3ds Max',
        'V-Ray',
        'Corona Renderer',
        'Lumion 3D',
        'Unreal Engine 5',
        'Autodesk Revit',
        'Adobe Photoshop',
      ]}
      faqs={[
        {
          question: 'What files do I need to supply to get a 3D rendering?',
          answer:
            'You can send us Revit models, 2D AutoCAD DWG drawings, PDF blueprints, or hand sketches along with any preferred material finishes and reference photos.',
        },
        {
          question: 'How fast can you deliver final 3D renderings?',
          answer:
            'Standard static 4K renders and animations are delivered within 7 to 14 days depending on project scale and architectural complexity.',
        },
        {
          question: 'Can you render both daytime and nighttime/twilight lighting scenarios?',
          answer:
            'Yes. We offer daytime sun, golden hour dusk/twilight, and dramatic nighttime architectural illumination options.',
        },
      ]}
      jsonLdSchema={serviceSchema}
    />
  );
}
