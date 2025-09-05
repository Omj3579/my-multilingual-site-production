import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { SolutionCardProps } from '../types';

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  index,
  isActive,
  onClick
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
        isActive
          ? 'bg-white shadow-2xl border-blue-300 transform scale-105'
          : 'bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg hover:shadow-xl hover:scale-102'
      }`}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${solution.color} text-white group-hover:scale-110 transition-transform`}>
          <solution.icon size={28} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {solution.title}
          </h3>
          <p className="text-sm text-gray-600">{solution.industry}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {solution.description.substring(0, 120)}...
      </p>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {solution.complexity}
          </span>
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            {solution.volume}
          </span>
        </div>
        <ArrowRight 
          size={16} 
          className={`transition-transform ${
            isActive ? 'rotate-90 text-blue-600' : 'group-hover:translate-x-1 text-gray-400'
          }`} 
        />
      </div>
    </motion.div>
  );
};
