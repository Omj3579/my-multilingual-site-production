import { LucideIcon } from 'lucide-react';
import { MotionValue } from 'framer-motion';

export type Language = 'en' | 'hu';

export interface Service {
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

export interface Capability {
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
  services: Service[];
  capabilities: Capability[];
  processExcellence: ProcessExcellence;
}

export interface ShowcaseData {
  en: ShowcaseContent;
  hu: ShowcaseContent;
}

// Component Props Interfaces
export interface HeaderProps {
  content: ShowcaseContent;
}

export interface BackgroundEffectsProps {
  backgroundY: MotionValue<string>;
}

export interface ServiceShowcaseProps {
  content: ShowcaseContent;
  activeShowcase: number;
  setActiveShowcase: (index: number) => void;
  imageY: MotionValue<number>;
}

export interface ServiceNavigationProps {
  services: Service[];
  activeShowcase: number;
  setActiveShowcase: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export interface ServiceDetailsProps {
  service: Service;
  language: Language;
}

export interface LiveMonitorProps {
  language: Language;
  imageY: MotionValue<number>;
}

export interface CapabilitiesGridProps {
  capabilities: Capability[];
  language: Language;
  inView: boolean;
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
}

export interface CTAProps {
  language: Language;
}
