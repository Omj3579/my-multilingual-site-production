// Content data for Assembly Innovation2 component
import { 
  TrendingUp, 
  Target,
  Users,
  Award,
  LucideIcon
} from 'lucide-react';

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  metrics: {
    capacity: string;
    accuracy: string;
    clients: string;
    workforce: string;
  };
  technologies: string[];
  image: string;
  color: string;
}

export interface ImpactMetric {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  trend: string;
}

export interface Innovation2Content {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: TimelineItem[];
  impactMetrics: ImpactMetric[];
}

export const innovation2Content: Record<'en' | 'hu', Innovation2Content> = {
  en: {
    badge: "Innovation Timeline",
    title: "A Decade of",
    subtitle: "Assembly Innovation",
    description: "From traditional manual assembly to AI-powered automated systems, witness our revolutionary journey transforming manufacturing excellence through continuous innovation and technological advancement.",
    
    timeline: [
      {
        year: "2015",
        title: "Foundation & Vision",
        subtitle: "Establishing Excellence",
        description: "Launched with a vision to revolutionize assembly manufacturing through precision engineering and quality-first approach.",
        achievements: [
          "First automated assembly line installed",
          "ISO 9001 certification achieved", 
          "20+ skilled technicians hired",
          "Initial 5 client partnerships established"
        ],
        metrics: {
          capacity: "1,000 units/day",
          accuracy: "95.5%",
          clients: "5 partners",
          workforce: "20 specialists"
        },
        technologies: ["Manual Assembly", "Basic Automation", "Quality Control"],
        image: "/images/innovation/2015-foundation.jpg",
        color: "from-blue-500 to-cyan-500"
      },
      {
        year: "2017",
        title: "Automation Revolution",
        subtitle: "Smart Manufacturing",
        description: "Introduced robotic assembly systems and advanced quality control mechanisms, increasing efficiency and precision dramatically.",
        achievements: [
          "First robotic assembly arm deployed",
          "Automated optical inspection implemented",
          "Production capacity tripled",
          "Zero-defect manufacturing achieved"
        ],
        metrics: {
          capacity: "5,000 units/day",
          accuracy: "98.2%",
          clients: "25 partners",
          workforce: "50 specialists"
        },
        technologies: ["Robotic Assembly", "AOI Systems", "Statistical Process Control"],
        image: "/images/innovation/2017-automation.jpg",
        color: "from-purple-500 to-indigo-500"
      },
      {
        year: "2019",
        title: "Digital Integration",
        subtitle: "Industry 4.0 Adoption",
        description: "Embraced Industry 4.0 principles with IoT sensors, real-time monitoring, and predictive maintenance systems.",
        achievements: [
          "IoT sensor network deployed",
          "Real-time production monitoring",
          "Predictive maintenance system",
          "Digital twin technology implemented"
        ],
        metrics: {
          capacity: "15,000 units/day",
          accuracy: "99.1%",
          clients: "75 partners",
          workforce: "120 specialists"
        },
        technologies: ["IoT Integration", "Digital Twins", "Predictive Analytics"],
        image: "/images/innovation/2019-digital.jpg",
        color: "from-green-500 to-emerald-500"
      },
      {
        year: "2021",
        title: "AI-Powered Excellence",
        subtitle: "Machine Learning Integration",
        description: "Integrated artificial intelligence and machine learning for quality prediction, process optimization, and autonomous decision-making.",
        achievements: [
          "AI quality prediction system",
          "Machine learning optimization",
          "Autonomous process adjustment",
          "Computer vision quality control"
        ],
        metrics: {
          capacity: "30,000 units/day",
          accuracy: "99.7%",
          clients: "150 partners",
          workforce: "200 specialists"
        },
        technologies: ["AI/ML Systems", "Computer Vision", "Autonomous Control"],
        image: "/images/innovation/2021-ai.jpg",
        color: "from-orange-500 to-red-500"
      },
      {
        year: "2023",
        title: "Sustainable Future",
        subtitle: "Green Manufacturing",
        description: "Pioneered sustainable manufacturing practices with carbon-neutral operations and circular economy principles.",
        achievements: [
          "Carbon-neutral manufacturing achieved",
          "Circular economy implementation",
          "Renewable energy adoption",
          "Zero-waste production systems"
        ],
        metrics: {
          capacity: "50,000 units/day",
          accuracy: "99.8%",
          clients: "300+ partners",
          workforce: "350 specialists"
        },
        technologies: ["Sustainable Tech", "Renewable Energy", "Circular Systems"],
        image: "/images/innovation/2023-sustainable.jpg",
        color: "from-teal-500 to-green-500"
      },
      {
        year: "2025",
        title: "Next Generation",
        subtitle: "Future Assembly",
        description: "Leading the future with quantum computing optimization, advanced materials, and next-generation manufacturing technologies.",
        achievements: [
          "Quantum optimization algorithms",
          "Advanced material processing",
          "Nano-scale precision assembly",
          "Fully autonomous factories"
        ],
        metrics: {
          capacity: "100,000+ units/day",
          accuracy: "99.9%",
          clients: "500+ partners",
          workforce: "500+ specialists"
        },
        technologies: ["Quantum Computing", "Advanced Materials", "Nano Assembly"],
        image: "/images/innovation/2025-future.jpg",
        color: "from-purple-500 to-pink-500"
      }
    ],

    impactMetrics: [
      {
        icon: TrendingUp,
        title: "Efficiency Improvement",
        value: "500%",
        description: "Increase in production efficiency over the decade",
        trend: "+15% annually"
      },
      {
        icon: Target,
        title: "Quality Enhancement",
        value: "99.8%",
        description: "Current accuracy rate in assembly processes",
        trend: "+4.3% overall"
      },
      {
        icon: Users,
        title: "Workforce Growth",
        value: "25x",
        description: "Expansion of skilled workforce and capabilities",
        trend: "+250% growth"
      },
      {
        icon: Award,
        title: "Innovation Patents",
        value: "47",
        description: "Registered patents in assembly technologies",
        trend: "+12 this year"
      }
    ]
  },
  hu: {
    badge: "Innovációs Idővonal",
    title: "Egy Évtized",
    subtitle: "Összeszerelési Innováció",
    description: "A hagyományos kézi összeszerelésből az AI-vezérelt automatizált rendszerekig, tanúja lehet forradalmi utunknak, amely a gyártási kiválóságot folyamatos innováción és technológiai fejlesztésen keresztül alakítja át.",
    
    timeline: [
      {
        year: "2015",
        title: "Alapítás & Vízió",
        subtitle: "Kiválóság Megalapozása",
        description: "Azzal a vízióval indultunk, hogy forradalmasítsuk az összeszerelési gyártást precíziós mérnöki megoldásokkal és minőség-első megközelítéssel.",
        achievements: [
          "Első automatizált összeszerelő sor telepítése",
          "ISO 9001 tanúsítvány megszerzése",
          "20+ képzett technikus felvétele",
          "Kezdeti 5 ügyfél partnerség megalapítása"
        ],
        metrics: {
          capacity: "1.000 egység/nap",
          accuracy: "95,5%",
          clients: "5 partner",
          workforce: "20 szakember"
        },
        technologies: ["Kézi Összeszerelés", "Alapautomatizálás", "Minőségellenőrzés"],
        image: "/images/innovation/2015-foundation.jpg",
        color: "from-blue-500 to-cyan-500"
      },
      {
        year: "2017",
        title: "Automatizálási Forradalom",
        subtitle: "Okos Gyártás",
        description: "Robotikus összeszerelő rendszerek és fejlett minőségellenőrzési mechanizmusok bevezetése, amely drámaian növelte a hatékonyságot és precizitást.",
        achievements: [
          "Első robotikus összeszerelő kar üzembe helyezése",
          "Automatizált optikai vizsgálat megvalósítása",
          "Termelési kapacitás háromszorosára növelése",
          "Zéró hibás gyártás elérése"
        ],
        metrics: {
          capacity: "5.000 egység/nap",
          accuracy: "98,2%",
          clients: "25 partner",
          workforce: "50 szakember"
        },
        technologies: ["Robotikus Összeszerelés", "AOI Rendszerek", "Statisztikai Folyamatszabályozás"],
        image: "/images/innovation/2017-automation.jpg",
        color: "from-purple-500 to-indigo-500"
      },
      {
        year: "2019",
        title: "Digitális Integráció",
        subtitle: "Ipar 4.0 Bevezetés",
        description: "Az Ipar 4.0 elvek elfogadása IoT szenzorokkal, valós idejű monitoring és prediktív karbantartási rendszerekkel.",
        achievements: [
          "IoT szenzor hálózat kiépítése",
          "Valós idejű termelés monitoring",
          "Prediktív karbantartási rendszer",
          "Digitális iker technológia megvalósítása"
        ],
        metrics: {
          capacity: "15.000 egység/nap",
          accuracy: "99,1%",
          clients: "75 partner",
          workforce: "120 szakember"
        },
        technologies: ["IoT Integráció", "Digitális Ikrek", "Prediktív Analitika"],
        image: "/images/innovation/2019-digital.jpg",
        color: "from-green-500 to-emerald-500"
      },
      {
        year: "2021",
        title: "AI-vezérelt Kiválóság",
        subtitle: "Gépi Tanulás Integráció",
        description: "Mesterséges intelligencia és gépi tanulás integrálása minőség előrejelzéshez, folyamat optimalizáláshoz és autonóm döntéshozatalhoz.",
        achievements: [
          "AI minőség előrejelző rendszer",
          "Gépi tanulás optimalizálás",
          "Autonóm folyamat beállítás",
          "Számítógépes látás minőségellenőrzés"
        ],
        metrics: {
          capacity: "30.000 egység/nap",
          accuracy: "99,7%",
          clients: "150 partner",
          workforce: "200 szakember"
        },
        technologies: ["AI/ML Rendszerek", "Számítógépes Látás", "Autonóm Vezérlés"],
        image: "/images/innovation/2021-ai.jpg",
        color: "from-orange-500 to-red-500"
      },
      {
        year: "2023",
        title: "Fenntartható Jövő",
        subtitle: "Zöld Gyártás",
        description: "Fenntartható gyártási gyakorlatok úttörője karbonsemleges működéssel és körforgásos gazdaság elvekkel.",
        achievements: [
          "Karbonsemleges gyártás elérése",
          "Körforgásos gazdaság megvalósítása",
          "Megújuló energia bevezetése",
          "Hulladékmentes termelési rendszerek"
        ],
        metrics: {
          capacity: "50.000 egység/nap",
          accuracy: "99,8%",
          clients: "300+ partner",
          workforce: "350 szakember"
        },
        technologies: ["Fenntartható Tech", "Megújuló Energia", "Körforgásos Rendszerek"],
        image: "/images/innovation/2023-sustainable.jpg",
        color: "from-teal-500 to-green-500"
      },
      {
        year: "2025",
        title: "Következő Generáció",
        subtitle: "Jövő Összeszerelés",
        description: "A jövőt vezetjük kvantum számítástechnikai optimalizálással, fejlett anyagokkal és következő generációs gyártási technológiákkal.",
        achievements: [
          "Kvantum optimalizálási algoritmusok",
          "Fejlett anyag feldolgozás",
          "Nano-skálájú precíziós összeszerelés",
          "Teljesen autonóm gyárak"
        ],
        metrics: {
          capacity: "100.000+ egység/nap",
          accuracy: "99,9%",
          clients: "500+ partner",
          workforce: "500+ szakember"
        },
        technologies: ["Kvantum Számítástechnika", "Fejlett Anyagok", "Nano Összeszerelés"],
        image: "/images/innovation/2025-future.jpg",
        color: "from-purple-500 to-pink-500"
      }
    ],

    impactMetrics: [
      {
        icon: TrendingUp,
        title: "Hatékonyság Javítás",
        value: "500%",
        description: "Termelési hatékonyság növekedése az évtized alatt",
        trend: "+15% évente"
      },
      {
        icon: Target,
        title: "Minőség Fejlesztés",
        value: "99,8%",
        description: "Jelenlegi pontossági arány az összeszerelési folyamatokban",
        trend: "+4,3% összesen"
      },
      {
        icon: Users,
        title: "Munkaerő Növekedés",
        value: "25x",
        description: "Képzett munkaerő és képességek bővítése",
        trend: "+250% növekedés"
      },
      {
        icon: Award,
        title: "Innovációs Szabadalmak",
        value: "47",
        description: "Regisztrált szabadalmak összeszerelési technológiákban",
        trend: "+12 idén"
      }
    ]
  }
};
