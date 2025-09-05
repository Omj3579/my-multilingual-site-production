import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Import refactored components
import SolutionsHeader from './SolutionsHeader';
import SolutionCards from './SolutionCards';
import InteractiveFeatures from './InteractiveFeatures';
import GlobalMetrics from './GlobalMetrics';
import SolutionsBackground from './SolutionsBackground';
import SolutionsCTA from './SolutionsCTA';

// Import content and types
import { solutionsContent } from './solutionsContent';

const AssemblySolutionsRefactored = () => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { amount: 0.1, once: true });
  
  // State for interactive features
  const [activeSolution, setActiveSolution] = useState(0);
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isInteractive, setIsInteractive] = useState(false);
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: e.clientX, y: e.clientY });
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  // Get content for current language - filter only supported languages
  const supportedLanguage = (language === 'en' || language === 'hu') ? language : 'en';
  const content = solutionsContent[supportedLanguage];

  // Animation variants
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

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 overflow-hidden"
    >
      {/* Background Elements */}
      <SolutionsBackground containerRef={containerRef} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header Section */}
          <SolutionsHeader content={content} itemVariants={itemVariants} />

          {/* Solutions Cards Grid */}
          <SolutionCards
            solutions={content.solutions}
            activeSolution={activeSolution}
            setActiveSolution={setActiveSolution}
            expandedSolution={expandedSolution}
            setExpandedSolution={setExpandedSolution}
            itemVariants={itemVariants}
          />

          {/* Interactive Features */}
          <InteractiveFeatures
            content={content}
            isInteractive={isInteractive}
            setIsInteractive={setIsInteractive}
            mousePosition={mousePosition}
            itemVariants={itemVariants}
          />

          {/* Global Metrics */}
          <GlobalMetrics 
            metrics={content.globalMetrics}
            itemVariants={itemVariants}
          />

          {/* Call to Action */}
          <SolutionsCTA 
            content={content}
            itemVariants={itemVariants}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblySolutionsRefactored;
