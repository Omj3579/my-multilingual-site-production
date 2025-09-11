// SEO Configuration and Constants
export const SEO_CONFIG = {
  site: {
    name: 'Flair Plastic',
    domain: 'https://flair-plastic.hu',
    description: {
      en: 'Leading plastic injection molding and contract manufacturing company specializing in power tools, household products, hygiene & personal care, agriculture, medical & healthcare, and sustainable manufacturing solutions.',
      hu: 'Vezető műanyag fröccsöntési és szerződéses gyártási vállalat, amely elektromos szerszámok, háztartási termékek, higiéniai és személyes ápolási termékek, mezőgazdasági, orvosi és egészségügyi területeken kínál fenntartható, magas minőségű megoldásokat.',
      de: 'Führendes Unternehmen für Kunststoffspritzguss und Lohnfertigung, spezialisiert auf Elektrowerkzeuge, Haushaltsprodukte, Hygiene- und Körperpflegeartikel, Landwirtschaft, Medizin- und Gesundheitswesen sowie nachhaltige Fertigungslösungen.'
    },
    keywords: {
      en: [
        'plastic injection molding',
        'contract manufacturing',
        'power tools manufacturing',
        'household products plastic',
        'hygiene personal care packaging',
        'agriculture plastic products',
        'medical healthcare plastics',
        'consumer electronics housing',
        'food beverage packaging',
        'toys educational products',
        'furniture components plastic',
        'pharmaceutical packaging',
        'caps closures manufacturing',
        'cosmetics containers',
        'baby products plastic',
        'pet products manufacturing',
        'gardening tools accessories',
        'sanitary products plastic',
        'cleaning tools accessories',
        'waste management products',
        'sustainable plastic manufacturing',
        'ISO certified manufacturing',
        'plastic recycling solutions'
      ],
      hu: [
        'műanyag fröccsöntés',
        'szerződéses gyártás',
        'elektromos szerszám gyártás',
        'háztartási termék műanyag',
        'higiéniai személyes ápolás csomagolás',
        'mezőgazdasági műanyag termékek',
        'orvosi egészségügyi műanyagok',
        'fogyasztói elektronika burkolat',
        'élelmiszer ital csomagolás',
        'játék oktatási termékek',
        'bútor alkatrészek műanyag',
        'gyógyszerészeti csomagolás',
        'kupak zár gyártás',
        'kozmetikai tárolók',
        'baba termékek műanyag',
        'háziállat termékek gyártás',
        'kerti szerszámok kiegészítők',
        'szaniter termékek műanyag',
        'tisztítószerszám kiegészítők',
        'hulladékkezelési termékek',
        'fenntartható műanyag gyártás',
        'ISO tanúsított gyártás',
        'műanyag újrahasznosítás'
      ],
      de: [
        'Kunststoffspritzguss',
        'Lohnfertigung',
        'Elektrowerkzeuge Fertigung',
        'Haushaltsprodukte Kunststoff',
        'Hygiene Körperpflege Verpackung',
        'Landwirtschaft Kunststoffprodukte',
        'Medizin Gesundheitswesen Kunststoffe',
        'Verbraucherelektronik Gehäuse',
        'Lebensmittel Getränke Verpackung',
        'Spielzeug Bildungsprodukte',
        'Möbel Komponenten Kunststoff',
        'Pharmazeutische Verpackung',
        'Verschlüsse Kappen Fertigung',
        'Kosmetik Container',
        'Baby Produkte Kunststoff',
        'Haustier Produkte Fertigung',
        'Gartenwerkzeuge Zubehör',
        'Sanitärprodukte Kunststoff',
        'Reinigungswerkzeuge Zubehör',
        'Abfallwirtschaft Produkte',
        'nachhaltige Kunststoff Fertigung',
        'ISO zertifizierte Fertigung',
        'Kunststoff Recycling'
      ]
    },
    author: 'Flair Plastic',
    twitterHandle: '@flairplastic',
    facebookPage: 'https://facebook.com/flairplastic',
    linkedinPage: 'https://linkedin.com/company/flair-plastic',
    logo: 'https://flair-plastic.hu/logos/flair_plastic_logo_cmyk_full_-_MAIN.png',
    favicon: '/favicon.ico',
    languages: ['en', 'hu', 'de'],
    defaultLanguage: 'en',
    themeColor: '#3b82f6',
    backgroundColor: '#ffffff',
    // Open Graph Images for different contexts
    ogImages: {
      default: 'https://flair-plastic.hu/images/og/flair-plastic-og-default.jpg',
      home: 'https://flair-plastic.hu/images/og/flair-plastic-home.jpg',
      industries: 'https://flair-plastic.hu/images/og/flair-plastic-industries.jpg',
      services: 'https://flair-plastic.hu/images/og/flair-plastic-services.jpg',
      products: 'https://flair-plastic.hu/images/og/flair-plastic-products.jpg',
      contact: 'https://flair-plastic.hu/images/og/flair-plastic-contact.jpg',
      company: 'https://flair-plastic.hu/images/og/flair-plastic-company.jpg'
    }
  },
  
  jsonLD: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Flair Plastic",
      "url": "https://flair-plastic.hu",
      "logo": "https://flair-plastic.hu/logos/flair_plastic_logo_cmyk_full_-_MAIN.png",
      "description": "Leading plastic injection molding and contract manufacturing company specializing in power tools, household products, hygiene & personal care, and sustainable manufacturing solutions",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Hungary",
        "addressLocality": "Budapest"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+36-1-234-5678",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hungarian", "German"]
      },
      "sameAs": [
        "https://facebook.com/flairplastic",
        "https://linkedin.com/company/flair-plastic",
        "https://twitter.com/flairplastic"
      ],
      "foundingDate": "2010",
      "numberOfEmployees": "50-100",
      "industry": "Plastic Manufacturing",
      "serviceArea": "Europe"
    },
    
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Flair Plastic",
      "url": "https://flair-plastic.hu",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://flair-plastic.hu/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": ["en", "hu", "de"]
    }
  },
  
  openGraph: {
    type: 'website',
    siteName: 'Flair Plastic',
    images: {
      default: '/images/og-default.jpg',
      logo: '/images/og-logo.png'
    }
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
} as const;

// Page-specific SEO configurations
export const PAGE_SEO_CONFIG = {
  home: {
    title: {
      en: 'Flair Plastic: Advanced Injection Molding & Sustainable Manufacturing Solutions',
      hu: 'Flair Plastic: Fejlett Fröccsöntés és Fenntartható Gyártási Megoldások',
      de: 'Flair Plastic: Fortschrittlicher Spritzguss & Nachhaltige Fertigungslösungen'
    },
    description: {
      en: 'Discover Flair Plastic\'s cutting-edge injection molding expertise. From precision engineering to eco-friendly solutions, we deliver exceptional quality for power tools, household products & more. Get your custom quote today!',
      hu: 'Fedezze fel a Flair Plastic élvonalbeli fröccsöntési szakértelmét. A precíziós mérnökségtől az környezetbarát megoldásokig kivételes minőséget szállítunk elektromos szerszámok, háztartási termékek és egyebek számára. Kérje egyedi ajánlatát még ma!',
      de: 'Entdecken Sie Flair Plastics hochmoderne Spritzguss-Expertise. Von Präzisionstechnik bis zu umweltfreundlichen Lösungen liefern wir außergewöhnliche Qualität für Elektrowerkzeuge, Haushaltsprodukte und mehr. Holen Sie sich heute Ihr individuelles Angebot!'
    }
  },
  
  services: {
    title: {
      en: 'Premium Manufacturing Services: Injection Molding Excellence & Custom Solutions',
      hu: 'Prémium Gyártási Szolgáltatások: Fröccsöntési Kiválóság és Egyedi Megoldások',
      de: 'Premium Fertigungsdienstleistungen: Spritzguss-Exzellenz & Maßlösungen'
    },
    description: {
      en: 'Explore our comprehensive manufacturing capabilities: precision injection molding, in-mold technologies, sustainable solutions & quality assurance. Transform your ideas into reality with Europe\'s trusted manufacturing partner.',
      hu: 'Fedezze fel átfogó gyártási képességeinket: precíziós fröccsöntés, forma technológiák, fenntartható megoldások és minőségbiztosítás. Alakítsa ötleteit valósággá Európa megbízható gyártási partnerével.',
      de: 'Entdecken Sie unsere umfassenden Fertigungskapazitäten: Präzisions-Spritzguss, In-Mold-Technologien, nachhaltige Lösungen & Qualitätssicherung. Verwandeln Sie Ihre Ideen mit Europas vertrauensvollem Fertigungspartner in die Realität.'
    }
  },
  
  products: {
    title: {
      en: 'Innovative Product Solutions: Power Tools, Household & Healthcare Manufacturing',
      hu: 'Innovatív Termékmegoldások: Elektromos Szerszámok, Háztartási és Egészségügyi Gyártás',
      de: 'Innovative Produktlösungen: Elektrowerkzeuge, Haushalts- & Gesundheitsfertigung'
    },
    description: {
      en: 'From power tool components to healthcare packaging - discover our premium product portfolio. Engineered for durability, designed for success. See how our precision manufacturing can elevate your brand.',
      hu: 'Az elektromos szerszám alkatrészektől az egészségügyi csomagolásig - fedezze fel prémium termékportfóliónkat. Tartósságra tervezve, sikerhez formálva. Látja meg, hogyan emelheti márkáját precíziós gyártásunk.',
      de: 'Von Elektrowerkzeug-Komponenten bis zu Gesundheitsverpackungen - entdecken Sie unser Premium-Produktportfolio. Für Langlebigkeit entwickelt, für Erfolg gestaltet. Sehen Sie, wie unsere Präzisionsfertigung Ihre Marke aufwerten kann.'
    }
  },
  
  sustainability: {
    title: {
      en: 'Eco-Forward Manufacturing: Sustainable Plastics & Green Innovation Leadership',
      hu: 'Környezettudatos Gyártás: Fenntartható Műanyagok és Zöld Innovációs Vezetés',
      de: 'Öko-Orientierte Fertigung: Nachhaltige Kunststoffe & Grüne Innovations-Führung'
    },
    description: {
      en: 'Leading the green revolution in plastic manufacturing! Discover our circular economy approach, bio-based materials, and carbon-neutral production. Join thousands of companies choosing sustainable excellence.',
      hu: 'A zöld forradalom vezetői a műanyaggyártásban! Fedezze fel körforgásos gazdasági megközelítésünket, bio-alapú anyagainkat és szén-semleges termelésünket. Csatlakozzon a fenntartható kiválóságot választó vállalatokhoz.',
      de: 'Führend in der grünen Revolution der Kunststoffherstellung! Entdecken Sie unseren Kreislaufwirtschaftsansatz, biobasierte Materialien und CO2-neutrale Produktion. Schließen Sie sich tausenden von Unternehmen an, die nachhaltige Exzellenz wählen.'
    }
  },
  
  resources: {
    title: {
      en: 'Manufacturing Intelligence Hub: Expert Insights, Success Stories & Industry Trends',
      hu: 'Gyártási Intelligencia Központ: Szakértői Betekintések, Sikertörténetek és Iparági Trendek',
      de: 'Fertigungs-Intelligence-Hub: Experten-Einblicke, Erfolgsgeschichten & Branchentrends'
    },
    description: {
      en: 'Unlock manufacturing success with our expert knowledge base. Access exclusive case studies, technical guides, and industry forecasts. Stay ahead of the competition with insider insights.',
      hu: 'Szabadítsa fel a gyártási sikert szakértői tudásbázisunkkal. Hozzáférés exkluzív esettanulmányokhoz, műszaki útmutatókhoz és iparági előrejelzésekhez. Maradjon a verseny előtt bennfentes betekintésekkel.',
      de: 'Erschließen Sie Fertigungserfolg mit unserer Experten-Wissensbasis. Zugang zu exklusiven Fallstudien, technischen Leitfäden und Branchenprognosen. Bleiben Sie der Konkurrenz voraus mit Insider-Einblicken.'
    }
  },
  
  contact: {
    title: {
      en: 'Get Started Today: Expert Consultation & Custom Manufacturing Quotes',
      hu: 'Kezdje el Ma: Szakértői Konzultáció és Egyedi Gyártási Árajánlatok',
      de: 'Starten Sie Heute: Experten-Beratung & Maßgeschneiderte Fertigungs-Angebote'
    },
    description: {
      en: 'Ready to transform your product vision into reality? Connect with our manufacturing experts for personalized consultation, technical guidance, and competitive quotes. Your success story starts here!',
      hu: 'Készen áll, hogy termékvízióját valósággá alakítsa? Kapcsolódjon gyártási szakértőinkhez személyre szabott konzultációért, műszaki iránymutatásért és versenyképes árajánlatokért. Az Ön sikertörténete itt kezdődik!',
      de: 'Bereit, Ihre Produktvision in die Realität umzusetzen? Verbinden Sie sich mit unseren Fertigungsexperten für persönliche Beratung, technische Anleitung und wettbewerbsfähige Angebote. Ihre Erfolgsgeschichte beginnt hier!'
    }
  }
} as const;

// Technical SEO settings
export const TECHNICAL_SEO = {
  sitemap: {
    changeFrequency: {
      home: 'weekly',
      services: 'monthly',
      products: 'monthly',
      resources: 'weekly',
      blog: 'weekly',
      news: 'weekly',
      caseStudies: 'monthly'
    },
    priority: {
      home: 1.0,
      services: 0.9,
      products: 0.9,
      resources: 0.8,
      blog: 0.7,
      news: 0.6,
      caseStudies: 0.8
    }
  },
  
  performance: {
    preloadFonts: [
      '/fonts/Inter-Regular.woff2',
      '/fonts/Inter-SemiBold.woff2',
      '/fonts/Inter-Bold.woff2'
    ],
    criticalResources: [
      '/images/hero-bg.webp',
      '/images/logo.svg'
    ]
  }
} as const;

export type Language = 'en' | 'hu' | 'de';
export type PageType = keyof typeof PAGE_SEO_CONFIG;
