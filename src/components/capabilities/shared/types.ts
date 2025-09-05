// Shared types for capabilities components

export interface ComponentProps {
  className?: string;
  moveUp?: number;
  moveDown?: number;
  moveLeft?: number;
  moveRight?: number;
  topSpacing?: number;
  bottomSpacing?: number;
  dividerSpacing?: number;
  sectionHeight?: string;
  zIndex?: string | number;
  contentPushDown?: number;
  textOffsetY?: number;
  textOffsetX?: number;
  bulletOffsetY?: number;
  bulletOffsetX?: number;
  firstDividerOffsetY?: number;
  firstDividerOffsetX?: number;
  paragraphOffset2Y?: number;
  paragraphOffset2X?: number;
  secondDividerOffsetY?: number;
  secondDividerOffsetX?: number;
}

export interface BilingualContent {
  en: string;
  hu: string;
  de?: string;
}

export interface FeatureCard {
  title: string;
  icon: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  label: string;
  icon: string;
}

export interface FloatingElement {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: string;
  delay: number;
}

export const defaultComponentProps: Partial<ComponentProps> = {
  moveUp: 100,
  moveDown: 0,
  moveLeft: 0,
  moveRight: 0,
  topSpacing: 60,
  bottomSpacing: 120,
  dividerSpacing: 40,
  sectionHeight: 'auto',
  zIndex: 'auto',
  contentPushDown: 120,
  textOffsetY: 0,
  textOffsetX: 0,
  bulletOffsetY: 0,
  bulletOffsetX: 0,
  firstDividerOffsetY: 0,
  firstDividerOffsetX: 0,
  paragraphOffset2Y: 0,
  paragraphOffset2X: 0,
  secondDividerOffsetY: 0,
  secondDividerOffsetX: 0,
};
