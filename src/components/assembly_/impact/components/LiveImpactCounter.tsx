import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf, Battery } from 'lucide-react';
import { CountingNumbers } from '../types';
import { numberCountVariants, pulseVariants } from '../constants/animations';

interface LiveImpactCounterProps {
  countingNumbers: CountingNumbers;
}

export const LiveImpactCounter: React.FC<LiveImpactCounterProps> = ({ 
  countingNumbers 
}) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-16"
      variants={numberCountVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-8 text-center"
        variants={pulseVariants}
        animate="animate"
      >
        Live Impact Metrics
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div className="text-4xl font-bold text-white mb-2">
            {Math.floor(countingNumbers.carbonReduction || 0)}%
          </div>
          <div className="text-lg text-gray-300 mb-1">Carbon Reduction</div>
          <div className="text-sm text-green-400">↗ +15% this year</div>
        </motion.div>

        <motion.div
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Battery className="w-8 h-8 text-white" />
          </div>
          <div className="text-4xl font-bold text-white mb-2">
            {Math.floor(countingNumbers.energySaving || 0)}%
          </div>
          <div className="text-lg text-gray-300 mb-1">Energy Savings</div>
          <div className="text-sm text-green-400">↗ +8% this year</div>
        </motion.div>

        <motion.div
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <div className="text-4xl font-bold text-white mb-2">
            {Math.floor(countingNumbers.wasteReduction || 0)}%
          </div>
          <div className="text-lg text-gray-300 mb-1">Waste Reduction</div>
          <div className="text-sm text-green-400">↗ +25% this year</div>
        </motion.div>
      </div>
    </motion.div>
  );
};
