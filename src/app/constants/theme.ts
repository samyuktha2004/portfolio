/**
 * Design Token System — Bubbly Detective Portfolio
 *
 * Semantic grouping:
 *   BRAND       — decorative palette swatches
 *   INTERACTIVE — buttons, links, filter pills, CTAs (must meet WCAG AA ≥3:1 on white)
 *   STATUS      — availability / state indicators
 *   GRADIENT    — gradient endpoint pairs
 *   SURFACE     — backgrounds and overlays
 *
 * Full usage rules: src/app/guidelines/DESIGN_SYSTEM.md
 */

export const COLORS = {
  // ─── BRAND (decorative only — do not use for text) ───────────────────────
  /** Pastel pink — decorative rings, icon fills, non-interactive badge fills */
  PRIMARY_PINK: '#FFB6C1',
  /** Alias for PRIMARY_PINK */
  BABY_PINK: '#FFB6C1',
  /** Pale rosy surface — card backgrounds, image letterbox, tinted panels */
  LIGHT_PINK: '#FFF0F5',
  /** Sky blue — technology/skill badge fills, secondary accent dots */
  SKY_BLUE: '#87CEEB',
  /** Purple-pink — creative / design category tags */
  LAVENDER: '#DDA0DD',
  /** Bright yellow-gold — award stars, highlight dots */
  GOLD: '#FFD700',

  // ─── INTERACTIVE (accessible) ────────────────────────────────────────────
  /** Deep pink CTA fill — primary button bg, active filter pill. White text = ~3.44:1 (AA large). */
  CTA_PINK: '#E9518D',
  /** Deep pink text — headings, labels, outline-button text. Same value as CTA_PINK; alias clarifies intent. */
  PINK_TEXT: '#E9518D',
  /**
   * Mid-tone hot pink — hover glows, icon hover accents only.
   * ⚠️  Contrast ~2.77:1 on white — below AA. NOT for static text or button labels.
   */
  HOT_PINK: '#fd6698',
  /** Deep blue — download/external-link buttons. White text = ~4.4:1 (AA). */
  BLUE_BUTTON: '#2B7FB5',
  /** Alias for BLUE_BUTTON — use when intent is text color (e.g. blue category labels, year pills) */
  BLUE_TEXT: '#2B7FB5',
  /**
   * Accessible text version of SKY_BLUE for skill/category text labels.
   * Use instead of SKY_BLUE (#87CEEB, ~1.9:1) whenever the blue appears as readable text.
   */
  SKY_BLUE_TEXT: '#2B7FB5',
  /** GitHub button background */
  GITHUB_BG: '#1F2937',
  /** GitHub button border */
  GITHUB_BORDER: '#374151',

  // ─── STATUS INDICATORS ───────────────────────────────────────────────────
  STATUS_AVAILABLE: '#4ade80',
  STATUS_LIMITED: '#fbbf24',
  STATUS_UNAVAILABLE: '#f87171',
  STATUS_NEUTRAL: '#94a3b8',

  // ─── PURPLE SCALE (hero cards, Tomocha-palette accents, Work With Me) ───
  /** Soft pastel lavender — hero card gradient start (About Me, Work With Me) */
  PURPLE_LIGHT: '#D4B8F4',
  /** Medium purple — hero gradient end, combined-project badges, service icon circles, process step circles */
  PURPLE_ACCENT: '#B298DC',
  /** Deep purple — CTA section gradient end, download button bg */
  PURPLE_DEEP: '#9B7EDE',
  /** Accessible dark purple text — flexibility section labels on light bg (~4.5:1 on white) */
  PURPLE_TEXT: '#7a5b8a',

  // ─── GRADIENT STOPS ──────────────────────────────────────────────────────
  /** Deeper sky blue — gradient end for blue-tinted cards */
  SKY_BLUE_DARK: '#6BA5D6',
  /** Deeper lavender — gradient end for lavender elements */
  LAVENDER_DARK: '#C77DCD',
  /** Slightly deeper pastel pink — gradient end for pink hero sections */
  PRIMARY_PINK_LIGHT: '#FF95A8',
  /** Rich goldenrod — border/icon on award badges */
  GOLD_DARK: '#D4AF37',
  /** Dark goldenrod — text on gold award badges */
  GOLD_TEXT: '#B8860B',

  // ─── SURFACE / OVERLAY ───────────────────────────────────────────────────
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