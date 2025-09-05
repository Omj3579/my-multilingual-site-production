import React from 'react';
import { motion } from 'framer-motion';
import { HeroContent } from './heroContent';
import { Variants } from '../shared/types';

interface HeroHeaderProps {
  content: HeroContent;
  variants: {
    item: Variants;
    title: Variants;
  };
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ content, variants }) => {
  return (
    <div className="space-y-8">
      {/* Badge */}
      <motion.div variants={variants.item}>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse" />
          {content.badge}
        </span>
      </motion.div>

      {/* Title */}
      <div className="space-y-4">
        {content.title.map((word, index) => (
          <motion.h1
            key={index}
            variants={variants.title}
            className={`text-5xl md:text-7xl font-bold leading-tight ${
              index === 1 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
                : 'text-gray-900'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {word}
          </motion.h1>
        ))}
        <motion.p 
          variants={variants.item}
          className="text-xl text-blue-600 font-medium"
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* Description */}
      <motion.p 
        variants={variants.item}
        className="text-lg text-gray-600 leading-relaxed max-w-lg"
      >
        {content.description}
      </motion.p>
    </div>
  );
};

export default HeroHeader;
