import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  // List of supported languages for products pages
  const languages = [
    { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/gb.png', alt: 'English' },
    { code: 'hu', label: 'HU', flag: 'https://flagcdn.com/w40/hu.png', alt: 'Hungarian' },
    { code: 'de', label: 'DE', flag: 'https://flagcdn.com/w40/de.png', alt: 'German' },
  ];

  // Find current language index
  const currentIdx = languages.findIndex(l => l.code === language);
  // Get next language in the cycle
  const nextLanguage = languages[(currentIdx + 1) % languages.length];

  const cycleLanguage = () => {
    setLanguage(nextLanguage.code);
  };

  const current = languages[currentIdx] || languages[0];

  return (
    <motion.button
      onClick={cycleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-3 transition-colors"
      style={{ background: 'transparent', border: 'none', padding: 0 }}
    >
      <div className="relative">
        <Globe size={32} className="text-gray-400 absolute -left-2 -top-2 opacity-50 hidden sm:block" />
        <Globe size={28} className="text-gray-400 absolute -left-2 -top-2 opacity-50 block sm:hidden" />
        <img
          src={current.flag}
          alt={current.alt}
          className="h-10 w-14 object-cover rounded sm:h-6 sm:w-8"
        />
      </div>
      <span className="text-2xl font-semibold sm:text-xl">
        {current.label}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;
