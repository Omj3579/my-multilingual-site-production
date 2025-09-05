import React from 'react';
import ServicesLayout from '@/components/layouts/ServicesLayout';
import { motion } from 'framer-motion';
import ModernServicesHero from '@/components/capabilities/ModernServicesHero';
import ModernCapabilitiesOverview from '@/components/capabilities/ModernCapabilitiesOverview';
import ModernCTA from '@/components/capabilities/ModernCTA';

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

const PlasticInjection = () => {
  return (
    <ErrorBoundary>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ServicesLayout>
          <ErrorBoundary fallback={<div className="h-screen bg-gray-100 flex items-center justify-center text-2xl">Loading Hero Section...</div>}>
            <ModernServicesHero />
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="h-96 bg-gray-50 flex items-center justify-center">Loading Content...</div>}>
            <ModernCapabilitiesOverview />
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="h-64 bg-gray-100"></div>}>
            <ModernCTA />
          </ErrorBoundary>
        </ServicesLayout>
      </motion.div>
    </ErrorBoundary>
  );
};

export default PlasticInjection;
