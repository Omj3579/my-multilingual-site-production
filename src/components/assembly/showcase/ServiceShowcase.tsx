import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AssemblyService } from './showcaseContent';
import ServiceDetails from './ServiceDetails';
import AssemblyMonitor from './AssemblyMonitor';
import { MotionValue } from 'framer-motion';

interface ServiceShowcaseProps {
  activeService: AssemblyService;
  activeShowcase: number;
  imageY: MotionValue<number>;
}

const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({ 
  activeService, 
  activeShowcase, 
  imageY 
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeShowcase}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Content */}
          <ServiceDetails service={activeService} />
          
          {/* Visual Showcase */}
          <AssemblyMonitor imageY={imageY} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceShowcase;
