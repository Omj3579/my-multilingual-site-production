import React from 'react';
import { motion, useTransform, MotionValue, Variants } from 'framer-motion';
import { Advantage, Language } from '../types';

interface AdvantagesGridProps {
  advantages: Advantage[];
  language: Language;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  inView: boolean;
  itemVariants: Variants;
}

const AdvantagesGrid: React.FC<AdvantagesGridProps> = ({
  advantages,
  language,
  mouseX,
  mouseY,
  inView,
  itemVariants
}) => {
  // Create transforms outside the map
  const rotateX = useTransform(mouseY, [0, 1], [1, -1]);
  const rotateY = useTransform(mouseX, [0, 1], [-1, 1]);
  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Why Choose Our Solutions' : 'Miért Válassza Megoldásainkat'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.2 }
            }}            className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <advantage.icon size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {advantage.title}
                </h4>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                  {advantage.metric}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              {advantage.description}
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
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: index * 0.1 + 0.7, duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdvantagesGrid;
