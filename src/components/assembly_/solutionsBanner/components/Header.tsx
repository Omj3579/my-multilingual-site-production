import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface HeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  variants: Variants;
}

const Header: React.FC<HeaderProps> = ({
  badge,
  title,
  subtitle,
  description,
  variants
}) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div variants={variants}>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50 mb-6">
          <Rocket className="w-4 h-4 mr-2" />
          {badge}
        </span>
      </motion.div>
      
      <motion.h2 
        variants={variants}
        className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {title}
        <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {subtitle}
        </span>
      </motion.h2>
      
      <motion.p 
        variants={variants}
        className="text-xl text-gray-600 leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default Header;
