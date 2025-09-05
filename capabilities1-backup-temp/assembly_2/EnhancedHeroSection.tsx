import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, Award, Clock, Users, ChevronDown } from 'lucide-react';

const EnhancedHeroSection = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  // Move these hooks outside the conditional
  const backgroundX = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const bottomElementY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  // Content from markdown
  const content = {
    badge: {
      en: "Our Services",
      hu: "Képességeink"
    },
    title: {
      en: "Assembly",
      hu: "Összeszerelés"
    },
    subtitle: {
      en: "Professional assembly services with precision and quality assurance at every step.",
      hu: "Professzionális összeszerelési szolgáltatások precizitással és minőségbiztosítással minden lépésben."
    },
    infoCard: {
      title: {
        en: "Complete Assembly Solutions",
        hu: "Komplett Összeszerelési Megoldások"
      },
      description: {
        en: "From simple component assembly to complex multi-stage processes, our facilities deliver precision and quality in every project.",
        hu: "Az egyszerű alkatrész összeszereléstől a komplex többlépcsős folyamatokig, létesítményeink minden projektben precizitást és minőséget biztosítanak."
      }
    },
    stats: [
      { value: "99.8%", label: { en: "Quality Rate", hu: "Minőségi Ráta" }, icon: Award },
      { value: "24/7", label: { en: "Production", hu: "Gyártás" }, icon: Clock },
      { value: "15+", label: { en: "Years Experience", hu: "Év Tapasztalat" }, icon: Users }
    ]
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 font-sans"
      onMouseMove={handleMouseMove}
    >
      {/* Sophisticated Background Elements */}
      {isMounted && (
        <>
          {/* Floating Elements with Assembly DNA */}
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-full filter blur-3xl"
            style={{
              y: backgroundY,
              x: backgroundX
            }}
          />
          <motion.div 
            className="absolute bottom-40 right-32 w-64 h-64 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full filter blur-2xl"
            style={{
              y: bottomElementY
            }}
          />
          
          {/* Interactive Light Effect */}
          <div 
            className="absolute pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle 200px at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`,
              width: '400px',
              height: '400px',
            }}
          />
          
          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.015]">
            <svg width="100%" height="100%">
              <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="1" fill="currentColor" opacity="0.3" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>
        </>
      )}

      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-32 pb-20">
        {/* Enhanced Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: textY }}
          className="text-center max-w-6xl mx-auto mb-16"
        >
          {/* Sophisticated Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50 mb-8 shadow-lg backdrop-blur-sm"
          >
            <Award className="w-4 h-4 mr-2" />
            {content.badge[language]}
          </motion.span>
          
          {/* Dynamic Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {content.title[language]}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            {content.subtitle[language]}
          </motion.p>
        </motion.div>

        {/* Enhanced Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <motion.img
                src="https://flair-plastic.hu/wp-content/uploads/2024/09/1.webp"
                alt={language === 'en' ? 'Assembly Hero Image' : 'Összeszerelés Főkép'}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.02 }}
              />
              
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              
              {/* Info Card with Assembly DNA styling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:max-w-lg md:right-auto"
              >
                <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-6 md:p-8 border border-white/20 shadow-xl">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">
                    {content.infoCard.title[language]}
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    {content.infoCard.description[language]}
                  </p>
                  <motion.a
                    href={language === 'en' ? '/capabilities/assembly/details' : '/kepessegek/osszszereles/reszletek'}
                    className="group inline-flex items-center font-medium text-blue-600"
                    whileHover={{ x: 5 }}
                  >
                    <span>{language === 'en' ? 'Learn more' : 'További információk'}</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-8"
          >
            {/* Stats Grid with Assembly DNA */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {content.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label[language]}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/quote"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>{language === 'en' ? 'Request Quote' : 'Árajánlat Kérése'}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/capabilities"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>{language === 'en' ? 'Learn More' : 'További Információk'}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-blue-600"
          >
            <span className="text-sm font-medium mb-2">{language === 'en' ? 'Scroll to explore' : 'Görgess a felfedezéshez'}</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;