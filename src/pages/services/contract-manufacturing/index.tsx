import React from 'react';
import { motion } from 'framer-motion';
import ContractManufacturingHero from '../../../components/contract/ContractManufacturingHero';
import ContractManufacturing from '../../../components/contract/ContractManufacturing';
import ContractManufacturingSection from '../../../components/contract/ContractManufacturingSection';
import ContractManufacturingCards from '../../../components/contract/ContractManufacturingCards';
import CommitmentCallout from '../../../components/contract/CommitmentCallout';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const ContractManufacturingPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CapabilitiesLayout>
          <ContractManufacturingHero />
          <ContractManufacturing />
          <ContractManufacturingSection />
          <ContractManufacturingCards />
          <CommitmentCallout />
        </CapabilitiesLayout>
      </motion.div>
    </>
  );
};

export default ContractManufacturingPage;
