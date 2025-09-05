
import { 
  TrendingUp, 
  Leaf, 
  DollarSign, 
  Award, 
  Target,
  Users,
  Globe,
  Zap,
  Shield,
  BarChart3,
  PieChart,
  Activity,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  Star,
  Calendar,
  Clock,
  Lightbulb,
  Recycle,
  Battery,
  Droplets,
  Wind,
  Sun,
  Factory,
  Truck,
  Building,
  Heart,
  Eye,
  Settings
} from 'lucide-react';

export const impactContent = {
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
        client: "MedTech Innovation",
        industry: "Medical Devices",
        challenge: "Achieving FDA-compliant precision assembly for life-critical medical devices",
        solution: "Deployed clean-room assembly with quantum-level precision monitoring",
        timeline: "8 months",
        investment: "$1.8M",
        results: {
          roi: "420%",
          productionIncrease: "180%",
          qualityImprovement: "99.9%",
          carbonReduction: "45%",
          energySavings: "38%"
        },
        impact: "Achieved fastest FDA approval in company history while establishing new industry quality standards.",
        testimonial: "Precision and reliability that exceeds even our most demanding requirements.",
        clientLogo: "/images/clients/medtech.png"
      },
      {
        id: "aerospace",
        client: "AeroSpace Dynamics",
        industry: "Aerospace",
        challenge: "Ultra-precise assembly for next-generation satellite components",
        solution: "Integrated micro-assembly robotics with zero-gravity simulation testing",
        timeline: "15 months",
        investment: "$3.2M",
        results: {
          roi: "295%",
          productionIncrease: "220%",
          qualityImprovement: "99.95%",
          carbonReduction: "52%",
          energySavings: "43%"
        },
        impact: "Reduced satellite deployment costs by 60% while improving orbital performance reliability.",
        testimonial: "Revolutionary precision that's literally out of this world.",
        clientLogo: "/images/clients/aerospace.png"
      }
    ]
  },
  hu: {
    // Hungarian translations...
    badge: "Mérhető Hatás",
    title: "Iparágak Átalakítása",
    subtitle: "Fenntartható Kiválóság Révén",
    description: "Összeszerelési megoldásaink mérhető üzleti hatást biztosítanak, miközben úttörő fenntartható gyártási gyakorlatokat vezetnek be, amelyek mind az Ön eredményeinek, mind a bolygónak jót tesznek.",
    
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
            description: "Megtérülés 18 hónapon belül",
            icon: DollarSign
          },
          {
            value: "250%",
            label: "Gyártásnövekedés",
            trend: "+30%",
            description: "Megnövelt gyártókapacitás",
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
      }
      // ... additional Hungarian translations
    ],
    
    caseStudies: [
      // Hungarian case studies...
    ]
  }
};
