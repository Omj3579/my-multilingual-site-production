import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { showcaseContent } from './data/content';
import { containerVariants, itemVariants } from './constants/animations';
import { useShowcaseAnimations } from './hooks';
import { 
  Header, 
  BackgroundEffects, 
  ServiceShowcase, 
  CapabilitiesGrid, 
  CTA 
} from './components';
import type { Language } from './types';

const AssemblyShowcase = () => {
  const { language } = useLanguage();
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { amount: 0.1, once: true });
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const { containerRef, backgroundY, imageY } = useShowcaseAnimations();
  const content = showcaseContent[language as Language];  return (
    <div ref={containerRef} className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <BackgroundEffects backgroundY={backgroundY} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          <Header content={content} />          <motion.div variants={itemVariants}>
            <ServiceShowcase
              content={content}
              activeShowcase={activeShowcase}
              setActiveShowcase={setActiveShowcase}
              imageY={imageY}
              language={language as Language}
            />
          </motion.div>

          <CapabilitiesGrid
            capabilities={content.capabilities}
            language={language as Language}
            inView={inView}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />

          <CTA language={language as Language} />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyShowcase;