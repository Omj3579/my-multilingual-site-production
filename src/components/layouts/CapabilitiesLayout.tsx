import React from 'react';
import { usePathname } from 'next/navigation';
import RelatedCapabilitiesSlider from '@/components/capabilities/RelatedCapabilitiesSlider';

interface CapabilitiesLayoutProps {
  children: React.ReactNode;
}

const CapabilitiesLayout = ({ children }: CapabilitiesLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      {children}
      <RelatedCapabilitiesSlider currentPath={pathname} />
    </div>
  );
};

export default CapabilitiesLayout;
