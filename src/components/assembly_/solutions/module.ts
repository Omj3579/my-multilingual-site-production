/**
 * AssemblySolutions Module
 * 
 * A comprehensive assembly solutions showcase component with interactive features,
 * scroll animations, and detailed solution presentations.
 * 
 * @module AssemblySolutions
 */

// Main component export
export { default } from './index';

// Sub-component exports
export * from './components';

// Hook exports
export * from './hooks';

// Type exports
export type {
  Solution,
  SolutionsContent,
  SolutionsData,
  Advantage,
  CaseStudy,
  Language,
  SolutionGridProps,
  SolutionCardProps,
  HeaderProps,
  BackgroundEffectsProps,
  MousePosition
} from './types';

// Data exports
export { solutionsContent } from './data/content';

// Animation constants
export { containerVariants, itemVariants } from './constants/animations';
