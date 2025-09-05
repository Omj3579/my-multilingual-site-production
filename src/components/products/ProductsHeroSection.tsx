import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown, Sparkles, Boxes, Package } from 'lucide-react';

interface ProductsHeroSectionProps {
  title?: string;
  description?: string;
  heroImage?: string;
}

const ProductsHeroSection: React.FC<ProductsHeroSectionProps> = ({
  title,
  description,
  heroImage
}) => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Framer Motion values
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // 3D transform for interactive elements
  const calcTransform = (factor = 1) => {
    return `perspective(1000px) rotateX(${mousePosition.y * 3 * factor}deg) rotateY(${mousePosition.x * -3 * factor}deg)`;
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
  const defaultTitle = language === 'en' ? 'Product Catalog' : 'Termékkatalógus';
  const defaultDescription = language === 'en' 
    ? 'Discover our comprehensive range of high-quality plastic manufacturing solutions designed for excellence and innovation.'
    : 'Fedezze fel átfogó, kiváló minőségű műanyaggyártási megoldásaink teljes skáláját, amelyeket a kiválóság és az innováció jegyében terveztünk.';

  return (
    <section className="relative min-h-[85vh] pt-20 overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50/80 to-indigo-50">      {/* Hero Background Image */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/15 to-indigo-900/10 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-20" />
          <Image
            src={heroImage}
            alt="Products hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      )}{/* Advanced Background Elements */}
      {isMounted && (
        <>
          {/* Dynamic gradient background */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: backgroundY }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-indigo-500/4 to-purple-600/6" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.04),transparent_70%)]" />
          </motion.div>

          {/* Animated floating blobs - more subtle */}
          <motion.div 
            className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/8 to-indigo-600/10 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute -right-40 -bottom-40 w-80 h-80 rounded-full bg-gradient-to-tl from-purple-400/6 to-pink-500/8 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 8
            }}
          />

          {/* Subtle geometric pattern overlay */}
          <div className="absolute inset-0 opacity-[0.015]">
            <svg width="100%" height="100%">
              <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="0.8" fill="currentColor" opacity="0.4" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#hero-grid)" className="text-blue-700" />
            </svg>
          </div>

          {/* Floating tech elements - more subtle */}
          <motion.div
            className="absolute top-20 right-10 text-blue-400/12"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Boxes size={50} />
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-16 text-indigo-400/10"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -8, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            <Package size={70} />
          </motion.div>
        </>
      )}      {/* Main Content */}
      <motion.div 
        className="relative z-20 container mx-auto px-4 py-20 md:py-32"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating badge */}
          <motion.div
            className={`inline-flex items-center px-6 py-3 mb-8 rounded-full border shadow-xl ${
              heroImage 
                ? 'bg-white/15 backdrop-blur-lg border-white/25 text-white' 
                : 'bg-white/80 backdrop-blur-lg border-white/40 text-slate-700'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transform: calcTransform(0.1) }}
          >
            <Sparkles className={`w-4 h-4 mr-2 ${heroImage ? 'text-blue-300' : 'text-blue-600'}`} />
            <span className="text-sm font-medium tracking-wide">
              {language === 'en' ? 'PREMIUM PRODUCT CATALOG' : 'PRÉMIUM TERMÉKKATALÓGUS'}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
              heroImage 
                ? 'text-white drop-shadow-lg' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {title || defaultTitle}
          </motion.h1>

          {/* Description */}
          <motion.p
            className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              heroImage 
                ? 'text-slate-100 drop-shadow-md' 
                : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {description || defaultDescription}
          </motion.p>

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
            <div className={`flex flex-col items-center ${heroImage ? 'text-slate-200' : 'text-slate-500'}`}>
              <span className="text-sm mb-2 font-medium">
                {language === 'en' ? 'Explore Products' : 'Termékek Felfedezése'}
              </span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white drop-shadow-sm" 
          />
        </svg>
      </div>
    </section>
  );
};

export default ProductsHeroSection;
