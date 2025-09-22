import { Language } from '../config';
import { ManufacturingSchemaGenerator, ProductSpecification } from '../advanced-schema/ManufacturingSchema';
import { SemanticSEOEngine, KeywordCluster } from '../content-intelligence/SemanticSEO';
import { SEOData } from '../utils';

// Page type interfaces
export interface ProductPageSEO {
  product: ProductSpecification;
  category: string;
  relatedProducts: ProductSpecification[];
  reviews: Array<{
    rating: number;
    author: string;
    content: string;
    date: string;
  }>;
  specifications: Record<string, string>;
  applications: string[];
}

export interface IndustryPageSEO {
  industry: {
    name: string;
    slug: string;
    description: string;
    challenges: string[];
    solutions: string[];
    caseStudies: Array<{
      title: string;
      summary: string;
      results: string;
    }>;
    certifications: string[];
    processes: string[];
  };
  competitorAnalysis?: {
    topCompetitors: string[];
    differentiators: string[];
  };
}

export interface ResourcePageSEO {
  content: {
    type: 'blog' | 'case-study' | 'whitepaper' | 'guide' | 'news';
    title: string;
    summary: string;
    author: string;
    publishDate: string;
    readTime: number;
    tags: string[];
    category: string;
  };
  relatedResources: Array<{
    title: string;
    url: string;
    type: string;
  }>;
}

export interface LocationPageSEO {
  facility: {
    name: string;
    address: {
      street: string;
      city: string;
      region: string;
      country: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
    capabilities: string[];
    certifications: string[];
    contactInfo: {
      phone: string;
      email: string;
      manager: string;
    };
    operatingHours: Record<string, string>;
    languages: Language[];
  };
}

export interface ProcessPageSEO {
  process: {
    name: string;
    slug: string;
    description: string;
    steps: Array<{
      order: number;
      name: string;
      description: string;
      duration: string;
      equipment: string[];
      qualityChecks: string[];
    }>;
    advantages: string[];
    applications: string[];
    materials: string[];
    qualityStandards: string[];
  };
}

export class PageSpecificSEOOptimizer {
  /**
   * Optimize Product Page SEO with advanced product schema and semantic optimization
   */
  static optimizeProductPage(
    productData: ProductPageSEO,
    language: Language,
    targetKeywords: string[]
  ): {
    seoData: SEOData;
    structuredData: object[];
    optimizedContent: {
      title: string;
      description: string;
      headings: {
        h1: string;
        h2: string[];
        h3: string[];
      };
      internalLinks: Array<{
        url: string;
        anchorText: string;
        context: string;
      }>;
    };
    faqSchema: object;
  } {
    const product = productData.product;
    
    // Generate semantic keywords for the product
    const keywordClusters = SemanticSEOEngine.generateKeywordClusters(
      product.category.toLowerCase(),
      product.applications[0]?.toLowerCase(),
      language
    );
    
    // Advanced title generation with semantic variations
    const semanticTitle = this.generateSemanticTitle(product, language, keywordClusters);
    
    // Rich meta description with USPs
    const richDescription = this.generateRichProductDescription(product, language);
    
    // Generate structured data
    const productSchema = ManufacturingSchemaGenerator.generateProductSchema(product);
    const reviewSchema = this.generateAggregateRatingSchema(productData.reviews, product.id);
    const faqSchema = this.generateProductFAQSchema(product, language);
    
    // Internal linking optimization
    const semanticLinks = this.generateSemanticInternalLinks(
      product,
      productData.relatedProducts,
      language
    );
    
    // Heading structure optimization
    const optimizedHeadings = this.generateProductHeadingStructure(product, language);
    
    return {
      seoData: {
        title: semanticTitle,
        description: richDescription,
        keywords: [
          ...targetKeywords,
          ...keywordClusters.flatMap(cluster => cluster.related),
          ...product.materials,
          ...product.applications
        ],
        canonical: `https://flair-plastic.hu/products/${product.id}`,
        ogTitle: `${product.name} - Premium ${product.category} | Flair Plastic`,
        ogDescription: richDescription,
        ogImage: `https://flair-plastic.hu/products/${product.id}/og-image.jpg`,
        ogType: 'product',
        structuredData: [productSchema, reviewSchema],
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: product.category, url: `/products/category/${product.category.toLowerCase()}` },
          { name: product.name, url: `/products/${product.id}` }
        ]
      },
      structuredData: [productSchema, reviewSchema, faqSchema],
      optimizedContent: {
        title: semanticTitle,
        description: richDescription,
        headings: optimizedHeadings,
        internalLinks: semanticLinks
      },
      faqSchema
    };
  }

  /**
   * Optimize Industry Page SEO with industry-specific keywords and local business optimization
   */
  static optimizeIndustryPage(
    industryData: IndustryPageSEO,
    language: Language
  ): {
    seoData: SEOData;
    structuredData: object[];
    optimizedContent: {
      title: string;
      description: string;
      serviceSchema: object;
      caseStudySchema: object[];
    };
  } {
    const industry = industryData.industry;
    
    // Industry-specific keyword optimization
    const industryKeywords = SemanticSEOEngine.generateKeywordClusters(
      'contract-manufacturing',
      industry.slug,
      language
    );
    
    // Generate advanced title with local + industry focus
    const industryTitle = this.generateIndustryTitle(industry, language);
    
    // Rich description with challenge-solution framework
    const industryDescription = this.generateIndustryDescription(industry, language);
    
    // Service schema for industry-specific services
    const serviceSchema = ManufacturingSchemaGenerator.generateServiceSchema({
      name: `${industry.name} Manufacturing Services`,
      description: industry.description,
      serviceType: 'Manufacturing',
      category: industry.name,
      processes: industry.processes,
      industries: [industry.name],
      capabilities: industry.solutions
    });
    
    // Case study schemas
    const caseStudySchemas = industry.caseStudies.map((caseStudy, index) =>
      this.generateCaseStudySchema(caseStudy, industry.slug, index)
    );
    
    return {
      seoData: {
        title: industryTitle,
        description: industryDescription,
        keywords: [
          `${industry.name} manufacturing`,
          `${industry.name} plastic components`,
          ...industryKeywords.flatMap(cluster => cluster.related),
          ...industry.processes,
          ...industry.certifications
        ],
        canonical: `https://flair-plastic.hu/industries/${industry.slug}`,
        ogTitle: `${industry.name} Manufacturing Excellence | Flair Plastic`,
        ogDescription: industryDescription,
        ogImage: `https://flair-plastic.hu/industries/${industry.slug}/hero.jpg`,
        structuredData: [serviceSchema, ...caseStudySchemas],
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
          { name: industry.name, url: `/industries/${industry.slug}` }
        ]
      },
      structuredData: [serviceSchema, ...caseStudySchemas],
      optimizedContent: {
        title: industryTitle,
        description: industryDescription,
        serviceSchema,
        caseStudySchema: caseStudySchemas
      }
    };
  }

  /**
   * Optimize Resource Page SEO with educational content focus
   */
  static optimizeResourcePage(
    resourceData: ResourcePageSEO,
    language: Language
  ): {
    seoData: SEOData;
    structuredData: object[];
    readingTimeSchema: object;
    authorSchema: object;
  } {
    const content = resourceData.content;
    
    // Educational content optimization
    const resourceTitle = this.generateResourceTitle(content, language);
    const resourceDescription = this.generateResourceDescription(content, language);
    
    // Article schema with enhanced properties
    const articleSchema = this.generateArticleSchema(content);
    const authorSchema = this.generateAuthorSchema(content.author);
    const readingTimeSchema = this.generateReadingTimeSchema(content.readTime);
    
    return {
      seoData: {
        title: resourceTitle,
        description: resourceDescription,
        keywords: [
          ...content.tags,
          `${content.type} manufacturing`,
          `${content.category} resources`,
          'manufacturing expertise',
          'industry insights'
        ],
        canonical: `https://flair-plastic.hu/resources/${content.type}/${content.title.toLowerCase().replace(/\s+/g, '-')}`,
        ogTitle: resourceTitle,
        ogDescription: resourceDescription,
        ogImage: `https://flair-plastic.hu/resources/og/${content.type}.jpg`,
        ogType: 'article',
        publishedTime: content.publishDate,
        author: content.author,
        articleTags: content.tags,
        structuredData: [articleSchema, authorSchema, readingTimeSchema],
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Resources', url: '/resources' },
          { name: content.category, url: `/resources/${content.category.toLowerCase()}` },
          { name: content.title, url: `/resources/${content.type}/${content.title.toLowerCase().replace(/\s+/g, '-')}` }
        ]
      },
      structuredData: [articleSchema, authorSchema, readingTimeSchema],
      readingTimeSchema,
      authorSchema
    };
  }

  /**
   * Optimize Location Page SEO with local business schema
   */
  static optimizeLocationPage(
    locationData: LocationPageSEO,
    language: Language
  ): {
    seoData: SEOData;
    structuredData: object[];
    localBusinessSchema: object;
  } {
    const facility = locationData.facility;
    
    // Local SEO optimization
    const locationTitle = this.generateLocationTitle(facility, language);
    const locationDescription = this.generateLocationDescription(facility, language);
    
    // Enhanced local business schema
    const localBusinessSchema = this.generateLocalBusinessSchema(facility);
    
    return {
      seoData: {
        title: locationTitle,
        description: locationDescription,
        keywords: [
          `manufacturing ${facility.address.city}`,
          `plastic injection molding ${facility.address.region}`,
          `contract manufacturing ${facility.address.country}`,
          ...facility.capabilities,
          ...facility.certifications
        ],
        canonical: `https://flair-plastic.hu/locations/${facility.name.toLowerCase().replace(/\s+/g, '-')}`,
        ogTitle: locationTitle,
        ogDescription: locationDescription,
        ogImage: `https://flair-plastic.hu/locations/${facility.name}/exterior.jpg`,
        structuredData: [localBusinessSchema],
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
          { name: facility.name, url: `/locations/${facility.name.toLowerCase().replace(/\s+/g, '-')}` }
        ]
      },
      structuredData: [localBusinessSchema],
      localBusinessSchema
    };
  }

  /**
   * Optimize Process Page SEO with HowTo schema
   */
  static optimizeProcessPage(
    processData: ProcessPageSEO,
    language: Language
  ): {
    seoData: SEOData;
    structuredData: object[];
    howToSchema: object;
  } {
    const process = processData.process;
    
    const processTitle = this.generateProcessTitle(process, language);
    const processDescription = this.generateProcessDescription(process, language);
    
    // HowTo schema for manufacturing process
    const howToSchema = ManufacturingSchemaGenerator.generateManufacturingProcessSchema({
      name: process.name,
      description: process.description,
      steps: process.steps,
      capabilities: process.advantages,
      certifications: process.qualityStandards,
      sustainabilityFeatures: []
    });
    
    return {
      seoData: {
        title: processTitle,
        description: processDescription,
        keywords: [
          `${process.name.toLowerCase()} process`,
          `${process.name.toLowerCase()} manufacturing`,
          ...process.materials,
          ...process.applications,
          ...process.qualityStandards
        ],
        canonical: `https://flair-plastic.hu/processes/${process.slug}`,
        ogTitle: processTitle,
        ogDescription: processDescription,
        ogImage: `https://flair-plastic.hu/processes/${process.slug}/diagram.jpg`,
        structuredData: [howToSchema],
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Processes', url: '/processes' },
          { name: process.name, url: `/processes/${process.slug}` }
        ]
      },
      structuredData: [howToSchema],
      howToSchema
    };
  }

  // Private helper methods for content generation

  private static generateSemanticTitle(
    product: ProductSpecification,
    language: Language,
    clusters: KeywordCluster[]
  ): string {
    const primaryKeyword = clusters[0]?.primary || product.category;
    const sustainabilityFeature = product.sustainability?.recyclable ? 'Eco-Friendly' : '';
    
    const titleTemplates = {
      en: `${sustainabilityFeature} ${product.name} | Premium ${primaryKeyword} | Flair Plastic`,
      hu: `${sustainabilityFeature} ${product.name} | Prémium ${primaryKeyword} | Flair Plastic`,
      de: `${sustainabilityFeature} ${product.name} | Premium ${primaryKeyword} | Flair Plastic`
    };
    
    return titleTemplates[language] || titleTemplates.en;
  }

  private static generateRichProductDescription(
    product: ProductSpecification,
    language: Language
  ): string {
    const certText = product.certifications.length > 0 ? 
      `${product.certifications.join(', ')} certified` : '';
    
    const sustainabilityText = product.sustainability?.recyclable ? 
      'sustainable and eco-friendly' : '';
    
    const descriptionTemplates = {
      en: `${product.description} ${certText} ${sustainabilityText} ${product.name} manufactured using advanced ${product.manufacturingProcess}. Perfect for ${product.applications.slice(0, 3).join(', ')} applications. Custom solutions available.`,
      hu: `${certText} ${sustainabilityText} ${product.name} fejlett ${product.manufacturingProcess} technológiával gyártva. Ideális ${product.applications.slice(0, 3).join(', ')} alkalmazásokhoz. Egyedi megoldások elérhetők.`,
      de: `${certText} ${sustainabilityText} ${product.name} mit fortschrittlicher ${product.manufacturingProcess} Technologie hergestellt. Perfekt für ${product.applications.slice(0, 3).join(', ')} Anwendungen. Individuelle Lösungen verfügbar.`
    };
    
    return descriptionTemplates[language] || descriptionTemplates.en;
  }

  private static generateProductHeadingStructure(
    product: ProductSpecification,
    language: Language
  ): { h1: string; h2: string[]; h3: string[] } {
    return {
      h1: `${product.name} - Premium ${product.category}`,
      h2: [
        'Product Overview',
        'Technical Specifications',
        'Applications & Industries',
        'Sustainability Features',
        'Quality Certifications',
        'Custom Solutions'
      ],
      h3: [
        'Material Properties',
        'Dimensional Specifications',
        'Performance Characteristics',
        'Environmental Benefits',
        'Compliance Standards',
        'Customization Options'
      ]
    };
  }

  private static generateSemanticInternalLinks(
    product: ProductSpecification,
    relatedProducts: ProductSpecification[],
    language: Language
  ): Array<{ url: string; anchorText: string; context: string }> {
    const links: Array<{ url: string; anchorText: string; context: string }> = [];
    
    // Related products
    relatedProducts.slice(0, 3).forEach(relatedProduct => {
      links.push({
        url: `/products/${relatedProduct.id}`,
        anchorText: `${relatedProduct.name} solutions`,
        context: `Similar ${product.category} products`
      });
    });
    
    // Category page
    links.push({
      url: `/products/category/${product.category.toLowerCase()}`,
      anchorText: `all ${product.category} products`,
      context: `Browse our complete ${product.category} collection`
    });
    
    // Industry applications
    product.applications.slice(0, 2).forEach(application => {
      links.push({
        url: `/industries/${application.toLowerCase().replace(/\s+/g, '-')}`,
        anchorText: `${application} manufacturing services`,
        context: `Learn about our ${application} expertise`
      });
    });
    
    return links;
  }

  private static generateAggregateRatingSchema(
    reviews: Array<{ rating: number; author: string; content: string; date: string }>,
    productId: string
  ): object {
    if (reviews.length === 0) return {};
    
    const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'AggregateRating',
      itemReviewed: {
        '@type': 'Product',
        '@id': `https://flair-plastic.hu/products/${productId}#product`
      },
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1
    };
  }

  private static generateProductFAQSchema(
    product: ProductSpecification,
    language: Language
  ): object {
    const faqs = [
      {
        question: `What materials are used in ${product.name}?`,
        answer: `${product.name} is manufactured using ${product.materials.join(', ')}, ensuring durability and performance for ${product.applications.join(', ')} applications.`
      },
      {
        question: `Is ${product.name} customizable?`,
        answer: product.customizable ? 
          `Yes, ${product.name} can be customized to meet your specific requirements including dimensions, materials, and colors.` :
          `${product.name} is available in our standard configuration. Contact us for custom solutions.`
      },
      {
        question: `What certifications does ${product.name} have?`,
        answer: `${product.name} is certified to ${product.certifications.join(', ')} standards, ensuring quality and compliance.`
      }
    ];
    
    return ManufacturingSchemaGenerator.generateFAQSchema(faqs);
  }

  private static generateIndustryTitle(
    industry: IndustryPageSEO['industry'],
    language: Language
  ): string {
    const titleTemplates = {
      en: `${industry.name} Manufacturing Solutions | Contract Manufacturing Excellence | Flair Plastic`,
      hu: `${industry.name} Gyártási Megoldások | Szerződéses Gyártás | Flair Plastic`,
      de: `${industry.name} Fertigungslösungen | Lohnfertigung Exzellenz | Flair Plastic`
    };
    
    return titleTemplates[language] || titleTemplates.en;
  }

  private static generateIndustryDescription(
    industry: IndustryPageSEO['industry'],
    language: Language
  ): string {
    const descriptionTemplates = {
      en: `Expert ${industry.name.toLowerCase()} manufacturing services with ${industry.certifications.join(', ')} certification. Specialized in ${industry.processes.join(', ')} processes. ${industry.solutions.length} proven solutions for industry challenges.`,
      hu: `Szakértői ${industry.name.toLowerCase()} gyártási szolgáltatások ${industry.certifications.join(', ')} tanúsítással. ${industry.processes.join(', ')} folyamatokra specializálódva.`,
      de: `Experten ${industry.name.toLowerCase()} Fertigungsdienstleistungen mit ${industry.certifications.join(', ')} Zertifizierung. Spezialisiert auf ${industry.processes.join(', ')} Prozesse.`
    };
    
    return descriptionTemplates[language] || descriptionTemplates.en;
  }

  private static generateCaseStudySchema(
    caseStudy: IndustryPageSEO['industry']['caseStudies'][0],
    industrySlug: string,
    index: number
  ): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: caseStudy.title,
      description: caseStudy.summary,
      author: {
        '@type': 'Organization',
        name: 'Flair Plastic'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Flair Plastic'
      },
      url: `https://flair-plastic.hu/industries/${industrySlug}/case-study-${index + 1}`
    };
  }

  private static generateResourceTitle(
    content: ResourcePageSEO['content'],
    language: Language
  ): string {
    const typeLabels = {
      blog: { en: 'Blog', hu: 'Blog', de: 'Blog' },
      'case-study': { en: 'Case Study', hu: 'Esettanulmány', de: 'Fallstudie' },
      whitepaper: { en: 'Whitepaper', hu: 'Tanulmány', de: 'Whitepaper' },
      guide: { en: 'Guide', hu: 'Útmutató', de: 'Leitfaden' },
      news: { en: 'News', hu: 'Hírek', de: 'News' }
    };
    
    const typeLabel = typeLabels[content.type][language];
    return `${content.title} | ${typeLabel} | Flair Plastic`;
  }

  private static generateResourceDescription(
    content: ResourcePageSEO['content'],
    language: Language
  ): string {
    const readTimeText = {
      en: `${content.readTime} min read`,
      hu: `${content.readTime} perces olvasás`,
      de: `${content.readTime} Min. Lesezeit`
    };
    
    return `${content.summary} ${readTimeText[language]} by ${content.author}. Published ${content.publishDate}.`;
  }

  private static generateArticleSchema(content: ResourcePageSEO['content']): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: content.title,
      description: content.summary,
      author: {
        '@type': 'Person',
        name: content.author
      },
      datePublished: content.publishDate,
      publisher: {
        '@type': 'Organization',
        name: 'Flair Plastic'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://flair-plastic.hu/resources/${content.type}/${content.title.toLowerCase().replace(/\s+/g, '-')}`
      }
    };
  }

  private static generateAuthorSchema(author: string): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: author,
      worksFor: {
        '@type': 'Organization',
        name: 'Flair Plastic'
      }
    };
  }

  private static generateReadingTimeSchema(readTime: number): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'ReadAction',
      expectsAcceptanceOf: {
        '@type': 'Offer',
        category: 'content'
      },
      actionPlatform: 'web',
      timeRequired: `PT${readTime}M`
    };
  }

  private static generateLocationTitle(
    facility: LocationPageSEO['facility'],
    language: Language
  ): string {
    const titleTemplates = {
      en: `${facility.name} Manufacturing Facility | ${facility.address.city}, ${facility.address.country} | Flair Plastic`,
      hu: `${facility.name} Gyártó Üzem | ${facility.address.city}, ${facility.address.country} | Flair Plastic`,
      de: `${facility.name} Produktionsanlage | ${facility.address.city}, ${facility.address.country} | Flair Plastic`
    };
    
    return titleTemplates[language] || titleTemplates.en;
  }

  private static generateLocationDescription(
    facility: LocationPageSEO['facility'],
    language: Language
  ): string {
    const descriptionTemplates = {
      en: `Visit our ${facility.name} manufacturing facility in ${facility.address.city}. Capabilities: ${facility.capabilities.join(', ')}. ${facility.certifications.join(', ')} certified. Contact: ${facility.contactInfo.phone}`,
      hu: `Látogassa meg ${facility.name} gyártóüzemünket ${facility.address.city}-ban. Képességek: ${facility.capabilities.join(', ')}. Kapcsolat: ${facility.contactInfo.phone}`,
      de: `Besuchen Sie unsere ${facility.name} Produktionsanlage in ${facility.address.city}. Fähigkeiten: ${facility.capabilities.join(', ')}. Kontakt: ${facility.contactInfo.phone}`
    };
    
    return descriptionTemplates[language] || descriptionTemplates.en;
  }

  private static generateLocalBusinessSchema(facility: LocationPageSEO['facility']): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `https://flair-plastic.hu/locations/${facility.name.toLowerCase().replace(/\s+/g, '-')}#business`,
      name: facility.name,
      description: `Manufacturing facility specializing in ${facility.capabilities.join(', ')}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: facility.address.street,
        addressLocality: facility.address.city,
        addressRegion: facility.address.region,
        postalCode: facility.address.postalCode,
        addressCountry: facility.address.country
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: facility.address.coordinates.lat,
        longitude: facility.address.coordinates.lng
      },
      telephone: facility.contactInfo.phone,
      email: facility.contactInfo.email,
      openingHours: Object.entries(facility.operatingHours).map(([day, hours]) => `${day} ${hours}`),
      parentOrganization: {
        '@type': 'Organization',
        '@id': 'https://flair-plastic.hu/#organization'
      }
    };
  }

  private static generateProcessTitle(
    process: ProcessPageSEO['process'],
    language: Language
  ): string {
    const titleTemplates = {
      en: `${process.name} Process | Advanced Manufacturing Technique | Flair Plastic`,
      hu: `${process.name} Folyamat | Fejlett Gyártási Technika | Flair Plastic`,
      de: `${process.name} Verfahren | Fortschrittliche Fertigungstechnik | Flair Plastic`
    };
    
    return titleTemplates[language] || titleTemplates.en;
  }

  private static generateProcessDescription(
    process: ProcessPageSEO['process'],
    language: Language
  ): string {
    const descriptionTemplates = {
      en: `Learn about our ${process.name.toLowerCase()} process. ${process.steps.length}-step procedure using ${process.materials.join(', ')} materials. Quality assured with ${process.qualityStandards.join(', ')} standards.`,
      hu: `Ismerje meg ${process.name.toLowerCase()} folyamatunkat. ${process.steps.length} lépéses eljárás ${process.materials.join(', ')} anyagok felhasználásával.`,
      de: `Erfahren Sie mehr über unser ${process.name.toLowerCase()} Verfahren. ${process.steps.length}-stufiges Verfahren mit ${process.materials.join(', ')} Materialien.`
    };
    
    return descriptionTemplates[language] || descriptionTemplates.en;
  }
}