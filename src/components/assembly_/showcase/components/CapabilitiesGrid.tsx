import React from 'react';
import { motion } from 'framer-motion';
import type { CapabilitiesGridProps } from '../types';
import { itemVariants, progressVariants } from '../constants/animations';

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({
  capabilities,
  language,
  inView,
  hoveredCard,
  setHoveredCard
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Core Assembly Capabilities' : 'Alapvető Összeszerelési Képességek'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.2 }
            }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                hoveredCard === index 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-110' 
                  : 'bg-blue-100 text-blue-600'
              }`}>
                <capability.icon size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {capability.title}
                </h4>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                  {capability.metric}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              {capability.description}
            </p>

            {/* Animated progress bar */}
            <motion.div 
              className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                variants={progressVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 + 0.7 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
