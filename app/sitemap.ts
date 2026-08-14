import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://biddimensions.us';

  // Static routes
  const routes = [
    '',
    '/services/structural-engineering',
    '/services/architectural-design',
    '/services/mep-engineering',
    '/services/estimation',
    '/projects',
    '/about',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route.startsWith('/services/') ? 0.9 : 0.8,
  }));

  // Dynamic Blog Post routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
