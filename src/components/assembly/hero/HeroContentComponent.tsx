import React from 'react';
import { HeroContent } from './heroContent';
import { Variants } from '../shared/types';
import HeroHeader from './HeroHeader';
import HeroFeatures from './HeroFeatures';
import HeroCTA from './HeroCTA';
import HeroStats from './HeroStats';

interface HeroContentComponentProps {
  content: HeroContent;
  variants: {
    container: Variants;
    item: Variants;
    title: Variants;
  };
}

const HeroContentComponent: React.FC<HeroContentComponentProps> = ({ content, variants }) => {
  return (
    <div className="space-y-8">
      <HeroHeader 
        content={content} 
        variants={{ item: variants.item, title: variants.title }} 
      />
      
      <HeroFeatures 
        features={content.features} 
        variants={variants.item} 
      />
      
      <HeroCTA 
        content={content} 
        variants={variants.item} 
      />
      
      <HeroStats 
        stats={content.stats} 
        variants={variants.item} 
      />
    </div>
  );
};

export default HeroContentComponent;
