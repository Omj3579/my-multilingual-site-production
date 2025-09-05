import React from 'react';
import HeroSection from './HeroSection';
import AssemblySection from './AssemblySection';
import AssemblyComponent from './Assemblyc';
import CommitmentCallout from './CommitmentCallout';
import AssemblySolutionsBanner from './AssemblySolutionsBanner';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const Assembly = () => {
  return (
    <CapabilitiesLayout>
      <HeroSection />
      <AssemblyComponent />
      <AssemblySection />
      <AssemblySolutionsBanner />
      <CommitmentCallout />
    </CapabilitiesLayout>
  );
};

export default Assembly;
