import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';
import { type TimelineItemDisplayProps } from '../types';

const TimelineItemDisplay: React.FC<TimelineItemDisplayProps> = ({ 
  item, 
  timelineY,
  language 
}) => {
  const getStatusColor = (status: string) => {
    if (status === 'Deployed' || status === 'Telepítve') {
      return 'bg-green-100 text-green-800';
    } else if (status === 'Production Ready' || status === 'Termelésre Kész') {
      return 'bg-blue-100 text-blue-800';
    } else if (status === 'Scaling' || status === 'Skálázás') {
      return 'bg-orange-100 text-orange-800';
    } else if (status === 'Beta Testing' || status === 'Béta Tesztelés') {
      return 'bg-yellow-100 text-yellow-800';
    } else {
      return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressPercentage = (status: string): string => {
    if (status === 'Deployed' || status === 'Telepítve') return '100%';
    if (status === 'Production Ready' || status === 'Termelésre Kész') return '95%';
    if (status === 'Scaling' || status === 'Skálázás') return '85%';
    if (status === 'Beta Testing' || status === 'Béta Tesztelés') return '75%';
    return '45%';
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
              <item.icon size={32} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-purple-600 mb-1">
                {item.year} • {item.category}
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {item.title}
              </h3>
            </div>
          </div>
          
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>
            {item.status}
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          {item.description}
        </p>

        {/* Impact Metric */}
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg">
          <TrendingUp size={20} className="mr-2" />
          {item.impact}
        </div>

        {/* Technologies */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-gray-900">
            {language === 'en' ? 'Core Technologies' : 'Alapvető Technológiák'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-gray-900">
            {language === 'en' ? 'Key Results' : 'Főbb Eredmények'}
          </h4>
          <div className="space-y-2">            {item.results.map((result, index) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>      {/* Innovation Visualization */}
      <motion.div 
        className="relative"
        style={{ y: timelineY }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-8 shadow-2xl text-white">
          {/* Innovation Dashboard */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Innovation Monitor</h4>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300" />
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-600" />
              </div>
            </div>

            {/* Innovation Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold text-purple-400">
                  {item.year}
                </div>
                <div className="text-sm text-gray-300">Launch Year</div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold text-green-400">Active</div>
                <div className="text-sm text-gray-300">Status</div>
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Development Progress</span>
                <span className="text-purple-400 font-bold">
                  {getProgressPercentage(item.status)}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: getProgressPercentage(item.status) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Innovation Impact */}
            <div className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
              <div className="flex items-center space-x-3 mb-2">
                <Sparkles size={20} className="text-purple-400" />
                <span className="font-semibold">Innovation Impact</span>
              </div>
              <div className="text-2xl font-bold text-purple-400">
                {item.impact}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Innovation Indicators */}
        <motion.div
          className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Lightbulb size={20} className="text-white" />
        </motion.div>
      </motion.div>
    </div>  );
};

export default TimelineItemDisplay;
