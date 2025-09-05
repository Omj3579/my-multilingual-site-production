import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useParallax, useInViewAnimation } from './shared/hooks';
import { AnimatedText } from './shared/AnimatedText';
import { containerVariants, itemVariants } from './shared/animations';
import { highlightWords } from './shared/constants';
import { Stat } from './shared/types';

const AboutSection = () => {
  const { language } = useLanguage();
  const { ref, backgroundY, contentY } = useParallax();
  const [inViewRef, inView] = useInViewAnimation();

  // Company stats data
  const stats: Stat[] = [
    { 
      value: 30, 
      label: language === 'en' ? 'Years Experience' : 'Év Tapasztalat',
      icon: '✓' 
    },
    { 
      value: 500, 
      label: language === 'en' ? 'Products' : 'Termékek',
      icon: '★' 
    },
    { 
      value: 24, 
      label: language === 'en' ? 'Countries' : 'Országok',
      icon: '⚡' 
    }
  ];

  // Company description text
  const description = {
    en: 'For over 30 years, Flair-Plastic has been a prominent player in the plastic injection molding industry, manufacturing a multitude of products that improve everyday life. Our product line extends from consumer goods to essential items in hygiene and power tools sectors. With unwavering commitment to technical precision and innovation, we consistently provide high-quality plastic parts to a diverse customer base worldwide.',
    hu: 'Több mint 30 éve a Flair-Plastic meghatározó szereplő a műanyag fröccsöntő iparágban, olyan termékek gyártásával, amelyek javítják a mindennapi életet. Termékpalettánk a fogyasztási cikkektől a higiéniai és szerszámgép ágazat alapvető elemeiig terjed. A műszaki precizitás és innováció iránti töretlen elkötelezettségünkkel következetesen biztosítunk kiváló minőségű műanyag alkatrészeket világszerte különböző ügyfelek számára.'
  };

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-0 py-28 font-[Poppins] relative overflow-hidden"
    >
      {/* Animated background with parallax */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-50"
        style={{ y: backgroundY }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full grid grid-cols-12 gap-8">
            {Array.from({ length: 120 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-900"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: inView ? 1 : 0,
                  opacity: inView ? [0.3, 0.2, 0.3] : 0
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.01,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        ref={inViewRef}
        className="max-w-[1220px] w-full mx-auto px-6 relative z-10"
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Main content grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content column */}
          <motion.div 
            className="lg:col-span-5 space-y-10 relative"
            variants={itemVariants}
          >
            {/* Section title */}
            <div className="relative">
              <motion.h2 
                className="text-[42px] md:text-[48px] font-bold text-[#404040] leading-tight relative z-10"
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                animate={{ 
                  clipPath: inView ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 0 0, 0 100%, 0 100%)' 
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {language === 'en' 
                  ? 'Plastic Injection Moulding'
                  : 'Műanyag Fröccsöntés'}
              </motion.h2>
              
              {/* Animated underline */}
              <motion.div
                className="h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: inView ? '60%' : 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </div>
            
            {/* Description with animated text */}
            <AnimatedText
              text={description[language]}
              highlightWords={highlightWords[language]}
              className="text-[18px] leading-loose text-[#555555]"
              inView={inView}
              highlightColor="text-blue-600 font-medium"
            />
            
            {/* Stats section */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <motion.div 
                    className="text-3xl font-bold text-blue-600 mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: inView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                  >
                    {stat.value}+
                  </motion.div>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content column - Image or visualization */}
          <motion.div 
            className="lg:col-span-7 relative"
            variants={itemVariants}
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
              {/* Placeholder for image or 3D visualization */}
              <div className="aspect-video bg-gradient-to-br from-white/50 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {language === 'en' ? 'Manufacturing Excellence' : 'Gyártási Kiválóság'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'State-of-the-art facilities and technology' 
                      : 'Legkorszerűbb létesítmények és technológia'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
