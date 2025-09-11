import { useLanguage } from '@/contexts/LanguageContext';

export interface ProductCategorySEO {
  title: Record<string, string>;
  description: Record<string, string>;
  keywords: Record<string, string[]>;
  openGraph: {
    title: Record<string, string>;
    description: Record<string, string>;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: Record<string, string>;
    }>;
  };
  structuredData: {
    name: Record<string, string>;
    description: Record<string, string>;
    category: string;
    brand: string;
    manufacturer: string;
  };
}

export const PRODUCT_CATEGORIES_SEO: Record<string, ProductCategorySEO> = {
  active: {
    title: {
      en: "Active & Sports Products | Flair Plastic Manufacturing",
      hu: "Aktív és Sport Termékek | Flair Plastic Gyártás"
    },
    description: {
      en: "Professional sports and active lifestyle plastic products. High-quality manufacturing for sporting goods, outdoor equipment, and active recreation products.",
      hu: "Professzionális sport és aktív életmód műanyag termékek. Magas minőségű gyártás sportszerekhez, kültéri felszerelésekhez és aktív rekreációs termékekhez."
    },
    keywords: {
      en: ["sports products", "active lifestyle", "outdoor equipment", "sporting goods", "recreation products", "plastic manufacturing", "injection Moulding", "Hungary"],
      hu: ["sport termékek", "aktív életmód", "kültéri felszerelések", "sportszerek", "rekreációs termékek", "műanyag gyártás", "fröccsöntés", "Magyarország"]
    },
    openGraph: {
      title: {
        en: "Premium Active & Sports Products | Flair Plastic",
        hu: "Prémium Aktív és Sport Termékek | Flair Plastic"
      },
      description: {
        en: "Discover our comprehensive range of high-quality active and sports plastic products. Professional manufacturing with sustainable practices.",
        hu: "Fedezze fel átfogó, magas minőségű aktív és sport műanyag termékek kínálatunkat. Professzionális gyártás fenntartható gyakorlatokkal."
      },
      images: [{
        url: "/products/categories/hero/active-sports-products-og.jpg",
        width: 1200,
        height: 630,
        alt: {
          en: "Flair Plastic Active & Sports Products Collection",
          hu: "Flair Plastic Aktív és Sport Termékek Kollekció"
        }
      }]
    },
    structuredData: {
      name: {
        en: "Active & Sports Products",
        hu: "Aktív és Sport Termékek"
      },
      description: {
        en: "Professional sports and active lifestyle plastic products manufactured with precision injection Moulding technology.",
        hu: "Professzionális sport és aktív életmód műanyag termékek precíziós fröccsöntő technológiával gyártva."
      },
      category: "Sporting Goods",
      brand: "Flair Plastic",
      manufacturer: "Flair Plastic Manufacturing"
    }
  },
  
  garden: {
    title: {
      en: "Garden & Outdoor Products | Flair Plastic Manufacturing",
      hu: "Kert és Kültéri Termékek | Flair Plastic Gyártás"
    },
    description: {
      en: "Premium garden and outdoor plastic products. Durable planters, containers, and gardening solutions manufactured with sustainable injection Moulding.",
      hu: "Prémium kert és kültéri műanyag termékek. Tartós virágcserepek, konténerek és kertészeti megoldások fenntartható fröccsöntéssel gyártva."
    },
    keywords: {
      en: ["garden products", "outdoor containers", "planters", "gardening solutions", "plastic pots", "injection Moulding", "sustainable manufacturing", "Hungary"],
      hu: ["kerti termékek", "kültéri konténerek", "virágcserepek", "kertészeti megoldások", "műanyag cserepek", "fröccsöntés", "fenntartható gyártás", "Magyarország"]
    },
    openGraph: {
      title: {
        en: "Premium Garden & Outdoor Products | Flair Plastic",
        hu: "Prémium Kert és Kültéri Termékek | Flair Plastic"
      },
      description: {
        en: "Transform your outdoor spaces with our premium garden products. Sustainable manufacturing meets innovative design.",
        hu: "Alakítsa át kültéri tereit prémium kerti termékeinkkel. A fenntartható gyártás találkozik az innovatív dizájnnal."
      },
      images: [{
        url: "/products/categories/hero/garden-outdoor-products-og.jpg",
        width: 1200,
        height: 630,
        alt: {
          en: "Flair Plastic Garden & Outdoor Products Collection",
          hu: "Flair Plastic Kert és Kültéri Termékek Kollekció"
        }
      }]
    },
    structuredData: {
      name: {
        en: "Garden & Outdoor Products",
        hu: "Kert és Kültéri Termékek"
      },
      description: {
        en: "Durable garden and outdoor plastic products designed for longevity and sustainability.",
        hu: "Tartós kert és kültéri műanyag termékek a tartósság és fenntarthatóság jegyében tervezve."
      },
      category: "Garden & Outdoor",
      brand: "Flair Plastic",
      manufacturer: "Flair Plastic Manufacturing"
    }
  },

  home: {
    title: {
      en: "Home & Living Products | Flair Plastic Manufacturing",
      hu: "Otthon és Lakás Termékek | Flair Plastic Gyártás"
    },
    description: {
      en: "Essential home and living plastic products. Storage solutions, household items, and home organization products with premium quality manufacturing.",
      hu: "Alapvető otthon és lakás műanyag termékek. Tárolási megoldások, háztartási tárgyak és otthoni szervezési termékek prémium minőségű gyártással."
    },
    keywords: {
      en: ["home products", "household items", "storage solutions", "home organization", "living products", "plastic manufacturing", "quality assurance", "Hungary"],
      hu: ["otthoni termékek", "háztartási cikkek", "tárolási megoldások", "otthoni szervezés", "lakástermékek", "műanyag gyártás", "minőségbiztosítás", "Magyarország"]
    },
    openGraph: {
      title: {
        en: "Premium Home & Living Products | Flair Plastic",
        hu: "Prémium Otthon és Lakás Termékek | Flair Plastic"
      },
      description: {
        en: "Enhance your home with our premium plastic products. From storage solutions to household essentials, quality you can trust.",
        hu: "Fejlessze otthonát prémium műanyag termékeinkkel. A tárolási megoldásoktól a háztartási alapokig, minőség, amiben megbízhat."
      },
      images: [{
        url: "/products/categories/hero/home-living-products-og.jpg",
        width: 1200,
        height: 630,
        alt: {
          en: "Flair Plastic Home & Living Products Collection",
          hu: "Flair Plastic Otthon és Lakás Termékek Kollekció"
        }
      }]
    },
    structuredData: {
      name: {
        en: "Home & Living Products",
        hu: "Otthon és Lakás Termékek"
      },
      description: {
        en: "Premium home and living plastic products designed for modern households and sustainable living.",
        hu: "Prémium otthon és lakás műanyag termékek modern háztartásokhoz és fenntartható életmódhoz tervezve."
      },
      category: "Home & Living",
      brand: "Flair Plastic",
      manufacturer: "Flair Plastic Manufacturing"
    }
  },

  kids: {
    title: {
      en: "Kids & Children Products | Flair Plastic Manufacturing",
      hu: "Gyerek és Baba Termékek | Flair Plastic Gyártás"
    },
    description: {
      en: "Safe and durable kids products. Child-friendly plastic toys, containers, and accessories manufactured with the highest safety standards.",
      hu: "Biztonságos és tartós gyerektermékek. Gyermekbarát műanyag játékok, tárolók és kiegészítők a legmagasabb biztonsági szabványokkal gyártva."
    },
    keywords: {
      en: ["kids products", "children toys", "child safety", "plastic toys", "kids containers", "safe materials", "BPA-free", "Hungary"],
      hu: ["gyerektermékek", "gyerekjátékok", "gyermekbiztonság", "műanyag játékok", "gyerek tárolók", "biztonságos anyagok", "BPA-mentes", "Magyarország"]
    },
    openGraph: {
      title: {
        en: "Safe Kids & Children Products | Flair Plastic",
        hu: "Biztonságos Gyerek és Baba Termékek | Flair Plastic"
      },
      description: {
        en: "Premium kids products designed with safety first. Durable, colorful, and child-friendly plastic products for modern families.",
        hu: "Prémium gyerektermékek a biztonságot szem előtt tartva tervezve. Tartós, színes és gyermekbarát műanyag termékek modern családoknak."
      },
      images: [{
        url: "/products/categories/hero/kids-children-products-og.jpg",
        width: 1200,
        height: 630,
        alt: {
          en: "Flair Plastic Kids & Children Products Collection",
          hu: "Flair Plastic Gyerek és Baba Termékek Kollekció"
        }
      }]
    },
    structuredData: {
      name: {
        en: "Kids & Children Products",
        hu: "Gyerek és Baba Termékek"
      },
      description: {
        en: "Safe and durable plastic products designed specifically for children with premium safety standards.",
        hu: "Biztonságos és tartós műanyag termékek kifejezetten gyermekeknek tervezve, prémium biztonsági szabványokkal."
      },
      category: "Children's Products",
      brand: "Flair Plastic",
      manufacturer: "Flair Plastic Manufacturing"
    }
  },

  kitchen: {
    title: {
      en: "Kitchen & Culinary Products | Flair Plastic Manufacturing",
      hu: "Konyha és Kulináris Termékek | Flair Plastic Gyártás"
    },
    description: {
      en: "Professional kitchen and culinary plastic products. Food-safe containers, kitchen tools, and culinary accessories with premium manufacturing quality.",
      hu: "Professzionális konyha és kulináris műanyag termékek. Élelmiszeripari biztonságú tárolók, konyhai eszközök és kulináris kiegészítők prémium gyártási minőséggel."
    },
    keywords: {
      en: ["kitchen products", "culinary tools", "food containers", "kitchen storage", "food-safe plastic", "culinary accessories", "professional kitchen", "Hungary"],
      hu: ["konyhai termékek", "kulináris eszközök", "élelmiszer tárolók", "konyhai tárolás", "élelmiszeripari műanyag", "kulináris kiegészítők", "profi konyha", "Magyarország"]
    },
    openGraph: {
      title: {
        en: "Premium Kitchen & Culinary Products | Flair Plastic",
        hu: "Prémium Konyha és Kulináris Termékek | Flair Plastic"
      },
      description: {
        en: "Elevate your culinary experience with our premium kitchen products. Food-safe, durable, and designed for professional use.",
        hu: "Emelje új szintre kulináris élményét prémium konyhai termékeinkkel. Élelmiszeripari biztonságú, tartós és profi használatra tervezett."
      },
      images: [{
        url: "/products/categories/hero/kitchen-culinary-products-og.jpg",
        width: 1200,
        height: 630,
        alt: {
          en: "Flair Plastic Kitchen & Culinary Products Collection",
          hu: "Flair Plastic Konyha és Kulináris Termékek Kollekció"
        }
      }]
    },
    structuredData: {
      name: {
        en: "Kitchen & Culinary Products",
        hu: "Konyha és Kulináris Termékek"
      },
      description: {
        en: "Professional kitchen and culinary plastic products manufactured to food-safety standards.",
        hu: "Professzionális konyha és kulináris műanyag termékek élelmiszerbiztonsági szabványoknak megfelelően gyártva."
      },
      category: "Kitchen & Culinary",
      brand: "Flair Plastic",
      manufacturer: "Flair Plastic Manufacturing"
    }
  },

  pallets: {
    title: {
      en: "Industrial Pallets & Logistics | Flair Plastic Manufacturing",
      hu: "Ipari Raklapok és Logisztika | Flair Plastic Gyártás"
    },
    description: {
      en: "Heavy-duty industrial pallets and logistics solutions. Durable plastic pallets designed for warehouse, shipping, and industrial applications.",
      hu: "Nehéz ipari raklapok és logisztikai megoldások. Tartós műanyag raklapok raktár, szállítás és ipari alkalmazásokhoz tervezve."
    },
    keywords: {
      en: ["industrial pallets", "plastic pallets", "logistics solutions", "warehouse equipment", "shipping pallets", "industrial manufacturing", "heavy-duty", "Hungary"],
      hu: ["ipari raklapok", "műanyag raklapok", "logisztikai megoldások", "raktári berendezések", "szállítási raklapok", "ipari gyártás", "nehéz terhelésű", "Magyarország"]
    },
    openGraph: {
      title: {
        en: "Heavy-Duty Industrial Pallets | Flair Plastic",
        hu: "Nehéz Ipari Raklapok | Flair Plastic"
      },
      description: {
        en: "Professional industrial pallets and logistics solutions. Built for durability, designed for efficiency.",
        hu: "Professzionális ipari raklapok és logisztikai megoldások. Tartósságra építve, hatékonyságra tervezve."
      },
      images: [{
        url: "/products/categories/hero/industrial-pallets-logistics-og.jpg",
        width: 1200,
        height: 630,
        alt: {
          en: "Flair Plastic Industrial Pallets & Logistics Solutions",
          hu: "Flair Plastic Ipari Raklapok és Logisztikai Megoldások"
        }
      }]
    },
    structuredData: {
      name: {
        en: "Industrial Pallets & Logistics",
        hu: "Ipari Raklapok és Logisztika"
      },
      description: {
        en: "Heavy-duty industrial pallets and logistics solutions for professional warehouse and shipping applications.",
        hu: "Nehéz ipari raklapok és logisztikai megoldások professzionális raktári és szállítási alkalmazásokhoz."
      },
      category: "Industrial Equipment",
      brand: "Flair Plastic",
      manufacturer: "Flair Plastic Manufacturing"
    }
  }
};

// Generate structured data for category pages
export const generateCategoryStructuredData = (categoryId: string, language: string) => {
  const categorySEO = PRODUCT_CATEGORIES_SEO[categoryId];
  if (!categorySEO) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": categorySEO.structuredData.name[language] || categorySEO.structuredData.name.en,
    "description": categorySEO.structuredData.description[language] || categorySEO.structuredData.description.en,
    "url": `https://flairplastic.com/products/${categoryId}`,
    "mainEntity": {
      "@type": "ItemList",
      "name": categorySEO.structuredData.name[language] || categorySEO.structuredData.name.en,
      "description": categorySEO.structuredData.description[language] || categorySEO.structuredData.description.en,
      "brand": {
        "@type": "Brand",
        "name": categorySEO.structuredData.brand
      },
      "manufacturer": {
        "@type": "Organization",
        "name": categorySEO.structuredData.manufacturer,
        "url": "https://flairplastic.com"
      }
    },
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
          "name": categorySEO.structuredData.name[language] || categorySEO.structuredData.name.en,
          "item": `https://flairplastic.com/products/${categoryId}`
        }
      ]
    }
  };
};
