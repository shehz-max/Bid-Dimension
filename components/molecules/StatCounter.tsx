'use client';

import React, { useEffect, useState, useRef } from 'react';

export interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  duration?: number;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  label,
  sublabel,
  duration = 2000,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const end = value;
          const totalSteps = 60;
          const stepTime = Math.abs(Math.floor(duration / totalSteps));
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / totalSteps;
            const currentVal = Math.round(end * (1 - Math.pow(1 - progress, 3)));
            setCount(currentVal);

            if (currentStep >= totalSteps) {
              setCount(end);
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className={`flex flex-col items-center text-center group ${className}`}>
      <div className="font-mono font-bold text-5xl md:text-64px text-white tracking-tight tabular-nums mb-2 transition-colors duration-300 group-hover:text-bd-blue">
        {count}
        <span className="text-bd-blue shadow-glow-blue">{suffix}</span>
      </div>
      <div className="font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-bd-blue/90 mb-1">
        {label}
      </div>
      {sublabel && (
        <div className="font-mono text-[10px] text-bd-text-muted opacity-70">
          {sublabel}
        </div>
      )}
    </div>
  );
};
