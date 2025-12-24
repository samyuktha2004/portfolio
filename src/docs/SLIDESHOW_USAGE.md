# Design Portfolio Slideshow Feature

## Overview
The design portfolio now supports multiple images per project with an interactive slideshow. Navigation buttons and dots appear automatically when you add more than one image.

## How to Add Multiple Images

### Edit `/data/portfolioData.ts`

Find the `designShowcase` array and update the `images` property:

```typescript
export const designShowcase = [
  {
    title: "Your Project Title",
    type: "Mobile UI/UX",
    images: [
      "https://your-cdn.com/image1.png",
      "https://your-cdn.com/image2.png",
      "https://your-cdn.com/image3.png"
      // Add as many as you want!
    ],
    visualElements: ["Feature 1", "Feature 2"],
    colorPalette: ["#FFB6C1", "#87CEEB"],
    designNotes: "Your design notes here"
  }
]
```

## Features

### ✨ Automatic Slideshow Controls
- **Previous/Next Buttons**: Circular arrow buttons on left/right sides
- **Dot Indicators**: Bottom center dots showing current position
- **Click to Navigate**: Click any dot to jump to that image
- **Smooth Transitions**: Images fade in/out with loading states
- **Responsive**: Works on mobile and desktop

### 🎨 Visual Design
- Pink themed buttons matching portfolio aesthetic
- Hover effects with scale animation
- Active dot expands to show current position
- Loading spinner appears centered while images load

### ♿ Accessibility
- Proper ARIA labels for screen readers
- Keyboard navigation support
- Clear visual feedback on hover/focus

## Single Image Behavior
If a project has only 1 image, the navigation controls are hidden automatically. The image displays normally without slideshow UI.

## Empty Image Behavior
If no images are provided (empty array), a placeholder with icon appears showing the project title.

## Example Usage

### Single Image (No Slideshow)
```typescript
{
  title: "Simple Logo",
  images: ["https://your-cdn.com/logo.png"], // Only 1 image
  // ... other properties
}
```

### Multiple Images (Slideshow Enabled)
```typescript
{
  title: "App Redesign",
  images: [
    "https://your-cdn.com/onboarding.png",
    "https://your-cdn.com/home-screen.png",
    "https://your-cdn.com/settings.png",
    "https://your-cdn.com/profile.png"
  ], // 4 images = slideshow controls appear
  // ... other properties
}
```

## Tips

1. **Image Sizing**: All images use `aspect-video` ratio - recommended 16:9 images
2. **File Formats**: PNG, JPG, WebP all supported
3. **Loading**: Images load lazily with centered spinner
4. **Order Matters**: First image in array is shown first
5. **Alt Text**: Auto-generated as `{title} - Image {number}`

## Keyboard Shortcuts (Future Enhancement)
Could add left/right arrow keys to navigate between images in the future.
