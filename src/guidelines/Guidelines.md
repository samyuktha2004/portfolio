# Development Guidelines

## ⭐ CRITICAL DOCUMENTATION RULES

### Rule 1: Update Existing Docs, Don't Create New Ones
**MANDATORY:** Do NOT create new documentation files unless absolutely necessary.

**After EVERY code change:**
1. ✅ Check which existing docs need updates
2. ✅ Update those docs immediately
3. ✅ Verify all references still accurate
4. ❌ Do NOT create new doc files

**Only create new docs if:**
- Documenting entirely new system (e.g., new auth system)
- Adding major new feature category
- **NOT for:** Bug fixes, small features, refactors, tweaks

**If you must create a new doc:**
- ✅ Place it in `/docs/` folder
- ✅ Add it to `/docs/README.md` index
- ✅ Keep it concise and focused

### Rule 2: All Documentation in /docs Folder
**MANDATORY:** All new documentation files MUST be created inside `/docs/` folder.

**Examples:**
- ✅ `/docs/NEW_FEATURE.md` - Correct
- ❌ `/NEW_FEATURE.md` - Wrong (root directory)

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