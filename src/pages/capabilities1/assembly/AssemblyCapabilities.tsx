import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Cog, 
  Zap, 
  Shield, 
  Cpu, 
  Eye, 
  Layers,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Settings,
  CheckCircle2,
  Activity
} from 'lucide-react';

const AssemblyCapabilities = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { threshold: 0.2, triggerOnce: true });
  const [activeTab, setActiveTab] = useState(0);
  const [isProcessRunning, setIsProcessRunning] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  const capabilitiesContent = {
    en: {
      badge: "Core Capabilities",
      title: "Advanced Assembly",
      subtitle: "Technologies",
      description: "Our state-of-the-art assembly capabilities combine precision engineering with cutting-edge automation to deliver unparalleled manufacturing excellence.",
      
      tabs: [
        {
          id: "automation",
          label: "Automation",
          icon: Cog,
          title: "Intelligent Automation Systems",
          description: "AI-powered robotics and automated assembly lines ensuring consistent quality and efficiency.",
          features: [
            "Robotic Assembly Arms",
            "Vision-Guided Systems",
            "Quality Control Integration",
            "Real-time Monitoring"
          ],
          metrics: {
            speed: "300% faster",
            accuracy: "99.8%",
            efficiency: "24/7 operation"
          }
        },
        {
          id: "precision",
          label: "Precision",
          icon: Eye,
          title: "Micro-Precision Engineering",
          description: "Advanced measurement and positioning systems achieving microscopic tolerances.",
          features: [
            "Laser Measurement",
            "Nano-positioning",
            "Surface Inspection",
            "Dimensional Analysis"
          ],
          metrics: {
            tolerance: "±0.001mm",
            accuracy: "99.95%",
            resolution: "Sub-micron"
          }
        },
        {
          id: "quality",
          label: "Quality",
          icon: Shield,
          title: "Comprehensive Quality Assurance",
          description: "Multi-layer quality control systems ensuring every component meets stringent standards.",
          features: [
            "In-line Testing",
            "Statistical Analysis",
            "Defect Prevention",
            "Certification Tracking"
          ],
          metrics: {
            defects: "<0.1%",
            testing: "100% coverage",
            compliance: "ISO certified"
          }
        },
        {
          id: "integration",
          label: "Integration",
          icon: Layers,
          title: "Seamless System Integration",
          description: "Harmonious integration of diverse technologies into unified, high-performance systems.",
          features: [
            "Multi-technology Fusion",
            "Interface Optimization",
            "Protocol Standardization",
            "Performance Validation"
          ],
          metrics: {
            compatibility: "99.9%",
            integration: "Seamless",
            performance: "Optimized"
          }
        }
      ],

      processSteps: [
        { title: "Design Analysis", duration: 15, status: "completed" },
        { title: "Component Preparation", duration: 25, status: "active" },
        { title: "Precision Assembly", duration: 40, status: "pending" },
        { title: "Quality Verification", duration: 15, status: "pending" },
        { title: "Final Testing", duration: 5, status: "pending" }
      ]
    },
    hu: {
      badge: "Alapvető Képességek",
      title: "Fejlett Összeszerelési",
      subtitle: "Technológiák",
      description: "Élvonalbeli összeszerelési képességeink a precíziós mérnöki munkát a legmodernebb automatizálással kombinálják, hogy páratlan gyártási kiválóságot nyújtsanak.",
      
      tabs: [
        {
          id: "automation",
          label: "Automatizálás",
          icon: Cog,
          title: "Intelligens Automatizálási Rendszerek",
          description: "AI-vezérelt robotika és automatizált összeszerelő sorok következetes minőség és hatékonyság biztosítására.",
          features: [
            "Robotikus Összeszerelő Karok",
            "Látás-vezérelt Rendszerek",
            "Minőségkontroll Integráció",
            "Valós idejű Monitoring"
          ],
          metrics: {
            speed: "300%-kal gyorsabb",
            accuracy: "99,8%",
            efficiency: "24/7 működés"
          }
        },
        {
          id: "precision",
          label: "Precizitás",
          icon: Eye,
          title: "Mikro-precíziós Mérnöki Munka",
          description: "Fejlett mérési és pozicionálási rendszerek mikroszkopikus tűrések elérésére.",
          features: [
            "Lézeres Mérés",
            "Nano-pozicionálás",
            "Felületi Vizsgálat",
            "Méretanalízis"
          ],
          metrics: {
            tolerance: "±0,001mm",
            accuracy: "99,95%",
            resolution: "Szub-mikron"
          }
        },
        {
          id: "quality",
          label: "Minőség",
          icon: Shield,
          title: "Átfogó Minőségbiztosítás",
          description: "Többrétegű minőségellenőrzési rendszerek biztosítják, hogy minden komponens megfeleljen a szigorú szabványoknak.",
          features: [
            "Soron Belüli Tesztelés",
            "Statisztikai Elemzés",
            "Hibamegelőzés",
            "Tanúsítványkövetés"
          ],
          metrics: {
            defects: "<0,1%",
            testing: "100% lefedettség",
            compliance: "ISO tanúsított"
          }
        },
        {
          id: "integration",
          label: "Integráció",
          icon: Layers,
          title: "Zökkenőmentes Rendszerintegráció",
          description: "Különböző technológiák harmonikus integrálása egységes, nagy teljesítményű rendszerekbe.",
          features: [
            "Multi-technológia Fúzió",
            "Interface Optimalizálás",
            "Protokoll Standardizálás",
            "Teljesítmény Validálás"
          ],
          metrics: {
            compatibility: "99,9%",
            integration: "Zökkenőmentes",
            performance: "Optimalizált"
          }
        }
      ],

      processSteps: [
        { title: "Tervezési Elemzés", duration: 15, status: "completed" },
        { title: "Komponens Előkészítés", duration: 25, status: "active" },
        { title: "Precíziós Összeszerelés", duration: 40, status: "pending" },
        { title: "Minőségi Ellenőrzés", duration: 15, status: "pending" },
        { title: "Végső Tesztelés", duration: 5, status: "pending" }
      ]
    }
  };

  const content = capabilitiesContent[language];
  const activeTabContent = content.tabs[activeTab];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div ref={containerRef} className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200/50 mb-6">
                <Cpu size={16} className="mr-2" />
                {content.badge}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {content.title}
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
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

          {/* Interactive Tabs */}
          <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-gray-100/80 rounded-2xl">
              {content.tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {activeTabContent.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {activeTabContent.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {activeTabContent.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-6">
                    {Object.entries(activeTabContent.metrics).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50"
                      >
                        <div className="text-xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Interactive Visualization */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-2xl">
                    {/* Control Panel */}
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-semibold">
                        {language === 'en' ? 'Assembly Process Monitor' : 'Összeszerelési Folyamat Monitor'}
                      </h4>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setIsProcessRunning(!isProcessRunning)}
                          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                        >
                          {isProcessRunning ? <Pause size={16} /> : <Play size={16} />}
                        </button>
                        <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
                          <RotateCcw size={16} />
                        </button>
                        <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
                          <Settings size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Process Steps */}
                    <div className="space-y-4">
                      {content.processSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            step.status === 'completed' ? 'bg-green-600' :
                            step.status === 'active' ? 'bg-blue-600' : 'bg-gray-600'
                          }`}>
                            {step.status === 'completed' ? (
                              <CheckCircle2 size={16} />
                            ) : step.status === 'active' ? (
                              <Activity size={16} className="animate-pulse" />
                            ) : (
                              <span className="text-xs font-bold">{index + 1}</span>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium">{step.title}</span>
                              <span className="text-sm text-gray-400">{step.duration}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full ${
                                  step.status === 'completed' ? 'bg-green-600' :
                                  step.status === 'active' ? 'bg-blue-600' : 'bg-gray-600'
                                }`}
                                initial={{ width: 0 }}
                                animate={{ 
                                  width: step.status === 'completed' ? '100%' : 
                                         step.status === 'active' ? '60%' : '0%'
                                }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Status Indicator */}
                    <div className="mt-6 flex items-center justify-between p-4 bg-blue-900/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="font-medium">
                          {language === 'en' ? 'System Operational' : 'Rendszer Működik'}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">
                          {language === 'en' ? 'Efficiency' : 'Hatékonyság'}
                        </div>
                        <div className="text-lg font-bold text-green-400">98.7%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'See Our Technology in Action' : 'Tekintse Meg Technológiánkat Működés Közben'}
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

export default AssemblyCapabilities;