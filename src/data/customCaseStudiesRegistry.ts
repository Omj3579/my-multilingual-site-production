import { CaseStudy, caseStudyAuthors } from './caseStudiesData';

/**
 * Registry for custom-designed case studies.
 * These studies have their own dedicated page files with custom layouts.
 * Register them here to make them appear in the main case studies listing.
 */
export const customCaseStudies: Partial<CaseStudy>[] = [
  {
    id: 'custom-packaging-breakthrough',
    slug: 'packaging-breakthrough-interactive',
    category: 'case-study',
    title: {
      en: 'Revolutionary Packaging Breakthrough (Interactive Experience)',
      hu: 'Forradalmi csomagolási áttörés (Interaktív élmény)',
      de: 'Revolutionärer Verpackungsdurchbruch (Interaktives Erlebnis)'
    },
    description: {
      en: 'Experience our innovative packaging solution through an interactive, custom-designed case study with 3D models, impact calculators, and virtual prototyping.',
      hu: 'Tapasztalja meg innovatív csomagolási megoldásunkat interaktív, egyedi tervezésű esettanulmányon keresztül 3D modellekkel, hatáskalkulátorokkal és virtuális prototípus-készítéssel.',
      de: 'Erleben Sie unsere innovative Verpackungslösung durch eine interaktive, maßgeschneiderte Fallstudie mit 3D-Modellen, Impact-Rechnern und virtuellem Prototyping.'
    },    client: {
      name: 'EcoTech Solutions International',
      industry: 'Consumer Goods Manufacturing',
      size: 'Enterprise (3000+ employees)'
    },
    challenge: {
      en: 'Reduce packaging waste by 70% while maintaining product protection standards, improving brand sustainability image, and reducing overall logistics costs by 25%.',
      hu: 'A csomagolási hulladék 70%-os csökkentése a termékvédelmi standardok fenntartása, a márka fenntarthatósági imázsának javítása és a logisztikai költségek 25%-os csökkentése mellett.',
      de: 'Verpackungsabfall um 70% reduzieren und gleichzeitig Produktschutzstandards beibehalten, das Nachhaltigkeitsimage der Marke verbessern und die Logistikkosten um 25% senken.'
    },
    solution: {
      en: 'Custom bio-degradable multi-layer material with advanced barrier properties, integrated smart sensors for freshness monitoring, and optimized structural design using AI-driven optimization algorithms.',
      hu: 'Egyedi biológiailag lebomló többrétegű anyag fejlett barrier tulajdonságokkal, integrált intelligens érzékelőkkel a frissesség monitorozásához, és AI-vezérelt optimalizálási algoritmusokkal optimalizált szerkezeti tervezés.',
      de: 'Maßgeschneidertes biologisch abbaubares Mehrschichtmaterial mit fortschrittlichen Barriereeigenschaften, integrierten Smart-Sensoren für Frischeüberwachung und optimiertem Strukturdesign mit KI-gesteuerten Optimierungsalgorithmen.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Waste Reduction', hu: 'Hulladékcsökkentés', de: 'Abfallreduzierung' },
          value: '78%',
          improvement: 'exceeded target by 8%'
        },
        {
          label: { en: 'Annual Cost Savings', hu: 'Éves költségmegtakarítás', de: 'Jährliche Kosteneinsparungen' },
          value: '€2.3M',
          improvement: 'first year'
        },
        {
          label: { en: 'Production Efficiency', hu: 'Gyártási hatékonyság', de: 'Produktionseffizienz' },
          value: '35%',
          improvement: 'improvement'
        },
        {
          label: { en: 'Carbon Footprint Reduction', hu: 'Karbon-lábnyom csökkentés', de: 'CO2-Fußabdruck-Reduzierung' },
          value: '65%',
          improvement: 'packaging lifecycle'
        },
        {
          label: { en: 'Customer Satisfaction', hu: 'Vásárlói elégedettség', de: 'Kundenzufriedenheit' },
          value: '92%',
          improvement: 'approval rating'
        }
      ]
    },
    image: '/images/case-studies/packaging-breakthrough-interactive.jpg',
    thumbnailImage: '/images/case-studies/packaging-breakthrough-interactive-thumb.jpg',
    date: '2024-03-15',
    author: caseStudyAuthors[0], // Dr. Anna Kovács
    readTime: 12,
    tags: ['sustainability', 'packaging', 'innovation', 'interactive-content', 'bio-materials'],
    featured: true,
    industry: 'Consumer Goods',    projectDuration: '8 months',    technologies: ['Bio-materials', 'Smart Sensors', 'AI Optimization', 'Nano-coatings', 'Lifecycle Analysis'],
    customUrl: '/resources/case-studies/packaging-breakthrough-interactive'
  },
  {
    id: 'custom-smart-manufacturing',
    slug: 'smart-manufacturing-transformation',
    category: 'case-study',
    title: {
      en: 'Smart Manufacturing Transformation (Digital Twin Experience)',
      hu: 'Okos gyártás átalakítás (Digitális iker élmény)',
      de: 'Smart Manufacturing Transformation (Digital Twin Erlebnis)'
    },
    description: {
      en: 'Explore our cutting-edge smart manufacturing implementation through an interactive digital twin experience with real-time data visualization and virtual factory tours.',
      hu: 'Fedezze fel legmodernebb okos gyártási megvalósításunkat interaktív digitális iker élményen keresztül valós idejű adatvizualizációval és virtuális gyárlátogatásokkal.',
      de: 'Entdecken Sie unsere hochmoderne Smart Manufacturing-Implementierung durch ein interaktives Digital Twin-Erlebnis mit Echtzeit-Datenvisualisierung und virtuellen Fabriktouren.'
    },    client: {
      name: 'IndustrialTech Corporation',
      industry: 'Industrial Manufacturing',
      size: 'Large Enterprise (5000+ employees)'
    },
    challenge: {
      en: 'Transform traditional manufacturing processes to Industry 4.0 standards while maintaining 99.9% quality standards, reducing operational costs by 30%, and ensuring zero unplanned downtime during the transition.',
      hu: 'A hagyományos gyártási folyamatok átállítása Ipar 4.0 szabványokra 99,9%-os minőségi standardok fenntartása, működési költségek 30%-os csökkentése és az átmenet alatt nulla nem tervezett leállás biztosítása mellett.',
      de: 'Transformation traditioneller Fertigungsprozesse auf Industrie 4.0-Standards bei gleichzeitiger Beibehaltung von 99,9% Qualitätsstandards, 30%iger Reduzierung der Betriebskosten und null ungeplanten Ausfallzeiten während des Übergangs.'
    },
    solution: {
      en: 'Comprehensive IoT sensor network with 500+ monitoring points, AI-driven predictive maintenance system, real-time quality control using computer vision, and full digital twin implementation with augmented reality interfaces.',
      hu: 'Átfogó IoT szenzor hálózat 500+ monitorozási ponttal, AI-vezérelt prediktív karbantartási rendszer, valós idejű minőségirányítás számítógépes látással, és teljes digitális iker megvalósítás kiterjesztett valóság interfészekkel.',
      de: 'Umfassendes IoT-Sensornetzwerk mit 500+ Überwachungspunkten, KI-gesteuerte vorausschauende Wartung, Echtzeit-Qualitätskontrolle mit Computer Vision und vollständige Digital Twin-Implementierung mit Augmented Reality-Schnittstellen.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Production Efficiency', hu: 'Termelési hatékonyság', de: 'Produktionseffizienz' },
          value: '48%',
          improvement: 'increase'
        },
        {
          label: { en: 'Quality Defect Rate', hu: 'Minőségi hibaarány', de: 'Qualitätsfehlerrate' },
          value: '85%',
          improvement: 'reduction'
        },
        {
          label: { en: 'Energy Consumption', hu: 'Energiafogyasztás', de: 'Energieverbrauch' },
          value: '40%',
          improvement: 'reduction'
        },
        {
          label: { en: 'Predictive Maintenance Accuracy', hu: 'Prediktív karbantartás pontosság', de: 'Vorausschauende Wartungsgenauigkeit' },
          value: '96%',
          improvement: 'accuracy rate'
        },
        {
          label: { en: 'Unplanned Downtime', hu: 'Nem tervezett leállás', de: 'Ungeplante Ausfallzeit' },
          value: '92%',
          improvement: 'reduction'
        }
      ]
    },
    image: '/images/case-studies/smart-manufacturing-transformation.jpg',
    thumbnailImage: '/images/case-studies/smart-manufacturing-transformation-thumb.jpg',
    date: '2024-01-20',
    author: caseStudyAuthors[3], // Peter Smith
    readTime: 15,
    tags: ['automation', 'industry-4.0', 'iot', 'smart-manufacturing', 'digital-twin', 'ai'],
    featured: true,
    industry: 'Industrial Manufacturing',    projectDuration: '14 months',    technologies: ['IoT Integration', 'AI/ML', 'Computer Vision', 'Digital Twin', 'Predictive Analytics', 'AR/VR'],
    customUrl: '/resources/case-studies/smart-manufacturing-transformation'
  },
  {
    id: 'custom-circular-economy-implementation',
    slug: 'circular-economy-implementation-showcase',
    category: 'case-study',
    title: {
      en: 'Circular Economy Implementation (Interactive Lifecycle Visualization)',
      hu: 'Körforgásos gazdaság megvalósítás (Interaktív életciklus vizualizáció)',
      de: 'Kreislaufwirtschaft-Implementierung (Interaktive Lebenszyklus-Visualisierung)'
    },
    description: {
      en: 'Discover how we helped transform a linear business model into a fully circular economy with interactive material flow visualization and impact tracking.',
      hu: 'Fedezze fel, hogyan segítettünk egy lineáris üzleti modell teljes körforgásos gazdasággá alakításában interaktív anyagáramlás-vizualizációval és hatáskövetéssel.',
      de: 'Entdecken Sie, wie wir bei der Transformation eines linearen Geschäftsmodells in eine vollständige Kreislaufwirtschaft mit interaktiver Materialfluss-Visualisierung und Impact-Tracking geholfen haben.'
    },    client: {
      name: 'GreenCycle Industries',
      industry: 'Packaging & Materials',
      size: 'Medium Enterprise (1500 employees)'
    },
    challenge: {
      en: 'Transition from traditional linear "take-make-waste" model to fully circular operations, achieving 95% material recovery rate while maintaining profitability and meeting strict environmental regulations.',
      hu: 'Áttérés a hagyományos lineáris "vedd-készítsd-dobd el" modellről a teljesen körforgásos működésre, 95%-os anyag-visszanyerési arány elérése a jövedelmezőség fenntartása és a szigorú környezetvédelmi előírások betartása mellett.',
      de: 'Übergang vom traditionellen linearen "Take-Make-Waste"-Modell zu vollständig zirkulären Operationen, Erreichen einer 95%igen Materialrückgewinnungsrate bei gleichzeitiger Aufrechterhaltung der Rentabilität und Einhaltung strenger Umweltvorschriften.'
    },
    solution: {
      en: 'Comprehensive circular design methodology, advanced material tracking systems, closed-loop manufacturing processes, and strategic partnerships for material recovery and regeneration.',
      hu: 'Átfogó körforgásos tervezési módszertan, fejlett anyagkövetési rendszerek, zárt körű gyártási folyamatok és stratégiai partnerségek az anyag-visszanyeréshez és regenerációhoz.',
      de: 'Umfassende zirkuläre Designmethodik, fortschrittliche Materialverfolgungssysteme, geschlossene Fertigungsprozesse und strategische Partnerschaften für Materialrückgewinnung und -regeneration.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Material Recovery Rate', hu: 'Anyag-visszanyerési arány', de: 'Materialrückgewinnungsrate' },
          value: '97%',
          improvement: 'exceeded target'
        },
        {
          label: { en: 'Waste Reduction', hu: 'Hulladékcsökkentés', de: 'Abfallreduzierung' },
          value: '89%',
          improvement: 'compared to baseline'
        },
        {
          label: { en: 'Resource Efficiency', hu: 'Erőforrás-hatékonyság', de: 'Ressourceneffizienz' },
          value: '62%',
          improvement: 'improvement'
        },
        {
          label: { en: 'Carbon Neutrality', hu: 'Karbonsemlegesség', de: 'Kohlenstoffneutralität' },
          value: '100%',
          improvement: 'achieved'
        }
      ]
    },
    image: '/images/case-studies/circular-economy-implementation.jpg',
    thumbnailImage: '/images/case-studies/circular-economy-implementation-thumb.jpg',
    date: '2024-02-10',
    author: caseStudyAuthors[1], // Mark Weber
    readTime: 10,
    tags: ['circular-economy', 'sustainability', 'material-recovery', 'lifecycle-visualization', 'environmental'],
    featured: false,    industry: 'Packaging & Materials',    projectDuration: '18 months',    technologies: ['Material Tracking', 'Lifecycle Analysis', 'Circular Design', 'Recovery Systems', 'Impact Assessment'],
    customUrl: '/resources/case-studies/circular-economy-implementation-showcase'
  },  {
    id: 'custom-decade-of-innovation-collaboration-main',
    slug: 'garden-tools-decade-innovation-partnership',
    category: 'case-study',
    title: {
      en: 'Garden Tools Excellence: A Decade of Innovation Partnership (2014-2024)',
      hu: 'Kerti Szerszám Kiválóság: Egy Évtized Innovációs Partnerség (2014-2024)',
      de: 'Gartengeräte-Exzellenz: Ein Jahrzehnt der Innovationspartnerschaft (2014-2024)'
    },
    description: {
      en: 'A comprehensive decade-long partnership story showcasing breakthrough innovations in garden and power tool manufacturing, from lightweight housings to sustainable materials and cutting-edge quality systems.',
      hu: 'Egy átfogó évtizedes partnerségi történet, amely az áttörő innovációkat mutatja be a kerti és elektromos szerszámgyártásban, a könnyű burkolatoktól a fenntartható anyagokig és a legmodernebb minőségi rendszerekig.',
      de: 'Eine umfassende jahrzehntelange Partnerschaftsgeschichte, die bahnbrechende Innovationen in der Garten- und Elektrowerkzeugfertigung zeigt, von leichten Gehäusen bis hin zu nachhaltigen Materialien und modernsten Qualitätssystemen.'
    },
    client: {
      name: 'Leading EU Garden & Power Tools Manufacturer',
      industry: 'Garden & Power Tools Manufacturing',
      size: 'Large Enterprise (5000+ employees)'
    },
    challenge: {
      en: 'Develop robust, lightweight plastic housings and components for high-efficiency garden tools while maintaining strict quality standards and sustainability goals.',
      hu: 'Robusztus, könnyű műanyag burkolatok és alkatrészek fejlesztése nagy hatékonyságú kerti szerszámokhoz, miközben fenntartják a szigorú minőségi szabványokat és fenntarthatósági célokat.',
      de: 'Entwicklung robuster, leichter Kunststoffgehäuse und -komponenten für hocheffiziente Gartengeräte unter Beibehaltung strenger Qualitätsstandards und Nachhaltigkeitsziele.'
    },
    solution: {
      en: 'Comprehensive manufacturing solutions including lawnmower housings, tool storage systems, paint spray system components, and sanding tool housings with advanced quality control and sustainability focus.',
      hu: 'Átfogó gyártási megoldások beleértve fűnyíró burkolatokat, szerszámtároló rendszereket, festékszóró rendszer alkatrészeket és csiszolószerszám burkolatokat fejlett minőségirányítással és fenntarthatósági fókusszal.',
      de: 'Umfassende Fertigungslösungen einschließlich Rasenmähergehäusen, Werkzeugaufbewahrungssystemen, Farbsprühsystem-Komponenten und Schleifwerkzeuggehäusen mit fortschrittlicher Qualitätskontrolle und Nachhaltigkeitsfokus.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Partnership Duration', hu: 'Partnerség időtartama', de: 'Partnerschaftsdauer' },
          value: '10+',
          improvement: 'years of collaboration'
        },
        {
          label: { en: 'Product Categories', hu: 'Termékkategóriák', de: 'Produktkategorien' },
          value: '4',
          improvement: 'major categories served'
        },
        {
          label: { en: 'Quality Standards', hu: 'Minőségi szabványok', de: 'Qualitätsstandards' },
          value: '99.9%',
          improvement: 'consistency achieved'
        },
        {
          label: { en: 'Sustainability Focus', hu: 'Fenntarthatósági fókusz', de: 'Nachhaltigkeitsfokus' },
          value: '100%',
          improvement: 'recycled materials where possible'
        }
      ]
    },
    image: '/resources/caseStudies/Picture1.png',
    thumbnailImage: '/resources/caseStudies/Picture1.png',
    date: '2024-06-01',
    author: caseStudyAuthors[0], // Dr. Anna Kovács
    readTime: 12,
    tags: ['partnership', 'garden-tools', 'power-tools', 'manufacturing', 'quality-control', 'sustainability'],
    featured: true,    industry: 'Garden & Power Tools Manufacturing',
    projectDuration: '10+ years',
    technologies: ['Injection Molding', 'Quality Control Systems', 'Sustainable Materials', 'Ergonomic Design', 'Advanced Manufacturing'],    customUrl: '/resources/case-studies/a-decade-of-innovation-collaboration'
  },  {
    id: 'custom-interactive-manufacturing-experience',
    slug: 'interactive-manufacturing-experience-showcase',
    category: 'case-study',
    title: {
      en: 'Interactive Manufacturing Experience: Immersive Partnership Journey Showcase',
      hu: 'Interaktív Gyártási Élmény: Magával Ragadó Partnerségi Utazás Bemutató',
      de: 'Interaktive Fertigungserfahrung: Immersive Partnerschaftsreise-Präsentation'
    },
    description: {
      en: 'An immersive, interactive web experience showcasing manufacturing partnerships through dynamic storytelling, featuring product showcases, partnership evolution timelines, and innovation milestones with custom cursor effects and engaging animations.',
      hu: 'Egy magával ragadó, interaktív webes élmény, amely a gyártási partnerségeket mutatja be dinamikus történetmesélésen keresztül, termékbemutatókkal, partnerségi fejlődési idővonalakkal és innovációs mérföldkövekkel, egyedi kurzoreffektusokkal és vonzó animációkkal.',
      de: 'Eine immersive, interaktive Web-Erfahrung, die Fertigungspartnerschaften durch dynamisches Storytelling präsentiert, mit Produkt-Showcases, Partnerschaftsentwicklungs-Timelines und Innovations-Meilensteinen mit benutzerdefinierten Cursor-Effekten und ansprechenden Animationen.'
    },
    client: {
      name: 'European Manufacturing Alliance',
      industry: 'Advanced Manufacturing & Product Development',
      size: 'Multi-Enterprise Alliance (8,000+ employees)'
    },    challenge: {
      en: 'Creating an engaging, immersive digital experience to showcase the evolution of manufacturing partnerships, product innovations, and collaborative achievements through cutting-edge interactive web design and storytelling techniques.',
      hu: 'Vonzó, magával ragadó digitális élmény létrehozása a gyártási partnerségek, termékinnovációk és együttműködési eredmények fejlődésének bemutatására a legmodernebb interaktív webdizájn és történetmesélési technikák segítségével.',
      de: 'Erstellung einer ansprechenden, immersiven digitalen Erfahrung zur Präsentation der Entwicklung von Fertigungspartnerschaften, Produktinnovationen und kollaborativen Erfolgen durch modernste interaktive Webdesign- und Storytelling-Techniken.'
    },    solution: {
      en: 'Interactive web experience featuring immersive hero sections, custom cursor animations, featured product galleries with hover effects, partnership journey mapping with timeline visualization, innovation showcases with dynamic content, impact metrics visualization, and future perspectives planning.',
      hu: 'Interaktív webes élmény magával ragadó hero szekciókkal, egyedi kurzoranimációkkal, kiemelt termékgalériákkal lebegő effektusokkal, partnerségi utazás térképezéssel idővonal-vizualizációval, innovációs bemutatókkal dinamikus tartalommal, hatásmetrikai vizualizációval és jövőbeli perspektívák tervezésével.',
      de: 'Interaktive Web-Erfahrung mit immersiven Hero-Bereichen, benutzerdefinierten Cursor-Animationen, vorgestellten Produktgalerien mit Hover-Effekten, Partnerschaftsreise-Mapping mit Timeline-Visualisierung, Innovations-Showcases mit dynamischem Inhalt, Impact-Metriken-Visualisierung und Zukunftsperspektiven-Planung.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Product Innovations', hu: 'Termékinnovációk', de: 'Produktinnovationen' },
          value: '45+',
          improvement: 'breakthrough products'
        },
        {
          label: { en: 'Partnership Growth', hu: 'Partnerségi növekedés', de: 'Partnerschaftswachstum' },
          value: '280%',
          improvement: 'expansion rate'
        },
        {
          label: { en: 'User Engagement', hu: 'Felhasználói elkötelezettség', de: 'Benutzerengagement' },
          value: '94%',
          improvement: 'interaction completion'
        }
      ]
    },
    image: '/resources/caseStudies/Picture1.png',
    thumbnailImage: '/resources/caseStudies/Picture1.png',
    date: '2024-07-01',
    author: caseStudyAuthors[0],
    readTime: 15,    tags: ['interactive-experience', 'product-showcase', 'immersive-design', 'partnership-visualization', 'manufacturing', 'web-innovation'],
    featured: true,    industry: 'Advanced Manufacturing & Product Development',
    projectDuration: '12 months',
    technologies: ['Immersive Web Design', 'Interactive Storytelling', 'Product Visualization', 'Custom UX/UI', 'Advanced Animations'],
    customUrl: '/resources/case-studies/interactive-manufacturing-experience'
  },  {
    id: 'custom-data-driven-manufacturing-excellence',
    slug: 'data-driven-manufacturing-excellence-analysis',
    category: 'case-study',
    title: {
      en: 'Data-Driven Manufacturing Excellence: Comprehensive Technical Analysis & Results',
      hu: 'Adatvezérelt Gyártási Kiválóság: Átfogó Műszaki Elemzés és Eredmények',
      de: 'Datengetriebene Fertigungsexzellenz: Umfassende technische Analyse und Ergebnisse'
    },
    description: {
      en: 'A comprehensive technical analysis and results showcase demonstrating manufacturing excellence through detailed performance metrics, expert testimonials, technical documentation, and measurable outcomes with enhanced user experience and progress tracking.',
      hu: 'Átfogó műszaki elemzés és eredménybemutató, amely a gyártási kiválóságot mutatja be részletes teljesítménymutatókon, szakértői tanúvallomásokon, műszaki dokumentáción és mérhető eredményeken keresztül, továbbfejlesztett felhasználói élménnyel és előrehaladás-követéssel.',
      de: 'Eine umfassende technische Analyse und Ergebnispräsentation, die Fertigungsexzellenz durch detaillierte Leistungsmetriken, Experten-Testimonials, technische Dokumentation und messbare Ergebnisse mit verbesserter Benutzererfahrung und Fortschrittsverfolgung demonstriert.'
    },
    client: {
      name: 'Industrial Excellence Consortium',
      industry: 'Precision Manufacturing & Quality Systems',
      size: 'Enterprise Network (12,000+ employees)'
    },    challenge: {
      en: 'Developing a sophisticated digital platform that demonstrates complex manufacturing processes, quality metrics, technical achievements, and measurable business outcomes through comprehensive data-driven analysis and authentic stakeholder testimonials.',
      hu: 'Kifinomult digitális platform fejlesztése, amely komplex gyártási folyamatokat, minőségi mutatókat, műszaki eredményeket és mérhető üzleti eredményeket mutat be átfogó adatvezérelt elemzésen és hiteles érdekelt felek tanúvallomásain keresztül.',
      de: 'Entwicklung einer anspruchsvollen digitalen Plattform, die komplexe Fertigungsprozesse, Qualitätsmetriken, technische Erfolge und messbare Geschäftsergebnisse durch umfassende datengetriebene Analyse und authentische Stakeholder-Testimonials demonstriert.'
    },
    solution: {
      en: 'Comprehensive analysis platform with detailed hero sections, executive overview, key metrics dashboards, technical documentation, results visualization, testimonial integration, and progress tracking.',
      hu: 'Átfogó elemzési platform részletes hero szekciókkal, vezetői áttekintéssel, kulcsmetrikák műszerfalával, műszaki dokumentációval, eredményvizualizációval, tanúvallomás-integrációval és előrehaladás-követéssel.',
      de: 'Umfassende Analyseplattform mit detaillierten Hero-Bereichen, Executive Overview, Schlüsselmetriken-Dashboards, technischer Dokumentation, Ergebnisvisualisierung, Testimonial-Integration und Fortschrittsverfolgung.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Quality Improvement', hu: 'Minőségjavulás', de: 'Qualitätsverbesserung' },
          value: '99.7%',
          improvement: 'accuracy achieved'
        },
        {
          label: { en: 'Process Efficiency', hu: 'Folyamathatékonyság', de: 'Prozesseffizienz' },
          value: '67%',
          improvement: 'optimization gain'
        },
        {
          label: { en: 'Technical Documentation', hu: 'Műszaki dokumentáció', de: 'Technische Dokumentation' },
          value: '500+',
          improvement: 'pages documented'
        }
      ]
    },
    image: '/resources/caseStudies/Picture2.png',
    thumbnailImage: '/resources/caseStudies/Picture2.png',
    date: '2024-08-01',
    author: caseStudyAuthors[1],
    readTime: 18,
    tags: ['technical-analysis', 'data-driven', 'quality-metrics', 'manufacturing-excellence', 'documentation'],
    featured: true,    industry: 'Precision Manufacturing & Quality Systems',
    projectDuration: '14 months',
    technologies: ['Data Analytics', 'Quality Management Systems', 'Technical Documentation', 'Metrics Visualization'],
    customUrl: '/resources/case-studies/data-driven-manufacturing-excellence'
  },  {
    id: 'custom-sustainable-future-leadership',
    slug: 'sustainable-future-strategy',
    category: 'case-study',
    title: {
      en: 'Sustainable Future Strategy: Global Innovation & Environmental Leadership',
      hu: 'Fenntartható Jövőstratégia: Globális Innováció és Környezeti Vezetés',
      de: 'Nachhaltige Zukunftsstrategie: Globale Innovation und Umweltführerschaft'
    },
    description: {
      en: 'A comprehensive strategic vision showcasing global partnerships, sustainability impact, innovation laboratories, and future roadmaps with advanced navigation and environmental leadership focus.',
      hu: 'Átfogó stratégiai jövőkép, amely globális partnerségeket, fenntarthatósági hatásokat, innovációs laboratóriumokat és jövőbeli ütemterveket mutat be fejlett navigációval és környezeti vezetési fókusszal.',
      de: 'Eine umfassende strategische Vision, die globale Partnerschaften, Nachhaltigkeitsauswirkungen, Innovationslabore und Zukunfts-Roadmaps mit fortschrittlicher Navigation und Umweltführungsfokus präsentiert.'
    },
    client: {
      name: 'Global Sustainability Alliance',
      industry: 'Sustainable Technology & Environmental Innovation',
      size: 'Global Network (25,000+ employees)'
    },
    challenge: {
      en: 'Creating a comprehensive digital ecosystem that showcases global partnerships, sustainability impact, innovation laboratories, and future technology roadmaps while demonstrating environmental leadership.',
      hu: 'Átfogó digitális ökoszisztéma létrehozása, amely globális partnerségeket, fenntarthatósági hatásokat, innovációs laboratóriumokat és jövőbeli technológiai ütemterveket mutat be, miközben demonstrálja a környezeti vezetést.',
      de: 'Erstellung eines umfassenden digitalen Ökosystems, das globale Partnerschaften, Nachhaltigkeitsauswirkungen, Innovationslabore und zukünftige Technologie-Roadmaps präsentiert und gleichzeitig Umweltführerschaft demonstriert.'
    },
    solution: {
      en: 'Strategic platform with floating navigation, reading progress tracking, innovation timeline, product showcase, sustainability impact metrics, innovation labs, global partnership networks, and future roadmaps.',
      hu: 'Stratégiai platform lebegő navigációval, olvasási előrehaladás követéssel, innovációs idővonallal, termékbemutatóval, fenntarthatósági hatásmutatókkal, innovációs laborokkal, globális partnerségi hálózatokkal és jövőbeli ütemtervekkel.',
      de: 'Strategische Plattform mit schwebender Navigation, Lesefortschritts-Tracking, Innovations-Timeline, Produktpräsentation, Nachhaltigkeits-Impact-Metriken, Innovationslaboren, globalen Partnerschaftsnetzwerken und Zukunfts-Roadmaps.'
    },
    results: {
      metrics: [
        {
          label: { en: 'Global Reach', hu: 'Globális elérés', de: 'Globale Reichweite' },
          value: '50+',
          improvement: 'countries engaged'
        },
        {
          label: { en: 'Sustainability Impact', hu: 'Fenntarthatósági hatás', de: 'Nachhaltigkeitsauswirkung' },
          value: '80%',
          improvement: 'carbon reduction'
        },
        {
          label: { en: 'Innovation Labs', hu: 'Innovációs laborok', de: 'Innovationslabore' },
          value: '12',
          improvement: 'active facilities'
        },
        {
          label: { en: 'Future Projects', hu: 'Jövőbeli projektek', de: 'Zukunftsprojekte' },
          value: '100+',
          improvement: 'in development'
        }
      ]
    },
    image: '/resources/caseStudies/Picture3.png',
    thumbnailImage: '/resources/caseStudies/Picture3.png',
    date: '2024-09-01',
    author: caseStudyAuthors[2],
    readTime: 25,
    tags: ['sustainability-strategy', 'global-partnerships', 'innovation-labs', 'future-roadmap', 'environmental-leadership'],
    featured: true,    industry: 'Sustainable Technology & Environmental Innovation',
    projectDuration: '18 months',
    technologies: ['Global Platform Architecture', 'Sustainability Tracking', 'Innovation Management', 'Strategic Planning'],
    customUrl: '/resources/case-studies/sustainable-future-strategy'
  }
];

/**
 * Standard helper functions for custom case studies
 */
export const customCaseStudyHelpers = {
  // Basic operations
  getAll: (): Partial<CaseStudy>[] => customCaseStudies,
  getFeatured: (): Partial<CaseStudy>[] => customCaseStudies.filter(study => study.featured),
  getRecent: (limit: number = 5): Partial<CaseStudy>[] => 
    [...customCaseStudies].sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()).slice(0, limit),
  
  // Search operations
  getById: (id: string): Partial<CaseStudy> | undefined => 
    customCaseStudies.find(study => study.id === id),
  getBySlug: (slug: string): Partial<CaseStudy> | undefined => 
    customCaseStudies.find(study => study.slug === slug),
  
  // Filter operations
  getByIndustry: (industry: string): Partial<CaseStudy>[] => 
    customCaseStudies.filter(study => study.industry === industry),
  getByTag: (tag: string): Partial<CaseStudy>[] => 
    customCaseStudies.filter(study => study.tags?.includes(tag)),
  getByAuthor: (authorId: string): Partial<CaseStudy>[] => 
    customCaseStudies.filter(study => study.author?.id === authorId),
  
  // Utility operations
  getAllTags: (): string[] => {
    const allTags = new Set<string>();
    customCaseStudies.forEach(study => study.tags?.forEach(tag => allTags.add(tag)));
    return Array.from(allTags).sort();
  },
  getAllIndustries: (): string[] => {
    const industries = new Set<string>();
    customCaseStudies.forEach(study => study.industry && industries.add(study.industry));
    return Array.from(industries).sort();
  },
  
  // Related content
  getRelated: (studyId: string, limit: number = 3): Partial<CaseStudy>[] => {
    const currentStudy = customCaseStudies.find(study => study.id === studyId);
    if (!currentStudy) return [];

    return customCaseStudies
      .filter(study => 
        study.id !== studyId && 
        (study.industry === currentStudy.industry || 
         study.tags?.some(tag => currentStudy.tags?.includes(tag)))
      )
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
      .slice(0, limit);
  }
};

/**
 * Aggregation function to combine regular and custom case studies
 * This is the main function to use when you want all case studies
 */
export const getAllCaseStudiesWithCustom = async (): Promise<CaseStudy[]> => {
  try {
    // Import regular case studies
    const { caseStudies } = await import('./caseStudiesData');
    
    // Filter out regular case studies that have custom versions (same ID)
    const regularStudies = caseStudies.filter(
      (regularStudy: CaseStudy) => 
        !customCaseStudies.some(customStudy => customStudy.id === regularStudy.id)
    );
    
    // Combine regular and custom studies
    const combinedStudies = [...regularStudies, ...customCaseStudies as CaseStudy[]];
    
    // Sort by date (newest first)
    return combinedStudies.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading case studies:', error);
    return customCaseStudies as CaseStudy[];
  }
};

/**
 * Get combined featured case studies (regular + custom)
 */
export const getFeaturedCaseStudiesWithCustom = async (): Promise<CaseStudy[]> => {
  const allStudies = await getAllCaseStudiesWithCustom();
  return allStudies.filter(study => study.featured);
};

/**
 * Search across all case studies (regular + custom)
 */
export const searchAllCaseStudies = async (query: string): Promise<CaseStudy[]> => {
  const allStudies = await getAllCaseStudiesWithCustom();
  const searchTerm = query.toLowerCase();
  
  return allStudies.filter(study =>
    study.title?.en?.toLowerCase().includes(searchTerm) ||
    study.title?.hu?.toLowerCase().includes(searchTerm) ||
    study.title?.de?.toLowerCase().includes(searchTerm) ||
    study.description?.en?.toLowerCase().includes(searchTerm) ||
    study.description?.hu?.toLowerCase().includes(searchTerm) ||
    study.description?.de?.toLowerCase().includes(searchTerm) ||
    study.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    study.industry?.toLowerCase().includes(searchTerm)
  );
};

// Individual exports for direct access (backwards compatibility)
export const getCustomCaseStudies = customCaseStudyHelpers.getAll;
export const getFeaturedCustomCaseStudies = customCaseStudyHelpers.getFeatured;
export const getRecentCustomCaseStudies = customCaseStudyHelpers.getRecent;
export const getCustomCaseStudyById = customCaseStudyHelpers.getById;
export const getCustomCaseStudyBySlug = customCaseStudyHelpers.getBySlug;
export const getCustomCaseStudiesByIndustry = customCaseStudyHelpers.getByIndustry;
export const getCustomCaseStudiesByTag = customCaseStudyHelpers.getByTag;
export const getCustomCaseStudiesByAuthor = customCaseStudyHelpers.getByAuthor;
export const getAllCustomCaseStudyTags = customCaseStudyHelpers.getAllTags;
export const getAllCustomCaseStudyIndustries = customCaseStudyHelpers.getAllIndustries;
export const getRelatedCustomCaseStudies = customCaseStudyHelpers.getRelated;

// Legacy export for backwardss compatibility
export const getAllCaseStudies = getAllCaseStudiesWithCustom;