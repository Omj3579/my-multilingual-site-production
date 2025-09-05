
import React from 'react';
import { motion, useTransform, MotionValue, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { itemVariants } from '../shared/AnimationVariants';

interface Stat {
  value: string;
  label: string;
  trend: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface MetricData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number }>;
  color: string;
  stats: Stat[];
}

interface MetricsDashboardProps {
  activeMetric: number;
  activeMetricData: MetricData;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const MetricsDashboard: React.FC<MetricsDashboardProps> = ({
  activeMetric,
  activeMetricData,
  mouseX,
  mouseY
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeMetric}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
        style={{
          rotateX: useTransform(mouseY, [0, 1], [2, -2]),
          rotateY: useTransform(mouseX, [0, 1], [-2, 2]),
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="text-center mb-12">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${activeMetricData.color} flex items-center justify-center text-white`}>
            <activeMetricData.icon size={40} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{activeMetricData.title}</h3>
          <p className="text-lg text-indigo-300">{activeMetricData.subtitle}</p>
        </div>

        {/* Stats Grid with Live Data */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeMetricData.stats.map((stat, index) => (
            <StatCard 
              key={stat.label}
              stat={stat}
              index={index}
              color={activeMetricData.color}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const StatCard: React.FC<{
  stat: Stat;
  index: number;
  color: string;
}> = ({ stat, index, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center text-white">
          <stat.icon size={24} />
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-bold ${
          stat.trend.startsWith('+') ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
        }`}>
          {stat.trend.startsWith('+') ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          <span>{stat.trend}</span>
        </div>
      </div>
      
      <motion.div 
        className="text-3xl font-bold text-white mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
      >
        {stat.value}
      </motion.div>
      
      <div className="text-lg font-semibold text-indigo-300 mb-2">{stat.label}</div>
      <div className="text-sm text-indigo-200 leading-relaxed">{stat.description}</div>

      {/* Animated progress indicator */}
      <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default MetricsDashboard;
