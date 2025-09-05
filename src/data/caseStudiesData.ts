 // Author interface for case studies
export interface Author {
  id: string;
  name: string;
  role: {
    en: string;
    hu: string;
    de: string;
  };
  avatar?: string;
}

// Case study interface
export interface CaseStudy {
  id: string;
  slug: string;
  category: 'case-study'; // Always case-study for this file
  title: {
    en: string;
    hu: string;
    de: string;
  };
  description: {
    en: string;
    hu: string;
    de: string;
  };
  content: {
    en: string;
    hu: string;
    de: string;
  };
  image: string;
  thumbnailImage?: string;
  date: string; // ISO format: YYYY-MM-DD
  updatedAt?: string; // ISO format: YYYY-MM-DD
  author: Author;
  readTime: number; // in minutes
  tags: string[];
  featured: boolean;
  customUrl?: string; // For custom case study pages
  // Case study specific fields
  client: {
    name: string;
    industry: string;
    size: string;
  };
  challenge: {
    en: string;
    hu: string;
    de: string;
  };
  solution: {
    en: string;
    hu: string;
    de: string;
  };
  results: {
    metrics: {
      label: { en: string; hu: string; de: string };
      value: string;
      improvement?: string;
    }[];
    testimonial?: {
      quote: { en: string; hu: string; de: string };
      author: string;
      position: string;
    };
  };
  industry: string;
  projectDuration: string;
  technologies: string[];
}

// Case study authors - standardized naming
export const caseStudyAuthors: Author[] = [
  {
    id: 'anna-kovacs',
    name: 'Dr. Anna Kovács',
    role: {
      en: 'Head of Research & Development',
      hu: 'Kutatás-fejlesztési vezető',
      de: 'Leiterin der Forschung & Entwicklung'
    },
    avatar: '/images/team/anna-kovacs.jpg'
  },
  {
    id: 'mark-weber',
    name: 'Mark Weber',
    role: {
      en: 'Technical Project Manager',
      hu: 'Műszaki projektmenedzser',
      de: 'Technischer Projektmanager'
    },
    avatar: '/images/team/mark-weber.jpg'
  },
  {
    id: 'julia-nagy',
    name: 'Júlia Nagy',
    role: {
      en: 'Solutions Architect',
      hu: 'Megoldás-architekt',
      de: 'Lösungsarchitektin'
    },
    avatar: '/images/team/julia-nagy.jpg'
  },
  {
    id: 'peter-smith',
    name: 'Peter Smith',
    role: {
      en: 'Senior Materials Engineer',
      hu: 'Vezető anyagmérnök',
      de: 'Senior Materialingenieur'
    },
    avatar: '/images/team/peter-smith.jpg'
  }
];

// Case studies data - standardized naming
export const caseStudyItems: CaseStudy[] = [
  {
    id: 'packaging-innovation',
    slug: 'sustainable-packaging-innovation',
    category: 'case-study',
    title: {
      en: 'Reducing Packaging Waste by 60%',
      hu: 'A csomagolási hulladék 60%-os csökkentése',
      de: 'Verpackungsabfall um 60% reduzieren'
    },
    description: {
      en: 'How our innovative design solutions helped a major food producer significantly reduce plastic packaging while maintaining product protection.',
      hu: 'Hogyan segítettek innovatív tervezési megoldásaink egy nagy élelmiszergyártónak jelentősen csökkenteni a műanyag csomagolást, miközben megőrizték a termék védelmét.',
      de: 'Wie unsere innovativen Designlösungen einem großen Lebensmittelhersteller halfen, Kunststoffverpackungen deutlich zu reduzieren und gleichzeitig den Produktschutz zu gewährleisten.'
    },
    client: {
      name: 'GreenFood Europe',
      industry: 'Food & Beverage',
      size: 'Enterprise'
    },
    challenge: {
      en: 'GreenFood needed to reduce packaging waste by 50% while maintaining product freshness and shelf life for their organic food line.',
      hu: 'A GreenFood-nak 50%-kal kellett csökkentenie a csomagolási hulladékot, miközben megőrizte a termékek frissességét és eltarthatóságát bio élelmiszer vonalában.',
      de: 'GreenFood musste die Verpackungsabfälle um 50% reduzieren und gleichzeitig die Produktfrische und Haltbarkeit ihrer Bio-Lebensmittellinie beibehalten.'
    },
    solution: {
      en: 'We developed a revolutionary thin-walled container design using bio-based materials with optimized barrier properties.',
      hu: 'Forradalmi vékonyfalú tárolóedény-tervezést fejlesztettünk ki bio-alapú anyagok felhasználásával, optimalizált barrier tulajdonságokkal.',
      de: 'Wir entwickelten ein revolutionäres Dünnwand-Behälterdesign mit biobasierten Materialien und optimierten Barriereeigenschaften.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Waste Reduction', hu: 'Hulladékcsökkentés', de: 'Abfallreduzierung' },
          value: '60%',
          improvement: 'exceeded target'
        },
        {
          label: { en: 'Cost Savings', hu: 'Költségmegtakarítás', de: 'Kosteneinsparungen' },
          value: '€2.3M',
          improvement: 'annually'
        },
        {
          label: { en: 'Carbon Footprint', hu: 'Karbon-lábnyom', de: 'CO2-Fußabdruck' },
          value: '45%',
          improvement: 'reduction'
        }
      ],
      testimonial: {
        quote: {
          en: 'Flair Plastic exceeded our expectations. The new packaging design not only met our sustainability goals but actually improved our product presentation.',
          hu: 'A Flair Plastic túlteljesítette elvárásainkat. Az új csomagolási tervezés nemcsak teljesítette fenntarthatósági céljainkat, hanem javította termékbemutatásunkat is.',
          de: 'Flair Plastic übertraf unsere Erwartungen. Das neue Verpackungsdesign erfüllte nicht nur unsere Nachhaltigkeitsziele, sondern verbesserte auch unsere Produktpräsentation.'
        },
        author: 'Maria Schmidt',
        position: 'Sustainability Director, GreenFood Europe'
      }
    },
    content: {
      en: `<h2>Project Overview</h2>
      <p>GreenFood Europe, a leading organic food producer, approached us with a critical challenge: reduce packaging waste by 50% while maintaining product quality and shelf life.</p>
      
      <h2>The Challenge</h2>
      <p>Traditional packaging was generating significant waste and facing increasing consumer backlash. The company needed a solution that would:</p>
      <ul>
        <li>Reduce material usage without compromising protection</li>
        <li>Maintain product freshness and extend shelf life</li>
        <li>Appeal to environmentally conscious consumers</li>
        <li>Be cost-effective for large-scale production</li>
      </ul>
      
      <h2>Our Solution</h2>
      <p>We developed a comprehensive approach combining material innovation with design optimization:</p>
      <ul>
        <li>Bio-based polymer blend with enhanced barrier properties</li>
        <li>Thin-wall molding technology reducing material usage by 40%</li>
        <li>Innovative closure system eliminating secondary packaging</li>
        <li>Smart labeling integration for enhanced consumer experience</li>
      </ul>
      
      <h2>Implementation Process</h2>
      <p>The project was executed in three phases over six months, involving close collaboration between our R&D team and GreenFood's product development specialists.</p>
      
      <h2>Results and Impact</h2>
      <p>The implementation exceeded all expectations, achieving a 60% reduction in packaging waste while improving product presentation and customer satisfaction.</p>`,
      
      hu: `<h2>Projekt áttekintés</h2>
      <p>A GreenFood Europe, egy vezető bio élelmiszergyártó, kritikus kihívással fordult hozzánk: csökkentse a csomagolási hulladékot 50%-kal, miközben megőrzi a termékminőséget és eltarthatóságot.</p>
      
      <h2>A kihívás</h2>
      <p>A hagyományos csomagolás jelentős hulladékot generált és növekvő fogyasztói ellenállással kellett szembenéznie. A cégnek olyan megoldásra volt szüksége, amely:</p>
      <ul>
        <li>Csökkenti az anyagfelhasználást anélkül, hogy veszélyeztetné a védelmet</li>
        <li>Megőrzi a termék frissességét és meghosszabbítja az eltarthatóságot</li>
        <li>Vonzza a környezettudatos fogyasztókat</li>
        <li>Költséghatékony nagy volumenű gyártás esetén</li>
      </ul>
      
      <h2>Megoldásunk</h2>
      <p>Átfogó megközelítést dolgoztunk ki, amely ötvözi az anyaginnovációt a tervezési optimalizálással:</p>
      <ul>
        <li>Bioalapú polimerek keveréke, fokozott barrier tulajdonságokkal</li>
        <li>Vékonyfalú fröccsöntési technológia, amely 40%-kal csökkenti az anyagfelhasználást</li>
        <li>Újító zárórendszer, amely megszünteti a másodlagos csomagolást</li>
        <li>Okos címkézés integrálása a fogyasztói élmény fokozása érdekében</li>
      </ul>
      
      <h2>Megvalósítási folyamat</h2>
      <p>A projektet három fázisban hajtották végre hat hónap alatt, szoros együttműködésben R&D csapatunk és a GreenFood termékfejlesztési szakértői között.</p>
      
      <h2>Eredmények és hatás</h2>
      <p>A megvalósítás minden elvárást felülmúlt, 60%-os csomagolási hulladék-csökkentést ért el, miközben javította a termékbemutatást és a vásárlói elégedettséget.</p>`,
      
      de: `<h2>Projektübersicht</h2>
      <p>GreenFood Europe, ein führender Bio-Lebensmittelhersteller, kam mit einer kritischen Herausforderung zu uns: Verpackungsabfall um 50% reduzieren und gleichzeitig Produktqualität und Haltbarkeit beibehalten.</p>
      
      <h2>Die Herausforderung</h2>
      <p>Herkömmliche Verpackungen erzeugten erheblichen Abfall und stießen auf zunehmenden Verbraucherwiderstand. Das Unternehmen benötigte eine Lösung, die:</p>
      <ul>
        <li>Materialverbrauch reduziert, ohne den Schutz zu gefährden</li>
        <li>Produktfrische erhält und die Haltbarkeit verlängert</li>
        <li>Umweltbewusste Verbraucher anspricht</li>
        <li>Kosteneffektiv für die Großproduktion ist</li>
      </ul>
      
      <h2>Unsere Lösung</h2>
      <p>Wir entwickelten einen umfassenden Ansatz, der Materialinnovation mit Designoptimierung kombiniert:</p>
      <ul>
        <li>Biobasierte Polymermischung mit verbesserten Barriereeigenschaften</li>
        <li>Dünnwandige Spritzgießtechnologie, die den Materialverbrauch um 40% reduziert</li>
        <li>Innovatives Verschlusssystem, das Sekundärverpackungen eliminiert</li>
        <li>Intelligente Etikettierung für ein verbessertes Verbrauchererlebnis</li>
      </ul>
      
      <h2>Umsetzungsprozess</h2>
      <p>Das Projekt wurde in drei Phasen über einen Zeitraum von sechs Monaten durchgeführt, wobei eng mit unserem F&E-Team und den Produktentwicklungsspezialisten von GreenFood zusammengearbeitet wurde.</p>
      
      <h2>Ergebnisse und Auswirkungen</h2>
      <p>Die Umsetzung übertraf alle Erwartungen und erreichte eine 60%ige Reduzierung der Verpackungsabfälle bei gleichzeitiger Verbesserung der Produktpräsentation und Kundenzufriedenheit.</p>`
    },
    image: '/images/case-studies/packaging-innovation.jpg',
    thumbnailImage: '/images/case-studies/packaging-innovation-thumb.jpg',
    date: '2024-02-05',
    author: caseStudyAuthors[0],
    readTime: 8,
    tags: ['packaging', 'waste-reduction', 'food-industry', 'sustainability'],
    featured: true,
    industry: 'Food & Beverage',
    projectDuration: '6 months',
    technologies: ['Bio-based plastics', 'Thin-wall molding', 'Barrier coatings']
  },
  {
    id: 'automotive-lightweight',
    slug: 'automotive-lightweight-components',
    category: 'case-study',
    title: {
      en: 'Automotive Lightweight Components Revolution',
      hu: 'Autóipari könnyű alkatrészek forradalom',
      de: 'Revolution der Leichtbau-Komponenten in der Automobilindustrie'
    },
    description: {
      en: 'Developing ultra-lightweight plastic components that reduced vehicle weight by 15% while improving safety standards.',
      hu: 'Ultra-könnyű műanyag alkatrészek fejlesztése, amelyek 15%-kal csökkentették a jármű súlyát, miközben javították a biztonsági szabványokat.',
      de: 'Entwicklung von ultraleichten Kunststoffkomponenten, die das Fahrzeuggewicht um 15% reduzierten und gleichzeitig die Sicherheitsstandards verbesserten.'
    },
    client: {
      name: 'AutoTech Industries',
      industry: 'Automotive',
      size: 'Enterprise'
    },
    challenge: {
      en: 'AutoTech needed to reduce vehicle weight significantly to meet new fuel efficiency regulations while maintaining crash safety standards.',
      hu: 'Az AutoTech-nak jelentősen csökkentenie kellett a jármű súlyát az új üzemanyag-hatékonysági szabályozásoknak való megfelelés érdekében, miközben megőrizte az ütközésbiztonsági szabványokat.',
      de: 'AutoTech musste das Fahrzeuggewicht erheblich reduzieren, um neue Kraftstoffeffizienz-Vorschriften zu erfüllen und gleichzeitig die Crashsicherheitsstandards beizubehalten.'
    },
    solution: {
      en: 'We created a new generation of carbon fiber-reinforced plastic components with advanced impact absorption properties.',
      hu: 'Új generációs szénszál-erősített műanyag alkatrészeket hoztunk létre fejlett ütközéselnyelő tulajdonságokkal.',
      de: 'Wir entwickelten eine neue Generation von kohlenstofffaserverstärkten Kunststoffkomponenten mit fortschrittlichen Aufprallabsorptionseigenschaften.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Weight Reduction', hu: 'Súlycsökkentés', de: 'Gewichtsreduzierung' },
          value: '15%',
          improvement: 'exceeded target'
        },
        {
          label: { en: 'Fuel Efficiency', hu: 'Üzemanyag-hatékonyság', de: 'Kraftstoffeffizienz' },
          value: '12%',
          improvement: 'improvement'
        },
        {
          label: { en: 'Production Cost', hu: 'Gyártási költség', de: 'Produktionskosten' },
          value: '8%',
          improvement: 'reduction'
        }
      ],
      testimonial: {
        quote: {
          en: 'The lightweight components exceeded all our performance expectations while meeting the strictest safety requirements.',
          hu: 'A könnyű alkatrészek minden teljesítményelvárásunkat túlteljesítették, miközben megfeleltek a legstringensebb biztonsági követelményeknek.',
          de: 'Die Leichtbaukomponenten übertrafen alle unsere Leistungserwartungen und erfüllten gleichzeitig die strengsten Sicherheitsanforderungen.'
        },
        author: 'Dr. James Wilson',
        position: 'Chief Engineer, AutoTech Industries'
      }
    },
    content: {
      en: `<h2>Project Overview</h2>
      <p>AutoTech Industries faced increasing pressure to reduce vehicle weight to comply with new environmental regulations while maintaining superior safety performance.</p>
      
      <h2>Technical Innovation</h2>
      <p>Our team developed a proprietary carbon fiber-reinforced plastic compound with unique impact absorption characteristics, perfect for automotive safety applications.</p>
      
      <h2>Implementation Challenges</h2>
      <p>The project required extensive testing and validation to meet automotive industry standards while achieving the desired weight reduction targets.</p>
      
      <h2>Manufacturing Process</h2>
      <p>We implemented advanced compression molding techniques to ensure consistent quality and strength properties across all components.</p>
      
      <h2>Results</h2>
      <p>The final components not only met but exceeded all performance criteria, leading to their adoption across AutoTech's entire vehicle lineup.</p>`,
      
      hu: `<h2>Projekt áttekintés</h2>
      <p>Az AutoTech Industries növekvő nyomás alatt állt a jármű súlyának csökkentése érdekében az új környezetvédelmi szabályozásoknak való megfelelés miatt, miközben meg kellett őriznie a kiváló biztonsági teljesítményt.</p>
      
      <h2>Műszaki innováció</h2>
      <p>Csapatunk saját fejlesztésű szénszál-erősített műanyag keveréket fejlesztett ki egyedülálló ütközéselnyelő tulajdonságokkal, tökéletes autóipari biztonsági alkalmazásokhoz.</p>
      
      <h2>Megvalósítási kihívások</h2>
      <p>A projekt kiterjedt tesztelést és validálást igényelt az autóipari szabványok teljesítése mellett a kívánt súlycsökkentési célok elérése érdekében.</p>`,
      
      de: `<h2>Projektübersicht</h2>
      <p>AutoTech Industries stand unter zunehmendem Druck, das Fahrzeuggewicht zu reduzieren, um neuen Umweltvorschriften zu entsprechen, während gleichzeitig eine hervorragende Sicherheitsleistung beibehalten werden musste.</p>
      
      <h2>Technische Innovation</h2>
      <p>Unser Team entwickelte eine proprietäre kohlenstofffaserverstärkte Kunststoffverbindung mit einzigartigen Aufprallabsorptionseigenschaften, perfekt für Automobilsicherheitsanwendungen.</p>`
    },
    image: '/images/case-studies/automotive-lightweight.jpg',
    thumbnailImage: '/images/case-studies/automotive-lightweight-thumb.jpg',
    date: '2024-01-15',
    author: caseStudyAuthors[1],
    readTime: 6,
    tags: ['automotive', 'lightweight', 'carbon-fiber', 'safety'],
    featured: true,
    industry: 'Automotive',
    projectDuration: '8 months',
    technologies: ['Carbon fiber reinforcement', 'Impact absorption', 'Precision molding']
  },
  {
    id: 'medical-sterilization',
    slug: 'medical-device-sterilization-packaging',
    category: 'case-study',
    title: {
      en: 'Medical Device Sterilization Packaging',
      hu: 'Orvosi eszköz sterilizációs csomagolás',
      de: 'Sterilisationsverpackung für Medizinprodukte'
    },
    description: {
      en: 'Creating specialized packaging for medical devices that maintains sterility for extended periods while being environmentally responsible.',
      hu: 'Speciális csomagolás készítése orvosi eszközökhöz, amely hosszabb ideig megőrzi a sterilitást, miközben környezetbarát.',
      de: 'Entwicklung spezieller Verpackungen für Medizinprodukte, die Sterilität über längere Zeiträume aufrechterhält und umweltverantwortlich ist.'
    },
    client: {
      name: 'MedTech Solutions',
      industry: 'Healthcare',
      size: 'SME'
    },
    challenge: {
      en: 'MedTech needed packaging that could maintain medical device sterility for 5 years while being more sustainable than traditional options.',
      hu: 'A MedTech-nak olyan csomagolásra volt szüksége, amely 5 évig meg tudja őrizni az orvosi eszközök sterilitását, miközben fenntarthatóbb a hagyományos lehetőségeknél.',
      de: 'MedTech benötigte Verpackungen, die die Sterilität von Medizinprodukten 5 Jahre lang aufrechterhalten konnten und nachhaltiger als herkömmliche Optionen waren.'
    },
    solution: {
      en: 'We developed a multi-layer barrier system using bio-compatible materials with advanced sterilization compatibility.',
      hu: 'Többrétegű barrier rendszert fejlesztettünk ki biokompatibilis anyagok felhasználásával, fejlett sterilizációs kompatibilitással.',
      de: 'Wir entwickelten ein mehrschichtiges Barrieresystem mit biokompatiblen Materialien und fortschrittlicher Sterilisationskompatibilität.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Sterility Duration', hu: 'Sterilitás időtartama', de: 'Sterilitätsdauer' },
          value: '5+ years',
          improvement: 'guaranteed'
        },
        {
          label: { en: 'Material Sustainability', hu: 'Anyag fenntarthatóság', de: 'Material-Nachhaltigkeit' },
          value: '70%',
          improvement: 'bio-based content'
        },
        {
          label: { en: 'Cost Efficiency', hu: 'Költséghatékonyság', de: 'Kosteneffizienz' },
          value: '25%',
          improvement: 'reduction'
        }
      ],
      testimonial: {
        quote: {
          en: 'The new packaging system not only meets all regulatory requirements but also aligns with our sustainability goals.',
          hu: 'Az új csomagolási rendszer nemcsak minden szabályozási követelménynek felel meg, hanem összhangban van fenntarthatósági céljainkkal is.',
          de: 'Das neue Verpackungssystem erfüllt nicht nur alle regulatorischen Anforderungen, sondern entspricht auch unseren Nachhaltigkeitszielen.'
        },
        author: 'Dr. Sarah Johnson',
        position: 'Quality Director, MedTech Solutions'
      }
    },
    content: {
      en: `<h2>Project Overview</h2>
      <p>MedTech Solutions required innovative packaging for surgical instruments that could maintain sterility for extended periods while addressing environmental concerns.</p>
      
      <h2>Regulatory Compliance</h2>
      <p>All packaging solutions were developed in compliance with ISO 11607 standards for medical device packaging and FDA regulations.</p>
      
      <h2>Material Innovation</h2>
      <p>Our materials science team created a proprietary multi-layer system combining bio-based polymers with advanced barrier technologies.</p>
      
      <h2>Testing and Validation</h2>
      <p>Extensive accelerated aging tests and real-time sterility validation ensured the 5-year guarantee could be confidently provided.</p>`,
      
      hu: `<h2>Projekt áttekintés</h2>
      <p>A MedTech Solutions innovatív csomagolást igényelt sebészeti eszközökhöz, amely hosszabb ideig meg tudja őrizni a sterilitást, miközben foglalkozik a környezetvédelmi aggályokkal.</p>
      
      <h2>Szabályozási megfelelőség</h2>
      <p>Minden csomagolási megoldást az ISO 11607 orvosi eszköz csomagolási szabványok és az FDA előírások betartásával fejlesztettek ki.</p>`,
      
      de: `<h2>Projektübersicht</h2>
      <p>MedTech Solutions benötigte innovative Verpackungen für chirurgische Instrumente, die über längere Zeiträume steril bleiben und gleichzeitig Umweltbedenken berücksichtigen konnten.</p>
      
      <h2>Regulatorische Compliance</h2>
      <p>Alle Verpackungslösungen wurden in Übereinstimmung mit ISO 11607-Standards für Medizinproduktverpackungen und FDA-Vorschriften entwickelt.</p>`
    },
    image: '/images/case-studies/medical-sterilization.jpg',
    thumbnailImage: '/images/case-studies/medical-sterilization-thumb.jpg',
    date: '2023-11-20',
    author: caseStudyAuthors[2],
    readTime: 7,
    tags: ['medical', 'sterilization', 'healthcare', 'bio-compatible'],
    featured: false,
    industry: 'Healthcare',
    projectDuration: '4 months',
    technologies: ['Multi-layer barriers', 'Bio-compatible materials', 'Sterilization validation']
  },
  {
    id: 'consumer-electronics',
    slug: 'consumer-electronics-heat-management',
    category: 'case-study',
    title: {
      en: 'Consumer Electronics Heat Management',
      hu: 'Fogyasztói elektronika hőmenedzsment',
      de: 'Wärmemanagement für Verbraucherelektronik'
    },
    description: {
      en: 'Innovative plastic solutions for managing heat dissipation in compact consumer electronic devices.',
      hu: 'Innovatív műanyag megoldások a kompakt fogyasztói elektronikai eszközök hőelvezetésének kezelésére.',
      de: 'Innovative Kunststofflösungen für das Wärmemanagement in kompakten Verbraucherelektronikgeräten.'
    },
    client: {
      name: 'TechGadget Pro',
      industry: 'Electronics',
      size: 'Enterprise'
    },
    challenge: {
      en: 'TechGadget needed to solve overheating issues in their compact devices while maintaining aesthetic appeal and cost efficiency.',
      hu: 'A TechGadget-nak meg kellett oldania a túlmelegedési problémákat kompakt eszközeiben, miközben megőrizte az esztétikai vonzerőt és költséghatékonyságot.',
      de: 'TechGadget musste Überhitzungsprobleme in ihren kompakten Geräten lösen und gleichzeitig ästhetische Anziehungskraft und Kosteneffizienz beibehalten.'
    },
    solution: {
      en: 'We created thermally conductive plastic compounds with integrated heat dissipation channels and aesthetic finishes.',
      hu: 'Hővezető műanyag keverékeket hoztunk létre integrált hőelvezetési csatornákkal és esztétikus felületkezeléssel.',
      de: 'Wir entwickelten wärmeleitfähige Kunststoffverbindungen mit integrierten Wärmeableitungskanälen und ästhetischen Oberflächen.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Temperature Reduction', hu: 'Hőmérséklet csökkentés', de: 'Temperaturreduzierung' },
          value: '35°C',
          improvement: 'average reduction'
        },
        {
          label: { en: 'Device Performance', hu: 'Eszköz teljesítmény', de: 'Geräteleistung' },
          value: '20%',
          improvement: 'increase'
        },
        {
          label: { en: 'Customer Satisfaction', hu: 'Vásárlói elégedettség', de: 'Kundenzufriedenheit' },
          value: '95%',
          improvement: 'rating'
        }
      ],
      testimonial: {
        quote: {
          en: 'The heat management solution transformed our product line and eliminated customer complaints about overheating.',
          hu: 'A hőmenedzsment megoldás átalakította termékcsaládunkat és megszüntette a túlmelegedéssel kapcsolatos vásárlói panaszokat.',
          de: 'Die Wärmemanagement-Lösung transformierte unsere Produktlinie und eliminierte Kundenbeschwerden über Überhitzung.'
        },
        author: 'Michael Chen',
        position: 'Product Development Manager, TechGadget Pro'
      }
    },
    content: {
      en: `<h2>Project Overview</h2>
      <p>TechGadget Pro's latest smartphone design faced significant thermal management challenges that threatened device performance and user experience.</p>
      
      <h2>Innovation Approach</h2>
      <p>Our team developed a novel thermally conductive plastic compound that could be molded into complex shapes while providing excellent heat dissipation properties.</p>
      
      <h2>Design Integration</h2>
      <p>The solution included integrated heat channels that distributed thermal load efficiently while maintaining the device's sleek aesthetic design.</p>
      
      <h2>Manufacturing Optimization</h2>
      <p>We optimized the injection molding process to ensure consistent thermal properties across all components while maintaining cost-effectiveness.</p>`,
      
      hu: `<h2>Projekt áttekintés</h2>
      <p>A TechGadget Pro legújabb okostelefon-tervezése jelentős hőmenedzsment kihívásokkal szembesült, amelyek veszélyeztették az eszköz teljesítményét és a felhasználói élményt.</p>
      
      <h2>Innovációs megközelítés</h2>
      <p>Csapatunk újszerű hővezető műanyag keveréket fejlesztett ki, amely összetett formákba önthetők, miközben kiváló hőelvezetési tulajdonságokat biztosít.</p>`,
      
      de: `<h2>Projektübersicht</h2>
      <p>TechGadget Pros neuestes Smartphone-Design stand vor erheblichen Wärmemanagement-Herausforderungen, die die Geräteleistung und das Benutzererlebnis bedrohten.</p>
      
      <h2>Innovationsansatz</h2>
      <p>Unser Team entwickelte eine neuartige wärmeleitfähige Kunststoffverbindung, die in komplexe Formen geformt werden konnte und gleichzeitig ausgezeichnete Wärmeableitungseigenschaften bot.</p>`
    },
    image: '/images/case-studies/consumer-electronics.jpg',
    thumbnailImage: '/images/case-studies/consumer-electronics-thumb.jpg',
    date: '2023-09-10',
    author: caseStudyAuthors[3],
    readTime: 5,
    tags: ['electronics', 'heat-management', 'innovation', 'performance'],
    featured: false,
    industry: 'Electronics',
    projectDuration: '5 months',
    technologies: ['Thermal conductivity', 'Complex molding', 'Surface treatments']
  },
  {
    id: 'aerospace-components',
    slug: 'aerospace-lightweight-durable-components',
    category: 'case-study',
    title: {
      en: 'Aerospace Lightweight & Durable Components',
      hu: 'Repülőgépipari könnyű és tartós alkatrészek',
      de: 'Leichte und langlebige Luft- und Raumfahrtkomponenten'
    },
    description: {
      en: 'High-performance plastic components for aerospace applications requiring extreme durability and weight optimization.',
      hu: 'Nagy teljesítményű műanyag alkatrészek repülőgépipari alkalmazásokhoz, amelyek rendkívüli tartósságot és súlyoptimalizálást igényelnek.',
      de: 'Hochleistungs-Kunststoffkomponenten für Luft- und Raumfahrtanwendungen, die extreme Haltbarkeit und Gewichtsoptimierung erfordern.'
    },
    client: {
      name: 'AeroSpace Dynamics',
      industry: 'Aerospace',
      size: 'Enterprise'
    },
    challenge: {
      en: 'AeroSpace needed components that could withstand extreme temperature variations and stress while reducing overall aircraft weight.',
      hu: 'Az AeroSpace-nek olyan alkatrészekre volt szüksége, amelyek ellenállnak a szélsőséges hőmérséklet-változásoknak és stressznek, miközben csökkentik a repülőgép összsúlyát.',
      de: 'AeroSpace benötigte Komponenten, die extremen Temperaturschwankungen und Belastungen standhalten und gleichzeitig das Gesamtgewicht des Flugzeugs reduzieren konnten.'
    },
    solution: {
      en: 'We engineered advanced composite materials combining carbon fiber, aramid fibers, and specialized polymers for ultimate performance.',
      hu: 'Fejlett kompozit anyagokat terveztünk, amelyek ötvözik a szénszálat, az aramidszálakat és a speciális polimereket a végső teljesítmény érdekében.',
      de: 'Wir entwickelten fortschrittliche Verbundwerkstoffe, die Kohlenstofffasern, Aramidfasern und spezielle Polymere für ultimative Leistung kombinieren.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Weight Savings', hu: 'Súlymegtakarítás', de: 'Gewichtseinsparung' },
          value: '22%',
          improvement: 'exceeded target'
        },
        {
          label: { en: 'Temperature Range', hu: 'Hőmérséklet tartomány', de: 'Temperaturbereich' },
          value: '-70°C to +150°C',
          improvement: 'operational range'
        },
        {
          label: { en: 'Service Life', hu: 'Szolgálati élettartam', de: 'Betriebsdauer' },
          value: '25+ years',
          improvement: 'guaranteed'
        }
      ],
      testimonial: {
        quote: {
          en: 'These components exceeded all aerospace standards and have become integral to our next-generation aircraft design.',
          hu: 'Ezek az alkatrészek minden repülőgépipari szabványt felülmúltak és következő generációs repülőgép-tervezésünk szerves részévé váltak.',
          de: 'Diese Komponenten übertrafen alle Luft- und Raumfahrtstandards und sind zu einem integralen Bestandteil unseres Flugzeugdesigns der nächsten Generation geworden.'
        },
        author: 'Captain Robert Thompson',
        position: 'Chief Engineering Officer, AeroSpace Dynamics'
      }
    },
    content: {
      en: `<h2>Project Overview</h2>
      <p>AeroSpace Dynamics required next-generation components for their new aircraft design that could meet the most demanding aerospace standards while contributing to overall weight reduction goals.</p>
      
      <h2>Material Engineering</h2>
      <p>Our materials science team developed a proprietary composite system that combines the best properties of multiple fiber types with advanced polymer matrices.</p>
      
      <h2>Testing Protocols</h2>
      <p>All components underwent rigorous testing including thermal cycling, vibration testing, and long-term durability assessments under aerospace conditions.</p>
      
      <h2>Manufacturing Excellence</h2>
      <p>We implemented precision manufacturing processes with continuous quality monitoring to ensure every component meets exact specifications.</p>
      
      <h2>Future Applications</h2>
      <p>The success of this project has opened doors for additional aerospace applications and potential space exploration components.</p>`,
      
      hu: `<h2>Projekt áttekintés</h2>
      <p>Az AeroSpace Dynamics következő generációs alkatrészeket igényelt új repülőgép-tervéhez, amelyek megfelelnek a legigényesebb repülőgépipari szabványoknak, miközben hozzájárulnak az általános súlycsökkentési célokhoz.</p>
      
      <h2>Anyagmérnökség</h2>
      <p>Anyagtudományi csapatunk saját fejlesztésű kompozit rendszert fejlesztett ki, amely ötvözi több szál típus legjobb tulajdonságait fejlett polimer mátrixokkal.</p>`,
      
      de: `<h2>Projektübersicht</h2>
      <p>AeroSpace Dynamics benötigte Komponenten der nächsten Generation für ihr neues Flugzeugdesign, die den anspruchsvollsten Luft- und Raumfahrtstandards entsprechen und gleichzeitig zu den allgemeinen Gewichtsreduktionszielen beitragen konnten.</p>
      
      <h2>Materialtechnik</h2>
      <p>Unser Materialwissenschaftsteam entwickelte ein proprietäres Verbundsystem, das die besten Eigenschaften mehrerer Fasertypen mit fortschrittlichen Polymermatrizen kombiniert.</p>`
    },
    image: '/images/case-studies/aerospace-components.jpg',
    thumbnailImage: '/images/case-studies/aerospace-components-thumb.jpg',
    date: '2023-07-30',
    author: caseStudyAuthors[0],
    readTime: 9,
    tags: ['aerospace', 'composites', 'durability', 'weight-reduction'],
    featured: true,
    industry: 'Aerospace',
    projectDuration: '12 months',
    technologies: ['Advanced composites', 'Multi-fiber reinforcement', 'Extreme environment testing']
  }
];

// Standardized helper functions
export const caseStudyHelpers = {
  getAll: (): CaseStudy[] => caseStudyItems,
  getFeatured: (): CaseStudy[] => caseStudyItems.filter(study => study.featured),
  getRecent: (limit: number = 5): CaseStudy[] => 
    [...caseStudyItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit),
  getByTag: (tag: string): CaseStudy[] => caseStudyItems.filter(study => study.tags.includes(tag)),
  getById: (id: string): CaseStudy | undefined => caseStudyItems.find(study => study.id === id),
  getBySlug: (slug: string): CaseStudy | undefined => caseStudyItems.find(study => study.slug === slug),
  getRelated: (studyId: string, limit: number = 3): CaseStudy[] => {
    const currentStudy = caseStudyItems.find(study => study.id === studyId);
    if (!currentStudy) return [];
    
    return caseStudyItems
      .filter(study => study.id !== studyId)
      .filter(study => 
        study.industry === currentStudy.industry ||
        study.tags.some(tag => currentStudy.tags.includes(tag))
      )
      .slice(0, limit);
  },
  getAllTags: (): string[] => {
    const allTags = new Set<string>();
    caseStudyItems.forEach(study => study.tags.forEach(tag => allTags.add(tag)));
    return Array.from(allTags).sort();
  },
  // Case study specific helpers
  getByIndustry: (industry: string): CaseStudy[] => 
    caseStudyItems.filter(study => study.industry.toLowerCase() === industry.toLowerCase()),
  getAllIndustries: (): string[] => [...new Set(caseStudyItems.map(study => study.industry))]
};

// Individual function exports for direct access
export const getCaseStudies = caseStudyHelpers.getAll;
export const getFeaturedCaseStudies = caseStudyHelpers.getFeatured;
export const getRecentCaseStudies = caseStudyHelpers.getRecent;
export const getCaseStudiesByTag = caseStudyHelpers.getByTag;
export const getCaseStudyById = caseStudyHelpers.getById;
export const getCaseStudyBySlug = caseStudyHelpers.getBySlug;
export const getRelatedCaseStudies = caseStudyHelpers.getRelated;
export const getAllCaseStudyTags = caseStudyHelpers.getAllTags;
export const getCaseStudiesByIndustry = caseStudyHelpers.getByIndustry;
export const getAllIndustries = caseStudyHelpers.getAllIndustries;

// Legacy exports for backward compatibility
export const authors = caseStudyAuthors;
export const caseStudies = caseStudyItems;