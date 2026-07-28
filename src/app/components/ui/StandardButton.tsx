import React from 'react';
import { LucideIcon } from 'lucide-react';
import { COLORS } from '@/constants/theme';

interface StandardButtonProps {
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
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
  const variantStyles = {
    // Filled primary CTA - deep pink bg, white text
    primary: {
      backgroundColor: COLORS.CTA_PINK,
      color: 'white',
      borderColor: COLORS.PINK_TEXT,
    },
    // Outlined secondary - white bg, deep pink border + text
    secondary: {
      backgroundColor: 'white',
      color: COLORS.PINK_TEXT,
      borderColor: COLORS.PINK_TEXT,
    },
    linkedin: {
      backgroundColor: COLORS.BLUE_BUTTON,
      color: 'white',
      borderColor: COLORS.BLUE_TEXT,
    },
    github: {
      backgroundColor: COLORS.GITHUB_BG,
      color: 'white',
      borderColor: COLORS.GITHUB_BORDER,
    },
    email: {
      backgroundColor: COLORS.CTA_PINK,
      color: 'white',
      borderColor: COLORS.PINK_TEXT,
    },
    // Download uses purple to visually distinguish from pink CTA buttons
    download: {
      backgroundColor: '#9B7EDE',
      color: 'white',
      borderColor: '#9B7EDE',
    },
  };

  const baseClasses = `px-4 sm:px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium min-h-[44px] border-2`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
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
        style={variantStyles[variant]}
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={baseClasses}
      style={variantStyles[variant]}
      aria-label={label}
    >
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
  const variantStyles = {
    primary: {
      backgroundColor: COLORS.CTA_PINK,
      color: 'white',
      borderColor: COLORS.PINK_TEXT,
    },
    secondary: {
      backgroundColor: 'white',
      color: COLORS.PINK_TEXT,
      borderColor: COLORS.PINK_TEXT,
    },
    linkedin: {
      backgroundColor: COLORS.BLUE_BUTTON,
      color: 'white',
      borderColor: COLORS.BLUE_TEXT,
    },
    github: {
      backgroundColor: COLORS.GITHUB_BG,
      color: 'white',
      borderColor: COLORS.GITHUB_BORDER,
    },
    email: {
      backgroundColor: COLORS.CTA_PINK,
      color: 'white',
      borderColor: COLORS.PINK_TEXT,
    },
    download: {
      backgroundColor: '#B298DC',
      color: 'white',
      borderColor: '#9B7EDE',
    },
  };

  const baseClasses = `w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center hover:scale-110 transition-transform shadow-lg`;

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
        style={variantStyles[variant]}
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      style={variantStyles[variant]}
      aria-label={label}
    >
      {content}
    </button>
  );
}