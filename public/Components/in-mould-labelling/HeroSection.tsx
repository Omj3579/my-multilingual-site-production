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
  
  // Parallax effects
  const titleX = useTransform(smoothProgress, [0, 0.3], [0, -30]);
  const titleY = useTransform(smoothProgress, [0, 0.3], [0, -20]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1, 1.1]);
  const imageY = useTransform(smoothProgress, [0, 0.5], [0, 50]);
  const cardY = useTransform(smoothProgress, [0, 0.3], [0, -40]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.4], [0.2, 0]);
  
  // Enhanced 3D transform with increased dynamics
  const calcTransform = (factor = 1) => {
    return `perspective(1000px) rotateX(${mousePosition.y * 8 * factor}deg) rotateY(${mousePosition.x * -8 * factor}deg)`;
  };
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Process milestones data
  const processPoints = language === 'en' ? [
    { id: 1, title: 'Label Placement', desc: 'Labels positioned precisely in mold cavity' },
    { id: 2, title: 'Injection Process', desc: 'Molten plastic fuses permanently with the label' },
    { id: 3, title: 'Single-Step Finish', desc: 'Product emerges fully decorated, no post-processing needed' }
  ] : [
    { id: 1, title: 'Címke elhelyezés', desc: 'Címkék precíz pozicionálása a szerszámüregben' },
    { id: 2, title: 'Befröccsöntés', desc: 'Az olvadt műanyag tartósan összeolvad a címkével' },
    { id: 3, title: 'Egylépéses befejezés', desc: 'A termék teljesen díszítve kerül ki, utófeldolgozás nem szükséges' }
  ];
  
  return (
    <div className="relative bg-[#f8f9fc] overflow-hidden min-h-[100vh]" ref={containerRef}>
      {/* Background gradient elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-white via-white to-gray-50" />
        
        <motion.div 
          className="absolute -left-[20%] -top-[30%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-transparent blur-[80px]"
          animate={{
            scale: [1, 1.03, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "24px 24px"
          }} 
        />
      </div>
      
      {/* Content container with overlapping elements */}
      <div className="relative w-full max-w-[1800px] mx-auto h-[100vh] md:min-h-[700px] flex flex-col lg:flex-row items-stretch">
        {/* Left side - overlapping content */}
        <motion.div 
          className="relative z-30 w-full lg:w-[54%] pt-24 lg:pt-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16 order-2 lg:order-1"
          style={{ 
            x: titleX,
            y: titleY
          }}
          ref={ref}
        >
          <div className="max-w-[600px]">
            {/* Category indicator with movement */}
            <motion.div
              className="inline-flex bg-white rounded-full px-4 py-2 mb-6 items-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6 }}
              style={{ transform: calcTransform(0.3) }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-blue-600 mr-2.5"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                {language === 'en' ? 'Advanced Manufacturing' : 'Fejlett gyártás'}
              </span>
            </motion.div>
            
            {/* Main headline with enhanced movement */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-slate-800 mb-5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex flex-wrap items-center">
                <span className="block">
                  {language === 'en' ? 'In-Mould' : 'Címkézés'}{' '}
                </span>
                <div className="relative inline-block">
                  <motion.div 
                    className="absolute -right-3 -top-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-60 blur-[10px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <span className="relative z-10">
                    {language === 'en' ? 'Labelling' : 'a szerszámban'}
                  </span>
                </div>
              </div>
            </motion.h1>
            
            {/* Divider line with animation */}
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-500 mb-6"
              initial={{ width: 0 }}
              animate={{ width: inView ? 80 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            {/* Enhanced subtitle with background highlight */}
            <motion.div
              className="relative mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative z-10 text-lg max-w-lg text-gray-600">
                {language === 'en' 
                  ? 'Seamlessly integrating high-quality labels into plastic products for premium aesthetics and enhanced durability.'
                  : 'Kiváló minőségű címkék zökkenőmentes integrálása műanyag termékekbe a prémium esztétika és a fokozott tartósság érdekében.'}
              </div>
              <div className="absolute -left-4 -bottom-3 w-20 h-8 bg-blue-100 rounded-full blur-xl opacity-30" />
            </motion.div>
            
            {/* Callout card with process steps */}
            <motion.div 
              className="relative bg-white rounded-xl shadow-2xl overflow-hidden mt-8 lg:mt-4 lg:absolute lg:bottom-32 lg:right-0 lg:translate-x-1/3 lg:w-[380px] z-40 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ 
                y: cardY,
                transform: calcTransform(0.2), 
                transformStyle: 'preserve-3d'
              }}
              whileHover={{ y: -5 }}
            >
              {/* Top highlight bar */}
              <div className="h-[4px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-full" />
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">
                    {language === 'en' ? 'Process Overview' : 'Folyamat áttekintése'}
                  </h3>
                </div>
                
                <div className="space-y-4 pl-2">
                  {processPoints.map((point, i) => (
                    <div key={i} className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-xs text-blue-700">
                          {point.id}
                        </div>
                        {i < processPoints.length - 1 && (
                          <div className="w-[2px] h-full bg-blue-100 my-1" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{point.title}</h4>
                        <p className="text-sm text-gray-500">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right side - Immersive image that bleeds into left side content */}
        <div className="relative w-full lg:w-[65%] h-[50vh] lg:h-full overflow-hidden order-1 lg:order-2">
          {/* Background image filling right side */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{
              scale: imageScale,
              y: imageY
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent mix-blend-multiply z-10" 
              style={{ opacity: overlayOpacity }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"
              style={{ opacity: overlayOpacity }}
            />
            
            {/* Left side gradient blend */}
            <div className="absolute left-0 inset-y-0 w-24 lg:w-48 bg-gradient-to-r from-[#f8f9fc] to-transparent z-20" />
            
            {/* Main image */}
            <img 
              src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Image-displays-the-before-after-of-in-mould-decoration-in-plastic-manufacturing.-On-the1-left-a-cl.png.webp" 
              alt={language === 'en' ? "In-Mould Labelling Process" : "Címkézés a szerszámban folyamat"}
              className="w-full h-full object-cover object-center"
            />
            
            {/* Floating IML badge */}
            <motion.div 
              className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm shadow-xl rounded-full px-4 py-2 border border-blue-100/70 z-30"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              style={{ transform: calcTransform(0.5) }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-transparent bg-clip-text font-bold">
                (IML)
              </span>
            </motion.div>
            
            {/* Interactive process points - simplified for overlay */}
            {processPoints.map((point, i) => {
              const positions = [
                { bottom: '60%', right: '30%' },
                { bottom: '40%', right: '60%' },
                { bottom: '20%', right: '40%' }
              ];
              
              return (
                <motion.div
                  key={i}
                  className="absolute z-30"
                  style={{ bottom: positions[i].bottom, right: positions[i].right }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + (i * 0.2), duration: 0.7 }}
                  onHoverStart={() => setActivePoint(point.id)}
                  onHoverEnd={() => setActivePoint(null)}
                  onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                >
                  <motion.div 
                    className="w-5 h-5 rounded-full bg-blue-400/80 ring-2 ring-white shadow-lg shadow-blue-400/50 relative cursor-pointer"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 rgba(59, 130, 246, 0.5)',
                        '0 0 0 10px rgba(59, 130, 246, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                  
                  <AnimatePresence>
                    {activePoint === point.id && (
                      <motion.div
                        className="absolute z-20 bg-white/90 backdrop-blur-sm shadow-xl rounded-lg p-3 min-w-[200px] border border-blue-100/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          bottom: "calc(100% + 12px)",
                          right: i % 2 === 0 ? "auto" : 0,
                          left: i % 2 === 0 ? 0 : "auto",
                        }}
                      >
                        <div className="flex items-start">
                          <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-700 font-semibold mr-2 flex-shrink-0 text-xs">
                            {point.id}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{point.title}</h4>
                            <p className="text-xs text-gray-600">{point.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Bottom curve path divider - adds visual interest */}
        <svg className="absolute bottom-0 left-0 w-full z-10 text-white" height="40" fill="none">
          <path d="M0,0 C300,30 700,30 1000,0 L1000,40 L0,40 Z" fill="currentColor" />
        </svg>
        
        {/* Technical decorative elements */}
        <div className="absolute bottom-12 left-12 w-24 h-24 border border-blue-200/30 rounded-full hidden lg:block" />
        <div className="absolute top-20 right-[40%] w-10 h-10 border border-blue-300/20 rounded-full hidden lg:block" />
      </div>
    </div>
  );
};

export default HeroSection;
