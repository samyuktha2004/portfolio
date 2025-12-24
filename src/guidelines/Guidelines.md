# Development Guidelines

## General Rules
- Use TypeScript for all components
- Import content from `/data/portfolioData.ts` (single source of truth)
- Use constants from `/constants/theme.ts` instead of hardcoded values
- Keep components small and focused
- Use Tailwind for layout, constants for colors/spacing
- Don't override font sizes/weights unless necessary (use globals.css defaults)

## Component Conventions
- Name: PascalCase for components, camelCase for functions
- Props: Define TypeScript interface above component
- Exports: Named exports (except App.tsx)

## Styling
- ✅ Tailwind for: layout, spacing, positioning
- ✅ Constants for: colors, animations, z-index
- ❌ Avoid: `text-*`, `font-*` classes (override defaults)

## Image Handling
- Use `<ImageWithFallback />` for user images
- Import Figma assets: `import img from 'figma:asset/[hash].png'`
- Add loading states with `useImageLoader` hook

## Responsive Design
- Mobile-first approach
- Test at: 375px (mobile), 768px (tablet), 1024px (laptop)
- Use BREAKPOINTS constants for consistency
