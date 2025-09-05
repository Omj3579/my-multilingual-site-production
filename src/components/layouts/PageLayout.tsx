import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  return (
    <div className={`pt-20 min-h-screen ${className}`}>
      {children}
    </div>
  );
};

export default PageLayout;
