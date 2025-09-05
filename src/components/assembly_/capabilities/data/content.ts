import { 
  Cog, 
  Shield, 
  Eye, 
  Layers
} from 'lucide-react';

export interface TabData {
  id: string;
  label: string;
  icon: React.ComponentType<{ size: number }>;
  title: string;
  description: string;
  features: string[];
  metrics: Record<string, string>;
}

export interface ProcessStepData {
  title: string;
  duration: number;
  status: 'completed' | 'active' | 'pending';
}

export interface ContentData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tabs: TabData[];
  processSteps: ProcessStepData[];
}

export const capabilitiesContent: Record<string, ContentData> = {
  en: {
    badge: "Core Capabilities",
    title: "Advanced Assembly",
    subtitle: "Technologies",
    description: "Our state-of-the-art assembly capabilities combine precision engineering with cutting-edge automation to deliver unparalleled manufacturing excellence.",
    
    tabs: [
      {
        id: "automation",
        label: "Automation",
        icon: Cog,
        title: "Intelligent Automation Systems",
        description: "AI-powered robotics and automated assembly lines ensuring consistent quality and efficiency.",
        features: [
          "Robotic Assembly Arms",
          "Vision-Guided Systems",
          "Quality Control Integration",
          "Real-time Monitoring"
        ],
        metrics: {
          speed: "300% faster",
          accuracy: "99.8%",
          efficiency: "24/7 operation"
        }
      },
      {
        id: "precision",
        label: "Precision",
        icon: Eye,
        title: "Micro-Precision Engineering",
        description: "Advanced measurement and positioning systems achieving microscopic tolerances.",
        features: [
          "Laser Measurement",
          "Nano-positioning",
          "Surface Inspection",
          "Dimensional Analysis"
        ],
        metrics: {
          tolerance: "±0.001mm",
          accuracy: "99.95%",
          resolution: "Sub-micron"
        }
      },
      {
        id: "quality",
        label: "Quality",
        icon: Shield,
        title: "Comprehensive Quality Assurance",
        description: "Multi-layer quality control systems ensuring every component meets stringent standards.",
        features: [
          "In-line Testing",
          "Statistical Analysis",
          "Defect Prevention",
          "Certification Tracking"
        ],
        metrics: {
          defects: "<0.1%",
          testing: "100% coverage",
          compliance: "ISO certified"
        }
      },
      {
        id: "integration",
        label: "Integration",
        icon: Layers,
        title: "Seamless System Integration",
        description: "Harmonious integration of diverse technologies into unified, high-performance systems.",
        features: [
          "Multi-technology Fusion",
          "Interface Optimization",
          "Protocol Standardization",
          "Performance Validation"
        ],
        metrics: {
          compatibility: "99.9%",
          integration: "Seamless",
          performance: "Optimized"
        }
      }
    ],

    processSteps: [
      { title: "Design Analysis", duration: 15, status: "completed" as const },
      { title: "Component Preparation", duration: 25, status: "active" as const },
      { title: "Precision Assembly", duration: 40, status: "pending" as const },
      { title: "Quality Verification", duration: 15, status: "pending" as const },
      { title: "Final Testing", duration: 5, status: "pending" as const }
    ]
  },
  hu: {
    badge: "Alapvető Képességek",
    title: "Fejlett Összeszerelési",
    subtitle: "Technológiák",
    description: "Élvonalbeli összeszerelési képességeink a precíziós mérnöki munkát a legmodernebb automatizálással kombinálják, hogy páratlan gyártási kiválóságot nyújtsanak.",
    
    tabs: [
      {
        id: "automation",
        label: "Automatizálás",
        icon: Cog,
        title: "Intelligens Automatizálási Rendszerek",
        description: "AI-vezérelt robotika és automatizált összeszerelő sorok következetes minőség és hatékonyság biztosítására.",
        features: [
          "Robotikus Összeszerelő Karok",
          "Látás-vezérelt Rendszerek",
          "Minőségkontroll Integráció",
          "Valós idejű Monitoring"
        ],
        metrics: {
          speed: "300%-kal gyorsabb",
          accuracy: "99,8%",
          efficiency: "24/7 működés"
        }
      },
      {
        id: "precision",
        label: "Precizitás",
        icon: Eye,
        title: "Mikro-precíziós Mérnöki Munka",
        description: "Fejlett mérési és pozicionálási rendszerek mikroszkopikus tűrések elérésére.",
        features: [
          "Lézeres Mérés",
          "Nano-pozicionálás",
          "Felületi Vizsgálat",
          "Méretanalízis"
        ],
        metrics: {
          tolerance: "±0,001mm",
          accuracy: "99,95%",
          resolution: "Szub-mikron"
        }
      },
      {
        id: "quality",
        label: "Minőség",
        icon: Shield,
        title: "Átfogó Minőségbiztosítás",
        description: "Többrétegű minőségellenőrzési rendszerek biztosítják, hogy minden komponens megfeleljen a szigorú szabványoknak.",
        features: [
          "Soron Belüli Tesztelés",
          "Statisztikai Elemzés",
          "Hibamegelőzés",
          "Tanúsítványkövetés"
        ],
        metrics: {
          defects: "<0,1%",
          testing: "100% lefedettség",
          compliance: "ISO tanúsított"
        }
      },
      {
        id: "integration",
        label: "Integráció",
        icon: Layers,
        title: "Zökkenőmentes Rendszerintegráció",
        description: "Különböző technológiák harmonikus integrálása egységes, nagy teljesítményű rendszerekbe.",
        features: [
          "Multi-technológia Fúzió",
          "Interface Optimalizálás",
          "Protokoll Standardizálás",
          "Teljesítmény Validálás"
        ],
        metrics: {
          compatibility: "99,9%",
          integration: "Zökkenőmentes",
          performance: "Optimalizált"
        }
      }
    ],

    processSteps: [
      { title: "Tervezési Elemzés", duration: 15, status: "completed" as const },
      { title: "Komponens Előkészítés", duration: 25, status: "active" as const },
      { title: "Precíziós Összeszerelés", duration: 40, status: "pending" as const },
      { title: "Minőségi Ellenőrzés", duration: 15, status: "pending" as const },
      { title: "Végső Tesztelés", duration: 5, status: "pending" as const }
    ]
  }
};
