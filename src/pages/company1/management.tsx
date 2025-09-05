import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import PageLayout from '@/components/layouts/PageLayout';
import LeadershipExcellenceCallout from '@/components/management/LeadershipExcellenceCallout';
import CEOCard from '@/components/management/CEOCard';

// Dynamically import components that might cause hydration issues
const HeroSection = dynamic(() => import('@/components/management/HeroSection'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
    </div>
  )
});

const TeamMembers = dynamic(() => import('@/components/management/TeamMembers'), {
  ssr: false,
  loading: () => <div className="min-h-[100vh] bg-gray-50"></div>
});

const CommitmentCallout = dynamic(() => import('@/components/management/CommitmentCallout'), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] bg-white"></div>
});

const Management = () => {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        {/* Hero at top - Client-side rendered */}
        <HeroSection />
        
        {/* Semantic markup for better structure */}
        <main>
          {/* Leadership ethos - Server-side rendered */}
          <section id="leadership-ethos">
            <LeadershipExcellenceCallout />
          </section>
          
          {/* CEO section - Server-side rendered */}
          <section id="ceo" className="bg-white">
            <CEOCard />
          </section>
          
          {/* Team section - Client-side rendered */}
          <section id="team">
            <TeamMembers />
          </section>
          
          {/* Commitment section - Client-side rendered */}
          <section id="commitment">
            <CommitmentCallout />
          </section>
        </main>
      </motion.div>
    </PageLayout>
  );
};

export default Management;
