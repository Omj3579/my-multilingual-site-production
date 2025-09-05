import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Cog, 
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
  const isInView = useInView(viewRef);
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
      title: "Consumer Product",
      subtitle: "Assembly Excellence",
      description: "Our specialized assembly capabilities focus on household products, personal care items, toys, and everyday consumer goods, ensuring quality and efficiency at scale.",
      
      tabs: [
        {
          id: "household",
          label: "Household Products",
          icon: Cog,
          title: "Household Product Assembly",
          description: "Specialized assembly for cleaning tools, storage solutions, and kitchen accessories with focus on durability and user safety.",
          features: [
            "Multi-Component Integration",
            "Ergonomic Design Assembly",
            "Safety Testing Integration",
            "Quality Control Systems"
          ],
          metrics: {
            speed: "5000+ units/day",
            accuracy: "99.5%",
            efficiency: "Continuous operation"
          }
        },
        {
          id: "personal-care",
          label: "Personal Care",
          icon: Eye,
          title: "Personal Care & Hygiene Products",
          description: "Assembly of cosmetic containers, hygiene products, and personal care accessories meeting strict safety standards.",
          features: [
            "Hygienic Assembly Environments",
            "Precision Component Fitting",
            "Leak Testing Systems",
            "Cosmetic Grade Finishing"
          ],
          metrics: {
            tolerance: "±0.1mm",
            accuracy: "99.8%",
            resolution: "Food-grade quality"
          }
        },
        {
          id: "packaging",
          label: "Packaging",
          icon: Shield,
          title: "Food & Beverage Packaging",
          description: "Assembly of caps, closures, and packaging components for food safety and extended shelf life.",
          features: [
            "Food-Safe Assembly",
            "Tamper-Evident Features",
            "Leak Prevention Testing",
            "Regulatory Compliance"
          ],
          metrics: {
            defects: "<0.2%",
            testing: "100% leak testing",
            compliance: "FDA approved"
          }
        },
        {
          id: "toys",
          label: "Toys & Education",
          icon: Layers,
          title: "Toys & Educational Products",
          description: "Safe assembly of children's products meeting international toy safety standards and educational requirements.",
          features: [
            "Child Safety Compliance",
            "Age-Appropriate Assembly",
            "Durability Testing",
            "Non-Toxic Materials"
          ],
          metrics: {
            compatibility: "CE/CPSIA compliant",
            integration: "Age-tested",
            performance: "Safety optimized"
          }
        }
      ],

      processSteps: [
        { title: "Component Preparation", duration: 20, status: "completed" },
        { title: "Quality Inspection", duration: 15, status: "active" },
        { title: "Assembly Process", duration: 40, status: "pending" },
        { title: "Function Testing", duration: 15, status: "pending" },
        { title: "Final Packaging", duration: 10, status: "pending" }
      ]
    },
    hu: {
      badge: "Alapvető Képességek",
      title: "Fogyasztói Termék",
      subtitle: "Összeszerelési Kiválóság",
      description: "Specializált összeszerelési képességeink háztartási termékekre, személyes ápolási cikkekre, játékokra és mindennapi fogyasztói javakra összpontosítanak, biztosítva a minőséget és hatékonyságot nagy léptékben.",
      
      tabs: [
        {
          id: "household",
          label: "Háztartási Termékek",
          icon: Cog,
          title: "Háztartási Termék Összeszerelés",
          description: "Specializált összeszerelés tisztítószerekhez, tárolási megoldásokhoz és konyhai kiegészítőkhöz, a tartósságra és felhasználói biztonságra összpontosítva.",
          features: [
            "Többkomponensű Integráció",
            "Ergonomikus Tervezés Összeszerelés",
            "Biztonsági Tesztelés Integráció",
            "Minőségkontroll Rendszerek"
          ],
          metrics: {
            speed: "5000+ egység/nap",
            accuracy: "99,5%",
            efficiency: "Folyamatos működés"
          }
        },
        {
          id: "personal-care",
          label: "Személyes Ápolás",
          icon: Eye,
          title: "Személyes Ápolási és Higiéniai Termékek",
          description: "Kozmetikai tárolók, higiéniai termékek és személyes ápolási kiegészítők összeszerelése szigorú biztonsági szabványoknak megfelelően.",
          features: [
            "Higiénikus Összeszerelési Környezetek",
            "Precíziós Komponens Illesztés",
            "Szivárgás Tesztelési Rendszerek",
            "Kozmetikai Minőségű Kikészítés"
          ],
          metrics: {
            tolerance: "±0,1mm",
            accuracy: "99,8%",
            resolution: "Élelmiszeripari minőség"
          }
        },
        {
          id: "packaging",
          label: "Csomagolás",
          icon: Shield,
          title: "Élelmiszer és Ital Csomagolás",
          description: "Kupakók, záróelemek és csomagolási komponensek összeszerelése az élelmiszerbiztonság és meghosszabbított eltarthatóság érdekében.",
          features: [
            "Élelmiszeripari Biztonságú Összeszerelés",
            "Hamisítás-biztos Funkciók",
            "Szivárgásmegelőzési Tesztelés",
            "Szabályozási Megfelelőség"
          ],
          metrics: {
            defects: "<0,2%",
            testing: "100% szivárgás teszt",
            compliance: "FDA jóváhagyott"
          }
        },
        {
          id: "toys",
          label: "Játékok és Oktatás",
          icon: Layers,
          title: "Játékok és Oktatási Termékek",
          description: "Gyermekek termékeinek biztonságos összeszerelése, amelyek megfelelnek a nemzetközi játékbiztonsági szabványoknak és oktatási követelményeknek.",
          features: [
            "Gyermekbiztonsági Megfelelőség",
            "Életkor-megfelelő Összeszerelés",
            "Tartóssági Tesztelés",
            "Nem Toxikus Anyagok"
          ],
          metrics: {
            compatibility: "CE/CPSIA megfelelő",
            integration: "Életkor-tesztelt",
            performance: "Biztonság optimalizált"
          }
        }
      ],

      processSteps: [
        { title: "Komponens Előkészítés", duration: 20, status: "completed" },
        { title: "Minőségi Ellenőrzés", duration: 15, status: "active" },
        { title: "Összeszerelési Folyamat", duration: 40, status: "pending" },
        { title: "Funkció Tesztelés", duration: 15, status: "pending" },
        { title: "Végső Csomagolás", duration: 10, status: "pending" }      ]
    },
    de: {
      badge: "Kernkompetenzen",
      title: "Verbraucherprodukt",
      subtitle: "Montage-Exzellenz",
      description: "Unsere spezialisierten Montagefähigkeiten konzentrieren sich auf Haushaltsprodukte, Körperpflegeartikel, Spielzeug und alltägliche Verbrauchsgüter und gewährleisten Qualität und Effizienz im großen Maßstab.",
      
      tabs: [
        {
          id: "household",
          label: "Haushaltsprodukte",
          icon: Cog,
          title: "Haushaltsprodukt-Montage",
          description: "Spezialisierte Montage für Reinigungsgeräte, Aufbewahrungslösungen und Küchenzubehör mit Fokus auf Langlebigkeit und Benutzersicherheit.",
          features: [
            "Multi-Komponenten-Integration",
            "Ergonomische Design-Montage",
            "Sicherheitstest-Integration",
            "Qualitätskontrollsysteme"
          ],
          metrics: {
            speed: "5000+ Einheiten/Tag",
            accuracy: "99,5%",
            efficiency: "Kontinuierlicher Betrieb"
          }
        },
        {
          id: "personal-care",
          label: "Körperpflege",
          icon: Eye,
          title: "Körperpflege & Hygieneartikel",
          description: "Montage von Kosmetikbehältern, Hygieneprodukten und Körperpflegezubehör nach strengen Sicherheitsstandards.",
          features: [
            "Hygienische Montageumgebungen",
            "Präzisions-Komponentenanpassung",
            "Leckage-Testsysteme",
            "Kosmetik-Qualitäts-Finish"
          ],
          metrics: {
            tolerance: "±0,1mm",
            accuracy: "99,8%",
            resolution: "Lebensmittelqualität"
          }
        },
        {
          id: "packaging",
          label: "Verpackung",
          icon: Shield,
          title: "Lebensmittel- & Getränkeverpackung",
          description: "Montage von Kappen, Verschlüssen und Verpackungskomponenten für Lebensmittelsicherheit und verlängerte Haltbarkeit.",
          features: [
            "Lebensmittelsichere Montage",
            "Manipulationssichere Funktionen",
            "Leckage-Präventionstest",
            "Behördliche Compliance"
          ],
          metrics: {
            defects: "<0,2%",
            testing: "100% Leckage-Test",
            compliance: "FDA-zertifiziert"
          }
        },
        {
          id: "toys",
          label: "Spielzeug & Bildung",
          icon: Layers,
          title: "Spielzeug & Bildungsprodukte",
          description: "Sichere Montage von Kinderprodukten nach internationalen Spielzeugsicherheitsstandards und Bildungsanforderungen.",
          features: [
            "Kindersicherheits-Compliance",
            "Altersgerechte Montage",
            "Haltbarkeitstests",
            "Ungiftige Materialien"
          ],
          metrics: {
            compatibility: "CE/CPSIA-konform",
            integration: "Altersgetestet",
            performance: "Sicherheitsoptimiert"
          }
        }
      ],

      processSteps: [
        { title: "Komponentenvorbereitung", duration: 20, status: "completed" },
        { title: "Qualitätsprüfung", duration: 15, status: "active" },
        { title: "Montageprozess", duration: 40, status: "pending" },
        { title: "Funktionstest", duration: 15, status: "pending" },
        { title: "Endverpackung", duration: 10, status: "pending" }
      ]
    }
  };

  const content = capabilitiesContent[language as keyof typeof capabilitiesContent];
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
                      <div className="flex space-x-2">                        <button
                          onClick={() => setIsProcessRunning(!isProcessRunning)}
                          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                          title={isProcessRunning ? (language === 'en' ? 'Pause Process' : 'Prozess pausieren') : (language === 'en' ? 'Start Process' : 'Prozess starten')}
                        >
                          {isProcessRunning ? <Pause size={16} /> : <Play size={16} />}
                        </button>
                        <button 
                          className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                          title={language === 'en' ? 'Reset Process' : 'Prozess zurücksetzen'}
                        >
                          <RotateCcw size={16} />
                        </button>
                        <button 
                          className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                          title={language === 'en' ? 'Settings' : 'Einstellungen'}
                        >
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