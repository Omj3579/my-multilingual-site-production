import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KeyMetric } from '../types';
import { cardVariants, slideInFromBottom, staggerChildren } from '../constants/animations';

interface MetricDashboardProps {
  activeMetric: KeyMetric;
}

export const MetricDashboard: React.FC<MetricDashboardProps> = ({ activeMetric }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeMetric.id}
        className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-16"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="flex items-center mb-8">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeMetric.color} mr-6 flex items-center justify-center`}>
            <activeMetric.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {activeMetric.title}
            </h2>
            <p className="text-lg text-gray-300">
              {activeMetric.subtitle}
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {activeMetric.stats.map((stat, index) => {
            const StatIcon = stat.icon;
            
            return (
              <motion.div
                key={index}
                variants={slideInFromBottom}
                className="bg-white/10 rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <StatIcon className="w-6 h-6 text-gray-300" />
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    stat.trend.startsWith('+') 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    {stat.trend}
                  </span>
                </div>
                
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                
                <div className="text-lg font-medium text-gray-200 mb-2">
                  {stat.label}
                </div>
                
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
