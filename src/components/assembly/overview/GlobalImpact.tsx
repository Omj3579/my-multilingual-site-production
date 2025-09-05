import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { ImpactStat } from './overviewContent';
import { AnimationVariants } from './types';

interface GlobalImpactProps {
  title: string;
  stats: ImpactStat[];
  itemVariants: AnimationVariants;
  cardVariants: AnimationVariants;
  imageY: MotionValue<number>;
  inView: boolean;
}

const GlobalImpact: React.FC<GlobalImpactProps> = ({ 
  title, 
  stats, 
  itemVariants, 
  cardVariants, 
  imageY, 
  inView 
}) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="relative"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{ y: imageY }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <stat.icon size={28} className="text-white" />
            </div>
            
            <motion.div 
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
            >
              {stat.value}
            </motion.div>
            
            <p className="text-gray-600 font-medium">
              {stat.label}
            </p>
            
            {/* Animated progress indicator */}
            <motion.div 
              className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 + 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: index * 0.2 + 1.2, duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GlobalImpact;
