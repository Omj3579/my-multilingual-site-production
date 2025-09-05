import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Import sub-components
import {
  Header,
  BackgroundEffects,
  SolutionSelector,
  SolutionDisplay,
  UniversalBenefits,
  SuccessStories,
  CTA
} from './components';

// Import data, hooks, and animations
import { solutionsBannerContent } from './data/content';
import { useSolutionsBannerAnimations } from './hooks/useSolutionsBannerAnimations';
import {
  containerVariants,
  itemVariants,
  solutionCardVariants
} from './constants/animations';

const AssemblySolutions: React.FC = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [activeSolution, setActiveSolution] = useState(0);
  
  // Use custom hook for animations and scroll effects
  const {
    viewRef,
    inView,
    backgroundY,
    backgroundYSecondary
  } = useSolutionsBannerAnimations();
  // Get content for current language
  const content = solutionsBannerContent[language as keyof typeof solutionsBannerContent];
  const activeSolutionData = content.solutions[activeSolution];

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 overflow-hidden"
    >
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Animated background gradients */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-full filter blur-3xl"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full filter blur-3xl"
        style={{ y: backgroundYSecondary }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header Section */}
          <Header
            badge={content.badge}
            title={content.title}
            subtitle={content.subtitle}
            description={content.description}
            variants={itemVariants}
          />

          {/* Solution Selector */}
          <SolutionSelector
            solutions={content.solutions}
            activeSolution={activeSolution}
            onSolutionChange={setActiveSolution}
            variants={itemVariants}
          />

          {/* Active Solution Display */}
          <motion.div variants={itemVariants} className="mb-20">
            <AnimatePresence mode="wait">              <SolutionDisplay
                key={activeSolution}
                solution={activeSolutionData}
                solutionVariants={solutionCardVariants}
                itemVariants={itemVariants}
              />
            </AnimatePresence>
          </motion.div>

          {/* Universal Benefits */}
          <UniversalBenefits
            benefits={content.universalBenefits}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />

          {/* Success Stories */}
          <SuccessStories
            stories={content.successStories}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />

          {/* Call to Action */}
          <CTA variants={itemVariants} />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblySolutions;