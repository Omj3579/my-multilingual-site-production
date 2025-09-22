/**
 * Ready-to-Use SEO Implementations for Flair Plastic Service Pages
 * Directly implementable SEO data for each plastic injection moulding service
 */

import { PlasticInjectionSEOGenerator, ServiceType, Language } from './PlasticInjectionSEO';

/**
 * Pre-configured SEO data for immediate implementation
 */
export const FLAIR_PLASTIC_SERVICE_SEO = {
  /**
   * Main Plastic Injection Moulding Service
   */
  'plastic-injection-moulding': {
    en: {
      title: "Plastic Injection Moulding Services | Flair Plastic - European Manufacturing Excellence",
      description: "Professional plastic injection moulding services with precision engineering. Custom thermoplastic parts for automotive, medical, and industrial applications with ISO certifications.",
      keywords: [
        "plastic injection moulding",
        "injection molding services", 
        "custom plastic parts",
        "thermoplastic injection",
        "precision molding",
        "automotive plastic parts",
        "medical device molding",
        "injection molding Hungary",
        "European plastic manufacturing"
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Plastic Injection Moulding",
        "description": "Professional plastic injection moulding services with precision engineering for automotive, medical, and industrial applications.",
        "provider": {
          "@type": "Organization",
          "name": "Flair Plastic",
          "url": "https://flair-plastic.hu"
        },
        "serviceType": "Manufacturing Service",
        "category": "Plastic Injection Moulding",
        "areaServed": ["Hungary", "Europe"],
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
        ]
      }
    },
    hu: {
      title: "Műanyag Fröccsöntési Szolgáltatások | Flair Plastic - Európai Gyártási Kiválóság",
      description: "Professzionális műanyag fröccsöntő szolgáltatások precíziós mérnöki munkával. Egyedi termoplasztikus alkatrészek autóipari, orvosi és ipari alkalmazásokhoz ISO tanúsítvánnyal.",
      keywords: [
        "műanyag fröccsöntés",
        "fröccsöntési szolgáltatások",
        "egyedi műanyag alkatrészek",
        "termoplasztikus fröccsöntés",
        "precíziós öntés",
        "autóipari műanyag alkatrészek"
      ]
    },
    de: {
      title: "Kunststoff-Spritzguss-Dienstleistungen | Flair Plastic - Europäische Fertigungsexzellenz",
      description: "Professionelle Kunststoff-Spritzguss-Dienstleistungen mit Präzisionstechnik. Kundenspezifische Thermoplast-Teile für Automotive-, Medizin- und Industrieanwendungen.",
      keywords: [
        "kunststoff spritzguss",
        "spritzguss dienstleistungen",
        "kundenspezifische kunststoffteile",
        "thermoplast spritzguss",
        "präzisions spritzguss"
      ]
    }
  },

  /**
   * In-Mould Decoration (IMD) Service
   */
  'in-mould-decoration': {
    en: {
      title: "In-Mould Decoration (IMD) Services | Flair Plastic - Premium Surface Finishes",
      description: "Advanced In-Mould Decoration (IMD) technology for premium surface finishes. Decorative film integration during injection moulding for automotive interiors and consumer electronics.",
      keywords: [
        "in-mould decoration",
        "IMD technology",
        "decorative injection molding",
        "surface decoration",
        "automotive interior parts",
        "consumer electronics housing",
        "film insert molding",
        "aesthetic molding"
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "In-Mould Decoration (IMD)",
        "description": "Advanced IMD technology for premium surface finishes with decorative film integration during injection moulding.",
        "provider": {
          "@type": "Organization",
          "name": "Flair Plastic"
        },
        "serviceType": "Surface Treatment Service",
        "category": "Decorative Manufacturing",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Applications",
            "value": "Automotive Interiors, Consumer Electronics, Appliance Panels"
          },
          {
            "@type": "PropertyValue",
            "name": "Process",
            "value": "Film Insert Molding, Decorative Film Application"
          }
        ]
      }
    }
  },

  /**
   * In-Mould Labelling (IML) Service
   */
  'in-mould-labelling': {
    en: {
      title: "In-Mould Labelling (IML) Services | Flair Plastic - Integrated Graphics Solutions",
      description: "In-Mould Labelling (IML) solutions for permanent, high-quality graphics. Integrated labeling process for food packaging, industrial marking, and branding applications.",
      keywords: [
        "in-mould labelling",
        "IML technology",
        "label injection molding",
        "integrated labeling",
        "permanent labeling",
        "food packaging",
        "industrial marking",
        "molded-in graphics"
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "In-Mould Labelling (IML)",
        "description": "IML solutions for permanent, high-quality graphics with integrated labeling during injection moulding.",
        "provider": {
          "@type": "Organization",
          "name": "Flair Plastic"
        },
        "serviceType": "Labeling Service",
        "category": "Integrated Manufacturing",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Applications",
            "value": "Food Packaging, Automotive Labeling, Industrial Marking"
          }
        ]
      }
    }
  },

  /**
   * Injection Blow Moulding Service
   */
  'injection-blow': {
    en: {
      title: "Injection Blow Moulding Services | Flair Plastic - Hollow Part Manufacturing",
      description: "Professional injection blow moulding for hollow plastic parts and containers. ISBM process expertise for packaging solutions, automotive components, and medical containers.",
      keywords: [
        "injection blow molding",
        "hollow part manufacturing",
        "bottle molding",
        "plastic container production",
        "ISBM process",
        "packaging solutions",
        "automotive fuel tanks",
        "medical containers"
      ]
    }
  },

  /**
   * Material Selection Service
   */
  'material-selection': {
    en: {
      title: "Material Selection & Consulting | Flair Plastic - Engineering Plastics Expertise",
      description: "Expert plastic material selection and consulting services. Comprehensive polymer analysis and material optimization for automotive, medical, and industrial applications.",
      keywords: [
        "plastic material selection",
        "engineering plastics",
        "material consulting",
        "polymer selection",
        "thermoplastic selection",
        "material testing",
        "automotive materials",
        "medical grade plastics"
      ]
    }
  },

  /**
   * Surface Finishing Service
   */
  'surface-finishing': {
    en: {
      title: "Surface Finishing Services | Flair Plastic - Premium Plastic Part Finishes",
      description: "Professional plastic surface finishing and texture application. Mold texturing, EDM finishing, and chemical etching for automotive, medical, and consumer applications.",
      keywords: [
        "plastic surface finishing",
        "molded part finishing",
        "surface treatments",
        "texture application",
        "mold texturing",
        "EDM finishing",
        "automotive surface quality",
        "medical device surfaces"
      ]
    }
  },

  /**
   * Contract Manufacturing Service
   */
  'contract-manufacturing': {
    en: {
      title: "Contract Manufacturing Services | Flair Plastic - OEM Production Partner",
      description: "Comprehensive contract manufacturing and OEM production services. Turnkey plastic manufacturing solutions with supply chain management and quality systems.",
      keywords: [
        "contract manufacturing",
        "OEM manufacturing",
        "plastic part production",
        "custom manufacturing",
        "turnkey manufacturing",
        "automotive OEM",
        "medical contract manufacturing",
        "supply chain management"
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Contract Manufacturing",
        "description": "Comprehensive contract manufacturing and OEM production services for plastic components.",
        "provider": {
          "@type": "Organization",
          "name": "Flair Plastic"
        },
        "serviceType": "Manufacturing Service",
        "category": "Contract Manufacturing",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Services",
            "value": "Turnkey Manufacturing, Supply Chain Management, Quality Systems"
          },
          {
            "@type": "PropertyValue",
            "name": "Industries",
            "value": "Automotive OEM, Medical Device Manufacturing, Industrial Production"
          }
        ]
      }
    }
  }
};

/**
 * Generate complete SEO package for any service page
 */
export function generateServiceSEOPackage(
  serviceType: ServiceType,
  language: Language = 'en',
  customOptions?: {
    includeLocalBusiness?: boolean;
    includeFAQs?: boolean;
    includeReviews?: boolean;
  }
) {
  const baseSEO = FLAIR_PLASTIC_SERVICE_SEO[serviceType]?.[language];
  
  if (!baseSEO) {
    // Fallback to generated SEO
    return PlasticInjectionSEOGenerator.generateServiceSEO(serviceType, language);
  }

  // Enhanced package with additional schemas
  const seoPackage = {
    ...baseSEO,
    canonical: `https://flair-plastic.hu/${language !== 'en' ? language + '/' : ''}services/${serviceType}`,
    hreflang: {
      'en': `https://flair-plastic.hu/services/${serviceType}`,
      'hu': `https://flair-plastic.hu/hu/services/${serviceType}`,
      'de': `https://flair-plastic.hu/de/services/${serviceType}`
    },
    structuredData: [
      baseSEO.structuredData,
      // Add breadcrumb schema
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `https://flair-plastic.hu/${language !== 'en' ? language : ''}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `https://flair-plastic.hu/${language !== 'en' ? language + '/' : ''}services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": baseSEO.structuredData.name,
            "item": `https://flair-plastic.hu/${language !== 'en' ? language + '/' : ''}services/${serviceType}`
          }
        ]
      }
    ],
    openGraph: {
      title: baseSEO.title,
      description: baseSEO.description,
      image: `https://flair-plastic.hu/images/services/${serviceType}-hero.jpg`,
      type: 'website' as const,
      url: `https://flair-plastic.hu/${language !== 'en' ? language + '/' : ''}services/${serviceType}`
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: baseSEO.title,
      description: baseSEO.description,
      image: `https://flair-plastic.hu/images/services/${serviceType}-social.jpg`
    }
  };

  // Add FAQ schema if requested
  if (customOptions?.includeFAQs) {
    seoPackage.structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What materials do you use for this service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with a comprehensive range of engineering plastics including ABS, PC, PA, POM, TPU, and specialty materials based on application requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What are your quality certifications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain ISO 9001:2015 certification and follow IATF 16949 automotive standards for precision manufacturing excellence."
          }
        },
        {
          "@type": "Question",
          "name": "What industries do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve automotive, medical device, electronics, consumer goods, and industrial markets across Europe with specialized manufacturing solutions."
          }
        }
      ]
    });
  }

  return seoPackage;
}

/**
 * Quick implementation helper for Next.js pages
 */
export function getServicePageHead(serviceType: ServiceType, language: Language = 'en') {
  const seo = generateServiceSEOPackage(serviceType, language, { includeFAQs: true });
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    canonical: seo.canonical,
    openGraph: seo.openGraph,
    twitter: seo.twitter,
    additionalMetaTags: [
      {
        name: 'robots',
        content: 'index,follow,max-image-preview:large,max-snippet:-1'
      },
      {
        property: 'og:locale',
        content: language === 'en' ? 'en_US' : language === 'hu' ? 'hu_HU' : 'de_DE'
      },
      {
        name: 'author',
        content: 'Flair Plastic'
      }
    ],
    structuredData: seo.structuredData
  };
}

/**
 * Sitemap generation helper
 */
export function generateServicesSitemap(): Array<{
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
  alternateRefs?: Array<{ href: string; hreflang: string }>;
}> {
  const services: ServiceType[] = [
    'plastic-injection-moulding',
    'in-mould-decoration', 
    'in-mould-labelling',
    'injection-blow',
    'material-selection',
    'surface-finishing',
    'tooling-management',
    'assembly',
    'contract-manufacturing',
    'precision-quality'
  ];

  const languages: Language[] = ['en', 'hu', 'de'];
  const baseUrl = 'https://flair-plastic.hu';
  const sitemap: any[] = [];

  services.forEach(service => {
    languages.forEach(language => {
      const url = `${baseUrl}/${language !== 'en' ? language + '/' : ''}services/${service}`;
      
      sitemap.push({
        loc: url,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: service === 'plastic-injection-moulding' ? 'weekly' : 'monthly',
        priority: service === 'plastic-injection-moulding' ? 1.0 : 0.8,
        alternateRefs: languages.map(lang => ({
          href: `${baseUrl}/${lang !== 'en' ? lang + '/' : ''}services/${service}`,
          hreflang: lang
        }))
      });
    });
  });

  return sitemap;
}