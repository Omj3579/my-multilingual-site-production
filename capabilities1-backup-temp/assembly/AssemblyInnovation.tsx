import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Lightbulb, 
  Cpu, 
  Zap, 
  Shield, 
  Eye,
  Rocket,
  Brain,
  Atom,
  Microscope,
  Cog,
  TrendingUp,
  Award,
  Target,
  Layers,
  ArrowRight,
  ChevronDown,
  Play,
  Calendar,
  Users,
  BarChart3,
  Sparkles,
  Globe,
  CheckCircle2,
  Clock
} from 'lucide-react';

const AssemblyInnovation = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const timelineY = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);
  
  // Innovation timeline and breakthrough content
  const innovationContent = {
    en: {
      badge: "Innovation Excellence",
      title: "Pioneering Assembly",
      subtitle: "Technologies",
      description: "Leading the industry through continuous innovation, breakthrough technologies, and revolutionary approaches to precision assembly manufacturing.",
      
      // Innovation timeline with major breakthroughs
      timeline: [
        {
          year: "2020",
          title: "AI-Powered Quality Control",
          category: "Artificial Intelligence",
          icon: Brain,
          description: "Revolutionized quality control with machine learning algorithms that predict and prevent defects in real-time.",
          impact: "99.8% quality accuracy",
          technologies: ["Computer Vision", "Machine Learning", "Predictive Analytics"],
          results: [
            "50% reduction in defect rates",
            "Real-time quality prediction",
            "Automated correction systems"
          ],
          status: "Deployed"
        },
        {
          year: "2021", 
          title: "Nano-Precision Assembly",
          category: "Precision Engineering",
          icon: Microscope,
          description: "Achieved microscopic tolerances with laser-guided positioning systems and atomic-level precision control.",
          impact: "±0.001mm tolerance",
          technologies: ["Laser Guidance", "Atomic Positioning", "Quantum Sensors"],
          results: [
            "Sub-micron positioning accuracy",
            "Atomic-level component placement",
            "Zero-defect micro-assembly"
          ],
          status: "Production Ready"
        },
        {
          year: "2022",
          title: "Adaptive Robotics Platform",
          category: "Automation",
          icon: Cog,
          description: "Self-learning robotic systems that adapt to new assembly requirements without reprogramming.",
          impact: "300% faster setup",
          technologies: ["Adaptive AI", "Self-Learning Algorithms", "Dynamic Reconfiguration"],
          results: [
            "Instant process adaptation",
            "Zero downtime reconfiguration", 
            "Self-optimizing performance"
          ],
          status: "Scaling"
        },
        {
          year: "2023",
          title: "Quantum Assembly Monitoring",
          category: "Quantum Technology",
          icon: Atom,
          description: "Quantum sensors enabling unprecedented monitoring and control of assembly processes at molecular level.",
          impact: "Molecular precision",
          technologies: ["Quantum Sensors", "Molecular Monitoring", "Quantum Computing"],
          results: [
            "Molecular-level precision",
            "Quantum state monitoring",
            "Predictive quantum modeling"
          ],
          status: "Beta Testing"
        },
        {
          year: "2024",
          title: "Holographic Assembly Guidance",
          category: "Mixed Reality",
          icon: Eye,
          description: "AR/VR holographic systems providing real-time 3D assembly guidance and virtual quality inspection.",
          impact: "Zero training time",
          technologies: ["Holographic Displays", "Spatial Computing", "Digital Twins"],
          results: [
            "Intuitive 3D guidance",
            "Virtual quality inspection",
            "Remote assembly assistance"
          ],
          status: "Development"
        },
        {
          year: "2025",
          title: "Sustainable Assembly Ecosystem",
          category: "Sustainability",
          icon: Globe,
          description: "Carbon-neutral assembly processes with 100% renewable energy and circular manufacturing principles.",
          impact: "Zero carbon footprint",
          technologies: ["Green Energy", "Circular Design", "Sustainable Materials"],
          results: [
            "100% renewable energy",
            "Zero waste production",
            "Circular material flows"
          ],
          status: "Planning"
        }
      ],

      // Innovation pillars
      pillars: [
        {
          icon: Brain,
          title: "Artificial Intelligence",
          description: "AI-driven assembly optimization and predictive quality control",
          innovations: [
            "Machine Learning Quality Prediction",
            "Automated Process Optimization", 
            "Intelligent Defect Prevention",
            "Adaptive Production Planning"
          ],
          impact: "50% efficiency increase"
        },
        {
          icon: Rocket,
          title: "Advanced Automation",
          description: "Next-generation robotics and autonomous assembly systems",
          innovations: [
            "Self-Configuring Robots",
            "Collaborative Assembly Cells",
            "Adaptive Gripper Systems",
            "Autonomous Quality Control"
          ],
          impact: "300% speed improvement"
        },
        {
          icon: Microscope,
          title: "Precision Engineering",
          description: "Microscopic tolerances and atomic-level assembly control",
          innovations: [
            "Laser-Guided Positioning",
            "Nano-Scale Manipulation",
            "Quantum Sensing Systems",
            "Molecular Assembly Control"
          ],
          impact: "1000x precision increase"
        },
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "Revolutionary quality control and zero-defect manufacturing",
          innovations: [
            "Real-Time Quality Monitoring",
            "Predictive Defect Analysis",
            "Automated Correction Systems",
            "100% Inspection Coverage"
          ],
          impact: "99.99% quality rate"
        }
      ],

      // Research & Development focus areas
      rdFocus: [
        {
          title: "Quantum Assembly",
          description: "Exploring quantum-enhanced precision and control systems",
          timeline: "2024-2026",
          investment: "$5M+",
          team: "15 researchers"
        },
        {
          title: "Bio-Inspired Assembly",
          description: "Nature-inspired self-assembly and adaptive manufacturing",
          timeline: "2024-2025", 
          investment: "$3M+",
          team: "12 researchers"
        },
        {
          title: "Space Assembly Systems",
          description: "Zero-gravity assembly technologies for aerospace applications",
          timeline: "2025-2027",
          investment: "$8M+",
          team: "20 researchers"
        }
      ]
    },
    hu: {
      badge: "Innovációs Kiválóság",
      title: "Úttörő Összeszerelési",
      subtitle: "Technológiák",
      description: "Az iparág vezetése folyamatos innovációval, áttörő technológiákkal és forradalmi megközelítésekkel a precíziós összeszerelési gyártásban.",
      
      timeline: [
        {
          year: "2020",
          title: "AI-Vezérelt Minőségkontroll",
          category: "Mesterséges Intelligencia",
          icon: Brain,
          description: "Forradalmasította a minőségkontrollt gépi tanulási algoritmusokkal, amelyek valós időben előrejelzik és megelőzik a hibákat.",
          impact: "99,8% minőségi pontosság",
          technologies: ["Számítógépes Látás", "Gépi Tanulás", "Prediktív Analitika"],
          results: [
            "50%-os hibaarány csökkenés",
            "Valós idejű minőség előrejelzés",
            "Automatizált korrekciós rendszerek"
          ],
          status: "Telepítve"
        },
        {
          year: "2021",
          title: "Nano-Precíziós Összeszerelés", 
          category: "Precíziós Mérnöki Munka",
          icon: Microscope,
          description: "Mikroszkopikus tűrések elérése lézervezetéses pozicionálási rendszerekkel és atomszintű precíziós kontrolllal.",
          impact: "±0,001mm tűrés",
          technologies: ["Lézer Vezetés", "Atom Pozicionálás", "Kvantum Szenzorok"],
          results: [
            "Szub-mikron pozicionálási pontosság",
            "Atomszintű komponens elhelyezés",
            "Zéró hibás mikro-összeszerelés"
          ],
          status: "Termelésre Kész"
        },
        {
          year: "2022",
          title: "Adaptív Robotika Platform",
          category: "Automatizálás",
          icon: Cog,
          description: "Önmagukat tanító robotikus rendszerek, amelyek újraprogramozás nélkül alkalmazkodnak új összeszerelési követelményekhez.",
          impact: "300%-kal gyorsabb beállítás",
          technologies: ["Adaptív AI", "Öntanuló Algoritmusok", "Dinamikus Átkonfigurálás"],
          results: [
            "Azonnali folyamat adaptáció",
            "Zéró leállási idő átkonfigurálás",
            "Önoptimalizáló teljesítmény"
          ],
          status: "Skálázás"
        },
        {
          year: "2023",
          title: "Kvantum Összeszerelés Monitoring",
          category: "Kvantum Technológia",
          icon: Atom,
          description: "Kvantum szenzorok példátlan monitoring és kontroll lehetőségekkel az összeszerelési folyamatokban molekuláris szinten.",
          impact: "Molekuláris precizitás",
          technologies: ["Kvantum Szenzorok", "Molekuláris Monitoring", "Kvantum Számítástechnika"],
          results: [
            "Molekuláris szintű precizitás",
            "Kvantum állapot monitoring",
            "Prediktív kvantum modellezés"
          ],
          status: "Béta Tesztelés"
        },
        {
          year: "2024",
          title: "Holografikus Összeszerelési Útmutatás",
          category: "Vegyes Valóság",
          icon: Eye,
          description: "AR/VR holografikus rendszerek valós idejű 3D összeszerelési útmutatással és virtuális minőségi ellenőrzéssel.",
          impact: "Zéró betanítási idő",
          technologies: ["Holografikus Kijelzők", "Térbeli Számítástechnika", "Digitális Ikrek"],
          results: [
            "Intuitív 3D útmutatás",
            "Virtuális minőségi ellenőrzés",
            "Távoli összeszerelési támogatás"
          ],
          status: "Fejlesztés"
        },
        {
          year: "2025",
          title: "Fenntartható Összeszerelési Ökoszisztéma",
          category: "Fenntarthatóság",
          icon: Globe,
          description: "Karbonsemleges összeszerelési folyamatok 100% megújuló energiával és körforgásos gyártási elvekkel.",
          impact: "Zéró karbon lábnyom",
          technologies: ["Zöld Energia", "Körforgásos Tervezés", "Fenntartható Anyagok"],
          results: [
            "100% megújuló energia",
            "Zéró hulladék termelés",
            "Körforgásos anyagáramlás"
          ],
          status: "Tervezés"
        }
      ],

      pillars: [
        {
          icon: Brain,
          title: "Mesterséges Intelligencia",
          description: "AI-vezérelt összeszerelési optimalizálás és prediktív minőségkontroll",
          innovations: [
            "Gépi Tanulási Minőség Előrejelzés",
            "Automatizált Folyamat Optimalizálás",
            "Intelligens Hibamegelőzés", 
            "Adaptív Termelési Tervezés"
          ],
          impact: "50% hatékonyság növekedés"
        },
        {
          icon: Rocket,
          title: "Fejlett Automatizálás",
          description: "Következő generációs robotika és autonóm összeszerelési rendszerek",
          innovations: [
            "Önkonfiguráló Robotok",
            "Kollaboratív Összeszerelő Cellák",
            "Adaptív Megfogó Rendszerek",
            "Autonóm Minőségkontroll"
          ],
          impact: "300% sebesség javulás"
        },
        {
          icon: Microscope,
          title: "Precíziós Mérnöki Munka",
          description: "Mikroszkopikus tűrések és atomszintű összeszerelési kontroll",
          innovations: [
            "Lézervezetéses Pozicionálás",
            "Nano-Skála Manipuláció",
            "Kvantum Érzékelő Rendszerek",
            "Molekuláris Összeszerelési Kontroll"
          ],
          impact: "1000x precizitás növekedés"
        },
        {
          icon: Shield,
          title: "Minőségbiztosítás",
          description: "Forradalmi minőségkontroll és zéró hibás gyártás",
          innovations: [
            "Valós Idejű Minőség Monitoring",
            "Prediktív Hiba Analízis",
            "Automatizált Korrekciós Rendszerek",
            "100% Ellenőrzési Lefedettség"
          ],
          impact: "99,99% minőségi arány"
        }
      ],

      rdFocus: [
        {
          title: "Kvantum Összeszerelés",
          description: "Kvantum-megerősített precizitás és kontroll rendszerek kutatása",
          timeline: "2024-2026",
          investment: "$5M+",
          team: "15 kutató"
        },
        {
          title: "Bio-Inspirált Összeszerelés",
          description: "Természet-inspirált önösszeszerelés és adaptív gyártás",
          timeline: "2024-2025",
          investment: "$3M+", 
          team: "12 kutató"
        },
        {
          title: "Űr Összeszerelési Rendszerek",
          description: "Zéró gravitációs összeszerelési technológiák űrkutatási alkalmazásokhoz",
          timeline: "2025-2027",
          investment: "$8M+",
          team: "20 kutató"
        }
      ]
    }
  };

  const content = innovationContent[language];
  const activeTimelineItem = content.timeline[activeInnovation];

  // Auto-advance timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInnovation((prev) => (prev + 1) % content.timeline.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.timeline.length]);

  // Update timeline progress based on scroll
  useEffect(() => {
    const updateProgress = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setTimelineProgress(progress);
      }
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

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

  const timelineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div ref={containerRef} className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/60 to-cyan-100/60 rounded-full blur-3xl" />
        
        {/* Floating Innovation Elements */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200/50 mb-6">
                <Lightbulb size={16} className="mr-2 animate-pulse" />
                {content.badge}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {content.title}
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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

          {/* Interactive Innovation Timeline */}
          <motion.div variants={itemVariants} className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Innovation Timeline' : 'Innovációs Idővonal'}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Journey through our breakthrough technologies and revolutionary advances in assembly manufacturing'
                  : 'Utazás áttörő technológiáinkon és forradalmi előrelépéseinken az összeszerelési gyártásban'
                }
              </p>
            </div>

            {/* Timeline Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
                {content.timeline.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveInnovation(index)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeInnovation === index
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Timeline Item */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInnovation}
                variants={timelineVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                          <activeTimelineItem.icon size={32} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-600 mb-1">
                            {activeTimelineItem.year} • {activeTimelineItem.category}
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {activeTimelineItem.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        activeTimelineItem.status === 'Deployed' || activeTimelineItem.status === 'Telepítve' 
                          ? 'bg-green-100 text-green-800'
                          : activeTimelineItem.status === 'Production Ready' || activeTimelineItem.status === 'Termelésre Kész'
                          ? 'bg-blue-100 text-blue-800'
                          : activeTimelineItem.status === 'Scaling' || activeTimelineItem.status === 'Skálázás'
                          ? 'bg-orange-100 text-orange-800'
                          : activeTimelineItem.status === 'Beta Testing' || activeTimelineItem.status === 'Béta Tesztelés'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {activeTimelineItem.status}
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {activeTimelineItem.description}
                    </p>

                    {/* Impact Metric */}
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg">
                      <TrendingUp size={20} className="mr-2" />
                      {activeTimelineItem.impact}
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {language === 'en' ? 'Core Technologies' : 'Alapvető Technológiák'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeTimelineItem.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {language === 'en' ? 'Key Results' : 'Főbb Eredmények'}
                      </h4>
                      <div className="space-y-2">
                        {activeTimelineItem.results.map((result, index) => (
                          <motion.div
                            key={result}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Innovation Visualization */}
                  <motion.div 
                    className="relative"
                    style={{ y: timelineY }}
                  >
                    <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-8 shadow-2xl text-white">
                      {/* Innovation Dashboard */}
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold">Innovation Monitor</h4>
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300" />
                            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-600" />
                          </div>
                        </div>

                        {/* Innovation Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                            <div className="text-2xl font-bold text-purple-400">
                              {activeTimelineItem.year}
                            </div>
                            <div className="text-sm text-gray-300">Launch Year</div>
                          </div>
                          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                            <div className="text-2xl font-bold text-green-400">Active</div>
                            <div className="text-sm text-gray-300">Status</div>
                          </div>
                        </div>

                        {/* Progress Visualization */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <span>Development Progress</span>
                            <span className="text-purple-400 font-bold">
                              {activeTimelineItem.status === 'Deployed' || activeTimelineItem.status === 'Telepítve' ? '100%' :
                               activeTimelineItem.status === 'Production Ready' || activeTimelineItem.status === 'Termelésre Kész' ? '95%' :
                               activeTimelineItem.status === 'Scaling' || activeTimelineItem.status === 'Skálázás' ? '85%' :
                               activeTimelineItem.status === 'Beta Testing' || activeTimelineItem.status === 'Béta Tesztelés' ? '75%' : '45%'}
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ 
                                width: activeTimelineItem.status === 'Deployed' || activeTimelineItem.status === 'Telepítve' ? '100%' :
                                       activeTimelineItem.status === 'Production Ready' || activeTimelineItem.status === 'Termelésre Kész' ? '95%' :
                                       activeTimelineItem.status === 'Scaling' || activeTimelineItem.status === 'Skálázás' ? '85%' :
                                       activeTimelineItem.status === 'Beta Testing' || activeTimelineItem.status === 'Béta Tesztelés' ? '75%' : '45%'
                              }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                          </div>
                        </div>

                        {/* Innovation Impact */}
                        <div className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                          <div className="flex items-center space-x-3 mb-2">
                            <Sparkles size={20} className="text-purple-400" />
                            <span className="font-semibold">Innovation Impact</span>
                          </div>
                          <div className="text-2xl font-bold text-purple-400">
                            {activeTimelineItem.impact}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Innovation Indicators */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Lightbulb size={20} className="text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Timeline Progress Bar */}
            <div className="mt-8 flex justify-center">
              <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  style={{ width: `${((activeInnovation + 1) / content.timeline.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Innovation Pillars */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Innovation Pillars' : 'Innovációs Pillírek'}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <pillar.icon size={32} className="text-white" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {pillar.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="space-y-2">
                      {pillar.innovations.map((innovation, idx) => (
                        <div key={idx} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                          {innovation}
                        </div>
                      ))}
                    </div>

                    <div className="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-bold rounded-full">
                      {pillar.impact}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* R&D Focus Areas */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Future Research & Development' : 'Jövőbeli Kutatás & Fejlesztés'}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Exploring tomorrow\'s technologies to revolutionize assembly manufacturing'
                  : 'A holnap technológiáinak kutatása az összeszerelési gyártás forradalmasításáért'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {content.rdFocus.map((focus, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200/50 shadow-lg"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {focus.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {focus.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar size={16} className="text-purple-600" />
                      <span className="text-gray-700">{focus.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <BarChart3 size={16} className="text-purple-600" />
                      <span className="text-gray-700">{focus.investment}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users size={16} className="text-purple-600" />
                      <span className="text-gray-700">{focus.team}</span>
                    </div>
                  </div>
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
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'Explore Our Innovation Lab' : 'Fedezze Fel Innovációs Laborunkat'}
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

export default AssemblyInnovation;