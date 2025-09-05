import { 
  Target, 
  Zap, 
  Shield, 
  Cpu, 
  Clock,
  TrendingUp,
  Users,
  Award,
  Eye,
  Globe,
  Factory,
  HeartHandshake,
  Rocket,
  Brain
} from 'lucide-react';
import { SolutionsBannerData } from '../types';

export const solutionsBannerContent: SolutionsBannerData = {
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
        subtitle: "Precision for Performance",        icon: Factory,
        description: "Advanced assembly solutions for automotive manufacturing, ensuring safety, reliability, and performance standards that meet the most demanding automotive requirements.",
        image: "/images/capabilities/automotive-assembly.webp",

        features: [
          "Real-time quality monitoring with AI-powered inspection systems",
          "Flexible assembly lines adaptable to multiple vehicle models",
          "Zero-waste manufacturing through optimized material handling",
          "Integration with existing automotive ERP and MES systems"
        ],
        
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
        image: "/images/capabilities/medical-assembly.webp",
        
        features: [
          "ISO 13485 certified cleanroom assembly environments",
          "Validated sterilization and packaging processes",
          "Traceability systems for full device lifecycle tracking",
          "FDA-compliant documentation and quality management"
        ],
        
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
        image: "/images/capabilities/aerospace-assembly.webp",

        features: [
          "AS9100 certified aerospace quality management systems",
          "ITAR-compliant secure manufacturing environments",
          "Extensive environmental and stress testing capabilities",
          "DO-178C software development and verification processes"
        ],
        
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
        image: "/images/capabilities/electronics-assembly.webp",
        
        features: [
          "Fully automated SMT assembly lines with Industry 4.0 integration",
          "Advanced optical inspection and testing systems",
          "Flexible production lines for rapid product changeovers",
          "RoHS-compliant lead-free soldering processes"
        ],
        
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
            icon: Target,
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
        icon: Factory,        description: "Fejlett összeszerelési megoldások autóipari gyártáshoz, biztosítva a biztonságot, megbízhatóságot és teljesítménystandardokat, amelyek megfelelnek a legigényesebb autóipari követelményeknek.",
        image: "/images/automotive-assembly.jpg",
        
        features: [
          "Valós idejű minőségmonitorozás AI-vezérelt ellenőrző rendszerekkel",
          "Rugalmas összeszerelő sorok több járműmodellhez adaptálhatóan",
          "Zéró hulladék gyártás optimalizált anyagkezeléssel",
          "Integráció meglévő autóipari ERP és MES rendszerekkel"
        ],
        
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
        icon: HeartHandshake,        description: "Ultra-precíz összeszerelési megoldások orvosi eszközökhöz és berendezésekhez, megfelelve a legmagasabb biztonsági, sterilitási és szabályozási megfelelőségi standardoknak az egészségügyi alkalmazásokban.",
        image: "/images/medical-assembly.jpg",
        
        features: [
          "ISO 13485 tanúsított tisztatéri összeszerelési környezetek",
          "Validált sterilizálási és csomagolási folyamatok",
          "Nyomon követhetőségi rendszerek teljes eszköz életciklushoz",
          "FDA-megfelelő dokumentáció és minőségirányítás"
        ],
        
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
        icon: Rocket,        description: "Küldetéskritikus összeszerelési megoldások légiközlekedési és védelmi alkalmazásokhoz, biztosítva a megbízhatóságot és teljesítményt a legigényesebb környezetekben.",
        image: "/images/aerospace-assembly.jpg",
        
        features: [
          "AS9100 tanúsított légiközlekedési minőségirányítási rendszerek",
          "ITAR-megfelelő biztonságos gyártási környezetek",
          "Kiterjedt környezeti és stressz tesztelési képességek",
          "DO-178C szoftver fejlesztési és verifikációs folyamatok"
        ],
        
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
        icon: Cpu,        description: "Nagy volumenű elektronikai összeszerelési megoldások fogyasztói eszközökhöz, kombinálva a sebességet, precizitást és költséghatékonyságot a versenyképes piaci igényekhez.",
        image: "/images/electronics-assembly.jpg",
        
        features: [
          "Teljesen automatizált SMT összeszerelő sorok Industry 4.0 integrációval",
          "Fejlett optikai ellenőrző és tesztelő rendszerek",
          "Rugalmas termelő sorok gyors termékváltásokhoz",
          "RoHS-megfelelő ólommentes forrasztási folyamatok"
        ],
        
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
            icon: Target,
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
