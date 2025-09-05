import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

interface UltimateCTAButtonProps {
  language: string;
}

const UltimateCTAButton: React.FC<UltimateCTAButtonProps> = ({ language }) => {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl shadow-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #f97316)',
        backgroundSize: '300% 300%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8 }}
      />
      <span className="relative flex items-center space-x-3">
        <Rocket size={28} />
        <span>{language === 'en' ? 'Transform My Manufacturing NOW' : 'Alakítsam Át Gyártásomat MOST'}</span>
        <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
      </span>
      
      {/* Floating elements */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          y: [-2, 2, -2],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.button>
  );
};

export default UltimateCTAButton;
