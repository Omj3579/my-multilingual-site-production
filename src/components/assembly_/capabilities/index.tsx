import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Import sub-components
import {
  HeaderSection,
  InteractiveTabsSection,
  CallToAction,
  BackgroundElements
} from './components';

// Import data and utilities
import { capabilitiesContent } from './data/content';
import { containerVariants, itemVariants } from './constants/animations';
import { useScrollEffects } from './hooks/useScrollEffects';
import { Tab, AssemblyCapabilitiesProps } from './types';

const AssemblyCapabilities: React.FC<AssemblyCapabilitiesProps> = ({ 
  className,
  onTabChange 
}) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [isProcessRunning, setIsProcessRunning] = useState(false);
  
  const { containerRef, viewRef, isInView, backgroundY } = useScrollEffects();

  const content = capabilitiesContent[language as keyof typeof capabilitiesContent];

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (onTabChange) {
      onTabChange(tabIndex);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={className || "relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"}
    >
      {/* Background Elements */}
      <BackgroundElements backgroundY={backgroundY} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <HeaderSection
            badge={content.badge}
            title={content.title}
            subtitle={content.subtitle}
            description={content.description}
            itemVariants={itemVariants}
          />

          {/* Interactive Tabs */}
          <InteractiveTabsSection
            tabs={content.tabs as unknown as Tab[]}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            processSteps={content.processSteps}
            isProcessRunning={isProcessRunning}
            setIsProcessRunning={setIsProcessRunning}
            language={language}
            itemVariants={itemVariants}
          />

          {/* Call to Action */}
          <CallToAction 
            language={language}
            itemVariants={itemVariants}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyCapabilities;