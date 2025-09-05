import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface HeroBackgroundProps {
  backgroundY: MotionValue<string>;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ backgroundY }) => {
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      style={{ y: backgroundY }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </motion.div>
  );
};

export default HeroBackground;
