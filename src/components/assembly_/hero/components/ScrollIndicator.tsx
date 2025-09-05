import React from 'react';
import { motion } from 'framer-motion';
import { scrollIndicatorAnimation, scrollIndicatorTransition } from '../animations';

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={scrollIndicatorAnimation}
      transition={scrollIndicatorTransition}
    >
      <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
