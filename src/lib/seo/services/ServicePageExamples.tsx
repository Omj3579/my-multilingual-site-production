/**
 * PRACTICAL IMPLEMENTATION EXAMPLE
 * How to use the new SEO system in your service pages
 */

import React from 'react';
import { NextSeo } from 'next-seo';
import { generateServiceSEOPackage, getServicePageHead } from '@/lib/seo/services/ServiceSEOData';
import ServicesLayout from '@/components/layouts/ServicesLayout';
import { motion } from 'framer-motion';

// Example: Enhanced Plastic Injection Moulding Page
const PlasticInjectionMouldingPage = () => {
  // Generate SEO data for this specific service
  const seoData = getServicePageHead('plastic-injection-moulding', 'en');

  return (
    <>
      {/* SEO Implementation */}
      <NextSeo
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
        openGraph={seoData.openGraph}
        twitter={seoData.twitter}
        additionalMetaTags={seoData.additionalMetaTags}
      />

      {/* Structured Data */}
      {seoData.structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}

      {/* Page Content */}
      <ServicesLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Plastic Injection Moulding Services
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Professional plastic injection moulding services with precision engineering. 
              Custom thermoplastic parts for automotive, medical, and industrial applications 
              with ISO certifications.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Capabilities</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>High-precision injection moulding</li>
                  <li>Multi-shot and insert moulding</li>
                  <li>Overmoulding technologies</li>
                  <li>Micro-moulding for medical devices</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Materials We Work With</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>ABS, PC, PA, POM thermoplastics</li>
                  <li>Engineering plastics (PEEK, PEI)</li>
                  <li>Medical grade materials (USP Class VI)</li>
                  <li>Bio-compatible polymers</li>
                </ul>
              </div>
            </div>

            <section className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold">Automotive</h3>
                  <p className="text-sm text-gray-600">Interior components, under-hood parts</p>
                </div>
                <div>
                  <h3 className="font-semibold">Medical</h3>
                  <p className="text-sm text-gray-600">Devices, diagnostic equipment</p>
                </div>
                <div>
                  <h3 className="font-semibold">Electronics</h3>
                  <p className="text-sm text-gray-600">Housings, connectors, precision parts</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </ServicesLayout>
    </>
  );
};

// Example: In-Mould Decoration (IMD) Page Implementation
const InMouldDecorationPage = () => {
  const seoData = getServicePageHead('in-mould-decoration', 'en');

  return (
    <>
      <NextSeo {...seoData} />
      
      {seoData.structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <ServicesLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">In-Mould Decoration (IMD) Services</h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Advanced In-Mould Decoration (IMD) technology for premium surface finishes. 
            Decorative film integration during injection moulding for automotive interiors 
            and consumer electronics.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">IMD Process Advantages</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Superior durability and scratch resistance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Integrated graphics eliminate delamination</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Cost-effective for complex designs</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Applications</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold">Automotive Interior</h3>
                  <p className="text-gray-600">Dashboard panels, center consoles, trim pieces</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold">Consumer Electronics</h3>
                  <p className="text-gray-600">Device housings, control panels, appliance fronts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ServicesLayout>
    </>
  );
};

// Multilingual Implementation Example
const MultilingualServicePage = ({ language = 'en' }: { language: 'en' | 'hu' | 'de' }) => {
  const seoData = getServicePageHead('contract-manufacturing', language);

  return (
    <>
      <NextSeo {...seoData} />
      
      {seoData.structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <ServicesLayout>
        <div className="container mx-auto px-4 py-8">
          {language === 'en' && (
            <>
              <h1 className="text-4xl font-bold mb-6">Contract Manufacturing Services</h1>
              <p className="text-xl text-gray-700 mb-8">
                Comprehensive contract manufacturing and OEM production services. 
                Turnkey plastic manufacturing solutions with supply chain management and quality systems.
              </p>
            </>
          )}
          
          {language === 'hu' && (
            <>
              <h1 className="text-4xl font-bold mb-6">Szerződéses Gyártási Szolgáltatások</h1>
              <p className="text-xl text-gray-700 mb-8">
                Átfogó szerződéses gyártási és OEM termelési szolgáltatások. 
                Kulcsrakész műanyag gyártási megoldások ellátási lánc menedzsmenttel és minőségbiztosítási rendszerekkel.
              </p>
            </>
          )}
          
          {language === 'de' && (
            <>
              <h1 className="text-4xl font-bold mb-6">Auftragsfertigung Dienstleistungen</h1>
              <p className="text-xl text-gray-700 mb-8">
                Umfassende Auftragsfertigung und OEM-Produktionsdienstleistungen. 
                Schlüsselfertige Kunststoff-Fertigungslösungen mit Supply Chain Management und Qualitätssystemen.
              </p>
            </>
          )}
        </div>
      </ServicesLayout>
    </>
  );
};

/**
 * STEP-BY-STEP IMPLEMENTATION GUIDE
 * 
 * 1. IMMEDIATE IMPLEMENTATION (Ready to use today):
 */

// Option 1: Quick integration in existing pages
export const quickSEOIntegration = {
  // Add this to any existing service page
  addToExistingPage: `
    import { getServicePageHead } from '@/lib/seo/services/ServiceSEOData';
    
    const YourServicePage = () => {
      const seoData = getServicePageHead('plastic-injection-moulding', 'en');
      
      return (
        <>
          <NextSeo {...seoData} />
          {seoData.structuredData.map((schema, index) => (
            <script key={index} type="application/ld+json" 
              dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
          ))}
          {/* Your existing content */}
        </>
      );
    };
  `,

  // Option 2: For new service pages
  newPageTemplate: `
    import { generateServiceSEOPackage } from '@/lib/seo/services/ServiceSEOData';
    
    export async function getStaticProps() {
      const seoData = generateServiceSEOPackage('in-mould-decoration', 'en', {
        includeFAQs: true
      });
      
      return { props: { seoData } };
    }
  `
};

/**
 * 2. CONTENT OPTIMIZATION RECOMMENDATIONS
 */

export const contentOptimizationTips = {
  keywordPlacement: [
    'Include primary keywords in H1 (page title)',
    'Use secondary keywords in H2 headings',
    'Natural keyword density of 1-2% in body content',
    'Include location-based keywords (Hungary, Europe)',
    'Add technical terms relevant to plastic injection moulding'
  ],

  contentStructure: [
    'Start with clear service description in first paragraph',
    'Include capabilities, materials, and industries served',
    'Add technical specifications and certifications',
    'Include process advantages and applications',
    'End with call-to-action for inquiries'
  ],

  seoOptimizedContent: {
    h1: 'Primary Service Name + "Services" + Company/Location',
    h2: ['Our Capabilities', 'Materials We Work With', 'Industries We Serve', 'Process Advantages'],
    h3: ['Specific applications', 'Technical specifications', 'Quality certifications'],
    metaDescription: 'Include primary keyword, benefits, applications, and location within 155 characters',
    imageAltText: 'Include service name and specific application or process shown'
  }
};

/**
 * 3. PERFORMANCE MONITORING
 */

export const performanceMonitoring = {
  // Add to _app.tsx for Core Web Vitals tracking
  coreWebVitals: `
    import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
    
    function sendToAnalytics(metric) {
      // Send to Google Analytics 4
      gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true
      });
    }
    
    useEffect(() => {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    }, []);
  `,

  // SEO monitoring checklist
  monitoringChecklist: [
    'Google Search Console for ranking improvements',
    'Core Web Vitals scores in PageSpeed Insights',
    'Rich Results Test for structured data validation',
    'Lighthouse SEO scores for technical optimization',
    'Analytics for organic traffic and conversion tracking'
  ]
};

export default {
  PlasticInjectionMouldingPage,
  InMouldDecorationPage,
  MultilingualServicePage,
  quickSEOIntegration,
  contentOptimizationTips,
  performanceMonitoring
};