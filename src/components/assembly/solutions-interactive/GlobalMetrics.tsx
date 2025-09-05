import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Users, Award } from 'lucide-react';
import { Variants } from 'framer-motion';

interface GlobalMetric {
  title: string;
  value: string;
  description: string;
  trend: string;
}

interface GlobalMetricsProps {
  metrics: GlobalMetric[];
  itemVariants: Variants;
}

const GlobalMetrics: React.FC<GlobalMetricsProps> = ({ metrics, itemVariants }) => {
  const getMetricIcon = (index: number) => {
    const icons = [BarChart3, TrendingUp, Award, Users];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size={24} />;
  };

  const getMetricColor = (index: number) => {
    const colors = [
      "from-blue-500 to-cyan-500",
      "from-green-500 to-emerald-500", 
      "from-purple-500 to-indigo-500",
      "from-orange-500 to-amber-500"
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Global Performance Metrics</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative group p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getMetricColor(index)} opacity-5 group-hover:opacity-10 transition-opacity`} />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-r ${getMetricColor(index)} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {getMetricIcon(index)}
              </div>

              {/* Value */}
              <div className="mb-2">
                <h4 className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</h4>
                <p className="text-sm font-semibold text-gray-600">{metric.title}</p>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 mb-3">{metric.description}</p>

              {/* Trend */}
              <div className="flex items-center space-x-2">
                <TrendingUp size={14} className="text-green-500" />
                <span className="text-xs font-medium text-green-600">{metric.trend}</span>
              </div>

              {/* Animated Progress Bar */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${getMetricColor(index)}`}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 1.5, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GlobalMetrics;
