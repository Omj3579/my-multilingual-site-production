import React from 'react';
import { motion } from 'framer-motion';
import { type TimelineProgressProps } from '../types';

const TimelineProgress: React.FC<TimelineProgressProps> = ({
  activeInnovation,
  totalItems
}) => {
  const progressPercentage = ((activeInnovation + 1) / totalItems) * 100;

  return (
    <div className="mt-8 flex justify-center">
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
          style={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default TimelineProgress;
