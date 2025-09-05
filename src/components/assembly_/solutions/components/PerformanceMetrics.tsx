import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import { Solution, Language } from '../types';

interface PerformanceMetricsProps {
  solution: Solution;
  language: Language;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ solution, language }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
      <h4 className="text-lg font-semibold mb-6 flex items-center">
        <BarChart3 size={20} className="mr-2" />
        {language === 'en' ? 'Performance Metrics' : 'Teljesítmény Mutatók'}
      </h4>
      
      <div className="space-y-4">
        {Object.entries(solution.metrics).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg"
          >
            <span className="text-gray-300 font-medium">{key}</span>
            <span className="text-white font-bold">{value}</span>
          </motion.div>
        ))}
      </div>

      {/* Live Status */}
      <div className="mt-6 flex items-center justify-between p-3 bg-green-900/30 rounded-lg border border-green-600/30">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 font-medium">
            {language === 'en' ? 'Active Production' : 'Aktív Termelés'}
          </span>
        </div>
        <span className="text-green-400 font-bold">ONLINE</span>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
