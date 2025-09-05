// Main component
export { default } from './index';
export { default as AssemblyCapabilities } from './index';

// Sub-components (for individual usage if needed)
export {
  HeaderSection,
  TabNavigation,
  TabContent,
  ProcessMonitor,
  CallToAction,
  BackgroundElements,
  InteractiveTabsSection
} from './components';

// Types
export type {
  Tab,
  ProcessStep,
  ContentData,
  AnimationVariants,
  AssemblyCapabilitiesProps
} from './types';

// Data and utilities (for advanced usage)
export { capabilitiesContent } from './data/content';
export { 
  containerVariants, 
  itemVariants, 
  tabVariants, 
  fadeInUpVariants 
} from './constants/animations';
export { useScrollEffects } from './hooks/useScrollEffects';
