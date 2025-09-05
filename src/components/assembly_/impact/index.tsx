import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Import sub-components
import {
  Header,
  MetricSelector,
  MetricDashboard,
  CaseStudies,
  SustainabilityGoals,
  LiveImpactCounter,
  BackgroundEffects,
  CTA
} from './components';

// Import hooks and data
import { useImpactAnimations } from './hooks/useImpactAnimations';
import { useCountingNumbers } from './hooks/useCountingNumbers';
import { useMouseTracking } from './hooks/useMouseTracking';
import { impactContent } from './data/content';

// Import types and animations
import { containerVariants } from './constants/animations';
import type { Language } from './types';

const AssemblyImpact: React.FC = () => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { once: true, margin: "-100px" });
  
  const [activeMetric, setActiveMetric] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Motion values for animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Scroll-based transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  
  // Custom hooks
  useImpactAnimations();
  const countingNumbers = useCountingNumbers(inView);
  const { handleMouseMove } = useMouseTracking(mouseX, mouseY);
  
  // Get content for current language
  const content = impactContent[language as Language];
  const activeMetricData = content.keyMetrics[activeMetric];

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Effects */}
      <BackgroundEffects y1={y1} y2={y2} rotate={rotate} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header Section */}
          <Header content={content} />

          {/* Interactive Metrics Section */}
          <div className="space-y-12">
            <MetricSelector
              metrics={content.keyMetrics}
              activeMetric={activeMetric}
              onMetricSelect={setActiveMetric}
            />
            
            <MetricDashboard activeMetric={activeMetricData} />
          </div>

          {/* Case Studies Section */}
          <CaseStudies caseStudies={content.caseStudies} />

          {/* Sustainability Goals Section */}
          <SustainabilityGoals sustainabilityGoals={content.sustainabilityGoals} />

          {/* Live Impact Counter */}
          <LiveImpactCounter countingNumbers={countingNumbers} />

          {/* Call to Action */}
          <CTA />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyImpact;