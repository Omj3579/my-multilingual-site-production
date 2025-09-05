import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Import subcomponents
import { SparkleSystem, FloatingShapes, DynamicBackground } from './BackgroundEffects';
import { UrgencyBanner } from './UrgencyBanner';
import { HeroHeader } from './HeroHeader';
import { CTAOptions } from './CTAOptions';
import { SocialProof } from './SocialProof';
import { Guarantees } from './Guarantees';
import { FinalCTA } from './FinalCTA';

// Import content data
import { ctaContent } from './ctaContent';

const AssemblyCallToActionRefactored = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  
  // State management
  const [activeOffer, setActiveOffer] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [urgencyTimer, setUrgencyTimer] = useState(3600); // 1 hour
  const [sparkles, setSparkles] = useState([]);
  
  // Scroll and motion values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.8]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Initialize sparkle animation system
  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      color: ['text-yellow-400', 'text-purple-400', 'text-pink-400', 'text-blue-400'][Math.floor(Math.random() * 4)]
    }));
    setSparkles(newSparkles);
  }, []);

  // Urgency timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTimer(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse movement handler
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: e.clientX, y: e.clientY });
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

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
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const content = ctaContent[language];

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 via-indigo-900 to-pink-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Background Effects */}
      <SparkleSystem sparkles={sparkles} />
      <DynamicBackground mousePosition={mousePosition} />
      <FloatingShapes 
        mousePosition={mousePosition}
        y1={y1}
        y2={y2}
        rotate={rotate}
        scale={scale}
        scrollYProgress={scrollYProgress}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
          style={{ opacity }}
        >
          {/* Urgency Banner */}
          <UrgencyBanner 
            title={content.urgencyOffer.title}
            urgencyTimer={urgencyTimer}
            itemVariants={itemVariants}
          />

          {/* Hero Header */}
          <HeroHeader 
            content={content}
            itemVariants={itemVariants}
          />

          {/* CTA Options */}
          <CTAOptions 
            ctaOptions={content.ctaOptions}
            activeOffer={activeOffer}
            setActiveOffer={setActiveOffer}
            mouseX={mouseX}
            mouseY={mouseY}
            itemVariants={itemVariants}
            language={language}
          />

          {/* Social Proof */}
          <SocialProof 
            socialProof={content.socialProof}
            mouseX={mouseX}
            mouseY={mouseY}
            itemVariants={itemVariants}
          />

          {/* Guarantees */}
          <Guarantees 
            guarantees={content.guarantees}
            itemVariants={itemVariants}
            language={language}
          />

          {/* Final CTA */}
          <FinalCTA 
            content={content}
            mouseX={mouseX}
            mouseY={mouseY}
            itemVariants={itemVariants}
            language={language}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyCallToActionRefactored;
