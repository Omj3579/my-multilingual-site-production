import React from 'react';
import { motion } from 'framer-motion';

interface Solution {
  id: string;
  industry: string;
  icon: any;
}

interface SolutionSelectorProps {
  solutions: Solution[];
  activeSolution: number;
  setActiveSolution: (index: number) => void;
}

export const SolutionSelector: React.FC<SolutionSelectorProps> = ({
  solutions,
  activeSolution,
  setActiveSolution
}) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
        {solutions.map((solution, index) => (
          <button
            key={solution.id}
            onClick={() => setActiveSolution(index)}
            className={`group flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
              activeSolution === index
                ? 'bg-blue-600 text-white scale-105'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <solution.icon size={20} className="flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-sm">{solution.industry}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
