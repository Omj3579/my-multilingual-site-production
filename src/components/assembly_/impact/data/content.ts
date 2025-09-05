import { 
  TrendingUp, 
  Leaf, 
  DollarSign, 
  Award, 
  Target,
  Users,
  Zap,
  Shield,
  Wind,
  Battery,
  Recycle,
  Droplets,
  Factory,
  Heart,
  Eye,
  Settings,
  Lightbulb,
  ArrowDown
} from 'lucide-react';
import { ImpactContentMap } from '../types';

export const impactContent: ImpactContentMap = {
  en: {
    badge: "Measurable Impact",
    title: "Transforming Industries",
    subtitle: "Through Sustainable Excellence",
    description: "Our assembly solutions deliver quantifiable business impact while pioneering sustainable manufacturing practices that benefit both your bottom line and the planet.",
    
    // Core impact metrics with real-world data
    keyMetrics: [
      {
        id: "business",
        title: "Business Impact",
        subtitle: "ROI & Performance",
        icon: TrendingUp,
        color: "from-blue-500 to-cyan-500",
        stats: [
          {
            value: "340%",
            label: "Average ROI",
            trend: "+45%",
            description: "Return on investment within 18 months",
            icon: DollarSign
          },
          {
            value: "250%",
            label: "Production Increase",
            trend: "+30%",
            description: "Enhanced manufacturing capacity",
            icon: Factory
          },
          {
            value: "99.8%",
            label: "Quality Rate",
            trend: "+4.2%",
            description: "Near-perfect assembly accuracy",
            icon: Target
          },
          {
            value: "67%",
            label: "Cost Reduction",
            trend: "+12%",
            description: "Lower operational expenses",
            icon: ArrowDown
          }
        ]
      },
      {
        id: "sustainability",
        title: "Environmental Impact",
        subtitle: "Green Manufacturing",
        icon: Leaf,
        color: "from-green-500 to-emerald-500",
        stats: [
          {
            value: "85%",
            label: "Carbon Reduction",
            trend: "+15%",
            description: "CO2 emissions decreased",
            icon: Wind
          },
          {
            value: "67%",
            label: "Energy Savings",
            trend: "+8%",
            description: "Renewable energy adoption",
            icon: Battery
          },
          {
            value: "92%",
            label: "Waste Reduction",
            trend: "+25%",
            description: "Circular economy principles",
            icon: Recycle
          },
          {
            value: "78%",
            label: "Water Conservation",
            trend: "+18%",
            description: "Efficient water usage",
            icon: Droplets
          }
        ]
      },
      {
        id: "innovation",
        title: "Innovation Metrics",
        subtitle: "Technology Leadership",
        icon: Lightbulb,
        color: "from-purple-500 to-indigo-500",
        stats: [
          {
            value: "47",
            label: "Patents Filed",
            trend: "+12",
            description: "Proprietary technologies",
            icon: Award
          },
          {
            value: "15",
            label: "R&D Projects",
            trend: "+3",
            description: "Active innovation initiatives",
            icon: Settings
          },
          {
            value: "89%",
            label: "Automation Level",
            trend: "+22%",
            description: "AI-powered processes",
            icon: Zap
          },
          {
            value: "24/7",
            label: "Monitoring",
            trend: "100%",
            description: "Real-time system oversight",
            icon: Eye
          }
        ]
      },
      {
        id: "social",
        title: "Social Impact",
        subtitle: "People & Communities",
        icon: Users,
        color: "from-orange-500 to-red-500",
        stats: [
          {
            value: "2,500+",
            label: "Jobs Created",
            trend: "+450",
            description: "Skilled manufacturing positions",
            icon: Users
          },
          {
            value: "95%",
            label: "Safety Record",
            trend: "+8%",
            description: "Incident-free operations",
            icon: Shield
          },
          {
            value: "87%",
            label: "Employee Satisfaction",
            trend: "+12%",
            description: "Workplace excellence rating",
            icon: Heart
          },
          {
            value: "150+",
            label: "Training Programs",
            trend: "+25",
            description: "Skill development initiatives",
            icon: Lightbulb
          }
        ]
      }
    ],

    // Detailed case studies with quantified results
    caseStudies: [
      {
        id: "automotive",
        client: "Global EV Manufacturer",
        industry: "Automotive",
        challenge: "Scaling electric vehicle battery assembly while reducing environmental impact",
        solution: "Implemented AI-powered robotic assembly with renewable energy integration",
        timeline: "12 months",
        investment: "$2.5M",
        results: {
          roi: "385%",
          productionIncrease: "340%",
          qualityImprovement: "99.7%",
          carbonReduction: "78%",
          energySavings: "65%"
        },
        impact: "Enabled client to become carbon-neutral 3 years ahead of schedule while doubling production capacity.",
        testimonial: "The assembly solution transformed our manufacturing capabilities beyond expectations.",
        clientLogo: "/images/clients/ev-manufacturer.png"
      },
      {
        id: "medical",
        client: "Medical Device Leader",
        industry: "Healthcare",
        challenge: "Ultra-precision assembly of life-critical cardiac monitoring devices",
        solution: "Clean room micro-assembly with 100% traceability and validation",
        timeline: "8 months",
        investment: "$1.8M",
        results: {
          roi: "420%",
          productionIncrease: "280%",
          qualityImprovement: "99.9%",
          timeToMarket: "-40%",
          regulatoryCompliance: "100%"
        },
        impact: "Accelerated FDA approval process and enabled life-saving device delivery to market.",
        testimonial: "Precision and reliability that literally saves lives every day.",
        clientLogo: "/images/clients/medical-leader.png"
      },
      {
        id: "aerospace",
        client: "Commercial Aviation OEM",
        industry: "Aerospace",
        challenge: "Complex avionics integration for next-generation aircraft",
        solution: "Modular assembly approach with advanced testing protocols",
        timeline: "18 months",
        investment: "$4.2M",
        results: {
          roi: "295%",
          productionIncrease: "180%",
          qualityImprovement: "99.8%",
          testingEfficiency: "+65%",
          certificationTime: "-30%"
        },
        impact: "Reduced aircraft development cycle while maintaining highest safety standards.",
        testimonial: "Mission-critical reliability with unprecedented efficiency gains.",
        clientLogo: "/images/clients/aviation-oem.png"
      }
    ],

    // Sustainability initiatives
    sustainabilityGoals: {
      title: "2030 Sustainability Commitments",
      goals: [
        {
          target: "Carbon Neutral Operations",
          progress: 78,
          deadline: "2027",
          status: "On Track",
          initiatives: ["Renewable Energy", "Carbon Offset", "Efficiency Programs"]
        },
        {
          target: "Zero Waste Manufacturing",
          progress: 85,
          deadline: "2026",
          status: "Ahead of Schedule",
          initiatives: ["Circular Economy", "Material Recovery", "Process Optimization"]
        },
        {
          target: "100% Renewable Energy",
          progress: 67,
          deadline: "2028",
          status: "On Track",
          initiatives: ["Solar Installation", "Wind Power", "Energy Storage"]
        },
        {
          target: "Water Neutral Operations",
          progress: 72,
          deadline: "2029",
          status: "On Track",
          initiatives: ["Water Recycling", "Efficiency Measures", "Conservation Programs"]
        }
      ]
    }
  },
  hu: {
    badge: "Mérhető Hatás",
    title: "Iparágak Átalakítása",
    subtitle: "Fenntartható Kiválóságon Keresztül",
    description: "Összeszerelési megoldásaink számszerűsíthető üzleti hatást biztosítanak, miközben úttörő fenntartható gyártási gyakorlatokat valósítanak meg, amelyek mind az Ön eredményeit, mind a bolygót szolgálják.",
    
    keyMetrics: [
      {
        id: "business",
        title: "Üzleti Hatás",
        subtitle: "ROI és Teljesítmény",
        icon: TrendingUp,
        color: "from-blue-500 to-cyan-500",
        stats: [
          {
            value: "340%",
            label: "Átlagos ROI",
            trend: "+45%",
            description: "Beruházás megtérülés 18 hónapon belül",
            icon: DollarSign
          },
          {
            value: "250%",
            label: "Termelés Növekedés",
            trend: "+30%",
            description: "Megnövelt gyártási kapacitás",
            icon: Factory
          },
          {
            value: "99,8%",
            label: "Minőségi Arány",
            trend: "+4,2%",
            description: "Közel tökéletes összeszerelési pontosság",
            icon: Target
          },
          {
            value: "67%",
            label: "Költségcsökkentés",
            trend: "+12%",
            description: "Alacsonyabb működési költségek",
            icon: ArrowDown
          }
        ]
      },
      {
        id: "sustainability",
        title: "Környezeti Hatás",
        subtitle: "Zöld Gyártás",
        icon: Leaf,
        color: "from-green-500 to-emerald-500",
        stats: [
          {
            value: "85%",
            label: "Szén Csökkentés",
            trend: "+15%",
            description: "CO2 kibocsátás csökkenés",
            icon: Wind
          },
          {
            value: "67%",
            label: "Energia Megtakarítás",
            trend: "+8%",
            description: "Megújuló energia bevezetés",
            icon: Battery
          },
          {
            value: "92%",
            label: "Hulladék Csökkentés",
            trend: "+25%",
            description: "Körforgásos gazdasági elvek",
            icon: Recycle
          },
          {
            value: "78%",
            label: "Víz Takarékosság",
            trend: "+18%",
            description: "Hatékony vízhasználat",
            icon: Droplets
          }
        ]
      },
      {
        id: "innovation",
        title: "Innovációs Mutatók",
        subtitle: "Technológiai Vezetés",
        icon: Lightbulb,
        color: "from-purple-500 to-indigo-500",
        stats: [
          {
            value: "47",
            label: "Benyújtott Szabadalmak",
            trend: "+12",
            description: "Tulajdonosi technológiák",
            icon: Award
          },
          {
            value: "15",
            label: "K+F Projektek",
            trend: "+3",
            description: "Aktív innovációs kezdeményezések",
            icon: Settings
          },
          {
            value: "89%",
            label: "Automatizálási Szint",
            trend: "+22%",
            description: "AI-vezérelt folyamatok",
            icon: Zap
          },
          {
            value: "24/7",
            label: "Monitoring",
            trend: "100%",
            description: "Valós idejű rendszer felügyelet",
            icon: Eye
          }
        ]
      },
      {
        id: "social",
        title: "Társadalmi Hatás",
        subtitle: "Emberek és Közösségek",
        icon: Users,
        color: "from-orange-500 to-red-500",
        stats: [
          {
            value: "2.500+",
            label: "Létrehozott Munkahelyek",
            trend: "+450",
            description: "Képzett gyártási pozíciók",
            icon: Users
          },
          {
            value: "95%",
            label: "Biztonsági Rekord",
            trend: "+8%",
            description: "Baleset-mentes működés",
            icon: Shield
          },
          {
            value: "87%",
            label: "Alkalmazotti Elégedettség",
            trend: "+12%",
            description: "Munkahelyi kiválósági értékelés",
            icon: Heart
          },
          {
            value: "150+",
            label: "Képzési Programok",
            trend: "+25",
            description: "Készségfejlesztési kezdeményezések",
            icon: Lightbulb
          }
        ]
      }
    ],

    caseStudies: [
      {
        id: "automotive",
        client: "Globális EV Gyártó",
        industry: "Autóipar",
        challenge: "Elektromos járműakkumulátor összeszerelés skálázása a környezeti hatás csökkentése mellett",
        solution: "AI-vezérelt robotikus összeszerelés megújuló energia integrációval",
        timeline: "12 hónap",
        investment: "$2,5M",
        results: {
          roi: "385%",
          productionIncrease: "340%",
          qualityImprovement: "99,7%",
          carbonReduction: "78%",
          energySavings: "65%"
        },
        impact: "Lehetővé tette az ügyfél számára, hogy 3 évvel a tervezettnél korábban váljon szén-semlegessé, miközben megduplázta a termelési kapacitást.",
        testimonial: "Az összeszerelési megoldás várakozásainkon túl alakította át gyártási képességeinket.",
        clientLogo: "/images/clients/ev-manufacturer.png"
      },
      {
        id: "medical",
        client: "Orvostechnikai Vezető",
        industry: "Egészségügy",
        challenge: "Életkritikus szívmonitorozó eszközök ultra-precíziós összeszerelése",
        solution: "Tisztatéri mikro-összeszerelés 100%-os nyomonkövethetőséggel és validálással",
        timeline: "8 hónap",
        investment: "$1,8M",
        results: {
          roi: "420%",
          productionIncrease: "280%",
          qualityImprovement: "99,9%",
          timeToMarket: "-40%",
          regulatoryCompliance: "100%"
        },
        impact: "Felgyorsította az FDA jóváhagyási folyamatot és lehetővé tette az életmentő eszköz piacra jutását.",
        testimonial: "Precizitás és megbízhatóság, amely szó szerint életeket ment meg minden nap.",
        clientLogo: "/images/clients/medical-leader.png"
      },
      {
        id: "aerospace",
        client: "Kereskedelmi Repülés OEM",
        industry: "Repülés",
        challenge: "Komplex avionikai integráció következő generációs repülőgépekhez",
        solution: "Moduláris összeszerelési megközelítés fejlett tesztelési protokollokkal",
        timeline: "18 hónap",
        investment: "$4,2M",
        results: {
          roi: "295%",
          productionIncrease: "180%",
          qualityImprovement: "99,8%",
          testingEfficiency: "+65%",
          certificationTime: "-30%"
        },
        impact: "Csökkentette a repülőgép-fejlesztési ciklust a legmagasabb biztonsági standardok fenntartása mellett.",
        testimonial: "Misszió-kritikus megbízhatóság példátlan hatékonysági nyereségekkel.",
        clientLogo: "/images/clients/aviation-oem.png"
      }
    ],

    sustainabilityGoals: {
      title: "2030 Fenntarthatósági Vállalások",
      goals: [
        {
          target: "Szén-semleges Működés",
          progress: 78,
          deadline: "2027",
          status: "Jó Úton",
          initiatives: ["Megújuló Energia", "Szén Kompenzáció", "Hatékonysági Programok"]
        },
        {
          target: "Nulla Hulladék Gyártás",
          progress: 85,
          deadline: "2026",
          status: "Időben Előrébb",
          initiatives: ["Körforgásos Gazdaság", "Anyag Visszanyerés", "Folyamat Optimalizálás"]
        },
        {
          target: "100% Megújuló Energia",
          progress: 67,
          deadline: "2028",
          status: "Jó Úton",
          initiatives: ["Napelem Telepítés", "Szélenergia", "Energia Tárolás"]
        },
        {
          target: "Víz-semleges Működés",
          progress: 72,
          deadline: "2029",
          status: "Jó Úton",
          initiatives: ["Víz Újrahasznosítás", "Hatékonysági Intézkedések", "Takarékossági Programok"]
        }
      ]
    }
  }
};
