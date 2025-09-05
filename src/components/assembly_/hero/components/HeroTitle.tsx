import React from 'react';
import { motion } from 'framer-motion';
import { titleVariants, itemVariants } from '../animations';

interface HeroTitleProps {
  titleWords: string[];
  subtitle: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ titleWords, subtitle }) => {
  return (
    <div className="space-y-4">
      {titleWords.map((word: string, index: number) => (
        <motion.h1
          key={index}
          variants={titleVariants}
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
        variants={itemVariants}
        className="text-xl text-blue-600 font-medium"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default HeroTitle;
