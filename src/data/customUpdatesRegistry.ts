import { UpdateItem, updateAuthors } from './updatesData';

/**
 * Registry for custom-designed updates.
 * These updates have their own dedicated page files with custom layouts.
 * Register them here to make them appear in the main updates listing.
 */
export const customUpdates: Partial<UpdateItem>[] = [
  {
    id: 'custom-ecoline-major-update',
    slug: 'ecoline-3-0-interactive-update',
    category: 'update',
    updateCategory: 'product-update',
    title: {
      en: 'EcoLine 3.0: Revolutionary Sustainable Materials Update (Interactive)',
      hu: 'EcoLine 3.0: Forradalmi fenntartható anyagok frissítése (Interaktív)',
      de: 'EcoLine 3.0: Revolutionäres Update für nachhaltige Materialien (Interaktiv)'
    },
    description: {
      en: 'Experience our most significant product update yet with interactive demos, 3D material visualization, and comprehensive technical specifications with real-time performance metrics.',
      hu: 'Tapasztalja meg eddigi legjelentősebb termékfrissítésünket interaktív demókkal, 3D anyag-vizualizációval és átfogó műszaki specifikációkkal valós idejű teljesítménymutatókkal.',
      de: 'Erleben Sie unser bisher bedeutendstes Produktupdate mit interaktiven Demos, 3D-Materialvisualisierung und umfassenden technischen Spezifikationen mit Echtzeit-Leistungsmetriken.'
    },
    content: {
      en: `<h2>Revolutionary EcoLine 3.0 Features</h2>
      <p>Our latest EcoLine 3.0 update introduces groundbreaking sustainable materials with enhanced performance characteristics and reduced environmental impact.</p>
      
      <h3>Key Improvements</h3>
      <ul>
        <li>75% reduction in carbon footprint compared to EcoLine 2.0</li>
        <li>Enhanced biodegradability with marine environment certification</li>
        <li>Improved mechanical properties: +30% tensile strength</li>
        <li>Cost reduction of 15% through optimized manufacturing</li>
        <li>Extended temperature range: -40°C to +120°C</li>
      </ul>
      
      <h3>Interactive Experience Features</h3>
      <ul>
        <li>3D molecular structure visualization</li>
        <li>Real-time performance comparison tools</li>
        <li>Environmental impact calculator</li>
        <li>Cost-benefit analysis dashboard</li>
        <li>Technical specification explorer</li>
        <li>Application suitability advisor</li>
      </ul>`,
      
      hu: `<h2>Forradalmi EcoLine 3.0 jellemzők</h2>
      <p>Legújabb EcoLine 3.0 frissítésünk úttörő fenntartható anyagokat vezet be javított teljesítményjellemzőkkel és csökkentett környezeti hatással.</p>
      
      <h3>Kulcs fejlesztések</h3>
      <ul>
        <li>75%-os karbon-lábnyom csökkentés az EcoLine 2.0-hoz képest</li>
        <li>Javított biológiai lebomlás tengeri környezet tanúsítvánnyal</li>
        <li>Javított mechanikai tulajdonságok: +30% szakítószilárdság</li>
        <li>15%-os költségcsökkentés optimalizált gyártással</li>
        <li>Kiterjesztett hőmérsékleti tartomány: -40°C és +120°C között</li>
      </ul>
      
      <h3>Interaktív élmény jellemzők</h3>
      <ul>
        <li>3D molekuláris szerkezet vizualizáció</li>
        <li>Valós idejű teljesítmény-összehasonlító eszközök</li>
        <li>Környezeti hatás kalkulátor</li>
        <li>Költség-haszon elemzési műszerfal</li>
        <li>Műszaki specifikáció felfedező</li>
        <li>Alkalmazási alkalmasság tanácsadó</li>
      </ul>`,
      
      de: `<h2>Revolutionäre EcoLine 3.0 Features</h2>
      <p>Unser neuestes EcoLine 3.0 Update führt bahnbrechende nachhaltige Materialien mit verbesserten Leistungsmerkmalen und reduzierter Umweltbelastung ein.</p>
      
      <h3>Wichtige Verbesserungen</h3>
      <ul>
        <li>75% Reduzierung des CO2-Fußabdrucks im Vergleich zu EcoLine 2.0</li>
        <li>Verbesserte Bioabbaubarkeit mit Meeresumwelt-Zertifizierung</li>
        <li>Verbesserte mechanische Eigenschaften: +30% Zugfestigkeit</li>
        <li>Kostenreduzierung von 15% durch optimierte Fertigung</li>
        <li>Erweiterter Temperaturbereich: -40°C bis +120°C</li>
      </ul>
      
      <h3>Interaktive Erlebnis-Features</h3>
      <ul>
        <li>3D-Molekularstruktur-Visualisierung</li>
        <li>Echtzeit-Leistungsvergleichstools</li>
        <li>Umweltauswirkungsrechner</li>
        <li>Kosten-Nutzen-Analyse-Dashboard</li>
        <li>Technische Spezifikations-Explorer</li>
        <li>Anwendungseignungsberater</li>
      </ul>`
    },
    image: '/images/updates/ecoline-3-0-hero.jpg',
    thumbnailImage: '/images/updates/ecoline-3-0-thumb.jpg',
    date: '2024-05-15',
    author: updateAuthors[1], // Mark Weber - Product Manager
    readTime: 8,
    tags: ['product-update', 'ecoline', 'sustainability', 'interactive-demo', 'major-release'],
    featured: true,
    version: '3.0.0',
    priority: 'high',
    affectedProducts: ['EcoLine-Basic', 'EcoLine-Pro', 'EcoLine-Industrial', 'EcoLine-Marine'],    changeType: 'new-feature',
    customUrl: '/resources/updates/ecoline-3-0-interactive'
  },
  {
    id: 'custom-ai-quality-system',
    slug: 'ai-quality-control-system-launch',
    category: 'update',
    updateCategory: 'feature-release',
    title: {
      en: 'AI Quality Control System: Live Demo & Technical Deep Dive',
      hu: 'AI minőségirányítási rendszer: Élő demó és műszaki mélyelemzés',
      de: 'KI-Qualitätskontrollsystem: Live-Demo und technische Tiefenanalyse'
    },
    description: {
      en: 'Explore our revolutionary AI-powered quality control system with live monitoring dashboards, real-time data visualization, and predictive analytics capabilities.',
      hu: 'Fedezze fel forradalmi AI-alapú minőségirányítási rendszerünket élő monitorozó műszerfalakkal, valós idejű adatvizualizációval és prediktív analitikai képességekkel.',
      de: 'Entdecken Sie unser revolutionäres KI-gestütztes Qualitätskontrollsystem mit Live-Monitoring-Dashboards, Echtzeit-Datenvisualisierung und prädiktiven Analysefähigkeiten.'
    },
    content: {
      en: `<h2>AI-Powered Quality Revolution</h2>
      <p>Our new AI Quality Control System represents a paradigm shift in manufacturing quality assurance, utilizing machine learning algorithms and computer vision to achieve unprecedented accuracy.</p>
      
      <h3>System Capabilities</h3>
      <ul>
        <li>99.7% defect detection accuracy</li>
        <li>Real-time quality monitoring and alerts</li>
        <li>Predictive maintenance recommendations</li>
        <li>Automated process optimization</li>
        <li>Historical trend analysis and reporting</li>
        <li>Integration with existing ERP systems</li>
      </ul>
      
      <h3>Live Demo Features</h3>
      <ul>
        <li>Interactive quality control dashboard</li>
        <li>Real-time defect detection visualization</li>
        <li>AI decision-making process transparency</li>
        <li>Performance metrics and KPI tracking</li>
        <li>Custom alert configuration interface</li>
        <li>Historical data analysis tools</li>
      </ul>`,
      
      hu: `<h2>AI-alapú minőségi forradalom</h2>
      <p>Új AI minőségirányítási rendszerünk paradigmaváltást jelent a gyártási minőségbiztosításban, gépi tanulási algoritmusokat és számítógépes látást használva példátlan pontosság eléréséhez.</p>
      
      <h3>Rendszer képességek</h3>
      <ul>
        <li>99,7%-os hibaszázalék-észlelési pontosság</li>
        <li>Valós idejű minőségmonitorozás és riasztások</li>
        <li>Prediktív karbantartási ajánlások</li>
        <li>Automatizált folyamatoptimalizálás</li>
        <li>Történeti trendanalízis és jelentések</li>
        <li>Integráció meglévő ERP rendszerekkel</li>
      </ul>
      
      <h3>Élő demó jellemzők</h3>
      <ul>
        <li>Interaktív minőségirányítási műszerfal</li>
        <li>Valós idejű hibaészlelés vizualizáció</li>
        <li>AI döntéshozatali folyamat átláthatóság</li>
        <li>Teljesítménymutatók és KPI követés</li>
        <li>Egyedi riasztás konfigurációs felület</li>
        <li>Történeti adatelemzési eszközök</li>
      </ul>`,
      
      de: `<h2>KI-gesteuerte Qualitätsrevolution</h2>
      <p>Unser neues KI-Qualitätskontrollsystem stellt einen Paradigmenwechsel in der Fertigungsqualitätssicherung dar und nutzt maschinelle Lernalgorithmen und Computer Vision für beispiellose Genauigkeit.</p>
      
      <h3>Systemfähigkeiten</h3>
      <ul>
        <li>99,7% Defekterkennungsgenauigkeit</li>
        <li>Echtzeit-Qualitätsüberwachung und Alarme</li>
        <li>Vorhersagebasierte Wartungsempfehlungen</li>
        <li>Automatisierte Prozessoptimierung</li>
        <li>Historische Trendanalyse und Berichterstattung</li>
        <li>Integration mit bestehenden ERP-Systemen</li>
      </ul>
      
      <h3>Live-Demo-Features</h3>
      <ul>
        <li>Interaktives Qualitätskontroll-Dashboard</li>
        <li>Echtzeit-Defekterkennungsvisualisierung</li>
        <li>Transparenz des KI-Entscheidungsprozesses</li>
        <li>Leistungsmetriken und KPI-Verfolgung</li>
        <li>Benutzerdefinierte Alarm-Konfigurationsoberfläche</li>
        <li>Historische Datenanalyse-Tools</li>
      </ul>`
    },
    image: '/images/updates/ai-quality-control-hero.jpg',
    thumbnailImage: '/images/updates/ai-quality-control-thumb.jpg',
    date: '2024-04-28',
    author: updateAuthors[2], // Dr. Elena Rodriguez
    readTime: 12,
    tags: ['ai', 'quality-control', 'feature-release', 'live-demo', 'technical', 'machine-learning'],
    featured: true,
    version: '4.0.0',
    priority: 'high',    affectedProducts: ['All Production Lines', 'Quality Management System'],    changeType: 'new-feature',
    customUrl: '/resources/updates/ai-quality-control-demo'
  },
  {
    id: 'custom-security-enhancement',
    slug: 'security-enhancement-interactive-guide',
    category: 'update',
    updateCategory: 'maintenance',
    title: {
      en: 'Comprehensive Security Enhancement: Interactive Implementation Guide',
      hu: 'Átfogó biztonsági fejlesztés: Interaktív implementációs útmutató',
      de: 'Umfassende Sicherheitsverbesserung: Interaktiver Implementierungsleitfaden'
    },
    description: {
      en: 'Step-by-step interactive guide for implementing our latest security enhancements with real-time status tracking, compliance checking, and automated verification tools.',
      hu: 'Lépésről lépésre interaktív útmutató legújabb biztonsági fejlesztéseink implementálásához valós idejű állapotkövetéssel, megfelelőség-ellenőrzéssel és automatizált verifikációs eszközökkel.',
      de: 'Schritt-für-Schritt interaktiver Leitfaden zur Implementierung unserer neuesten Sicherheitsverbesserungen mit Echtzeit-Statusverfolgung, Compliance-Prüfung und automatisierten Verifizierungstools.'
    },
    content: {
      en: `<h2>Critical Security Enhancements</h2>
      <p>This update introduces comprehensive security improvements across all systems, addressing the latest cybersecurity threats and ensuring compliance with international standards.</p>
      
      <h3>Security Improvements</h3>
      <ul>
        <li>Enhanced encryption protocols (AES-256 with quantum resistance)</li>
        <li>Multi-factor authentication for all user accounts</li>
        <li>Advanced threat detection and response systems</li>
        <li>Zero-trust network architecture implementation</li>
        <li>Automated security monitoring and alerting</li>
        <li>Compliance with ISO 27001 and GDPR requirements</li>
      </ul>
      
      <h3>Interactive Implementation Tools</h3>
      <ul>
        <li>Step-by-step implementation checklist</li>
        <li>Real-time progress tracking dashboard</li>
        <li>Automated compliance verification</li>
        <li>Security assessment and testing tools</li>
        <li>User training and certification modules</li>
        <li>Rollback and recovery procedures</li>
      </ul>`,
      
      hu: `<h2>Kritikus biztonsági fejlesztések</h2>
      <p>Ez a frissítés átfogó biztonsági fejlesztéseket vezet be minden rendszerben, kezelve a legújabb kiberbiztonsági fenyegetéseket és biztosítva a nemzetközi szabványoknak való megfelelést.</p>
      
      <h3>Biztonsági fejlesztések</h3>
      <ul>
        <li>Javított titkosítási protokollok (AES-256 kvantum-ellenállással)</li>
        <li>Többfaktoros hitelesítés minden felhasználói fiókhoz</li>
        <li>Fejlett fenyegetésészlelési és reagálási rendszerek</li>
        <li>Zero-trust hálózati architektúra megvalósítás</li>
        <li>Automatizált biztonsági monitorozás és riasztás</li>
        <li>ISO 27001 és GDPR követelményeknek való megfelelés</li>
      </ul>
      
      <h3>Interaktív implementációs eszközök</h3>
      <ul>
        <li>Lépésről lépésre implementációs ellenőrzőlista</li>
        <li>Valós idejű előrehaladás-követő műszerfal</li>
        <li>Automatizált megfelelőség-ellenőrzés</li>
        <li>Biztonsági értékelési és tesztelési eszközök</li>
        <li>Felhasználói képzési és tanúsítási modulok</li>
        <li>Visszaállítási és helyreállítási eljárások</li>
      </ul>`,
      
      de: `<h2>Kritische Sicherheitsverbesserungen</h2>
      <p>Dieses Update führt umfassende Sicherheitsverbesserungen in allen Systemen ein, adressiert die neuesten Cybersicherheitsbedrohungen und gewährleistet die Einhaltung internationaler Standards.</p>
      
      <h3>Sicherheitsverbesserungen</h3>
      <ul>
        <li>Verbesserte Verschlüsselungsprotokolle (AES-256 mit Quantenresistenz)</li>
        <li>Multi-Faktor-Authentifizierung für alle Benutzerkonten</li>
        <li>Erweiterte Bedrohungserkennung und Reaktionssysteme</li>
        <li>Zero-Trust-Netzwerkarchitektur-Implementierung</li>
        <li>Automatisierte Sicherheitsüberwachung und Alarmierung</li>
        <li>Einhaltung von ISO 27001 und DSGVO-Anforderungen</li>
      </ul>
      
      <h3>Interaktive Implementierungs-Tools</h3>
      <ul>
        <li>Schritt-für-Schritt-Implementierungs-Checkliste</li>
        <li>Echtzeit-Fortschritts-Tracking-Dashboard</li>
        <li>Automatisierte Compliance-Verifizierung</li>
        <li>Sicherheitsbewertungs- und Testtools</li>
        <li>Benutzerschulungs- und Zertifizierungsmodule</li>
        <li>Rollback- und Wiederherstellungsverfahren</li>
      </ul>`
    },
    image: '/images/updates/security-enhancement-hero.jpg',
    thumbnailImage: '/images/updates/security-enhancement-thumb.jpg',
    date: '2024-03-22',
    author: updateAuthors[0], // Dr. Anna Kovács
    readTime: 6,
    tags: ['security', 'enhancement', 'implementation-guide', 'interactive', 'compliance', 'critical'],
    featured: false,
    version: '2.1.5',
    priority: 'critical',    affectedProducts: ['All Systems', 'Customer Portal', 'Data Management'],    changeType: 'security',
    customUrl: '/resources/updates/security-enhancement-interactive'
  }
];

/**
 * Standard helper functions for custom updates
 */
export const customUpdateHelpers = {
  // Basic operations
  getAll: (): Partial<UpdateItem>[] => customUpdates,
  getFeatured: (): Partial<UpdateItem>[] => customUpdates.filter(update => update.featured),
  getRecent: (limit: number = 5): Partial<UpdateItem>[] => 
    [...customUpdates].sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()).slice(0, limit),
  
  // Search operations
  getById: (id: string): Partial<UpdateItem> | undefined => 
    customUpdates.find(update => update.id === id),
  getBySlug: (slug: string): Partial<UpdateItem> | undefined => 
    customUpdates.find(update => update.slug === slug),
  
  // Filter operations
  getByCategory: (category: string): Partial<UpdateItem>[] => 
    customUpdates.filter(update => update.updateCategory === category),
  getByTag: (tag: string): Partial<UpdateItem>[] => 
    customUpdates.filter(update => update.tags?.includes(tag)),
  getByPriority: (priority: string): Partial<UpdateItem>[] => 
    customUpdates.filter(update => update.priority === priority),
  getByChangeType: (changeType: string): Partial<UpdateItem>[] => 
    customUpdates.filter(update => update.changeType === changeType),
  getByAuthor: (authorId: string): Partial<UpdateItem>[] => 
    customUpdates.filter(update => update.author?.id === authorId),
  getCritical: (): Partial<UpdateItem>[] => 
    customUpdates.filter(update => update.priority === 'critical'),
  
  // Utility operations
  getAllTags: (): string[] => {
    const allTags = new Set<string>();
    customUpdates.forEach(update => update.tags?.forEach(tag => allTags.add(tag)));
    return Array.from(allTags).sort();
  },
  getAllCategories: (): string[] => {
    const categories = new Set<string>();
    customUpdates.forEach(update => update.updateCategory && categories.add(update.updateCategory));
    return Array.from(categories).sort();
  },
  getAllPriorities: (): string[] => {
    const priorities = new Set<string>();
    customUpdates.forEach(update => update.priority && priorities.add(update.priority));
    return Array.from(priorities).sort();
  },
  getAllChangeTypes: (): string[] => {
    const changeTypes = new Set<string>();
    customUpdates.forEach(update => update.changeType && changeTypes.add(update.changeType));
    return Array.from(changeTypes).sort();
  },
  
  // Related content
  getRelated: (updateId: string, limit: number = 3): Partial<UpdateItem>[] => {
    const currentUpdate = customUpdates.find(update => update.id === updateId);
    if (!currentUpdate) return [];

    return customUpdates
      .filter(update => 
        update.id !== updateId && 
        (update.updateCategory === currentUpdate.updateCategory || 
         update.changeType === currentUpdate.changeType ||
         update.tags?.some(tag => currentUpdate.tags?.includes(tag)))
      )
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
      .slice(0, limit);
  }
};

/**
 * Aggregation function to combine regular and custom updates
 * This is the main function to use when you want all updates
 */
export const getAllUpdatesWithCustom = async (): Promise<UpdateItem[]> => {
  try {
    // Import regular updates
    const { updates } = await import('./updatesData');
    
    // Filter out regular updates that have custom versions (same ID)
    const regularUpdates = updates.filter(
      (regularUpdate: UpdateItem) => 
        !customUpdates.some(customUpdate => customUpdate.id === regularUpdate.id)
    );
    
    // Combine regular and custom updates
    const combinedUpdates = [...regularUpdates, ...customUpdates as UpdateItem[]];
    
    // Sort by date (newest first)
    return combinedUpdates.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading updates:', error);
    return customUpdates as UpdateItem[];
  }
};

/**
 * Get combined featured updates (regular + custom)
 */
export const getFeaturedUpdatesWithCustom = async (): Promise<UpdateItem[]> => {
  const allUpdates = await getAllUpdatesWithCustom();
  return allUpdates.filter(update => update.featured);
};

/**
 * Get combined critical updates (regular + custom)
 */
export const getCriticalUpdatesWithCustom = async (): Promise<UpdateItem[]> => {
  const allUpdates = await getAllUpdatesWithCustom();
  return allUpdates.filter(update => update.priority === 'critical');
};

/**
 * Search across all updates (regular + custom)
 */
export const searchAllUpdates = async (query: string): Promise<UpdateItem[]> => {
  const allUpdates = await getAllUpdatesWithCustom();
  const searchTerm = query.toLowerCase();
  
  return allUpdates.filter(update =>
    update.title?.en?.toLowerCase().includes(searchTerm) ||
    update.title?.hu?.toLowerCase().includes(searchTerm) ||
    update.title?.de?.toLowerCase().includes(searchTerm) ||
    update.description?.en?.toLowerCase().includes(searchTerm) ||
    update.description?.hu?.toLowerCase().includes(searchTerm) ||
    update.description?.de?.toLowerCase().includes(searchTerm) ||
    update.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    update.updateCategory?.toLowerCase().includes(searchTerm) ||
    update.changeType?.toLowerCase().includes(searchTerm) ||
    update.version?.toLowerCase().includes(searchTerm)
  );
};

// Individual exports for direct access (backwards compatibility)
export const getCustomUpdates = customUpdateHelpers.getAll;
export const getFeaturedCustomUpdates = customUpdateHelpers.getFeatured;
export const getRecentCustomUpdates = customUpdateHelpers.getRecent;
export const getCustomUpdateById = customUpdateHelpers.getById;
export const getCustomUpdateBySlug = customUpdateHelpers.getBySlug;
export const getCustomUpdatesByCategory = customUpdateHelpers.getByCategory;
export const getCustomUpdatesByTag = customUpdateHelpers.getByTag;
export const getCustomUpdatesByPriority = customUpdateHelpers.getByPriority;
export const getCustomUpdatesByChangeType = customUpdateHelpers.getByChangeType;
export const getCustomUpdatesByAuthor = customUpdateHelpers.getByAuthor;
export const getCriticalCustomUpdates = customUpdateHelpers.getCritical;
export const getAllCustomUpdateTags = customUpdateHelpers.getAllTags;
export const getAllCustomUpdateCategories = customUpdateHelpers.getAllCategories;
export const getAllCustomUpdatePriorities = customUpdateHelpers.getAllPriorities;
export const getAllCustomUpdateChangeTypes = customUpdateHelpers.getAllChangeTypes;
export const getRelatedCustomUpdates = customUpdateHelpers.getRelated;

// Legacy exports for backwards compatibility
export const getAllUpdates = getAllUpdatesWithCustom;
export const getFeaturedUpdates = getFeaturedUpdatesWithCustom;
export const getCriticalUpdates = getCriticalUpdatesWithCustom;

// Legacy function exports (keeping original function-style exports)
export function getCustomUpdateByIdLegacy(id: string): Partial<UpdateItem> | undefined {
  return customUpdateHelpers.getById(id);
}

export function getCustomUpdateBySlugLegacy(slug: string): Partial<UpdateItem> | undefined {
  return customUpdateHelpers.getBySlug(slug);
}

export function getFeaturedCustomUpdatesLegacy(): Partial<UpdateItem>[] {
  return customUpdateHelpers.getFeatured();
}

export function getCustomUpdatesByCategoryLegacy(updateCategory: string): Partial<UpdateItem>[] {
  return customUpdateHelpers.getByCategory(updateCategory);
}

export function getCustomUpdatesByPriorityLegacy(priority: string): Partial<UpdateItem>[] {
  return customUpdateHelpers.getByPriority(priority);
}