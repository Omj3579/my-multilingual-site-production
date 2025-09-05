import React from 'react';
import HeroSection from '@/components/precision-quality/HeroSection';
import Quality from '@/components/precision-quality/Quality';
import QualityControlSection from '@/components/precision-quality/QualityControlSection';
import CommitmentCallout from '@/components/precision-quality/CommitmentCallout';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const PrecisionQuality = () => {
  return (
    <CapabilitiesLayout>
      <HeroSection />
      <Quality />
      <QualityControlSection />
      <CommitmentCallout />
    </CapabilitiesLayout>
  );
};

export default PrecisionQuality;
