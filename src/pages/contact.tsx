
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CompleteSiteSEO } from "@/lib/seo/CompleteSiteSEO";
import ContactSection from '@/components/contact/ContactSection';
import PageLayout from '@/components/layouts/PageLayout';
import Head from "next/head";

const Contact = () => {
  const { language } = useLanguage();

  // Get professional SEO configuration for contact page
  const contactSEO = CompleteSiteSEO.contact;
  const seoConfig = language === 'hu' && contactSEO.hu ? contactSEO.hu : contactSEO.en;

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
        <meta property="og:url" content="https://flair-plastic.hu/contact" />
        
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
        
        <link rel="canonical" href="https://flair-plastic.hu/contact" />
      </Head>
      <PageLayout>
        <ContactSection />
      </PageLayout>
    </>
  );
};

export default Contact;
