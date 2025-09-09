import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Globe, TrendingUp, Shield, Leaf, Zap, Building, Target } from 'lucide-react';

const CompanyHighlights = () => {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: {
        en: 'ISO Certified Excellence',
        hu: 'ISO Tanúsított Kiválóság'
      },
      description: {
        en: 'ISO 9001:2015 and ISO 14001 certified for uncompromising quality and environmental standards.',
        hu: 'ISO 9001:2015 és ISO 14001 tanúsítás kompromisszumok nélküli minőségért és környezetvédelmi szabványokért.'
      },
      stat: {
        en: '99.8%',
        hu: '99.8%'
      },
      statLabel: {
        en: 'Quality Rate',
        hu: 'Minőségi Arány'
      },
      color: 'from-blue-500 to-cyan-400',
      bgGradient: 'from-blue-500/10 to-cyan-400/10'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: {
        en: 'Global Reach',
        hu: 'Globális Jelenlét'
      },
      description: {
        en: 'Serving clients across continents with reliable delivery and consistent excellence.',
        hu: 'Kontinenseken átívelő ügyfélkör kiszolgálása megbízható szállítással és következetes kiválósággal.'
      },
      stat: {
        en: '24+',
        hu: '24+'
      },
      statLabel: {
        en: 'Countries',
        hu: 'Ország'
      },
      color: 'from-purple-500 to-pink-400',
      bgGradient: 'from-purple-500/10 to-pink-400/10'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: {
        en: 'Three Decades of Innovation',
        hu: 'Három Évtized Innováció'
      },
      description: {
        en: 'Continuous evolution and advancement in precision plastic manufacturing technology.',
        hu: 'Folyamatos fejlődés és előrelépés a precíziós műanyag gyártási technológiában.'
      },
      stat: {
        en: '30+',
        hu: '30+'
      },
      statLabel: {
        en: 'Years Experience',
        hu: 'Év Tapasztalat'
      },
      color: 'from-green-500 to-emerald-400',
      bgGradient: 'from-green-500/10 to-emerald-400/10'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: {
        en: 'Expert Team',
        hu: 'Szakértő Csapat'
      },
      description: {
        en: 'Dedicated professionals passionate about innovation, quality, and exceeding expectations.',
        hu: 'Elkötelezett szakemberek, akik szenvedélyesen dolgoznak az innovációért, minőségért és elvárások túlteljesítéséért.'
      },
      stat: {
        en: '150+',
        hu: '150+'
      },
      statLabel: {
        en: 'Team Members',
        hu: 'Csapattag'
      },
      color: 'from-orange-500 to-red-400',
      bgGradient: 'from-orange-500/10 to-red-400/10'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: {
        en: 'Trusted Partnership',
        hu: 'Megbízható Partnerség'
      },
      description: {
        en: 'Long-term relationships built on trust, transparency, and mutual success.',
        hu: 'Hosszú távú kapcsolatok bizalomra, átláthatóságra és közös sikerre építve.'
      },
      stat: {
        en: '40+',
        hu: '40+'
      },
      statLabel: {
        en: 'Global Partners',
        hu: 'Globális Partner'
      },
      color: 'from-indigo-500 to-purple-400',
      bgGradient: 'from-indigo-500/10 to-purple-400/10'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: {
        en: 'Green Innovation Initiative',
        hu: 'Zöld Innovációs Kezdeményezés'
      },
      description: {
        en: 'Leading the future of sustainable manufacturing through renewable energy integration, advanced water management, and circular material flow systems.',
        hu: 'A fenntartható gyártás jövőjének vezetése megújuló energia integráció, fejlett vízgazdálkodás és körforgásos anyagáramlási rendszereken keresztül.'
      },
      stat: {
        en: '100%',
        hu: '100%'
      },
      statLabel: {
        en: 'Material Recovery',
        hu: 'Anyag-visszanyerés'
      },
      color: 'from-teal-500 to-green-400',
      bgGradient: 'from-teal-500/10 to-green-400/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
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
        duration: 0.8
      }
    }
  };

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-32 h-32 border border-blue-500/20 rotate-45"
          animate={{ rotate: [45, 405], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-24 h-24 border border-purple-500/20 rotate-12"
          animate={{ rotate: [12, 372], scale: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
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
              className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mx-auto"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(59, 130, 246, 0.3)",
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
              }}
            >
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-white/90">
                {language === 'en' ? 'Our Competitive Edge' : 'Versenyelőnyünk'}
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-blue-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
              {language === 'en' ? (
                <>
                  <motion.span 
                    className="block"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(59,130,246,0.5)",
                        "0 0 20px rgba(59,130,246,0.8)",
                        "0 0 10px rgba(59,130,246,0.5)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Why Choose
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Flair Plastic
                  </motion.span>
                </>
              ) : (
                <>
                  <motion.span 
                    className="block"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(59,130,246,0.5)",
                        "0 0 20px rgba(59,130,246,0.8)",
                        "0 0 10px rgba(59,130,246,0.5)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Miért Válassza
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    a Flair Plasticot
                  </motion.span>
                </>
              )}
            </h2>
            
            <motion.p 
              className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {language === 'en'
                ? 'Discover what sets us apart in the competitive world of precision manufacturing and why global leaders trust us with their most critical projects.'
                : 'Fedezze fel, mi különböztet meg minket a precíziós gyártás versenyző világában, és miért bíznak ránk a globális vezetők legkritikusabb projektjeiknél.'}
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Card Background with advanced glassmorphism */}
                <div className={`relative h-full p-8 bg-gradient-to-br ${highlight.bgGradient} backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden`}>
                  {/* Animated background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={hoveredCard === index ? {
                      opacity: [0.05, 0.15, 0.05],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-3xl" />
                  
                  {/* Icon with futuristic glow */}
                  <motion.div 
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} text-white flex items-center justify-center mb-6 shadow-lg`}
                    animate={hoveredCard === index ? {
                      boxShadow: [
                        "0 0 20px rgba(59,130,246,0.3)",
                        "0 0 40px rgba(59,130,246,0.6)",
                        "0 0 20px rgba(59,130,246,0.3)"
                      ],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {highlight.icon}
                    {/* Orbiting particle */}
                    <motion.div
                      className="absolute w-2 h-2 bg-white/80 rounded-full"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{
                        offsetPath: "circle(20px)",
                        offsetDistance: "0%"
                      }}
                    />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                      {highlight.title[language as keyof typeof highlight.title]}
                    </h3>
                    
                    <p className="text-white/70 mb-6 leading-relaxed text-sm group-hover:text-white/80 transition-colors duration-300">
                      {highlight.description[language as keyof typeof highlight.description]}
                    </p>
                    
                    {/* Stat Display */}
                    <div className="flex items-center justify-between">
                      <div>
                        <motion.div 
                          className={`text-3xl font-black bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}
                          animate={hoveredCard === index ? {
                            scale: [1, 1.1, 1]
                          } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          {highlight.stat[language as keyof typeof highlight.stat]}
                        </motion.div>
                        <div className="text-xs text-white/50 font-medium">
                          {highlight.statLabel[language as keyof typeof highlight.statLabel]}
                        </div>
                      </div>
                      
                      {/* Progress indicator */}
                      <motion.div 
                        className="relative w-12 h-12"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path
                            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="2"
                          />
                          <motion.path
                            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                            fill="none"
                            stroke={`url(#gradient-${index})`}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="75, 100"
                            animate={{ strokeDashoffset: [100, 0] }}
                            transition={{ duration: 2, delay: index * 0.2 }}
                          />
                          <defs>
                            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                              <stop offset="100%" stopColor="rgb(147, 51, 234)" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0 }}
                  animate={hoveredCard === index ? { 
                    opacity: 1,
                    boxShadow: "0 0 60px rgba(59,130,246,0.3)"
                  } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-20"
            variants={cardVariants}
          >
            <motion.div
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold shadow-2xl cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59,130,246,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Building className="w-5 h-5" />
              <span>
                {language === 'en' ? 'Discover Our Facilities' : 'Fedezze Fel Üzemeinket'}
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Target className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
