# Bubbly Detective Portfolio — Design System

## Overview

The design language is kawaii-inspired: soft pastels for decoration, deeper accessible pinks/blues for interactive and text elements, warm white surfaces, and playful rounded UI shapes.

All tokens live in `src/app/constants/theme.ts → COLORS`.

---

## Color Tokens

### Brand Palette — decorative only, never for text

| Token | Hex | Contrast on white | Usage |
|---|---|---|---|
| `PRIMARY_PINK` / `BABY_PINK` | `#FFB6C1` | ~1.6:1 ❌ | Decorative rings, icon fills, badge fill backgrounds |
| `LIGHT_PINK` | `#FFF0F5` | ~1.1:1 ❌ | Card backgrounds, image letterbox, tinted panels |
| `SKY_BLUE` | `#87CEEB` | ~1.9:1 ❌ | Technology/skill badge fill backgrounds, accent dots |
| `LAVENDER` | `#DDA0DD` | ~2.0:1 ❌ | Creative/design category badge backgrounds; Work With Me service icon circles (Tomocha palette) |
| `GOLD` | `#FFD700` | ~1.06:1 ❌ | Award star fills, highlight dot decorations |

> ⚠️ **None of these brand tokens pass WCAG contrast requirements for text.** Use them only as background fills, borders, or decorative icon fills where they don't convey information on their own.

---

### Interactive Colors — accessible, use for all text and interactive elements

| Token | Hex | Contrast on white | WCAG | Usage |
|---|---|---|---|---|
| `CTA_PINK` | `#E9518D` | ~3.44:1 | AA large text | Filled CTA button bg, active filter pill fill, step-number circles |
| `PINK_TEXT` | `#E9518D` | ~3.44:1 | AA large text | All pink headings, labels, outline-button text, icon colors |
| `HOT_PINK` | `#fd6698` | ~2.77:1 | ⚠️ below AA | **Hover states only** — icon hover accents, glow effects |
| `BLUE_BUTTON` | `#2B7FB5` | ~4.4:1 | AA | Download/external-link button backgrounds |
| `BLUE_TEXT` / `SKY_BLUE_TEXT` | `#2B7FB5` | ~4.4:1 | AA | Blue category labels, year pills, skill text, any blue text |
| `GITHUB_BG` | `#1F2937` | ~16:1 | AAA | GitHub button background |
| `GITHUB_BORDER` | `#374151` | — | — | GitHub button border |
| `PURPLE_TEXT` | `#7a5b8a` | ~4.5:1 | AA | Purple text labels on light bg (e.g. Work With Me flexibility section) |

> **`HOT_PINK` (#fd6698) must NOT be used for static text.** Contrast ~2.77:1 fails WCAG AA minimum for large text (3:1) and AA for normal text (4.5:1).
>
> **`SKY_BLUE_TEXT` is the same value as `BLUE_TEXT` / `BLUE_BUTTON`** — it exists as a named alias to signal "use this when you want a blue that reads like sky-blue but is actually accessible."

---

### Status Indicators

| State | Dot | Surface | Text |
|---|---|---|---|
| Available | `STATUS_AVAILABLE` `#4ade80` | `STATUS_AVAILABLE_BG` `#f0fdf4` | `STATUS_AVAILABLE_TEXT` `#15803d` |
| Limited | `STATUS_LIMITED` `#fbbf24` | `STATUS_LIMITED_BG` `#fffbeb` | `STATUS_LIMITED_TEXT` `#b45309` |
| Unavailable | `STATUS_UNAVAILABLE` `#f87171` | `STATUS_UNAVAILABLE_BG` `#fef2f2` | `STATUS_UNAVAILABLE_TEXT` `#b91c1c` |
| Neutral | `STATUS_NEUTRAL` `#94a3b8` | `STATUS_NEUTRAL_BG` `#f8fafc` | `STATUS_NEUTRAL_TEXT` `#475569` |

Dot tokens are for small indicators only. Status labels must use the paired text token.

---

### Purple Scale — hero cards, Tomocha-palette accents, Work With Me

| Token | Hex | Usage |
|---|---|---|
| `PURPLE_LIGHT` | `#D4B8F4` | Hero card gradient **start** (About Me, Work With Me) |
| `PURPLE_ACCENT` | `#B298DC` | Hero gradient **end**; combined-project badges; Work With Me service icon circles, process step circles |
| `PURPLE_DEEP` | `#9B7EDE` | Work With Me bottom-CTA gradient end; download button bg |
| `PURPLE_TEXT` | `#7a5b8a` | Accessible purple text — flexibility section labels (~4.5:1 on white) |
| `PURPLE_INK` | `#4B3268` | Accessible headings and body text on lavender hero surfaces |

> **Hero card recipe:** `bg-gradient-to-br from-[#D4B8F4] to-[#B298DC]` with `PURPLE_INK` text.
> This replaces the former hot-pink hero (`from-[#E9518D] to-[#d43878]`), keeping hero sections visually distinct from `CTA_PINK` buttons.

---

### Gradient Stops

| Token | Hex | Usage |
|---|---|---|
| `SKY_BLUE_DARK` | `#6BA5D6` | End stop for blue gradient cards/sections |
| `LAVENDER_DARK` | `#C77DCD` | End stop for lavender gradient elements |
| `PRIMARY_PINK_LIGHT` | `#FF95A8` | End stop for pink gradient sections |
| `GOLD_DARK` | `#D4AF37` | Border/icon accent on award badge backgrounds |
| `GOLD_TEXT` | `#B8860B` | Text on gold award badges (~3.8:1 on white, AA large) |

---

### Surfaces & Overlays

| Token | Usage |
|---|---|
| `OVERLAY_DARK` `rgba(0,0,0,0.5)` | Modal backdrops, image overlays |
| `OVERLAY_LIGHT` `rgba(255,255,255,0.9)` | Frosted panel surfaces |

---

## Color Usage Decision Tree

```
Need a color for TEXT or a readable LABEL?
  ├─ Pink text     → PINK_TEXT (#E9518D)
  ├─ Blue text     → BLUE_TEXT / SKY_BLUE_TEXT (#2B7FB5)
  ├─ Purple text   → PURPLE_TEXT (#7a5b8a)
  └─ Gold/award    → GOLD_TEXT (#B8860B)

Need a filled BUTTON or INTERACTIVE ELEMENT background?
  ├─ Primary CTA   → CTA_PINK (#E9518D) + white text
  ├─ Download      → PURPLE_DEEP (#9B7EDE) + white text
  └─ GitHub        → GITHUB_BG (#1F2937) + white text

Need a HERO SECTION gradient?
  └─ PURPLE_LIGHT → PURPLE_ACCENT (#D4B8F4 → #B298DC) — About Me and Work With Me
     + PURPLE_INK text (keeps hero readable and distinct from CTA_PINK buttons)

Need a DECORATIVE fill (ring, badge bg, card, dot)?
  └─ Use brand tokens: PRIMARY_PINK, SKY_BLUE, LAVENDER, PURPLE_ACCENT, GOLD, LIGHT_PINK

Need a HOVER state color (not the base state)?
  └─ HOT_PINK (#fd6698) is acceptable here — brief exposure, not static text
```

---

## Button Variants (`StandardButton`)

| Variant | Background | Label | Border | Context |
|---|---|---|---|---|
| `primary` | `CTA_PINK` | white | `PINK_TEXT` | Main CTA actions |
| `secondary` | white | `PINK_TEXT` | `PINK_TEXT` | Alternative actions |
| `download` | `BLUE_BUTTON` | white | `BLUE_TEXT` | File downloads, resume |
| `linkedin` | `BLUE_BUTTON` | white | `BLUE_TEXT` | LinkedIn link |
| `email` | `CTA_PINK` | white | `PINK_TEXT` | Email CTA |
| `github` | `GITHUB_BG` | white | `GITHUB_BORDER` | GitHub repo/profile |

All buttons: `rounded-full`, `border-2`, `min-h-[44px]` touch target.

---

## Filter Pills (`FilterPills`)

| State | Background | Text | Border |
|---|---|---|---|
| Active | `CTA_PINK` | white | `PINK_TEXT` |
| Inactive | white | `PINK_TEXT` | `PINK_TEXT` |

---

## Typography Color Hierarchy

### Font families

| Role | Family | Weight |
|---|---|---|
| Display and section headings (`h1–h6`) | Fredoka | 500–700 |
| Body, labels, buttons, and form controls | Quicksand | 400–600 |
| Print-only resume | Georgia | Conventional print hierarchy |

| Level | Class | Token value | Context |
|---|---|---|---|
| Primary headings | `text-[#E9518D]` | `PINK_TEXT` | h1–h4 in tablet sections |
| Blue headings | `text-[#2B7FB5]` | `BLUE_TEXT` | Category / tech headings |
| Purple labels | `text-[#7a5b8a]` | `PURPLE_TEXT` | Labels inside purple/mauve-filled elements |
| Award text | `text-[#B8860B]` | `GOLD_TEXT` | Trophy/award labels |
| Body text | `text-gray-700` | — | Main readable content |
| Secondary text | `text-gray-500` | — | Metadata, dates, captions |
| On lavender hero fills | `text-[#4B3268]` | `PURPLE_INK` | About Me and Work With Me hero content |
| On dark fills | `text-white` | — | Inside `CTA_PINK`, `PURPLE_DEEP`, `GITHUB_BG` backgrounds |
| Muted pink | `text-[#E9518D]/70` | — | Subdued pink labels |

---

## Alignment & Composition

Use alignment to communicate hierarchy rather than applying one alignment everywhere:

| Content level | Alignment |
|---|---|
| Hero heading, subtitle, availability, and primary CTA | Center |
| Tablet top-level section heading and short introductory copy | Center, with a constrained text width |
| Portfolio Book section heading paired with an icon | Left, creating a consistent recruiter-document rhythm |
| Service cards, project details, lists, timelines, and process steps | Left |
| Repeated cards | Consistent grid and equal-height treatment on wide screens |
| Contact-form labels and fields | Left |
| Closing CTA and compact reassurance copy | Center |

Do not center long lists or operational details. Do not mix left- and center-aligned headings at the same hierarchy level. Set alignment on the layout boundary, not globally on heading elements.

---

## Section Color Map

| Section | Hero gradient | Heading color | Badge/pill fill | Icon color |
|---|---|---|---|---|
| Detective Room | — | `PINK_TEXT` | — | `PINK_TEXT` / `PRIMARY_PINK` decorative |
| About Me | `PURPLE_LIGHT` → `PURPLE_ACCENT`, `PURPLE_INK` text | `PINK_TEXT` | `SKY_BLUE` (bg), `BLUE_TEXT` (text) | `PINK_TEXT` |
| Projects | — | `PINK_TEXT` | `PRIMARY_PINK`/`SKY_BLUE` bg fills; `PURPLE_ACCENT` combined badge | `PINK_TEXT` |
| Design Showcase | — | `PINK_TEXT` | `CTA_PINK` active dot | `PINK_TEXT` |
| Education | — | `PINK_TEXT` | `SKY_BLUE` bg, `BLUE_TEXT` text | `PINK_TEXT` |
| Case Achievements | — | `PINK_TEXT` | `GOLD`/`GOLD_DARK` award bg | `GOLD_TEXT` award icons |
| Work With Me | `PURPLE_LIGHT` → `PURPLE_ACCENT`, `PURPLE_INK` text | `PINK_TEXT` | `PURPLE_LIGHT` icon circles, `PURPLE_ACCENT` step circles | `PURPLE_INK` / status dots |
| PortfolioBook | — | `PINK_TEXT` | — | `PINK_TEXT` |

> **Color-scheme rationale:** Hero sections use `PURPLE_LIGHT → PURPLE_ACCENT` with `PURPLE_INK` so they are distinct from pink CTA buttons while preserving readable text. Work With Me card accents use the same purple scale for thematic cohesion.

---

## What NOT to Do

| ❌ Don't | ✅ Do instead |
|---|---|
| `text-[#FFB6C1]` (PRIMARY_PINK as text) | `text-[#E9518D]` (PINK_TEXT) |
| `text-[#87CEEB]` (SKY_BLUE as text) | `text-[#2B7FB5]` (SKY_BLUE_TEXT) |
| `text-[#FFD700]` (GOLD as text) | `text-[#B8860B]` (GOLD_TEXT) |
| `text-[#DDA0DD]` (LAVENDER as text) | `text-[#7a5b8a]` (PURPLE_TEXT) on light bg |
| `text-[#fd6698]` for static labels | `text-[#E9518D]` (PINK_TEXT) |
| `bg-[#FFB6C1] text-white` | `bg-[#E9518D] text-white` (CTA_PINK bg) |
| Hero card using `CTA_PINK` gradient or white text on pastel lavender | Hero gradient `PURPLE_LIGHT → PURPLE_ACCENT` with `PURPLE_INK` text |
| Native `title=""` for swatch tooltips | Custom Tailwind `group-hover` tooltip with outlined border |
| Hardcoded hex not in `COLORS` | Add a semantic token to `theme.ts` first |
| Two different pinks for same interactive meaning | Pick one: `CTA_PINK`/`PINK_TEXT` for all pink interactive |

---

## Tooltip Pattern (Color Swatches)

Native `title` attributes produce unstyled browser tooltips. For all decorative tooltips (e.g. color palette swatches in Projects), use the group-hover pattern instead:

```tsx
<div className="relative group flex-shrink-0">
  <div className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: hex }} />
  <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5
    px-2 py-0.5 rounded text-xs bg-white text-gray-700
    border border-[#FFB6C1] shadow-sm whitespace-nowrap
    opacity-0 group-hover:opacity-100 transition-opacity z-10">
    {hex}
  </span>
</div>
```

Key properties: `border border-[#FFB6C1]` gives the outlined look; `pointer-events-none` prevents the tooltip from blocking hover on the swatch; `z-10` ensures it layers above sibling swatches.
