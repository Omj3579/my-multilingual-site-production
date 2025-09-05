import React from 'react';
import { usePathname } from 'next/navigation';
import RelatedCapabilitiesSlider from '@/components/capabilities/RelatedCapabilitiesSlider';

interface ServicesLayoutProps {
  children: React.ReactNode;
}

const ServicesLayout = ({ children }: ServicesLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      {children}
      <RelatedCapabilitiesSlider currentPath={pathname} />
    </div>
  );
};

export default ServicesLayout;
