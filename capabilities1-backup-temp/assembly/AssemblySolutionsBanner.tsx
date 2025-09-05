import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, 
  Zap, 
  Shield, 
  Cpu, 
  Layers,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Clock,
  Award,
  Settings,
  BarChart3,
  Lightbulb,
  Wrench,
  Cog,
  Eye,
  Globe,
  Factory,
  Truck,
  HeartHandshake,
  ThumbsUp,
  Rocket,
  Brain
} from 'lucide-react';

const AssemblySolutions = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeSolution, setActiveSolution] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  // Comprehensive solutions content from original AssemblySolutionsBanner
  const solutionsContent = {
    en: {
      badge: "Complete Solutions",
      title: "Tailored Assembly",
      subtitle: "Solutions for Every Industry",
      description: "From automotive to aerospace, medical devices to consumer electronics - our comprehensive assembly solutions are engineered to meet the unique challenges and requirements of every industry.",
      
      // Industry-specific solutions
      solutions: [
        {
          id: "automotive",
          industry: "Automotive",
          title: "Automotive Assembly Excellence",
          subtitle: "Precision for Performance",
          icon: Factory,
          description: "Advanced assembly solutions for automotive manufacturing, ensuring safety, reliability, and performance standards that meet the most demanding automotive requirements.",
          image: "/images/automotive-assembly.jpg",
          
          applications: [
            "Engine Component Assembly",
            "Electronic Control Units (ECUs)",
            "Safety System Integration",
            "Infotainment System Assembly",
            "Sensor Integration & Calibration",
            "Powertrain Assembly"
          ],
          
          benefits: [
            {
              icon: Shield,
              title: "Safety Compliance",
              description: "ISO 26262 functional safety standards",
              metric: "100% compliant"
            },
            {
              icon: Zap,
              title: "Production Speed",
              description: "High-volume automotive production",
              metric: "500K+ units/year"
            },
            {
              icon: Target,
              title: "Quality Standards",
              description: "Zero-defect automotive quality",
              metric: "6-Sigma quality"
            }
          ],
          
          certifications: ["IATF 16949", "ISO 14001", "OHSAS 18001"],
          clientSuccess: "Reduced assembly time by 40% while maintaining zero defects",
          industries_served: ["OEMs", "Tier 1 Suppliers", "Electric Vehicle Manufacturers"]
        },
        {
          id: "medical",
          industry: "Medical Devices",
          title: "Medical Device Assembly",
          subtitle: "Precision for Life",
          icon: HeartHandshake,
          description: "Ultra-precise assembly solutions for medical devices and equipment, meeting the highest standards for safety, sterility, and regulatory compliance in healthcare applications.",
          image: "/images/medical-assembly.jpg",
          
          applications: [
            "Surgical Instrument Assembly",
            "Diagnostic Equipment Integration",
            "Implantable Device Assembly",
            "Patient Monitoring Systems",
            "Laboratory Equipment Assembly",
            "Therapeutic Device Manufacturing"
          ],
          
          benefits: [
            {
              icon: Shield,
              title: "Regulatory Compliance",
              description: "FDA and CE mark compliance",
              metric: "100% validated"
            },
            {
              icon: Eye,
              title: "Precision Assembly",
              description: "Microscopic tolerance requirements",
              metric: "±0.001mm accuracy"
            },
            {
              icon: Clock,
              title: "Sterile Manufacturing",
              description: "Cleanroom assembly environments",
              metric: "ISO Class 5"
            }
          ],
          
          certifications: ["ISO 13485", "FDA 21 CFR Part 820", "CE Marking"],
          clientSuccess: "Achieved 99.9% first-pass yield for critical surgical instruments",
          industries_served: ["Medical Device OEMs", "Surgical Equipment", "Diagnostic Companies"]
        },
        {
          id: "aerospace",
          industry: "Aerospace & Defense",
          title: "Aerospace Assembly Solutions",
          subtitle: "Precision for Flight",
          icon: Rocket,
          description: "Mission-critical assembly solutions for aerospace and defense applications, ensuring reliability and performance in the most demanding environments.",
          image: "/images/aerospace-assembly.jpg",
          
          applications: [
            "Avionics System Assembly",
            "Flight Control Components",
            "Navigation System Integration",
            "Communication Equipment Assembly",
            "Satellite Component Assembly",
            "Defense System Integration"
          ],
          
          benefits: [
            {
              icon: Award,
              title: "Military Standards",
              description: "MIL-STD compliance and testing",
              metric: "DO-178C certified"
            },
            {
              icon: Shield,
              title: "Reliability Testing",
              description: "Extreme environment validation",
              metric: "1M+ hour MTBF"
            },
            {
              icon: Target,
              title: "Precision Assembly",
              description: "Aerospace-grade tolerances",
              metric: "±0.0005mm"
            }
          ],
          
          certifications: ["AS9100", "ITAR Compliance", "NADCAP Accredited"],
          clientSuccess: "Delivered 100% on-time delivery for critical flight systems",
          industries_served: ["Commercial Aviation", "Defense Contractors", "Space Technology"]
        },
        {
          id: "electronics",
          industry: "Consumer Electronics",
          title: "Electronics Assembly",
          subtitle: "Innovation at Scale",
          icon: Cpu,
          description: "High-volume electronics assembly solutions for consumer devices, combining speed, precision, and cost-effectiveness for competitive market demands.",
          image: "/images/electronics-assembly.jpg",
          
          applications: [
            "Smartphone Component Assembly",
            "Tablet Device Manufacturing",
            "Wearable Technology Assembly",
            "Smart Home Device Integration",
            "Gaming Console Assembly",
            "IoT Device Manufacturing"
          ],
          
          benefits: [
            {
              icon: Zap,
              title: "High-Volume Production",
              description: "Massive scale manufacturing capability",
              metric: "10M+ units/month"
            },
            {
              icon: TrendingUp,
              title: "Cost Efficiency",
              description: "Optimized for competitive pricing",
              metric: "30% cost reduction"
            },
            {
              icon: Cog,
              title: "Automation Level",
              description: "Fully automated assembly lines",
              metric: "95% automated"
            }
          ],
          
          certifications: ["IPC-A-610", "RoHS Compliance", "ISO 9001"],
          clientSuccess: "Scaled production from 1M to 10M units with zero quality degradation",
          industries_served: ["Consumer Electronics", "Smart Devices", "Wearable Technology"]
        }
      ],

      // Universal benefits across all solutions
      universalBenefits: [
        {
          icon: Clock,
          title: "Faster Time-to-Market",
          description: "Accelerated product development and manufacturing timelines",
          improvement: "50% faster delivery"
        },
        {
          icon: TrendingUp,
          title: "Cost Optimization",
          description: "Reduced manufacturing costs through process optimization",
          improvement: "30% cost savings"
        },
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "Zero-defect manufacturing with comprehensive quality control",
          improvement: "99.9% quality rate"
        },
        {
          icon: Globe,
          title: "Global Scalability",
          description: "Worldwide manufacturing capability and supply chain",
          improvement: "50+ countries"
        },
        {
          icon: Brain,
          title: "Innovation Support",
          description: "R&D collaboration and next-generation technology integration",
          improvement: "100+ patents"
        },
        {
          icon: Users,
          title: "Expert Partnership",
          description: "Dedicated engineering teams and technical support",
          improvement: "24/7 support"
        }
      ],

      // Success stories and case studies
      successStories: [
        {
          client: "Global Automotive Leader",
          challenge: "Reduce assembly time for complex ECU units while maintaining quality",
          solution: "Implemented AI-guided assembly with real-time quality monitoring",
          result: "40% faster assembly, zero defects in 500K+ units",
          industry: "Automotive"
        },
        {
          client: "Medical Device Innovator", 
          challenge: "Scale production of life-critical surgical instruments",
          solution: "Cleanroom assembly with 100% automated inspection",
          result: "10x production scale-up with 99.9% first-pass yield",
          industry: "Medical"
        },
        {
          client: "Aerospace Pioneer",
          challenge: "Meet stringent reliability requirements for satellite components",
          solution: "Space-qualified assembly processes with extensive testing",
          result: "1M+ hour MTBF with 100% mission success rate",
          industry: "Aerospace"
        }
      ]
    },
    hu: {
      badge: "Teljes Megoldások",
      title: "Testreszabott Összeszerelési",
      subtitle: "Megoldások Minden Iparágnak",
      description: "Az autóipartól a légiközlekedésig, az orvosi eszközöktől a fogyasztói elektronikáig - átfogó összeszerelési megoldásaink minden iparág egyedi kihívásainak és követelményeinek megfelelően vannak tervezve.",
      
      solutions: [
        {
          id: "automotive",
          industry: "Autóipar",
          title: "Autóipari Összeszerelési Kiválóság",
          subtitle: "Precizitás a Teljesítményért",
          icon: Factory,
          description: "Fejlett összeszerelési megoldások autóipari gyártáshoz, biztosítva a biztonságot, megbízhatóságot és teljesítménystandardokat, amelyek megfelelnek a legigényesebb autóipari követelményeknek.",
          image: "/images/automotive-assembly.jpg",
          
          applications: [
            "Motor Komponens Összeszerelés",
            "Elektronikus Vezérlőegységek (ECU-k)",
            "Biztonsági Rendszer Integráció",
            "Infotainment Rendszer Összeszerelés",
            "Szenzor Integráció és Kalibrálás",
            "Hajtáslánc Összeszerelés"
          ],
          
          benefits: [
            {
              icon: Shield,
              title: "Biztonsági Megfelelőség",
              description: "ISO 26262 funkcionális biztonsági szabványok",
              metric: "100% megfelelő"
            },
            {
              icon: Zap,
              title: "Termelési Sebesség",
              description: "Nagy volumenű autóipari termelés",
              metric: "500K+ egység/év"
            },
            {
              icon: Target,
              title: "Minőségi Standardok",
              description: "Zéró hibás autóipari minőség",
              metric: "6-Sigma minőség"
            }
          ],
          
          certifications: ["IATF 16949", "ISO 14001", "OHSAS 18001"],
          clientSuccess: "40%-kal csökkentette az összeszerelési időt zéró hiba fenntartása mellett",
          industries_served: ["OEM-ek", "Tier 1 Beszállítók", "Elektromos Jármű Gyártók"]
        },
        {
          id: "medical",
          industry: "Orvosi Eszközök",
          title: "Orvosi Eszköz Összeszerelés",
          subtitle: "Precizitás az Életért",
          icon: HeartHandshake,
          description: "Ultra-precíz összeszerelési megoldások orvosi eszközökhöz és berendezésekhez, megfelelve a legmagasabb biztonsági, sterilitási és szabályozási megfelelőségi standardoknak az egészségügyi alkalmazásokban.",
          image: "/images/medical-assembly.jpg",
          
          applications: [
            "Sebészeti Műszer Összeszerelés",
            "Diagnosztikai Berendezés Integráció",
            "Implantálható Eszköz Összeszerelés",
            "Betegmonitorozó Rendszerek",
            "Laboratóriumi Berendezés Összeszerelés",
            "Terápiás Eszköz Gyártás"
          ],
          
          benefits: [
            {
              icon: Shield,
              title: "Szabályozási Megfelelőség",
              description: "FDA és CE jelölés megfelelőség",
              metric: "100% validált"
            },
            {
              icon: Eye,
              title: "Precíziós Összeszerelés",
              description: "Mikroszkopikus tűrési követelmények",
              metric: "±0,001mm pontosság"
            },
            {
              icon: Clock,
              title: "Steril Gyártás",
              description: "Tisztatéri összeszerelési környezetek",
              metric: "ISO Class 5"
            }
          ],
          
          certifications: ["ISO 13485", "FDA 21 CFR Part 820", "CE Jelölés"],
          clientSuccess: "99,9%-os első átfutási hozamot ért el kritikus sebészeti műszereknél",
          industries_served: ["Orvosi Eszköz OEM-ek", "Sebészeti Berendezések", "Diagnosztikai Vállalatok"]
        },
        {
          id: "aerospace",
          industry: "Légiközlekedés és Védelem",
          title: "Légiközlekedési Összeszerelési Megoldások",
          subtitle: "Precizitás a Repülésért",
          icon: Rocket,
          description: "Küldetéskritikus összeszerelési megoldások légiközlekedési és védelmi alkalmazásokhoz, biztosítva a megbízhatóságot és teljesítményt a legigényesebb környezetekben.",
          image: "/images/aerospace-assembly.jpg",
          
          applications: [
            "Avionikai Rendszer Összeszerelés",
            "Repülésvezérlő Komponensek",
            "Navigációs Rendszer Integráció",
            "Kommunikációs Berendezés Összeszerelés",
            "Műhold Komponens Összeszerelés",
            "Védelmi Rendszer Integráció"
          ],
          
          benefits: [
            {
              icon: Award,
              title: "Katonai Szabványok",
              description: "MIL-STD megfelelőség és tesztelés",
              metric: "DO-178C tanúsított"
            },
            {
              icon: Shield,
              title: "Megbízhatósági Tesztelés",
              description: "Szélsőséges környezeti validáció",
              metric: "1M+ óra MTBF"
            },
            {
              icon: Target,
              title: "Precíziós Összeszerelés",
              description: "Légiközlekedési szintű tűrések",
              metric: "±0,0005mm"
            }
          ],
          
          certifications: ["AS9100", "ITAR Megfelelőség", "NADCAP Akkreditált"],
          clientSuccess: "100%-os időben szállítást ért el kritikus repülési rendszereknél",
          industries_served: ["Kereskedelmi Repülés", "Védelmi Vállalkozók", "Űrtechnológia"]
        },
        {
          id: "electronics",
          industry: "Fogyasztói Elektronika",
          title: "Elektronikai Összeszerelés",
          subtitle: "Innováció Nagy Léptékben",
          icon: Cpu,
          description: "Nagy volumenű elektronikai összeszerelési megoldások fogyasztói eszközökhöz, kombinálva a sebességet, precizitást és költséghatékonyságot a versenyképes piaci igényekhez.",
          image: "/images/electronics-assembly.jpg",
          
          applications: [
            "Okostelefon Komponens Összeszerelés",
            "Tablet Eszköz Gyártás",
            "Viselhető Technológia Összeszerelés",
            "Okosotthon Eszköz Integráció",
            "Játékkonzol Összeszerelés",
            "IoT Eszköz Gyártás"
          ],
          
          benefits: [
            {
              icon: Zap,
              title: "Nagy Volumenű Termelés",
              description: "Hatalmas léptékű gyártási képesség",
              metric: "10M+ egység/hónap"
            },
            {
              icon: TrendingUp,
              title: "Költséghatékonyság",
              description: "Versenyképes árképzésre optimalizált",
              metric: "30% költségcsökkentés"
            },
            {
              icon: Cog,
              title: "Automatizálási Szint",
              description: "Teljesen automatizált összeszerelő sorok",
              metric: "95% automatizált"
            }
          ],
          
          certifications: ["IPC-A-610", "RoHS Megfelelőség", "ISO 9001"],
          clientSuccess: "1M-ról 10M egységre skálázta a termelést minőségromlás nélkül",
          industries_served: ["Fogyasztói Elektronika", "Okos Eszközök", "Viselhető Technológia"]
        }
      ],

      universalBenefits: [
        {
          icon: Clock,
          title: "Gyorsabb Piacra Jutás",
          description: "Gyorsított termékfejlesztés és gyártási időkeretei",
          improvement: "50%-kal gyorsabb szállítás"
        },
        {
          icon: TrendingUp,
          title: "Költségoptimalizálás",
          description: "Csökkentett gyártási költségek folyamatoptimalizálással",
          improvement: "30% költségmegtakarítás"
        },
        {
          icon: Shield,
          title: "Minőségbiztosítás",
          description: "Zéró hibás gyártás átfogó minőségellenőrzéssel",
          improvement: "99,9% minőségi arány"
        },
        {
          icon: Globe,
          title: "Globális Skálázhatóság",
          description: "Világméretű gyártási képesség és ellátási lánc",
          improvement: "50+ ország"
        },
        {
          icon: Brain,
          title: "Innovációs Támogatás",
          description: "K+F együttműködés és következő generációs technológia integráció",
          improvement: "100+ szabadalom"
        },
        {
          icon: Users,
          title: "Szakértői Partnerség",
          description: "Dedikált mérnöki csapatok és technikai támogatás",
          improvement: "24/7 támogatás"
        }
      ],

      successStories: [
        {
          client: "Globális Autóipari Vezető",
          challenge: "Összetett ECU egységek összeszerelési idejének csökkentése minőség fenntartása mellett",
          solution: "AI-vezérelt összeszerelés implementálása valós idejű minőségmonitorozással",
          result: "40%-kal gyorsabb összeszerelés, zéró hiba 500K+ egységben",
          industry: "Autóipar"
        },
        {
          client: "Orvosi Eszköz Innovátora",
          challenge: "Életkritikus sebészeti műszerek termelésének skálázása",
          solution: "Tisztatéri összeszerelés 100%-os automatizált ellenőrzéssel",
          result: "10x termelési skála növekedés 99,9%-os első átfutási hozammal",
          industry: "Orvosi"
        },
        {
          client: "Légiközlekedési Úttörő",
          challenge: "Szigorú megbízhatósági követelmények teljesítése műhold komponenseknél",
          solution: "Űrminősített összeszerelési folyamatok kiterjedt teszteléssel",
          result: "1M+ óra MTBF 100%-os küldetés sikerességi aránnyal",
          industry: "Légiközlekedés"
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

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-full filter blur-3xl"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full filter blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-20%']) }}
      />

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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50 mb-6">
                <Rocket className="w-4 h-4 mr-2" />
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

          {/* Industry Solutions Grid */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Solution Selector */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
                {content.solutions.map((solution, index) => (
                  <button
                    key={solution.id}
                    onClick={() => setActiveSolution(index)}
                    className={`group flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                      activeSolution === index
                        ? 'bg-blue-600 text-white scale-105'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <solution.icon size={20} className="flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">{solution.industry}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Solution Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Solution Details */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
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
                            <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700">{app}</span>
                          </motion.div>
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

                  {/* Benefits & Metrics */}
                  <div className="space-y-8">
                    {/* Key Benefits */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {language === 'en' ? 'Key Benefits' : 'Főbb Előnyök'}
                      </h4>
                      
                      {activeSolutionData.benefits.map((benefit, index) => (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white hover:scale-105 transition-transform"
                        >
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                              <benefit.icon size={24} />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-lg font-semibold">{benefit.title}</h5>
                              <p className="text-gray-300 text-sm">{benefit.description}</p>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                              {benefit.metric}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Client Success */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Star size={20} className="mr-2 text-yellow-500" />
                        {language === 'en' ? 'Client Success' : 'Ügyfél Siker'}
                      </h4>
                      
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {activeSolutionData.clientSuccess}
                      </p>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>{language === 'en' ? 'Learn More' : 'További Információ'}</span>
                      <ArrowRight size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Universal Benefits */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Universal Benefits' : 'Univerzális Előnyök'}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.universalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onHoverStart={() => setHoveredBenefit(index)}
                  onHoverEnd={() => setHoveredBenefit(null)}
                  className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <benefit.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                        {benefit.improvement}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  <motion.div 
                    className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={hoveredBenefit === index ? { width: '100%' } : { width: '70%' }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Success Stories' : 'Sikertörténetek'}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {content.successStories.map((story, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-gray-900">{story.client}</h4>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {story.industry}
                      </span>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Challenge:' : 'Kihívás:'}
                      </h5>
                      <p className="text-sm text-gray-600">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Solution:' : 'Megoldás:'}
                      </h5>
                      <p className="text-sm text-gray-600">{story.solution}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200/50">
                      <h5 className="text-sm font-semibold text-green-800 mb-1">
                        {language === 'en' ? 'Result:' : 'Eredmény:'}
                      </h5>
                      <p className="text-sm text-green-700 font-medium">{story.result}</p>
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