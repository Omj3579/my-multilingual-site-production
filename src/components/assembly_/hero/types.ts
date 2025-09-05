import { LucideIcon } from 'lucide-react';

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

export interface HeroContentMap {
  en: HeroContent;
  hu: HeroContent;
}
