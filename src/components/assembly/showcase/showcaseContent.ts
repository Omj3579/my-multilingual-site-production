import { LucideIcon } from 'lucide-react';
import { 
  Cog, 
  Zap, 
  Shield, 
  Eye, 
  Layers,
  Award
} from 'lucide-react';

// Service interfaces for assembly showcase
export interface AssemblyService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  specifications: Record<string, string>;
  industries: string[];
  certifications: string[];
}

export interface AssemblyCapability {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
}

export interface ProcessStage {
  phase: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface ProcessExcellence {
  title: string;
  subtitle: string;
  stages: ProcessStage[];
}

export interface ShowcaseContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  services: AssemblyService[];
  capabilities: AssemblyCapability[];
  processExcellence: ProcessExcellence;
}

export interface ShowcaseContentData {
  en: ShowcaseContent;
  hu: ShowcaseContent;
}

// Comprehensive content data
export const showcaseContentData: ShowcaseContentData = {
  en: {
    badge: "Assembly Excellence",
    title: "Complete Assembly",
    subtitle: "Solutions Portfolio",
    description: "From concept to completion, our comprehensive assembly services deliver precision-engineered solutions for complex manufacturing challenges across diverse industries.",
    
    services: [
      {
        id: "electronic",
        title: "Electronic Assembly",
        subtitle: "Precision Electronics Manufacturing",
        description: "State-of-the-art electronic assembly services including PCB assembly, component mounting, and complex electronic system integration with microscopic precision.",
        image: "/images/electronic-assembly.jpg",
        features: [
          "Surface Mount Technology (SMT)",
          "Through-Hole Assembly",
          "Mixed Technology Assembly",
          "Automated Optical Inspection (AOI)",
          "In-Circuit Testing (ICT)",
          "Functional Testing"
        ],
        specifications: {
          "Component Size": "0201 and larger",
          "PCB Thickness": "0.4mm - 6.4mm",
          "Accuracy": "±25μm placement",
          "Capacity": "50M+ components/month"
        },
        industries: ["Automotive", "Medical", "Aerospace", "Consumer Electronics"],
        certifications: ["IPC-A-610", "ISO 9001", "ISO 13485"]
      },
      {
        id: "mechanical",
        title: "Mechanical Assembly",
        subtitle: "Precision Mechanical Integration",
        description: "Expert mechanical assembly services combining traditional craftsmanship with modern automation for complex mechanical systems and precision machinery.",
        image: "/images/mechanical-assembly.jpg",
        features: [
          "Precision Machining Integration",
          "Multi-Component Assembly",
          "Torque-Controlled Fastening",
          "Dimensional Verification",
          "Performance Testing",
          "Custom Fixturing"
        ],
        specifications: {
          "Tolerance": "±0.005mm",
          "Assembly Size": "Micro to 5m+",
          "Materials": "All industrial materials",
          "Capacity": "1000+ units/day"
        },
        industries: ["Industrial Equipment", "Automation", "Robotics", "Heavy Machinery"],
        certifications: ["ISO 9001", "AS9100", "IATF 16949"]
      },
      {
        id: "hybrid",
        title: "Hybrid Assembly",
        subtitle: "Electro-Mechanical Integration",
        description: "Seamless integration of electronic and mechanical components into unified, high-performance systems requiring both electrical and mechanical expertise.",
        image: "/images/hybrid-assembly.jpg",
        features: [
          "Electro-Mechanical Integration",
          "Cable Harness Assembly",
          "Sensor Integration",
          "Control System Assembly",
          "Environmental Sealing",
          "System Calibration"
        ],
        specifications: {
          "Integration Complexity": "Multi-domain",
          "Environmental Rating": "IP67+",
          "Operating Temperature": "-40°C to +125°C",
          "Reliability": "MTBF >100k hours"
        },
        industries: ["Automotive", "Defense", "Medical Devices", "Industrial IoT"],
        certifications: ["IPC-WHMA-A-620", "ISO 14001", "RoHS Compliance"]
      },
      {
        id: "custom",
        title: "Custom Assembly",
        subtitle: "Tailored Manufacturing Solutions",
        description: "Bespoke assembly solutions designed and optimized for unique customer requirements, incorporating specialized processes and advanced technologies.",
        image: "/images/custom-assembly.jpg",
        features: [
          "Custom Process Development",
          "Specialized Equipment Design",
          "Prototype to Production",
          "Advanced Materials Handling",
          "Unique Testing Protocols",
          "Regulatory Compliance"
        ],
        specifications: {
          "Customization Level": "100% tailored",
          "Development Time": "2-12 weeks",
          "Scalability": "1 to 1M+ units",
          "Complexity": "Ultra-high precision"
        },
        industries: ["Aerospace", "Research", "Medical", "Defense"],
        certifications: ["Customer-Specific", "Regulatory Compliant"]
      }
    ],

    capabilities: [
      {
        icon: Cog,
        title: "Advanced Automation",
        description: "Robotic assembly lines with AI-powered quality control",
        metric: "300% faster"
      },
      {
        icon: Eye,
        title: "Precision Engineering",
        description: "Microscopic tolerances with laser-guided positioning",
        metric: "±0.001mm"
      },
      {
        icon: Shield,
        title: "Quality Assurance",
        description: "Comprehensive testing at every assembly stage",
        metric: "99.8% accuracy"
      },
      {
        icon: Zap,
        title: "Rapid Delivery",
        description: "Accelerated production with 24/7 operations",
        metric: "2x faster"
      },
      {
        icon: Layers,
        title: "Complex Integration",
        description: "Multi-technology systems seamlessly unified",
        metric: "99.9% compatibility"
      },
      {
        icon: Award,
        title: "Industry Leadership",
        description: "Certified processes meeting global standards",
        metric: "ISO certified"
      }
    ],

    processExcellence: {
      title: "Assembly Process Excellence",
      subtitle: "Systematic approach to manufacturing perfection",
      stages: [
        {
          phase: "Design Review",
          description: "Comprehensive analysis of assembly requirements and optimization opportunities",
          duration: "1-2 weeks",
          deliverables: ["DFM Analysis", "Process Plan", "Quality Metrics"]
        },
        {
          phase: "Prototype Development", 
          description: "Rapid prototyping and validation of assembly processes and quality standards",
          duration: "2-4 weeks",
          deliverables: ["Prototype Units", "Process Validation", "Quality Reports"]
        },
        {
          phase: "Production Setup",
          description: "Full-scale production line configuration with automated quality systems",
          duration: "1-3 weeks", 
          deliverables: ["Production Line", "Quality Systems", "Training Materials"]
        },
        {
          phase: "Volume Production",
          description: "High-volume manufacturing with continuous monitoring and improvement",
          duration: "Ongoing",
          deliverables: ["Finished Products", "Quality Reports", "Performance Analytics"]
        }
      ]
    }
  },
  hu: {
    badge: "Összeszerelési Kiválóság",
    title: "Teljes Összeszerelési",
    subtitle: "Megoldások Portfóliója",
    description: "A koncepciótól a befejezésig, átfogó összeszerelési szolgáltatásaink precíziós mérnöki megoldásokat nyújtanak összetett gyártási kihívásokra különböző iparágakban.",
    
    services: [
      {
        id: "electronic",
        title: "Elektronikai Összeszerelés",
        subtitle: "Precíziós Elektronikai Gyártás",
        description: "Élvonalbeli elektronikai összeszerelési szolgáltatások, beleértve a PCB összeszerelést, komponens szerelést és összetett elektronikai rendszer integrációt mikroszkopikus precizitással.",
        image: "/images/electronic-assembly.jpg",
        features: [
          "Felületszerelési Technológia (SMT)",
          "Furatszerelési Technológia",
          "Vegyes Technológiás Összeszerelés",
          "Automatizált Optikai Ellenőrzés (AOI)",
          "Áramköri Tesztelés (ICT)",
          "Funkcionális Tesztelés"
        ],
        specifications: {
          "Komponens Méret": "0201 és nagyobb",
          "PCB Vastagság": "0,4mm - 6,4mm",
          "Pontosság": "±25μm elhelyezés",
          "Kapacitás": "50M+ komponens/hónap"
        },
        industries: ["Autóipar", "Orvosi", "Légiközlekedés", "Fogyasztói Elektronika"],
        certifications: ["IPC-A-610", "ISO 9001", "ISO 13485"]
      },
      {
        id: "mechanical",
        title: "Mechanikai Összeszerelés",
        subtitle: "Precíziós Mechanikai Integráció",
        description: "Szakértői mechanikai összeszerelési szolgáltatások, amelyek a hagyományos kézművességet modern automatizálással kombinálják összetett mechanikai rendszerekhez és precíziós gépekhez.",
        image: "/images/mechanical-assembly.jpg",
        features: [
          "Precíziós Megmunkálási Integráció",
          "Többkomponensű Összeszerelés",
          "Nyomatékvezérelt Rögzítés",
          "Méret Ellenőrzés",
          "Teljesítmény Tesztelés",
          "Egyedi Befogás"
        ],
        specifications: {
          "Tűrés": "±0,005mm",
          "Összeszerelési Méret": "Mikrotól 5m+-ig",
          "Anyagok": "Minden ipari anyag",
          "Kapacitás": "1000+ egység/nap"
        },
        industries: ["Ipari Berendezések", "Automatizálás", "Robotika", "Nehézgépészet"],
        certifications: ["ISO 9001", "AS9100", "IATF 16949"]
      },
      {
        id: "hybrid",
        title: "Hibrid Összeszerelés",
        subtitle: "Elektro-Mechanikai Integráció",
        description: "Elektronikai és mechanikai komponensek zökkenőmentes integrációja egységes, nagy teljesítményű rendszerekbe, amelyek elektromos és mechanikai szakértelmet igényelnek.",
        image: "/images/hybrid-assembly.jpg",
        features: [
          "Elektro-Mechanikai Integráció",
          "Kábelköteg Összeszerelés",
          "Szenzor Integráció",
          "Vezérlőrendszer Összeszerelés",
          "Környezeti Tömítés",
          "Rendszer Kalibrálás"
        ],
        specifications: {
          "Integrációs Komplexitás": "Multi-domain",
          "Környezeti Minősítés": "IP67+",
          "Működési Hőmérséklet": "-40°C - +125°C",
          "Megbízhatóság": "MTBF >100k óra"
        },
        industries: ["Autóipar", "Védelmi", "Orvosi Eszközök", "Ipari IoT"],
        certifications: ["IPC-WHMA-A-620", "ISO 14001", "RoHS Megfelelőség"]
      },
      {
        id: "custom",
        title: "Egyedi Összeszerelés",
        subtitle: "Testreszabott Gyártási Megoldások",
        description: "Egyedi összeszerelési megoldások tervezve és optimalizálva egyedi ügyfél követelményekhez, speciális folyamatokat és fejlett technológiákat beépítve.",
        image: "/images/custom-assembly.jpg",
        features: [
          "Egyedi Folyamatfejlesztés",
          "Speciális Berendezés Tervezés",
          "Prototípustól Gyártásig",
          "Fejlett Anyagkezelés",
          "Egyedi Tesztelési Protokollok",
          "Szabályozási Megfelelőség"
        ],
        specifications: {
          "Testreszabási Szint": "100% egyedi",
          "Fejlesztési Idő": "2-12 hét",
          "Skálázhatóság": "1-tól 1M+ egységig",
          "Komplexitás": "Ultra-nagy precizitás"
        },
        industries: ["Légiközlekedés", "Kutatás", "Orvosi", "Védelmi"],
        certifications: ["Ügyfél-Specifikus", "Szabályozási Megfelelő"]
      }
    ],

    capabilities: [
      {
        icon: Cog,
        title: "Fejlett Automatizálás",
        description: "Robotikus összeszerelő sorok AI-vezérelt minőségellenőrzéssel",
        metric: "300%-kal gyorsabb"
      },
      {
        icon: Eye,
        title: "Precíziós Mérnöki Munka",
        description: "Mikroszkopikus tűrések lézervezetéses pozicionálással",
        metric: "±0,001mm"
      },
      {
        icon: Shield,
        title: "Minőségbiztosítás",
        description: "Átfogó tesztelés minden összeszerelési szakaszban",
        metric: "99,8% pontosság"
      },
      {
        icon: Zap,
        title: "Gyors Szállítás",
        description: "Gyorsított termelés 24/7 működéssel",
        metric: "2x gyorsabb"
      },
      {
        icon: Layers,
        title: "Összetett Integráció",
        description: "Multi-technológiás rendszerek zökkenőmentesen egyesítve",
        metric: "99,9% kompatibilitás"
      },
      {
        icon: Award,
        title: "Iparági Vezetés",
        description: "Tanúsított folyamatok globális szabványoknak megfelelően",
        metric: "ISO tanúsított"
      }
    ],

    processExcellence: {
      title: "Összeszerelési Folyamat Kiválóság",
      subtitle: "Szisztematikus megközelítés a gyártási tökéletességhez",
      stages: [
        {
          phase: "Tervezési Felülvizsgálat",
          description: "Összeszerelési követelmények és optimalizálási lehetőségek átfogó elemzése",
          duration: "1-2 hét",
          deliverables: ["DFM Elemzés", "Folyamatterv", "Minőségi Mutatók"]
        },
        {
          phase: "Prototípus Fejlesztés",
          description: "Gyors prototípus készítés és összeszerelési folyamatok validálása",
          duration: "2-4 hét", 
          deliverables: ["Prototípus Egységek", "Folyamat Validálás", "Minőségi Jelentések"]
        },
        {
          phase: "Termelési Beállítás",
          description: "Teljes körű termelési sor konfiguráció automatizált minőségi rendszerekkel",
          duration: "1-3 hét",
          deliverables: ["Termelési Sor", "Minőségi Rendszerek", "Képzési Anyagok"]
        },
        {
          phase: "Nagyvolumenű Termelés",
          description: "Nagy volumenű gyártás folyamatos monitorozással és fejlesztéssel",
          duration: "Folyamatos",
          deliverables: ["Késztermékek", "Minőségi Jelentések", "Teljesítmény Analitika"]
        }
      ]
    }
  }
};
