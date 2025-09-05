import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Assembly from '@/components/assembly_';

const AssemblyCapabilityPage = () => {
  const { language } = useLanguage();

  const pageTitle = language === 'en' 
    ? 'Assembly Services - Advanced Manufacturing Solutions' 
    : 'Összeszerelési Szolgáltatások - Fejlett Gyártási Megoldások';

  const pageDescription = language === 'en'
    ? 'Comprehensive assembly services with cutting-edge technology and precision engineering for optimal manufacturing outcomes. Discover our advanced assembly capabilities across automotive, medical, aerospace, and electronics industries.'
    : 'Átfogó összeszerelési szolgáltatások élvonalbeli technológiával és precíziós mérnöki munkával az optimális gyártási eredményekért. Fedezze fel fejlett összeszerelési képességeinket az autóipar, orvostechnika, légiközlekedés és elektronika területén.';

  return (
    <>
      <Head>
        <title>{pageTitle} | STAR-PLUS</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={
          language === 'en'
            ? 'assembly services, manufacturing solutions, automotive assembly, medical device assembly, aerospace assembly, electronics assembly, precision engineering, quality control, automated assembly, contract manufacturing'
            : 'összeszerelési szolgáltatások, gyártási megoldások, autóipari összeszerelés, orvosi eszköz összeszerelés, légiközlekedési összeszerelés, elektronikai összeszerelés, precíziós mérnöki munka, minőség-ellenőrzés, automatizált összeszerelés, szerződéses gyártás'
        } />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/capabilities/assembly" />
        <meta property="og:image" content="/images/assembly-services-og.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/images/assembly-services-twitter.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="STAR-PLUS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourwebsite.com/capabilities/assembly" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": pageTitle,
              "description": pageDescription,
              "provider": {
                "@type": "Organization",
                "name": "STAR-PLUS",
                "url": "https://yourwebsite.com"
              },
              "serviceType": "Assembly Services",
              "areaServed": "Global",
              "offers": {
                "@type": "Offer",
                "description": "Professional assembly services for various industries"
              }
            })
          }}
        />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        <Assembly />
      </motion.div>
    </>
  );
};

export default AssemblyCapabilityPage;
