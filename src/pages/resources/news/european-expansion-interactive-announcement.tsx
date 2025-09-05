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
  MapPin, 
  Building2, 
  Zap, 
  Leaf,
  Play,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

// Interactive components (placeholders for now)
const InteractiveTimeline = () => {
  const { language } = useLanguage();
  
  const milestones = [
    {
      id: 1,
      date: '2024-Q2',
      title: {
        en: 'Project Announcement',
        hu: 'Projekt bejelentése',
        de: 'Projektankündigung'
      },
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-Q3',
      title: {
        en: 'Site Preparation',
        hu: 'Terület előkészítése',
        de: 'Standortvorbereitung'
      },
      status: 'in-progress'
    },
    {
      id: 3,
      date: '2024-Q4',
      title: {
        en: 'Construction Begin',
        hu: 'Építkezés kezdete',
        de: 'Baubeginn'
      },
      status: 'upcoming'
    },
    {
      id: 4,
      date: '2025-Q2',
      title: {
        en: 'Facility Completion',
        hu: 'Létesítmény befejezése',
        de: 'Anlagenvollendung'
      },
      status: 'upcoming'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 my-8">
      <h3 className="text-xl font-bold mb-6 text-center">
        {language === 'en' ? 'Project Timeline' : 
         language === 'hu' ? 'Projekt ütemterv' : 'Projekt-Zeitplan'}
      </h3>
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center p-4 rounded-lg border-l-4 ${
              milestone.status === 'completed' ? 'border-green-500 bg-green-50' :
              milestone.status === 'in-progress' ? 'border-blue-500 bg-blue-50' :
              'border-gray-300 bg-gray-50'
            }`}
          >
            <div className="flex-1">
              <div className="font-semibold">{milestone.title[language]}</div>
              <div className="text-sm text-gray-600">{milestone.date}</div>
            </div>
            <Badge variant={
              milestone.status === 'completed' ? 'default' :
              milestone.status === 'in-progress' ? 'secondary' : 'outline'
            }>
              {milestone.status === 'completed' ? '✓' :
               milestone.status === 'in-progress' ? '⧗' : '○'}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const VirtualTourSection = () => {
  const { language } = useLanguage();
  
  return (
    <Card className="my-8">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">
            {language === 'en' ? 'Virtual Facility Tour' :
             language === 'hu' ? 'Virtuális létesítménybejárás' :
             'Virtuelle Anlagentour'}
          </h3>
          <Play className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center mb-4">
          <div className="text-center">
            <Play className="h-16 w-16 text-blue-600 mx-auto mb-2" />
            <p className="text-gray-700">
              {language === 'en' ? 'Interactive 3D Tour' :
               language === 'hu' ? 'Interaktív 3D túra' :
               'Interaktive 3D-Tour'}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: <Building2 className="h-6 w-6" />,
              title: { en: 'Munich Facility', hu: 'Müncheni létesítmény', de: 'München-Anlage' },
              area: '15,000 m²'
            },
            {
              icon: <Building2 className="h-6 w-6" />,
              title: { en: 'Milan Facility', hu: 'Milánói létesítmény', de: 'Mailand-Anlage' },
              area: '12,000 m²'
            },
            {
              icon: <Building2 className="h-6 w-6" />,
              title: { en: 'Lyon Facility', hu: 'Lyoni létesítmény', de: 'Lyon-Anlage' },
              area: '10,000 m²'
            }
          ].map((facility, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                {facility.icon}
                <span className="ml-2 font-semibold">{facility.title[language]}</span>
              </div>
              <p className="text-sm text-gray-600">{facility.area}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SustainabilityFeatures = () => {
  const { language } = useLanguage();
  
  const features = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: { en: 'Solar Power', hu: 'Napenergia', de: 'Solarstrom' },
      description: { 
        en: '100% renewable energy', 
        hu: '100% megújuló energia', 
        de: '100% erneuerbare Energie' 
      }
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: { en: 'Energy Efficiency', hu: 'Energiahatékonyság', de: 'Energieeffizienz' },
      description: { 
        en: '40% reduction in consumption', 
        hu: '40% fogyasztáscsökkentés', 
        de: '40% Verbrauchsreduzierung' 
      }
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: { en: 'Water Management', hu: 'Vízgazdálkodás', de: 'Wassermanagement' },
      description: { 
        en: 'Rainwater harvesting system', 
        hu: 'Esővíz-gyűjtő rendszer', 
        de: 'Regenwassersammelsystem' 
      }
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-6">
        {language === 'en' ? 'Sustainability Features' :
         language === 'hu' ? 'Fenntarthatósági jellemzők' :
         'Nachhaltigkeitsmerkmale'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 bg-green-50 rounded-lg border border-green-200"
          >
            <div className="flex justify-center mb-4 text-green-600">
              {feature.icon}
            </div>
            <h4 className="font-semibold mb-2">{feature.title[language]}</h4>
            <p className="text-sm text-gray-600">{feature.description[language]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const EuropeanExpansionAnnouncement = () => {
  const { language, translations } = useLanguage();
  
  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Article data
  const article = {
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
    author: {
      name: 'John Smith',
      role: { en: 'CEO', hu: 'Vezérigazgató', de: 'Geschäftsführer' }
    },
    date: '2024-05-10',
    readTime: 8,
    tags: ['company-news', 'expansion', 'interactive-tour', 'virtual-reality', 'timeline', 'sustainability']
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
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Munich, Germany</span>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="aspect-video relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">
                    {language === 'en' ? 'European Expansion Visualization' :
                     language === 'hu' ? 'Európai bővítés vizualizáció' :
                     'Europäische Expansions-Visualisierung'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-lg leading-relaxed mb-6">
              {language === 'en' ? 
                "We're excited to announce our largest expansion to date with a €50 million investment in three new European facilities, featuring cutting-edge technology and sustainable manufacturing processes." :
              language === 'hu' ?
                "Örömmel jelentjük be eddigi legnagyobb bővítésünket, 50 millió eurós befektetéssel három új európai létesítménybe, amelyek élvonalbeli technológiát és fenntartható gyártási folyamatokat tartalmaznak." :
                "Wir freuen uns, unsere bisher größte Expansion mit einer 50-Millionen-Euro-Investition in drei neue europäische Anlagen bekannt zu geben, die modernste Technologie und nachhaltige Fertigungsprozesse bieten."
              }
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              {language === 'en' ? 'Expansion Overview' :
               language === 'hu' ? 'Bővítés áttekintése' :
               'Expansionsübersicht'}
            </h2>
            <p className="mb-6">
              {language === 'en' ?
                "The expansion includes state-of-the-art facilities in Munich (Germany), Milan (Italy), and Lyon (France), each designed to serve regional markets while maintaining our commitment to environmental responsibility." :
              language === 'hu' ?
                "A bővítés korszerű létesítményeket tartalmaz Münchenben (Németország), Milánóban (Olaszország) és Lyonban (Franciaország), amelyek mindegyike regionális piacok kiszolgálására lett tervezve, miközben fenntartjuk elkötelezettségünket a környezeti felelősség iránt." :
                "Die Expansion umfasst hochmoderne Anlagen in München (Deutschland), Mailand (Italien) und Lyon (Frankreich), die jeweils zur Bedienung regionaler Märkte konzipiert sind und gleichzeitig unser Engagement für Umweltverantwortung aufrechterhalten."
              }
            </p>
          </motion.div>

          {/* Interactive Components */}
          <InteractiveTimeline />
          <VirtualTourSection />
          <SustainabilityFeatures />

          {/* Investment Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 my-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {language === 'en' ? 'Investment Breakdown' :
               language === 'hu' ? 'Befektetés részletezése' :
               'Investitionsaufschlüsselung'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">€50M</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Total Investment' :
                   language === 'hu' ? 'Teljes befektetés' :
                   'Gesamtinvestition'}
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'New Facilities' :
                   language === 'hu' ? 'Új létesítmény' :
                   'Neue Anlagen'}
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'New Jobs' :
                   language === 'hu' ? 'Új munkahely' :
                   'Neue Arbeitsplätze'}
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
              {language === 'en' ? 'Stay Updated' :
               language === 'hu' ? 'Maradjon naprakész' :
               'Bleiben Sie informiert'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'en' ? 'Follow our expansion progress and get exclusive updates.' :
               language === 'hu' ? 'Kövesse bővítési folyamatunkat és kapjon exkluzív frissítéseket.' :
               'Verfolgen Sie unseren Expansionsfortschritt und erhalten Sie exklusive Updates.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                {language === 'en' ? 'Subscribe to Updates' :
                 language === 'hu' ? 'Feliratkozás frissítésekre' :
                 'Updates abonnieren'}
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/resources/news" className="flex items-center">
                  {language === 'en' ? 'View More News' :
                   language === 'hu' ? 'További hírek' :
                   'Weitere Nachrichten'}
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

export default EuropeanExpansionAnnouncement;
