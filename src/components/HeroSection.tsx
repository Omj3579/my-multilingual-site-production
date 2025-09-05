import React, { useRef, useEffect, useState } from 'react';
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import WaveDivider from './home/WaveDivider';

const HeroSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Parallax background effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  // Particle animation
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 20 + 10,
      }));
    };
    
    setParticles(generateParticles());
    
    // Mark as loaded after a short delay to allow animations to start
    const timeout = setTimeout(() => setIsLoaded(true), 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <motion.section 
      ref={containerRef}
      className="relative bg-white text-white min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
    >
      {/* 3D Video Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ scale, y }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div 
            className="w-full h-full scale-[1.2] origin-center"
            style={{
              x: useTransform(mouseX, [-300, 300], [10, -10]),
              y: useTransform(mouseY, [-300, 300], [10, -10])
            }}
          >
            {/* Video background */}
            <iframe
              ref={videoRef}
              className="w-full h-full"
              src="https://www.youtube.com/embed/iQ4GCh73Ekw?autoplay=1&mute=1&controls=0&loop=1&playlist=iQ4GCh73Ekw&modestbranding=1&showinfo=0&rel=0"
              title="Flair-Plastic Background Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        </div>
        
        {/* Gradient overlay with dynamic effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/60"
          style={{
            backgroundPosition: useTransform(
              mouseX, 
              [-300, 300], 
              ['40% center', '60% center']
            )
          }}
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white"
              style={{
                x: `${particle.x}%`,
                y: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
              }}
              animate={{
                y: [`${particle.y}%`, `${particle.y - particle.speed}%`],
                opacity: [particle.opacity, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 7,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Content with 3D glass effect */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
        <motion.div 
          className="max-w-4xl w-full"
          style={{ opacity, y }}
        >
          {/* Brand pill indicator */}
          <motion.div
            className="mb-8 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-2 w-2 rounded-full bg-[#e38454] mr-2"></div>
            <span className="text-sm font-medium tracking-wide">
              {language === 'en' ? 'PRECISION PLASTIC MANUFACTURING' : 'PRECÍZIÓS MŰANYAGGYÁRTÁS'}
            </span>
          </motion.div>
          
          {/* Main heading with staggered animation */}
          <div className="overflow-hidden">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-[1.2] tracking-tight text-white"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {language === 'en' 
                ? (
                  <>
                    <span className="inline-block">Flair-Plastic is a global </span>
                    <span className="inline-block mt-2">
                      <span className="text-[#e38454]">plastic injection Moulding</span> company
                    </span>
                  </>
                )
                : (
                  <>
                    <span className="inline-block">A Flair-Plastic egy globális </span>
                    <span className="inline-block mt-2">
                      <span className="text-[#e38454]">műanyag fröccsöntő</span> vállalat
                    </span>
                  </>
                )
              }
            </motion.h1>
          </div>
          
          {/* Subheading with glass morphism effect */}
          <motion.div 
            className="mt-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              rotateX: isLoaded ? rotateX : 0,
              rotateY: isLoaded ? rotateY : 0,
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
              {/* Glass highlights */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {language === 'en' 
                  ? 'Delivering exceptional quality and innovative solutions in plastic manufacturing with global reach and local expertise.'
                  : 'Kivételes minőségű és innovatív megoldások szállítása a műanyaggyártásban, globális hatókörrel és helyi szakértelemmel.'}
              </p>
            </div>
            
            {/* Animated glow effect */}
            <motion.div 
              className="absolute -inset-[100px] bg-gradient-to-r from-transparent via-[#e38454]/20 to-transparent opacity-0"
              animate={{
                translateX: ["100%", "-100%"],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 2
              }}
            />
          </motion.div>
          
          {/* CTAs with hover effects */}
          <motion.div 
            className="mt-10 flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link 
              href="/capabilities"
              className="group relative overflow-hidden px-8 py-4 bg-[#e38454] text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 hover:bg-[#d17343] transition-colors duration-300"
            >
              {language === 'en' ? 'Our Services' : 'Szolgáltatásaink'}
              <motion.div
                className="relative"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight size={18} />
              </motion.div>
              
              {/* Button shine effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden opacity-0 group-hover:opacity-100">
                <motion.div 
                  className="absolute h-full w-10 bg-white/20 -skew-x-20 top-0"
                  animate={{
                    left: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </div>
            </Link>
            
            <Link 
              href="/contact"
              className="group relative overflow-hidden px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
            >
              {language === 'en' ? 'Contact Us' : 'Kapcsolat'}
              <motion.div
                className="relative"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="text-sm font-light text-white/70">
            {language === 'en' ? 'Scroll to explore' : 'Görgessen a felfedezéshez'}
          </span>
          <motion.div
            className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <ChevronDown size={18} className="text-white/70" />
          </motion.div>
        </motion.div>
      </div>

      {/* Improved Wave Divider with 3D parallax */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full z-10"
        style={{
          y: useTransform(scrollYProgress, [0, 0.5], [0, 50])
        }}
      >
        <WaveDivider color="#f2f2f2" />
      </motion.div>
      
      {/* Decorative 3D floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[#e38454]/20 to-blue-500/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            x: useTransform(mouseX, [-300, 300], [-20, 20]),
            y: useTransform(mouseY, [-300, 300], [-20, 20]),
          }}
        />
        
        <motion.div
          className="absolute bottom-[30%] left-[15%] w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            x: useTransform(mouseX, [-300, 300], [20, -20]),
            y: useTransform(mouseY, [-300, 300], [20, -20]),
          }}
        />
      </div>
    </motion.section>
  );
};

export default HeroSection;
