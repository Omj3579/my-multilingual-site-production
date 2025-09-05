import { LucideIcon } from 'lucide-react';
import { MotionValue, Variants } from 'framer-motion';

export type Language = 'en' | 'hu';

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

export interface OverviewChallenges {
  title: string;
  subtitle: string;
  items: ChallengeItem[];
}

export interface OverviewSolutions {
  title: string;
  subtitle: string;
  items: SolutionItem[];
}

export interface OverviewImpact {
  title: string;
  stats: ImpactStat[];
}

export interface OverviewContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: OverviewChallenges;
  solutions: OverviewSolutions;
  impact: OverviewImpact;
}

export interface OverviewContentMap {
  en: OverviewContent;
  hu: OverviewContent;
}

// Component Props
export interface HeaderProps {
  content: OverviewContent;
}

export interface BackgroundEffectsProps {
  backgroundY: MotionValue<string>;
}

export interface ChallengesProps {
  challenges: OverviewChallenges;
  cardVariants: Variants;
}

export interface SolutionsProps {
  solutions: OverviewSolutions;
  cardVariants: Variants;
}

export interface GlobalImpactProps {
  impact: OverviewImpact;
  imageY: MotionValue<number>;
  inView: boolean;
  cardVariants: Variants;
}

export interface CTAProps {
  language: Language;
  itemVariants: Variants;
}
