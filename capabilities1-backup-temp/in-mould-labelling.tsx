import React from 'react';
import HeroSection from '@/components/in-mould-labelling/HeroSection';
import { InjectionMoulding } from '@/components/in-mould-labelling/InjectionMoulding';
import { IMLExperienceSection } from '@/components/in-mould-labelling/IMLExperienceSection'; // Updated import
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const InMouldLabelling = () => {
  return (
    <CapabilitiesLayout>
      <HeroSection />
      <InjectionMoulding />
      <IMLExperienceSection />
    </CapabilitiesLayout>
  );
};

export default InMouldLabelling;
