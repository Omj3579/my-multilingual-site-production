import { 
  Organization, 
  LocalBusiness, 
  Service,
  Product as SchemaProduct,
  FAQPage,
  VideoObject,
  Review,
  Event,
  Certificate
} from 'schema-dts';

export interface ManufacturingProcessData {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    description: string;
    duration?: string;
    equipment?: string[];
  }>;
  capabilities: string[];
  certifications: string[];
  sustainabilityFeatures: string[];
}

export interface ProductSpecification {
  id: string;
  name: string;
  description: string;
  category: string;
  materials: string[];
  dimensions?: {
    length?: string;
    width?: string;
    height?: string;
    weight?: string;
  };
  manufacturingProcess: string;
  sustainability?: {
    recycledContent?: string;
    recyclable?: boolean;
    carbonFootprint?: string;
  };
  certifications: string[];
  applications: string[];
  customizable: boolean;
}

export class ManufacturingSchemaGenerator {
  private static baseUrl = 'https://flair-plastic.hu';

  /**
   * Enhanced Organization + LocalBusiness Schema for Manufacturing
   */
  static generateManufacturingOrganizationSchema(): Organization & LocalBusiness {
    return {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness', 'Manufacturer'],
      '@id': `${this.baseUrl}/#organization`,
      name: 'Flair Plastic Manufacturing',
      legalName: 'Flair Plastic Kft.',
      alternateName: ['Flair Plastic', 'Flair Manufacturing', 'Flair Plastics'],
      description: 'Leading European plastic injection molding and contract manufacturing company specializing in sustainable manufacturing solutions with ISO 9001:2015 certification and advanced automation.',
      url: this.baseUrl,
      logo: `${this.baseUrl}/logos/flair_plastic_logo_cmyk_full_-_MAIN.png`,
      image: [
        `${this.baseUrl}/images/facility-exterior.jpg`,
        `${this.baseUrl}/images/production-floor.jpg`,
        `${this.baseUrl}/images/quality-control.jpg`
      ],
      
      // Business Details
      foundingDate: '2010-03-15',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 85,
        unitText: 'employees'
      },
      
      // Location & Contact
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Industrial Park, Building 12',
        addressLocality: 'Budapest',
        addressRegion: 'Central Hungary',
        postalCode: '1117',
        addressCountry: 'HU'
      },
      
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+36-1-234-5678',
          email: 'info@flair-plastic.hu',
          availableLanguage: ['English', 'Hungarian', 'German'],
          areaServed: ['Europe', 'North America', 'Asia-Pacific'],
          serviceUrl: `${this.baseUrl}/contact`
        },
        {
          '@type': 'ContactPoint',
          contactType: 'technical support',
          telephone: '+36-1-234-5679',
          email: 'technical@flair-plastic.hu',
          availableLanguage: ['English', 'Hungarian', 'German']
        },
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+36-1-234-5680',
          email: 'sales@flair-plastic.hu',
          availableLanguage: ['English', 'Hungarian', 'German']
        }
      ],
      
      // Social Media & Web Presence
      sameAs: [
        'https://www.linkedin.com/company/flair-plastic',
        'https://twitter.com/flairplastic',
        'https://www.facebook.com/flairplastic',
        'https://www.youtube.com/c/flairplastic',
        'https://www.instagram.com/flairplastic'
      ],
      
      // Business Categories
      industry: [
        'Plastic Manufacturing',
        'Injection Molding',
        'Contract Manufacturing',
        'Sustainable Manufacturing'
      ],
      
      // Service Areas & Capabilities
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 47.4979,
          longitude: 19.0402
        },
        geoRadius: '2000000' // 2000km radius
      },
      
      // Certifications & Awards
      award: [
        'ISO 9001:2015 Quality Management',
        'ISO 14001:2015 Environmental Management',
        'IATF 16949:2016 Automotive Quality',
        'European Sustainability Excellence Award 2023',
        'Innovation in Manufacturing Award 2024'
      ],
      
      // Equipment & Capabilities
      owns: [
        {
          '@type': 'Product',
          name: 'Injection Molding Machines',
          description: '45 state-of-the-art injection molding machines ranging from 50 to 1000 tons'
        },
        {
          '@type': 'Product',
          name: 'Quality Control Laboratory',
          description: 'Advanced testing facility with CMM, tensile testing, and environmental chambers'
        }
      ],
      
      // Parent Organization (if applicable)
      parentOrganization: {
        '@type': 'Organization',
        name: 'STAR-PLUS Manufacturing Group'
      }
    };
  }

  /**
   * Manufacturing Service Schema
   */
  static generateServiceSchema(service: {
    name: string;
    description: string;
    serviceType: string;
    category: string;
    processes: string[];
    industries: string[];
    capabilities: string[];
  }): Service {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${this.baseUrl}/services/${service.serviceType}#service`,
      name: service.name,
      description: service.description,
      serviceType: service.serviceType,
      category: service.category,
      
      provider: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`
      },
      
      areaServed: {
        '@type': 'Place',
        name: 'Europe, North America, Asia-Pacific'
      },
      
      audience: {
        '@type': 'Audience',
        name: service.industries.join(', ')
      },
      
      serviceOutput: service.capabilities.map(capability => ({
        '@type': 'Thing',
        name: capability
      })),
      
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.name} Solutions`,
        itemListElement: service.processes.map((process, index) => ({
          '@type': 'Offer',
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: process
          }
        }))
      }
    };
  }

  /**
   * Advanced Product Schema with Manufacturing Details
   */
  static generateProductSchema(product: ProductSpecification): SchemaProduct {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${this.baseUrl}/products/${product.id}#product`,
      name: product.name,
      description: product.description,
      category: product.category,
      
      manufacturer: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`
      },
      
      material: product.materials,
      
      // Physical Properties
      ...(product.dimensions && {
        depth: product.dimensions.length,
        width: product.dimensions.width,
        height: product.dimensions.height,
        weight: product.dimensions.weight
      }),
      
      // Manufacturing Process
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Manufacturing Process',
          value: product.manufacturingProcess
        },
        {
          '@type': 'PropertyValue',
          name: 'Customizable',
          value: product.customizable
        },
        ...(product.sustainability?.recycledContent ? [{
          '@type': 'PropertyValue',
          name: 'Recycled Content',
          value: product.sustainability.recycledContent
        }] : []),
        ...(product.sustainability?.carbonFootprint ? [{
          '@type': 'PropertyValue',
          name: 'Carbon Footprint',
          value: product.sustainability.carbonFootprint
        }] : [])
      ],
      
      // Applications
      applicationCategory: product.applications,
      
      // Certifications
      award: product.certifications,
      
      // Sustainability
      ...(product.sustainability && {
        additionalType: product.sustainability.recyclable ? 'https://schema.org/Product' : undefined
      }),
      
      // Offers
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        seller: {
          '@type': 'Organization',
          '@id': `${this.baseUrl}/#organization`
        }
      }
    };
  }

  /**
   * FAQ Schema Generator
   */
  static generateFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQPage {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }

  /**
   * Video Schema for Product Demonstrations
   */
  static generateVideoSchema(video: {
    name: string;
    description: string;
    url: string;
    thumbnailUrl: string;
    duration: string;
    uploadDate: string;
    productId?: string;
  }): VideoObject {
    return {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: video.name,
      description: video.description,
      contentUrl: video.url,
      embedUrl: video.url,
      thumbnailUrl: video.thumbnailUrl,
      duration: video.duration,
      uploadDate: video.uploadDate,
      
      publisher: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`
      },
      
      ...(video.productId && {
        about: {
          '@type': 'Product',
          '@id': `${this.baseUrl}/products/${video.productId}#product`
        }
      })
    };
  }

  /**
   * Review Schema for Customer Testimonials
   */
  static generateReviewSchema(review: {
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
    productId?: string;
    serviceId?: string;
  }): Review {
    return {
      '@context': 'https://schema.org',
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
      
      ...(review.productId && {
        itemReviewed: {
          '@type': 'Product',
          '@id': `${this.baseUrl}/products/${review.productId}#product`
        }
      }),
      
      ...(review.serviceId && {
        itemReviewed: {
          '@type': 'Service',
          '@id': `${this.baseUrl}/services/${review.serviceId}#service`
        }
      })
    };
  }

  /**
   * Event Schema for Trade Shows, Certifications, etc.
   */
  static generateEventSchema(event: {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    location: {
      name: string;
      address: string;
    };
    eventType: 'trade-show' | 'certification' | 'webinar' | 'training';
  }): Event {
    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: event.name,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      
      location: {
        '@type': 'Place',
        name: event.location.name,
        address: event.location.address
      },
      
      organizer: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`
      },
      
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled'
    };
  }

  /**
   * Manufacturing Process Schema
   */
  static generateManufacturingProcessSchema(process: ManufacturingProcessData) {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: process.name,
      description: process.description,
      
      step: process.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.description,
        ...(step.duration && { 
          timeRequired: step.duration 
        }),
        ...(step.equipment && {
          tool: step.equipment.map(eq => ({
            '@type': 'Tool',
            name: eq
          }))
        })
      })),
      
      totalTime: 'PT2H', // Placeholder - should be calculated
      
      supply: process.capabilities.map(capability => ({
        '@type': 'HowToSupply',
        name: capability
      }))
    };
  }
}