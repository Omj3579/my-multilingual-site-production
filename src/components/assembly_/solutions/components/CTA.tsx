import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface CTAProps {
  language: Language;
  itemVariants: Variants;
}

const CTA: React.FC<CTAProps> = ({ language, itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="text-center"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {language === 'en' ? 'Explore All Solutions' : 'Fedezze Fel Minden Megoldást'}
        <ArrowRight 
          size={20} 
          className="ml-2 transition-transform group-hover:translate-x-1" 
        />
      </motion.button>
    </motion.div>
  );
};

export default CTA;
