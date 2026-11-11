# Design Audit — Current State

The source of truth is `src/app/guidelines/DESIGN_SYSTEM.md`, with implementation tokens in `src/app/constants/theme.ts`.

## Brand foundation

- **Personality:** bubbly, warm, capable, and intentionally playful.
- **Display type:** Fredoka for all `h1–h6` headings.
- **Reading type:** Quicksand for body copy, controls, labels, and forms.
- **Core surfaces:** warm white and `LIGHT_PINK` cards with rounded corners and soft borders.
- **Primary interaction:** `CTA_PINK`; blue and purple communicate secondary or supporting information.
- **Hero treatment:** `PURPLE_LIGHT → PURPLE_ACCENT` with `PURPLE_INK` text.

## Alignment hierarchy

- Hero content, tablet page-level section headings, short introductions, and closing CTAs are centered.
- Portfolio Book section headers stay left-aligned with their icons to maintain a recruiter-document rhythm.
- Cards, lists, project evidence, timelines, process steps, and forms are left-aligned.
- Repeated capability cards use a consistent grid and equal-height treatment on wide screens.
- Long operational copy is never centered.

## Current section treatment

| Section | Primary treatment |
|---|---|
| Detective Room | Pink heading, warm frosted instruction surface, playful hotspots |
| About Me | Lavender hero with deep-purple text; left-aligned story and capability cards |
| Projects | Light-pink evidence cards with pink, blue, and purple semantic labels |
| Events | Left-aligned event cards with category badges and image fallbacks |
| Achievements | Gold decorative accents with readable dark text |
| Education | Left-aligned credentials, leadership, skills, and certification cards |
| Work With Me | Centered lavender hero and section headings; left-aligned services, process details, and form fields |
| Portfolio Book | Recruiter-oriented scrolling summary with the same type and color hierarchy |

## Resolved drift

- About Me and Work With Me now share the documented lavender hero system.
- Hero text uses `PURPLE_INK` instead of low-contrast white on pastel fills.
- Work With Me top-level headings now share one centered alignment rule.
- Service cards, process steps, and contact fields remain left-aligned for scanning.
- Status dots, surfaces, and labels now use paired semantic tokens.
- Fredoka and Quicksand load through one valid Google Fonts stylesheet.
- Runtime assets and package imports are standard Vite/npm imports, not platform-specific schemes.

## Remaining maintenance rule

New visual decisions must first map to an existing semantic token or documented alignment pattern. If neither exists, extend `theme.ts` and this design system before adding one-off colors or layout rules.
