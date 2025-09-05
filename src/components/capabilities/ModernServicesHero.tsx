import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Factory, 
  Zap, 
  Target, 
  Award, 
  ArrowRight, 
  Sparkles,
  Globe,
  Layers,
  Settings,
  ChevronDown
} from 'lucide-react';

const ModernServicesHero = () => {
  const { language } = useLanguage();
  const [activeStatistic, setActiveStatistic] = useState(0);
  
  const statistics = [
    { value: "30+", label: language === 'en' ? 'Years Experience' : '30+ év tapasztalat', icon: Award },
    { value: "500+", label: language === 'en' ? 'Projects Delivered' : '500+ projekt', icon: Target },
    { value: "24/7", label: language === 'en' ? 'Production Support' : '24/7 támogatás', icon: Settings },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStatistic((prev) => (prev + 1) % statistics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [statistics.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,100 Q300,50 600,100 T1200,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-blue-200 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              {language === 'en' ? 'Advanced Manufacturing' : 'Fejlett gyártás'}
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {language === 'en' ? 'Plastic' : 'Műanyag'}
                </span>
                <br />
                <span className="text-white">
                  {language === 'en' ? 'Injection' : 'Fröccsöntés'}
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {language === 'en' ? 'Excellence' : 'Kiválóság'}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-blue-100 max-w-lg leading-relaxed"
              >
                {language === 'en' 
                  ? 'Transforming precision engineering into revolutionary manufacturing solutions with cutting-edge technology and unmatched expertise.'
                  : 'A precíziós mérnöki tudást forradalmi gyártási megoldásokká alakítjuk élvonalbeli technológiával és páratlan szakértelemmel.'
                }
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300"
              >
                {language === 'en' ? 'Explore Services' : 'Szolgáltatások felfedezése'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                {language === 'en' ? 'Learn More' : 'Tudj meg többet'}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Statistics & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Floating Statistics Cards */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStatistic}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20"
                >
                  <div className="flex justify-center mb-4">
                    {React.createElement(statistics[activeStatistic].icon, {
                      className: "w-12 h-12 text-blue-400"
                    })}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {statistics[activeStatistic].value}
                  </div>
                  <div className="text-blue-200">
                    {statistics[activeStatistic].label}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Indicator Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {statistics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStatistic(index)}
                    aria-label={`View statistic ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeStatistic ? 'bg-blue-400 scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 3D-ish Visual Element */}
            <motion.div
              animate={{
                rotateY: [0, 10, 0],
                rotateX: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 transform perspective-1000">
                <div className="grid grid-cols-2 gap-4">
                  {[Factory, Zap, Globe, Layers].map((Icon, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="bg-white/10 rounded-2xl p-6 text-center group hover:bg-white/20 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-blue-300 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-white text-sm font-medium">
                        {index === 0 && (language === 'en' ? 'Manufacturing' : 'Gyártás')}
                        {index === 1 && (language === 'en' ? 'Innovation' : 'Innováció')}
                        {index === 2 && (language === 'en' ? 'Global' : 'Globális')}
                        {index === 3 && (language === 'en' ? 'Quality' : 'Minőség')}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-sm">{language === 'en' ? 'Discover More' : 'Fedezz fel többet'}</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernServicesHero;
