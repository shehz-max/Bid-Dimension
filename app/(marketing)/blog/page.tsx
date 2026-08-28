'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Hero } from '@/components/organisms/Hero';
import { BLOG_POSTS, BlogPost } from '@/lib/data';
import { Button } from '@/components/atoms/Button';
import { ArrowRight, BookOpen, Clock, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogDirectoryPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Permit Guidelines', 'Engineering Standards', 'BIM & Technology'];

  const filteredPosts = filter === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === filter);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero
        variant="page"
        headline="Engineering & Building Code Journal"
        subheadline="Technical insights, PE stamping guidelines, Revit BIM best practices, and city permit approval strategies for contractors, architects, and developers."
        cta={{ text: 'Subscribe to Technical Journal', href: '#journal-list' }}
      />

      {/* Blog List Section */}
      <section id="journal-list" className="py-20 bg-bd-surface-light text-bd-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    isActive
                      ? 'bg-bd-navy text-white border-bd-navy shadow-md scale-105'
                      : 'bg-white text-bd-navy border-gray-200 hover:border-bd-blue hover:text-bd-blue'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${BLOG_POSTS.length})` : ''}
                </button>
              );
            })}
          </div>

          {/* Posts Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-bd-blue/60 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-bd-blue bg-bd-blue/10 px-2.5 py-1 border border-bd-blue/20">
                        {post.category}
                      </span>
                      <span className="font-mono text-xs text-bd-gray flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-bd-blue" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-xl text-bd-navy mb-3 group-hover:text-bd-blue transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="font-body text-xs text-bd-gray leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-bd-gray">
                      <Calendar className="w-3.5 h-3.5 text-bd-blue" />
                      <span>{post.publishedAt}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-mono text-xs font-semibold uppercase text-bd-blue hover:text-bd-navy transition-colors flex items-center gap-1"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8FAFC] border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="bg-white p-8 sm:p-12 border border-gray-200 shadow-sm rounded-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-navy mb-4">
              Have a Specific Engineering Question?
            </h2>
            <p className="font-body text-base text-bd-gray mb-8">
              Upload your plans today for a fast 7-14 day PE-stamped engineering proposal.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Request an Engineering Proposal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
