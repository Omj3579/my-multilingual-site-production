import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { cardVariants, slideInFromBottom } from '../constants/animations';

export const CTA: React.FC = () => {
  return (
    <motion.div
      className="text-center"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-6"
        variants={slideInFromBottom}
      >
        Ready to Transform Your Operations?
      </motion.h2>
      
      <motion.p
        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        variants={slideInFromBottom}
      >
        Join industry leaders who have already revolutionized their assembly processes 
        with our sustainable solutions.
      </motion.p>
      
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        variants={slideInFromBottom}
      >
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Transformation
          <ArrowRight className="w-5 h-5 ml-2" />
        </motion.button>
        
        <motion.button
          className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Impact Report
          <Download className="w-5 h-5 ml-2" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
