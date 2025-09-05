// Content data for Assembly Overview component
import { Target, Cpu, Layers, CheckCircle, TrendingUp, Users, Globe, LucideIcon } from 'lucide-react';

export interface ChallengeItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface OverviewContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: {
    title: string;
    subtitle: string;
    items: ChallengeItem[];
  };
  solutions: {
    title: string;
    subtitle: string;
    items: SolutionItem[];
  };
  impact: {
    title: string;
    stats: ImpactStat[];
  };
}

export const overviewContent: Record<'en' | 'hu', OverviewContent> = {
  en: {
    badge: "Industry Overview",
    title: "Revolutionizing Manufacturing",
    subtitle: "Through Precision Assembly",
    description: "In today's competitive manufacturing landscape, precision assembly is the cornerstone of product excellence. Our advanced assembly solutions bridge the gap between design vision and manufacturing reality.",
    
    challenges: {
      title: "Manufacturing Challenges",
      subtitle: "Complex problems require innovative solutions",
      items: [
        {
          icon: Target,
          title: "Precision Requirements",
          description: "Modern products demand microscopic tolerances and perfect component alignment."
        },
        {
          icon: Cpu,
          title: "Technology Integration",
          description: "Seamlessly integrating diverse technologies into cohesive, functional systems."
        },
        {
          icon: Layers,
          title: "Multi-layer Complexity",
          description: "Managing intricate assemblies with hundreds of interconnected components."
        }
      ]
    },
    
    solutions: {
      title: "Our Approach",
      subtitle: "Transforming complexity into simplicity",
      items: [
        {
          icon: CheckCircle,
          title: "Automated Precision",
          description: "AI-driven assembly systems ensuring consistent quality and speed.",
          metric: "99.8% accuracy"
        },
        {
          icon: TrendingUp,
          title: "Scalable Production",
          description: "Flexible manufacturing lines adapting to volume changes instantly.",
          metric: "300% faster"
        },
        {
          icon: Users,
          title: "Expert Integration",
          description: "Skilled technicians working alongside advanced robotics.",
          metric: "24/7 operation"
        }
      ]
    },
    
    impact: {
      title: "Global Impact",
      stats: [
        { value: "2M+", label: "Units Assembled", icon: Globe },
        { value: "150+", label: "Partner Companies", icon: Users },
        { value: "50+", label: "Countries Served", icon: Target },
        { value: "99.2%", label: "Client Satisfaction", icon: TrendingUp }
      ]
    }
  },
  hu: {
    badge: "Iparági Áttekintés",
    title: "A Gyártás Forradalmasítása",
    subtitle: "Precíziós Összeszerelés Révén",
    description: "A mai versenyképes gyártási környezetben a precíziós összeszerelés a termék kiválóság sarokköve. Fejlett összeszerelési megoldásaink áthidalják a szakadékot a tervezési vízió és a gyártási valóság között.",
    
    challenges: {
      title: "Gyártási Kihívások",
      subtitle: "Az összetett problémák innovatív megoldásokat igényelnek",
      items: [
        {
          icon: Target,
          title: "Precíziós Követelmények",
          description: "A modern termékek mikroszkopikus tűréseket és tökéletes komponens-igazítást igényelnek."
        },
        {
          icon: Cpu,
          title: "Technológiai Integráció",
          description: "Különböző technológiák zökkenőmentes integrálása összefüggő, funkcionális rendszerekbe."
        },
        {
          icon: Layers,
          title: "Többrétegű Komplexitás",
          description: "Bonyolult összeszerelések kezelése több száz összekapcsolt komponenssel."
        }
      ]
    },
    
    solutions: {
      title: "Megközelítésünk",
      subtitle: "A komplexitás egyszerűséggé alakítása",
      items: [
        {
          icon: CheckCircle,
          title: "Automatizált Precizitás",
          description: "AI-vezérelt összeszerelési rendszerek következetes minőség és sebesség biztosítására.",
          metric: "99,8% pontosság"
        },
        {
          icon: TrendingUp,
          title: "Skálázható Termelés",
          description: "Rugalmas gyártósorok, amelyek azonnal alkalmazkodnak a volumen változásokhoz.",
          metric: "300%-kal gyorsabb"
        },
        {
          icon: Users,
          title: "Szakértői Integráció",
          description: "Képzett technikusok dolgoznak együtt fejlett robotikával.",
          metric: "24/7 működés"
        }
      ]
    },
    
    impact: {
      title: "Globális Hatás",
      stats: [
        { value: "2M+", label: "Összeszerelt Egység", icon: Globe },
        { value: "150+", label: "Partner Vállalat", icon: Users },
        { value: "50+", label: "Kiszolgált Ország", icon: Target },
        { value: "99,2%", label: "Ügyfél Elégedettség", icon: TrendingUp }
      ]
    }
  }
};
