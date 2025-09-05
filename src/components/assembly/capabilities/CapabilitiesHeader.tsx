import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { capabilitiesContent } from './capabilitiesContent';

interface CapabilitiesHeaderProps {
  variants?: any;
}

const CapabilitiesHeader: React.FC<CapabilitiesHeaderProps> = ({ variants }) => {
  const { language } = useLanguage();
  const content = capabilitiesContent[language];

  return (
    <motion.div variants={variants} className="text-center space-y-6">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full border border-blue-200/50"
      >
        <Settings size={18} className="text-blue-600" />
        <span className="text-sm font-medium">{content.badge}</span>
      </motion.div>

      {/* Title */}
      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
        >
          {content.title}
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {content.subtitle}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
        >
          {content.description}
        </motion.p>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"
      />
    </motion.div>
  );
};

export default CapabilitiesHeader;
