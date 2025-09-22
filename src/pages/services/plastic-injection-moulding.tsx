import React from 'react';
import Head from 'next/head';
import ServicesLayout from '@/components/layouts/ServicesLayout';
import { motion } from 'framer-motion';
import ModernServicesHero from '@/components/capabilities/ModernServicesHero';
import ModernCapabilitiesOverview from '@/components/capabilities/ModernCapabilitiesOverview';
import ModernCTA from '@/components/capabilities/ModernCTA';
import { ProfessionalServiceSEO, ProfessionalRichSnippets } from '@/lib/seo/ProfessionalSEO';

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

const PlasticInjection = () => {
  // Professional SEO configuration for premium search results
  const seoConfig = ProfessionalServiceSEO.plasticInjectionMoulding;
  const serviceSchema = ProfessionalRichSnippets.serviceTemplate(seoConfig);
  const organizationSchema = ProfessionalRichSnippets.organizationSchema;
  
  return (
    <ErrorBoundary>
      {/* Professional SEO Head Section */}
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords.join(', ')} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <link rel="canonical" href={`https://flair-plastic.hu${seoConfig.url}`} />
        
        {/* Enhanced Open Graph Tags for Professional Sharing */}
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://flair-plastic.hu${seoConfig.url}`} />
        <meta property="og:image" content="https://flair-plastic.hu/images/services/professional-plastic-injection-moulding.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Flair Plastic - Advanced Manufacturing Solutions" />
        
        {/* Professional Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content="https://flair-plastic.hu/images/services/professional-injection-moulding-twitter.jpg" />
        <meta name="twitter:site" content="@FlairPlastic" />
        
        {/* Professional Business Information */}
        <meta name="author" content="Flair Plastic KFT" />
        <meta name="publisher" content="Flair Plastic - Advanced Manufacturing Solutions" />
        <meta name="copyright" content="© 2025 Flair Plastic KFT. All rights reserved." />
        
        {/* Professional Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://flair-plastic.hu/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://flair-plastic.hu/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Precision Plastic Injection Moulding",
                  "item": `https://flair-plastic.hu${seoConfig.url}`
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes Flair Plastic's injection moulding services professional grade?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our ISO 9001:2015 certified facility combines 30+ years of expertise with advanced multi-cavity tooling technology, sustainable manufacturing processes, and precision quality control for automotive, medical, and premium consumer applications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries does Flair Plastic serve with injection moulding?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in automotive components, medical device manufacturing, premium consumer products, and industrial applications requiring precision manufacturing and regulatory compliance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What quality certifications does Flair Plastic maintain?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We maintain ISO 9001:2015 certification, automotive industry approvals, and medical device manufacturing certifications, ensuring the highest quality standards for all applications."
                  }
                }
              ]
            })
          }}
        />
      </Head>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ServicesLayout>
          <ErrorBoundary fallback={<div className="h-screen bg-gray-100 flex items-center justify-center text-2xl">Loading Hero Section...</div>}>
            <ModernServicesHero />
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="h-96 bg-gray-50 flex items-center justify-center">Loading Content...</div>}>
            <ModernCapabilitiesOverview />
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="h-64 bg-gray-100"></div>}>
            <ModernCTA />
          </ErrorBoundary>
        </ServicesLayout>
      </motion.div>
    </ErrorBoundary>
  );
};

export default PlasticInjection;
