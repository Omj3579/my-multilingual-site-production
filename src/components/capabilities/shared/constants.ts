import { FeatureCard, ProcessStep, BilingualContent, RelatedCapability } from './types';

// Feature cards data for injection Moulding
export const injectionMouldingFeatures: {
  en: FeatureCard[];
  hu: FeatureCard[];
} = {
  en: [
    {
      title: "Multi-Component Injection",
      icon: "💠",
      description: "Combining different materials in a single Moulding cycle for complex parts with enhanced properties."
    },
    {
      title: "In-Mould Decoration",
      icon: "🎨",
      description: "Advanced techniques to incorporate graphics, textures, and patterns directly during the Moulding process."
    },
    {
      title: "Precision Engineering",
      icon: "⚙️",
      description: "Exceptional precision standards and consistency across high-volume production runs with detailed quality control."
    },
    {
      title: "Material Innovation",
      icon: "🔬",
      description: "Working with cutting-edge polymers, bio-plastics, and specialty compounds for optimal performance."
    }
  ],
  hu: [
    {
      title: "Többkomponensű Fröccsöntés",
      icon: "💠",
      description: "Különböző anyagok kombinálása egyetlen fröccsöntési ciklusban komplex, továbbfejlesztett tulajdonságokkal rendelkező alkatrészekhez."
    },
    {
      title: "Szerszámon Belüli Dekoráció",
      icon: "🎨",
      description: "Fejlett technikák grafika, textúra és minták közvetlen beépítésére a fröccsöntési folyamat során."
    },
    {
      title: "Precíziós Mérnöki Munka",
      icon: "⚙️",
      description: "Ultra-szoros tűrések és konzisztencia nagy volumenű gyártási futamoknál részletes minőségkontrollal."
    },
    {
      title: "Anyaginnováció",
      icon: "🔬",
      description: "Munkavégzés élvonalbeli polimerekkel, bio-műanyagokkal és speciális vegyületekkel az optimális teljesítmény érdekében."
    }
  ]
};

// Process steps for injection Moulding
export const injectionMouldingProcess: {
  en: ProcessStep[];
  hu: ProcessStep[];
} = {
  en: [
    { step: "01", title: "Design & Engineering", description: "Collaborative design optimization for manufacturability." },
    { step: "02", title: "Prototyping", description: "Rapid prototyping to validate design and material selection." },
    { step: "03", title: "Tooling", description: "Precision Mould creation with advanced CNC technology." },
    { step: "04", title: "Production", description: "Automated high-volume manufacturing with robotic assistance." },
    { step: "05", title: "Quality Assurance", description: "Comprehensive testing and inspection protocols." }
  ],
  hu: [
    { step: "01", title: "Tervezés & Mérnöki munka", description: "Együttműködő tervezési optimalizálás a gyárthatóság érdekében." },
    { step: "02", title: "Prototípuskészítés", description: "Gyors prototípuskészítés a tervezés és anyagválasztás validálására." },
    { step: "03", title: "Szerszámkészítés", description: "Precíziós szerszámkészítés fejlett CNC technológiával." },
    { step: "04", title: "Gyártás", description: "Automatizált nagy volumenű gyártás robotos támogatással." },
    { step: "05", title: "Minőségbiztosítás", description: "Átfogó tesztelési és ellenőrzési protokollok." }
  ]
};

// Manufacturing capabilities list
export const manufacturingCapabilities: BilingualContent[] = [
  {
    en: "Injection Moulding with 30-2500 ton machines",
    hu: "Fröccsöntés 30-2500 tonnás gépekkel"
  },
  {
    en: "Multi-shot & LSR capabilities", 
    hu: "Többkomponensű & LSR képességek"
  },
  {
    en: "In-Mould decoration & labeling",
    hu: "Szerszámon belüli dekoráció és címkézés"
  },
  {
    en: "Automated assembly lines",
    hu: "Automatizált összeszerelő sorok"
  },
  {
    en: "Quality testing & inspection",
    hu: "Minőségellenőrzés és vizsgálat"
  },
  {
    en: "Custom packaging solutions",
    hu: "Egyedi csomagolási megoldások"
  }
];

// Manufacturing overview content
export const manufacturingOverviewContent = {
  videoTitle: {
    en: 'Discover Our Manufacturing Process',
    hu: 'Fedezze fel gyártási folyamatunkat'
  },
  sections: {
    section1: {
      title: {
        en: "Plastic Injection Moulding and Contract Manufacturing",
        hu: "műanyag fröccsöntési és szerződéses gyártási"
      },
      content: {
        en: "At Flair-Plastic, we provide a comprehensive suite of plastic injection Moulding capabilities, positioning us as the premier partner for businesses in search of top-tier manufacturing solutions. Our expertise spans from traditional plastic injection Moulding to advanced techniques such as in-Moulding decoration (IMD), in-Moulding labelling (IML), and various decorative technologies. We specialize in over multi-shot injection Moulding, along with liquid silicone rubber (LSR) Moulding and injection blow Moulding. Our contract manufacturing services include project management, tooling management, and assembly, all designed to deliver a seamless end-to-end experience.",
        hu: "A Flair-Plastic-nél átfogó műanyag fröccsöntési képességeket kínálunk, ami a csúcskategóriás gyártási megoldásokat kereső vállalkozások elsőszámú partnerévé tesz minket. Szakértelmünk a hagyományos műanyag fröccsöntéstől a fejlett technikákig terjed, mint például a szerszámon belüli dekoráció (IMD), szerszámon belüli címkézés (IML) és különböző dekorációs technológiák. Többkomponensű fröccsöntésre, folyékony szilikon gumi (LSR) fröccsöntésre és fröccsfúvásra specializálódtunk. Szerződéses gyártási szolgáltatásaink magukban foglalják a projektmenedzsmentet, szerszámkezelést és összeszerelést, amelyek mind zökkenőmentes végpontok közötti élményt nyújtanak."
      }
    },
    section2: {
      title: {
        en: "Manufacturing Support & Unmatched Quality",
        hu: "Gyártási támogatás és páratlan minőség"
      },
      additionalContent: {
        en: "Our commitment to quality extends through every aspect of production, from material selection to final packaging. With ISO 9001:2015 certification and rigorous quality assurance protocols, we ensure consistent excellence across all manufacturing processes. Our experienced team provides comprehensive support throughout your product lifecycle, offering design assistance, production optimization, and continuous improvement initiatives.",
        hu: "Minőség iránti elkötelezettségünk a gyártás minden aspektusára kiterjed, az anyagválasztástól a végső csomagolásig. Az ISO 9001:2015 tanúsítvánnyal és szigorú minőségbiztosítási protokollokkal biztosítjuk a következetes kiválóságot minden gyártási folyamatban. Tapasztalt csapatunk átfogó támogatást nyújt a termék teljes életciklusán keresztül, tervezési segítséget, gyártási optimalizálást és folyamatos fejlesztési kezdeményezéseket kínálva."
      }
    }
  },
  cta: {
    en: 'Discuss Your Manufacturing Needs',
    hu: 'Beszéljünk gyártási igényeiről'
  }
};

// Commitment callout text content
export const commitmentText: BilingualContent = {
  en: "Flair-Plastic extends its commitment to excellence by offering comprehensive manufacturing support, including advanced engineering and design services, and a steadfast focus on client satisfaction through innovative technologies and optimized product performance.",
  hu: "A Flair-Plastic kiterjeszti kiválóság iránti elkötelezettségét azáltal, hogy átfogó gyártási támogatást nyújt, beleértve a fejlett mérnöki és tervezési szolgáltatásokat, valamint az ügyfelek elégedettségére való kitartó összpontosítást az innovatív technológiák és az optimalizált termékteljesítmény révén."
};

// Dynamic image arrays for each capability
export const capabilityImageArrays = {
  plasticInjection: [
    '/images/imd_iml-creatives/15.webp',
    '/images/imd_iml-creatives/IMD1.webp',
    '/images/imd_iml-creatives/IMD2.webp',
    '/images/imd_iml-creatives/IMD16.webp'
  ],
  inMouldLabelling: [
    '/images/imd_iml-creatives/IML2.webp',
    '/images/imd_iml-creatives/IML3.webp',
    '/images/imd_iml-creatives/IML4.webp',
    '/images/imd_iml-creatives/IML5.webp'
  ],
  inMouldDecoration: [
    '/images/imd_iml-creatives/IMD3.webp',
    '/images/imd_iml-creatives/IMD4.webp',
    '/images/imd_iml-creatives/IMD5.webp',
    '/images/imd_iml-creatives/IMD6.webp'
  ],
  injectionBlow: [
    '/images/imd_iml-creatives/IMD7.webp',
    '/images/imd_iml-creatives/IMD8.webp',
    '/images/imd_iml-creatives/IMD11.webp',
    '/images/imd_iml-creatives/IMD57.webp'
  ],
  surfaceFinishing: [
    '/images/imd_iml-creatives/IMD13.webp',
    '/images/imd_iml-creatives/IMD16.webp',
    '/images/imd_iml-creatives/15.webp',
    '/images/imd_iml-creatives/IMD1.webp'
  ]
};

// Helper function to get a random image from an array
export const getRandomImage = (imageArray: string[]): string => {
  return imageArray[Math.floor(Math.random() * imageArray.length)];
};

// Helper function to get image by index (for cycling)
export const getImageByIndex = (imageArray: string[], index: number): string => {
  return imageArray[index % imageArray.length];
};

// Helper function to get a time-based rotating image (changes every 5 seconds)
export const getTimeBasedImage = (imageArray: string[]): string => {
  const interval = 5000; // 5 seconds
  const index = Math.floor(Date.now() / interval) % imageArray.length;
  return imageArray[index];
};

// Related capabilities data with dynamic images
export const relatedCapabilities: RelatedCapability[] = [
  {
    title: { en: 'Plastic Injection', hu: 'Műanyag Fröccsöntés' },
    summary: { 
      en: 'Advanced plastic injection Moulding solutions for precision manufacturing',
      hu: 'Fejlett műanyag fröccsöntési megoldások precíziós gyártáshoz'
    },
    path: '/capabilities/plastic-injection',
    image: getTimeBasedImage(capabilityImageArrays.plasticInjection), // Dynamic time-based image
    imageArray: capabilityImageArrays.plasticInjection // Full array for dynamic switching
  },
  {
    title: { en: 'In-Mould Labelling', hu: 'Címkézés Fröccsöntés Közben' },
    summary: {
      en: 'Seamless integration of labels during the injection Moulding process',
      hu: 'Címkék zökkenőmentes integrálása a fröccsöntési folyamat során'
    },
    path: '/capabilities/in-mould-labelling',
    image: getTimeBasedImage(capabilityImageArrays.inMouldLabelling),
    imageArray: capabilityImageArrays.inMouldLabelling
  },
  {
    title: { en: 'In-Mould Decoration', hu: 'Dekoráció Fröccsöntés Közben' },
    summary: {
      en: 'High-quality decorative finishes applied during Moulding',
      hu: 'Kiváló minőségű dekoratív felületek alkalmazása fröccsöntés közben'
    },
    path: '/capabilities/in-mould-decoration',
    image: getTimeBasedImage(capabilityImageArrays.inMouldDecoration),
    imageArray: capabilityImageArrays.inMouldDecoration
  },
  {
    title: { en: 'Injection Blow', hu: 'Fröccsöntött Fújás' },
    summary: {
      en: 'Combined injection and blow Moulding for hollow plastic products',
      hu: 'Kombinált fröccsöntés és fúvás üreges műanyag termékekhez'
    },
    path: '/capabilities/injection-blow',
    image: getTimeBasedImage(capabilityImageArrays.injectionBlow),
    imageArray: capabilityImageArrays.injectionBlow
  },
  {
    title: { en: 'Surface Finishing', hu: 'Felületkezelés' },
    summary: {
      en: 'Expert surface treatment and finishing solutions',
      hu: 'Szakértői felületkezelési és -kikészítési megoldások'
    },
    path: '/capabilities/surface-finishing',
    image: getTimeBasedImage(capabilityImageArrays.surfaceFinishing),
    imageArray: capabilityImageArrays.surfaceFinishing
  }
];

// Common highlight words for text animations
export const highlightWords = {
  en: ["30 years", "prominent", "innovation", "high-quality", "worldwide", "commitment", "excellence", "comprehensive", "manufacturing", "support", "client", "satisfaction", "innovative", "technologies", "optimized"],
  hu: ["30 éve", "meghatározó", "innovációt", "kiváló", "világszerte", "kiválóság", "elkötelezettségét", "átfogó", "gyártási", "támogatást", "ügyfelek", "elégedettségére", "innovatív", "technológiák", "optimalizált"]
};
