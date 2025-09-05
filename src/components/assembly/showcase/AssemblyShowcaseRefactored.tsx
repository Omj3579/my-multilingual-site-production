import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { showcaseContentData } from './showcaseContent';
import ShowcaseHeader from './ShowcaseHeader';
import ServiceNavigation from './ServiceNavigation';
import ServiceShowcase from './ServiceShowcase';
import CapabilitiesGrid from './CapabilitiesGrid';
import ShowcaseCTA from './ShowcaseCTA';
import ShowcaseBackground from './ShowcaseBackground';

const AssemblyShowcaseRefactored = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { once: true });
  const [activeShowcase, setActiveShowcase] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const content = showcaseContentData[language as keyof typeof showcaseContentData];
  const activeService = content.services[activeShowcase];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const nextShowcase = () => {
    setActiveShowcase((prev) => (prev + 1) % content.services.length);
  };

  const prevShowcase = () => {
    setActiveShowcase((prev) => (prev - 1 + content.services.length) % content.services.length);
  };

  return (
    <div ref={containerRef} className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Background Elements */}
      <ShowcaseBackground backgroundY={backgroundY} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header */}
          <ShowcaseHeader content={content} variants={itemVariants} />

          {/* Interactive Service Showcase */}
          <motion.div variants={itemVariants} className="relative">
            {/* Service Navigation */}
            <ServiceNavigation
              activeShowcase={activeShowcase}
              servicesLength={content.services.length}
              onPrevious={prevShowcase}
              onNext={nextShowcase}
              onSelect={setActiveShowcase}
            />

            {/* Main Showcase */}
            <ServiceShowcase
              activeService={activeService}
              activeShowcase={activeShowcase}
              imageY={imageY}
            />
          </motion.div>

          {/* Capabilities Overview */}
          <CapabilitiesGrid
            capabilities={content.capabilities}
            inView={inView}
            variants={itemVariants}
          />

          {/* Call to Action */}
          <ShowcaseCTA variants={itemVariants} />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyShowcaseRefactored;
