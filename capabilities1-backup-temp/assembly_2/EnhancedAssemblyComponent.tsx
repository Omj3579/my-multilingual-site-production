import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Settings, Zap, CheckCircle, Award, TrendingUp, Play } from 'lucide-react';

const EnhancedAssemblyComponent = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // Move this hook outside the conditional block
  const topElementY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Auto-cycle through process steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Content from AssemblyComponent.md
  const content = {
    badge: {
      en: "Manufacturing",
      hu: "Gyártás"
    },
    title: {
      en: "Assembly",
      hu: "Összeszerelés"
    },
    description: {
      en: "Explore the essential assembly stage of the production process and ensure a seamless manufacturing operation with our specialized expertise.",
      hu: "Fedezze fel a gyártási folyamat alapvető összeszerelési szakaszát, és biztosítsa a zökkenőmentes gyártási műveletet szakértelmünkkel."
    },
    featureCards: [
      {
        title: {
          en: "Precision Assembly",
          hu: "Precíziós összeszerelés"
        },
        description: {
          en: "High-accuracy component assembly with stringent quality controls.",
          hu: "Nagy pontosságú alkatrész-összeszerelés szigorú minőségellenőrzéssel."
        },
        icon: Settings,
        color: "from-blue-100 to-indigo-100"
      },
      {
        title: {
          en: "Advanced Technology",
          hu: "Fejlett technológia"
        },
        description: {
          en: "State-of-the-art equipment for efficient and reliable assembly.",
          hu: "Csúcstechnológiás berendezések a hatékony és megbízható összeszereléshez."
        },
        icon: Zap,
        color: "from-purple-100 to-pink-100"
      }
    ],
    stats: [
      {
        value: "15+",
        label: {
          en: "Years Experience",
          hu: "Év tapasztalat"
        },
        icon: Award
      },
      {
        value: "99.7%",
        label: {
          en: "Quality Rate",
          hu: "Minőségi arány"
        },
        icon: TrendingUp
      }
    ],
    processSteps: {
      title: {
        en: "Our Assembly Process",
        hu: "Összeszerelési folyamatunk"
      },
      steps: [
        {
          en: "Component preparation",
          hu: "Alkatrész előkészítés"
        },
        {
          en: "Precision assembly",
          hu: "Precíziós összeszerelés"
        },
        {
          en: "Quality inspection",
          hu: "Minőségellenőrzés"
        }
      ]
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 overflow-hidden font-sans"
    >
      {/* Sophisticated Background Elements */}
      {isMounted && (
        <>
          <motion.div 
            className="absolute left-0 -bottom-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-50/40 to-indigo-50/40 blur-3xl"
            style={{ y: backgroundY }}
          />
          <motion.div 
            className="absolute right-0 top-20 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-amber-50/30 to-orange-50/30 blur-2xl"
            style={{ y: topElementY }}
          />
          
          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg width="100%" height="100%">
              <pattern id="assembly-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.4" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#assembly-grid)" />
            </svg>
          </div>
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          ref={viewRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start gap-16"
        >
          {/* Enhanced Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            {/* Badge */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50"
            >
              <Settings className="w-4 h-4 mr-2" />
              {content.badge[language]}
            </motion.span>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {content.title[language]}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {content.description[language]}
            </motion.p>

            {/* Feature Cards */}
            <div className="grid gap-6">
              {content.featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} group-hover:scale-110 transition-transform`}>
                      <card.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {card.title[language]}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {card.description[language]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/quote"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>{language === 'en' ? 'Request a quote' : 'Kérjen árajánlatot'}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href={language === 'en' ? '/capabilities/assembly/process' : '/kepessegek/osszszereles/folyamat'}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>{language === 'en' ? 'Learn more' : 'Tudj meg többet'}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Image & Stats */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <motion.img
                src="https://flair-plastic.hu/wp-content/uploads/2024/09/3-4.png"
                alt={language === 'en' ? 'Assembly Process' : 'Összeszerelési folyamat'}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ y: imageY }}
              />
              
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              
              {/* Stats Overlay */}
              <div className="absolute top-6 right-6 space-y-4">
                {content.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                        <stat.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600 font-medium">
                          {stat.label[language]}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process Steps Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {content.processSteps.title[language]}
              </h3>
              
              <div className="space-y-4">
                {content.processSteps.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-all duration-300 ${
                        activeStep === index
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                      animate={activeStep === index ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {index + 1}
                    </motion.div>
                    <span className={`font-medium transition-colors ${
                      activeStep === index ? 'text-blue-900' : 'text-gray-700'
                    }`}>
                      {step[language]}
                    </span>
                    {activeStep === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Process Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeStep + 1) / 3) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="text-center mt-2 text-sm text-gray-600">
                  {language === 'en' ? 'Process Progress' : 'Folyamat előrehaladása'}: {Math.round(((activeStep + 1) / 3) * 100)}%
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedAssemblyComponent;