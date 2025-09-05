import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations';

interface HeroDescriptionProps {
  text: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ text }) => {
  return (
    <motion.p 
      variants={itemVariants}
      className="text-lg text-gray-600 leading-relaxed max-w-lg"
    >
      {text}
    </motion.p>
  );
};

export default HeroDescription;
