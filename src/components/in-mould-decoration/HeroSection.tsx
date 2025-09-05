import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [activePoint, setActivePoint] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Reference for the mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Setup scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  
  // Parallax effects with enhanced values
  const titleY = useTransform(smoothProgress, [0, 0.5], [0, -50]);
  const imageY = useTransform(smoothProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1, 1.08]);
  const decorationY = useTransform(smoothProgress, [0, 1], [0, -80]);
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({
        x: (clientX / window.innerWidth) - 0.5,
        y: (clientY / window.innerHeight) - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Enhanced 3D transform calculation
  const calcTransform = (factor = 1, rotationOffset = 0) => {
    return `perspective(2000px) rotateX(${mousePosition.y * 8 * factor}deg) rotateY(${mousePosition.x * -12 * factor + rotationOffset}deg)`;
  };

  // Key points about IMD process
  const processPoints = language === 'en' ? [
    { id: 1, title: 'Film Insertion', desc: 'Specialized film with design is placed in the mold cavity' },
    { id: 2, title: 'Injection Process', desc: 'Molten plastic flows around the film, bonding permanently' },
    { id: 3, title: 'Surface Integration', desc: 'The film becomes an integral part of the product surface' }
  ] : [
    { id: 1, title: 'Film behelyezés', desc: 'Speciális filmet helyezünk a szerszámüregbe a mintázattal' },
    { id: 2, title: 'Befröccsöntés', desc: 'Az olvadt műanyag körülfolyja a filmet, tartósan kötődve' },
    { id: 3, title: 'Felületi integráció', desc: 'A film a termék felületének szerves részévé válik' }
  ];
  
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-slate-50 overflow-hidden" ref={containerRef}>
      {/* Decorative background with technical patterns */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-pattern opacity-[0.03]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: '150px 150px'
          }}
        />
        
        {/* Animated gradient shapes */}
        <motion.div 
          className="absolute -left-[10%] -top-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-transparent blur-[100px]"
          animate={{
            scale: [1, 1.07, 1],
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -right-[20%] -bottom-[15%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-amber-100/20 via-orange-100/15 to-transparent blur-[90px]"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
        
        {/* Technical decorative elements */}
        <motion.div 
          className="absolute top-40 right-10 h-20 w-20 border-2 border-dashed border-slate-200 rounded-full"
          style={{ y: decorationY }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-60 left-20 h-32 w-32 border border-slate-200/50 rounded-full hidden lg:block"
          style={{ y: decorationY }}
        />
      </div>
      
      {/* Main content grid */}
      <div className="container max-w-[1600px] mx-auto px-6 pt-24 pb-16 min-h-screen flex flex-col">
        {/* Top content area */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
          {/* Left content column */}
          <motion.div 
            className="w-full lg:w-1/2 pt-8 lg:pt-16"
            ref={ref}
            style={{ y: titleY }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {/* Enhanced category indicator */}
            <motion.div 
              className="flex items-center gap-2 text-blue-600 mb-4"
              variants={fadeInUp}
            >
              <div className="h-[2px] w-8 bg-blue-500"></div>
              <span className="uppercase tracking-wide text-sm font-medium">
                {language === 'en' ? 'Plastic Decoration' : 'Műanyag Dekoráció'}
              </span>
            </motion.div>
            
            {/* Enhanced title treatment */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[100px] font-bold text-[#676767] leading-[1.05]"
              variants={titleVariants}
              style={{ 
                textShadow: '0 1px 2px rgba(0,0,0,0.05)',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="block">
                {language === 'en' ? 'In-Mould' : 'Szerszámon'}
              </span>
              <span className="block">
                {language === 'en' ? 'Decoration' : 'Belüli Dekoráció'}
              </span>
              
              {/* Enhanced IMD tag with 3D animation */}
              <motion.div 
                className="inline-flex items-center justify-center px-5 py-2 mt-2 bg-white rounded-full border border-slate-200 shadow-xl"
                variants={fadeInUp}
                style={{ transform: calcTransform(0.8) }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl md:text-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-transparent bg-clip-text font-semibold">
                  (IMD)
                </span>
              </motion.div>
            </motion.h1>
            
            {/* New description section */}
            <motion.div 
              className="mt-6 max-w-xl"
              variants={fadeInUp}
            >
              <p className="text-lg text-slate-600">
                {language === 'en' 
                  ? "Transform plastic surfaces with intricate designs that become an integral part of the product. Our IMD technology fuses aesthetics with durability for premium consumer goods and automotive applications."
                  : "Alakítsa át a műanyag felületeket összetett minták segítségével, amelyek a termék szerves részévé válnak. IMD technológiánk egyesíti az esztétikát és a tartósságot prémium fogyasztási cikkekhez és autóipari alkalmazásokhoz."}
              </p>
            </motion.div>
            
            {/* Benefit badges */}
            <motion.div 
              className="mt-8 flex flex-wrap gap-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {[
                language === 'en' ? 'Scratch Resistant' : 'Karcálló',
                language === 'en' ? 'Chemical Resistant' : 'Vegyszerálló',
                language === 'en' ? 'Depth Effect' : '3D Hatás',
                language === 'en' ? 'UV Stable' : 'UV Stabil'
              ].map((benefit, i) => (
                <motion.span 
                  key={i}
                  className="px-4 py-2 bg-white/80 shadow-sm rounded-full text-sm font-medium text-slate-700 backdrop-blur-sm border border-slate-100"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.95)" }}
                  style={{ transform: calcTransform(0.3) }}
                >
                  {benefit}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right hero image with enhanced effects */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            style={{ y: imageY }}
          >
            <motion.div
              className="relative rounded-[40px_0px_40px_0px] lg:rounded-[70px_0px_70px_5px] overflow-hidden shadow-2xl transform-gpu"
              style={{ 
                height: "min(500px, 50vh)",
                scale: imageScale,
                transformStyle: 'preserve-3d',
                transform: calcTransform(0.2),
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Enhanced multi-layer gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-bl from-blue-900/30 via-transparent to-purple-900/20 mix-blend-color-burn z-10" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Main image with higher-quality */}
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/05/machine-performing-in-mould-decoration-on-white-plastic-parts-showcasing-the-process-of-1.png.webp"
                alt={language === 'en' ? 'In-Mould Decoration Hero' : 'Szerszámon Belüli Dekoráció Főcím'}
                className="w-full h-full object-cover"
              />
              
              {/* Enhanced corner accents with animation */}
              {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-12 h-12 z-20 pointer-events-none ${
                    pos === 'top-left' ? 'top-5 left-5' : 
                    pos === 'top-right' ? 'top-5 right-5' : 
                    pos === 'bottom-left' ? 'bottom-5 left-5' : 
                    'bottom-5 right-5'
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path 
                      d={
                        pos === 'top-left' ? "M2 2V20H6V6H20V2H2Z" : 
                        pos === 'top-right' ? "M46 2H28V6H42V20H46V2Z" : 
                        pos === 'bottom-left' ? "M2 46H20V42H6V28H2V46Z" : 
                        "M46 46V28H42V42H28V46H46Z"
                      }
                      fill="white"
                      fillOpacity="0.9"
                    />
                  </svg>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Floating technical badge */}
            <motion.div
              className="absolute -right-6 -bottom-10 lg:right-8 lg:-bottom-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg z-30 max-w-[220px] border-l-4 border-blue-500"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ transform: calcTransform(0.5) }}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-semibold text-blue-900 text-sm">
                {language === 'en' ? 'Advanced Technology' : 'Fejlett Technológia'}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {language === 'en' 
                  ? "Our IMD process achieves 0.02mm precision with high-resolution designs up to 300 DPI."
                  : "IMD folyamatunk 0,02 mm-es pontosságot ér el, akár 300 DPI felbontású mintákkal."}
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom process steps section */}
        <motion.div 
          className="mt-16 lg:mt-20 pb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-center text-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {language === 'en' ? 'The IMD Process' : 'Az IMD Folyamat'}
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processPoints.map((point, i) => (
                <motion.div 
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                  transition={{ delay: 0.8 + (i * 0.2), duration: 0.6 }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                  style={{ transform: calcTransform(0.3) }}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full w-10 h-10 bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                      {point.id}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{point.title}</h4>
                      <p className="text-slate-600">{point.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
