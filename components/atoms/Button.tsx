'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]',
  };

  const baseClasses =
    'relative inline-flex items-center justify-center font-display font-semibold tracking-wide transition-all duration-300 rounded-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bd-blue focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed select-none';

  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses =
        'bg-bd-navy text-white hover:bg-bd-blue hover:-translate-y-[3px] hover:shadow-glow-blue active:translate-y-0 border border-bd-blue/30';
      break;
    case 'secondary':
      variantClasses =
        'bg-transparent text-bd-navy border border-bd-navy hover:text-white overflow-hidden group';
      break;
    case 'ghost':
      variantClasses =
        'bg-transparent text-bd-blue hover:text-bd-sky p-0 min-h-0 group';
      break;
    case 'outline-light':
      variantClasses =
        'bg-transparent text-bd-text-light border border-bd-text-light/30 hover:border-bd-text-light hover:shadow-glow-white hover:-translate-y-[2px] active:translate-y-0';
      break;
  }

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`;

  const content = (
    <>
      {variant === 'secondary' && (
        <span className="absolute inset-0 w-0 bg-bd-navy transition-all duration-300 ease-out group-hover:w-full -z-10" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'ghost' && (
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-bd-blue transition-all duration-300 group-hover:w-full" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};
