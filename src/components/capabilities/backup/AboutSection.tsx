import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useParallax, useInViewAnimation } from './shared/hooks';
import { AnimatedText } from './shared/AnimatedText';
import { containerVariants, itemVariants, fadeInUpVariants } from './shared/animations';
import { highlightWords } from './shared/constants';
import { Stat } from './shared/types';

const AboutSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax scroll effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  
  // Generate blob gradient animations
  const blobLeft = useTransform(scrollYProgress, [0, 1], ['-25%', '-15%']);
  const blobTop = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const blobRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, 0]);
  const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  
  // Text reveal variants
  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Split paragraphs into words for staggered animation
  const enParagraph = 'For over 30 years, Flair-Plastic has been a prominent player in the plastic injection molding industry, manufacturing a multitude of products that improve everyday life. Our product line extends from consumer goods to essential items in hygiene and power tools sectors. With unwavering commitment to technical precision and innovation, we consistently provide high-quality plastic parts to a diverse customer base worldwide.';
  const enWords = enParagraph.split(' ');
  
  const huParagraph = 'Több mint 30 éve a Flair-Plastic meghatározó szereplő a műanyag fröccsöntő iparágban, olyan termékek gyártásával, amelyek javítják a mindennapi életet. Termékpalettánk a fogyasztási cikkektől a higiéniai és szerszámgép ágazat alapvető elemeiig terjed. A műszaki precizitás és innováció iránti töretlen elkötelezettségünkkel következetesen biztosítunk kiváló minőségű műanyag alkatrészeket világszerte különböző ügyfelek számára.';
  const huWords = huParagraph.split(' ');
  
  // Impact words to highlight with special effects
  const highlightWordsEn = ['30 years', 'prominent', 'innovation', 'high-quality', 'worldwide'];
  const highlightWordsHu = ['30 éve', 'meghatározó', 'innovációt', 'kiváló', 'világszerte']; 

  // Define the stats array properly
  const stats = [
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
  
  // Define floating elements array
  const floatingElements = [
    { top: '10%', left: '5%', size: '40px', delay: 0.3 },
    { top: '15%', right: '10%', size: '30px', delay: 0.5 },
    { bottom: '20%', left: '15%', size: '25px', delay: 0.7 }
  ];

  return (
    <section 
      ref={containerRef}
      className="w-full bg-white px-0 py-28 font-[Poppins] relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-50"
        style={{ y: backgroundY }}
      >
        {/* Background circle grid pattern */}
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
        
        {/* Animated blob */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-100/30 via-indigo-100/30 to-purple-100/30 blur-3xl"
          style={{ 
            left: blobLeft, 
            top: blobTop,
            rotate: blobRotate,
            scale: blobScale
          }}
        />
      </motion.div>

      <motion.div 
        ref={ref}
        className="max-w-[1220px] w-full mx-auto px-6 relative z-10"
        style={{ y: contentY }}
      >
        {/* Hexagon decorative elements */}
        <div className="absolute -top-20 -left-20 text-[#f0f0f0] opacity-50">
          <svg width="200" height="200" viewBox="0 0 100 100">
            <motion.path 
              d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
          </svg>
        </div>
        <div className="absolute top-1/2 -right-32 text-[#f0f0f0] opacity-50">
          <svg width="300" height="300" viewBox="0 0 100 100">
            <motion.path 
              d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
          </svg>
        </div>
        
        {/* Main content with advanced layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content column - Text with advanced animations */}
          <motion.div 
            className="lg:col-span-5 space-y-10 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section title with gradient mask */}
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
              
              {/* Decorative accent */}
              <div className="absolute -top-6 -left-6">
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-blue-200 opacity-30"
                  initial={{ scale: 0 }}
                  animate={{ scale: inView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            </div>
            
            {/* Paragraph with word-by-word animation */}
            <motion.div 
              className="text-[18px] leading-loose text-[#555555] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {language === 'en' ? (
                <p className="space-x-1.5">
                  {enWords.map((word, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={wordVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      className={`inline-block ${
                        highlightWordsEn.some(hw => word.includes(hw)) 
                          ? 'text-blue-600 font-medium' 
                          : ''
                      }`}
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
              ) : (
                <p className="space-x-1.5">
                  {huWords.map((word, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={wordVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      className={`inline-block ${
                        highlightWordsHu.some(hw => word.includes(hw)) 
                          ? 'text-blue-600 font-medium' 
                          : ''
                      }`}
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
              )}
            </motion.div>
            
            {/* Stats section with animated counters */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 20
                  }}
                  transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-xs font-semibold text-blue-600 flex items-center justify-center mb-1">
                      <span className="mr-1">{stat.icon}</span>
                    </div>
                    <motion.span 
                      className="text-2xl font-bold text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: inView ? 1 : 0 }}
                    >
                      {stat.value}+
                    </motion.span>
                    <span className="text-xs tracking-wide text-gray-500">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Center decorative vertical line */}
          <div className="hidden lg:block lg:col-span-1 h-[300px] relative">
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: inView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            
            {/* Animated circles on the line */}
            {[0.2, 0.5, 0.8].map((position, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-400"
                style={{ top: `${position * 100}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: inView ? 1 : 0, 
                  opacity: inView ? 1 : 0 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + (i * 0.2) 
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400 opacity-40"
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 0, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: i * 0.3
                  }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Right content - Interactive 3D card with advanced effects */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main card with 3D transform and glassmorphism */}
            <motion.div
              className="relative rounded-xl lg:rounded-[2rem] overflow-hidden h-[500px] shadow-2xl transform-gpu"
              style={{ perspective: "1000px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              {/* Card background with parallax effect */}
              <motion.div 
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background image */}
                <img
                  src="https://flair-plastic.hu/wp-content/uploads/2024/04/DJI_0999.00_10_30_08.Still030-300x169.jpg.webp"
                  alt={language === 'en' ? 'About Flair Plastic' : 'A Flair Plasticról'}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                
                {/* Accent color overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-purple-900/50 z-10" />
                
                {/* Grain texture overlay */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20" />
                
                {/* Gloss effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-30"
                  whileHover={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
              
              {/* Card content with advanced glass effect */}
              <div className="absolute inset-0 flex flex-col justify-center items-center z-40">
                <div className="w-[90%] mx-auto relative backdrop-blur-md bg-white/10 p-10 rounded-xl border border-white/20">
                  {/* Animated glass card decorative corners */}
                  {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-8 h-8 ${
                        corner === 'top-left' ? 'top-0 left-0 border-t border-l' :
                        corner === 'top-right' ? 'top-0 right-0 border-t border-r' :
                        corner === 'bottom-left' ? 'bottom-0 left-0 border-b border-l' :
                        'bottom-0 right-0 border-b border-r'
                      } border-white/30 rounded-sm`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + (i * 0.1) }}
                    />
                  ))}
                  
                  {/* Card content */}
                  <motion.div
                    className="text-center text-white space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.h3 
                      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: inView ? 0 : 20, opacity: inView ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {language === 'en'
                        ? 'Enhance Your Product Capabilities'
                        : 'Növelje Termékképességeit'}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg font-light opacity-85 max-w-2xl"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: inView ? 0 : 20, opacity: inView ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      {language === 'en'
                        ? "Discover the precision and innovation behind our industry-leading plastic injection molding solutions."
                        : "Fedezze fel a precizitást és innovációt vezető műanyag fröccsöntési megoldásaink mögött."}
                    </motion.p>
                    
                    {/* Button with animated gradient background */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: inView ? 0 : 20, opacity: inView ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <motion.a
                        href={language === 'en' ? 'https://flair-plastic.hu/en/contact/' : 'https://flair-plastic.hu/hu/kapcsolat/'}
                        target="_blank"
                        className="relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Animated gradient background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{ duration: 5, repeat: Infinity }}
                          style={{ backgroundSize: '200% 200%' }}
                        />
                        
                        {/* Button text */}
                        <span className="relative z-10 text-white font-medium">
                          {language === 'en' ? 'Contact Us Today' : 'Lépjen kapcsolatba velünk'}
                        </span>
                        
                        {/* Arrow icon with animation */}
                        <motion.svg 
                          className="relative z-10 w-4 h-4 text-white"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              {floatingElements.map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute z-40"
                  style={{ 
                    top: item.top || 'auto', 
                    left: item.left || 'auto',
                    right: item.right || 'auto',
                    bottom: item.bottom || 'auto',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: inView ? 1 : 0, 
                    scale: inView ? 1 : 0 
                  }}
                  transition={{ delay: item.delay, duration: 0.6 }}
                >
                  {/* Glowing decorative element */}
                  <motion.div
                    className="rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center"
                    style={{ width: item.size, height: item.size }}
                    animate={{
                      y: [0, -10, 0],
                      boxShadow: [
                        '0 0 5px 0px rgba(255,255,255,0.3)',
                        '0 0 15px 5px rgba(255,255,255,0.5)',
                        '0 0 5px 0px rgba(255,255,255,0.3)'
                      ]
                    }}
                    transition={{ 
                      duration: 3 + i, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <span className="text-white text-base">
                      {i === 0 ? '30+' : i === 1 ? '✓' : '★'}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
