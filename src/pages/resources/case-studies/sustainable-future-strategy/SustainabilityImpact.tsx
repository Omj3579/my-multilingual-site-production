import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Leaf, Recycle, TreePine, Droplets, Wind, Sun,
  Globe, Factory, TrendingUp, TrendingDown, Award,
  Target, Activity, CheckCircle, Calendar, Clock,
  Info, Download, Share2, Heart
} from 'lucide-react';
import Image from 'next/image';

const SustainabilityImpact = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const globeRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [activeMetric, setActiveMetric] = useState('carbon-footprint');
  const [timeframe, setTimeframe] = useState('year'); // 'month', 'year', 'decade'
  const [viewMode, setViewMode] = useState('impact'); // 'impact', 'goals', 'certifications'
  const [animatingNumbers, setAnimatingNumbers] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [liveData, setLiveData] = useState({});

  // Advanced scroll transforms
  const earthRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scaleEffect = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const sustainabilityContent = {
    badge: {
      en: "Environmental Impact Dashboard",
      hu: "Környezeti Hatás Műszerfal"
    },
    title: {
      en: "Our Planet-Positive<br/><span class='earth-gradient'>Impact Journey</span>",
      hu: "Bolygó-Pozitív<br/><span class='earth-gradient'>Hatás Utazásunk</span>"
    },
    subtitle: {
      en: "Real-time monitoring of our environmental initiatives, carbon neutrality achievements, and sustainable manufacturing practices across all operations.",
      hu: "Környezeti kezdeményezéseink, szén-semlegesség eredményeink és fenntartható gyártási gyakorlataink valós idejű figyelése minden működési területen."
    },
    metrics: {
      'carbon-footprint': {
        name: { en: "Carbon Footprint", hu: "Szénlábnyom" },
        description: { 
          en: "Total greenhouse gas emissions and carbon neutrality progress",
          hu: "Összesített üvegházhatású gáz kibocsátás és szén-semlegesség haladás"
        },
        icon: <Wind className="w-8 h-8" />,
        color: "from-green-500 to-emerald-500",
        value: -245,
        unit: "tons CO₂",
        trend: "down",
        improvement: 78,
        target: -500,
        data: {
          current: -245,
          lastMonth: -198,
          lastYear: 1250,
          projection: -500
        },
        breakdown: [
          { category: "Manufacturing", value: -180, color: "#10b981" },
          { category: "Transportation", value: -45, color: "#059669" },
          { category: "Energy", value: -20, color: "#047857" }
        ]
      },
      'renewable-energy': {
        name: { en: "Renewable Energy", hu: "Megújuló Energia" },
        description: { 
          en: "Percentage of operations powered by renewable energy sources",
          hu: "Megújuló energiaforrásokkal működő tevékenységek százaléka"
        },
        icon: <Sun className="w-8 h-8" />,
        color: "from-yellow-500 to-orange-500",
        value: 94.5,
        unit: "%",
        trend: "up",
        improvement: 15,
        target: 100,
        data: {
          current: 94.5,
          lastMonth: 92.1,
          lastYear: 67.3,
          projection: 100
        },
        breakdown: [
          { category: "Solar", value: 65, color: "#f59e0b" },
          { category: "Wind", value: 25, color: "#d97706" },
          { category: "Hydro", value: 4.5, color: "#b45309" }
        ]
      },
      'waste-reduction': {
        name: { en: "Waste Reduction", hu: "Hulladék Csökkentés" },
        description: { 
          en: "Total waste diverted from landfills through recycling and reuse",
          hu: "Lerakókból újrahasznosítással és újrafelhasználással elterelített hulladék"
        },
        icon: <Recycle className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500",
        value: 99.2,
        unit: "%",
        trend: "up",
        improvement: 25,
        target: 100,
        data: {
          current: 99.2,
          lastMonth: 98.7,
          lastYear: 78.5,
          projection: 100
        },
        breakdown: [
          { category: "Recycled", value: 85.2, color: "#3b82f6" },
          { category: "Reused", value: 12.5, color: "#1d4ed8" },
          { category: "Composted", value: 1.5, color: "#1e40af" }
        ]
      },
      'water-conservation': {
        name: { en: "Water Conservation", hu: "Víztakarékosság" },
        description: { 
          en: "Water usage reduction and recycling efficiency improvements",
          hu: "Vízfelhasználás csökkentés és újrahasznosítási hatékonyság javítás"
        },
        icon: <Droplets className="w-8 h-8" />,
        color: "from-cyan-500 to-blue-500",
        value: 67.8,
        unit: "% reduction",
        trend: "up",
        improvement: 32,
        target: 75,
        data: {
          current: 67.8,
          lastMonth: 65.2,
          lastYear: 42.1,
          projection: 75
        },
        breakdown: [
          { category: "Process Water", value: 45.2, color: "#06b6d4" },
          { category: "Cooling Systems", value: 15.8, color: "#0891b2" },
          { category: "Cleaning", value: 6.8, color: "#0e7490" }
        ]
      },
      'biodiversity': {
        name: { en: "Biodiversity Impact", hu: "Biodiverzitás Hatás" },
        description: { 
          en: "Positive impact on local ecosystems and wildlife preservation",
          hu: "Pozitív hatás helyi ökoszisztémákra és vadon élő állatok megőrzésére"
        },
        icon: <TreePine className="w-8 h-8" />,
        color: "from-emerald-500 to-green-500",
        value: 156,
        unit: "species protected",
        trend: "up",
        improvement: 45,
        target: 200,
        data: {
          current: 156,
          lastMonth: 142,
          lastYear: 89,
          projection: 200
        },
        breakdown: [
          { category: "Flora", value: 98, color: "#10b981" },
          { category: "Fauna", value: 42, color: "#059669" },
          { category: "Marine", value: 16, color: "#047857" }
        ]
      },
      'circular-economy': {
        name: { en: "Circular Economy", hu: "Körforgásos Gazdaság" },
        description: { 
          en: "Materials kept in use through circular design and recovery systems",
          hu: "Körforgásos tervezéssel és visszanyerési rendszerekkel használatban tartott anyagok"
        },
        icon: <Factory className="w-8 h-8" />,
        color: "from-purple-500 to-indigo-500",
        value: 87.3,
        unit: "% circularity",
        trend: "up",
        improvement: 28,
        target: 95,
        data: {
          current: 87.3,
          lastMonth: 84.9,
          lastYear: 62.1,
          projection: 95
        },
        breakdown: [
          { category: "Material Recovery", value: 52.3, color: "#8b5cf6" },
          { category: "Product Reuse", value: 23.5, color: "#7c3aed" },
          { category: "Design for Circularity", value: 11.5, color: "#6d28d9" }
        ]
      }
    },
    certifications: [
      {
        name: "ISO 14001",
        description: { 
          en: "Environmental Management Systems",
          hu: "Környezetirányítási Rendszerek"
        },
        issuer: "ISO",
        validUntil: "2025-12-31",
        status: "active",
        badge: "/images/certifications/iso-14001.svg"
      },
      {
        name: "Carbon Trust Standard",
        description: { 
          en: "Carbon Footprint Certification",
          hu: "Szénlábnyom Tanúsítvány"
        },
        issuer: "Carbon Trust",
        validUntil: "2024-08-15",
        status: "active",
        badge: "/images/certifications/carbon-trust.svg"
      },
      {
        name: "LEED Platinum",
        description: { 
          en: "Green Building Certification",
          hu: "Zöld Épület Tanúsítvány"
        },
        issuer: "USGBC",
        validUntil: "2030-03-20",
        status: "active",
        badge: "/images/certifications/leed-platinum.svg"
      },
      {
        name: "Cradle to Cradle",
        description: { 
          en: "Circular Design Certification",
          hu: "Körforgásos Tervezés Tanúsítvány"
        },
        issuer: "C2C Institute",
        validUntil: "2025-06-10",
        status: "active",
        badge: "/images/certifications/c2c.svg"
      }
    ],
    goals: [
      {
        title: { en: "Net Zero by 2030", hu: "Nettó Nulla 2030-ra" },
        description: { 
          en: "Achieve complete carbon neutrality across all operations",
          hu: "Teljes szén-semlegesség elérése minden működési területen"
        },
        progress: 78,
        target: "2030-01-01",
        milestones: [
          { date: "2024-06", task: { en: "100% renewable energy", hu: "100% megújuló energia" }, status: "in-progress" },
          { date: "2025-12", task: { en: "Zero waste to landfill", hu: "Nulla hulladék lerakóba" }, status: "planned" },
          { date: "2027-06", task: { en: "Carbon negative operations", hu: "Szén-negatív működés" }, status: "planned" },
          { date: "2030-01", task: { en: "Net zero achievement", hu: "Nettó nulla elérés" }, status: "planned" }
        ]
      },
      {
        title: { en: "Biodiversity Net Gain", hu: "Biodiverzitás Nettó Nyereség" },
        description: { 
          en: "Create positive impact on local ecosystems and wildlife",
          hu: "Pozitív hatás létrehozása helyi ökoszisztémákra és vadon élő állatokra"
        },
        progress: 65,
        target: "2026-12-31",
        milestones: [
          { date: "2024-09", task: { en: "Wildlife corridors", hu: "Vadon élő állatok folyosói" }, status: "completed" },
          { date: "2025-03", task: { en: "Native species restoration", hu: "Őshonos fajok helyreállítása" }, status: "in-progress" },
          { date: "2025-09", task: { en: "Pollinator gardens", hu: "Beporzó kertek" }, status: "planned" },
          { date: "2026-12", task: { en: "10% biodiversity gain", hu: "10% biodiverzitás nyereség" }, status: "planned" }
        ]
      },
      {
        title: { en: "Circular Economy Leadership", hu: "Körforgásos Gazdaság Vezetés" },
        description: { 
          en: "Pioneer closed-loop manufacturing and product lifecycle management",
          hu: "Zárt hurkú gyártás és termék életciklus menedzsment úttörője"
        },
        progress: 82,
        target: "2025-06-30",
        milestones: [
          { date: "2024-03", task: { en: "Design for circularity", hu: "Körforgásra tervezés" }, status: "completed" },
          { date: "2024-08", task: { en: "Take-back program", hu: "Visszavételi program" }, status: "completed" },
          { date: "2025-01", task: { en: "Material passports", hu: "Anyag útlevelek" }, status: "in-progress" },
          { date: "2025-06", task: { en: "95% circularity rate", hu: "95% körforgási arány" }, status: "planned" }
        ]
      }
    ],
    regions: [
      {
        id: 'global',
        name: { en: 'Global', hu: 'Globális' },
        coordinates: [0, 0],
        impact: {
          carbonReduction: 245,
          renewableEnergy: 94.5,
          wasteReduction: 99.2,
          waterSaved: 67.8
        }
      },
      {
        id: 'europe',
        name: { en: 'Europe', hu: 'Európa' },
        coordinates: [50, 10],
        impact: {
          carbonReduction: 180,
          renewableEnergy: 98.2,
          wasteReduction: 99.8,
          waterSaved: 72.3
        }
      },
      {
        id: 'asia',
        name: { en: 'Asia Pacific', hu: 'Ázsia-Csendes-óceán' },
        coordinates: [35, 105],
        impact: {
          carbonReduction: 45,
          renewableEnergy: 87.5,
          wasteReduction: 97.1,
          waterSaved: 58.9
        }
      },
      {
        id: 'americas',
        name: { en: 'Americas', hu: 'Amerika' },
        coordinates: [40, -100],
        impact: {
          carbonReduction: 20,
          renewableEnergy: 92.1,
          wasteReduction: 98.5,
          waterSaved: 65.2
        }
      }
    ]
  };

  // Animate numbers
  useEffect(() => {
    if (!animatingNumbers) return;
    const interval = setInterval(() => {
      setLiveData(prev => {
        const newData = {};
        Object.keys(sustainabilityContent.metrics).forEach(key => {
          const metric = sustainabilityContent.metrics[key];
          const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
          newData[key] = {
            ...metric,
            value: Math.max(0, metric.value * (1 + variation))
          };
        });
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [animatingNumbers, sustainabilityContent.metrics]);

  const activeMetricData = sustainabilityContent.metrics[activeMetric];
  const currentData = liveData[activeMetric] || activeMetricData;

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,theme(colors.emerald.500/20),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,theme(colors.green.500/20),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/images/earth-pattern.svg')] opacity-5"></div>
        
        {/* Floating eco elements */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"
            }}
          >
            {i % 4 === 0 && <Leaf className="w-6 h-6 text-green-400/40" />}
            {i % 4 === 1 && <Droplets className="w-5 h-5 text-blue-400/40" />}
            {i % 4 === 2 && <Wind className="w-5 h-5 text-cyan-400/40" />}
            {i % 4 === 3 && <Sun className="w-6 h-6 text-yellow-400/40" />}
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }}
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(16, 185, 129, 0.3)',
                '0 0 40px rgba(5, 150, 105, 0.3)',
                '0 0 20px rgba(16, 185, 129, 0.3)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Globe className="w-5 h-5 text-emerald-300" />
            <span className="text-emerald-200 font-semibold">
              {sustainabilityContent.badge[language]}
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: sustainabilityContent.title[language] }}
          />

          <motion.p 
            className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {sustainabilityContent.subtitle[language]}
          </motion.p>

          <style jsx>{`
            .earth-gradient {
              background: linear-gradient(135deg, #10b981, #059669, #047857, #065f46, #064e3b);
              background-size: 400% 400%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: earth-flow 8s ease-in-out infinite;
            }
            
            @keyframes earth-flow {
              0%, 100% { background-position: 0% 50%; }
              25% { background-position: 100% 0%; }
              50% { background-position: 100% 100%; }
              75% { background-position: 0% 100%; }
            }
          `}</style>
        </motion.div>

        {/* Control Panel */}
        <motion.div 
          className="flex flex-wrap items-center justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* View Mode Selector */}
          <div className="flex bg-black/20 backdrop-blur-xl border border-emerald-400/30 rounded-full p-1">
            {[
              { id: 'impact', label: { en: 'Impact', hu: 'Hatás' }, icon: <Activity className="w-4 h-4" /> },
              { id: 'goals', label: { en: 'Goals', hu: 'Célok' }, icon: <Target className="w-4 h-4" /> },
              { id: 'certifications', label: { en: 'Certifications', hu: 'Tanúsítványok' }, icon: <Award className="w-4 h-4" /> }
            ].map((mode) => (
              <motion.button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id 
                    ? 'bg-emerald-500 text-white shadow-lg' 
                    : 'text-emerald-200 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                {mode.icon}
                {mode.label[language]}
              </motion.button>
            ))}
          </div>

          {/* Time Frame Selector */}
          <div className="flex bg-black/20 backdrop-blur-xl border border-emerald-400/30 rounded-full p-1">
            {[
              { id: 'month', label: { en: 'Month', hu: 'Hónap' } },
              { id: 'year', label: { en: 'Year', hu: 'Év' } },
              { id: 'decade', label: { en: 'Decade', hu: 'Évtized' } }
            ].map((time) => (
              <button
                key={time.id}
                onClick={() => setTimeframe(time.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  timeframe === time.id 
                    ? 'bg-emerald-500 text-white' 
                    : 'text-emerald-200 hover:bg-white/10'
                }`}
                data-hover="true"
              >
                {time.label[language]}
              </button>
            ))}
          </div>

          {/* Animation Toggle */}
          <motion.button
            onClick={() => setAnimatingNumbers(!animatingNumbers)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              animatingNumbers 
                ? 'bg-green-500 text-white' 
                : 'bg-black/20 text-emerald-200 border border-emerald-400/30'
            }`}
            whileHover={{ scale: 1.05 }}
            data-hover="true"
          >
            <Activity className={`w-4 h-4 ${animatingNumbers ? 'animate-pulse' : ''}`} />
            {language === 'hu' ? 'Élő Adatok' : 'Live Data'}
          </motion.button>
        </motion.div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          {viewMode === 'impact' && (
            <motion.div
              key="impact"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Metrics Selector */}
              <div className="space-y-4">
                {Object.entries(sustainabilityContent.metrics).map(([key, metric]) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveMetric(key)}
                    className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left ${
                      activeMetric === key
                        ? `bg-gradient-to-r ${metric.color} border-white/30 text-white shadow-2xl`
                        : 'bg-black/20 backdrop-blur-xl border-emerald-400/30 text-emerald-100 hover:bg-black/30'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    data-hover="true"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeMetric === key ? 'bg-white/20' : 'bg-emerald-500/20'
                      }`}>
                        {metric.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{metric.name[language]}</h3>
                        <div className="flex items-center gap-2 text-sm opacity-80">
                          {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          <span>+{metric.improvement}% {language === 'hu' ? 'javulás' : 'improvement'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm opacity-80 mb-4">{metric.description[language]}</p>
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <motion.div 
                          className="text-3xl font-bold mb-1"
                          animate={animatingNumbers && activeMetric === key ? {
                            scale: [1, 1.1, 1],
                            color: ['currentColor', '#ffffff', 'currentColor']
                          } : {}}
                          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                          {(liveData[key]?.value || metric.value).toFixed(1)}
                        </motion.div>
                        <div className="text-sm opacity-80">{metric.unit}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xs opacity-60 mb-1">
                          {language === 'hu' ? 'Cél' : 'Target'}
                        </div>
                        <div className="text-sm font-medium">
                          {metric.target} {metric.unit}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-white/60 rounded-full"
                        style={{ 
                          width: `${Math.min(100, ((liveData[key]?.value || metric.value) / metric.target) * 100)}%`
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Active Metric Visualization */}
              <div className="lg:col-span-2 space-y-8">
                {/* Main Metric Display */}
                <div className="bg-black/20 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {activeMetricData.name[language]}
                      </h3>
                      <p className="text-emerald-200">
                        {activeMetricData.description[language]}
                      </p>
                    </div>
                    
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeMetricData.color} flex items-center justify-center text-white shadow-xl`}>
                      {activeMetricData.icon}
                    </div>
                  </div>

                  {/* Live Value Display */}
                  <div className="text-center mb-8">
                    <motion.div 
                      className="text-6xl font-bold text-white mb-2"
                      animate={animatingNumbers ? {
                        scale: [1, 1.05, 1],
                        textShadow: [
                          '0 0 10px rgba(255,255,255,0.3)',
                          '0 0 20px rgba(16,185,129,0.5)',
                          '0 0 10px rgba(255,255,255,0.3)'
                        ]
                      } : {}}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                    >
                      {(currentData.value || activeMetricData.value).toFixed(1)}
                    </motion.div>
                    <div className="text-xl text-emerald-200">{activeMetricData.unit}</div>
                    
                    <div className="flex items-center justify-center gap-2 mt-4">
                      {activeMetricData.trend === 'up' ? 
                        <TrendingUp className="w-5 h-5 text-green-400" /> : 
                        <TrendingDown className="w-5 h-5 text-red-400" />
                      }
                      <span className="text-emerald-200">
                        {activeMetricData.improvement}% {language === 'hu' ? 'javulás ez évben' : 'improvement this year'}
                      </span>
                    </div>
                  </div>

                  {/* Breakdown Chart */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      {language === 'hu' ? 'Részletes Bontás' : 'Detailed Breakdown'}
                    </h4>
                    
                    <div className="space-y-3">
                      {activeMetricData.breakdown.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-xl"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-emerald-100">{item.category}</span>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full rounded-full"
                                style={{ backgroundColor: item.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${(item.value / Math.max(...activeMetricData.breakdown.map(b => b.value))) * 100}%` }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                              />
                            </div>
                            <span className="text-white font-medium w-16 text-right">
                              {item.value.toFixed(1)}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Regional Impact Map */}
                <div className="bg-black/20 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">
                      {language === 'hu' ? 'Regionális Hatás' : 'Regional Impact'}
                    </h3>
                    
                    <div className="flex gap-2">
                      {sustainabilityContent.regions.map((region) => (
                        <motion.button
                          key={region.id}
                          onClick={() => setSelectedRegion(region.id)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                            selectedRegion === region.id
                              ? 'bg-emerald-500 text-white'
                              : 'bg-white/10 text-emerald-200 hover:bg-white/20'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          data-hover="true"
                        >
                          {region.name[language]}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Globe */}
                  <div className="relative h-64 mb-6">
                    <motion.div
                      ref={globeRef}
                      className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-green-900 rounded-2xl overflow-hidden"
                      style={{ rotateY: earthRotation }}
                    >
                      {/* Globe surface */}
                      <div className="absolute inset-0 bg-[url('/images/earth-texture.jpg')] bg-cover bg-center opacity-60"></div>
                      
                      {/* Region markers */}
                      {sustainabilityContent.regions.map((region, index) => (
                        <motion.div
                          key={region.id}
                          className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                            selectedRegion === region.id 
                              ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 scale-150' 
                              : 'bg-emerald-400 hover:bg-emerald-300'
                          }`}
                          style={{
                            left: `${50 + region.coordinates[1] * 0.8}%`,
                            top: `${50 - region.coordinates[0] * 0.8}%`,
                          }}
                          animate={{
                            scale: selectedRegion === region.id ? [1, 1.2, 1] : 1,
                            boxShadow: selectedRegion === region.id ? [
                              '0 0 10px rgba(251, 191, 36, 0.5)',
                              '0 0 20px rgba(251, 191, 36, 0.8)',
                              '0 0 10px rgba(251, 191, 36, 0.5)'
                            ] : '0 0 5px rgba(16, 185, 129, 0.3)'
                          }}
                          transition={{ duration: 1, repeat: selectedRegion === region.id ? Infinity : 0 }}
                          onClick={() => setSelectedRegion(region.id)}
                          data-hover="true"
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                            {region.name[language]}
                          </div>
                        </motion.div>
                      ))}
                      
                      {/* Atmospheric glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent rounded-2xl"></div>
                    </motion.div>
                  </div>

                  {/* Regional Data */}
                  {selectedRegion && (
                    <motion.div
                      key={selectedRegion}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      {Object.entries(sustainabilityContent.regions.find(r => r.id === selectedRegion).impact).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-white/5 rounded-xl">
                          <div className="text-2xl font-bold text-white mb-1">
                            {typeof value === 'number' ? value.toFixed(1) : value}
                          </div>
                          <div className="text-xs text-emerald-200 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {viewMode === 'goals' && (
            <motion.div
              key="goals"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {sustainabilityContent.goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="bg-black/20 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  data-hover="true"
                >
                  <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {goal.title[language]}
                      </h3>
                      <p className="text-emerald-200 leading-relaxed">
                        {goal.description[language]}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative w-20 h-20 mb-3">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            stroke="rgba(16, 185, 129, 0.2)"
                            strokeWidth="8"
                            fill="none"
                          />
                          <motion.circle
                            cx="40"
                            cy="40"
                            r="35"
                            stroke="#10b981"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ strokeDasharray: "0 220" }}
                            animate={{ strokeDasharray: `${(goal.progress / 100) * 220} 220` }}
                            transition={{ duration: 2, delay: index * 0.3 }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{goal.progress}%</span>
                        </div>
                      </div>
                      <div className="text-sm text-emerald-200">
                        {language === 'hu' ? 'Teljesítve' : 'Complete'}
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-500/30"></div>
                    
                    <div className="space-y-6">
                      {goal.milestones.map((milestone, mIndex) => (
                        <motion.div
                          key={mIndex}
                          className="flex gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + mIndex * 0.1 }}
                        >
                          <div className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                            milestone.status === 'completed' 
                              ? 'bg-green-500 border-green-400' 
                              : milestone.status === 'in-progress'
                              ? 'bg-yellow-500 border-yellow-400'
                              : 'bg-gray-500 border-gray-400'
                          }`}>
                            {milestone.status === 'completed' && <CheckCircle className="w-4 h-4 text-white" />}
                            {milestone.status === 'in-progress' && <Clock className="w-4 h-4 text-white" />}
                            {milestone.status === 'planned' && <Calendar className="w-4 h-4 text-white" />}
                          </div>
                          
                          <div className="flex-1 pb-6">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm text-emerald-300 font-medium">
                                {milestone.date}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                milestone.status === 'completed' 
                                  ? 'bg-green-500/20 text-green-300' 
                                  : milestone.status === 'in-progress'
                                  ? 'bg-yellow-500/20 text-yellow-300'
                                  : 'bg-gray-500/20 text-gray-300'
                              }`}>
                                {milestone.status === 'completed' && (language === 'hu' ? 'Befejezve' : 'Completed')}
                                {milestone.status === 'in-progress' && (language === 'hu' ? 'Folyamatban' : 'In Progress')}
                                {milestone.status === 'planned' && (language === 'hu' ? 'Tervezett' : 'Planned')}
                              </span>
                            </div>
                            <p className="text-white">
                              {milestone.task[language]}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {viewMode === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {sustainabilityContent.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-black/20 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)'
                  }}
                  data-hover="true"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={cert.badge}
                        alt={cert.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-emerald-200 text-sm mb-3">
                        {cert.description[language]}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-emerald-300">
                        <span>{language === 'hu' ? 'Kibocsátó:' : 'Issued by:'}</span>
                        <span className="font-medium">{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        cert.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                      }`}></div>
                      <span className="text-sm text-emerald-200">
                        {cert.status === 'active' 
                          ? (language === 'hu' ? 'Aktív' : 'Active')
                          : (language === 'hu' ? 'Lejárt' : 'Expired')
                        }
                      </span>
                    </div>
                    
                    <div className="text-sm text-emerald-300">
                      {language === 'hu' ? 'Érvényes:' : 'Valid until:'} {new Date(cert.validUntil).toLocaleDateString()}
                    </div>
                  </div>

                  <motion.div 
                    className="mt-6 pt-6 border-t border-emerald-400/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex gap-3">
                      <motion.button 
                        className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        data-hover="true"
                      >
                        <Download className="w-4 h-4" />
                        {language === 'hu' ? 'Letöltés' : 'Download'}
                      </motion.button>
                      
                      <motion.button 
                        className="flex-1 bg-white/10 hover:bg-white/20 text-emerald-200 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        data-hover="true"
                      >
                        <Info className="w-4 h-4" />
                        {language === 'hu' ? 'Részletek' : 'Details'}
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Download className="w-5 h-5" />
              {language === 'hu' ? 'Fenntarthatósági Jelentés' : 'Sustainability Report'}
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 bg-black/20 backdrop-blur-xl border border-emerald-400/30 text-emerald-200 rounded-2xl font-semibold hover:bg-black/30 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Share2 className="w-5 h-5" />
              {language === 'hu' ? 'Megosztás' : 'Share Impact'}
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Heart className="w-5 h-5" />
              {language === 'hu' ? 'Csatlakozás' : 'Join Movement'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilityImpact;