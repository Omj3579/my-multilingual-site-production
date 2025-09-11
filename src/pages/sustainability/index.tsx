
import PageLayout from '@/components/layouts/PageLayout';
import HeroSection from '@/components/green-strategy/HeroSection';
import SustainableSection from '@/components/green-strategy/SustainableSection';
import SustainabilityPathwaySection from '@/components/green-strategy/SustainabilityPathwaySection';
import SustainableCycleSection from '@/components/green-strategy/SustainableCycleSection';

const Sustainability = () => {
  return (
    <PageLayout className="p-0">
      <HeroSection />
      <SustainableSection />      
      <SustainabilityPathwaySection />
      <SustainableCycleSection />      
    </PageLayout>
  );
};

export default Sustainability;
