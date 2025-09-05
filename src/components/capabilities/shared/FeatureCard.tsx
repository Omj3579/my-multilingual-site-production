import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from '../shared/animations';
import { FeatureCard } from '../shared/types';

interface FeatureCardComponentProps {
  feature: FeatureCard;
  index: number;
  className?: string;
}

export const FeatureCardComponent: React.FC<FeatureCardComponentProps> = ({
  feature,
  index,
  className = ''
}) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 group relative overflow-hidden ${className}`}
      style={{ perspective: "800px" }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 16px 30px rgba(0,0,0,0.1)",
        y: -5
      }}
    >
      {/* Card background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative z-10">
        {/* Icon with hover effect */}
        <motion.div 
          className="text-4xl mb-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center shadow-sm"
          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          {feature.icon}
        </motion.div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
        
        {/* Card corner accent */}
        <div className="absolute top-0 right-0 w-10 h-10">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-blue-100/50 border-l-[40px] border-l-transparent" />
        </div>
      </div>
    </motion.div>
  );
};
