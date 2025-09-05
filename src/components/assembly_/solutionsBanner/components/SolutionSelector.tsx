import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Solution } from '../types';

interface SolutionSelectorProps {
  solutions: Solution[];
  activeSolution: number;
  onSolutionChange: (index: number) => void;
  variants: Variants;
}

const SolutionSelector: React.FC<SolutionSelectorProps> = ({
  solutions,
  activeSolution,
  onSolutionChange,
  variants
}) => {
  return (
    <motion.div 
      variants={variants}
      className="flex flex-wrap justify-center gap-4 mb-16"
    >
      {solutions.map((solution, index) => (
        <button
          key={solution.id}
          onClick={() => onSolutionChange(index)}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
            ${activeSolution === index
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
            }
          `}
        >
          {solution.title}
        </button>
      ))}
    </motion.div>
  );
};

export default SolutionSelector;
