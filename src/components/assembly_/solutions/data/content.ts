import { 
  Car, 
  Smartphone, 
  Plane, 
  Heart, 
  Factory, 
  Shield,
  Zap,
  Target,
  Users
} from 'lucide-react';
import type { SolutionsData } from '../types';

export const solutionsContent: SolutionsData = {
  en: {
    badge: "Complete Solutions",
    title: "Industry-Leading",
    subtitle: "Assembly Solutions",
    description: "Comprehensive assembly solutions tailored for diverse industries, combining cutting-edge technology with proven methodologies to deliver exceptional results across all manufacturing sectors.",
    
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
      // Additional solutions would be added here with Hungarian translations
      // For brevity, showing abbreviated version
      {
        id: "electronics",
        title: "Elektronikai Összeszerelés",
        subtitle: "Precíziós Elektronikai Gyártás",
        description: "Élvonalbeli elektronikai összeszerelés fogyasztói eszközökhöz, ipari berendezésekhez és legmodernebb technológiai termékekhez mikroszkopikus precizitást igénylő.",
        icon: Smartphone,
        color: "from-purple-500 to-indigo-500",
        industry: "Elektronika",
        complexity: "Ultra-Magas",
        volume: "Közepes-Nagy Volumen",
        applications: [
          "Okostelefon Gyártás",
          "IoT Eszköz Összeszerelés",
          "Orvosi Elektronika",
          "Ipari Vezérlők",
          "Távközlési Berendezések",
          "Fogyasztói Készülékek"
        ],
        technologies: [
          "Felületszerelési Technológia",
          "Pick & Place Rendszerek",
          "Reflow Forrasztás",
          "AOI Ellenőrzés",
          "Röntgen Tesztelés"
        ],
        certifications: ["IPC-A-610", "ISO 13485", "RoHS Megfelelőség"],
        metrics: {
          "Komponens Pontosság": "±25 mikron",
          "Hibaarány": "< 50 PPM",
          "Átbocsátás": "50M+ komponens/hónap",
          "Első Átfutási Hozam": "99,5%"
        },
        caseStudies: [
          {
            client: "Tech Óriás",
            challenge: "Miniatürizált viselhető eszköz összeszerelés",
            solution: "Mikro-összeszerelés nano-pozicionálással",
            result: "60% méretcsökkentés, javított megbízhatóság"
          }
        ]
      },
      // Remaining solutions would follow the same pattern...
      {
        id: "aerospace",
        title: "Légiközlekedési Összeszerelés",
        subtitle: "Küldetéskritikus Légiközlekedési Megoldások",
        description: "Ultra-precíziós légiközlekedési összeszerelés kereskedelmi repülőgépekhez, védelmi rendszerekhez és űrkutatási járművekhez nulla tűrésű minőségi követelményekkel.",
        icon: Plane,
        color: "from-green-500 to-emerald-500",
        industry: "Légiközlekedés",
        complexity: "Kritikus",
        volume: "Alacsony-Közepes Volumen",
        applications: [
          "Repüléstechnikai Integráció",
          "Motor Komponens Összeszerelés",
          "Repülésvezérlő Rendszerek",
          "Navigációs Berendezések",
          "Biztonsági Rendszerek",
          "Műhold Komponensek"
        ],
        technologies: [
          "Tisztatéri Összeszerelés",
          "Precíziós Mérés",
          "Roncsolásmentes Tesztelés",
          "Környezeti Tesztelés",
          "Tanúsítás Nyomon Követés"
        ],
        certifications: ["AS9100", "NADCAP", "EASA Jóváhagyott"],
        metrics: {
          "Minőségi Szabvány": "Six Sigma",
          "Nyomonkövethetőség": "100% Komponens",
          "Tesztelési Lefedettség": "Teljes Validálás",
          "Megbízhatóság": "MTBF >100k óra"
        },
        caseStudies: [
          {
            client: "Kereskedelmi Repülőgép OEM",
            challenge: "Összetett repüléstechnikai integráció",
            solution: "Moduláris összeszerelés teljes nyomonkövetéssel",
            result: "30%-kal csökkentett integrációs idő"
          }
        ]
      },
      {
        id: "medical",
        title: "Orvosi Eszköz Összeszerelés",
        subtitle: "Életkritikus Orvosi Megoldások",
        description: "Steril, precíziós összeszerelés orvosi eszközökhöz, sebészeti műszerekhez és diagnosztikai berendezésekhez a legmagasabb szabályozási standardok betartásával.",
        icon: Heart,
        color: "from-red-500 to-pink-500",
        industry: "Orvosi",
        complexity: "Kritikus",
        volume: "Közepes Volumen",
        applications: [
          "Sebészeti Műszerek",
          "Diagnosztikai Berendezések",
          "Beültethető Eszközök",
          "Betegmonitorozás",
          "Laboratóriumi Berendezések",
          "Terápiás Eszközök"
        ],
        technologies: [
          "Tisztatéri Gyártás",
          "Biokompatibilis Anyagok",
          "Sterilizációs Folyamatok",
          "FDA Validálás",
          "Kockázatkezelés"
        ],
        certifications: ["ISO 13485", "FDA Jóváhagyott", "CE Jelölés"],
        metrics: {
          "Tisztatér Osztály": "ISO 7",
          "Biokompatibilitás": "USP VI. Osztály",
          "Validálás": "FDA 21 CFR 820. rész",
          "Minőségi Rendszer": "ISO 13485"
        },
        caseStudies: [
          {
            client: "Orvosi Eszköz Gyártó",
            challenge: "Miniatürizált szívmonitor összeszerelés",
            solution: "Tisztatéri mikro-összeszerelési folyamat",
            result: "FDA jóváhagyás rekordidő alatt"
          }
        ]
      },
      {
        id: "industrial",
        title: "Ipari Összeszerelés",
        subtitle: "Nehéz Ipari Megoldások",
        description: "Robusztus összeszerelési megoldások ipari berendezésekhez, automatizálási rendszerekhez és nehézgépekhez tartósságot és megbízhatóságot igénylő.",
        icon: Factory,
        color: "from-orange-500 to-amber-500",
        industry: "Ipari",
        complexity: "Magas",
        volume: "Változó Volumen",
        applications: [
          "Automatizálási Berendezések",
          "Nehézgépek",
          "Folyamatberendezések",
          "Vezérlőpanelek",
          "Energiarendszerek",
          "Anyagmozgatás"
        ],
        technologies: [
          "Nehézemelő Rendszerek",
          "Ipari Robotika",
          "Hidraulikus Összeszerelés",
          "Pneumatikus Rendszerek",
          "Energia Integráció"
        ],
        certifications: ["ISO 9001", "CE Jelölés", "UL Listázott"],
        metrics: {
          "Terhelési Kapacitás": "Akár 50 tonna",
          "Működési Környezet": "-40°C - +85°C",
          "Tartósság": "25+ év élettartam",
          "Hatékonyság": "99,2% üzemidő"
        },
        caseStudies: [
          {
            client: "Gyártási Automatizálási Vállalat",
            challenge: "Összetett robotikus összeszerelő sor",
            solution: "Moduláris ipari összeszerelési megközelítés",
            result: "300% termelékenység növekedés"
          }
        ]
      },
      {
        id: "defense",
        title: "Védelmi és Biztonsági",
        subtitle: "Küldetéskritikus Védelmi Megoldások",
        description: "Biztonságos, megbízható összeszerelés védelmi alkalmazásokhoz, biztonsági rendszerekhez és küldetéskritikus berendezésekhez a legmagasabb biztonsági engedélyekkel.",
        icon: Shield,
        color: "from-slate-500 to-gray-600",
        industry: "Védelmi",
        complexity: "Kritikus",
        volume: "Alacsony Volumen",
        applications: [
          "Kommunikációs Rendszerek",
          "Megfigyelési Berendezések",
          "Fegyverrendszerek",
          "Navigációs Rendszerek",
          "Elektronikus Hadviselés",
          "Kiberbiztonsági Hardver"
        ],
        technologies: [
          "Biztonságos Összeszerelés",
          "TEMPEST Megfelelőség",
          "Megerősített Tervezés",
          "Környezeti Tesztelés",
          "Biztonsági Validálás"
        ],
        certifications: ["MIL-STD Megfelelőség", "Biztonsági Engedély", "ITAR Regisztrált"],
        metrics: {
          "Biztonsági Szint": "Szigorúan Titkos",
          "Környezeti": "MIL-STD-810",
          "EMI/EMC": "MIL-STD-461",
          "Megbízhatóság": "Küldetéskritikus"
        },
        caseStudies: [
          {
            client: "Védelmi Vállalkozó",
            challenge: "Biztonságos kommunikációs eszköz",
            solution: "Minősített összeszerelési környezet",
            result: "Minden biztonsági követelmény teljesítve"
          }
        ]
      }
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
