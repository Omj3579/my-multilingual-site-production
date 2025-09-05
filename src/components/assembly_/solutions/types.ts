import { LucideIcon } from 'lucide-react';
import { MotionValue, Variants } from 'framer-motion';

export type Language = 'en' | 'hu' | 'de';

export interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  industry: string;
  complexity: string;
  volume: string;
  applications: string[];
  technologies: string[];
  certifications: string[];
  metrics: Record<string, string>;
  caseStudies: CaseStudy[];
}

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
}

export interface SolutionsContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  solutions: Solution[];
  advantages: Advantage[];
}

export interface SolutionsData {
  en: SolutionsContent;
  hu: SolutionsContent;
}

export interface SolutionGridProps {
  solutions: Solution[];
  activeSolution: number;
  setActiveSolution: (index: number) => void;
}

export interface SolutionCardProps {
  solution: Solution;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export interface HeaderProps {
  content: SolutionsContent;
  itemVariants: Variants;
}

export interface BackgroundEffectsProps {
  mousePosition: MousePosition;
  y1: MotionValue<number>;
  y2: MotionValue<number>;
  rotate: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

// Component Props Interfaces
export interface HeaderProps {
  content: SolutionsContent;
}

export interface BackgroundEffectsProps {
  mousePosition: MousePosition;
  y1: MotionValue<number>;
  y2: MotionValue<number>;
  rotate: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

export interface SolutionGridProps {
  solutions: Solution[];
  activeSolution: number;
  setActiveSolution: (index: number) => void;
}

export interface SolutionDetailsProps {
  solution: Solution;
  language: Language;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export interface SolutionCardProps {
  solution: Solution;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export interface PerformanceMetricsProps {
  metrics: Record<string, string>;
  language: Language;
}

export interface CaseStudyHighlightProps {
  caseStudy: CaseStudy;
  language: Language;
}

export interface AdvantagesGridProps {
  advantages: Advantage[];
  language: Language;
  inView: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export interface CTAProps {
  language: Language;
}
