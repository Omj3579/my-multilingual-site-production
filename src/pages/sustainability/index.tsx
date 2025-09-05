
import PageLayout from '@/components/layouts/PageLayout';
import HeroSection from '@/components/green-strategy/HeroSection';
import SustainableSection from '@/components/green-strategy/SustainableSection';
import FullWidthImageDivider1 from '@/components/green-strategy/FullWidthImageDivider1';
import SustainabilityPathwaySection from '@/components/green-strategy/SustainabilityPathwaySection';
import SustainableCycleSection from '@/components/green-strategy/SustainableCycleSection';
import FullWidthImageDivider2 from '@/components/green-strategy/FullWidthImageDivider2';

const Sustainability = () => {
  return (
    <PageLayout className="p-0">
      <HeroSection />
      <SustainableSection />
      <FullWidthImageDivider1 />
      <SustainabilityPathwaySection />
      <SustainableCycleSection />
      <FullWidthImageDivider2 />
    </PageLayout>
  );
};

export default Sustainability;
