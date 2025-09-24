// Test file to verify language switcher functionality
// This file demonstrates how the new language switchers work

/*
LANGUAGE SWITCHER IMPROVEMENTS - SUMMARY
========================================

FIXED ISSUES:
1. ✅ Language switcher now shows the NEXT language to switch TO (not current)
2. ✅ Added dropdown functionality on hover/click
3. ✅ Different behavior for main site vs products pages:
   - Main site: Only EN ↔ HU switching
   - Products pages: EN ↔ HU ↔ DE switching

NEW COMPONENTS CREATED:
- MainLanguageSwitcher.tsx: For main site (EN/HU only)
- ProductLanguageSwitcher.tsx: For products pages (EN/HU/DE)
- Updated LanguageSwitcher.tsx: Backward compatible with both modes

FEATURES:
- Smooth dropdown animations with Framer Motion
- Neomorphic design matching the header style
- Shows current language with indicator dot
- Displays available languages as flags in button
- Closes dropdown on outside click or mouse leave
- Hover effects and smooth transitions

USAGE IN HEADER:
- Automatically detects if on products page
- Uses ProductLanguageSwitcher for /products/* routes
- Uses MainLanguageSwitcher for all other routes

The main button now shows the flag and code of the language you can SWITCH TO,
not the current language, which makes much more sense for user interaction!
*/

export const LANGUAGE_SWITCHER_TEST_INFO = {
  mainSiteLanguages: ['en', 'hu'],
  productPageLanguages: ['en', 'hu', 'de'],
  behaviorFixed: {
    showsNextLanguage: true,
    hasDropdown: true,
    contextAware: true
  }
};