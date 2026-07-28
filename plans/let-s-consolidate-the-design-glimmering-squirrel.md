# Plan: Consolidate Projects + Add Events Section

## Context
The portfolio currently has two separate tablet sections: Dev Projects (laptop hotspot) and Design Showcase (smartphone hotspot). Many projects (Agriguru, Kalaikatha, Tomocha, This Portfolio) appear in both — but as disconnected entries, underselling cross-disciplinary work. The consolidation merges them into a single unified Projects section under the laptop hotspot, with a new "Design" filter pill for design-only entries. The smartphone hotspot is repurposed to a new Events section showing community involvement (hosted, exhibited, attended).

---

## Part 1 — Unified Projects Section

### Data model changes — `src/app/data/portfolioData.ts`

Add optional design fields to the `Project` type:
```typescript
colorPalette?: string[];       // hex codes, shown as swatches
visualElements?: string[];     // design feature tags
designNotes?: string;          // italic descriptor line
designLink?: string;           // Figma / Behance / Canva prototype URL
projectType: 'dev' | 'design' | 'combined';
```

**Combined entries** (already in projects as dev; add design fields from designShowcase):
| Project | Add fields |
|---|---|
| Agriguru | colorPalette, visualElements, designNotes → `combined` |
| Kalaikatha | colorPalette, visualElements, designNotes → `combined` |
| Tomocha | colorPalette, visualElements, designNotes, designLink (Figma prototype) → `combined` |
| This Bubbly Portfolio | colorPalette, visualElements, designNotes, designLink (Figma site) → `combined` |
| Hazard Scout | stays `dev` — no design showcase entry |

**Design-only entries** (currently only in designShowcase; promote to projects array as `projectType: 'design'`):
- Kaalani — Sustainable Shoe Skins
- Interiorismo — Mobile Prototype
- GDSC HITS Event Posters (Graphic Design)
- GDG Chennai Graphic Design Series
- (Marketing & Branding entries already exist in projects as `'design'`)

**Remove** the `designShowcase` array export (or keep but no longer referenced by any component).

Update `sectionTitles.devProjects` display label → `"🔍 Projects"` (key stays `devProjects` to avoid cascading renames).

### `src/app/components/tablet-sections/Projects.tsx`

1. **Remove the `filter` prop** (was `'development' | 'design' | 'all'`); component now always shows all projects.

2. **Update filter options** to 5 pills:
   ```typescript
   { id: 'all',    label: 'All',    emoji: '🌟' },
   { id: 'ai-ml',  label: 'AI/ML',  emoji: '🤖' },
   { id: 'web',    label: 'Web',    emoji: '💻' },
   { id: 'mobile', label: 'Mobile', emoji: '📱' },
   { id: 'design', label: 'Design', emoji: '🎨' },
   ```

3. **Filter logic**:
   - `all` → all projects
   - `ai-ml` → `project.domain === 'AI/ML'`
   - `web` / `mobile` → existing domain logic
   - `design` → `project.projectType === 'design'`; combined entries also appear here AND in their domain filter

4. **Card rendering rules**:
   - All cards: title, category badge, description, tech tags, highlights, link buttons
   - If `colorPalette` present: render color swatches row below tech tags
   - If `visualElements` present: render as additional styled tags (labelled "Design Details")
   - If `designNotes` present: render as small italic line
   - If `designLink` present: add "View Design" button alongside GitHub/Demo
   - **No image, no placeholder** — if a project has no image field, the image region is simply absent from the card layout (consistent with current dev cards)

5. **`PinkTablet.tsx`** — change `case 'devProjects'`:
   ```typescript
   // Before:
   return <Projects filter="development" />;
   // After:
   return <Projects />;
   ```

---

## Part 2 — Events Section (Smartphone → Events)

### Data additions — `portfolioData.ts`

Add `events` array and `EventEntry` type:
```typescript
interface EventEntry {
  title: string;
  date?: string;           // optional — some events have no date
  role: string;            // "Host & Volunteer", "Lead Organizer", "Exhibitor", "Attendee"
  category: 'hosted' | 'exhibited' | 'attended';
  highlights: string;      // one-line impact summary
  image?: string;          // optional — no placeholder rendered if absent
}
```

**Data (verbatim from user brief):**

Hosted:
- GDG Devfest Chennai — Oct 2026 — Host & Volunteer — "Co-hosted and managed operations for Chennai's flagship Google Developer Group conference."
- ChennaiFOSS 2026 — Apr 2026 — Host & Volunteer — "Organized and facilitated community sessions at Chennai's premier Free and Open Source Software conference."
- HITS e-luminate — no date — Lead Organizer — "Headed event planning, logistics, and execution for the university tech fest."
- Google for Startups: Build with AI — no date — Volunteer — "Assisted attendees and coordinated hands-on AI build sessions."

Exhibited:
- India AI Impact Summit 2026 — Feb 2026 — College Representative & Exhibitor — "Managed an official college booth showcasing featured student AI projects to industry leaders and visitors."

Attended:
- Paperflite's Shoptalk: Social Design Edition — Jul 2026 — "UI/UX, product design, and creative direction."
- GDG Chennai: Build with Android — no date — "Android app development and ecosystem updates."
- GDG Chennai Game Jam — no date — "Game design, rapid prototyping, and creative coding."

Add to `sectionTitles`: `events: "📱 Events"`
Update `hotspotLabels.smartphone`: `"📅 Events"`

### `src/app/components/tablet-sections/Events.tsx` — New file

**UI aesthetic**: Mobile notification / calendar-feed style.

**Layout:**
1. Section header with title + optional subtitle ("Where I show up 📍")
2. FilterPills (reuse existing `FilterPills` component):
   ```typescript
   { id: 'all',       label: 'All',       emoji: '📅' },
   { id: 'hosted',    label: 'Hosted',    emoji: '🎙️' },
   { id: 'exhibited', label: 'Exhibited', emoji: '🚀' },
   { id: 'attended',  label: 'Attended',  emoji: '💡' },
   ```
3. Event cards — one per entry, styled as a mobile event invite/notification card:
   - **Role badge** (colored chip): Hosted = pink, Exhibited = blue, Attended = green/teal
   - **Optional image**: if `event.image` is defined, render it with a loading spinner while fetching; once loaded show it; if undefined, render nothing (no grey placeholder box)
   - **Title** (bold) + **Date** (small, right-aligned or below)
   - **Highlights** text (1-line impact summary, muted)
   - Subtle card border + soft shadow consistent with existing pink palette

### Wiring changes

**`src/app/App.tsx`**:
```typescript
// TabletContent type: replace 'designPortfolio' with 'events'
export type TabletContent = 'devProjects' | 'events' | 'awards' | 'education' | 'about' | 'workWithMe' | null;

// handleNextCase cases array:
const cases: TabletContent[] = ['devProjects', 'events', 'awards', 'education', 'about', 'workWithMe'];
// TOTAL_SECTIONS stays 6
```

**`src/app/components/PinkTablet.tsx`**:
```typescript
// Lazy import:
const Events = lazy(() => import('./tablet-sections/Events').then(m => ({ default: m.Events })));
// Remove DesignShowcase import

// sections array:
const sections: TabletContent[] = ['about', 'devProjects', 'events', 'awards', 'education', 'workWithMe'];

// renderContent():
case 'events': return <Events />;
// Remove 'designPortfolio' case
```

**`src/app/components/DetectiveRoom.tsx`**:
- `HOTSPOT_ORDER`: replace `'designPortfolio'` with `'events'`
- Smartphone `onClick`: `handleHotspotClick('events')`
- Smartphone `onKeyDown`: `handleHotspotKeyDown(e, 'events')`
- `shouldShowHint('designPortfolio')` calls → `shouldShowHint('events')`

---

## Files Modified

| File | Change |
|---|---|
| `src/app/data/portfolioData.ts` | Add design fields to combined entries; add design-only entries to projects; add events array; update sectionTitles + hotspotLabels |
| `src/app/components/tablet-sections/Projects.tsx` | Remove filter prop; add Design filter pill; render color palette/visual elements/designNotes/designLink on applicable cards; no image placeholder |
| `src/app/components/tablet-sections/Events.tsx` | **New** — events feed with filter pills + notification cards |
| `src/app/App.tsx` | Replace `'designPortfolio'` with `'events'` in TabletContent type and cases array |
| `src/app/components/PinkTablet.tsx` | Swap DesignShowcase for Events; update sections array; change Projects call |
| `src/app/components/DetectiveRoom.tsx` | Remap smartphone hotspot to `'events'`; update HOTSPOT_ORDER |

**Files that become unused (can be left in place or deleted):**
- `src/app/components/tablet-sections/DesignShowcase.tsx`

---

## Verification

1. Laptop hotspot → opens Projects tablet → shows all 11+ projects → filter pills work (AI/ML, Web, Mobile, Design) → combined entries show color swatches + design notes + design link → no image placeholder on imageless cards
2. Smartphone hotspot → opens Events tablet → all 8 events render → filter pills correctly segment Hosted/Exhibited/Attended → event with no image shows no placeholder box
3. Section navigation (arrow keys, Next Section button) cycles correctly through 6 sections without hitting a missing `designPortfolio` case
4. FortuneCookie unlock still triggers after visiting all 6 sections (TOTAL_SECTIONS = 6 unchanged)
5. SectionErrorBoundary still wraps both new sections via PinkTablet (no changes needed there)
