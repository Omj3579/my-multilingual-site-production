import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Variants } from '../shared/types';

interface HeroVisualProps {
  variants: Variants;
}

const HeroVisual: React.FC<HeroVisualProps> = ({ variants }) => {
  const { language } = useLanguage();

  return (
    <motion.div 
      variants={variants}
      className="relative"
    >
      <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
        {/* Assembly Process Visualization */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              {language === 'en' ? 'Assembly Process' : 'Összeszerelési Folyamat'}
            </span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600" />
            </div>
          </div>
          
          {/* Process Steps Visualization */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((step) => (
              <motion.div
                key={step}
                className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: step * 0.2 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {step}
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: step * 0.3, duration: 1 }}
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {step === 4 ? '100%' : `${step * 25}%`}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Award size={32} className="text-white" />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Shield size={24} className="text-white" />
      </motion.div>
    </motion.div>
  );
};

export default HeroVisual;
