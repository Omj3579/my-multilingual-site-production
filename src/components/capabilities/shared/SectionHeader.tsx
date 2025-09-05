import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../shared/animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  className = '',
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <motion.div 
      className={`mb-14 ${alignmentClasses[alignment]} ${className}`}
      variants={itemVariants}
    >
      {subtitle && (
        <motion.span 
          className="block text-sm font-semibold tracking-wider text-blue-600 uppercase mb-3"
          variants={itemVariants}
        >
          {subtitle}
        </motion.span>
      )}
        <motion.h2 
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-6"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      
      <motion.div
        className={`h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 ${
          alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''
        }`}
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
      
      {description && (
        <motion.p 
          className="text-lg text-gray-700 leading-relaxed mt-6 max-w-3xl"
          variants={itemVariants}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
