import React from 'react';
import { motion } from 'framer-motion';
import { stepVariants } from '../shared/animations';
import { ProcessStep } from '../shared/types';

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  steps,
  className = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline center line */}
      <motion.div 
        className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-blue-200 via-gray-300 to-blue-200 hidden md:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      
      {/* Timeline steps */}
      <div className="space-y-10 md:space-y-0">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            custom={i}
            variants={stepVariants}
            className={`flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:gap-10`}
          >
            {/* Step number/icon */}
            <motion.div 
              className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {step.step}
            </motion.div>
            
            {/* Step content */}
            <motion.div 
              className={`bg-white/80 backdrop-blur-md shadow-md rounded-xl p-6 max-w-md w-full mt-4 md:mt-0 ${
                i % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
