
import React from 'react';
import HeroSection from '@/components/injection-blow/HeroSection';
import IBMSection from '@/components/injection-blow/IBMSection';
import InjectionBlowMoulding from '@/components/injection-blow/InjectionBlowMoulding';
import CommitmentCallout from '@/components/injection-blow/CommitmentCallout';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const InjectionBlowPage = () => {
  return (
    <CapabilitiesLayout>
      <HeroSection />
      <InjectionBlowMoulding />
      <IBMSection />
      <CommitmentCallout />
    </CapabilitiesLayout>
  );
};

export default InjectionBlowPage;
