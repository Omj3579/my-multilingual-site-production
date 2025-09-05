import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations';
import { HeroFeature } from '../types';

interface FeaturePillsProps {
  features: HeroFeature[];
}

const FeaturePills: React.FC<FeaturePillsProps> = ({ features }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-wrap gap-3"
    >
      {features.map((feature: HeroFeature, index: number) => (
        <div 
          key={index}
          className="flex items-center space-x-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm"
        >
          <feature.icon size={16} className="text-blue-600" />
          <span className="text-sm font-medium text-gray-700">{feature.text}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default FeaturePills;
