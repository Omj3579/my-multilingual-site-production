import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';

// Import all components
import ProgressBar from './ProgressBar';
import ImmersiveHero from './ImmersiveHero';
import QuickStats from './QuickStats';
import FeaturedProducts from './FeaturedProducts';
import PartnershipJourney from './PartnershipJourney';
import ChallengesAndSolutions from './ChallengesAndSolutions';
import InnovationShowcase from './InnovationShowcase';
import ImpactMetrics from './ImpactMetrics';
import FuturePerspectives from './FuturePerspectives';
import ContactCTA from './ContactCTA';

const DecadeOfInnovationCase = () => {
  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }  };
  
  return (
    <ResourcesLayout>
      {/* Progress indicator */}
      <ProgressBar />
      
      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="bg-white"
        >
          <ImmersiveHero scrollToSection={scrollToSection} />
          <QuickStats />
          <FeaturedProducts />
          <PartnershipJourney />
          <ChallengesAndSolutions />
          <InnovationShowcase />
          <ImpactMetrics />
          <FuturePerspectives />
          <ContactCTA />
        </motion.main>
      </AnimatePresence>
    </ResourcesLayout>
  );
};

export default DecadeOfInnovationCase;