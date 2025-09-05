// filepath: c:\Users\OMJohn\STAR-PLUS Kft\VS Code - VS Code Projects\Bilingual\my-multilingual-site\src\components\case-studies\ImmersiveHero.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ImmersiveHero = ({ scrollToSection }) => {
  const { language } = useLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { scrollY } = useScroll();
  
  // Multiple parallax layers
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity1 = useTransform(scrollY, [0, 300, 500], [1, 0.6, 0]);
  const opacity2 = useTransform(scrollY, [0, 400, 600], [1, 0.8, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  
  const title = language === 'hu' 
    ? "Az innováció<br/>évtizede"
    : "A Decade of<br/>Innovation";
  
  const subtitle = language === 'hu'
    ? "Együttműködés egy vezető EU-s kerti és elektromos szerszámgyártóval"
    : "Collaborating with a Leading EU Manufacturer in Garden and Power Tools";
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background layers for parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-black"
        style={{ y: y1, scale }}
      />
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y: y2, opacity: opacity1 }}
      >
        <Image
          src="/resources/caseStudies/manufacturing-floor-dark.jpg"
          alt="Manufacturing floor"
          fill
          className="object-cover opacity-50"
          priority
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 z-20"
        style={{ opacity: opacity2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-30 container mx-auto h-full flex flex-col justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              {language === 'hu' ? "Esettanulmány" : "Case Study"}
            </p>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            {subtitle}
          </p>
          
          <motion.div 
            className="mt-12 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full flex items-center gap-2 group transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => scrollToSection('partnership')}
              data-hover="true"
            >
              <span>{language === 'hu' ? "Fedezze fel a történetet" : "Explore the story"}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-transparent hover:bg-white/10 border border-white/30 text-white rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => scrollToSection('products')}
              data-hover="true"
            >
              {language === 'hu' ? "Termékek megtekintése" : "View products"}
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-white/60 text-sm mb-4">
            {language === 'hu' ? "Görgessen további információkért" : "Scroll for more"}
          </p>
          <motion.div
            animate={{ 
              y: [0, 12, 0], 
              opacity: [0.6, 1, 0.6] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }}
          >
            <ChevronDown className="w-6 h-6 text-amber-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImmersiveHero;