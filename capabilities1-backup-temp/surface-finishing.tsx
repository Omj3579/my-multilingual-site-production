
import React from 'react';
import HeroSection from '@/components/surface-finishing/HeroSection';
import SurfaceFinishing from '@/components/surface-finishing/SurfaceFinishing';
import SurfaceFinishingSection from '@/components/surface-finishing/SurfaceFinishingSection';
import SectionDivider from '@/components/capabilities/SectionDivider';
import SurfaceFinishingOptions from '@/components/surface-finishing/SurfaceFinishingOptions';
import CommitmentCallout from '@/components/surface-finishing/CommitmentCallout';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const SurfaceFinishingPage = () => {
  return (
    <CapabilitiesLayout>
      <HeroSection />
      <SurfaceFinishing />
      <SurfaceFinishingSection />
      <SectionDivider />
      <SurfaceFinishingOptions />
      <CommitmentCallout />
    </CapabilitiesLayout>
  );
};

export default SurfaceFinishingPage;
