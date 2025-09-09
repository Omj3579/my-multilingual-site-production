import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import Image from 'next/image';
import { Sparkles, Zap, Globe, ArrowDown } from 'lucide-react';

const CompanyOverviewHero = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Advanced mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -100]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 15);
    mouseY.set(y / 15);
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden font-poppins bg-black"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background with Particles */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-purple-900/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(0,191,255,0.2),transparent_50%)]" />
        </motion.div>

        {/* Floating Particles */}
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Hero Image with Advanced Effects */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div className="relative w-full h-full">
            <Image
              src="https://flair-plastic.hu/wp-content/uploads/2024/05/Close-up-view-of-a-technicians-hands-wearing-purple-gloves-assembling-electronic-components.-A-gre-1024x334.png.webp"
              alt={language === 'en' ? 'Flair Plastic Company' : 'Flair Plastic Cég'}
              fill
              className="object-cover opacity-60 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
          </div>
        </motion.div>

        {/* Interactive Cursor Trail */}
        <motion.div
          className="absolute w-64 h-64 pointer-events-none z-10"
          style={{
            background: 'radial-gradient(circle, rgba(0,191,255,0.15) 0%, transparent 70%)',
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>

      {/* Futuristic Content Overlay */}
      <motion.div 
        className="relative z-20 h-full flex items-center justify-center px-6"
        style={{ y: contentY }}
      >
        <motion.div 
          className="max-w-5xl text-white text-center"
          style={{ 
            rotateX: useTransform(mouseY, [-300, 300], [5, -5]),
            rotateY: useTransform(mouseX, [-300, 300], [-5, 5]),
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Glowing Badge with Icons */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 mb-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05, borderColor: "rgba(0,191,255,0.5)" }}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Globe className="w-4 h-4 text-blue-400" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90 relative z-10">
              {language === 'en' ? 'Global Manufacturing Excellence' : 'Globális Gyártási Kiválóság'}
            </span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.div>
          
          {/* Massive Futuristic Title */}
          <motion.h1 
            className="text-5xl md:text-8xl lg:text-9xl font-black leading-none drop-shadow-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {language === 'en' ? (
              <>
                <motion.span
                  className="block"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(0,191,255,0.5)",
                      "0 0 20px rgba(0,191,255,0.8)",
                      "0 0 10px rgba(0,191,255,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  FLAIR
                </motion.span>
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 block"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  PLASTIC
                </motion.span>
              </>
            ) : (
              <>
                <motion.span
                  className="block"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(0,191,255,0.5)",
                      "0 0 20px rgba(0,191,255,0.8)",
                      "0 0 10px rgba(0,191,255,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  FLAIR
                </motion.span>
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 block"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  PLASTIC
                </motion.span>
              </>
            )}
          </motion.h1>
          
          {/* Animated Divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-32"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <Zap className="w-6 h-6 text-blue-400" />
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-32"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
          
          {/* Immersive Description */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 font-light">
              {language === 'en' 
                ? 'Step into the future of precision manufacturing where innovation meets excellence'
                : 'Lépjen be a precíziós gyártás jövőjébe, ahol az innováció találkozik a kiválósággal'}
            </p>
            
            <motion.p 
              className="text-lg text-white/60 leading-relaxed"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {language === 'en'
                ? 'Discover our journey, leadership, and the cutting-edge technology that drives us forward in creating a sustainable tomorrow.'
                : 'Fedezze fel utunkat, vezetőségünket és azt a korszerű technológiát, amely előre visz minket a fenntartható holnap megteremtésében.'}
            </motion.p>
          </motion.div>

          {/* Interactive Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                {language === 'en' ? 'Explore Our Story' : 'Fedezze Fel Történetünket'}
              </span>
              <ArrowDown className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CompanyOverviewHero;
