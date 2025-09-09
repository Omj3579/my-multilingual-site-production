import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useAnimation, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { Sparkles, Zap, Target, Brain } from 'lucide-react';

const LeadershipExcellenceCallout = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  
  // Enhanced mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30;
    const rotateY = (x - centerX) / 30;
    
    mouseX.set(rotateY);
    mouseY.set(-rotateX);
  };

  // Floating particles for ambiance
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  } as const;

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-32 font-[Poppins] overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"
      style={{ y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/40"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/3 right-1/6 w-32 h-32 border-2 border-blue-300/30 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
        />

        {/* Mouse-following glow */}
        <motion.div
          className="absolute w-80 h-80 rounded-full pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
        <motion.div
          className="relative w-full max-w-6xl"
          style={{
            rotateY: useTransform(mouseX, [-300, 300], [-3, 3]),
            rotateX: useTransform(mouseY, [-300, 300], [-3, 3]),
          }}
          variants={itemVariants}
        >
          {/* Enhanced glass panel with better depth */}
          <motion.div
            className="relative p-12 md:p-20 rounded-3xl overflow-hidden"
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Multi-layer glass effect */}
            <div className="absolute inset-0 -z-10">
              {/* Base glass layer */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl rounded-3xl" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-white/5 rounded-3xl" />
              
              {/* Inner glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0.2)] rounded-3xl" />
              
              {/* Animated shimmer */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Border accents */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400/40 to-transparent" />
              <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-purple-400/40 to-transparent" />
            </div>

            {/* Corner decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tr-3xl rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-bl-3xl rounded-tr-3xl" />

            {/* Enhanced header */}
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/30 rounded-full"
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.1)",
                    "0 0 30px rgba(59, 130, 246, 0.3)",
                    "0 0 20px rgba(59, 130, 246, 0.1)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-semibold tracking-wide">
                  {language === 'en' ? "Our Leadership Ethos" : "Vezetői Hitvallásunk"}
                </span>
                <Sparkles className="w-5 h-5 text-purple-600" />
              </motion.div>
            </motion.div>

            {/* Enhanced content with original message */}
            <motion.div className="relative z-10" variants={itemVariants}>
              <motion.p 
                className="text-xl md:text-3xl leading-relaxed tracking-wide text-gray-800"
                animate={controls} 
                variants={containerVariants}
                transition={{ staggerChildren: 0.03 }}
              >
                {language === 'en' ? (
                  <motion.span variants={containerVariants}>
                    <motion.span 
                      className="text-blue-600 font-bold relative inline-block group"
                      variants={wordVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      Flair-Plastic&apos;s executive leadership
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        animate={{ scaleX: isInView ? 1 : 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-sm"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 3, delay: 2, repeat: Infinity, repeatDelay: 8 }}
                      />
                    </motion.span>{" "}
                    
                    is unwavering in their commitment to uphold and enhance our{" "}
                    
                    <motion.span 
                      className="text-gray-900 font-bold relative group"
                      variants={wordVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.span 
                        className="absolute -inset-2 rounded-xl opacity-20 blur-lg -z-10 bg-gradient-to-r from-blue-500 to-purple-500"
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                      />
                      exceptional standards of performance, precision, and flexibility
                    </motion.span>.{" "}
                    
                    Through careful attention to detail and an all-encompassing approach, they ensure that every aspect of the organization operates with the utmost{" "}
                    
                    <motion.span 
                      className="text-emerald-600 font-bold relative group"
                      variants={wordVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="absolute -inset-1 rounded-lg opacity-20 blur-sm -z-10 bg-emerald-500"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      care
                    </motion.span>{" "}and{" "}
                    
                    <motion.span 
                      className="text-orange-600 font-bold relative group"
                      variants={wordVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="absolute -inset-1 rounded-lg opacity-20 blur-sm -z-10 bg-orange-500"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                      efficiency
                    </motion.span>, thereby fostering a culture of excellence that permeates every level of the company.
                  </motion.span>
                ) : (
                  <motion.span variants={containerVariants}>
                    <motion.span 
                      className="text-blue-600 font-bold relative inline-block group"
                      variants={wordVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      A Flair-Plastic vezetősége
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        animate={{ scaleX: isInView ? 1 : 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-sm"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 3, delay: 2, repeat: Infinity, repeatDelay: 8 }}
                      />
                    </motion.span>{" "}
                    
                    rendíthetetlenül elkötelezett a{" "}
                    
                    <motion.span 
                      className="text-gray-900 font-bold relative group"
                      variants={wordVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.span 
                        className="absolute -inset-2 rounded-xl opacity-20 blur-lg -z-10 bg-gradient-to-r from-blue-500 to-purple-500"
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                      />
                      kivételes teljesítmény, precizitás és rugalmasság
                    </motion.span>{" "}
                    
                    standardjainak fenntartása és fejlesztése mellett. A részletekre való gondos odafigyeléssel és átfogó megközelítéssel biztosítják, hogy a szervezet minden aspektusa a legnagyobb{" "}
                    
                    <motion.span 
                      className="text-emerald-600 font-bold relative group"
                      variants={wordVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="absolute -inset-1 rounded-lg opacity-20 blur-sm -z-10 bg-emerald-500"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      gondossággal
                    </motion.span>{" "}és{" "}
                    
                    <motion.span 
                      className="text-orange-600 font-bold relative group"
                      variants={wordVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="absolute -inset-1 rounded-lg opacity-20 blur-sm -z-10 bg-orange-500"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                      hatékonysággal
                    </motion.span>{" "}
                    működjön, ezáltal olyan kiválósági kultúrát teremtve, amely áthatja a vállalat minden szintjét.
                  </motion.span>
                )}
              </motion.p>

              {/* Enhanced bottom accent */}
              <motion.div
                className="mt-12 flex justify-center"
                variants={itemVariants}
              >
                <motion.div
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/40 rounded-full"
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Target className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    {language === 'en' ? 'Excellence in Leadership' : 'Kiválóság a Vezetésben'}
                  </span>
                  <Zap className="w-5 h-5 text-purple-600" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced floating accents */}
      <motion.div 
        className="absolute bottom-16 right-16 w-32 h-32 rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
          filter: 'blur(20px)'
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-20 left-16 w-24 h-24 rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)',
          filter: 'blur(15px)'
        }}
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.section>
  );
};

export default LeadershipExcellenceCallout;
