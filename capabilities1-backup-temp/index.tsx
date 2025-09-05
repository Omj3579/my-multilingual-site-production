import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroWithTitle from '@/components/oldComponents/capabilities/HeroWithTitle';
import SectionDivider from '@/components/oldComponents/capabilities/SectionDivider';
import AboutSection from '@/components/oldComponents/capabilities/AboutSection';
import InjectionMouldingDetails from '@/components/oldComponents/capabilities/InjectionMouldingDetails';
import ManufacturingOverview from '@/components/oldComponents/capabilities/ManufacturingOverview';
import CommitmentCallout from '@/components/oldComponents/capabilities/CommitmentCallout';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';
import { motion } from 'framer-motion';

const Capabilities = () => {
  const { language } = useLanguage();
  const title = language === 'hu' ? 'Képességek' : 'Capabilities';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CapabilitiesLayout>
        <HeroWithTitle title={title} />
        <SectionDivider />
        <AboutSection />
        <InjectionMouldingDetails />
        <ManufacturingOverview />
        <CommitmentCallout />
      </CapabilitiesLayout>
    </motion.div>
  );
};

export default Capabilities;
