/**
 * Theme Constants
 * Centralized color palette, spacing, and animation values for the portfolio
 */

export const COLORS = {
  // Primary colors
  PRIMARY_PINK: '#FFB6C1',
  LIGHT_PINK: '#FFF0F5',
  SKY_BLUE: '#87CEEB',
  HOT_PINK: '#fd6698',

  // Semantic colors
  BACKGROUND_GRADIENT_FROM: '#FFF0F5',
  BACKGROUND_GRADIENT_TO: '#FFB6C1',
  
  // Overlay colors
  OVERLAY_DARK: 'rgba(0, 0, 0, 0.5)',
  OVERLAY_LIGHT: 'rgba(255, 255, 255, 0.9)',
} as const;

export const SPACING = {
  // Detective Room
  ROOM_WIDTH_MOBILE: '100%',
  ROOM_WIDTH_TABLET: '85%',
  ROOM_WIDTH_LAPTOP: '55%',
  ROOM_WIDTH_XL: '50%',
  
  // Tablet Modal
  TABLET_WIDTH_MOBILE: '100%',
  TABLET_WIDTH_DESKTOP: '90%',
  TABLET_MAX_WIDTH: '900px',
  
  // Padding
  CONTAINER_PADDING_MOBILE: '1rem',
  CONTAINER_PADDING_TABLET: '2rem',
  CONTAINER_PADDING_LAPTOP: '5rem',
} as const;

export const ANIMATIONS = {
  // Durations (ms)
  FAST: 150,
  NORMAL: 300,
  SLOW: 700,
  FLIP_DURATION: 700,
  
  // Delays
  HINT_DELAY: 3000,
  LOADER_MIN_DURATION: 1000,
  
  // Easing
  EASE_IN_OUT: 'ease-in-out',
  EASE_OUT: 'ease-out',
} as const;

export const Z_INDEX = {
  BASE: 0,
  ROOM: 10,
  HOTSPOT: 20,
  TOOLTIP: 30,
  SKIP_BUTTON: 40,
  TABLET_OVERLAY: 9998,
  TABLET_MODAL: 9999,
  APP_LOADER: 99999,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;

export const BORDER_RADIUS = {
  SMALL: '0.75rem',  // 12px
  MEDIUM: '1rem',    // 16px
  LARGE: '1.5rem',   // 24px
  XLARGE: '2rem',    // 32px
  FULL: '9999px',
} as const;
