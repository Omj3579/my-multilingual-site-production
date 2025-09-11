
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/lib/seo/SEOHead';
import { generateSEOData } from '@/lib/seo/utils';
import ContactSection from '@/components/contact/ContactSection';
import PageLayout from '@/components/layouts/PageLayout';

const Contact = () => {
  const { language } = useLanguage();

  // Generate SEO data for contact page
  const seoData = generateSEOData({
    pageType: 'contact',
    language,
    slug: '/contact',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' }
    ]
  });

  return (
    <>
      <SEOHead seoData={seoData} />
      <PageLayout>
        <ContactSection />
      </PageLayout>
    </>
  );
};

export default Contact;
