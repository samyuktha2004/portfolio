# The Bubbly Detective Portfolio

Interactive kawaii-themed portfolio built with React 18, TypeScript, and Tailwind CSS v4.

---

## Run Locally

The application uses standard Vite and has no Figma Make runtime dependency:

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Core interface artwork lives in `src/assets/core`, project media lives in `src/app/imports`, and public metadata assets live in `public`.

---

## Architecture Overview

The portfolio has three primary "views" managed by a single top-level state variable in `App.tsx`:

```
App.tsx
├── currentView: 'room' | 'book'
├── tabletContent: TabletContent | null
└── visitedSections: Set<string>
```

### View Modes

| View | Component | Trigger |
|------|-----------|---------|
| Detective Room | `DetectiveRoom` (`Room`) | Default / Escape from tablet |
| Pink Tablet | `PinkTablet` | Clicking any room hotspot |
| Portfolio Book | `PortfolioBook` | "View Book" button or `R` key |

### Component Tree

```
App.tsx
├── ErrorBoundary (app-level crash guard)
├── AppLoader (1-second initial splash)
├── <a> Skip to main content (accessibility)
├── Room OR PortfolioBook (currentView)
│   └── SectionErrorBoundary (resume variant)
├── PinkTablet (when tabletContent !== null)
│   └── SectionErrorBoundary (tablet variant)
│   └── Static tablet sections inside one lazy feature chunk
├── Resume (hidden, screen-only preview)
└── FortuneCookie (unlocked after all 6 sections visited)
```

---

## File Structure

```
/data/portfolioData.ts          Single source of truth for all content
/constants/theme.ts             Colors, z-index, animations
/components/
  DetectiveRoom.tsx             Interactive landing scene
  PinkTablet.tsx                Modal section viewer
  PortfolioBook.tsx             Scrollable book/resume view
  Resume.tsx                    Screen-rendered resume
  PrintResume.tsx               Print-optimized resume
  /book-sections/               Sections bundled with PortfolioBook
    HeroSection.tsx
    TldrSection.tsx
    AchievementsSection.tsx
    ExperienceSection.tsx
    ProjectsSection.tsx
    ContactSection.tsx
  /tablet-sections/             Sections bundled with PinkTablet
    AboutMe.tsx
    Projects.tsx
    Events.tsx
    CaseAchievements.tsx
    EducationCredentials.tsx
    WorkWithMe.tsx
  /ui/                          Shared utility components
    ErrorBoundary.tsx
    SectionErrorBoundary.tsx
    AppLoader.tsx
    FortuneCookie.tsx
    ImageWithFallback.tsx
    RoomActionButton.tsx
    CursorHint.tsx
    FlippableAvatar.tsx
    FilterPills.tsx
    LoadingSpinner.tsx
    StandardButton.tsx
```

---

## State Management

All state lives in `App.tsx`. Cross-component communication uses a custom event bus:

```ts
// Dispatch from any component
window.dispatchEvent(new CustomEvent('openWorkWithMe'));
window.dispatchEvent(new CustomEvent('openDevProjects', { detail: { projectTitle: '...' } }));

// App.tsx listens and updates state
window.addEventListener('openWorkWithMe', handleOpenWorkWithMe);
window.addEventListener('openDevProjects', handleOpenDevProjects);
```

This pattern avoids prop drilling through deeply nested components. Do not add more event types without documenting them here.

---

## Sections & Navigation

Six sections, tracked as `TabletContent`:

| Key | Section | Room Object |
|-----|---------|-------------|
| `about` | About Me | Character/avatar |
| `devProjects` | Dev Projects | Laptop |
| `events` | Events | Calendar/boards |
| `awards` | Case Achievements | Medals/trophy |
| `education` | Education | Books |
| `workWithMe` | Work With Me | Smartphone |

Section visit tracking drives the `FortuneCookie` easter egg:

```ts
const TOTAL_SECTIONS = 6;
<FortuneCookie isUnlocked={visitedSections.size === TOTAL_SECTIONS} />
```

---

## Keyboard Shortcuts

### Global (Room or Book view)
| Key | Action |
|-----|--------|
| `B` | Back to room (from book view) |
| `R` | Open portfolio book |

### Portfolio Book
| Key | Action |
|-----|--------|
| `Escape` | Back to room |
| `Ctrl/Cmd + P` | Download/print resume |
| `Ctrl/Cmd + D` | Download resume |

### Pink Tablet (Modal)
| Key | Action |
|-----|--------|
| `Escape` | Close tablet |
| `Arrow Left/Right` | Navigate between sections |
| `Home` | Jump to first section |
| `End` | Jump to last section |

Shortcuts are suppressed when focus is inside `<input>` or `<textarea>`.

---

## Accessibility Features

- **Skip link:** `<a href="#main-content">` visible on focus, fixed top-left
- **Language:** `document.documentElement.lang = 'en'` set on mount
- **Dialogs:** All overlays use `role="dialog" aria-modal="true" aria-labelledby`
- **Focus traps:** `useFocusTrap` hook on PinkTablet and FortuneCookie popups
- **Decorative images:** `alt="" aria-hidden="true"` throughout
- **Progress indicator:** `aria-label="N of 6 sections visited"` on room counter
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all CSS animations in DetectiveRoom
- **Touch targets:** Minimum 44×44px on all interactive elements
- **WCAG 2.1 AA compliant**

---

## Performance

The two interaction-heavy features are code-split, while their internal sections stay together:

```ts
const PinkTablet = lazyWithRecovery(loadPinkTablet, 'pink-tablet');
const PortfolioBook = lazyWithRecovery(loadPortfolioBook, 'portfolio-book');
```

This avoids a network request for every section while keeping tablet and portfolio-book code out of the initial room bundle. Both features preload on hover/focus.

Additional optimizations:
- `React.memo` on `Projects` component
- `useMemo` for filtered project/event lists
- Bubble positions pre-computed outside component body (prevents re-randomization on re-render)
- `priority` prop on `ImageWithFallback` sets `loading="eager" decoding="sync"` for above-the-fold assets
- `canvas-confetti` and print-resume support are bundled eagerly
- `PinkTablet` and `PortfolioBook` are the only lazy feature boundaries; both preload on hover/focus and recover once from stale module chunks

---

## Error Handling (3 Layers)

1. **App-level `ErrorBoundary`** — catches any unhandled render errors, shows a reload screen
2. **`SectionErrorBoundary`** — wraps tablet and book views. Two variants:
   - `tablet`: retry / next section / skip to resume
   - `resume`: retry / go home
   - Resets automatically when `sectionKey` prop changes
3. **Per-image fallbacks** — `ImageWithFallback` renders an error div; event cards handle `imgError` state locally

---

## Content Editing

All content lives in `/data/portfolioData.ts`. The components are purely presentational.

### Adding a project:
```ts
// in portfolioData.ts → projects array
{
  title: 'My Project',
  description: 'What it does.',
  projectType: 'dev',     // 'dev' | 'design' | 'combined'
  category: 'Web',        // display label for filter pills
  techStack: ['React', 'TypeScript'],
  images: [img1, img2],
  links: { github: '...', live: '...' },
  winner: false,
}
```

### Adding an event:
Add to the `events` array in `portfolioData.ts`. Register the image key in the `EVENT_IMAGES` lookup table in `Events.tsx`.

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | 375px | Radix Tooltip for hotspots |
| Tablet | 768px (`md:`) | Transition point; desktop layout begins |
| Laptop | 1024px+ | Custom tooltip overlay system |

The room renders two entirely separate DOM trees for phone vs desktop (controlled by `md:hidden` / `hidden md:block`).

---

## Styling Rules

- Tailwind utilities for all layout, spacing, positioning
- Colors from `/constants/theme.ts` (not inline hex strings in new code)
- Avoid `text-*` and `font-*` Tailwind classes — global typography is defined in `globals.css`
- For new content images, use `<ImageWithFallback />`
- Import local interface assets from `/src/assets`; do not use platform-specific URL schemes

---

## Deployment Checklist

### Content
- [ ] `portfolioData.ts` — name, title, bio, email, links all up to date
- [ ] All project images load (open each project card, check for broken assets)
- [ ] All event images load (check EVENT_IMAGES keys match data keys — dev console warns on mismatch)
- [ ] All external links work: GitHub, LinkedIn, live demos, email
- [ ] Resume content matches portfolioData (sections, dates, descriptions)

### Functionality
- [ ] All 6 room hotspots open the correct tablet section
- [ ] Tablet arrow key navigation (← →) cycles sections correctly
- [ ] `Home` / `End` keys jump to first/last section
- [ ] `Escape` closes the tablet
- [ ] `R` key opens portfolio book; `Escape` / `B` returns to room
- [ ] Print/download resume (Ctrl+P and the download button) produces `PrintResume` output, not the interactive page
- [ ] Contact form: submits successfully, shows "Sent!" confirmation
- [ ] Contact form: repeated submit within 1 minute is rate-limited with a message
- [ ] Contact form: shows pre-filled mailto fallback if submission fails (test by temporarily breaking the API key)
- [ ] Fortune cookie unlocks after visiting all 6 sections; confetti fires; fortunes don't repeat within a cycle
- [ ] "Skip to main content" link appears on first Tab press and navigates correctly

### Error handling
- [ ] Temporarily throw in one tablet section — `SectionErrorBoundary` shows retry/skip options
- [ ] Navigating away from the errored section clears the error (no stale error on return)
- [ ] Break one image src — `ImageWithFallback` renders the error placeholder, not a broken image icon

### Accessibility
- [ ] Tab through everything with keyboard only — every interactive element reachable
- [ ] All modals trap focus (tablet, fortune cookie popups)
- [ ] Screen reader announces dialog titles on open (VoiceOver or NVDA spot-check)
- [ ] All images have alt text or `aria-hidden="true"`
- [ ] Touch targets ≥ 44px on mobile — tap all buttons on an actual device

### Performance
- [ ] Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices
- [ ] No console errors or warnings (fix any EVENT_IMAGES key mismatches from dev warnings)
- [ ] Network tab: initial bundle is not bloated; sections lazy-load on first open
- [ ] Images below the fold load lazily (check Network tab — no eager loading of off-screen assets)

### Cross-browser
- [ ] Chrome / Edge
- [ ] Safari (macOS)
- [ ] Safari (iOS) — test on actual device, DevTools resize is not sufficient
- [ ] Firefox

### Deployment
- [ ] Choose hosting: Vercel / Netlify / GitHub Pages
- [ ] Configure custom domain (optional)
- [ ] Environment variables set if any (Web3Forms key is currently hardcoded — consider moving to `.env`)

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| TypeScript | Latest | Type safety |
| Tailwind CSS | v4 | Styling |
| Vite | Latest | Build tool |
| Motion (Framer) | Latest | Animations |
| Lucide React | Latest | Icons |
| Radix UI | Latest | Accessible primitives |
| canvas-confetti | Latest | Confetti effects |

---

## Known Issues & Improvement Opportunities

See `plans/improvements.md` for the tracked list.
