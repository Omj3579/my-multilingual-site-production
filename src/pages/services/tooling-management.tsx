
import React from 'react';
import HeroSection from '@/components/tooling-management/HeroSection';
import ToolingManagement from '@/components/tooling-management/ToolingManagement';
import ToolingManagementSection from '@/components/tooling-management/ToolingManagementSection';
import CommitmentCallout from '@/components/tooling-management/CommitmentCallout';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const ToolingManagementPage = () => {
  return (
    <CapabilitiesLayout>
      <HeroSection />
      <ToolingManagement />
      <ToolingManagementSection />
      <CommitmentCallout />
    </CapabilitiesLayout>
  );
};

export default ToolingManagementPage;
