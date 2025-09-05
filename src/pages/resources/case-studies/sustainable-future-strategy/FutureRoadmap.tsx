import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Rocket, 
  Zap, 
  Target, 
  Calendar, 
  Clock,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  Eye,
  EyeOff,
  Download,
  Share2,
  Lightbulb,
  Brain,
  Cpu,
  Atom,
  Dna,
  Layers,
  Network,
  Monitor,
  Factory,
  Leaf,
  Microscope,
  BarChart3,
  Check,
  Satellite // Add this missing import
} from 'lucide-react';

const FutureRoadmap = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [selectedYear, setSelectedYear] = useState(2025);
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline', 'gantt', 'kanban', 'calendar'
  const [filterCategory, setFilterCategory] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [timelineZoom, setTimelineZoom] = useState(1);
  const [showDetails, setShowDetails] = useState(true);
  const [animationProgress, setAnimationProgress] = useState(0);

  // Advanced scroll and mouse interactions
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleEffect = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  const roadmapContent = {
    badge: {
      en: "Future Vision Roadmap",
      hu: "Jövőkép Ütemterv"
    },
    title: {
      en: "Pioneering Tomorrow's<br/><span class='future-gradient'>Innovation Frontier</span>",
      hu: "A Holnap Innovációs<br/><span class='future-gradient'>Határainak Úttörése</span>"
    },
    subtitle: {
      en: "A comprehensive 10-year strategic roadmap outlining breakthrough innovations, sustainable technologies, and transformative initiatives that will reshape the industry landscape from 2025 to 2035.",
      hu: "Átfogó 10 éves stratégiai ütemterv, amely áttörő innovációkat, fenntartható technológiákat és transzformatív kezdeményezéseket vázol fel, amelyek 2025-től 2035-ig újraformálják az iparági tájképet."
    },
    categories: [
      {
        id: 'all',
        name: { en: 'All Initiatives', hu: 'Minden Kezdeményezés' },
        icon: <Target className="w-5 h-5" />,
        color: 'from-purple-500 to-pink-500',
        count: 47
      },
      {
        id: 'ai-automation',
        name: { en: 'AI & Automation', hu: 'AI és Automatizálás' },
        icon: <Brain className="w-5 h-5" />,
        color: 'from-blue-500 to-cyan-500',
        count: 12
      },
      {
        id: 'sustainability',
        name: { en: 'Sustainability', hu: 'Fenntarthatóság' },
        icon: <Leaf className="w-5 h-5" />,
        color: 'from-green-500 to-emerald-500',
        count: 15
      },
      {
        id: 'smart-manufacturing',
        name: { en: 'Smart Manufacturing', hu: 'Okos Gyártás' },
        icon: <Factory className="w-5 h-5" />,
        color: 'from-orange-500 to-red-500',
        count: 9
      },
      {
        id: 'digital-transformation',
        name: { en: 'Digital Transformation', hu: 'Digitális Átalakulás' },
        icon: <Monitor className="w-5 h-5" />,
        color: 'from-indigo-500 to-purple-500',
        count: 8
      },
      {
        id: 'research-development',
        name: { en: 'Research & Development', hu: 'Kutatás és Fejlesztés' },
        icon: <Microscope className="w-5 h-5" />,
        color: 'from-pink-500 to-rose-500',
        count: 3
      }
    ],
    timeline: {
      2025: {
        theme: { en: 'Foundation Year', hu: 'Alapozó Év' },
        description: { 
          en: 'Establishing core infrastructure and launching initial innovation initiatives',
          hu: 'Alapvető infrastruktúra kialakítása és kezdeti innovációs kezdeményezések indítása'
        },
        budget: 2.5, // millions
        milestones: [
          {
            id: 'ai-lab-launch',
            quarter: 'Q1',
            title: { en: 'AI Innovation Lab Launch', hu: 'AI Innovációs Labor Indítása' },
            category: 'ai-automation',
            description: {
              en: 'Establishment of state-of-the-art AI research facility with quantum computing capabilities',
              hu: 'Legkorszerűbb AI kutatási létesítmény létrehozása kvantum számítástechnikai képességekkel'
            },
            impact: { en: 'High', hu: 'Magas' },
            status: 'planning',
            team: 25,
            budget: 1.2,
            kpis: [
              { metric: 'Research Projects', target: 5, current: 0 },
              { metric: 'AI Models Developed', target: 12, current: 0 },
              { metric: 'Patent Applications', target: 8, current: 0 }
            ],
            dependencies: [],
            risks: [
              { type: 'Technical', level: 'Medium', description: { en: 'Quantum hardware availability', hu: 'Kvantum hardver elérhetőség' } },
              { type: 'Talent', level: 'High', description: { en: 'AI expert recruitment', hu: 'AI szakértő toborzás' } }
            ]
          },
          {
            id: 'circular-economy-pilot',
            quarter: 'Q2',
            title: { en: 'Circular Economy Pilot Program', hu: 'Körforgásos Gazdaság Pilot Program' },
            category: 'sustainability',
            description: {
              en: 'Implementation of closed-loop manufacturing system for plastic container production',
              hu: 'Zárt hurkú gyártási rendszer megvalósítása műanyag tároló gyártáshoz'
            },
            impact: { en: 'Very High', hu: 'Nagyon Magas' },
            status: 'planning',
            team: 18,
            budget: 0.8,
            kpis: [
              { metric: 'Waste Reduction', target: 85, current: 0, unit: '%' },
              { metric: 'Material Recovery', target: 95, current: 0, unit: '%' },
              { metric: 'Cost Savings', target: 450, current: 0, unit: 'K€' }
            ],
            dependencies: ['material-research'],
            risks: [
              { type: 'Regulatory', level: 'Medium', description: { en: 'Environmental compliance', hu: 'Környezetvédelmi megfelelés' } }
            ]
          },
          {
            id: 'smart-factory-upgrade',
            quarter: 'Q3',
            title: { en: 'Smart Factory Infrastructure', hu: 'Okos Gyár Infrastruktúra' },
            category: 'smart-manufacturing',
            description: {
              en: 'Complete digitalization of manufacturing processes with IoT sensor integration',
              hu: 'Gyártási folyamatok teljes digitalizálása IoT szenzor integrációval'
            },
            impact: { en: 'High', hu: 'Magas' },
            status: 'planning',
            team: 32,
            budget: 1.8,
            kpis: [
              { metric: 'Production Efficiency', target: 25, current: 0, unit: '%' },
              { metric: 'Quality Improvement', target: 15, current: 0, unit: '%' },
              { metric: 'Downtime Reduction', target: 40, current: 0, unit: '%' }
            ],
            dependencies: ['network-infrastructure'],
            risks: [
              { type: 'Technical', level: 'High', description: { en: 'System integration complexity', hu: 'Rendszer integráció bonyolultsága' } },
              { type: 'Operational', level: 'Medium', description: { en: 'Production disruption during upgrade', hu: 'Gyártási zavar a fejlesztés során' } }
            ]
          },
          {
            id: 'digital-twin-platform',
            quarter: 'Q4',
            title: { en: 'Digital Twin Platform', hu: 'Digitális Iker Platform' },
            category: 'digital-transformation',
            description: {
              en: 'Development of comprehensive digital twin ecosystem for product lifecycle management',
              hu: 'Átfogó digitális iker ökoszisztéma fejlesztése termék életciklus menedzsmenthez'
            },
            impact: { en: 'Very High', hu: 'Nagyon Magas' },
            status: 'planning',
            team: 22,
            budget: 1.1,
            kpis: [
              { metric: 'Simulation Accuracy', target: 98, current: 0, unit: '%' },
              { metric: 'Design Iteration Speed', target: 60, current: 0, unit: '%' },
              { metric: 'Predictive Maintenance', target: 80, current: 0, unit: '%' }
            ],
            dependencies: ['ai-lab-launch', 'smart-factory-upgrade'],
            risks: [
              { type: 'Data', level: 'Medium', description: { en: 'Data quality and integration', hu: 'Adatminőség és integráció' } }
            ]
          }
        ]
      },
      2026: {
        theme: { en: 'Acceleration Phase', hu: 'Gyorsítási Fázis' },
        description: { 
          en: 'Scaling successful pilot programs and expanding innovation capabilities',
          hu: 'Sikeres pilot programok skálázása és innovációs képességek bővítése'
        },
        budget: 4.2,
        milestones: [
          {
            id: 'quantum-computing-integration',
            quarter: 'Q1',
            title: { en: 'Quantum Computing Integration', hu: 'Kvantum Számítástechnika Integráció' },
            category: 'ai-automation',
            description: {
              en: 'Integration of quantum computing capabilities for complex optimization problems',
              hu: 'Kvantum számítástechnikai képességek integrálása komplex optimalizálási problémákhoz'
            },
            impact: { en: 'Revolutionary', hu: 'Forradalmi' },
            status: 'planning',
            team: 15,
            budget: 2.1,
            kpis: [
              { metric: 'Processing Speed Improvement', target: 1000, current: 0, unit: '%' },
              { metric: 'Optimization Problems Solved', target: 50, current: 0 },
              { metric: 'Energy Efficiency', target: 300, current: 0, unit: '%' }
            ],
            dependencies: ['ai-lab-launch'],
            risks: [
              { type: 'Technical', level: 'Very High', description: { en: 'Quantum decoherence challenges', hu: 'Kvantum dekoherencia kihívások' } },
              { type: 'Cost', level: 'High', description: { en: 'Hardware acquisition costs', hu: 'Hardver beszerzési költségek' } }
            ]
          },
          {
            id: 'autonomous-manufacturing',
            quarter: 'Q2',
            title: { en: 'Autonomous Manufacturing Cells', hu: 'Autonóm Gyártási Cellák' },
            category: 'smart-manufacturing',
            description: {
              en: 'Deployment of fully autonomous manufacturing cells with self-optimization capabilities',
              hu: 'Teljesen autonóm gyártási cellák telepítése önoptimalizálási képességekkel'
            },
            impact: { en: 'Very High', hu: 'Nagyon Magas' },
            status: 'planning',
            team: 28,
            budget: 1.5,
            kpis: [
              { metric: 'Human Intervention Reduction', target: 90, current: 0, unit: '%' },
              { metric: 'Production Flexibility', target: 200, current: 0, unit: '%' },
              { metric: 'Error Rate Reduction', target: 95, current: 0, unit: '%' }
            ],
            dependencies: ['smart-factory-upgrade', 'ai-lab-launch'],
            risks: [
              { type: 'Safety', level: 'High', description: { en: 'Human-robot interaction safety', hu: 'Ember-robot interakció biztonsága' } }
            ]
          },
          {
            id: 'carbon-negative-operations',
            quarter: 'Q3',
            title: { en: 'Carbon Negative Operations', hu: 'Szén-negatív Műveletek' },
            category: 'sustainability',
            description: {
              en: 'Achievement of carbon negative manufacturing through advanced carbon capture and utilization',
              hu: 'Szén-negatív gyártás elérése fejlett szén-dioxid befogással és hasznosítással'
            },
            impact: { en: 'Revolutionary', hu: 'Forradalmi' },
            status: 'planning',
            team: 20,
            budget: 1.8,
            kpis: [
              { metric: 'Carbon Removal', target: 500, current: 0, unit: 'tons/year' },
              { metric: 'Energy from Renewables', target: 100, current: 0, unit: '%' },
              { metric: 'Circular Material Usage', target: 98, current: 0, unit: '%' }
            ],
            dependencies: ['circular-economy-pilot'],
            risks: [
              { type: 'Regulatory', level: 'Medium', description: { en: 'Carbon credit verification', hu: 'Szén-kredit ellenőrzés' } }
            ]
          }
        ]
      },
      2027: {
        theme: { en: 'Innovation Breakthrough', hu: 'Innovációs Áttörés' },
        description: { 
          en: 'Major technological breakthroughs and market disruption initiatives',
          hu: 'Jelentős technológiai áttörések és piaci disruption kezdeményezések'
        },
        budget: 6.8,
        milestones: [
          {
            id: 'bio-plastic-revolution',
            quarter: 'Q1',
            title: { en: 'Bio-Plastic Manufacturing Revolution', hu: 'Bio-műanyag Gyártási Forradalom' },
            category: 'sustainability',
            description: {
              en: 'Launch of revolutionary bio-plastic production using genetically optimized microorganisms',
              hu: 'Forradalmi bio-műanyag gyártás indítása genetikailag optimalizált mikroorganizmusokkal'
            },
            impact: { en: 'Revolutionary', hu: 'Forradalmi' },
            status: 'planning',
            team: 35,
            budget: 2.8,
            kpis: [
              { metric: 'Bio-plastic Production', target: 10000, current: 0, unit: 'tons/year' },
              { metric: 'Biodegradation Time', target: 90, current: 0, unit: 'days' },
              { metric: 'Cost Parity with Traditional Plastics', target: 100, current: 0, unit: '%' }
            ],
            dependencies: ['quantum-computing-integration'],
            risks: [
              { type: 'Regulatory', level: 'High', description: { en: 'Bioengineering regulations', hu: 'Biomérnöki szabályozások' } },
              { type: 'Technical', level: 'Very High', description: { en: 'Scaling microorganism production', hu: 'Mikroorganizmus termelés skálázása' } }
            ]
          }
        ]
      },
      2028: {
        theme: { en: 'Market Leadership', hu: 'Piaci Vezetés' },
        description: { 
          en: 'Establishing market leadership through innovative product launches and strategic partnerships',
          hu: 'Piaci vezetés kialakítása innovatív termékbevezetésekkel és stratégiai partnerségekkel'
        },
        budget: 8.5,
        milestones: []
      },
      2029: {
        theme: { en: 'Global Expansion', hu: 'Globális Terjeszkedés' },
        description: { 
          en: 'International expansion of breakthrough technologies and sustainable manufacturing practices',
          hu: 'Áttörő technológiák és fenntartható gyártási gyakorlatok nemzetközi terjesztése'
        },
        budget: 12.3,
        milestones: []
      },
      2030: {
        theme: { en: 'Sustainability Leadership', hu: 'Fenntarthatósági Vezetés' },
        description: { 
          en: 'Achieving industry leadership in sustainable manufacturing and circular economy practices',
          hu: 'Iparági vezetés elérése fenntartható gyártásban és körforgásos gazdasági gyakorlatokban'
        },
        budget: 15.7,
        milestones: []
      },
      2031: {
        theme: { en: 'Technology Platform', hu: 'Technológiai Platform' },
        description: { 
          en: 'Transforming into a comprehensive technology platform serving multiple industries',
          hu: 'Átalakulás átfogó technológiai platformmá, amely több iparágat szolgál ki'
        },
        budget: 18.2,
        milestones: []
      },
      2032: {
        theme: { en: 'Ecosystem Builder', hu: 'Ökoszisztéma Építő' },
        description: { 
          en: 'Building and nurturing innovation ecosystems across global markets',
          hu: 'Innovációs ökoszisztémák építése és ápolása globális piacokon'
        },
        budget: 22.1,
        milestones: []
      },
      2033: {
        theme: { en: 'Regenerative Impact', hu: 'Regeneratív Hatás' },
        description: { 
          en: 'Creating positive environmental and social impact through regenerative business practices',
          hu: 'Pozitív környezeti és társadalmi hatás létrehozása regeneratív üzleti gyakorlatokkal'
        },
        budget: 25.8,
        milestones: []
      },
      2034: {
        theme: { en: 'Future Readiness', hu: 'Jövő Felkészültség' },
        description: { 
          en: 'Preparing for next-generation challenges and opportunities beyond 2035',
          hu: 'Felkészülés következő generációs kihívásokra és lehetőségekre 2035 után'
        },
        budget: 28.5,
        milestones: []
      },
      2035: {
        theme: { en: 'Vision Realized', hu: 'Jövőkép Megvalósítva' },
        description: { 
          en: 'Full realization of our 2025-2035 vision and preparation for the next decade',
          hu: '2025-2035 jövőképünk teljes megvalósítása és felkészülés a következő évtizedre'
        },
        budget: 32.0,
        milestones: []
      }
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setAnimationProgress(prev => {
        const newProgress = prev + (playbackSpeed * 2);
        if (newProgress >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  // Get filtered milestones
  const getFilteredMilestones = () => {
    const yearData = roadmapContent.timeline[selectedYear];
    if (!yearData?.milestones) return [];
    
    return yearData.milestones.filter(milestone => 
      filterCategory === 'all' || milestone.category === filterCategory
    );
  };

  const currentYearData = roadmapContent.timeline[selectedYear] || {};
  const filteredMilestones = getFilteredMilestones();

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Futuristic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,theme(colors.purple.500/20),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,theme(colors.indigo.500/20),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/images/future-grid.svg')] opacity-10"></div>
        
        {/* Floating future elements */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "easeInOut"
            }}
          >
            {i % 8 === 0 && <Rocket className="w-6 h-6 text-purple-400/40" />}
            {i % 8 === 1 && <Brain className="w-5 h-5 text-blue-400/40" />}
            {i % 8 === 2 && <Atom className="w-5 h-5 text-cyan-400/40" />}
            {i % 8 === 3 && <Dna className="w-6 h-6 text-pink-400/40" />}
            {i % 8 === 4 && <Satellite className="w-5 h-5 text-indigo-400/40" />}
            {i % 8 === 5 && <Cpu className="w-5 h-5 text-green-400/40" />}
            {i % 8 === 6 && <Network className="w-5 h-5 text-yellow-400/40" />}
            {i % 8 === 7 && <Zap className="w-6 h-6 text-orange-400/40" />}
          </motion.div>
        ))}
        
        {/* Timeline connector lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
              style={{
                left: '10%',
                right: '10%',
                top: `${20 + i * 12}%`,
                transformOrigin: 'left center'
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          style={{ scale: scaleEffect }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-xl border border-purple-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)' }}
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.3)',
                '0 0 40px rgba(99, 102, 241, 0.3)',
                '0 0 20px rgba(168, 85, 247, 0.3)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Rocket className="w-5 h-5 text-purple-300" />
            <span className="text-purple-200 font-semibold">
              {roadmapContent.badge[language]}
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: roadmapContent.title[language] }}
          />

          <motion.p 
            className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {roadmapContent.subtitle[language]}
          </motion.p>

          <style jsx>{`
            .future-gradient {
              background: linear-gradient(135deg, #8b5cf6, #a855f7, #c084fc, #e879f9, #f0abfc, #fbbf24);
              background-size: 600% 600%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: future-flow 12s ease-in-out infinite;
            }
            
            @keyframes future-flow {
              0%, 100% { background-position: 0% 50%; }
              16% { background-position: 100% 0%; }
              33% { background-position: 100% 100%; }
              50% { background-position: 50% 100%; }
              66% { background-position: 0% 100%; }
              83% { background-position: 0% 0%; }
            }
          `}</style>
        </motion.div>

        {/* Master Timeline Overview */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="bg-black/20 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">
                {language === 'hu' ? '10 Éves Stratégiai Vízió' : '10-Year Strategic Vision'}
              </h3>
              
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isPlaying 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-hover="true"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>
                
                <div className="flex items-center gap-2">
                  <span className="text-purple-200 text-sm">
                    {language === 'hu' ? 'Sebesség:' : 'Speed:'}
                  </span>
                  <select 
                    value={playbackSpeed}
                    onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                    className="bg-black/30 border border-purple-400/30 rounded-lg px-3 py-1 text-white text-sm"
                  >
                    <option value={0.5}>0.5x</option>
                    <option value={1}>1x</option>
                    <option value={2}>2x</option>
                    <option value={4}>4x</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Master Timeline */}
            <div className="relative">
              {/* Timeline Background */}
              <div className="h-4 bg-white/10 rounded-full overflow-hidden mb-6">
                <motion.div 
                  className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full"
                  style={{ width: `${animationProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Year Markers */}
              <div className="flex justify-between items-center">
                {Object.keys(roadmapContent.timeline).map((year, index) => {
                  const yearData = roadmapContent.timeline[year];
                  const isActive = parseInt(year) === selectedYear;
                  const progress = (index / (Object.keys(roadmapContent.timeline).length - 1)) * 100;
                  const isPassed = animationProgress >= progress;
                  
                  return (
                    <motion.div
                      key={year}
                      className={`flex flex-col items-center cursor-pointer group ${isActive ? 'z-10' : ''}`}
                      onClick={() => setSelectedYear(parseInt(year))}
                      whileHover={{ scale: 1.1 }}
                      data-hover="true"
                    >
                      {/* Year Node */}
                      <motion.div 
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300 mb-3 ${
                          isActive 
                            ? 'bg-purple-500 border-purple-300 scale-150 shadow-lg shadow-purple-500/50' 
                            : isPassed
                            ? 'bg-white border-white'
                            : 'bg-transparent border-white/50 hover:border-white'
                        }`}
                        animate={isActive ? {
                          boxShadow: [
                            '0 0 10px rgba(168, 85, 247, 0.5)',
                            '0 0 20px rgba(168, 85, 247, 0.8)',
                            '0 0 10px rgba(168, 85, 247, 0.5)'
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                      />
                      
                      {/* Year Label */}
                      <div className={`text-center transition-all duration-300 ${
                        isActive ? 'text-white scale-110' : 'text-purple-200'
                      }`}>
                        <div className="font-bold text-lg">{year}</div>
                        <div className="text-xs">{yearData.theme?.[language]}</div>
                        <div className="text-xs text-emerald-300">${yearData.budget}M</div>
                      </div>
                      
                      {/* Milestone Count Badge */}
                      {yearData.milestones?.length > 0 && (
                        <motion.div 
                          className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {yearData.milestones.length}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Control Panel */}
        <motion.div 
          className="flex flex-wrap items-center justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {roadmapContent.categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilterCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  filterCategory === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                    : 'bg-black/20 backdrop-blur-xl border border-purple-400/30 text-purple-200 hover:bg-black/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                {category.icon}
                <span>{category.name[language]}</span>
                <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex bg-black/20 backdrop-blur-xl border border-purple-400/30 rounded-xl p-1">
              {[
                { id: 'timeline', icon: <Calendar className="w-4 h-4" />, label: { en: 'Timeline', hu: 'Idővonal' } },
                { id: 'gantt', icon: <BarChart3 className="w-4 h-4" />, label: { en: 'Gantt', hu: 'Gantt' } },
                { id: 'kanban', icon: <Layers className="w-4 h-4" />, label: { en: 'Kanban', hu: 'Kanban' } },
                { id: 'calendar', icon: <Calendar className="w-4 h-4" />, label: { en: 'Calendar', hu: 'Naptár' } }
              ].map((mode) => (
                <motion.button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    viewMode === mode.id 
                      ? 'bg-purple-500 text-white shadow-lg' 
                      : 'text-purple-200 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  data-hover="true"
                >
                  {mode.icon}
                  <span className="hidden lg:block">{mode.label[language]}</span>
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setShowDetails(!showDetails)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                showDetails 
                  ? 'bg-green-500 text-white' 
                  : 'bg-black/20 text-purple-200 border border-purple-400/30'
              }`}
              whileHover={{ scale: 1.05 }}
              data-hover="true"
            >
              {showDetails ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              {language === 'hu' ? 'Részletek' : 'Details'}
            </motion.button>
          </div>
        </motion.div>

        {/* Selected Year Overview */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-black/20 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Year Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {selectedYear}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {currentYearData.theme?.[language]}
                    </h3>
                    <p className="text-purple-200 leading-relaxed">
                      {currentYearData.description?.[language]}
                    </p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-emerald-300 mb-1">
                      ${currentYearData.budget}M
                    </div>
                    <div className="text-sm text-purple-200">
                      {language === 'hu' ? 'Éves Költségvetés' : 'Annual Budget'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-blue-300 mb-1">
                      {currentYearData.milestones?.length || 0}
                    </div>
                    <div className="text-sm text-purple-200">
                      {language === 'hu' ? 'Mérföldkövek' : 'Milestones'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-pink-300 mb-1">
                      {filteredMilestones.reduce((sum, m) => sum + m.team, 0)}
                    </div>
                    <div className="text-sm text-purple-200">
                      {language === 'hu' ? 'Csapat Tagok' : 'Team Members'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Visualization */}
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(168, 85, 247, 0.2)"
                      strokeWidth="12"
                      fill="none"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#progressGradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 352" }}
                      animate={{ strokeDasharray: `${(animationProgress / 100) * 352} 352` }}
                      transition={{ duration: 1 }}
                    />
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {Math.round(animationProgress)}%
                    </span>
                    <span className="text-xs text-purple-200">
                      {language === 'hu' ? 'Teljesítve' : 'Complete'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Milestones Grid */}
        <AnimatePresence mode="wait">
          {viewMode === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {filteredMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  className="bg-black/20 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-8 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)'
                  }}
                  onClick={() => setSelectedMilestone(milestone)}
                  data-hover="true"
                >
                  <div className="flex flex-wrap items-start gap-6">
                    {/* Quarter Badge */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                      {milestone.quarter}
                    </div>

                    {/* Milestone Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white">
                          {milestone.title[language]}
                        </h3>
                        
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          milestone.impact[language] === 'Revolutionary' || milestone.impact[language] === 'Forradalmi'
                            ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                            : milestone.impact[language] === 'Very High' || milestone.impact[language] === 'Nagyon Magas'
                            ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                            : 'bg-green-500/20 text-green-300 border border-green-500/30'
                        }`}>
                          {milestone.impact[language]} {language === 'hu' ? 'Hatás' : 'Impact'}
                        </span>
                        
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          milestone.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                          milestone.status === 'in-progress' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {milestone.status === 'completed' && (language === 'hu' ? 'Befejezve' : 'Completed')}
                          {milestone.status === 'in-progress' && (language === 'hu' ? 'Folyamatban' : 'In Progress')}
                          {milestone.status === 'planning' && (language === 'hu' ? 'Tervezés' : 'Planning')}
                        </span>
                      </div>

                      <p className="text-purple-100 mb-4 leading-relaxed">
                        {milestone.description[language]}
                      </p>

                      {/* KPIs */}
                      {showDetails && milestone.kpis && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          {milestone.kpis.map((kpi, kpiIndex) => (
                            <div key={kpiIndex} className="bg-white/5 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-purple-200">{kpi.metric}</span>
                                <span className="text-xs text-purple-300">
                                  {kpi.current}/{kpi.target}{kpi.unit || ''}
                                </span>
                              </div>
                              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${(kpi.current / kpi.target) * 100}%` }}
                                  transition={{ duration: 1, delay: index * 0.2 + kpiIndex * 0.1 }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Dependencies and Risks */}
                      {showDetails && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Dependencies */}
                          {milestone.dependencies && milestone.dependencies.length > 0 && (
                            <div>
                              <h4 className="text-sm font-medium text-purple-200 mb-2">
                                {language === 'hu' ? 'Függőségek' : 'Dependencies'}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {milestone.dependencies.map((dep, depIndex) => (
                                  <span key={depIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                                    {dep}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Risks */}
                          {milestone.risks && milestone.risks.length > 0 && (
                            <div>
                              <h4 className="text-sm font-medium text-purple-200 mb-2">
                                {language === 'hu' ? 'Kockázatok' : 'Risks'}
                              </h4>
                              <div className="space-y-1">
                                {milestone.risks.map((risk, riskIndex) => (
                                  <div key={riskIndex} className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${
                                      risk.level === 'Very High' ? 'bg-red-400' :
                                      risk.level === 'High' ? 'bg-orange-400' :
                                      risk.level === 'Medium' ? 'bg-yellow-400' : 'bg-green-400'
                                    }`}></div>
                                    <span className="text-xs text-purple-200">
                                      {risk.description[language]}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Budget and Team */}
                    <div className="text-right">
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-emerald-300">
                          ${milestone.budget}M
                        </div>
                        <div className="text-sm text-purple-200">
                          {language === 'hu' ? 'Költségvetés' : 'Budget'}
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-300">
                          {milestone.team}
                        </div>
                        <div className="text-sm text-purple-200">
                          {language === 'hu' ? 'Csapat' : 'Team'}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredMilestones.length === 0 && (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {language === 'hu' ? 'Nincsenek Mérföldkövek' : 'No Milestones'}
                  </h3>
                  <p className="text-purple-200">
                    {language === 'hu' 
                      ? 'A kiválasztott évhez és kategóriához még nincsenek részletes mérföldkövek meghatározva.'
                      : 'No detailed milestones have been defined for the selected year and category yet.'
                    }
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Download className="w-5 h-5" />
              {language === 'hu' ? 'Ütemterv Letöltése' : 'Download Roadmap'}
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 bg-black/20 backdrop-blur-xl border border-purple-400/30 text-purple-200 rounded-2xl font-semibold hover:bg-black/30 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Share2 className="w-5 h-5" />
              {language === 'hu' ? 'Jövőkép Megosztása' : 'Share Vision'}
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Lightbulb className="w-5 h-5" />
              {language === 'hu' ? 'Innovációs Betekintés' : 'Innovation Insights'}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Milestone Detail Modal */}
      <AnimatePresence>
        {selectedMilestone && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMilestone(null)}
          >
            <motion.div 
              className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-400/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedMilestone.title[language]}
                  </h2>
                  <button 
                    onClick={() => setSelectedMilestone(null)}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    data-hover="true"
                  >
                    ×
                  </button>
                </div>
                
                {/* Comprehensive milestone details would go here */}
                <div className="space-y-6">
                  <p className="text-purple-100 text-lg leading-relaxed">
                    {selectedMilestone.description[language]}
                  </p>
                  
                  {/* Add more detailed milestone information */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FutureRoadmap;