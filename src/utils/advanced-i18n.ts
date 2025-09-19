/**
 * Advanced Internationalization Utilities
 * Provides intelligent locale detection, currency formatting, and enhanced i18n features
 */

// Enhanced locale configuration with regional data
export const LOCALE_CONFIG = {
  en: {
    name: 'English',
    nativeName: 'English',
    region: 'US',
    currency: 'USD',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: '12h',
    direction: 'ltr',
    flag: '🇺🇸',
    domain: 'en.flair-plastic.hu'
  },
  hu: {
    name: 'Hungarian', 
    nativeName: 'Magyar',
    region: 'HU',
    currency: 'EUR', // Hungary uses EUR for business
    dateFormat: 'yyyy. MM. dd.',
    timeFormat: '24h',
    direction: 'ltr',
    flag: '🇭🇺',
    domain: 'hu.flair-plastic.hu'
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch', 
    region: 'DE',
    currency: 'EUR',
    dateFormat: 'dd.MM.yyyy',
    timeFormat: '24h',
    direction: 'ltr',
    flag: '🇩🇪',
    domain: 'de.flair-plastic.hu'
  }
} as const;

export type SupportedLocale = keyof typeof LOCALE_CONFIG;

/**
 * Intelligent locale detection based on multiple factors
 */
export class AdvancedLocaleDetector {
  /**
   * Detect user's preferred locale from browser
   */
  static detectBrowserLocale(): SupportedLocale {
    if (typeof window === 'undefined') return 'en';
    
    const browserLang = navigator.language || navigator.languages[0];
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    // Check if we support this language
    if (langCode in LOCALE_CONFIG) {
      return langCode as SupportedLocale;
    }
    
    return 'en'; // Default fallback
  }

  /**
   * Get user's country based on timezone (approximate)
   */
  static detectCountryFromTimezone(): string {
    if (typeof window === 'undefined') return 'US';
    
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Map common timezones to countries
      const timezoneCountryMap: Record<string, string> = {
        'Europe/Budapest': 'HU',
        'Europe/Berlin': 'DE',
        'Europe/Vienna': 'AT',
        'Europe/Zurich': 'CH',
        'America/New_York': 'US',
        'America/Los_Angeles': 'US',
        'Europe/London': 'GB'
      };
      
      return timezoneCountryMap[timezone] || 'US';
    } catch {
      return 'US';
    }
  }

  /**
   * Smart locale recommendation based on multiple factors
   */
  static recommendLocale(): SupportedLocale {
    const browserLocale = this.detectBrowserLocale();
    const country = this.detectCountryFromTimezone();
    
    // Priority-based recommendation
    if (country === 'HU') return 'hu';
    if (country === 'DE' || country === 'AT' || country === 'CH') return 'de';
    if (browserLocale !== 'en') return browserLocale;
    
    return 'en';
  }
}

/**
 * Advanced currency and number formatting
 */
export class InternationalFormatter {
  /**
   * Format currency based on locale
   */
  static formatCurrency(amount: number, locale: SupportedLocale): string {
    const config = LOCALE_CONFIG[locale];
    const region = config.region;
    
    return new Intl.NumberFormat(`${locale}-${region}`, {
      style: 'currency',
      currency: config.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
  }

  /**
   * Format numbers with locale-specific separators
   */
  static formatNumber(number: number, locale: SupportedLocale): string {
    const config = LOCALE_CONFIG[locale];
    const region = config.region;
    
    return new Intl.NumberFormat(`${locale}-${region}`).format(number);
  }

  /**
   * Format dates according to locale preferences
   */
  static formatDate(date: Date, locale: SupportedLocale, style: 'short' | 'medium' | 'long' = 'medium'): string {
    const config = LOCALE_CONFIG[locale];
    const region = config.region;
    
    return new Intl.DateTimeFormat(`${locale}-${region}`, {
      dateStyle: style
    }).format(date);
  }

  /**
   * Format relative time (e.g., "2 days ago", "in 3 hours")
   */
  static formatRelativeTime(date: Date, locale: SupportedLocale): string {
    const config = LOCALE_CONFIG[locale];
    const region = config.region;
    const now = new Date();
    const diffInMs = date.getTime() - now.getTime();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    
    const rtf = new Intl.RelativeTimeFormat(`${locale}-${region}`, { 
      numeric: 'auto' 
    });
    
    if (Math.abs(diffInDays) < 1) {
      const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
      if (Math.abs(diffInHours) < 1) {
        const diffInMinutes = Math.round(diffInMs / (1000 * 60));
        return rtf.format(diffInMinutes, 'minute');
      }
      return rtf.format(diffInHours, 'hour');
    }
    
    return rtf.format(diffInDays, 'day');
  }
}

/**
 * SEO and URL utilities for multilingual sites
 */
export class MultilingualSEOUtils {
  /**
   * Generate hreflang links for SEO
   */
  static generateHrefLangLinks(currentPath: string): Array<{
    hreflang: string;
    href: string;
  }> {
    return Object.entries(LOCALE_CONFIG).map(([locale, config]) => ({
      hreflang: locale === 'en' ? 'x-default' : locale,
      href: `https://${config.domain}${currentPath}`
    }));
  }

  /**
   * Get canonical URL for current page
   */
  static getCanonicalUrl(currentPath: string, locale: SupportedLocale): string {
    const config = LOCALE_CONFIG[locale];
    return `https://${config.domain}${currentPath}`;
  }

  /**
   * Generate alternate URLs for language switching
   */
  static generateAlternateUrls(currentPath: string): Record<SupportedLocale, string> {
    const alternates: Record<string, string> = {};
    
    Object.entries(LOCALE_CONFIG).forEach(([locale, config]) => {
      alternates[locale] = `https://${config.domain}${currentPath}`;
    });
    
    return alternates as Record<SupportedLocale, string>;
  }
}

/**
 * Content fallback and translation utilities
 */
export class ContentManager {
  /**
   * Get content with intelligent fallback
   */
  static getContentWithFallback<T>(
    content: Partial<Record<SupportedLocale, T>>,
    preferredLocale: SupportedLocale,
    fallbackChain: SupportedLocale[] = ['en']
  ): T | undefined {
    // Try preferred locale first
    if (content[preferredLocale]) {
      return content[preferredLocale];
    }
    
    // Try fallback chain
    for (const fallbackLocale of fallbackChain) {
      if (content[fallbackLocale]) {
        return content[fallbackLocale];
      }
    }
    
    return undefined;
  }

  /**
   * Check if content exists in specific locale
   */
  static hasContentInLocale<T>(
    content: Partial<Record<SupportedLocale, T>>,
    locale: SupportedLocale
  ): boolean {
    return Boolean(content[locale]);
  }

  /**
   * Get available locales for specific content
   */
  static getAvailableLocales<T>(
    content: Partial<Record<SupportedLocale, T>>
  ): SupportedLocale[] {
    return Object.keys(content).filter(locale => 
      content[locale as SupportedLocale] !== undefined && 
      content[locale as SupportedLocale] !== null
    ) as SupportedLocale[];
  }
}

/**
 * Performance optimizations for i18n
 */
export class I18nPerformance {
  private static translationCache = new Map<string, Record<string, unknown>>();

  /**
   * Cache translations to avoid re-parsing
   */
  static cacheTranslation(key: string, translation: Record<string, unknown>): void {
    this.translationCache.set(key, translation);
  }

  /**
   * Get cached translation
   */
  static getCachedTranslation(key: string): Record<string, unknown> | undefined {
    return this.translationCache.get(key);
  }

  /**
   * Preload critical translations
   */
  static async preloadCriticalTranslations(
    locale: SupportedLocale,
    criticalKeys: string[]
  ): Promise<void> {
    // Implementation would depend on your translation loading strategy
    // This is a placeholder for the concept
    console.log(`Preloading critical translations for ${locale}:`, criticalKeys);
  }

  /**
   * Lazy load translations by namespace
   */
  static async loadTranslationNamespace(
    locale: SupportedLocale, 
    namespace: string
  ): Promise<Record<string, unknown>> {
    const cacheKey = `${locale}-${namespace}`;
    
    const cached = this.getCachedTranslation(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      // Dynamic import of translation files
      const translations = await import(`../translations/${locale}/${namespace}.json`);
      this.cacheTranslation(cacheKey, translations.default);
      return translations.default;
    } catch (error) {
      console.warn(`Failed to load translations for ${locale}/${namespace}:`, error);
      return {};
    }
  }
}

// Export utility functions for easy use
export const i18nUtils = {
  detector: AdvancedLocaleDetector,
  formatter: InternationalFormatter,
  seo: MultilingualSEOUtils,
  content: ContentManager,
  performance: I18nPerformance
};

export default i18nUtils;