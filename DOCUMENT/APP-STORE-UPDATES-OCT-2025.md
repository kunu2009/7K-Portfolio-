# 📱 App Store Updates - October 10, 2025

## ✅ Changes Completed

### 1. 📚 Books & Writing Section - Hidden with Toggle

**Location:** `src/components/sections/writing.tsx`

**Changes:**
- Added a toggle constant `SHOW_WRITING_SECTION` (currently set to `false`)
- Section is now **HIDDEN** from the portfolio
- To show it again, simply change `SHOW_WRITING_SECTION = false` to `SHOW_WRITING_SECTION = true`

```typescript
// TOGGLE: Set to true to show, false to hide
const SHOW_WRITING_SECTION = false;
```

**How to Unhide:**
1. Open `src/components/sections/writing.tsx`
2. Change line 24: `const SHOW_WRITING_SECTION = false;` → `const SHOW_WRITING_SECTION = true;`
3. Save the file
4. The Books & Writing section will appear again!

---

### 2. 📊 7K Ecosystem Hub → 7K Economics

**Location:** `src/lib/constants.ts`

**Before:**
- Name: "7K Ecosystem Hub"
- Description: "Central hub for all 7K apps and services"
- Category: Productivity
- Icon: 🌐

**After:**
- Name: "7K Economics"
- Description: "12th HSC Economics teaching app with comprehensive study materials"
- Category: Education
- Icon: 📊
- URL: https://eco.7kc.me (unchanged)

---

### 3. 🏛️ 7K Polyglot → 7K Political Science

**Location:** `src/lib/constants.ts`

**Before:**
- Name: "7K Polyglot"
- Description: "A fun and engaging way to expand your vocabulary"
- Category: Education
- Icon: 🌍

**After:**
- Name: "7K Political Science"
- Description: "12th HSC Political Science teaching app with comprehensive lessons"
- Category: Education
- Icon: 🏛️
- URL: https://pol.7kc.me (unchanged)

---

### 4. 🎮 7K Student & 7K Group → Games Category

**Location:** `src/lib/constants.ts`

#### 7K Student
**Before:**
- Description: "Student productivity and academic management"
- Category: Education
- Icon: 🎓

**After:**
- Description: "College student games and fun activities for academic life"
- Category: Games
- Icon: 🎮

#### 7K Group
**Before:**
- Description: "Collaboration and group management tool"
- Category: Productivity
- Icon: 👥

**After:**
- Description: "Group games and collaborative activities for college students"
- Category: Games
- Icon: 🎲

---

### 5. 🎮 New Games Category Added

**Location:** `src/lib/constants.ts`

**Added to APP_CATEGORIES:**
```typescript
{ name: "Games", value: "Games", icon: "🎮" }
```

**Entertainment category icon changed:**
- From: 🎮
- To: 🎬 (to differentiate from Games)

---

## 📋 Summary of Changes

| App Name | Old Name | New Purpose | Category Change | Icon Change |
|----------|----------|-------------|-----------------|-------------|
| 7K Economics | 7K Ecosystem Hub | 12th HSC Economics teaching | Productivity → Education | 🌐 → 📊 |
| 7K Political Science | 7K Polyglot | 12th HSC Political Science teaching | Education (same) | 🌍 → 🏛️ |
| 7K Student | 7K Student | College student games | Education → Games | 🎓 → 🎮 |
| 7K Group | 7K Group | Group games for students | Productivity → Games | 👥 → 🎲 |
| Books & Writing | (section) | Hidden (toggle available) | N/A | N/A |

---

## 🎯 Quick Actions

### To Show Books & Writing Again:
```bash
# Edit this file:
src/components/sections/writing.tsx

# Change line 24:
const SHOW_WRITING_SECTION = true;
```

### To Verify Changes:
1. Open your portfolio in browser
2. Navigate to App Store section
3. Check that:
   - ✅ Books & Writing section is hidden
   - ✅ "7K Economics" appears with 📊 icon
   - ✅ "7K Political Science" appears with 🏛️ icon
   - ✅ "7K Student" and "7K Group" are in Games category with game icons
   - ✅ Games category filter button appears

---

## 📁 Files Modified

1. `src/components/sections/writing.tsx` - Added toggle for Books & Writing
2. `src/lib/constants.ts` - Updated app definitions and categories

---

**Updated:** October 10, 2025  
**Status:** ✅ All changes completed  
**Next Action:** Test the portfolio to verify all updates
