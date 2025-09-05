/**
 * AssemblyImpact Module
 * 
 * A comprehensive impact showcase component demonstrating business,
 * environmental, innovation, and social impact metrics through
 * interactive visualizations and data-driven storytelling.
 * 
 * Features:
 * - Interactive metric categories
 * - Animated counters and progress indicators
 * - Case studies with quantified results
 * - Sustainability goal tracking
 * - Real-time impact metrics
 * - Bilingual content support
 * - Advanced animations and effects
 * 
 * @example
 * ```tsx
 * import { AssemblyImpact } from '@/components/assembly_/impact/module';
 * 
 * function HomePage() {
 *   return <AssemblyImpact />;
 * }
 * ```
 */

// Main component
export { default as AssemblyImpact } from './index';

// Sub-components for granular usage
export {
  Header as ImpactHeader,
  MetricSelector as ImpactMetricSelector,
  MetricDashboard as ImpactMetricDashboard,
  CaseStudies as ImpactCaseStudies,
  SustainabilityGoals as ImpactSustainabilityGoals,
  LiveImpactCounter as ImpactLiveCounter,
  BackgroundEffects as ImpactBackgroundEffects,
  CTA as ImpactCTA
} from './components';

// Hooks for external usage
export {
  useImpactAnimations,
  useCountingNumbers,
  useMouseTracking
} from './hooks/index';

// Data and configurations
export { impactContent } from './data/content';
export * from './constants/animations';

// Types for external usage
export type {
  ImpactContent,
  KeyMetric,
  CaseStudy,
  SustainabilityGoals,
  CountingNumbers,
  Language
} from './types';

// Default export
export { default } from './index';
