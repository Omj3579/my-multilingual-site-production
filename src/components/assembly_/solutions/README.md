# AssemblySolutions Component

## Overview

The AssemblySolutions component is a comprehensive React component that showcases various assembly solutions across different industries. It has been refactored into smaller, manageable sub-components for better maintainability, reusability, and testing.

## Architecture

### Main Component
- **AssemblySolutions** (`index.tsx`): Main orchestrator component that brings together all sub-components

### Sub-Components

#### Core Components
- **Header**: Displays the main title, badge, and description
- **BackgroundEffects**: Handles dynamic background effects and floating shapes
- **SolutionGrid**: Displays a grid of solution cards for selection
- **SolutionDetailView**: Shows detailed information about the selected solution

#### Solution Detail Components
- **SolutionDetails**: Shows solution information, applications, technologies, and certifications
- **PerformanceMetrics**: Displays performance metrics and live status
- **CaseStudyHighlight**: Shows success stories and case studies
- **ActionButtons**: Contains CTA buttons for quotes and downloads

#### Additional Components
- **SolutionCard**: Individual solution card in the grid
- **AdvantagesGrid**: Displays competitive advantages
- **CTA**: Final call-to-action section

### Supporting Files

#### Data & Content
- **data/content.ts**: Centralized content data for both English and Hungarian
- **types.ts**: TypeScript interfaces and type definitions

#### Animations & Hooks
- **hooks/useSolutionsAnimations.ts**: Custom hook for scroll and mouse animations
- **constants/animations.ts**: Centralized animation variants

#### Styling
- **styles.css**: Component-specific CSS styles

## Features

### Interactive Elements
- **Solution Selection**: Click on solution cards to view detailed information
- **Mouse Tracking**: Background effects follow mouse movement
- **Scroll Animations**: Elements animate based on scroll position
- **Responsive Design**: Optimized for all screen sizes

### Content Management
- **Bilingual Support**: English and Hungarian content
- **Type Safety**: Full TypeScript support with comprehensive interfaces
- **Modular Content**: Easy to add new solutions and advantages

### Animation System
- **Scroll-based Animations**: Using Framer Motion's scroll triggers
- **Mouse Interactions**: Dynamic background and hover effects
- **Staggered Animations**: Sequential animation of elements
- **Performance Optimized**: Efficient animation handling

## Industry Solutions Covered

1. **Automotive Assembly**: Electric vehicles, autonomous systems, traditional automotive
2. **Electronics Assembly**: Consumer devices, industrial equipment, precision electronics
3. **Aerospace Assembly**: Commercial aircraft, defense systems, space exploration
4. **Medical Device Assembly**: Surgical instruments, diagnostic equipment, implantable devices
5. **Industrial Assembly**: Heavy machinery, automation systems, process equipment
6. **Defense & Security**: Communication systems, surveillance equipment, mission-critical systems

## Component Props

### AssemblySolutions
No props required - uses context for language selection

### Individual Components
Each sub-component has its own props interface defined in `types.ts`

## Usage

```tsx
import AssemblySolutions from '@/components/assembly_/solutions';

function App() {
  return (
    <div>
      <AssemblySolutions />
    </div>
  );
}
```

## Development

### Adding New Solutions
1. Add solution data to `data/content.ts`
2. Ensure all required fields are included
3. Add translations for both languages

### Customizing Animations
1. Modify animation variants in `constants/animations.ts`
2. Adjust timing and easing in the custom hook
3. Update component animation props as needed

### Styling
1. Component uses Tailwind CSS classes
2. Custom styles are in `styles.css`
3. Animation styles are handled by Framer Motion

## Performance Considerations

- **Lazy Loading**: Content is loaded progressively
- **Optimized Animations**: Efficient scroll and mouse tracking
- **Memoization**: Components are optimized to prevent unnecessary re-renders
- **Image Optimization**: Uses optimized image formats where applicable

## Accessibility

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Readers**: Proper semantic HTML and ARIA labels
- **Motion Preferences**: Respects user's motion preferences
- **Color Contrast**: Meets WCAG guidelines

## Testing

Components are designed for easy testing with:
- **Unit Tests**: Individual component testing
- **Integration Tests**: Full component interaction testing
- **Accessibility Tests**: A11y compliance verification

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Performance**: Optimized for both desktop and mobile devices
