import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { capabilitiesContent } from './capabilitiesData';

interface CapabilitiesTabsProps {
  variants?: any;
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const CapabilitiesTabs: React.FC<CapabilitiesTabsProps> = ({ 
  variants, 
  activeTab, 
  setActiveTab 
}) => {
  const { language } = useLanguage();
  const content = capabilitiesContent[language];

  return (
    <motion.div variants={variants} className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Assembly Capabilities' : 'Összeszerelési Képességek'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 p-2 bg-gray-100 rounded-xl">
        {content.tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === index
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600'
            }`}
          >
            <tab.icon size={20} />
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default CapabilitiesTabs;
