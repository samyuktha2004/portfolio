import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'pink' | 'blue' | 'white';
  className?: string;
}

/**
 * Reusable loading spinner component
 * Used throughout the app for consistent loading indicators
 */
export function LoadingSpinner({ 
  size = 'medium', 
  color = 'pink',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-4',
    large: 'w-12 h-12 border-4',
  };

  const colorClasses = {
    pink: 'border-[#FFB6C1] border-t-transparent',
    blue: 'border-[#87CEEB] border-t-transparent',
    white: 'border-white border-t-transparent',
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
}

interface LoadingOverlayProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Loading overlay with spinner and optional text
 */
export function LoadingOverlay({ children, className = '' }: LoadingOverlayProps) {
  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF0F5]/50 to-[#FFB6C1]/20 rounded-lg ${className}`}>
      <LoadingSpinner size="large" color="pink" />
      {children && (
        <div className="mt-4 text-[#fd6698] text-sm">
          {children}
        </div>
      )}
    </div>
  );
}
