# Architecture Knowledge Base

## Core Principles

1. **Single Source of Truth**: All content lives in `/data/portfolioData.ts`
2. **Component Isolation**: Each component manages its own state, communicates via props
3. **Theme Centralization**: All design tokens in `/constants/theme.ts`
4. **Dual Layout System**: Phone (Radix UI) + Laptop/Tablet (custom tooltips)

---

## File Structure

```
/
├── App.tsx                          # Root component, view state management
├── /components
│   ├── DetectiveRoom.tsx            # Interactive room, hotspot logic
│   ├── PinkTablet.tsx               # Modal overlay for portfolio sections
│   ├── PortfolioBook.tsx            # Traditional scroll view
│   └── /figma
│       └── ImageWithFallback.tsx    # PROTECTED - Do not modify
├── /data
│   └── portfolioData.ts             # All content, labels, project data
├── /constants
│   └── theme.ts                     # Colors, animations, z-index, spacing
├── /styles
│   └── globals.css                  # Typography defaults, CSS variables
└── /docs                            # Documentation
```

---

## State Management

### App.tsx (Root State)
```typescript
currentView: 'room' | 'tablet' | 'book'        // View switching
currentTabletContent: TabletContent | null     // Which section is open
visitedSections: Set<TabletContent>            // Track exploration progress
```

**State Flow:**
```
DetectiveRoom → handleHotspotClick() → App.tsx updates currentView/currentTabletContent
PinkTablet → onClose() → App.tsx resets to 'room'
PortfolioBook → onBackToRoom() → App.tsx resets to 'room'
```

### DetectiveRoom.tsx (Local State)
```typescript
hoveredHotspot: string | null                  // Tooltip trigger state
roomImageLoaded: boolean                       // Asset loading state
```

**Critical Pattern:**
- `hoveredHotspot` controls BOTH:
  - Custom tooltips (laptop/tablet via `TOOLTIP_CONFIG`)
  - Ping border animations on hotspots
  - Bounce animations on hover

---

## Responsive Layout System

### Two Separate Implementations

#### Phone Layout (`md:hidden xl:block`)
- **Location**: Lines ~130-280 in DetectiveRoom.tsx
- **Tooltip System**: Radix UI (`<Tooltip>`, `<TooltipTrigger>`, `<TooltipContent>`)
- **Exact dimensions**: 392.727px × 852.505px
- **Scaling**: Scales 1.87x on xl screens (1280px+) via CSS transform
- **DO NOT MODIFY** without creating a copy

#### Laptop/Tablet Layout (`md:block xl:hidden`)
- **Location**: Lines ~285-500 in DetectiveRoom.tsx
- **Tooltip System**: Custom positioned divs via `TOOLTIP_CONFIG`
- **Responsive**: Uses `md:` and `lg:` breakpoints for sizing
- **Tooltip Rendering**: Single conditional render (line ~445)

### TOOLTIP_CONFIG Object
```typescript
// Location: DetectiveRoom.tsx, line ~50
const TOOLTIP_CONFIG: Record<string, { position: string; align: string }> = {
  desktop: { position: 'top-[60%] left-[21%]', align: '-translate-x-1/2 -translate-y-[120%]' },
  smartphone: { position: 'top-[40%] right-[15%]', align: 'translate-x-1/2 -translate-y-[120%]' },
  books: { position: 'bottom-[65%] right-[38%]', align: '-translate-y-[120%]' },
  medals: { position: 'top-[30%] left-[27%]', align: '-translate-x-1/2 -translate-y-[140%]' },
  character: { position: 'bottom-[10%] left-[52%]', align: '-translate-x-1/2 -translate-y-[110%]' }
};
```

**How It Works:**
1. User hovers over hotspot → `setHoveredHotspot('desktop')`
2. Conditional render checks: `hoveredHotspot && TOOLTIP_CONFIG[hoveredHotspot]`
3. Tooltip div positioned using config values
4. Text pulled from `hotspotLabels` in portfolioData.ts

---

## Data Schema

### portfolioData.ts Structure

```typescript
// Hotspot labels - Used by both tooltip systems
export const hotspotLabels = {
  character: string,
  desktop: string,
  smartphone: string,
  medals: string,
  books: string
};

// Project type definition
interface Project {
  id: string,
  title: string,
  category: string,              // Display only (flexible)
  projectType: "dev" | "design", // Filtering logic (strict)
  description: string,
  tags: string[],
  image: string,
  link?: string,
  github?: string
}

// Section content arrays
export const devProjects: Project[]
export const designProjects: Project[]
export const achievements: Achievement[]
export const education: Education[]
```

**Critical Rules:**
- `projectType` controls filtering logic in PinkTablet.tsx
- `category` is display-only, can change freely
- `hotspotLabels` keys must match hotspot IDs in DetectiveRoom.tsx

---

## Theme System

### /constants/theme.ts
```typescript
export const COLORS = {
  primary: '#FFB6C1',    // Baby pink - buttons, borders
  secondary: '#FFF0F5',  // Lavender blush - backgrounds
  accent: '#87CEEB'      // Sky blue - highlights
};

export const Z_INDEX = {
  modalOverlay: 9998,
  tabletModal: 9999,
  tooltip: 999           // Custom tooltips (laptop)
};

export const ANIMATION = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms'
  }
};
```

**Usage Pattern:**
```typescript
// Import constants
import { COLORS, Z_INDEX } from '@/constants/theme';

// Use in Tailwind arbitrary values
className="border-[#FFB6C1]"  // Direct hex for Tailwind compatibility
style={{ zIndex: Z_INDEX.tooltip }}  // Use constant in inline styles
```

---

## Component Communication

### DetectiveRoom → App.tsx
```typescript
// Props interface
interface RoomProps {
  onHotspotClick: (section: TabletContent) => void;  // Opens tablet modal
  onViewBook: () => void;                            // Switches to book view
  visitedSections: Set<TabletContent>;               // Progress tracking
}

// Event flow
User clicks hotspot → handleHotspotClick('devProjects') → onHotspotClick('devProjects')
→ App.tsx sets currentView='tablet' + currentTabletContent='devProjects'
```

### PinkTablet → App.tsx
```typescript
interface TabletProps {
  content: TabletContent;
  onClose: () => void;                               // Returns to room
  markAsVisited: (section: TabletContent) => void;   // Updates progress
}

// Event flow
User clicks close → onClose() → App.tsx sets currentView='room'
```

### PortfolioBook → App.tsx
```typescript
interface BookProps {
  onBackToRoom: () => void;                          // Returns to room
}
```

---

## Critical Patterns

### 1. Hotspot Interaction Pattern
```typescript
// Every hotspot button must have:
onMouseEnter={() => setHoveredHotspot('desktop')}  // Trigger tooltip
onMouseLeave={() => setHoveredHotspot(null)}       // Hide tooltip
onClick={() => handleHotspotClick('devProjects')}  // Open section
onKeyDown={(e) => handleHotspotKeyDown(e, 'devProjects')}  // Keyboard a11y
tabIndex={0}                                        // Focusable
```

### 2. Animation Classes
```css
/* Location: DetectiveRoom.tsx <style> block, line ~590 */
.animate-tooltip-appear {
  animation: tooltip-appear 0.3s ease-in-out;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-wiggle-hint {
  animation: wiggle-hint 2s ease-in-out 3;  /* Runs 3 times */
}
```

### 3. Asset Loading Pattern
```typescript
// Always track image load state
const [roomImageLoaded, setRoomImageLoaded] = useState(false);

<img
  src={roomImage}
  onLoad={() => setRoomImageLoaded(true)}
  className={roomImageLoaded ? 'opacity-100' : 'opacity-0'}
/>
```

---

## Styling Conventions

### Typography Hierarchy (globals.css)
```css
/* NEVER override with Tailwind classes unless requested */
h1 { font-size, font-weight, line-height }  /* Pre-defined */
h2 { font-size, font-weight, line-height }
p  { font-size, font-weight, line-height }
```

**Rule:** Avoid `text-*`, `font-*`, `leading-*` classes

### Tailwind Usage
✅ **Use for:** Layout (`flex`, `grid`), spacing (`p-*`, `m-*`), positioning (`absolute`, `top-*`)
❌ **Avoid:** Font sizing, font weights, line heights (unless explicitly requested)

---

## Import Patterns

### Figma Assets (Raster Images)
```typescript
// CORRECT - Virtual module scheme
import img from "figma:asset/abc123.png"

// INCORRECT - Do not use paths
import img from "./imports/figma:asset/abc123.png"  // ❌
```

### SVG Vectors
```typescript
// Use relative file paths
import svgPaths from "./imports/svg-wg56ef214f"
```

### New Images
```typescript
// Always use ImageWithFallback component
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback src="url" alt="description" />
```

---

## Protected Resources

### DO NOT MODIFY
1. `/components/figma/ImageWithFallback.tsx` - System component
2. Phone layout Radix UI Tooltips - Working implementation
3. Typography in `/styles/globals.css` - Unless requested

### SAFE TO MODIFY
1. `TOOLTIP_CONFIG` positions - Adjust tooltip placement
2. Content in `/data/portfolioData.ts` - Update text/projects
3. Colors in `/constants/theme.ts` - Change theme
4. Laptop/tablet layout custom tooltips - Styling adjustments

---

## Breakpoint Reference

```typescript
// Tailwind breakpoints
sm: 640px   // Not used in this project
md: 768px   // Tablet - switches to laptop layout
lg: 1024px  // Desktop sizing adjustments
xl: 1280px  // Enables 1.87x scaling for phone layout
```

**Layout Visibility:**
- Phone: `md:hidden xl:block` (shows: <768px, ≥1280px)
- Laptop/Tablet: `md:block xl:hidden` (shows: 768px-1279px)

---

## Testing Checklist

When adding features, verify:

- [ ] Both phone and laptop layouts still render correctly
- [ ] Tooltips appear on hover (Radix UI on phone, custom on laptop)
- [ ] Hotspot clicks open correct tablet content
- [ ] State resets properly when closing modals
- [ ] `visitedSections` tracking works
- [ ] Asset loading states function
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] No console errors related to missing hotspotLabels keys

---

## Common Pitfalls

1. **Breaking Phone Layout**: Editing lines 130-280 in DetectiveRoom.tsx without preserving Radix UI structure
2. **Tooltip Mismatch**: Adding hotspot without corresponding `hotspotLabels` entry
3. **Z-Index Conflicts**: Using arbitrary z-index values instead of `Z_INDEX` constants
4. **Typography Override**: Adding `text-xl` or `font-bold` classes unnecessarily
5. **State Desync**: Not updating both `currentView` and `currentTabletContent` together
