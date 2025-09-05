import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import HeroSection from '@/components/history/HeroSection';
import FlairPlasticLegacy from '@/components/history/FlairPlasticLegacy';
import OurEvolution from '@/components/history/OurEvolution';
import { motion } from 'framer-motion';

// Page wrapper with animation effects
const History = () => {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <FlairPlasticLegacy />
        <OurEvolution />
      </motion.div>
    </PageLayout>
  );
};

export default History;
