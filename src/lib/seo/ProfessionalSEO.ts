/**
 * Professional SEO Configuration for Flair Plastic Services
 * Creates compelling, professional search results that stand out in Google
 */

export interface ProfessionalSEOConfig {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  richSnippet: {
    serviceType: string;
    features: string[];
    certifications: string[];
    callToAction: string;
  };
}

export const ProfessionalServiceSEO = {
  
  /**
   * PLASTIC INJECTION MOULDING - Premium Professional SEO
   */
  plasticInjectionMoulding: {
    title: "Premium Plastic Injection Moulding Services | ISO 9001 Certified | Flair Plastic",
    description: "Industry-leading plastic injection moulding for automotive, medical & consumer products. 30+ years expertise, ISO certified quality, sustainable solutions. Get precision manufacturing quote today.",
    url: "/services/precision-plastic-injection-moulding",
    keywords: [
      "precision plastic injection moulding",
      "automotive plastic manufacturing", 
      "ISO certified plastic molding",
      "sustainable injection moulding",
      "European plastic manufacturer"
    ],
    richSnippet: {
      serviceType: "Premium Plastic Injection Moulding",
      features: [
        "ISO 9001:2015 Certified Quality Systems",
        "Advanced Multi-Cavity Tooling Technology", 
        "Sustainable Manufacturing Processes",
        "Automotive Grade Material Expertise",
        "Medical Device Component Precision"
      ],
      certifications: ["ISO 9001:2015", "Automotive Industry Approved", "Medical Grade Manufacturing"],
      callToAction: "Request Professional Manufacturing Quote"
    }
  } as ProfessionalSEOConfig,

  /**
   * IN-MOULD LABELLING - Professional Service Focus
   */
  inMouldLabelling: {
    title: "Advanced In-Mould Labelling (IML) Technology | Premium Decorative Solutions | Flair Plastic",
    description: "Professional IML technology for premium product decoration. Seamless integration, durable graphics, cost-effective branding solutions. Industry-leading quality for automotive & consumer goods.",
    url: "/services/advanced-in-mould-labelling-iml",
    keywords: [
      "in-mould labelling IML technology",
      "premium product decoration",
      "automotive IML solutions",
      "durable label integration",
      "cost-effective branding manufacturing"
    ],
    richSnippet: {
      serviceType: "Advanced In-Mould Labelling Technology",
      features: [
        "Seamless Label Integration During Molding",
        "Premium Graphics & Branding Solutions",
        "Automotive Industry Applications",
        "Scratch & Weather Resistant Labels",
        "Cost-Effective Alternative to Painting"
      ],
      certifications: ["Automotive Industry Certified", "Premium Quality Standards"],
      callToAction: "Explore Premium Decoration Solutions"
    }
  } as ProfessionalSEOConfig,

  /**
   * IN-MOULD DECORATION - Luxury Manufacturing Focus
   */
  inMouldDecoration: {
    title: "Luxury In-Mould Decoration (IMD) | Premium Surface Finishing | Flair Plastic Europe",
    description: "Exclusive IMD technology for luxury automotive interiors & premium consumer products. Advanced surface texturing, metallic finishes, wood-grain effects. European craftsmanship quality.",
    url: "/services/luxury-in-mould-decoration-imd",
    keywords: [
      "luxury in-mould decoration IMD",
      "premium automotive interior manufacturing",
      "advanced surface texturing",
      "metallic finish plastic molding",
      "European luxury manufacturing"
    ],
    richSnippet: {
      serviceType: "Luxury In-Mould Decoration Services",
      features: [
        "Premium Automotive Interior Components",
        "Advanced Surface Texturing Technology",
        "Metallic & Wood-Grain Effect Finishes",
        "Luxury Consumer Product Applications",
        "European Craftsmanship Standards"
      ],
      certifications: ["Luxury Automotive Supplier", "Premium Quality Certified"],
      callToAction: "Discover Luxury Manufacturing Solutions"
    }
  } as ProfessionalSEOConfig,

  /**
   * CONTRACT MANUFACTURING - Professional Partnership Focus
   */
  contractManufacturing: {
    title: "Professional Contract Manufacturing Services | End-to-End Plastic Solutions | Flair Plastic",
    description: "Complete contract manufacturing partnership from design to delivery. Project management, quality assurance, supply chain optimization. Trusted by automotive & medical device companies.",
    url: "/services/professional-contract-manufacturing",
    keywords: [
      "professional contract manufacturing",
      "end-to-end plastic manufacturing",
      "automotive contract services",
      "medical device manufacturing",
      "European manufacturing partner"
    ],
    richSnippet: {
      serviceType: "Complete Contract Manufacturing Solutions",
      features: [
        "End-to-End Project Management",
        "Design for Manufacturing Expertise",
        "Supply Chain Optimization",
        "Quality Assurance & Testing",
        "Regulatory Compliance Support"
      ],
      certifications: ["ISO 9001:2015", "Automotive Supplier Approved", "Medical Device Manufacturing"],
      callToAction: "Partner with Manufacturing Experts"
    }
  } as ProfessionalSEOConfig,

  /**
   * SURFACE FINISHING - Technical Excellence Focus
   */
  surfaceFinishing: {
    title: "Advanced Surface Finishing Solutions | Technical Excellence | Flair Plastic Manufacturing",
    description: "Professional surface finishing services including texturing, coating, and post-processing. Technical expertise for demanding applications. Quality finishing for automotive & industrial components.",
    url: "/services/advanced-surface-finishing-solutions",
    keywords: [
      "advanced surface finishing manufacturing",
      "professional plastic texturing",
      "automotive surface finishing",
      "technical post-processing services",
      "industrial component finishing"
    ],
    richSnippet: {
      serviceType: "Advanced Surface Finishing Services",
      features: [
        "Professional Texturing & Graining",
        "Advanced Coating Applications",
        "Precision Post-Processing",
        "Automotive Grade Finishing",
        "Custom Surface Solutions"
      ],
      certifications: ["Technical Excellence Certified", "Automotive Grade Standards"],
      callToAction: "Request Technical Finishing Quote"
    }
  } as ProfessionalSEOConfig,

  /**
   * ASSEMBLY SERVICES - Manufacturing Integration Focus
   */
  assemblyServices: {
    title: "Professional Assembly & Integration Services | Complete Manufacturing Solutions | Flair Plastic",
    description: "Expert assembly services combining plastic components with mechanical, electronic elements. Streamlined manufacturing, quality control, just-in-time delivery for complex products.",
    url: "/services/professional-assembly-integration",
    keywords: [
      "professional assembly services",
      "manufacturing integration solutions",
      "complex product assembly",
      "just-in-time manufacturing",
      "automotive assembly services"
    ],
    richSnippet: {
      serviceType: "Professional Assembly & Integration",
      features: [
        "Multi-Component Integration Expertise",
        "Electronic & Mechanical Assembly",
        "Quality Control & Testing",
        "Just-in-Time Delivery Systems",
        "Complex Product Manufacturing"
      ],
      certifications: ["Assembly Excellence Certified", "Quality Systems Approved"],
      callToAction: "Streamline Your Manufacturing Process"
    }
  } as ProfessionalSEOConfig
};

/**
 * PROFESSIONAL URL STRUCTURE MAPPING
 * Clean, SEO-optimized URLs that reflect professional services
 */
export const ProfessionalURLStructure = {
  services: {
    // Current URL → Professional URL
    "plastic-injection-moulding": "precision-plastic-injection-moulding",
    "in-mould-labelling": "advanced-in-mould-labelling-iml", 
    "in-mould-decoration": "luxury-in-mould-decoration-imd",
    "contract-manufacturing": "professional-contract-manufacturing",
    "surface-finishing": "advanced-surface-finishing-solutions",
    "assembly": "professional-assembly-integration"
  },
  
  // Additional professional page structures
  capabilities: {
    "automotive": "automotive-manufacturing-excellence",
    "medical": "medical-device-manufacturing-precision", 
    "consumer": "premium-consumer-products-manufacturing",
    "sustainability": "sustainable-manufacturing-solutions"
  },
  
  // Company pages with professional focus
  company: {
    "about": "manufacturing-excellence-since-1993",
    "quality": "iso-certified-quality-systems",
    "sustainability": "sustainable-manufacturing-leadership",
    "careers": "manufacturing-careers-opportunities"
  }
};

/**
 * ENHANCED RICH SNIPPET TEMPLATES
 * Professional structured data that creates compelling search results
 */
export const ProfessionalRichSnippets = {
  
  /**
   * Service Page Rich Snippet Template
   */
  serviceTemplate: (config: ProfessionalSEOConfig) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": config.richSnippet.serviceType,
    "description": config.description,
    "provider": {
      "@type": "Organization",
      "name": "Flair Plastic KFT",
      "description": "Industry-leading plastic manufacturing company specializing in precision injection moulding, advanced decoration technologies, and professional contract manufacturing services.",
      "url": "https://flair-plastic.hu",
      "logo": "https://flair-plastic.hu/images/flair-plastic-logo-professional.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sajóvölgyi utca 2",
        "addressLocality": "Málovec",
        "postalCode": "3927",
        "addressCountry": "HU"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+36-46-584-900", 
        "contactType": "Manufacturing Inquiries",
        "availableLanguage": ["English", "Hungarian", "German"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/flair-plastic"
      ]
    },
    "serviceType": config.richSnippet.serviceType,
    "additionalType": "https://schema.org/ProfessionalService",
    "category": "Advanced Plastic Manufacturing",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Manufacturing Services",
      "itemListElement": config.richSnippet.features.map((feature) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Europe"
      },
      {
        "@type": "Country", 
        "name": "Hungary"
      },
      {
        "@type": "Country",
        "name": "Germany" 
      }
    ],
    "award": config.richSnippet.certifications,
    "slogan": config.richSnippet.callToAction
  }),

  /**
   * Professional Organization Schema
   */
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "Flair Plastic KFT - Advanced Manufacturing Solutions",
    "alternateName": "Flair Plastic",
    "description": "Industry-leading plastic manufacturing company with 30+ years of excellence in precision injection moulding, advanced decoration technologies, and sustainable manufacturing solutions for automotive, medical, and premium consumer markets.",
    "url": "https://flair-plastic.hu",
    "logo": "https://flair-plastic.hu/images/flair-plastic-logo-professional.webp",
    "image": "https://flair-plastic.hu/images/flair-plastic-manufacturing-facility.webp",
    "foundingDate": "1993",
    "numberOfEmployees": "150-200",
    "industry": "Advanced Plastic Manufacturing",
    "speciality": [
      "Precision Plastic Injection Moulding",
      "In-Mould Labelling (IML) Technology", 
      "Luxury In-Mould Decoration (IMD)",
      "Professional Contract Manufacturing",
      "Sustainable Manufacturing Solutions"
    ],
    "certifications": [
      "ISO 9001:2015 Quality Management",
      "Automotive Industry Certified",
      "Medical Device Manufacturing Approved"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sajóvölgyi utca 2",
      "addressLocality": "Málovec", 
      "postalCode": "3927",
      "addressCountry": "HU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.4711",
      "longitude": "20.8847"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+36-46-584-900",
        "contactType": "Manufacturing Inquiries", 
        "availableLanguage": ["English", "Hungarian", "German"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "email": "info@flair-plastic.hu",
        "contactType": "Business Inquiries",
        "availableLanguage": ["English", "Hungarian", "German"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/flair-plastic"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Quality Certification",
        "name": "ISO 9001:2015"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium Plastic Injection Moulding Services",
          "description": "Industry-leading precision manufacturing for automotive, medical, and consumer applications"
        }
      }
    ]
  }
};

const ProfessionalSEOExports = {
  ProfessionalServiceSEO,
  ProfessionalURLStructure, 
  ProfessionalRichSnippets
};

export default ProfessionalSEOExports;