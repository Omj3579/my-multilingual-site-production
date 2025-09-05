
export type Language = 'en' | 'hu' | 'de';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<Language, string>>;
}
