// Main AssemblyHero component
export { default } from './index';

// Sub-components for external use
export * from './components';

// Types for external use (explicitly named to avoid conflicts)
export type { 
  HeroStat, 
  HeroFeature, 
  HeroContent as HeroContentType, 
  HeroContentMap 
} from './types';

// Content for external customization
export { heroContent } from './content';

// Animations for external customization
export * from './animations';
