import { Language } from '@/types/language';

// Helper function to safely access content with language fallback
export const getContent = (content: { en: string; hu: string }, language: Language): string => {
  if (language === 'de') {
    return content.en; // Fallback to English for German
  }
  return content[language as keyof typeof content];
};

// Helper function for JSX content with language fallback
export const getJSXContent = (content: { en: JSX.Element; hu: JSX.Element }, language: Language): JSX.Element => {
  if (language === 'de') {
    return content.en; // Fallback to English for German
  }
  return content[language as keyof typeof content];
};
