'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number; // in seconds
  duration?: number; // in seconds
  y?: number; // offset in px
  className?: string;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 30,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // ease-smooth cubic-bezier from BD spec
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
