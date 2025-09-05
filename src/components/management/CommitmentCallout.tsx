import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';

const CommitmentCallout = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [isMounted, setIsMounted] = useState(false);
  
  // Mouse tracking for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Define ALL transform values at the component top level
  // Basic transform values
  const circleX = useTransform(mouseX, [-300, 300], [20, -20]);
  const circleY = useTransform(mouseY, [-300, 300], [20, -20]);
  const textX = useTransform(mouseX, [-300, 300], [5, -5]);
  const textY = useTransform(mouseY, [-300, 300], [5, -5]);
  
  // Shape-specific transform values (moved outside conditional)
  const shape1X = useTransform(mouseX, [-300, 300], [15, -15]);
  const shape1Y = useTransform(mouseY, [-300, 300], [15, -15]);
  const shape2X = useTransform(mouseX, [-300, 300], [10, -10]);
  const shape2Y = useTransform(mouseY, [-300, 300], [10, -10]);
  const shape3X = useTransform(mouseX, [-300, 300], [20, -20]);
  const shape3Y = useTransform(mouseY, [-300, 300], [20, -20]);
  
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  // Generate background particles on client-side only
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
            'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
            'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Modern geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing circle */}
        <motion.div 
          className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(60px)',
            x: circleX,
            y: circleY
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Glass-like floating shapes - Now using pre-defined transform values */}
        {isMounted && (
          <>
            <motion.div 
              className="absolute -top-20 right-[20%] w-60 h-60 rounded-3xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transform: 'rotate(15deg)',
                x: shape1X,  // Using pre-defined transform
                y: shape1Y   // Using pre-defined transform
              }}
              animate={{ 
                rotate: [15, 20, 15],
                y: ['-20px', '0px', '-20px'] 
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="absolute bottom-[10%] left-[15%] w-40 h-40 rounded-full"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                x: shape2X,  // Using pre-defined transform
                y: shape2Y   // Using pre-defined transform
              }}
              animate={{ 
                scale: [1, 1.1, 1],
                y: ['40px', '0px', '40px'] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            
            <motion.div 
              className="absolute top-[35%] left-[5%] w-32 h-32"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                x: shape3X,  // Using pre-defined transform
                y: shape3Y   // Using pre-defined transform
              }}
              animate={{ 
                borderRadius: [
                  '30% 70% 70% 30% / 30% 30% 70% 70%',
                  '50% 50% 70% 30% / 50% 50% 30% 70%',
                  '30% 70% 70% 30% / 30% 30% 70% 70%'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </>
        )}
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: "linear-gradient(0deg, transparent 24%, white 25%, white 26%, transparent 27%), linear-gradient(90deg, transparent 24%, white 25%, white 26%, transparent 27%)",
            backgroundSize: "50px 50px" 
          }} 
        />
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left column - Glass card */}
          <motion.div 
            className="w-full lg:w-2/5 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* Backdrop gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />
              
              {/* Glass card */}
              <motion.div 
                className="absolute inset-[1px] rounded-2xl p-8 flex flex-col justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 80px -20px rgba(0,0,0,0.2)',
                  x: textX,
                  y: textY
                }}
              >
                <motion.h2 
                  className="text-4xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {language === 'en' ? "Our Commitment" : "Elkötelezettségünk"}
                </motion.h2>
                
                <motion.div
                  className="h-1 w-16 bg-white/30 rounded-full mb-8"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 64, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                
                <motion.div
                  className="text-white/80 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p>{language === 'en' ? "Precision" : "Precizitás"}</p>
                  <p>{language === 'en' ? "Innovation" : "Innováció"}</p>
                  <p>{language === 'en' ? "Excellence" : "Kiválóság"}</p>
                  <p>{language === 'en' ? "Reliability" : "Megbízhatóság"}</p>
                </motion.div>
                
                {/* Floating icon */}
                <motion.div 
                  className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)', 
                  }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Text content */}
          <motion.div 
            className="w-full lg:w-3/5 text-white"
            style={{ x: textX, y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-8">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
                {language === 'en' ? (
                  <>
                    At the heart of Flair–Plastic is precision injection moulding, through which we{" "}
                    <motion.span 
                      className="font-bold text-white inline-block relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      deliver integrated solutions
                      <motion.div 
                        className="absolute -inset-1 rounded-lg -z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ 
                          opacity: 0.15, 
                          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)" 
                        }}
                      />
                    </motion.span>{" "}
                    encompassing design support, advanced manufacturing, and quality control.
                  </>
                ) : (
                  <>
                    A Flair-Plastic szívében a precíziós fröccsöntés áll, amelyen keresztül{" "}
                    <motion.span 
                      className="font-bold text-white inline-block relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      integrált megoldásokat nyújtunk
                      <motion.div 
                        className="absolute -inset-1 rounded-lg -z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ 
                          opacity: 0.15, 
                          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)" 
                        }}
                      />
                    </motion.span>{" "}
                    , beleértve a tervezési támogatást, fejlett gyártást és minőségellenőrzést.
                  </>
                )}
              </p>
              
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
                {language === 'en' ? (
                  <>
                    Our expertise ensures that from{" "}
                    <motion.span 
                      className="font-bold text-white inline-block relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      concept to reality
                      <motion.div 
                        className="absolute -inset-1 rounded-lg -z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ 
                          opacity: 0.15, 
                          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)" 
                        }}
                      />
                    </motion.span>
                    , every project meets the{" "}
                    <motion.span 
                      className="font-bold text-white inline-block relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      highest standards of excellence
                      <motion.div 
                        className="absolute -inset-1 rounded-lg -z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ 
                          opacity: 0.15, 
                          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)" 
                        }}
                      />
                    </motion.span>
                    .
                  </>
                ) : (
                  <>
                    Szakértelmünk biztosítja, hogy az{" "}
                    <motion.span 
                      className="font-bold text-white inline-block relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      ötlettől a megvalósításig
                      <motion.div 
                        className="absolute -inset-1 rounded-lg -z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ 
                          opacity: 0.15, 
                          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)" 
                        }}
                      />
                    </motion.span>
                    {" "}minden projekt megfeleljen a{" "}
                    <motion.span 
                      className="font-bold text-white inline-block relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      kiválóság legmagasabb szabványainak
                      <motion.div 
                        className="absolute -inset-1 rounded-lg -z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ 
                          opacity: 0.15, 
                          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)" 
                        }}
                      />
                    </motion.span>
                    .
                  </>
                )}
              </p>
            </div>
            
            {/* Call-to-action button */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="group relative overflow-hidden px-8 py-4 rounded-full font-medium text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:bg-white/20" />
                
                {/* Shine effect */}
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 3
                  }}
                />
                
                {/* Button text */}
                <span className="relative z-10 flex items-center">
                  {language === 'en' ? "Learn More About Our Process" : "Tudjon meg többet folyamatunkról"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative h-16">
          {/* White wave divider */}
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 74" preserveAspectRatio="none">
            <motion.path 
              d="M0,10 C240,40 480,60 720,50 C960,40 1200,10 1440,30 L1440,74 L0,74 Z" 
              fill="white"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            />
          </svg>
          
          {/* Glass effect overlay on the wave */}
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 74" preserveAspectRatio="none">
            <motion.path 
              d="M0,20 C140,50 280,65 720,55 C1160,45 1300,20 1440,35 L1440,74 L0,74 Z" 
              fill="rgba(255,255,255,0.1)"
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3 }}
            />
          </svg>
        </div>
      </div>
    </motion.section>
  );
};

export default CommitmentCallout;
