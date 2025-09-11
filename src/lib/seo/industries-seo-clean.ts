// Industries SEO Data - Rich Marketing Content for Flair Plastic
export const INDUSTRIES_SEO_DATA = {
  'power-tools': {
    title: {
      en: 'Power Tools Manufacturing | Precision Plastic Components | Flair Plastic',
      hu: 'Elektromos Szerszám Gyártás | Precíziós Műanyag Alkatrészek | Flair Plastic',
      de: 'Elektrowerkzeuge Fertigung | Präzisions-Kunststoffkomponenten | Flair Plastic'
    },
    description: {
      en: 'Industry-leading plastic injection Moulding for power tools. Precision components, durable housings, and ergonomic grips for professional-grade power tools. ISO certified quality.',
      hu: 'Iparágvezető műanyag fröccsöntés elektromos szerszámokhoz. Precíziós alkatrészek, tartós burkolatok és ergonomikus fogantyúk professzionális elektromos szerszámokhoz. ISO tanúsított minőség.',
      de: 'Branchenführender Kunststoffspritzguss für Elektrowerkzeuge. Präzisionskomponenten, langlebige Gehäuse und ergonomische Griffe für professionelle Elektrowerkzeuge. ISO-zertifizierte Qualität.'
    },
    keywords: {
      en: ['power tools plastic components', 'drill housing manufacturing', 'power tool grips'],
      hu: ['elektromos szerszám műanyag alkatrészek', 'fúró burkolat gyártás', 'elektromos szerszám fogantyúk'],
      de: ['Elektrowerkzeuge Kunststoffkomponenten', 'Bohrmaschinen Gehäuse Fertigung', 'Elektrowerkzeug Griffe']
    },
    content: {
      en: 'We manufacture precision plastic components for leading power tool brands. Our expertise includes durable tool housings, ergonomic grips, battery cases, and protective covers.',
      hu: 'Precíziós műanyag alkatrészeket gyártunk vezető elektromos szerszám márkák számára. Szaktudásunk magában foglalja a tartós szerszám burkolatokat, ergonomikus fogantyúkat, akkumulátor tokokat.',
      de: 'Wir fertigen Präzisions-Kunststoffkomponenten für führende Elektrowerkzeug-Marken. Unsere Expertise umfasst langlebige Werkzeuggehäuse, ergonomische Griffe, Batteriegehäuse.'
    }
  },

  'household-products': {
    title: {
      en: 'Household Products Manufacturing | Kitchen & Home Plastic Components | Flair Plastic',
      hu: 'Háztartási Termékek Gyártás | Konyha & Otthon Műanyag Alkatrészek | Flair Plastic',
      de: 'Haushaltsprodukte Fertigung | Küche & Haus Kunststoffkomponenten | Flair Plastic'
    },
    description: {
      en: 'Premium plastic manufacturing for household products. Kitchen appliances, storage solutions, home organization, and functional household items.',
      hu: 'Prémium műanyag gyártás háztartási termékekhez. Konyhai készülékek, tárolási megoldások, otthoni szervezés és funkcionális háztartási cikkek.',
      de: 'Premium-Kunststofffertigung für Haushaltsprodukte. Küchengeräte, Aufbewahrungslösungen, Hausorganisation und funktionale Haushaltsgegenstände.'
    },
    keywords: {
      en: ['household plastic products', 'kitchen appliance components', 'storage container manufacturing'],
      hu: ['háztartási műanyag termékek', 'konyhai készülék alkatrészek', 'tárolóedény gyártás'],
      de: ['Haushalts Kunststoffprodukte', 'Küchengeräte Komponenten', 'Aufbewahrungsbehälter Fertigung']
    },
    content: {
      en: 'Our household products division creates innovative plastic solutions for modern homes. From kitchen appliances to storage containers, we use food-safe materials.',
      hu: 'Háztartási termékek részlegünk innovatív műanyag megoldásokat hoz létre modern otthonok számára. A konyhai készülékektől a tárolóedényekig élelmiszer-biztonságos anyagokat használunk.',
      de: 'Unsere Haushaltsprodukte-Abteilung entwickelt innovative Kunststofflösungen für moderne Haushalte. Von Küchengeräten bis zu Aufbewahrungsbehältern verwenden wir lebensmittelsichere Materialien.'
    }
  },

  'hygiene-personal-care': {
    title: {
      en: 'Hygiene & Personal Care Packaging | Cosmetic Containers | Flair Plastic',
      hu: 'Higiénia és Személyes Ápolás Csomagolás | Kozmetikai Tárolók | Flair Plastic',
      de: 'Hygiene & Körperpflege Verpackung | Kosmetik Container | Flair Plastic'
    },
    description: {
      en: 'Specialized manufacturing of hygiene and personal care packaging. Premium cosmetic containers, dispensers, caps, and closures.',
      hu: 'Specializált higiéniai és személyes ápolási csomagolás gyártás. Prémium kozmetikai tárolók, adagolók, kupakok és zárak.',
      de: 'Spezialisierte Fertigung von Hygiene- und Körperpflegeverpackungen. Premium-Kosmetikbehälter, Spender, Verschlüsse und Kappen.'
    },
    keywords: {
      en: ['cosmetic packaging manufacturing', 'personal care containers', 'hygiene product packaging'],
      hu: ['kozmetikai csomagolás gyártás', 'személyes ápolás tárolók', 'higiéniai termék csomagolás'],
      de: ['Kosmetikverpackung Fertigung', 'Körperpflege Container', 'Hygieneprodukten Verpackung']
    },
    content: {
      en: 'We excel in manufacturing high-quality packaging for hygiene and personal care products. Our portfolio includes cosmetic containers and pump dispensers.',
      hu: 'Kiválóan teljesítünk a higiéniai és személyes ápolási termékek magas minőségű csomagolásának gyártásában. Portfóliónk kozmetikai tárolókat és szivattyús adagolókat tartalmaz.',
      de: 'Wir zeichnen uns durch die Herstellung hochwertiger Verpackungen für Hygiene- und Körperpflegeprodukte aus. Unser Portfolio umfasst Kosmetikbehälter und Pumpspender.'
    }
  }
};

// Industry-specific structured data schemas
export const INDUSTRY_SCHEMAS = {
  manufacturing: {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "Flair Plastic",
    "url": "https://flair-plastic.hu",
    "description": "Leading plastic injection Moulding and contract manufacturing company",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Hungary",
      "addressLocality": "Budapest"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+36-1-234-5678",
      "contactType": "customer service"
    }
  },
  
  service: (industry: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Plastic Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "Flair Plastic",
      "url": "https://flair-plastic.hu"
    },
    "areaServed": "Europe"
  })
};
