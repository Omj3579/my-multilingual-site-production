import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Globe, Award, Play, ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [particles, setParticles] = useState([]);

  // Advanced parallax transforms
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400, 800], [1, 0.8, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 5]);

  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 500, damping: 100 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 500, damping: 100 });

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: e.clientX, y: e.clientY });
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const heroContent = {
    badge: {
      en: "Revolutionary Household Solutions",
      hu: "Forradalmi Háztartási Megoldások"
    },
    title: {
      en: "Transforming<br/><span class='text-gradient'>Every Home</span><br/>Through Innovation",
      hu: "Minden Otthon<br/><span class='text-gradient'>Átalakítása</span><br/>Innováción Keresztül"
    },
    subtitle: {
      en: "From kitchen essentials to smart storage solutions, we're reshaping how families interact with everyday household products through precision plastic manufacturing",
      hu: "A konyhai alapoktól az intelligens tárolási megoldásokig, újraformáljuk, hogyan lépnek kapcsolatba a családok a mindennapi háztartási termékekkel precíziós műanyaggyártáson keresztül"
    },
    stats: [
      {
        value: "50M+",
        label: { en: "Homes Transformed", hu: "Átalakított Otthon" },
        icon: <Home className="w-5 h-5" />
      },
      {
        value: "200+",
        label: { en: "Product Lines", hu: "Termékcsalád" },
        icon: <Sparkles className="w-5 h-5" />
      },
      {
        value: "15",
        label: { en: "Countries Served", hu: "Kiszolgált Ország" },
        icon: <Globe className="w-5 h-5" />
      },
      {
        value: "98%",
        label: { en: "Satisfaction Rate", hu: "Elégedettségi Arány" },
        icon: <Award className="w-5 h-5" />
      }
    ]
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Dynamic gradient background that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-700"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3), rgba(219, 39, 119, 0.2), transparent)`,
        }}
      />

      {/* Geometric background shapes */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl"
          style={{ y: y1, rotate }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl"
          style={{ y: y2, rotate: useTransform(scrollY, [0, 1000], [0, -10]) }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-red-400/10 rounded-full filter blur-3xl"
          style={{ y: y3, rotate: useTransform(scrollY, [0, 1000], [0, 15]) }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 h-screen flex items-center"
        style={{ 
          opacity,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transform: 'translateZ(50px)' }}
          >
            {/* Animated badge */}
            <motion.div 
              className="relative inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                  '0 0 40px rgba(219, 39, 119, 0.3)',
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                animate={{ x: [-100, 400] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <Sparkles className="w-5 h-5 text-purple-300 relative z-10" />
              <span className="text-purple-200 font-medium relative z-10">
                {heroContent.badge[language]}
              </span>
            </motion.div>

            {/* Title with advanced text animations */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                dangerouslySetInnerHTML={{ 
                  __html: heroContent.title[language] 
                }}
              />
              
              {/* Add custom styles for gradient text */}
              <style jsx>{`
                .text-gradient {
                  background: linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4);
                  background-size: 200% 200%;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  animation: gradient-shift 3s ease-in-out infinite;
                }
                
                @keyframes gradient-shift {
                  0%, 100% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                }
              `}</style>
            </div>

            {/* Subtitle with typewriter effect */}
            <motion.p 
              className="text-xl text-purple-100 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {heroContent.subtitle[language]}
            </motion.p>

            {/* Interactive stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {heroContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  data-hover="true"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-purple-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-purple-200">
                    {stat.label[language]}
                  </div>
                  
                  {/* Hover effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId={`stat-bg-${index}`}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with advanced animations */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.button 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  {language === 'hu' ? "Fedezze fel a termékeket" : "Explore Products"}
                </span>
              </motion.button>
              
              <motion.button 
                className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-full font-medium transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsVideoPlaying(true)}
                data-hover="true"
              >
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  {language === 'hu' ? "Gyártási folyamat" : "Manufacturing Process"}
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right content - 3D Product Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ 
              y: y2,
              transform: 'translateZ(30px)'
            }}
          >
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Main showcase container */}
              <motion.div 
                className="absolute inset-0 rounded-3xl overflow-hidden"
                style={{
                  rotateX: useTransform(mouseY, [0, 1], [2, -2]),
                  rotateY: useTransform(mouseX, [0, 1], [-2, 2]),
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl" />
                
                {/* Product images in 3D space */}
                <div className="absolute inset-4 grid grid-cols-2 gap-4">
                  {[
                    { src: "/resources/caseStudies/1.webp", name: "Kitchen Storage", delay: 0 },
                    { src: "/resources/caseStudies/3.webp", name: "Bathroom Organizer", delay: 0.2 },
                    { src: "/resources/caseStudies/2.webp", name: "Laundry Solution", delay: 0.4 },
                    { src: "/resources/caseStudies/4.webp", name: "Smart Drawer", delay: 0.6 }
                  ].map((product, index) => (
                    <motion.div
                      key={index}
                      className="relative rounded-2xl overflow-hidden group cursor-pointer"
                      initial={{ opacity: 0, z: -100 }}
                      animate={{ opacity: 1, z: 0 }}
                      transition={{ duration: 0.8, delay: product.delay }}
                      whileHover={{ 
                        z: 50,
                        rotateX: 5,
                        rotateY: 5,
                        scale: 1.05
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                      data-hover="true"
                    >
                      <Image
                        src={product.src}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 left-2 right-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {product.name}
                      </div>
                      
                      {/* 3D border effect */}
                      <div className="absolute inset-0 border border-white/20 rounded-2xl group-hover:border-purple-400/50 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>

                {/* Floating elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 2) * 80}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with advanced animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.span 
          className="text-sm mb-4 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {language === 'hu' ? "Fedezzen fel többet" : "Discover More"}
        </motion.span>
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div 
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div 
            className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              controls
              poster="/images/household/manufacturing-poster.jpg"
            >
              <source src="/videos/household-manufacturing.mp4" type="video/mp4" />
            </video>
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
              onClick={() => setIsVideoPlaying(false)}
              data-hover="true"
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