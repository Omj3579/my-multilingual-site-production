 import { Language } from '@/contexts/LanguageContext';

export const defaultTranslations: Record<string, Record<Language, string>> = {
  // Navigation items
  'nav.home': {
    en: 'Home',
    hu: 'Főoldal',
    de: 'Startseite',
  },
  'nav.services': {
    en: 'Our Services',
    hu: 'Szolgáltatásaink',
    de: 'Unsere Dienstleistungen',
  },
  'nav.products': {
    en: 'Products Portfolio',
    hu: 'Termékportfólió',
    de: 'Produktportfolio',
  },
  'nav.sustainability': {
    en: 'Green Innovation',
    hu: 'Zöld Innováció',
    de: 'Grüne Innovation',
  },
  'nav.company': {
    en: 'About Us',
    hu: 'Rólunk',
    de: 'Über uns',
  },
  'nav.resources': {
    en: 'Knowledge Hub',
    hu: 'Tudástár',
    de: 'Wissenszentrum',
  },
  'nav.about': {
    en: 'About Us',
    hu: 'Rólunk',
    de: 'Über uns',
  },
  'nav.contact': {
    en: 'Contact',
    hu: 'Kapcsolat',
    de: 'Kontakt',
  },
  'nav.blog': {
    en: 'Blog',
    hu: 'Blog',
    de: 'Blog',
  },
  'nav.caseStudies': {
    en: 'Case Studies',
    hu: 'Esettanulmányok',
    de: 'Fallstudien',
  },
  'nav.news': {
    en: 'News',
    hu: 'Hírek',
    de: 'Nachrichten',
  },
  'nav.updates': {
    en: 'Updates',
    hu: 'Frissítések',
    de: 'Aktualisierungen',
  },
  'nav.search': {
    en: 'Search',
    hu: 'Keresés',
    de: 'Suche',
  },
  
  // Services section
  'services.plastic_injection': {
    en: 'Precision Injection Manufacturing',
    hu: 'Precíziós fröccsöntési gyártás',
    de: 'Präzisions-Spritzguss-Fertigung',
  },
  'services.in_mould_labelling': {
    en: 'Integrated Mould Labelling',
    hu: 'Integrált szerszám címkézés',
    de: 'Integrierte Form-Etikettierung',
  },
  'services.in_mould_decoration': {
    en: 'Integrated Mould Decoration',
    hu: 'Integrált szerszám dekoráció',
    de: 'Integrierte Form-Dekoration',
  },
  'services.injection_blow': {
    en: 'Injection Blow Manufacturing',
    hu: 'Fröccsöntéses fúvási gyártás',
    de: 'Spritzblasformungs-Fertigung',
  },
  'services.surface_finishing': {
    en: 'Advanced Surface Solutions',
    hu: 'Fejlett felületkezelési megoldások',
    de: 'Erweiterte Oberflächenlösungen',
  },
  'services.contract_manufacturing': {
    en: 'Custom Manufacturing Solutions',
    hu: 'Egyedi gyártási megoldások',
    de: 'Maßgeschneiderte Fertigungslösungen',
  },
  'services.assembly': {
    en: 'Component Assembly Services',
    hu: 'Komponens összeszerelési szolgáltatások',
    de: 'Komponenten-Montage-Dienstleistungen',
  },
  'services.manufacturing_support': {
    en: 'Production Excellence',
    hu: 'Gyártási kiválóság',
    de: 'Produktionsexzellenz',
  },
  'services.tooling_management': {
    en: 'Tooling Management',
    hu: 'Szerszámkezelés',
    de: 'Werkzeugmanagement',
  },
  'services.material_selection': {
    en: 'Material Optimization',
    hu: 'Anyag optimalizálás',
    de: 'Material-Optimierung',
  },
  'services.precision_quality': {
    en: 'Precision Quality',
    hu: 'Precíziós minőség',
    de: 'Präzisionsqualität',
  },
  
  // Sustainability section
  'sustainability.green_strategy': {
    en: 'Our Green Strategy',
    hu: 'Zöld stratégiánk',
    de: 'Unsere grüne Strategie',
  },
  'sustainability.clean_sweep': {
    en: 'Environmental Protection Program',
    hu: 'Környezetvédelmi program',
    de: 'Umweltschutzprogramm',
  },
  'sustainability.recycling': {
    en: 'Recycling Initiatives',
    hu: 'Újrahasznosítási kezdeményezések',
    de: 'Recycling-Initiativen',
  },
  'sustainability.community': {
    en: 'Community Impact',
    hu: 'Közösségi hatás',
    de: 'Gemeinschaftsauswirkungen',
  },
  
  // Company section
  'company.about': {
    en: 'About',
    hu: 'Rólunk',
    de: 'Über uns',
  },
  'company.history': {
    en: 'Our History',
    hu: 'Történetünk',
    de: 'Unsere Geschichte',
  },
  'company.management': {
    en: 'Flair-Plastic Management',
    hu: 'Flair-Plastic vezetőség',
    de: 'Flair-Plastic Management',
  },
  'company.management.leadership': {
    en: 'Leadership Team',
    hu: 'Vezetői csapat',
    de: 'Führungsteam',
  },
  'company.management.commitment': {
    en: 'Our Commitment',
    hu: 'Elkötelezettségünk',
    de: 'Unser Engagement',
  },
  'company.management.join': {
    en: 'Join Our Team',
    hu: 'Csatlakozzon csapatunkhoz',
    de: 'Unserem Team beitreten',
  },

    // Common translations
  'common.tags': {
    en: 'Tags',
    hu: 'Címkék',
    de: 'Tags'
  },
  'common.readMore': {
    en: 'Read more',
    hu: 'Tovább olvasás',
    de: 'Weiterlesen'
  },
  'common.tryAgain': {
    en: 'Try Again',
    hu: 'Próbálja újra',
    de: 'Erneut versuchen'
  },

  // Content-related translations
  'content.author': {
    en: 'Author',
    hu: 'Szerző',
    de: 'Autor'
  },
  'content.authorRole': {
    en: 'Role',
    hu: 'Szerepkör',
    de: 'Rolle'
  },
  'content.publishedBy': {
    en: 'Published by',
    hu: 'Közzétette:',
    de: 'Veröffentlicht von'
  },
  'content.readTime': {
    en: '${minutes} min read',
    hu: '${minutes} perces olvasás',
    de: '${minutes} Min. Lesezeit'
  },
  'content.publishedOn': {
    en: 'Published on',
    hu: 'Megjelent:',
    de: 'Veröffentlicht am'
  },
  'content.lastUpdated': {
    en: 'Last updated',
    hu: 'Utoljára frissítve',
    de: 'Zuletzt aktualisiert'
  },
  'content.tags': {
    en: 'Tags',
    hu: 'Címkék',
    de: 'Tags'
  },
  'content.category': {
    en: 'Category',
    hu: 'Kategória',
    de: 'Kategorie'
  },
  'content.backTo': {
    en: 'Back to',
    hu: 'Vissza a',
    de: 'Zurück zu'
  },
  'content.viewAll': {
    en: 'View all',
    hu: 'Összes megtekintése',
    de: 'Alle anzeigen'
  },
  'content.loadMore': {
    en: 'Load more',
    hu: 'Több betöltése',
    de: 'Mehr laden'
  },
  'content.featured': {
    en: 'Featured',
    hu: 'Kiemelt',
    de: 'Empfohlen'
  },
  'content.recent': {
    en: 'Recent',
    hu: 'Legújabb',
    de: 'Neueste'
  },
  'content.related': {
    en: 'Related',
    hu: 'Kapcsolódó',
    de: 'Verwandt'
  },
  'content.status.draft': {
    en: 'Draft',
    hu: 'Vázlat',
    de: 'Entwurf'
  },
  'content.status.published': {
    en: 'Published',
    hu: 'Megjelent',
    de: 'Veröffentlicht'
  },
  'content.status.updated': {
    en: 'Updated',
    hu: 'Frissítve',
    de: 'Aktualisiert'
  },
  'content.error.notFound': {
    en: 'Content not found',
    hu: 'A tartalom nem található',
    de: 'Inhalt nicht gefunden'
  },
  'content.error.loadingFailed': {
    en: 'Failed to load content',
    hu: 'A tartalom betöltése sikertelen',
    de: 'Inhalt konnte nicht geladen werden'
  },
  
  // Blog-specific translations
  'blog.meta.title': {
    en: 'Blog',
    hu: 'Blog',
    de: 'Blog'
  },
  'blog.meta.description': {
    en: 'Stay updated with the latest insights, innovations, and industry trends in sustainable plastic manufacturing.',
    hu: 'Maradjon naprakész a legfrissebb betekintésekkel, innovációkkal és iparági trendekkel a fenntartható műanyaggyártásban.',
    de: 'Bleiben Sie auf dem Laufenden mit den neuesten Einblicken, Innovationen und Branchentrends in der nachhaltigen Kunststoffherstellung.'
  },
  'blog.meta.keywords': {
    en: 'plastic manufacturing, sustainability, innovation, industry insights, recycling, circular economy',
    hu: 'műanyaggyártás, fenntarthatóság, innováció, iparági betekintések, újrahasznosítás, körforgásos gazdaság',
    de: 'Kunststoffherstellung, Nachhaltigkeit, Innovation, Brancheneinblicke, Recycling, Kreislaufwirtschaft'
  },
  'blog.hero.title': {
    en: 'Industry Insights & Innovation',
    hu: 'Iparági betekintések és innováció',
    de: 'Brancheneinblicke & Innovation'
  },
  'blog.hero.subtitle': {
    en: 'Discover the latest trends, technologies, and sustainable practices shaping the future of plastic manufacturing.',
    hu: 'Fedezze fel a legújabb trendeket, technológiákat és fenntartható gyakorlatokat, amelyek alakítják a műanyaggyártás jövőjét.',
    de: 'Entdecken Sie die neuesten Trends, Technologien und nachhaltigen Praktiken, die die Zukunft der Kunststoffherstellung prägen.'
  },
  'blog.search.placeholder': {
    en: 'Search articles...',
    hu: 'Cikkek keresése...',
    de: 'Artikel suchen...'
  },
  'blog.popular': {
    en: 'Popular topics',
    hu: 'Népszerű témák',
    de: 'Beliebte Themen'
  },
  'blog.featured': {
    en: 'Featured',
    hu: 'Kiemelt',
    de: 'Empfohlen'
  },
  'blog.allAuthors': {
    en: 'All Authors',
    hu: 'Minden szerző',
    de: 'Alle Autoren'
  },
  'blog.clearFilters': {
    en: 'Clear Filters',
    hu: 'Szűrők törlése',
    de: 'Filter löschen'
  },
  'blog.showing': {
    en: 'Showing ${count} articles',
    hu: '${count} cikk megjelenítése',
    de: '${count} Artikel anzeigen'
  },
  'blog.sort.newest': {
    en: 'Newest First',
    hu: 'Legújabb először',
    de: 'Neueste zuerst'
  },
  'blog.sort.oldest': {
    en: 'Oldest First',
    hu: 'Legrégebbi először',
    de: 'Älteste zuerst'
  },
  'blog.noResults.title': {
    en: 'No Articles Found',
    hu: 'Nem találhatók cikkek',
    de: 'Keine Artikel gefunden'
  },
  'blog.noResults.description': {
    en: 'Try adjusting your search criteria or browse all articles.',
    hu: 'Próbálja módosítani a keresési feltételeket, vagy böngésszen az összes cikk között.',
    de: 'Versuchen Sie, Ihre Suchkriterien anzupassen oder alle Artikel zu durchsuchen.'
  },
  'blog.noResults.resetButton': {
    en: 'Browse All Articles',
    hu: 'Összes cikk böngészése',
    de: 'Alle Artikel durchsuchen'
  },
  'blog.title': {
    en: 'Blog',
    hu: 'Blog',
    de: 'Blog'
  },
  'blog.postNotFound': {
    en: 'Blog Post Not Found',
    hu: 'Blog bejegyzés nem található',
    de: 'Blog-Beitrag nicht gefunden'
  },
  'blog.postNotFoundDescription': {
    en: 'The requested blog post could not be found. You will be redirected to all posts.',
    hu: 'A kért blog bejegyzés nem található. Átirányítjuk az összes bejegyzéshez.',
    de: 'Der angeforderte Blog-Beitrag konnte nicht gefunden werden. Sie werden zu allen Beiträgen weitergeleitet.'
  },
  'blog.backToAllPosts': {
    en: 'Back to All Posts',
    hu: 'Vissza az összes bejegyzéshez',
    de: 'Zurück zu allen Beiträgen'
  },
  'blog.readTime': {
    en: '${minutes} min read',
    hu: '${minutes} perces olvasás',
    de: '${minutes} Min. Lesezeit'
  },
  'blog.share': {
    en: 'Share',
    hu: 'Megosztás',
    de: 'Teilen'
  },
  'blog.bookmark': {
    en: 'Bookmark',
    hu: 'Könyvjelző',
    de: 'Lesezeichen'
  },
  'blog.authorBio': {
    en: 'Written by ${name}, contributing expert insights on sustainable manufacturing and innovation.',
    hu: '${name} írta, aki szakértői betekintéseket nyújt a fenntartható gyártásról és innovációról.',
    de: 'Geschrieben von ${name}, der Experteneinblicke in nachhaltige Fertigung und Innovation bietet.'
  },
  'blog.tags': {
    en: 'Tags',
    hu: 'Címkék',
    de: 'Tags'
  },
  'blog.relatedPosts': {
    en: 'Related Articles',
    hu: 'Kapcsolódó cikkek',
    de: 'Verwandte Artikel'
  },
  'blog.tagNotFound': {
    en: 'Tag Not Found',
    hu: 'Címke nem található',
    de: 'Tag nicht gefunden'
  },
  'blog.tagNotFoundDescription': {
    en: 'The requested tag does not exist or has no associated posts.',
    hu: 'A kért címke nem létezik, vagy nincsenek hozzá tartozó bejegyzések.',
    de: 'Das angeforderte Tag existiert nicht oder hat keine zugehörigen Beiträge.'
  },
  'blog.error': {
    en: 'Error Loading Content',
    hu: 'Hiba a tartalom betöltésekor',
    de: 'Fehler beim Laden des Inhalts'
  },
  'blog.errorDescription': {
    en: 'We encountered an error while loading the content. Please try again.',
    hu: 'Hibát észleltünk a tartalom betöltése közben. Kérjük, próbálja újra.',
    de: 'Beim Laden des Inhalts ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
  },
  'blog.tags.description': {
    en: 'Browse all blog posts tagged with ${tag}',
    hu: '${tag} címkével ellátott összes blog bejegyzés böngészése',
    de: 'Alle Blog-Beiträge mit dem Tag ${tag} durchsuchen'
  },
  'blog.tags.pageTitle': {
    en: 'Articles tagged "${tag}"',
    hu: '"${tag}" címkével ellátott cikkek',
    de: 'Artikel mit dem Tag "${tag}"'
  },
  'blog.tags.pageDescription': {
    en: 'Explore all our insights and articles related to ${tag}.',
    hu: 'Fedezze fel minden betekintésünket és cikkünket a(z) ${tag} témával kapcsolatban.',
    de: 'Entdecken Sie alle unsere Einblicke und Artikel zu ${tag}.'
  },
  'blog.search.placeholderInTag': {
    en: 'Search in ${tag} articles...',
    hu: 'Keresés a(z) ${tag} cikkekben...',
    de: 'In ${tag} Artikeln suchen...'
  },
  'blog.relatedTags': {
    en: 'Related tags',
    hu: 'Kapcsolódó címkék',
    de: 'Verwandte Tags'
  },
  'blog.filteredResults': {
    en: 'Showing ${count} of ${total} articles',
    hu: '${count} / ${total} cikk megjelenítése',
    de: '${count} von ${total} Artikeln anzeigen'
  },
  'blog.totalInTag': {
    en: '${count} total articles',
    hu: 'Összesen ${count} cikk',
    de: '${count} Artikel insgesamt'
  },
  'blog.noFilteredResults': {
    en: 'No articles match your filters',
    hu: 'Egyetlen cikk sem felel meg a szűrőknek',
    de: 'Keine Artikel entsprechen Ihren Filtern'
  },
  'blog.noFilteredResultsDescription': {
    en: 'Try adjusting your search or filter criteria.',
    hu: 'Próbálja módosítani a keresési vagy szűrési feltételeket.',
    de: 'Versuchen Sie, Ihre Such- oder Filterkriterien anzupassen.'
  },
  'blog.noPostsForTag': {
    en: 'No articles found for this tag',
    hu: 'Nem találhatók cikkek ehhez a címkéhez',
    de: 'Keine Artikel für dieses Tag gefunden'
  },
  'blog.noPostsForTagDescription': {
    en: 'There are currently no articles tagged with "${tag}". Check back later or explore other topics.',
    hu: 'Jelenleg nincsenek "${tag}" címkével ellátott cikkek. Nézzen vissza később, vagy fedezzen fel más témákat.',
    de: 'Es gibt derzeit keine Artikel mit dem Tag "${tag}". Schauen Sie später vorbei oder erkunden Sie andere Themen.'
  },
  'blog.excerpt': {
    en: 'Excerpt',
    hu: 'Kivonat',
    de: 'Auszug'
  },

    // News-specific translations
  'news.meta.title': {
    en: 'Latest News',
    hu: 'Legfrissebb hírek',
    de: 'Neueste Nachrichten'
  },
  'news.meta.description': {
    en: 'Stay updated with the latest news from Flair Plastic and the plastic manufacturing industry.',
    hu: 'Maradjon naprakész a Flair Plastic és a műanyaggyártó ipar legfrissebb híreivel.',
    de: 'Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten von Flair Plastic und der Kunststoffindustrie.'
  },
  'news.meta.keywords': {
    en: 'news, plastic manufacturing, industry updates, company news',
    hu: 'hírek, műanyaggyártás, iparági frissítések, céges hírek',
    de: 'Nachrichten, Kunststoffherstellung, Branchenupdates, Unternehmensnachrichten'
  },
  'news.hero.title': {
    en: 'Latest News',
    hu: 'Legfrissebb hírek',
    de: 'Neueste Nachrichten'
  },
  'news.hero.subtitle': {
    en: 'Stay informed with the latest updates from Flair Plastic and the plastic manufacturing industry.',
    hu: 'Maradjon tájékozott a Flair Plastic és a műanyaggyártó ipar legfrissebb frissítéseivel.',
    de: 'Bleiben Sie informiert über die neuesten Updates von Flair Plastic und der Kunststoffindustrie.'
  },
  'news.search.placeholder': {
    en: 'Search news articles...',
    hu: 'Hírcikkek keresése...',
    de: 'Nachrichtenartikel suchen...'
  },
  'news.search.placeholderInTag': {
    en: 'Search in ${tag} articles...',
    hu: 'Keresés a(z) ${tag} cikkekben...',
    de: 'In ${tag} Artikeln suchen...'
  },
  'news.popular': {
    en: 'Popular topics',
    hu: 'Népszerű témák',
    de: 'Beliebte Themen'
  },
  'news.featured': {
    en: 'Featured',
    hu: 'Kiemelt',
    de: 'Empfohlen'
  },
  'news.urgent': {
    en: 'Urgent',
    hu: 'Sürgős',
    de: 'Dringend'
  },
  'news.allCategories': {
    en: 'All Categories',
    hu: 'Minden kategória',
    de: 'Alle Kategorien'
  },
  'news.clearFilters': {
    en: 'Clear Filters',
    hu: 'Szűrők törlése',
    de: 'Filter löschen'
  },
  'news.showing': {
    en: 'Showing ${count} articles',
    hu: '${count} cikk megjelenítése',
    de: '${count} Artikel anzeigen'
  },
  'news.readMore': {
    en: 'Read more',
    hu: 'Tovább olvasás',
    de: 'Weiterlesen'
  },
  'news.noResults.title': {
    en: 'No news found',
    hu: 'Nem találhatók hírek',
    de: 'Keine Nachrichten gefunden'
  },
  'news.noResults.description': {
    en: 'Try adjusting your search or check back later for new updates.',
    hu: 'Próbálja módosítani a keresést, vagy nézzen vissza később az új frissítésekért.',
    de: 'Versuchen Sie, Ihre Suche anzupassen oder schauen Sie später nach neuen Updates.'
  },
  'news.noResults.resetButton': {
    en: 'Clear search',
    hu: 'Keresés törlése',
    de: 'Suche löschen'
  },
  'news.title': {
    en: 'News',
    hu: 'Hírek',
    de: 'Nachrichten'
  },
  'news.notFound': {
    en: 'Article Not Found',
    hu: 'Cikk nem található',
    de: 'Artikel nicht gefunden'
  },
  'news.notFoundDescription': {
    en: 'The requested news article could not be found.',
    hu: 'A kért hírcikk nem található.',
    de: 'Der angeforderte Nachrichtenartikel konnte nicht gefunden werden.'
  },
  'news.error': {
    en: 'Error Loading Content',
    hu: 'Hiba a tartalom betöltésekor',
    de: 'Fehler beim Laden des Inhalts'
  },
  'news.errorDescription': {
    en: 'We encountered an error while loading the content. Please try again.',
    hu: 'Hibát észleltünk a tartalom betöltése közben. Kérjük, próbálja újra.',
    de: 'Beim Laden des Inhalts ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
  },
  'news.backToAllNews': {
    en: 'Back to All News',
    hu: 'Vissza az összes hírhez',
    de: 'Zurück zu allen Nachrichten'
  },
  'news.readTime': {
    en: '${minutes} min read',
    hu: '${minutes} perces olvasás',
    de: '${minutes} Min. Lesezeit'
  },
  'news.share': {
    en: 'Share',
    hu: 'Megosztás',
    de: 'Teilen'
  },
  'news.source': {
    en: 'Source',
    hu: 'Forrás',
    de: 'Quelle'
  },
  'news.readFullArticle': {
    en: 'Read Full Article',
    hu: 'Teljes cikk olvasása',
    de: 'Vollständigen Artikel lesen'
  },
  'news.aboutAuthor': {
    en: 'About the Author',
    hu: 'A szerzőről',
    de: 'Über den Autor'
  },
  'news.authorBio': {
    en: '${name} is a key contributor to Flair Plastic\'s news and communications.',
    hu: '${name} a Flair Plastic hírek és kommunikáció kulcsfontosságú közreműködője.',
    de: '${name} ist ein wichtiger Mitwirkender bei Flair Plastics Nachrichten und Kommunikation.'
  },
  'news.tags': {
    en: 'Tags',
    hu: 'Címkék',
    de: 'Tags'
  },
  'news.relatedNews': {
    en: 'Related News',
    hu: 'Kapcsolódó hírek',
    de: 'Verwandte Nachrichten'
  },
  'news.viewAllNews': {
    en: 'View All News',
    hu: 'Összes hír megtekintése',
    de: 'Alle Nachrichten anzeigen'
  },
  'news.tagNotFound': {
    en: 'Tag Not Found',
    hu: 'Címke nem található',
    de: 'Tag nicht gefunden'
  },
  'news.tagNotFoundDescription': {
    en: 'The requested tag does not exist or has no associated news articles.',
    hu: 'A kért címke nem létezik, vagy nincsenek hozzá tartozó hírcikkek.',
    de: 'Das angeforderte Tag existiert nicht oder hat keine zugehörigen Nachrichtenartikel.'
  },
  'news.tags.description': {
    en: 'Browse all news articles tagged with ${tag}',
    hu: '${tag} címkével ellátott összes hírcikk böngészése',
    de: 'Alle Nachrichtenartikel mit dem Tag ${tag} durchsuchen'
  },
  'news.tags.pageTitle': {
    en: 'News tagged "${tag}"',
    hu: '"${tag}" címkével ellátott hírek',
    de: 'Nachrichten mit dem Tag "${tag}"'
  },
  'news.tags.pageDescription': {
    en: 'Explore all our news and updates related to ${tag}.',
    hu: 'Fedezze fel minden hírünket és frissítésünket a(z) ${tag} témával kapcsolatban.',
    de: 'Entdecken Sie alle unsere Nachrichten und Updates zu ${tag}.'
  },
  'news.relatedTags': {
    en: 'Related tags',
    hu: 'Kapcsolódó címkék',
    de: 'Verwandte Tags'
  },
  'news.totalArticles': {
    en: 'Total Articles',
    hu: 'Összes cikk',
    de: 'Artikel insgesamt'
  },
  'news.authors': {
    en: 'Authors',
    hu: 'Szerzők',
    de: 'Autoren'
  },
  'news.categories': {
    en: 'Categories',
    hu: 'Kategóriák',
    de: 'Kategorien'
  },
  'news.filteredResults': {
    en: 'Showing ${count} of ${total} articles',
    hu: '${count} / ${total} cikk megjelenítése',
    de: '${count} von ${total} Artikeln anzeigen'
  },
  'news.totalInTag': {
    en: '${count} total articles',
    hu: 'Összesen ${count} cikk',
    de: '${count} Artikel insgesamt'
  },
  'news.noFilteredResults': {
    en: 'No articles match your filters',
    hu: 'Egyetlen cikk sem felel meg a szűrőknek',
    de: 'Keine Artikel entsprechen Ihren Filtern'
  },
  'news.noFilteredResultsDescription': {
    en: 'Try adjusting your search or filter criteria.',
    hu: 'Próbálja módosítani a keresési vagy szűrési feltételeket.',
    de: 'Versuchen Sie, Ihre Such- oder Filterkriterien anzupassen.'
  },
  'news.noNewsForTag': {
    en: 'No articles found for this tag',
    hu: 'Nem találhatók cikkek ehhez a címkéhez',
    de: 'Keine Artikel für dieses Tag gefunden'
  },
  'news.noNewsForTagDescription': {
    en: 'There are currently no news articles tagged with "${tag}". Check back later or explore other topics.',
    hu: 'Jelenleg nincsenek "${tag}" címkével ellátott hírcikkek. Nézzen vissza később, vagy fedezzen fel más témákat.',
    de: 'Es gibt derzeit keine Nachrichtenartikel mit dem Tag "${tag}". Schauen Sie später vorbei oder erkunden Sie andere Themen.'
  },
  'news.category.companyNews': {
    en: 'Company News',
    hu: 'Vállalati hírek',
    de: 'Unternehmensnachrichten'
  },
  'news.category.industryNews': {
    en: 'Industry News',
    hu: 'Iparági hírek',
    de: 'Branchennachrichten'
  },
  'news.category.pressRelease': {
    en: 'Press Release',
    hu: 'Sajtóközlemény',
    de: 'Pressemitteilung'
  },
  'news.category.event': {
    en: 'Event',
    hu: 'Esemény',
    de: 'Veranstaltung'
  },
  'news.category.award': {
    en: 'Award',
    hu: 'Díj',
    de: 'Auszeichnung'
  },
  'news.location': {
    en: 'Location',
    hu: 'Helyszín',
    de: 'Standort'
  },

  // Case Studies translations
  'caseStudies.meta.title': {
    en: 'Case Studies',
    hu: 'Esettanulmányok',
    de: 'Fallstudien'
  },
  'caseStudies.meta.description': {
    en: 'Explore real-world success stories and transformative solutions in sustainable plastic manufacturing.',
    hu: 'Fedezze fel a valós sikertörténeteket és átalakító megoldásokat a fenntartható műanyaggyártásban.',
    de: 'Entdecken Sie reale Erfolgsgeschichten und transformative Lösungen in der nachhaltigen Kunststoffherstellung.'
  },
  'caseStudies.meta.keywords': {
    en: 'case studies, plastic manufacturing, sustainability, success stories, client projects, innovation',
    hu: 'esettanulmányok, műanyaggyártás, fenntarthatóság, sikertörténetek, ügyfélprojektek, innováció',
    de: 'Fallstudien, Kunststoffherstellung, Nachhaltigkeit, Erfolgsgeschichten, Kundenprojekte, Innovation'
  },
  'caseStudies.hero.badge': {
    en: 'Success Stories',
    hu: 'Sikertörténetek',
    de: 'Erfolgsgeschichten'
  },
  'caseStudies.hero.title': {
    en: 'Real Solutions, Real Results',
    hu: 'Valós megoldások, valós eredmények',
    de: 'Echte Lösungen, echte Ergebnisse'
  },
  'caseStudies.hero.subtitle': {
    en: 'Discover how we\'ve transformed challenges into opportunities for our clients across diverse industries.',
    hu: 'Fedezze fel, hogyan alakítottuk át a kihívásokat lehetőségekké ügyfeleink számára különböző iparágakban.',
    de: 'Entdecken Sie, wie wir Herausforderungen in Chancen für unsere Kunden in verschiedenen Branchen verwandelt haben.'
  },
  'caseStudies.search.placeholder': {
    en: 'Search case studies...',
    hu: 'Esettanulmányok keresése...',
    de: 'Fallstudien suchen...'
  },
  'caseStudies.search.placeholderInTag': {
    en: 'Search in ${tag} case studies...',
    hu: 'Keresés a(z) ${tag} esettanulmányokban...',
    de: 'In ${tag} Fallstudien suchen...'
  },
  'caseStudies.popular': {
    en: 'Popular topics',
    hu: 'Népszerű témák',
    de: 'Beliebte Themen'
  },
  'caseStudies.stats.clients': {
    en: '50+ Clients',
    hu: '50+ ügyfél',
    de: '50+ Kunden'
  },
  'caseStudies.stats.clientsDesc': {
    en: 'Successful projects',
    hu: 'Sikeres projektek',
    de: 'Erfolgreiche Projekte'
  },
  'caseStudies.stats.roi': {
    en: '40% Avg ROI',
    hu: '40% átlagos ROI',
    de: '40% durchschnittlicher ROI'
  },
  'caseStudies.stats.roiDesc': {
    en: 'Client improvements',
    hu: 'Ügyfél fejlesztések',
    de: 'Kundenverbesserungen'
  },
  'caseStudies.stats.solutions': {
    en: '100+ Solutions',
    hu: '100+ megoldás',
    de: '100+ Lösungen'
  },
  'caseStudies.stats.solutionsDesc': {
    en: 'Custom implementations',
    hu: 'Egyedi implementációk',
    de: 'Maßgeschneiderte Implementierungen'
  },
  'caseStudies.stats.experience': {
    en: '25+ Years',
    hu: '25+ év',
    de: '25+ Jahre'
  },
  'caseStudies.stats.experienceDesc': {
    en: 'Industry expertise',
    hu: 'Iparági szakértelem',
    de: 'Branchenexpertise'
  },
  'caseStudies.featured': {
    en: 'Featured',
    hu: 'Kiemelt',
    de: 'Empfohlen'
  },
  'caseStudies.filters.industry': {
    en: 'Industry',
    hu: 'Iparág',
    de: 'Branche'
  },
  'caseStudies.filters.allIndustries': {
    en: 'All Industries',
    hu: 'Minden iparág',
    de: 'Alle Branchen'
  },
  'caseStudies.allIndustries': {
    en: 'All Industries',
    hu: 'Minden iparág',
    de: 'Alle Branchen'
  },
  'caseStudies.allProjectTypes': {
    en: 'All Project Types',
    hu: 'Minden projekttípus',
    de: 'Alle Projekttypen'
  },
  'caseStudies.clearFilters': {
    en: 'Clear Filters',
    hu: 'Szűrők törlése',
    de: 'Filter löschen'
  },
  'caseStudies.showing': {
    en: 'Showing ${count} case studies',
    hu: '${count} esettanulmány megjelenítése',
    de: '${count} Fallstudien anzeigen'
  },
  'caseStudies.sort.newest': {
    en: 'Newest First',
    hu: 'Legújabb először',
    de: 'Neueste zuerst'
  },
  'caseStudies.sort.oldest': {
    en: 'Oldest First',
    hu: 'Legrégebbi először',
    de: 'Älteste zuerst'
  },
  'caseStudies.keyResult': {
    en: 'Key Result',
    hu: 'Kulcseredmény',
    de: 'Schlüsselergebnis'
  },
  'caseStudies.readMore': {
    en: 'Read More',
    hu: 'Tovább olvasás',
    de: 'Weiterlesen'
  },
  'caseStudies.noFilteredResults': {
    en: 'No case studies match your filters',
    hu: 'Egyetlen esettanulmány sem felel meg a szűrőknek',
    de: 'Keine Fallstudien entsprechen Ihren Filtern'
  },
  'caseStudies.noFilteredResultsDescription': {
    en: 'Try adjusting your search or filter criteria.',
    hu: 'Próbálja módosítani a keresési vagy szűrési feltételeket.',
    de: 'Versuchen Sie, Ihre Such- oder Filterkriterien anzupassen.'
  },
  'caseStudies.noResults.title': {
    en: 'No Case Studies Found',
    hu: 'Nem találhatók esettanulmányok',
    de: 'Keine Fallstudien gefunden'
  },
  'caseStudies.noResults.description': {
    en: 'Try adjusting your search criteria or browse all case studies.',
    hu: 'Próbálja módosítani a keresési feltételeket, vagy böngésszen az összes esettanulmány között.',
    de: 'Versuchen Sie, Ihre Suchkriterien anzupassen oder alle Fallstudien zu durchsuchen.'
  },
  'caseStudies.noResults.resetButton': {
    en: 'Browse All Case Studies',
    hu: 'Összes esettanulmány böngészése',
    de: 'Alle Fallstudien durchsuchen'
  },
  'caseStudies.title': {
    en: 'Case Studies',
    hu: 'Esettanulmányok',
    de: 'Fallstudien'
  },
  'caseStudies.studyNotFound': {
    en: 'Case Study Not Found',
    hu: 'Esettanulmány nem található',
    de: 'Fallstudie nicht gefunden'
  },
  'caseStudies.studyNotFoundDescription': {
    en: 'The requested case study could not be found. You will be redirected to all case studies.',
    hu: 'A kért esettanulmány nem található. Átirányítjuk az összes esettanulmányhoz.',
    de: 'Die angeforderte Fallstudie konnte nicht gefunden werden. Sie werden zu allen Fallstudien weitergeleitet.'
  },
  'caseStudies.backToAllStudies': {
    en: 'Back to All Case Studies',
    hu: 'Vissza az összes esettanulmányhoz',
    de: 'Zurück zu allen Fallstudien'
  },
  'caseStudies.share': {
    en: 'Share',
    hu: 'Megosztás',
    de: 'Teilen'
  },
  'caseStudies.bookmark': {
    en: 'Bookmark',
    hu: 'Könyvjelző',
    de: 'Lesezeichen'
  },
  'caseStudies.keyResults': {
    en: 'Key Results',
    hu: 'Kulcseredmények',
    de: 'Schlüsselergebnisse'
  },
  'caseStudies.challenge': {
    en: 'Challenge',
    hu: 'Kihívás',
    de: 'Herausforderung'
  },
  'caseStudies.solution': {
    en: 'Solution',
    hu: 'Megoldás',
    de: 'Lösung'
  },
  'caseStudies.projectDetails': {
    en: 'Project Details',
    hu: 'Projekt részletei',
    de: 'Projektdetails'
  },
  'caseStudies.challenges': {
    en: 'Challenges',
    hu: 'Kihívások',
    de: 'Herausforderungen'
  },
  'caseStudies.solutions': {
    en: 'Solutions',
    hu: 'Megoldások',
    de: 'Lösungen'
  },
  'caseStudies.outcomes': {
    en: 'Outcomes',
    hu: 'Eredmények',
    de: 'Ergebnisse'
  },
  'caseStudies.client': {
    en: 'Client',
    hu: 'Ügyfél',
    de: 'Kunde'
  },
  'caseStudies.industry': {
    en: 'Industry',
    hu: 'Iparág',
    de: 'Branche'
  },
  'caseStudies.timeline': {
    en: 'Timeline',
    hu: 'Időkeret',
    de: 'Zeitrahmen'
  },
  'caseStudies.technologies': {
    en: 'Technologies',
    hu: 'Technológiák',
    de: 'Technologien'
  },
  'caseStudies.authorBio': {
    en: 'Written by ${name}, contributing expert insights on sustainable manufacturing and innovation.',
    hu: '${name} írta, aki szakértői betekintéseket nyújt a fenntartható gyártásról és innovációról.',
    de: 'Geschrieben von ${name}, der Experteneinblicke in nachhaltige Fertigung und Innovation bietet.'
  },
  'caseStudies.tags': {
    en: 'Tags',
    hu: 'Címkék',
    de: 'Tags'
  },
  'caseStudies.relatedStudies': {
    en: 'Related Case Studies',
    hu: 'Kapcsolódó esettanulmányok',
    de: 'Verwandte Fallstudien'
  },
  'caseStudies.tagNotFound': {
    en: 'Tag Not Found',
    hu: 'Címke nem található',
    de: 'Tag nicht gefunden'
  },
  'caseStudies.tagNotFoundDescription': {
    en: 'The requested tag does not exist or has no associated case studies.',
    hu: 'A kért címke nem létezik, vagy nincsenek hozzá tartozó esettanulmányok.',
    de: 'Das angeforderte Tag existiert nicht oder hat keine zugehörigen Fallstudien.'
  },
  'caseStudies.error': {
    en: 'Error Loading Content',
    hu: 'Hiba a tartalom betöltésekor',
    de: 'Fehler beim Laden des Inhalts'
  },
  'caseStudies.errorDescription': {
    en: 'We encountered an error while loading the content. Please try again.',
    hu: 'Hibát észleltünk a tartalom betöltése közben. Kérjük, próbálja újra.',
    de: 'Beim Laden des Inhalts ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
  },
  'caseStudies.tags.description': {
    en: 'Browse all case studies tagged with ${tag}',
    hu: '${tag} címkével ellátott összes esettanulmány böngészése',
    de: 'Alle Fallstudien mit dem Tag ${tag} durchsuchen'
  },
  'caseStudies.tags.pageTitle': {
    en: 'Case studies tagged "${tag}"',
    hu: '"${tag}" címkével ellátott esettanulmányok',
    de: 'Fallstudien mit dem Tag "${tag}"'
  },
  'caseStudies.tags.pageDescription': {
    en: 'Explore all our case studies and projects related to ${tag}.',
    hu: 'Fedezze fel minden esettanulmányunkat és projektünket a(z) ${tag} témával kapcsolatban.',
    de: 'Entdecken Sie alle unsere Fallstudien und Projekte zu ${tag}.'
  },
  'caseStudies.relatedTags': {
    en: 'Related tags',
    hu: 'Kapcsolódó címkék',
    de: 'Verwandte Tags'
  },
  'caseStudies.filteredResults': {
    en: 'Showing ${count} of ${total} case studies',
    hu: '${count} / ${total} esettanulmány megjelenítése',
    de: '${count} von ${total} Fallstudien anzeigen'
  },
  'caseStudies.totalInTag': {
    en: '${count} total case studies',
    hu: 'Összesen ${count} esettanulmány',
    de: '${count} Fallstudien insgesamt'
  },
  'caseStudies.noStudiesForTag': {
    en: 'No case studies found for this tag',
    hu: 'Nem találhatók esettanulmányok ehhez a címkéhez',
    de: 'Keine Fallstudien für dieses Tag gefunden'
  },
  'caseStudies.noStudiesForTagDescription': {
    en: 'There are currently no case studies tagged with "${tag}". Check back later or explore other topics.',
    hu: 'Jelenleg nincsenek "${tag}" címkével ellátott esettanulmányok. Nézzen vissza később, vagy fedezzen fel más témákat.',
    de: 'Es gibt derzeit keine Fallstudien mit dem Tag "${tag}". Schauen Sie später vorbei oder erkunden Sie andere Themen.'
  },
  'caseStudies.totalProjects': {
    en: 'Projects',
    hu: 'Projektek',
    de: 'Projekte'
  },
  'caseStudies.industries': {
    en: 'Industries',
    hu: 'Iparágak',
    de: 'Branchen'
  },
  'caseStudies.clients': {
    en: 'Clients',
    hu: 'Ügyfelek',
    de: 'Kunden'
  },

  // Updates-specific translations
  'updates.meta.title': {
    en: 'Latest Updates',
    hu: 'Legfrissebb frissítések',
    de: 'Neueste Updates'
  },
  'updates.meta.description': {
    en: 'Stay updated with the latest product updates, feature releases, and improvements from Flair Plastic.',
    hu: 'Maradjon naprakész a Flair Plastic legfrissebb termékfrissítéseivel, funkcióinak kiadásaival és fejlesztéseivel.',
    de: 'Bleiben Sie auf dem Laufenden mit den neuesten Produktupdates, Feature-Releases und Verbesserungen von Flair Plastic.'
  },
  'updates.meta.keywords': {
    en: 'updates, product updates, feature releases, improvements, plastic manufacturing',
    hu: 'frissítések, termékfrissítések, funkciókiadások, fejlesztések, műanyaggyártás',
    de: 'Updates, Produktupdates, Feature-Releases, Verbesserungen, Kunststoffherstellung'
  },
  'updates.hero.title': {
    en: 'Latest Updates',
    hu: 'Legfrissebb frissítések',
    de: 'Neueste Updates'
  },
  'updates.hero.subtitle': {
    en: 'Stay informed about our latest product updates, feature releases, and system improvements.',
    hu: 'Maradjon tájékozott a legfrissebb termékfrissítéseinkről, funkciókiadásainkról és rendszerfejlesztéseinkről.',
    de: 'Bleiben Sie informiert über unsere neuesten Produktupdates, Feature-Releases und Systemverbesserungen.'
  },

    // Updates section continued
  'updates.search.placeholder': {
    en: 'Search updates...',
    hu: 'Frissítések keresése...',
    de: 'Updates suchen...'
  },
  'updates.popular': {
    en: 'Popular topics',
    hu: 'Népszerű témák',
    de: 'Beliebte Themen'
  },
  'updates.featured': {
    en: 'Featured',
    hu: 'Kiemelt',
    de: 'Empfohlen'
  },
  'updates.critical': {
    en: 'Critical Only',
    hu: 'Csak kritikus',
    de: 'Nur kritisch'
  },
  'updates.urgent': {
    en: 'Urgent',
    hu: 'Sürgős',
    de: 'Dringend'
  },
  'updates.allPriorities': {
    en: 'All Priorities',
    hu: 'Minden prioritás',
    de: 'Alle Prioritäten'
  },
  'updates.allCategories': {
    en: 'All Categories',
    hu: 'Minden kategória',
    de: 'Alle Kategorien'
  },
  'updates.allChangeTypes': {
    en: 'All Types',
    hu: 'Minden típus',
    de: 'Alle Typen'
  },
  'updates.clearFilters': {
    en: 'Clear Filters',
    hu: 'Szűrők törlése',
    de: 'Filter löschen'
  },
  'updates.showing': {
    en: 'Showing ${count} updates',
    hu: '${count} frissítés megjelenítése',
    de: '${count} Updates anzeigen'
  },
  'updates.affects': {
    en: 'Affects',
    hu: 'Érint',
    de: 'Betrifft'
  },
  'updates.readMore': {
    en: 'Read update',
    hu: 'Frissítés olvasása',
    de: 'Update lesen'
  },
  'updates.noResults.title': {
    en: 'No updates found',
    hu: 'Nem találhatók frissítések',
    de: 'Keine Updates gefunden'
  },
  'updates.noResults.description': {
    en: 'Try adjusting your search or check back later for new updates.',
    hu: 'Próbálja módosítani a keresést, vagy nézzen vissza később az új frissítésekért.',
    de: 'Versuchen Sie, Ihre Suche anzupassen oder schauen Sie später nach neuen Updates.'
  },
  'updates.noResults.resetButton': {
    en: 'Clear filters',
    hu: 'Szűrők törlése',
    de: 'Filter löschen'
  },
  'updates.notFound': {
    en: 'Update Not Found',
    hu: 'Frissítés nem található',
    de: 'Update nicht gefunden'
  },
  'updates.notFoundDescription': {
    en: 'The requested update could not be found.',
    hu: 'A kért frissítés nem található.',
    de: 'Das angeforderte Update konnte nicht gefunden werden.'
  },
  'updates.releaseNotes': {
    en: 'Release Notes',
    hu: 'Kiadási megjegyzések',
    de: 'Versionshinweise'
  },
  'updates.aboutAuthor': {
    en: 'About the Author',
    hu: 'A szerzőről',
    de: 'Über den Autor'
  },
  'updates.authorBio': {
    en: '${name} is responsible for product updates and technical communications at Flair Plastic.',
    hu: '${name} felelős a termékfrissítésekért és a technikai kommunikációért a Flair Plastic-nál.',
    de: '${name} ist verantwortlich für Produktupdates und technische Kommunikation bei Flair Plastic.'
  },
  'updates.relatedUpdates': {
    en: 'Related Updates',
    hu: 'Kapcsolódó frissítések',
    de: 'Verwandte Updates'
  },
  'updates.viewAllUpdates': {
    en: 'View All Updates',
    hu: 'Összes frissítés megtekintése',
    de: 'Alle Updates anzeigen'
  },
  
  // Footer translations
  'footer.explore': {
    en: 'Company Overview',
    hu: 'Vállalati áttekintés',
    de: 'Firmenübersicht',
  },
  'footer.services': {
    en: 'Production Services',
    hu: 'Termelési szolgáltatások',
    de: 'Produktionsdienstleistungen',
  },
  'footer.services.injection': {
    en: 'Precision Injection Manufacturing',
    hu: 'Precíziós fröccsöntési gyártás',
    de: 'Präzisions-Spritzguss-Fertigung',
  },
  'footer.services.contract': {
    en: 'Custom Manufacturing Solutions',
    hu: 'Egyedi gyártási megoldások',
    de: 'Maßgeschneiderte Fertigungslösungen',
  },
  'footer.services.support': {
    en: 'Production Excellence',
    hu: 'Gyártási kiválóság',
    de: 'Produktionsexzellenz',
  },
  'footer.contact': {
    en: 'Contact',
    hu: 'Kapcsolat',
    de: 'Kontakt',
  },
  'footer.address': {
    en: 'Miskolc, Sajószigeti utca 2, 3527',
    hu: 'Miskolc, Sajószigeti utca 2, 3527',
    de: 'Miskolc, Sajószigeti utca 2, 3527',
  },
  'footer.phone': {
    en: 'Phone',
    hu: 'Telefon',
    de: 'Telefon',
  },
  'footer.enquiries': {
    en: 'General enquiries',
    hu: 'Általános érdeklődés',
    de: 'Allgemeine Anfragen',
  },
  'footer.rights': {
    en: '© Copyright 2024 – Flair-Plastic. All rights reserved.',
    hu: '© Copyright 2024 – Flair-Plastic. Minden jog fenntartva.',
    de: '© Copyright 2024 – Flair-Plastic. Alle Rechte vorbehalten.',
  },
  'footer.cookies': {
    en: 'My cookie settings',
    hu: 'Cookie beállításaim',
    de: 'Meine Cookie-Einstellungen',
  },
  'footer.cookies.policy': {
    en: 'Cookies policy',
    hu: 'Cookie szabályzat',
    de: 'Cookie-Richtlinie',
  },
  'footer.privacy': {
    en: 'Privacy policy',
    hu: 'Adatvédelmi szabályzat',
    de: 'Datenschutzrichtlinie',
  },
  'footer.terms': {
    en: 'Terms and Conditions',
    hu: 'Általános szerződési feltételek',
    de: 'Allgemeine Geschäftsbedingungen',
  },

  // Resources footer translations
  'resources.footer.description': {
    en: 'Access our complete library of industry insights, news, and company updates.',
    hu: 'Férjen hozzá az iparági betekintések, hírek és vállalati frissítések teljes könyvtárához.',
    de: 'Zugang zu unserer vollständigen Bibliothek mit Brancheneinblicken, Nachrichten und Unternehmensupdates.',
  },
  'resources.footer.categories': {
    en: 'Categories',
    hu: 'Kategóriák',
    de: 'Kategorien',
  },
  'resources.footer.blog': {
    en: 'Blog Articles',
    hu: 'Blog cikkek',
    de: 'Blogartikel',
  },
  'resources.footer.caseStudies': {
    en: 'Case Studies',
    hu: 'Esettanulmányok',
    de: 'Fallstudien',
  },
  'resources.footer.news': {
    en: 'Company News',
    hu: 'Vállalati hírek',
    de: 'Unternehmensnachrichten',
  },
  'resources.footer.updates': {
    en: 'Product Updates',
    hu: 'Termék frissítések',
    de: 'Produktaktualisierungen',
  },
  'resources.footer.tags': {
    en: 'Browse by Tags',
    hu: 'Böngészés címkék szerint',
    de: 'Nach Tags durchsuchen',
  },
  'resources.footer.topics': {
    en: 'Popular Topics',
    hu: 'Népszerű témák',
    de: 'Beliebte Themen',
  },
  'resources.footer.sustainability': {
    en: 'Sustainability',
    hu: 'Fenntarthatóság',
    de: 'Nachhaltigkeit',
  },
  'resources.footer.innovation': {
    en: 'Innovation',
    hu: 'Innováció',
    de: 'Innovation',
  },
  'resources.footer.manufacturing': {
    en: 'Manufacturing',
    hu: 'Gyártás',
    de: 'Fertigung',
  },
  'resources.footer.industry': {
    en: 'Industry Trends',
    hu: 'Iparági trendek',
    de: 'Branchentrends',
  },
  'resources.footer.recycling': {
    en: 'Recycling',
    hu: 'Újrahasznosítás',
    de: 'Recycling',
  },
  'resources.footer.subscribe': {
    en: 'Stay Updated',
    hu: 'Maradjon naprakész',
    de: 'Bleiben Sie auf dem Laufenden',
  },
  'resources.footer.subscribeText': {
    en: 'Subscribe to receive our latest resources directly to your inbox.',
    hu: 'Iratkozzon fel, hogy közvetlenül megkapja legfrissebb erőforrásainkat.',
    de: 'Abonnieren Sie, um unsere neuesten Ressourcen direkt in Ihrem Posteingang zu erhalten.',
  },
  'resources.footer.emailPlaceholder': {
    en: 'Your email',
    hu: 'Az Ön e-mail címe',
    de: 'Ihre E-Mail-Adresse',
  },
  'resources.footer.mainSite': {
    en: 'Back to Main Site',
    hu: 'Vissza a főoldalra',
    de: 'Zurück zur Hauptseite',
  },
  
  // Resources Hub & Tags page translations
  'resources.resourcesHub': {
    en: 'Knowledge Hub',
    hu: 'Tudástár',
    de: 'Wissenszentrum'
  },
  'resources.itemsAvailable': {
    en: 'resources',
    hu: 'forrás',
    de: 'Ressourcen'
  },
  'resources.hero.title': {
    en: 'Knowledge Hub',
    hu: 'Tudástár',
    de: 'Wissenszentrum'
  },
  'resources.hero.subtitle': {
    en: 'Discover insights, innovations, and expertise in plastic manufacturing and sustainability.',
    hu: 'Fedezze fel a betekintéseket, innovációkat és szakértelmet a műanyaggyártás és fenntarthatóság területén.',
    de: 'Entdecken Sie Einblicke, Innovationen und Expertise in der Kunststoffherstellung und Nachhaltigkeit.'
  },
  'resources.search.placeholder': {
    en: 'Search resources...',
    hu: 'Források keresése...',
    de: 'Ressourcen suchen...'
  },
  'resources.typeDesc.blog': {
    en: 'Industry insights and expertise',
    hu: 'Iparági betekintések és szakértelem',
    de: 'Brancheneinblicke und Expertise'
  },
  'resources.typeDesc.case-study': {
    en: 'Client success stories',
    hu: 'Ügyfél sikertörténetek',
    de: 'Kunden-Erfolgsgeschichten'
  },
  'resources.typeDesc.news': {
    en: 'Company and industry updates',
    hu: 'Vállalati és iparági frissítések',
    de: 'Unternehmens- und Branchenupdates'
  },
  'resources.typeDesc.update': {
    en: 'Product and service information',
    hu: 'Termék- és szolgáltatásinformációk',
    de: 'Produkt- und Serviceinformationen'
  },
  'resources.browseAll': {
    en: 'Browse all',
    hu: 'Összes böngészése',
    de: 'Alle durchsuchen'
  },
  'resources.stats.resources': {
    en: 'Total Resources',
    hu: 'Összes forrás',
    de: 'Ressourcen insgesamt'
  },
  'resources.stats.topics': {
    en: 'Topics Covered',
    hu: 'Lefedett témák',
    de: 'Abgedeckte Themen'
  },
  'resources.stats.authors': {
    en: 'Expert Contributors',
    hu: 'Szakértő közreműködők',
    de: 'Fachexperten'
  },
  'resources.stats.updated': {
    en: 'Last Updated',
    hu: 'Utolsó frissítés',
    de: 'Zuletzt aktualisiert'
  },
  'resources.featured': {
    en: 'Featured Resources',
    hu: 'Kiemelt források',
    de: 'Empfohlene Ressourcen'
  },
  'resources.filters.all': {
    en: 'All',
    hu: 'Összes',
    de: 'Alle'
  },
  'resources.sort.newest': {
    en: 'Newest first',
    hu: 'Legújabb először',
    de: 'Neueste zuerst'
  },
  'resources.sort.oldest': {
    en: 'Oldest first',
    hu: 'Legrégebbi először',
    de: 'Älteste zuerst'
  },
  'resources.showing': {
    en: 'Showing ${count} resources',
    hu: '${count} forrás megjelenítése',
    de: '${count} Ressourcen anzeigen'
  },
  'resources.readMore': {
    en: 'Read more',
    hu: 'Tovább olvasás',
    de: 'Weiterlesen'
  },
  'resources.noResults.title': {
    en: 'No matching resources found',
    hu: 'Nem találhatók megfelelő források',
    de: 'Keine passenden Ressourcen gefunden'
  },
  'resources.noResults.description': {
    en: 'Try adjusting your search or filter criteria',
    hu: 'Próbálja módosítani a keresési vagy szűrési feltételeket',
    de: 'Versuchen Sie, Ihre Such- oder Filterkriterien anzupassen'
  },
  'resources.noResults.resetButton': {
    en: 'Reset all filters',
    hu: 'Összes szűrő visszaállítása',
    de: 'Alle Filter zurücksetzen'
  },
  'resources.pagination.previous': {
    en: 'Previous',
    hu: 'Előző',
    de: 'Vorherige'
  },
  'resources.pagination.next': {
    en: 'Next',
    hu: 'Következő',
    de: 'Nächste'
  },
  'resources.sidebar.categories': {
    en: 'Content Categories',
    hu: 'Tartalom kategóriák',
    de: 'Inhaltskategorien'
  },
  'resources.sidebar.tags': {
    en: 'Popular Tags',
    hu: 'Népszerű címkék',
    de: 'Beliebte Tags'
  },
  'resources.sidebar.subscribe.title': {
    en: 'Stay Updated',
    hu: 'Maradjon naprakész',
    de: 'Bleiben Sie auf dem Laufenden'
  },
  'resources.sidebar.subscribe.text': {
    en: 'Subscribe to receive our latest resources and industry insights.',
    hu: 'Iratkozzon fel a legfrissebb forrásaink és iparági betekintéseink fogadásához.',
    de: 'Abonnieren Sie, um unsere neuesten Ressourcen und Brancheneinblicke zu erhalten.'
  },
  'resources.sidebar.subscribe.emailPlaceholder': {
    en: 'Your email address',
    hu: 'Email címe',
    de: 'Ihre E-Mail-Adresse'
  },
  'resources.sidebar.subscribe.button': {
    en: 'Subscribe',
    hu: 'Feliratkozás',
    de: 'Abonnieren'
  },
  'resources.sidebar.subscribe.privacy': {
    en: 'By subscribing, you agree to our privacy policy.',
    hu: 'A feliratkozással elfogadja adatvédelmi szabályzatunkat.',
    de: 'Mit dem Abonnement stimmen Sie unserer Datenschutzrichtlinie zu.'
  },
  'resources.sidebar.share': {
    en: 'Share our Resources',
    hu: 'Forrásaink megosztása',
    de: 'Unsere Ressourcen teilen'
  },
  
  // Resources Tags page translations
  'resources.tags.title': {
    en: 'Resources by Tag',
    hu: 'Források címke szerint',
    de: 'Ressourcen nach Tag'
  },
  'resources.tags.meta.title': {
    en: 'Browse Resources by Tags',
    hu: 'Források böngészése címkék szerint',
    de: 'Ressourcen nach Tags durchsuchen'
  },
  'resources.tags.meta.description': {
    en: 'Explore our resources organized by topics and tags. Find relevant articles, case studies, news, and updates.',
    hu: 'Fedezze fel témák és címkék szerint rendezett forrásainkat. Találjon releváns cikkeket, esettanulmányokat, híreket és frissítéseket.',
    de: 'Entdecken Sie unsere nach Themen und Tags organisierten Ressourcen. Finden Sie relevante Artikel, Fallstudien, Nachrichten und Updates.'
  },
  'resources.tags.tagNotFound': {
    en: 'Tag Not Found',
    hu: 'Címke nem található',
    de: 'Tag nicht gefunden'
  },
  'resources.tags.tagNotFoundDescription': {
    en: 'The requested tag doesn\'t exist or has no associated resources.',
    hu: 'A kért címke nem létezik, vagy nincsenek hozzá tartozó források.',
    de: 'Das angeforderte Tag existiert nicht oder hat keine zugehörigen Ressourcen.'
  },
  'resources.tags.backToResources': {
    en: 'Back to Resources',
    hu: 'Vissza a forrásokhoz',
    de: 'Zurück zu den Ressourcen'
  },

    // Careers page metadata
  'careers.meta.title': {
    en: 'Join Our Team',
    hu: 'Csatlakozzon a csapatunkhoz',
    de: 'Werden Sie Teil unseres Teams',
  },
  'careers.meta.description': {
    en: 'Find career opportunities at Flair Plastic and be part of our innovative sustainable manufacturing team.',
    hu: 'Fedezze fel a karrierlehetőségeket a Flair Plasticnál, és legyen része innovatív fenntartható gyártási csapatunknak.',
    de: 'Entdecken Sie Karrieremöglichkeiten bei Flair Plastic und werden Sie Teil unseres innovativen nachhaltigen Fertigungsteams.',
  },

  // Hero section
  'careers.hero.title': {
    en: 'Join Our Team',
    hu: 'Csatlakozzon a csapatunkhoz',
    de: 'Werden Sie Teil unseres Teams',
  },
  'careers.hero.subtitle': {
    en: "Be part of a company that's shaping the future of sustainable manufacturing with innovative plastic solutions.",
    hu: 'Legyen része egy olyan vállalatnak, amely innovatív műanyag megoldásokkal alakítja a fenntartható gyártás jövőjét.',
    de: 'Werden Sie Teil eines Unternehmens, das mit innovativen Kunststofflösungen die Zukunft der nachhaltigen Fertigung gestaltet.',
  },
  'careers.hero.browseButton': {
    en: 'Browse Open Positions',
    hu: 'Nyitott pozíciók böngészése',
    de: 'Offene Stellen durchsuchen',
  },
  'careers.hero.cultureButton': {
    en: 'Our Culture',
    hu: 'Kultúránk',
    de: 'Unsere Kultur',
  },

  // Values section
  'careers.values.title': {
    en: 'Our Values',
    hu: 'Értékeink',
    de: 'Unsere Werte',
  },
  'careers.values.subtitle': {
    en: 'The principles that guide our work and define our culture.',
    hu: 'Azok az elvek, amelyek irányítják munkánkat és meghatározzák kultúránkat.',
    de: 'Die Grundsätze, die unsere Arbeit leiten és unsere Kultur definieren.',
  },

  // Benefits section
  'careers.benefits.title': {
    en: 'Why Work With Us',
    hu: 'Miért dolgozzon velünk',
    de: 'Warum mit uns arbeiten',
  },
  'careers.benefits.subtitle': {
    en: 'We offer competitive compensation and a range of benefits to support your professional growth and well-being.',
    hu: 'Versenyképes javadalmazást és számos juttatást kínálunk szakmai fejlődésének és jólétének támogatására.',
    de: 'Wir bieten wettbewerbsfähige Vergütung und eine Reihe von Leistungen zur Unterstützung Ihres beruflichen Wachstums und Wohlbefindens.',
  },

  // Openings section
  'careers.openings.title': {
    en: 'Current Openings',
    hu: 'Aktuális nyitott pozíciók',
    de: 'Aktuelle Stellenangebote',
  },
  'careers.openings.subtitle': {
    en: 'Explore our available positions and find your perfect role.',
    hu: 'Fedezze fel elérhető pozícióinkat és találja meg a tökéletes szerepkört.',
    de: 'Entdecken Sie unsere verfügbaren Positionen és finden Sie Ihre perfekte Rolle.',
  },
  'careers.openings.allTab': {
    en: 'All',
    hu: 'Összes',
    de: 'Alle',
  },
  'careers.openings.engineeringTab': {
    en: 'Engineering',
    hu: 'Mérnöki',
    de: 'Technik',
  },
  'careers.openings.operationsTab': {
    en: 'Operations',
    hu: 'Működés',
    de: 'Betrieb',
  },
  'careers.openings.otherTab': {
    en: 'Other',
    hu: 'Egyéb',
    de: 'Andere',
  },
  'careers.openings.applyButton': {
    en: 'Apply Now',
    hu: 'Jelentkezés',
    de: 'Jetzt bewerben',
  },
  'careers.openings.noPositions.title': {
    en: 'No Open Positions Currently',
    hu: 'Jelenleg nincsenek nyitott pozíciók',
    de: 'Derzeit keine offenen Stellen',
  },
  'careers.openings.noPositions.message': {
    en: 'We don\'t have any open positions at the moment, but we\'re always looking for talented people to join our team. Please check back regularly as new opportunities become available.',
    hu: 'Jelenleg nincs nyitott pozíciónk, de mindig keresünk tehetséges embereket csapatunkba. Kérjük, rendszeresen ellenőrizze újra, amint új lehetőségek válnak elérhetővé.',
    de: 'Wir haben derzeit keine offenen Stellen, suchen aber immer nach talentierten Menschen für unser Team. Bitte schauen Sie regelmäßig vorbei, da neue Möglichkeiten verfügbar werden.',
  },
  'careers.openings.noPositions.contactButton': {
    en: 'Contact Our HR Team',
    hu: 'Lépjen kapcsolatba HR csapatunkkal',
    de: 'Kontaktieren Sie unser HR-Team',
  },

  // Process section
  'careers.process.title': {
    en: 'Our Application Process',
    hu: 'Jelentkezési folyamatunk',
    de: 'Unser Bewerbungsprozess',
  },
  'careers.process.subtitle': {
    en: 'A transparent look at how we hire new talent.',
    hu: 'Átlátható betekintés abba, hogyan veszünk fel új tehetségeket.',
    de: 'Ein transparenter Einblick in unseren Einstellungsprozess.',
  },
  'careers.process.step1.title': {
    en: 'Application Review',
    hu: 'Jelentkezés áttekintése',
    de: 'Bewerbungsprüfung',
  },
  'careers.process.step1.description': {
    en: 'Submit your CV and cover letter. Our recruitment team reviews all applications within 5 business days.',
    hu: 'Küldje el önéletrajzát és motivációs levelét. Toborzási csapatunk 5 munkanapon belül átnézi az összes jelentkezést.',
    de: 'Reichen Sie Ihren Lebenslauf und Ihr Anschreiben ein. Unser Rekrutierungsteam prüft alle Bewerbungen innerhalb von 5 Arbeitstagen.',
  },
  'careers.process.step1.tip.title': {
    en: 'Tips for success:',
    hu: 'Tippek a sikerhez:',
    de: 'Tipps für den Erfolg:',
  },
  'careers.process.step1.tip.item1': {
    en: 'Highlight relevant skills and experience',
    hu: 'Emelje ki a releváns készségeket és tapasztalatokat',
    de: 'Heben Sie relevante Fähigkeiten und Erfahrungen hervor',
  },
  'careers.process.step1.tip.item2': {
    en: 'Explain why you want to join our team',
    hu: 'Magyarázza el, miért szeretne csatlakozni csapatunkhoz',
    de: 'Erklären Sie, warum Sie unserem Team beitreten möchten',
  },

  'careers.process.step2.title': {
    en: 'Initial Interview',
    hu: 'Kezdeti interjú',
    de: 'Erstgespräch',
  },
  'careers.process.step2.description': {
    en: 'Shortlisted candidates have a phone or video interview with our HR team to discuss your experience and expectations.',
    hu: 'A kiválasztott jelöltek telefonos vagy videós interjút folytatnak HR-csapatunkkal a tapasztalataik és elvárásaik megbeszélése érdekében.',
    de: 'Ausgewählte Kandidaten führen ein Telefon- oder Videogespräch mit unserem HR-Team, um Ihre Erfahrungen és Erwartungen zu besprechen.',
  },
  'careers.process.step2.tip.title': {
    en: 'What to expect:',
    hu: 'Mire számíthat:',
    de: 'Was Sie erwartet:',
  },
  'careers.process.step2.tip.item1': {
    en: '30-45 minute conversation',
    hu: '30-45 perces beszélgetés',
    de: '30-45-minütiges Gespräch',
  },
  'careers.process.step2.tip.item2': {
    en: 'Background and experience questions',
    hu: 'Háttérre és tapasztalatra vonatkozó kérdések',
    de: 'Fragen zu Hintergrund und Erfahrung',
  },

  'careers.process.step3.title': {
    en: 'Technical Assessment',
    hu: 'Technikai Értékelés',
    de: 'Technische Bewertung',
  },
  'careers.process.step3.description': {
    en: 'Depending on the role, we may ask you to complete a practical task or assessment to demonstrate relevant skills.',
    hu: 'A pozíciótól függően kérhetjük egy gyakorlati feladat vagy értékelés elvégzését a releváns készségek bemutatására.',
    de: 'Je nach Position bitten wir Sie möglicherweise, eine praktische Aufgabe vagy Bewertung durchzuführen, um relevante Fähigkeiten zu demonstrieren.',
  },
  'careers.process.step3.tip.title': {
    en: 'Assessment formats:',
    hu: 'Értékelési formátumok:',
    de: 'Bewertungsformate:',
  },
  'careers.process.step3.tip.item1': {
    en: 'Technical exercises',
    hu: 'Technikai gyakorlatok',
    de: 'Technische Übungen',
  },
  'careers.process.step3.tip.item2': {
    en: 'Case studies or presentations',
    hu: 'Esettanulmányok vagy prezentációk',
    de: 'Fallstudien oder Präsentationen',
  },
  'careers.process.step3.tip.item3': {
    en: 'Skills tests',
    hu: 'Készségtesztek',
    de: 'Fähigkeitstests',
  },
  'careers.process.step4.title': {
    en: 'Final Interview',
    hu: 'Végső Interjú',
    de: 'Abschlussgespräch',
  },
  'careers.process.step4.description': {
    en: 'Meet with department managers and potential teammates to ensure mutual fit and discuss specific role details.',
    hu: 'Találkozzon az osztályvezetőkkel és leendő csapattársakkal a kölcsönös illeszkedés biztosítása és a konkrét szerepkör részleteinek megvitatása érdekében.',
    de: 'Treffen Sie sich mit Abteilungsleitern és potenziellen Teammitgliedern, um die gegenseitige Eignung sicherzustellen és spezifische Rollendetails zu besprechen.',
  },
  'careers.process.step4.tip.title': {
    en: 'Final stage includes:',
    hu: 'A végső szakasz tartalmazza:',
    de: 'Die letzte Phase umfasst:',
  },
  'careers.process.step4.tip.item1': {
    en: 'Meeting with team members',
    hu: 'Találkozás a csapattagokkal',
    de: 'Treffen mit Teammitgliedern',
  },
  'careers.process.step4.tip.item2': {
    en: 'Discussion about compensation',
    hu: 'Beszélgetés a javadalmazásról',
    de: 'Diskussion über die Vergütung',
  },
  'careers.process.step4.tip.item3': {
    en: 'Timeline for decision making',
    hu: 'Döntéshozatali ütemterv',
    de: 'Zeitplan für die Entscheidungsfindung',
  },

  // Culture section
  'careers.culture.title': {
    en: 'Our Company Culture',
    hu: 'Vállalati kultúránk',
    de: 'Unsere Unternehmenskultur',
  },
  'careers.culture.subtitle': {
    en: 'What makes working at Flair Plastic special',
    hu: 'Mi teszi különlegessé a Flair Plasticnál való munkát',
    de: 'Was die Arbeit bei Flair Plastic besonders macht',
  },
  'careers.culture.innovation.title': {
    en: 'Culture of Innovation',
    hu: 'Az innováció kultúrája',
    de: 'Kultur der Innovation',
  },
  'careers.culture.innovation.description': {
    en: 'At Flair Plastic, innovation is in our DNA. We encourage creative thinking and welcome new ideas from all team members regardless of their role or experience level. Our collaborative approach means that everyone has a voice in shaping our future.',
    hu: 'A Flair Plasticnál az innováció a DNS-ünkben van. Ösztönözzük a kreatív gondolkodást és üdvözöljük az új ötleteket minden csapattag részéről, függetlenül szerepüktől vagy tapasztalati szintjüktől. Együttműködő megközelítésünk azt jelenti, hogy mindenkinek van beleszólása jövőnk alakításába.',
    de: 'Bei Flair Plastic ist Innovation Teil unserer DNA. Wir fördern kreatives Denken und begrüßen neue Ideen von allen Teammitgliedern, unabhängig von ihrer Rolle oder ihrem Erfahrungsniveau. Unser kollaborativer Ansatz bedeutet, dass jeder eine Stimme bei der Gestaltung unserer Zukunft hat.',
  },
  'careers.culture.balance.title': {
    en: 'Work-Life Balance',
    hu: 'Munka-magánélet egyensúly',
    de: 'Work-Life-Balance',
  },
  'careers.culture.balance.description': {
    en: 'We understand that productivity thrives when people feel rested and fulfilled. Our flexible work arrangements, generous time-off policies, and focus on well-being help our team members maintain a healthy balance between their professional and personal lives.',
    hu: 'Megértjük, hogy a termelékenység akkor virágzik, amikor az emberek kipihentnek és elégedettnek érzik magukat. Rugalmas munkavégzési megállapodásaink, nagyvonalú szabadság-politikánk és a jólétre való összpontosításunk segíti csapattagjainkat a szakmai és magánéletük közötti egészséges egyensúly fenntartásában.',
    de: 'Wir verstehen, dass Produktivität gedeiht, wenn Menschen sich ausgeruht und erfüllt fühlen. Unsere flexiblen Arbeitsregelungen, großzügigen Urlaubsrichtlinien und der Fokus auf Wohlbefinden helfen unseren Teammitgliedern, ein gesundes Gleichgewicht zwischen ihrem Berufs- und Privatleben zu halten.',
  },
  'careers.culture.growth.title': {
    en: 'Continuous Learning',
    hu: 'Folyamatos tanulás',
    de: 'Kontinuierliches Lernen',
  },
  'careers.culture.growth.description': {
    en: 'We invest in our people through mentorship programs, training opportunities, and education support. Every team member has a personalized development plan to help them grow professionally and achieve their career goals.',
    hu: 'Befektetünk embereinkbe mentori programok, képzési lehetőségek és oktatási támogatás révén. Minden csapattagunk személyre szabott fejlesztési tervvel rendelkezik, amely segít nekik szakmailag fejlődni és elérni karriercéljaikat.',
    de: 'Wir investieren in unsere Mitarbeiter durch Mentorenprogramme, Schulungsmöglichkeiten und Bildungsunterstützung. Jedes Teammitglied hat einen personalisierten Entwicklungsplan, der ihm hilft, beruflich zu wachsen und seine Karriereziele zu erreichen.',
  },
  'careers.culture.diversity.title': {
    en: 'Embracing Diversity',
    hu: 'A sokszínűség elfogadása',
    de: 'Vielfalt wertschätzen',
  },
  'careers.culture.diversity.description': {
    en: 'We celebrate different perspectives, backgrounds, and ideas. Our diverse team brings together varied experiences that drive innovation and help us better understand global markets. We\'re committed to creating an inclusive environment where everyone feels valued and respected.',
    hu: 'Ünnepeljük a különböző nézőpontokat, hátteret és ötleteket. Sokszínű csapatunk olyan változatos tapasztalatokat hoz össze, amelyek hajtják az innovációt és segítenek jobban megérteni a globális piacokat. Elkötelezettek vagyunk egy olyan befogadó környezet létrehozása mellett, ahol mindenki értékesnek és tiszteletben tartottnak érzi magát.',
    de: 'Wir feiern unterschiedliche Perspektiven, Hintergründe und Ideen. Unser vielfältiges Team bringt unterschiedliche Erfahrungen zusammen, die Innovation vorantreiben und uns helfen, globale Märkte besser zu verstehen. Wir sind bestrebt, eine inklusive Umgebung zu schaffen, in der sich jeder wertgeschätzt und respektiert fühlt.',
  },
  'careers.culture.join': {
    en: 'Ready to be part of our dynamic team?',
    hu: 'Készen áll arra, hogy dinamikus csapatunk része legyen?',
    de: 'Bereit, Teil unseres dynamischen Teams zu werden?',
  },
  'careers.culture.browseButton': {
    en: 'Browse Open Positions',
    hu: 'Nyitott pozíciók böngészése',
    de: 'Offene Stellen durchsuchen',
  },

  // Testimonials section
  'careers.testimonials.title': {
    en: 'Meet Our Team',
    hu: 'Ismerje meg csapatunkat',
    de: 'Lernen Sie unser Team kennen',
  },
  'careers.testimonials.subtitle': {
    en: 'Hear from the people who make our company great.',
    hu: 'Hallgassa meg azokat, akik nagyszerűvé teszik vállalatunkat.',
    de: 'Hören Sie von den Menschen, die unser Unternehmen großartig machen.',
  },

  // FAQ section
  'careers.faq.title': {
    en: 'Frequently Asked Questions',
    hu: 'Gyakran Ismételt Kérdések',
    de: 'Häufig gestellte Fragen',
  },
  'careers.faq.subtitle': {
    en: 'Find answers to common questions about working with us.',
    hu: 'Találjon válaszokat a velünk való munkával kapcsolatos gyakori kérdésekre.',
    de: 'Finden Sie Antworten auf häufige Fragen zur Arbeit mit uns.',
  },

  // CTA section
  'careers.cta.title': {
    en: 'Ready to Join Our Team?',
    hu: 'Készen áll a csapatunkhoz csatlakozni?',
    de: 'Bereit, unserem Team beizutreten?',
  },
  'careers.cta.subtitle': {
    en: 'Take the first step towards an exciting career with us.',
    hu: 'Tegye meg az első lépést egy izgalmas karrier felé velünk.',
    de: 'Machen Sie den ersten Schritt zu einer spannenden Karriere mit uns.',
  },
  'careers.cta.browseButton': {
    en: 'Browse Openings',
    hu: 'Pozíciók böngészése',
    de: 'Stellenangebote durchsuchen',
  },
  'careers.cta.contactButton': {
    en: 'Contact Recruiting Team',
    hu: 'Kapcsolat a toborzási csapattal',
    de: 'Kontakt zum Rekrutierungsteam',
  },
  
  // Author roles translations
  'roles.ceoFounder': {
    en: 'CEO & Founder',
    hu: 'Vezérigazgató és alapító',
    de: 'Geschäftsführer & Gründer'
  },
  'roles.headOfRD': {
    en: 'Head of Research & Development',
    hu: 'Kutatás-fejlesztési vezető',
    de: 'Leiterin der Forschung & Entwicklung'
  },
  'roles.sustainabilityDirector': {
    en: 'Sustainability Director',
    hu: 'Fenntarthatósági igazgató',
    de: 'Direktor für Nachhaltigkeit'
  },
  'roles.productManager': {
    en: 'Product Manager',
    hu: 'Termékmenedzser',
    de: 'Produktmanager'
  },
  'roles.technicalLead': {
    en: 'Technical Lead',
    hu: 'Technikai vezető',
    de: 'Technische Leitung'
  },
  'roles.engineeringManager': {
    en: 'Engineering Manager',
    hu: 'Mérnöki menedzser',
    de: 'Engineering Manager'
  },
  'roles.communicationsDirector': {
    en: 'Communications Director',
    hu: 'Kommunikációs igazgató',
    de: 'Kommunikationsdirektor'
  },
  'roles.businessDevelopmentManager': {
    en: 'Business Development Manager',
    hu: 'Üzletfejlesztési menedzser',
    de: 'Geschäftsentwicklungsmanagerin'
  },
  'roles.headOfSustainability': {
    en: 'Head of Sustainability',
    hu: 'Fenntarthatósági vezető',
    de: 'Leiterin für Nachhaltigkeit'
  },
  'roles.contentManager': {
    en: 'Content & Communications Manager',
    hu: 'Tartalom és kommunikációs menedzser',
    de: 'Content & Kommunikationsmanager'
  },
  'roles.materialsScientist': {
    en: 'Materials Science Expert',
    hu: 'Anyagtudományi szakértő',
    de: 'Materialwissenschafts-Experte'
  },

  // Common tag translations
  'tags.sustainability': {
    en: 'Sustainability',
    hu: 'Fenntarthatóság',
    de: 'Nachhaltigkeit'
  },
  'tags.innovation': {
    en: 'Innovation',
    hu: 'Innováció',
    de: 'Innovation'
  },
  'tags.manufacturing': {
    en: 'Manufacturing',
    hu: 'Gyártás',
    de: 'Fertigung'
  },
  'tags.recycling': {
    en: 'Recycling',
    hu: 'Újrahasznosítás',
    de: 'Recycling'
  },
  'tags.circularEconomy': {
    en: 'Circular Economy',
    hu: 'Körforgásos gazdaság',
    de: 'Kreislaufwirtschaft'
  },
  'tags.technology': {
    en: 'Technology',
    hu: 'Technológia',
    de: 'Technologie'
  },
  'tags.bioplastics': {
    en: 'Bioplastics',
    hu: 'Bioműanyagok',
    de: 'Biokunststoffe'
  },
  'tags.greenTech': {
    en: 'Green Technology',
    hu: 'Zöld technológia',
    de: 'Grüne Technologie'
  },
  'tags.qualityControl': {
    en: 'Quality Control',
    hu: 'Minőségirányítás',
    de: 'Qualitätskontrolle'
  },
  'tags.ai': {
    en: 'Artificial Intelligence',
    hu: 'Mesterséges intelligencia',
    de: 'Künstliche Intelligenz'
  },
  'tags.industry40': {
    en: 'Industry 4.0',
    hu: 'Ipar 4.0',
    de: 'Industrie 4.0'
  },

    // Resource content type labels
  'resources.types.blog': {
    en: 'Blog',
    hu: 'Blog',
    de: 'Blog'
  },
  'resources.types.case-study': {
    en: 'Case Study',
    hu: 'Esettanulmány',
    de: 'Fallstudie'
  },
  'resources.types.news': {
    en: 'News',
    hu: 'Hírek',
    de: 'Nachrichten'
  },
  'resources.types.update': {
    en: 'Update',
    hu: 'Frissítés',
    de: 'Update'
  },
  
  // Resource filter categories
  'resources.filters.blog': {
    en: 'Blog Articles',
    hu: 'Blog cikkek',
    de: 'Blogartikel'
  },
  'resources.filters.case-study': {
    en: 'Case Studies',
    hu: 'Esettanulmányok',
    de: 'Fallstudien'
  },
  'resources.filters.news': {
    en: 'News',
    hu: 'Hírek',
    de: 'Nachrichten'
  },
  'resources.filters.update': {
    en: 'Updates',
    hu: 'Frissítések',
    de: 'Updates'
  },
  
  // Resources navigation
  'resources.nav.home': {
    en: 'Home',
    hu: 'Főoldal',
    de: 'Startseite'
  },
  'resources.nav.blog': {
    en: 'Blog',
    hu: 'Blog',
    de: 'Blog'
  },
  'resources.nav.caseStudies': {
    en: 'Case Studies',
    hu: 'Esettanulmányok',
    de: 'Fallstudien'
  },
  'resources.nav.news': {
    en: 'News',
    hu: 'Hírek',
    de: 'Nachrichten'
  },
  'resources.nav.updates': {
    en: 'Updates',
    hu: 'Frissítések',
    de: 'Aktualisierungen'
  },
  'resources.nav.contact': {
    en: 'Contact',
    hu: 'Kapcsolat',
    de: 'Kontakt'
  },
  
  // Resource sorting options
  'resources.popular': {
    en: 'Popular',
    hu: 'Népszerű',
    de: 'Beliebt'
  },
  'updates.sort.newest': {
    en: 'Newest first',
    hu: 'Legújabb először',
    de: 'Neueste zuerst'
  },
  'news.sort.newest': {
    en: 'Newest first',
    hu: 'Legújabb először',
    de: 'Neueste zuerst'
  },

    // Resources title
  'resources.title': {
    en: 'Resources',
    hu: 'Források',
    de: 'Ressourcen'
  },
  
  // Blog read more action
  'blog.readMore': {
    en: 'Read more',
    hu: 'Tovább olvasás',
    de: 'Weiterlesen'
  },
};