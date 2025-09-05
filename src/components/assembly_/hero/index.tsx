import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { heroContent } from './content';
import { containerVariants } from './animations';
import { HeroContentMap } from './types';
import {
  BackgroundEffects,
  HeroContent,
  ProcessVisualization,
  ScrollIndicator
} from './components';

const AssemblyHero = () => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const content = heroContent[language as keyof HeroContentMap];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      {/* Animated Background */}
      <BackgroundEffects backgroundY={backgroundY} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ y: textY }}
        >
          {/* Left Column - Content */}
          <HeroContent content={content} />

          {/* Right Column - Visual */}
          <ProcessVisualization language={language} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default AssemblyHero;