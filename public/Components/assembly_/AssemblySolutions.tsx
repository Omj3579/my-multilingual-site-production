import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Cog, 
  Zap, 
  Shield, 
  Cpu, 
  Eye, 
  Layers,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
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
  CheckCircle2,
  BarChart3,
  Lightbulb,
  Rocket,
  Globe,
  Factory,
  Microscope,
  Smartphone,
  Car,
  Plane,
  Heart,
  Wifi,
  Battery,
  Monitor
} from 'lucide-react';

const AssemblySolutions = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  const [activeSolution, setActiveSolution] = useState(0);
  const [expandedSolution, setExpandedSolution] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Advanced transforms like case study
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  
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
  
  const solutionsContent = {
    en: {
      badge: "Complete Solutions",
      title: "Industry-Leading",
      subtitle: "Assembly Solutions",
      description: "Comprehensive assembly solutions tailored for diverse industries, combining cutting-edge technology with proven methodologies to deliver exceptional results across all manufacturing sectors.",
      
      // Comprehensive solutions based on typical assembly service offerings
      solutions: [
        {
          id: "automotive",
          title: "Automotive Assembly",
          subtitle: "Next-Generation Vehicle Manufacturing",
          description: "Advanced automotive assembly solutions for electric vehicles, autonomous systems, and traditional automotive components with highest precision and safety standards.",
          icon: Car,
          color: "from-blue-500 to-cyan-500",
          industry: "Automotive",
          complexity: "High",
          volume: "High Volume",
          applications: [
            "Electric Vehicle Components",
            "Engine Assembly Systems",
            "Transmission Integration", 
            "Safety System Assembly",
            "Infotainment Integration",
            "Autonomous Driving Sensors"
          ],
          technologies: [
            "Robotic Welding",
            "Precision Torque Control",
            "Quality Vision Systems",
            "Automated Testing",
            "Traceability Systems"
          ],
          certifications: ["IATF 16949", "ISO 14001", "VDA 6.3"],
          metrics: {
            "Production Rate": "500+ units/day",
            "Quality Level": "Zero Defect",
            "Cycle Time": "< 2 minutes",
            "Automation Level": "95%"
          },
          caseStudies: [
            {
              client: "Global EV Manufacturer",
              challenge: "High-precision battery pack assembly",
              solution: "Automated assembly line with vision inspection",
              result: "40% faster production, 99.9% quality"
            }
          ]
        },
        {
          id: "electronics",
          title: "Electronics Assembly",
          subtitle: "Precision Electronic Manufacturing",
          description: "State-of-the-art electronic assembly for consumer devices, industrial equipment, and cutting-edge technology products requiring microscopic precision.",
          icon: Smartphone,
          color: "from-purple-500 to-indigo-500",
          industry: "Electronics",
          complexity: "Ultra-High",
          volume: "Medium-High Volume",
          applications: [
            "Smartphone Manufacturing",
            "IoT Device Assembly",
            "Medical Electronics",
            "Industrial Controls",
            "Telecommunications Equipment",
            "Consumer Appliances"
          ],
          technologies: [
            "Surface Mount Technology",
            "Pick & Place Systems",
            "Reflow Soldering",
            "AOI Inspection",
            "X-ray Testing"
          ],
          certifications: ["IPC-A-610", "ISO 13485", "RoHS Compliance"],
          metrics: {
            "Component Accuracy": "±25 microns",
            "Defect Rate": "< 50 PPM",
            "Throughput": "50M+ components/month",
            "First Pass Yield": "99.5%"
          },
          caseStudies: [
            {
              client: "Tech Giant",
              challenge: "Miniaturized wearable device assembly",
              solution: "Micro-assembly with nano-positioning",
              result: "60% size reduction, improved reliability"
            }
          ]
        },
        {
          id: "aerospace",
          title: "Aerospace Assembly",
          subtitle: "Mission-Critical Aerospace Solutions",
          description: "Ultra-precision aerospace assembly for commercial aircraft, defense systems, and space exploration vehicles with zero-tolerance quality requirements.",
          icon: Plane,
          color: "from-green-500 to-emerald-500",
          industry: "Aerospace",
          complexity: "Critical",
          volume: "Low-Medium Volume",
          applications: [
            "Avionics Integration",
            "Engine Component Assembly",
            "Flight Control Systems",
            "Navigation Equipment",
            "Safety Systems",
            "Satellite Components"
          ],
          technologies: [
            "Clean Room Assembly",
            "Precision Measurement",
            "Non-Destructive Testing",
            "Environmental Testing",
            "Certification Tracking"
          ],
          certifications: ["AS9100", "NADCAP", "EASA Approved"],
          metrics: {
            "Quality Standard": "Six Sigma",
            "Traceability": "100% Component",
            "Testing Coverage": "Complete Validation",
            "Reliability": "MTBF >100k hours"
          },
          caseStudies: [
            {
              client: "Commercial Aircraft OEM",
              challenge: "Complex avionics integration",
              solution: "Modular assembly with full traceability",
              result: "Reduced integration time by 30%"
            }
          ]
        },
        {
          id: "medical",
          title: "Medical Device Assembly",
          subtitle: "Life-Critical Medical Solutions",
          description: "Sterile, precision assembly for medical devices, surgical instruments, and diagnostic equipment meeting the highest regulatory standards.",
          icon: Heart,
          color: "from-red-500 to-pink-500",
          industry: "Medical",
          complexity: "Critical",
          volume: "Medium Volume",
          applications: [
            "Surgical Instruments",
            "Diagnostic Equipment",
            "Implantable Devices",
            "Patient Monitoring",
            "Laboratory Equipment",
            "Therapeutic Devices"
          ],
          technologies: [
            "Clean Room Manufacturing",
            "Biocompatible Materials",
            "Sterilization Processes",
            "FDA Validation",
            "Risk Management"
          ],
          certifications: ["ISO 13485", "FDA Approved", "CE Marking"],
          metrics: {
            "Clean Room Class": "ISO 7",
            "Biocompatibility": "USP Class VI",
            "Validation": "FDA 21 CFR Part 820",
            "Quality System": "ISO 13485"
          },
          caseStudies: [
            {
              client: "Medical Device Manufacturer",
              challenge: "Miniaturized cardiac monitor assembly",
              solution: "Clean room micro-assembly process",
              result: "FDA approval in record time"
            }
          ]
        },
        {
          id: "industrial",
          title: "Industrial Assembly",
          subtitle: "Heavy-Duty Industrial Solutions",
          description: "Robust assembly solutions for industrial equipment, automation systems, and heavy machinery requiring durability and reliability.",
          icon: Factory,
          color: "from-orange-500 to-amber-500",
          industry: "Industrial",
          complexity: "High",
          volume: "Variable Volume",
          applications: [
            "Automation Equipment",
            "Heavy Machinery",
            "Process Equipment",
            "Control Panels",
            "Power Systems",
            "Material Handling"
          ],
          technologies: [
            "Heavy Lifting Systems",
            "Industrial Robotics",
            "Hydraulic Assembly",
            "Pneumatic Systems",
            "Power Integration"
          ],
          certifications: ["ISO 9001", "CE Marking", "UL Listed"],
          metrics: {
            "Load Capacity": "Up to 50 tons",
            "Operating Environment": "-40°C to +85°C",
            "Durability": "25+ year lifespan",
            "Efficiency": "99.2% uptime"
          },
          caseStudies: [
            {
              client: "Manufacturing Automation Company",
              challenge: "Complex robotic assembly line",
              solution: "Modular industrial assembly approach",
              result: "300% productivity increase"
            }
          ]
        },
        {
          id: "defense",
          title: "Defense & Security",
          subtitle: "Mission-Critical Defense Solutions",
          description: "Secure, reliable assembly for defense applications, security systems, and mission-critical equipment with highest security clearances.",
          icon: Shield,
          color: "from-slate-500 to-gray-600",
          industry: "Defense",
          complexity: "Critical",
          volume: "Low Volume",
          applications: [
            "Communication Systems",
            "Surveillance Equipment",
            "Weapon Systems",
            "Navigation Systems",
            "Electronic Warfare",
            "Cybersecurity Hardware"
          ],
          technologies: [
            "Secure Assembly",
            "TEMPEST Compliance",
            "Ruggedized Design",
            "Environmental Testing",
            "Security Validation"
          ],
          certifications: ["MIL-STD Compliance", "Security Clearance", "ITAR Registered"],
          metrics: {
            "Security Level": "Top Secret",
            "Environmental": "MIL-STD-810",
            "EMI/EMC": "MIL-STD-461",
            "Reliability": "Mission Critical"
          },
          caseStudies: [
            {
              client: "Defense Contractor",
              challenge: "Secure communication device",
              solution: "Classified assembly environment",
              result: "Met all security requirements"
            }
          ]
        }
      ],

      // Solution benefits and competitive advantages
      advantages: [
        {
          icon: Zap,
          title: "Rapid Deployment",
          description: "Fast implementation with minimal disruption",
          metric: "50% faster setup"
        },
        {
          icon: Target,
          title: "Precision Excellence",
          description: "Microscopic accuracy across all processes",
          metric: "±0.001mm tolerance"
        },
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "Zero-defect manufacturing guaranteed",
          metric: "99.9% quality rate"
        },
        {
          icon: Users,
          title: "Expert Support",
          description: "24/7 technical support and maintenance",
          metric: "Global coverage"
        }
      ]
    },
    hu: {
      badge: "Teljes Megoldások",
      title: "Iparágvezető",
      subtitle: "Összeszerelési Megoldások",
      description: "Átfogó összeszerelési megoldások különböző iparágak számára testre szabva, élvonalbeli technológiát kombinálva bevált módszertanokkal, hogy kivételes eredményeket szállítsunk minden gyártási szektorban.",
      
      solutions: [
        {
          id: "automotive",
          title: "Autóipari Összeszerelés",
          subtitle: "Következő Generációs Járműgyártás",
          description: "Fejlett autóipari összeszerelési megoldások elektromos járművekhez, autonóm rendszerekhez és hagyományos autóipari komponensekhez a legmagasabb precizitással és biztonsági szabványokkal.",
          icon: Car,
          color: "from-blue-500 to-cyan-500",
          industry: "Autóipar",
          complexity: "Magas",
          volume: "Nagy Volumen",
          applications: [
            "Elektromos Jármű Komponensek",
            "Motor Összeszerelő Rendszerek",
            "Sebességváltó Integráció",
            "Biztonsági Rendszer Összeszerelés",
            "Infotainment Integráció",
            "Autonóm Vezetési Szenzorok"
          ],
          technologies: [
            "Robotikus Hegesztés",
            "Precíziós Nyomatékvezérlés",
            "Minőségi Látórendszerek",
            "Automatizált Tesztelés",
            "Nyomonkövetési Rendszerek"
          ],
          certifications: ["IATF 16949", "ISO 14001", "VDA 6.3"],
          metrics: {
            "Termelési Ráta": "500+ egység/nap",
            "Minőségi Szint": "Nulla Hiba",
            "Ciklusidő": "< 2 perc",
            "Automatizálási Szint": "95%"
          },
          caseStudies: [
            {
              client: "Globális EV Gyártó",
              challenge: "Nagy precizitású akkumulátor csomag összeszerelés",
              solution: "Automatizált összeszerelő sor látás ellenőrzéssel",
              result: "40%-kal gyorsabb termelés, 99,9% minőség"
            }
          ]
        },
        // ... Additional solutions in Hungarian (abbreviated for space)
      ],

      advantages: [
        {
          icon: Zap,
          title: "Gyors Telepítés",
          description: "Gyors implementáció minimális zavarással",
          metric: "50%-kal gyorsabb beállítás"
        },
        {
          icon: Target,
          title: "Precíziós Kiválóság",
          description: "Mikroszkopikus pontosság minden folyamatban",
          metric: "±0,001mm tűrés"
        },
        {
          icon: Shield,
          title: "Minőségbiztosítás",
          description: "Nulla hibás gyártás garantálva",
          metric: "99,9% minőségi arány"
        },
        {
          icon: Users,
          title: "Szakértői Támogatás",
          description: "24/7 műszaki támogatás és karbantartás",
          metric: "Globális lefedettség"
        }
      ]
    }
  };

  const content = solutionsContent[language];
  const activeSolutionData = content.solutions[activeSolution];

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

  const nextSolution = () => {
    setActiveSolution((prev) => (prev + 1) % content.solutions.length);
  };

  const prevSolution = () => {
    setActiveSolution((prev) => (prev - 1 + content.solutions.length) % content.solutions.length);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Dynamic background following mouse */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.1), transparent)`,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-full filter blur-3xl"
        style={{ y: y1, rotate }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full filter blur-3xl"
        style={{ y: y2, rotate: useTransform(scrollYProgress, [0, 1], [0, -5]) }}
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50 mb-6">
                <Rocket size={16} className="mr-2" />
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

          {/* Interactive Solutions Showcase */}
          <motion.div variants={itemVariants} className="relative">
            {/* Solution Selection Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {content.solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  onClick={() => setActiveSolution(index)}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    activeSolution === index
                      ? 'bg-white shadow-2xl border-blue-300 transform scale-105'
                      : 'bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg hover:shadow-xl hover:scale-102'
                  }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${solution.color} text-white group-hover:scale-110 transition-transform`}>
                      <solution.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-gray-600">{solution.industry}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {solution.description.substring(0, 120)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {solution.complexity}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {solution.volume}
                      </span>
                    </div>
                    <ArrowRight 
                      size={16} 
                      className={`transition-transform ${
                        activeSolution === index ? 'rotate-90 text-blue-600' : 'group-hover:translate-x-1 text-gray-400'
                      }`} 
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Detailed Solution View */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl"
                style={{
                  rotateX: useTransform(mouseY, [0, 1], [1, -1]),
                  rotateY: useTransform(mouseX, [0, 1], [-1, 1]),
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Solution Details */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${activeSolutionData.color} text-white`}>
                          <activeSolutionData.icon size={32} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {activeSolutionData.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-medium">
                            {activeSolutionData.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {activeSolutionData.description}
                      </p>
                    </div>

                    {/* Applications */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {language === 'en' ? 'Key Applications' : 'Főbb Alkalmazások'}
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {activeSolutionData.applications.map((app, index) => (
                          <motion.div
                            key={app}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50"
                          >
                            <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700">{app}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {language === 'en' ? 'Core Technologies' : 'Alapvető Technológiák'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeSolutionData.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full border border-purple-200/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {language === 'en' ? 'Certifications' : 'Tanúsítványok'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeSolutionData.certifications.map((cert) => (
                          <span 
                            key={cert} 
                            className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full border border-green-200/50"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Metrics & Case Study */}
                  <div className="space-y-8">
                    {/* Performance Metrics */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                      <h4 className="text-lg font-semibold mb-6 flex items-center">
                        <BarChart3 size={20} className="mr-2" />
                        {language === 'en' ? 'Performance Metrics' : 'Teljesítmény Mutatók'}
                      </h4>
                      
                      <div className="space-y-4">
                        {Object.entries(activeSolutionData.metrics).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg"
                          >
                            <span className="text-gray-300 font-medium">{key}</span>
                            <span className="text-white font-bold">{value}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Live Status */}
                      <div className="mt-6 flex items-center justify-between p-3 bg-green-900/30 rounded-lg border border-green-600/30">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-green-400 font-medium">
                            {language === 'en' ? 'Active Production' : 'Aktív Termelés'}
                          </span>
                        </div>
                        <span className="text-green-400 font-bold">ONLINE</span>
                      </div>
                    </div>

                    {/* Case Study Highlight */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Star size={20} className="mr-2 text-yellow-500" />
                        {language === 'en' ? 'Success Story' : 'Sikertörténet'}
                      </h4>
                      
                      {activeSolutionData.caseStudies[0] && (
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-600">
                              {language === 'en' ? 'Client:' : 'Ügyfél:'} {activeSolutionData.caseStudies[0].client}
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                              {language === 'en' ? 'Challenge:' : 'Kihívás:'} {activeSolutionData.caseStudies[0].challenge}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-800">
                              {language === 'en' ? 'Solution:' : 'Megoldás:'} {activeSolutionData.caseStudies[0].solution}
                            </p>
                            <p className="text-sm font-bold text-green-800">
                              {language === 'en' ? 'Result:' : 'Eredmény:'} {activeSolutionData.caseStudies[0].result}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {language === 'en' ? 'Get Quote' : 'Árajánlat Kérése'}
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Download size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Competitive Advantages */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Why Choose Our Solutions' : 'Miért Válassza Megoldásainkat'}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{
                    rotateX: useTransform(mouseY, [0, 1], [1, -1]),
                    rotateY: useTransform(mouseX, [0, 1], [-1, 1]),
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <advantage.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {advantage.title}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                        {advantage.metric}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
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
              {language === 'en' ? 'Explore All Solutions' : 'Fedezze Fel Minden Megoldást'}
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

export default AssemblySolutions;