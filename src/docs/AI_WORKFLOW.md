# AI Development Workflow

## ⭐ CRITICAL RULES - Read First

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
- Creating user guide for new functionality
- **NOT for:** Bug fixes, small features, refactors, tweaks

**If you must create a new doc:**
- ✅ Place it in `/docs/` folder
- ✅ Add it to `/docs/README.md` index
- ✅ Link from relevant existing docs
- ✅ Keep it concise and focused

### Rule 2: All Documentation in /docs Folder
**MANDATORY:** All new documentation files MUST be created inside `/docs/` folder.

**Do NOT create docs in:**
- ❌ Project root (/)
- ❌ Components folder
- ❌ Any other directory

**Examples:**
- ✅ `/docs/NEW_FEATURE.md` - Correct
- ❌ `/NEW_FEATURE.md` - Wrong (root directory)

---

## MANDATORY PROCESS - Follow for Every Change

### Before Making ANY Code Changes:

1. **Read Knowledge Base First**
   ```
   Check: /docs/ARCHITECTURE.md
   Check: /docs/COMPONENT_API.md
   Check: /docs/TOOLTIP_SYSTEM.md
   Check: /docs/TESTING.md
   ```

2. **Verify Impact**
   - Which components are affected?
   - Does this touch protected files/patterns?
   - Will this break phone tooltips or laptop tooltips?
   - Does state management need updates?
   - What features depend on this code?

3. **Check References**
   - Line numbers still accurate?
   - Constants still in same location?
   - Data structure still matches schema?

4. **Run Pre-Change Safety Checklist**
   ```
   [ ] Read relevant knowledge base docs
   [ ] Understand current implementation
   [ ] Identify dependencies (use Feature Dependency Map in TESTING.md)
   [ ] Plan change to minimize impact
   [ ] Note which tests to run after
   [ ] Have rollback plan ready
   ```

### After Making Code Changes:

1. **Run Regression Tests IMMEDIATELY**
   ```
   [ ] Test changed feature works
   [ ] Test dependent features still work (dependency map)
   [ ] Run critical features checklist (TESTING.md)
   [ ] Test at all relevant breakpoints
   [ ] Check browser console for errors
   [ ] Verify keyboard navigation if handlers changed
   [ ] Verify tooltip system if DetectiveRoom changed
   [ ] Check z-index layering if styling changed
   ```

2. **Update Affected Docs Immediately**
   - Changed component props? → Update COMPONENT_API.md
   - Changed state management? → Update ARCHITECTURE.md
   - Changed tooltip system? → Update TOOLTIP_SYSTEM.md
   - Changed file structure? → Update ARCHITECTURE.md
   - New breaking pattern? → Update TESTING.md dependency map

3. **Update Line Number References**
   - Search for old line numbers in docs
   - Replace with new accurate line numbers
   - Verify context still matches

4. **Add New Patterns**
   - New component created? → Add to COMPONENT_API.md
   - New state pattern? → Add to ARCHITECTURE.md
   - New configuration object? → Document in relevant file
   - New dependency? → Add to TESTING.md dependency map

5. **Post-Change Verification Checklist**
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

### Documentation Update Checklist:

```
[ ] Read all 4 knowledge base files before starting
[ ] Identify which docs are affected by change
[ ] Update line number references
[ ] Update code examples if pattern changed
[ ] Update tables/diagrams if structure changed
[ ] Add troubleshooting notes if introducing new complexity
[ ] Verify all cross-references still valid
[ ] Test checklist still accurate
[ ] Add to dependency map if new relationship created
```

## Knowledge Base Files Map

### ARCHITECTURE.md - Update When:
- ✏️ File structure changes
- ✏️ State management patterns change
- ✏️ New constants added (TOOLTIP_CONFIG, etc.)
- ✏️ Layout system modified
- ✏️ Component communication flow changes
- ✏️ New protected files/patterns
- ✏️ Import patterns change

### COMPONENT_API.md - Update When:
- ✏️ Component props change
- ✏️ New component created
- ✏️ Event handlers added/modified
- ✏️ State variables change
- ✏️ Type definitions updated
- ✏️ Data flow changes
- ✏️ Component deleted/renamed

### TOOLTIP_SYSTEM.md - Update When:
- ✏️ Tooltip positioning changes
- ✏️ TOOLTIP_CONFIG modified
- ✏️ New hotspot added
- ✏️ Tooltip styling changes
- ✏️ Animation updated
- ✏️ State management for tooltips changes
- ✏️ Layout visibility classes change

### TESTING.md - Update When:
- ✏️ New critical feature added
- ✏️ Dependency map updated
- ✏️ Regression test checklist updated
- ✏️ New breaking pattern added

## Common Scenarios

### Scenario: Adding New Hotspot
1. Read TOOLTIP_SYSTEM.md "Adding New Hotspots" section
2. Read COMPONENT_API.md hotspot mapping table
3. Make changes following checklist
4. Update TOOLTIP_SYSTEM.md with new hotspot config
5. Update COMPONENT_API.md hotspot mapping table
6. Update ARCHITECTURE.md if new TabletContent type added

### Scenario: Refactoring Component
1. Read COMPONENT_API.md for component's current API
2. Read ARCHITECTURE.md for state management pattern
3. Make changes preserving external API
4. Update COMPONENT_API.md with new internal structure
5. Update line numbers in all references
6. Update code examples if patterns changed

### Scenario: Changing Layout System
1. Read ARCHITECTURE.md responsive layout section
2. Read TOOLTIP_SYSTEM.md for both implementations
3. DO NOT MODIFY phone layout without explicit approval
4. Make laptop/tablet changes
5. Update both ARCHITECTURE.md and TOOLTIP_SYSTEM.md
6. Update line number references
7. Add migration notes if breaking change

### Scenario: Adding New State
1. Read ARCHITECTURE.md state management section
2. Determine component ownership
3. Add state to correct component
4. Update ARCHITECTURE.md state tables
5. Update COMPONENT_API.md if affects component API
6. Document state flow in ARCHITECTURE.md

## Line Number Maintenance

### When Code Changes:
```bash
# Example: DetectiveRoom.tsx line references

Before change: "Line 445"
After adding 20 lines at line 100: "Line 465"

Update ALL docs referencing DetectiveRoom.tsx lines 445+
```

### Search Pattern:
```
Search docs for: "DetectiveRoom.tsx, line"
Search docs for: "Lines ~"
Search docs for: "Location: Line"
```

## Protected Patterns - DO NOT BREAK

### From ARCHITECTURE.md:
- ❌ Phone layout Radix UI structure (lines ~130-280)
- ❌ ImageWithFallback.tsx component
- ❌ Typography defaults in globals.css
- ❌ State management flow (App.tsx → components)

### From TOOLTIP_SYSTEM.md:
- ❌ hoveredHotspot state usage pattern
- ❌ TOOLTIP_CONFIG object structure
- ❌ Dual tooltip system separation
- ❌ hotspotLabels keys matching logic

### From COMPONENT_API.md:
- ❌ TabletContent type values
- ❌ Component prop interfaces (maintain backwards compatibility)
- ❌ Event handler naming conventions
- ❌ Data flow direction (always top-down)

## Quality Checks

### Before Finalizing Change:
```
[ ] Knowledge base read first? ✓
[ ] Protected patterns preserved? ✓
[ ] Documentation updated? ✓
[ ] Line numbers accurate? ✓
[ ] Code examples match implementation? ✓
[ ] Cross-references still valid? ✓
[ ] Testing checklist still applies? ✓
[ ] No contradictions introduced? ✓
```

### Documentation Quality:
```
[ ] Clear and understandable? ✓
[ ] Precise references (file, line number)? ✓
[ ] Code examples accurate? ✓
[ ] Tables/diagrams up-to-date? ✓
[ ] No unnecessary details? ✓
[ ] Troubleshooting section relevant? ✓
```

## Update Frequency

- **Every code change**: Check if docs need updates
- **Every new feature**: Add to knowledge base
- **Every refactor**: Update affected sections
- **Every bug fix**: Add to troubleshooting if non-obvious

## Documentation Standards

### ⭐ MANDATORY RULE: All Documentation in /docs Folder

**RULE:** All new documentation files MUST be created inside `/docs/` folder.

**Do NOT create docs in:**
- ❌ Project root (/)
- ❌ Components folder
- ❌ Any other directory

**Examples:**
- ✅ `/docs/NEW_FEATURE.md` - Correct
- ❌ `/NEW_FEATURE.md` - Wrong (root directory)
- ❌ `/CLEANUP_REPORT.md` - Wrong (root directory)
- ❌ `/components/DOCS.md` - Wrong (components folder)

**Why?**
- Keeps project organized
- Centralized documentation
- Easy to find all docs
- Prevents clutter in root directory

### ✅ Good Documentation:
```markdown
## Component State

**Location**: DetectiveRoom.tsx, line 58

```typescript
const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
```

**Purpose**: Controls tooltip visibility for laptop/tablet layout

**Values**: 'desktop' | 'smartphone' | 'books' | 'medals' | 'character' | null
```

### ❌ Bad Documentation:
```markdown
## State

The component has state for tooltips somewhere in the file.
```

## Emergency Protocol

### If Knowledge Base Becomes Outdated:
1. Stop all feature work
2. Audit each knowledge base file
3. Verify all line numbers
4. Update all code examples
5. Test all references
6. Resume feature work only when docs are accurate

### If Breaking Change Required:
1. Document old pattern in "Migration Notes"
2. Document new pattern clearly
3. Update all affected docs
4. Add troubleshooting for common migration issues
5. Update testing checklist

### If Change Breaks Something:
**IMMEDIATE ROLLBACK PROCEDURE:**
1. Identify what broke (use TESTING.md checklist)
2. Check browser console for error messages
3. Review change - what was modified?
4. Use dependency map - what depends on it?
5. Rollback change - revert to working state
6. Verify fix - run regression tests
7. Re-plan change - how to do it safely
8. Document issue - add to troubleshooting docs

---

## Success Criteria for Every Change

A change is ONLY successful when ALL of these are true:

1. ✅ Intended improvement implemented
2. ✅ All critical features still work (TESTING.md checklist)
3. ✅ No new console errors
4. ✅ Works at all breakpoints (375px, 768px, 1024px, 1280px+)
5. ✅ Keyboard navigation intact
6. ✅ Knowledge base updated
7. ✅ No performance regression
8. ✅ Code quality maintained or improved

**If ANY criterion fails, the change is INCOMPLETE and must be fixed or rolled back.**

---

## Feature Development Philosophy

### Every change must:
- ✅ **Improve** something (functionality, performance, UX, code quality)
- ✅ **Preserve** existing features (nothing breaks)
- ✅ **Document** the change (knowledge base updated)
- ✅ **Test** thoroughly (regression testing completed)

### Never:
- ❌ Rush without testing
- ❌ Skip documentation updates
- ❌ Break existing features for new ones
- ❌ Assume something works - verify it
- ❌ Ignore console errors
- ❌ Skip protected pattern checks

---

**This workflow is MANDATORY. No exceptions.**

Knowledge base accuracy + Regression testing = No broken features.