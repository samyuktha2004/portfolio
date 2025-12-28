# Testing & Verification Guide

## Critical Features - Must Work After EVERY Change

### ✅ Core Functionality Checklist

Run through this checklist after ANY code modification:

#### 1. Interactive Room (DetectiveRoom.tsx)
```
[ ] Room image loads correctly
[ ] All 5 hotspots are visible and positioned correctly
[ ] Hotspots are clickable (desktop, smartphone, books, medals, character)
[ ] Tooltips appear on hover (laptop/tablet layout)
[ ] Tooltips appear on tap (phone layout)
[ ] Hover animations work (bounce, ping border)
[ ] Wiggle animations show for unvisited sections
[ ] Clicking hotspot opens correct tablet section
[ ] "View as Resume" button works
[ ] Keyboard navigation works (Tab, Enter)
[ ] No console errors in browser
```

#### 2. Pink Tablet Modal (PinkTablet.tsx)
```
[ ] Tablet opens with correct content section
[ ] About Me section displays correctly
[ ] Dev Projects section shows projects
[ ] Dev Projects filter tabs work (All, Dev, Design)
[ ] Design Portfolio section displays
[ ] Awards section shows achievements
[ ] Education section displays timeline
[ ] Close button (X) works
[ ] Clicking backdrop closes modal
[ ] Escape key closes modal
[ ] Arrow keys navigate between sections
[ ] Home/End keys jump to first/last section
[ ] Modal appears above room (z-index correct)
[ ] Section is marked as visited after viewing
```

#### 3. Portfolio Book (PortfolioBook.tsx)
```
[ ] All sections render in order
[ ] "Back to Room" button works
[ ] "Download Resume" button works
[ ] Ctrl/Cmd + P triggers download
[ ] Ctrl/Cmd + D triggers download
[ ] Confetti appears on download
[ ] Print dialog opens correctly
[ ] Content is readable and styled
[ ] Escape key returns to room
[ ] Scrolling works smoothly
```

#### 4. State Management (App.tsx)
```
[ ] currentView switches correctly (room/tablet/book)
[ ] currentTabletContent updates when hotspot clicked
[ ] visitedSections Set updates when section viewed
[ ] State resets when closing tablet
[ ] State resets when returning from book
[ ] No state leaks between views
[ ] Navigation flow works: Room → Tablet → Room
[ ] Navigation flow works: Room → Book → Room
```

#### 5. Responsive Layouts
```
Phone (< 768px):
[ ] Room scales to fit screen
[ ] Radix UI tooltips work on tap
[ ] Hotspots are touch-friendly (44x44px minimum)
[ ] Tablet modal is readable
[ ] No horizontal scroll

Tablet (768px - 1279px):
[ ] Custom tooltips appear on hover
[ ] Room size appropriate for screen
[ ] Tablet modal centered correctly
[ ] All buttons accessible

Laptop/Desktop (≥ 1280px):
[ ] Phone layout scales 1.87x correctly
[ ] Custom tooltips positioned correctly
[ ] No layout breaks
[ ] Animations smooth
```

#### 6. Tooltip System
```
Phone Layout (Radix UI):
[ ] Tooltips appear on button tap
[ ] Tooltip content correct (matches hotspotLabels)
[ ] Tooltip positioning correct (side="top")
[ ] No tooltip overlap with hotspots
[ ] Tooltips dismiss when tapping elsewhere

Laptop/Tablet Layout (Custom):
[ ] Tooltips appear on hover
[ ] Tooltip content correct (matches hotspotLabels)
[ ] TOOLTIP_CONFIG positions accurate
[ ] Tooltips don't interfere with clicks
[ ] hoveredHotspot state updates correctly
[ ] Tooltips hide on mouse leave
```

#### 7. Data Integration
```
[ ] hotspotLabels displayed in tooltips
[ ] devProjects render in tablet
[ ] designProjects render in tablet
[ ] achievements render in tablet
[ ] education render in tablet
[ ] aboutMe content displays
[ ] Project filtering works (projectType field)
[ ] All images load (no broken images)
[ ] Links work (GitHub, project links)
```

#### 8. Keyboard Accessibility
```
[ ] Tab navigates through interactive elements
[ ] Enter activates focused hotspot
[ ] Space activates focused hotspot
[ ] Escape closes modal/returns to room
[ ] Arrow keys navigate tablet sections
[ ] Home/End jump in tablet sections
[ ] Ctrl/Cmd + P downloads resume
[ ] Ctrl/Cmd + D downloads resume
[ ] Focus indicators visible
[ ] Tab order logical
```

#### 9. Performance
```
[ ] Room image loads with loading state
[ ] No unnecessary re-renders
[ ] Animations smooth (60fps)
[ ] No console warnings
[ ] No memory leaks
[ ] Lazy loaded components work
[ ] Page loads in < 3 seconds
```

#### 10. Visual/Styling
```
[ ] Colors match theme (FFB6C1, FFF0F5, 87CEEB)
[ ] Typography uses globals.css defaults
[ ] No Tailwind font classes unless intended
[ ] Borders and shadows consistent
[ ] Rounded corners on modals
[ ] Hover states visible
[ ] Animations timing correct
[ ] Z-index layering correct
```

---

## Regression Testing Protocol

### When to Run Full Regression:

**ALWAYS run after:**
- ✏️ Modifying DetectiveRoom.tsx
- ✏️ Modifying PinkTablet.tsx
- ✏️ Modifying App.tsx state management
- ✏️ Changing TOOLTIP_CONFIG
- ✏️ Updating portfolioData.ts structure
- ✏️ Changing theme.ts constants
- ✏️ Modifying globals.css
- ✏️ Adding/removing components

**Optional after:**
- 📝 Content updates only (portfolioData.ts text changes)
- 📝 Documentation changes
- 📝 Comment additions

### How to Run Regression:

1. **Visual Testing** (5 minutes)
   ```
   1. Open app in browser
   2. Test at 375px width (phone)
   3. Test at 768px width (tablet)
   4. Test at 1280px width (laptop)
   5. Click every hotspot
   6. Open every tablet section
   7. Test all filters/navigation
   8. Download resume
   9. View portfolio book
   ```

2. **Interaction Testing** (3 minutes)
   ```
   1. Hover over all hotspots
   2. Check tooltip content
   3. Click each hotspot, verify correct section opens
   4. Navigate with arrow keys in tablet
   5. Close with Escape, X button, backdrop click
   6. Return to room from book view
   7. Verify animations play
   ```

3. **Console Check** (1 minute)
   ```
   1. Open browser DevTools
   2. Check Console tab for errors/warnings
   3. Check Network tab for failed requests
   4. Check Performance tab for issues
   ```

---

## Breakpoint Testing Matrix

| Feature | 375px | 768px | 1024px | 1280px+ |
|---------|-------|-------|--------|---------|
| Room renders | ✓ | ✓ | ✓ | ✓ |
| Radix tooltips | ✓ | ✗ | ✗ | ✓ |
| Custom tooltips | ✗ | ✓ | ✓ | ✗ |
| Hotspots clickable | ✓ | ✓ | ✓ | ✓ |
| Tablet modal | ✓ | ✓ | ✓ | ✓ |
| Book view | ✓ | ✓ | ✓ | ✓ |
| Animations | ✓ | ✓ | ✓ | ✓ |

✓ = Should work  
✗ = Should not appear

---

## Feature Dependency Map

Understanding what breaks what:

```
TOOLTIP_CONFIG change
├─→ Breaks: Custom tooltip positioning (laptop/tablet)
├─→ Safe: Radix UI tooltips (phone)
└─→ Test: Hover at 768px, 1024px

hotspotLabels change
├─→ Breaks: ALL tooltip text
├─→ Safe: Hotspot functionality
└─→ Test: Tooltips on all layouts

DetectiveRoom state change
├─→ Breaks: Tooltip visibility, animations
├─→ Safe: PinkTablet, PortfolioBook
└─→ Test: Hover states, wiggle animations

App.tsx state change
├─→ Breaks: Navigation, section tracking
├─→ Safe: Individual component internals
└─→ Test: Full navigation flow

PinkTablet filter change
├─→ Breaks: Dev Projects filtering
├─→ Safe: Other sections
└─→ Test: Filter tabs, project visibility

portfolioData.ts structure change
├─→ Breaks: All components reading that data
├─→ Safe: Visual styling
└─→ Test: Every section that uses changed data

theme.ts constant change
├─→ Breaks: Styling referencing that constant
├─→ Safe: Hard-coded values
└─→ Test: Visual consistency across app
```

---

## Common Breaking Changes & How to Detect

### 1. Tooltip Keys Mismatch
**Break:** Adding hotspot without hotspotLabels entry
**Symptom:** Empty tooltip or console error
**Detection:** Hover over new hotspot, check tooltip text
**Fix:** Add key to hotspotLabels in portfolioData.ts

### 2. State Desync
**Break:** Updating currentView without currentTabletContent
**Symptom:** Tablet opens but shows wrong/no content
**Detection:** Click hotspot, verify correct section shown
**Fix:** Always update both state variables together

### 3. Z-Index Conflict
**Break:** Using arbitrary z-index instead of Z_INDEX constants
**Symptom:** Tooltips/modals appear behind other elements
**Detection:** Visual check - modal should be on top
**Fix:** Use Z_INDEX.tooltip, Z_INDEX.tabletModal from theme.ts

### 4. Layout Visibility Break
**Break:** Changing md:hidden xl:block classes
**Symptom:** Both layouts show or neither shows
**Detection:** Test at 375px, 768px, 1280px
**Fix:** Preserve exact visibility classes

### 5. Event Handler Break
**Break:** Removing onMouseEnter/onMouseLeave
**Symptom:** Custom tooltips don't appear
**Detection:** Hover over hotspot, no tooltip
**Fix:** Restore hover event handlers

### 6. Type Mismatch
**Break:** Changing TabletContent type without updating references
**Symptom:** TypeScript errors, runtime failures
**Detection:** TypeScript compiler errors
**Fix:** Update all TabletContent usages

### 7. Import Path Break
**Break:** Moving component without updating imports
**Symptom:** Module not found errors
**Detection:** Console error on app load
**Fix:** Update import paths in all files

### 8. Animation Class Break
**Break:** Removing animation from <style> block
**Symptom:** Animations don't play
**Detection:** Visual check - hotspots should bounce/wiggle
**Fix:** Restore @keyframes and animation class

---

## Pre-Change Safety Checklist

Before modifying ANY file:

```
[ ] Read relevant knowledge base docs
[ ] Understand current implementation
[ ] Identify dependencies (use Feature Dependency Map)
[ ] Plan change to minimize impact
[ ] Note which tests to run after
[ ] Have rollback plan ready
```

---

## Post-Change Verification Checklist

After modifying ANY file:

```
[ ] No TypeScript errors
[ ] No console errors in browser
[ ] Changed feature works as intended
[ ] Related features still work (dependency map)
[ ] Run regression tests for affected areas
[ ] Test at all breakpoints if layout changed
[ ] Verify keyboard navigation if event handlers changed
[ ] Check tooltip system if DetectiveRoom changed
[ ] Update knowledge base docs
[ ] Update line number references
```

---

## Emergency Rollback Procedure

If a change breaks something:

1. **Identify what broke** (use testing checklist)
2. **Check console** for error messages
3. **Review change** - what was modified?
4. **Use dependency map** - what depends on it?
5. **Rollback change** - revert to working state
6. **Verify fix** - run regression tests
7. **Re-plan change** - how to do it safely
8. **Document issue** - add to troubleshooting docs

---

## Automated Testing Notes

**Current Status:** Manual testing required

**Future Enhancements:**
- Unit tests for state management
- Integration tests for component interaction
- Visual regression tests for UI
- Accessibility tests (axe-core)
- E2E tests (Playwright/Cypress)

**For now:** Use this manual checklist religiously

---

## Testing Time Budget

Estimate testing time based on change scope:

| Change Type | Testing Time |
|-------------|--------------|
| Content only (text changes) | 2 minutes |
| Styling only (colors, spacing) | 3 minutes |
| New feature (within component) | 5 minutes |
| State management change | 8 minutes |
| Layout system change | 10 minutes |
| Multi-component refactor | 15 minutes |

**Always budget time for testing. Never skip it.**

---

## Success Criteria

A change is successful when:

1. ✅ Intended improvement implemented
2. ✅ All critical features still work
3. ✅ No new console errors
4. ✅ Works at all breakpoints
5. ✅ Keyboard navigation intact
6. ✅ Knowledge base updated
7. ✅ No performance regression
8. ✅ Code quality maintained

**If ANY criterion fails, the change is incomplete.**
