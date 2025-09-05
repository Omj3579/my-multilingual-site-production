import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations';

interface HeroBadgeProps {
  text: string;
}

const HeroBadge: React.FC<HeroBadgeProps> = ({ text }) => {
  return (
    <motion.div variants={itemVariants}>
      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50">
        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse" />
        {text}
      </span>
    </motion.div>
  );
};

export default HeroBadge;
