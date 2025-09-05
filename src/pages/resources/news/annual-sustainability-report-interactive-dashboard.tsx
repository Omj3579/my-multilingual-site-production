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
  BarChart3,
  TrendingDown,
  Leaf,
  Recycle,
  ChevronRight,
  Download,
  ExternalLink,
  Zap,
  Droplets,
  Target
} from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

// Interactive Dashboard Component
const SustainabilityDashboard = () => {
  const { language } = useLanguage();
  
  const metrics = [
    {
      id: 'carbon',
      icon: <Leaf className="h-6 w-6" />,
      title: { en: 'Carbon Reduction', hu: 'Szén-dioxid csökkentés', de: 'CO2-Reduzierung' },
      current: 65,
      target: 80,
      unit: '%',
      color: 'green'
    },
    {
      id: 'waste',
      icon: <Recycle className="h-6 w-6" />,
      title: { en: 'Waste Reduction', hu: 'Hulladékcsökkentés', de: 'Abfallreduzierung' },
      current: 72,
      target: 85,
      unit: '%',
      color: 'blue'
    },
    {
      id: 'energy',
      icon: <Zap className="h-6 w-6" />,
      title: { en: 'Energy Efficiency', hu: 'Energiahatékonyság', de: 'Energieeffizienz' },
      current: 58,
      target: 75,
      unit: '%',
      color: 'orange'
    },
    {
      id: 'water',
      icon: <Droplets className="h-6 w-6" />,
      title: { en: 'Water Conservation', hu: 'Vízmegőrzés', de: 'Wasserschutz' },
      current: 83,
      target: 90,
      unit: '%',
      color: 'cyan'
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-6">
        {language === 'en' ? 'Interactive Sustainability Dashboard' :
         language === 'hu' ? 'Interaktív fenntarthatósági műszerfal' :
         'Interaktives Nachhaltigkeits-Dashboard'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base">
                  <div className={`mr-3 p-2 rounded-lg bg-${metric.color}-100 text-${metric.color}-600`}>
                    {metric.icon}
                  </div>
                  {metric.title[language]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between mb-2">
                  <span className="text-2xl font-bold">
                    {metric.current}{metric.unit}
                  </span>
                  <span className="text-sm text-gray-500">
                    {language === 'en' ? 'Target' : language === 'hu' ? 'Cél' : 'Ziel'}: {metric.target}{metric.unit}
                  </span>
                </div>
                <Progress 
                  value={(metric.current / metric.target) * 100} 
                  className="h-3"
                />
                <div className="mt-2 text-sm text-gray-600">
                  {Math.round((metric.current / metric.target) * 100)}% {language === 'en' ? 'of target achieved' : 
                   language === 'hu' ? 'cél teljesítve' : 'des Ziels erreicht'}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Impact Visualization Component
const ImpactVisualization = () => {
  const { language } = useLanguage();
  
  const impacts = [
    {
      metric: { en: 'CO2 Emissions Saved', hu: 'CO2 kibocsátás megtakarítva', de: 'CO2-Emissionen eingespart' },
      value: '2,450',
      unit: { en: 'tons/year', hu: 'tonna/év', de: 'Tonnen/Jahr' },
      icon: <Leaf className="h-8 w-8 text-green-600" />
    },
    {
      metric: { en: 'Plastic Waste Recycled', hu: 'Műanyag hulladék újrahasznosítva', de: 'Kunststoffabfall recycelt' },
      value: '890',
      unit: { en: 'tons/year', hu: 'tonna/év', de: 'Tonnen/Jahr' },
      icon: <Recycle className="h-8 w-8 text-blue-600" />
    },
    {
      metric: { en: 'Energy Consumption Reduced', hu: 'Energiafogyasztás csökkentve', de: 'Energieverbrauch reduziert' },
      value: '35',
      unit: '%',
      icon: <Zap className="h-8 w-8 text-orange-600" />
    },
    {
      metric: { en: 'Water Usage Optimized', hu: 'Vízhasználat optimalizálva', de: 'Wasserverbrauch optimiert' },
      value: '28',
      unit: '%',
      icon: <Droplets className="h-8 w-8 text-cyan-600" />
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-6">
        {language === 'en' ? '2024 Environmental Impact' :
         language === 'hu' ? '2024 környezeti hatás' :
         '2024 Umweltauswirkungen'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-center mb-4">
              {impact.icon}
            </div>
            <div className="text-3xl font-bold mb-2">
              {impact.value}
              <span className="text-lg text-gray-600 ml-1">{impact.unit[language] || impact.unit}</span>
            </div>
            <div className="text-sm text-gray-600">
              {impact.metric[language]}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Goals and Targets Section
const SustainabilityGoals = () => {
  const { language } = useLanguage();
  
  const goals = [
    {
      year: '2025',
      title: { en: 'Carbon Neutral Operations', hu: 'Karbonsemleges műveletek', de: 'CO2-neutrale Operationen' },
      progress: 65,
      status: 'in-progress'
    },
    {
      year: '2027',
      title: { en: '100% Renewable Energy', hu: '100% megújuló energia', de: '100% erneuerbare Energie' },
      progress: 42,
      status: 'in-progress'
    },
    {
      year: '2030',
      title: { en: 'Zero Waste to Landfill', hu: 'Nulla hulladék lerakóba', de: 'Null Abfall auf Deponien' },
      progress: 78,
      status: 'ahead'
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-6">
        {language === 'en' ? 'Sustainability Roadmap' :
         language === 'hu' ? 'Fenntarthatósági ütemterv' :
         'Nachhaltigkeits-Roadmap'}
      </h3>
      
      <div className="space-y-6">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-lg border-l-4 ${
              goal.status === 'ahead' ? 'border-green-500 bg-green-50' :
              'border-blue-500 bg-blue-50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">
                  {language === 'en' ? 'Target Year' : language === 'hu' ? 'Célév' : 'Zieljahr'}: {goal.year}
                </div>
                <h4 className="text-lg font-semibold">{goal.title[language]}</h4>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{goal.progress}%</div>
                <Badge variant={goal.status === 'ahead' ? 'default' : 'secondary'}>
                  {goal.status === 'ahead' ? 
                    (language === 'en' ? 'Ahead of Schedule' : language === 'hu' ? 'Ütemterv előtt' : 'Vor dem Zeitplan') :
                    (language === 'en' ? 'On Track' : language === 'hu' ? 'Menetrendben' : 'Im Zeitplan')
                  }
                </Badge>
              </div>
            </div>
            <Progress value={goal.progress} className="h-3" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SustainabilityReportDashboard = () => {
  const { language, translations } = useLanguage();
  
  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Article data
  const article = {
    title: {
      en: 'Annual Sustainability Report: Interactive Data Dashboard',
      hu: 'Éves fenntarthatósági jelentés: Interaktív adatműszerfal',
      de: 'Jährlicher Nachhaltigkeitsbericht: Interaktives Daten-Dashboard'
    },
    description: {
      en: 'Explore our comprehensive sustainability achievements through interactive data visualizations, real-time metrics tracking, and detailed environmental impact analysis.',
      hu: 'Fedezze fel átfogó fenntarthatósági eredményeinket interaktív adatvizualizációkon, valós idejű metrika követésen és részletes környezeti hatáselemzésen keresztül.',
      de: 'Erkunden Sie unsere umfassenden Nachhaltigkeitserfolge durch interaktive Datenvisualisierungen, Echtzeit-Metrik-Verfolgung und detaillierte Umweltauswirkungsanalyse.'
    },
    author: {
      name: 'Dr. Sarah Green',
      role: { en: 'Sustainability Director', hu: 'Fenntarthatósági igazgató', de: 'Nachhaltigkeitsdirektorin' }
    },
    date: '2024-03-15',
    readTime: 12,
    tags: ['sustainability', 'annual-report', 'data-dashboard', 'environmental-impact', 'transparency']
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
        <article className="max-w-6xl mx-auto">
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
                  <BarChart3 className="h-4 w-4 mr-2" />
                  <span>
                    {language === 'en' ? 'Interactive Report' :
                     language === 'hu' ? 'Interaktív jelentés' :
                     'Interaktiver Bericht'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Download Full Report' :
                   language === 'hu' ? 'Teljes jelentés letöltése' :
                   'Vollständigen Bericht herunterladen'}
                </Button>
                <Button variant="outline" size="lg">
                  {language === 'en' ? 'View Previous Reports' :
                   language === 'hu' ? 'Korábbi jelentések' :
                   'Frühere Berichte anzeigen'}
                </Button>
              </div>
            </motion.div>
          </header>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'en' ? '2024 Sustainability at a Glance' :
                     language === 'hu' ? '2024 fenntarthatóság egy pillantásra' :
                     '2024 Nachhaltigkeit auf einen Blick'}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">65%</div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'Carbon Reduction' : language === 'hu' ? 'CO2 csökkentés' : 'CO2-Reduzierung'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">890</div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'Tons Recycled' : language === 'hu' ? 'Tonna újrahasznosítva' : 'Tonnen recycelt'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">35%</div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'Energy Saved' : language === 'hu' ? 'Energia megtakarítva' : 'Energie gespart'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600">100%</div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'Renewable Goal' : language === 'hu' ? 'Megújuló cél' : 'Erneuerbare Ziele'}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interactive Components */}
          <SustainabilityDashboard />
          <ImpactVisualization />
          <SustainabilityGoals />

          {/* Key Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="my-12"
          >
            <h3 className="text-2xl font-bold mb-6">
              {language === 'en' ? 'Key Achievements 2024' :
               language === 'hu' ? 'Kulcsfontosságú eredmények 2024' :
               'Wichtige Erfolge 2024'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: { en: 'ISO 14001 Certification', hu: 'ISO 14001 tanúsítvány', de: 'ISO 14001 Zertifizierung' },
                  description: { 
                    en: 'Achieved environmental management system certification', 
                    hu: 'Környezetirányítási rendszer tanúsítvány megszerzése',
                    de: 'Umweltmanagementsystem-Zertifizierung erreicht'
                  },
                  icon: <Target className="h-6 w-6 text-green-600" />
                },
                {
                  title: { en: 'Circular Economy Initiative', hu: 'Körforgásos gazdaság kezdeményezés', de: 'Kreislaufwirtschaftsinitiative' },
                  description: { 
                    en: 'Launched comprehensive recycling program', 
                    hu: 'Átfogó újrahasznosítási program indítása',
                    de: 'Umfassendes Recycling-Programm gestartet'
                  },
                  icon: <Recycle className="h-6 w-6 text-blue-600" />
                },
                {
                  title: { en: 'Green Energy Transition', hu: 'Zöld energia átmenet', de: 'Grüne Energiewende' },
                  description: { 
                    en: 'Installed solar panels across all facilities', 
                    hu: 'Napelemek telepítése minden létesítményben',
                    de: 'Solarpanels in allen Anlagen installiert'
                  },
                  icon: <Zap className="h-6 w-6 text-orange-600" />
                },
                {
                  title: { en: 'Water Conservation', hu: 'Vízmegőrzés', de: 'Wasserschutz' },
                  description: { 
                    en: 'Implemented advanced water recycling systems', 
                    hu: 'Fejlett vízújrahasznosító rendszerek bevezetése',
                    de: 'Fortschrittliche Wasserrecycling-Systeme implementiert'
                  },
                  icon: <Droplets className="h-6 w-6 text-cyan-600" />
                }
              ].map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-4">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{achievement.title[language]}</h4>
                        <p className="text-gray-600 text-sm">{achievement.description[language]}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Join Our Sustainability Journey' :
               language === 'hu' ? 'Csatlakozzon fenntarthatósági utunkhoz' :
               'Begleiten Sie unsere Nachhaltigkeitsreise'}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === 'en' ? 'Partner with us to create a more sustainable future through innovative plastic manufacturing solutions.' :
               language === 'hu' ? 'Partnerségben velünk fenntarthatóbb jövőt hozhatunk létre innovatív műanyaggyártási megoldásokkal.' :
               'Werden Sie unser Partner für eine nachhaltigere Zukunft durch innovative Kunststoff-Fertigungslösungen.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                {language === 'en' ? 'Contact Our Sustainability Team' :
                 language === 'hu' ? 'Kapcsolat fenntarthatósági csapatunkkal' :
                 'Kontakt zum Nachhaltigkeitsteam'}
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/sustainability" className="flex items-center">
                  {language === 'en' ? 'Learn More About Our Commitments' :
                   language === 'hu' ? 'Tudjon meg többet elkötelezettségünkről' :
                   'Mehr über unsere Verpflichtungen'}
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

export default SustainabilityReportDashboard;
