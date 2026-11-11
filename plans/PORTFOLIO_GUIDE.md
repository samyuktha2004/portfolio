# How to Build a Portfolio Like This One

A step-by-step guide covering the decisions, features, checks, and guardrails that went into this portfolio. This is not about aesthetics — it is about structure, craft, and quality.

---

## 1. Start with a Single Source of Truth

Before writing a single component, create `portfolioData.ts` (or equivalent). Every piece of content — name, bio, projects, education, events, awards — lives there. Components only read from it; they never hardcode content.

**Why this matters:**
- Update your name once → it updates everywhere (resume, about page, contact form signature, etc.)
- Components become purely presentational and easy to hand off or replace
- Adding a new section means adding data to one file, not hunting through ten components

**What goes in it:**
```ts
export const portfolioData = {
  personal: { name, title, bio, email, links },
  projects: [...],
  education: { degrees: [...], leadership: [...], certifications: [...] },
  events: [...],
  achievements: [...],
  services: [...],
  availability: 'available' | 'limited' | 'unavailable',
};
```

Do not put component logic, formatting helpers, or JSX in this file. Data only.

---

## 2. Design Your Views Before Writing Code

A portfolio with a single scroll page is fine. A portfolio with multiple views is memorable — but only if the navigation between views is intuitive and consistent.

This portfolio has three views:

| View | Purpose |
|------|---------|
| Room (landing) | Exploration, first impression, curiosity |
| Tablet modal | Focused content per section |
| Book (scroll) | Traditional recruiter-friendly linear view |

**The rule:** every view must surface the same content. A recruiter who never touches the interactive room can still read everything via the book. A user who finds the book boring can explore the room instead. Multiple entry points → no dead ends.

**Before coding:** sketch (even on paper) where each section opens from, what opens what, and how users close things. Map every navigation path:
- Room hotspot → tablet opens → arrow keys cycle sections → Escape closes
- Room button → book opens → Escape goes back
- Book "View Projects" → dispatches event → tablet opens to projects

If you cannot describe the flow in plain language, the UX is not ready.

---

## 3. State Management: Keep It Flat and High

All view state lives at the top level (`App.tsx`). Child components receive only what they need.

```ts
const [currentView, setCurrentView] = useState<'room' | 'book'>('room');
const [tabletContent, setTabletContent] = useState<TabletContent>(null);
const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());
```

**Rules that kept this clean:**
- State that affects multiple views lives in `App.tsx`, not in the component that first needs it
- Components communicate up via callbacks, not directly to siblings
- For deeply nested → root communication (e.g., a book section opening the tablet), use a typed custom event bus:

```ts
window.dispatchEvent(new CustomEvent('openDevProjects', { detail: { projectTitle: 'X' } }));
// App.tsx listens and calls setTabletContent('devProjects')
```

This avoids prop drilling through four layers while keeping logic in one place.

---

## 4. Build Error Handling in Three Layers

Most portfolios have zero error handling. This one has three layers.

### Layer 1: App-level `ErrorBoundary`

Wrap everything. If a render throws (which React crashes silently without this), show a graceful fallback with a "Refresh" button. Never show a white screen.

```tsx
class ErrorBoundary extends React.Component {
  // getDerivedStateFromError + componentDidCatch
  // render: show fallback UI with collapsible error details
}
```

### Layer 2: Section-level `SectionErrorBoundary`

Wrap individual views. When the tablet section crashes, offer:
- Try Again
- Skip to next section
- Skip to resume view

The user never loses the ability to access your content even if one section breaks.

**Key pattern:** Reset error state when the section changes:
```ts
componentDidUpdate(prevProps) {
  if (prevProps.sectionKey !== this.props.sectionKey && this.state.hasError) {
    this.setState({ hasError: false });
  }
}
```

### Layer 3: Per-image fallbacks

Every image that could fail should have a graceful fallback. A broken image `<img>` tag is a red flag to any technical recruiter. Use a wrapper component:

```tsx
<ImageWithFallback
  src={img}
  alt="Project screenshot"
  showPlaceholderOnError
/>
```

On error, render an accessible `role="img"` div with a broken-image icon and the alt text. The layout does not break.

---

## 5. Accessibility Is Not Optional

If your portfolio is inaccessible, you are signaling that you build inaccessible products. Get these right:

### Skip link
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 ..."
>
  Skip to main content
</a>
```

### Language attribute
```ts
useEffect(() => { document.documentElement.lang = 'en'; }, []);
```

### All modals
```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title-id"
>
```

### Focus traps on modals
When a modal opens, keyboard focus must stay inside it. Tab should cycle within the dialog. Escape should close it. Implement a `useFocusTrap` hook or use Radix UI primitives (which handle this for you).

### Decorative images
```tsx
<img src={decorativeImg} alt="" aria-hidden="true" />
```

### Touch targets
Every button, link, and interactive hotspot must be at least **44×44px**. This is a hard WCAG requirement and it also just makes mobile feel less frustrating.

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  .animate-float, .animate-bounce, .animate-ping { animation: none; }
}
```

Respect this. Users who have this set have a medical reason.

### Keyboard navigation audit (do this before shipping)
Sit down with just a keyboard. Tab through everything. Test:
- Can you reach every clickable element?
- Do modals trap focus correctly?
- Does Escape close things?
- Do arrow keys work where they should?

---

## 6. Performance: Code Split Every Lazy Section

A portfolio is often the first thing someone sees. It should load fast.

Split every section that is not immediately visible:
```ts
const PinkTablet = lazy(() => import('./components/PinkTablet'));
const AboutMe = lazy(() => import('../tablet-sections/AboutMe'));
```

Wrap with Suspense and a meaningful fallback (spinner, not blank):
```tsx
<Suspense fallback={<LoadingSpinner />}>
  <PinkTablet ... />
</Suspense>
```

**Result:** 60-70% reduction in initial bundle size. Sections load on demand.

Additional wins:
- `React.memo` on any component that receives stable props but re-renders often (e.g., the projects grid)
- `useMemo` for filter operations on lists
- Pre-compute random values outside component bodies — `Math.random()` inside a component re-randomizes on every render
- Dynamic `import()` for heavy libraries used once (confetti, PDF generators)
- `loading="lazy"` on images below the fold; `loading="eager" decoding="sync"` on the hero

---

## 7. Contact Form: Real UX, Not Just a `mailto:`

A bare `mailto:` link is fine. A contact form with no fallback is worse than a bare `mailto:`.

The right pattern:
1. Try to submit via your API/backend
2. On success: show a clear "Sent!" confirmation
3. On error: show a pre-filled `mailto:` link so the user can still reach you

```tsx
{formState === 'error' && (
  <a href={generateMailtoLink(formData)}>
    Click here to email me directly instead
  </a>
)}
```

**Bot protection basics:**
- Honeypot field: hidden input, `tabIndex={-1}`, `aria-hidden`, `autoComplete="off"`. If it's filled, the submission is from a bot.
- Rate limiting: server-side. Do not rely on the client.

**Form field rules:**
- Every input needs an explicit `<label htmlFor>` — never use `placeholder` as a label
- Disable submit button while submitting (prevents double-submit)
- Show loading state on the button (spinner icon replaces send icon)

---

## 8. Resume: Build Two Versions

Build a screen version and a print version. They are different problems.

| Concern | Screen Resume | Print Resume |
|---------|--------------|-------------|
| Font sizes | Readable on any monitor | Sized for 8.5-inch paper |
| Layout | Can use flexbox freely | Needs `page-break` control |
| Links | Styled anchor tags | Show full URL text |
| Class names | `resume-*` | `print-*` |

The print version should be triggered by intercepting `Ctrl+P`:
```ts
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
    e.preventDefault();
    document.querySelector('[aria-label="Download Resume"]')?.click();
  }
});
```

This replaces the browser's default print dialog (which often prints the whole interactive page) with your intentional print-formatted resume.

---

## 9. Gamification: Earn Delight, Don't Impose It

Micro-interactions are good. Forced animations that block content are bad.

**Good patterns used here:**
- **Visit tracking:** Track which sections a user has opened. Reveal a reward (fortune cookie easter egg) only after all sections are visited. This encourages full exploration without requiring it.
- **Cursor hints:** Animated pointer appears on the *next* unvisited hotspot (not all of them at once). One hint at a time — not overwhelming.
- **Confetti on resume download:** Celebratory, quick, non-blocking. Fires in three bursts from different screen positions. Degrades gracefully if `canvas-confetti` fails to load.
- **Loading screen:** 1 second, themed, signals the experience to come. Do not skip this — a blank-then-pop entry feels broken.

**Bad patterns to avoid:**
- Animations that run on a loop indefinitely with no off state
- Interactions that require specific mouse behavior (hover menus on mobile)
- Easter eggs that lock content behind completion (the fortune cookie is additive, not a gate)

---

## 10. Responsive Design: Two DOM Trees Are Sometimes the Right Answer

When the mobile and desktop layouts are fundamentally different (not just scaled), maintaining one DOM tree with complex conditional classes becomes a maintenance trap.

This portfolio renders two completely separate layouts for room hotspots:
- Mobile (`md:hidden`): Radix UI Tooltip primitives (accessible, touch-friendly)
- Desktop (`hidden md:block`): Custom positioned div overlay (pixel-precise hover targets)

This is acceptable when:
- The interaction model is genuinely different (hover vs tap)
- The components are small and the duplication is obvious
- The mobile version uses an accessible primitive as a foundation

Do not duplicate large sections of content — just interactive wrappers.

---

## 11. Pre-Ship Checklist

Work through this before calling anything production-ready.

### Content
- [ ] All placeholder text replaced with real content
- [ ] All project images load correctly (test on a slow network)
- [ ] All links work (GitHub, LinkedIn, live demos)
- [ ] Contact email is correct
- [ ] Dates and descriptions are accurate

### Functionality
- [ ] All 6 sections open from the room
- [ ] Tablet arrow key navigation cycles correctly
- [ ] Escape closes the tablet
- [ ] Portfolio book opens and closes
- [ ] Print/download resume works
- [ ] Contact form submits (and falls back to mailto on error)
- [ ] Fortune cookie unlocks after visiting all sections
- [ ] Error boundaries show fallback (test by temporarily throwing in a section)

### Accessibility
- [ ] Tab through everything with a keyboard only
- [ ] All modals trap focus
- [ ] Screen reader announces dialog titles correctly
- [ ] Skip link appears on first Tab press
- [ ] All images have alt text or `aria-hidden`
- [ ] Touch targets are ≥ 44px

### Performance
- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices)
- [ ] No console errors or warnings
- [ ] Network tab: initial bundle is not enormous
- [ ] Images load lazily below the fold

### Cross-browser
- [ ] Chrome / Edge (Chromium)
- [ ] Safari (iOS is different from macOS — test both)
- [ ] Firefox
- [ ] Test on actual mobile hardware, not just DevTools resize

---

## 12. Edge Cases to Handle Explicitly

These are the things that break portfolios in front of recruiters.

| Scenario | Mitigation |
|----------|-----------|
| Image 404 | `ImageWithFallback` renders a styled error state |
| Section component throws | `SectionErrorBoundary` offers retry/skip |
| Entire app crashes | Top-level `ErrorBoundary` with reload button |
| User tabs into a modal and then presses Tab 20 times | Focus trap keeps them inside |
| User presses Escape while typing in the contact form | Keyboard handler checks `e.target instanceof HTMLInputElement` |
| `canvas-confetti` fails to load (ad blocker, slow connection) | `dynamic import().catch()` — feature silently skips |
| All fortunes have been shown | Fortune index Set resets to empty and cycles again |
| User prints the interactive page instead of resume | `Ctrl+P` intercepted and redirected |
| User opens a direct-link to a specific project from the book | `openDevProjects` custom event carries `projectTitle` detail; Projects component enters single-project mode |
| Empty filter result | Empty state message renders ("No events in this category yet") |
| Mobile user resizes window to desktop mid-session | Both DOM trees are always mounted; CSS hides/shows them — no flash |

---

## 13. What Makes a Portfolio Actually Stand Out

Technical correctness is table stakes. These are the differentiators:

1. **It demonstrates the skills it claims.** A portfolio for a design engineer should show design AND engineering. A portfolio for a front-end developer should have clean, readable source code. The code itself is a portfolio artifact.

2. **It is accessible by default, not as an afterthought.** WCAG compliance is a signal that you build things for everyone, not just people who use mice and have perfect vision.

3. **It has a clear hierarchy.** The most important thing (your best work) should be reachable in under 2 clicks. Novelty should be layered on top of clarity, not instead of it.

4. **It respects the recruiter's time.** A one-click download resume. A clear "Work With Me" section with services and contact. Not buried.

5. **It has a personality without being inaccessible.** Unique theme + full keyboard navigation + screen reader support = memorable AND professional.

6. **The content is honest and specific.** "Led a team of 4 to build X, reducing load time by 40%" beats "Experienced in React." Every achievement in the portfolio should be a signal, not filler.

7. **It works on the device and network conditions of the person viewing it.** Lazy loading, error fallbacks, and tested mobile layouts are not optional if you claim to care about UX.
