import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';
import ProcessMonitor from './ProcessMonitor';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size: number }>;
  title: string;
  description: string;
  features: string[];
  metrics: Record<string, string>;
}

interface ProcessStep {
  title: string;
  duration: number;
  status: 'completed' | 'active' | 'pending';
}

interface InteractiveTabsSectionProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
  processSteps: ProcessStep[];
  isProcessRunning: boolean;
  setIsProcessRunning: (running: boolean) => void;
  language: string;
  itemVariants: Variants;
}

const InteractiveTabsSection: React.FC<InteractiveTabsSectionProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  processSteps,
  isProcessRunning,
  setIsProcessRunning,
  language,
  itemVariants
}) => {
  const activeTabContent = tabs[activeTab];

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
      {/* Tab Navigation */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <TabContent
            title={activeTabContent.title}
            description={activeTabContent.description}
            features={activeTabContent.features}
            metrics={activeTabContent.metrics}
          />

          {/* Interactive Visualization */}
          <ProcessMonitor
            processSteps={processSteps}
            isProcessRunning={isProcessRunning}
            setIsProcessRunning={setIsProcessRunning}
            language={language}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default InteractiveTabsSection;
