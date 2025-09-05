import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceNavigation } from './ServiceNavigation';
import { ServiceDetails } from './ServiceDetails';
import { LiveMonitor } from './LiveMonitor';
import type { ServiceShowcaseProps, Language } from '../types';
import { showcaseVariants } from '../constants/animations';

export const ServiceShowcase: React.FC<ServiceShowcaseProps & { language: Language }> = ({
  content,
  activeShowcase,
  setActiveShowcase,
  imageY,
  language
}) => {
  const activeService = content.services[activeShowcase];

  const nextShowcase = () => {
    setActiveShowcase((activeShowcase + 1) % content.services.length);
  };

  const prevShowcase = () => {
    setActiveShowcase((activeShowcase - 1 + content.services.length) % content.services.length);
  };

  return (
    <div className="relative">
      <ServiceNavigation
        services={content.services}
        activeShowcase={activeShowcase}
        setActiveShowcase={setActiveShowcase}
        onNext={nextShowcase}
        onPrev={prevShowcase}
      />

      {/* Main Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeShowcase}
          variants={showcaseVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ServiceDetails 
              service={activeService} 
              language={language}
            />
            <LiveMonitor 
              language={language}
              imageY={imageY} 
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
