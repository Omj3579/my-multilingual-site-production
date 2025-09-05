import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Award,
  Trophy,
  Star,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  Users,
  Globe
} from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

// Award Showcase Component
const AwardShowcase = () => {
  const { language } = useLanguage();
  
  const award = {
    name: { 
      en: 'European Innovation Excellence Award 2024', 
      hu: 'Európai Innovációs Kiválósági Díj 2024', 
      de: 'Europäischer Innovationsexzellenz-Award 2024' 
    },
    category: { 
      en: 'Sustainable Manufacturing', 
      hu: 'Fenntartható gyártás', 
      de: 'Nachhaltige Fertigung' 
    },
    organization: 'European Innovation Council',
    date: '2024-11-15'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="my-8"
    >
      <Card className="overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
        <CardContent className="p-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6"
            >
              <Trophy className="h-10 w-10 text-yellow-600" />
            </motion.div>
            
            <h2 className="text-2xl font-bold mb-4">{award.name[language]}</h2>
            <p className="text-lg text-gray-600 mb-2">{award.category[language]}</p>
            <p className="text-sm text-gray-500 mb-6">{award.organization}</p>
            
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>November 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <span>Brussels, Belgium</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Innovation Highlights
const InnovationHighlights = () => {
  const { language } = useLanguage();
  
  const innovations = [
    {
      title: { 
        en: 'Bio-Plastic Revolution', 
        hu: 'Bio-műanyag forradalom', 
        de: 'Bio-Kunststoff Revolution' 
      },
      description: { 
        en: 'Breakthrough in biodegradable plastic compounds', 
        hu: 'Áttörés a biológiailag lebomló műanyag vegyületekben',
        de: 'Durchbruch bei biologisch abbaubaren Kunststoffverbindungen'
      },
      impact: '85%',
      metric: { en: 'faster decomposition', hu: 'gyorsabb lebomlás', de: 'schnellerer Abbau' }
    },
    {
      title: { 
        en: 'AI-Powered Quality Control', 
        hu: 'AI-vezérelt minőségellenőrzés', 
        de: 'KI-gesteuerte Qualitätskontrolle' 
      },
      description: { 
        en: 'Machine learning optimization of manufacturing processes', 
        hu: 'Gépi tanulás alapú gyártási folyamat optimalizálás',
        de: 'Maschinelles Lernen zur Optimierung von Fertigungsprozessen'
      },
      impact: '99.7%',
      metric: { en: 'quality accuracy', hu: 'minőségi pontosság', de: 'Qualitätsgenauigkeit' }
    },
    {
      title: { 
        en: 'Circular Economy Integration', 
        hu: 'Körforgásos gazdaság integráció', 
        de: 'Kreislaufwirtschafts-Integration' 
      },
      description: { 
        en: 'Closed-loop recycling system implementation', 
        hu: 'Zárt hurkú újrahasznosítási rendszer megvalósítása',
        de: 'Implementierung eines geschlossenen Recycling-Systems'
      },
      impact: '75%',
      metric: { en: 'waste reduction', hu: 'hulladékcsökkentés', de: 'Abfallreduzierung' }
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-6">
        {language === 'en' ? 'Award-Winning Innovations' :
         language === 'hu' ? 'Díjnyertes innovációk' :
         'Preisgekrönte Innovationen'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {innovations.map((innovation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600 mr-2" />
                  <CardTitle className="text-base">{innovation.title[language]}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">{innovation.description[language]}</p>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{innovation.impact}</div>
                  <div className="text-xs text-gray-500">{innovation.metric[language]}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Impact Timeline
const ImpactTimeline = () => {
  const { language } = useLanguage();
  
  const milestones = [
    {
      year: '2022',
      event: { 
        en: 'Research & Development Phase', 
        hu: 'Kutatás és fejlesztési fázis', 
        de: 'Forschungs- und Entwicklungsphase' 
      }
    },
    {
      year: '2023',
      event: { 
        en: 'Pilot Production Testing', 
        hu: 'Pilot gyártási tesztelés', 
        de: 'Pilotproduktionstest' 
      }
    },
    {
      year: '2024',
      event: { 
        en: 'Full Scale Implementation', 
        hu: 'Teljes léptékű megvalósítás', 
        de: 'Vollständige Implementierung' 
      }
    },
    {
      year: '2024',
      event: { 
        en: 'European Innovation Award', 
        hu: 'Európai Innovációs Díj', 
        de: 'Europäischer Innovationspreis' 
      }
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-6">
        {language === 'en' ? 'Innovation Journey' :
         language === 'hu' ? 'Innovációs út' :
         'Innovationsreise'}
      </h3>
      
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center p-4 bg-white rounded-lg border shadow-sm"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">{milestone.year}</span>
            </div>
            <div className="flex-1">
              <p className="font-medium">{milestone.event[language]}</p>
            </div>
            {index === milestones.length - 1 && (
              <Award className="h-6 w-6 text-yellow-600" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const InnovationAwardShowcase = () => {
  const { language, translations } = useLanguage();
  
  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Article data
  const article = {
    title: {
      en: 'European Innovation Excellence Award: Interactive Recognition Showcase',
      hu: 'Európai Innovációs Kiválósági Díj: Interaktív elismerés bemutató',
      de: 'Europäischer Innovationsexzellenz-Award: Interaktive Anerkennungs-Präsentation'
    },
    description: {
      en: 'Celebrate our achievement of the prestigious European Innovation Excellence Award through an interactive showcase featuring our breakthrough technologies and sustainable manufacturing innovations.',
      hu: 'Ünnepeljük a tekintélyes Európai Innovációs Kiválósági Díj elnyerését interaktív bemutatón keresztül, amely áttörő technológiáinkat és fenntartható gyártási innovációinkat mutatja be.',
      de: 'Feiern Sie unseren Erfolg beim prestigeträchtigen Europäischen Innovationsexzellenz-Award durch eine interaktive Präsentation unserer bahnbrechenden Technologien und nachhaltigen Fertigungsinnovationen.'
    },
    author: {
      name: 'Dr. Anna Kovács',
      role: { en: 'Chief Innovation Officer', hu: 'Innovációs vezető', de: 'Chief Innovation Officer' }
    },
    date: '2024-11-20',
    readTime: 10,
    tags: ['innovation-award', 'recognition', 'breakthrough-technology', 'sustainability', 'excellence']
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      language === 'en' ? 'en-US' : language === 'hu' ? 'hu-HU' : 'de-DE',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
  };

  return (
    <>
      <Head>
        <title>{article.title[language]} | Flair Plastic</title>
        <meta name="description" content={article.description[language]} />
        <meta name="keywords" content={article.tags.join(', ')} />
      </Head>

      <ResourcesLayout>
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/resources" className="hover:text-gray-900">{t('resources.title') || 'Resources'}</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/resources/news" className="hover:text-gray-900">{t('resources.news') || 'News'}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{t('resources.currentArticle') || 'Current Article'}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag.replace('-', ' ')}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title[language]}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {article.description[language]}
              </p>
              
              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{article.author.name}</span>
                  <span className="mx-2">•</span>
                  <span>{article.author.role[language]}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{article.readTime} {t('common.minRead') || 'min read'}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  <span>
                    {language === 'en' ? 'Award Winner' :
                     language === 'hu' ? 'Díjnyertes' :
                     'Preisträger'}
                  </span>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Award Showcase */}
          <AwardShowcase />

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-lg leading-relaxed mb-6">
              {language === 'en' ? 
                "We are thrilled to announce that Flair Plastic has been honored with the prestigious European Innovation Excellence Award 2024 in the Sustainable Manufacturing category. This recognition celebrates our commitment to pioneering breakthrough technologies that revolutionize plastic manufacturing while prioritizing environmental responsibility." :
              language === 'hu' ?
                "Örömmel jelentjük be, hogy a Flair Plastic elnyerte a tekintélyes Európai Innovációs Kiválósági Díj 2024-et a Fenntartható Gyártás kategóriában. Ez az elismerés ünnepli elkötelezettségünket az áttörő technológiák úttörő fejlesztése iránt, amelyek forradalmasítják a műanyaggyártást, miközben prioritásként kezelik a környezeti felelősséget." :
                "Wir freuen uns, bekannt zu geben, dass Flair Plastic mit dem prestigeträchtigen Europäischen Innovationsexzellenz-Award 2024 in der Kategorie Nachhaltige Fertigung ausgezeichnet wurde. Diese Anerkennung würdigt unser Engagement für wegweisende Durchbruchstechnologien, die die Kunststoffherstellung revolutionieren und gleichzeitig Umweltverantwortung priorisieren."
              }
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              {language === 'en' ? 'Recognition of Excellence' :
               language === 'hu' ? 'Kiválóság elismerése' :
               'Anerkennung der Exzellenz'}
            </h2>
            <p className="mb-6">
              {language === 'en' ?
                "The European Innovation Council recognized our groundbreaking work in developing bio-based plastic materials and implementing AI-driven quality control systems that have set new industry standards for both performance and sustainability." :
              language === 'hu' ?
                "Az Európai Innovációs Tanács elismerte úttörő munkánkat a bio-alapú műanyag anyagok fejlesztésében és az AI-vezérelt minőségellenőrző rendszerek megvalósításában, amelyek új iparági szabványokat állítottak fel mind a teljesítmény, mind a fenntarthatóság terén." :
                "Der Europäische Innovationsrat erkannte unsere bahnbrechende Arbeit bei der Entwicklung biobasierter Kunststoffmaterialien und der Implementierung KI-gestützter Qualitätskontrollsysteme an, die neue Industriestandards für Leistung und Nachhaltigkeit gesetzt haben."
              }
            </p>
          </motion.div>

          {/* Interactive Components */}
          <InnovationHighlights />
          <ImpactTimeline />

          {/* Award Ceremony Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 my-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {language === 'en' ? 'Award Ceremony Highlights' :
               language === 'hu' ? 'Díjátadó ceremónia highlights' :
               'Preisverleihungs-Highlights'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">200+</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Industry Leaders' :
                   language === 'hu' ? 'Iparági vezető' :
                   'Branchenführer'}
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">25</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Countries Represented' :
                   language === 'hu' ? 'Képviselt ország' :
                   'Vertretene Länder'}
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">15</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Award Categories' :
                   language === 'hu' ? 'Díj kategória' :
                   'Preiskategorien'}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center py-12"
          >
            <h3 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Experience Our Innovations' :
               language === 'hu' ? 'Tapasztalja meg innovációinkat' :
               'Erleben Sie unsere Innovationen'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'en' ? 'Discover how our award-winning technologies can benefit your projects.' :
               language === 'hu' ? 'Fedezze fel, hogyan segíthetik díjnyertes technológiáink projektjeit.' :
               'Entdecken Sie, wie unsere preisgekrönten Technologien Ihren Projekten zugutekommen können.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                {language === 'en' ? 'Schedule a Consultation' :
                 language === 'hu' ? 'Konzultáció ütemezése' :
                 'Beratung planen'}
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/capabilities" className="flex items-center">
                  {language === 'en' ? 'Explore Our Technologies' :
                   language === 'hu' ? 'Fedezze fel technológiáinkat' :
                   'Unsere Technologien erkunden'}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Back to News */}
          <div className="pt-8 border-t">
            <Link 
              href="/resources/news" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Back to News' :
               language === 'hu' ? 'Vissza a hírekhez' :
               'Zurück zu den Nachrichten'}
            </Link>
          </div>
        </article>
      </ResourcesLayout>
    </>
  );
};

export default InnovationAwardShowcase;
