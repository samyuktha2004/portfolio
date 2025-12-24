# 👩‍💻 Developer Guide

## Quick Reference

### Project Structure
- **`/components`** - All React components
- **`/constants/theme.ts`** - Colors, spacing, animations
- **`/data/portfolioData.ts`** - All content (single source of truth)
- **`/hooks`** - Custom React hooks
- **`/utils`** - Helper functions

---

## Common Tasks

### Add a New Project
Edit `/data/portfolioData.ts`:
```typescript
export const projects = {
  development: [
    {
      id: 'new-project',
      title: 'Project Name',
      description: 'Description',
      technologies: ['React', 'TypeScript'],
      links: { github: 'url', live: 'url' }
    }
  ]
}
```

### Use Theme Constants
```typescript
import { COLORS, ANIMATIONS, SPACING } from '../constants/theme';

// Use instead of hardcoded values
style={{ color: COLORS.HOT_PINK }}
```

### Add Loading States
```typescript
import { useImageLoader } from '../hooks/useImageLoader';
import { LoadingSpinner } from '../ui/LoadingSpinner';

const { isLoading, handleLoad, handleError } = useImageLoader();

{isLoading && <LoadingSpinner />}
<img onLoad={handleLoad} onError={handleError} />
```

---

## Component Patterns

### Creating Components
```typescript
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export function MyComponent({ title, onClick }: MyComponentProps) {
  return <div onClick={onClick}>{title}</div>;
}
```

### Using Data
```typescript
// ✅ Import from portfolioData
import { projects } from '../../data/portfolioData';

// ❌ Don't hardcode
const projects = [{ ... }]; // NO!
```

### Styling
```typescript
// ✅ Use Tailwind for layout
className="flex items-center gap-4 p-6"

// ✅ Use constants for colors
import { COLORS } from '../constants/theme';
style={{ color: COLORS.HOT_PINK }}

// ❌ Don't use font size classes (overrides defaults)
className="text-2xl font-bold" // NO!
```

---

## Available Utilities

### Hooks
- **`useImageLoader()`** - Single image loading state
- **`useMultiImageLoader(keys)`** - Multiple images loading state

### Components
- **`<LoadingSpinner />`** - Consistent loading indicator
- **`<StandardButton />`** - Unified button styles
- **`<FlippableAvatar />`** - 3D flip animation
- **`<ImageWithFallback />`** - Auto-loading images
- **`<ErrorBoundary />`** - Error protection

### Constants
- **`COLORS`** - All theme colors
- **`SPACING`** - Responsive spacing
- **`ANIMATIONS`** - Duration/easing values
- **`Z_INDEX`** - Layer management
- **`BREAKPOINTS`** - Responsive breakpoints

---

## Building

```bash
# Development
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

---

## Tips

- Keep components small and focused
- Use TypeScript types
- Import from portfolioData for content
- Use theme constants instead of hardcoded values
- Test mobile and desktop views
