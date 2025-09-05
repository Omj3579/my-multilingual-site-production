import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { particleVariants, floatingVariants } from '../constants/animations';

interface BackgroundEffectsProps {
  y1: MotionValue<number>;
  y2: MotionValue<number>;
  rotate: MotionValue<number>;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ 
  y1, 
  y2, 
  rotate 
}) => {
  return (
    <>
      {/* Animated particle system */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              delay: Math.random() * 2,
              duration: 3 + Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full"
        style={{ y: y1, rotate }}
        variants={floatingVariants}
        animate="animate"
      />
      
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 border border-purple-300/20 rounded-lg"
        style={{ y: y2 }}
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"
        style={{ y: y1 }}
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-900/20 to-purple-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
    </>
  );
};
