import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';

const HeroSection = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 15);
    mouseY.set(y / 15);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden font-poppins"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with subtle parallax */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="https://flair-plastic.hu/wp-content/uploads/2024/09/Flag-min.webp"
          alt="Flag Background"
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: useTransform(mouseY, [-100, 100], ['center 40%', 'center 60%']),
            filter: "brightness(0.7)"
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </motion.div>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div 
          className="max-w-3xl text-white text-center"
          style={{ 
            rotateX: useTransform(mouseY, [-300, 300], [5, -5]),
            rotateY: useTransform(mouseX, [-300, 300], [-5, 5]),
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Floating badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#f39e74] mr-2"></div>
            <span className="text-sm font-medium text-white">
              {language === 'en' ? '1990 - Present' : '1990 - Jelenlegi'}
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            {language === 'en' ? (
              <>
                Our Legacy &<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f39e74] to-[#e57b48]">
                  Milestones
                </span>
              </>
            ) : (
              <>
                Örökségünk &<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f39e74] to-[#e57b48]">
                  Mérföldköveink
                </span>
              </>
            )}
          </h1>
          
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#f39e74] to-[#e57b48] mx-auto my-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 1 }}
          ></motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            {language === 'en' 
              ? 'From our founding in 1990 to becoming a global leader, explore the journey that shaped who we are today.'
              : 'Az 1990-es alapítástól a globális vezetővé válásig, fedezze fel az utat, amely formálta, kik vagyunk ma.'}
          </motion.p>
        </motion.div>
      </div>

      {/* Replace Wave Divider with the new SectionDivider */}
      <div className="absolute bottom-0 left-0 w-full z-20">
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
