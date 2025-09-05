import React from 'react';
import { motion, useTransform } from 'framer-motion';
import type { BackgroundEffectsProps } from '../types';

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ 
  mousePosition, 
  y1, 
  y2, 
  rotate, 
  scrollYProgress 
}) => {
  return (
    <>
      {/* Dynamic background following mouse */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.1), transparent)`,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-full filter blur-3xl"
        style={{ y: y1, rotate }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full filter blur-3xl"
        style={{ 
          y: y2, 
          rotate: useTransform(scrollYProgress, [0, 1], [0, -5]) 
        }}
      />
    </>
  );
};
