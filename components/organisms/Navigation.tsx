'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, HardHat, Compass, Cpu, Layers, Sparkles, Calculator, FolderGit2, BookOpen, Info, Home as HomeIcon } from 'lucide-react';

interface NavigationProps {
  transparent?: boolean;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

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
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Route active state helpers
  const isHomeActive = pathname === '/';
  const isServicesActive = pathname.startsWith('/services');
  const isProjectsActive = pathname.startsWith('/projects');
  const isAboutActive = pathname.startsWith('/about');
  const isJournalActive = pathname.startsWith('/blog');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/90 shadow-xs transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        {/* Clean Header Logo Lockup: Balanced Icon & Bold Typography */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <img
            src="/images/logo-light-bg.png"
            alt="Bid Dimensions Logo Mark"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-bd-navy group-hover:text-bd-blue transition-colors whitespace-nowrap">
            BID DIMENSIONS
          </span>
        </Link>

        {/* Desktop Nav with Animated Sliding Blueprint Line Indicator */}
        <nav
          onMouseLeave={() => setHoveredNav(null)}
          className="hidden md:flex items-center gap-1 lg:gap-1.5 text-sm font-semibold relative"
        >
          {/* 1. Home Link */}
          <div
            onMouseEnter={() => setHoveredNav('home')}
            className="relative py-1.5 px-1"
          >
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-lg transition-colors relative z-10 block ${
                isHomeActive
                  ? 'text-bd-blue font-bold'
                  : 'text-bd-navy hover:text-bd-blue'
              }`}
            >
              Home
            </Link>
            {(hoveredNav === 'home' || (hoveredNav === null && isHomeActive)) && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-bd-blue rounded-full z-0 shadow-xs"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
          </div>

          {/* 2. Services Dropdown */}
          <div
            ref={dropdownRef}
            onMouseEnter={() => {
              handleMouseEnter();
              setHoveredNav('services');
            }}
            onMouseLeave={handleMouseLeave}
            className="relative py-1.5 px-1"
          >
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-label="Toggle engineering services menu"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors relative z-10 focus:outline-none ${
                isServicesActive || dropdownOpen
                  ? 'text-bd-blue font-bold'
                  : 'text-bd-navy hover:text-bd-blue'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-bd-blue' : ''}`} />
            </button>

            {(hoveredNav === 'services' || (hoveredNav === null && isServicesActive)) && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-bd-blue rounded-full z-0 shadow-xs"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}

            {/* Solid, Beautifully Aligned Horizontal 2-Column Mega Box */}
            {dropdownOpen && (
              <div className="absolute top-full -left-16 lg:-left-8 mt-1 w-[520px] bg-white p-3.5 shadow-2xl border border-gray-200/90 z-50 rounded-2xl animate-in fade-in slide-in-from-top-1 duration-150">
                {/* 2-Column Horizontal Grid - Clean Service Titles Only */}
                <div className="grid grid-cols-2 gap-1.5">
                  <Link
                    href="/services/structural-engineering"
                    onClick={() => setDropdownOpen(false)}
                    className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                      pathname === '/services/structural-engineering'
                        ? 'bg-[#EBF3FA] border border-[#4A8AB8]/30 shadow-2xs'
                        : 'hover:bg-[#F8FAFC] border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-lg transition-all shrink-0">
                      <HardHat className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-xs sm:text-sm text-bd-navy group-hover:text-bd-blue transition-colors">
                      Structural Engineering
                    </span>
                  </Link>

                  <Link
                    href="/services/architectural-design"
                    onClick={() => setDropdownOpen(false)}
                    className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                      pathname === '/services/architectural-design'
                        ? 'bg-[#EBF3FA] border border-[#4A8AB8]/30 shadow-2xs'
                        : 'hover:bg-[#F8FAFC] border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-lg transition-all shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-xs sm:text-sm text-bd-navy group-hover:text-bd-blue transition-colors">
                      Architectural Design
                    </span>
                  </Link>

                  <Link
                    href="/services/mep-engineering"
                    onClick={() => setDropdownOpen(false)}
                    className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                      pathname === '/services/mep-engineering'
                        ? 'bg-[#EBF3FA] border border-[#4A8AB8]/30 shadow-2xs'
                        : 'hover:bg-[#F8FAFC] border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-lg transition-all shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-xs sm:text-sm text-bd-navy group-hover:text-bd-blue transition-colors">
                      MEP Engineering
                    </span>
                  </Link>

                  <Link
                    href="/services/bim-cad-services"
                    onClick={() => setDropdownOpen(false)}
                    className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                      pathname === '/services/bim-cad-services'
                        ? 'bg-[#EBF3FA] border border-[#4A8AB8]/30 shadow-2xs'
                        : 'hover:bg-[#F8FAFC] border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-lg transition-all shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-xs sm:text-sm text-bd-navy group-hover:text-bd-blue transition-colors">
                      BIM & CAD Services
                    </span>
                  </Link>

                  <Link
                    href="/services/rendering-services"
                    onClick={() => setDropdownOpen(false)}
                    className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                      pathname === '/services/rendering-services'
                        ? 'bg-[#EBF3FA] border border-[#4A8AB8]/30 shadow-2xs'
                        : 'hover:bg-[#F8FAFC] border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-lg transition-all shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-xs sm:text-sm text-bd-navy group-hover:text-bd-blue transition-colors">
                      3D Rendering Services
                    </span>
                  </Link>

                  <Link
                    href="/services/estimation"
                    onClick={() => setDropdownOpen(false)}
                    className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                      pathname === '/services/estimation'
                        ? 'bg-[#EBF3FA] border border-[#4A8AB8]/30 shadow-2xs'
                        : 'hover:bg-[#F8FAFC] border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="p-2 bg-[#EBF3FA] border border-[#4A8AB8]/20 text-bd-blue group-hover:bg-bd-navy group-hover:text-white rounded-lg transition-all shrink-0">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-xs sm:text-sm text-bd-navy group-hover:text-bd-blue transition-colors">
                      Estimation & Takeoffs
                    </span>
                  </Link>
                </div>

                {/* Bottom Footer Callout */}
                <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between px-2 text-xs">
                  <span className="text-bd-gray font-body text-[11px]">50-State Licensed Engineering</span>
                  <Link
                    href="/contact"
                    onClick={() => setDropdownOpen(false)}
                    className="font-display font-bold text-bd-blue hover:underline flex items-center gap-1 text-[11px]"
                  >
                    Get a Quote &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 3. Projects Link */}
          <div
            onMouseEnter={() => setHoveredNav('projects')}
            className="relative py-1.5 px-1"
          >
            <Link
              href="/projects"
              className={`px-3 py-1.5 rounded-lg transition-colors relative z-10 block ${
                isProjectsActive
                  ? 'text-bd-blue font-bold'
                  : 'text-bd-navy hover:text-bd-blue'
              }`}
            >
              Projects
            </Link>
            {(hoveredNav === 'projects' || (hoveredNav === null && isProjectsActive)) && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-bd-blue rounded-full z-0 shadow-xs"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
          </div>

          {/* 4. Journal Link */}
          <div
            onMouseEnter={() => setHoveredNav('blog')}
            className="relative py-1.5 px-1"
          >
            <Link
              href="/blog"
              className={`px-3 py-1.5 rounded-lg transition-colors relative z-10 block ${
                isJournalActive
                  ? 'text-bd-blue font-bold'
                  : 'text-bd-navy hover:text-bd-blue'
              }`}
            >
              Journal
            </Link>
            {(hoveredNav === 'blog' || (hoveredNav === null && isJournalActive)) && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-bd-blue rounded-full z-0 shadow-xs"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
          </div>

          {/* 5. About Us Link */}
          <div
            onMouseEnter={() => setHoveredNav('about')}
            className="relative py-1.5 px-1"
          >
            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-lg transition-colors relative z-10 block ${
                isAboutActive
                  ? 'text-bd-blue font-bold'
                  : 'text-bd-navy hover:text-bd-blue'
              }`}
            >
              About Us
            </Link>
            {(hoveredNav === 'about' || (hoveredNav === null && isAboutActive)) && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-bd-blue rounded-full z-0 shadow-xs"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
          </div>
        </nav>

        {/* Desktop Primary CTA Button with Shimmer Light Sweep */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex items-center gap-4"
        >
          <Link
            href="/contact"
            className="relative overflow-hidden group px-5 py-2.5 bg-bd-navy text-white font-display font-semibold text-sm rounded-lg shadow-sm hover:shadow-md border border-bd-navy hover:border-bd-blue transition-all"
          >
            {/* Specular Shimmer Light Sweep */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
            <span className="relative z-10 group-hover:text-bd-blue transition-colors">Get a Quote</span>
          </Link>
        </motion.div>

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
        <div className="md:hidden fixed inset-0 top-18 sm:top-20 bg-white z-40 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-bd-navy border-t border-gray-200">
          <div className="flex flex-col gap-3.5">
            <div className="text-bd-blue font-mono text-xs uppercase tracking-widest border-b border-gray-200 pb-2">
              Navigation
            </div>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-display font-bold flex items-center gap-2 p-2 rounded-lg ${
                isHomeActive ? 'text-bd-blue bg-[#EBF3FA]' : 'text-bd-navy hover:text-bd-blue'
              }`}
            >
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <div className="flex flex-col gap-2 pl-3 border-l-2 border-[#EBF3FA] my-1">
              <span className="text-[11px] font-mono text-bd-gray uppercase font-semibold">Services</span>
              <Link
                href="/services/structural-engineering"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2 py-1"
              >
                <HardHat className="w-4 h-4 text-bd-blue" />
                <span>Structural Engineering</span>
              </Link>
              <Link
                href="/services/architectural-design"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2 py-1"
              >
                <Compass className="w-4 h-4 text-bd-blue" />
                <span>Architectural Design</span>
              </Link>
              <Link
                href="/services/mep-engineering"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2 py-1"
              >
                <Cpu className="w-4 h-4 text-bd-blue" />
                <span>MEP Engineering</span>
              </Link>
              <Link
                href="/services/bim-cad-services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2 py-1"
              >
                <Layers className="w-4 h-4 text-bd-blue" />
                <span>BIM & CAD Services</span>
              </Link>
              <Link
                href="/services/rendering-services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2 py-1"
              >
                <Sparkles className="w-4 h-4 text-bd-blue" />
                <span>3D Rendering Services</span>
              </Link>
              <Link
                href="/services/estimation"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-bd-navy hover:text-bd-blue flex items-center gap-2 py-1"
              >
                <Calculator className="w-4 h-4 text-bd-blue" />
                <span>Estimation & Takeoffs</span>
              </Link>
            </div>

            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-display font-bold flex items-center gap-2 p-2 rounded-lg ${
                isProjectsActive ? 'text-bd-blue bg-[#EBF3FA]' : 'text-bd-navy hover:text-bd-blue'
              }`}
            >
              <FolderGit2 className="w-5 h-5" />
              <span>Projects</span>
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-display font-bold flex items-center gap-2 p-2 rounded-lg ${
                isJournalActive ? 'text-bd-blue bg-[#EBF3FA]' : 'text-bd-navy hover:text-bd-blue'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Journal</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-display font-bold flex items-center gap-2 p-2 rounded-lg ${
                isAboutActive ? 'text-bd-blue bg-[#EBF3FA]' : 'text-bd-navy hover:text-bd-blue'
              }`}
            >
              <Info className="w-5 h-5" />
              <span>About Us</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-bd-navy text-center text-white font-bold text-sm rounded-lg shadow-sm uppercase tracking-wider hover:bg-bd-blue transition-colors block"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
