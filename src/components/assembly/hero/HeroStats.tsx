import React from 'react';
import { motion } from 'framer-motion';
import { HeroStat } from './heroContent';
import { Variants } from '../shared/types';

interface HeroStatsProps {
  stats: HeroStat[];
  variants: Variants;
}

const HeroStats: React.FC<HeroStatsProps> = ({ stats, variants }) => {
  return (
    <motion.div 
      variants={variants}
      className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/50"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-blue-600">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
