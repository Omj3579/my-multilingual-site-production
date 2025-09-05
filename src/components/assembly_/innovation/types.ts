import { LucideIcon } from 'lucide-react';
import { MotionValue, Variants } from 'framer-motion';

export type Language = 'en' | 'hu';

export interface TimelineItem {
  year: string;
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  impact: string;
  technologies: string[];
  results: string[];
  status: string;
}

export interface InnovationPillar {
  icon: LucideIcon;
  title: string;
  description: string;
  innovations: string[];
  impact: string;
}

export interface RDFocus {
  title: string;
  description: string;
  timeline: string;
  investment: string;
  team: string;
}

export interface InnovationContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: TimelineItem[];
  pillars: InnovationPillar[];
  rdFocus: RDFocus[];
}

export interface InnovationContentMap {
  en: InnovationContent;
  hu: InnovationContent;
}

export interface TimelineProps {
  timeline: TimelineItem[];
  activeInnovation: number;
  onInnovationSelect: (index: number) => void;
  language: Language;
}

export interface TimelineItemDisplayProps {
  item: TimelineItem;
  timelineY: MotionValue<string>;
  language: Language;
}

export interface InnovationPillarsProps {
  pillars: InnovationPillar[];
  language: Language;
  itemVariants: Variants;
}

export interface RDFocusProps {
  rdFocus: RDFocus[];
  language: Language;
  itemVariants: Variants;
}

export interface HeaderProps {
  content: InnovationContent;
}

export interface BackgroundEffectsProps {
  backgroundY: MotionValue<string>;
}

export interface CTAProps {
  language: Language;
  itemVariants: Variants;
}

export interface TimelineProgressProps {
  activeInnovation: number;
  totalItems: number;
}
