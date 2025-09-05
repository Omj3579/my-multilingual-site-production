import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimationVariants } from './types';

interface OverviewCTAProps {
  language: 'en' | 'hu';
  itemVariants: AnimationVariants;
}

const OverviewCTA: React.FC<OverviewCTAProps> = ({ language, itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="text-center"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {language === 'en' ? 'Explore Our Services' : 'Fedezze Fel Szolgáltatásainkat'}
        <ArrowRight 
          size={20} 
          className="ml-2 transition-transform group-hover:translate-x-1" 
        />
      </motion.button>
    </motion.div>
  );
};

export default OverviewCTA;
