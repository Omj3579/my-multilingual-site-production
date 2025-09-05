import React from 'react';
import { motion } from 'framer-motion';
import { ImpactContent } from '../types';
import { itemVariants } from '../constants/animations';

interface HeaderProps {
  content: ImpactContent;
}

export const Header: React.FC<HeaderProps> = ({ content }) => {
  return (
    <motion.div
      className="text-center mb-16 relative z-10"
      variants={itemVariants}
    >
      <motion.div
        className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
        <span className="text-green-300 font-medium text-sm">
          {content.badge}
        </span>
      </motion.div>
      
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {content.title}
      </motion.h1>
      
      <motion.h2
        className="text-2xl md:text-3xl font-light text-blue-200 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {content.subtitle}
      </motion.h2>
      
      <motion.p
        className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {content.description}
      </motion.p>
    </motion.div>
  );
};
