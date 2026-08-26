'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, HardHat, Compass, Cpu, Layers, Sparkles, Calculator, FolderGit2, BookOpen, Info } from 'lucide-react';

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-xs transition-all duration-300">
      {/* Top Utility Micro-Bar */}
      <div className="hidden lg:block bg-bd-navy text-white py-1.5 px-5 sm:px-8 lg:px-12 border-b border-[#1A3A5C]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-bd-blue font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-pulse" />
              50-STATE PE REGISTERED
            </span>
            <span className="text-white/30">•</span>
            <span className="text-bd-text-light font-medium">
              ISO 9001 QUALITY CERTIFIED & BONDED
            </span>
            <span className="text-white/30">•</span>
            <span className="text-bd-text-light">
              7–14 DAY PERMIT PACKAGE GUARANTEE
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:info@biddimensions.us"
              className="text-bd-text-light hover:text-bd-blue transition-colors"
            >
              info@biddimensions.us
            </a>
            <span className="text-white/30">•</span>
            <a
              href="tel:7472237815"
              className="text-bd-blue font-bold hover:text-white transition-colors"
            >
              Direct: (747) 223-7815
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        {/* Clean Header Logo: Logo Mark + BID DIMENSIONS Text ONLY (No Taglines) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 relative overflow-hidden shrink-0 flex items-center justify-center">
            <img
              src="/images/logo-light-bg.png"
              alt="Bid Dimensions Logo Mark"
              className="h-10 w-auto max-w-none object-cover object-left transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-bd-navy group-hover:text-bd-blue transition-colors">
            BID DIMENSIONS
          </span>
        </Link>

        {/* Desktop Nav with High Contrast Deep Navy Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-sm font-semibold">
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
              className="flex items-center gap-1 text-bd-navy hover:text-bd-blue px-3 py-1.5 rounded-lg hover:bg-[#EBF3FA] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-bd-blue"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-bd-blue' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-84 bg-white/98 backdrop-blur-xl p-3 shadow-2xl border border-gray-200 flex flex-col gap-1 z-50 rounded-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  href="/services/structural-engineering"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2 hover:bg-[#EBF3FA] rounded-lg transition-colors border border-transparent hover:border-[#4A8AB8]/30"
                >
                  <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-md transition-all shrink-0">
                    <HardHat className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-bd-navy group-hover:text-bd-blue transition-colors">
                      Structural Engineering
                    </span>
                    <span className="font-body text-[11px] text-bd-gray">
                      PE calculations, framing & foundations
                    </span>
                  </div>
                </Link>

                <Link
                  href="/services/architectural-design"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2 hover:bg-[#EBF3FA] rounded-lg transition-colors border border-transparent hover:border-[#4A8AB8]/30"
                >
                  <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-md transition-all shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-bd-navy group-hover:text-bd-blue transition-colors">
                      Architectural Design
                    </span>
                    <span className="font-body text-[11px] text-bd-gray">
                      Permit floor plans & Revit 3D BIM
                    </span>
                  </div>
                </Link>

                <Link
                  href="/services/mep-engineering"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2 hover:bg-[#EBF3FA] rounded-lg transition-colors border border-transparent hover:border-[#4A8AB8]/30"
                >
                  <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-md transition-all shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-bd-navy group-hover:text-bd-blue transition-colors">
                      MEP Engineering
                    </span>
                    <span className="font-body text-[11px] text-bd-gray">
                      HVAC, electrical, plumbing & Title 24
                    </span>
                  </div>
                </Link>

                <Link
                  href="/services/bim-cad-services"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2 hover:bg-[#EBF3FA] rounded-lg transition-colors border border-transparent hover:border-[#4A8AB8]/30"
                >
                  <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-md transition-all shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-bd-navy group-hover:text-bd-blue transition-colors">
                      BIM & CAD Services
                    </span>
                    <span className="font-body text-[11px] text-bd-gray">
                      Revit modeling & clash detection
                    </span>
                  </div>
                </Link>

                <Link
                  href="/services/rendering-services"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2 hover:bg-[#EBF3FA] rounded-lg transition-colors border border-transparent hover:border-[#4A8AB8]/30"
                >
                  <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-md transition-all shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-bd-navy group-hover:text-bd-blue transition-colors">
                      3D Rendering Services
                    </span>
                    <span className="font-body text-[11px] text-bd-gray">
                      Realistic 3D interior & exterior visuals
                    </span>
                  </div>
                </Link>

                <Link
                  href="/services/estimation"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-start gap-3 p-2 hover:bg-[#EBF3FA] rounded-lg transition-colors border border-transparent hover:border-[#4A8AB8]/30"
                >
                  <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-md transition-all shrink-0">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-bd-navy group-hover:text-bd-blue transition-colors">
                      Estimation & Takeoffs
                    </span>
                    <span className="font-body text-[11px] text-bd-gray">
                      PlanSwift quantity takeoffs & bid calcs
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/projects" className="text-bd-navy hover:text-bd-blue px-3 py-1.5 rounded-lg hover:bg-[#EBF3FA] transition-all">
            Projects
          </Link>
          <Link href="/about" className="text-bd-navy hover:text-bd-blue px-3 py-1.5 rounded-lg hover:bg-[#EBF3FA] transition-all">
            About Us
          </Link>
          <Link href="/blog" className="text-bd-navy hover:text-bd-blue px-3 py-1.5 rounded-lg hover:bg-[#EBF3FA] transition-all">
            Journal
          </Link>
          <Link href="/#process" className="text-bd-navy hover:text-bd-blue px-3 py-1.5 rounded-lg hover:bg-[#EBF3FA] transition-all">
            Process
          </Link>
          <Link href="/contact" className="text-bd-navy hover:text-bd-blue px-3 py-1.5 rounded-lg hover:bg-[#EBF3FA] transition-all">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA & Phone */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:7472237815"
            className="flex items-center gap-2 text-sm font-mono font-semibold text-bd-navy hover:text-bd-blue transition-colors group"
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
            className="px-5 py-2.5 bg-bd-navy hover:bg-bd-blue text-white font-display font-semibold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 rounded-lg border border-bd-navy hover:border-bd-blue"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-bd-navy hover:text-bd-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-bd-blue"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white/98 backdrop-blur-xl z-40 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-bd-navy border-t border-gray-200">
          <div className="flex flex-col gap-4">
            <div className="text-bd-blue font-mono text-xs uppercase tracking-widest border-b border-gray-200 pb-2">
              Navigation
            </div>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display font-bold text-bd-navy hover:text-bd-blue"
            >
              Home
            </Link>
            <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#EBF3FA]">
              <span className="text-[11px] font-mono text-bd-gray uppercase font-semibold">Services</span>
              <Link
                href="/services/structural-engineering"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2"
              >
                <HardHat className="w-4 h-4 text-bd-blue" />
                <span>Structural Engineering</span>
              </Link>
              <Link
                href="/services/architectural-design"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-bd-blue" />
                <span>Architectural Design</span>
              </Link>
              <Link
                href="/services/mep-engineering"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-bd-blue" />
                <span>MEP Engineering</span>
              </Link>
              <Link
                href="/services/bim-cad-services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-bd-blue" />
                <span>BIM & CAD Services</span>
              </Link>
              <Link
                href="/services/rendering-services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-bd-blue" />
                <span>3D Rendering Services</span>
              </Link>
              <Link
                href="/services/estimation"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-bd-blue" />
                <span>Estimation & Takeoffs</span>
              </Link>
            </div>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display font-bold text-bd-navy hover:text-bd-blue flex items-center gap-2"
            >
              <FolderGit2 className="w-5 h-5 text-bd-blue" />
              <span>Projects Portfolio</span>
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display font-bold text-bd-navy hover:text-bd-blue flex items-center gap-2"
            >
              <Info className="w-5 h-5 text-bd-blue" />
              <span>About Us</span>
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display font-bold text-bd-navy hover:text-bd-blue flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5 text-bd-blue" />
              <span>Journal & Articles</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display font-bold text-bd-navy hover:text-bd-blue"
            >
              Contact
            </Link>
          </div>

          <div className="pt-6 border-t border-gray-200 flex flex-col gap-3">
            <a
              href="tel:7472237815"
              className="flex items-center gap-3 text-base font-mono text-bd-navy font-semibold"
            >
              <Phone className="w-5 h-5 text-bd-blue" />
              (747) 223-7815
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-bd-navy text-center text-white font-bold text-sm rounded shadow-sm uppercase tracking-wider hover:bg-bd-blue transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
