# Design Audit — Color System

## Core Palette (Intended)

| Token | Hex | Role |
|---|---|---|
| Pink Light BG | `#FFF0F5` | Card / section backgrounds |
| Pink Border | `#FFB6C1` | Borders, badge backgrounds, accents |
| Pink Medium | `#FF95A8` | Gradient endpoints, hover states |
| Hot Pink | `#E9518D` | Primary headings, icon color, CTA text |
| Dark Hot Pink | `#d43878` | Gradient endpoint (paired with #E9518D) |
| Sky Blue | `#87CEEB` | Badge backgrounds, secondary accents |
| Blue | `#2B7FB5` | Secondary headings, info text, CTA buttons |
| Dark Blue | `#1a6a9a` | Gradient endpoint (paired with #2B7FB5) |
| Purple | `#7a5b8a` | Dev-only project badges, Attended event badges |
| Lavender | `#B298DC` | Dev-only badge backgrounds, Attended badge backgrounds |
| Gold | `#B8860B` | Winner badge text/icon |
| Gold Light | `#D4AF37` / `#FFD700` | Winner badge background gradient |

---

## Color Usage By Page

### App.tsx (Loading / root shell)
- `from-[#FFF0F5] to-[#FFB6C1]` — page background gradient
- `#FFB6C1` — loading spinner
- `#E9518D` — loading label text

### PinkTablet.tsx (Modal shell)
- `from-[#FFB6C1] to-[#FF95A8]` — outer tablet bezel gradient
- `from-[#FFF0F5] to-[#FFB6C1]` — top bar (title strip) gradient
- `#E9518D` — section title text
- `#FFB6C1` — close/nav button borders
- `red-400` / `red-600` — close button icon ⚠️ *not from palette*
- `#87CEEB` — next-button icon hover color
- `#2B7FB5` — "Next Section" button text/border
- `#E9518D` — "Previous" button text/border

### About Me
- `from-[#E9518D] to-[#d43878]` — hero gradient band
- `#EBF5FB` — quick summary card background ⚠️ *one-off, not reused anywhere*
- `#1e5f8a` — quick summary body text ⚠️ *one-off, not in palette*
- `#2B7FB5` — quick summary heading
- `#FFF0F5` — story / interest card backgrounds
- `#FFB6C1` — card borders, icon backgrounds
- `#E9518D` — interest titles, section accents
- `from-[#2B7FB5] to-[#1a6a9a]` — "Work With Me" CTA band

### Projects
- `#FFF0F5` — card backgrounds
- `#FFB6C1` — card borders, slideshow controls
- `#E9518D` — titles, tech tags, highlights icon
- **Design badge**: `#FFB6C1` bg / `#E9518D` text
- **Dev+Design badge**: `#87CEEB` bg / `#2B7FB5` text
- **Dev-only badge**: `#B298DC` bg / `#7a5b8a` text
- **Winner badge**: `#D4AF37`/`#FFD700` bg / `#B8860B` text
- `#DDA0DD` / `#7D3C98` — visual element tags ⚠️ *purple variant inconsistent with #B298DC/#7a5b8a*
- `from-[#FFB6C1]/20 to-[#87CEEB]/20` — bottom CTA card

### Events
- `#FFF0F5` — card backgrounds
- `#FFB6C1` — card borders, spinner
- `#E9518D` — titles
- **Hosted badge**: `#FFB6C1` bg / `#E9518D` text ✓ matches Design badge
- **Exhibited badge**: `#87CEEB` bg / `#2B7FB5` text ✓ matches Dev+Design badge
- **Attended badge**: `#B298DC` bg / `#7a5b8a` text ✓ matches Dev-only badge
- `gray-600` — card body text

### Awards (CaseAchievements)
- `#FFF0F5` — card backgrounds
- `#FFB6C1` — award icon backgrounds, card borders
- `#E9518D` — page title, achievement titles
- `#2B7FB5` / `#87CEEB` — LinkedIn button (10% bg / text+border)
- `#B8860B` — impact star icon
- `gray-700`, `gray-600`, `gray-500` — description and date text

### Education (EducationCredentials)
- `#FFF0F5` — all card backgrounds
- `#FFB6C1` — borders, icon backgrounds
- `#E9518D` — degree title, highlights, leadership roles
- `#2B7FB5` — CGPA text
- `#87CEEB` — CGPA badge background
- `gray-600`, `gray-700`, `gray-800` — body text

### Work With Me
- `from-[#E9518D] to-[#d43878]` — header gradient band ✓ same as About Me hero
- `#FFF0F5` — service card backgrounds
- `#FFB6C1` — icon backgrounds, card borders
- `#E9518D` — titles, highlights
- `#2B7FB5` — timeline icon, tools bg text
- `#87CEEB` — timeline / tools bg (10% opacity)
- `from-[#DDA0DD] to-[#C77DCD]` — Flexibility section gradient ⚠️ *plum, used nowhere else*
- `from-[#2B7FB5] to-[#1a6a9a]` — bottom CTA band ✓ same as About Me

### Experience (Book section)
- `#E9518D` — headings, accents
- `#FFB6C1` — timeline line and circular markers
- `from-[#FFF0F5] to-white` — card gradient backgrounds
- `gray-700`, `gray-600` — body text

---

## Issues Found

### Inconsistencies

| Issue | Where | Details |
|---|---|---|
| Two purple variants | Projects visual tags vs badge system | `#7D3C98`/`#DDA0DD` (visual tags) ≠ `#7a5b8a`/`#B298DC` (badges). Should unify to one purple. |
| One-off blue tint | AboutMe quick summary | `#EBF5FB` background and `#1e5f8a` text appear nowhere else. Should use `#87CEEB/20` and `#2B7FB5`. |
| Plum gradient | WorkWithMe flexibility section | `from-[#DDA0DD] to-[#C77DCD]` is used only once. Either adopt into palette or replace with a core color. |
| Red on close button | PinkTablet | Tailwind `red-400`/`red-600` is the only red in the UI. Intentional UX signal (danger = close) — acceptable, but worth noting. |
| Gray text scale | All pages | `gray-500`, `gray-600`, `gray-700`, `gray-800` used inconsistently. No rule for which level to use. |

### Accessibility

| Color pair | Approx contrast | WCAG AA (normal text) | Fix |
|---|---|---|---|
| `#E9518D` on white | ~3.5:1 | ❌ Fails (needs 4.5:1) | Use `#d43878` (~4.6:1) for small text |
| `#E9518D` on `#FFF0F5` | ~3.3:1 | ❌ Fails | Same fix |
| White on `#E9518D` | ~3.5:1 | ❌ Fails for small text | Acceptable for large headings/buttons only |
| `#2B7FB5` on white | ~4.6:1 | ✅ Passes | — |
| `#7a5b8a` on white | ~4.8:1 | ✅ Passes | — |
| `#B8860B` on white | ~3.1:1 | ❌ Fails | Use `#8a6200` for gold text on white |
| `#7D3C98` on white | ~6.1:1 | ✅ Passes | — |

---

## Recommended Changes

1. **Unify purples**: Replace `#7D3C98`/`#DDA0DD` visual element tags with `#7a5b8a`/`#B298DC` — already the badge standard.
2. **Fix AboutMe one-offs**: Replace `#EBF5FB` with `bg-[#87CEEB]/20` and `#1e5f8a` with `#2B7FB5`.
3. **Pink text on light bg**: For small body text, prefer `#d43878` over `#E9518D` (better contrast). Keep `#E9518D` for large headings where it passes as large-text AA.
4. **Gold text**: Replace `#B8860B` with `#8a6200` for better contrast on white/light backgrounds.
5. **Gray text rule**: Standardize — `gray-800` for primary body, `gray-600` for secondary, `gray-500` for metadata/captions.
6. **Plum section**: Decide if `#DDA0DD`/`#C77DCD` gradient in WorkWithMe is a keeper. If yes, add to palette. If not, replace with `from-[#B298DC] to-[#7a5b8a]`.
