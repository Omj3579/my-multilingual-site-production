export interface ProductSEO {
  generateTitle: (productName: string, categoryName: string, language: string) => string;
  generateDescription: (product: any, categoryName: string, language: string) => string;
  generateKeywords: (product: any, categoryName: string, language: string) => string[];
  generateStructuredData: (product: any, categoryName: string, categoryId: string, language: string) => any;
}

export const PRODUCT_SEO_TEMPLATES: ProductSEO = {
  generateTitle: (productName: string, categoryName: string, language: string) => {
    const templates = {
      en: `${productName} | ${categoryName} | Flair Plastic Manufacturing`,
      hu: `${productName} | ${categoryName} | Flair Plastic Gyártás`
    };
    return templates[language as keyof typeof templates] || templates.en;
  },

  generateDescription: (product: any, categoryName: string, language: string) => {
    const productName = product.name?.[language] || product.name?.en || 'Product';
    const description = product.desc?.[language] || product.desc?.en || '';
    
    const templates = {
      en: `${productName} from Flair Plastic's ${categoryName} collection. ${description} Premium quality plastic manufacturing with sustainable practices and professional injection molding technology.`,
      hu: `${productName} a Flair Plastic ${categoryName} kollekciójából. ${description} Prémium minőségű műanyag gyártás fenntartható gyakorlatokkal és professzionális fröccsöntő technológiával.`
    };
    
    return templates[language as keyof typeof templates] || templates.en;
  },

  generateKeywords: (product: any, categoryName: string, language: string) => {
    const productName = product.name?.[language] || product.name?.en || '';
    const baseKeywords = {
      en: [
        productName.toLowerCase(),
        categoryName.toLowerCase(),
        'flair plastic',
        'injection molding',
        'plastic manufacturing',
        'sustainable manufacturing',
        'hungary manufacturing',
        'premium quality',
        'professional manufacturing'
      ],
      hu: [
        productName.toLowerCase(),
        categoryName.toLowerCase(),
        'flair plastic',
        'fröccsöntés',
        'műanyag gyártás',
        'fenntartható gyártás',
        'magyarország gyártás',
        'prémium minőség',
        'professzionális gyártás'
      ]
    };

    // Add product-specific keywords based on specs
    const keywords = [...(baseKeywords[language as keyof typeof baseKeywords] || baseKeywords.en)];
    
    if (product.specs?.material) {
      keywords.push(product.specs.material.toLowerCase());
    }
    
    if (product.badges) {
      keywords.push(...product.badges.map((badge: string) => badge.toLowerCase()));
    }

    return keywords.filter(Boolean);
  },

  generateStructuredData: (product: any, categoryName: string, categoryId: string, language: string) => {
    const productName = product.name?.[language] || product.name?.en || 'Product';
    const description = product.desc?.[language] || product.desc?.en || '';
    const longDescription = product.longDesc?.[language] || product.longDesc?.en || description;
    
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": productName,
      "description": longDescription,
      "category": categoryName,
      "brand": {
        "@type": "Brand",
        "name": "Flair Plastic"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Flair Plastic Manufacturing",
        "url": "https://flairplastic.com"
      },
      "url": `https://flairplastic.com/products/${categoryId}/${product.id}`,
      "image": product.images?.[0] ? `https://flairplastic.com${product.images[0]}` : undefined,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR",
        "seller": {
          "@type": "Organization",
          "name": "Flair Plastic Manufacturing"
        }
      },
      "additionalProperty": [
        ...(product.specs?.material ? [{
          "@type": "PropertyValue",
          "name": "Material",
          "value": product.specs.material
        }] : []),
        ...(product.specs?.volume ? [{
          "@type": "PropertyValue", 
          "name": "Volume",
          "value": product.specs.volume
        }] : []),
        ...(product.specs?.size ? [{
          "@type": "PropertyValue",
          "name": "Size", 
          "value": product.specs.size
        }] : [])
      ].filter(Boolean),
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": language === 'hu' ? "Kezdőlap" : "Home",
            "item": "https://flairplastic.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": language === 'hu' ? "Termékek" : "Products",
            "item": "https://flairplastic.com/products"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": categoryName,
            "item": `https://flairplastic.com/products/${categoryId}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": productName,
            "item": `https://flairplastic.com/products/${categoryId}/${product.id}`
          }
        ]
      }
    };
  }
};
