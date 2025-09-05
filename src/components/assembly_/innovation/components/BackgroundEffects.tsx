import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundEffectsProps } from '../types';
import { floatingAnimations } from '../constants/animations';

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ backgroundY }) => {
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      style={{ y: backgroundY }}
    >
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/60 to-cyan-100/60 rounded-full blur-3xl" />
      
      {/* Floating Innovation Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full"
        animate={floatingAnimations.float1}
      />
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full"
        animate={floatingAnimations.float2}
      />
    </motion.div>
  );
};
