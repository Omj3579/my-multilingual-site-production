import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { noise } from '@/utils/noise';

const HeroSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Mouse position for 3D effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorSize = useMotionValue(40);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX);
      cursorY.set(clientY);
      
      // Update existing mousePosition state too
      setMousePosition({
        x: (clientX / window.innerWidth) - 0.5,
        y: (clientY / window.innerHeight) - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);
  
  // Setup scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  
  // Parallax effects
  const titleY = useTransform(smoothProgress, [0, 0.5], [0, -70]);
  const imageY = useTransform(smoothProgress, [0, 0.7], [0, 100]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1, 1.1]);
  
  // Key techniques represented as circular dots
  const techniques = language === 'en' ? [
    { id: 1, name: "Painting", color: "bg-blue-500" },
    { id: 2, name: "Printing", color: "bg-amber-500" },
    { id: 3, name: "Etching", color: "bg-purple-500" },
    { id: 4, name: "Texturing", color: "bg-green-500" },
  ] : [
    { id: 1, name: "Festés", color: "bg-blue-500" },
    { id: 2, name: "Nyomtatás", color: "bg-amber-500" },
    { id: 3, name: "Gravírozás", color: "bg-purple-500" },
    { id: 4, name: "Texturálás", color: "bg-green-500" },
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden" ref={containerRef}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Technical pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px"
          }}
        />
        
        {/* Animated gradient shapes */}
        <motion.div 
          className="absolute -left-[10%] top-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-transparent blur-[100px]"
          animate={{
            scale: [1, 1.07, 1],
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -right-[20%] bottom-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-amber-100/20 via-orange-100/15 to-transparent blur-[90px]"
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
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-60 left-20 h-32 w-32 border border-slate-200/50 rounded-full hidden lg:block"
        />
      </div>
      
      {/* Main content grid */}
      <div className="container max-w-[1600px] mx-auto px-6 pt-16 pb-10 lg:pb-0 min-h-[80vh] flex flex-col">
        {/* Content and image container */}
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* Left content column */}
          <motion.div 
            className="w-full lg:w-1/2 z-20 lg:pr-10"
            ref={ref}
            style={{ y: titleY }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Enhanced category indicator */}
            <motion.div 
              className="flex items-center gap-2 text-amber-600 mb-4"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="h-[2px] w-8 bg-amber-500"></div>
              <span className="uppercase tracking-wide text-sm font-medium">
                {language === 'en' ? 'Premium Capabilities' : 'Prémium Képességek'}
              </span>
            </motion.div>
            
            {/* Enhanced title treatment */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[90px] font-bold text-[#676767] leading-[1.05]"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              style={{ 
                textShadow: '0 1px 2px rgba(0,0,0,0.05)',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="block">
                {language === 'en' ? 'Surface' : 'Felület'}
              </span>
              <span className="block">
                {language === 'en' ? 'Finishing' : 'Kezelés'}
              </span>
            </motion.h1>
            
            {/* Description paragraph */}
            <motion.p
              className="mt-6 text-lg text-slate-600 max-w-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.3 }
                }
              }}
            >
              {language === 'en' 
                ? "Transform ordinary plastics into extraordinary products with our comprehensive surface finishing solutions. From elegant paint finishes to intricate tampo prints, we make your vision come to life."
                : "Alakítsa át a hétköznapi műanyagokat rendkívüli termékekké átfogó felületkezelési megoldásainkkal. Az elegáns festékbevonatoktól a bonyolult tamponnyomatokig – életre keltjük elképzeléseit."}
            </motion.p>
            
            {/* Technique indicators */}
            <motion.div 
              className="mt-8 hidden lg:flex gap-6 flex-wrap"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {techniques.map((technique) => (
                <motion.div
                  key={technique.id}
                  className="flex flex-col items-center"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-4 h-4 rounded-full ${technique.color} mb-2`} />
                  <span className="text-sm text-slate-600">{technique.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right hero image with enhanced effects */}
          <motion.div 
            className="w-full lg:w-1/2 relative -mt-[90px] lg:mt-0"
            style={{ y: imageY, scale: imageScale }}
          >
            <motion.div
              className="relative rounded-[40px_0px_40px_40px] lg:rounded-[70px_0px_70px_70px] overflow-hidden shadow-2xl transform-gpu"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Enhanced multi-layer gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-bl from-blue-900/20 via-transparent to-amber-700/20 mix-blend-overlay z-10" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Main image with higher-quality */}
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/09/3.png"
                alt={language === 'en' ? 'Surface Finishing Solutions' : 'Felületkezelési megoldások'}
                className="w-full h-auto object-cover"
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
              className="absolute -right-6 -bottom-10 lg:right-8 lg:bottom-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg z-30 max-w-[220px] border-l-4 border-amber-500"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ 
                transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
              }}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-semibold text-amber-900 text-sm">
                {language === 'en' ? 'Premium Finishes' : 'Prémium Felületek'}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {language === 'en' 
                  ? "From matte to high-gloss, our surface finishing techniques create exceptional tactile and visual experiences."
                  : "A matt felületektől a magasfényűig, felületkezelési technikáink kivételes tapintási és vizuális élményeket teremtenek."}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* 3D cursor follower */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ 
          x: cursorX, 
          y: cursorY,
          height: cursorSize,
          width: cursorSize,
          backgroundColor: '#ffffff',
          borderRadius: '50%',
        }}
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
};

export default HeroSection;

