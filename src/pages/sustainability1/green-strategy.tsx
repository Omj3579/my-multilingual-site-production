
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import HeroSection from '@/components/green-strategy/HeroSection';
import SustainableSection from '@/components/green-strategy/SustainableSection';
import SustainabilityPathwaySection from '@/components/green-strategy/SustainabilityPathwaySection';
import SustainableCycleSection from '@/components/green-strategy/SustainableCycleSection';

const GreenStrategy = () => {
  return (
    <PageLayout>
      <HeroSection />
      <SustainableSection />
      <SustainabilityPathwaySection />
      <SustainableCycleSection />
    </PageLayout>
  );
};

export default GreenStrategy;
