import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Atom, 
  Beaker, 
  Thermometer,
  Gauge,
  BrainCircuit,
  Dna,
  Play,
  Pause,
  RotateCcw,
  Eye,
  EyeOff,
  Camera,
  Download,
  Share2,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';
import Image from 'next/image';

const InnovationLab = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const labRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [activeExperiment, setActiveExperiment] = useState('molecular-analysis');
  const [isLabRunning, setIsLabRunning] = useState(false);
  const [labSpeed, setLabSpeed] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [labData, setLabData] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDataOverlay, setShowDataOverlay] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [particleSystem, setParticleSystem] = useState([]);

  // Advanced mouse tracking for 3D lab interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 500, damping: 100 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 500, damping: 100 });

  // Scroll-based transforms
  const labScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const labOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const innovationContent = {
    badge: {
      en: "Virtual Innovation Laboratory",
      hu: "Virtuális Innovációs Laboratórium"
    },
    title: {
      en: "Inside Our<br/><span class='lab-gradient'>Digital Laboratory</span>",
      hu: "Digitális<br/><span class='lab-gradient'>Laboratóriumunk Belseje</span>"
    },
    subtitle: {
      en: "Experience real-time molecular analysis, material testing, and innovation processes through our interactive virtual laboratory interface.",
      hu: "Tapasztalja meg a valós idejű molekuláris elemzést, anyagtesztelést és innovációs folyamatokat interaktív virtuális laboratóriumi felületünkön keresztül."
    },
    experiments: {
      'molecular-analysis': {
        name: { en: "Molecular Structure Analysis", hu: "Molekuláris Szerkezet Elemzés" },
        description: { 
          en: "Advanced analysis of polymer chains and molecular bonding in injection molding materials",
          hu: "Polimer láncok és molekuláris kötések fejlett elemzése fröccsöntési anyagokban"
        },
        icon: <Atom className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500",
        duration: 45,
        steps: [
          { en: "Material Preparation", hu: "Anyag Előkészítés" },
          { en: "Molecular Scanning", hu: "Molekuláris Vizsgálat" },
          { en: "Structure Analysis", hu: "Szerkezet Elemzés" },
          { en: "Quality Assessment", hu: "Minőség Értékelés" },
          { en: "Results Generation", hu: "Eredmény Generálás" }
        ],
        realTimeData: {
          temperature: 245,
          pressure: 850,
          density: 0.954,
          crystallinity: 68.5,
          viscosity: 1250
        }
      },
      'stress-testing': {
        name: { en: "Advanced Stress Testing", hu: "Fejlett Feszültség Teszt" },
        description: { 
          en: "Comprehensive durability and stress resistance testing for household products",
          hu: "Átfogó tartósság és feszültség ellenállás tesztelés háztartási termékekhez"
        },
        icon: <Gauge className="w-8 h-8" />,
        color: "from-red-500 to-orange-500",
        duration: 60,
        steps: [
          { en: "Specimen Loading", hu: "Minta Betöltés" },
          { en: "Stress Application", hu: "Feszültség Alkalmazás" },
          { en: "Deformation Monitoring", hu: "Deformáció Figyelés" },
          { en: "Failure Point Detection", hu: "Törési Pont Észlelés" },
          { en: "Data Analysis", hu: "Adat Elemzés" }
        ],
        realTimeData: {
          force: 2450,
          displacement: 12.4,
          strain: 0.045,
          elasticModulus: 3200,
          yieldStrength: 28.5
        }
      },
      'thermal-analysis': {
        name: { en: "Thermal Behavior Analysis", hu: "Termikus Viselkedés Elemzés" },
        description: { 
          en: "Study of material behavior under various temperature conditions and thermal cycles",
          hu: "Anyagok viselkedésének tanulmányozása különböző hőmérsékleti feltételek és termikus ciklusok alatt"
        },
        icon: <Thermometer className="w-8 h-8" />,
        color: "from-purple-500 to-pink-500",
        duration: 75,
        steps: [
          { en: "Temperature Calibration", hu: "Hőmérséklet Kalibrálás" },
          { en: "Heating Cycle", hu: "Fűtési Ciklus" },
          { en: "Cooling Analysis", hu: "Hűtési Elemzés" },
          { en: "Expansion Measurement", hu: "Kitágulás Mérés" },
          { en: "Thermal Report", hu: "Termikus Jelentés" }
        ],
        realTimeData: {
          currentTemp: 185,
          targetTemp: 250,
          expansion: 0.024,
          heatCapacity: 1.85,
          conductivity: 0.42
        }
      },
      'ai-optimization': {
        name: { en: "AI Design Optimization", hu: "AI Tervezés Optimalizálás" },
        description: { 
          en: "Machine learning algorithms optimizing product design for maximum efficiency and sustainability",
          hu: "Gépi tanulási algoritmusok optimalizálják a terméktervezést a maximális hatékonyság és fenntarthatóság érdekében"
        },
        icon: <BrainCircuit className="w-8 h-8" />,
        color: "from-indigo-500 to-purple-500",
        duration: 90,
        steps: [
          { en: "Data Collection", hu: "Adatgyűjtés" },
          { en: "Pattern Recognition", hu: "Minta Felismerés" },
          { en: "Algorithm Processing", hu: "Algoritmus Feldolgozás" },
          { en: "Design Generation", hu: "Tervezés Generálás" },
          { en: "Validation Testing", hu: "Validációs Teszt" }
        ],
        realTimeData: {
          iterations: 15420,
          accuracy: 97.8,
          efficiency: 89.2,
          sustainability: 94.5,
          innovations: 12
        }
      },
      'sustainability-metrics': {
        name: { en: "Sustainability Assessment", hu: "Fenntarthatósági Értékelés" },
        description: { 
          en: "Comprehensive environmental impact analysis and carbon footprint calculation",
          hu: "Átfogó környezeti hatáselemzés és szénlábnyom számítás"
        },
        icon: <Dna className="w-8 h-8" />,
        color: "from-green-500 to-emerald-500",
        duration: 55,
        steps: [
          { en: "Lifecycle Assessment", hu: "Életciklus Értékelés" },
          { en: "Carbon Calculation", hu: "Szén Számítás" },
          { en: "Resource Analysis", hu: "Erőforrás Elemzés" },
          { en: "Impact Modeling", hu: "Hatás Modellezés" },
          { en: "Certification Report", hu: "Tanúsítási Jelentés" }
        ],
        realTimeData: {
          carbonFootprint: -2.4,
          recycledContent: 85,
          energyEfficiency: 92,
          waterUsage: 15.2,
          wasteReduction: 78
        }
      }
    },
    materials: [
      {
        id: 'hdpe',
        name: { en: "High-Density Polyethylene", hu: "Nagy Sűrűségű Polietilén" },
        properties: {
          density: "0.941-0.965 g/cm³",
          meltingPoint: "120-130°C",
          tensileStrength: "22-31 MPa",
          applications: { en: "Food containers, bottles", hu: "Élelmiszer tárolók, palackok" }
        },
        color: "#4F46E5",
        structure: "/models/hdpe-molecule.glb"
      },
      {
        id: 'pp',
        name: { en: "Polypropylene", hu: "Polipropilén" },
        properties: {
          density: "0.895-0.92 g/cm³",
          meltingPoint: "160-166°C",
          tensileStrength: "31-41 MPa",
          applications: { en: "Automotive parts, textiles", hu: "Autóalkatrészek, textíliák" }
        },
        color: "#059669",
        structure: "/models/pp-molecule.glb"
      },
      {
        id: 'abs',
        name: { en: "ABS Plastic", hu: "ABS Műanyag" },
        properties: {
          density: "1.05-1.07 g/cm³",
          meltingPoint: "200-280°C",
          tensileStrength: "40-50 MPa",
          applications: { en: "Electronics, toys", hu: "Elektronika, játékok" }
        },
        color: "#DC2626",
        structure: "/models/abs-molecule.glb"
      }
    ]
  };

  // Generate particle system for molecular visualization
  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random() * 100,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        bonds: []
      }));
    };
    
    setParticleSystem(generateParticles());
  }, [activeExperiment]);

  // Lab simulation runner
  useEffect(() => {
    if (!isLabRunning) return;
    
    const interval = setInterval(() => {
      setSimulationStep(prev => {
        const experiment = innovationContent.experiments[activeExperiment];
        return (prev + 1) % experiment.steps.length;
      });
      
      // Update real-time data with realistic fluctuations
      setLabData(prev => {
        const experiment = innovationContent.experiments[activeExperiment];
        const newData = { ...experiment.realTimeData };
        
        Object.keys(newData).forEach(key => {
          if (typeof newData[key] === 'number') {
            const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
            newData[key] = Math.max(0, newData[key] * (1 + variation));
          }
        });
        
        return newData;
      });
    }, 1000 / labSpeed);

    return () => clearInterval(interval);
  }, [isLabRunning, labSpeed, activeExperiment]);

  const handleMouseMove = useCallback((e) => {
    if (!labRef.current) return;
    const rect = labRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const currentExperiment = innovationContent.experiments[activeExperiment];
  const currentLabData = labData[activeExperiment] || currentExperiment.realTimeData;

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Advanced Background with Particle Field */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,theme(colors.blue.500/20),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,theme(colors.purple.500/20),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/images/lab-grid.svg')] opacity-10"></div>
        
        {/* Floating molecular structures */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border border-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          style={{ scale: labScale, opacity: labOpacity }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)' }}
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(6, 182, 212, 0.3)',
                '0 0 40px rgba(139, 92, 246, 0.3)',
                '0 0 20px rgba(6, 182, 212, 0.3)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Beaker className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-200 font-semibold">
              {innovationContent.badge[language]}
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: innovationContent.title[language] }}
          />

          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {innovationContent.subtitle[language]}
          </motion.p>

          <style jsx>{`
            .lab-gradient {
              background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
              background-size: 400% 400%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: lab-flow 8s ease-in-out infinite;
            }
            
            @keyframes lab-flow {
              0%, 100% { background-position: 0% 50%; }
              25% { background-position: 100% 0%; }
              50% { background-position: 100% 100%; }
              75% { background-position: 0% 100%; }
            }
          `}</style>
        </motion.div>

        {/* Lab Interface */}
        <motion.div
          ref={labRef}
          className="max-w-7xl mx-auto"
          style={{ 
            rotateX, 
            rotateY,
            transformStyle: 'preserve-3d'
          }}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Lab Control Panel */}
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-8 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
              {/* Experiment Selector */}
              <div className="flex flex-wrap gap-3">
                {Object.entries(innovationContent.experiments).map(([key, experiment]) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveExperiment(key)}
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeExperiment === key
                        ? `bg-gradient-to-r ${experiment.color} text-white shadow-lg`
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    data-hover="true"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeExperiment === key ? 'bg-white/20' : 'bg-white/10'
                    }`}>
                      {experiment.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-sm">
                        {experiment.name[language]}
                      </div>
                      <div className="text-xs opacity-80">
                        {experiment.duration}s
                      </div>
                    </div>
                    
                    {activeExperiment === key && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-xl"
                        layoutId="active-experiment"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Lab Controls */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => setIsLabRunning(!isLabRunning)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    isLabRunning 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 shadow-lg shadow-red-500/25' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/25'
                  }`}
                  whileHover={{ scale: 1.1, rotate: isLabRunning ? 0 : 90 }}
                  whileTap={{ scale: 0.9 }}
                  data-hover="true"
                >
                  {isLabRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </motion.button>

                <div className="flex items-center gap-2 bg-white/5 rounded-xl p-2">
                  <span className="text-sm text-gray-300">Speed:</span>
                  <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.5"
                    value={labSpeed}
                    onChange={(e) => setLabSpeed(parseFloat(e.target.value))}
                    className="w-20 accent-cyan-500"
                  />
                  <span className="text-sm text-cyan-300 w-8">{labSpeed}x</span>
                </div>

                <motion.button
                  onClick={() => setShowDataOverlay(!showDataOverlay)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    showDataOverlay 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-hover="true"
                >
                  {showDataOverlay ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </motion.button>

                <motion.button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-hover="true"
                >
                  {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>

            {/* Experiment Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {currentExperiment.name[language]}
                </h3>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isLabRunning ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
                  <span className="text-sm text-gray-300">
                    {isLabRunning ? (language === 'hu' ? 'Fut' : 'Running') : (language === 'hu' ? 'Leállítva' : 'Stopped')}
                  </span>
                </div>
              </div>
              
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-3">
                <motion.div 
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${currentExperiment.color} rounded-full`}
                  style={{ 
                    width: `${((simulationStep + 1) / currentExperiment.steps.length) * 100}%`
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="flex justify-between text-sm">
                {currentExperiment.steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-300 ${
                      index <= simulationStep ? 'text-cyan-300' : 'text-gray-500'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full border-2 mx-auto mb-2 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      index <= simulationStep 
                        ? 'border-cyan-400 bg-cyan-400 text-black' 
                        : 'border-gray-500 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="text-xs">{step[language]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Lab Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 3D Molecular Visualization */}
            <div className="lg:col-span-2">
              <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-8 h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
                
                {/* 3D Particle System */}
                <div className="relative w-full h-full perspective-1000">
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ rotateY: isLabRunning ? 360 : 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {particleSystem.slice(0, 30).map((particle) => (
                      <motion.div
                        key={particle.id}
                        className="absolute w-3 h-3 rounded-full shadow-lg"
                        style={{
                          left: `${particle.x}%`,
                          top: `${particle.y}%`,
                          backgroundColor: particle.color,
                          transform: `translateZ(${particle.z}px)`,
                        }}
                        animate={isLabRunning ? {
                          x: [0, particle.vx * 20, 0],
                          y: [0, particle.vy * 20, 0],
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        } : {}}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: particle.id * 0.1,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Molecular Bonds */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {particleSystem.slice(0, 15).map((particle, index) => {
                    const nextParticle = particleSystem[(index + 1) % particleSystem.length];
                    return (
                      <motion.line
                        key={`bond-${index}`}
                        x1={`${particle.x}%`}
                        y1={`${particle.y}%`}
                        x2={`${nextParticle?.x}%`}
                        y2={`${nextParticle?.y}%`}
                        stroke="rgba(6, 182, 212, 0.4)"
                        strokeWidth="1"
                        animate={isLabRunning ? {
                          opacity: [0.2, 0.8, 0.2],
                          strokeWidth: [1, 2, 1],
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Analysis Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-cyan-300 text-sm font-medium mb-1">
                      {language === 'hu' ? 'Elemzés Típus' : 'Analysis Type'}
                    </div>
                    <div className="text-white font-bold">
                      {currentExperiment.name[language]}
                    </div>
                  </div>
                  
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-cyan-300 text-sm font-medium mb-1">
                      {language === 'hu' ? 'Felbontás' : 'Resolution'}
                    </div>
                    <div className="text-white font-bold">
                      4K Ultra HD
                    </div>
                  </div>
                </div>

                {/* Center Focus Reticle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    className="w-12 h-12 border-2 border-cyan-400 rounded-full"
                    animate={isLabRunning ? {
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Real-time Data Panel */}
            <div className="space-y-6">
              {/* Live Data Stream */}
              <div className="bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isLabRunning ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
                  {language === 'hu' ? 'Élő Adatok' : 'Live Data'}
                </h4>
                
                <div className="space-y-3">
                  {Object.entries(currentLabData).map(([key, value]) => (
                    <motion.div 
                      key={key}
                      className="flex justify-between items-center p-3 bg-white/5 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-gray-300 capitalize text-sm">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <motion.span 
                        className="text-cyan-300 font-mono font-bold"
                        animate={isLabRunning ? {
                          scale: [1, 1.1, 1],
                          color: ['#67e8f9', '#06b6d4', '#67e8f9'],
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {typeof value === 'number' ? value.toFixed(2) : value}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Material Selector */}
              <div className="bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {language === 'hu' ? 'Anyag Kiválasztás' : 'Material Selection'}
                </h4>
                
                <div className="space-y-3">
                  {innovationContent.materials.map((material) => (
                    <motion.button
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id)}
                      className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                        selectedMaterial === material.id
                          ? 'border-cyan-400 bg-cyan-500/10'
                          : 'border-white/20 bg-white/5 hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      data-hover="true"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: material.color }}
                        ></div>
                        <span className="text-white font-medium text-sm">
                          {material.name[language]}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {material.properties.applications[language]}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {language === 'hu' ? 'Gyors Műveletek' : 'Quick Actions'}
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <motion.button 
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-center transition-all duration-300 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-hover="true"
                  >
                    <Camera className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
                    <span className="text-xs text-gray-300">
                      {language === 'hu' ? 'Pillanatkép' : 'Snapshot'}
                    </span>
                  </motion.button>
                  
                  <motion.button 
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-center transition-all duration-300 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-hover="true"
                  >
                    <Download className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
                    <span className="text-xs text-gray-300">
                      {language === 'hu' ? 'Exportálás' : 'Export'}
                    </span>
                  </motion.button>
                  
                  <motion.button 
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-center transition-all duration-300 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-hover="true"
                  >
                    <Share2 className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
                    <span className="text-xs text-gray-300">
                      {language === 'hu' ? 'Megosztás' : 'Share'}
                    </span>
                  </motion.button>
                  
                  <motion.button 
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-center transition-all duration-300 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-hover="true"
                  >
                    <RotateCcw className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
                    <span className="text-xs text-gray-300">
                      {language === 'hu' ? 'Visszaállítás' : 'Reset'}
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data Overlay */}
        <AnimatePresence>
          {showDataOverlay && (
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDataOverlay(false)}
            >
              <motion.div 
                className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {language === 'hu' ? 'Részletes Laboratóriumi Adatok' : 'Detailed Laboratory Data'}
                    </h3>
                    <button 
                      onClick={() => setShowDataOverlay(false)}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                      data-hover="true"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Add comprehensive data visualization here */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(currentLabData).map(([key, value]) => (
                      <div key={key} className="bg-white/5 rounded-xl p-4">
                        <h4 className="text-cyan-300 font-medium mb-2 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <div className="text-3xl font-bold text-white mb-2">
                          {typeof value === 'number' ? value.toFixed(3) : value}
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                            style={{ width: `${Math.min(100, (value / 100) * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InnovationLab;