// Content data for Solutions Banner component
import { 
  Factory, 
  HeartHandshake, 
  Rocket, 
  Cpu,
  Shield, 
  Zap, 
  Target, 
  Eye, 
  Clock, 
  Award, 
  TrendingUp, 
  Cog,
  Globe,
  Brain,
  Users
} from 'lucide-react';

export const solutionsBannerContent = {
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
            description: "ISO 26262 funkcionális biztonsági standardok",
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
        industries_served: ["OEM-ek", "Tier 1 Beszállítók", "Elektromos Járműgyártók"]
      }
      // ... other solutions would be translated similarly
    ],

    universalBenefits: [
      {
        icon: Clock,
        title: "Gyorsabb Piacra Jutás",
        description: "Gyorsított termékfejlesztés és gyártási időkereteket",
        improvement: "50%-kal gyorsabb szállítás"
      },
      {
        icon: TrendingUp,
        title: "Költségoptimalizálás",
        description: "Csökkentett gyártási költségek folyamat optimalizálással",
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
        description: "Világszintű gyártási képesség és ellátási lánc",
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
