import { useLanguage, Language } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  // List of supported languages for products pages
  const languages = [
    { code: 'en', label: 'EN', flag: '/flags/en.svg', alt: 'English' },
    { code: 'hu', label: 'HU', flag: '/flags/hu.svg', alt: 'Hungarian' },
    { code: 'de', label: 'DE', flag: '/flags/de.svg', alt: 'German' },
  ];

  // Find current language index
  const currentIdx = languages.findIndex(l => l.code === language);
  // Get next language in the cycle
  const nextLanguage = languages[(currentIdx + 1) % languages.length];

  const cycleLanguage = () => {
    setLanguage(nextLanguage.code as Language);
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
        <Image
          src={current.flag}
          alt={current.alt}
          width={56}
          height={40}
          className="object-cover rounded sm:w-8 sm:h-6"
        />
      </div>
      <span className="text-2xl font-semibold sm:text-xl">
        {current.label}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;
