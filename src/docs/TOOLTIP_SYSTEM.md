# Tooltip System Documentation

## Overview

Two separate tooltip implementations coexist in DetectiveRoom.tsx:

1. **Phone Layout**: Radix UI Tooltips (touch-optimized)
2. **Laptop/Tablet Layout**: Custom positioned tooltips (hover-optimized)

---

## Phone Layout Tooltips

### Implementation
- **Library**: `@radix-ui/react-tooltip`
- **Visibility**: `md:hidden xl:block` (< 768px, ≥ 1280px)
- **Trigger**: Click/tap on hotspot
- **Location**: Lines ~130-280 in DetectiveRoom.tsx

### Structure
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <button onClick={handleClick}>
        {/* Hotspot image */}
      </button>
    </TooltipTrigger>
    <TooltipContent 
      side="top" 
      className="bg-white border-2 border-[#FFB6C1]"
    >
      {hotspotLabels.desktop}
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Configuration
- **Side**: Always `"top"`
- **Align**: Varies per hotspot (`"center"`, `"end"`)
- **Offset**: `sideOffset={8}` standard spacing
- **Styling**: Matches custom tooltip style

### State Management
**Does NOT use `hoveredHotspot` state** - Radix UI handles internally

### Hotspot Configuration
```tsx
// Character
<TooltipContent side="top" align="center" />

// Laptop
<TooltipContent side="top" align="center" />

// Smartphone  
<TooltipContent side="top" align="end" />

// Medals
<TooltipContent side="top" align="center" />

// Books
<TooltipContent side="top" align="center" />
```

---

## Laptop/Tablet Layout Tooltips

### Implementation
- **Type**: Custom positioned `<div>` elements
- **Visibility**: `md:block xl:hidden` (768px - 1279px)
- **Trigger**: Mouse hover (`onMouseEnter`/`onMouseLeave`)
- **Location**: Lines ~285-500 in DetectiveRoom.tsx

### Structure
```tsx
// Hotspot button with hover handlers
<button
  onMouseEnter={() => setHoveredHotspot('desktop')}
  onMouseLeave={() => setHoveredHotspot(null)}
>
  {/* Hotspot image */}
</button>

// Separate tooltip div (rendered outside hotspot)
{hoveredHotspot && TOOLTIP_CONFIG[hoveredHotspot] && (
  <div className={`absolute ${TOOLTIP_CONFIG[hoveredHotspot].position} transform ${TOOLTIP_CONFIG[hoveredHotspot].align}`}>
    <div className="bg-white px-2 md:px-4 py-1 md:py-2 border-2 border-[#FFB6C1] rounded-full">
      {hotspotLabels[hoveredHotspot]}
    </div>
  </div>
)}
```

### State Management
**Uses `hoveredHotspot` state** to control visibility and positioning

```typescript
const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);

// Possible values:
'desktop' | 'smartphone' | 'books' | 'medals' | 'character' | null
```

### TOOLTIP_CONFIG Object

**Location**: Line ~50 in DetectiveRoom.tsx

```typescript
const TOOLTIP_CONFIG: Record<string, { position: string; align: string }> = {
  desktop: { 
    position: 'top-[60%] left-[21%]', 
    align: '-translate-x-1/2 -translate-y-[120%]' 
  },
  smartphone: { 
    position: 'top-[40%] right-[15%]', 
    align: 'translate-x-1/2 -translate-y-[120%]' 
  },
  books: { 
    position: 'bottom-[65%] right-[38%]', 
    align: '-translate-y-[120%]' 
  },
  medals: { 
    position: 'top-[30%] left-[27%]', 
    align: '-translate-x-1/2 -translate-y-[140%]' 
  },
  character: { 
    position: 'bottom-[10%] left-[52%]', 
    align: '-translate-x-1/2 -translate-y-[110%]' 
  }
};
```

### Position Breakdown

| Hotspot | Base Position | Horizontal Align | Vertical Offset | Reasoning |
|---------|---------------|------------------|-----------------|-----------|
| `desktop` | `top-[60%] left-[21%]` | `-translate-x-1/2` (center) | `-translate-y-[120%]` | Centered above laptop |
| `smartphone` | `top-[40%] right-[15%]` | `translate-x-1/2` (right) | `-translate-y-[120%]` | Right-aligned above phone |
| `books` | `bottom-[65%] right-[38%]` | none | `-translate-y-[120%]` | Above books stack |
| `medals` | `top-[30%] left-[27%]` | `-translate-x-1/2` (center) | `-translate-y-[140%]` | Extra space above medals |
| `character` | `bottom-[10%] left-[52%]` | `-translate-x-1/2` (center) | `-translate-y-[110%]` | Above character head |

---

## Shared Styling

Both tooltip systems use identical visual styling:

```css
Background: bg-white
Border: border-2 border-[#FFB6C1]
Text color: text-[#FFB6C1]
Padding: px-2 md:px-4 py-1 md:py-2
Font size: text-xs md:text-sm
Shape: rounded-full
Shadow: shadow-xl
Whitespace: whitespace-nowrap
```

### Animation

**Class**: `.animate-tooltip-appear`

```css
@keyframes tooltip-appear {
  0% { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-tooltip-appear {
  animation: tooltip-appear 0.3s ease-in-out;
}
```

**Location**: DetectiveRoom.tsx `<style>` block, line ~596

---

## Data Source

### hotspotLabels Object

**Location**: `/data/portfolioData.ts`

```typescript
export const hotspotLabels = {
  character: "👋 About Me",
  desktop: "💻 Development Projects",
  smartphone: "🎨 Design Portfolio",
  medals: "🏆 Achievements & Awards",
  books: "📚 Education & Learning"
};
```

**Critical Rules:**
1. Keys must match `hoveredHotspot` values
2. Keys must match Radix UI hotspot IDs
3. Adding new hotspot requires entry here
4. Changing keys breaks tooltip rendering

---

## State Synchronization

### hoveredHotspot State Usage

```typescript
// Set on mouse enter
onMouseEnter={() => setHoveredHotspot('desktop')}

// Clear on mouse leave
onMouseLeave={() => setHoveredHotspot(null)}

// Used for THREE purposes:
1. Custom tooltip visibility → {hoveredHotspot && TOOLTIP_CONFIG[hoveredHotspot] && ...}
2. Bounce animation → className={hoveredHotspot === 'desktop' ? 'animate-bounce-slow' : ''}
3. Ping border → {hoveredHotspot === 'desktop' && <div className="animate-ping" />}
```

**Phone layout does NOT use this state** - Radix UI manages its own internal state

---

## Hover Event Handlers

### Standard Pattern (Laptop/Tablet)
```tsx
<button
  className="absolute ..."
  onMouseEnter={() => setHoveredHotspot('desktop')}
  onMouseLeave={() => setHoveredHotspot(null)}
  onClick={() => handleHotspotClick('devProjects')}
  onKeyDown={(e) => handleHotspotKeyDown(e, 'devProjects')}
  tabIndex={0}
>
  <div className={hoveredHotspot === 'desktop' ? 'animate-bounce-slow' : ''}>
    <img src={laptopImage} alt="..." />
    {hoveredHotspot === 'desktop' && (
      <div className="absolute -inset-2 border-4 border-[#FFB6C1] animate-ping" />
    )}
  </div>
</button>
```

### Phone Layout (Radix UI)
```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <button
      onClick={() => handleHotspotClick('devProjects')}
      onKeyDown={(e) => handleHotspotKeyDown(e, 'devProjects')}
      tabIndex={0}
    >
      <img src={laptopImage} alt="..." />
    </button>
  </TooltipTrigger>
  <TooltipContent side="top" align="center">
    {hotspotLabels.desktop}
  </TooltipContent>
</Tooltip>
```

**Key Difference**: Phone layout has NO mouse handlers - tap/click triggers tooltip

---

## Z-Index Hierarchy

```typescript
// From theme.ts
Z_INDEX.tooltip = 999

// Applied in custom tooltips
className="z-[999] pointer-events-none"
```

**Layering Order:**
1. Room background (`z-0`)
2. Hotspot images (`z-10`)
3. Hover effects (ping borders) (`z-10`)
4. Custom tooltips (`z-[999]`)
5. Tablet modal (`z-[9999]`)

---

## Adding New Hotspots

### Checklist

1. **Add to portfolioData.ts**
   ```typescript
   export const hotspotLabels = {
     // ...existing
     newHotspot: "🔍 New Section"
   };
   ```

2. **Add to TOOLTIP_CONFIG** (if using laptop layout)
   ```typescript
   const TOOLTIP_CONFIG = {
     // ...existing
     newHotspot: { 
       position: 'top-[50%] left-[30%]', 
       align: '-translate-x-1/2 -translate-y-[120%]' 
     }
   };
   ```

3. **Add hotspot button (both layouts)**
   ```tsx
   // Phone layout
   <Tooltip>
     <TooltipTrigger asChild>
       <button onClick={() => handleHotspotClick('newSection')}>
         <img src={newImage} alt="..." />
       </button>
     </TooltipTrigger>
     <TooltipContent>{hotspotLabels.newHotspot}</TooltipContent>
   </Tooltip>
   
   // Laptop layout
   <button
     onMouseEnter={() => setHoveredHotspot('newHotspot')}
     onMouseLeave={() => setHoveredHotspot(null)}
     onClick={() => handleHotspotClick('newSection')}
   >
     <img src={newImage} alt="..." />
   </button>
   ```

4. **Verify TabletContent type** (if new section)
   ```typescript
   type TabletContent = 'about' | 'devProjects' | '...' | 'newSection';
   ```

---

## Troubleshooting

### Tooltip not appearing (Custom)
1. Check `hoveredHotspot` state updates on hover
2. Verify key exists in `TOOLTIP_CONFIG`
3. Check key exists in `hotspotLabels`
4. Verify `md:block xl:hidden` visibility class

### Tooltip not appearing (Radix UI)
1. Check `<TooltipProvider>` wraps all tooltips
2. Verify `TooltipTrigger` has `asChild` prop
3. Check `md:hidden xl:block` visibility class
4. Verify button is clickable (not overlapped)

### Wrong position
1. Adjust `position` values in `TOOLTIP_CONFIG`
2. Adjust `align` transforms for horizontal centering
3. Increase `-translate-y-[120%]` to move higher

### Animation not working
1. Verify `.animate-tooltip-appear` class in `<style>` block
2. Check class applied to tooltip div
3. Verify `@keyframes tooltip-appear` definition exists

### Text truncated
1. Add `whitespace-nowrap` class
2. Increase `px-*` padding if text too long
3. Consider shorter label text

---

## Performance Notes

### Re-render Triggers
- `hoveredHotspot` state changes → Only custom tooltip re-renders
- Radix UI tooltips → Managed internally, no DetectiveRoom re-render

### Pointer Events
```css
pointer-events-none
```
Applied to custom tooltips to prevent hover conflicts

### Layout Shift Prevention
Custom tooltips use:
- `position: absolute` - Removed from document flow
- Fixed parent container - Stable positioning reference
- No content reflow on hover

---

## Migration Notes

### DO NOT merge layouts
- Phone and Laptop layouts must remain separate
- Each serves different interaction paradigms (touch vs hover)
- Radix UI not replaceable with custom tooltips on touch devices

### When to modify
✅ **Safe to change:**
- `TOOLTIP_CONFIG` position values
- Tooltip styling (colors, padding, border)
- Animation duration/easing
- Text in `hotspotLabels`

❌ **Requires careful testing:**
- Radix UI structure on phone layout
- `hoveredHotspot` state logic
- Tooltip rendering conditional
- Layout visibility classes (`md:hidden`, `xl:block`)

### Testing after changes
1. Test at 375px (phone) - Radix tooltips work
2. Test at 768px (tablet) - Custom tooltips work
3. Test at 1280px+ (laptop) - Phone layout scales correctly
4. Verify hover states don't conflict with click handlers
5. Check keyboard navigation still functions
