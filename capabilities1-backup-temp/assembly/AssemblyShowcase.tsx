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
  ChevronLeft,
  ChevronRight,
  Play,
  Maximize2,
  Download,
  Share2,
  Star,
  Award,
  TrendingUp,
  Users,
  Clock,
  Target,
  Wrench,
  Settings,
  CheckCircle,
  BarChart3,
  Lightbulb
} from 'lucide-react';

const AssemblyShowcase = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Comprehensive content from original assembly components
  const showcaseContent = {
    en: {
      badge: "Assembly Excellence",
      title: "Complete Assembly",
      subtitle: "Solutions Portfolio",
      description: "From concept to completion, our comprehensive assembly services deliver precision-engineered solutions for complex manufacturing challenges across diverse industries.",
      
      // Main assembly services from original components
      services: [
        {
          id: "electronic",
          title: "Electronic Assembly",
          subtitle: "Precision Electronics Manufacturing",
          description: "State-of-the-art electronic assembly services including PCB assembly, component mounting, and complex electronic system integration with microscopic precision.",
          image: "/images/electronic-assembly.jpg",
          features: [
            "Surface Mount Technology (SMT)",
            "Through-Hole Assembly",
            "Mixed Technology Assembly",
            "Automated Optical Inspection (AOI)",
            "In-Circuit Testing (ICT)",
            "Functional Testing"
          ],
          specifications: {
            "Component Size": "0201 and larger",
            "PCB Thickness": "0.4mm - 6.4mm",
            "Accuracy": "±25μm placement",
            "Capacity": "50M+ components/month"
          },
          industries: ["Automotive", "Medical", "Aerospace", "Consumer Electronics"],
          certifications: ["IPC-A-610", "ISO 9001", "ISO 13485"]
        },
        {
          id: "mechanical",
          title: "Mechanical Assembly",
          subtitle: "Precision Mechanical Integration",
          description: "Expert mechanical assembly services combining traditional craftsmanship with modern automation for complex mechanical systems and precision machinery.",
          image: "/images/mechanical-assembly.jpg",
          features: [
            "Precision Machining Integration",
            "Multi-Component Assembly",
            "Torque-Controlled Fastening",
            "Dimensional Verification",
            "Performance Testing",
            "Custom Fixturing"
          ],
          specifications: {
            "Tolerance": "±0.005mm",
            "Assembly Size": "Micro to 5m+",
            "Materials": "All industrial materials",
            "Capacity": "1000+ units/day"
          },
          industries: ["Industrial Equipment", "Automation", "Robotics", "Heavy Machinery"],
          certifications: ["ISO 9001", "AS9100", "IATF 16949"]
        },
        {
          id: "hybrid",
          title: "Hybrid Assembly",
          subtitle: "Electro-Mechanical Integration",
          description: "Seamless integration of electronic and mechanical components into unified, high-performance systems requiring both electrical and mechanical expertise.",
          image: "/images/hybrid-assembly.jpg",
          features: [
            "Electro-Mechanical Integration",
            "Cable Harness Assembly",
            "Sensor Integration",
            "Control System Assembly",
            "Environmental Sealing",
            "System Calibration"
          ],
          specifications: {
            "Integration Complexity": "Multi-domain",
            "Environmental Rating": "IP67+",
            "Operating Temperature": "-40°C to +125°C",
            "Reliability": "MTBF >100k hours"
          },
          industries: ["Automotive", "Defense", "Medical Devices", "Industrial IoT"],
          certifications: ["IPC-WHMA-A-620", "ISO 14001", "RoHS Compliance"]
        },
        {
          id: "custom",
          title: "Custom Assembly",
          subtitle: "Tailored Manufacturing Solutions",
          description: "Bespoke assembly solutions designed and optimized for unique customer requirements, incorporating specialized processes and advanced technologies.",
          image: "/images/custom-assembly.jpg",
          features: [
            "Custom Process Development",
            "Specialized Equipment Design",
            "Prototype to Production",
            "Advanced Materials Handling",
            "Unique Testing Protocols",
            "Regulatory Compliance"
          ],
          specifications: {
            "Customization Level": "100% tailored",
            "Development Time": "2-12 weeks",
            "Scalability": "1 to 1M+ units",
            "Complexity": "Ultra-high precision"
          },
          industries: ["Aerospace", "Research", "Medical", "Defense"],
          certifications: ["Customer-Specific", "Regulatory Compliant"]
        }
      ],

      // Key capabilities from original content
      capabilities: [
        {
          icon: Cog,
          title: "Advanced Automation",
          description: "Robotic assembly lines with AI-powered quality control",
          metric: "300% faster"
        },
        {
          icon: Eye,
          title: "Precision Engineering",
          description: "Microscopic tolerances with laser-guided positioning",
          metric: "±0.001mm"
        },
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "Comprehensive testing at every assembly stage",
          metric: "99.8% accuracy"
        },
        {
          icon: Zap,
          title: "Rapid Delivery",
          description: "Accelerated production with 24/7 operations",
          metric: "2x faster"
        },
        {
          icon: Layers,
          title: "Complex Integration",
          description: "Multi-technology systems seamlessly unified",
          metric: "99.9% compatibility"
        },
        {
          icon: Award,
          title: "Industry Leadership",
          description: "Certified processes meeting global standards",
          metric: "ISO certified"
        }
      ],

      // Process excellence from original content
      processExcellence: {
        title: "Assembly Process Excellence",
        subtitle: "Systematic approach to manufacturing perfection",
        stages: [
          {
            phase: "Design Review",
            description: "Comprehensive analysis of assembly requirements and optimization opportunities",
            duration: "1-2 weeks",
            deliverables: ["DFM Analysis", "Process Plan", "Quality Metrics"]
          },
          {
            phase: "Prototype Development", 
            description: "Rapid prototyping and validation of assembly processes and quality standards",
            duration: "2-4 weeks",
            deliverables: ["Prototype Units", "Process Validation", "Quality Reports"]
          },
          {
            phase: "Production Setup",
            description: "Full-scale production line configuration with automated quality systems",
            duration: "1-3 weeks", 
            deliverables: ["Production Line", "Quality Systems", "Training Materials"]
          },
          {
            phase: "Volume Production",
            description: "High-volume manufacturing with continuous monitoring and improvement",
            duration: "Ongoing",
            deliverables: ["Finished Products", "Quality Reports", "Performance Analytics"]
          }
        ]
      }
    },
    hu: {
      badge: "Összeszerelési Kiválóság",
      title: "Teljes Összeszerelési",
      subtitle: "Megoldások Portfóliója",
      description: "A koncepciótól a befejezésig, átfogó összeszerelési szolgáltatásaink precíziós mérnöki megoldásokat nyújtanak összetett gyártási kihívásokra különböző iparágakban.",
      
      services: [
        {
          id: "electronic",
          title: "Elektronikai Összeszerelés",
          subtitle: "Precíziós Elektronikai Gyártás",
          description: "Élvonalbeli elektronikai összeszerelési szolgáltatások, beleértve a PCB összeszerelést, komponens szerelést és összetett elektronikai rendszer integrációt mikroszkopikus precizitással.",
          image: "/images/electronic-assembly.jpg",
          features: [
            "Felületszerelési Technológia (SMT)",
            "Furatszerelési Technológia",
            "Vegyes Technológiás Összeszerelés",
            "Automatizált Optikai Ellenőrzés (AOI)",
            "Áramköri Tesztelés (ICT)",
            "Funkcionális Tesztelés"
          ],
          specifications: {
            "Komponens Méret": "0201 és nagyobb",
            "PCB Vastagság": "0,4mm - 6,4mm",
            "Pontosság": "±25μm elhelyezés",
            "Kapacitás": "50M+ komponens/hónap"
          },
          industries: ["Autóipar", "Orvosi", "Légiközlekedés", "Fogyasztói Elektronika"],
          certifications: ["IPC-A-610", "ISO 9001", "ISO 13485"]
        },
        {
          id: "mechanical",
          title: "Mechanikai Összeszerelés",
          subtitle: "Precíziós Mechanikai Integráció",
          description: "Szakértői mechanikai összeszerelési szolgáltatások, amelyek a hagyományos kézművességet modern automatizálással kombinálják összetett mechanikai rendszerekhez és precíziós gépekhez.",
          image: "/images/mechanical-assembly.jpg",
          features: [
            "Precíziós Megmunkálási Integráció",
            "Többkomponensű Összeszerelés",
            "Nyomatékvezérelt Rögzítés",
            "Méret Ellenőrzés",
            "Teljesítmény Tesztelés",
            "Egyedi Befogás"
          ],
          specifications: {
            "Tűrés": "±0,005mm",
            "Összeszerelési Méret": "Mikrotól 5m+-ig",
            "Anyagok": "Minden ipari anyag",
            "Kapacitás": "1000+ egység/nap"
          },
          industries: ["Ipari Berendezések", "Automatizálás", "Robotika", "Nehézgépészet"],
          certifications: ["ISO 9001", "AS9100", "IATF 16949"]
        },
        {
          id: "hybrid",
          title: "Hibrid Összeszerelés",
          subtitle: "Elektro-Mechanikai Integráció",
          description: "Elektronikai és mechanikai komponensek zökkenőmentes integrációja egységes, nagy teljesítményű rendszerekbe, amelyek elektromos és mechanikai szakértelmet igényelnek.",
          image: "/images/hybrid-assembly.jpg",
          features: [
            "Elektro-Mechanikai Integráció",
            "Kábelköteg Összeszerelés",
            "Szenzor Integráció",
            "Vezérlőrendszer Összeszerelés",
            "Környezeti Tömítés",
            "Rendszer Kalibrálás"
          ],
          specifications: {
            "Integrációs Komplexitás": "Multi-domain",
            "Környezeti Minősítés": "IP67+",
            "Működési Hőmérséklet": "-40°C - +125°C",
            "Megbízhatóság": "MTBF >100k óra"
          },
          industries: ["Autóipar", "Védelmi", "Orvosi Eszközök", "Ipari IoT"],
          certifications: ["IPC-WHMA-A-620", "ISO 14001", "RoHS Megfelelőség"]
        },
        {
          id: "custom",
          title: "Egyedi Összeszerelés",
          subtitle: "Testreszabott Gyártási Megoldások",
          description: "Egyedi összeszerelési megoldások tervezve és optimalizálva egyedi ügyfél követelményekhez, speciális folyamatokat és fejlett technológiákat beépítve.",
          image: "/images/custom-assembly.jpg",
          features: [
            "Egyedi Folyamatfejlesztés",
            "Speciális Berendezés Tervezés",
            "Prototípustól Gyártásig",
            "Fejlett Anyagkezelés",
            "Egyedi Tesztelési Protokollok",
            "Szabályozási Megfelelőség"
          ],
          specifications: {
            "Testreszabási Szint": "100% egyedi",
            "Fejlesztési Idő": "2-12 hét",
            "Skálázhatóság": "1-tól 1M+ egységig",
            "Komplexitás": "Ultra-nagy precizitás"
          },
          industries: ["Légiközlekedés", "Kutatás", "Orvosi", "Védelmi"],
          certifications: ["Ügyfél-Specifikus", "Szabályozási Megfelelő"]
        }
      ],

      capabilities: [
        {
          icon: Cog,
          title: "Fejlett Automatizálás",
          description: "Robotikus összeszerelő sorok AI-vezérelt minőségellenőrzéssel",
          metric: "300%-kal gyorsabb"
        },
        {
          icon: Eye,
          title: "Precíziós Mérnöki Munka",
          description: "Mikroszkopikus tűrések lézervezetéses pozicionálással",
          metric: "±0,001mm"
        },
        {
          icon: Shield,
          title: "Minőségbiztosítás",
          description: "Átfogó tesztelés minden összeszerelési szakaszban",
          metric: "99,8% pontosság"
        },
        {
          icon: Zap,
          title: "Gyors Szállítás",
          description: "Gyorsított termelés 24/7 működéssel",
          metric: "2x gyorsabb"
        },
        {
          icon: Layers,
          title: "Összetett Integráció",
          description: "Multi-technológiás rendszerek zökkenőmentesen egyesítve",
          metric: "99,9% kompatibilitás"
        },
        {
          icon: Award,
          title: "Iparági Vezetés",
          description: "Tanúsított folyamatok globális szabványoknak megfelelően",
          metric: "ISO tanúsított"
        }
      ],

      processExcellence: {
        title: "Összeszerelési Folyamat Kiválóság",
        subtitle: "Szisztematikus megközelítés a gyártási tökéletességhez",
        stages: [
          {
            phase: "Tervezési Felülvizsgálat",
            description: "Összeszerelési követelmények és optimalizálási lehetőségek átfogó elemzése",
            duration: "1-2 hét",
            deliverables: ["DFM Elemzés", "Folyamatterv", "Minőségi Mutatók"]
          },
          {
            phase: "Prototípus Fejlesztés",
            description: "Gyors prototípus készítés és összeszerelési folyamatok validálása",
            duration: "2-4 hét", 
            deliverables: ["Prototípus Egységek", "Folyamat Validálás", "Minőségi Jelentések"]
          },
          {
            phase: "Termelési Beállítás",
            description: "Teljes körű termelési sor konfiguráció automatizált minőségi rendszerekkel",
            duration: "1-3 hét",
            deliverables: ["Termelési Sor", "Minőségi Rendszerek", "Képzési Anyagok"]
          },
          {
            phase: "Nagyvolumenű Termelés",
            description: "Nagy volumenű gyártás folyamatos monitorozással és fejlesztéssel",
            duration: "Folyamatos",
            deliverables: ["Késztermékek", "Minőségi Jelentések", "Teljesítmény Analitika"]
          }
        ]
      }
    }
  };

  const content = showcaseContent[language];
  const activeService = content.services[activeShowcase];

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

  const nextShowcase = () => {
    setActiveShowcase((prev) => (prev + 1) % content.services.length);
  };

  const prevShowcase = () => {
    setActiveShowcase((prev) => (prev - 1 + content.services.length) % content.services.length);
  };

  return (
    <div ref={containerRef} className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50 mb-6">
                <Wrench size={16} className="mr-2" />
                {content.badge}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {content.title}
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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

          {/* Interactive Service Showcase */}
          <motion.div variants={itemVariants} className="relative">
            {/* Service Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
                <button
                  onClick={prevShowcase}
                  className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex space-x-2">
                  {content.services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveShowcase(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeShowcase 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-gray-300 hover:bg-blue-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextShowcase}
                  className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Main Showcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShowcase}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Service Content */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                          <Cog size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {activeService.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-medium">
                            {activeService.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {activeService.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {activeService.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50"
                        >
                          <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Specifications */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {language === 'en' ? 'Technical Specifications' : 'Műszaki Specifikációk'}
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {Object.entries(activeService.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium text-gray-600">{key}</span>
                            <span className="text-sm font-bold text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Industries & Certifications */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-3">
                          {language === 'en' ? 'Industries Served' : 'Kiszolgált Iparágak'}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {activeService.industries.map((industry) => (
                            <span key={industry} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-3">
                          {language === 'en' ? 'Certifications' : 'Tanúsítványok'}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {activeService.certifications.map((cert) => (
                            <span key={cert} className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Showcase */}
                  <motion.div 
                    className="relative"
                    style={{ y: imageY }}
                  >
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
                      {/* Assembly Process Visualization */}
                      <div className="space-y-6 text-white">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold">
                            {language === 'en' ? 'Live Assembly Monitor' : 'Élő Összeszerelés Monitor'}
                          </h4>
                          <div className="flex space-x-2">
                            <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                              <Play size={16} />
                            </button>
                            <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
                              <Maximize2 size={16} />
                            </button>
                            <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
                              <Share2 size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Real-time Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-gray-800/50 rounded-lg">
                            <div className="text-2xl font-bold text-green-400">98.7%</div>
                            <div className="text-sm text-gray-400">
                              {language === 'en' ? 'Efficiency' : 'Hatékonyság'}
                            </div>
                          </div>
                          <div className="p-4 bg-gray-800/50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-400">247</div>
                            <div className="text-sm text-gray-400">
                              {language === 'en' ? 'Units/Hour' : 'Egység/Óra'}
                            </div>
                          </div>
                        </div>

                        {/* Assembly Progress */}
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">
                                {step}
                              </div>
                              <div className="flex-1">
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: step <= 2 ? '100%' : step === 3 ? '60%' : '0%' }}
                                    transition={{ delay: step * 0.2, duration: 1 }}
                                  />
                                </div>
                              </div>
                              <span className="text-xs text-gray-400">
                                {step <= 2 ? '100%' : step === 3 ? '60%' : '0%'}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Status */}
                        <div className="flex items-center justify-between p-3 bg-green-900/30 rounded-lg border border-green-600/30">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-green-400 font-medium">
                              {language === 'en' ? 'System Operational' : 'Rendszer Működik'}
                            </span>
                          </div>
                          <span className="text-green-400 font-bold">ACTIVE</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Action Buttons */}
                    <motion.button
                      className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg text-white"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Download size={20} />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Capabilities Overview */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Core Assembly Capabilities' : 'Alapvető Összeszerelési Képességek'}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === index 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-110' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      <capability.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {capability.title}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                        {capability.metric}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Animated progress bar */}
                  <motion.div 
                    className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : { width: 0 }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 1.5, ease: "easeOut" }}
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
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'Request Assembly Quote' : 'Összeszerelési Árajánlat Kérése'}
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

export default AssemblyShowcase;