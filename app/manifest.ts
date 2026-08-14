import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bid Dimensions — Engineering & Design Services',
    short_name: 'Bid Dimensions',
    description:
      'Licensed structural engineering, architectural design, MEP engineering, and construction cost estimation services. PE stamped permit drawings nationwide.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1B2E',
    theme_color: '#0B1B2E',
    icons: [
      {
        src: '/images/logo-dark-bg.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo-dark-bg.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
