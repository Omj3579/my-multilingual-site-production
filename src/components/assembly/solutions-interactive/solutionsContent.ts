import { 
  Car, 
  Smartphone, 
  Heart, 
  Plane, 
  Cpu, 
  Factory,
  Monitor,
  Wifi,
  Battery,
  Microscope
} from 'lucide-react';

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  industry: string;
  complexity: string;
  volume: string;
  applications: string[];
  technologies: string[];
  certifications: string[];
  metrics: Record<string, string>;
  caseStudies: Array<{
    client: string;
    challenge: string;
    solution: string;
    result: string;
  }>;
}

export interface SolutionsContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  solutions: SolutionItem[];
  interactiveFeatures: {
    title: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
      icon: any;
    }>;
  };
  globalMetrics: Array<{
    title: string;
    value: string;
    description: string;
    trend: string;
  }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
    link: string;
  };
}

export const solutionsContent: Record<'en' | 'hu', SolutionsContent> = {
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
        certifications: ["IPC-A-610", "ISO 9001", "RoHS Compliance"],
        metrics: {
          "Component Accuracy": "±0.001mm",
          "Placement Speed": "50,000 CPH",
          "First Pass Yield": "99.8%",
          "Defect Rate": "< 10 PPM"
        },
        caseStudies: [
          {
            client: "Tech Innovation Leader",
            challenge: "Ultra-miniature component assembly",
            solution: "High-precision placement with advanced inspection",
            result: "50% size reduction, maintained performance"
          }
        ]
      },
      {
        id: "medical",
        title: "Medical Device Assembly",
        subtitle: "Life-Critical Precision Manufacturing",
        description: "Ultra-precise assembly solutions for medical devices and equipment, meeting the highest standards for safety, sterility, and regulatory compliance.",
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
          "Cleanroom Assembly",
          "Sterile Processing",
          "Biocompatible Materials",
          "Precision Micro-assembly",
          "Validation Testing"
        ],
        certifications: ["ISO 13485", "FDA 21 CFR Part 820", "CE Marking"],
        metrics: {
          "Sterility Level": "10^-6 SAL",
          "Precision": "±0.0001mm",
          "Regulatory Success": "100%",
          "Cleanroom Class": "ISO 5"
        },
        caseStudies: [
          {
            client: "Medical Device Pioneer",
            challenge: "Miniature implantable device assembly",
            solution: "Cleanroom micro-assembly with full validation",
            result: "FDA approval in record time"
          }
        ]
      },
      {
        id: "aerospace",
        title: "Aerospace Assembly",
        subtitle: "Mission-Critical Manufacturing",
        description: "Mission-critical assembly solutions for aerospace and defense applications, ensuring reliability and performance in the most demanding environments.",
        icon: Plane,
        color: "from-gray-600 to-slate-700",
        industry: "Aerospace",
        complexity: "Mission-Critical",
        volume: "Low-Medium Volume",
        applications: [
          "Avionics Systems",
          "Flight Controls",
          "Navigation Equipment",
          "Communication Systems",
          "Satellite Components",
          "Defense Systems"
        ],
        technologies: [
          "Space-Grade Assembly",
          "Extreme Environment Testing",
          "Reliability Engineering",
          "Configuration Management",
          "Failure Analysis"
        ],
        certifications: ["AS9100", "ITAR Compliance", "NADCAP"],
        metrics: {
          "MTBF": "1M+ hours",
          "Mission Success": "100%",
          "Temperature Range": "-55°C to +125°C",
          "Shock Resistance": "1000G"
        },
        caseStudies: [
          {
            client: "Aerospace Leader",
            challenge: "Satellite subsystem integration",
            solution: "Space-qualified assembly with extensive testing",
            result: "Perfect mission record over 10 years"
          }
        ]
      }
    ],

    interactiveFeatures: {
      title: "Interactive Assembly Experience",
      description: "Explore our advanced manufacturing capabilities through interactive demonstrations",
      features: [
        {
          title: "Virtual Factory Tour",
          description: "Take a 3D tour of our state-of-the-art facilities",
          icon: Factory
        },
        {
          title: "Process Simulator",
          description: "Experience our assembly processes in real-time",
          icon: Monitor
        },
        {
          title: "Quality Dashboard",
          description: "Live monitoring of quality metrics and performance",
          icon: Cpu
        }
      ]
    },

    globalMetrics: [
      {
        title: "Total Production Volume",
        value: "10M+",
        description: "Units assembled annually",
        trend: "+15% YoY"
      },
      {
        title: "Quality Achievement",
        value: "99.9%",
        description: "First-pass yield average",
        trend: "+0.1% YoY"
      },
      {
        title: "Industries Served",
        value: "15+",
        description: "Diverse market sectors",
        trend: "+3 new sectors"
      },
      {
        title: "Client Satisfaction",
        value: "98%",
        description: "Customer retention rate",
        trend: "+2% YoY"
      }
    ],

    cta: {
      title: "Ready to Transform Your Manufacturing?",
      description: "Let us design a custom assembly solution for your specific needs",
      buttonText: "Get Custom Quote",
      link: "/contact"
    }
  },

  hu: {
    badge: "Teljes Megoldások",
    title: "Iparágvezető",
    subtitle: "Összeszerelési Megoldások",
    description: "Átfogó összeszerelési megoldások különböző iparágak számára, egyesítve a legkorszerűbb technológiát bizonyított módszertanokkal, hogy kivételes eredményeket szállítsunk minden gyártási szektorban.",
    
    solutions: [
      {
        id: "automotive",
        title: "Autóipari Összeszerelés",
        subtitle: "Következő Generációs Járműgyártás",
        description: "Fejlett autóipari összeszerelési megoldások elektromos járművekhez, autonóm rendszerekhez és hagyományos autóipari komponensekhez a legmagasabb pontossági és biztonsági szabványokkal.",
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
          "Precíziós Nyomaték Szabályozás",
          "Minőségi Látórendszerek",
          "Automatizált Tesztelés",
          "Nyomonkövetési Rendszerek"
        ],
        certifications: ["IATF 16949", "ISO 14001", "VDA 6.3"],
        metrics: {
          "Termelési Ráta": "500+ egység/nap",
          "Minőségi Szint": "Zéró Hiba",
          "Ciklus Idő": "< 2 perc",
          "Automatizálási Szint": "95%"
        },
        caseStudies: [
          {
            client: "Globális EV Gyártó",
            challenge: "Nagy pontosságú akkumulátor csomag összeszerelés",
            solution: "Automatizált összeszerelő sor látóellenőrzéssel",
            result: "40%-kal gyorsabb termelés, 99,9% minőség"
          }
        ]
      },
      {
        id: "electronics",
        title: "Elektronikai Összeszerelés",
        subtitle: "Precíziós Elektronikai Gyártás",
        description: "Legmodernebb elektronikai összeszerelés fogyasztói eszközökhöz, ipari berendezésekhez és csúcstechnológiai termékekhez mikroméretű pontosságot igénylő alkalmazásokhoz.",
        icon: Smartphone,
        color: "from-purple-500 to-indigo-500",
        industry: "Elektronika",
        complexity: "Ultra-Magas",
        volume: "Közepes-Magas Volumen",
        applications: [
          "Okostelefon Gyártás",
          "IoT Eszköz Összeszerelés",
          "Orvosi Elektronika",
          "Ipari Vezérlők",
          "Távközlési Berendezések",
          "Fogyasztói Készülékek"
        ],
        technologies: [
          "Felületszerelő Technológia",
          "Pick & Place Rendszerek",
          "Reflow Forrasztás",
          "AOI Ellenőrzés",
          "Röntgen Tesztelés"
        ],
        certifications: ["IPC-A-610", "ISO 9001", "RoHS Megfelelőség"],
        metrics: {
          "Komponens Pontosság": "±0,001mm",
          "Elhelyezési Sebesség": "50 000 CPH",
          "Első Átfutási Hozam": "99,8%",
          "Hibaarány": "< 10 PPM"
        },
        caseStudies: [
          {
            client: "Tech Innováció Vezető",
            challenge: "Ultra-miniatűr komponens összeszerelés",
            solution: "Nagy pontosságú elhelyezés fejlett ellenőrzéssel",
            result: "50% méretcsökkentés, teljesítmény fenntartása"
          }
        ]
      },
      {
        id: "medical",
        title: "Orvosi Eszköz Összeszerelés",
        subtitle: "Életkritikus Precíziós Gyártás",
        description: "Ultra-precíz összeszerelési megoldások orvosi eszközökhöz és berendezésekhez, megfelelve a legmagasabb biztonsági, sterilitási és szabályozási megfelelőségi szabványoknak.",
        icon: Heart,
        color: "from-red-500 to-pink-500",
        industry: "Orvosi",
        complexity: "Kritikus",
        volume: "Közepes Volumen",
        applications: [
          "Sebészeti Műszerek",
          "Diagnosztikai Berendezések",
          "Implantálható Eszközök",
          "Betegmonitorozás",
          "Laboratóriumi Berendezések",
          "Terápiás Eszközök"
        ],
        technologies: [
          "Tisztatéri Összeszerelés",
          "Steril Feldolgozás",
          "Biokompatibilis Anyagok",
          "Precíziós Mikro-összeszerelés",
          "Validációs Tesztelés"
        ],
        certifications: ["ISO 13485", "FDA 21 CFR Part 820", "CE Jelölés"],
        metrics: {
          "Sterilitási Szint": "10^-6 SAL",
          "Pontosság": "±0,0001mm",
          "Szabályozási Siker": "100%",
          "Tisztatéri Osztály": "ISO 5"
        },
        caseStudies: [
          {
            client: "Orvosi Eszköz Úttörő",
            challenge: "Miniatűr implantálható eszköz összeszerelés",
            solution: "Tisztatéri mikro-összeszerelés teljes validációval",
            result: "FDA jóváhagyás rekordidő alatt"
          }
        ]
      },
      {
        id: "aerospace",
        title: "Légiközlekedési Összeszerelés",
        subtitle: "Küldetéskritikus Gyártás",
        description: "Küldetéskritikus összeszerelési megoldások légiközlekedési és védelmi alkalmazásokhoz, biztosítva a megbízhatóságot és teljesítményt a legigényesebb környezetekben.",
        icon: Plane,
        color: "from-gray-600 to-slate-700",
        industry: "Légiközlekedés",
        complexity: "Küldetéskritikus",
        volume: "Alacsony-Közepes Volumen",
        applications: [
          "Avionikai Rendszerek",
          "Repülésvezérlés",
          "Navigációs Berendezések",
          "Kommunikációs Rendszerek",
          "Műhold Komponensek",
          "Védelmi Rendszerek"
        ],
        technologies: [
          "Űrminőségű Összeszerelés",
          "Szélsőséges Környezeti Tesztelés",
          "Megbízhatósági Mérnökség",
          "Konfigurációmenedzsment",
          "Hibaelemzés"
        ],
        certifications: ["AS9100", "ITAR Megfelelőség", "NADCAP"],
        metrics: {
          "MTBF": "1M+ óra",
          "Küldetés Siker": "100%",
          "Hőmérséklet Tartomány": "-55°C-tól +125°C-ig",
          "Rázkódás Ellenállás": "1000G"
        },
        caseStudies: [
          {
            client: "Légiközlekedési Vezető",
            challenge: "Műhold alrendszer integráció",
            solution: "Űrminősített összeszerelés kiterjedt teszteléssel",
            result: "Tökéletes küldetési rekord 10 éven keresztül"
          }
        ]
      }
    ],

    interactiveFeatures: {
      title: "Interaktív Összeszerelési Élmény",
      description: "Fedezze fel fejlett gyártási képességeinket interaktív bemutatókon keresztül",
      features: [
        {
          title: "Virtuális Gyárlátogatás",
          description: "Vegyen részt csúcstechnológiai létesítményeink 3D túráján",
          icon: Factory
        },
        {
          title: "Folyamat Szimulátor",
          description: "Tapasztalja meg összeszerelési folyamatainkat valós időben",
          icon: Monitor
        },
        {
          title: "Minőségi Irányítópult",
          description: "Élő monitoring a minőségi mutatókról és teljesítményről",
          icon: Cpu
        }
      ]
    },

    globalMetrics: [
      {
        title: "Összes Termelési Volumen",
        value: "10M+",
        description: "Évente összeszerelt egységek",
        trend: "+15% YoY"
      },
      {
        title: "Minőségi Teljesítmény",
        value: "99,9%",
        description: "Első átfutási hozam átlag",
        trend: "+0,1% YoY"
      },
      {
        title: "Kiszolgált Iparágak",
        value: "15+",
        description: "Változatos piaci szektorok",
        trend: "+3 új szektor"
      },
      {
        title: "Ügyfél Elégedettség",
        value: "98%",
        description: "Ügyfél megtartási arány",
        trend: "+2% YoY"
      }
    ],

    cta: {
      title: "Készen Áll a Gyártás Átalakítására?",
      description: "Engedje, hogy egyedi összeszerelési megoldást tervezzünk az Ön specifikus igényeihez",
      buttonText: "Egyedi Ajánlat Kérése",
      link: "/kapcsolat"
    }
  }
};
