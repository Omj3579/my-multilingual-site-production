import React from 'react';
import { motion } from 'framer-motion';
import { wordVariants } from '../shared/animations';

interface AnimatedTextProps {
  text: string;
  highlightWords?: string[];
  className?: string;
  inView?: boolean;
  highlightColor?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  highlightWords = [],
  className = '',
  inView = true,
  highlightColor = 'text-blue-600'
}) => {
  const words = text.split(' ');
  
  const isHighlighted = (word: string) => 
    highlightWords.some(hw => word.includes(hw.replace(/[,.]/g, '')));

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`inline-block mr-[0.3em] ${
            isHighlighted(word) ? highlightColor : ''
          }`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
