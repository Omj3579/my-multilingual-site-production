import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSolutionsAnimations } from './hooks';
import { solutionsContent } from './data/content';
import { 
  Header,
  BackgroundEffects,
  SolutionGrid,
  SolutionDetailView,
  AdvantagesGrid,
  CTA
} from './components';
import { containerVariants, itemVariants } from './constants/animations';
import './styles.css';

const AssemblySolutions = () => {
  const { language } = useLanguage();
  const {
    containerRef,
    viewRef,
    inView,
    activeSolution,
    setActiveSolution,
    mousePosition,
    handleMouseMove,
    scrollYProgress,
    y1,
    y2,
    rotate,
    mouseX,
    mouseY
  } = useSolutionsAnimations();

  const content = solutionsContent[language as keyof typeof solutionsContent] || solutionsContent.en;
  const activeSolutionData = content.solutions[activeSolution];

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
    >
      <BackgroundEffects 
        mousePosition={mousePosition}
        y1={y1}
        y2={y2}
        rotate={rotate}
        scrollYProgress={scrollYProgress}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header */}
          <Header content={content} itemVariants={itemVariants} />

          {/* Interactive Solutions Showcase */}
          <motion.div variants={itemVariants} className="relative">
            {/* Solution Selection Grid */}
            <SolutionGrid 
              solutions={content.solutions}
              activeSolution={activeSolution}
              setActiveSolution={setActiveSolution}
            />

            {/* Detailed Solution View */}
            <SolutionDetailView
              activeSolution={activeSolution}
              solution={activeSolutionData}
              language={language}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          </motion.div>

          {/* Competitive Advantages */}
          <AdvantagesGrid
            advantages={content.advantages}
            language={language}
            mouseX={mouseX}
            mouseY={mouseY}
            inView={inView}
            itemVariants={itemVariants}
          />

          {/* Call to Action */}
          <CTA language={language} itemVariants={itemVariants} />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblySolutions;