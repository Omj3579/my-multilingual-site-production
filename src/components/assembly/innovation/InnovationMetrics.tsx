import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { innovationContent } from './innovationContent';

interface InnovationMetricsProps {
  variants?: any;
}

const InnovationMetrics: React.FC<InnovationMetricsProps> = ({ variants }) => {
  const { language } = useLanguage();
  const content = innovationContent[language];

  return (
    <motion.div variants={variants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Innovation Metrics' : 'Innovációs Mutatók'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.metrics.map((metric, index) => (
          <motion.div
            key={index}
            variants={variants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <metric.icon size={24} />
              </div>
              <div className="flex items-center space-x-1 text-green-600">
                <TrendingUp size={16} />
                <span className="text-sm font-medium">{metric.trend}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {metric.unit}
                </span>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {metric.title}
              </h4>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {metric.description}
              </p>
            </div>

            {/* Progress bar animation */}
            <motion.div 
              className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InnovationMetrics;
