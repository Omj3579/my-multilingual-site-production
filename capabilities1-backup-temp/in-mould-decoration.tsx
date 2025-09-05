
import React from 'react';
import HeroSection from '@/components/in-mould-decoration/HeroSection';
import InjectionMoulding from '@/components/in-mould-decoration/InjectionMoulding';
import IMDTechnologyShowcase from '@/components/in-mould-decoration/IMDTechnologyShowcase';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const InMouldDecoration = () => {
  return (
    <CapabilitiesLayout>
      <HeroSection />
      <InjectionMoulding />
      <IMDTechnologyShowcase />
    </CapabilitiesLayout>
  );
};

export default InMouldDecoration;
