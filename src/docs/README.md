# 📚 Documentation Index

Welcome to The Bubbly Detective Portfolio documentation!

---

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
- Creating user guide for new functionality
- **NOT for:** Bug fixes, small features, refactors, tweaks

**If you must create a new doc:**
- ✅ Place it in `/docs/` folder
- ✅ Add it to this README.md index
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

## 🚀 Quick Start

**New here?** Start with:
1. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Keyboard shortcuts, common tasks, troubleshooting

**Developing?** Read:
2. **[AI_WORKFLOW.md](AI_WORKFLOW.md)** - MANDATORY workflow for all code changes

---

## 📖 Core Documentation

These 4 files form the knowledge base. **Read before making changes.**

### 1. [ARCHITECTURE.md](ARCHITECTURE.md)
**System architecture and design patterns**
- File structure
- State management
- Responsive layout system
- Protected patterns
- Import conventions

**Update when:**
- File structure changes
- State patterns change
- Layout system modified
- New constants added

---

### 2. [COMPONENT_API.md](COMPONENT_API.md)
**Component reference and API**
- All component props
- Event handlers
- Type definitions
- Data flow patterns
- Hotspot mapping

**Update when:**
- Component props change
- New component created
- Event handlers modified
- Types updated

---

### 3. [TOOLTIP_SYSTEM.md](TOOLTIP_SYSTEM.md)
**Tooltip implementation guide**
- Dual tooltip system (phone vs laptop)
- TOOLTIP_CONFIG reference
- Positioning logic
- State management
- Adding new hotspots

**Update when:**
- Tooltip positioning changes
- New hotspot added
- TOOLTIP_CONFIG modified
- Tooltip styling changes

---

### 4. [TESTING.md](TESTING.md)
**Testing guidelines and checklists**
- Critical features checklist
- Feature dependency map
- Regression testing
- Breakpoint testing
- Accessibility testing

**Update when:**
- New critical feature added
- Dependencies change
- Test checklist updated

---

## 🎯 Content Strategy

### [PRIORITIZING_WINS.md](PRIORITIZING_WINS.md)
**How to showcase leadership and awards**
- Positioning strategy
- Award banner implementation
- Leadership section structure
- Before/after metrics
- Expected callback improvements

**Update when:**
- Adding new awards
- Changing positioning
- Restructuring resume sections

---

### [TARGET_ROLE_GUIDE.md](TARGET_ROLE_GUIDE.md)
**Finding your target role as a fresher**
- Evidence-based strengths analysis
- Realistic role recommendations
- Company type targeting
- Expected callback rates
- Interview positioning

**Update when:**
- Changing target role
- Adding new skills
- Getting feedback from applications

---

## 🔄 Development Workflow

### [AI_WORKFLOW.md](AI_WORKFLOW.md) ⭐ MANDATORY
**The complete development process**

#### Before ANY code change:
1. Read relevant knowledge base docs
2. Verify impact on existing features
3. Check dependencies
4. Plan change carefully

#### After code change:
1. Run regression tests immediately
2. Update affected docs
3. Verify line number references
4. Test at all breakpoints

**Protected Patterns - DO NOT BREAK:**
- Phone layout Radix UI structure
- ImageWithFallback.tsx component
- Typography defaults in globals.css
- State management flow

---

## 🎯 Quick Reference

### [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
**Day-to-day reference guide**

#### Contents:
- ⌨️ Keyboard shortcuts
- 📊 Responsive breakpoints
- 🎨 Design tokens
- 📁 File structure
- 🔄 Updating content
- 🎯 Common tasks
- 🐛 Troubleshooting

**Use for:**
- Quick keyboard shortcut lookup
- Adding new projects
- Updating content
- Common troubleshooting

---

## 📋 Documentation Standards

### File Organization
```
/docs/
├── README.md              # This file (index)
├── QUICK_REFERENCE.md     # User guide & shortcuts
├── AI_WORKFLOW.md         # Development workflow ⭐
├── ARCHITECTURE.md        # System architecture
├── COMPONENT_API.md       # Component reference
├── TOOLTIP_SYSTEM.md      # Tooltip system guide
└── TESTING.md             # Testing guidelines
```

### ⭐ RULE: All Documentation Goes in /docs Folder

**MANDATORY:** All new documentation files MUST be created inside `/docs/` folder.

**Do NOT create docs in:**
- ❌ Project root (/)
- ❌ Any other directory

**Examples:**
- ✅ `/docs/NEW_FEATURE.md` - Correct
- ❌ `/NEW_FEATURE.md` - Wrong (root directory)
- ❌ `/components/DOCS.md` - Wrong (components folder)

**Why?**
- Keeps project organized
- Centralized documentation
- Easy to find all docs
- Prevents clutter in root directory

### When to Update Docs

**Every code change:**
- Check if docs need updates
- Update line number references
- Verify code examples still accurate

**New features:**
- Add to knowledge base
- Update dependency map
- Add to testing checklist

**Refactoring:**
- Update affected sections
- Update line numbers
- Update code examples

---

## 🎓 Learning Path

### For New Developers:
1. Read **QUICK_REFERENCE.md** - Understand the basics
2. Read **ARCHITECTURE.md** - Learn system structure
3. Read **COMPONENT_API.md** - Understand components
4. Read **TOOLTIP_SYSTEM.md** - Learn tooltip patterns
5. Read **TESTING.md** - Know what to test
6. Read **AI_WORKFLOW.md** - Follow the process

### For Making Changes:
1. **Before:** Read AI_WORKFLOW.md "Before Making Changes"
2. **During:** Follow protected patterns
3. **After:** Run regression tests + update docs

### For Troubleshooting:
1. Check **QUICK_REFERENCE.md** troubleshooting section
2. Check browser console for errors
3. Verify breakpoint (375px, 768px, 1024px, 1280px+)
4. Check **TESTING.md** dependency map
5. Review **ARCHITECTURE.md** for patterns

---

## 🔍 Quick Search Guide

### Looking for...

**Keyboard shortcuts?**
→ QUICK_REFERENCE.md

**How to add content?**
→ QUICK_REFERENCE.md "Updating Content"

**Component props?**
→ COMPONENT_API.md

**State management?**
→ ARCHITECTURE.md "State Management"

**Tooltip not working?**
→ TOOLTIP_SYSTEM.md + QUICK_REFERENCE.md troubleshooting

**How to test?**
→ TESTING.md

**Development workflow?**
→ AI_WORKFLOW.md ⭐

**Design tokens?**
→ QUICK_REFERENCE.md "Design Tokens"

**File structure?**
→ ARCHITECTURE.md "File Structure"

**Protected patterns?**
→ AI_WORKFLOW.md "Protected Patterns"

---

## ⚠️ Important Notes

### DO NOT SKIP:
- ⭐ **AI_WORKFLOW.md** is MANDATORY for all changes
- ⭐ Read knowledge base BEFORE making changes
- ⭐ Update docs AFTER making changes
- ⭐ Test at all breakpoints (375px, 768px, 1024px, 1280px+)

### Protected Files:
- ❌ `/components/figma/ImageWithFallback.tsx` - Do not modify
- ❌ `/styles/globals.css` typography - Do not override with Tailwind
- ❌ Phone layout structure - Do not change without approval

### Single Source of Truth:
- ✅ All content in `/data/portfolioData.ts`
- ✅ All colors in `/constants/theme.ts`
- ✅ All typography in `/styles/globals.css`

---

## 📊 Documentation Health

**Last Audit:** December 27, 2024  
**Status:** ✅ Up-to-date  
**Line Numbers:** ✅ Verified  
**Code Examples:** ✅ Accurate

### Maintenance Schedule:
- **After every change:** Update affected docs
- **Weekly:** Verify line numbers
- **Monthly:** Comprehensive audit

---

## 💡 Tips for Success

1. **Always read docs first** - Save time debugging
2. **Follow AI_WORKFLOW.md** - Prevent breaking changes
3. **Update docs immediately** - Don't let them get stale
4. **Test thoroughly** - Use TESTING.md checklist
5. **Use QUICK_REFERENCE.md** - Fast answers for common tasks

---

## 🤝 Contributing

When updating documentation:
1. Keep it clear and concise
2. Include code examples
3. Provide precise file/line references
4. Update cross-references
5. Test instructions work
6. Follow existing format

**Good documentation:**
- ✅ Precise (file name, line number)
- ✅ Clear (easy to understand)
- ✅ Accurate (matches current code)
- ✅ Complete (all necessary info)

**Bad documentation:**
- ❌ Vague ("somewhere in the file")
- ❌ Outdated (wrong line numbers)
- ❌ Incomplete (missing context)
- ❌ Confusing (unclear instructions)

---

## 📞 Quick Help

### Something broken?
1. Check QUICK_REFERENCE.md troubleshooting
2. Check browser console
3. Review recent changes
4. Check TESTING.md dependency map
5. Follow AI_WORKFLOW.md rollback procedure

### Need to add feature?
1. Read AI_WORKFLOW.md
2. Read relevant knowledge base docs
3. Make changes following workflow
4. Update docs
5. Test thoroughly

### Docs outdated?
1. Follow AI_WORKFLOW.md "Emergency Protocol"
2. Audit all knowledge base files
3. Update line numbers
4. Verify code examples
5. Resume development


**Remember:** Knowledge base accuracy + Regression testing = No broken features! 🎉