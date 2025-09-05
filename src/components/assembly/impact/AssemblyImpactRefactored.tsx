
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Import refactored components
import BackgroundElements from '../shared/BackgroundElements';
import MetricsSelector from './MetricsSelector';
import MetricsDashboard from './MetricsDashboard';
import CaseStudiesCarousel from './CaseStudiesCarousel';
import { containerVariants, itemVariants } from '../shared/AnimationVariants';
import { impactContent } from '../shared/impactContent';

const AssemblyImpactRefactored = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  const [activeMetric, setActiveMetric] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [countingNumbers, setCountingNumbers] = useState({});
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: e.clientX, y: e.clientY });
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  // Animated number counting effect
  useEffect(() => {
    if (!inView) return;
    
    const numbers = {
      carbonReduction: 0,
      energySaving: 0,
      wasteReduction: 0,
      roiIncrease: 0,
      productionIncrease: 0,
      qualityImprovement: 0
    };

    const targets = {
      carbonReduction: 85,
      energySaving: 67,
      wasteReduction: 92,
      roiIncrease: 340,
      productionIncrease: 250,
      qualityImprovement: 99.8
    };

    const intervals = {};
    
    Object.keys(targets).forEach(key => {
      intervals[key] = setInterval(() => {
        numbers[key] += targets[key] / 100;
        if (numbers[key] >= targets[key]) {
          numbers[key] = targets[key];
          clearInterval(intervals[key]);
        }
        setCountingNumbers({...numbers});
      }, 30);
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [inView]);

  const content = impactContent[language];
  const activeMetricData = content.keyMetrics[activeMetric];

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen py-24 overflow-hidden"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <BackgroundElements 
        scrollYProgress={scrollYProgress}
        mouseX={mouseX}
        mouseY={mouseY}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100/20 to-purple-100/20 text-indigo-300 border border-indigo-400/30"
              whileHover={{ scale: 1.05 }}
            >
              {content.badge}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
                {content.title}
              </h1>
              <p className="text-2xl text-indigo-300 font-light">
                {content.subtitle}
              </p>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed"
            >
              {content.description}
            </motion.p>
          </motion.div>

          {/* Metrics Selector */}
          <MetricsSelector
            metrics={content.keyMetrics}
            activeMetric={activeMetric}
            onMetricChange={setActiveMetric}
            language={language}
          />

          {/* Active Metric Dashboard */}
          <motion.div variants={itemVariants}>
            <MetricsDashboard
              activeMetric={activeMetric}
              activeMetricData={activeMetricData}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          </motion.div>

          {/* Success Stories Carousel */}
          <CaseStudiesCarousel
            caseStudies={content.caseStudies}
            language={language}
            mouseX={mouseX}
            mouseY={mouseY}
          />

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              className="inline-flex flex-col sm:flex-row gap-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.a
                href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative">
                  {language === 'en' ? 'Transform Your Operations' : 'Alakítsa Át Működését'}
                </span>
              </motion.a>
              
              <motion.a
                href={language === 'en' ? '/en/capabilities' : '/hu/kepessegek'}
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'en' ? 'Explore Capabilities' : 'Fedezze Fel Képességeinket'}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AssemblyImpactRefactored;
