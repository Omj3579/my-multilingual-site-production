import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface TabContentProps {
  title: string;
  description: string;
  features: string[];
  metrics: Record<string, string>;
}

const TabContent: React.FC<TabContentProps> = ({
  title,
  description,
  features,
  metrics
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features List */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
            <span className="text-gray-700 font-medium">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 pt-6">
        {Object.entries(metrics).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50"
          >
            <div className="text-xl font-bold text-blue-600">{value}</div>
            <div className="text-sm text-gray-600 capitalize">{key}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TabContent;
