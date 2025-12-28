import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StandardButtonProps {
  href?: string;
  onClick?: () => void;
  icon: LucideIcon;
  label: string;
  shortLabel?: string; // For mobile
  variant?: 'primary' | 'secondary' | 'linkedin' | 'github' | 'email' | 'download';
  external?: boolean;
  type?: 'button' | 'submit';
}

export function StandardButton({
  href,
  onClick,
  icon: Icon,
  label,
  shortLabel,
  variant = 'primary',
  external = false,
  type = 'button',
}: StandardButtonProps) {
  const variantClasses = {
    primary: 'bg-white text-[#FFB6C1]',
    secondary: 'bg-[#FFB6C1] text-white',
    linkedin: 'bg-[#87CEEB] text-white',
    github: 'bg-gray-800 text-white',
    email: 'bg-white text-[#FFB6C1]',
    download: 'bg-[#fd6698] text-white',
  };

  const baseClasses = `px-4 sm:px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium min-h-[44px] ${variantClasses[variant]}`;

  const content = (
    <>
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      {shortLabel ? (
        <>
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">{shortLabel}</span>
        </>
      ) : (
        <span>{label}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className={baseClasses} aria-label={label}>
      {content}
    </button>
  );
}

// Icon-only variant for compact layouts
interface IconButtonProps {
  href?: string;
  onClick?: () => void;
  icon: LucideIcon;
  label: string; // For accessibility
  variant?: 'primary' | 'secondary' | 'linkedin' | 'github' | 'email' | 'download';
  external?: boolean;
}

export function IconButton({
  href,
  onClick,
  icon: Icon,
  label,
  variant = 'primary',
  external = false,
}: IconButtonProps) {
  const variantClasses = {
    primary: 'bg-white text-[#FFB6C1]',
    secondary: 'bg-[#FFB6C1] text-white',
    linkedin: 'bg-[#87CEEB] text-white',
    github: 'bg-gray-800 text-white',
    email: 'bg-[#FFB6C1] text-white',
    download: 'bg-[#fd6698] text-white',
  };

  const baseClasses = `w-12 h-12 sm:w-14 sm:h-14 rounded-full ${variantClasses[variant]} flex items-center justify-center hover:scale-110 transition-transform shadow-lg`;

  const content = (
    <>
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="sr-only">{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} aria-label={label}>
      {content}
    </button>
  );
}