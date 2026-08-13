'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/organisms/Hero';
import { FEATURED_PROJECTS, ProjectCaseStudy } from '@/lib/data';
import { FadeInUp } from '@/components/animation/FadeInUp';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { Button } from '@/components/atoms/Button';
import { CheckCircle2, ShieldCheck, Layers, ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'All' | 'Structural' | 'Architectural' | 'MEP' | 'Estimation'>('All');

  const filteredProjects = filter === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero
        variant="page"
        headline="Featured Engineering & Design Case Studies"
        subheadline="Explore our technical case studies, 3D Revit models, and PE-stamped permit drawing sets across commercial, residential, and industrial projects."
        cta={{ text: 'Request a Project Estimate', href: '/contact' }}
        hudBadge={{ label: 'CASE STUDY STATUS', spec: '100% CITY PERMIT APPROVED' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Projects & Portfolio', href: '/projects' },
        ]}
      />

      {/* Projects Grid Section */}
      <section className="py-20 bg-bd-navy-deep blueprint-grid border-b border-bd-border-dark text-white relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {['All', 'Structural', 'Architectural', 'MEP', 'Estimation'].map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    isActive
                      ? 'bg-bd-blue text-bd-navy-deep border-bd-blue shadow-glow-blue scale-105'
                      : 'bg-bd-navy/70 text-bd-text-light border-bd-blue/20 hover:border-bd-blue/60 hover:text-white'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${FEATURED_PROJECTS.length})` : ''}
                </button>
              );
            })}
          </div>

          {/* Filtered Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-bd-navy/80 border border-bd-blue/30 hover:border-bd-blue backdrop-blur-md p-6 shadow-glow-blue flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] uppercase font-bold text-bd-blue bg-bd-blue/10 px-2.5 py-1 border border-bd-blue/30">
                        {project.category.toUpperCase()} // {project.buildingType.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-1 font-mono text-[10px] text-bd-blue font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{project.turnaround} TURNAROUND</span>
                      </div>
                    </div>

                    {/* Image Preview */}
                    <div className="relative overflow-hidden border border-bd-blue/20 mb-6 bg-black/40 min-h-[220px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-1 bg-bd-navy/90 border border-bd-blue/30 font-mono text-[10px] text-bd-text-muted">
                        LOCATION: {project.location.toUpperCase()}
                      </div>
                      <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-bd-navy/90 border border-bd-blue/30 font-mono text-[10px] text-bd-blue font-bold">
                        SQFT: {project.sqft}
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-bd-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body text-xs text-bd-text-muted leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Highlights Checklist */}
                    <div className="flex flex-col gap-2 mb-6 pt-4 border-t border-bd-blue/20">
                      <span className="font-mono text-[10px] text-bd-blue font-bold uppercase tracking-wider">
                        Engineering Accomplishments:
                      </span>
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 font-body text-xs text-bd-text-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-bd-blue shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Sheet Tags */}
                  <div className="pt-4 border-t border-bd-blue/20 flex flex-wrap gap-2">
                    {project.deliverables.map((d, i) => (
                      <span key={i} className="font-mono text-[9px] text-bd-text-muted bg-bd-navy-deep px-2 py-0.5 border border-bd-blue/20">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-bd-charcoal text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-3 block">
            READY TO BUILD YOUR VISION?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-48px text-bd-charcoal mb-4">
            Have a Similar Building Project?
          </h2>
          <p className="font-body text-base text-bd-gray mb-8">
            Upload your plans today for a fast 24h PE-stamped engineering proposal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Upload Plans for Quote
            </Button>
            <a
              href="tel:7472237815"
              className="flex items-center gap-2 font-mono text-sm text-bd-navy hover:text-bd-blue transition-colors font-semibold"
            >
              <Phone className="w-4 h-4 text-bd-blue" />
              <span>Call (747) 223-7815</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
