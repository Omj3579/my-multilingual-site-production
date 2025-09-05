import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ContractManufacturingHero from './ContractManufacturingHero';
import SectionDivider from '@/components/capabilities/SectionDivider';
import ContractManufacturing from './ContractManufacturing';
import ContractManufacturingSection from './ContractManufacturingSection';
import ContractManufacturingAccordion from './ContractManufacturingAccordion';
import CommitmentCallout from './CommitmentCallout';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const ContractManufacturingPage = () => {
  const { language } = useLanguage();
  const title = language === 'hu' ? 'Szerződéses Gyártás' : 'Contract Manufacturing';
  
  // Mouse follow effect for cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Custom cursor effect */}
      <motion.div 
        className="fixed w-6 h-6 rounded-full border-2 border-amber-500/50 pointer-events-none z-50 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CapabilitiesLayout title={title}>
          <ContractManufacturingHero />
          <SectionDivider />
          <ContractManufacturing />
          <ContractManufacturingSection />
          <ContractManufacturingAccordion />
          <CommitmentCallout />
        </CapabilitiesLayout>
      </motion.div>
    </>
  );
};

export default ContractManufacturingPage;
