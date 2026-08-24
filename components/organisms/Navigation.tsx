'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, HardHat, Compass, Cpu, Calculator, FolderGit2, BookOpen, Info } from 'lucide-react';

interface NavigationProps {
  transparent?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ transparent = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or Escape key press
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const isTransparent = transparent && !scrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isTransparent ? 'bg-transparent' : 'bg-bd-navy-deep/95 backdrop-blur-md border-b border-bd-blue/20 shadow-xl'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Official Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo-dark-bg.png"
            alt="Bid Dimensions Engineering Logo"
            className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(74,138,184,0.3)]"
          />
          <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-bd-blue transition-colors">
            BID DIMENSIONS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-label="Toggle engineering services menu"
              className="flex items-center gap-1 text-bd-text-light hover:text-bd-blue py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-bd-blue"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-bd-blue' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-bd-navy-deep/95 backdrop-blur-lg p-3 shadow-2xl border border-bd-blue/30 flex flex-col gap-1 z-50 rounded-none animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  href="/services/structural-engineering"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2.5 hover:bg-bd-navy transition-colors border border-transparent hover:border-bd-blue/30"
                >
                  <div className="p-2 bg-bd-blue/10 border border-bd-blue/20 text-bd-blue group-hover:bg-bd-blue group-hover:text-bd-navy transition-all shrink-0">
                    <HardHat className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-white group-hover:text-bd-blue transition-colors">
                      Structural Engineering
                    </span>
                    <span className="font-body text-[11px] text-bd-text-muted">
                      PE calculations, framing & foundations
                    </span>
                  </div>
                </Link>

                <Link
                  href="/services/architectural-design"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2.5 hover:bg-bd-navy transition-colors border border-transparent hover:border-bd-blue/30"
                >
                  <div className="p-2 bg-bd-blue/10 border border-bd-blue/20 text-bd-blue group-hover:bg-bd-blue group-hover:text-bd-navy transition-all shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-white group-hover:text-bd-blue transition-colors">
                      Architectural Design
                    </span>
                    <span className="font-body text-[11px] text-bd-text-muted">
                      Permit floor plans & Revit 3D BIM
                    </span>
                  </div>
                </Link>

                <Link
                  href="/services/mep-engineering"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2.5 hover:bg-bd-navy transition-colors border border-transparent hover:border-bd-blue/30"
                >
                  <div className="p-2 bg-bd-blue/10 border border-bd-blue/20 text-bd-blue group-hover:bg-bd-blue group-hover:text-bd-navy transition-all shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-white group-hover:text-bd-blue transition-colors">
                      MEP Engineering
                    </span>
                    <span className="font-body text-[11px] text-bd-text-muted">
                      HVAC, electrical, plumbing & Title 24
                    </span>
                  </div>
                </Link>

                <Link
                  href="/services/estimation"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2.5 hover:bg-bd-navy transition-colors border border-transparent hover:border-bd-blue/30"
                >
                  <div className="p-2 bg-bd-blue/10 border border-bd-blue/20 text-bd-blue group-hover:bg-bd-blue group-hover:text-bd-navy transition-all shrink-0">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-white group-hover:text-bd-blue transition-colors">
                      Estimation Services
                    </span>
                    <span className="font-body text-[11px] text-bd-text-muted">
                      PlanSwift quantity takeoffs & bid calcs
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/projects" className="text-bd-text-light hover:text-bd-blue transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-bd-text-light hover:text-bd-blue transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="text-bd-text-light hover:text-bd-blue transition-colors">
            Journal
          </Link>
          <Link href="/#process" className="text-bd-text-light hover:text-bd-blue transition-colors">
            Process
          </Link>
          <Link href="/contact" className="text-bd-text-light hover:text-bd-blue transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA & Phone */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:7472237815"
            className="flex items-center gap-2 text-sm font-mono text-bd-text-muted hover:text-bd-blue transition-colors group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bd-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-bd-blue"></span>
            </span>
            <Phone className="w-4 h-4 text-bd-blue group-hover:scale-110 transition-transform" />
            <span>(747) 223-7815</span>
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-bd-navy hover:bg-bd-blue text-white font-display font-semibold text-sm transition-all shadow-glow-blue border border-bd-blue/40 hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-bd-text-light hover:text-bd-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-bd-blue"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-bd-navy-deep blueprint-grid z-40 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-white">
          <div className="flex flex-col gap-5">
            <div className="text-bd-blue font-mono text-xs uppercase tracking-widest border-b border-bd-border-dark pb-2">
              Navigation
            </div>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-bd-blue"
            >
              Home
            </Link>
            <div className="flex flex-col gap-2.5 pl-4 border-l border-bd-border-dark">
              <span className="text-[11px] font-mono text-bd-text-muted uppercase">Services</span>
              <Link
                href="/services/structural-engineering"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-bd-text-light hover:text-bd-blue flex items-center gap-2"
              >
                <HardHat className="w-4 h-4 text-bd-blue" />
                <span>Structural Engineering</span>
              </Link>
              <Link
                href="/services/architectural-design"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-bd-text-light hover:text-bd-blue flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-bd-blue" />
                <span>Architectural Design</span>
              </Link>
              <Link
                href="/services/mep-engineering"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-bd-text-light hover:text-bd-blue flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-bd-blue" />
                <span>MEP Engineering</span>
              </Link>
              <Link
                href="/services/estimation"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-bd-text-light hover:text-bd-blue flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-bd-blue" />
                <span>Estimation Services</span>
              </Link>
            </div>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-bd-blue flex items-center gap-2"
            >
              <FolderGit2 className="w-5 h-5 text-bd-blue" />
              <span>Projects Portfolio</span>
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-bd-blue flex items-center gap-2"
            >
              <Info className="w-5 h-5 text-bd-blue" />
              <span>About Us</span>
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-bd-blue flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5 text-bd-blue" />
              <span>Journal & Articles</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-bd-blue"
            >
              Contact
            </Link>
          </div>

          <div className="pt-6 border-t border-bd-border-dark flex flex-col gap-3">
            <a
              href="tel:7472237815"
              className="flex items-center gap-3 text-base font-mono text-bd-blue font-semibold"
            >
              <Phone className="w-5 h-5" />
              (747) 223-7815
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-bd-blue text-center text-bd-navy-deep font-bold text-sm shadow-glow-blue uppercase tracking-wider"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
