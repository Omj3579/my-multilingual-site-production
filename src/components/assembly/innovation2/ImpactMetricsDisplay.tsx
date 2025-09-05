import React from 'react';
import { motion } from 'framer-motion';
import { ImpactMetric } from './innovation2Content';
import { AnimationVariants } from '../shared/AnimationVariants';

interface ImpactMetricsDisplayProps {
  metrics: ImpactMetric[];
  itemVariants: AnimationVariants;
}

const ImpactMetricsDisplay: React.FC<ImpactMetricsDisplayProps> = ({ 
  metrics, 
  itemVariants 
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Innovation Impact</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="group relative p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <metric.icon size={28} className="text-white" />
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5, type: "spring" }}
                >
                  {metric.value}
                </motion.div>
                
                <h4 className="text-lg font-semibold text-white mb-3">
                  {metric.title}
                </h4>
                
                <p className="text-purple-200 text-sm leading-relaxed mb-4">
                  {metric.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">
                    {metric.trend}
                  </span>
                </div>
              </div>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                 style={{ 
                   background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5))',
                   mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                   maskComposite: 'exclude'
                 }} 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImpactMetricsDisplay;
