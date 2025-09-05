// Main component export
export { default } from './index';

// Sub-component exports
export { 
  Header,
  BackgroundEffects,
  Challenges,
  Solutions,
  GlobalImpact,
  CTA 
} from './components';

// Hook exports
export { useOverviewAnimations } from './hooks';

// Type exports
export type {
  Language,
  ChallengeItem,
  SolutionItem,
  ImpactStat,
  OverviewChallenges,
  OverviewSolutions,
  OverviewImpact,
  OverviewContent,
  OverviewContentMap,
  HeaderProps,
  BackgroundEffectsProps,
  ChallengesProps,
  SolutionsProps,
  GlobalImpactProps,
  CTAProps
} from './types';

// Content and constants exports
export { overviewContent } from './data/content';
export { 
  containerVariants,
  itemVariants,
  cardVariants,
  statCountVariants,
  progressBarVariants 
} from './constants/animations';
