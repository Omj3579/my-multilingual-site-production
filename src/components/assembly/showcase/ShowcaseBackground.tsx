import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface ShowcaseBackgroundProps {
  backgroundY: MotionValue<string>;
}

const ShowcaseBackground: React.FC<ShowcaseBackgroundProps> = ({ backgroundY }) => {
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      style={{ y: backgroundY }}
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default ShowcaseBackground;
