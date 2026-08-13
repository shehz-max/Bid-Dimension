'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HUD_LABELS = [
  {
    phase: 0,
    tag: 'PHASE 01 // CAD WIREFRAME',
    detail: 'LOD 300 Building Information Model',
  },
  {
    phase: 1,
    tag: 'PHASE 02 // SUBSTRUCTURE',
    detail: 'Reinforced Concrete Footings & Slab',
  },
  {
    phase: 2,
    tag: 'PHASE 03 // STRUCTURAL STEEL',
    detail: 'ASTM A992 Columns & Decking',
  },
  {
    phase: 3,
    tag: 'PHASE 04 // MEP COORDINATION',
    detail: 'Integrated HVAC, Electrical & Plumbing',
  },
  {
    phase: 4,
    tag: 'PHASE 05 // COMPLETED RENDER',
    detail: 'Permit-Ready Architectural Build',
  },
];

export const HeroBuilding: React.FC = () => {
  const [phase, setPhase] = useState(0); // 0=wireframe, 1=foundation, 2=steel, 3=mep, 4=finished
  const [isCommercial, setIsCommercial] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Step Timer Loop for 5-Phase Construction Sequence
  useEffect(() => {
    if (!isMounted) return;

    const timings = [2500, 3000, 3000, 3000, 4500];
    const currentDuration = timings[phase] || 3000;

    const timer = setTimeout(() => {
      setPhase((prevPhase) => {
        const next = prevPhase >= 4 ? 0 : prevPhase + 1;
        if (prevPhase >= 4) {
          setIsCommercial((c) => !c); // Alternate Commercial & Residential
        }
        return next;
      });
    }, currentDuration);

    return () => clearTimeout(timer);
  }, [phase, isMounted]);

  // Mouse tilt parallax via CSS custom properties
  useEffect(() => {
    if (!isMounted) return;

    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * -6;
      document.documentElement.style.setProperty('--hero-tilt-x', `${y}deg`);
      document.documentElement.style.setProperty('--hero-tilt-y', `${x}deg`);
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [isMounted]);

  const currentHud = HUD_LABELS[phase] || HUD_LABELS[0];

  return (
    <div
      className="relative w-full max-w-[540px] aspect-square mx-auto select-none flex items-center justify-center"
      style={{ perspective: '1200px' }}
    >
      {/* Laser Blueprint Scanline Overlay */}
      <motion.div
        key={`scanline-${phase}`}
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#4A8AB8] to-transparent z-30 pointer-events-none shadow-[0_0_15px_#4A8AB8]"
        initial={{ top: '100%', opacity: 0 }}
        animate={{ top: '0%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />

      {/* Floating Holographic Top-Right HUD Badge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`hud-${phase}`}
          initial={{ opacity: 0, y: -8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="absolute top-2 right-2 z-30 bg-bd-navy/85 border border-bd-blue/30 backdrop-blur-md px-3 py-2 flex flex-col gap-0.5 text-right pointer-events-none shadow-glow-blue"
        >
          <div className="flex items-center justify-end gap-1.5 font-mono text-[10px] font-bold text-bd-blue tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-bd-blue animate-ping" />
            <span>{currentHud.tag}</span>
          </div>
          <span className="font-mono text-[9px] text-bd-text-muted opacity-80">
            {currentHud.detail}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Infinite 3D Rotation + Floating Ambient Wrapper */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          animation:
            'heroRotate 25s linear infinite, heroFloat 6s ease-in-out infinite',
        }}
      >
        {/* Mouse Parallax Inner Wrapper */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform:
              'rotateX(var(--hero-tilt-x, 0deg)) rotateY(var(--hero-tilt-y, 0deg))',
          }}
        >
          {/* Direct Single Child inside AnimatePresence for clean crossfade */}
          <AnimatePresence mode="wait">
            {/* STAGE 0: Wireframe 3D CAD Render */}
            {phase === 0 && (
              <motion.div
                key="stage-0-wireframe"
                className="absolute inset-0 flex items-center justify-center p-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <img
                  src="/images/hero-wireframe.webp"
                  alt="3D Blueprint CAD Wireframe"
                  className="w-full h-full object-contain mix-blend-screen drop-shadow-2xl"
                  style={{
                    maskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                  }}
                />
              </motion.div>
            )}

            {/* STAGE 1: Foundation 3D Render */}
            {phase === 1 && (
              <motion.div
                key="stage-1-foundation"
                className="absolute inset-0 flex items-center justify-center p-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <img
                  src="/images/hero-foundation.webp"
                  alt="Concrete Foundation & Substructure"
                  className="w-full h-full object-contain mix-blend-screen drop-shadow-2xl"
                  style={{
                    maskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                  }}
                />
              </motion.div>
            )}

            {/* STAGE 2: Steel Structure 3D Render */}
            {phase === 2 && (
              <motion.div
                key="stage-2-steel"
                className="absolute inset-0 flex items-center justify-center p-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <img
                  src="/images/hero-steel.webp"
                  alt="Structural Steel Framing"
                  className="w-full h-full object-contain mix-blend-screen drop-shadow-2xl"
                  style={{
                    maskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                  }}
                />
              </motion.div>
            )}

            {/* STAGE 3: MEP Engineering Systems 3D Render */}
            {phase === 3 && (
              <motion.div
                key="stage-3-mep"
                className="absolute inset-0 flex items-center justify-center p-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <img
                  src="/images/hero-mep.webp"
                  alt="MEP Engineering Systems"
                  className="w-full h-full object-contain mix-blend-screen drop-shadow-2xl"
                  style={{
                    maskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                  }}
                />
              </motion.div>
            )}

            {/* STAGE 4: Completed Building 3D Render (Alternates Commercial & Residential) */}
            {phase === 4 && (
              <motion.div
                key={isCommercial ? 'stage-4-commercial' : 'stage-4-residential'}
                className="absolute inset-0 flex items-center justify-center p-2 relative"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
              >
                <img
                  src={
                    isCommercial
                      ? '/images/hero-finished-commercial.webp'
                      : '/images/hero-finished-residential.webp'
                  }
                  alt={isCommercial ? 'Commercial Engineering Project' : 'Residential Engineering Project'}
                  className="w-full h-full object-contain mix-blend-screen drop-shadow-2xl"
                  style={{
                    maskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at 50% 50%, black 55%, transparent 88%)',
                  }}
                />

                {/* Alternating Project Type Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute bottom-4 left-4 px-3 py-1.5 bg-bd-navy/90 border border-bd-blue/40 shadow-glow-blue flex items-center gap-2 text-[11px] font-mono font-semibold text-bd-blue uppercase tracking-widest pointer-events-none"
                >
                  <span className="w-2 h-2 rounded-full bg-bd-blue animate-pulse" />
                  <span>{isCommercial ? 'Commercial Project' : 'Residential Project'}</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Blueprint Ghost Overlay — OUTSIDE AnimatePresence (Visible only in Stage 4) */}
          {phase === 4 && (
            <motion.div
              key="ghost-overlay"
              className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                <path
                  d="M50,300 L200,350 L350,300 L350,110 L200,50 L50,110 Z M200,350 L200,50 M50,110 L200,160 L350,110 M70,220 L200,270 L330,220 M70,165 L200,215 L330,165 M100,280 L100,135 M300,280 L300,135"
                  stroke="#4A8AB8"
                  strokeWidth="1.2"
                />
              </svg>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
