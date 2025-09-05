import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { itemVariants } from '../animations';

interface CTAButtonsProps {
  primaryText: string;
  secondaryText: string;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ primaryText, secondaryText }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {primaryText}
        <ArrowRight 
          size={20} 
          className="ml-2 transition-transform group-hover:translate-x-1" 
        />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Play size={20} className="mr-2 text-blue-600" />
        {secondaryText}
      </motion.button>
    </motion.div>
  );
};

export default CTAButtons;
