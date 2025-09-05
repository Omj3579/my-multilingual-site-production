# AssemblyOverview Component

A comprehensive React component showcasing assembly manufacturing overview, including challenges, solutions, and global impact. Built with a modular architecture for maintainability and reusability.

## Features

- **Industry Overview**: Clear presentation of manufacturing challenges and solutions
- **Animated Comparisons**: Side-by-side challenges vs solutions visualization
- **Global Impact Stats**: Animated statistics with progress indicators
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Multilingual Support**: Full English and Hungarian translations
- **Smooth Animations**: Scroll-based and interaction-based animations
- **Accessibility**: ARIA-compliant with proper semantic structure

## Architecture

### Main Component
- `index.tsx` - Main orchestrating component that combines all sub-components

### Sub-Components
- `Header.tsx` - Hero section with badge, title, and description
- `BackgroundEffects.tsx` - Animated background elements and gradients
- `Challenges.tsx` - Manufacturing challenges showcase
- `Solutions.tsx` - Company solutions and approaches
- `GlobalImpact.tsx` - Statistics and global impact metrics
- `CTA.tsx` - Call-to-action button

### Supporting Files
- `types.ts` - TypeScript interfaces and type definitions
- `constants/animations.ts` - Framer Motion animation variants
- `data/content.ts` - Content data in multiple languages
- `hooks/` - Custom React hooks for component logic

### Custom Hooks
- `useOverviewAnimations` - Manages scroll-based animations and transforms

## Usage

```tsx
import AssemblyOverview from './components/assembly_/overview';

function App() {
  return (
    <div>
      <AssemblyOverview />
    </div>
  );
}
```

## Props

The main component doesn't accept props and relies on the LanguageContext for internationalization.

## Data Structure

### Challenge Items
```typescript
interface ChallengeItem {
  icon: LucideIcon;
  title: string;
  description: string;
}
```

### Solution Items
```typescript
interface SolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
}
```

### Impact Statistics
```typescript
interface ImpactStat {
  value: string;
  label: string;
  icon: LucideIcon;
}
```

## Customization

### Adding New Challenge/Solution Items

Update the `overviewContent` in `data/content.ts`:

```typescript
challenges: {
  items: [
    {
      icon: YourIcon,
      title: "New Challenge",
      description: "Challenge description"
    }
  ]
}
```

### Modifying Animations

Update animation variants in `constants/animations.ts`:

```typescript
export const newVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};
```

### Adding New Languages

1. Extend the `Language` type in `types.ts`
2. Add new language content in `data/content.ts`
3. Update the `OverviewContentMap` interface

## Component Features

### Challenges Section
- **Visual Design**: Red-themed cards with hover effects
- **Icons**: Lucide React icons for visual representation
- **Animation**: Staggered card animations on scroll

### Solutions Section
- **Visual Design**: Green-themed cards with metrics
- **Metrics Display**: Performance indicators (accuracy, speed, etc.)
- **Interactive Hover**: Scale and elevation effects

### Global Impact Section
- **Animated Statistics**: Spring-animated counters
- **Progress Bars**: Animated progress indicators
- **Icon Integration**: Branded icons for each statistic
- **Responsive Grid**: Adaptive layout for different screen sizes

## Performance Considerations

- Components use React.memo where appropriate
- Animations are optimized for performance
- Content is externalized to prevent re-creation
- Efficient scroll-based animations with transforms

## Accessibility

- Semantic HTML structure with proper headings
- ARIA labels where needed
- Keyboard navigation support
- High contrast color schemes
- Screen reader compatible animations

## Animation Timeline

1. **Initial Load**: Staggered component appearance
2. **Scroll Trigger**: Cards animate in as they enter viewport
3. **Statistics**: Counters animate with spring physics
4. **Progress Bars**: Smooth width transitions
5. **Hover Effects**: Interactive feedback on cards

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Dependencies

- React 18+
- Framer Motion
- Lucide React (icons)
- Language Context (for internationalization)

## Testing

The component is designed with testability in mind:
- Pure data transformation functions
- Isolated animation logic
- Modular component structure
- Predictable state management

## Contributing

When contributing to this component:

1. Maintain the modular structure
2. Add proper TypeScript types for new features
3. Include both language translations
4. Test responsive design across devices
5. Ensure accessibility compliance
6. Follow the existing animation patterns
