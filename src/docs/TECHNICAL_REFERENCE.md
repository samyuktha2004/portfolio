# Technical Reference

**Architecture, shortcuts, and troubleshooting.**

---

## 📁 File Structure

```
/
├── App.tsx                             # Main entry point
├── components/
│   ├── DetectiveRoom.tsx               # Interactive room (home)
│   ├── PinkTablet.tsx                  # Modal for portfolio sections
│   ├── PortfolioBook.tsx               # Resume/CV view
│   ├── tablet-sections/                # Content for each tablet section
│   │   ├── AboutMe.tsx
│   │   ├── Projects.tsx                # Code projects
│   │   ├── DesignShowcase.tsx          # Design portfolio
│   │   ├── EducationCredentials.tsx
│   │   └── CaseAchievements.tsx
│   └── ui/                             # Reusable components
│       ├── StandardButton.tsx          # GitHub/Demo/Design buttons
│       ├── LoadingSpinner.tsx
│       └── ...
├── data/
│   └── portfolioData.ts                # ⭐ SINGLE SOURCE OF TRUTH
├── constants/
│   └── theme.ts                        # Colors, spacing, animations
├── styles/
│   └── globals.css                     # Typography defaults
└── public/
    └── assets/
        └── portfolio/                  # Local images go here
```

---

## ⌨️ Keyboard Shortcuts

### Portfolio Book (Resume View)
- `Ctrl/Cmd + P` - Download resume (with confetti!)
- `Escape` - Back to room

### Pink Tablet (Modal)
- `Arrow Left/Right` - Navigate sections
- `Home/End` - Jump to first/last section
- `Escape` - Close tablet

### Detective Room (Home)
- `Tab` - Navigate hotspots
- `Enter/Space` - Activate focused hotspot

---

## 📱 Responsive Breakpoints

**Test at these sizes:**
- **Phone:** 375px (iPhone SE minimum)
- **Tablet:** 768px
- **Laptop:** 1024px
- **Desktop:** 1280px+

**Tailwind Classes:**
- `md:` - 768px+
- `lg:` - 1024px+

---

## 🎨 Design System

### Colors (from `/constants/theme.ts`)
```typescript
COLORS: {
  primary: '#FFB6C1',      // Light pink
  secondary: '#87CEEB',    // Sky blue
  accent: '#fd6698',       // Hot pink
  background: '#FFF0F5',   // Lavender blush
}
```

### Typography Rules

**⚠️ IMPORTANT:**
- **DO NOT** use Tailwind classes: `text-xl`, `font-bold`, `leading-tight`
- **WHY?** Typography is set in `/styles/globals.css`
- **EXCEPTION:** Only use if explicitly requested

---

## 🧩 Key Components

### StandardButton
**Used for:** GitHub, Demo, Design links

```typescript
<StandardButton
  href="https://github.com/username/repo"
  icon={Github}
  label="GitHub"
  variant="github"  // or "primary" or "secondary"
  external
/>
```

**Variants:**
- `github` - White button (for GitHub)
- `primary` - Pink button (for demos)
- `secondary` - Blue button (for design links)

---

### ImageWithFallback
**Used for:** New images with loading states

```typescript
<ImageWithFallback
  src="/assets/portfolio/image.png"
  alt="Description"
  className="w-full h-full object-cover"
/>
```

**Features:**
- Pink loading spinner
- Smooth fade-in
- Error handling

**⚠️ Protected:** Do not modify `/components/figma/ImageWithFallback.tsx`

---

### LoadingSpinner
**Used for:** Video/iframe loading states

```typescript
<LoadingSpinner size="medium" color="pink" />
```

**Sizes:** `small`, `medium`, `large`

---

## 🎯 Data Structure

### Project Types

**Development Projects:**
```typescript
{
  projectType: "dev",     // Controls filter (don't change)
  category: "Web Dev",    // Display label (change freely)
}
```

**Design Projects:**
```typescript
{
  type: "Mobile UI/UX",   // Display label
  // No projectType needed
}
```

---

### Media Items

**Images:**
```typescript
{ type: 'image', url: '/assets/portfolio/image.png' }
{ type: 'image', url: 'https://i.imgur.com/abc.png' }
```

**Videos:**
```typescript
{ type: 'video', url: 'https://www.youtube.com/embed/ABC' }
{ type: 'video', url: 'https://www.canva.com/design/XYZ/view' }
{ type: 'video', url: 'https://player.vimeo.com/video/123' }
```

---

## 🔄 How Slideshows Work

### Navigation Logic
- **First slide:** Only RIGHT arrow visible
- **Last slide:** Only LEFT arrow visible
- **Middle slides:** Both arrows visible
- **Linear navigation:** No wrap-around

### Loading States
- **Images:** Pink spinner via `ImageWithFallback`
- **Videos/iframes:** Pink spinner via `useEffect` + `onLoad`

### Dots
- Click to jump to specific slide
- Active slide has elongated dot
- Hover effect on inactive dots

---

## 🐛 Common Issues

### Images Not Loading

**Check:**
1. File exists in `/public/assets/portfolio/`
2. File name matches exactly (case-sensitive)
3. URL starts with `https://` (external)
4. Local path starts with `/assets/` (no `./` or `../`)

**Solution:**
```typescript
// ❌ Wrong
url: './assets/portfolio/image.png'
url: '../public/assets/portfolio/image.png'

// ✅ Correct
url: '/assets/portfolio/image.png'
```

---

### Google Drive Images Won't Load

**Problem:** CORS (Cross-Origin Resource Sharing) restrictions

**Why it's confusing:**
- Link works in browser (Google allows direct viewing)
- Link fails in portfolio (Google blocks embedding)

**Solution:**
1. Download image from Drive
2. Upload to `/public/assets/portfolio/` OR Imgur
3. Use new URL

---

### Videos Not Playing

**YouTube:**
```typescript
// ❌ Wrong (watch URL)
url: 'https://www.youtube.com/watch?v=ABC123'

// ✅ Correct (embed URL)
url: 'https://www.youtube.com/embed/ABC123'
```

**Canva:**
- Check "Anyone with link can view"
- Use direct `view` URL (not `edit`)

**Vimeo:**
- Check privacy settings allow embedding
- Use player URL: `https://player.vimeo.com/video/ID`

---

### Slideshow Arrows Not Showing

**Expected behavior:**
- First slide: Only RIGHT arrow
- Last slide: Only LEFT arrow
- Single item: No arrows

**If both arrows missing on middle slides:**
1. Check browser console for errors
2. Verify `mediaItems` has multiple items
3. Verify each item has `type` and `url`

---

## 🎯 Tooltip System

### Desktop (Laptop/Tablet)
- Custom tooltips
- Positioned via `TOOLTIP_CONFIG` in `/constants/theme.ts`
- CSS-based, no library

### Mobile (Phone)
- Radix UI tooltips
- Automatically positioned
- Touch-friendly

**⚠️ Protected:** Do not modify phone tooltip structure

---

## 🔒 Protected Patterns

**DO NOT modify:**
- `/components/figma/ImageWithFallback.tsx`
- Typography in `/styles/globals.css`
- Phone layout tooltip structure
- `TOOLTIP_CONFIG` positioning logic

**WHY?**
- These are core system components
- Breaking them affects multiple features
- Very difficult to debug

---

## 📊 State Management

### Room State
- Managed in `DetectiveRoom.tsx`
- Controls active view (room/tablet/book)

### Tablet State
- Managed in `PinkTablet.tsx`
- Controls active section
- Keyboard navigation

### Slideshow State
- Managed in `DesignShowcase.tsx`
- Tracks current slide per project
- Handles loading states

---

## 🧪 Testing Checklist

**Before deployment:**

**Visual:**
- [ ] Test at 375px, 768px, 1024px, 1280px
- [ ] Check all images load
- [ ] Verify all videos play
- [ ] Test slideshow navigation

**Functional:**
- [ ] Download resume works (confetti appears)
- [ ] All external links open in new tab
- [ ] Keyboard shortcuts work
- [ ] Tooltips appear on hover (desktop)
- [ ] Mobile layout works (touch)

**Content:**
- [ ] No placeholder URLs remain
- [ ] All links go to correct destinations
- [ ] Spelling/grammar checked
- [ ] Metrics are accurate

---

## 🚀 Performance Tips

### Images
- Compress before uploading (TinyPNG, Squoosh)
- Target: < 500KB per image
- Use WebP format when possible
- Consistent aspect ratios (16:9)

### Videos
- Use YouTube/Vimeo (don't self-host large files)
- Keep under 3 minutes
- Add loading="lazy" for below-fold content

### General
- Minimize number of external requests
- Use local assets when possible
- Test on slow 3G connection

---

## 🔧 Browser Console

**Open console:**
- Chrome/Edge: `F12` or `Ctrl+Shift+I`
- Safari: `Cmd+Option+I`
- Firefox: `F12` or `Ctrl+Shift+K`

**Common errors:**

**Image failed to load:**
```
Failed to load resource: net::ERR_FAILED
```
→ Check URL, verify file exists

**CORS error:**
```
Access to image at '...' from origin '...' has been blocked by CORS policy
```
→ Use different image host (not Google Drive)

**React error:**
```
Warning: Each child in a list should have a unique "key" prop
```
→ Add unique `key={index}` to mapped items

---

## 📦 Dependencies

### Key Libraries
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **Radix UI** - Accessible components (phone tooltips)
- **Canvas Confetti** - Resume download celebration

### Import Syntax
```typescript
// Standard
import { Component } from 'library'

// With version (some libraries require)
import { useForm } from 'react-hook-form@7.55.0'
import { toast } from 'sonner@2.0.3'
```

---

## 💡 Quick Fixes

### "Component not updating"
1. Check if you saved the file
2. Check browser console for errors
3. Hard refresh (`Ctrl+Shift+R`)

### "Styles not applying"
1. Check Tailwind class names (no typos)
2. Verify no conflicting inline styles
3. Check if overriding typography (don't use `text-*`, `font-*`)

### "Layout broken on mobile"
1. Check responsive classes (`md:`, `lg:`)
2. Test at exact breakpoint (375px, 768px)
3. Verify no fixed widths

---

## 🎓 Learning Resources

### Understanding the Code
1. Start with `/data/portfolioData.ts` (content)
2. Look at `/components/tablet-sections/` (how content renders)
3. Check `/components/ui/` (reusable components)
4. Study `/constants/theme.ts` (design tokens)

### Making Changes
1. Edit content → `/data/portfolioData.ts`
2. Edit styles → Tailwind classes or `/constants/theme.ts`
3. Edit structure → Component files
4. Test → Multiple breakpoints + browsers

---

## 🆘 Emergency Protocols

### Portfolio Not Loading
1. Check browser console
2. Verify `/data/portfolioData.ts` has no syntax errors
3. Look for missing commas, brackets, quotes
4. Hard refresh browser

### Broken After Update
1. Revert changes (`Ctrl+Z`)
2. Check what file was edited
3. Verify syntax (brackets, commas)
4. Test incrementally

### Can't Find Issue
1. Check browser console (errors are specific)
2. Test in incognito (clears cache)
3. Compare with working version
4. Isolate the change

---

**Need content help?** Check [PORTFOLIO_GUIDE.md](PORTFOLIO_GUIDE.md)
