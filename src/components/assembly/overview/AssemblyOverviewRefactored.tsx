import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { overviewContent } from './overviewContent';
import OverviewHeader from './OverviewHeader';
import ChallengesSection from './ChallengesSection';
import SolutionsSection from './SolutionsSection';
import GlobalImpact from './GlobalImpact';
import OverviewCTA from './OverviewCTA';
import OverviewBackground from './OverviewBackground';
import { containerVariants, itemVariants, cardVariants } from '../shared/AnimationVariants';

const AssemblyOverviewRefactored = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const content = overviewContent[language as 'en' | 'hu'] || overviewContent.en;

  return (
    <div ref={containerRef} className="relative py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Elements */}
      <OverviewBackground backgroundY={backgroundY} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header Section */}
          <OverviewHeader content={content} itemVariants={itemVariants} />

          {/* Challenges vs Solutions */}
          <div className="grid lg:grid-cols-2 gap-12">
            <ChallengesSection
              title={content.challenges.title}
              subtitle={content.challenges.subtitle}
              items={content.challenges.items}
              itemVariants={itemVariants}
              cardVariants={cardVariants}
            />

            <SolutionsSection
              title={content.solutions.title}
              subtitle={content.solutions.subtitle}
              items={content.solutions.items}
              itemVariants={itemVariants}
              cardVariants={cardVariants}
            />
          </div>

          {/* Global Impact Section */}
          <GlobalImpact
            title={content.impact.title}
            stats={content.impact.stats}
            itemVariants={itemVariants}
            cardVariants={cardVariants}
            imageY={imageY}
            inView={inView}
          />

          {/* Call to Action */}
          <OverviewCTA language={language as 'en' | 'hu'} itemVariants={itemVariants} />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyOverviewRefactored;
