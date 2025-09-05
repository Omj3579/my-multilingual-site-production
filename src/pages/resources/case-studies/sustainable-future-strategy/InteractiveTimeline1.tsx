import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Calendar, 
  Award, 
  Lightbulb, 
  Target, 
  Users, 
  TrendingUp,
  Factory,
  Recycle,
  Globe,
  Star,
  Zap,
  Shield,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Download,
  Share2,
  Bookmark
} from 'lucide-react';
import Image from 'next/image';

const InteractiveTimeline1 = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [activeYear, setActiveYear] = useState(2020);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline', 'grid', 'story'
  const [savedMilestones, setSavedMilestones] = useState(new Set());

  // Advanced scroll transforms
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  const timelineContent = {
    badge: {
      en: "Innovation Journey",
      hu: "Innovációs Utazás"
    },
    title: {
      en: "A Decade of<br/><span class='timeline-gradient'>Revolutionary Progress</span>",
      hu: "Egy Évtized<br/><span class='timeline-gradient'>Forradalmi Fejlődés</span>"
    },
    subtitle: {
      en: "Explore our transformative journey from traditional manufacturing to smart household innovation, marked by groundbreaking achievements and sustainable milestones.",
      hu: "Fedezze fel átalakító utazásunkat a hagyományos gyártástól az okos háztartási innovációig, korszakalkotó eredményekkel és fenntartható mérföldkövekkel jelölve."
    },
    milestones: [
      {
        year: 2015,
        quarter: "Q1",
        title: { 
          en: "Foundation & Vision", 
          hu: "Alapítás és Vízió" 
        },
        subtitle: { 
          en: "The Beginning of Excellence", 
          hu: "A Kiválóság Kezdete" 
        },
        description: {
          en: "Established our state-of-the-art injection molding facility with a vision to revolutionize household product manufacturing through precision engineering and sustainable practices.",
          hu: "Élvonalbeli fröccsöntő üzemünk létrehozása azzal a vízióval, hogy forradalmasítsuk a háztartási termékek gyártását precíziós mérnöki munkán és fenntartható gyakorlatokon keresztül."
        },
        category: "foundation",
        icon: <Factory className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-500",
        achievements: [
          { en: "50,000 sq ft facility", hu: "50,000 négyzetláb üzem" },
          { en: "15 injection molding machines", hu: "15 fröccsöntő gép" },
          { en: "ISO 9001 certification", hu: "ISO 9001 tanúsítvány" },
          { en: "25 skilled employees", hu: "25 képzett alkalmazott" }
        ],
        media: {
          image: "/images/timeline/2015-foundation.jpg",
          video: "/videos/timeline/2015-facility-tour.mp4",
          gallery: [
            "/images/timeline/2015-machines.jpg",
            "/images/timeline/2015-team.jpg",
            "/images/timeline/2015-certification.jpg"
          ]
        },
        impact: {
          production: "100K units/month",
          quality: "99.2%",
          sustainability: "15% recycled materials"
        }
      },
      {
        year: 2017,
        quarter: "Q3",
        title: { 
          en: "Smart Technology Integration", 
          hu: "Okos Technológia Integráció" 
        },
        subtitle: { 
          en: "Industry 4.0 Transformation", 
          hu: "Ipar 4.0 Átalakulás" 
        },
        description: {
          en: "Revolutionary leap into smart manufacturing with IoT-enabled machinery, real-time quality monitoring, and predictive maintenance systems that increased efficiency by 40%.",
          hu: "Forradalmi ugrás az okos gyártásba IoT-képes gépekkel, valós idejű minőségellenőrzéssel és prediktív karbantartási rendszerekkel, amelyek 40%-kal növelték a hatékonyságot."
        },
        category: "technology",
        icon: <Zap className="w-6 h-6" />,
        color: "from-purple-500 to-pink-500",
        achievements: [
          { en: "IoT sensor network deployed", hu: "IoT szenzor hálózat telepítve" },
          { en: "AI-powered quality control", hu: "AI-alapú minőségellenőrzés" },
          { en: "40% efficiency increase", hu: "40% hatékonyság növekedés" },
          { en: "Real-time dashboard system", hu: "Valós idejű dashboard rendszer" }
        ],
        media: {
          image: "/images/timeline/2017-smart-tech.jpg",
          video: "/videos/timeline/2017-iot-integration.mp4",
          gallery: [
            "/images/timeline/2017-sensors.jpg",
            "/images/timeline/2017-dashboard.jpg",
            "/images/timeline/2017-ai-system.jpg"
          ]
        },
        impact: {
          production: "300K units/month",
          quality: "99.7%",
          sustainability: "25% recycled materials"
        }
      },
      {
        year: 2019,
        quarter: "Q2",
        title: { 
          en: "Sustainable Revolution", 
          hu: "Fenntarthatósági Forradalom" 
        },
        subtitle: { 
          en: "Green Manufacturing Pioneer", 
          hu: "Zöld Gyártás Úttörője" 
        },
        description: {
          en: "Launched our comprehensive sustainability program, achieving carbon neutrality and introducing bio-based materials while maintaining superior product quality and performance.",
          hu: "Átfogó fenntarthatósági programunk elindítása, szén-semlegesség elérése és bio-alapú anyagok bevezetése, miközben fenntartottuk a kiváló termékminőséget és teljesítményt."
        },
        category: "sustainability",
        icon: <Recycle className="w-6 h-6" />,
        color: "from-green-500 to-emerald-500",
        achievements: [
          { en: "Carbon neutral certification", hu: "Szén-semleges tanúsítvány" },
          { en: "50% recycled material usage", hu: "50% újrahasznosított anyag használat" },
          { en: "Zero waste to landfill", hu: "Nulla hulladék lerakóba" },
          { en: "Solar energy installation", hu: "Napenergia rendszer telepítés" }
        ],
        media: {
          image: "/images/timeline/2019-sustainability.jpg",
          video: "/videos/timeline/2019-green-manufacturing.mp4",
          gallery: [
            "/images/timeline/2019-solar-panels.jpg",
            "/images/timeline/2019-recycling.jpg",
            "/images/timeline/2019-bio-materials.jpg"
          ]
        },
        impact: {
          production: "500K units/month",
          quality: "99.9%",
          sustainability: "Carbon neutral"
        }
      },
      {
        year: 2021,
        quarter: "Q4",
        title: { 
          en: "Global Expansion", 
          hu: "Globális Terjeszkedés" 
        },
        subtitle: { 
          en: "International Recognition", 
          hu: "Nemzetközi Elismerés" 
        },
        description: {
          en: "Expanded operations across 15 countries, established strategic partnerships with leading brands, and received multiple international awards for innovation and sustainability.",
          hu: "Működés kiterjesztése 15 országra, stratégiai partnerségek kialakítása vezető márkákkal, és több nemzetközi díj elnyerése innovációért és fenntarthatóságért."
        },
        category: "expansion",
        icon: <Globe className="w-6 h-6" />,
        color: "from-orange-500 to-red-500",
        achievements: [
          { en: "15 countries presence", hu: "15 országban jelenlét" },
          { en: "50+ brand partnerships", hu: "50+ márka partnerség" },
          { en: "3 international awards", hu: "3 nemzetközi díj" },
          { en: "500% revenue growth", hu: "500% bevétel növekedés" }
        ],
        media: {
          image: "/images/timeline/2021-global.jpg",
          video: "/videos/timeline/2021-expansion.mp4",
          gallery: [
            "/images/timeline/2021-awards.jpg",
            "/images/timeline/2021-partnerships.jpg",
            "/images/timeline/2021-global-map.jpg"
          ]
        },
        impact: {
          production: "1M units/month",
          quality: "99.95%",
          sustainability: "Net positive impact"
        }
      },
      {
        year: 2023,
        quarter: "Q3",
        title: { 
          en: "AI-Powered Innovation", 
          hu: "AI-Vezérelt Innováció" 
        },
        subtitle: { 
          en: "Next-Generation Manufacturing", 
          hu: "Következő Generációs Gyártás" 
        },
        description: {
          en: "Introduced advanced AI systems for design optimization, predictive quality control, and autonomous production lines, setting new industry standards for precision and efficiency.",
          hu: "Fejlett AI rendszerek bevezetése tervezés optimalizálásra, prediktív minőségellenőrzésre és autonóm gyártósorokra, új ipari szabványokat állítva fel a pontosság és hatékonyság terén."
        },
        category: "innovation",
        icon: <Lightbulb className="w-6 h-6" />,
        color: "from-indigo-500 to-purple-500",
        achievements: [
          { en: "AI design optimization", hu: "AI tervezés optimalizálás" },
          { en: "Autonomous production lines", hu: "Autonóm gyártósorok" },
          { en: "Predictive quality control", hu: "Prediktív minőségellenőrzés" },
          { en: "60% faster prototyping", hu: "60% gyorsabb prototípus készítés" }
        ],
        media: {
          image: "/images/timeline/2023-ai.jpg",
          video: "/videos/timeline/2023-ai-systems.mp4",
          gallery: [
            "/images/timeline/2023-ai-lab.jpg",
            "/images/timeline/2023-automation.jpg",
            "/images/timeline/2023-optimization.jpg"
          ]
        },
        impact: {
          production: "2M units/month",
          quality: "99.98%",
          sustainability: "Climate positive"
        }
      },
      {
        year: 2024,
        quarter: "Q4",
        title: { 
          en: "Future Vision Realized", 
          hu: "Jövőkép Megvalósítva" 
        },
        subtitle: { 
          en: "Leading the Industry Forward", 
          hu: "Az Ipar Vezetése Előre" 
        },
        description: {
          en: "Achieved our vision of becoming the world's most innovative and sustainable household product manufacturer, with groundbreaking technologies and unmatched environmental commitment.",
          hu: "Elértük vízónkat, hogy a világ leginnovatívabb és legfenntarthatóbb háztartási termék gyártójává váljunk, úttörő technológiákkal és páratlan környezeti elkötelezettséggel."
        },
        category: "achievement",
        icon: <Award className="w-6 h-6" />,
        color: "from-yellow-500 to-orange-500",
        achievements: [
          { en: "Industry leadership position", hu: "Iparági vezető pozíció" },
          { en: "50M+ homes served", hu: "50M+ kiszolgált otthon" },
          { en: "Zero environmental impact", hu: "Nulla környezeti hatás" },
          { en: "100% customer satisfaction", hu: "100% vásárlói elégedettség" }
        ],
        media: {
          image: "/images/timeline/2024-achievement.jpg",
          video: "/videos/timeline/2024-vision-realized.mp4",
          gallery: [
            "/images/timeline/2024-celebration.jpg",
            "/images/timeline/2024-future-lab.jpg",
            "/images/timeline/2024-global-impact.jpg"
          ]
        },
        impact: {
          production: "5M units/month",
          quality: "99.99%",
          sustainability: "Regenerative impact"
        }
      }
    ]
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const currentIndex = timelineContent.milestones.findIndex(m => m.year === activeYear);
      const nextIndex = (currentIndex + 1) % timelineContent.milestones.length;
      setActiveYear(timelineContent.milestones[nextIndex].year);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, activeYear, timelineContent.milestones]);

  const activeMilestone = timelineContent.milestones.find(m => m.year === activeYear);

  const toggleSaveMilestone = (year) => {
    setSavedMilestones(prev => {
      const newSet = new Set(prev);
      if (newSet.has(year)) {
        newSet.delete(year);
      } else {
        newSet.add(year);
      }
      return newSet;
    });
  };

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,theme(colors.blue.500/10),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,theme(colors.purple.500/10),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          style={{ scale }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)' }}
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 40px rgba(139, 92, 246, 0.3)',
                '0 0 20px rgba(59, 130, 246, 0.3)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Calendar className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-200 font-semibold">
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
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {timelineContent.subtitle[language]}
          </motion.p>

          <style jsx>{`
            .timeline-gradient {
              background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899);
              background-size: 300% 300%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: timeline-flow 6s ease-in-out infinite;
            }
            
            @keyframes timeline-flow {
              0%, 100% { background-position: 0% 50%; }
              33% { background-position: 50% 100%; }
              66% { background-position: 100% 50%; }
            }
          `}</style>
        </motion.div>

        {/* Timeline Controls */}
        <motion.div 
          className="flex flex-wrap items-center justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Playback Controls */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => {
                const currentIndex = timelineContent.milestones.findIndex(m => m.year === activeYear);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : timelineContent.milestones.length - 1;
                setActiveYear(timelineContent.milestones[prevIndex].year);
              }}
              className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-hover="true"
            >
              <SkipBack className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                isPlaying 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 shadow-lg shadow-red-500/25' 
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/25'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-hover="true"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </motion.button>
            
            <motion.button
              onClick={() => {
                const currentIndex = timelineContent.milestones.findIndex(m => m.year === activeYear);
                const nextIndex = (currentIndex + 1) % timelineContent.milestones.length;
                setActiveYear(timelineContent.milestones[nextIndex].year);
              }}
              className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-hover="true"
            >
              <SkipForward className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => setIsMuted(!isMuted)}
              className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-hover="true"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-1">
            {['timeline', 'grid', 'story'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                  viewMode === mode 
                    ? 'bg-white text-gray-900' 
                    : 'text-white hover:bg-white/10'
                }`}
                data-hover="true"
              >
                {mode}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline Progress Bar */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
              style={{ 
                width: `${((timelineContent.milestones.findIndex(m => m.year === activeYear) + 1) / timelineContent.milestones.length) * 100}%`
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Year Markers */}
          <div className="flex justify-between mt-4">
            {timelineContent.milestones.map((milestone, index) => (
              <motion.button
                key={milestone.year}
                onClick={() => setActiveYear(milestone.year)}
                className={`group relative flex flex-col items-center transition-all duration-300 ${
                  activeYear === milestone.year ? 'scale-110' : 'hover:scale-105'
                }`}
                whileHover={{ y: -5 }}
                data-hover="true"
              >
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  activeYear === milestone.year 
                    ? `bg-gradient-to-r ${milestone.color} border-white shadow-lg` 
                    : 'bg-white/20 border-white/40 group-hover:bg-white/40'
                }`}>
                  {activeYear === milestone.year && (
                    <motion.div 
                      className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
                <span className={`text-sm font-medium mt-2 transition-colors ${
                  activeYear === milestone.year ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                }`}>
                  {milestone.year}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active Milestone Display */}
        <AnimatePresence mode="wait">
          {activeMilestone && (
            <motion.div
              key={activeYear}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ perspective: '1000px' }}
            >
              {/* Milestone Media */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  {currentMedia ? (
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay={!isMuted}
                      muted={isMuted}
                      loop
                      poster={activeMilestone.media.image}
                    >
                      <source src={activeMilestone.media.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={activeMilestone.media.image}
                      alt={activeMilestone.title[language]}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  )}
                  
                  {/* Media Controls Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.button 
                      onClick={() => setCurrentMedia(currentMedia ? null : activeMilestone.media.video)}
                      className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      data-hover="true"
                    >
                      {currentMedia ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                    </motion.button>
                    
                    <motion.button 
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      data-hover="true"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Category Badge */}
                  <div className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${activeMilestone.color} text-white rounded-full text-sm font-medium shadow-lg flex items-center gap-2`}>
                    {activeMilestone.icon}
                    <span className="capitalize">{activeMilestone.category}</span>
                  </div>

                  {/* Save Button */}
                  <motion.button 
                    onClick={() => toggleSaveMilestone(activeMilestone.year)}
                    className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      savedMilestones.has(activeMilestone.year)
                        ? 'bg-yellow-500 text-white'
                        : 'bg-white/90 backdrop-blur-sm text-gray-800 hover:text-yellow-600'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    data-hover="true"
                  >
                    <Bookmark className={`w-5 h-5 ${savedMilestones.has(activeMilestone.year) ? 'fill-current' : ''}`} />
                  </motion.button>
                </div>

                {/* Gallery Thumbnails */}
                <div className="flex gap-3 mt-4">
                  <motion.button
                    onClick={() => setCurrentMedia(null)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      !currentMedia ? 'border-white shadow-lg' : 'border-white/30 hover:border-white/60'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    data-hover="true"
                  >
                    <Image
                      src={activeMilestone.media.image}
                      alt="Main image"
                      fill
                      className="object-cover"
                    />
                  </motion.button>
                  
                  {activeMilestone.media.gallery.map((img, index) => (
                    <motion.button
                      key={index}
                      className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white/30 hover:border-white/60 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      data-hover="true"
                    >
                      <Image
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Milestone Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Header */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeMilestone.color} flex items-center justify-center text-white shadow-lg`}>
                      {activeMilestone.icon}
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white">
                        {activeMilestone.year}
                      </div>
                      <div className="text-cyan-300 font-medium">
                        {activeMilestone.quarter}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {activeMilestone.title[language]}
                  </h3>
                  
                  <h4 className="text-xl text-cyan-300 mb-4">
                    {activeMilestone.subtitle[language]}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {activeMilestone.description[language]}
                  </p>
                </div>

                {/* Key Achievements */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4">
                    {language === 'hu' ? 'Főbb Eredmények' : 'Key Achievements'}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeMilestone.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">
                          {achievement[language]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4">
                    {language === 'hu' ? 'Hatás Mutatók' : 'Impact Metrics'}
                  </h5>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="text-2xl font-bold text-cyan-300 mb-1">
                        {activeMilestone.impact.production}
                      </div>
                      <div className="text-sm text-gray-400">
                        {language === 'hu' ? 'Gyártás' : 'Production'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="text-2xl font-bold text-green-300 mb-1">
                        {activeMilestone.impact.quality}
                      </div>
                      <div className="text-sm text-gray-400">
                        {language === 'hu' ? 'Minőség' : 'Quality'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="text-2xl font-bold text-purple-300 mb-1">
                        {activeMilestone.impact.sustainability}
                      </div>
                      <div className="text-sm text-gray-400">
                        {language === 'hu' ? 'Fenntarthatóság' : 'Sustainability'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    className={`px-6 py-3 bg-gradient-to-r ${activeMilestone.color} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    data-hover="true"
                  >
                    <Download className="w-4 h-4" />
                    {language === 'hu' ? 'Részletek letöltése' : 'Download Details'}
                  </motion.button>
                  
                  <motion.button 
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    data-hover="true"
                  >
                    <Share2 className="w-4 h-4" />
                    {language === 'hu' ? 'Megosztás' : 'Share'}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveTimeline1;