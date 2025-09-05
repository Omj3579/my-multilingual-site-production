import { BlogPost, blogAuthors } from './blogPostsData';

/**
 * Registry for custom-designed blog posts.
 * These posts have their own dedicated page files with custom layouts.
 * Register them here to make them appear in the main blog listing.
 */
export const customBlogPosts: Partial<BlogPost>[] = [  {
    id: 'custom-sustainable-innovations',
    slug: 'sustainable-innovations-interactive',
    category: 'blog',
    title: {
      en: 'Sustainable Innovations in Plastic Manufacturing (Interactive Experience)',
      hu: 'Fenntartható innovációk a műanyaggyártásban (Interaktív élmény)',
      de: 'Nachhaltige Innovationen in der Kunststoffherstellung (Interaktives Erlebnis)'
    },
    description: {
      en: 'Discover the latest sustainable innovations in plastic manufacturing through our interactive content experience with 3D models, calculators, and real-time data visualization.',
      hu: 'Fedezze fel a legújabb fenntartható innovációkat a műanyaggyártásban interaktív tartalom élményünkön keresztül 3D modellekkel, kalkulátorokkal és valós idejű adatvizualizációval.',
      de: 'Entdecken Sie die neuesten nachhaltigen Innovationen in der Kunststoffherstellung durch unser interaktives Inhaltserlebnis mit 3D-Modellen, Rechnern und Echtzeit-Datenvisualisierung.'
    },
    excerpt: {
      en: 'Revolutionary sustainable manufacturing techniques are transforming the plastic industry. Explore cutting-edge innovations through our interactive demonstration.',
      hu: 'Forradalmi fenntartható gyártási technikák alakítják át a műanyagipart. Fedezze fel a legmodernebb innovációkat interaktív bemutatónkon keresztül.',
      de: 'Revolutionäre nachhaltige Fertigungstechniken transformieren die Kunststoffindustrie. Erkunden Sie modernste Innovationen durch unsere interaktive Demonstration.'
    },
    content: {
      en: `<p>The plastic manufacturing industry is undergoing a revolutionary transformation, driven by innovative sustainable technologies that are reshaping how we think about production, waste, and environmental responsibility.</p>
      
      <h2>Revolutionary Bio-Based Materials</h2>
      <p>Our latest bio-based plastic formulations represent a breakthrough in sustainable manufacturing, offering performance characteristics that match or exceed traditional plastics while maintaining complete biodegradability.</p>
      
      <h2>Interactive Features</h2>
      <ul>
        <li>3D molecular structure visualization</li>
        <li>Carbon footprint calculator</li>
        <li>Real-time manufacturing process simulation</li>
        <li>Cost-benefit analysis tools</li>
        <li>Environmental impact tracker</li>
        <li>Material property comparisons</li>
      </ul>
      
      <h2>Industry Impact</h2>
      <p>These innovations have already helped our clients reduce their environmental footprint by up to 75% while maintaining product quality and reducing costs by an average of 20%.</p>`,
      
      hu: `<p>A műanyaggyártó ipar forradalmi átalakuláson megy keresztül, amelyet innovatív fenntartható technológiák vezérelnek, és amelyek újraformálják, hogyan gondolkodunk a termelésről, hulladékról és környezeti felelősségről.</p>
      
      <h2>Forradalmi bio-alapú anyagok</h2>
      <p>Legújabb bio-alapú műanyag formulációink áttörést jelentenek a fenntartható gyártásban, olyan teljesítményjellemzőket kínálva, amelyek egyenlők vagy meghaladják a hagyományos műanyagokét, miközben teljes biológiai lebomlást biztosítanak.</p>
      
      <h2>Interaktív jellemzők</h2>
      <ul>
        <li>3D molekuláris szerkezet vizualizáció</li>
        <li>Karbon-lábnyom kalkulátor</li>
        <li>Valós idejű gyártási folyamat szimuláció</li>
        <li>Költség-haszon elemzési eszközök</li>
        <li>Környezeti hatás követő</li>
        <li>Anyagtulajdonság összehasonlítások</li>
      </ul>
      
      <h2>Ipari hatás</h2>
      <p>Ezek az innovációk már segítettek ügyfeleinknek környezeti lábnyomuk akár 75%-os csökkentésében, miközben fenntartották a termékminőséget és átlagosan 20%-kal csökkentették a költségeket.</p>`,
      
      de: `<p>Die Kunststofffertigungsindustrie durchläuft eine revolutionäre Transformation, angetrieben von innovativen nachhaltigen Technologien, die unsere Denkweise über Produktion, Abfall und Umweltverantwortung neu gestalten.</p>
      
      <h2>Revolutionäre biobasierte Materialien</h2>
      <p>Unsere neuesten biobasierten Kunststoffformulierungen stellen einen Durchbruch in der nachhaltigen Fertigung dar und bieten Leistungsmerkmale, die traditionelle Kunststoffe erreichen oder übertreffen, während sie vollständige Bioabbaubarkeit beibehalten.</p>
      
      <h2>Interaktive Features</h2>
      <ul>
        <li>3D-Molekularstruktur-Visualisierung</li>
        <li>CO2-Fußabdruck-Rechner</li>
        <li>Echtzeit-Fertigungsprozess-Simulation</li>
        <li>Kosten-Nutzen-Analysewerkzeuge</li>
        <li>Umweltauswirkungstracker</li>
        <li>Materialeigenschaftsvergleiche</li>
      </ul>
      
      <h2>Industrielle Auswirkungen</h2>
      <p>Diese Innovationen haben unseren Kunden bereits dabei geholfen, ihren Umwelt-Fußabdruck um bis zu 75% zu reduzieren, während sie die Produktqualität beibehalten und die Kosten um durchschnittlich 20% senken.</p>`
    },    image: '/resources/Blog/sustainable-innovations.webp',
    thumbnailImage: '/resources/Blog/sustainable-innovations.webp',
    date: '2024-04-20',
    author: blogAuthors[0], // Dr. Anna Kovács
    readTime: 10,
    tags: ['sustainability', 'innovation', 'manufacturing', 'interactive-content', 'bio-materials'],
    featured: true,
    customUrl: '/resources/blog/sustainable-innovations' // Points to existing page file
  },
  {
    id: 'custom-circular-economy-guide',
    slug: 'circular-economy-implementation-guide',
    category: 'blog',
    title: {
      en: 'Complete Guide to Circular Economy Implementation (Interactive Toolkit)',
      hu: 'Teljes útmutató a körforgásos gazdaság megvalósításához (Interaktív eszköztár)',
      de: 'Vollständiger Leitfaden zur Kreislaufwirtschaft-Implementierung (Interaktives Toolkit)'
    },
    description: {
      en: 'Step-by-step interactive guide with calculators, templates, and assessment tools for implementing circular economy principles in manufacturing operations.',
      hu: 'Lépésről lépésre interaktív útmutató kalkulátorokkal, sablonokkal és értékelési eszközökkel a körforgásos gazdasági elvek gyártási műveletekben való megvalósításához.',
      de: 'Schritt-für-Schritt interaktiver Leitfaden mit Rechnern, Vorlagen und Bewertungstools zur Implementierung von Kreislaufwirtschaftsprinzipien in Fertigungsoperationen.'
    },
    excerpt: {
      en: 'Transform your manufacturing operations with our comprehensive circular economy implementation guide featuring interactive tools and real-world case studies.',
      hu: 'Alakítsa át gyártási műveleteit átfogó körforgásos gazdaság megvalósítási útmutatónkkal, amely interaktív eszközöket és valós esettanulmányokat tartalmaz.',
      de: 'Transformieren Sie Ihre Fertigungsoperationen mit unserem umfassenden Kreislaufwirtschaft-Implementierungsleitfaden mit interaktiven Tools und realen Fallstudien.'
    },
    content: {
      en: `<p>The circular economy represents a fundamental shift from the traditional linear "take-make-waste" model to a regenerative approach that eliminates waste and keeps materials in continuous use.</p>
      
      <h2>Implementation Framework</h2>
      <p>Our comprehensive framework guides organizations through the complete transformation process, from initial assessment to full circular implementation.</p>
      
      <h2>Interactive Tools & Resources</h2>
      <ul>
        <li>Circular economy readiness assessment</li>
        <li>Material flow mapping tools</li>
        <li>ROI calculators for circular initiatives</li>
        <li>Waste audit and tracking systems</li>
        <li>Supply chain collaboration platforms</li>
        <li>Progress monitoring dashboards</li>
      </ul>
      
      <h2>Real-World Success Stories</h2>
      <p>Learn from companies that have successfully implemented circular economy principles, achieving an average of 60% waste reduction and 40% cost savings.</p>`,
      
      hu: `<p>A körforgásos gazdaság alapvető váltást jelent a hagyományos lineáris "vedd-készítsd-dobd el" modellről egy regeneratív megközelítésre, amely kiküszöböli a hulladékot és folyamatos használatban tartja az anyagokat.</p>
      
      <h2>Megvalósítási keretrendszer</h2>
      <p>Átfogó keretrendszerünk végigvezeti a szervezeteket a teljes átalakulási folyamaton, a kezdeti értékeléstől a teljes körforgásos megvalósításig.</p>
      
      <h2>Interaktív eszközök és források</h2>
      <ul>
        <li>Körforgásos gazdaság felkészültség értékelése</li>
        <li>Anyagáramlás feltérképező eszközök</li>
        <li>ROI kalkulátorok körforgásos kezdeményezésekhez</li>
        <li>Hulladék audit és követő rendszerek</li>
        <li>Ellátási lánc együttműködési platformok</li>
        <li>Előrehaladás monitorozó műszerfalak</li>
      </ul>
      
      <h2>Valós sikertörténetek</h2>
      <p>Tanuljon olyan cégektől, amelyek sikeresen megvalósították a körforgásos gazdaság elveit, átlagosan 60%-os hulladékcsökkentést és 40%-os költségmegtakarítást elérve.</p>`,
      
      de: `<p>Die Kreislaufwirtschaft stellt einen fundamentalen Wandel vom traditionellen linearen "Nehmen-Machen-Wegwerfen"-Modell zu einem regenerativen Ansatz dar, der Abfall eliminiert und Materialien in kontinuierlicher Nutzung hält.</p>
      
      <h2>Implementierungsrahmen</h2>
      <p>Unser umfassender Rahmen führt Organisationen durch den kompletten Transformationsprozess, von der anfänglichen Bewertung bis zur vollständigen zirkulären Implementierung.</p>
      
      <h2>Interaktive Tools und Ressourcen</h2>
      <ul>
        <li>Kreislaufwirtschafts-Bereitschaftsbewertung</li>
        <li>Materialfluss-Mapping-Tools</li>
        <li>ROI-Rechner für zirkuläre Initiativen</li>
        <li>Abfall-Audit- und Verfolgungssysteme</li>
        <li>Lieferketten-Kollaborationsplattformen</li>
        <li>Fortschrittsüberwachungs-Dashboards</li>
      </ul>
      
      <h2>Reale Erfolgsgeschichten</h2>
      <p>Lernen Sie von Unternehmen, die erfolgreich Kreislaufwirtschaftsprinzipien implementiert haben und durchschnittlich 60% Abfallreduzierung und 40% Kosteneinsparungen erreicht haben.</p>`
    },    image: '/resources/Blog/circular-economy.webp',
    thumbnailImage: '/resources/Blog/circular-economy.webp',
    date: '2024-03-15',
    author: blogAuthors[1], // Mark Weber
    readTime: 15,    tags: ['circular-economy', 'implementation', 'sustainability', 'toolkit', 'interactive'],
    featured: true,
    customUrl: '/resources/blog/circular-economy-implementation-guide'
  },
  {
    id: 'custom-material-comparison-tool',
    slug: 'material-comparison-interactive-tool',
    category: 'blog',
    title: {
      en: 'Material Comparison Tool: Choose the Right Plastic for Your Project',
      hu: 'Anyag-összehasonlító eszköz: Válassza ki a megfelelő műanyagot projektjéhez',
      de: 'Material-Vergleichstool: Wählen Sie den richtigen Kunststoff für Ihr Projekt'
    },
    description: {
      en: 'Interactive material comparison tool with detailed specifications, environmental impact calculations, and cost analysis for informed decision-making in plastic selection.',
      hu: 'Interaktív anyag-összehasonlító eszköz részletes specifikációkkal, környezeti hatás számításokkal és költségelemzéssel megalapozott döntéshozatalhoz műanyag kiválasztásban.',
      de: 'Interaktives Material-Vergleichstool mit detaillierten Spezifikationen, Umweltauswirkungsberechnungen und Kostenanalyse für fundierte Entscheidungen bei der Kunststoffauswahl.'
    },
    excerpt: {
      en: 'Make informed material decisions with our comprehensive comparison tool that evaluates performance, cost, and environmental impact across our entire product range.',
      hu: 'Hozzon megalapozott anyagdöntéseket átfogó összehasonlító eszközünkkel, amely teljesítményt, költséget és környezeti hatást értékel teljes termékpalettánkon.',
      de: 'Treffen Sie fundierte Materialentscheidungen mit unserem umfassenden Vergleichstool, das Leistung, Kosten und Umweltauswirkungen in unserem gesamten Produktsortiment bewertet.'
    },
    content: {
      en: `<p>Selecting the right plastic material for your project requires careful consideration of multiple factors including performance requirements, cost constraints, and environmental impact.</p>
      
      <h2>Comprehensive Material Database</h2>
      <p>Our interactive tool provides access to detailed specifications for over 200 plastic materials, including mechanical properties, thermal characteristics, and chemical resistance data.</p>
      
      <h2>Interactive Comparison Features</h2>
      <ul>
        <li>Side-by-side material property comparisons</li>
        <li>Performance requirement matching algorithms</li>
        <li>Environmental impact assessments</li>
        <li>Total cost of ownership calculators</li>
        <li>Application-specific recommendations</li>
        <li>Supplier and availability information</li>
      </ul>
      
      <h2>Smart Recommendation Engine</h2>
      <p>Our AI-powered recommendation engine analyzes your specific requirements and suggests optimal material solutions based on performance, cost, and sustainability criteria.</p>`,
      
      hu: `<p>A megfelelő műanyag anyag kiválasztása projektjéhez több tényező gondos mérlegelését igényli, beleértve a teljesítménykövetelményeket, költségkorlátokat és környezeti hatást.</p>
      
      <h2>Átfogó anyag adatbázis</h2>
      <p>Interaktív eszközünk részletes specifikációkhoz biztosít hozzáférést több mint 200 műanyag anyaghoz, beleértve mechanikai tulajdonságokat, termikus jellemzőket és vegyi ellenállási adatokat.</p>
      
      <h2>Interaktív összehasonlítási jellemzők</h2>
      <ul>
        <li>Egymás melletti anyagtulajdonság összehasonlítások</li>
        <li>Teljesítménykövetelmény egyező algoritmusok</li>
        <li>Környezeti hatásbecslések</li>
        <li>Teljes tulajdonlási költség kalkulátorok</li>
        <li>Alkalmazás-specifikus ajánlások</li>
        <li>Beszállító és elérhetőségi információk</li>
      </ul>
      
      <h2>Intelligens ajánlási motor</h2>
      <p>AI-vezérelt ajánlási motorunk elemzi specifikus követelményeit és optimális anyagmegoldásokat javasol teljesítmény, költség és fenntarthatósági kritériumok alapján.</p>`,
      
      de: `<p>Die Auswahl des richtigen Kunststoffmaterials für Ihr Projekt erfordert sorgfältige Berücksichtigung mehrerer Faktoren einschließlich Leistungsanforderungen, Kostenbeschränkungen und Umweltauswirkungen.</p>
      
      <h2>Umfassende Materialdatenbank</h2>
      <p>Unser interaktives Tool bietet Zugang zu detaillierten Spezifikationen für über 200 Kunststoffmaterialien, einschließlich mechanischer Eigenschaften, thermischer Charakteristika und chemischer Beständigkeitsdaten.</p>
      
      <h2>Interaktive Vergleichsfeatures</h2>
      <ul>
        <li>Nebeneinander-Materialeigenschaftsvergleiche</li>
        <li>Leistungsanforderungs-Matching-Algorithmen</li>
        <li>Umweltauswirkungsbewertungen</li>
        <li>Gesamtkostenrechner</li>
        <li>Anwendungsspezifische Empfehlungen</li>
        <li>Lieferanten- und Verfügbarkeitsinformationen</li>
      </ul>
      
      <h2>Intelligente Empfehlungsmaschine</h2>
      <p>Unsere KI-gesteuerte Empfehlungsmaschine analysiert Ihre spezifischen Anforderungen und schlägt optimale Materiallösungen basierend auf Leistungs-, Kosten- und Nachhaltigkeitskriterien vor.</p>`
    },    image: '/resources/Blog/material-comparison-tool.webp',
    thumbnailImage: '/resources/Blog/material-comparison-tool.webp',
    date: '2024-02-28',
    author: blogAuthors[2], // Sarah Johnson
    readTime: 8,    tags: ['materials', 'comparison-tool', 'interactive', 'specifications', 'cost-analysis'],
    featured: false,
    customUrl: '/resources/blog/material-comparison-interactive-tool'
  }
];

/**
 * Standard helper functions for custom blog posts
 */
export const customBlogHelpers = {
  // Basic operations
  getAll: (): Partial<BlogPost>[] => customBlogPosts,
  getFeatured: (): Partial<BlogPost>[] => customBlogPosts.filter(post => post.featured),
  getRecent: (limit: number = 5): Partial<BlogPost>[] => 
    [...customBlogPosts].sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()).slice(0, limit),
  
  // Search operations
  getById: (id: string): Partial<BlogPost> | undefined => 
    customBlogPosts.find(post => post.id === id),
  getBySlug: (slug: string): Partial<BlogPost> | undefined => 
    customBlogPosts.find(post => post.slug === slug),
  
  // Filter operations
  getByTag: (tag: string): Partial<BlogPost>[] => 
    customBlogPosts.filter(post => post.tags?.includes(tag)),
  getByAuthor: (authorId: string): Partial<BlogPost>[] => 
    customBlogPosts.filter(post => post.author?.id === authorId),
  
  // Utility operations
  getAllTags: (): string[] => {
    const allTags = new Set<string>();
    customBlogPosts.forEach(post => post.tags?.forEach(tag => allTags.add(tag)));
    return Array.from(allTags).sort();
  },
  
  // Related content
  getRelated: (postId: string, limit: number = 3): Partial<BlogPost>[] => {
    const currentPost = customBlogPosts.find(post => post.id === postId);
    if (!currentPost) return [];

    return customBlogPosts
      .filter(post => 
        post.id !== postId && 
        post.tags?.some(tag => currentPost.tags?.includes(tag))
      )
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
      .slice(0, limit);
  }
};

/**
 * Aggregation function to combine regular and custom blog posts
 * This is the main function to use when you want all blog posts
 */
export const getAllBlogPostsWithCustom = async (): Promise<BlogPost[]> => {
  try {
    // Import regular blog posts
    const { blogPosts } = await import('./blogPostsData');
    
    // Filter out regular posts that have custom versions (same ID)
    const regularPosts = blogPosts.filter(
      (regularPost: BlogPost) => 
        !customBlogPosts.some(customPost => customPost.id === regularPost.id)
    );
    
    // Combine regular and custom posts
    const combinedPosts = [...regularPosts, ...customBlogPosts as BlogPost[]];
    
    // Sort by date (newest first)
    return combinedPosts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return customBlogPosts as BlogPost[];
  }
};

/**
 * Get combined featured blog posts (regular + custom)
 */
export const getFeaturedBlogPostsWithCustom = async (): Promise<BlogPost[]> => {
  const allPosts = await getAllBlogPostsWithCustom();
  return allPosts.filter(post => post.featured);
};

/**
 * Search across all blog posts (regular + custom)
 */
export const searchAllBlogPosts = async (query: string): Promise<BlogPost[]> => {
  const allPosts = await getAllBlogPostsWithCustom();
  const searchTerm = query.toLowerCase();
  
  return allPosts.filter(post => {
    // Helper function to search multilingual text
    const searchMultilingualText = (text: { en: string; hu: string; de: string } | undefined) => {
      if (!text) return false;
      return text.en?.toLowerCase().includes(searchTerm) ||
             text.hu?.toLowerCase().includes(searchTerm) ||
             text.de?.toLowerCase().includes(searchTerm);
    };

    // Helper function to search excerpt (string or multilingual)
    const searchExcerpt = (excerpt: string | { en: string; hu: string; de: string } | undefined) => {
      if (!excerpt) return false;
      if (typeof excerpt === 'string') {
        return excerpt.toLowerCase().includes(searchTerm);
      }
      return searchMultilingualText(excerpt);
    };

    return searchMultilingualText(post.title) ||
           searchMultilingualText(post.description) ||
           searchExcerpt(post.excerpt) ||
           post.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
  });
};

// Individual exports for direct access (backwards compatibility)
export const getCustomBlogPosts = customBlogHelpers.getAll;
export const getFeaturedCustomBlogPosts = customBlogHelpers.getFeatured;
export const getRecentCustomBlogPosts = customBlogHelpers.getRecent;
export const getCustomBlogPostById = customBlogHelpers.getById;
export const getCustomBlogPostBySlug = customBlogHelpers.getBySlug;
export const getCustomBlogPostsByTag = customBlogHelpers.getByTag;
export const getCustomBlogPostsByAuthor = customBlogHelpers.getByAuthor;
export const getAllCustomBlogTags = customBlogHelpers.getAllTags;
export const getRelatedCustomBlogPosts = customBlogHelpers.getRelated;

// Legacy export for backwards compatibility
export const getAllBlogPosts = getAllBlogPostsWithCustom;