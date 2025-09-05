import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, MousePointer2, Eye } from 'lucide-react';
import { SolutionsContent } from './solutionsContent';
import { Variants } from 'framer-motion';

interface InteractiveFeaturesProps {
  content: SolutionsContent;
  isInteractive: boolean;
  setIsInteractive: (value: boolean) => void;
  mousePosition: { x: number; y: number };
  itemVariants: Variants;
}

const InteractiveFeatures: React.FC<InteractiveFeaturesProps> = ({
  content,
  isInteractive,
  setIsInteractive,
  mousePosition,
  itemVariants
}) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
    setIsInteractive(!isInteractive);
  };

  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {content.interactiveFeatures.title}
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          {content.interactiveFeatures.description}
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Interactive Demo Area */}
        <div className="relative">
          <motion.div 
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Demo Screen */}
            <div className="relative bg-black rounded-2xl p-6 mb-6 min-h-[300px] flex items-center justify-center">
              {isInteractive && (
                <motion.div
                  className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-lg"
                  style={{
                    left: `${Math.min(Math.max(mousePosition.x - 200, 0), 400)}px`,
                    top: `${Math.min(Math.max(mousePosition.y - 200, 0), 250)}px`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
                <div className="text-center text-white">
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  {React.createElement(content.interactiveFeatures.features[activeFeature].icon, { size: 32 })}
                </motion.div>
                <h4 className="text-xl font-bold mb-2">
                  {content.interactiveFeatures.features[activeFeature].title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {content.interactiveFeatures.features[activeFeature].description}
                </p>
              </div>

              {/* Interactive Elements */}
              {isInteractive && (
                <div className="absolute inset-0">
                  {/* Floating particles */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayToggle}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </motion.button>
                
                <div className="text-white">
                  <p className="text-sm font-medium">
                    {isPlaying ? 'Interactive Mode' : 'Click to Start'}
                  </p>
                  <p className="text-xs text-gray-400">
                    {isInteractive ? 'Move mouse to interact' : 'Demo ready'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-400">
                <MousePointer2 size={16} />
                <span className="text-xs">Interactive</span>
              </div>
            </div>
          </motion.div>

          {/* Status Indicators */}
          <div className="absolute -top-4 -right-4 flex space-x-2">
            <motion.div
              animate={isInteractive ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isInteractive ? 'bg-green-500' : 'bg-gray-400'
              }`}
            >
              <Eye size={16} className="text-white" />
            </motion.div>
          </div>
        </div>

        {/* Feature Selection */}
        <div className="space-y-6">
          {content.interactiveFeatures.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              onClick={() => setActiveFeature(index)}
              className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                activeFeature === index
                  ? 'bg-blue-50 border-blue-300 shadow-lg'
                  : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  activeFeature === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                }`}>
                  <feature.icon size={24} />
                </div>
                <div className="flex-1">
                  <h4 className={`text-lg font-bold mb-2 transition-colors ${
                    activeFeature === index ? 'text-blue-900' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {activeFeature === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3 h-3 bg-blue-600 rounded-full"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveFeatures;
