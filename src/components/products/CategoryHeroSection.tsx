import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown, Zap, Award, Target, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CategoryHeroSectionProps {
  categoryId: string;
  categoryName?: string;
  categoryDescription?: string;
  productCount?: number;
  backgroundImage?: string;
}

const CategoryHeroSection: React.FC<CategoryHeroSectionProps> = ({
  categoryId,
  categoryName,
  categoryDescription,
  productCount = 0,
  backgroundImage
}) => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Framer Motion values
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 0.9]);

  // Category-specific styling
  const getCategoryTheme = (category: string) => {
    const themes = {
      'injection-blow': {
        gradient: 'from-blue-600 via-indigo-600 to-purple-600',
        accent: 'blue',
        particles: 'text-blue-300/20'
      },
      'surface-finishing': {
        gradient: 'from-amber-500 via-orange-500 to-red-500',
        accent: 'amber',
        particles: 'text-amber-300/20'
      },
      'in-mould-labelling': {
        gradient: 'from-green-500 via-teal-500 to-cyan-500',
        accent: 'green',
        particles: 'text-green-300/20'
      },
      'in-mould-decoration': {
        gradient: 'from-purple-500 via-pink-500 to-rose-500',
        accent: 'purple',
        particles: 'text-purple-300/20'
      },
      'assembly': {
        gradient: 'from-slate-600 via-gray-600 to-zinc-600',
        accent: 'slate',
        particles: 'text-slate-300/20'
      },
      default: {
        gradient: 'from-blue-600 via-indigo-600 to-purple-600',
        accent: 'blue',
        particles: 'text-blue-300/20'
      }
    };
    return themes[category as keyof typeof themes] || themes.default;
  };

  const theme = getCategoryTheme(categoryId);

  // 3D transform for interactive elements
  const calcTransform = (factor = 1) => {
    return `perspective(1200px) rotateX(${mousePosition.y * 4 * factor}deg) rotateY(${mousePosition.x * -4 * factor}deg)`;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({
        x: (clientX / window.innerWidth) - 0.5,
        y: (clientY / window.innerHeight) - 0.5
      });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const defaultCategoryNames = {
    'injection-blow': language === 'en' ? 'Injection Blow Molding' : 'Fröccsöntés és Fúvás',
    'surface-finishing': language === 'en' ? 'Surface Finishing' : 'Felületkezelés',
    'in-mould-labelling': language === 'en' ? 'In-Mould Labelling' : 'Szerszámon Belüli Címkézés',
    'in-mould-decoration': language === 'en' ? 'In-Mould Decoration' : 'Szerszámon Belüli Dekoráció',
    'assembly': language === 'en' ? 'Assembly Solutions' : 'Összeszerelési Megoldások'
  };

  const displayName = categoryName || defaultCategoryNames[categoryId as keyof typeof defaultCategoryNames] || categoryId;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      {isMounted && (
        <>          {/* Background image with parallax */}
          {backgroundImage && (
            <motion.div 
              className="absolute inset-0 z-0"
              style={{ y: backgroundY }}
            >
              <Image 
                src={backgroundImage}
                alt={`${displayName} background`}
                fill
                className="object-cover"
                priority
              />
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} mix-blend-multiply`}
                style={{ opacity: overlayOpacity }}
              />
            </motion.div>
          )}

          {/* Gradient background if no image */}
          {!backgroundImage && (
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`}
              style={{ y: backgroundY }}
            />
          )}

          {/* Advanced overlay patterns */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Animated mesh gradient */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${theme.particles}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Technical grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%">
              <pattern id="category-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="1.5" fill="white" opacity="0.4" />
                <path d="M 0 30 L 60 30 M 30 0 L 30 60" stroke="white" strokeWidth="0.2" opacity="0.3" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#category-grid)" />
            </svg>
          </div>
        </>
      )}

      {/* Main Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <motion.div
              className="flex items-center mb-8 text-white/80"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium">
                {language === 'en' ? 'Products' : 'Termékek'}
              </span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-sm font-medium text-white">
                {displayName}
              </span>
            </motion.div>

            {/* Category badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 mb-8 bg-white/15 backdrop-blur-lg rounded-full border border-white/20 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ transform: calcTransform(0.1) }}
            >
              <Award className="w-4 h-4 mr-2 text-white" />
              <span className="text-sm font-medium tracking-wide text-white">
                {language === 'en' ? 'PROFESSIONAL GRADE' : 'PROFESSZIONÁLIS MINŐSÉG'}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ 
                textShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transform: calcTransform(0.05)
              }}
            >
              {displayName}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {categoryDescription || 
                (language === 'en' 
                  ? 'Advanced manufacturing solutions designed for precision, quality, and innovation.'
                  : 'Fejlett gyártási megoldások, amelyeket a precizitás, a minőség és az innováció jegyében terveztünk.'
                )}
            </motion.p>

            {/* Stats and CTA Section */}
            <motion.div
              className="flex flex-row items-center gap-6 mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {/* Quality badge */}
              <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-4 border border-white/20">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-3 text-white" />
                  <div>
                    <div className="text-sm font-medium text-white">
                      {language === 'en' ? 'Premium Quality' : 'Prémium Minőség'}
                    </div>
                    <div className="text-xs text-white/70">
                      {language === 'en' ? 'ISO Certified' : 'ISO Tanúsított'}
                    </div>
                  </div>
                </div>
              </div>
              {/* Download Catalog button */}
              <motion.button
                className="px-8 py-4 bg-white/20 backdrop-blur-lg text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ transform: calcTransform(0.1) }}
              >
                {language === 'en' ? 'Download Catalog' : 'Katalógus Letöltése'}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.6 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2 font-medium">
              {language === 'en' ? 'Browse Collection' : 'Kollekció Böngészése'}
            </span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </motion.div>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white" 
          />
        </svg>
      </div>
    </section>
  );
};

export default CategoryHeroSection;
