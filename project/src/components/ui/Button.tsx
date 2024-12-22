import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zeus-900',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'active:scale-[0.98] transform',
        {
          // Primary variant
          'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500': variant === 'primary',
          'hover:shadow-lg hover:shadow-blue-500/25': variant === 'primary' && !disabled,
          
          // Secondary variant
          'bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 focus:ring-zinc-500': 
            variant === 'secondary',
          
          // Ghost variant
          'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 focus:ring-zinc-500':
            variant === 'ghost',
          
          // Danger variant
          'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500':
            variant === 'danger',
          
          // Sizes
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        // Loading state
        isLoading && 'cursor-wait',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="animate-spin h-5 w-5" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      ) : null}
      <span className={cn(isLoading && 'opacity-0')}>
        {children}
      </span>
    </button>
  );
}