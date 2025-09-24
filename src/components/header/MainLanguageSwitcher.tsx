import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

// Main site only supports EN and HU
const MAIN_LANGUAGES = [
  { code: 'en', label: 'English', flag: '/flags/en.svg', shortLabel: 'EN' },
  { code: 'hu', label: 'Hungarian', flag: '/flags/hu.svg', shortLabel: 'HU' },
] as const;

interface MainLanguageSwitcherProps {
  className?: string;
}

const MainLanguageSwitcher = ({ className = '' }: MainLanguageSwitcherProps) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get the other language (the one to switch to)
  const otherLanguage = MAIN_LANGUAGES.find(lang => lang.code !== language);
  
  // If current language is not EN or HU, default to switching to HU
  const switchToLang = otherLanguage || MAIN_LANGUAGES[1];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    changeLanguage(langCode as Language);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Main button showing the language we can switch TO */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 transition-colors bg-transparent border-none p-0"
      >
        {/* Show the flag and label of the language we can switch TO */}
        <Image
          src={switchToLang.flag}
          alt={switchToLang.label}
          width={32}
          height={24}
          className="object-cover rounded"
        />
        <span className="text-lg font-semibold text-gray-700">
          {switchToLang.shortLabel}
        </span>
        <ChevronDown 
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </motion.button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 z-50"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(245,245,245,0.9))',
              boxShadow: `
                15px 15px 30px rgba(0,0,0,0.15),
                -15px -15px 30px rgba(255,255,255,0.9),
                inset 0 0 15px rgba(255,255,255,0.3)
              `,
              borderRadius: '15px',
              padding: '8px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.5)',
              minWidth: '150px',
            }}
            onMouseLeave={() => setIsOpen(false)}
          >
            {MAIN_LANGUAGES.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(250, 155, 107, 0.1)',
                }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center space-x-3 w-full p-2 rounded-lg transition-colors border-none ${
                  language === lang.code 
                    ? 'bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800' 
                    : 'text-gray-700 hover:bg-orange-50'
                }`}
              >
                <Image
                  src={lang.flag}
                  alt={lang.label}
                  width={28}
                  height={20}
                  className="object-cover rounded"
                />
                <span className="font-medium text-sm">{lang.label}</span>
                {language === lang.code && (
                  <div className="w-2 h-2 bg-orange-500 rounded-full ml-auto"></div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLanguageSwitcher;