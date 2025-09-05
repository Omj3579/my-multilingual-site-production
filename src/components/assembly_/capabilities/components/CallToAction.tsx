import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  language: string;
  itemVariants: Variants;
}

const CallToAction: React.FC<CallToActionProps> = ({ language, itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="text-center"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {language === 'en' ? 'See Our Technology in Action' : 'Tekintse Meg Technológiánkat Működés Közben'}
        <ArrowRight 
          size={20} 
          className="ml-2 transition-transform group-hover:translate-x-1" 
        />
      </motion.button>
    </motion.div>
  );
};

export default CallToAction;
