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
      <section className="py-20 bg-[#F8FAFC] border-b border-gray-200 text-bd-navy relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {['All', 'Structural', 'Architectural', 'MEP', 'Estimation'].map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 border rounded-lg ${
                    isActive
                      ? 'bg-bd-navy text-white border-bd-navy shadow-md scale-105'
                      : 'bg-white text-bd-navy border-gray-200 hover:border-bd-blue hover:text-bd-blue shadow-xs'
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
                  className="group bg-white border border-gray-200 hover:border-bd-blue/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Image Preview with Badges */}
                    <div className="relative overflow-hidden bg-gray-100 min-h-[220px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md border border-gray-200 font-mono text-[10px] text-bd-navy font-semibold rounded-md shadow-xs">
                        LOCATION: {project.location.toUpperCase()}
                      </div>
                      <div className="absolute bottom-3 right-3 px-3 py-1 bg-white/95 backdrop-blur-md border border-gray-200 font-mono text-[10px] text-bd-blue font-bold rounded-md shadow-xs">
                        SQFT: {project.sqft}
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      {/* Top Metadata */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] uppercase font-bold text-bd-blue bg-[#EBF3FA] px-2.5 py-1 border border-[#4A8AB8]/30 rounded-md">
                          {project.category.toUpperCase()} // {project.buildingType.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 font-mono text-[10px] text-bd-navy font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-bd-blue" />
                          <span>{project.turnaround} TURNAROUND</span>
                        </div>
                      </div>

                      {/* Title & Summary */}
                      <h3 className="font-display font-bold text-2xl text-bd-navy mb-2 group-hover:text-bd-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-body text-sm text-bd-gray leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Highlights Checklist */}
                      <div className="flex flex-col gap-2 mb-6 pt-4 border-t border-gray-100">
                        <span className="font-mono text-[10px] text-bd-blue font-bold uppercase tracking-wider">
                          Engineering Accomplishments:
                        </span>
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 font-body text-xs text-bd-charcoal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-bd-blue shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Deliverables Sheet Tags */}
                  <div className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
                    {project.deliverables.map((d, i) => (
                      <span key={i} className="font-mono text-[10px] text-bd-navy bg-[#F8FAFC] px-2.5 py-1 border border-gray-200 rounded-md font-medium">
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
