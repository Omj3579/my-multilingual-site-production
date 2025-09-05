import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { useMediaQuery } from '@/hooks/useMediaQuery';

// Import all components
import Hero from './Hero';
import Overview from './Overview';
import KeyMetrics from './KeyMetrics';
import MainContent from './MainContent';
import ResultsSection from './ResultsSection';
import TestimonialsSection from './TestimonialsSection';
import TechnicalDetails from './TechnicalDetails';
import CallToAction from './CallToAction';
import ProgressIndicator from './ProgressIndicator';
import CustomCursor from './CustomCursor';

const NewCaseStudy = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMobile) return;

    document.body.classList.add('cursor-none');
    const style = document.createElement('style');
    style.innerHTML = `
      .cursor-none {
        cursor: none;
      }
      @media (max-width: 768px) {
        .cursor-none {
          cursor: auto;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.classList.remove('cursor-none');
      document.head.removeChild(style);
    };
  }, [isMobile]);

  return (
    <ResourcesLayout>
      {/* Custom cursor for desktop */}
      {!isMobile && <CustomCursor />}
      
      {/* Progress indicator */}
      <ProgressIndicator />

      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="bg-white"
        >
          <Hero />
          <Overview />
          <KeyMetrics />
          <MainContent />
          <ResultsSection />
          <TestimonialsSection />
          <TechnicalDetails />
          <CallToAction />
        </motion.main>
      </AnimatePresence>
    </ResourcesLayout>
  );
};

export default NewCaseStudy;