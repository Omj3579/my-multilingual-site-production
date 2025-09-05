# AssemblyShowcase Component

A comprehensive React component showcasing assembly manufacturing services with interactive displays, live monitoring, and detailed service information. Built with a modular architecture for maintainability and reusability.

## Features

- **Interactive Service Gallery**: Swipeable/navigable showcase of different assembly services
- **Live Assembly Monitor**: Real-time visualization of assembly processes and metrics
- **Service Details**: Comprehensive information including features, specifications, and certifications
- **Capabilities Grid**: Overview of core assembly capabilities with animated progress indicators
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Bilingual Support**: Full English and Hungarian content support
- **Smooth Animations**: Framer Motion powered animations and transitions

## Architecture

The component follows a modular architecture with clear separation of concerns:

```
src/components/assembly_/showcase/
├── index.tsx                    # Main component (orchestrator)
├── types.ts                     # TypeScript interfaces
├── module.ts                    # Module exports
├── README.md                    # Documentation
├── components/
│   ├── index.ts                 # Component exports
│   ├── Header.tsx               # Header section with title and description
│   ├── BackgroundEffects.tsx    # Animated background elements
│   ├── ServiceNavigation.tsx    # Service navigation controls
│   ├── ServiceDetails.tsx       # Service information display
│   ├── LiveMonitor.tsx          # Real-time monitoring visualization
│   ├── ServiceShowcase.tsx      # Main interactive service display
│   ├── CapabilitiesGrid.tsx     # Capabilities overview grid
│   └── CTA.tsx                  # Call-to-action button
├── hooks/
│   ├── index.ts                 # Hook exports
│   └── useShowcaseAnimations.ts # Scroll and animation logic
├── data/
│   └── content.ts               # Bilingual content data
└── constants/
    └── animations.ts            # Animation variants
```

## Components

### Main Component
- **AssemblyShowcase**: The main orchestrator component that manages state and renders all sub-components

### Sub-Components
- **Header**: Displays the main title, subtitle, and description
- **BackgroundEffects**: Renders animated background visual effects
- **ServiceNavigation**: Navigation controls for switching between services
- **ServiceDetails**: Displays detailed information about each service
- **LiveMonitor**: Shows real-time assembly process visualization
- **ServiceShowcase**: Combines navigation, details, and monitor into interactive showcase
- **CapabilitiesGrid**: Grid display of core assembly capabilities
- **CTA**: Call-to-action button for requesting quotes

## Hooks

### useShowcaseAnimations
Manages scroll-based animations and transforms:
- `containerRef`: Reference for scroll tracking
- `backgroundY`: Parallax effect for background elements
- `imageY`: Parallax effect for images

## Data Structure

### Services
Each service includes:
- Basic information (title, subtitle, description)
- Features list
- Technical specifications
- Supported industries
- Certifications
- Visual assets

### Capabilities
Each capability includes:
- Icon component
- Title and description
- Performance metric
- Animated progress indication

## Usage

```tsx
import React from 'react';
import AssemblyShowcase from './components/assembly_/showcase';

const App = () => {
  return (
    <div>
      <AssemblyShowcase />
    </div>
  );
};
```

### With Language Context
```tsx
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import AssemblyShowcase from './components/assembly_/showcase';

const App = () => {
  return (
    <LanguageProvider>
      <AssemblyShowcase />
    </LanguageProvider>
  );
};
```

## Customization

### Content
Modify `data/content.ts` to update:
- Service information
- Capabilities data
- Bilingual translations

### Styling
The component uses Tailwind CSS classes. Customize appearance by:
- Updating class names in components
- Modifying animation variants in `constants/animations.ts`
- Adjusting responsive breakpoints

### Animations
Customize animations in `constants/animations.ts`:
- Container animations
- Item entrance effects
- Hover transitions
- Progress animations

## Props

### Language Support
The component automatically detects language from `LanguageContext` and displays appropriate content.

### State Management
- `activeShowcase`: Currently selected service index
- `hoveredCard`: Currently hovered capability card
- Internal animation and scroll states

## Performance Considerations

- **Lazy Loading**: Components render efficiently with proper React patterns
- **Animation Optimization**: Framer Motion handles animation performance
- **Image Assets**: Optimize service images for web delivery
- **Bundle Size**: Modular structure allows for tree-shaking

## Browser Support

- Modern browsers with ES2017+ support
- CSS Grid and Flexbox support required
- Framer Motion compatibility requirements

## Dependencies

- React 18+
- Framer Motion 10+
- Lucide React (icons)
- Tailwind CSS 3+
- TypeScript 4.9+

## Testing

The component can be tested with:
- Unit tests for individual sub-components
- Integration tests for state management
- Visual regression tests for animations
- Accessibility testing for navigation

## Accessibility

- **Keyboard Navigation**: Full keyboard support for service navigation
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **Motion Preferences**: Respects user motion preferences

## Future Enhancements

- Add more interactive visualization options
- Implement service filtering and search
- Add export functionality for service data
- Enhance mobile touch gestures
- Add video support for service demonstrations
