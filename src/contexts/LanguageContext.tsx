import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { defaultTranslations } from '@/translations/defaultTranslations';

// Define Language type directly here (or keep the import if you have additional types there)
export type Language = 'en' | 'hu' | 'de';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  changeLanguage: (lang: Language) => void; // Add this to match what components expect
  translations: typeof defaultTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const router = useRouter();

  // Initialize from localStorage if available
  useEffect(() => {
    // Always default to English on first load, regardless of browser/system or localStorage
    const firstLoad = sessionStorage.getItem('firstLoad');
    if (!firstLoad) {
      setLanguage('en');
      localStorage.setItem('language', 'en');
      sessionStorage.setItem('firstLoad', 'true');
    } else {
      const savedLanguage = localStorage.getItem('language') as Language | null;
      if (savedLanguage && ['en', 'hu', 'de'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      } else {
        setLanguage('en');
        localStorage.setItem('language', 'en');
      }
    }
  }, []);

  // Sync with Next.js router locale
  useEffect(() => {
    if (router.locale && ['en', 'hu', 'de'].includes(router.locale)) {
      const routerLanguage = router.locale as Language;
      if (routerLanguage !== language) {
        setLanguage(routerLanguage);
        localStorage.setItem('language', routerLanguage);
      }
    }
  }, [router.locale, language]);

  // Define changeLanguage function that uses Next.js router for proper URL navigation
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Use Next.js router to navigate to the same page with new locale
    const { pathname, asPath, query } = router;
    
    // If we're switching to English (default locale), don't include it in the URL
    if (lang === 'en') {
      router.push({ pathname, query }, asPath, { locale: lang });
    } else {
      router.push({ pathname, query }, asPath, { locale: lang });
    }
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        changeLanguage, // Include the new function
        translations: defaultTranslations 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
