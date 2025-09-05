import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Clock, 
  Calendar, 
  Lightbulb, 
  Rocket, 
  Star,
  Trophy,
  History,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
  Eye,
  Share2,
  Cpu,
  Atom,
  Leaf,
  Users,
  Building2,
  Globe2,
  Recycle,
  Puzzle,
  ArrowRight,
  Search,
  Timer,
  XCircle,
  Handshake
} from 'lucide-react';

const InnovationTimeline = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [currentYear, setCurrentYear] = useState(2024);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [viewMode, setViewMode] = useState('timeline');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [timelineScale, setTimelineScale] = useState('years');
  const [showDetails, setShowDetails] = useState(true);
  const [autoplay, setAutoplay] = useState(false);

  // Advanced scroll-based animations
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleEffect = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Auto-play timeline
  useEffect(() => {
    if (!autoplay || !isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentYear(prev => {
        const nextYear = prev + 1;
        if (nextYear > 2024) return 2014;
        return nextYear;
      });
    }, 2000 / playbackSpeed);

    return () => clearInterval(interval);
  }, [autoplay, isPlaying, playbackSpeed]);

  const timelineContent = {
    badge: {
      en: "Innovation Journey",
      hu: "Innovációs Utazás"
    },
    title: {
      en: "A Decade of<br/><span class='innovation-gradient'>Breakthrough Moments</span>",
      hu: "Egy Évtized<br/><span class='innovation-gradient'>Áttörő Pillanatai</span>"
    },
    subtitle: {
      en: "Explore our transformative journey through 10 years of groundbreaking innovations, strategic partnerships, and sustainable manufacturing breakthroughs that shaped the industry.",
      hu: "Fedezze fel átalakító utazásunkat 10 év úttörő innovációin, stratégiai partnerségein és fenntartható gyártási áttörésein keresztül, amelyek formálták az ipart."
    },
    categories: [
      {
        id: 'all',
        name: { en: 'All Innovations', hu: 'Minden Innováció' },
        icon: <Lightbulb className="w-5 h-5" />,
        color: 'from-yellow-500 to-orange-500',
        count: 47
      },
      {
        id: 'product',
        name: { en: 'Product Innovation', hu: 'Termék Innováció' },
        icon: <Rocket className="w-5 h-5" />,
        color: 'from-blue-500 to-cyan-500',
        count: 18
      },
      {
        id: 'technology',
        name: { en: 'Technology', hu: 'Technológia' },
        icon: <Cpu className="w-5 h-5" />,
        color: 'from-purple-500 to-indigo-500',
        count: 12
      },
      {
        id: 'sustainability',
        name: { en: 'Sustainability', hu: 'Fenntarthatóság' },
        icon: <Leaf className="w-5 h-5" />,
        color: 'from-green-500 to-emerald-500',
        count: 9
      },
      {
        id: 'partnerships',
        name: { en: 'Partnerships', hu: 'Partnerségek' },
        icon: <Users className="w-5 h-5" />,
        color: 'from-pink-500 to-rose-500',
        count: 8
      }
    ],
    milestones: [
      {
        id: 'founding',
        year: 2014,
        quarter: 'Q1',
        month: 'March',
        category: 'partnerships',
        type: 'foundation',
        impact: 'revolutionary',
        title: {
          en: 'Company Foundation & Vision',
          hu: 'Cégalapítás és Vízió'
        },
        description: {
          en: 'STAR-PLUS Kft was founded with a revolutionary vision to transform the plastic container manufacturing industry through sustainable innovation and smart manufacturing.',
          hu: 'A STAR-PLUS Kft forradalmi vízióval alakult meg, hogy átalakítsa a műanyag tárolóedény gyártási ipart fenntartható innováció és okos gyártás révén.'
        },
        achievements: [
          { en: 'Established core manufacturing facility', hu: 'Alapvető gyártási létesítmény kialakítása' },
          { en: 'Assembled founding team of 5 experts', hu: '5 szakértőből álló alapító csapat összehozása' },
          { en: 'Defined sustainability-first mission', hu: 'Fenntarthatóság-centrikus küldetés meghatározása' },
          { en: 'Secured initial €500K funding', hu: 'Kezdeti 500K€ finanszírozás biztosítása' }
        ],
        metrics: {
          teamSize: 5,
          revenue: 0.1,
          products: 3,
          customers: 12,
          sustainability: 35
        },
        icon: <Building2 className="w-6 h-6" />,
        color: 'from-blue-500 to-cyan-500',
        awards: []
      },
      {
        id: 'first-innovation',
        year: 2015,
        quarter: 'Q2',
        month: 'June',
        category: 'product',
        type: 'breakthrough',
        impact: 'high',
        title: {
          en: 'Revolutionary Modular Container System',
          hu: 'Forradalmi Moduláris Tárolórendszer'
        },
        description: {
          en: 'Launched our first breakthrough product: the modular container system that allows infinite customization and space optimization for modern households.',
          hu: 'Elindítottuk első áttörő termékünket: a moduláris tárolórendszert, amely végtelen testreszabást és téroptimalizálást tesz lehetővé modern háztartások számára.'
        },
        achievements: [
          { en: 'Patent application filed for connection system', hu: 'Szabadalmi bejelentés benyújtása kapcsolódási rendszerre' },
          { en: '15 different container sizes developed', hu: '15 különböző tárolóméret kifejlesztése' },
          { en: 'First 1000 units sold within 3 months', hu: 'Első 1000 darab eladása 3 hónapon belül' },
          { en: 'Featured in 3 major design magazines', hu: 'Megjelenés 3 nagy design magazinban' }
        ],
        metrics: {
          teamSize: 12,
          revenue: 0.8,
          products: 15,
          customers: 150,
          sustainability: 45
        },
        icon: <Puzzle className="w-6 h-6" />,
        color: 'from-purple-500 to-indigo-500',
        awards: ['Hungarian Design Award 2015']
      },
      {
        id: 'smart-tech',
        year: 2016,
        quarter: 'Q4',
        month: 'November',
        category: 'technology',
        type: 'innovation',
        impact: 'revolutionary',
        title: {
          en: 'Smart Container Technology Integration',
          hu: 'Okos Tárolótechnológia Integráció'
        },
        description: {
          en: 'Introduced IoT-enabled smart containers with RFID tracking, inventory management, and mobile app integration for next-generation organization.',
          hu: 'IoT-képes okos tárolók bevezetése RFID követéssel, készletkezeléssel és mobilalkalmazás integrációval az új generációs szervezéshez.'
        },
        achievements: [
          { en: 'Developed proprietary RFID integration system', hu: 'Tulajdonosi RFID integrációs rendszer kifejlesztése' },
          { en: 'Launched SmartStore mobile application', hu: 'SmartStore mobilalkalmazás elindítása' },
          { en: 'Partnership with tech startup for AI algorithms', hu: 'Partnerség tech startuppal AI algoritmusokért' },
          { en: '5000+ smart containers deployed in beta', hu: '5000+ okos tároló telepítése béta verzióban' }
        ],
        metrics: {
          teamSize: 25,
          revenue: 2.3,
          products: 8,
          customers: 500,
          sustainability: 52
        },
        icon: <Cpu className="w-6 h-6" />,
        color: 'from-cyan-500 to-blue-500',
        awards: ['Tech Innovation Award 2017', 'IoT Excellence Recognition']
      },
      {
        id: 'sustainability-pivot',
        year: 2017,
        quarter: 'Q3',
        month: 'August',
        category: 'sustainability',
        type: 'transformation',
        impact: 'revolutionary',
        title: {
          en: 'Complete Sustainability Transformation',
          hu: 'Teljes Fenntarthatósági Átalakulás'
        },
        description: {
          en: 'Pivoted entire manufacturing process to 100% recycled materials and implemented closed-loop production system, setting new industry standards.',
          hu: 'Teljes gyártási folyamat átállítása 100% újrahasznosított anyagokra és zárt hurkú termelési rendszer bevezetése, új iparági standardok felállítása.'
        },
        achievements: [
          { en: 'Achieved 100% recycled material usage', hu: '100% újrahasznosított anyaghasználat elérése' },
          { en: 'Established partnerships with 15 recycling centers', hu: 'Partnerségek kialakítása 15 újrahasznosító központtal' },
          { en: 'Developed proprietary plastic purification process', hu: 'Tulajdonosi műanyag tisztítási folyamat kifejlesztése' },
          { en: 'Reduced carbon footprint by 80%', hu: 'Szénlábnyom 80%-os csökkentése' }
        ],
        metrics: {
          teamSize: 35,
          revenue: 4.1,
          products: 25,
          customers: 1200,
          sustainability: 95
        },
        icon: <Recycle className="w-6 h-6" />,
        color: 'from-green-500 to-emerald-500',
        awards: ['European Sustainability Award 2018', 'Green Manufacturing Excellence']
      },
      {
        id: 'ikea-partnership',
        year: 2018,
        quarter: 'Q1',
        month: 'February',
        category: 'partnerships',
        type: 'strategic',
        impact: 'revolutionary',
        title: {
          en: 'Strategic IKEA Partnership Launch',
          hu: 'Stratégiai IKEA Partnerség Indítása'
        },
        description: {
          en: 'Secured transformative partnership with IKEA to co-develop the VARIERA kitchen organization series, reaching millions of homes worldwide.',
          hu: 'Átalakító partnerség biztosítása az IKEA-val a VARIERA konyhai szervezési sorozat közös fejlesztésére, milliós otthonok elérése világszerte.'
        },
        achievements: [
          { en: 'Co-developed 45 VARIERA product variants', hu: '45 VARIERA termékváltozat közös fejlesztése' },
          { en: 'Launched in 25+ countries simultaneously', hu: 'Egyidejű indítás 25+ országban' },
          { en: 'Achieved €15M in first-year sales', hu: '15M€ első éves eladás elérése' },
          { en: 'Established dedicated IKEA production line', hu: 'Dedikált IKEA gyártósor kialakítása' }
        ],
        metrics: {
          teamSize: 65,
          revenue: 15.2,
          products: 45,
          customers: 500000,
          sustainability: 88
        },
        icon: <Handshake className="w-6 h-6" />,
        color: 'from-yellow-500 to-orange-500',
        awards: ['Partnership Excellence Award 2019', 'International Design Collaboration']
      },
      {
        id: 'ai-manufacturing',
        year: 2019,
        quarter: 'Q2',
        month: 'May',
        category: 'technology',
        type: 'revolution',
        impact: 'revolutionary',
        title: {
          en: 'AI-Powered Manufacturing Revolution',
          hu: 'AI-Vezérelt Gyártási Forradalom'
        },
        description: {
          en: 'Implemented cutting-edge AI and machine learning systems for predictive manufacturing, quality control, and supply chain optimization.',
          hu: 'Élvonalbeli AI és gépi tanulási rendszerek bevezetése prediktív gyártáshoz, minőségbiztosításhoz és ellátási lánc optimalizáláshoz.'
        },
        achievements: [
          { en: 'Deployed proprietary AI manufacturing platform', hu: 'Tulajdonosi AI gyártási platform telepítése' },
          { en: 'Achieved 35% increase in production efficiency', hu: '35%-os termelési hatékonyság növelés elérése' },
          { en: 'Reduced defect rate to less than 0.1%', hu: 'Hibaarány csökkentése 0,1% alá' },
          { en: 'Implemented predictive maintenance system', hu: 'Prediktív karbantartási rendszer bevezetése' }
        ],
        metrics: {
          teamSize: 85,
          revenue: 28.5,
          products: 67,
          customers: 750000,
          sustainability: 91
        },
        icon: <Atom className="w-6 h-6" />,
        color: 'from-purple-500 to-pink-500',
        awards: ['AI Innovation Award 2020', 'Manufacturing Excellence Recognition']
      },
      {
        id: 'global-expansion',
        year: 2020,
        quarter: 'Q3',
        month: 'September',
        category: 'partnerships',
        type: 'expansion',
        impact: 'high',
        title: {
          en: 'Global Market Expansion Initiative',
          hu: 'Globális Piaci Terjeszkedési Kezdeményezés'
        },
        description: {
          en: 'Launched comprehensive global expansion strategy with new manufacturing facilities in Asia and North America, establishing worldwide presence.',
          hu: 'Átfogó globális terjeszkedési stratégia indítása új gyártási létesítményekkel Ázsiában és Észak-Amerikában, világméretű jelenlét kialakítása.'
        },
        achievements: [
          { en: 'Opened manufacturing facilities in 3 new countries', hu: 'Gyártási létesítmények megnyitása 3 új országban' },
          { en: 'Established partnerships with 50+ local suppliers', hu: 'Partnerségek kialakítása 50+ helyi beszállítóval' },
          { en: 'Achieved 200% increase in global market reach', hu: '200%-os globális piaci elérés növelés' },
          { en: 'Maintained carbon-neutral operations worldwide', hu: 'Szén-semleges működés fenntartása világszerte' }
        ],
        metrics: {
          teamSize: 180,
          revenue: 65.8,
          products: 89,
          customers: 2000000,
          sustainability: 89
        },
        icon: <Globe2 className="w-6 h-6" />,
        color: 'from-blue-500 to-indigo-500',
        awards: ['Global Expansion Excellence 2021', 'International Business Award']
      },
      {
        id: 'circular-economy',
        year: 2021,
        quarter: 'Q4',
        month: 'November',
        category: 'sustainability',
        type: 'breakthrough',
        impact: 'revolutionary',
        title: {
          en: 'Circular Economy Leadership Program',
          hu: 'Körforgásos Gazdaság Vezető Program'
        },
        description: {
          en: 'Launched industry-first comprehensive circular economy program with take-back services, material passports, and closed-loop manufacturing.',
          hu: 'Iparágban első átfogó körforgásos gazdaság program indítása visszavételi szolgáltatásokkal, anyag útlevelekkel és zárt hurkú gyártással.'
        },
        achievements: [
          { en: 'Achieved 98% material recovery rate', hu: '98%-os anyag-visszanyerési arány elérése' },
          { en: 'Launched digital material passport system', hu: 'Digitális anyag útlevél rendszer indítása' },
          { en: 'Established 200+ collection points globally', hu: '200+ gyűjtőpont kialakítása globálisan' },
          { en: 'Pioneered chemical recycling technology', hu: 'Kémiai újrahasznosítási technológia úttörője' }
        ],
        metrics: {
          teamSize: 220,
          revenue: 95.3,
          products: 123,
          customers: 3500000,
          sustainability: 97
        },
        icon: <ArrowRight className="w-6 h-6" />,
        color: 'from-emerald-500 to-green-500',
        awards: ['Circular Economy Innovation Award 2022', 'Sustainability Leadership Recognition']
      },
      {
        id: 'quantum-materials',
        year: 2022,
        quarter: 'Q2',
        month: 'June',
        category: 'technology',
        type: 'breakthrough',
        impact: 'revolutionary',
        title: {
          en: 'Quantum Material Science Breakthrough',
          hu: 'Kvantum Anyagtudomány Áttörés'
        },
        description: {
          en: 'Developed revolutionary quantum-enhanced materials with self-healing properties and adaptive functionality for next-generation containers.',
          hu: 'Forradalmi kvantum-fejlesztett anyagok kifejlesztése öngyógyító tulajdonságokkal és adaptív funkcionalitással következő generációs tárolókhoz.'
        },
        achievements: [
          { en: 'Developed self-healing polymer technology', hu: 'Öngyógyító polimer technológia kifejlesztése' },
          { en: 'Filed 15 breakthrough material patents', hu: '15 áttörő anyag szabadalom bejelentése' },
          { en: 'Created adaptive container prototypes', hu: 'Adaptív tároló prototípusok létrehozása' },
          { en: 'Established quantum materials research lab', hu: 'Kvantum anyagok kutatólaboratórium kialakítása' }
        ],
        metrics: {
          teamSize: 275,
          revenue: 145.7,
          products: 89,
          customers: 4200000,
          sustainability: 94
        },
        icon: <Atom className="w-6 h-6" />,
        color: 'from-violet-500 to-purple-500',
        awards: ['Nobel Prize Nomination 2023', 'Materials Science Breakthrough Award']
      },
      {
        id: 'space-collaboration',
        year: 2023,
        quarter: 'Q1',
        month: 'March',
        category: 'partnerships',
        type: 'revolutionary',
        impact: 'revolutionary',
        title: {
          en: 'Space-Grade Container Development',
          hu: 'Űrminőségű Tároló Fejlesztés'
        },
        description: {
          en: 'Partnered with space agencies to develop ultra-lightweight, radiation-resistant containers for Mars missions and space station applications.',
          hu: 'Partnerség űrügynökségekkel ultra-könnyű, sugárzásálló tárolók fejlesztésére Mars missziókhoz és űrállomás alkalmazásokhoz.'
        },
        achievements: [
          { en: 'Successfully tested containers in space environment', hu: 'Sikeres tesztelés űrkörnyezetben' },
          { en: 'Developed radiation-resistant material formulation', hu: 'Sugárzásálló anyagkeverék kifejlesztése' },
          { en: 'Achieved 90% weight reduction vs traditional containers', hu: '90%-os súlycsökkentés hagyományos tárolókhoz képest' },
          { en: 'Secured contracts for 3 upcoming Mars missions', hu: 'Szerződések biztosítása 3 közelgő Mars misszióhoz' }
        ],
        metrics: {
          teamSize: 320,
          revenue: 203.4,
          products: 12,
          customers: 15,
          sustainability: 96
        },
        icon: <Rocket className="w-6 h-6" />,
        color: 'from-indigo-500 to-blue-500',
        awards: ['Space Innovation Award 2023', 'Aerospace Excellence Recognition']
      },
      {
        id: 'ai-sustainability',
        year: 2024,
        quarter: 'Q2',
        month: 'June',
        category: 'sustainability',
        type: 'revolution',
        impact: 'revolutionary',
        title: {
          en: 'AI-Driven Carbon Negative Operations',
          hu: 'AI-Vezérelt Szén-Negatív Működés'
        },
        description: {
          en: 'Achieved industry-first carbon negative operations through AI-optimized processes, becoming the world\'s first carbon-negative container manufacturer.',
          hu: 'Iparágban első szén-negatív működés elérése AI-optimalizált folyamatokon keresztül, a világ első szén-negatív tárológyártójává válva.'
        },
        achievements: [
          { en: 'Achieved -15% carbon footprint (carbon negative)', hu: '-15%-os szénlábnyom elérése (szén-negatív)' },
          { en: 'Deployed advanced AI optimization across all operations', hu: 'Fejlett AI optimalizálás telepítése minden műveletben' },
          { en: 'Integrated atmospheric CO2 capture technology', hu: 'Légköri CO2 befogási technológia integrálása' },
          { en: 'Became world\'s first carbon-negative manufacturer', hu: 'A világ első szén-negatív gyártójává válás' }
        ],
        metrics: {
          teamSize: 380,
          revenue: 285.9,
          products: 234,
          customers: 6500000,
          sustainability: 115
        },
        icon: <Leaf className="w-6 h-6" />,
        color: 'from-green-400 to-emerald-600',
        awards: ['Climate Leadership Award 2024', 'AI for Good Recognition', 'Carbon Negative Pioneer Award']
      }
    ]
  };

  // Filter milestones based on search, category, and selected year
  const filteredMilestones = timelineContent.milestones.filter(milestone => {
    const matchesCategory = filterCategory === 'all' || milestone.category === filterCategory;
    const matchesSearch = milestone.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
                         milestone.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = viewMode === 'timeline' ? true : milestone.year <= currentYear;
    
    return matchesCategory && matchesSearch && matchesYear;
  });

  // Get milestone for current year
  const currentMilestone = timelineContent.milestones.find(m => m.year === currentYear);

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,theme(colors.blue.500/15),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,theme(colors.purple.500/15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/images/innovation-pattern.svg')] opacity-5"></div>
        
        {/* Floating timeline elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "easeInOut"
            }}
          >
            {i % 5 === 0 && <Clock className="w-6 h-6 text-blue-400/30" />}
            {i % 5 === 1 && <Lightbulb className="w-5 h-5 text-yellow-400/30" />}
            {i % 5 === 2 && <Rocket className="w-5 h-5 text-purple-400/30" />}
            {i % 5 === 3 && <Star className="w-4 h-4 text-pink-400/30" />}
            {i % 5 === 4 && <Trophy className="w-5 h-5 text-orange-400/30" />}
          </motion.div>
        ))}
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 40px rgba(147, 51, 234, 0.3)',
                '0 0 20px rgba(59, 130, 246, 0.3)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <History className="w-5 h-5 text-blue-300" />
            <span className="text-blue-200 font-semibold">
              {timelineContent.badge[language]}
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: timelineContent.title[language] }}
          />

          <motion.p 
            className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {timelineContent.subtitle[language]}
          </motion.p>

          <style jsx>{`
            .innovation-gradient {
              background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981);
              background-size: 400% 400%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: innovation-flow 12s ease-in-out infinite;
            }
            
            @keyframes innovation-flow {
              0%, 100% { background-position: 0% 50%; }
              25% { background-position: 100% 0%; }
              50% { background-position: 100% 100%; }
              75% { background-position: 0% 100%; }
            }
          `}</style>
        </motion.div>

        {/* Timeline Controls */}
        <motion.div 
          className="flex flex-wrap items-center justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Search and Filter */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                placeholder={language === 'hu' ? 'Keresés az idővonalon...' : 'Search timeline...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-black/20 backdrop-blur-xl border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-all duration-300 w-64"
              />
            </div>

            <div className="flex bg-black/20 backdrop-blur-xl border border-blue-400/30 rounded-xl p-1">
              {timelineContent.categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setFilterCategory(category.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filterCategory === category.id 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                      : 'text-blue-200 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  data-hover="true"
                >
                  {category.icon}
                  <span className="hidden md:block">{category.name[language]}</span>
                  <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center gap-4">
            <div className="flex bg-black/20 backdrop-blur-xl border border-blue-400/30 rounded-xl p-1">
              <motion.button
                onClick={() => setCurrentYear(Math.max(2014, currentYear - 1))}
                className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-hover="true"
              >
                <SkipBack className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isPlaying ? 'bg-blue-500 text-white' : 'text-blue-200 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-hover="true"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </motion.button>
              
              <motion.button
                onClick={() => setCurrentYear(Math.min(2024, currentYear + 1))}
                className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-hover="true"
              >
                <SkipForward className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Speed Control */}
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-xl border border-blue-400/30 rounded-xl px-3 py-2">
              <Timer className="w-4 h-4 text-blue-300" />
              <select
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                className="bg-transparent text-blue-200 text-sm focus:outline-none"
              >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>

            {/* Autoplay Toggle */}
            <motion.button
              onClick={() => setAutoplay(!autoplay)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                autoplay 
                  ? 'bg-green-500 text-white' 
                  : 'bg-black/20 text-blue-200 border border-blue-400/30'
              }`}
              whileHover={{ scale: 1.05 }}
              data-hover="true"
            >
              <RotateCcw className={`w-4 h-4 ${autoplay ? 'animate-spin' : ''}`} />
              {language === 'hu' ? 'Auto' : 'Auto'}
            </motion.button>
          </div>
        </motion.div>

        {/* Year Selector */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Array.from({ length: 11 }, (_, i) => 2014 + i).map((year) => (
              <motion.button
                key={year}
                onClick={() => setCurrentYear(year)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  currentYear === year
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-black/20 text-blue-200 hover:bg-black/30 border border-blue-400/30'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                {year}
              </motion.button>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="relative h-2 bg-black/20 rounded-full overflow-hidden backdrop-blur-xl border border-blue-400/30">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ 
                width: `${((currentYear - 2014) / 10) * 100}%`
              }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Year markers */}
            {timelineContent.milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white cursor-pointer"
                style={{ 
                  left: `${((milestone.year - 2014) / 10) * 100}%`,
                  backgroundColor: milestone.year <= currentYear ? '#3b82f6' : '#374151'
                }}
                whileHover={{ scale: 1.5 }}
                onClick={() => setCurrentYear(milestone.year)}
                data-hover="true"
              >
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {milestone.year}: {milestone.title[language]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Year Highlight */}
        {currentMilestone && (
          <motion.div 
            className="mb-16"
            key={currentYear}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`bg-gradient-to-r ${currentMilestone.color} p-1 rounded-3xl`}>
              <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8">
                <div className="flex flex-wrap items-start gap-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentMilestone.color} flex items-center justify-center text-white shadow-2xl`}>
                    {currentMilestone.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="text-4xl font-bold text-white">
                        {currentMilestone.year}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${currentMilestone.color} text-white`}>
                          {currentMilestone.quarter}
                        </span>
                        <span className="text-blue-200 text-sm">
                          {currentMilestone.month}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                        currentMilestone.impact === 'revolutionary' ? 'bg-red-500/20 text-red-300' :
                        currentMilestone.impact === 'high' ? 'bg-orange-500/20 text-orange-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {currentMilestone.impact} {language === 'hu' ? 'hatás' : 'impact'}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {currentMilestone.title[language]}
                    </h3>
                    
                    <p className="text-blue-100 text-lg leading-relaxed mb-6">
                      {currentMilestone.description[language]}
                    </p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      {Object.entries(currentMilestone.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <motion.div 
                            className="text-2xl font-bold text-white mb-1"
                            animate={{
                              scale: [1, 1.1, 1],
                              color: ['#ffffff', '#3b82f6', '#ffffff']
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          >
                            {typeof value === 'number' ? 
                              (key === 'revenue' ? `€${value.toFixed(1)}M` : 
                               key === 'sustainability' ? `${value}%` : 
                               value.toLocaleString()) 
                              : value
                            }
                          </motion.div>
                          <div className="text-xs text-blue-300 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Awards */}
                    {currentMilestone.awards.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {currentMilestone.awards.map((award, index) => (
                          <div key={index} className="flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                            <Trophy className="w-4 h-4" />
                            {award}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.button 
                      onClick={() => setSelectedMilestone(currentMilestone)}
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      data-hover="true"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button 
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      data-hover="true"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Milestone Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {filteredMilestones.map((milestone) => (
            <motion.div
              key={milestone.id}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white bg-gradient-to-r ${milestone.color}`}>
                  {milestone.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-semibold text-white mb-1">
                    {milestone.title[language]}
                  </div>
                  <div className="text-sm text-blue-300 mb-2">
                    {milestone.year} - {milestone.quarter}, {milestone.month}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {milestone.achievements.map((achievement, index) => (
                      <span key={index} className="text-xs rounded-full bg-blue-500/20 text-blue-300 px-3 py-1">
                        {achievement[language]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                {milestone.description[language]}
              </p>
              
              {/* Metrics Section */}
              <div className="grid grid-cols-2 gap-4 text-center mb-4">
                {Object.entries(milestone.metrics).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-lg font-bold text-white">
                      {typeof value === 'number' ? 
                        (key === 'revenue' ? `€${value.toFixed(1)}M` : 
                         key === 'sustainability' ? `${value}%` : 
                         value.toLocaleString()) 
                        : value
                      }
                    </div>
                    <div className="text-xs text-blue-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Awards Section */}
              {milestone.awards.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {milestone.awards.map((award, index) => (
                    <div key={index} className="flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs">
                      <Trophy className="w-4 h-4" />
                      {award}
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex justify-end gap-2">
                <motion.button 
                  onClick={() => setSelectedMilestone(milestone)}
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-hover="true"
                >
                  {language === 'hu' ? 'Részletek' : 'Details'}
                </motion.button>
                
                <motion.button 
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white shadow-md hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-hover="true"
                >
                  <Share2 className="w-5 h-5 inline-block mr-1" />
                  {language === 'hu' ? 'Megosztás' : 'Share'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Milestone Details Modal */}
        {selectedMilestone && (
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden w-full max-w-3xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <motion.button
                    onClick={() => setSelectedMilestone(null)}
                    className="text-gray-400 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    data-hover="true"
                  >
                    <XCircle className="w-6 h-6" />
                  </motion.button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white bg-gradient-to-r ${selectedMilestone.color}`}>
                      {selectedMilestone.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="text-lg font-semibold text-white mb-1">
                        {selectedMilestone.title[language]}
                      </div>
                      <div className="text-sm text-blue-300 mb-2">
                        {selectedMilestone.year} - {selectedMilestone.quarter}, {selectedMilestone.month}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    {selectedMilestone.description[language]}
                  </p>
                  
                  {/* Metrics Section */}
                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    {Object.entries(selectedMilestone.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-white">
                          {typeof value === 'number' ? 
                            (key === 'revenue' ? `€${value.toFixed(1)}M` : 
                             key === 'sustainability' ? `${value}%` : 
                             value.toLocaleString()) 
                            : value
                          }
                        </div>
                        <div className="text-xs text-blue-300 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Awards Section */}
                  {selectedMilestone.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedMilestone.awards.map((award, index) => (
                        <div key={index} className="flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs">
                          <Trophy className="w-4 h-4" />
                          {award}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-end gap-2">
                    <motion.button 
                      onClick={() => setSelectedMilestone(null)}
                      className="px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-hover="true"
                    >
                      {language === 'hu' ? 'Bezárás' : 'Close'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default InnovationTimeline;