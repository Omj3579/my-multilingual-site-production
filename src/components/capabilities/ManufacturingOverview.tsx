import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ComponentProps } from './shared/types';
import { manufacturingCapabilities, manufacturingOverviewContent } from './shared/constants';
import { useParallax, useInViewAnimation } from './shared/hooks';
import { BackgroundPattern } from './shared/BackgroundPattern';
import VideoPlayer from './shared/VideoPlayer';
import ContentBlock from './shared/ContentBlock';
import ManufacturingGrid from './shared/ManufacturingGrid';

const ManufacturingOverview: React.FC<ComponentProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  const [ref, inView] = useInViewAnimation();
  
  // Helper function to get content with fallback to English
  const getContent = (content: { en: string; hu: string }) => {
    return content[language as keyof typeof content] || content.en;
  };
  
  // Helper function for manufacturing capabilities with language fallback
  const getManufacturingCapabilities = () => {
    return manufacturingCapabilities.map(cap => cap[language as keyof typeof cap] || cap.en).filter(Boolean);
  };
    // Parallax effects
  const { backgroundY } = useParallax([0, 1], ['0%', '30%']);
  const { contentY: videoY } = useParallax([0, 0.5, 1], ['0%', '-5%', '-10%']);
  const { contentY: textY } = useParallax([0, 1], ['0%', '-8%']);
  
  // Decorative elements movement
  const { contentY: circle1Y } = useParallax([0, 1], ['0%', '-10%']);
  const { contentY: circle2Y } = useParallax([0, 1], ['0%', '10%']);

  return (
    <section className={`relative font-[Poppins] bg-white overflow-hidden ${className}`}>
      {/* Enhanced background with pattern and animated gradient */}
      <motion.div 
        className="absolute inset-0 w-full" 
        style={{ y: backgroundY }}
      >        <div className="bg-gradient-to-b from-[#f0f0f0] to-[#fcfcfc] h-[600px] relative overflow-hidden">
          <BackgroundPattern pattern="grid">
            <div className="opacity-15" />
          </BackgroundPattern>
            {/* Animated gradient circles */}
          <motion.div 
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-100/40 via-indigo-100/30 to-blue-50/20 blur-[80px]"
            style={{ 
              top: '-200px', 
              left: '-100px',
              y: circle1Y
            }}
          />
          <motion.div 
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-50/20 via-purple-100/30 to-indigo-50/40 blur-[60px]"
            style={{ 
              bottom: '-150px', 
              right: '-80px',
              y: circle2Y
            }}
          />
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div 
        ref={ref}
        className="relative z-10 mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: videoY }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >        <VideoPlayer 
          videoId="h0gnHvFlSq0"
          title={manufacturingOverviewContent.videoTitle}
        />
      </motion.div>

      {/* Text content section */}
      <motion.div 
        className="mt-28 px-6 sm:px-10 lg:px-12 pb-28"
        style={{ y: textY }}
      >
        <div className="max-w-[1080px] mx-auto space-y-32">
          {/* First content block */}          <ContentBlock
            title={getContent(manufacturingOverviewContent.sections.section1.title)}
            content={getContent(manufacturingOverviewContent.sections.section1.content)}
            layout="left"
          />

          {/* Second content block with manufacturing grid */}
          <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -left-10 top-0 w-20 h-20 rounded-full border border-gray-200 opacity-40 hidden lg:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.div 
              className="absolute -right-5 bottom-10 w-10 h-10 rounded-full border border-blue-200 opacity-30 hidden lg:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            
            {/* Title column */}
            <motion.div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
              <motion.h2 
                className="text-4xl font-normal leading-snug text-[#2D2D2D] mb-8 text-left lg:text-right"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >                <span className="relative inline-block">
                  {getContent(manufacturingOverviewContent.sections.section2.title)}
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                </span>
              </motion.h2>
            </motion.div>
            
            {/* Features grid */}
            <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">              <ManufacturingGrid
                features={getManufacturingCapabilities()}
                additionalContent={getContent(manufacturingOverviewContent.sections.section2.additionalContent)}
              />
            </div>
          </motion.div>
          
          {/* Call-to-action section */}
          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'}
              className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg overflow-hidden relative group"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              />
                <span className="relative z-10 mr-2">
                {getContent(manufacturingOverviewContent.cta)}
              </span>
              <motion.svg 
                className="relative z-10 w-5 h-5" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ManufacturingOverview;
