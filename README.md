
  # 🌸 Samyuktha's Bubbly Detective Portfolio

  Interactive kawaii-themed portfolio built with React, TypeScript, and Tailwind CSS.
  Watch it in action: https://samyuktha.figma.site

  ---

  ## 🎯 Quick Overview

  A unique, fully accessible portfolio featuring:
  - 🏠 **Interactive Detective Room** - Isometric room with clickable hotspots
  - 📱 **Pink Tablet Modals** - Smooth, engaging section navigation
  - 📖 **Portfolio Book** - Traditional scroll view with print support
  - ⌨️ **Full Keyboard Navigation** - WCAG 2.1 AA compliant
  - 🎉 **Delightful Interactions** - Confetti, animations, fortune cookie
  - 🚀 **Performance Optimized** - Code splitting, lazy loading (60-70% bundle reduction)

  ---

  ## 🚀 Quick Start

  Use the deployed version at: https://samyuktha.figma.site or view locally:

  ```bash
  npm install
  npm run dev
  ```

  Open [http://localhost:3000](http://localhost:3000) in your browser.

  ---

  ## ✏️ Dynamic Edit Content

  All content lives in **one dynamic file** - edit once, updates everywhere:

  ```bash
  /src/app/data/portfolioData.ts
  ```

  Change name, projects, about me, education, awards, etc. - all in one place!

  ---

  ## ⌨️ Keyboard Shortcuts

  ### Portfolio Book (Resume View):
  - `Ctrl/Cmd + P` or `Ctrl/Cmd + D` - Download Resume (with confetti! 🎉)
  - `Escape` - Back to Room
  - `Tab` - Navigate through buttons

  ### Pink Tablet (Modal):
  - `Arrow Right/Left` - Navigate sections
  - `Home/End` - Jump to first/last section
  - `Escape` - Close tablet

  ---

  ## 📁 Project Structure

  ```
  /src/app/data/portfolioData.ts      # 📝 Single source of truth for all content
  /src/app/constants/theme.ts         # 🎨 Colors, spacing, animations, z-index
  /src/app/components/               # ⚛️ React components
    /book-sections/                  # 📖 Portfolio book sections (lazy loaded)
    /tablet-sections/                # 📱 Pink tablet sections (lazy loaded)
    /ui/                             # 🧩 Reusable UI components
  /src/app/docs/                     # 📚 Comprehensive documentation
  /src/styles/globals.css            # 🎨 Global styles & typography
  /src/app/utils/downloadResume.ts   # 🎉 Confetti + print functionality
  ```

  ---

  ## ✨ Key Features

  ### 🎨 Design
  - Unique kawaii-inspired theme (baby pink palette)
  - Three distinct view modes (Room, Tablet, Book)
  - Smooth animations and hover effects
  - Professional yet playful aesthetic
  - Recruiter-friendly despite cute theme

  ### ♿ Accessibility
  - ✅ WCAG 2.1 AA compliant
  - ✅ Full keyboard navigation
  - ✅ Screen reader support (VoiceOver, NVDA, JAWS)
  - ✅ Touch-friendly buttons (44x44px minimum)
  - ✅ Proper ARIA labels
  - ✅ Semantic HTML

  ### 🚀 Performance
  - ✅ Code splitting with React.lazy()
  - ✅ Lazy loading for images
  - ✅ Priority loading for critical assets
  - ✅ 60-70% bundle size reduction
  - ✅ Fast load times
  - ✅ Optimized animations

  ### 🛠️ Developer Experience
  - ✅ Single source of truth (`portfolioData.ts`)
  - ✅ Type-safe with TypeScript
  - ✅ Component-based architecture
  - ✅ Well-documented with examples
  - ✅ Easy to maintain and update
  - ✅ Consistent coding conventions

  ### 📱 Responsive Design
  - ✅ Mobile-first approach
  - ✅ Tested on 375px (mobile), 768px (tablet), 1024px+ (desktop)
  - ✅ Touch-friendly on mobile
  - ✅ Keyboard-friendly on desktop
  - ✅ Works in all orientations

  ---

  ## 🎓 What This Portfolio Demonstrates

  ### Technical Skills:
  - ⚛️ **React** - Advanced patterns, hooks, lazy loading, code splitting
  - 📘 **TypeScript** - Type safety, interfaces, enums
  - 🎨 **Tailwind CSS** - Utility-first styling, responsive design
  - ♿ **Accessibility** - WCAG 2.1, ARIA, keyboard navigation
  - 🚀 **Performance** - Optimization, lazy loading, bundle size reduction
  - 🏗️ **Architecture** - Maintainable, scalable, documented

  ### Design Skills:
  - 🎨 **UI/UX Design** - User-centered, intuitive, engaging
  - 🎭 **Interaction Design** - Smooth animations, delightful micro-interactions
  - 📱 **Responsive Design** - Mobile-first, adaptive layouts
  - 🌈 **Visual Design** - Cohesive theme, color theory, typography
  - 🎯 **User Experience** - Clear navigation, multiple view modes

  ### Soft Skills:
  - 🏆 **Leadership** - Award-winning projects, team leadership
  - 📝 **Communication** - Clear documentation, storytelling
  - 🎯 **Problem Solving** - Elegant solutions to UX challenges
  - 🔄 **Iteration** - Continuous improvement, optimization
  - 💡 **Creativity** - Unique concept, memorable design

  ---

  ## 💼 For Recruiters

  ### Why This Portfolio Stands Out:

  1. **Design + Code Balance** - Demonstrates both design AND development skills
  2. **Accessibility First** - WCAG compliant, keyboard navigation, screen reader support
  3. **Performance Optimized** - 60-70% bundle size reduction with code splitting
  4. **Unique Concept** - Interactive detective room (memorable, not generic)
  5. **Award-Winning Projects** - Leadership experience and proven impact
  6. **Fully Functional** - Print resume, contact form, smooth interactions
  7. **Well-Documented** - Professional code quality and documentation

  ### Quick Demo Points:
  - Show the **interactive room** (let them click objects)
  - Press **Ctrl+P** to download resume (with confetti! 🎉)
  - Use **arrow keys** to navigate tablet sections
  - Show **portfolio book** (traditional view with print option)
  - Highlight **awards section** (recognition and impact)
  - Demonstrate **responsive design** (works on phone, tablet, desktop)

  ---

  ## 🛠️ Tech Stack

  - **Framework:** React 18
  - **Language:** TypeScript
  - **Styling:** Tailwind CSS v4
  - **Icons:** Lucide React
  - **Animation:** Motion React (Framer Motion)
  - **Confetti:** canvas-confetti
  - **Build Tool:** Vite
  - **Deployment:** Ready for Vercel/Netlify/GitHub Pages

  ---

  *Made with 💖 by Samyuktha S, Positioning as an Engineer who can design it AND build it!*
  