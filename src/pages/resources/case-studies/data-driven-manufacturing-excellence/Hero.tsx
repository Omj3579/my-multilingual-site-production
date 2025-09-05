import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Play, Award, Users } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

  const heroContent = {
    badge: {
      en: "Success Story",
      hu: "Sikertörténet"
    },
    title: {
      en: "Transforming<br/>European Manufacturing",
      hu: "Európai Gyártás<br/>Forradalmasítása"
    },
    subtitle: {
      en: "A decade-long partnership creating revolutionary plastic components for garden and power tools",
      hu: "Egy évtizedes partnerség forradalmi műanyag alkatrészek fejlesztésében kerti és elektromos szerszámokhoz"
    },
    stats: [
      {
        value: "10+",
        label: { en: "Years Partnership", hu: "Év Partnerség" }
      },
      {
        value: "4",
        label: { en: "Product Categories", hu: "Termékkategória" }
      },
      {
        value: "15M+",
        label: { en: "Components Delivered", hu: "Szállított Alkatrész" }
      }
    ]
  };

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main hero content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 h-screen flex items-center"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">
                {heroContent.badge[language]}
              </span>
            </motion.div>

            {/* Title */}
            <h1 
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              dangerouslySetInnerHTML={{ 
                __html: heroContent.title[language] 
              }}
            />

            {/* Subtitle */}
            <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
              {heroContent.subtitle[language]}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {heroContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">
                    {stat.label[language]}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button 
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                <Users className="w-5 h-5" />
                {language === 'hu' ? "Partnerség részletei" : "Partnership Details"}
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                data-hover="true"
              >
                <Play className="w-5 h-5" />
                {language === 'hu' ? "Videó megtekintése" : "Watch Video"}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right content - 3D Visual */}
          <motion.div
            className="relative"
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main image container */}
              <motion.div 
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                style={{ scale }}
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/case-studies/manufacturing-hero.jpg"
                  alt="Advanced manufacturing facility"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">
                        {language === 'hu' ? "Aktív gyártás" : "Active Manufacturing"}
                      </span>
                    </div>
                    <p className="text-sm opacity-90">
                      {language === 'hu' 
                        ? "Fejlett műanyaggyártási technológiák"
                        : "Advanced plastic manufacturing technologies"
                      }
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/20 backdrop-blur-md rounded-2xl border border-cyan-400/30 flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                <Award className="w-8 h-8 text-cyan-400" />
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/20 backdrop-blur-md rounded-xl border border-purple-400/30 flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Users className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-sm mb-4 font-medium">
          {language === 'hu' ? "Görgessen tovább" : "Scroll to explore"}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Video overlay */}
      {isVideoPlaying && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              controls
              poster="/images/case-studies/video-poster.jpg"
            >
              <source src="/videos/partnership-story.mp4" type="video/mp4" />
            </video>
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={() => setIsVideoPlaying(false)}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;