import { 
  Brain, 
  Microscope, 
  Cog, 
  Zap, 
  Rocket, 
  Shield, 
  Atom, 
  Eye,
  Calendar,
  Users,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Award,
  Lightbulb,
  Cpu
} from 'lucide-react';

export const innovationContent = {
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
        title: "Quantum Assembly Interface",
        category: "Quantum Technology",
        icon: Atom,
        description: "Breakthrough quantum computing integration for ultra-complex assembly pattern recognition and optimization.",
        impact: "10x processing speed",
        technologies: ["Quantum Computing", "Pattern Recognition", "Optimization Algorithms"],
        results: [
          "Quantum-enhanced precision",
          "Complex pattern recognition",
          "Instant optimization cycles"
        ],
        status: "Research Phase"
      },
      {
        year: "2024",
        title: "Neural Assembly Networks",
        category: "Neural Technology",
        icon: Zap,
        description: "Integrated neural networks that learn and evolve assembly processes through continuous feedback loops.",
        impact: "Autonomous evolution",
        technologies: ["Neural Networks", "Evolutionary Algorithms", "Feedback Systems"],
        results: [
          "Self-evolving processes",
          "Continuous improvement",
          "Autonomous optimization"
        ],
        status: "Development"
      },
      {
        year: "2025",
        title: "Holographic Assembly Guidance",
        category: "Augmented Reality",
        icon: Eye,
        description: "Revolutionary AR systems providing real-time holographic guidance for complex assembly operations.",
        impact: "Zero training time",
        technologies: ["Holographic Displays", "AR Integration", "Real-time Guidance"],
        results: [
          "Instant operator training",
          "Perfect assembly guidance",
          "Error-free operations"
        ],
        status: "Prototype"
      }
    ],

    // Innovation categories with detailed breakdowns
    categories: [
      {
        title: "Artificial Intelligence",
        icon: Brain,
        color: "from-blue-600 to-cyan-600",
        description: "Machine learning algorithms that revolutionize quality control and process optimization.",
        innovations: [
          "Predictive Quality Control",
          "Adaptive Process Optimization", 
          "Intelligent Defect Prevention",
          "Self-Learning Systems"
        ],
        impact: "99.8% accuracy improvement",
        investmentLevel: "High Priority"
      },
      {
        title: "Precision Engineering",
        icon: Microscope,
        color: "from-purple-600 to-pink-600",
        description: "Atomic-level precision control with laser-guided positioning and quantum sensors.",
        innovations: [
          "Nano-Scale Positioning",
          "Quantum Sensor Integration",
          "Laser-Guided Assembly",
          "Atomic-Level Control"
        ],
        impact: "±0.001mm tolerance achieved",
        investmentLevel: "Strategic Focus"
      },
      {
        title: "Adaptive Automation",
        icon: Cog,
        color: "from-green-600 to-emerald-600",
        description: "Self-configuring robotic systems that adapt to new requirements without reprogramming.",
        innovations: [
          "Self-Learning Robotics",
          "Dynamic Reconfiguration",
          "Adaptive Algorithms",
          "Zero-Downtime Transitions"
        ],
        impact: "300% faster setup times",
        investmentLevel: "Core Investment"
      },
      {
        title: "Quantum Computing",
        icon: Atom,
        color: "from-orange-600 to-red-600",
        description: "Quantum-enhanced processing for ultra-complex pattern recognition and optimization.",
        innovations: [
          "Quantum Pattern Recognition",
          "Ultra-Fast Optimization",
          "Complex Problem Solving",
          "Quantum-Enhanced Precision"
        ],
        impact: "10x processing acceleration",
        investmentLevel: "Future Technology"
      }
    ],

    // Research and Development Focus Areas
    rdFocus: [
      {
        title: "Next-Generation Materials",
        description: "Developing smart materials that can self-assemble and adapt to environmental conditions.",
        timeline: "2024-2026",
        investment: "$2.5M committed",
        team: "15 researchers",
        expectedOutcomes: [
          "Self-healing assembly components",
          "Adaptive material properties",
          "Environmental responsiveness"
        ]
      },
      {
        title: "Biointegrated Systems",
        description: "Exploring bio-inspired assembly processes that mimic natural cellular construction.",
        timeline: "2025-2027",
        investment: "$3.2M allocated",
        team: "22 specialists",
        expectedOutcomes: [
          "Bio-inspired assembly methods",
          "Organic-synthetic integration",
          "Self-organizing systems"
        ]
      },
      {
        title: "Sustainable Innovation",
        description: "Revolutionary approaches to zero-waste assembly with circular economy principles.",
        timeline: "2024-2025",
        investment: "$1.8M invested",
        team: "12 engineers",
        expectedOutcomes: [
          "Zero-waste processes",
          "Circular assembly systems",
          "Sustainable manufacturing"
        ]
      }
    ],

    // Innovation metrics and achievements
    metrics: [
      {
        title: "Patent Portfolio",
        value: "147",
        unit: "patents",
        trend: "+23% YoY",
        icon: Award,
        description: "Intellectual property in assembly innovation"
      },
      {
        title: "R&D Investment",
        value: "$12.8",
        unit: "million",
        trend: "+15% YoY", 
        icon: TrendingUp,
        description: "Annual research and development budget"
      },
      {
        title: "Innovation Speed",
        value: "3.2x",
        unit: "faster",
        trend: "industry avg",
        icon: Rocket,
        description: "Time to market for new technologies"
      },
      {
        title: "Quality Improvement",
        value: "99.8%",
        unit: "accuracy",
        trend: "+0.3% YoY",
        icon: CheckCircle2,
        description: "AI-powered quality control systems"
      }
    ]
  },

  hu: {
    badge: "Innovációs Kiválóság",
    title: "Úttörő Összeszerelési",
    subtitle: "Technológiák",
    description: "Az iparág vezetése folyamatos innováción, áttörő technológiákon és forradalmi megközelítéseken keresztül a precíziós összeszerelési gyártásban.",
    
    timeline: [
      {
        year: "2020",
        title: "AI-Alapú Minőségellenőrzés",
        category: "Mesterséges Intelligencia",
        icon: Brain,
        description: "Forradalmasította a minőségellenőrzést gépi tanulási algoritmusokkal, amelyek valós időben előrejelzik és megelőzik a hibákat.",
        impact: "99.8% minőségi pontosság",
        technologies: ["Számítógépes Látás", "Gépi Tanulás", "Prediktív Analitika"],
        results: [
          "50%-kal kevesebb hibaarány",
          "Valós idejű minőség-előrejelzés",
          "Automatikus korrekciós rendszerek"
        ],
        status: "Bevezetett"
      },
      {
        year: "2021", 
        title: "Nano-Precíziós Összeszerelés",
        category: "Precíziós Mérnöki Munka",
        icon: Microscope,
        description: "Mikroszkópikus toleranciák elérése lézer-vezérelt pozicionáló rendszerekkel és atomszintű precíziós vezérléssel.",
        impact: "±0.001mm tolerancia",
        technologies: ["Lézer Vezérlés", "Atomos Pozicionálás", "Kvantum Szenzorok"],
        results: [
          "Szub-mikron pozicionálási pontosság",
          "Atomszintű alkatrész elhelyezés",
          "Nulla hibás mikro-összeszerelés"
        ],
        status: "Gyártásra Kész"
      },
      {
        year: "2022",
        title: "Adaptív Robotikai Platform",
        category: "Automatizálás",
        icon: Cog,
        description: "Önmagát tanító robotikai rendszerek, amelyek újraprogramozás nélkül alkalmazkodnak új összeszerelési követelményekhez.",
        impact: "300%-kal gyorsabb beállítás",
        technologies: ["Adaptív AI", "Öntanuló Algoritmusok", "Dinamikus Újrakonfigurálás"],
        results: [
          "Azonnali folyamat adaptáció",
          "Nulla állásidő újrakonfigurálás",
          "Önoptimalizáló teljesítmény"
        ],
        status: "Skálázódás"
      },
      {
        year: "2023",
        title: "Kvantum Összeszerelési Interfész",
        category: "Kvantum Technológia",
        icon: Atom,
        description: "Áttörő kvantum számítástechnikai integráció ultra-komplex összeszerelési mintafelismeréshez és optimalizáláshoz.",
        impact: "10x feldolgozási sebesség",
        technologies: ["Kvantum Számítástechnika", "Mintafelismerés", "Optimalizálási Algoritmusok"],
        results: [
          "Kvantum-fokozott precizitás",
          "Komplex mintafelismerés",
          "Azonnali optimalizálási ciklusok"
        ],
        status: "Kutatási Fázis"
      },
      {
        year: "2024",
        title: "Neurális Összeszerelési Hálózatok",
        category: "Neurális Technológia",
        icon: Zap,
        description: "Integrált neurális hálózatok, amelyek folyamatos visszacsatolási hurkokon keresztül tanulnak és fejlesztik az összeszerelési folyamatokat.",
        impact: "Autonóm evolúció",
        technologies: ["Neurális Hálózatok", "Evolúciós Algoritmusok", "Visszacsatolási Rendszerek"],
        results: [
          "Önfejlesztő folyamatok",
          "Folyamatos fejlődés",
          "Autonóm optimalizálás"
        ],
        status: "Fejlesztés"
      },
      {
        year: "2025",
        title: "Holografikus Összeszerelési Útmutatás",
        category: "Kiterjesztett Valóság",
        icon: Eye,
        description: "Forradalmi AR rendszerek, amelyek valós idejű holografikus útmutatást nyújtanak összetett összeszerelési műveletekhez.",
        impact: "Nulla képzési idő",
        technologies: ["Holografikus Kijelzők", "AR Integráció", "Valós idejű Útmutatás"],
        results: [
          "Azonnali operátor képzés",
          "Tökéletes összeszerelési útmutatás",
          "Hibamentes műveletek"
        ],
        status: "Prototípus"
      }
    ],

    categories: [
      {
        title: "Mesterséges Intelligencia",
        icon: Brain,
        color: "from-blue-600 to-cyan-600",
        description: "Gépi tanulási algoritmusok, amelyek forradalmasítják a minőségellenőrzést és a folyamat-optimalizálást.",
        innovations: [
          "Prediktív Minőségellenőrzés",
          "Adaptív Folyamat Optimalizálás", 
          "Intelligens Hibamegelőzés",
          "Öntanuló Rendszerek"
        ],
        impact: "99.8% pontosság javulás",
        investmentLevel: "Magas Prioritás"
      },
      {
        title: "Precíziós Mérnöki Munka",
        icon: Microscope,
        color: "from-purple-600 to-pink-600",
        description: "Atomszintű precíziós vezérlés lézer-vezérelt pozicionálással és kvantum szenzorokkal.",
        innovations: [
          "Nano-Skálás Pozicionálás",
          "Kvantum Szenzor Integráció",
          "Lézer-Vezérelt Összeszerelés",
          "Atomszintű Vezérlés"
        ],
        impact: "±0.001mm tolerancia elérve",
        investmentLevel: "Stratégiai Fókusz"
      },
      {
        title: "Adaptív Automatizálás",
        icon: Cog,
        color: "from-green-600 to-emerald-600",
        description: "Önkonfiguráló robotikai rendszerek, amelyek újraprogramozás nélkül alkalmazkodnak új követelményekhez.",
        innovations: [
          "Öntanuló Robotika",
          "Dinamikus Újrakonfigurálás",
          "Adaptív Algoritmusok",
          "Nulla Állásidő Átmenetek"
        ],
        impact: "300%-kal gyorsabb beállítási idők",
        investmentLevel: "Alapvető Befektetés"
      },
      {
        title: "Kvantum Számítástechnika",
        icon: Atom,
        color: "from-orange-600 to-red-600",
        description: "Kvantum-fokozott feldolgozás ultra-komplex mintafelismeréshez és optimalizáláshoz.",
        innovations: [
          "Kvantum Mintafelismerés",
          "Ultra-Gyors Optimalizálás",
          "Komplex Problémamegoldás",
          "Kvantum-Fokozott Precizitás"
        ],
        impact: "10x feldolgozás gyorsítás",
        investmentLevel: "Jövő Technológia"
      }
    ],

    rdFocus: [
      {
        title: "Következő Generációs Anyagok",
        description: "Intelligens anyagok fejlesztése, amelyek képesek önmaguk összeszerelésére és környezeti feltételekhez való alkalmazkodásra.",
        timeline: "2024-2026",
        investment: "2.5M$ elköteleződés",
        team: "15 kutató",
        expectedOutcomes: [
          "Öngyógyító összeszerelési komponensek",
          "Adaptív anyag tulajdonságok",
          "Környezeti érzékenység"
        ]
      },
      {
        title: "Biointegrált Rendszerek",
        description: "Bio-inspirált összeszerelési folyamatok kutatása, amelyek a természetes sejtkonstrukciót utánozzák.",
        timeline: "2025-2027",
        investment: "3.2M$ allokálva",
        team: "22 szakértő",
        expectedOutcomes: [
          "Bio-inspirált összeszerelési módszerek",
          "Organikus-szintetikus integráció",
          "Önszerveződő rendszerek"
        ]
      },
      {
        title: "Fenntartható Innováció",
        description: "Forradalmi megközelítések a hulladékmentes összeszereléshez körforgásos gazdasági elvekkel.",
        timeline: "2024-2025",
        investment: "1.8M$ befektetve",
        team: "12 mérnök",
        expectedOutcomes: [
          "Hulladékmentes folyamatok",
          "Körforgásos összeszerelési rendszerek",
          "Fenntartható gyártás"
        ]
      }
    ],

    metrics: [
      {
        title: "Szabadalmi Portfólió",
        value: "147",
        unit: "szabadalom",
        trend: "+23% ÉvE",
        icon: Award,
        description: "Szellemi tulajdon az összeszerelési innovációban"
      },
      {
        title: "K+F Befektetés",
        value: "12.8",
        unit: "millió $",
        trend: "+15% ÉvE", 
        icon: TrendingUp,
        description: "Éves kutatás-fejlesztési költségvetés"
      },
      {
        title: "Innovációs Sebesség",
        value: "3.2x",
        unit: "gyorsabb",
        trend: "iparági átlag",
        icon: Rocket,
        description: "Piacra jutási idő új technológiákhoz"
      },
      {
        title: "Minőség Javulás",
        value: "99.8%",
        unit: "pontosság",
        trend: "+0.3% ÉvE",
        icon: CheckCircle2,
        description: "AI-alapú minőségellenőrzési rendszerek"
      }
    ]
  }
};
