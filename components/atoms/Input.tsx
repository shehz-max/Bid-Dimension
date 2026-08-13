'use client';

import React, { forwardRef } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  placeholder?: string;
  required?: boolean;
  variant?: 'default' | 'dark';
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
      variant = 'dark',
      error,
      className = '',
      ...props
    },
    ref
  ) => {
    const isTextarea = type === 'textarea';

    const inputBaseClasses =
      'w-full font-body transition-all duration-200 focus:outline-none rounded-none';

    const variantClasses =
      variant === 'default'
        ? 'bg-transparent border-b border-gray-300 text-bd-charcoal focus:border-bd-blue py-2.5 px-0 placeholder:text-gray-400'
        : 'bg-white/5 border border-bd-blue/20 text-bd-text-light focus:border-bd-blue focus:shadow-glow-blue py-3 px-4 placeholder:text-bd-text-muted/50';

    const errorClasses = error
      ? variant === 'default'
        ? 'border-red-500'
        : 'border-red-500/80 focus:border-red-500'
      : '';

    const labelClasses =
      variant === 'default'
        ? 'text-xs font-mono font-medium uppercase tracking-wider text-bd-navy mb-1 block'
        : 'text-xs font-mono font-medium uppercase tracking-wider text-bd-blue mb-1.5 block';

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
