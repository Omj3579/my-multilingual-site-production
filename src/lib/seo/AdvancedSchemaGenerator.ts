import { 
  Organization, 
  WebSite, 
  BreadcrumbList,
  Product as SchemaProduct
} from 'schema-dts';

interface ProductData {
  id: string;
  name?: string;
  description?: string;
  image?: string;
}

interface CategoryData {
  name: string;
  description: string;
  slug: string;
  products: ProductData[];
}

export class AdvancedSchemaGenerator {
  private static baseUrl = 'https://flair-plastic.hu';
  
  static generateOrganizationSchema(): Organization {
    return {
      '@type': 'Organization',
      '@id': `${this.baseUrl}/#organization`,
      name: 'Flair Plastic Manufacturing',
      alternateName: ['Flair Plastic', 'Flair Manufacturing'],
      description: 'Leading plastic injection Moulding and contract manufacturing company specializing in sustainable manufacturing solutions with global reach and local expertise.',
      url: this.baseUrl,
      logo: `${this.baseUrl}/logos/flair_plastic_logo_cmyk_mono_-_MAIN.png`,
      image: `${this.baseUrl}/logos/flair_plastic_logo_cmyk_mono_-_MAIN.png`,
      sameAs: [
        'https://www.linkedin.com/company/flair-plastic',
        'https://twitter.com/flairplastic',
        'https://www.facebook.com/flairplastic'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hungarian'],
        areaServed: ['Worldwide', 'Europe', 'North America', 'Asia'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Budapest',
        addressCountry: 'Hungary',
        addressRegion: 'Central Hungary'
      },
      foundingDate: '1995',
      knowsAbout: [
        'Injection Moulding',
        'Contract Manufacturing', 
        'Sustainable Manufacturing',
        'Plastic Processing',
        'Quality Control',
        'ISO 9001 Certification'
      ]
    };
  }

  static generateWebSiteSchema(): WebSite {
    return {
      '@type': 'WebSite',
      '@id': `${this.baseUrl}/#website`,
      url: this.baseUrl,
      name: 'Flair Plastic Manufacturing',
      description: 'Leading plastic injection Moulding and contract manufacturing company',
      publisher: {
        '@id': `${this.baseUrl}/#organization`
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: `${this.baseUrl}/search?q={search_term_string}`
        }
      ],
      inLanguage: ['en', 'hu']
    };
  }

  static generateProductCategorySchema(category: CategoryData): SchemaProduct[] {
    return category.products.map(product => ({
      '@type': 'Product',
      '@id': `${this.baseUrl}/products/${category.slug}/${product.id}#product`,
      name: product.name || 'Premium Plastic Product',
      description: product.description || `High-quality ${category.name.toLowerCase()} product manufactured by Flair Plastic`,
      category: category.name,
      brand: {
        '@type': 'Brand',
        name: 'Flair Plastic',
        logo: `${this.baseUrl}/logos/flair_plastic_logo_cmyk_mono_-_MAIN.png`
      },
      manufacturer: {
        '@id': `${this.baseUrl}/#organization`
      },
      material: 'Premium Plastic',
      image: product.image ? `${this.baseUrl}${product.image}` : `${this.baseUrl}/products/categories/${category.slug}/default.jpg`,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'EUR',
        seller: {
          '@id': `${this.baseUrl}/#organization`
        },
        itemCondition: 'https://schema.org/NewCondition'
      }
    }));
  }

  static generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>): BreadcrumbList {
    return {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb.name,
        item: `${this.baseUrl}${breadcrumb.url}`
      }))
    };
  }

  static generateIndustryCategorySchema(industry: {
    name: string;
    description: string;
    slug: string;
    services: string[];
    benefits: string[];
  }) {
    return {
      '@type': 'Service',
      '@id': `${this.baseUrl}/industries/${industry.slug}#service`,
      name: `${industry.name} Manufacturing Solutions`,
      description: industry.description,
      provider: {
        '@id': `${this.baseUrl}/#organization`
      },
      serviceType: industry.services,
      areaServed: 'Worldwide',
      category: 'Manufacturing'
    };
  }

  static generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
    return {
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
}
