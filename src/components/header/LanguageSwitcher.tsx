import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hu' : 'en');
  };  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-3 transition-colors"
      style={{ background: 'transparent', border: 'none', padding: 0 }}
    >
      <div className="relative">
        <Globe size={20} className="text-gray-400 absolute -left-1 -top-1 opacity-50" />
        <img 
          src={language === 'en' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/hu.png'} 
          alt={language === 'en' ? 'English' : 'Hungarian'} 
          className="h-6 w-8 object-cover rounded"
        />
      </div>
      <span className="text-xl font-semibold">
        {language === 'en' ? 'EN' : 'HU'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;
