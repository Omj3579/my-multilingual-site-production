import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Variants } from '../shared/types';

interface ShowcaseCTAProps {
  variants: Variants;
}

const ShowcaseCTA: React.FC<ShowcaseCTAProps> = ({ variants }) => {
  const { language } = useLanguage();

  return (
    <motion.div 
      variants={variants}
      className="text-center"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {language === 'en' ? 'Request Assembly Quote' : 'Összeszerelési Árajánlat Kérése'}
        <ArrowRight 
          size={20} 
          className="ml-2 transition-transform group-hover:translate-x-1" 
        />
      </motion.button>
    </motion.div>
  );
};

export default ShowcaseCTA;
