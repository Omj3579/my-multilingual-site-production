import { 
  Brain,
  Microscope,
  Cog,
  Atom,
  Eye,
  Globe,
  Rocket
} from 'lucide-react';
import { InnovationContentMap } from '../types';

export const innovationContent: InnovationContentMap = {
  en: {
    badge: "Innovation Excellence",
    title: "Pioneering Assembly",
    subtitle: "Technologies",
    description: "Leading the industry through continuous innovation, breakthrough technologies, and revolutionary approaches to precision assembly manufacturing.",
    
    // Innovation timeline with major breakthroughs
    timeline: [
      {
        year: "2020",
        title: "AI-Powered Quality Control",
        category: "Artificial Intelligence",
        icon: Brain,
        description: "Revolutionized quality control with machine learning algorithms that predict and prevent defects in real-time.",
        impact: "99.8% quality accuracy",
        technologies: ["Computer Vision", "Machine Learning", "Predictive Analytics"],
        results: [
          "50% reduction in defect rates",
          "Real-time quality prediction",
          "Automated correction systems"
        ],
        status: "Deployed"
      },
      {
        year: "2021", 
        title: "Nano-Precision Assembly",
        category: "Precision Engineering",
        icon: Microscope,
        description: "Achieved microscopic tolerances with laser-guided positioning systems and atomic-level precision control.",
        impact: "±0.001mm tolerance",
        technologies: ["Laser Guidance", "Atomic Positioning", "Quantum Sensors"],
        results: [
          "Sub-micron positioning accuracy",
          "Atomic-level component placement",
          "Zero-defect micro-assembly"
        ],
        status: "Production Ready"
      },
      {
        year: "2022",
        title: "Adaptive Robotics Platform",
        category: "Automation",
        icon: Cog,
        description: "Self-learning robotic systems that adapt to new assembly requirements without reprogramming.",
        impact: "300% faster setup",
        technologies: ["Adaptive AI", "Self-Learning Algorithms", "Dynamic Reconfiguration"],
        results: [
          "Instant process adaptation",
          "Zero downtime reconfiguration", 
          "Self-optimizing performance"
        ],
        status: "Scaling"
      },
      {
        year: "2023",
        title: "Quantum Assembly Monitoring",
        category: "Quantum Technology",
        icon: Atom,
        description: "Quantum sensors enabling unprecedented monitoring and control of assembly processes at molecular level.",
        impact: "Molecular precision",
        technologies: ["Quantum Sensors", "Molecular Monitoring", "Quantum Computing"],
        results: [
          "Molecular-level precision",
          "Quantum state monitoring",
          "Predictive quantum modeling"
        ],
        status: "Beta Testing"
      },
      {
        year: "2024",
        title: "Holographic Assembly Guidance",
        category: "Mixed Reality",
        icon: Eye,
        description: "AR/VR holographic systems providing real-time 3D assembly guidance and virtual quality inspection.",
        impact: "Zero training time",
        technologies: ["Holographic Displays", "Spatial Computing", "Digital Twins"],
        results: [
          "Intuitive 3D guidance",
          "Virtual quality inspection",
          "Remote assembly assistance"
        ],
        status: "Development"
      },
      {
        year: "2025",
        title: "Sustainable Assembly Ecosystem",
        category: "Sustainability",
        icon: Globe,
        description: "Carbon-neutral assembly processes with 100% renewable energy and circular manufacturing principles.",
        impact: "Zero carbon footprint",
        technologies: ["Green Energy", "Circular Design", "Sustainable Materials"],
        results: [
          "100% renewable energy",
          "Zero waste production",
          "Circular material flows"
        ],
        status: "Planning"
      }
    ],

    // Innovation pillars
    pillars: [
      {
        icon: Brain,
        title: "Artificial Intelligence",
        description: "AI-driven assembly optimization and predictive quality control",
        innovations: [
          "Machine Learning Quality Prediction",
          "Automated Process Optimization", 
          "Intelligent Defect Prevention",
          "Adaptive Production Planning"
        ],
        impact: "50% efficiency increase"
      },
      {
        icon: Rocket,
        title: "Advanced Automation",
        description: "Next-generation robotics and autonomous assembly systems",
        innovations: [
          "Self-Configuring Robots",
          "Collaborative Assembly Cells",
          "Adaptive Gripper Systems",
          "Autonomous Quality Control"
        ],
        impact: "300% speed improvement"
      },
      {
        icon: Microscope,
        title: "Precision Engineering",
        description: "Microscopic tolerances and atomic-level assembly control",
        innovations: [
          "Laser-Guided Positioning",
          "Nano-Scale Manipulation",
          "Quantum Sensing Systems",
          "Molecular Assembly Control"
        ],
        impact: "1000x precision increase"
      },
      {
        icon: Globe,
        title: "Quality Assurance",
        description: "Revolutionary quality control and zero-defect manufacturing",
        innovations: [
          "Real-Time Quality Monitoring",
          "Predictive Defect Analysis",
          "Automated Correction Systems",
          "100% Inspection Coverage"
        ],
        impact: "99.99% quality rate"
      }
    ],

    // Research & Development focus areas
    rdFocus: [
      {
        title: "Quantum Assembly",
        description: "Exploring quantum-enhanced precision and control systems",
        timeline: "2024-2026",
        investment: "$5M+",
        team: "15 researchers"
      },
      {
        title: "Bio-Inspired Assembly",
        description: "Nature-inspired self-assembly and adaptive manufacturing",
        timeline: "2024-2025", 
        investment: "$3M+",
        team: "12 researchers"
      },
      {
        title: "Space Assembly Systems",
        description: "Zero-gravity assembly technologies for aerospace applications",
        timeline: "2025-2027",
        investment: "$8M+",
        team: "20 researchers"
      }
    ]
  },
  hu: {
    badge: "Innovációs Kiválóság",
    title: "Úttörő Összeszerelési",
    subtitle: "Technológiák",
    description: "Az iparág vezetése folyamatos innovációval, áttörő technológiákkal és forradalmi megközelítésekkel a precíziós összeszerelési gyártásban.",
    
    timeline: [
      {
        year: "2020",
        title: "AI-Vezérelt Minőségkontroll",
        category: "Mesterséges Intelligencia",
        icon: Brain,
        description: "Forradalmasította a minőségkontrollt gépi tanulási algoritmusokkal, amelyek valós időben előrejelzik és megelőzik a hibákat.",
        impact: "99,8% minőségi pontosság",
        technologies: ["Számítógépes Látás", "Gépi Tanulás", "Prediktív Analitika"],
        results: [
          "50%-os hibaarány csökkenés",
          "Valós idejű minőség előrejelzés",
          "Automatizált korrekciós rendszerek"
        ],
        status: "Telepítve"
      },
      {
        year: "2021",
        title: "Nano-Precíziós Összeszerelés", 
        category: "Precíziós Mérnöki Munka",
        icon: Microscope,
        description: "Mikroszkopikus tűrések elérése lézervezetéses pozicionálási rendszerekkel és atomszintű precíziós kontrolllal.",
        impact: "±0,001mm tűrés",
        technologies: ["Lézer Vezetés", "Atom Pozicionálás", "Kvantum Szenzorok"],
        results: [
          "Szub-mikron pozicionálási pontosság",
          "Atomszintű komponens elhelyezés",
          "Zéró hibás mikro-összeszerelés"
        ],
        status: "Termelésre Kész"
      },
      {
        year: "2022",
        title: "Adaptív Robotika Platform",
        category: "Automatizálás",
        icon: Cog,
        description: "Önmagukat tanító robotikus rendszerek, amelyek újraprogramozás nélkül alkalmazkodnak új összeszerelési követelményekhez.",
        impact: "300%-kal gyorsabb beállítás",
        technologies: ["Adaptív AI", "Öntanuló Algoritmusok", "Dinamikus Átkonfigurálás"],
        results: [
          "Azonnali folyamat adaptáció",
          "Zéró leállási idő átkonfigurálás",
          "Önoptimalizáló teljesítmény"
        ],
        status: "Skálázás"
      },
      {
        year: "2023",
        title: "Kvantum Összeszerelés Monitoring",
        category: "Kvantum Technológia",
        icon: Atom,
        description: "Kvantum szenzorok példátlan monitoring és kontroll lehetőségekkel az összeszerelési folyamatokban molekuláris szinten.",
        impact: "Molekuláris precizitás",
        technologies: ["Kvantum Szenzorok", "Molekuláris Monitoring", "Kvantum Számítástechnika"],
        results: [
          "Molekuláris szintű precizitás",
          "Kvantum állapot monitoring",
          "Prediktív kvantum modellezés"
        ],
        status: "Béta Tesztelés"
      },
      {
        year: "2024",
        title: "Holografikus Összeszerelési Útmutatás",
        category: "Vegyes Valóság",
        icon: Eye,
        description: "AR/VR holografikus rendszerek valós idejű 3D összeszerelési útmutatással és virtuális minőségi ellenőrzéssel.",
        impact: "Zéró betanítási idő",
        technologies: ["Holografikus Kijelzők", "Térbeli Számítástechnika", "Digitális Ikrek"],
        results: [
          "Intuitív 3D útmutatás",
          "Virtuális minőségi ellenőrzés",
          "Távoli összeszerelési támogatás"
        ],
        status: "Fejlesztés"
      },
      {
        year: "2025",
        title: "Fenntartható Összeszerelési Ökoszisztéma",
        category: "Fenntarthatóság",
        icon: Globe,
        description: "Karbonsemleges összeszerelési folyamatok 100% megújuló energiával és körforgásos gyártási elvekkel.",
        impact: "Zéró karbon lábnyom",
        technologies: ["Zöld Energia", "Körforgásos Tervezés", "Fenntartható Anyagok"],
        results: [
          "100% megújuló energia",
          "Zéró hulladék termelés",
          "Körforgásos anyagáramlás"
        ],
        status: "Tervezés"
      }
    ],

    pillars: [
      {
        icon: Brain,
        title: "Mesterséges Intelligencia",
        description: "AI-vezérelt összeszerelési optimalizálás és prediktív minőségkontroll",
        innovations: [
          "Gépi Tanulási Minőség Előrejelzés",
          "Automatizált Folyamat Optimalizálás",
          "Intelligens Hibamegelőzés", 
          "Adaptív Termelési Tervezés"
        ],
        impact: "50% hatékonyság növekedés"
      },
      {
        icon: Rocket,
        title: "Fejlett Automatizálás",
        description: "Következő generációs robotika és autonóm összeszerelési rendszerek",
        innovations: [
          "Önkonfiguráló Robotok",
          "Kollaboratív Összeszerelő Cellák",
          "Adaptív Megfogó Rendszerek",
          "Autonóm Minőségkontroll"
        ],
        impact: "300% sebesség javulás"
      },
      {
        icon: Microscope,
        title: "Precíziós Mérnöki Munka",
        description: "Mikroszkopikus tűrések és atomszintű összeszerelési kontroll",
        innovations: [
          "Lézervezetéses Pozicionálás",
          "Nano-Skála Manipuláció",
          "Kvantum Érzékelő Rendszerek",
          "Molekuláris Összeszerelési Kontroll"
        ],
        impact: "1000x precizitás növekedés"
      },
      {
        icon: Globe,
        title: "Minőségbiztosítás",
        description: "Forradalmi minőségkontroll és zéró hibás gyártás",
        innovations: [
          "Valós Idejű Minőség Monitoring",
          "Prediktív Hiba Analízis",
          "Automatizált Korrekciós Rendszerek",
          "100% Ellenőrzési Lefedettség"
        ],
        impact: "99,99% minőségi arány"
      }
    ],

    rdFocus: [
      {
        title: "Kvantum Összeszerelés",
        description: "Kvantum-megerősített precizitás és kontroll rendszerek kutatása",
        timeline: "2024-2026",
        investment: "$5M+",
        team: "15 kutató"
      },
      {
        title: "Bio-Inspirált Összeszerelés",
        description: "Természet-inspirált önösszeszerelés és adaptív gyártás",
        timeline: "2024-2025",
        investment: "$3M+", 
        team: "12 kutató"
      },
      {
        title: "Űr Összeszerelési Rendszerek",
        description: "Zéró gravitációs összeszerelési technológiák űrkutatási alkalmazásokhoz",
        timeline: "2025-2027",
        investment: "$8M+",
        team: "20 kutató"
      }
    ]
  }
};
