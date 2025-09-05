
import React from 'react';
import HeroSection from './HeroSection';
import OperationCleanSweep from './OperationCleanSweep';
import OperationCleanSweepSection from './OperationCleanSweepSection';
import EducationalInitiatives from './EducationalInitiatives';
import OurImpact from './OurImpact';
import CommitmentCallout from './CommitmentCallout';

const OperationCleanSweepPage = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <OperationCleanSweep />
      <OperationCleanSweepSection />
      <EducationalInitiatives />
      <OurImpact />
      <CommitmentCallout />
    </div>
  );
};

export default OperationCleanSweepPage;
