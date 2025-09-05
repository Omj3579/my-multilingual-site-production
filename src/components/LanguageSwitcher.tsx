
import React from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    // Cycle through languages: en -> hu -> de -> en
    if (language === 'en') {
      setLanguage('hu');
    } else if (language === 'hu') {
      setLanguage('de');
    } else {
      setLanguage('en');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Languages className="h-5 w-5" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageSwitcher;
