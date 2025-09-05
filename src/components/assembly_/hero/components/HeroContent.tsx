import React from 'react';
import { HeroContent as HeroContentType } from '../types';
import HeroBadge from './HeroBadge';
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import FeaturePills from './FeaturePills';
import CTAButtons from './CTAButtons';
import HeroStats from './HeroStats';

interface HeroContentProps {
  content: HeroContentType;
}

const HeroContent: React.FC<HeroContentProps> = ({ content }) => {
  return (
    <div className="space-y-8">
      <HeroBadge text={content.badge} />
      <HeroTitle titleWords={content.title} subtitle={content.subtitle} />
      <HeroDescription text={content.description} />
      <FeaturePills features={content.features} />
      <CTAButtons primaryText={content.primaryCTA} secondaryText={content.secondaryCTA} />
      <HeroStats stats={content.stats} />
    </div>
  );
};

export default HeroContent;
