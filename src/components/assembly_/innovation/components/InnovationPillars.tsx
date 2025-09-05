import React from 'react';
import { motion } from 'framer-motion';
import { type InnovationPillarsProps } from '../types';

const InnovationPillars: React.FC<InnovationPillarsProps> = ({
  pillars,
  language,
  itemVariants
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Innovation Pillars' : 'Innovációs Pillírek'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <pillar.icon size={32} className="text-white" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {pillar.title}
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>

              <div className="space-y-2">
                {pillar.innovations.map((innovation, idx) => (
                  <div key={idx} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                    {innovation}
                  </div>
                ))}
              </div>

              <div className="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-bold rounded-full">
                {pillar.impact}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InnovationPillars;
