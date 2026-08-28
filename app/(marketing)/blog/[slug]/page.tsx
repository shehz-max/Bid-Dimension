import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, BlogPost } from '@/lib/data';
import { CtaBanner } from '@/components/organisms/CtaBanner';
import { Button } from '@/components/atoms/Button';
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Tag,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Share2,
  Bookmark,
  Layers,
  ChevronRight,
} from 'lucide-react';

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
      images: [{ url: '/images/arch-elev-spec.jpg', width: 1200, height: 630 }],
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

  // Map category to featured visual asset
  const categoryHeaderImageMap: Record<string, string> = {
    'Permit Guidelines': '/images/arch-elev-spec.jpg',
    'Engineering Standards': '/images/struct-hero-spec.jpg',
    'BIM & Technology': '/images/mep-clash-spec.jpg',
  };

  const headerImage = categoryHeaderImageMap[post.category] || '/images/arch-elev-spec.jpg';

  // Extract table of contents headings from content
  const headings = post.content
    .split('\n\n')
    .filter((p) => p.startsWith('### '))
    .map((h) => h.replace('### ', ''));

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Header Visual Banner */}
      <section className="relative pt-32 pb-16 bg-[#F8FAFC] border-b border-gray-200 overflow-hidden text-bd-navy">
        {/* Background Image with Soft Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={headerImage}
            alt={post.title}
            className="w-full h-full object-cover filter contrast-105 opacity-15"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #F8FAFC 0%, #F8FAFC 45%, rgba(248, 250, 252, 0.7) 100%)',
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 font-mono text-xs text-bd-gray mb-6">
            <Link href="/" className="hover:text-bd-blue transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-bd-blue" />
            <Link href="/blog" className="hover:text-bd-blue transition-colors">
              Journal
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-bd-blue" />
            <span className="text-bd-navy font-semibold">{post.category}</span>
          </div>

          <div className="max-w-4xl">
            {/* Category Pill & Metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-bd-blue bg-[#EBF3FA] px-3 py-1 border border-[#4A8AB8]/30 rounded-md">
                {post.category}
              </span>
              <span className="font-mono text-xs text-bd-gray flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-bd-blue" />
                {post.publishedAt}
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-mono text-xs text-bd-gray flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-bd-blue" />
                {post.readTime}
              </span>
            </div>

            {/* Main Article Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-56px text-bd-navy leading-tight mb-6">
              {post.title}
            </h1>

            {/* Subheadline Excerpt */}
            <p className="font-body text-base sm:text-xl text-bd-gray leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Article Layout Section */}
      <section className="py-16 sm:py-20 bg-white text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            
            {/* LEFT COLUMN: Main Article Content (8 Columns) */}
            <main className="lg:col-span-8 flex flex-col">
              
              {/* Back to All Articles Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-bd-blue hover:text-bd-navy transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Journal Articles</span>
                </Link>
                <div className="flex items-center gap-2 font-mono text-xs text-bd-gray font-semibold">
                  <ShieldCheck className="w-4 h-4 text-bd-blue" />
                  <span>PE Verified Technical Guide</span>
                </div>
              </div>

              {/* Render Article Paragraphs & Callouts */}
              <div className="prose prose-lg max-w-none text-bd-charcoal font-body leading-relaxed">
                {post.content.split('\n\n').map((paragraph, index) => {
                  // Heading H3
                  if (paragraph.startsWith('### ')) {
                    const headingText = paragraph.replace('### ', '');
                    const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    return (
                      <div key={index} id={headingId} className="scroll-mt-28">
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-bd-navy mt-12 mb-4 pt-6 border-t border-gray-200 flex items-center gap-2">
                          <span className="w-2 h-6 bg-bd-blue inline-block shrink-0 rounded-full" />
                          <span>{headingText}</span>
                        </h2>
                      </div>
                    );
                  }

                  // Bullet Lists
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n- ');
                    return (
                      <div key={index} className="my-6 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl">
                        <ul className="space-y-3">
                          {items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-base text-bd-navy">
                              <CheckCircle2 className="w-5 h-5 text-bd-blue shrink-0 mt-0.5" />
                              <span>{item.replace('- ', '')}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  // Numbered Lists
                  if (paragraph.startsWith('1. ')) {
                    return (
                      <h3 key={index} className="font-display font-bold text-xl text-bd-navy mt-8 mb-3">
                        {paragraph}
                      </h3>
                    );
                  }

                  // Key Takeaway Callout Box for 2nd Paragraph
                  if (index === 1) {
                    return (
                      <div
                        key={index}
                        className="my-8 p-6 sm:p-7 bg-[#EBF3FA] text-bd-navy border-l-4 border-bd-blue rounded-r-xl border border-gray-200 border-l-0 shadow-xs"
                      >
                        <div className="flex items-center gap-2 font-mono text-xs text-bd-blue uppercase font-bold tracking-wider mb-2">
                          <Bookmark className="w-4 h-4 text-bd-blue" />
                          <span>KEY ENGINEERING TAKEAWAY</span>
                        </div>
                        <p className="font-body text-base text-bd-navy leading-relaxed font-medium">
                          {paragraph}
                        </p>
                      </div>
                    );
                  }

                  // First Paragraph: Drop-cap Styling
                  if (index === 0) {
                    return (
                      <p key={index} className="text-lg sm:text-xl text-bd-charcoal mb-6 leading-relaxed font-medium">
                        <span className="float-left text-5xl font-display font-bold text-bd-blue leading-none pr-3 pt-1">
                          {paragraph.charAt(0)}
                        </span>
                        {paragraph.slice(1)}
                      </p>
                    );
                  }

                  return (
                    <p key={index} className="text-base sm:text-lg text-bd-gray mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Keyword Tags Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <Tag className="w-4 h-4 text-bd-blue" />
                  {post.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="font-mono text-xs text-bd-navy bg-[#F8FAFC] px-3 py-1.5 border border-gray-200 font-semibold rounded-md"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>

                {/* Author & Reviewer Profile Card */}
                <div className="p-6 sm:p-8 bg-[#F8FAFC] border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#EBF3FA] border border-[#4A8AB8]/30 text-bd-blue flex items-center justify-center font-mono font-bold text-lg shrink-0 rounded-xl">
                      PE
                    </div>
                    <div>
                      <span className="font-mono text-xs text-bd-blue uppercase font-bold tracking-wider block mb-1">
                        AUTHOR & REVIEWER
                      </span>
                      <h4 className="font-display font-bold text-lg text-bd-navy mb-0.5">
                        {post.author.name}
                      </h4>
                      <p className="font-mono text-xs text-bd-gray">
                        {post.author.role} • Registered License #CA-76543
                      </p>
                    </div>
                  </div>

                  {/* Share Article Link */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`https://biddimensions.us/blog/${post.slug}`)}`}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg font-mono text-xs text-bd-navy hover:border-bd-blue hover:text-bd-blue transition-colors flex items-center gap-2 shadow-xs font-semibold"
                    >
                      <Share2 className="w-3.5 h-3.5 text-bd-blue" />
                      <span>Share Article</span>
                    </a>
                  </div>
                </div>
              </div>
            </main>

            {/* RIGHT COLUMN: Sticky Technical Sidebar (4 Columns) */}
            <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
              
              {/* 1. Table of Contents Card */}
              {headings.length > 0 && (
                <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 shadow-xs">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-bd-navy uppercase tracking-wider mb-4 border-b border-gray-200 pb-3">
                    <Layers className="w-4 h-4 text-bd-blue" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="flex flex-col gap-2.5">
                    {headings.map((h, i) => {
                      const id = h.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      return (
                        <a
                          key={i}
                          href={`#${id}`}
                          className="font-body text-xs font-semibold text-bd-navy hover:text-bd-blue transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-bd-blue group-hover:scale-125 transition-transform" />
                          <span>{i + 1}. {h}</span>
                        </a>
                      );
                    })}
                  </nav>
                </div>
              )}

              {/* 2. PE Stamp Engineering Oversight Card */}
              <div className="bg-[#EBF3FA] text-bd-navy p-6 border border-[#4A8AB8]/30 rounded-2xl shadow-xs flex flex-col gap-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-bd-blue uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-bd-blue" />
                  <span>PE CODE COMPLIANCE</span>
                </div>
                <h4 className="font-display font-bold text-lg text-bd-navy">
                  Permit Ready Standards
                </h4>
                <p className="font-body text-xs text-bd-gray leading-relaxed">
                  All structural, architectural, and MEP guidelines published by Bid Dimensions align with IBC 2024, ASCE 7-22, and state building department plan check standards.
                </p>
                <div className="pt-3 border-t border-[#4A8AB8]/20 font-mono text-[11px] text-bd-blue font-semibold">
                  50-State PE Registration Verified
                </div>
              </div>

              {/* 3. Quick Plan Check Proposal CTA Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4 text-bd-charcoal">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-bd-blue uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-bd-blue" />
                  <span>PERMIT PROPOSAL</span>
                </div>
                <h4 className="font-display font-bold text-xl text-bd-navy">
                  Need Drawings Prepared for Permit Approval?
                </h4>
                <p className="font-body text-xs text-bd-gray leading-relaxed">
                  Upload your project sketch or requirements today for a fast 7-14 day PE-stamped engineering proposal.
                </p>
                <Link
                  href="/contact"
                  className="w-full py-3 bg-bd-navy hover:bg-bd-blue text-white text-center font-display font-semibold text-xs rounded-lg transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 text-bd-blue" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles Carousel / Grid */}
      {otherPosts.length > 0 && (
        <section className="py-20 bg-[#F8FAFC] text-bd-charcoal border-t border-gray-200">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-bd-blue block mb-1">
                  CONTINUE READING
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-bd-navy">
                  Related Technical Articles
                </h3>
              </div>
              <Link href="/blog" className="font-mono text-xs font-semibold text-bd-blue hover:text-bd-navy transition-colors">
                View All Journal Posts →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.slice(0, 2).map((rel) => (
                <div key={rel.slug} className="bg-white p-7 border border-gray-200 rounded-2xl shadow-xs flex flex-col justify-between hover:border-bd-blue/50 hover:shadow-md transition-all">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-bd-blue bg-[#EBF3FA] px-2.5 py-1 mb-3 inline-block border border-[#4A8AB8]/30 rounded-md">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-bold text-xl text-bd-navy mb-2">
                      <Link href={`/blog/${rel.slug}`} className="hover:text-bd-blue transition-colors">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="font-body text-xs text-bd-gray line-clamp-2 mb-6 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="font-mono text-xs text-bd-gray font-semibold">{rel.publishedAt}</span>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="font-mono text-xs text-bd-blue font-semibold flex items-center gap-1 hover:text-bd-navy transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Universal Brand CTA Banner */}
      <CtaBanner />
    </div>
  );
}
