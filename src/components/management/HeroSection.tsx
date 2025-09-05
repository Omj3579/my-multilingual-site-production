import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useMotionValue, useTransform, useScroll, useSpring } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';

const HeroSection = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  
  // State for client-side rendered elements
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState([]);
  
  // Mouse tracking for enhanced parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Parallax transforms with enhanced depth - DEFINE ALL TRANSFORMS UP FRONT
  const bgX = useTransform(mouseX, [-300, 300], [30, -30]);
  const bgY = useTransform(mouseY, [-300, 300], [30, -30]);
  const textX = useTransform(mouseX, [-300, 300], [15, -15]);
  const textY = useTransform(mouseY, [-300, 300], [15, -15]);
  
  // Pre-define all the transforms we need at the top level
  const layer1X = useTransform(mouseX, [-300, 300], [15 * 0.2, -15 * 0.2]);
  const layer1Y = useTransform(mouseY, [-300, 300], [15 * 0.2, -15 * 0.2]);
  
  const layer2X = useTransform(mouseX, [-300, 300], [15 * 0.5, -15 * 0.5]);
  const layer2Y = useTransform(mouseY, [-300, 300], [15 * 0.5, -15 * 0.5]);
  
  const layer3X = useTransform(mouseX, [-300, 300], [15 * 0.4, -15 * 0.4]);
  const layer3Y = useTransform(mouseY, [-300, 300], [15 * 0.4, -15 * 0.4]);
  
  const layer4X = useTransform(mouseX, [-300, 300], [15 * 0.6, -15 * 0.6]);
  const layer4Y = useTransform(mouseY, [-300, 300], [15 * 0.6, -15 * 0.6]);
  
  const layer5X = useTransform(mouseX, [-300, 300], [15 * 0.8, -15 * 0.8]);
  const layer5Y = useTransform(mouseY, [-300, 300], [15 * 0.8, -15 * 0.8]);
  
  const particleX = useTransform(mouseX, [-300, 300], [15 * 0.3, -15 * 0.3]);
  const particleY = useTransform(mouseY, [-300, 300], [15 * 0.3, -15 * 0.3]);

  // Scroll-based animations
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 800], [0, 1]);
  const titleScroll = useTransform(scrollProgress, [0, 0.6], [0, -300]);
  const titleOpacity = useTransform(scrollProgress, [0, 0.6], [1, 0]);
  const springScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Initialize client-side only code after component mounts
  useEffect(() => {
    setIsMounted(true);
    
    // Generate particles only once the component is mounted on the client
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      scale: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10
    }));
    
    setParticles(newParticles);
    
    // Clean up function
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden font-[Poppins]"
      onMouseMove={handleMouseMove}
    >
      {/* CSS-based flag distortion effect instead of WebGL */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          x: bgX,
          y: bgY,
        }}
      >
        {/* Flag background with CSS distortion effects */}
        <div className="relative w-full h-full">
          <img
            src="https://flair-plastic.hu/wp-content/uploads/2024/09/Flag-min.webp"
            alt={language === 'en' ? "Flag Background" : "Zászló háttér"}
            className="w-full h-full object-cover"
            style={{ 
              filter: "brightness(0.6)",
              transform: "scale(1.2)"
            }}
          />
          
          {/* CSS-based chromatic aberration effect */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen" 
            style={{
              backgroundImage: `url(https://flair-plastic.hu/wp-content/uploads/2024/09/Flag-min.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "hue-rotate(10deg) contrast(150%) blur(2px)",
              transform: "translate(5px, 0px)"
            }}
          />
          
          <div className="absolute inset-0 opacity-30 mix-blend-screen" 
            style={{
              backgroundImage: `url(https://flair-plastic.hu/wp-content/uploads/2024/09/Flag-min.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "hue-rotate(-10deg) contrast(150%) blur(2px)",
              transform: "translate(-5px, 0px)"
            }}
          />
          
          {/* Animated scan lines effect */}
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 50%)",
              backgroundSize: "100% 4px"
            }}
            animate={{
              backgroundPosition: ["0px 0px", "0px 100px"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Layered gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          
          {/* Dynamic light effect */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(243,158,116,0.15), transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* 3D Layered Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Depth layer 1 - Grid Pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            x: layer1X,
            y: layer1Y
          }}
        />
        
        {/* Depth layer 2 - Accent Lines */}
        <motion.div 
          className="absolute top-0 left-[15%] w-[2px] h-full"
          style={{ 
            background: "linear-gradient(to bottom, transparent, rgba(243,158,116,0.2), transparent)",
            x: layer2X,
            y: layer2Y
          }}
        />
        <motion.div 
          className="absolute top-32 left-0 w-full h-[1px]"
          style={{ 
            background: "linear-gradient(to right, rgba(243,158,116,0.3), rgba(255,255,255,0.1), transparent)",
            x: layer3X,
            y: layer3Y
          }}
        />
        
        {/* Depth layer 3 - Floating Elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full"
          style={{ 
            background: "radial-gradient(circle, rgba(243,158,116,0.05), transparent 70%)",
            filter: "blur(30px)",
            x: layer4X,
            y: layer4Y
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/5 w-60 h-60 rounded-full"
          style={{ 
            background: "radial-gradient(circle, rgba(11,40,120,0.08), transparent 70%)",
            filter: "blur(40px)",
            x: layer5X,
            y: layer5Y
          }}
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Client-side rendered particles */}
        {isMounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-white/40"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: particle.scale,
              opacity: particle.opacity
            }}
            animate={{
              y: [null, '-100vh'],
              opacity: [null, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay
            }}
            style={{
              x: particleX,
              y: particleY
            }}
          />
        ))}
      </div>

      {/* Animated content with 3D transform */}
      <motion.div 
        ref={titleRef}
        className="absolute top-0 left-0 z-20 p-10 ml-0 sm:ml-16 md:ml-28 lg:ml-96 pt-20 mt-10"
        style={{
          x: textX,
          y: useTransform(springScrollY, [0, 500], [0, -150]),
          opacity: useTransform(springScrollY, [0, 300], [1, 0.3])
        }}
      >
        <div className="relative max-w-3xl perspective-[1200px]">
          {/* 3D Glass morphism Badge */}
          <motion.div 
            className="inline-block relative mb-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-[0_0_20px_rgba(243,158,116,0.2)]" />
            
            <div className="relative px-6 py-3 flex items-center space-x-3">
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#f39e74] to-[#e57b48]"
                animate={{
                  boxShadow: ["0 0 0px rgba(243,158,116,0.5)", "0 0 20px rgba(243,158,116,0.8)", "0 0 0px rgba(243,158,116,0.5)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="text-white font-medium text-sm">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  {language === 'en' ? 'Leadership Team' : 'Vezetőségi Csapat'}
                </motion.span>
                
                <motion.span 
                  className="absolute bottom-0 left-10 right-10 h-[1px]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(243,158,116,0.7), transparent)",
                    transformOrigin: "center"
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* 3D Title Animation */}
          <div className="perspective-[1200px]">
            <motion.div
              className="relative transform-style-3d"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "left center"
              }}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.6, 
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
            >
              <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
                {language === 'en' ? "Flair-Plastic" : "Flair-Plastic"}
              </h1>
              
              <motion.div
                className="absolute -left-2 top-0 bottom-0 w-1"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                style={{
                  background: "linear-gradient(to bottom, transparent, rgba(243,158,116,0.7), transparent)",
                  transformOrigin: "top"
                }}
              />
            </motion.div>
            
            <motion.div 
              className="mt-2 relative overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.h1 
                className="text-4xl md:text-7xl font-bold"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
              >
                <motion.span 
                  className="relative inline-block"
                  initial={{ filter: "blur(5px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f39e74] to-[#e57b48]">
                    {language === 'en' ? "Management" : "Vezetőség"}
                  </span>
                  
                  {/* Holographic effect */}
                  <motion.span
                    className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-[#f39e74] to-[#e57b48] opacity-80"
                    style={{ 
                      filter: "blur(10px)",
                      transform: "translateY(5px)"
                    }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      filter: ["blur(10px)", "blur(15px)", "blur(10px)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {language === 'en' ? "Management" : "Vezetőség"}
                  </motion.span>
                </motion.span>
              </motion.h1>
            </motion.div>
          </div>
          
          {/* Animated line with glow effect */}
          <motion.div
            className="relative h-1 w-0 bg-gradient-to-r from-[#f39e74] to-[#e57b48] mt-8 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div 
              className="absolute inset-0 bg-white opacity-50"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{ duration: 1.5, delay: 2, repeat: Infinity, repeatDelay: 3 }}
              style={{ filter: "blur(3px)" }}
            />
          </motion.div>
          
          {/* 3D floating description */}
          <motion.p 
            className="text-xl text-white/80 max-w-md mt-6"
            style={{ 
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.6 }}
          >
            {language === 'en' 
              ? 'Meet the leadership team driving our vision forward through innovation and expertise.'
              : 'Ismerje meg azt a vezetői csapatot, amely az innováción és szakértelmen keresztül viszi előre jövőképünket.'}
          </motion.p>
        </div>
      </motion.div>

      {/* Professional divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <SectionDivider 
          color="white" 
          style="straight" 
          height={80}
          animated={true}
          accentColor="#f39e74"
        />
      </div>
    </section>
  );
};

export default HeroSection;
