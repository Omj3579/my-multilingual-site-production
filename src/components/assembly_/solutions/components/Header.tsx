import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import type { HeaderProps } from '../types';
import { itemVariants } from '../constants/animations';

export const Header: React.FC<HeaderProps> = ({ content }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50 mb-6">
          <Rocket size={16} className="mr-2" />
          {content.badge}
        </span>
      </motion.div>
      
      <motion.h2 
        variants={itemVariants}
        className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {content.title}
        <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {content.subtitle}
        </span>
      </motion.h2>
      
      <motion.p 
        variants={itemVariants}
        className="text-xl text-gray-600 leading-relaxed"
      >
        {content.description}
      </motion.p>
    </div>
  );
};
