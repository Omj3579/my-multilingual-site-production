import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface HeaderSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  itemVariants: Variants;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  badge,
  title,
  subtitle,
  description,
  itemVariants
}) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200/50 mb-6">
          <Cpu size={16} className="mr-2" />
          {badge}
        </span>
      </motion.div>
      
      <motion.h2 
        variants={itemVariants}
        className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {title}
        <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {subtitle}
        </span>
      </motion.h2>
      
      <motion.p 
        variants={itemVariants}
        className="text-xl text-gray-600 leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default HeaderSection;
