import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import InnovationHeader from './InnovationHeader';
import InnovationTimeline from './InnovationTimeline';
import InnovationCategories from './InnovationCategories';
import InnovationMetrics from './InnovationMetrics';
import ResearchFocus from './ResearchFocus';
import BackgroundElements from '../shared/BackgroundElements';

const AssemblyInnovationRefactored = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  const [activeInnovation, setActiveInnovation] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/40 overflow-hidden"
    >
      {/* Background Elements */}
      <BackgroundElements backgroundY={backgroundY} />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          ref={viewRef}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16 md:space-y-24"
        >
          {/* Header Section */}
          <InnovationHeader variants={itemVariants} />

          {/* Innovation Timeline */}
          <InnovationTimeline 
            variants={itemVariants}
            activeInnovation={activeInnovation}
            setActiveInnovation={setActiveInnovation}
          />

          {/* Innovation Categories */}
          <InnovationCategories variants={itemVariants} />

          {/* Innovation Metrics */}
          <InnovationMetrics variants={itemVariants} />

          {/* Research & Development Focus */}
          <ResearchFocus variants={itemVariants} />

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'Explore Our Innovation Lab' : 'Fedezze Fel Innovációs Laborunkat'}
              <ArrowRight 
                size={20} 
                className="ml-2 transition-transform group-hover:translate-x-1" 
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyInnovationRefactored;
