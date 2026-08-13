'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number; // in seconds
  delayChildren?: number; // in seconds
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.15,
  delayChildren = 0.1,
  className = '',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
