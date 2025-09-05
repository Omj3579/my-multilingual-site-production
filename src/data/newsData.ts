// Author interface for news articles
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

export type NewsCategory = 'company-news' | 'industry-news' | 'press-release' | 'event' | 'award';

// News article interface
export interface NewsArticle {
  id: string;
  slug: string;
  category: 'news'; // Always news for this file
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
  customUrl?: string; // For custom news pages
  // News-specific fields
  newsCategory?: NewsCategory;
  source?: string;
  location?: string;
}

// News authors - standardized naming
export const newsAuthors: Author[] = [
  {
    id: 'john-smith',
    name: 'John Smith',
    role: {
      en: 'CEO & Founder',
      hu: 'Vezérigazgató és alapító',
      de: 'Geschäftsführer & Gründer'
    },
    avatar: '/images/team/john-smith.jpg'
  },
  {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    role: {
      en: 'Head of Sustainability',
      hu: 'Fenntarthatósági vezető',
      de: 'Leiterin für Nachhaltigkeit'
    },
    avatar: '/images/team/maria-garcia.jpg'
  },
  {
    id: 'peter-kovacs',
    name: 'Péter Kovács',
    role: {
      en: 'Communications Director',
      hu: 'Kommunikációs igazgató',
      de: 'Kommunikationsdirektor'
    },
    avatar: '/images/team/peter-kovacs.jpg'
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: {
      en: 'Business Development Manager',
      hu: 'Üzletfejlesztési menedzser',
      de: 'Geschäftsentwicklungsmanagerin'
    },
    avatar: '/images/team/sarah-johnson.jpg'
  }
];

// News articles data - standardized naming
export const newsItems: NewsArticle[] = [
  {
    id: 'company-expansion-2024',
    slug: 'flair-plastic-announces-major-expansion',
    category: 'news',
    title: {
      en: 'Flair Plastic Announces Major European Expansion',
      hu: 'A Flair Plastic bejelenti nagy európai bővítését',
      de: 'Flair Plastic kündigt große europäische Expansion an'
    },
    description: {
      en: 'New state-of-the-art manufacturing facility in Germany to meet growing demand for sustainable plastic solutions across Europe.',
      hu: 'Új, korszerű gyártó létesítmény Németországban a fenntartható műanyag megoldások iránti növekvő európai kereslet kielégítésére.',
      de: 'Neue hochmoderne Produktionsstätte in Deutschland zur Deckung der wachsenden Nachfrage nach nachhaltigen Kunststofflösungen in ganz Europa.'
    },
    content: {
      en: `<p>Flair Plastic is excited to announce our major expansion plans with the construction of a new state-of-the-art manufacturing facility in Munich, Germany. This strategic investment represents our commitment to meeting the growing demand for sustainable plastic solutions across Europe.</p>
      
      <h2>Strategic Location</h2>
      <p>The new 15,000 square meter facility in Munich will serve as our European hub, strategically positioned to efficiently serve customers across Germany, Austria, Switzerland, and neighboring countries.</p>
      
      <h2>Advanced Technology</h2>
      <p>The facility will incorporate the latest in eco-friendly production technology, including:</p>
      <ul>
        <li>Advanced recycling systems with 95% efficiency rates</li>
        <li>Solar-powered energy systems reducing carbon footprint by 60%</li>
        <li>AI-driven quality control systems</li>
        <li>Zero-waste manufacturing processes</li>
      </ul>
      
      <h2>Job Creation</h2>
      <p>This expansion will create approximately 150 new jobs in the region, including positions in manufacturing, engineering, research and development, and administration.</p>
      
      <h2>Expected Timeline</h2>
      <p>Construction is scheduled to begin in Q2 2024, with the facility expected to be operational by early 2025. Production capacity will gradually increase throughout 2025, reaching full capacity by the end of the year.</p>`,
      
      hu: `<p>A Flair Plastic örömmel jelenti be nagy bővítési terveit egy új, korszerű gyártó létesítmény építésével München városában, Németországban. Ez a stratégiai befektetés elkötelezettségünket tükrözi a fenntartható műanyag megoldások iránti növekvő európai kereslet kielégítése iránt.</p>
      
      <h2>Stratégiai helyszín</h2>
      <p>Az új, 15.000 négyzetméteres müncheni létesítmény európai központunkként fog szolgálni, stratégiailag pozicionálva a németországi, ausztriai, svájci és szomszédos országbeli ügyfelek hatékony kiszolgálására.</p>
      
      <h2>Fejlett technológia</h2>
      <p>A létesítmény a legújabb környezetbarát gyártási technológiákat fogja alkalmazni, beleértve:</p>
      <ul>
        <li>Fejlett újrahasznosítási rendszerek 95%-os hatékonysággal</li>
        <li>Napelemes energiarendszerek, amelyek 60%-kal csökkentik a karbon-lábnyomot</li>
        <li>MI-vezérelt minőségirányítási rendszerek</li>
        <li>Nulla hulladék gyártási folyamatok</li>
      </ul>
      
      <h2>Munkahely-teremtés</h2>
      <p>Ez a bővítés körülbelül 150 új munkahelyet teremt a régióban, beleértve a gyártás, mérnöki tudományok, kutatás-fejlesztés és adminisztráció területeit.</p>
      
      <h2>Várható ütemterv</h2>
      <p>Az építkezés 2024 második negyedévében kezdődik, a létesítmény várhatóan 2025 elején lesz működőképes. A gyártási kapacitás fokozatosan növekszik 2025-ben, az év végére eléri a teljes kapacitást.</p>`,
      
      de: `<p>Flair Plastic freut sich, unsere großen Expansionspläne mit dem Bau einer neuen hochmodernen Produktionsstätte in München, Deutschland, bekannt zu geben. Diese strategische Investition zeigt unser Engagement, der wachsenden Nachfrage nach nachhaltigen Kunststofflösungen in ganz Europa gerecht zu werden.</p>
      
      <h2>Strategischer Standort</h2>
      <p>Die neue 15.000 Quadratmeter große Anlage in München wird als unser europäisches Zentrum dienen, strategisch positioniert, um Kunden in Deutschland, Österreich, der Schweiz und den Nachbarländern effizient zu bedienen.</p>
      
      <h2>Fortschrittliche Technologie</h2>
      <p>Die Anlage wird die neuesten umweltfreundlichen Produktionstechnologien einsetzen, einschließlich:</p>
      <ul>
        <li>Fortschrittliche Recycling-Systeme mit 95% Effizienz</li>
        <li>Solarenergie-Systeme, die den CO2-Fußabdruck um 60% reduzieren</li>
        <li>KI-gesteuerte Qualitätskontrollsysteme</li>
        <li>Null-Abfall-Produktionsprozesse</li>
      </ul>
      
      <h2>Arbeitsplatzschaffung</h2>
      <p>Diese Expansion wird etwa 150 neue Arbeitsplätze in der Region schaffen, einschließlich Positionen in Produktion, Ingenieurwesen, Forschung und Entwicklung sowie Verwaltung.</p>
      
      <h2>Erwarteter Zeitplan</h2>
      <p>Der Bau soll im zweiten Quartal 2024 beginnen, die Anlage wird voraussichtlich Anfang 2025 betriebsbereit sein. Die Produktionskapazität wird 2025 schrittweise erhöht und erreicht bis Ende des Jahres die volle Kapazität.</p>`
    },
    image: '/images/news/expansion-2024.jpg',
    thumbnailImage: '/images/news/expansion-2024-thumb.jpg',
    date: '2024-01-15',
    author: newsAuthors[0], // John Smith
    readTime: 4,
    tags: ['company-news', 'expansion', 'manufacturing', 'europe'],
    featured: true,
    newsCategory: 'company-news',
    source: 'Flair Plastic Press Release',
    location: 'Munich, Germany'
  },
  {
    id: 'sustainability-award-2024',
    slug: 'sustainability-award-green-manufacturing-excellence',
    category: 'news',
    title: {
      en: 'Flair Plastic Receives Green Manufacturing Excellence Award',
      hu: 'A Flair Plastic elnyeri a Zöld Gyártási Kiválóság Díjat',
      de: 'Flair Plastic erhält Green Manufacturing Excellence Award'
    },
    description: {
      en: 'Our commitment to sustainable manufacturing practices recognized with prestigious industry award at the European Sustainability Summit.',
      hu: 'Fenntartható gyártási gyakorlatokkal kapcsolatos elkötelezettségünket tekintélyes iparági díjjal ismerték el az Európai Fenntarthatósági Csúcstalálkozón.',
      de: 'Unser Engagement für nachhaltige Fertigungspraktiken wurde mit einem prestigeträchtigen Branchenpreis auf dem European Sustainability Summit ausgezeichnet.'
    },
    content: {
      en: `<p>We are proud to announce that Flair Plastic has been awarded the prestigious Green Manufacturing Excellence Award at the annual European Sustainability Summit in Vienna. This recognition highlights our unwavering commitment to environmental responsibility and sustainable business practices.</p>
      
      <h2>Award Recognition</h2>
      <p>The Green Manufacturing Excellence Award recognizes companies that demonstrate outstanding leadership in sustainable manufacturing practices, environmental stewardship, and innovation in green technologies.</p>
      
      <h2>Our Sustainable Initiatives</h2>
      <p>The award specifically recognized several of our key initiatives:</p>
      <ul>
        <li>Implementation of closed-loop manufacturing processes</li>
        <li>Development of bio-based plastic alternatives</li>
        <li>50% reduction in energy consumption over the past three years</li>
        <li>Zero waste to landfill achievement</li>
        <li>Partnership with local recycling programs</li>
      </ul>
      
      <h2>Industry Impact</h2>
      <p>Our sustainable practices have not only reduced our environmental footprint but have also set new standards for the plastic manufacturing industry across Europe.</p>
      
      <h2>Future Commitments</h2>
      <p>This award reinforces our commitment to achieving carbon neutrality by 2030 and continuing to lead the industry in sustainable innovation.</p>`,
      
      hu: `<p>Büszkén jelentjük be, hogy a Flair Plastic elnyerte a tekintélyes Zöld Gyártási Kiválóság Díjat az éves Európai Fenntarthatósági Csúcstalálkozón Bécsben. Ez az elismerés kiemeli rendíthetetlen elkötelezettségünket a környezeti felelősség és a fenntartható üzleti gyakorlatok iránt.</p>
      
      <h2>Díj elismerés</h2>
      <p>A Zöld Gyártási Kiválóság Díj olyan vállalatokat ismer el, amelyek kiemelkedő vezetést mutatnak a fenntartható gyártási gyakorlatokban, környezeti felelősségvállalásban és zöld technológiák terén történő innovációban.</p>
      
      <h2>Fenntartható kezdeményezéseink</h2>
      <p>A díj kifejezetten több kulcsfontosságú kezdeményezésünket ismerte el:</p>
      <ul>
        <li>Zárt ciklusú gyártási folyamatok megvalósítása</li>
        <li>Bio-alapú műanyag alternatívák fejlesztése</li>
        <li>50%-os energiafogyasztás-csökkentés az elmúlt három évben</li>
        <li>Nulla hulladék a hulladéklerakóba elérése</li>
        <li>Partnerség helyi újrahasznosítási programokkal</li>
      </ul>
      
      <h2>Iparági hatás</h2>
      <p>Fenntartható gyakorlataink nemcsak csökkentették környezeti lábnyomunkat, hanem új szabványokat is állítottak fel a műanyaggyártó ipar számára Európa-szerte.</p>
      
      <h2>Jövőbeli kötelezettségvállalások</h2>
      <p>Ez a díj megerősíti elkötelezettségünket a 2030-ra történő karbonsemlegesség elérése és a fenntartható innováció terén az iparág vezetése folytatása iránt.</p>`,
      
      de: `<p>Wir sind stolz darauf, bekannt zu geben, dass Flair Plastic den prestigeträchtigen Green Manufacturing Excellence Award auf dem jährlichen European Sustainability Summit in Wien erhalten hat. Diese Anerkennung unterstreicht unser unerschütterliches Engagement für Umweltverantwortung und nachhaltige Geschäftspraktiken.</p>
      
      <h2>Auszeichnung</h2>
      <p>Der Green Manufacturing Excellence Award würdigt Unternehmen, die herausragende Führung in nachhaltigen Fertigungspraktiken, Umweltschutz und Innovation in grünen Technologien zeigen.</p>
      
      <h2>Unsere nachhaltigen Initiativen</h2>
      <p>Die Auszeichnung würdigte speziell mehrere unserer Schlüsselinitiativen:</p>
      <ul>
        <li>Implementierung von Kreislauf-Fertigungsprozessen</li>
        <li>Entwicklung biobasierter Kunststoffalternativen</li>
        <li>50% Reduzierung des Energieverbrauchs in den letzten drei Jahren</li>
        <li>Erreichen von null Abfall zur Deponie</li>
        <li>Partnerschaft mit lokalen Recycling-Programmen</li>
      </ul>
      
      <h2>Brancheneinfluss</h2>
      <p>Unsere nachhaltigen Praktiken haben nicht nur unseren ökologischen Fußabdruck reduziert, sondern auch neue Standards für die Kunststofffertigungsindustrie in ganz Europa gesetzt.</p>
      
      <h2>Zukünftige Verpflichtungen</h2>
      <p>Diese Auszeichnung verstärkt unser Engagement, bis 2030 Kohlenstoffneutralität zu erreichen und weiterhin die Branche in nachhaltiger Innovation zu führen.</p>`
    },
    image: '/images/news/sustainability-award.jpg',
    thumbnailImage: '/images/news/sustainability-award-thumb.jpg',
    date: '2024-04-15',
    author: newsAuthors[1], // Maria Garcia
    readTime: 3,
    tags: ['award', 'sustainability', 'recognition', 'green-manufacturing'],
    featured: true,
    newsCategory: 'award',
    source: 'European Sustainability Summit',
    location: 'Vienna, Austria'
  },
  {
    id: 'partnership-announcement',
    slug: 'strategic-partnership-tech-innovation-lab',
    category: 'news',
    title: {
      en: 'Strategic Partnership with Leading Technology Innovation Lab',
      hu: 'Stratégiai partnerség vezető technológiai innovációs laboratóriummal',
      de: 'Strategische Partnerschaft mit führendem Technologie-Innovationslabor'
    },
    description: {
      en: 'New partnership to accelerate development of next-generation biodegradable plastics and smart materials.',
      hu: 'Új partnerség a következő generációs biológiailag lebomló műanyagok és intelligens anyagok fejlesztésének felgyorsítására.',
      de: 'Neue Partnerschaft zur Beschleunigung der Entwicklung von biologisch abbaubaren Kunststoffen und intelligenten Materialien der nächsten Generation.'
    },
    content: {
      en: `<p>Flair Plastic is pleased to announce a strategic partnership with TechInnovate Labs, a leading European research institution specializing in advanced materials science and biotechnology applications.</p>
      
      <h2>Partnership Goals</h2>
      <p>This collaboration aims to accelerate the development of revolutionary plastic alternatives and smart materials that will transform multiple industries including packaging, automotive, and healthcare.</p>
      
      <h2>Research Focus Areas</h2>
      <ul>
        <li>Next-generation biodegradable polymers</li>
        <li>Self-healing plastic materials</li>
        <li>Smart packaging with integrated sensors</li>
        <li>Bio-based plastic alternatives from agricultural waste</li>
      </ul>
      
      <h2>Expected Outcomes</h2>
      <p>The partnership is expected to bring several breakthrough products to market within the next 18 months, with potential applications across multiple sectors.</p>
      
      <h2>Investment and Timeline</h2>
      <p>The three-year partnership represents a €5 million joint investment in research and development, with the first phase beginning immediately.</p>`,
      
      hu: `<p>A Flair Plastic örömmel jelenti be stratégiai partnerségét a TechInnovate Labs-szal, egy vezető európai kutatóintézettel, amely fejlett anyagtudományi és biotechnológiai alkalmazásokra szakosodott.</p>
      
      <h2>Partnerség céljai</h2>
      <p>Ez az együttműködés célja a forradalmi műanyag-alternatívák és intelligens anyagok fejlesztésének felgyorsítása, amelyek átalakítják több iparágat, beleértve a csomagolást, autóipart és egészségügyet.</p>
      
      <h2>Kutatási fókuszterületek</h2>
      <ul>
        <li>Következő generációs biológiailag lebomló polimerek</li>
        <li>Öngyógyító műanyag anyagok</li>
        <li>Intelligens csomagolás integrált érzékelőkkel</li>
        <li>Bio-alapú műanyag alternatívák mezőgazdasági hulladékból</li>
      </ul>
      
      <h2>Várható eredmények</h2>
      <p>A partnerség várhatóan több áttörést jelentő terméket hoz piacra a következő 18 hónapon belül, több szektorban történő potenciális alkalmazásokkal.</p>
      
      <h2>Befektetés és ütemterv</h2>
      <p>A hároméves partnerség 5 millió eurós közös befektetést jelent a kutatás-fejlesztésbe, az első fázis azonnal kezdődik.</p>`,
      
      de: `<p>Flair Plastic freut sich, eine strategische Partnerschaft mit TechInnovate Labs bekannt zu geben, einer führenden europäischen Forschungseinrichtung, die sich auf fortschrittliche Materialwissenschaft und biotechnologische Anwendungen spezialisiert hat.</p>
      
      <h2>Partnerschaftsziele</h2>
      <p>Diese Zusammenarbeit zielt darauf ab, die Entwicklung revolutionärer Kunststoffalternativen und intelligenter Materialien zu beschleunigen, die mehrere Branchen einschließlich Verpackung, Automobil und Gesundheitswesen transformieren werden.</p>
      
      <h2>Forschungsschwerpunkte</h2>
      <ul>
        <li>Biologisch abbaubare Polymere der nächsten Generation</li>
        <li>Selbstheilende Kunststoffmaterialien</li>
        <li>Intelligente Verpackungen mit integrierten Sensoren</li>
        <li>Biobasierte Kunststoffalternativen aus landwirtschaftlichen Abfällen</li>
      </ul>
      
      <h2>Erwartete Ergebnisse</h2>
      <p>Die Partnerschaft wird voraussichtlich mehrere Durchbruchsprodukte innerhalb der nächsten 18 Monate auf den Markt bringen, mit potenziellen Anwendungen in mehreren Sektoren.</p>
      
      <h2>Investition und Zeitplan</h2>
      <p>Die dreijährige Partnerschaft repräsentiert eine gemeinsame Investition von 5 Millionen Euro in Forschung und Entwicklung, wobei die erste Phase sofort beginnt.</p>`
    },
    image: '/images/news/partnership-announcement.jpg',
    thumbnailImage: '/images/news/partnership-announcement-thumb.jpg',
    date: '2024-03-08',
    author: newsAuthors[2], // Peter Kovacs
    readTime: 3,
    tags: ['partnership', 'innovation', 'research', 'technology'],
    featured: false,
    newsCategory: 'company-news',
    source: 'Flair Plastic Communications',
    location: 'Budapest, Hungary'
  },
  {
    id: 'industry-conference-keynote',
    slug: 'ceo-keynote-plastic-future-summit',
    category: 'news',
    title: {
      en: 'CEO to Deliver Keynote at International Plastic Future Summit',
      hu: 'A vezérigazgató főelőadást tart a Nemzetközi Műanyag Jövő Csúcstalálkozón',
      de: 'CEO hält Keynote auf dem International Plastic Future Summit'
    },
    description: {
      en: 'Our CEO will share insights on the future of sustainable plastic manufacturing at the industry\'s premier conference.',
      hu: 'Vezérigazgatónk megosztja nézeteit a fenntartható műanyaggyártás jövőjéről az iparág vezető konferenciáján.',
      de: 'Unser CEO wird Einblicke in die Zukunft der nachhaltigen Kunststoffherstellung auf der führenden Branchenkonferenz teilen.'
    },
    content: {
      en: `<p>We are honored to announce that our CEO, John Smith, has been invited to deliver the opening keynote address at the International Plastic Future Summit, taking place in Amsterdam from May 15-17, 2024.</p>
      
      <h2>Keynote Topic</h2>
      <p>Mr. Smith will present on "Reimagining Plastic Manufacturing: A Roadmap to Circular Economy Success," sharing Flair Plastic's journey and vision for the industry's sustainable future.</p>
      
      <h2>Conference Highlights</h2>
      <p>The summit brings together over 1,500 industry leaders, researchers, and policymakers to discuss the latest innovations and challenges in sustainable plastic manufacturing.</p>
      
      <h2>Key Discussion Points</h2>
      <ul>
        <li>Circular economy implementation strategies</li>
        <li>Breakthrough technologies in bio-based plastics</li>
        <li>Policy frameworks for sustainable manufacturing</li>
        <li>Consumer behavior and market trends</li>
      </ul>
      
      <h2>Industry Leadership</h2>
      <p>This invitation recognizes Flair Plastic's position as a thought leader in sustainable manufacturing practices and our commitment to driving positive industry change.</p>`,
      
      hu: `<p>Tisztelettel jelentjük be, hogy vezérigazgatónkat, John Smitht meghívták a nyitó főelőadás megtartására a Nemzetközi Műanyag Jövő Csúcstalálkozón, amely 2024. május 15-17. között zajlik Amszterdamban.</p>
      
      <h2>Főelőadás témája</h2>
      <p>Smith úr "A műanyaggyártás újragondolása: Útvonal a körforgásos gazdaság sikeréhez" címmel fog előadni, megosztva a Flair Plastic útját és vízióját az iparág fenntartható jövőjéről.</p>
      
      <h2>Konferencia kiemelései</h2>
      <p>A csúcstalálkozó több mint 1500 iparági vezetőt, kutatót és politikai döntéshozót hoz össze, hogy megvitassák a legújabb innovációkat és kihívásokat a fenntartható műanyaggyártásban.</p>
      
      <h2>Kulcsfontosságú vitapontok</h2>
      <ul>
        <li>Körforgásos gazdaság megvalósítási stratégiái</li>
        <li>Áttörést jelentő technológiák a bio-alapú műanyagokban</li>
        <li>Politikai keretek a fenntartható gyártáshoz</li>
        <li>Fogyasztói magatartás és piaci trendek</li>
      </ul>
      
      <h2>Iparági vezetés</h2>
      <p>Ez a meghívás elismeri a Flair Plastic pozícióját mint gondolati vezető a fenntartható gyártási gyakorlatokban és elkötelezettségünket a pozitív iparági változások előmozdítása iránt.</p>`,
      
      de: `<p>Wir freuen uns, bekannt zu geben, dass unser CEO, John Smith, eingeladen wurde, die Eröffnungs-Keynote auf dem International Plastic Future Summit zu halten, der vom 15.-17. Mai 2024 in Amsterdam stattfindet.</p>
      
      <h2>Keynote-Thema</h2>
      <p>Herr Smith wird über "Neugestaltung der Kunststoffherstellung: Ein Fahrplan zum Erfolg der Kreislaufwirtschaft" sprechen und Flair Plastics Reise und Vision für die nachhaltige Zukunft der Branche teilen.</p>
      
      <h2>Konferenz-Highlights</h2>
      <p>Der Gipfel bringt über 1.500 Branchenführer, Forscher und Politiker zusammen, um die neuesten Innovationen und Herausforderungen in der nachhaltigen Kunststoffherstellung zu diskutieren.</p>
      
      <h2>Wichtige Diskussionspunkte</h2>
      <ul>
        <li>Implementierungsstrategien für die Kreislaufwirtschaft</li>
        <li>Durchbruchstechnologien in biobasierten Kunststoffen</li>
        <li>Politische Rahmen für nachhaltige Fertigung</li>
        <li>Verbraucherverhalten und Markttrends</li>
      </ul>
      
      <h2>Branchenführung</h2>
      <p>Diese Einladung anerkennt Flair Plastics Position als Vordenker in nachhaltigen Fertigungspraktiken und unser Engagement für positive Branchenveränderungen.</p>`
    },
    image: '/images/news/keynote-conference.jpg',
    thumbnailImage: '/images/news/keynote-conference-thumb.jpg',
    date: '2024-04-22',
    author: newsAuthors[3], // Sarah Johnson
    readTime: 2,
    tags: ['conference', 'keynote', 'industry-leadership', 'sustainability'],
    featured: false,
    newsCategory: 'event',
    source: 'International Plastic Future Summit',
    location: 'Amsterdam, Netherlands'
  },
  {
    id: 'recycling-milestone',
    slug: 'million-tons-recycled-milestone',
    category: 'news',
    title: {
      en: 'Flair Plastic Reaches One Million Tons Recycled Milestone',
      hu: 'A Flair Plastic eléri az egymillió tonna újrahasznosított mérföldkövet',
      de: 'Flair Plastic erreicht Meilenstein von einer Million Tonnen recycelt'
    },
    description: {
      en: 'Company celebrates significant environmental achievement as part of ongoing commitment to circular economy principles.',
      hu: 'A vállalat jelentős környezetvédelmi eredményt ünnepel a körforgásos gazdasági elvek iránti folyamatos elkötelezettség részeként.',
      de: 'Unternehmen feiert bedeutende Umweltleistung als Teil des kontinuierlichen Engagements für Kreislaufwirtschaftsprinzipien.'
    },
    content: {
      en: `<p>Flair Plastic proudly announces reaching a significant environmental milestone: processing over one million tons of recycled plastic materials since our founding. This achievement underscores our commitment to circular economy principles and sustainable manufacturing practices.</p>
      
      <h2>Milestone Significance</h2>
      <p>This achievement represents the equivalent of:</p>
      <ul>
        <li>Diverting 50 million plastic bottles from landfills</li>
        <li>Reducing CO2 emissions by approximately 300,000 tons</li>
        <li>Saving energy equivalent to powering 25,000 homes for one year</li>
      </ul>
      
      <h2>Recycling Innovation</h2>
      <p>Our success in reaching this milestone is attributed to our advanced recycling technologies and partnerships with collection networks across Europe.</p>
      
      <h2>Community Impact</h2>
      <p>This achievement was made possible through collaborations with over 500 municipalities and waste management companies across our operational regions.</p>
      
      <h2>Future Goals</h2>
      <p>We are committed to doubling this achievement by 2027, with plans to process two million tons of recycled materials as part of our expanded operations.</p>`,
      
      hu: `<p>A Flair Plastic büszkén jelenti be egy jelentős környezetvédelmi mérföldkő elérését: alapításunk óta több mint egymillió tonna újrahasznosított műanyag anyag feldolgozása. Ez az eredmény hangsúlyozza elkötelezettségünket a körforgásos gazdasági elvek és a fenntartható gyártási gyakorlatok iránt.</p>
      
      <h2>Mérföldkő jelentősége</h2>
      <p>Ez az eredmény a következőknek felel meg:</p>
      <ul>
        <li>50 millió műanyag palack elterelése a hulladéklerakókból</li>
        <li>CO2-kibocsátás körülbelül 300.000 tonnával való csökkentése</li>
        <li>Energia megtakarítása, ami 25.000 otthon egy évig tartó áramellátásának felel meg</li>
      </ul>
      
      <h2>Újrahasznosítási innováció</h2>
      <p>Sikerünk e mérföldkő elérésében fejlett újrahasznosítási technológiáinknak és az egész Európában működő gyűjtési hálózatokkal való partnerségeinknek köszönhető.</p>
      
      <h2>Közösségi hatás</h2>
      <p>Ez az eredmény több mint 500 önkormányzattal és hulladékgazdálkodási vállalattal való együttműködésen keresztül vált lehetővé működési régióinkban.</p>
      
      <h2>Jövőbeli célok</h2>
      <p>Elkötelezettek vagyunk ezen eredmény megduplázása mellett 2027-ig, tervezzük kétmillió tonna újrahasznosított anyag feldolgozását bővített műveleteink részeként.</p>`,
      
      de: `<p>Flair Plastic gibt stolz bekannt, einen bedeutenden Umweltmeilenstein erreicht zu haben: die Verarbeitung von über einer Million Tonnen recycelter Kunststoffmaterialien seit unserer Gründung. Diese Leistung unterstreicht unser Engagement für Kreislaufwirtschaftsprinzipien und nachhaltige Fertigungspraktiken.</p>
      
      <h2>Bedeutung des Meilensteins</h2>
      <p>Diese Leistung entspricht:</p>
      <ul>
        <li>Umleitung von 50 Millionen Plastikflaschen von Deponien</li>
        <li>Reduzierung der CO2-Emissionen um etwa 300.000 Tonnen</li>
        <li>Energieeinsparung entsprechend der Stromversorgung von 25.000 Haushalten für ein Jahr</li>
      </ul>
      
      <h2>Recycling-Innovation</h2>
      <p>Unser Erfolg beim Erreichen dieses Meilensteins ist unseren fortschrittlichen Recycling-Technologien und Partnerschaften mit Sammelnetzwerken in ganz Europa zuzuschreiben.</p>
      
      <h2>Gemeinschaftseinfluss</h2>
      <p>Diese Leistung wurde durch Zusammenarbeiten mit über 500 Gemeinden und Abfallmanagement-Unternehmen in unseren Betriebsregionen ermöglicht.</p>
      
      <h2>Zukünftige Ziele</h2>
      <p>Wir sind bestrebt, diese Leistung bis 2027 zu verdoppeln, mit Plänen, zwei Millionen Tonnen recycelter Materialien als Teil unserer erweiterten Operationen zu verarbeiten.</p>`
    },
    image: '/images/news/recycling-milestone.jpg',
    thumbnailImage: '/images/news/recycling-milestone-thumb.jpg',
    date: '2024-02-20',
    author: newsAuthors[1], // Maria Garcia
    readTime: 3,
    tags: ['recycling', 'milestone', 'environmental', 'circular-economy'],
    featured: true,
    newsCategory: 'company-news',
    source: 'Flair Plastic Sustainability Report',
    location: 'Budapest, Hungary'
  }
];

// Standardized helper functions
export const newsHelpers = {
  getAll: (): NewsArticle[] => newsItems,
  getFeatured: (): NewsArticle[] => newsItems.filter(article => article.featured),
  getRecent: (limit: number = 5): NewsArticle[] => 
    [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit),
  getByTag: (tag: string): NewsArticle[] => newsItems.filter(article => article.tags.includes(tag)),
  getById: (id: string): NewsArticle | undefined => newsItems.find(article => article.id === id),
  getBySlug: (slug: string): NewsArticle | undefined => newsItems.find(article => article.slug === slug),
  getRelated: (articleId: string, limit: number = 3): NewsArticle[] => {
    const currentArticle = newsItems.find(article => article.id === articleId);
    if (!currentArticle) return [];

    return newsItems
      .filter(article => 
        article.id !== articleId && 
        article.tags.some(tag => currentArticle.tags.includes(tag))
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  },
  getAllTags: (): string[] => {
    const allTags = new Set<string>();
    newsItems.forEach(article => article.tags.forEach(tag => allTags.add(tag)));
    return Array.from(allTags).sort();
  },
  // News-specific helpers
  getByCategory: (newsCategory: NewsCategory): NewsArticle[] => 
    newsItems.filter(article => article.newsCategory === newsCategory)
};

// Individual function exports for direct access
export const getNewsArticles = newsHelpers.getAll;
export const getFeaturedNews = newsHelpers.getFeatured;
export const getRecentNews = newsHelpers.getRecent;
export const getNewsByTag = newsHelpers.getByTag;
export const getNewsById = newsHelpers.getById;
export const getNewsBySlug = newsHelpers.getBySlug;
export const getRelatedNews = newsHelpers.getRelated;
export const getAllNewsTags = newsHelpers.getAllTags;
export const getNewsByCategory = newsHelpers.getByCategory;

// Legacy exports for backward compatibility
export const authors = newsAuthors;
export const newsArticles = newsItems;