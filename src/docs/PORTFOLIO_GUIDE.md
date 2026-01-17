# Portfolio Content Guide

## 📍 Where Everything Lives

**ONE file controls everything:**
```
/data/portfolioData.ts
```

Edit this file to change:
- Projects (dev + design)
- Personal info & links
- Education & achievements
- About me section
- Welcome text

---

## 🎨 Adding Design Projects

### Basic Structure

```typescript
{
  title: "Project Name",
  type: "Project Type (Mobile UI/UX, Branding, etc.)",
  mediaItems: [
    // Images and videos go here
  ],
  visualElements: ["Element 1", "Element 2"],
  colorPalette: ["#color1", "#color2"],
  designNotes: "Short description of design approach",
  demoLink: "" // Optional: Figma, Behance, etc.
}
```

---

## 🖼️ Images: 2 Options

### Option 1: Local Assets (Recommended)

**Why?**
- You control everything
- No broken external links
- Faster loading
- Professional

**How:**
1. Drop image in `/public/assets/portfolio/`
2. Use lowercase, hyphens (no spaces)
   - Good: `gdg-chennai-poster-1.png`
   - Bad: `GDG Chennai Poster.png`

3. Reference it:
```typescript
{ type: 'image', url: '/assets/portfolio/gdg-chennai-poster-1.png' }
```

---

### Option 2: External URLs

**Best for:** Quick testing, temporary placeholders

**Recommended Services:**
- **Imgur** - Free, fast (https://imgur.com)
- **Cloudinary** - Professional, free tier

```typescript
{ type: 'image', url: 'https://i.imgur.com/abc123.png' }
```

**⚠️ Avoid:**
- Google Drive (CORS issues - won't work)

---

## 🎥 Videos

### YouTube (Best for Public Videos)

```typescript
// Get video ID from URL: youtube.com/watch?v=ABC123
// Use embed format:
{ type: 'video', url: 'https://www.youtube.com/embed/ABC123' }
```

---

### Canva Embeds

```typescript
// Paste the Canva "view" link directly:
{ type: 'video', url: 'https://www.canva.com/design/DAG4BACm8Sk/view' }
```

**How to get Canva link:**
1. Open design in Canva
2. Click "Share" → "Anyone with link can view"
3. Copy the link
4. Paste into `mediaItems`

---

### Other Platforms

**Vimeo:**
```typescript
{ type: 'video', url: 'https://player.vimeo.com/video/123456789' }
```

**Direct Video Files (.mp4, .webm):**
```typescript
{ type: 'video', url: 'https://your-cdn.com/video.mp4' }
```

---

## 🔗 Demo Links (Optional)

**Add "View Demo" button to any design project:**

```typescript
{
  title: "Tomocha App Design",
  // ... other fields ...
  demoLink: "https://www.figma.com/proto/ABC123" // Pink button appears!
}
```

**Perfect for:**
- Figma prototypes
- Behance case studies
- Live websites
- Dribbble shots
- YouTube walkthroughs

**Leave empty if not needed:**
```typescript
demoLink: "" // No button appears
```

---

## 📸 Multiple Images/Videos (Slideshow)

**Add multiple items to create slideshow:**

```typescript
mediaItems: [
  { type: 'image', url: '/assets/portfolio/gdg-poster-1.png' },
  { type: 'image', url: '/assets/portfolio/gdg-poster-2.png' },
  { type: 'video', url: 'https://www.canva.com/design/ABC/view' },
  { type: 'image', url: '/assets/portfolio/gdg-poster-3.png' }
]
```

**Features:**
- Arrow navigation (left/right)
- Dot indicators (click to jump)
- Loading animations
- Touch-friendly on mobile

---

## 💻 Adding Code Projects

```typescript
{
  title: "Project Name",
  category: "Web Development", // Display label
  projectType: "dev", // Filter type (don't change)
  description: "Brief description",
  technologies: ["React", "TypeScript", "Tailwind"],
  highlights: [
    "Key achievement 1",
    "Key achievement 2"
  ],
  links: {
    github: "https://github.com/username/repo",
    demo: "https://your-demo.com",
    design: "" // Optional Figma link
  }
}
```

---

## 🎯 Complete Example

```typescript
{
  title: "GDG Chennai",
  type: "Event Branding & Social Media",
  mediaItems: [
    // Local images
    { type: 'image', url: '/assets/portfolio/gdg-poster-1.png' },
    { type: 'image', url: '/assets/portfolio/gdg-poster-2.png' },
    
    // Canva presentation
    { type: 'video', url: 'https://www.canva.com/design/DAG4BACm8Sk/view' },
    
    // YouTube demo
    { type: 'video', url: 'https://www.youtube.com/embed/ABC123' },
    
    // External image
    { type: 'image', url: 'https://i.imgur.com/xyz.png' }
  ],
  visualElements: [
    "Event Posters",
    "Social Media Graphics",
    "Merchandise Design"
  ],
  colorPalette: ["#4285F4", "#EA4335", "#34A853", "#FBBC05"],
  designNotes: "Google-themed design series for 10+ events reaching 500+ students",
  demoLink: "https://www.behance.net/gallery/123/gdg-chennai" // Optional
}
```

---

## 🐛 Troubleshooting

### Image Not Loading?
- ✅ Check if URL works in incognito browser
- ✅ Verify `https://` (not `http://`)
- ✅ For local: confirm file exists in `/public/assets/portfolio/`
- ✅ Check file name matches exactly (case-sensitive)

### Video Not Playing?
- **YouTube:** Must use `/embed/` format, not `/watch?v=`
- **Canva:** Check sharing is set to "Anyone with link"
- **Vimeo:** Verify privacy allows embedding

### Google Drive Not Working?
- Google Drive has CORS restrictions - images won't load
- **Solution:** Use Imgur or local assets instead

---

## 📋 Best Practices

### Images:
- ✅ High quality (1200px+ wide)
- ✅ Compress before uploading (use TinyPNG)
- ✅ Consistent aspect ratio (16:9 recommended)
- ❌ Avoid files over 5MB (slow loading)

### Videos:
- ✅ Keep under 3 minutes
- ✅ Add captions (accessibility)
- ✅ Custom thumbnails (YouTube)
- ❌ Don't use videos over 10MB (direct files)

### Content:
- ✅ Lead with your best work
- ✅ Use specific metrics ("increased engagement 40%")
- ✅ Show process (before/after, iterations)
- ❌ Avoid generic descriptions

---

## 🚀 Quick Updates Checklist

**Before publishing:**
- [ ] Replace all placeholder URLs (`https://your-image-url.com`)
- [ ] Test all images load (incognito browser)
- [ ] Test all video embeds play
- [ ] Verify demo links open correctly
- [ ] Check on mobile (375px width)
- [ ] Proofread all text

---

## 💡 Pro Tips

**For Impact:**
1. First item in `mediaItems` is what users see initially - make it your best
2. Mix formats: images for detail, videos for interaction
3. Order matters: tell a story (ideation → design → final)
4. Add metrics in `designNotes` to show value

**For Performance:**
- Use local assets for images you'll update frequently
- Use external URLs (YouTube, Canva) for large interactive content
- Compress images before uploading
- Keep slideshows to 5-7 items max

---

**Need technical help?** Check [TECHNICAL_REFERENCE.md](TECHNICAL_REFERENCE.md)
