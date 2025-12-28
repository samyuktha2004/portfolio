# Component API Reference

## App.tsx

**Purpose:** Root component, manages global view state

### State
```typescript
currentView: 'room' | 'tablet' | 'book'
currentTabletContent: TabletContent | null
visitedSections: Set<TabletContent>
```

### Methods
```typescript
handleHotspotClick(section: TabletContent): void
  // Sets currentView='tablet', currentTabletContent=section
  
handleCloseTablet(): void
  // Resets currentView='room', currentTabletContent=null
  
handleViewBook(): void
  // Sets currentView='book'
  
handleBackToRoom(): void
  // Resets currentView='room'
  
markAsVisited(section: TabletContent): void
  // Adds section to visitedSections Set
```

### Render Logic
```typescript
if (currentView === 'room') → <Room />
if (currentView === 'tablet') → <Room /> + <PinkTablet />
if (currentView === 'book') → <PortfolioBook />
```

---

## DetectiveRoom.tsx

**Purpose:** Interactive isometric room with clickable hotspots

### Props Interface
```typescript
interface RoomProps {
  onHotspotClick: (section: TabletContent) => void;
  onViewBook: () => void;
  visitedSections: Set<TabletContent>;
}
```

### Local State
```typescript
hoveredHotspot: string | null
  // Controls tooltips and hover animations
  // Possible values: 'desktop' | 'smartphone' | 'books' | 'medals' | 'character' | null
  
showHint: boolean
  // Controls visibility of navigation hints (cursor/bounce)
  // Phone: cursor icon | Laptop: bounce animation
  
roomImageLoaded: boolean
  // Tracks if main room image has loaded
```

### Constants
```typescript
HOTSPOT_ORDER: TabletContent[]
  // Sequential exploration order for hints
  // ['about', 'devProjects', 'designPortfolio', 'awards', 'education', 'workWithMe']

TOOLTIP_CONFIG: Record<string, { position: string; align: string }>
  // Tooltip positioning for laptop/tablet layout
  // Keys match hoveredHotspot values
```

### Event Handlers
```typescript
handleHotspotClick(section: TabletContent): void
  // Calls onHotspotClick prop
  
handleHotspotKeyDown(e: KeyboardEvent, section: TabletContent): void
  // Enter/Space triggers handleHotspotClick
  // Escape returns to room
  
setHoveredHotspot(id: string | null): void
  // Updates hoveredHotspot state
```

### Hotspot Mapping
| Hotspot ID | TabletContent | Label Key | Asset |
|------------|--------------|-----------|-------|
| `character` | `'about'` | `hotspotLabels.character` | characterImage |
| `desktop` | `'devProjects'` | `hotspotLabels.desktop` | laptopImage |
| `smartphone` | `'designPortfolio'` | `hotspotLabels.smartphone` | smartphoneImage |
| `medals` | `'awards'` | `hotspotLabels.medals` | medalsImage |
| `books` | `'education'` | `hotspotLabels.books` | booksImage |

### Layout Variants

#### Phone Layout (md:hidden xl:block)
- **Lines:** ~130-280
- **Tooltips:** Radix UI components
- **Structure:**
  ```tsx
  <Tooltip>
    <TooltipTrigger asChild>
      <button>{/* hotspot */}</button>
    </TooltipTrigger>
    <TooltipContent>{label}</TooltipContent>
  </Tooltip>
  ```

#### Laptop/Tablet Layout (md:block xl:hidden)
- **Lines:** ~285-500
- **Tooltips:** Custom positioned divs
- **Structure:**
  ```tsx
  <button onMouseEnter={() => setHoveredHotspot('desktop')}>
    {/* hotspot */}
  </button>
  
  {hoveredHotspot && TOOLTIP_CONFIG[hoveredHotspot] && (
    <div className={TOOLTIP_CONFIG[hoveredHotspot].position}>
      {hotspotLabels[hoveredHotspot]}
    </div>
  )}
  ```

### Animations
```typescript
shouldShowHint(section: TabletContent): boolean
  // Returns true if section is next unvisited hotspot
  // Phone: shows cursor hint | Laptop: triggers bounce animation
  
// Applied classes:
// Phone Layout:
- Cursor hints shown when showHint && shouldShowHint(section)
- No bounce animation classes
- Hover: 'animate-bounce-slow'

// Laptop Layout:  
- shouldShowHint(section) → 'animate-bounce-hint' (3s delay, 2 bounces, 5s pause)
- Hover: 'animate-bounce-slow'
```

### Hint System (Navigation Guidance)
```typescript
// Phone Layout - Cursor Icon Hint:
- Displays animated MousePointerClick icon in pink bubble
- Shows on next unvisited hotspot after 3s delay
- Reappears on next hotspot after each visit (3.5s delay)
- Clickable (provides extra tap target)

// Laptop Layout - Bounce Animation:
- CSS animation: 2 small bounces (-12px), 5s pause
- Triggers on next unvisited hotspot after 3s delay
- Professional game design language ("collect me!")
- Resets after each hotspot visit

// Timing:
- Initial load: 3s delay before first hint
- After each click: 500ms transition + 3s = 3.5s total
```

---

## PinkTablet.tsx

**Purpose:** Modal overlay displaying portfolio section content

### Props Interface
```typescript
interface TabletProps {
  content: TabletContent;
  onClose: () => void;
  markAsVisited: (section: TabletContent) => void;
}

type TabletContent = 'about' | 'devProjects' | 'designPortfolio' | 'awards' | 'education';
```

### Local State
```typescript
filter: 'all' | 'dev' | 'design'
  // For 'devProjects' section only
  // Filters projects by projectType field
```

### Content Rendering
```typescript
if (content === 'about') → Personal bio section
if (content === 'devProjects') → Project cards with filter tabs
if (content === 'designPortfolio') → Design project cards
if (content === 'awards') → Achievement list
if (content === 'education') → Education timeline
```

### Project Filtering
```typescript
// Location: devProjects section
const filteredProjects = devProjects.filter(project => {
  if (filter === 'all') return true;
  return project.projectType === filter;
});
```

**Critical:** Filtering uses `projectType` field, NOT `category`

### Close Behavior
```typescript
// Triggers when:
- User clicks X button
- User clicks overlay backdrop
- User presses Escape key

// Calls:
markAsVisited(content)  // Update progress
onClose()               // Return to room
```

### Styling Structure
```tsx
<div className="modal-overlay z-[9998]">         {/* Backdrop */}
  <div className="tablet-container z-[9999]">    {/* Modal */}
    <div className="tablet-screen">              {/* Content */}
      {/* Dynamic content based on props.content */}
    </div>
  </div>
</div>
```

---

## PortfolioBook.tsx

**Purpose:** Traditional scrollable portfolio view (alternative to room)

### Props Interface
```typescript
interface BookProps {
  onBackToRoom: () => void;
}
```

### Structure
```typescript
// Fixed sections in order:
1. Hero/Introduction
2. Development Projects (devProjects)
3. Design Projects (designProjects)
4. Achievements (achievements)
5. Education (education)
```

### Data Sources
```typescript
import { devProjects, designProjects, achievements, education } from '@/data/portfolioData';

// Renders all projects without filtering
```

### Navigation
```tsx
<button onClick={onBackToRoom}>
  Back to Interactive Room
</button>
```

---

## ImageWithFallback.tsx

**Purpose:** PROTECTED component for handling image loading errors

### Props Interface
```typescript
interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}
```

### Behavior
1. Attempts to load `src`
2. On error → loads `fallbackSrc` (if provided)
3. On error → displays placeholder with alt text

**DO NOT MODIFY** - System component managed by Figma integration

---

## Type Definitions

### TabletContent
```typescript
type TabletContent = 'about' | 'devProjects' | 'designPortfolio' | 'awards' | 'education';
```

**Usage:**
- Keys for tablet content routing
- Keys for visitedSections tracking
- Keys for hotspot click handlers

### Project
```typescript
interface Project {
  id: string;
  title: string;
  category: string;              // Display label (flexible)
  projectType: "dev" | "design"; // Filtering key (strict)
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}
```

**Filtering Logic:**
- `projectType === 'dev'` → Shows in Dev Projects filter
- `projectType === 'design'` → Shows in Design Projects filter
- `category` → Displayed as label, not used for filtering

### Achievement
```typescript
interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon?: string;
}
```

### Education
```typescript
interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
}
```

---

## Data Flow Diagram

```
User Action → DetectiveRoom → App.tsx → State Update
                                ↓
                          Re-render with new view
                                ↓
                    Conditional component render
                                ↓
              Room + PinkTablet OR PortfolioBook
```

### Example: Opening Dev Projects
```
1. User clicks laptop hotspot
2. DetectiveRoom: handleHotspotClick('devProjects')
3. Calls: onHotspotClick('devProjects')
4. App.tsx: setCurrentView('tablet')
5. App.tsx: setCurrentTabletContent('devProjects')
6. Render: <Room /> + <PinkTablet content='devProjects' />
7. PinkTablet: Displays devProjects with filter tabs
```

### Example: Closing Tablet
```
1. User clicks X or presses Escape
2. PinkTablet: calls markAsVisited('devProjects')
3. PinkTablet: calls onClose()
4. App.tsx: setCurrentView('room')
5. App.tsx: setCurrentTabletContent(null)
6. Render: <Room /> only
7. DetectiveRoom: 'devProjects' no longer wiggles (visited)
```

---

## Component Dependencies

```
App.tsx
├── DetectiveRoom.tsx
│   ├── @radix-ui/react-tooltip (phone layout)
│   ├── portfolioData.ts (hotspotLabels)
│   └── theme.ts (COLORS)
├── PinkTablet.tsx
│   ├── portfolioData.ts (all content arrays)
│   └── theme.ts (Z_INDEX, COLORS)
└── PortfolioBook.tsx
    └── portfolioData.ts (all content arrays)
```

---

## Event Handlers Reference

### Keyboard Shortcuts
| Key | Action | Component |
|-----|--------|-----------|
| `Enter` / `Space` | Activate hotspot | DetectiveRoom |
| `Escape` | Close modal / Return to room | PinkTablet, DetectiveRoom |
| `Tab` | Navigate hotspots | DetectiveRoom |

### Mouse Events
| Event | Triggers | Component |
|-------|----------|-----------|
| `onMouseEnter` | Show tooltip, bounce animation | DetectiveRoom |
| `onMouseLeave` | Hide tooltip, stop bounce | DetectiveRoom |
| `onClick` (hotspot) | Open tablet section | DetectiveRoom |
| `onClick` (overlay) | Close tablet | PinkTablet |
| `onClick` (X button) | Close tablet | PinkTablet |

---

## Prop Drilling Map

```
App.tsx state
│
├─→ currentTabletContent ──→ PinkTablet.content
├─→ visitedSections ──────→ DetectiveRoom.visitedSections
│
├─→ handleCloseTablet() ──→ PinkTablet.onClose
├─→ markAsVisited() ──────→ PinkTablet.markAsVisited
├─→ handleHotspotClick() ─→ DetectiveRoom.onHotspotClick
├─→ handleViewBook() ─────→ DetectiveRoom.onViewBook
└─→ handleBackToRoom() ───→ PortfolioBook.onBackToRoom
```

No prop drilling deeper than 1 level.