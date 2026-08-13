'use client';

import React from 'react';

export interface BadgeProps {
  variant?: 'default' | 'accent' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center px-3 py-1 text-xs font-mono font-medium uppercase tracking-wider rounded-none select-none';

  let variantClasses = '';

  switch (variant) {
    case 'default':
      variantClasses = 'bg-bd-surface-light text-bd-navy border border-bd-navy/10';
      break;
    case 'accent':
      variantClasses = 'bg-bd-navy text-white shadow-sm';
      break;
    case 'outline':
      variantClasses = 'bg-transparent text-bd-blue border border-bd-blue/40';
      break;
  }

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};
