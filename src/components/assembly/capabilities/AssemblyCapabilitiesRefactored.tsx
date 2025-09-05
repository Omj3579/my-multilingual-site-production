import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CapabilitiesHeader from './CapabilitiesHeader';
import CapabilitiesTabs from './CapabilitiesTabs';
import CapabilitiesContent from './CapabilitiesContent';
import BackgroundElements from '../shared/BackgroundElements';

const AssemblyCapabilitiesRefactored = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const isInView = useInView(viewRef);
  const [activeTab, setActiveTab] = useState(0);
  const [isProcessRunning, setIsProcessRunning] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 overflow-hidden"
    >
      {/* Background Elements */}
      <BackgroundElements backgroundY={backgroundY} />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          ref={viewRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16 md:space-y-24"
        >
          {/* Header Section */}
          <CapabilitiesHeader variants={itemVariants} />

          {/* Capabilities Tabs */}
          <CapabilitiesTabs 
            variants={itemVariants}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Capabilities Content */}
          <CapabilitiesContent 
            variants={itemVariants}
            activeTab={activeTab}
            isProcessRunning={isProcessRunning}
          />

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'See Our Technology in Action' : 'Tekintse Meg Technológiánkat Működés Közben'}
              <ArrowRight 
                size={20} 
                className="ml-2 transition-transform group-hover:translate-x-1" 
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyCapabilitiesRefactored;
