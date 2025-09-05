
import { Variants as FramerVariants } from 'framer-motion';

// Re-export Framer Motion Variants type
export type Variants = FramerVariants;

// Language type that matches the solutions content
export type SolutionsLanguage = 'en' | 'hu';

// Common animation variants
export interface AnimationVariants {
  initial: any;
  animate: any;
  exit?: any;
  transition?: any;
}

// Container ref type for background animations
export interface ContainerRef {
  current: HTMLDivElement | null;
}
