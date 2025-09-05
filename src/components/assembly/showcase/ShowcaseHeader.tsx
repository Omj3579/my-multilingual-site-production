import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { ShowcaseContent } from './showcaseContent';
import { Variants } from '../shared/types';

interface ShowcaseHeaderProps {
  content: ShowcaseContent;
  variants: Variants;
}

const ShowcaseHeader: React.FC<ShowcaseHeaderProps> = ({ content, variants }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div variants={variants}>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50 mb-6">
          <Wrench size={16} className="mr-2" />
          {content.badge}
        </span>
      </motion.div>
      
      <motion.h2 
        variants={variants}
        className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {content.title}
        <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {content.subtitle}
        </span>
      </motion.h2>
      
      <motion.p 
        variants={variants}
        className="text-xl text-gray-600 leading-relaxed"
      >
        {content.description}
      </motion.p>
    </div>
  );
};

export default ShowcaseHeader;
