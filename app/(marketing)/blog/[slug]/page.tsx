import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Hero } from '@/components/organisms/Hero';
import { BLOG_POSTS } from '@/lib/data';
import { Button } from '@/components/atoms/Button';
import { Clock, Calendar, ArrowLeft, ArrowRight, Tag } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Bid Dimensions Journal`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://biddimensions.us/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `https://biddimensions.us/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Bid Dimensions PE Engineering Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bid Dimensions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://biddimensions.us/logo-dark-bg.png',
      },
    },
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <Hero
        variant="page"
        headline={post.title}
        subheadline={post.excerpt}
        hudBadge={{ label: 'ARTICLE CATEGORY', spec: post.category.toUpperCase() }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.category, href: '/blog' },
        ]}
      />

      {/* Main Article Body */}
      <section className="py-20 bg-white text-bd-charcoal">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          {/* Back Button & Author Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase text-bd-blue hover:text-bd-navy transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            <div className="flex items-center gap-4 font-mono text-xs text-bd-gray">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-bd-blue" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-bd-blue" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Text Content */}
          <div className="prose prose-lg max-w-none text-bd-charcoal font-body leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3
                    key={index}
                    className="font-display font-bold text-2xl text-bd-navy mt-10 mb-4 pt-4 border-t border-gray-100"
                  >
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }

              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n- ');
                return (
                  <ul key={index} className="my-6 space-y-2 pl-4 list-disc text-bd-gray">
                    {items.map((item, i) => (
                      <li key={i} className="text-base">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (paragraph.startsWith('1. ')) {
                return (
                  <h3
                    key={index}
                    className="font-display font-bold text-2xl text-bd-navy mt-8 mb-3"
                  >
                    {paragraph}
                  </h3>
                );
              }

              return (
                <p key={index} className="text-base sm:text-lg text-bd-gray mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Keywords & Author Bio Box */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Tag className="w-4 h-4 text-bd-blue" />
              {post.keywords.map((kw) => (
                <span key={kw} className="font-mono text-xs text-bd-navy bg-bd-surface-light px-3 py-1 border border-gray-200">
                  #{kw}
                </span>
              ))}
            </div>

            <div className="p-8 bg-bd-surface-light border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 bg-bd-navy text-white flex items-center justify-center font-mono font-bold text-lg shrink-0">
                BD
              </div>
              <div>
                <span className="font-mono text-xs text-bd-blue uppercase font-bold tracking-wider block mb-1">
                  WRITTEN BY {post.author.name.toUpperCase()}
                </span>
                <p className="font-body text-xs text-bd-gray leading-relaxed">
                  Bid Dimensions is a multidisciplinary engineering and design firm specializing in PE-stamped structural calculations, Revit 3D BIM coordination, and 24-48 hour permit drawing packages nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {otherPosts.length > 0 && (
        <section className="py-20 bg-bd-surface-light text-bd-charcoal border-t border-gray-200">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-display font-bold text-2xl text-bd-navy">
                Related Technical Articles
              </h3>
              <Link href="/blog" className="font-mono text-xs font-semibold text-bd-blue hover:text-bd-navy">
                View All Journal Posts →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.slice(0, 2).map((rel) => (
                <div key={rel.slug} className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-bd-blue bg-bd-blue/10 px-2 py-0.5 mb-3 inline-block">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-bold text-xl text-bd-navy mb-2">
                      <Link href={`/blog/${rel.slug}`} className="hover:text-bd-blue transition-colors">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="font-body text-xs text-bd-gray line-clamp-2 mb-4">
                      {rel.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="font-mono text-xs text-bd-blue font-semibold flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-bd-navy-deep blueprint-grid border-t border-bd-border-dark text-center text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-48px text-white mb-4">
            Ready to Start Your Engineering Project?
          </h2>
          <p className="font-body text-base text-bd-text-muted mb-8">
            Upload your plans today for a fast 24h PE-stamped engineering proposal.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Request Your Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
