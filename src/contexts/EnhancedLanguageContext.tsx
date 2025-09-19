/**
 * Enhanced Language Context with Advanced i18n Features
 * Provides intelligent locale detection, content fallbacks, and performance optimization
 */

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { 
  LOCALE_CONFIG, 
  SupportedLocale, 
  AdvancedLocaleDetector,
  InternationalFormatter,
  MultilingualSEOUtils,
  ContentManager,
  I18nPerformance
} from '../utils/advanced-i18n';

// Enhanced translation interface
interface EnhancedTranslations {
  [namespace: string]: {
    [key: string]: {
      [locale in SupportedLocale]?: string;
    };
  };
}

// Enhanced language context interface
interface EnhancedLanguageContextType {
  // Core functionality
  language: SupportedLocale;
  translations: EnhancedTranslations;
  
  // Language switching
  switchLanguage: (locale: SupportedLocale) => void;
  getAlternateUrls: () => Record<SupportedLocale, string>;
  
  // Intelligent content access
  t: (key: string, namespace?: string, fallbacks?: SupportedLocale[]) => string;
  hasTranslation: (key: string, namespace?: string, locale?: SupportedLocale) => boolean;
  
  // Formatting utilities
  formatCurrency: (amount: number) => string;
  formatNumber: (number: number) => string;
  formatDate: (date: Date, style?: 'short' | 'medium' | 'long') => string;
  formatRelativeTime: (date: Date) => string;
  
  // Locale information
  getCurrentLocaleConfig: () => typeof LOCALE_CONFIG[SupportedLocale];
  getAvailableLocales: () => SupportedLocale[];
  isRTL: boolean;
  
  // SEO utilities
  generateHrefLangs: () => Array<{ hreflang: string; href: string }>;
  getCanonicalUrl: () => string;
  
  // Performance features
  preloadNamespace: (namespace: string) => Promise<void>;
  
  // Loading states
  isLoadingTranslations: boolean;
}

const EnhancedLanguageContext = createContext<EnhancedLanguageContextType | undefined>(undefined);

// Enhanced Language Provider with advanced features
interface EnhancedLanguageProviderProps {
  children: React.ReactNode;
  initialTranslations?: EnhancedTranslations;
  enableAutoDetection?: boolean;
  criticalNamespaces?: string[];
}

export const EnhancedLanguageProvider: React.FC<EnhancedLanguageProviderProps> = ({
  children,
  initialTranslations = {},
  enableAutoDetection = true,
  criticalNamespaces = ['common', 'navigation']
}) => {
  const router = useRouter();
  const [translations, setTranslations] = useState<EnhancedTranslations>(initialTranslations);
  const [isLoadingTranslations, setIsLoadingTranslations] = useState(false);
  
  // Get current locale from router
  const currentLocale = (router.locale || router.defaultLocale || 'en') as SupportedLocale;
  
  // Intelligent locale detection on mount
  useEffect(() => {
    if (enableAutoDetection && typeof window !== 'undefined') {
      const recommendedLocale = AdvancedLocaleDetector.recommendLocale();
      
      // Only redirect if the recommended locale is different from current
      // and user hasn't explicitly chosen a language (check sessionStorage)
      if (recommendedLocale !== currentLocale && 
          !sessionStorage.getItem('user-selected-locale')) {
        
        const currentPath = router.asPath;
        const localeConfig = LOCALE_CONFIG[recommendedLocale];
        
        // Redirect to recommended locale domain
        if (localeConfig && window.location.hostname !== localeConfig.domain.replace('https://', '')) {
          window.location.href = `https://${localeConfig.domain}${currentPath}`;
        }
      }
    }
  }, [currentLocale, enableAutoDetection, router]);

  // Preload critical translations
  useEffect(() => {
    const preloadCritical = async () => {
      setIsLoadingTranslations(true);
      
      try {
        await Promise.all(
          criticalNamespaces.map(namespace => 
            I18nPerformance.preloadCriticalTranslations(currentLocale, [namespace])
          )
        );
      } catch (error) {
        console.warn('Failed to preload critical translations:', error);
      } finally {
        setIsLoadingTranslations(false);
      }
    };

    preloadCritical();
  }, [currentLocale, criticalNamespaces]);

  // Memoized locale configuration
  const localeConfig = useMemo(() => LOCALE_CONFIG[currentLocale], [currentLocale]);
  
  // Translation function with intelligent fallbacks
  const t = (key: string, namespace = 'common', fallbacks: SupportedLocale[] = ['en']): string => {
    const namespaceTranslations = translations[namespace];
    if (!namespaceTranslations || !namespaceTranslations[key]) {
      return key; // Return key if translation not found
    }

    const translationEntry = namespaceTranslations[key];
    return ContentManager.getContentWithFallback(
      translationEntry, 
      currentLocale, 
      fallbacks
    ) || key;
  };

  // Check if translation exists
  const hasTranslation = (key: string, namespace = 'common', locale = currentLocale): boolean => {
    return ContentManager.hasContentInLocale(
      translations[namespace]?.[key] || {},
      locale
    );
  };

  // Language switching with session tracking
  const switchLanguage = (locale: SupportedLocale) => {
    sessionStorage.setItem('user-selected-locale', locale);
    const localeConfig = LOCALE_CONFIG[locale];
    const currentPath = router.asPath;
    
    // Redirect to the appropriate subdomain
    window.location.href = `https://${localeConfig.domain}${currentPath}`;
  };

  // Get alternate URLs for language switching
  const getAlternateUrls = (): Record<SupportedLocale, string> => {
    return MultilingualSEOUtils.generateAlternateUrls(router.asPath);
  };

  // Formatting functions using current locale
  const formatCurrency = (amount: number): string => 
    InternationalFormatter.formatCurrency(amount, currentLocale);
    
  const formatNumber = (number: number): string => 
    InternationalFormatter.formatNumber(number, currentLocale);
    
  const formatDate = (date: Date, style: 'short' | 'medium' | 'long' = 'medium'): string => 
    InternationalFormatter.formatDate(date, currentLocale, style);
    
  const formatRelativeTime = (date: Date): string => 
    InternationalFormatter.formatRelativeTime(date, currentLocale);

  // Get current locale configuration
  const getCurrentLocaleConfig = () => localeConfig;
  
  // Get available locales
  const getAvailableLocales = (): SupportedLocale[] => 
    Object.keys(LOCALE_CONFIG) as SupportedLocale[];
  
  // Check if current locale is RTL (currently all supported locales are LTR)
  const isRTL = false; // Future: localeConfig.direction === 'rtl' when RTL locales are added
  
  // SEO utilities
  const generateHrefLangs = () => 
    MultilingualSEOUtils.generateHrefLangLinks(router.asPath);
    
  const getCanonicalUrl = () => 
    MultilingualSEOUtils.getCanonicalUrl(router.asPath, currentLocale);

  // Preload translation namespace
  const preloadNamespace = async (namespace: string): Promise<void> => {
    setIsLoadingTranslations(true);
    try {
      const namespaceTranslations = await I18nPerformance.loadTranslationNamespace(
        currentLocale, 
        namespace
      );
      
      setTranslations(prev => ({
        ...prev,
        [namespace]: namespaceTranslations as EnhancedTranslations[string]
      }));
    } catch (error) {
      console.warn(`Failed to load namespace ${namespace}:`, error);
    } finally {
      setIsLoadingTranslations(false);
    }
  };

  const contextValue: EnhancedLanguageContextType = {
    language: currentLocale,
    translations,
    switchLanguage,
    getAlternateUrls,
    t,
    hasTranslation,
    formatCurrency,
    formatNumber,
    formatDate,
    formatRelativeTime,
    getCurrentLocaleConfig,
    getAvailableLocales,
    isRTL,
    generateHrefLangs,
    getCanonicalUrl,
    preloadNamespace,
    isLoadingTranslations
  };

  return (
    <EnhancedLanguageContext.Provider value={contextValue}>
      {children}
    </EnhancedLanguageContext.Provider>
  );
};

// Enhanced hook for using the language context
export const useEnhancedLanguage = (): EnhancedLanguageContextType => {
  const context = useContext(EnhancedLanguageContext);
  if (!context) {
    throw new Error('useEnhancedLanguage must be used within an EnhancedLanguageProvider');
  }
  return context;
};

// Utility hooks for specific features
export const useLocaleDetection = () => {
  const [detectedLocale, setDetectedLocale] = useState<SupportedLocale>('en');
  const [detectionMethods, setDetectionMethods] = useState<{
    browser: SupportedLocale;
    timezone: string;
    recommended: SupportedLocale;
  }>({
    browser: 'en',
    timezone: 'US',
    recommended: 'en'
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const browser = AdvancedLocaleDetector.detectBrowserLocale();
      const timezone = AdvancedLocaleDetector.detectCountryFromTimezone();
      const recommended = AdvancedLocaleDetector.recommendLocale();
      
      setDetectionMethods({ browser, timezone, recommended });
      setDetectedLocale(recommended);
    }
  }, []);

  return { detectedLocale, detectionMethods };
};

// SEO Component for automatic meta tags
export const I18nSEOMeta: React.FC = () => {
  const { generateHrefLangs, getCanonicalUrl } = useEnhancedLanguage();
  
  const hrefLangs = generateHrefLangs();
  const canonical = getCanonicalUrl();

  return (
    <>
      <link rel="canonical" href={canonical} />
      {hrefLangs.map(({ hreflang, href }) => (
        <link
          key={hreflang}
          rel="alternate"
          hrefLang={hreflang}
          href={href}
        />
      ))}
    </>
  );
};

export default EnhancedLanguageContext;