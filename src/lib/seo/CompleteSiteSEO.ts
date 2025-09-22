/**
 * COMPLETE PROFESSIONAL SEO CONFIGURATION
 * Premium positioning for ALL pages across Flair Plastic website
 * Industry-leading manufacturing company professional SEO system
 */

export interface CompleteProfessionalSEO {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: string;
  };
  structuredData: Record<string, unknown>[];
}

/**
 * PROFESSIONAL SEO FOR ALL WEBSITE PAGES
 */
const CompleteSiteSEO = {

  // ===== MAIN PAGES =====

  /**
   * HOME PAGE - Premium Manufacturing Authority
   */
  homepage: {
    title: "Flair Plastic | Industry-Leading European Manufacturing Solutions | ISO 9001 Certified",
    description: "Premium plastic manufacturing excellence since 1993. Advanced injection moulding, luxury decoration technologies, and professional contract manufacturing. Trusted by automotive, medical & premium brands across Europe.",
    url: "/",
    keywords: [
      "premium plastic manufacturing Europe",
      "industry-leading injection moulding",
      "ISO 9001 certified manufacturing",
      "automotive plastic components",
      "medical device manufacturing",
      "luxury manufacturing solutions"
    ],
    openGraph: {
      title: "Flair Plastic - Industry-Leading European Manufacturing Excellence",
      description: "30+ years of manufacturing excellence. Advanced plastic solutions for automotive, medical & premium applications. ISO certified quality.",
      image: "https://flair-plastic.hu/images/flair-plastic-manufacturing-excellence.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ManufacturingBusiness",
        "name": "Flair Plastic KFT - Industry-Leading Manufacturing Solutions",
        "description": "European leader in premium plastic manufacturing with 30+ years of excellence in advanced injection moulding, luxury decoration technologies, and professional contract manufacturing services.",
        "foundingDate": "1993",
        "slogan": "Manufacturing Excellence Since 1993",
        "award": ["ISO 9001:2015", "Automotive Industry Certified", "Medical Device Manufacturing"],
        "knowsAbout": ["Advanced Plastic Manufacturing", "Injection Moulding Excellence", "Luxury Decoration Technologies"]
      }
    ]
  } as CompleteProfessionalSEO,

  /**
   * ABOUT PAGE - Corporate Authority & Heritage
   */
  about: {
    title: "About Flair Plastic | 30+ Years Manufacturing Excellence | European Industry Leader",
    description: "Discover Flair Plastic's journey to manufacturing leadership. From 1993 startup to European industry authority in advanced plastic solutions. ISO certified quality, sustainable innovation, trusted partnerships.",
    url: "/company",
    keywords: [
      "Flair Plastic company history",
      "European manufacturing leader",
      "30 years manufacturing excellence",
      "ISO certified plastic company",
      "sustainable manufacturing innovation",
      "automotive manufacturing partner"
    ],
    openGraph: {
      title: "About Flair Plastic - 30+ Years of Manufacturing Leadership",
      description: "From Hungarian startup to European manufacturing authority. Discover our journey of innovation, quality excellence, and industry leadership.",
      image: "https://flair-plastic.hu/images/company/flair-plastic-company-heritage.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Flair Plastic Manufacturing Excellence",
        "description": "Corporate heritage of manufacturing excellence, innovation leadership, and industry authority in advanced plastic solutions."
      }
    ]
  } as CompleteProfessionalSEO,

  /**
   * CONTACT PAGE - Professional Business Contact
   */
  contact: {
    title: "Contact Flair Plastic | Professional Manufacturing Inquiries | European Operations",
    description: "Connect with Flair Plastic's manufacturing experts. Professional consultation, project quotes, and partnership opportunities. Serving automotive, medical & premium brands across Europe.",
    url: "/contact",
    keywords: [
      "Flair Plastic contact manufacturing",
      "professional manufacturing consultation",
      "European plastic manufacturing contact",
      "automotive manufacturing inquiries",
      "medical device manufacturing contact",
      "premium manufacturing partnership"
    ],
    openGraph: {
      title: "Contact Flair Plastic - Professional Manufacturing Consultation",
      description: "Connect with our manufacturing experts for professional consultation and partnership opportunities across Europe.",
      image: "https://flair-plastic.hu/images/contact/flair-plastic-professional-contact.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Professional Manufacturing Contact - Flair Plastic",
        "description": "Professional manufacturing consultation and partnership opportunities with European industry leaders."
      }
    ]
  } as CompleteProfessionalSEO,

  // ===== CAPABILITY PAGES =====

  /**
   * AUTOMOTIVE CAPABILITIES - Industry Authority
   */
  automotive: {
    title: "Automotive Manufacturing Excellence | OEM Certified Partner | Flair Plastic Europe",
    description: "Premier automotive plastic manufacturing for leading OEMs. Advanced injection moulding, luxury interior components, precision engineering. Tier 1 supplier with automotive industry certifications.",
    url: "/industries/automotive",
    keywords: [
      "automotive plastic manufacturing",
      "OEM certified plastic supplier",
      "automotive interior components",
      "Tier 1 automotive supplier",
      "automotive injection moulding",
      "luxury automotive manufacturing"
    ],
    openGraph: {
      title: "Automotive Manufacturing Excellence - Premier OEM Partner",
      description: "Advanced automotive plastic manufacturing for leading brands. Precision engineering, luxury components, industry certifications.",
      image: "https://flair-plastic.hu/images/industries/automotive-manufacturing-excellence.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Automotive Manufacturing Excellence",
        "provider": {
          "@type": "ManufacturingBusiness",
          "name": "Flair Plastic"
        },
        "areaServed": "Europe",
        "hasCredential": "Automotive Industry Certified"
      }
    ]
  } as CompleteProfessionalSEO,

  /**
   * MEDICAL CAPABILITIES - Precision & Compliance
   */
  medical: {
    title: "Medical Device Manufacturing | Precision Components | Regulatory Compliance | Flair Plastic",
    description: "Precision medical device manufacturing with regulatory compliance expertise. Advanced clean room capabilities, biocompatible materials, medical grade quality systems. Trusted by medical device leaders.",
    url: "/industries/medical",
    keywords: [
      "medical device manufacturing",
      "precision medical components",
      "biocompatible plastic manufacturing",
      "medical grade quality systems",
      "regulatory compliance manufacturing",
      "clean room plastic manufacturing"
    ],
    openGraph: {
      title: "Medical Device Manufacturing - Precision & Compliance Excellence",
      description: "Advanced medical device manufacturing with regulatory compliance and precision quality for healthcare applications.",
      image: "https://flair-plastic.hu/images/industries/medical-device-manufacturing.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Medical Device Manufacturing",
        "provider": {
          "@type": "ManufacturingBusiness",
          "name": "Flair Plastic"
        },
        "hasCredential": "Medical Device Manufacturing Certified"
      }
    ]
  } as CompleteProfessionalSEO,

  /**
   * SUSTAINABILITY - Innovation Leadership
   */
  sustainability: {
    title: "Sustainable Manufacturing Leadership | Green Innovation | Flair Plastic Europe",
    description: "Leading sustainable manufacturing innovation in plastic production. Circular economy solutions, renewable materials, carbon footprint reduction. Environmental responsibility meets manufacturing excellence.",
    url: "/sustainability",
    keywords: [
      "sustainable plastic manufacturing",
      "green manufacturing innovation",
      "circular economy solutions",
      "renewable plastic materials",
      "carbon footprint reduction",
      "environmental manufacturing leadership"
    ],
    openGraph: {
      title: "Sustainable Manufacturing Leadership - Green Innovation Excellence",
      description: "Environmental responsibility meets manufacturing excellence. Leading sustainable solutions in advanced plastic production.",
      image: "https://flair-plastic.hu/images/sustainability/sustainable-manufacturing-leadership.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Sustainable Manufacturing Solutions",
        "provider": {
          "@type": "ManufacturingBusiness",
          "name": "Flair Plastic"
        },
        "category": "Environmental Manufacturing Leadership"
      }
    ]
  } as CompleteProfessionalSEO,

  // ===== COMPANY PAGES =====

  /**
   * CAREERS - Professional Opportunities
   */
  careers: {
    title: "Manufacturing Careers | Professional Opportunities | Join Industry Leaders | Flair Plastic",
    description: "Build your manufacturing career with European industry leaders. Professional development, advanced technology, innovation culture. Join our team of manufacturing excellence professionals.",
    url: "/company/careers",
    keywords: [
      "manufacturing careers opportunities",
      "professional manufacturing jobs",
      "European manufacturing careers",
      "advanced technology careers",
      "manufacturing excellence careers",
      "plastic industry professional jobs"
    ],
    openGraph: {
      title: "Manufacturing Careers - Join Industry Leaders",
      description: "Professional opportunities with European manufacturing leaders. Advanced technology, innovation culture, career development.",
      image: "https://flair-plastic.hu/images/careers/manufacturing-careers-opportunities.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "hiringOrganization": {
          "@type": "ManufacturingBusiness",
          "name": "Flair Plastic"
        },
        "industry": "Advanced Manufacturing",
        "jobLocation": {
          "@type": "Place",
          "address": "Europe"
        }
      }
    ]
  } as CompleteProfessionalSEO,

  /**
   * HISTORY - Heritage & Achievement
   */
  history: {
    title: "Flair Plastic History | Manufacturing Heritage Since 1993 | European Industry Evolution",
    description: "Discover Flair Plastic's manufacturing heritage from 1993 startup to European industry leader. Milestones of innovation, quality achievements, and industry recognition. 30+ years of excellence.",
    url: "/company/history",
    keywords: [
      "Flair Plastic company history",
      "manufacturing heritage since 1993",
      "European plastic industry evolution",
      "manufacturing milestones achievements",
      "30 years manufacturing excellence",
      "industry recognition awards"
    ],
    openGraph: {
      title: "Flair Plastic Heritage - 30+ Years Manufacturing Excellence",
      description: "From startup to industry leader. Discover our journey of manufacturing innovation, quality achievements, and European market leadership.",
      image: "https://flair-plastic.hu/images/company/flair-plastic-heritage-timeline.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Flair Plastic Manufacturing Heritage",
        "description": "Corporate heritage showcasing 30+ years of manufacturing excellence, innovation milestones, and industry leadership evolution."
      }
    ]
  } as CompleteProfessionalSEO,

  /**
   * MANAGEMENT - Leadership Excellence
   */
  management: {
    title: "Leadership Team | Management Excellence | Industry Expertise | Flair Plastic Europe",
    description: "Meet Flair Plastic's leadership team driving manufacturing excellence across Europe. Decades of industry expertise, innovation vision, and strategic leadership in advanced manufacturing solutions.",
    url: "/company/management",
    keywords: [
      "Flair Plastic leadership team",
      "manufacturing management excellence",
      "industry expertise leadership",
      "European manufacturing executives",
      "strategic manufacturing leadership",
      "advanced manufacturing vision"
    ],
    openGraph: {
      title: "Leadership Excellence - Manufacturing Industry Expertise",
      description: "Meet our leadership team driving European manufacturing excellence with decades of industry expertise and innovation vision.",
      image: "https://flair-plastic.hu/images/company/leadership-excellence-team.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Leadership Excellence - Flair Plastic Management",
        "description": "Executive leadership team with decades of manufacturing expertise driving innovation and excellence across European markets."
      }
    ]
  } as CompleteProfessionalSEO,

  // ===== PRODUCTS & RESOURCES =====

  /**
   * PRODUCTS OVERVIEW - Solution Authority
   */
  products: {
    title: "Advanced Manufacturing Solutions | Premium Product Portfolio | Flair Plastic Europe",
    description: "Comprehensive manufacturing solutions portfolio. Advanced injection moulding, luxury decoration technologies, precision components. Custom solutions for automotive, medical & premium applications.",
    url: "/products",
    keywords: [
      "advanced manufacturing solutions",
      "premium product portfolio",
      "custom manufacturing solutions",
      "precision component manufacturing",
      "luxury manufacturing technologies",
      "comprehensive manufacturing services"
    ],
    openGraph: {
      title: "Advanced Manufacturing Solutions - Premium Product Portfolio",
      description: "Comprehensive manufacturing solutions for automotive, medical & premium applications. Advanced technologies, precision quality.",
      image: "https://flair-plastic.hu/images/products/advanced-manufacturing-solutions.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Advanced Manufacturing Solutions",
        "manufacturer": {
          "@type": "ManufacturingBusiness",
          "name": "Flair Plastic"
        },
        "category": "Premium Manufacturing Solutions"
      }
    ]
  } as CompleteProfessionalSEO,

  /**
   * RESOURCES - Knowledge Leadership
   */
  resources: {
    title: "Manufacturing Resources | Industry Knowledge | Technical Expertise | Flair Plastic",
    description: "Access manufacturing industry knowledge and technical expertise. Professional insights, technical guides, industry trends, and manufacturing best practices from European industry leaders.",
    url: "/resources",
    keywords: [
      "manufacturing industry resources",
      "technical expertise knowledge",
      "professional manufacturing insights",
      "industry trends analysis",
      "manufacturing best practices",
      "technical manufacturing guides"
    ],
    openGraph: {
      title: "Manufacturing Resources - Industry Knowledge & Technical Expertise",
      description: "Professional insights, technical guides, and manufacturing best practices from European industry leaders.",
      image: "https://flair-plastic.hu/images/resources/manufacturing-knowledge-resources.jpg",
      type: "website"
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Manufacturing Industry Resources",
        "description": "Comprehensive manufacturing knowledge base with technical expertise, industry insights, and professional best practices."
      }
    ]
  } as CompleteProfessionalSEO

};

/**
 * PROFESSIONAL URL STRUCTURE FOR ALL PAGES
 */
const ProfessionalSiteURLs = {
  main: {
    // Current → Professional URLs
    "/": "/",
    "/company": "/manufacturing-excellence-since-1993",
    "/contact": "/professional-manufacturing-consultation", 
    "/industries/automotive": "/automotive-manufacturing-excellence",
    "/industries/medical": "/medical-device-manufacturing-precision",
    "/sustainability": "/sustainable-manufacturing-leadership",
    "/products": "/advanced-manufacturing-solutions",
    "/resources": "/manufacturing-knowledge-resources"
  },
  
  company: {
    "/company/careers": "/careers/manufacturing-excellence-opportunities",
    "/company/history": "/company/manufacturing-heritage-since-1993",
    "/company/management": "/leadership/manufacturing-industry-expertise"
  },
  
  // Service URLs (already implemented)
  services: {
    "/services/plastic-injection-moulding": "/services/precision-plastic-injection-moulding",
    "/services/in-mould-labelling": "/services/advanced-in-mould-labelling-iml",
    "/services/in-mould-decoration": "/services/luxury-in-mould-decoration-imd",
    "/services/contract-manufacturing": "/services/professional-contract-manufacturing",
    "/services/surface-finishing": "/services/advanced-surface-finishing-solutions",
    "/services/assembly": "/services/professional-assembly-integration"
  }
};

/**
 * INDUSTRY-SPECIFIC PROFESSIONAL PAGES
 */
const IndustrySpecificSEO = {
  automotive: {
    en: {
      title: "Automotive Manufacturing Excellence | OEM Certified Partner | ISO/TS 16949 | Flair Plastic",
      description: "OEM certified automotive manufacturing partner. ISO/TS 16949 quality systems, precision plastic components, advanced tooling capabilities. Trusted by automotive industry leaders across Europe.",
      keywords: [
        "automotive manufacturing excellence",
        "OEM certified automotive partner", 
        "ISO TS 16949 automotive quality",
        "precision automotive components",
        "automotive plastic injection",
        "automotive manufacturing solutions"
      ],
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Flair Plastic - Automotive Manufacturing Division",
          "description": "OEM certified automotive manufacturing partner with ISO/TS 16949 compliance and precision component expertise.",
          "certifications": ["ISO/TS 16949", "ISO 9001:2015"],
          "serviceArea": "European Automotive Industry"
        }
      ]
    },
    hu: {
      title: "Autóipari Gyártási Kiválóság | OEM Minősített Partner | ISO/TS 16949 | Flair Plastic",
      description: "OEM minősített autóipari gyártási partner. ISO/TS 16949 minőségbiztosítás, precíziós műanyag alkatrészek, fejlett szerszámozási képességek. Megbízható európai autóipari vezető.",
      keywords: [
        "autóipari gyártási kiválóság",
        "OEM minősített autóipari partner",
        "ISO TS 16949 autóipari minőség",
        "precíziós autóipari alkatrészek",
        "autóipari műanyag fröccsöntés",
        "autóipari gyártási megoldások"
      ],
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Flair Plastic - Autóipari Gyártási Részleg",
          "description": "OEM minősített autóipari gyártási partner ISO/TS 16949 megfelelőséggel és precíziós alkatrész szakértelemmel."
        }
      ]
    }
  },
  
  medical: {
    en: {
      title: "Medical Device Manufacturing | FDA Approved Facility | ISO 13485 Certified | Flair Plastic", 
      description: "FDA approved medical device manufacturing facility. ISO 13485 certified cleanroom production, regulatory compliance expertise, precision medical components. Trusted healthcare partner.",
      keywords: [
        "medical device manufacturing",
        "FDA approved medical facility",
        "ISO 13485 medical certification",
        "cleanroom medical production",
        "regulatory compliance manufacturing",
        "precision medical components"
      ],
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Organization", 
          "name": "Flair Plastic - Medical Device Division",
          "description": "FDA approved and ISO 13485 certified medical device manufacturing with cleanroom capabilities and regulatory expertise.",
          "certifications": ["ISO 13485", "FDA Approved", "ISO 9001:2015"],
          "serviceArea": "European Medical Device Industry"
        }
      ]
    },
    hu: {
      title: "Orvosi Eszköz Gyártás | FDA Jóváhagyott Létesítmény | ISO 13485 Minősített | Flair Plastic",
      description: "FDA jóváhagyott orvosi eszköz gyártó létesítmény. ISO 13485 minősített tisztatér gyártás, szabályozási megfelelőségi szakértelem, precíziós orvosi alkatrészek.",
      keywords: [
        "orvosi eszköz gyártás",
        "FDA jóváhagyott orvosi létesítmény",
        "ISO 13485 orvosi minősítés",
        "tisztatér orvosi gyártás",
        "szabályozási megfelelőségi gyártás",
        "precíziós orvosi alkatrészek"
      ],
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Flair Plastic - Orvosi Eszköz Részleg", 
          "description": "FDA jóváhagyott és ISO 13485 minősített orvosi eszköz gyártás tisztatér képességekkel és szabályozási szakértelemmel."
        }
      ]
    }
  },
  
  consumerProducts: {
    title: "Premium Consumer Product Manufacturing | Luxury Brand Solutions | Flair Plastic",
    description: "Premium consumer product manufacturing for luxury brands. Advanced decoration technologies, sustainable materials, innovative design solutions. Trusted by leading consumer brands across Europe.",
    url: "/industries/consumer-products",
    keywords: [
      "premium consumer product manufacturing",
      "luxury brand manufacturing solutions",
      "advanced consumer product decoration",
      "sustainable consumer manufacturing",
      "innovative consumer product design",
      "European consumer brand manufacturing"
    ]
  },
  
  packaging: {
    title: "Advanced Packaging Solutions | Sustainable Packaging Manufacturing | Flair Plastic",
    description: "Advanced packaging manufacturing solutions with sustainability focus. Innovative packaging designs, lightweight solutions, circular economy materials. Premium packaging for leading brands.",
    url: "/industries/packaging", 
    keywords: [
      "advanced packaging solutions",
      "sustainable packaging manufacturing",
      "innovative packaging design",
      "lightweight packaging solutions",
      "circular economy packaging",
      "premium brand packaging"
    ]
  }
};

export {
  CompleteSiteSEO,
  ProfessionalSiteURLs,
  IndustrySpecificSEO
};