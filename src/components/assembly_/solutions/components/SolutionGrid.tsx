import React from 'react';
import { SolutionCard } from './SolutionCard';
import type { SolutionGridProps } from '../types';

export const SolutionGrid: React.FC<SolutionGridProps> = ({
  solutions,
  activeSolution,
  setActiveSolution
}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {solutions.map((solution, index) => (
        <SolutionCard
          key={solution.id}
          solution={solution}
          index={index}
          isActive={activeSolution === index}
          onClick={() => setActiveSolution(index)}
        />
      ))}
    </div>
  );
};
