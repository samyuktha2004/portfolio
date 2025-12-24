# 🔌 API Reference

## Constants (`/constants/theme.ts`)

```typescript
import { COLORS, SPACING, ANIMATIONS, Z_INDEX, BREAKPOINTS } from '../constants/theme';

// Colors
COLORS.PRIMARY_PINK    // '#FFB6C1'
COLORS.HOT_PINK        // '#fd6698'
COLORS.LIGHT_PINK      // '#FFF0F5'
COLORS.SKY_BLUE        // '#87CEEB'

// Animations
ANIMATIONS.FAST             // 150ms
ANIMATIONS.NORMAL           // 300ms
ANIMATIONS.FLIP_DURATION    // 700ms

// Responsive
BREAKPOINTS.SM   // 640px
BREAKPOINTS.MD   // 768px
BREAKPOINTS.LG   // 1024px
```

---

## Hooks

### `useImageLoader()`
```typescript
const { isLoading, hasError, handleLoad, handleError, reset } = useImageLoader();

// Usage
<img onLoad={handleLoad} onError={handleError} />
{isLoading && <LoadingSpinner />}
```

### `useMultiImageLoader(keys)`
```typescript
const { loadingStates, errorStates, handleLoad, handleError } = 
  useMultiImageLoader(['img1', 'img2']);

// Usage
<img onLoad={() => handleLoad('img1')} />
{loadingStates.img1 && <LoadingSpinner />}
```

---

## Components

### `<LoadingSpinner />`
```typescript
<LoadingSpinner size="small | medium | large" color="pink | blue | white" />
```

### `<StandardButton />`
```typescript
<StandardButton 
  variant="primary | secondary | outline"
  size="small | medium | large"
  onClick={handler}
>
  Text
</StandardButton>
```

### `<FlippableAvatar />`
```typescript
<FlippableAvatar size="small | medium | large" showHint={boolean} />
```

### `<ImageWithFallback />`
```typescript
<ImageWithFallback src={image} alt="..." className="..." />
```

---

## Utils

### `downloadResume()`
```typescript
import { downloadResume } from '../utils/downloadResume';

<button onClick={downloadResume}>Download</button>
```
