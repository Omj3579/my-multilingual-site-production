import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../constants/animations';
import type { SolutionsProps } from '../types';

const Solutions: React.FC<SolutionsProps> = ({ solutions, cardVariants }) => {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <div className="text-center lg:text-left">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          {solutions.title}
        </h3>
        <p className="text-gray-600">
          {solutions.subtitle}
        </p>
      </div>
      
      <div className="space-y-6">
        {solutions.items.map((solution, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <solution.icon size={24} className="text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {solution.title}
                  </h4>
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full">
                    {solution.metric}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Solutions;
