import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#F8FAFC',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://biddimensions.us'),
  title: {
    default: 'Bid Dimensions | Engineering & Design Services',
    template: '%s | Bid Dimensions',
  },
  description:
    'Full-service structural engineering, architectural design, and MEP services. PE-stamped drawings, 24-48h turnaround. Get your free quote today.',
  keywords: [
    'structural engineering',
    'architectural design',
    'MEP engineering',
    'PE stamped drawings',
    'construction documentation',
    'foundation design',
    'framing plans',
  ],
  authors: [{ name: 'Bid Dimensions' }],
  creator: 'Bid Dimensions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://biddimensions.us',
    siteName: 'Bid Dimensions',
    title: 'Bid Dimensions | Engineering & Design Services',
    description:
      'Full-service structural engineering, architectural design, and MEP services. PE-stamped drawings, 24-48h turnaround.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bid Dimensions — Engineering & Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bid Dimensions | Engineering & Design Services',
    description:
      'Full-service structural engineering, architectural design, and MEP services. PE-stamped drawings, 24-48h turnaround.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://biddimensions.us',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bid Dimensions',
  url: 'https://biddimensions.us',
  logo: 'https://biddimensions.us/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-747-223-7815',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://linkedin.com/company/biddimensions',
    'https://instagram.com/biddimensions',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Bid Dimensions',
  image: 'https://biddimensions.us/hero-image.jpg',
  '@id': 'https://biddimensions.us',
  url: 'https://biddimensions.us',
  telephone: '+1-747-223-7815',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-white text-bd-charcoal antialiased min-h-screen flex flex-col selection:bg-bd-blue selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-bd-blue focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
