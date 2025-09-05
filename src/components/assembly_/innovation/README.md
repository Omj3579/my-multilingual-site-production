# AssemblyInnovation Component

A comprehensive React component showcasing innovation excellence in assembly manufacturing technologies. The component is built with a modular architecture for maintainability and reusability.

## Features

- **Interactive Timeline**: Auto-advancing timeline with manual controls
- **Animated Visualizations**: Smooth transitions and scroll-based animations
- **Innovation Pillars**: Showcase of core technology areas
- **R&D Focus Areas**: Future research and development initiatives
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Multilingual Support**: Full English and Hungarian translations
- **Accessibility**: ARIA-compliant with keyboard navigation support

## Architecture

### Main Component
- `index.tsx` - Main orchestrating component that combines all sub-components

### Sub-Components
- `Header.tsx` - Hero section with title and description
- `BackgroundEffects.tsx` - Animated background elements
- `Timeline.tsx` - Interactive timeline navigation
- `TimelineItemDisplay.tsx` - Detailed view of timeline items
- `TimelineProgress.tsx` - Progress bar for timeline navigation
- `InnovationPillars.tsx` - Technology pillars showcase
- `RDFocus.tsx` - Research & development focus areas
- `CTA.tsx` - Call-to-action button

### Supporting Files
- `types.ts` - TypeScript interfaces and type definitions
- `constants/animations.ts` - Framer Motion animation variants
- `data/content.ts` - Content data in multiple languages
- `hooks/` - Custom React hooks for component logic

### Custom Hooks
- `useAutoAdvanceTimeline` - Manages automatic timeline progression
- `useScrollBasedProgress` - Handles scroll-based animations
- `useTimelineProgress` - Tracks timeline scroll progress

## Usage

```tsx
import AssemblyInnovation from './components/assembly_/innovation';

function App() {
  return (
    <div>
      <AssemblyInnovation />
    </div>
  );
}
```

## Props

The main component doesn't accept props and relies on the LanguageContext for internationalization.

## Dependencies

- React 18+
- Framer Motion
- Lucide React (icons)
- Language Context (for internationalization)

## Customization

### Adding New Timeline Items

1. Update the `innovationContent` in `data/content.ts`
2. Add both English and Hungarian translations
3. Include appropriate icons from Lucide React

### Modifying Animations

Update the animation variants in `constants/animations.ts`:

```typescript
export const newAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
```

### Adding New Languages

1. Extend the `Language` type in `types.ts`
2. Add new language content in `data/content.ts`
3. Update the `InnovationContentMap` interface

## Performance Considerations

- Components use `React.memo` where appropriate
- Animations are optimized with `will-change` CSS property
- Large content objects are externalized to avoid re-creation
- Custom hooks manage state efficiently

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color schemes

## Testing

The component is designed with testability in mind:
- Pure functions for data transformation
- Isolated custom hooks
- Modular component structure
- Predictable state management

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

When contributing to this component:

1. Maintain the modular structure
2. Add proper TypeScript types
3. Include both language translations
4. Test accessibility compliance
5. Ensure responsive design works across devices
