import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock, Users, Briefcase, Sparkles, Zap, Globe, Rocket } from 'lucide-react';
import Link from 'next/link';

const CompanyNavigation = () => {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  const navigationItems = [
    {
      href: '/company/history',
      icon: <Clock className="w-8 h-8" />,
      title: {
        en: 'Our Legacy',
        hu: 'Örökségünk'
      },
      description: {
        en: 'Journey through three decades of innovation, growth, and manufacturing excellence that shaped our identity.',
        hu: 'Utazás három évtized innováción, növekedésen és gyártási kiválóságon keresztül, amely kialakította identitásunkat.'
      },
      badge: {
        en: '1990 - Present',
        hu: '1990 - Jelenlegi'
      },
      stats: '30+ Years',
      color: 'from-blue-500 to-cyan-400',
      bgGradient: 'from-blue-500/10 to-cyan-400/5'
    },
    {
      href: '/company/management',
      icon: <Users className="w-8 h-8" />,
      title: {
        en: 'Visionary Leadership',
        hu: 'Jövőképes Vezetés'
      },
      description: {
        en: 'Meet the exceptional leaders driving our mission with expertise, passion, and unwavering commitment to excellence.',
        hu: 'Ismerje meg kivételes vezetőinket, akik szakértelemmel, szenvedéllyel és rendíthetetlen elkötelezettséggel vezetik küldetésünket.'
      },
      badge: {
        en: 'Executive Team',
        hu: 'Vezetői Csapat'
      },
      stats: '10+ Experts',
      color: 'from-purple-500 to-pink-400',
      bgGradient: 'from-purple-500/10 to-pink-400/5'
    },
    {
      href: '/products',
      icon: <Briefcase className="w-8 h-8" />,
      title: {
        en: 'Product Portfolio',
        hu: 'Termékportfólió'
      },
      description: {
        en: 'Discover our comprehensive range of precision manufacturing solutions, from automotive components to consumer goods.',
        hu: 'Fedezze fel átfogó precíziós gyártási megoldásaink kínálatát, az autóipari alkatrészektől a fogyasztói cikkekig.'
      },
      badge: {
        en: 'Manufacturing Excellence',
        hu: 'Gyártási Kiválóság'
      },
      stats: '500+ Products',
      color: 'from-green-500 to-emerald-400',
      bgGradient: 'from-green-500/10 to-emerald-400/5'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8,
      rotateX: 45
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10">
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-24 h-24 border-2 border-blue-200/30 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-32 h-32 border-2 border-purple-200/30 rotate-45"
          animate={{ rotate: [45, 405], scale: [1, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ y }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            variants={cardVariants}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/70 backdrop-blur-xl border border-white/50 rounded-full mx-auto shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
            >
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {language === 'en' ? 'Explore Our Universe' : 'Fedezze Fel Univerzumunkat'}
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #3730a3 50%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {language === 'en' ? (
                <>
                  <motion.span
                    className="block"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Discover
                  </motion.span>
                  <motion.span 
                    className="block"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    Our Story
                  </motion.span>
                </>
              ) : (
                <>
                  <motion.span
                    className="block"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Fedezze Fel
                  </motion.span>
                  <motion.span 
                    className="block"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    Történetünket
                  </motion.span>
                </>
              )}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {language === 'en'
                ? 'Immerse yourself in our journey, meet our exceptional team, and discover how you can be part of shaping the future of manufacturing.'
                : 'Merüljön el utunkban, ismerje meg kivételes csapatunkat, és fedezze fel, hogyan lehet része a gyártás jövőjének alakításában.'}
            </motion.p>
          </motion.div>

          {/* Navigation Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
          >
            {navigationItems.map((item, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="group relative"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Link href={item.href}>
                  <motion.div
                    className="relative h-full p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl cursor-pointer overflow-hidden"
                    whileHover={{ 
                      y: -10,
                      rotateY: 5,
                      rotateX: 5,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      animate={hoveredCard === index ? {
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.05, 1]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-3xl" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl" />
                    
                    {/* Header with icon and badge */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center shadow-lg`}
                        animate={hoveredCard === index ? {
                          boxShadow: [
                            "0 0 20px rgba(59,130,246,0.3)",
                            "0 0 40px rgba(59,130,246,0.6)",
                            "0 0 20px rgba(59,130,246,0.3)"
                          ],
                          rotate: [0, 10, -10, 0]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.icon}
                        
                        {/* Orbiting particle */}
                        <motion.div
                          className="absolute w-2 h-2 bg-white/80 rounded-full"
                          animate={{
                            rotate: 360,
                          }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          style={{
                            offsetPath: "circle(22px)",
                            offsetDistance: "0%"
                          }}
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="px-3 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-600 rounded-full text-xs font-semibold"
                        animate={hoveredCard === index ? {
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                          color: "rgb(59, 130, 246)"
                        } : {}}
                      >
                        {item.badge[language as keyof typeof item.badge]}
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                        {item.title[language as keyof typeof item.title]}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.description[language as keyof typeof item.description]}
                      </p>
                      
                      {/* Stats and CTA */}
                      <div className="flex items-center justify-between">
                        <motion.div
                          className={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                          animate={hoveredCard === index ? {
                            scale: [1, 1.1, 1]
                          } : {}}
                        >
                          {item.stats}
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                          animate={hoveredCard === index ? {
                            x: [0, 10, 0]
                          } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <span className="mr-2 text-sm">
                            {language === 'en' ? 'Explore' : 'Fedezze Fel'}
                          </span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover overlay effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      initial={{ opacity: 0 }}
                      animate={hoveredCard === index ? { 
                        opacity: 1,
                        boxShadow: "0 0 60px rgba(59,130,246,0.2)"
                      } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Futuristic CTA Section */}
          <motion.div 
            className="relative"
            variants={cardVariants}
          >
            <motion.div
              className="relative p-12 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl text-white overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />
              </div>
              
              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-flex items-center gap-3 mb-6"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Rocket className="w-8 h-8 text-blue-400" />
                  <h3 className="text-3xl md:text-4xl font-black">
                    {language === 'en' 
                      ? 'Ready to Transform the Future?'
                      : 'Készen Áll a Jövő Átalakítására?'}
                  </h3>
                  <Zap className="w-8 h-8 text-purple-400" />
                </motion.div>
                
                <motion.p 
                  className="text-xl mb-10 opacity-90 max-w-3xl mx-auto"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {language === 'en'
                    ? 'Join us in revolutionizing precision manufacturing with cutting-edge technology and sustainable innovation.'
                    : 'Csatlakozzon hozzánk a precíziós gyártás forradalmasításában élvonalbeli technológiával és fenntartható innovációval.'}
                </motion.p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="/contact">
                    <motion.button 
                      className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-bold overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10"
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        {language === 'en' ? 'Partner With Us' : 'Legyen Partnerünk'}
                      </span>
                    </motion.button>
                  </Link>
                  
                  <Link href="/services">
                    <motion.button 
                      className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:border-white/60 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        {language === 'en' ? 'Explore Solutions' : 'Fedezze Fel Megoldásainkat'}
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyNavigation;
