import { LucideIcon } from 'lucide-react';

// Hero content interfaces
export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroFeature {
  icon: LucideIcon;
  text: string;
}

export interface HeroContent {
  badge: string;
  title: string[];
  subtitle: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  stats: HeroStat[];
  features: HeroFeature[];
}

export interface HeroContentData {
  en: HeroContent;
  hu: HeroContent;
}

export const heroContentData: HeroContentData = {
  en: {
    badge: "Consumer Product Assembly",
    title: ["Reliable", "Assembly", "Solutions"],
    subtitle: "Bringing Your Products to Life",
    description: "Comprehensive assembly services for household products, personal care items, toys, and consumer goods. We specialize in efficient, cost-effective solutions that meet the demands of everyday consumer products.",
    primaryCTA: "Explore Capabilities",
    secondaryCTA: "Watch Process",
    stats: [
      { value: "99.5%", label: "Quality Standard" },
      { value: "50M+", label: "Products Assembled" },
      { value: "19", label: "Industries Served" }
    ],
    features: [
      { icon: () => null, text: "Efficient Production" },
      { icon: () => null, text: "Consumer Safety" },
      { icon: () => null, text: "Trusted Partner" }
    ]
  },
  hu: {
    badge: "Fogyasztói Termék Összeszerelés",
    title: ["Megbízható", "Összeszerelési", "Megoldások"],
    subtitle: "Termékeinek Életre Keltése",
    description: "Átfogó összeszerelési szolgáltatások háztartási termékekhez, személyes ápolási cikkekhez, játékokhoz és fogyasztói javakhoz. A mindennapi fogyasztói termékek igényeinek megfelelő hatékony, költséghatékony megoldásokra specializálódunk.",
    primaryCTA: "Képességek Felfedezése",
    secondaryCTA: "Folyamat Megtekintése",
    stats: [
      { value: "99,5%", label: "Minőségi Szabvány" },
      { value: "50M+", label: "Összeszerelt Termék" },
      { value: "19", label: "Kiszolgált Iparág" }
    ],
    features: [
      { icon: () => null, text: "Hatékony Termelés" },
      { icon: () => null, text: "Fogyasztói Biztonság" },
      { icon: () => null, text: "Megbízható Partner" }
    ]
  }
};
