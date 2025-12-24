# 📚 Documentation

## Quick Links

- **[CONTENT.md](./CONTENT.md)** - Edit portfolio content
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development guide
- **[API.md](./API.md)** - Component & hook reference
- **[ATTRIBUTIONS.md](./ATTRIBUTIONS.md)** - Credits

---

## Refactoring Summary

### Code Improvements ✅
- **Centralized constants** - `/constants/theme.ts` (colors, spacing, animations)
- **Reusable hooks** - `/hooks/useImageLoader.ts` (image loading states)
- **Standardized UI** - `LoadingSpinner`, `ErrorBoundary`, `AppLoader`
- **Better structure** - Organized, maintainable code

### File Organization ✅
```
/
├── components/     # All UI components
├── constants/      # Theme values
├── data/           # Portfolio content
├── docs/           # Documentation (you are here)
├── hooks/          # Custom hooks
├── utils/          # Helper functions
└── README.md       # Project overview
```

### Benefits
- 🎯 Single source of truth for theme
- 🔄 Reusable components & hooks
- 📚 Organized documentation
- ⚡ Better performance
- 🐛 Fewer bugs
- 😊 Better UX (loading states, error handling)
