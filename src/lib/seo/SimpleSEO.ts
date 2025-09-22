/**
 * Simple SEO Configuration for Immediate Implementation
 * This provides the essential SEO data without complex dependencies
 */

export type Language = 'en' | 'hu' | 'de';

export interface SimpleSEOData {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  structuredData: object[];
}

/**
 * Ready-to-use SEO data for Flair Plastic services
 */
export const getSimpleSEO = (
  serviceType: string = 'plastic-injection-moulding',
  language: Language = 'en'
): SimpleSEOData => {
  
  const baseUrl = 'https://flair-plastic.hu';
  
  // Service-specific SEO data
  const seoData = {
    'plastic-injection-moulding': {
      en: {
        title: 'Plastic Injection Moulding Services | Flair Plastic - European Manufacturing Excellence',
        description: 'Professional plastic injection moulding services with precision engineering. Custom thermoplastic parts for automotive, medical, and industrial applications with ISO certifications.',
        keywords: 'plastic injection moulding, injection molding services, custom plastic parts, thermoplastic injection, precision molding, automotive plastic parts, medical device molding, injection molding Hungary, European plastic manufacturing',
        structuredData: [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Plastic Injection Moulding",
            "description": "Professional plastic injection moulding services with precision engineering for automotive, medical, and industrial applications.",
            "provider": {
              "@type": "Organization",
              "name": "Flair Plastic",
              "url": baseUrl,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "HU"
              }
            },
            "serviceType": "Manufacturing Service",
            "category": "Plastic Injection Moulding",
            "areaServed": [
              {
                "@type": "Country", 
                "name": "Hungary"
              },
              {
                "@type": "Place",
                "name": "Europe"
              }
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Materials",
                "value": "ABS, PC, PA, POM, TPU, Engineering Plastics"
              },
              {
                "@type": "PropertyValue",
                "name": "Industries", 
                "value": "Automotive, Medical, Electronics, Consumer Goods"
              },
              {
                "@type": "PropertyValue",
                "name": "Certifications",
                "value": "ISO 9001:2015, IATF 16949"
              }
            ],
            "url": `${baseUrl}/services/plastic-injection-moulding`
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Flair Plastic",
            "url": baseUrl,
            "logo": `${baseUrl}/images/flair-plastic-logo.png`,
            "description": "Leading European manufacturer specializing in precision plastic injection moulding and contract manufacturing services.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "HU",
              "addressRegion": "Europe"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Hungarian", "German"]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plastic Manufacturing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Plastic Injection Moulding"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Prototype Development"
                  }
                }
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
              },
              {
                "@type": "ListItem",
                "position": 2, 
                "name": "Services",
                "item": `${baseUrl}/services`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Plastic Injection Moulding",
                "item": `${baseUrl}/services/plastic-injection-moulding`
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What materials do you use for plastic injection moulding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with a comprehensive range of thermoplastics including ABS, PC, PA, POM, TPU, and engineering grades for specific applications with medical and automotive certifications."
                }
              },
              {
                "@type": "Question",
                "name": "What quality standards do you follow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain ISO 9001:2015 certification and follow automotive IATF 16949 standards for precision manufacturing excellence in our European facility."
                }
              },
              {
                "@type": "Question", 
                "name": "What industries do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve automotive, medical device, electronics, and consumer goods industries across Europe with specialized plastic injection moulding solutions."
                }
              }
            ]
          }
        ]
      }
    }
  };

  const serviceData = seoData[serviceType as keyof typeof seoData]?.[language];
  
  return {
    title: serviceData?.title || 'Flair Plastic - Manufacturing Services',
    description: serviceData?.description || 'Professional manufacturing services',
    keywords: serviceData?.keywords || 'plastic manufacturing, injection molding',
    canonical: `${baseUrl}/${language !== 'en' ? language + '/' : ''}services/${serviceType}`,
    structuredData: serviceData?.structuredData || []
  };
};