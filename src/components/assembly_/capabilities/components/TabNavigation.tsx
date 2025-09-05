import React from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size: number }>;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  setActiveTab
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-gray-100/80 rounded-2xl">
      {tabs.map((tab, index) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(index)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            activeTab === index
              ? 'bg-white text-blue-600 shadow-lg'
              : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <tab.icon size={20} />
          <span>{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default TabNavigation;
