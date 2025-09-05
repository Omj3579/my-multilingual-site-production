import React, { createContext, useContext, useState, useEffect } from 'react';
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

  // Initialize from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'hu', 'de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Define changeLanguage function that components expect
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Save to localStorage
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
