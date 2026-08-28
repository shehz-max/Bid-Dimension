'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Phone, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bd-navy-deep text-bd-text-light pt-16 pb-8 border-t border-bd-border-dark relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-bd-blue/15">
          {/* Col 1: Clean Brand & PE Badge (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <img
                src="/images/logo-dark-bg.png"
                alt="Bid Dimensions Engineering Logo"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-bd-blue transition-colors">
                BID DIMENSIONS
              </span>
            </Link>
            <p className="font-body text-xs text-bd-text-muted leading-relaxed">
              Licensed Structural Engineering & Multidisciplinary Building Design.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase font-semibold text-bd-blue bg-bd-navy border border-bd-blue/30 px-2.5 py-1">
              <ShieldCheck className="w-3.5 h-3.5 text-bd-blue" />
              <span>PE STAMP LICENSED IN ALL 50 STATES</span>
            </div>
          </div>

          {/* Col 2: Services (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-bd-blue font-semibold">Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-bd-text-muted">
              <li>
                <Link href="/services/structural-engineering" className="hover:text-bd-blue transition-colors">
                  Structural Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/architectural-design" className="hover:text-bd-blue transition-colors">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link href="/services/mep-engineering" className="hover:text-bd-blue transition-colors">
                  MEP Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/bim-cad-services" className="hover:text-bd-blue transition-colors">
                  BIM & CAD Services
                </Link>
              </li>
              <li>
                <Link href="/services/rendering-services" className="hover:text-bd-blue transition-colors">
                  3D Rendering Services
                </Link>
              </li>
              <li>
                <Link href="/services/estimation" className="hover:text-bd-blue transition-colors">
                  Estimation & Takeoffs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-bd-blue font-semibold">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-bd-text-muted">
              <li>
                <Link href="/projects" className="hover:text-bd-blue transition-colors">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-bd-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-bd-blue transition-colors">
                  Technical Journal
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-bd-blue transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bd-blue transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Instant Action (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-bd-blue font-semibold">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-bd-text-muted">
              <a href="tel:7472237815" className="flex items-center gap-2 hover:text-bd-blue transition-colors">
                <Phone className="w-4 h-4 text-bd-blue shrink-0" />
                <span>(747) 223-7815</span>
              </a>
              <a href="mailto:info@biddimensions.us" className="flex items-center gap-2 hover:text-bd-blue transition-colors">
                <Mail className="w-4 h-4 text-bd-blue shrink-0" />
                <span>info@biddimensions.us</span>
              </a>
              <div className="flex items-center gap-2 text-xs">
                <Clock className="w-4 h-4 text-bd-blue shrink-0" />
                <span>Mon–Fri, 9am–6pm PST</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-bd-blue hover:text-white transition-colors mt-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bd-text-muted">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} BID DIMENSIONS LLC. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-bd-blue transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-bd-blue transition-colors">
              Terms and Conditions
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-bd-text-light hover:text-bd-blue transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-bd-blue" />
          </button>
        </div>
      </div>
    </footer>
  );
};
