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
      className="relative py-32 font-[Poppins] overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      style={{ y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>

        {/* Subtle background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" 
          style={{
            background: 'radial-gradient(circle, rgba(100, 100, 100, 0.1) 0%, transparent 70%)'
          }}
        />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15" 
          style={{
            background: 'radial-gradient(circle, rgba(120, 120, 120, 0.08) 0%, transparent 70%)'
          }}
        />

        {/* Interactive cursor glow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            opacity: isHovered ? 0.8 : 0,
            filter: 'blur(40px)'
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>

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
          {/* Futuristic holographic panel */}
          <motion.div
            className="relative p-12 md:p-20 rounded-3xl overflow-hidden"
            whileHover={{
              scale: 1.03,
              y: -8,
              rotateX: 2,
              rotateY: 2
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Multi-layer holographic effect */}
            <div className="absolute inset-0 -z-10">
              {/* Base dark glass layer */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl rounded-3xl" />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-gray-600/5 to-gray-800/10 rounded-3xl" />
              
              {/* Subtle inner glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0.05)] rounded-3xl" />
              
              {/* Subtle shimmer effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Subtle border accents */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-400/30 to-transparent rounded-t-3xl" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-400/20 to-transparent rounded-b-3xl" />
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-gray-400/25 to-transparent rounded-l-3xl" />
              <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-gray-400/25 to-transparent rounded-r-3xl" />
            </div>

            {/* Subtle corner accents */}
            <div className="absolute top-4 right-4 w-8 h-8 border border-gray-400/20 rounded-lg" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border border-gray-400/15 rounded-full" />

            {/* Futuristic header */}
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center gap-4 px-8 py-4 mb-12 relative overflow-hidden rounded-full bg-gray-800/40 border border-gray-600/30 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(156, 163, 175, 0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <Brain className="w-6 h-6 text-gray-300" />
                <span className="text-gray-200 font-bold tracking-wider text-lg">
                  {language === 'en' ? "LEADERSHIP EXCELLENCE" : "VEZETŐI KIVÁLÓSÁG"}
                </span>
                <Sparkles className="w-6 h-6 text-gray-300" />
              </motion.div>
            </motion.div>

            {/* Cyberpunk content with original message */}
            <motion.div className="relative z-10" variants={itemVariants}>
              <motion.p 
                className="text-xl md:text-3xl leading-relaxed tracking-wide relative"
                style={{
                  color: '#e0e0e0',
                  textShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
                }}
                animate={controls} 
                variants={containerVariants}
                transition={{ staggerChildren: 0.03 }}
              >
                {language === 'en' ? (
                  <motion.span variants={containerVariants}>
                    <motion.span 
                      className="font-bold relative inline-block group text-gray-100"
                      variants={wordVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      Flair-Plastic&apos;s executive leadership
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-400/60"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        animate={{ scaleX: isInView ? 1 : 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </motion.span>{" "}
                    
                    is unwavering in their commitment to uphold and enhance our{" "}
                    
                    <motion.span 
                      className="font-bold text-gray-200"
                      variants={wordVariants}
                      whileHover={{ scale: 1.01 }}
                    >
                      exceptional standards of performance, precision, and flexibility
                    </motion.span>.{" "}
                    
                    Through careful attention to detail and an all-encompassing approach, they ensure that every aspect of the organization operates with the utmost{" "}
                    
                    <motion.span 
                      className="font-bold text-gray-200"
                      variants={wordVariants}
                    >
                      care
                    </motion.span>{" "}and{" "}
                    
                    <motion.span 
                      className="font-bold text-gray-200"
                      variants={wordVariants}
                    >
                      efficiency
                    </motion.span>, thereby fostering a culture of excellence that permeates every level of the company.
                  </motion.span>
                ) : (
                  <motion.span variants={containerVariants}>
                    <motion.span 
                      className="font-bold relative inline-block group text-gray-100"
                      variants={wordVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      A Flair-Plastic vezetősége
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-400/60"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        animate={{ scaleX: isInView ? 1 : 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </motion.span>{" "}
                    
                    rendíthetetlenül elkötelezett a{" "}
                    
                    <motion.span 
                      className="font-bold text-gray-200"
                      variants={wordVariants}
                      whileHover={{ scale: 1.01 }}
                    >
                      kivételes teljesítmény, precizitás és rugalmasság
                    </motion.span>{" "}
                    
                    standardjainak fenntartása és fejlesztése mellett. A részletekre való gondos odafigyeléssel és átfogó megközelítéssel biztosítják, hogy a szervezet minden aspektusa a legnagyobb{" "}
                    
                    <motion.span 
                      className="font-bold text-gray-200"
                      variants={wordVariants}
                    >
                      gondossággal
                    </motion.span>{" "}és{" "}
                    
                    <motion.span 
                      className="font-bold text-gray-200"
                      variants={wordVariants}
                    >
                      hatékonysággal
                    </motion.span>{" "}
                    működjön, ezáltal olyan kiválósági kultúrát teremtve, amely áthatja a vállalat minden szintjét.
                  </motion.span>
                )}
              </motion.p>

              {/* Subtle bottom accent */}
              <motion.div
                className="mt-12 flex justify-center"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-600/20 rounded-full">
                  <Target className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 font-medium">
                    {language === 'en' ? 'Excellence in Leadership' : 'Kiválóság a Vezetésben'}
                  </span>
                  <Zap className="w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle floating accents */}
      <motion.div 
        className="absolute bottom-16 right-16 w-32 h-32 rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(156, 163, 175, 0.08) 0%, rgba(107, 114, 128, 0.05) 50%, transparent 70%)',
          filter: 'blur(20px)'
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-20 left-16 w-24 h-24 rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(107, 114, 128, 0.06) 0%, rgba(156, 163, 175, 0.04) 50%, transparent 70%)',
          filter: 'blur(15px)'
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.section>
  );
};

export default LeadershipExcellenceCallout;
