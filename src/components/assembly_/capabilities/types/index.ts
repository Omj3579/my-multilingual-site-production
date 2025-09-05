import { Variants } from 'framer-motion';

export interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size: number }>;
  title: string;
  description: string;
  features: string[];
  metrics: Record<string, string>;
}

export interface ProcessStep {
  title: string;
  duration: number;
  status: 'completed' | 'active' | 'pending';
}

export interface ContentData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tabs: Tab[];
  processSteps: ProcessStep[];
}

export interface AnimationVariants {
  container: Variants;
  item: Variants;
  tab: Variants;
  fadeInUp: Variants;
}

export interface AssemblyCapabilitiesProps {
  className?: string;
  onTabChange?: (tabIndex: number) => void;
}
