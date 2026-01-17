# Development Guidelines

## 📚 Documentation

**3 Essential Files:**
- `/docs/README.md` - Overview & navigation
- `/docs/PORTFOLIO_GUIDE.md` - How to update content (images, videos, projects)
- `/docs/TECHNICAL_REFERENCE.md` - Architecture, shortcuts, troubleshooting

**After code changes:**
- ✅ Update relevant docs
- ✅ Keep concise and accurate
- ❌ Don't create new docs unless absolutely necessary

---

## Rules

- TypeScript for all components
- Import from `/data/portfolioData.ts` (single source of truth)
- Use `/constants/theme.ts` for colors, spacing, animations
- Keep components small and focused
- Named exports (except App.tsx)

## Data Structure

- `projectType: "dev" | "design"` - Controls filtering
- `category` - Display label only (can change freely)

## Styling

✅ Tailwind for layout/spacing/positioning
✅ Constants for colors/animations/z-index
❌ Avoid `text-*`, `font-*` classes (use `globals.css` defaults)

## Images

- Use `<ImageWithFallback />` for new images
- Import Figma assets: `import img from 'figma:asset/[hash].png'`
- Add loading states with `useImageLoader` hook

## Responsive

- Mobile-first approach
- Test: 375px (mobile), 768px (tablet), 1024px (laptop)
- Phone layout: `md:hidden` - Uses Radix UI Tooltips
- Laptop/Tablet layout: `md:block` - Uses custom tooltips with TOOLTIP_CONFIG