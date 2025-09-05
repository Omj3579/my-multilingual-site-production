import { LucideIcon } from 'lucide-react';
import { MotionValue } from 'framer-motion';

export interface ImpactStat {
  value: string;
  label: string;
  trend: string;
  description: string;
  icon: LucideIcon;
}

export interface KeyMetric {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  stats: ImpactStat[];
}

export interface CaseStudyResults {
  roi?: string;
  productionIncrease?: string;
  qualityImprovement?: string;
  carbonReduction?: string;
  energySavings?: string;
  timeToMarket?: string;
  regulatoryCompliance?: string;
  testingEfficiency?: string;
  certificationTime?: string;
  [key: string]: string | undefined;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  timeline: string;
  investment: string;
  results: CaseStudyResults;
  impact: string;
  testimonial: string;
  clientLogo: string;
}

export interface SustainabilityGoal {
  target: string;
  progress: number;
  deadline: string;
  status: string;
  initiatives: string[];
}

export interface SustainabilityGoals {
  title: string;
  goals: SustainabilityGoal[];
}

export interface ImpactContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  keyMetrics: KeyMetric[];
  caseStudies: CaseStudy[];
  sustainabilityGoals: SustainabilityGoals;
}

export interface ImpactContentMap {
  en: ImpactContent;
  hu: ImpactContent;
}

export interface CountingNumbers {
  carbonReduction: number;
  energySaving: number;
  wasteReduction: number;
  roiIncrease: number;
  productionIncrease: number;
  qualityImprovement: number;
}

export interface CountingTargets {
  carbonReduction: number;
  energySaving: number;
  wasteReduction: number;
  roiIncrease: number;  productionIncrease: number;
  qualityImprovement: number;
}

export interface CountingTargets {
  carbonReduction: number;
  energySaving: number;
  wasteReduction: number;
  roiIncrease: number;
  productionIncrease: number;
  qualityImprovement: number;
}

export interface CountingIntervals {
  [key: string]: NodeJS.Timeout;
}

export interface MousePosition {
  x: number;
  y: number;
}

export type Language = 'en' | 'hu';

export interface AnimationProps {
  y1: MotionValue<number>;
  y2: MotionValue<number>;
  rotate: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}
