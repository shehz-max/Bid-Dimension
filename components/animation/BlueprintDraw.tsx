'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface BlueprintDrawProps {
  paths?: string[];
  duration?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  width?: number;
  height?: number;
  viewBox?: string;
}

export const BlueprintDraw: React.FC<BlueprintDrawProps> = ({
  paths = [],
  duration = 2.0,
  color = '#4A8AB8',
  strokeWidth = 1.5,
  className = '',
  width = 600,
  height = 400,
  viewBox = '0 0 600 400',
}) => {
  const drawVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: i * 0.2,
          type: 'spring',
          duration,
          bounce: 0,
          ease: [0.16, 1, 0.3, 1], // ease-smooth cubic-bezier
        },
        opacity: { delay: i * 0.2, duration: 0.2 },
      },
    }),
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-full"
      >
        {paths.map((d, index) => (
          <motion.path
            key={`path-${index}`}
            d={d}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            strokeLinejoin="miter"
            custom={index}
            variants={drawVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        ))}
      </svg>
    </div>
  );
};
