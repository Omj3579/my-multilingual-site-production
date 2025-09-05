import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { innovationContent } from './data/content';
import { containerVariants, itemVariants, timelineVariants } from './constants/animations';
import { useAutoAdvanceTimeline, useScrollBasedProgress } from './hooks';
import { 
  Header, 
  BackgroundEffects, 
  Timeline, 
  TimelineItemDisplay, 
  TimelineProgress, 
  InnovationPillars, 
  RDFocus, 
  CTA 
} from './components';
import type { Language } from './types';

const AssemblyInnovation = () => {
  const { language } = useLanguage();
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { amount: 0.1, once: true });
  
  const { containerRef } = useScrollBasedProgress();
  const { activeInnovation, setActiveInnovation } = useAutoAdvanceTimeline(
    innovationContent[language as Language].timeline.length
  );
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const timelineY = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);
  
  const content = innovationContent[language as Language];
  const activeTimelineItem = content.timeline[activeInnovation];

  return (
    <div ref={containerRef} className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-gray-50 overflow-hidden">
      <BackgroundEffects backgroundY={backgroundY} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          <Header content={content} />

          {/* Interactive Innovation Timeline */}
          <motion.div variants={itemVariants} className="relative">
            <Timeline
              timeline={content.timeline}
              activeInnovation={activeInnovation}
              onInnovationSelect={setActiveInnovation}
              language={language as Language}
            />

            {/* Active Timeline Item */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInnovation}
                variants={timelineVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl"
              >
                <TimelineItemDisplay
                  item={activeTimelineItem}
                  timelineY={timelineY}
                  language={language as Language}
                />
              </motion.div>
            </AnimatePresence>

            <TimelineProgress
              activeInnovation={activeInnovation}
              totalItems={content.timeline.length}
            />
          </motion.div>

          <InnovationPillars
            pillars={content.pillars}
            language={language as Language}
            itemVariants={itemVariants}
          />

          <RDFocus
            rdFocus={content.rdFocus}
            language={language as Language}
            itemVariants={itemVariants}
          />

          <CTA
            language={language as Language}
            itemVariants={itemVariants}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyInnovation;