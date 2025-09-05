import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Building, Globe } from 'lucide-react';

const CommitmentCallout = () => {
  const { language } = useLanguage();
  
  // Icons for each highlighted term
  const highlightIcons = {
    strategy: Leaf,
    waste: Recycle,
    recycling: Recycle,
    operate: Building,
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: [0, 0.3, 0.5, 0.7, 0.5], 
      transition: { 
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse" 
      } 
    }
  };
  
  return (
    <section className="relative bg-gradient-to-br from-[#1e2a18] to-[#2c3825] text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Abstract leaf/recycling pattern */}
        <motion.div 
          className="absolute inset-0 z-0"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="recyclePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,15 L85,35 L85,75 L50,95 L15,75 L15,35 Z" stroke="#85B652" strokeWidth="0.5" fill="none" />
              <path d="M30,40 C45,20 65,20 80,40 C65,60 45,60 30,40 Z" stroke="#85B652" strokeWidth="0.5" fill="none" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#recyclePattern)" />
          </svg>
        </motion.div>
        
        {/* Floating leaf particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12,2C7.03,2,3,6.03,3,11c0,2.77,1.23,5.25,3.17,6.94c0,0,0.01,0,0.01,0C7.15,18.87,8.33,19.58,9.62,20c0.36,0.11,0.73,0.2,1.11,0.25 C11.15,20.31,11.57,20.36,12,20.36c0.43,0,0.85-0.05,1.27-0.1c0.38-0.06,0.75-0.14,1.11-0.25c1.29-0.42,2.47-1.13,3.44-2.06 c0,0,0.01,0,0.01,0C19.77,16.25,21,13.77,21,11C21,6.03,16.97,2,12,2z" 
                fill="#85B652" 
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center justify-center py-24 md:py-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Globe icon at top */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#85B652]/20 rounded-full flex items-center justify-center mb-2">
              <Globe className="w-8 h-8 md:w-10 md:h-10 text-[#85B652]" />
            </div>
          </motion.div>

          {/* Main Text */}
          <motion.p 
            variants={itemVariants}
            className="max-w-5xl text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-light leading-tight tracking-wide"
          >
            {language === 'en' ? (
              <>
                Our{" "}
                <motion.span 
                  className="inline-flex items-center whitespace-nowrap relative group text-[#85B652] font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute -left-1 -top-1 w-6 h-6 rounded-full bg-[#85B652]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  green strategy
                </motion.span>{" "}
                encompasses measures to{" "}
                <motion.span 
                  className="inline-flex items-center whitespace-nowrap relative group text-[#85B652] font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute -left-1 -top-1 w-6 h-6 rounded-full bg-[#85B652]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  minimize waste
                </motion.span>
                ,{" "}
                <motion.span 
                  className="inline-flex items-center whitespace-nowrap relative group text-[#85B652] font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute -left-1 -top-1 w-6 h-6 rounded-full bg-[#85B652]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  enhance recycling efforts
                </motion.span>
                , and{" "}
                <motion.span 
                  className="inline-flex items-center whitespace-nowrap relative group text-[#85B652] font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute -left-1 -top-1 w-6 h-6 rounded-full bg-[#85B652]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  operate synergistically
                </motion.span>{" "}
                with the communities where we are located.
              </>
            ) : (
              <>
                A{" "}
                <motion.span 
                  className="inline-flex items-center whitespace-nowrap relative group text-[#85B652] font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute -left-1 -top-1 w-6 h-6 rounded-full bg-[#85B652]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  zöld stratégiánk
                </motion.span>{" "}
                magában foglalja a{" "}
                <motion.span 
                  className="inline-flex items-center whitespace-nowrap relative group text-[#85B652] font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute -left-1 -top-1 w-6 h-6 rounded-full bg-[#85B652]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  hulladék minimalizálását
                </motion.span>
                , az{" "}
                <motion.span 
                  className="inline-flex items-center whitespace-nowrap relative group text-[#85B652] font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute -left-1 -top-1 w-6 h-6 rounded-full bg-[#85B652]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  újrahasznosítási erőfeszítések fokozását
                </motion.span>
                , és a{" "}
                <motion.span 
                  className="inline-flex items-center whitespace-nowrap relative group text-[#85B652] font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute -left-1 -top-1 w-6 h-6 rounded-full bg-[#85B652]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  szinergikus működést
                </motion.span>{" "}
                azokkal a közösségekkel, ahol jelen vagyunk.
              </>
            )}
          </motion.p>
          
          {/* Company signature */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center"
          >
            <div className="h-px w-16 bg-white/30"></div>
            <span className="mx-4 text-white/70 font-light text-sm tracking-widest uppercase">Flair-Plastic</span>
            <div className="h-px w-16 bg-white/30"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom transition - more sophisticated than a triangle */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <path 
            d="M0,0 C600,120 1000,0 1200,80 L1200,120 L0,120 Z" 
            className="fill-white"
          ></path>
          <path 
            d="M0,80 C400,40 800,120 1200,80 L1200,120 L0,120 Z" 
            className="fill-white opacity-30"
          ></path>
        </svg>
      </div>
      
      {/* Light particles rising from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 h-1 rounded-full bg-[#85B652]/40"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CommitmentCallout;
