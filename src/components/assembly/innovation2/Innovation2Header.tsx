import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { Innovation2Content } from './innovation2Content';
import { AnimationVariants } from '../shared/AnimationVariants';

interface Innovation2HeaderProps {
  content: Innovation2Content;
  itemVariants: AnimationVariants;
}

const Innovation2Header: React.FC<Innovation2HeaderProps> = ({ content, itemVariants }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-xl border border-white/20 text-purple-200 mb-6">
          <Lightbulb size={16} className="mr-2" />
          {content.badge}
        </span>
      </motion.div>
      
      <motion.h2 
        variants={itemVariants}
        className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {content.title}
        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {content.subtitle}
        </span>
      </motion.h2>
      
      <motion.p 
        variants={itemVariants}
        className="text-xl text-purple-100 leading-relaxed"
      >
        {content.description}
      </motion.p>
    </div>
  );
};

export default Innovation2Header;
