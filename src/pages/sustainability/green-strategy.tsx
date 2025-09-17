
import React from 'react';
import HeroSection from '@/components/green-strategy/HeroSection';
import SustainableSection from '@/components/green-strategy/SustainableSection';
import SustainabilityPathwaySection from '@/components/green-strategy/SustainabilityPathwaySection';
import SustainableCycleSection from '@/components/green-strategy/SustainableCycleSection';

const GreenStrategy = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SustainableSection />
      <SustainabilityPathwaySection />
      <SustainableCycleSection />
    </div>
  );
};

export default GreenStrategy;
