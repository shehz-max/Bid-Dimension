'use client';

import React, { forwardRef } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  placeholder?: string;
  required?: boolean;
  variant?: 'default' | 'light' | 'dark';
  error?: string;
  className?: string;
}

export const Input = forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  InputProps
>(
  (
    {
      label,
      type = 'text',
      placeholder = '',
      required = false,
      variant = 'light',
      error,
      className = '',
      ...props
    },
    ref
  ) => {
    const isTextarea = type === 'textarea';

    const inputBaseClasses =
      'w-full font-body text-sm transition-all duration-200 focus:outline-none rounded-lg';

    const variantClasses =
      variant === 'dark'
        ? 'bg-white/5 border border-bd-blue/20 text-bd-text-light focus:border-bd-blue focus:shadow-glow-blue py-3 px-4 placeholder:text-bd-text-muted/50'
        : 'bg-[#F8FAFC] border border-gray-300 text-bd-navy focus:border-bd-blue focus:ring-2 focus:ring-bd-blue/20 py-3 px-4 placeholder:text-gray-400';

    const errorClasses = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      : '';

    const labelClasses =
      variant === 'dark'
        ? 'text-xs font-mono font-semibold uppercase tracking-wider text-bd-blue mb-1.5 block'
        : 'text-xs font-mono font-semibold uppercase tracking-wider text-bd-navy mb-1.5 block';

    return (
      <div className={`w-full flex flex-col ${className}`}>
        <label className={labelClasses}>
          {label} {required && <span className="text-red-400">*</span>}
        </label>

        {isTextarea ? (
          <textarea
            ref={ref}
            placeholder={placeholder}
            required={required}
            className={`${inputBaseClasses} ${variantClasses} ${errorClasses} min-h-[120px] resize-y`}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            required={required}
            className={`${inputBaseClasses} ${variantClasses} ${errorClasses}`}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error && (
          <span className="text-xs text-red-500 mt-1 font-mono font-medium">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
