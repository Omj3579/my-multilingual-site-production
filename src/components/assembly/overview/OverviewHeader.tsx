import React from 'react';
import { motion } from 'framer-motion';
import { OverviewContent } from './overviewContent';
import { AnimationVariants } from './types';

interface OverviewHeaderProps {
  content: OverviewContent;
  itemVariants: AnimationVariants;
}

const OverviewHeader: React.FC<OverviewHeaderProps> = ({ content, itemVariants }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 border border-indigo-200/50 mb-6">
          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse" />
          {content.badge}
        </span>
      </motion.div>
      
      <motion.h2 
        variants={itemVariants}
        className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {content.title}
        <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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

export default OverviewHeader;
