import React from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize2, Share2, Download } from 'lucide-react';
import type { LiveMonitorProps } from '../types';

export const LiveMonitor: React.FC<LiveMonitorProps> = ({ language, imageY }) => {
  return (
    <motion.div 
      className="relative"
      style={{ y: imageY }}
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
        {/* Assembly Process Visualization */}
        <div className="space-y-6 text-white">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">
              {language === 'en' ? 'Live Assembly Monitor' : 'Élő Összeszerelés Monitor'}
            </h4>
            <div className="flex space-x-2">
              <button 
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                aria-label="Play monitor"
              >
                <Play size={16} />
              </button>
              <button 
                className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Maximize monitor"
              >
                <Maximize2 size={16} />
              </button>
              <button 
                className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Share monitor"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* Real-time Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-green-400">98.7%</div>
              <div className="text-sm text-gray-400">
                {language === 'en' ? 'Efficiency' : 'Hatékonyság'}
              </div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">247</div>
              <div className="text-sm text-gray-400">
                {language === 'en' ? 'Units/Hour' : 'Egység/Óra'}
              </div>
            </div>
          </div>

          {/* Assembly Progress */}
          <div className="space-y-3">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">
                  {step}
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: step <= 2 ? '100%' : step === 3 ? '60%' : '0%' }}
                      transition={{ delay: step * 0.2, duration: 1 }}
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  {step <= 2 ? '100%' : step === 3 ? '60%' : '0%'}
                </span>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center justify-between p-3 bg-green-900/30 rounded-lg border border-green-600/30">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">
                {language === 'en' ? 'System Operational' : 'Rendszer Működik'}
              </span>
            </div>
            <span className="text-green-400 font-bold">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg text-white"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Download report"
      >
        <Download size={20} />
      </motion.button>
    </motion.div>
  );
};
