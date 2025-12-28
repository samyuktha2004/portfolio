# 📚 Quick Reference Guide

## ⌨️ Keyboard Shortcuts

### Portfolio Book (Resume View)
- `Ctrl/Cmd + P` - Download Resume (with confetti!)
- `Ctrl/Cmd + D` - Download Resume (alternative)
- `Escape` - Back to Room
- `Tab` - Navigate elements

### Pink Tablet (Modal)
- `Arrow Right/Left` - Navigate sections
- `Home/End` - Jump to first/last
- `Escape` - Close tablet
- `Tab` - Navigate elements

### Detective Room
- `Tab` - Navigate hotspots
- `Enter/Space` - Activate focused hotspot

---

## 📊 Responsive Breakpoints

Test at these screen sizes:
- **Phone:** 375px (iPhone SE minimum)
- **Tablet:** 768px
- **Laptop:** 1024px
- **Desktop:** 1280px+

---

## 🎨 Design Tokens

### Colors
- **Primary Pink:** `#FFB6C1`
- **Light Pink:** `#FFF0F5`
- **Sky Blue:** `#87CEEB`
- **Hot Pink:** `#fd6698`

### Typography
- **Font:** Fredoka (Google Fonts)
- **DO NOT** override with Tailwind classes: `text-*`, `font-*`, `leading-*`
- Use defaults from `/styles/globals.css`

---

## 📁 File Structure

```
/
├── App.tsx                      # Main app component
├── components/
│   ├── DetectiveRoom.tsx        # Interactive room with hotspots
│   ├── PinkTablet.tsx           # Modal for portfolio sections
│   ├── PortfolioBook.tsx        # Resume/CV view
│   └── ui/                      # Reusable UI components
├── data/
│   └── portfolioData.ts         # Single source of truth ⭐
├── constants/
│   └── theme.ts                 # Design tokens
├── styles/
│   └── globals.css              # Typography defaults
└── docs/                        # Documentation (you are here!)
```

---

## 🔄 Updating Content

**All content lives in:** `/data/portfolioData.ts`

### To Update:
1. Edit `/data/portfolioData.ts`
2. Change any text, links, or data
3. Save - hot reload updates automatically

### Key Data Objects:
- `personalInfo` - Name, contact, social links
- `welcomeText` - Homepage text
- `devProjects` - Development portfolio
- `designShowcase` - Design portfolio
- `education` - Academic background
- `awards` - Achievements & awards
- `aboutMe` - Personal info & fun facts

---

## 🎯 Common Tasks

### Adding a New Project
```typescript
// In /data/portfolioData.ts

export const devProjects = [
  {
    title: "Project Name",
    category: "Web Development",
    projectType: "dev",
    role: "Full Stack Developer",
    duration: "Jan 2024 - Mar 2024",
    description: "What you built...",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    technologies: ["React", "Node.js"],
    github: "https://github.com/...",
    liveLink: "https://..."
  },
  // ... existing projects
];
```

### Adding Design Images (Slideshow)
```typescript
export const designShowcase = [
  {
    title: "Project Name",
    type: "Mobile UI/UX",
    images: [
      "https://url.com/image1.png",
      "https://url.com/image2.png", // Multiple images = auto slideshow
      "https://url.com/image3.png"
    ],
    // ... other fields
  }
];
```

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] All features working (test on phone + laptop)
- [ ] No console errors
- [ ] Content updated in `portfolioData.ts`
- [ ] Resume PDF working
- [ ] Test keyboard navigation
- [ ] Host on Vercel

---

## 🐛 Quick Troubleshooting

### Images not loading?
- Check image URLs in `portfolioData.ts`
- Verify links are public/accessible
- Check browser console for errors

### Layout looks broken?
- Test at correct breakpoints (375px, 768px, 1024px)
- Check browser console for errors
- Verify no custom `text-*` or `font-*` classes added

### Tooltips not showing?
- Phone: Uses Radix UI Tooltips (tap to show)
- Laptop: Uses custom tooltips (hover to show)
- Check `DetectiveRoom.tsx` for `hoveredHotspot` state

### State not updating?
- All state flows top-down from `App.tsx`
- Check `onHotspotClick`, `onViewBook` callbacks
- See `/docs/ARCHITECTURE.md` for state management

---

## 📖 Full Documentation

For detailed technical docs:
- **[AI_WORKFLOW.md](AI_WORKFLOW.md)** - Development workflow (MANDATORY)
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - System architecture
- **[COMPONENT_API.md](COMPONENT_API.md)** - Component reference
- **[TOOLTIP_SYSTEM.md](TOOLTIP_SYSTEM.md)** - Tooltip implementation
- **[TESTING.md](TESTING.md)** - Testing guidelines


