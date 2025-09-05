import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { overviewContent } from './data/content';
import { containerVariants, itemVariants, cardVariants } from './constants/animations';
import { useOverviewAnimations } from './hooks';
import { 
  Header, 
  BackgroundEffects, 
  Challenges, 
  Solutions, 
  GlobalImpact, 
  CTA 
} from './components';
import type { Language } from './types';

const AssemblyOverview = () => {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2 });
  
  const { containerRef, backgroundY, imageY } = useOverviewAnimations();
  const content = overviewContent[language as Language];

  return (
    <div ref={containerRef} className="relative py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <BackgroundEffects backgroundY={backgroundY} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          <Header content={content} />

          {/* Challenges vs Solutions */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Challenges challenges={content.challenges} cardVariants={cardVariants} />
            <Solutions solutions={content.solutions} cardVariants={cardVariants} />
          </div>

          <GlobalImpact 
            impact={content.impact} 
            imageY={imageY} 
            inView={inView} 
            cardVariants={cardVariants} 
          />

          <CTA language={language as Language} itemVariants={itemVariants} />
        </motion.div>
      </div>
    </div>
  );
};
export default AssemblyOverview;