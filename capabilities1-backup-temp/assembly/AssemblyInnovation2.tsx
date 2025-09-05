import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Lightbulb, 
  Zap, 
  Cpu, 
  Award, 
  TrendingUp, 
  Target,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  RotateCcw,
  Calendar,
  Clock,
  Users,
  Wrench,
  Shield,
  Eye,
  Settings,
  ArrowRight,
  Star,
  CheckCircle2
} from 'lucide-react';

const AssemblyInnovation = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTimelineActive, setIsTimelineActive] = useState(false);
  const [particles, setParticles] = useState([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Advanced parallax transforms like in case study
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  React.useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: e.clientX, y: e.clientY });
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);
  
  const innovationContent = {
    en: {
      badge: "Innovation Timeline",
      title: "A Decade of",
      subtitle: "Assembly Innovation",
      description: "From traditional manual assembly to AI-powered automated systems, witness our revolutionary journey transforming manufacturing excellence through continuous innovation and technological advancement.",
      
      // Innovation milestones based on typical assembly service evolution
      timeline: [
        {
          year: "2015",
          title: "Foundation & Vision",
          subtitle: "Establishing Excellence",
          description: "Launched with a vision to revolutionize assembly manufacturing through precision engineering and quality-first approach.",
          achievements: [
            "First automated assembly line installed",
            "ISO 9001 certification achieved", 
            "20+ skilled technicians hired",
            "Initial 5 client partnerships established"
          ],
          metrics: {
            capacity: "1,000 units/day",
            accuracy: "95.5%",
            clients: "5 partners",
            workforce: "20 specialists"
          },
          technologies: ["Manual Assembly", "Basic Automation", "Quality Control"],
          image: "/images/innovation/2015-foundation.jpg",
          color: "from-blue-500 to-cyan-500"
        },
        {
          year: "2017",
          title: "Automation Revolution",
          subtitle: "Smart Manufacturing",
          description: "Introduced robotic assembly systems and advanced quality control mechanisms, increasing efficiency and precision dramatically.",
          achievements: [
            "First robotic assembly arm deployed",
            "Automated optical inspection implemented",
            "Production capacity tripled",
            "Zero-defect manufacturing achieved"
          ],
          metrics: {
            capacity: "5,000 units/day",
            accuracy: "98.2%",
            clients: "25 partners",
            workforce: "50 specialists"
          },
          technologies: ["Robotic Assembly", "AOI Systems", "Statistical Process Control"],
          image: "/images/innovation/2017-automation.jpg",
          color: "from-purple-500 to-indigo-500"
        },
        {
          year: "2019",
          title: "Digital Integration",
          subtitle: "Industry 4.0 Adoption",
          description: "Embraced Industry 4.0 principles with IoT sensors, real-time monitoring, and predictive maintenance systems.",
          achievements: [
            "IoT sensor network deployed",
            "Real-time production monitoring",
            "Predictive maintenance system",
            "Digital twin technology implemented"
          ],
          metrics: {
            capacity: "15,000 units/day",
            accuracy: "99.1%",
            clients: "75 partners",
            workforce: "120 specialists"
          },
          technologies: ["IoT Integration", "Digital Twins", "Predictive Analytics"],
          image: "/images/innovation/2019-digital.jpg",
          color: "from-green-500 to-emerald-500"
        },
        {
          year: "2021",
          title: "AI-Powered Excellence",
          subtitle: "Machine Learning Integration",
          description: "Integrated artificial intelligence and machine learning for quality prediction, process optimization, and autonomous decision-making.",
          achievements: [
            "AI quality prediction system",
            "Machine learning optimization",
            "Autonomous process adjustment",
            "Computer vision quality control"
          ],
          metrics: {
            capacity: "30,000 units/day",
            accuracy: "99.7%",
            clients: "150 partners",
            workforce: "200 specialists"
          },
          technologies: ["AI/ML Systems", "Computer Vision", "Autonomous Control"],
          image: "/images/innovation/2021-ai.jpg",
          color: "from-orange-500 to-red-500"
        },
        {
          year: "2023",
          title: "Sustainable Future",
          subtitle: "Green Manufacturing",
          description: "Pioneered sustainable manufacturing practices with carbon-neutral operations and circular economy principles.",
          achievements: [
            "Carbon-neutral manufacturing achieved",
            "Circular economy implementation",
            "Renewable energy adoption",
            "Zero-waste production systems"
          ],
          metrics: {
            capacity: "50,000 units/day",
            accuracy: "99.8%",
            clients: "300+ partners",
            workforce: "350 specialists"
          },
          technologies: ["Sustainable Tech", "Renewable Energy", "Circular Systems"],
          image: "/images/innovation/2023-sustainable.jpg",
          color: "from-teal-500 to-green-500"
        },
        {
          year: "2025",
          title: "Next Generation",
          subtitle: "Future Assembly",
          description: "Leading the future with quantum computing optimization, advanced materials, and next-generation manufacturing technologies.",
          achievements: [
            "Quantum optimization algorithms",
            "Advanced material processing",
            "Nano-scale precision assembly",
            "Fully autonomous factories"
          ],
          metrics: {
            capacity: "100,000+ units/day",
            accuracy: "99.9%",
            clients: "500+ partners",
            workforce: "500+ specialists"
          },
          technologies: ["Quantum Computing", "Advanced Materials", "Nano Assembly"],
          image: "/images/innovation/2025-future.jpg",
          color: "from-purple-500 to-pink-500"
        }
      ],

      // Innovation impact metrics
      impactMetrics: [
        {
          icon: TrendingUp,
          title: "Efficiency Improvement",
          value: "500%",
          description: "Increase in production efficiency over the decade",
          trend: "+15% annually"
        },
        {
          icon: Target,
          title: "Quality Enhancement",
          value: "99.8%",
          description: "Current accuracy rate in assembly processes",
          trend: "+4.3% overall"
        },
        {
          icon: Users,
          title: "Workforce Growth",
          value: "25x",
          description: "Expansion of skilled workforce and capabilities",
          trend: "+250% growth"
        },
        {
          icon: Award,
          title: "Innovation Patents",
          value: "47",
          description: "Registered patents in assembly technologies",
          trend: "+12 this year"
        }
      ]
    },
    hu: {
      badge: "Innovációs Idővonal",
      title: "Egy Évtized",
      subtitle: "Összeszerelési Innováció",
      description: "A hagyományos kézi összeszerelésből az AI-vezérelt automatizált rendszerekig, tanúja lehet forradalmi utunknak, amely a gyártási kiválóságot folyamatos innováción és technológiai fejlesztésen keresztül alakítja át.",
      
      timeline: [
        {
          year: "2015",
          title: "Alapítás és Vízió",
          subtitle: "Kiválóság Megteremtése",
          description: "Azzal a vízióval indítottuk, hogy forradalmasítsuk az összeszerelő gyártást precíziós mérnöki munkán és minőség-első megközelítésen keresztül.",
          achievements: [
            "Első automatizált összeszerelő sor telepítve",
            "ISO 9001 tanúsítvány megszerzése",
            "20+ képzett technikus felvétele",
            "Kezdeti 5 ügyfélpartnerség kialakítása"
          ],
          metrics: {
            capacity: "1.000 egység/nap",
            accuracy: "95,5%",
            clients: "5 partner",
            workforce: "20 szakember"
          },
          technologies: ["Kézi Összeszerelés", "Alapvető Automatizálás", "Minőségellenőrzés"],
          image: "/images/innovation/2015-foundation.jpg",
          color: "from-blue-500 to-cyan-500"
        },
        {
          year: "2017",
          title: "Automatizálási Forradalom",
          subtitle: "Intelligens Gyártás",
          description: "Bevezettük a robotikus összeszerelő rendszereket és fejlett minőségellenőrzési mechanizmusokat, drámaian növelve a hatékonyságot és precizitást.",
          achievements: [
            "Első robotikus összeszerelő kar telepítése",
            "Automatizált optikai ellenőrzés bevezetése",
            "Termelési kapacitás megháromszorozása",
            "Nulla hibás gyártás elérése"
          ],
          metrics: {
            capacity: "5.000 egység/nap",
            accuracy: "98,2%",
            clients: "25 partner",
            workforce: "50 szakember"
          },
          technologies: ["Robotikus Összeszerelés", "AOI Rendszerek", "Statisztikai Folyamatszabályozás"],
          image: "/images/innovation/2017-automation.jpg",
          color: "from-purple-500 to-indigo-500"
        },
        {
          year: "2019",
          title: "Digitális Integráció",
          subtitle: "Ipar 4.0 Bevezetés",
          description: "Befogadtuk az Ipar 4.0 elveit IoT szenzorekkel, valós idejű monitorozással és prediktív karbantartási rendszerekkel.",
          achievements: [
            "IoT szenzor hálózat telepítése",
            "Valós idejű termelési monitoring",
            "Prediktív karbantartási rendszer",
            "Digitális iker technológia bevezetése"
          ],
          metrics: {
            capacity: "15.000 egység/nap",
            accuracy: "99,1%",
            clients: "75 partner",
            workforce: "120 szakember"
          },
          technologies: ["IoT Integráció", "Digitális Ikrek", "Prediktív Analitika"],
          image: "/images/innovation/2019-digital.jpg",
          color: "from-green-500 to-emerald-500"
        },
        {
          year: "2021",
          title: "AI-Vezérelt Kiválóság",
          subtitle: "Gépi Tanulás Integráció",
          description: "Integráltuk a mesterséges intelligenciát és gépi tanulást minőség előrejelzéshez, folyamat optimalizáláshoz és autonóm döntéshozatalhoz.",
          achievements: [
            "AI minőség előrejelző rendszer",
            "Gépi tanulás optimalizálás",
            "Autonóm folyamat beállítás",
            "Számítógépes látás minőségellenőrzés"
          ],
          metrics: {
            capacity: "30.000 egység/nap",
            accuracy: "99,7%",
            clients: "150 partner",
            workforce: "200 szakember"
          },
          technologies: ["AI/ML Rendszerek", "Számítógépes Látás", "Autonóm Vezérlés"],
          image: "/images/innovation/2021-ai.jpg",
          color: "from-orange-500 to-red-500"
        },
        {
          year: "2023",
          title: "Fenntartható Jövő",
          subtitle: "Zöld Gyártás",
          description: "Úttörő fenntartható gyártási gyakorlatokat vezettünk be szén-semleges működéssel és körforgásos gazdasági elvekkel.",
          achievements: [
            "Szén-semleges gyártás elérése",
            "Körforgásos gazdaság bevezetése",
            "Megújuló energia elfogadása",
            "Nulla hulladék termelési rendszerek"
          ],
          metrics: {
            capacity: "50.000 egység/nap",
            accuracy: "99,8%",
            clients: "300+ partner",
            workforce: "350 szakember"
          },
          technologies: ["Fenntartható Tech", "Megújuló Energia", "Körforgásos Rendszerek"],
          image: "/images/innovation/2023-sustainable.jpg",
          color: "from-teal-500 to-green-500"
        },
        {
          year: "2025",
          title: "Következő Generáció",
          subtitle: "Jövő Összeszerelés",
          description: "A jövőt vezetjük kvantum számítástechnikai optimalizálással, fejlett anyagokkal és következő generációs gyártási technológiákkal.",
          achievements: [
            "Kvantum optimalizálási algoritmusok",
            "Fejlett anyag feldolgozás",
            "Nano-skálájú precíziós összeszerelés",
            "Teljesen autonóm gyárak"
          ],
          metrics: {
            capacity: "100.000+ egység/nap",
            accuracy: "99,9%",
            clients: "500+ partner",
            workforce: "500+ szakember"
          },
          technologies: ["Kvantum Számítástechnika", "Fejlett Anyagok", "Nano Összeszerelés"],
          image: "/images/innovation/2025-future.jpg",
          color: "from-purple-500 to-pink-500"
        }
      ],

      impactMetrics: [
        {
          icon: TrendingUp,
          title: "Hatékonyság Javítás",
          value: "500%",
          description: "Termelési hatékonyság növekedése az évtized alatt",
          trend: "+15% évente"
        },
        {
          icon: Target,
          title: "Minőség Fejlesztés",
          value: "99,8%",
          description: "Jelenlegi pontossági arány az összeszerelési folyamatokban",
          trend: "+4,3% összesen"
        },
        {
          icon: Users,
          title: "Munkaerő Növekedés",
          value: "25x",
          description: "Képzett munkaerő és képességek bővítése",
          trend: "+250% növekedés"
        },
        {
          icon: Award,
          title: "Innovációs Szabadalmak",
          value: "47",
          description: "Bejegyzett szabadalmak összeszerelési technológiákban",
          trend: "+12 idén"
        }
      ]
    }
  };

  const content = innovationContent[language] || innovationContent['en'];
  const activeTimelineItem = content?.timeline?.[activeTimeline] || content?.timeline?.[0] || {};

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
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const nextTimeline = () => {
    setActiveTimeline((prev) => (prev + 1) % content.timeline.length);
  };

  const prevTimeline = () => {
    setActiveTimeline((prev) => (prev - 1 + content.timeline.length) % content.timeline.length);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Floating particles like in case study */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Dynamic gradient background that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-700"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3), rgba(219, 39, 119, 0.2), transparent)`,
        }}
      />

      {/* Geometric background shapes */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl"
          style={{ y: y1, rotate }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl"
          style={{ y: y2, rotate: useTransform(scrollYProgress, [0, 1], [0, -10]) }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-xl border border-white/20 text-purple-200 mb-6">
                <Lightbulb size={16} className="mr-2" />
                {content.badge}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {content.title}
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {content.subtitle}
              </span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-purple-100 leading-relaxed"
            >
              {content.description}
            </motion.p>
          </div>

          {/* Interactive Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <button
                  onClick={prevTimeline}
                  className="p-3 text-purple-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex space-x-2">
                  {content.timeline.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTimeline(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTimeline 
                          ? 'bg-purple-400 scale-125' 
                          : 'bg-white/30 hover:bg-purple-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTimeline}
                  className="p-3 text-purple-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Main Timeline Content */}
            <motion.div
              key={activeTimeline}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
              style={{
                rotateX: useTransform(mouseY, [0, 1], [1, -1]),
                rotateY: useTransform(mouseX, [0, 1], [-1, 1]),
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Timeline Content */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${activeTimelineItem.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
                        {activeTimelineItem.year}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {activeTimelineItem.title}
                        </h3>
                        <p className="text-lg text-purple-300 font-medium">
                          {activeTimelineItem.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-purple-100 leading-relaxed">
                      {activeTimelineItem.description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      {language === 'en' ? 'Key Achievements' : 'Főbb Eredmények'}
                    </h4>
                    <div className="space-y-3">
                      {activeTimelineItem.achievements.map((achievement, index) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-purple-100">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      {language === 'en' ? 'Core Technologies' : 'Alapvető Technológiák'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeTimelineItem.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-purple-200 text-sm font-medium rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(activeTimelineItem.metrics).map(([key, value]) => (
                      <div key={key} className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-sm text-purple-300 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Visualization */}
                <motion.div 
                  className="relative"
                  style={{
                    rotateX: useTransform(mouseY, [0, 1], [2, -2]),
                    rotateY: useTransform(mouseX, [0, 1], [-2, 2]),
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                    {/* Year Display */}
                    <div className="text-center mb-8">
                      <motion.div 
                        className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                      >
                        {activeTimelineItem.year}
                      </motion.div>
                      <div className="text-lg text-purple-300 font-medium mt-2">
                        {activeTimelineItem.subtitle}
                      </div>
                    </div>

                    {/* Animated Progress Rings */}
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { label: "Progress", value: 85, color: "stroke-purple-400" },
                        { label: "Innovation", value: 92, color: "stroke-pink-400" },
                        { label: "Efficiency", value: 78, color: "stroke-blue-400" },
                        { label: "Quality", value: 96, color: "stroke-green-400" }
                      ].map((metric, index) => (
                        <div key={metric.label} className="text-center">
                          <div className="relative w-20 h-20 mx-auto mb-2">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="stroke-white/20"
                                strokeWidth="3"
                                fill="none"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <motion.path
                                className={metric.color}
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                initial={{ strokeDasharray: "0 100" }}
                                animate={{ strokeDasharray: `${metric.value} 100` }}
                                transition={{ duration: 2, delay: index * 0.2 }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-bold text-white">
                                {metric.value}%
                              </span>
                            </div>
                          </div>
                          <div className="text-xs text-purple-300">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Status Indicators */}
                    <div className="mt-8 space-y-3">
                      {[
                        { status: "Implementation", progress: 100, active: true },
                        { status: "Testing", progress: 85, active: activeTimeline < 4 },
                        { status: "Optimization", progress: 60, active: activeTimeline < 3 },
                        { status: "Scaling", progress: 30, active: activeTimeline < 2 }
                      ].map((item, index) => (
                        <div key={item.status} className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.active ? 'bg-green-400 animate-pulse' : 'bg-gray-500'
                          }`} />
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-purple-200">{item.status}</span>
                              <span className="text-purple-300">{item.progress}%</span>
                            </div>
                            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                                initial={{ width: 0 }}
                                animate={{ width: `${item.progress}%` }}
                                transition={{ delay: index * 0.2, duration: 1 }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Action Button */}
                  <motion.button
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg text-white"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(139, 92, 246, 0.3)',
                        '0 0 40px rgba(219, 39, 119, 0.3)',
                        '0 0 20px rgba(139, 92, 246, 0.3)',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Star size={20} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Impact Metrics */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                {language === 'en' ? 'Innovation Impact' : 'Innovációs Hatás'}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="group p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{
                    rotateX: useTransform(mouseY, [0, 1], [1, -1]),
                    rotateY: useTransform(mouseX, [0, 1], [-1, 1]),
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <metric.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <motion.div 
                        className="text-3xl font-bold text-white mb-1"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                      >
                        {metric.value}
                      </motion.div>
                      <span className="inline-block px-2 py-1 bg-green-500/20 text-green-300 text-xs font-bold rounded-full">
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {metric.title}
                  </h4>
                  
                  <p className="text-purple-200 text-sm leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Animated progress bar */}
                  <motion.div 
                    className="w-full h-1 bg-white/20 rounded-full mt-4 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
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