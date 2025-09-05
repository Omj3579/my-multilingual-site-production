'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { language } = useLanguage();
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for futuristic depth
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleX = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const processPoints = [
    {
      id: 1,
      title: language === 'en' ? 'Label Placement' : 'Címke elhelyezés',
      desc: language === 'en' ? 'Precision positioning in mould cavity' : 'Precíziós pozicionálás a szerszámüregben'
    },
    {
      id: 2,
      title: language === 'en' ? 'Injection Process' : 'Fröccsöntési folyamat',
      desc: language === 'en' ? 'Material injection and label fusion' : 'Anyag befecskendezés és címke fúzió'
    },
    {
      id: 3,
      title: language === 'en' ? 'Quality Control' : 'Minőségirányítás',
      desc: language === 'en' ? 'Automated inspection and validation' : 'Automatizált ellenőrzés és validálás'
    }
  ];

  return (
    <div className="relative bg-black overflow-hidden min-h-[100vh]" ref={containerRef}>
      {/* Full-screen background image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{
          scale: imageScale,
          y: imageY
        }}
      >
        <Image 
          src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Image-displays-the-before-after-of-in-mould-decoration-in-plastic-manufacturing.-On-the1-left-a-cl.png.webp" 
          alt={language === 'en' ? "In-Mould Labelling Process" : "Címkézés a szerszámban folyamat"}
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Modern gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
        {/* Futuristic grid overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2300d4ff' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)' /%3E%3C/svg%3E")`,
          }} 
        />
      </motion.div>

      {/* Futuristic content overlay */}
      <div className="relative z-10 w-full h-full min-h-[100vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left content - Modern typography and design */}
            <motion.div 
              className="text-white space-y-8"
              ref={ref}
              style={{ 
                x: titleX,
                y: titleY
              }}
            >
              {/* Tech badge */}
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-medium uppercase tracking-wider text-sm">
                  {language === 'en' ? 'Advanced Manufacturing' : 'Fejlett gyártás'}
                </span>
              </motion.div>
              
              {/* Modern headline with glitch effect */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    In-Mould
                  </span>
                  <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                    {language === 'en' ? 'Labelling' : 'Címkézés'}
                  </span>
                </h1>
                
                {/* Futuristic accent line */}
                <motion.div 
                  className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? '200px' : 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.div>
              
              {/* Modern description */}
              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {language === 'en' 
                  ? 'Next-generation integration of premium labels into plastic products with unmatched precision and durability.'
                  : 'Új generációs prémium címkék integrálása műanyag termékekbe páratlan pontossággal és tartóssággal.'}
              </motion.p>
              
              {/* Futuristic CTA */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.button
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  <span className="relative z-10">
                    {language === 'en' ? 'Explore Technology' : 'Technológia felfedezése'}
                  </span>
                </motion.button>
                
                <motion.div 
                  className="flex items-center gap-2 text-cyan-300 cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'Watch Process' : 'Folyamat megtekintése'}
                  </span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right side - Futuristic process display */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Main process card */}
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
                  <h3 className="text-white font-bold text-xl">
                    {language === 'en' ? 'Process Overview' : 'Folyamat áttekintése'}
                  </h3>
                </div>
                
                {/* Process steps with modern design */}
                <div className="space-y-6">
                  {processPoints.map((point, i) => (
                    <motion.div 
                      key={i}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
                      transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                      whileHover={{ x: 5 }}
                      onHoverStart={() => setActivePoint(point.id)}
                      onHoverEnd={() => setActivePoint(null)}
                    >
                      {/* Step indicator */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center">
                          <span className="text-cyan-300 font-bold">{point.id}</span>
                        </div>
                        {i < processPoints.length - 1 && (
                          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent" />
                        )}
                      </div>
                      
                      {/* Step content */}
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                          {point.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                      
                      {/* Hover indicator */}
                      <motion.div
                        className="w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: activePoint === point.id ? 1 : 0 }}
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom tech specs */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-300">99.8%</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {language === 'en' ? 'Precision' : 'Pontosság'}
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">24/7</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {language === 'en' ? 'Production' : 'Gyártás'}
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">±0.01mm</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {language === 'en' ? 'Tolerance' : 'Tűrés'}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Floating elements for futuristic feel */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 border border-cyan-400/50 rounded-full bg-cyan-400/10 backdrop-blur-sm"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 border border-blue-400/50 rounded bg-blue-400/10 backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Animated particles for atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
