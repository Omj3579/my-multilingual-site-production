import React from 'react';
import CompanyOverviewHero from '@/components/company/CompanyOverviewHero';
import CompanyIntroSection from '@/components/company/CompanyIntroSection';
import CompanyHighlights from '@/components/company/CompanyHighlights';
import CompanyNavigation from '@/components/company/CompanyNavigation';
import { motion } from 'framer-motion';
import { useLanguage } from "@/contexts/LanguageContext";
import { CompleteSiteSEO } from "@/lib/seo/CompleteSiteSEO";
import Head from "next/head";

// Company overview page - serves as the main landing page for /company
const CompanyOverview = () => {
  const { language } = useLanguage();

  // Get professional SEO configuration for about/company page
  const seoConfig = CompleteSiteSEO.about;

  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flair-plastic.hu/company" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data */}
        {seoConfig.structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        
        <link rel="canonical" href="https://flair-plastic.hu/company" />
      </Head>
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
    </>
  );
};

export default CompanyOverview;
