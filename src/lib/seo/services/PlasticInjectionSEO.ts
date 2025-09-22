/**
 * Specialized SEO System for Plastic Injection Moulding Services
 * Granular, page-specific optimization for manufacturing services
 */

export type Language = 'en' | 'hu' | 'de';
export type ServiceType = 
  | 'plastic-injection-moulding'
  | 'in-mould-decoration'
  | 'in-mould-labelling'
  | 'injection-blow'
  | 'material-selection'
  | 'surface-finishing'
  | 'tooling-management'
  | 'assembly'
  | 'contract-manufacturing'
  | 'precision-quality';

export interface PlasticInjectionSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  hreflang: Record<Language, string>;
  structuredData: object[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: 'website';
    url: string;
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    image: string;
  };
  technical: {
    robotsDirectives: string;
    priorityLevel: number; // 0.1 to 1.0 for sitemap
    changeFrequency: 'daily' | 'weekly' | 'monthly';
    lastModified: string;
  };
}

export interface ServiceSpecification {
  processType: string;
  materials: string[];
  applications: string[];
  tolerances: string;
  volumes: string;
  industries: string[];
  certifications: string[];
  equipment: string[];
}

/**
 * Core SEO generator for plastic injection moulding services
 */
export class PlasticInjectionSEOGenerator {
  private static readonly BASE_URL = 'https://flair-plastic.hu';
  private static readonly COMPANY_NAME = 'Flair Plastic';
  
  // Manufacturing-specific keyword clusters
  private static readonly KEYWORD_CLUSTERS = {
    'plastic-injection-moulding': {
      primary: ['plastic injection moulding', 'injection molding services', 'custom plastic parts'],
      secondary: ['thermoplastic injection', 'precision molding', 'plastic manufacturing'],
      technical: ['insert molding', 'overmolding', 'multi-shot molding'],
      industry: ['automotive plastic parts', 'medical device molding', 'consumer goods manufacturing'],
      location: ['injection molding Hungary', 'European plastic manufacturing']
    },
    'in-mould-decoration': {
      primary: ['in-mould decoration', 'IMD technology', 'decorative injection molding'],
      secondary: ['surface decoration', 'plastic part finishing', 'aesthetic molding'],
      technical: ['film insert molding', 'IMD process', 'decorative film application'],
      industry: ['automotive interior parts', 'consumer electronics housing', 'appliance panels'],
      location: ['IMD services Europe', 'decorative molding Hungary']
    },
    'in-mould-labelling': {
      primary: ['in-mould labelling', 'IML technology', 'label injection molding'],
      secondary: ['integrated labeling', 'permanent labeling', 'molded-in graphics'],
      technical: ['IML process', 'label fusion molding', 'integrated graphics'],
      industry: ['food packaging', 'automotive labeling', 'industrial marking'],
      location: ['IML services Hungary', 'European labeling solutions']
    },
    'injection-blow': {
      primary: ['injection blow molding', 'hollow part manufacturing', 'bottle molding'],
      secondary: ['plastic container production', 'hollow plastic parts', 'blow molding services'],
      technical: ['ISBM process', 'preform injection', 'stretch blow molding'],
      industry: ['packaging solutions', 'automotive fuel tanks', 'medical containers'],
      location: ['blow molding Hungary', 'European container manufacturing']
    },
    'material-selection': {
      primary: ['plastic material selection', 'engineering plastics', 'material consulting'],
      secondary: ['polymer selection', 'plastic properties', 'material optimization'],
      technical: ['thermoplastic selection', 'material testing', 'polymer analysis'],
      industry: ['automotive materials', 'medical grade plastics', 'industrial polymers'],
      location: ['material experts Hungary', 'European plastic consulting']
    },
    'surface-finishing': {
      primary: ['plastic surface finishing', 'molded part finishing', 'surface treatments'],
      secondary: ['texture application', 'surface enhancement', 'finishing processes'],
      technical: ['mold texturing', 'EDM finishing', 'chemical etching'],
      industry: ['automotive surface quality', 'consumer goods finishing', 'medical device surfaces'],
      location: ['surface finishing Hungary', 'European plastic finishing']
    },
    'tooling-management': {
      primary: ['injection mold tooling', 'mold management', 'tooling services'],
      secondary: ['mold maintenance', 'tool optimization', 'mold design'],
      technical: ['mold validation', 'tool lifecycle', 'precision tooling'],
      industry: ['automotive tooling', 'medical mold management', 'industrial tooling'],
      location: ['mold services Hungary', 'European tooling management']
    },
    'assembly': {
      primary: ['plastic part assembly', 'component assembly', 'manufacturing assembly'],
      secondary: ['product assembly', 'sub-assembly services', 'integrated assembly'],
      technical: ['ultrasonic welding', 'mechanical assembly', 'adhesive bonding'],
      industry: ['automotive assembly', 'electronics assembly', 'medical device assembly'],
      location: ['assembly services Hungary', 'European manufacturing assembly']
    },
    'contract-manufacturing': {
      primary: ['contract manufacturing', 'OEM manufacturing', 'plastic part production'],
      secondary: ['custom manufacturing', 'production services', 'manufacturing partner'],
      technical: ['turnkey manufacturing', 'supply chain management', 'quality systems'],
      industry: ['automotive OEM', 'medical contract manufacturing', 'industrial production'],
      location: ['contract manufacturing Hungary', 'European OEM services']
    },
    'precision-quality': {
      primary: ['precision plastic molding', 'quality manufacturing', 'precision injection molding'],
      secondary: ['high precision parts', 'quality control', 'manufacturing excellence'],
      technical: ['dimensional accuracy', 'quality systems', 'process control'],
      industry: ['medical precision parts', 'automotive precision', 'aerospace quality'],
      location: ['precision manufacturing Hungary', 'European quality standards']
    }
  };

  /**
   * Generate comprehensive SEO for any plastic injection service
   */
  static generateServiceSEO(
    serviceType: ServiceType,
    language: Language = 'en',
    customData?: Partial<{
      specifications: ServiceSpecification;
      customKeywords: string[];
      focusMarkets: string[];
    }>
  ): PlasticInjectionSEOData {
    const keywords = this.KEYWORD_CLUSTERS[serviceType];
    const baseKeywords = [
      ...keywords.primary,
      ...keywords.secondary.slice(0, 2),
      ...keywords.technical.slice(0, 2),
      ...(customData?.customKeywords || [])
    ];

    const serviceName = this.formatServiceName(serviceType);
    const serviceDescription = this.generateServiceDescription(serviceType, language);
    
    return {
      title: this.generateTitle(serviceType, language),
      description: serviceDescription,
      keywords: baseKeywords,
      canonical: `${this.BASE_URL}/${language !== 'en' ? language + '/' : ''}services/${serviceType}`,
      hreflang: {
        'en': `${this.BASE_URL}/services/${serviceType}`,
        'hu': `${this.BASE_URL}/hu/services/${serviceType}`,
        'de': `${this.BASE_URL}/de/services/${serviceType}`
      },
      structuredData: [
        this.generateOrganizationSchema(),
        this.generateServiceSchema(serviceType, language, customData?.specifications),
        this.generateBreadcrumbSchema(serviceType, language),
        this.generateFAQSchema(serviceType, language),
        this.generateWebPageSchema(serviceType, language)
      ],
      openGraph: {
        title: this.generateTitle(serviceType, language),
        description: serviceDescription,
        image: `${this.BASE_URL}/images/services/${serviceType}-hero.jpg`,
        type: 'website' as const,
        url: `${this.BASE_URL}/${language !== 'en' ? language + '/' : ''}services/${serviceType}`
      },
      twitter: {
        card: 'summary_large_image' as const,
        title: this.generateTitle(serviceType, language),
        description: serviceDescription,
        image: `${this.BASE_URL}/images/services/${serviceType}-social.jpg`
      },
      technical: {
        robotsDirectives: 'index,follow,max-image-preview:large,max-snippet:-1',
        priorityLevel: this.calculatePriority(serviceType),
        changeFrequency: this.getChangeFrequency(serviceType),
        lastModified: new Date().toISOString()
      }
    };
  }

  /**
   * Generate service-specific structured data schemas
   */
  private static generateServiceSchema(
    serviceType: ServiceType,
    language: Language,
    specifications?: ServiceSpecification
  ): object {
    const serviceName = this.formatServiceName(serviceType);
    const keywords = this.KEYWORD_CLUSTERS[serviceType];
    
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${this.BASE_URL}/services/${serviceType}#service`,
      "name": serviceName,
      "alternateName": keywords.primary,
      "description": this.generateServiceDescription(serviceType, language),
      "provider": {
        "@type": "Organization",
        "@id": `${this.BASE_URL}#organization`,
        "name": this.COMPANY_NAME,
        "url": this.BASE_URL
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Hungary",
          "sameAs": "https://en.wikipedia.org/wiki/Hungary"
        },
        {
          "@type": "Place",
          "name": "Europe",
          "sameAs": "https://en.wikipedia.org/wiki/Europe"
        }
      ],
      "serviceType": "Manufacturing Service",
      "category": "Plastic Injection Moulding",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceName} Solutions`,
        "itemListElement": this.generateServiceOfferings(serviceType, specifications)
      },
      "additionalProperty": specifications ? [
        {
          "@type": "PropertyValue",
          "name": "Materials",
          "value": specifications.materials.join(", ")
        },
        {
          "@type": "PropertyValue", 
          "name": "Industries",
          "value": specifications.industries.join(", ")
        },
        {
          "@type": "PropertyValue",
          "name": "Certifications",
          "value": specifications.certifications.join(", ")
        }
      ] : [],
      "url": `${this.BASE_URL}/services/${serviceType}`,
      "sameAs": [
        `${this.BASE_URL}/hu/services/${serviceType}`,
        `${this.BASE_URL}/de/services/${serviceType}`
      ]
    };
  }

  /**
   * Generate FAQ schema for service pages
   */
  private static generateFAQSchema(serviceType: ServiceType, language: Language): object {
    const faqs = this.getServiceFAQs(serviceType, language);
    
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  /**
   * Generate WebPage schema
   */
  private static generateWebPageSchema(serviceType: ServiceType, language: Language): object {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${this.BASE_URL}/services/${serviceType}#webpage`,
      "url": `${this.BASE_URL}/${language !== 'en' ? language + '/' : ''}services/${serviceType}`,
      "name": this.generateTitle(serviceType, language),
      "description": this.generateServiceDescription(serviceType, language),
      "inLanguage": language,
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${this.BASE_URL}#website`,
        "name": this.COMPANY_NAME,
        "url": this.BASE_URL
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "@id": `${this.BASE_URL}/services/${serviceType}#breadcrumb`
      },
      "mainEntity": {
        "@type": "Service",
        "@id": `${this.BASE_URL}/services/${serviceType}#service`
      },
      "potentialAction": {
        "@type": "ReadAction",
        "target": `${this.BASE_URL}/services/${serviceType}`
      }
    };
  }

  /**
   * Generate organization schema
   */
  private static generateOrganizationSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness", "Manufacturer"],
      "@id": `${this.BASE_URL}#organization`,
      "name": this.COMPANY_NAME,
      "alternateName": ["Flair Plastic Kft", "Flair Plastic Hungary"],
      "url": this.BASE_URL,
      "logo": `${this.BASE_URL}/images/flair-plastic-logo.png`,
      "description": "Leading European manufacturer specializing in precision plastic injection moulding, IMD, IML, and contract manufacturing services.",
      "foundingDate": "1995",
      "numberOfEmployees": "50-100",
      "industry": "Plastic Manufacturing",
      "naics": "326199",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "HU",
        "addressLocality": "Hungary",
        "addressRegion": "Europe"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+36-1-XXX-XXXX",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Hungarian", "German"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/flair-plastic",
        "https://www.facebook.com/flairplastic"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Plastic Manufacturing Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Injection Moulding Services"
          },
          {
            "@type": "OfferCatalog", 
            "name": "Surface Finishing Services"
          },
          {
            "@type": "OfferCatalog",
            "name": "Contract Manufacturing Services"
          }
        ]
      }
    };
  }

  /**
   * Generate breadcrumb schema
   */
  private static generateBreadcrumbSchema(serviceType: ServiceType, language: Language): object {
    const serviceName = this.formatServiceName(serviceType);
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${this.BASE_URL}/services/${serviceType}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${this.BASE_URL}/${language !== 'en' ? language : ''}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${this.BASE_URL}/${language !== 'en' ? language + '/' : ''}services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": serviceName,
          "item": `${this.BASE_URL}/${language !== 'en' ? language + '/' : ''}services/${serviceType}`
        }
      ]
    };
  }

  // Helper methods
  
  private static formatServiceName(serviceType: ServiceType): string {
    const nameMap: Record<ServiceType, string> = {
      'plastic-injection-moulding': 'Plastic Injection Moulding',
      'in-mould-decoration': 'In-Mould Decoration (IMD)',
      'in-mould-labelling': 'In-Mould Labelling (IML)', 
      'injection-blow': 'Injection Blow Moulding',
      'material-selection': 'Material Selection & Consulting',
      'surface-finishing': 'Surface Finishing Services',
      'tooling-management': 'Tooling Management',
      'assembly': 'Assembly Services',
      'contract-manufacturing': 'Contract Manufacturing',
      'precision-quality': 'Precision & Quality Control'
    };
    
    return nameMap[serviceType] || serviceType.replace(/-/g, ' ');
  }

  private static generateTitle(serviceType: ServiceType, language: Language): string {
    const serviceName = this.formatServiceName(serviceType);
    const translations = {
      'en': `${serviceName} Services | ${this.COMPANY_NAME} - European Manufacturing Excellence`,
      'hu': `${serviceName} Szolgáltatások | ${this.COMPANY_NAME} - Európai Gyártási Kiválóság`,
      'de': `${serviceName} Dienstleistungen | ${this.COMPANY_NAME} - Europäische Fertigungsexzellenz`
    };
    
    return translations[language];
  }

  private static generateServiceDescription(serviceType: ServiceType, language: Language): string {
    const descriptions = {
      'plastic-injection-moulding': {
        'en': 'Professional plastic injection moulding services with precision engineering. Custom thermoplastic parts for automotive, medical, and industrial applications with ISO certifications.',
        'hu': 'Professzionális műanyag fröccsöntő szolgáltatások precíziós mérnöki munkával. Egyedi termoplasztikus alkatrészek autóipari, orvosi és ipari alkalmazásokhoz ISO tanúsítvánnyal.',
        'de': 'Professionelle Kunststoff-Spritzguss-Dienstleistungen mit Präzisionstechnik. Kundenspezifische Thermoplast-Teile für Automotive-, Medizin- und Industrieanwendungen mit ISO-Zertifizierungen.'
      },
      'in-mould-decoration': {
        'en': 'Advanced In-Mould Decoration (IMD) technology for premium surface finishes. Decorative film integration during injection moulding for automotive interiors and consumer electronics.',
        'hu': 'Fejlett szerszámban díszítési (IMD) technológia prémium felületkezeléshez. Dekoratív fólia integráció fröccsöntés során autóipari belterekhez és fogyasztói elektronikához.',
        'de': 'Fortschrittliche In-Mould-Decoration (IMD) Technologie für Premium-Oberflächenveredelung. Dekorativfolien-Integration während des Spritzgusses für Automotive-Interieurs und Verbraucherelektronik.'
      },
      'in-mould-labelling': {
        'en': 'In-Mould Labelling (IML) solutions for permanent, high-quality graphics. Integrated labeling process for food packaging, industrial marking, and branding applications.',
        'hu': 'Szerszámban címkézési (IML) megoldások tartós, magas minőségű grafikákhoz. Integrált címkézési folyamat élelmiszer-csomagoláshoz, ipari jelöléshez és márkaépítési alkalmazásokhoz.',
        'de': 'In-Mould-Labelling (IML) Lösungen für permanente, hochwertige Grafiken. Integrierter Etikettierungsprozess für Lebensmittelverpackungen, industrielle Kennzeichnung und Branding-Anwendungen.'
      }
      // Add more service descriptions as needed
    };
    
    return descriptions[serviceType]?.[language] || `Professional ${this.formatServiceName(serviceType).toLowerCase()} services with European manufacturing excellence.`;
  }

  private static generateServiceOfferings(serviceType: ServiceType, specifications?: ServiceSpecification): object[] {
    const baseOfferings = [
      {
        "@type": "Offer",
        "name": "Custom Manufacturing",
        "description": "Tailored solutions for specific requirements"
      },
      {
        "@type": "Offer", 
        "name": "Prototype Development",
        "description": "Rapid prototyping and testing services"
      },
      {
        "@type": "Offer",
        "name": "Volume Production",
        "description": "Scalable manufacturing for high volumes"
      }
    ];

    if (specifications) {
      baseOfferings.push({
        "@type": "Offer",
        "name": "Material Consulting",
        "description": `Expert guidance on ${specifications.materials.join(", ")} selection`
      });
    }

    return baseOfferings;
  }

  private static getServiceFAQs(serviceType: ServiceType, language: Language): Array<{question: string; answer: string}> {
    // Sample FAQs - customize for each service
    return [
      {
        question: `What materials can be used for ${this.formatServiceName(serviceType).toLowerCase()}?`,
        answer: "We work with a comprehensive range of thermoplastics including ABS, PC, PA, POM, TPU, and engineering grades for specific applications."
      },
      {
        question: "What quality standards do you follow?",
        answer: "We maintain ISO 9001:2015 certification and follow automotive IATF 16949 standards for precision manufacturing."
      },
      {
        question: "What are your typical lead times?",
        answer: "Lead times vary based on complexity, but typically range from 2-6 weeks for tooling and 1-3 weeks for production runs."
      }
    ];
  }

  private static calculatePriority(serviceType: ServiceType): number {
    const priorityMap: Record<ServiceType, number> = {
      'plastic-injection-moulding': 1.0,
      'contract-manufacturing': 0.9,
      'in-mould-decoration': 0.8,
      'in-mould-labelling': 0.8,
      'tooling-management': 0.7,
      'material-selection': 0.7,
      'precision-quality': 0.7,
      'surface-finishing': 0.6,
      'injection-blow': 0.6,
      'assembly': 0.5
    };
    
    return priorityMap[serviceType] || 0.5;
  }

  private static getChangeFrequency(serviceType: ServiceType): 'daily' | 'weekly' | 'monthly' {
    if (serviceType === 'plastic-injection-moulding' || serviceType === 'contract-manufacturing') {
      return 'weekly';
    }
    return 'monthly';
  }
}