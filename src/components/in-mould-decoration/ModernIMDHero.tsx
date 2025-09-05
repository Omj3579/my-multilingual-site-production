import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Palette, 
  Layers, 
  Zap, 
  ArrowRight, 
  Sparkles,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

const ModernIMDHero = () => {
  const { language } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    { 
      icon: Palette, 
      title: language === 'en' ? 'Premium Aesthetics' : 'Prémium esztétika',
      value: '300 DPI'
    },
    { 
      icon: Layers, 
      title: language === 'en' ? 'Seamless Integration' : 'Zökkenőmentes integráció',
      value: '100%'
    },
    { 
      icon: Zap, 
      title: language === 'en' ? 'Cost Effective' : 'Költséghatékony',
      value: '40%'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-purple-200 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              {language === 'en' ? 'Advanced Technology' : 'Fejlett technológia'}
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {language === 'en' ? 'In-Mould' : 'Formába'}
                </span>
                <br />
                <span className="text-white">
                  {language === 'en' ? 'Decoration' : 'Díszítés'}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-purple-100 max-w-lg leading-relaxed"
              >
                {language === 'en' 
                  ? 'Flair Plastic\'s in-mould decoration (IMD) technology allows for the integration of complex and vibrant graphics directly onto your products. After extensive research and development, we have perfected a process that is both efficient and cost-effective, ensuring reliable air-trap project.'
                  : 'A Flair Plastic formába díszítési (IMD) technológiája lehetővé teszi összetett és élénk grafikák közvetlen integrációját termékeire. Kiterjedt kutatás és fejlesztés után tökéletesítettünk egy folyamatot, amely egyszerre hatékony és költséghatékony, biztosítva a megbízható légcsapda-projektet.'
                }
              </motion.p>
            </div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { text: language === 'en' ? 'Premium aesthetic appearance' : 'Prémium esztétikai megjelenés' },
                { text: language === 'en' ? 'Scratch and chemical resistant' : 'Karcolás- és vegyszerálló' },
                { text: language === 'en' ? 'Consistent quality across production runs' : 'Egyenletes minőség a gyártási futásokon keresztül' },
                { text: language === 'en' ? 'Cost effective for medium to large volumes' : 'Költséghatékony közepes és nagy mennyiségekhez' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 text-purple-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300"
              >
                {language === 'en' ? 'Request a Quote' : 'Árajánlat kérése'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Rotating Features Display */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20"
                >
                  <div className="flex justify-center mb-6">
                    {React.createElement(features[activeFeature].icon, {
                      className: "w-16 h-16 text-purple-400"
                    })}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {features[activeFeature].value}
                  </div>
                  <div className="text-purple-200 text-lg">
                    {features[activeFeature].title}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    aria-label={`View feature ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeFeature ? 'bg-purple-400 scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Modern Tech Preview */}
            <motion.div
              animate={{
                rotateY: [0, 5, 0],
                rotateX: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                {/* High-precision IMD applications preview */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-300 mb-1">300</div>
                    <div className="text-xs text-purple-200">DPI {language === 'en' ? 'Resolution' : 'Felbontás'}</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-pink-300 mb-1">15s</div>
                    <div className="text-xs text-pink-200">{language === 'en' ? 'Cycle Time' : 'Ciklusidő'}</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-300 mb-1">10+</div>
                    <div className="text-xs text-blue-200">{language === 'en' ? 'Years Durability' : 'Év tartósság'}</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-300 mb-1">100%</div>
                    <div className="text-xs text-green-200">{language === 'en' ? 'Quality Rate' : 'Minőségi arány'}</div>
                  </div>
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
            <span className="text-sm">{language === 'en' ? 'Explore Applications' : 'Alkalmazások felfedezése'}</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernIMDHero;
