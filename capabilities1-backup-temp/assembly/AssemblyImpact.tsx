import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  TrendingUp, 
  Leaf, 
  DollarSign, 
  Award, 
  Target,
  Users,
  Globe,
  Zap,
  Shield,
  BarChart3,
  PieChart,
  Activity,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  Star,
  Calendar,
  Clock,
  Lightbulb,
  Recycle,
  Battery,
  Droplets,
  Wind,
  Sun,
  Factory,
  Truck,
  Building,
  Heart,
  Eye,
  Settings,
  Download,
  Share2,
  Play,
  Pause,
  RotateCcw,
  Maximize2
} from 'lucide-react';

const AssemblyImpact = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  const [activeMetric, setActiveMetric] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentYear, setCurrentYear] = useState(2025);
  const [countingNumbers, setCountingNumbers] = useState({});
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Advanced transforms like case study
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: e.clientX, y: e.clientY });
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  // Animated number counting effect
  useEffect(() => {
    if (!inView) return;
    
    const numbers = {
      carbonReduction: 0,
      energySaving: 0,
      wasteReduction: 0,
      roiIncrease: 0,
      productionIncrease: 0,
      qualityImprovement: 0
    };

    const targets = {
      carbonReduction: 85,
      energySaving: 67,
      wasteReduction: 92,
      roiIncrease: 340,
      productionIncrease: 250,
      qualityImprovement: 99.8
    };

    const intervals = {};
    
    Object.keys(targets).forEach(key => {
      intervals[key] = setInterval(() => {
        numbers[key] += targets[key] / 100;
        if (numbers[key] >= targets[key]) {
          numbers[key] = targets[key];
          clearInterval(intervals[key]);
        }
        setCountingNumbers({...numbers});
      }, 30);
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [inView]);
  
  const impactContent = {
    en: {
      badge: "Measurable Impact",
      title: "Transforming Industries",
      subtitle: "Through Sustainable Excellence",
      description: "Our assembly solutions deliver quantifiable business impact while pioneering sustainable manufacturing practices that benefit both your bottom line and the planet.",
      
      // Core impact metrics with real-world data
      keyMetrics: [
        {
          id: "business",
          title: "Business Impact",
          subtitle: "ROI & Performance",
          icon: TrendingUp,
          color: "from-blue-500 to-cyan-500",
          stats: [
            {
              value: "340%",
              label: "Average ROI",
              trend: "+45%",
              description: "Return on investment within 18 months",
              icon: DollarSign
            },
            {
              value: "250%",
              label: "Production Increase",
              trend: "+30%",
              description: "Enhanced manufacturing capacity",
              icon: Factory
            },
            {
              value: "99.8%",
              label: "Quality Rate",
              trend: "+4.2%",
              description: "Near-perfect assembly accuracy",
              icon: Target
            },
            {
              value: "67%",
              label: "Cost Reduction",
              trend: "+12%",
              description: "Lower operational expenses",
              icon: ArrowDown
            }
          ]
        },
        {
          id: "sustainability",
          title: "Environmental Impact",
          subtitle: "Green Manufacturing",
          icon: Leaf,
          color: "from-green-500 to-emerald-500",
          stats: [
            {
              value: "85%",
              label: "Carbon Reduction",
              trend: "+15%",
              description: "CO2 emissions decreased",
              icon: Wind
            },
            {
              value: "67%",
              label: "Energy Savings",
              trend: "+8%",
              description: "Renewable energy adoption",
              icon: Battery
            },
            {
              value: "92%",
              label: "Waste Reduction",
              trend: "+25%",
              description: "Circular economy principles",
              icon: Recycle
            },
            {
              value: "78%",
              label: "Water Conservation",
              trend: "+18%",
              description: "Efficient water usage",
              icon: Droplets
            }
          ]
        },
        {
          id: "innovation",
          title: "Innovation Metrics",
          subtitle: "Technology Leadership",
          icon: Lightbulb,
          color: "from-purple-500 to-indigo-500",
          stats: [
            {
              value: "47",
              label: "Patents Filed",
              trend: "+12",
              description: "Proprietary technologies",
              icon: Award
            },
            {
              value: "15",
              label: "R&D Projects",
              trend: "+3",
              description: "Active innovation initiatives",
              icon: Settings
            },
            {
              value: "89%",
              label: "Automation Level",
              trend: "+22%",
              description: "AI-powered processes",
              icon: Zap
            },
            {
              value: "24/7",
              label: "Monitoring",
              trend: "100%",
              description: "Real-time system oversight",
              icon: Eye
            }
          ]
        },
        {
          id: "social",
          title: "Social Impact",
          subtitle: "People & Communities",
          icon: Users,
          color: "from-orange-500 to-red-500",
          stats: [
            {
              value: "2,500+",
              label: "Jobs Created",
              trend: "+450",
              description: "Skilled manufacturing positions",
              icon: Users
            },
            {
              value: "95%",
              label: "Safety Record",
              trend: "+8%",
              description: "Incident-free operations",
              icon: Shield
            },
            {
              value: "87%",
              label: "Employee Satisfaction",
              trend: "+12%",
              description: "Workplace excellence rating",
              icon: Heart
            },
            {
              value: "150+",
              label: "Training Programs",
              trend: "+25",
              description: "Skill development initiatives",
              icon: Lightbulb
            }
          ]
        }
      ],

      // Detailed case studies with quantified results
      caseStudies: [
        {
          id: "automotive",
          client: "Global EV Manufacturer",
          industry: "Automotive",
          challenge: "Scaling electric vehicle battery assembly while reducing environmental impact",
          solution: "Implemented AI-powered robotic assembly with renewable energy integration",
          timeline: "12 months",
          investment: "$2.5M",
          results: {
            roi: "385%",
            productionIncrease: "340%",
            qualityImprovement: "99.7%",
            carbonReduction: "78%",
            energySavings: "65%"
          },
          impact: "Enabled client to become carbon-neutral 3 years ahead of schedule while doubling production capacity.",
          testimonial: "The assembly solution transformed our manufacturing capabilities beyond expectations.",
          clientLogo: "/images/clients/ev-manufacturer.png"
        },
        {
          id: "medical",
          client: "Medical Device Leader",
          industry: "Healthcare",
          challenge: "Ultra-precision assembly of life-critical cardiac monitoring devices",
          solution: "Clean room micro-assembly with 100% traceability and validation",
          timeline: "8 months",
          investment: "$1.8M",
          results: {
            roi: "420%",
            productionIncrease: "280%",
            qualityImprovement: "99.9%",
            timeToMarket: "-40%",
            regulatoryCompliance: "100%"
          },
          impact: "Accelerated FDA approval process and enabled life-saving device delivery to market.",
          testimonial: "Precision and reliability that literally saves lives every day.",
          clientLogo: "/images/clients/medical-leader.png"
        },
        {
          id: "aerospace",
          client: "Commercial Aviation OEM",
          industry: "Aerospace",
          challenge: "Complex avionics integration for next-generation aircraft",
          solution: "Modular assembly approach with advanced testing protocols",
          timeline: "18 months",
          investment: "$4.2M",
          results: {
            roi: "295%",
            productionIncrease: "180%",
            qualityImprovement: "99.8%",
            testingEfficiency: "+65%",
            certificationTime: "-30%"
          },
          impact: "Reduced aircraft development cycle while maintaining highest safety standards.",
          testimonial: "Mission-critical reliability with unprecedented efficiency gains.",
          clientLogo: "/images/clients/aviation-oem.png"
        }
      ],

      // Sustainability initiatives
      sustainabilityGoals: {
        title: "2030 Sustainability Commitments",
        goals: [
          {
            target: "Carbon Neutral Operations",
            progress: 78,
            deadline: "2027",
            status: "On Track",
            initiatives: ["Renewable Energy", "Carbon Offset", "Efficiency Programs"]
          },
          {
            target: "Zero Waste Manufacturing",
            progress: 85,
            deadline: "2026",
            status: "Ahead of Schedule",
            initiatives: ["Circular Economy", "Material Recovery", "Process Optimization"]
          },
          {
            target: "100% Renewable Energy",
            progress: 67,
            deadline: "2028",
            status: "On Track",
            initiatives: ["Solar Installation", "Wind Power", "Energy Storage"]
          },
          {
            target: "Water Neutral Operations",
            progress: 72,
            deadline: "2029",
            status: "On Track",
            initiatives: ["Water Recycling", "Efficiency Measures", "Conservation Programs"]
          }
        ]
      }
    },
    hu: {
      badge: "Mérhető Hatás",
      title: "Iparágak Átalakítása",
      subtitle: "Fenntartható Kiválóságon Keresztül",
      description: "Összeszerelési megoldásaink számszerűsíthető üzleti hatást biztosítanak, miközben úttörő fenntartható gyártási gyakorlatokat valósítanak meg, amelyek mind az Ön eredményeit, mind a bolygót szolgálják.",
      
      keyMetrics: [
        {
          id: "business",
          title: "Üzleti Hatás",
          subtitle: "ROI és Teljesítmény",
          icon: TrendingUp,
          color: "from-blue-500 to-cyan-500",
          stats: [
            {
              value: "340%",
              label: "Átlagos ROI",
              trend: "+45%",
              description: "Beruházás megtérülés 18 hónapon belül",
              icon: DollarSign
            },
            {
              value: "250%",
              label: "Termelés Növekedés",
              trend: "+30%",
              description: "Megnövelt gyártási kapacitás",
              icon: Factory
            },
            {
              value: "99,8%",
              label: "Minőségi Arány",
              trend: "+4,2%",
              description: "Közel tökéletes összeszerelési pontosság",
              icon: Target
            },
            {
              value: "67%",
              label: "Költségcsökkentés",
              trend: "+12%",
              description: "Alacsonyabb működési költségek",
              icon: ArrowDown
            }
          ]
        },
        {
          id: "sustainability",
          title: "Környezeti Hatás",
          subtitle: "Zöld Gyártás",
          icon: Leaf,
          color: "from-green-500 to-emerald-500",
          stats: [
            {
              value: "85%",
              label: "Szén Csökkentés",
              trend: "+15%",
              description: "CO2 kibocsátás csökkenés",
              icon: Wind
            },
            {
              value: "67%",
              label: "Energia Megtakarítás",
              trend: "+8%",
              description: "Megújuló energia bevezetés",
              icon: Battery
            },
            {
              value: "92%",
              label: "Hulladék Csökkentés",
              trend: "+25%",
              description: "Körforgásos gazdasági elvek",
              icon: Recycle
            },
            {
              value: "78%",
              label: "Víz Takarékosság",
              trend: "+18%",
              description: "Hatékony vízhasználat",
              icon: Droplets
            }
          ]
        },
        {
          id: "innovation",
          title: "Innovációs Mutatók",
          subtitle: "Technológiai Vezetés",
          icon: Lightbulb,
          color: "from-purple-500 to-indigo-500",
          stats: [
            {
              value: "47",
              label: "Benyújtott Szabadalmak",
              trend: "+12",
              description: "Tulajdonosi technológiák",
              icon: Award
            },
            {
              value: "15",
              label: "K+F Projektek",
              trend: "+3",
              description: "Aktív innovációs kezdeményezések",
              icon: Settings
            },
            {
              value: "89%",
              label: "Automatizálási Szint",
              trend: "+22%",
              description: "AI-vezérelt folyamatok",
              icon: Zap
            },
            {
              value: "24/7",
              label: "Monitoring",
              trend: "100%",
              description: "Valós idejű rendszer felügyelet",
              icon: Eye
            }
          ]
        },
        {
          id: "social",
          title: "Társadalmi Hatás",
          subtitle: "Emberek és Közösségek",
          icon: Users,
          color: "from-orange-500 to-red-500",
          stats: [
            {
              value: "2.500+",
              label: "Létrehozott Munkahelyek",
              trend: "+450",
              description: "Képzett gyártási pozíciók",
              icon: Users
            },
            {
              value: "95%",
              label: "Biztonsági Rekord",
              trend: "+8%",
              description: "Baleset-mentes működés",
              icon: Shield
            },
            {
              value: "87%",
              label: "Alkalmazotti Elégedettség",
              trend: "+12%",
              description: "Munkahelyi kiválósági értékelés",
              icon: Heart
            },
            {
              value: "150+",
              label: "Képzési Programok",
              trend: "+25",
              description: "Készségfejlesztési kezdeményezések",
              icon: Lightbulb
            }
          ]
        }
      ],

      sustainabilityGoals: {
        title: "2030 Fenntarthatósági Vállalások",
        goals: [
          {
            target: "Szén-semleges Működés",
            progress: 78,
            deadline: "2027",
            status: "Jó Úton",
            initiatives: ["Megújuló Energia", "Szén Kompenzáció", "Hatékonysági Programok"]
          },
          {
            target: "Nulla Hulladék Gyártás",
            progress: 85,
            deadline: "2026",
            status: "Időben Előrébb",
            initiatives: ["Körforgásos Gazdaság", "Anyag Visszanyerés", "Folyamat Optimalizálás"]
          },
          {
            target: "100% Megújuló Energia",
            progress: 67,
            deadline: "2028",
            status: "Jó Úton",
            initiatives: ["Napelem Telepítés", "Szélenergia", "Energia Tárolás"]
          },
          {
            target: "Víz-semleges Működés",
            progress: 72,
            deadline: "2029",
            status: "Jó Úton",
            initiatives: ["Víz Újrahasznosítás", "Hatékonysági Intézkedések", "Takarékossági Programok"]
          }
        ]
      }
    }
  };

  const content = impactContent[language];
  const activeMetricData = content.keyMetrics[activeMetric];

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

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Animated particle system */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Dynamic gradient background that follows mouse */}
      <div 
        className="absolute inset-0 opacity-40 transition-all duration-700"
        style={{
          background: `radial-gradient(circle 900px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.2), rgba(219, 39, 119, 0.1), transparent)`,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full filter blur-3xl"
        style={{ y: y1, rotate }}
      />
      <motion.div 
        className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl"
        style={{ y: y2, rotate: useTransform(scrollYProgress, [0, 1], [0, -8]) }}
      />

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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-xl border border-white/20 text-indigo-200 mb-6">
                <BarChart3 size={16} className="mr-2" />
                {content.badge}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {content.title}
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {content.subtitle}
              </span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-indigo-100 leading-relaxed"
            >
              {content.description}
            </motion.p>
          </div>

          {/* Interactive Impact Dashboard */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Metric Category Selector */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                {content.keyMetrics.map((metric, index) => (
                  <button
                    key={metric.id}
                    onClick={() => setActiveMetric(index)}
                    className={`group flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                      activeMetric === index
                        ? 'bg-white/20 text-white scale-105'
                        : 'text-indigo-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${metric.color} text-white group-hover:scale-110 transition-transform`}>
                      <metric.icon size={20} />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm">{metric.title}</div>
                      <div className="text-xs opacity-75">{metric.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Metric Dashboard */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMetric}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
                style={{
                  rotateX: useTransform(mouseY, [0, 1], [2, -2]),
                  rotateY: useTransform(mouseX, [0, 1], [-2, 2]),
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${activeMetricData.color} flex items-center justify-center text-white`}>
                    <activeMetricData.icon size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{activeMetricData.title}</h3>
                  <p className="text-lg text-indigo-300">{activeMetricData.subtitle}</p>
                </div>

                {/* Stats Grid with Live Data */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {activeMetricData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center text-white">
                          <stat.icon size={24} />
                        </div>
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-bold ${
                          stat.trend.startsWith('+') ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {stat.trend.startsWith('+') ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                          <span>{stat.trend}</span>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="text-3xl font-bold text-white mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                      >
                        {stat.value}
                      </motion.div>
                      
                      <div className="text-lg font-semibold text-indigo-300 mb-2">{stat.label}</div>
                      <div className="text-sm text-indigo-200 leading-relaxed">{stat.description}</div>

                      {/* Animated progress indicator */}
                      <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${activeMetricData.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Success Stories Carousel */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                {language === 'en' ? 'Success Stories' : 'Sikertörténetek'}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {content.caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{
                    rotateX: useTransform(mouseY, [0, 1], [1, -1]),
                    rotateY: useTransform(mouseX, [0, 1], [-1, 1]),
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {study.client.substring(0, 2)}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{study.client}</h4>
                      <p className="text-indigo-300">{study.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-sm font-semibold text-indigo-300">
                        {language === 'en' ? 'Challenge:' : 'Kihívás:'}
                      </span>
                      <p className="text-white text-sm mt-1">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-semibold text-indigo-300">
                        {language === 'en' ? 'Solution:' : 'Megoldás:'}
                      </span>
                      <p className="text-white text-sm mt-1">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-white">{value}</div>
                        <div className="text-xs text-indigo-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <p className="text-indigo-200 text-sm italic">"{study.testimonial}"</p>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Star size={16} className="text-white" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sustainability Goals Progress */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                {content.sustainabilityGoals.title}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {content.sustainabilityGoals.goals.map((goal, index) => (
                <motion.div
                  key={goal.target}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{goal.target}</h4>
                      <p className="text-green-300 font-medium">{goal.status}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">{goal.progress}%</div>
                      <div className="text-sm text-indigo-300">{goal.deadline}</div>
                    </div>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="stroke-white/20"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className="stroke-green-400"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        initial={{ strokeDasharray: "0 100" }}
                        animate={{ strokeDasharray: `${goal.progress} 100` }}
                        transition={{ duration: 2, delay: index * 0.3 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Leaf size={24} className="text-green-400" />
                    </div>
                  </div>

                  {/* Initiatives */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-white">
                      {language === 'en' ? 'Key Initiatives:' : 'Főbb Kezdeményezések:'}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {goal.initiatives.map((initiative) => (
                        <span 
                          key={initiative} 
                          className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-400/30"
                        >
                          {initiative}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Real-time Impact Counter */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">
                {language === 'en' ? 'Live Impact Counter' : 'Élő Hatás Számláló'}
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-green-400 mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {Math.floor(countingNumbers.carbonReduction || 0)}%
                  </motion.div>
                  <div className="text-indigo-300">
                    {language === 'en' ? 'CO2 Reduced Today' : 'Ma Csökkentett CO2'}
                  </div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-blue-400 mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                  >
                    {Math.floor(countingNumbers.energySaving || 0)}%
                  </motion.div>
                  <div className="text-indigo-300">
                    {language === 'en' ? 'Energy Saved' : 'Megtakarított Energia'}
                  </div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-purple-400 mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                  >
                    {Math.floor(countingNumbers.wasteReduction || 0)}%
                  </motion.div>
                  <div className="text-indigo-300">
                    {language === 'en' ? 'Waste Eliminated' : 'Kiküszöbölt Hulladék'}
                  </div>
                </div>
              </div>
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
              {language === 'en' ? 'Download Impact Report' : 'Hatás Jelentés Letöltése'}
              <Download 
                size={20} 
                className="ml-2 transition-transform group-hover:translate-y-1" 
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyImpact;