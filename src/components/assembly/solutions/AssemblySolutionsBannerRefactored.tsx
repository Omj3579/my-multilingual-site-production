import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SolutionHeader from './SolutionHeader';
import SolutionSelector from './SolutionSelector';
import SolutionDisplay from './SolutionDisplay';
import UniversalBenefits from './UniversalBenefits';
import SuccessStories from './SuccessStories';
import BackgroundElements from '../shared/BackgroundElements';

const AssemblySolutionsBannerRefactored = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeSolution, setActiveSolution] = useState(0);
  
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
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40 overflow-hidden"
    >
      {/* Background Elements */}
      <BackgroundElements backgroundY={backgroundY} />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16 md:space-y-24"
        >
          {/* Header Section */}
          <SolutionHeader variants={itemVariants} />

          {/* Solution Selector and Display */}
          <motion.div variants={itemVariants} className="space-y-12">
            <SolutionSelector 
              activeSolution={activeSolution}
              setActiveSolution={setActiveSolution}
            />
            <SolutionDisplay 
              activeSolution={activeSolution}
              variants={itemVariants}
            />
          </motion.div>

          {/* Universal Benefits */}
          <UniversalBenefits variants={itemVariants} />

          {/* Success Stories */}
          <SuccessStories variants={itemVariants} />

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'Explore All Solutions' : 'Fedezze Fel Minden Megoldást'}
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

export default AssemblySolutionsBannerRefactored;
