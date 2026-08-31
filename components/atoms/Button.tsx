'use client';

import React from 'react';
import Link from 'next/link';

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
    sm: 'px-4 py-2 text-xs min-h-[38px] rounded-lg',
    md: 'px-5 py-2.5 text-sm min-h-[44px] rounded-lg',
    lg: 'px-7 py-3.5 text-base min-h-[50px] rounded-lg',
  };

  const baseClasses =
    'relative inline-flex items-center justify-center font-display font-semibold tracking-wide transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bd-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none group overflow-hidden';

  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses =
        'bg-bd-navy text-white hover:bg-bd-blue shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 border border-bd-navy hover:border-bd-blue';
      break;
    case 'secondary':
      variantClasses =
        'bg-white text-bd-navy border border-gray-300 hover:border-bd-blue hover:bg-[#EBF3FA] hover:text-bd-blue shadow-2xs hover:-translate-y-0.5 active:translate-y-0';
      break;
    case 'ghost':
      variantClasses =
        'bg-transparent text-bd-navy hover:text-bd-blue p-0 min-h-0';
      break;
    case 'outline-light':
      variantClasses =
        'bg-white/90 backdrop-blur-sm text-bd-navy border border-gray-300 hover:border-bd-blue hover:text-bd-blue hover:bg-white shadow-2xs hover:-translate-y-0.5 active:translate-y-0';
      break;
  }

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`;

  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
      )}
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
