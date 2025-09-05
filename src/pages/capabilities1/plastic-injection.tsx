import React from 'react';
import HeroWithTitle from '@/components/capabilities/HeroWithTitle';
import SectionDivider from '@/components/capabilities/SectionDivider';
import AboutSection from '@/components/capabilities/AboutSection';
import InjectionMouldingDetails from '@/components/capabilities/InjectionMouldingDetails';
import ManufacturingOverview from '@/components/capabilities/ManufacturingOverview';
import CommitmentCallout from '@/components/capabilities/CommitmentCallout';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const PlasticInjection = () => {
  return (
    <CapabilitiesLayout>
      <div className="min-h-screen bg-white">
        <HeroWithTitle />
        <SectionDivider />
        <AboutSection />
        <InjectionMouldingDetails />
        <ManufacturingOverview />
        <CommitmentCallout />
      </div>
    </CapabilitiesLayout>
  );
};

export default PlasticInjection;
