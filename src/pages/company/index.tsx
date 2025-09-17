import React from 'react';
import CompanyOverviewHero from '@/components/company/CompanyOverviewHero';
import CompanyIntroSection from '@/components/company/CompanyIntroSection';
import CompanyHighlights from '@/components/company/CompanyHighlights';
import CompanyNavigation from '@/components/company/CompanyNavigation';
import { motion } from 'framer-motion';

// Company overview page - serves as the main landing page for /company
const CompanyOverview = () => {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CompanyOverviewHero />
        <CompanyIntroSection />
        <CompanyHighlights />
        <CompanyNavigation />
      </motion.div>
    </div>
  );
};

export default CompanyOverview;
