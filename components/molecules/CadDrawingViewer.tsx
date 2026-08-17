'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Eye, CheckCircle2, Maximize2, ShieldCheck } from 'lucide-react';

export interface DrawingSheet {
  id: string;
  sheetNumber: string;
  title: string;
  category: string;
  image: string;
  highlights: string[];
}

interface CadDrawingViewerProps {
  title?: string;
  sheets: DrawingSheet[];
}

export const CadDrawingViewer: React.FC<CadDrawingViewerProps> = ({
  title = 'Interactive Sample Drawing Package',
  sheets,
}) => {
  const [activeSheetId, setActiveSheetId] = useState(sheets[0]?.id || '');
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});

  const activeSheet = sheets.find((s) => s.id === activeSheetId) || sheets[0];

  const handleImageError = (sheetId: string) => {
    setImgErrorMap((prev) => ({ ...prev, [sheetId]: true }));
  };

  return (
    <section className="py-16 sm:py-20 bg-bd-navy-deep blueprint-grid border-y border-bd-border-dark text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-bd-blue mb-2.5 block">
            TECHNICAL SPECIMEN VIEWER
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-48px text-white max-w-2xl">
            {title}
          </h2>
          <p className="font-body text-xs sm:text-base text-bd-text-muted mt-2 sm:mt-3 max-w-lg">
            Explore sample PE-stamped drawing sheets and technical details included in our permit packages.
          </p>
        </div>

        {/* Tab Controls (Mobile Horizontal Touch Scrollable) */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 mb-6 sm:mb-8 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full">
          {sheets.map((sheet) => {
            const isActive = sheet.id === activeSheetId;
            return (
              <button
                key={sheet.id}
                onClick={() => setActiveSheetId(sheet.id)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border shrink-0 ${
                  isActive
                    ? 'bg-bd-blue text-bd-navy-deep border-bd-blue shadow-glow-blue scale-102'
                    : 'bg-bd-navy/70 text-bd-text-light border-bd-blue/20 hover:border-bd-blue/60 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>
                  {sheet.sheetNumber}: {sheet.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Drawing Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-bd-navy/80 border border-bd-blue/30 p-4 sm:p-8 backdrop-blur-md shadow-glow-blue">
          {/* Drawing Image Area */}
          <div className="lg:col-span-8 relative group overflow-hidden border border-bd-blue/30 bg-black/40 min-h-[260px] sm:min-h-[340px] flex items-center justify-center">
            {/* Subtle Laser Scanline */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-bd-blue/80 shadow-[0_0_12px_#4A8AB8] animate-laser-scan z-20 pointer-events-none" />

            {/* Corner Crosshairs */}
            <div className="absolute top-2 left-2 font-mono text-[8px] sm:text-[9px] text-bd-blue/60 pointer-events-none">
              + CAD GRID 0.5MM
            </div>
            <div className="absolute bottom-2 right-2 font-mono text-[8px] sm:text-[9px] text-bd-blue/60 pointer-events-none">
              SCALE 1:50 | PE STAMPED
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSheet.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full h-full flex items-center justify-center p-2"
              >
                {imgErrorMap[activeSheet.id] ? (
                  /* QA Fix 3: Graceful CAD Blueprint Fallback Graphic */
                  <div className="w-full h-[280px] sm:h-[360px] bg-bd-navy-deep blueprint-grid border border-bd-blue/30 p-6 flex flex-col items-center justify-center text-center">
                    <ShieldCheck className="w-12 h-12 text-bd-blue mb-3 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-bd-blue uppercase tracking-widest mb-1">
                      DRAWING SHEET {activeSheet.sheetNumber}
                    </span>
                    <span className="font-display font-bold text-lg text-white mb-2">
                      {activeSheet.title}
                    </span>
                    <span className="font-mono text-[10px] text-bd-text-muted">
                      100% City Permit Approved Drawing Set • PE Seal Verified
                    </span>
                  </div>
                ) : (
                  <img
                    src={activeSheet.image}
                    alt={`${activeSheet.title} technical drawing specimen`}
                    onError={() => handleImageError(activeSheet.id)}
                    className="max-h-[320px] sm:max-h-[420px] w-full object-contain filter contrast-105 brightness-105"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sheet Metadata & Specs Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full gap-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-bd-blue/10 border border-bd-blue/30 text-bd-blue font-mono text-[9px] sm:text-[10px] uppercase tracking-wider mb-3">
                <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>SHEET SPECIFICATION {activeSheet.sheetNumber}</span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1.5">
                {activeSheet.title}
              </h3>
              <p className="font-mono text-xs text-bd-blue mb-4">
                CATEGORY: {activeSheet.category.toUpperCase()}
              </p>

              <div className="flex flex-col gap-2.5 mb-4">
                <span className="font-mono text-[11px] text-bd-text-muted uppercase tracking-wider">
                  Key Sheet Features:
                </span>
                {activeSheet.highlights.map((highlight, idx) => (
                  <motion.div
                    key={`${activeSheet.id}-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center gap-2 text-xs font-body text-bd-text-light"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-bd-blue shrink-0" />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-bd-navy-deep border border-bd-blue/20 flex items-center justify-between">
              <span className="font-mono text-[11px] sm:text-xs text-bd-text-muted">
                Status: <span className="text-bd-blue font-semibold">City Permit Approved</span>
              </span>
              <Maximize2 className="w-4 h-4 text-bd-blue/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
