import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { innovation2Content } from './innovation2Content';
import Innovation2Header from './Innovation2Header';
import TimelineNavigation from './TimelineNavigation';
import TimelineContent from './TimelineContent';
import ImpactMetricsDisplay from './ImpactMetricsDisplay';
import Innovation2Background from './Innovation2Background';
import { containerVariants, itemVariants } from '../shared/AnimationVariants';

const AssemblyInnovation2Refactored = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  React.useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = (containerRef.current as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const content = innovation2Content[language as 'en' | 'hu'] || innovation2Content.en;
  const activeTimelineItem = content.timeline[activeTimeline];

  const nextTimeline = useCallback(() => {
    setActiveTimeline((prev) => (prev + 1) % content.timeline.length);
  }, [content.timeline.length]);

  const prevTimeline = useCallback(() => {
    setActiveTimeline((prev) => (prev - 1 + content.timeline.length) % content.timeline.length);
  }, [content.timeline.length]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen py-24 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <Innovation2Background backgroundY={backgroundY} particles={particles} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header */}
          <Innovation2Header content={content} itemVariants={itemVariants} />

          {/* Interactive Timeline */}
          <motion.div variants={itemVariants} className="relative">
            <TimelineNavigation
              timeline={content.timeline}
              activeTimeline={activeTimeline}
              setActiveTimeline={setActiveTimeline}
              nextTimeline={nextTimeline}
              prevTimeline={prevTimeline}
            />

            {/* Main Timeline Content */}
            <TimelineContent
              activeTimelineItem={activeTimelineItem}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          </motion.div>

          {/* Impact Metrics */}
          <ImpactMetricsDisplay
            metrics={content.impactMetrics}
            itemVariants={itemVariants}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyInnovation2Refactored;
