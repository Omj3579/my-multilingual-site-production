
import React from 'react';
import HeroSection from '@/components/material-selection/HeroSection';
import ChoosingMaterialsSection from '@/components/material-selection/ChoosingMaterialsSection';
import ImageCardGrid from '@/components/material-selection/ImageCardGrid';
import MaterialSelectionCallout from '@/components/material-selection/MaterialSelectionCallout';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const MaterialSelection = () => {
  return (
    <CapabilitiesLayout>
      <HeroSection />
      <ChoosingMaterialsSection />
      <ImageCardGrid />
      <MaterialSelectionCallout />
    </CapabilitiesLayout>
  );
};

export default MaterialSelection;
