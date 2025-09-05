import React from 'react';
import { motion } from 'framer-motion';
import type { BackgroundEffectsProps } from '../types';

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ backgroundY }) => {
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      style={{ y: backgroundY }}
    >
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default BackgroundEffects;
