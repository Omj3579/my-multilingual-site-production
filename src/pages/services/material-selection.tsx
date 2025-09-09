
import React from 'react';
import ModernServicesHero from '@/components/capabilities/ModernServicesHero';
import ModernCapabilitiesOverview from '@/components/capabilities/ModernCapabilitiesOverview';
import ModernCTA from '@/components/capabilities/ModernCTA';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const MaterialSelection = () => {
  return (
    <CapabilitiesLayout>
      <ModernServicesHero />
      <ModernCapabilitiesOverview />
      <ModernCTA />
    </CapabilitiesLayout>
  );
};

export default MaterialSelection;
