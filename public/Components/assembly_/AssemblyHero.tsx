import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Play, ArrowRight, Zap, Shield, Award } from 'lucide-react';

const AssemblyHero = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroContent = {
    en: {
      badge: "Consumer Product Assembly",
      title: ["Reliable", "Assembly", "Solutions"],
      subtitle: "Bringing Your Products to Life",
      description: "Comprehensive assembly services for household products, personal care items, toys, and consumer goods. We specialize in efficient, cost-effective solutions that meet the demands of everyday consumer products.",
      primaryCTA: "Explore Capabilities",
      secondaryCTA: "Watch Process",
      stats: [
        { value: "99.5%", label: "Quality Standard" },
        { value: "50M+", label: "Products Assembled" },
        { value: "19", label: "Industries Served" }
      ],
      features: [
        { icon: Zap, text: "Efficient Production" },
        { icon: Shield, text: "Consumer Safety" },
        { icon: Award, text: "Trusted Partner" }
      ]
    },
    hu: {
      badge: "Fogyasztói Termék Összeszerelés",
      title: ["Megbízható", "Összeszerelési", "Megoldások"],
      subtitle: "Termékeinek Életre Keltése",
      description: "Átfogó összeszerelési szolgáltatások háztartási termékekhez, személyes ápolási cikkekhez, játékokhoz és fogyasztói javakhoz. A mindennapi fogyasztói termékek igényeinek megfelelő hatékony, költséghatékony megoldásokra specializálódunk.",
      primaryCTA: "Képességek Felfedezése",
      secondaryCTA: "Folyamat Megtekintése",
      stats: [
        { value: "99,5%", label: "Minőségi Szabvány" },
        { value: "50M+", label: "Összeszerelt Termék" },
        { value: "19", label: "Kiszolgált Iparág" }
      ],
      features: [
        { icon: Zap, text: "Hatékony Termelés" },
        { icon: Shield, text: "Fogyasztói Biztonság" },
        { icon: Award, text: "Megbízható Partner" }
      ]
    }
  };

  const content = heroContent[language];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ y: textY }}
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse" />
                {content.badge}
              </span>
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              {content.title.map((word, index) => (
                <motion.h1
                  key={index}
                  variants={titleVariants}
                  className={`text-5xl md:text-7xl font-bold leading-tight ${
                    index === 1 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
                      : 'text-gray-900'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {word}
                </motion.h1>
              ))}
              <motion.p 
                variants={itemVariants}
                className="text-xl text-blue-600 font-medium"
              >
                {content.subtitle}
              </motion.p>
            </div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              {content.description}
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {content.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm"
                >
                  <feature.icon size={16} className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {content.primaryCTA}
                <ArrowRight 
                  size={20} 
                  className="ml-2 transition-transform group-hover:translate-x-1" 
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play size={20} className="mr-2 text-blue-600" />
                {content.secondaryCTA}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/50"
            >
              {content.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              {/* Assembly Process Visualization */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    {language === 'en' ? 'Assembly Process' : 'Összeszerelési Folyamat'}
                  </span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600" />
                  </div>
                </div>
                
                {/* Process Steps Visualization */}
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((step) => (
                    <motion.div
                      key={step}
                      className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: step * 0.2 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {step}
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: step * 0.3, duration: 1 }}
                          />
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {step === 4 ? '100%' : `${step * 25}%`}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Award size={32} className="text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Shield size={24} className="text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};

export default AssemblyHero;