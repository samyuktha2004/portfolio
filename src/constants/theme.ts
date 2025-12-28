/**
 * Theme Constants - Centralized values for the portfolio
 */

export const COLORS = {
  PRIMARY_PINK: '#FFB6C1',
  LIGHT_PINK: '#FFF0F5',
  SKY_BLUE: '#87CEEB',
  HOT_PINK: '#fd6698',
  BABY_PINK: '#FFB6C1', // Alias for PRIMARY_PINK
  LAVENDER: '#DDA0DD',
  GOLD: '#FFD700',
  OVERLAY_DARK: 'rgba(0, 0, 0, 0.5)',
  OVERLAY_LIGHT: 'rgba(255, 255, 255, 0.9)',
} as const;

export const ANIMATIONS = {
  DURATION: {
    FAST: '200ms',
    MEDIUM: '300ms',
    SLOW: '500ms',
  },
  EASING: {
    DEFAULT: 'ease-in-out',
    BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  // Flip animation settings (matching old version)
  FAST: 150,
  NORMAL: 300,
  SLOW: 700,
  FLIP_DURATION: 700,
  HINT_DELAY: 3000,
  LOADER_MIN_DURATION: 1000,
  EASE_IN_OUT: 'ease-in-out',
  EASE_OUT: 'ease-out',
} as const;

export const Z_INDEX = {
  ROOM: 10,
  HOTSPOT: 20,
  TABLET: 50,
  FORTUNE_COOKIE: 50,
  UNLOCKED_POPUP: 999,
  APP_LOADER: 9999,
} as const;

export const BREAKPOINTS = {
  MOBILE: '375px',
  TABLET: '768px',
  LAPTOP: '1024px',
} as const;