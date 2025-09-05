import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Cpu, Layers, ArrowRight, CheckCircle, TrendingUp, Users, Globe } from 'lucide-react';

const AssemblyOverview = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const overviewContent = {
    en: {
      badge: "Assembly Services",
      title: "Revolutionizing Manufacturing",
      subtitle: "Through Precision Assembly",
      description: "In today's competitive manufacturing landscape, precision assembly is the cornerstone of product excellence. Our advanced assembly solutions bridge the gap between design vision and manufacturing reality.",
      
      challenges: {
        title: "Manufacturing Challenges",
        subtitle: "Complex problems require innovative solutions",
        items: [
          {
            icon: Target,
            title: "Precision Requirements",
            description: "Modern products demand microscopic tolerances and perfect component alignment."
          },
          {
            icon: Cpu,
            title: "Technology Integration",
            description: "Seamlessly integrating diverse technologies into cohesive, functional systems."
          },
          {
            icon: Layers,
            title: "Multi-layer Complexity",
            description: "Managing intricate assemblies with hundreds of interconnected components."
          }
        ]
      },
      
      solutions: {
        title: "Our Approach",
        subtitle: "Transforming complexity into simplicity",
        items: [
          {
            icon: CheckCircle,
            title: "Automated Precision",
            description: "AI-driven assembly systems ensuring consistent quality and speed.",
            metric: "99.8% accuracy"
          },
          {
            icon: TrendingUp,
            title: "Scalable Production",
            description: "Flexible manufacturing lines adapting to volume changes instantly.",
            metric: "300% faster"
          },
          {
            icon: Users,
            title: "Expert Integration",
            description: "Skilled technicians working alongside advanced robotics.",
            metric: "24/7 operation"
          }
        ]
      },
      
      impact: {
        title: "Global Impact",
        stats: [
          { value: "2M+", label: "Units Assembled", icon: Globe },
          { value: "150+", label: "Partner Companies", icon: Users },
          { value: "50+", label: "Countries Served", icon: Target },
          { value: "99.2%", label: "Client Satisfaction", icon: TrendingUp }
        ]
      }
    },
    hu: {
      badge: "Összeszerelési Szolgáltatások",
      title: "A Gyártás Forradalmasítása",
      subtitle: "Precíziós Összeszerelés Révén",
      description: "A mai versenyképes gyártási környezetben a precíziós összeszerelés a termék kiválóság sarokköve. Fejlett összeszerelési megoldásaink áthidalják a szakadékot a tervezési vízió és a gyártási valóság között.",
      
      challenges: {
        title: "Gyártási Kihívások",
        subtitle: "Az összetett problémák innovatív megoldásokat igényelnek",
        items: [
          {
            icon: Target,
            title: "Precíziós Követelmények",
            description: "A modern termékek mikroszkopikus tűréseket és tökéletes komponens-igazítást igényelnek."
          },
          {
            icon: Cpu,
            title: "Technológiai Integráció",
            description: "Különböző technológiák zökkenőmentes integrálása összefüggő, funkcionális rendszerekbe."
          },
          {
            icon: Layers,
            title: "Többrétegű Komplexitás",
            description: "Bonyolult összeszerelések kezelése több száz összekapcsolt komponenssel."
          }
        ]
      },
      
      solutions: {
        title: "Megközelítésünk",
        subtitle: "A komplexitás egyszerűséggé alakítása",
        items: [
          {
            icon: CheckCircle,
            title: "Automatizált Precizitás",
            description: "AI-vezérelt összeszerelési rendszerek következetes minőség és sebesség biztosítására.",
            metric: "99,8% pontosság"
          },
          {
            icon: TrendingUp,
            title: "Skálázható Termelés",
            description: "Rugalmas gyártósorok, amelyek azonnal alkalmazkodnak a volumen változásokhoz.",
            metric: "300%-kal gyorsabb"
          },
          {
            icon: Users,
            title: "Szakértői Integráció",
            description: "Képzett technikusok dolgoznak együtt fejlett robotikával.",
            metric: "24/7 működés"
          }
        ]
      },
      
      impact: {
        title: "Globális Hatás",
        stats: [
          { value: "2M+", label: "Összeszerelt Egység", icon: Globe },
          { value: "150+", label: "Partner Vállalat", icon: Users },
          { value: "50+", label: "Kiszolgált Ország", icon: Target },
          { value: "99,2%", label: "Ügyfél Elégedettség", icon: TrendingUp }
        ]
      }
    }
  };

  const content = overviewContent[language];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div ref={containerRef} className="relative py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 border border-indigo-200/50 mb-6">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse" />
                {content.badge}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {content.title}
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {content.subtitle}
              </span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {content.description}
            </motion.p>
          </div>

          {/* Challenges vs Solutions */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {content.challenges.title}
                </h3>
                <p className="text-gray-600">
                  {content.challenges.subtitle}
                </p>
              </div>
              
              <div className="space-y-6">
                {content.challenges.items.map((challenge, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <challenge.icon size={24} className="text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {challenge.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {content.solutions.title}
                </h3>
                <p className="text-gray-600">
                  {content.solutions.subtitle}
                </p>
              </div>
              
              <div className="space-y-6">
                {content.solutions.items.map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <solution.icon size={24} className="text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {solution.title}
                          </h4>
                          <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full">
                            {solution.metric}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Global Impact Section */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {content.impact.title}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.impact.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{ y: imageY }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon size={28} className="text-white" />
                  </div>
                  
                  <motion.div 
                    className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                  
                  {/* Animated progress indicator */}
                  <motion.div 
                    className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : { width: 0 }}
                      transition={{ delay: index * 0.2 + 1.2, duration: 1, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'Explore Our Services' : 'Fedezze Fel Szolgáltatásainkat'}
              <ArrowRight 
                size={20} 
                className="ml-2 transition-transform group-hover:translate-x-1" 
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default AssemblyOverview;