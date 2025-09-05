# AssemblyImpact Component

A sophisticated, interactive React component that showcases measurable business and environmental impact through data visualization, case studies, and live metrics. This component has been refactored into smaller, focused sub-components for improved maintainability and reusability.

## 🏗️ Architecture

The AssemblyImpact component follows a modular architecture with clear separation of concerns:

```
impact/
├── index.tsx                    # Main orchestrating component
├── components/                  # Sub-components
│   ├── Header.tsx              # Impact badge, title, and description
│   ├── MetricSelector.tsx      # Interactive metric category selector
│   ├── MetricDashboard.tsx     # Dynamic metric display with stats
│   ├── CaseStudies.tsx         # Success story cards
│   ├── SustainabilityGoals.tsx # Progress tracking for sustainability
│   ├── LiveImpactCounter.tsx   # Real-time animated counters
│   ├── BackgroundEffects.tsx   # Particle system and visual effects
│   ├── CTA.tsx                 # Call-to-action section
│   └── index.ts                # Component exports
├── hooks/                      # Custom hooks
│   ├── useImpactAnimations.ts  # Scroll-based animations
│   ├── useCountingNumbers.ts   # Animated number counters
│   └── useMouseTracking.ts     # Mouse parallax effects
├── data/
│   └── content.ts              # Bilingual content data
├── constants/
│   └── animations.ts           # Animation variants and configs
└── types.ts                    # TypeScript type definitions
```

## 📊 Features

### Interactive Elements
- **Metric Categories**: 4 main impact categories (Business, Environmental, Innovation, Social)
- **Dynamic Dashboard**: Real-time switching between metric categories
- **Animated Counters**: Smooth number animation on scroll into view
- **Mouse Parallax**: Subtle background effects that follow mouse movement

### Content Sections
1. **Header**: Impact overview with animated badge
2. **Metric Selector**: Interactive category buttons
3. **Metric Dashboard**: Detailed stats with trends and icons
4. **Case Studies**: Client success stories with quantified results
5. **Sustainability Goals**: Progress tracking with circular indicators
6. **Live Impact Counter**: Real-time environmental metrics
7. **Call to Action**: Download and engagement buttons

### Animations
- Scroll-triggered animations using Framer Motion
- Staggered element animations for smooth reveals
- Particle system background effects
- Floating geometric shapes
- Smooth transitions between states

## 🎯 Sub-Components

### Header
- Displays main title, subtitle, and description
- Animated badge with pulse effect
- Gradient text effects
- Responsive typography

### MetricSelector
- Grid of interactive metric category cards
- Active state highlighting with layout animations
- Icon and gradient color coding
- Hover effects and smooth transitions

### MetricDashboard
- Dynamic content switching with AnimatePresence
- Stat cards with trend indicators
- Progress bars and visual feedback
- Responsive grid layout

### CaseStudies
- Client testimonial cards
- Quantified results display
- Industry and timeline information
- Hover animations and 3D effects

### SustainabilityGoals
- Circular progress indicators
- Initiative tags and status badges
- Deadline tracking
- Color-coded status indicators

### LiveImpactCounter
- Animated number counting effects
- Real-time metric updates
- Icon-based categorization
- Trend indicators

### BackgroundEffects
- Animated particle system
- Floating geometric shapes
- Gradient overlays
- Scroll-based parallax effects

## 🔧 Hooks

### useImpactAnimations
- Manages scroll-based animation triggers
- Provides animation state management
- Optimized for performance

### useCountingNumbers
- Handles animated number counting
- Triggered by intersection observer
- Smooth interpolation between values

### useMouseTracking
- Mouse position tracking
- Parallax effect calculations
- Smooth motion value updates

## 📱 Responsive Design

- Mobile-first approach
- Responsive grid systems
- Adaptive typography
- Touch-friendly interactions
- Optimized animations for mobile

## 🌐 Internationalization

Full bilingual support (English/Hungarian):
- Content translation
- RTL layout considerations
- Locale-specific formatting
- Cultural adaptations

## 🎨 Styling

- Tailwind CSS utility classes
- Gradient backgrounds and effects
- Glass morphism design elements
- Dark theme optimization
- Consistent spacing and typography

## 📈 Performance

- Lazy loading of components
- Optimized animations
- Intersection Observer for triggers
- Efficient re-renders
- Memory leak prevention

## 🔄 State Management

- React hooks for local state
- Context integration for language
- Derived state for calculations
- Minimal re-renders

## 🧪 Usage Example

```tsx
import AssemblyImpact from '@/components/assembly_/impact';

function HomePage() {
  return (
    <div>
      <AssemblyImpact />
    </div>
  );
}
```

## 🛠️ Customization

The component is highly customizable through:
- Content configuration in `data/content.ts`
- Animation settings in `constants/animations.ts`
- Theme variables in Tailwind config
- Component props and interfaces

## 🔧 Development

To modify or extend the component:

1. **Add new metrics**: Update `data/content.ts`
2. **Modify animations**: Edit `constants/animations.ts`
3. **Create new sections**: Add components in `components/`
4. **Update types**: Modify `types.ts`
5. **Add hooks**: Create in `hooks/` directory

## 📋 Dependencies

- React 18+
- Framer Motion
- Lucide React (icons)
- Tailwind CSS
- TypeScript

## 🎯 Benefits of Refactoring

1. **Maintainability**: Smaller, focused components
2. **Reusability**: Components can be used independently
3. **Testing**: Easier to unit test individual components
4. **Performance**: Better code splitting and lazy loading
5. **Readability**: Clear component hierarchy
6. **Type Safety**: Comprehensive TypeScript coverage
7. **Scalability**: Easy to add new features and sections
