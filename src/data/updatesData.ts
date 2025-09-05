// Author interface for updates
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

export type UpdateCategory = 'product-update' | 'feature-release' | 'version-update' | 'maintenance' | 'enhancement';

// Update item interface
export interface UpdateItem {
  id: string;
  slug: string;
  category: 'update'; // Always update for this file
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
  customUrl?: string; // For custom update pages
  // Update-specific fields
  updateCategory?: UpdateCategory;
  version?: string; // Version number for product updates
  priority?: 'low' | 'medium' | 'high' | 'critical'; // Update priority
  affectedProducts?: string[]; // Products affected by this update
  changeType?: 'new-feature' | 'improvement' | 'bug-fix' | 'security' | 'breaking-change';
}

// Update authors - standardized naming
export const updateAuthors: Author[] = [
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
      en: 'Product Manager',
      hu: 'Termékmenedzser',
      de: 'Produktmanager'
    },
    avatar: '/images/team/mark-weber.jpg'
  },
  {
    id: 'julia-nagy',
    name: 'Júlia Nagy',
    role: {
      en: 'Technical Lead',
      hu: 'Technikai vezető',
      de: 'Technische Leitung'
    },
    avatar: '/images/team/julia-nagy.jpg'
  },
  {
    id: 'peter-smith',
    name: 'Peter Smith',
    role: {
      en: 'Engineering Manager',
      hu: 'Mérnöki menedzser',
      de: 'Engineering Manager'
    },
    avatar: '/images/team/peter-smith.jpg'
  }
];

// Updates data - standardized naming
export const updateItems: UpdateItem[] = [
  {
    id: 'product-update-ecoline',
    slug: 'ecoline-product-range-update',
    category: 'update',
    updateCategory: 'product-update',
    title: {
      en: 'EcoLine Product Range: New Materials and Features',
      hu: 'EcoLine termékcsalád: Új anyagok és jellemzők',
      de: 'EcoLine Produktreihe: Neue Materialien und Funktionen'
    },
    description: {
      en: 'Updates to our popular EcoLine range including new sustainable materials and enhanced product features.',
      hu: 'Frissítések népszerű EcoLine termékcsaládunkhoz, beleértve az új fenntartható anyagokat és továbbfejlesztett termékjellemzőket.',
      de: 'Updates für unsere beliebte EcoLine-Reihe, einschließlich neuer nachhaltiger Materialien und verbesserter Produktfunktionen.'
    },
    content: {
      en: `<p>We're excited to announce significant updates to our popular EcoLine range of sustainable plastic products. These improvements reflect our ongoing commitment to innovation and environmental responsibility.</p>
      
      <h2>New Ocean-Bound Plastic Material</h2>
      <p>We've introduced a new material option that incorporates 35% ocean-bound plastic, helping to reduce marine plastic pollution while creating high-quality, durable products.</p>
      
      <h2>Enhanced UV Resistance</h2>
      <p>All EcoLine products now feature improved UV resistance, making them suitable for outdoor applications with extended durability under sun exposure.</p>
      
      <h2>Expanded Color Options</h2>
      <p>The EcoLine range now comes in six new earth-inspired colors, all achieved using natural pigments without harmful additives.</p>
      
      <h2>Technical Improvements</h2>
      <p>We've also enhanced the molecular structure of our EcoLine materials, resulting in 15% better impact resistance and improved recyclability at end-of-life.</p>
      
      <h2>Availability and Pricing</h2>
      <p>The updated EcoLine products are available immediately with no price increase. Existing customers will receive automatic updates to their current orders.</p>`,
      
      hu: `<p>Örömmel jelentjük be a fenntartható műanyag termékeink népszerű EcoLine termékcsaládjának jelentős frissítéseit. Ezek a fejlesztések tükrözik folyamatos elkötelezettségünket az innováció és a környezeti felelősségvállalás iránt.</p>
      
      <h2>Új óceánból származó műanyag alapanyag</h2>
      <p>Bevezettünk egy új anyaglehetőséget, amely 35% óceánból származó műanyagot tartalmaz, segítve a tengeri műanyagszennyezés csökkentését, miközben kiváló minőségű, tartós termékeket állítunk elő.</p>
      
      <h2>Fokozott UV-ellenállás</h2>
      <p>Minden EcoLine termék mostantól javított UV-ellenállással rendelkezik, így alkalmassá válnak kültéri alkalmazásokra, hosszabb élettartammal napfény hatása alatt.</p>
      
      <h2>Bővített színválaszték</h2>
      <p>Az EcoLine termékcsalád mostantól hat új, Föld által inspirált színben kapható, mindegyiket természetes pigmentek felhasználásával értük el, káros adalékanyagok nélkül.</p>
      
      <h2>Technikai fejlesztések</h2>
      <p>Továbbfejlesztettük EcoLine anyagaink molekuláris szerkezetét is, ami 15%-kal jobb ütésállóságot és javított újrahasznosíthatóságot eredményez az élettartam végén.</p>
      
      <h2>Elérhetőség és árazás</h2>
      <p>A frissített EcoLine termékek azonnal elérhetők áremelés nélkül. A meglévő ügyfelek automatikus frissítéseket kapnak jelenlegi rendeléseikhez.</p>`,
      
      de: `<p>Wir freuen uns, bedeutende Updates für unsere beliebte EcoLine-Reihe nachhaltiger Kunststoffprodukte bekannt zu geben. Diese Verbesserungen spiegeln unser kontinuierliches Engagement für Innovation und Umweltverantwortung wider.</p>
      
      <h2>Neues Material aus meeresnahem Kunststoff</h2>
      <p>Wir haben eine neue Materialoption eingeführt, die 35% meeresnahen Kunststoff enthält und dazu beiträgt, die Meeresverschmutzung durch Kunststoffe zu reduzieren, während hochwertige, langlebige Produkte entstehen.</p>
      
      <h2>Verbesserte UV-Beständigkeit</h2>
      <p>Alle EcoLine-Produkte verfügen jetzt über eine verbesserte UV-Beständigkeit, was sie für Außenanwendungen mit verlängerter Haltbarkeit bei Sonneneinstrahlung geeignet macht.</p>
      
      <h2>Erweiterte Farboptionen</h2>
      <p>Die EcoLine-Reihe ist jetzt in sechs neuen, von der Erde inspirierten Farben erhältlich, die alle mit natürlichen Pigmenten ohne schädliche Zusätze erzielt werden.</p>
      
      <h2>Technische Verbesserungen</h2>
      <p>Wir haben auch die Molekularstruktur unserer EcoLine-Materialien verbessert, was zu 15% besserer Schlagfestigkeit und verbesserter Recycelbarkeit am Lebensende führt.</p>
      
      <h2>Verfügbarkeit und Preise</h2>
      <p>Die aktualisierten EcoLine-Produkte sind sofort ohne Preiserhöhung verfügbar. Bestehende Kunden erhalten automatische Updates für ihre aktuellen Bestellungen.</p>`
    },
    image: '/images/updates/ecoline-update.jpg',
    thumbnailImage: '/images/updates/ecoline-update-thumb.jpg',
    date: '2024-03-10',
    author: updateAuthors[1], // Mark Weber
    readTime: 3,
    tags: ['product-update', 'sustainability', 'innovation', 'ecoline'],
    featured: true,
    version: '2.1.0',
    priority: 'medium',
    affectedProducts: ['EcoLine-Basic', 'EcoLine-Pro', 'EcoLine-Industrial'],
    changeType: 'improvement'
  },
  {
    id: 'manufacturing-system-upgrade',
    slug: 'manufacturing-system-upgrade-2024',
    category: 'update',
    updateCategory: 'feature-release',
    title: {
      en: 'Manufacturing System Upgrade: Enhanced Quality Control',
      hu: 'Gyártási rendszer frissítés: Fokozott minőségirányítás',
      de: 'Upgrade des Fertigungssystems: Verbesserte Qualitätskontrolle'
    },
    description: {
      en: 'Major upgrade to our manufacturing systems introducing AI-powered quality control and real-time monitoring.',
      hu: 'Nagyobb frissítés gyártási rendszereinkhez, amely bevezeti az AI-alapú minőségirányítást és valós idejű monitorozást.',
      de: 'Großes Upgrade unserer Fertigungssysteme mit KI-gestützter Qualitätskontrolle und Echtzeitüberwachung.'
    },
    content: {
      en: `<p>We've completed a major upgrade to our manufacturing systems, introducing cutting-edge AI-powered quality control and real-time monitoring capabilities across all production lines.</p>
      
      <h2>AI-Powered Quality Detection</h2>
      <p>Our new system can detect quality issues 99.8% faster than previous methods, using computer vision and machine learning algorithms to identify defects in real-time.</p>
      
      <h2>Real-Time Production Monitoring</h2>
      <p>Live dashboards now provide instant visibility into production metrics, allowing for immediate adjustments and optimization of manufacturing processes.</p>
      
      <h2>Predictive Maintenance</h2>
      <p>The upgrade includes predictive maintenance capabilities that can forecast equipment needs up to 30 days in advance, reducing unplanned downtime by 60%.</p>
      
      <h2>Environmental Impact Tracking</h2>
      <p>New sensors monitor energy consumption, water usage, and waste generation in real-time, helping us achieve our sustainability goals more effectively.</p>
      
      <h2>Integration Benefits</h2>
      <p>The system seamlessly integrates with our existing ERP and quality management systems, ensuring smooth operations without disruption to current processes.</p>`,
      
      hu: `<p>Befejeztük gyártási rendszereink nagyobb frissítését, bevezetve az élvonalbeli AI-alapú minőségirányítást és valós idejű monitorozási képességeket minden gyártósoron.</p>
      
      <h2>AI-alapú minőségérzékelés</h2>
      <p>Új rendszerünk 99,8%-kal gyorsabban képes észlelni a minőségi problémákat, mint a korábbi módszerek, számítógépes látás és gépi tanulási algoritmusok használatával a hibák valós idejű azonosítására.</p>
      
      <h2>Valós idejű gyártásmonitorozás</h2>
      <p>Az élő műszerfalak mostantól azonnali betekintést biztosítanak a gyártási mutatókba, lehetővé téve a gyártási folyamatok azonnali beállítását és optimalizálását.</p>
      
      <h2>Prediktív karbantartás</h2>
      <p>A frissítés prediktív karbantartási képességeket tartalmaz, amelyek akár 30 nappal előre képesek előre jelezni a berendezési igényeket, 60%-kal csökkentve a nem tervezett leállásokat.</p>
      
      <h2>Környezeti hatás nyomon követése</h2>
      <p>Új szenzorok valós időben monitorozzák az energiafogyasztást, vízhasználatot és hulladéktermelést, segítve fenntarthatósági céljaink hatékonyabb elérését.</p>
      
      <h2>Integrációs előnyök</h2>
      <p>A rendszer zökkenőmentesen integrálódik meglévő ERP és minőségirányítási rendszereinkkel, biztosítva a zökkenőmentes működést a jelenlegi folyamatok megzavarása nélkül.</p>`,
      
      de: `<p>Wir haben ein großes Upgrade unserer Fertigungssysteme abgeschlossen und modernste KI-gestützte Qualitätskontrolle und Echtzeitüberwachungsfähigkeiten in allen Produktionslinien eingeführt.</p>
      
      <h2>KI-gestützte Qualitätserkennung</h2>
      <p>Unser neues System kann Qualitätsprobleme 99,8% schneller erkennen als frühere Methoden, indem es Computer Vision und maschinelle Lernalgorithmen zur Echtzeitidentifikation von Defekten verwendet.</p>
      
      <h2>Echtzeit-Produktionsüberwachung</h2>
      <p>Live-Dashboards bieten jetzt sofortige Sichtbarkeit in Produktionsmetriken und ermöglichen sofortige Anpassungen und Optimierung von Fertigungsprozessen.</p>
      
      <h2>Vorausschauende Wartung</h2>
      <p>Das Upgrade umfasst vorausschauende Wartungsfähigkeiten, die Ausrüstungsbedarf bis zu 30 Tage im Voraus vorhersagen können und ungeplante Ausfallzeiten um 60% reduzieren.</p>
      
      <h2>Umweltauswirkungen-Tracking</h2>
      <p>Neue Sensoren überwachen Energieverbrauch, Wassernutzung und Abfallerzeugung in Echtzeit und helfen uns, unsere Nachhaltigkeitsziele effektiver zu erreichen.</p>
      
      <h2>Integrationsvorteile</h2>
      <p>Das System integriert sich nahtlos in unsere bestehenden ERP- und Qualitätsmanagementsysteme und gewährleistet reibungslose Abläufe ohne Störung aktueller Prozesse.</p>`
    },
    image: '/images/updates/manufacturing-upgrade.jpg',
    thumbnailImage: '/images/updates/manufacturing-upgrade-thumb.jpg',
    date: '2024-02-15',
    author: updateAuthors[2], // Julia Nagy
    readTime: 5,
    tags: ['manufacturing', 'ai', 'quality-control', 'monitoring'],
    featured: true,
    version: '3.0.0',
    priority: 'high',
    affectedProducts: ['All Production Lines'],
    changeType: 'new-feature'
  },
  {
    id: 'security-patch-2024-01',
    slug: 'security-patch-january-2024',
    category: 'update',
    updateCategory: 'maintenance',
    title: {
      en: 'Security Update: Enhanced Data Protection',
      hu: 'Biztonsági frissítés: Fokozott adatvédelem',
      de: 'Sicherheitsupdate: Verbesserter Datenschutz'
    },
    description: {
      en: 'Important security update implementing enhanced data protection measures and system hardening.',
      hu: 'Fontos biztonsági frissítés, amely fokozott adatvédelmi intézkedéseket és rendszer megerősítést valósít meg.',
      de: 'Wichtiges Sicherheitsupdate mit verbesserten Datenschutzmaßnahmen und Systemhärtung.'
    },
    content: {
      en: `<p>We've released an important security update that enhances data protection across all our systems and implements additional security measures to safeguard customer information.</p>
      
      <h2>Enhanced Encryption</h2>
      <p>All customer data is now protected with AES-256 encryption both in transit and at rest, providing military-grade security for sensitive information.</p>
      
      <h2>Multi-Factor Authentication</h2>
      <p>We've implemented mandatory multi-factor authentication for all system access, adding an extra layer of security to prevent unauthorized access.</p>
      
      <h2>Security Monitoring</h2>
      <p>New 24/7 security monitoring systems have been deployed to detect and respond to potential threats in real-time.</p>
      
      <h2>Compliance Updates</h2>
      <p>This update ensures full compliance with the latest GDPR requirements and ISO 27001 security standards.</p>
      
      <h2>User Impact</h2>
      <p>Users may notice additional security prompts during login. These measures are designed to protect your data while maintaining system usability.</p>`,
      
      hu: `<p>Kiadtunk egy fontos biztonsági frissítést, amely fokozza az adatvédelmet minden rendszerünkben és további biztonsági intézkedéseket valósít meg az ügyféladatok védelmére.</p>
      
      <h2>Fokozott titkosítás</h2>
      <p>Minden ügyféladat mostantól AES-256 titkosítással védett mind az átvitel, mind a tárolás során, katonai szintű biztonságot nyújtva az érzékeny információknak.</p>
      
      <h2>Többfaktoros hitelesítés</h2>
      <p>Kötelező többfaktoros hitelesítést vezettünk be minden rendszer-hozzáféréshez, extra biztonsági réteget adva a jogosulatlan hozzáférés megakadályozására.</p>
      
      <h2>Biztonsági monitorozás</h2>
      <p>Új 24/7 biztonsági monitorozó rendszereket helyeztünk üzembe a potenciális fenyegetések valós idejű észlelésére és kezelésére.</p>
      
      <h2>Megfelelőségi frissítések</h2>
      <p>Ez a frissítés biztosítja a teljes megfelelést a legújabb GDPR követelményekkel és ISO 27001 biztonsági szabványokkal.</p>
      
      <h2>Felhasználói hatás</h2>
      <p>A felhasználók további biztonsági felszólításokat észlelhetnek bejelentkezés során. Ezek az intézkedések az adatok védelmére szolgálnak, miközben fenntartják a rendszer használhatóságát.</p>`,
      
      de: `<p>Wir haben ein wichtiges Sicherheitsupdate veröffentlicht, das den Datenschutz in allen unseren Systemen verbessert und zusätzliche Sicherheitsmaßnahmen zum Schutz von Kundeninformationen implementiert.</p>
      
      <h2>Verbesserte Verschlüsselung</h2>
      <p>Alle Kundendaten sind jetzt sowohl während der Übertragung als auch im Ruhezustand mit AES-256-Verschlüsselung geschützt und bieten militärische Sicherheit für sensible Informationen.</p>
      
      <h2>Multi-Faktor-Authentifizierung</h2>
      <p>Wir haben eine obligatorische Multi-Faktor-Authentifizierung für alle Systemzugriffe implementiert und eine zusätzliche Sicherheitsebene hinzugefügt, um unbefugten Zugriff zu verhindern.</p>
      
      <h2>Sicherheitsüberwachung</h2>
      <p>Neue 24/7-Sicherheitsüberwachungssysteme wurden eingesetzt, um potenzielle Bedrohungen in Echtzeit zu erkennen und darauf zu reagieren.</p>
      
      <h2>Compliance-Updates</h2>
      <p>Dieses Update gewährleistet die vollständige Einhaltung der neuesten DSGVO-Anforderungen und ISO 27001-Sicherheitsstandards.</p>
      
      <h2>Benutzerauswirkungen</h2>
      <p>Benutzer bemerken möglicherweise zusätzliche Sicherheitsaufforderungen während der Anmeldung. Diese Maßnahmen dienen dem Schutz Ihrer Daten bei gleichzeitiger Aufrechterhaltung der Systemnutzbarkeit.</p>`
    },
    image: '/images/updates/security-update.jpg',
    thumbnailImage: '/images/updates/security-update-thumb.jpg',
    date: '2024-01-08',
    author: updateAuthors[0], // Anna Kovacs
    readTime: 4,
    tags: ['security', 'data-protection', 'compliance', 'encryption'],
    featured: false,
    version: '1.2.3',
    priority: 'critical',
    affectedProducts: ['All Systems'],
    changeType: 'security'
  },
  {
    id: 'mobile-app-update',
    slug: 'mobile-app-performance-update',
    category: 'update',
    updateCategory: 'enhancement',
    title: {
      en: 'Mobile App Performance Enhancement',
      hu: 'Mobilalkalmazás teljesítmény-fejlesztés',
      de: 'Mobile App Leistungsverbesserung'
    },
    description: {
      en: 'Significant performance improvements and new features for our mobile inventory management application.',
      hu: 'Jelentős teljesítményfejlesztések és új funkciók mobil készletkezelő alkalmazásunkhoz.',
      de: 'Erhebliche Leistungsverbesserungen und neue Funktionen für unsere mobile Lagerverwaltungsanwendung.'
    },
    content: {
      en: `<p>We've released a major update to our mobile inventory management app, delivering significant performance improvements and new features requested by our users.</p>
      
      <h2>Performance Improvements</h2>
      <p>The app now loads 40% faster and uses 25% less battery, making it more efficient for daily warehouse operations.</p>
      
      <h2>Offline Mode</h2>
      <p>New offline functionality allows users to continue working even without internet connectivity, with automatic sync when connection is restored.</p>
      
      <h2>Barcode Scanner Enhancement</h2>
      <p>Improved barcode scanning accuracy and speed, now supporting QR codes and DataMatrix formats in addition to traditional barcodes.</p>
      
      <h2>Inventory Alerts</h2>
      <p>Real-time push notifications for low stock levels, expired products, and urgent inventory actions help maintain optimal stock levels.</p>
      
      <h2>User Interface Updates</h2>
      <p>Redesigned interface with improved navigation and larger touch targets for better usability in warehouse environments.</p>
      
      <h2>Compatibility</h2>
      <p>The update supports both iOS 15+ and Android 10+, ensuring broad device compatibility across your workforce.</p>`,
      
      hu: `<p>Kiadtuk mobil készletkezelő alkalmazásunk nagyobb frissítését, jelentős teljesítményfejlesztéseket és felhasználóink által kért új funkciókat szállítva.</p>
      
      <h2>Teljesítményfejlesztések</h2>
      <p>Az alkalmazás mostantól 40%-kal gyorsabban tölt be és 25%-kal kevesebb akkumulátort használ, hatékonyabbá téve a napi raktári műveleteket.</p>
      
      <h2>Offline mód</h2>
      <p>Az új offline funkció lehetővé teszi a felhasználóknak, hogy internetkapcsolat nélkül is folytassák a munkát, automatikus szinkronizálással a kapcsolat helyreállításakor.</p>
      
      <h2>Vonalkódolvasó fejlesztés</h2>
      <p>Javított vonalkódolvasási pontosság és sebesség, mostantól támogatja a QR kódokat és DataMatrix formátumokat a hagyományos vonalkódok mellett.</p>
      
      <h2>Készletriasztások</h2>
      <p>Valós idejű push értesítések alacsony készletszintekről, lejárt termékekről és sürgős készletműveletekről segítenek az optimális készletszintek fenntartásában.</p>
      
      <h2>Felhasználói felület frissítések</h2>
      <p>Újratervezett felület javított navigációval és nagyobb érintési célpontokkal a jobb használhatóság érdekében raktári környezetekben.</p>
      
      <h2>Kompatibilitás</h2>
      <p>A frissítés támogatja az iOS 15+ és Android 10+ rendszereket is, biztosítva a széles eszközkompatibilitást a munkaerő körében.</p>`,
      
      de: `<p>Wir haben ein größeres Update für unsere mobile Lagerverwaltungsapp veröffentlicht, das erhebliche Leistungsverbesserungen und von unseren Benutzern angeforderte neue Funktionen liefert.</p>
      
      <h2>Leistungsverbesserungen</h2>
      <p>Die App lädt jetzt 40% schneller und verbraucht 25% weniger Akku, was sie effizienter für tägliche Lagerabläufe macht.</p>
      
      <h2>Offline-Modus</h2>
      <p>Neue Offline-Funktionalität ermöglicht es Benutzern, auch ohne Internetverbindung zu arbeiten, mit automatischer Synchronisation bei wiederhergestellter Verbindung.</p>
      
      <h2>Barcode-Scanner-Verbesserung</h2>
      <p>Verbesserte Barcode-Scan-Genauigkeit und -Geschwindigkeit, unterstützt jetzt QR-Codes und DataMatrix-Formate zusätzlich zu herkömmlichen Barcodes.</p>
      
      <h2>Inventar-Benachrichtigungen</h2>
      <p>Echtzeit-Push-Benachrichtigungen für niedrige Lagerbestände, abgelaufene Produkte und dringende Inventaraktionen helfen bei der Aufrechterhaltung optimaler Lagerbestände.</p>
      
      <h2>Benutzeroberflächen-Updates</h2>
      <p>Neugestaltete Oberfläche mit verbesserter Navigation und größeren Berührungszielen für bessere Benutzerfreundlichkeit in Lagerumgebungen.</p>
      
      <h2>Kompatibilität</h2>
      <p>Das Update unterstützt sowohl iOS 15+ als auch Android 10+ und gewährleistet breite Gerätekompatibilität in Ihrer Belegschaft.</p>`
    },
    image: '/images/updates/mobile-app-update.jpg',
    thumbnailImage: '/images/updates/mobile-app-update-thumb.jpg',
    date: '2024-04-05',
    author: updateAuthors[3], // Peter Smith
    readTime: 4,
    tags: ['mobile-app', 'performance', 'inventory', 'barcode-scanner'],
    featured: true,
    version: '2.5.0',
    priority: 'medium',
    affectedProducts: ['Mobile Inventory App'],
    changeType: 'improvement'
  },
  {
    id: 'api-version-3-release',
    slug: 'api-version-3-new-features',
    category: 'update',
    updateCategory: 'version-update',
    title: {
      en: 'API Version 3.0: New Integration Capabilities',
      hu: 'API 3.0 verzió: Új integrációs lehetőségek',
      de: 'API Version 3.0: Neue Integrationsmöglichkeiten'
    },
    description: {
      en: 'Major API upgrade introducing new endpoints, improved performance, and enhanced security features.',
      hu: 'Nagyobb API frissítés új végpontok, javított teljesítmény és fokozott biztonsági funkciók bevezetésével.',
      de: 'Großes API-Upgrade mit neuen Endpunkten, verbesserter Leistung und erweiterten Sicherheitsfunktionen.'
    },
    content: {
      en: `<p>We're pleased to announce the release of API Version 3.0, bringing significant enhancements to our integration capabilities and developer experience.</p>
      
      <h2>New REST Endpoints</h2>
      <p>Version 3.0 introduces 15 new REST endpoints for advanced product management, real-time inventory tracking, and comprehensive reporting capabilities.</p>
      
      <h2>GraphQL Support</h2>
      <p>We've added full GraphQL support, allowing developers to request exactly the data they need and reduce bandwidth usage by up to 60%.</p>
      
      <h2>Webhook Integration</h2>
      <p>New webhook functionality enables real-time notifications for inventory changes, order updates, and system events, improving automation possibilities.</p>
      
      <h2>Enhanced Authentication</h2>
      <p>OAuth 2.0 with PKCE support and API key rotation functionality provide enterprise-grade security for all integrations.</p>
      
      <h2>Rate Limiting Improvements</h2>
      <p>Intelligent rate limiting with burst capacity ensures optimal performance while preventing system overload.</p>
      
      <h2>Developer Tools</h2>
      <p>New interactive API documentation, code samples in multiple languages, and a sandbox environment for testing make integration easier than ever.</p>
      
      <h2>Backwards Compatibility</h2>
      <p>API v2.x remains fully supported until December 2024, giving developers ample time to migrate to the new version.</p>`,
      
      hu: `<p>Örömmel jelentjük be az API 3.0 verzió kiadását, amely jelentős fejlesztéseket hoz integrációs képességeinkben és a fejlesztői élményben.</p>
      
      <h2>Új REST végpontok</h2>
      <p>A 3.0 verzió 15 új REST végpontot vezet be fejlett termékkezeléshez, valós idejű készletkövetéshez és átfogó jelentési képességekhez.</p>
      
      <h2>GraphQL támogatás</h2>
      <p>Teljes GraphQL támogatást adtunk hozzá, lehetővé téve a fejlesztőknek, hogy pontosan a szükséges adatokat kérjék le és akár 60%-kal csökkentsék a sávszélesség-használatot.</p>
      
      <h2>Webhook integráció</h2>
      <p>Az új webhook funkció valós idejű értesítéseket tesz lehetővé készletváltozásokról, rendelésfrissítésekről és rendszereseményekről, javítva az automatizálási lehetőségeket.</p>
      
      <h2>Fokozott hitelesítés</h2>
      <p>OAuth 2.0 PKCE támogatással és API kulcs rotációs funkcióval vállalati szintű biztonságot nyújt minden integrációhoz.</p>
      
      <h2>Sebességkorlátozási fejlesztések</h2>
      <p>Az intelligens sebességkorlátozás robbanásszerű kapacitással optimális teljesítményt biztosít, miközben megakadályozza a rendszer túlterhelését.</p>
      
      <h2>Fejlesztői eszközök</h2>
      <p>Új interaktív API dokumentáció, kódminták több nyelven és sandbox környezet teszteléshez megkönnyítik az integrációt, mint valaha.</p>
      
      <h2>Visszafelé kompatibilitás</h2>
      <p>Az API v2.x továbbra is teljes mértékben támogatott 2024 decemberéig, bőséges időt adva a fejlesztőknek az új verzióra való áttéréshez.</p>`,
      
      de: `<p>Wir freuen uns, die Veröffentlichung der API Version 3.0 bekannt zu geben, die erhebliche Verbesserungen unserer Integrationsfähigkeiten und der Entwicklererfahrung bringt.</p>
      
      <h2>Neue REST-Endpunkte</h2>
      <p>Version 3.0 führt 15 neue REST-Endpunkte für erweiterte Produktverwaltung, Echtzeit-Inventarverfolgung und umfassende Berichtsfunktionen ein.</p>
      
      <h2>GraphQL-Unterstützung</h2>
      <p>Wir haben vollständige GraphQL-Unterstützung hinzugefügt, die es Entwicklern ermöglicht, genau die benötigten Daten anzufordern und die Bandbreitennutzung um bis zu 60% zu reduzieren.</p>
      
      <h2>Webhook-Integration</h2>
      <p>Neue Webhook-Funktionalität ermöglicht Echtzeit-Benachrichtigungen für Inventaränderungen, Bestellaktualisierungen und Systemereignisse und verbessert Automatisierungsmöglichkeiten.</p>
      
      <h2>Verbesserte Authentifizierung</h2>
      <p>OAuth 2.0 mit PKCE-Unterstützung und API-Schlüsselrotationsfunktionalität bieten Sicherheit auf Unternehmensebene für alle Integrationen.</p>
      
      <h2>Verbesserungen der Ratenbegrenzung</h2>
      <p>Intelligente Ratenbegrenzung mit Burst-Kapazität gewährleistet optimale Leistung und verhindert gleichzeitig Systemüberlastung.</p>
      
      <h2>Entwicklertools</h2>
      <p>Neue interaktive API-Dokumentation, Code-Beispiele in mehreren Sprachen und eine Sandbox-Umgebung zum Testen machen Integration einfacher als je zuvor.</p>
      
      <h2>Rückwärtskompatibilität</h2>
      <p>API v2.x bleibt bis Dezember 2024 vollständig unterstützt und gibt Entwicklern ausreichend Zeit für die Migration zur neuen Version.</p>`
    },
    image: '/images/updates/api-v3-release.jpg',
    thumbnailImage: '/images/updates/api-v3-release-thumb.jpg',
    date: '2024-01-22',
    author: updateAuthors[2], // Julia Nagy
    readTime: 6,
    tags: ['api', 'integration', 'graphql', 'webhooks', 'developer-tools'],
    featured: false,
    version: '3.0.0',
    priority: 'high',
    affectedProducts: ['API Platform', 'Developer Tools'],
    changeType: 'new-feature'
  }
];

// Standardized helper functions
export const updateHelpers = {
  getAll: (): UpdateItem[] => updateItems,
  getFeatured: (): UpdateItem[] => updateItems.filter(update => update.featured),
  getRecent: (limit: number = 5): UpdateItem[] => 
    [...updateItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit),
  getByTag: (tag: string): UpdateItem[] => updateItems.filter(update => update.tags.includes(tag)),
  getById: (id: string): UpdateItem | undefined => updateItems.find(update => update.id === id),
  getBySlug: (slug: string): UpdateItem | undefined => updateItems.find(update => update.slug === slug),
  getRelated: (updateId: string, limit: number = 3): UpdateItem[] => {
    const currentUpdate = updateItems.find(update => update.id === updateId);
    if (!currentUpdate) return [];

    return updateItems
      .filter(update => 
        update.id !== updateId && 
        update.tags.some(tag => currentUpdate.tags.includes(tag))
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  },
  getAllTags: (): string[] => {
    const allTags = new Set<string>();
    updateItems.forEach(update => update.tags.forEach(tag => allTags.add(tag)));
    return Array.from(allTags).sort();
  },
  // Update-specific helpers
  getByCategory: (updateCategory: UpdateCategory): UpdateItem[] => 
    updateItems.filter(update => update.updateCategory === updateCategory),
  getByPriority: (priority: 'low' | 'medium' | 'high' | 'critical'): UpdateItem[] => 
    updateItems.filter(update => update.priority === priority),
  getByChangeType: (changeType: 'new-feature' | 'improvement' | 'bug-fix' | 'security' | 'breaking-change'): UpdateItem[] =>
    updateItems.filter(update => update.changeType === changeType),
  getCriticalUpdates: (): UpdateItem[] => updateItems.filter(update => update.priority === 'critical'),
  getByProduct: (productName: string): UpdateItem[] =>
    updateItems.filter(update => update.affectedProducts?.includes(productName))
};

// Individual function exports for direct access
export const getUpdateItems = updateHelpers.getAll;
export const getFeaturedUpdates = updateHelpers.getFeatured;
export const getRecentUpdates = updateHelpers.getRecent;
export const getUpdatesByTag = updateHelpers.getByTag;
export const getUpdateById = updateHelpers.getById;
export const getUpdateBySlug = updateHelpers.getBySlug;
export const getRelatedUpdates = updateHelpers.getRelated;
export const getAllUpdateTags = updateHelpers.getAllTags;
export const getUpdatesByCategory = updateHelpers.getByCategory;
export const getUpdatesByPriority = updateHelpers.getByPriority;
export const getUpdatesByChangeType = updateHelpers.getByChangeType;
export const getCriticalUpdates = updateHelpers.getCriticalUpdates;
export const getUpdatesByProduct = updateHelpers.getByProduct;
  
// Legacy exports for backward compatibility
export const authors = updateAuthors;
export const updates = updateItems;