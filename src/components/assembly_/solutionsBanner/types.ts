import { LucideIcon } from 'lucide-react';
import { MotionValue, Variants } from 'framer-motion';

export type Language = 'en' | 'hu' | 'de';

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
}

export interface UniversalBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
  improvement: string;
}

export interface SuccessStory {
  client: string;
  challenge: string;
  solution: string;
  result: string;
  industry: string;
}

export interface Solution {
  id: string;
  industry: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  image: string;
  features: string[];
  applications: string[];
  benefits: Benefit[];
  certifications: string[];
  clientSuccess: string;
  industries_served: string[];
}

export interface SolutionsBannerContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  solutions: Solution[];
  universalBenefits: UniversalBenefit[];
  successStories: SuccessStory[];
}

export interface SolutionsBannerData {
  en: SolutionsBannerContent;
  hu: SolutionsBannerContent;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface SolutionSelectorProps {
  solutions: Solution[];
  activeSolution: number;
  setActiveSolution: (index: number) => void;
}

export interface SolutionDisplayProps {
  solution: Solution;
  activeSolution: number;
  language: Language;
}

export interface UniversalBenefitsProps {
  benefits: UniversalBenefit[];
  language: Language;
  hoveredBenefit: number | null;
  setHoveredBenefit: (index: number | null) => void;
  itemVariants: Variants;
}

export interface SuccessStoriesProps {
  stories: SuccessStory[];
  language: Language;
  itemVariants: Variants;
}

export interface HeaderProps {
  content: SolutionsBannerContent;
  itemVariants: Variants;
}

export interface BackgroundEffectsProps {
  scrollYProgress: MotionValue<number>;
  backgroundY: MotionValue<string>;
}

export interface CTAProps {
  language: Language;
  itemVariants: Variants;
}
