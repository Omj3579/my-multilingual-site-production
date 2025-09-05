import React from 'react';
import { motion } from 'framer-motion';
import { KeyMetric } from '../types';
import { cardVariants, staggerChildren } from '../constants/animations';

interface MetricSelectorProps {
  metrics: KeyMetric[];
  activeMetric: number;
  onMetricSelect: (index: number) => void;
}

export const MetricSelector: React.FC<MetricSelectorProps> = ({
  metrics,
  activeMetric,
  onMetricSelect,
}) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        const isActive = activeMetric === index;
        
        return (
          <motion.button
            key={metric.id}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => onMetricSelect(index)}
            className={`relative p-6 rounded-2xl transition-all duration-300 ${
              isActive
                ? 'bg-white/20 border-2 border-white/30 shadow-2xl'
                : 'bg-white/10 border border-white/20 hover:bg-white/15'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} mb-4 flex items-center justify-center`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              {metric.title}
            </h3>
            
            <p className="text-sm text-gray-300">
              {metric.subtitle}
            </p>
            
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"
                layoutId="activeMetric"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
};
