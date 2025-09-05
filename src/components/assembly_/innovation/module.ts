// Main component export
export { default } from './index';

// Sub-component exports
export { 
  Header,
  BackgroundEffects,
  Timeline,
  TimelineItemDisplay,
  TimelineProgress,
  InnovationPillars,
  RDFocus,
  CTA 
} from './components';

// Hook exports
export { 
  useTimelineProgress,
  useAutoAdvanceTimeline,
  useScrollBasedProgress 
} from './hooks';

// Type exports
export type {
  Language,
  TimelineItem,
  InnovationPillar,
  RDFocus as RDFocusType,
  InnovationContent,
  InnovationContentMap,
  TimelineProps,
  TimelineItemDisplayProps,
  InnovationPillarsProps,
  RDFocusProps,
  HeaderProps,
  BackgroundEffectsProps,
  CTAProps,
  TimelineProgressProps
} from './types';

// Content and constants exports
export { innovationContent } from './data/content';
export { 
  containerVariants,
  itemVariants,
  timelineVariants 
} from './constants/animations';
