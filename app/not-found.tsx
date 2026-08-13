import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { ShieldAlert, ArrowLeft, Home, FileText, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bd-navy-deep blueprint-grid text-white flex flex-col items-center justify-center relative overflow-hidden py-24">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center relative z-10">
        {/* CAD Blueprint 404 Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-bd-blue/10 border border-bd-blue/30 font-mono text-xs text-bd-blue uppercase mb-6 shadow-glow-blue">
          <ShieldAlert className="w-4 h-4 text-bd-blue" />
          <span>ERROR CODE: 404 // UNMAPPED COORDINATE</span>
        </div>

        {/* 404 Blueprint Number */}
        <div className="font-mono font-bold text-7xl sm:text-9xl text-white tracking-tight opacity-90 mb-4 text-shadow-glow">
          404
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-5px text-white mb-4">
          Drawing Coordinate Not Found
        </h1>

        <p className="font-body text-base sm:text-lg text-bd-text-muted mb-10 leading-relaxed max-w-lg mx-auto">
          The engineering page or drawing sheet you are attempting to access does not exist or has been relocated.
        </p>

        {/* Navigation Options Box */}
        <div className="bg-bd-navy/90 border border-bd-blue/30 p-6 shadow-glow-blue text-left mb-10">
          <span className="font-mono text-xs font-bold uppercase text-bd-blue tracking-wider block mb-4">
            Recommended Navigation Grid:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <Link
              href="/"
              className="p-3 bg-bd-navy-deep border border-bd-blue/20 hover:border-bd-blue hover:text-bd-blue transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4 text-bd-blue" />
              <span>Homepage</span>
            </Link>
            <Link
              href="/#services"
              className="p-3 bg-bd-navy-deep border border-bd-blue/20 hover:border-bd-blue hover:text-bd-blue transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-bd-blue" />
              <span>Services</span>
            </Link>
            <Link
              href="/contact"
              className="p-3 bg-bd-navy-deep border border-bd-blue/20 hover:border-bd-blue hover:text-bd-blue transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-bd-blue" />
              <span>Get Quote</span>
            </Link>
          </div>
        </div>

        <Button variant="primary" size="lg" href="/">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}
