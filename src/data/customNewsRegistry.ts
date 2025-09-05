import { NewsArticle, newsAuthors } from './newsData';

/**
 * Registry for custom-designed news articles.
 * These articles have their own dedicated page files with custom layouts.
 * Register them here to make them appear in the main news listing.
 */
export const customNews: Partial<NewsArticle>[] = [
  {
    id: 'custom-expansion-announcement',
    slug: 'european-expansion-interactive-announcement',
    category: 'news',
    newsCategory: 'company-news',
    title: {
      en: 'Major European Expansion: Interactive Facility Tour & Timeline',
      hu: 'Nagy európai bővítés: Interaktív létesítménybejárás és ütemterv',
      de: 'Große europäische Expansion: Interaktive Anlagentour und Zeitplan'
    },
    description: {
      en: 'Experience our expansion plans through virtual facility tours, interactive timelines, and real-time construction progress tracking with 3D visualizations.',
      hu: 'Tapasztalja meg bővítési terveinket virtuális létesítménybejárásokon, interaktív ütemterveken és valós idejű építési előrehaladás-követésen keresztül 3D vizualizációkkal.',
      de: 'Erleben Sie unsere Expansionspläne durch virtuelle Anlagentouren, interaktive Zeitpläne und Echtzeit-Baufortschrittsverfolgung mit 3D-Visualisierungen.'
    },
    summary: {
      en: 'Flair Plastic announces €50M investment in new European facilities with innovative manufacturing capabilities and sustainability features.',
      hu: 'A Flair Plastic bejelenti az 50 millió eurós befektetést új európai létesítményekbe innovatív gyártási képességekkel és fenntarthatósági jellemzőkkel.',
      de: 'Flair Plastic kündigt eine 50-Millionen-Euro-Investition in neue europäische Anlagen mit innovativen Fertigungskapazitäten und Nachhaltigkeitsmerkmalen an.'
    },
    content: {
      en: `<p>We're excited to announce our largest expansion to date with a €50 million investment in three new European facilities, featuring cutting-edge technology and sustainable manufacturing processes.</p>
      
      <h2>Expansion Overview</h2>
      <p>The expansion includes state-of-the-art facilities in Munich (Germany), Milan (Italy), and Lyon (France), each designed to serve regional markets while maintaining our commitment to environmental responsibility.</p>
      
      <h2>Interactive Experience Features</h2>
      <ul>
        <li>Virtual reality facility tours</li>
        <li>Real-time construction progress tracking</li>
        <li>3D visualization of equipment and layouts</li>
        <li>Interactive timeline with milestone tracking</li>
        <li>Live environmental impact monitoring</li>
      </ul>
      
      <h2>Sustainability Focus</h2>
      <p>All new facilities will achieve carbon neutrality by 2025, featuring solar panels, rainwater harvesting, and energy-efficient manufacturing equipment.</p>`,
      
      hu: `<p>Örömmel jelentjük be eddigi legnagyobb bővítésünket, 50 millió eurós befektetéssel három új európai létesítménybe, amelyek élvonalbeli technológiát és fenntartható gyártási folyamatokat tartalmaznak.</p>
      
      <h2>Bővítés áttekintése</h2>
      <p>A bővítés korszerű létesítményeket tartalmaz Münchenben (Németország), Milánóban (Olaszország) és Lyonban (Franciaország), amelyek mindegyike regionális piacok kiszolgálására lett tervezve, miközben fenntartjuk elkötelezettségünket a környezeti felelősség iránt.</p>
      
      <h2>Interaktív élmény jellemzők</h2>
      <ul>
        <li>Virtuális valóság létesítménybejárások</li>
        <li>Valós idejű építési előrehaladás-követés</li>
        <li>3D vizualizáció berendezésekről és elrendezésekről</li>
        <li>Interaktív ütemterv mérföldkő-követéssel</li>
        <li>Élő környezeti hatás monitorozás</li>
      </ul>
      
      <h2>Fenntarthatósági fókusz</h2>
      <p>Minden új létesítmény eléri a karbonsemlegességet 2025-re, napelemekkel, esővíz-gyűjtéssel és energiahatékony gyártóberendezésekkel.</p>`,
      
      de: `<p>Wir freuen uns, unsere bisher größte Expansion mit einer 50-Millionen-Euro-Investition in drei neue europäische Anlagen bekannt zu geben, die modernste Technologie und nachhaltige Fertigungsprozesse bieten.</p>
      
      <h2>Expansionsübersicht</h2>
      <p>Die Expansion umfasst hochmoderne Anlagen in München (Deutschland), Mailand (Italien) und Lyon (Frankreich), die jeweils zur Bedienung regionaler Märkte konzipiert sind und gleichzeitig unser Engagement für Umweltverantwortung aufrechterhalten.</p>
      
      <h2>Interaktive Erlebnis-Features</h2>
      <ul>
        <li>Virtual Reality-Anlagentouren</li>
        <li>Echtzeit-Baufortschrittsverfolgung</li>
        <li>3D-Visualisierung von Ausrüstung und Layouts</li>
        <li>Interaktiver Zeitplan mit Meilenstein-Verfolgung</li>
        <li>Live-Umweltauswirkungsüberwachung</li>
      </ul>
      
      <h2>Nachhaltigkeitsfokus</h2>
      <p>Alle neuen Anlagen werden bis 2025 Kohlenstoffneutralität erreichen, mit Solarpanels, Regenwassersammlung und energieeffizienten Fertigungsgeräten.</p>`
    },
    image: '/images/news/expansion-interactive-announcement.jpg',
    thumbnailImage: '/images/news/expansion-interactive-announcement-thumb.jpg',
    date: '2024-05-10',
    publishedAt: '2024-05-10T09:00:00Z',
    updatedAt: '2024-05-10T09:00:00Z',
    author: newsAuthors[0], // John Smith
    readTime: 8,    tags: ['company-news', 'expansion', 'interactive-tour', 'virtual-reality', 'timeline', 'sustainability'],
    featured: true,    source: 'Flair Plastic Interactive News',
    location: 'Munich, Germany',
    urgent: false,
    customUrl: '/resources/news/european-expansion-interactive-announcement'
  },
  {
    id: 'custom-sustainability-report',
    slug: 'annual-sustainability-report-interactive-dashboard',
    category: 'news',
    newsCategory: 'company-news',
    title: {
      en: 'Annual Sustainability Report: Interactive Data Dashboard',
      hu: 'Éves fenntarthatósági jelentés: Interaktív adatműszerfal',
      de: 'Jährlicher Nachhaltigkeitsbericht: Interaktives Daten-Dashboard'
    },
    description: {
      en: 'Explore our sustainability achievements through interactive charts, real-time metrics, and detailed environmental impact visualizations with live data feeds.',
      hu: 'Fedezze fel fenntarthatósági eredményeinket interaktív diagramokon, valós idejű mutatókon és részletes környezeti hatás vizualizációkon keresztül élő adatfolyamokkal.',
      de: 'Entdecken Sie unsere Nachhaltigkeitserfolge durch interaktive Diagramme, Echtzeit-Metriken und detaillierte Umweltauswirkungsvisualisierungen mit Live-Datenfeeds.'
    },
    summary: {
      en: 'Our 2024 sustainability report shows 45% carbon reduction, 60% waste elimination, and achievement of key environmental milestones.',
      hu: '2024-es fenntarthatósági jelentésünk 45%-os széncsökkentést, 60%-os hulladékcsökkentést és kulcsfontosságú környezetvédelmi mérföldkövek elérését mutatja.',
      de: 'Unser Nachhaltigkeitsbericht 2024 zeigt 45% Kohlenstoffreduzierung, 60% Abfalleliminierung und das Erreichen wichtiger Umweltmeilensteine.'
    },
    content: {
      en: `<p>We're proud to present our 2024 Annual Sustainability Report featuring an interactive dashboard that brings our environmental achievements to life through real-time data visualization.</p>
      
      <h2>Key Achievements</h2>
      <p>This year marked significant progress in our sustainability journey with measurable improvements across all environmental metrics.</p>
      
      <h2>Interactive Features</h2>
      <ul>
        <li>Real-time carbon footprint tracking</li>
        <li>Interactive waste reduction visualizations</li>
        <li>Energy consumption heat maps</li>
        <li>Water usage flow diagrams</li>
        <li>Renewable energy adoption charts</li>
        <li>Biodiversity impact assessments</li>
      </ul>
      
      <h2>Future Commitments</h2>
      <p>Building on this year's success, we're setting even more ambitious targets for 2025, including carbon neutrality and zero waste to landfill.</p>`,
      
      hu: `<p>Büszkén mutatjuk be 2024-es éves fenntarthatósági jelentésünket, amely interaktív műszerfalat tartalmaz, és életre kelti környezeti eredményeinket valós idejű adatvizualizáción keresztül.</p>
      
      <h2>Kulcs eredmények</h2>
      <p>Ez az év jelentős előrelépést jelentett fenntarthatósági utazásunkban, mérhető javulásokkal minden környezeti mutatóban.</p>
      
      <h2>Interaktív jellemzők</h2>
      <ul>
        <li>Valós idejű karbon-lábnyom követés</li>
        <li>Interaktív hulladékcsökkentési vizualizációk</li>
        <li>Energiafogyasztási hőtérképek</li>
        <li>Vízhasználati folyamatábrák</li>
        <li>Megújuló energia adoptációs diagramok</li>
        <li>Biodiverzitás hatásbecslések</li>
      </ul>
      
      <h2>Jövőbeli kötelezettségvállalások</h2>
      <p>Az idei siker alapján még ambiciózusabb célokat tűzünk ki 2025-re, beleértve a karbonsemlegességet és a nulla hulladékot a szemétlerakóba.</p>`,
      
      de: `<p>Wir sind stolz darauf, unseren Nachhaltigkeitsbericht 2024 mit einem interaktiven Dashboard zu präsentieren, das unsere Umwelterfolge durch Echtzeit-Datenvisualisierung zum Leben erweckt.</p>
      
      <h2>Wichtige Erfolge</h2>
      <p>Dieses Jahr markierte bedeutende Fortschritte in unserer Nachhaltigkeitsreise mit messbaren Verbesserungen in allen Umweltmetriken.</p>
      
      <h2>Interaktive Features</h2>
      <ul>
        <li>Echtzeit-CO2-Fußabdruck-Verfolgung</li>
        <li>Interaktive Abfallreduzierungs-Visualisierungen</li>
        <li>Energieverbrauchs-Heatmaps</li>
        <li>Wasserverbrauchs-Flussdiagramme</li>
        <li>Erneuerbare-Energie-Adoptionsdiagramme</li>
        <li>Biodiversitäts-Impact-Bewertungen</li>
      </ul>
      
      <h2>Zukünftige Verpflichtungen</h2>
      <p>Aufbauend auf dem diesjährigen Erfolg setzen wir uns noch ehrgeizigere Ziele für 2025, einschließlich Kohlenstoffneutralität und null Abfall zur Deponie.</p>`
    },
    image: '/images/news/sustainability-dashboard-report.jpg',
    thumbnailImage: '/images/news/sustainability-dashboard-report-thumb.jpg',
    date: '2024-04-15',
    publishedAt: '2024-04-15T10:00:00Z',
    updatedAt: '2024-04-15T10:00:00Z',
    author: newsAuthors[1], // Maria Garcia
    readTime: 12,
    tags: ['sustainability', 'annual-report', 'data-visualization', 'interactive-dashboard', 'metrics', 'environment'],
    featured: true,
    source: 'Flair Plastic Sustainability Team',
    location: 'Budapest, Hungary',    urgent: false,
    customUrl: '/resources/news/annual-sustainability-report-interactive-dashboard'
  },
  {
    id: 'custom-industry-award-recognition',
    slug: 'innovation-award-interactive-showcase',
    category: 'news',
    newsCategory: 'industry-news',
    title: {
      en: 'Innovation Award Recognition: Interactive Technology Showcase',
      hu: 'Innovációs díj elismerés: Interaktív technológiai bemutató',
      de: 'Innovationsauszeichnung: Interaktives Technologie-Showcase'
    },
    description: {
      en: 'Celebrate our prestigious innovation award with an interactive showcase featuring 3D product demonstrations and behind-the-scenes development insights.',
      hu: 'Ünnepeljük rangos innovációs díjunkat interaktív bemutatóval, amely 3D termékbemutatókat és a fejlesztés kulisszatitkait tartalmazza.',
      de: 'Feiern Sie unsere prestigeträchtige Innovationsauszeichnung mit einem interaktiven Showcase mit 3D-Produktdemonstrationen und Einblicken in die Entwicklung.'
    },
    summary: {
      en: 'Flair Plastic receives European Innovation Award for breakthrough bio-plastic technology, recognized for environmental impact and technical excellence.',
      hu: 'A Flair Plastic megkapja az Európai Innovációs Díjat az áttörést jelentő bio-műanyag technológiáért, elismerve a környezeti hatást és technikai kiválóságot.',
      de: 'Flair Plastic erhält den Europäischen Innovationspreis für bahnbrechende Bio-Kunststofftechnologie, anerkannt für Umweltauswirkungen und technische Exzellenz.'
    },
    content: {
      en: `<p>We are honored to receive the prestigious European Innovation Award 2024 for our groundbreaking bio-plastic technology that's reshaping the industry's approach to sustainable manufacturing.</p>
      
      <h2>Award Recognition</h2>
      <p>The European Innovation Council recognized our bio-plastic technology for its exceptional environmental benefits and technical innovation, particularly in reducing microplastic pollution.</p>
      
      <h2>Interactive Showcase Features</h2>
      <ul>
        <li>3D product visualization and interaction</li>
        <li>Virtual laboratory tours</li>
        <li>Time-lapse development process</li>
        <li>Environmental impact comparisons</li>
        <li>Technical specification explorer</li>
        <li>Customer testimonial videos</li>
      </ul>
      
      <h2>Impact & Innovation</h2>
      <p>Our award-winning technology has already prevented over 50 tons of microplastic pollution and is being adopted by major manufacturers across Europe.</p>`,
      
      hu: `<p>Megtiszteltetés számunkra, hogy megkaptuk a rangos Európai Innovációs Díj 2024-et úttörő bio-műanyag technológiánkért, amely újraformálja az iparág fenntartható gyártási megközelítését.</p>
      
      <h2>Díj elismerés</h2>
      <p>Az Európai Innovációs Tanács elismerte bio-műanyag technológiánkat kivételes környezeti előnyeiért és technikai innovációjáért, különösen a mikroműanyag szennyezés csökkentésében.</p>
      
      <h2>Interaktív bemutató jellemzők</h2>
      <ul>
        <li>3D termék vizualizáció és interakció</li>
        <li>Virtuális laboratóriumi túrák</li>
        <li>Időgyorsított fejlesztési folyamat</li>
        <li>Környezeti hatás összehasonlítások</li>
        <li>Műszaki specifikáció felfedező</li>
        <li>Ügyfél referencia videók</li>
      </ul>
      
      <h2>Hatás és innováció</h2>
      <p>Díjnyertes technológiánk már több mint 50 tonna mikroműanyag szennyezést akadályozott meg, és nagyobb európai gyártók alkalmazzák.</p>`,
      
      de: `<p>Wir fühlen uns geehrt, den prestigeträchtigen Europäischen Innovationspreis 2024 für unsere bahnbrechende Bio-Kunststofftechnologie zu erhalten, die den Ansatz der Industrie zur nachhaltigen Fertigung neu gestaltet.</p>
      
      <h2>Auszeichnungsanerkennung</h2>
      <p>Der Europäische Innovationsrat erkannte unsere Bio-Kunststofftechnologie für ihre außergewöhnlichen Umweltvorteile und technische Innovation an, insbesondere bei der Reduzierung von Mikroplastikverschmutzung.</p>
      
      <h2>Interaktive Showcase-Features</h2>
      <ul>
        <li>3D-Produktvisualisierung und -interaktion</li>
        <li>Virtuelle Labortouren</li>
        <li>Zeitraffer-Entwicklungsprozess</li>
        <li>Umweltauswirkungsvergleiche</li>
        <li>Technischer Spezifikations-Explorer</li>
        <li>Kundenstimmen-Videos</li>
      </ul>
      
      <h2>Auswirkung und Innovation</h2>
      <p>Unsere preisgekrönte Technologie hat bereits über 50 Tonnen Mikroplastikverschmutzung verhindert und wird von großen Herstellern in ganz Europa eingesetzt.</p>`
    },
    image: '/images/news/innovation-award-showcase.jpg',
    thumbnailImage: '/images/news/innovation-award-showcase-thumb.jpg',
    date: '2024-03-28',
    publishedAt: '2024-03-28T14:00:00Z',
    updatedAt: '2024-03-28T14:00:00Z',
    author: newsAuthors[2], // Dr. Elena Rodriguez
    readTime: 6,
    tags: ['industry-news', 'innovation-award', 'bio-plastic', 'recognition', 'interactive-showcase', 'technology'],
    featured: false,
    source: 'European Innovation Council',
    location: 'Brussels, Belgium',    urgent: false,
    customUrl: '/resources/news/innovation-award-interactive-showcase'
  }
];

/**
 * Standard helper functions for custom news
 */
export const customNewsHelpers = {
  // Basic operations
  getAll: (): Partial<NewsArticle>[] => customNews,
  getFeatured: (): Partial<NewsArticle>[] => customNews.filter(article => article.featured),
  getRecent: (limit: number = 5): Partial<NewsArticle>[] => 
    [...customNews].sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()).slice(0, limit),
  
  // Search operations
  getById: (id: string): Partial<NewsArticle> | undefined => 
    customNews.find(article => article.id === id),
  getBySlug: (slug: string): Partial<NewsArticle> | undefined => 
    customNews.find(article => article.slug === slug),
  
  // Filter operations
  getByCategory: (category: string): Partial<NewsArticle>[] => 
    customNews.filter(article => article.newsCategory === category),
  getByTag: (tag: string): Partial<NewsArticle>[] => 
    customNews.filter(article => article.tags?.includes(tag)),
  getByAuthor: (authorId: string): Partial<NewsArticle>[] => 
    customNews.filter(article => article.author?.id === authorId),
  getUrgent: (): Partial<NewsArticle>[] => 
    customNews.filter(article => article.urgent),
  
  // Utility operations
  getAllTags: (): string[] => {
    const allTags = new Set<string>();
    customNews.forEach(article => article.tags?.forEach(tag => allTags.add(tag)));
    return Array.from(allTags).sort();
  },
  getAllCategories: (): string[] => {
    const categories = new Set<string>();
    customNews.forEach(article => article.newsCategory && categories.add(article.newsCategory));
    return Array.from(categories).sort();
  },
  
  // Related content
  getRelated: (articleId: string, limit: number = 3): Partial<NewsArticle>[] => {
    const currentArticle = customNews.find(article => article.id === articleId);
    if (!currentArticle) return [];

    return customNews
      .filter(article => 
        article.id !== articleId && 
        (article.newsCategory === currentArticle.newsCategory || 
         article.tags?.some(tag => currentArticle.tags?.includes(tag)))
      )
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
      .slice(0, limit);
  }
};

/**
 * Aggregation function to combine regular and custom news
 * This is the main function to use when you want all news articles
 */
export const getAllNewsWithCustom = async (): Promise<NewsArticle[]> => {
  try {
    // Import regular news articles
    const { newsArticles } = await import('./newsData');
    
    // Filter out regular news that have custom versions (same ID)
    const regularNews = newsArticles.filter(
      (regularArticle: NewsArticle) => 
        !customNews.some(customArticle => customArticle.id === regularArticle.id)
    );
    
    // Combine regular and custom news
    const combinedNews = [...regularNews, ...customNews as NewsArticle[]];
    
    // Sort by date (newest first)
    return combinedNews.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading news articles:', error);
    return customNews as NewsArticle[];
  }
};

/**
 * Get combined featured news (regular + custom)
 */
export const getFeaturedNewsWithCustom = async (): Promise<NewsArticle[]> => {
  const allNews = await getAllNewsWithCustom();
  return allNews.filter(article => article.featured);
};

/**
 * Get combined urgent news (regular + custom)
 */
export const getUrgentNewsWithCustom = async (): Promise<NewsArticle[]> => {
  const allNews = await getAllNewsWithCustom();
  return allNews.filter(article => article.urgent);
};

/**
 * Search across all news articles (regular + custom)
 */
export const searchAllNews = async (query: string): Promise<NewsArticle[]> => {
  const allNews = await getAllNewsWithCustom();
  const searchTerm = query.toLowerCase();
  
  return allNews.filter(article =>
    article.title?.en?.toLowerCase().includes(searchTerm) ||
    article.title?.hu?.toLowerCase().includes(searchTerm) ||
    article.title?.de?.toLowerCase().includes(searchTerm) ||
    article.description?.en?.toLowerCase().includes(searchTerm) ||
    article.description?.hu?.toLowerCase().includes(searchTerm) ||
    article.description?.de?.toLowerCase().includes(searchTerm) ||
    article.summary?.en?.toLowerCase().includes(searchTerm) ||
    article.summary?.hu?.toLowerCase().includes(searchTerm) ||
    article.summary?.de?.toLowerCase().includes(searchTerm) ||
    article.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    article.newsCategory?.toLowerCase().includes(searchTerm)
  );
};

// Individual exports for direct access (backwards compatibility)
export const getCustomNews = customNewsHelpers.getAll;
export const getFeaturedCustomNews = customNewsHelpers.getFeatured;
export const getRecentCustomNews = customNewsHelpers.getRecent;
export const getCustomNewsById = customNewsHelpers.getById;
export const getCustomNewsBySlug = customNewsHelpers.getBySlug;
export const getCustomNewsByCategory = customNewsHelpers.getByCategory;
export const getCustomNewsByTag = customNewsHelpers.getByTag;
export const getCustomNewsByAuthor = customNewsHelpers.getByAuthor;
export const getUrgentCustomNews = customNewsHelpers.getUrgent;
export const getAllCustomNewsTags = customNewsHelpers.getAllTags;
export const getAllCustomNewsCategories = customNewsHelpers.getAllCategories;
export const getRelatedCustomNews = customNewsHelpers.getRelated;

// Legacy export for backwards compatibility
export const getAllNews = getAllNewsWithCustom;