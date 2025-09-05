
import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../shared/AnimationVariants';

interface MetricData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number }>;
  color: string;
  stats: any[];
}

interface MetricsSelectorProps {
  metrics: MetricData[];
  activeMetric: number;
  onMetricChange: (index: number) => void;
  language: string;
}

const MetricsSelector: React.FC<MetricsSelectorProps> = ({
  metrics,
  activeMetric,
  onMetricChange,
  language
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
          {language === 'en' ? 'Transforming Industries' : 'Iparágak Átalakítása'}
        </h2>
        <p className="text-xl text-indigo-300">
          {language === 'en' 
            ? 'Through Sustainable Excellence' 
            : 'Fenntartható Kiválóság Révén'}
        </p>
      </div>

      {/* Metric Category Selector */}
      <div className="flex flex-wrap justify-center gap-4">
        {metrics.map((metric, index) => (
          <MetricButton
            key={metric.id}
            metric={metric}
            isActive={activeMetric === index}
            onClick={() => onMetricChange(index)}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

const MetricButton: React.FC<{
  metric: MetricData;
  isActive: boolean;
  onClick: () => void;
  index: number;
}> = ({ metric, isActive, onClick, index }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`group relative overflow-hidden px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${
        isActive
          ? 'border-white/40 bg-white/20 shadow-2xl'
          : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        initial={false}
        animate={isActive ? { opacity: 0.3 } : { opacity: 0 }}
      />
      
      <div className="relative flex items-center space-x-3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center text-white transform transition-transform group-hover:scale-110`}>
          <metric.icon size={24} />
        </div>
        <div className="text-left">
          <div className="text-white font-semibold text-sm">{metric.title}</div>
          <div className="text-indigo-300 text-xs">{metric.subtitle}</div>
        </div>
      </div>
      
      {/* Active indicator */}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-purple-400"
          layoutId="activeIndicator"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default MetricsSelector;
