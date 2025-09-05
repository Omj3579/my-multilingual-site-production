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
  Recycle,
  Target,
  CheckCircle,
  ChevronRight,
  Download,
  Calculator,
  BarChart3,
  TrendingUp,
  FileText,
  Lightbulb
} from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

// Interactive ROI Calculator
const ROICalculator = () => {
  const { language } = useLanguage();
  const [values, setValues] = useState({
    materialCosts: 100000,
    wasteReduction: 60,
    energySavings: 35
  });

  const calculateROI = () => {
    const materialSavings = (values.materialCosts * values.wasteReduction) / 100;
    const energySavings = (values.materialCosts * 0.3 * values.energySavings) / 100;
    const totalSavings = materialSavings + energySavings;
    const roi = ((totalSavings - values.materialCosts * 0.1) / (values.materialCosts * 0.1)) * 100;
    return Math.max(0, roi);
  };

  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="h-5 w-5 mr-2" />
          {language === 'en' ? 'Circular Economy ROI Calculator' :
           language === 'hu' ? 'Körforgásos gazdaság ROI kalkulátor' :
           'Kreislaufwirtschaft ROI-Rechner'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {language === 'en' ? 'Annual Material Costs (€)' :
               language === 'hu' ? 'Éves anyagköltségek (€)' :
               'Jährliche Materialkosten (€)'}
            </label>
            <input
              type="number"
              value={values.materialCosts}
              onChange={(e) => setValues(prev => ({ ...prev, materialCosts: Number(e.target.value) }))}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              {language === 'en' ? 'Waste Reduction (%)' :
               language === 'hu' ? 'Hulladékcsökkentés (%)' :
               'Abfallreduzierung (%)'}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={values.wasteReduction}
              onChange={(e) => setValues(prev => ({ ...prev, wasteReduction: Number(e.target.value) }))}
              className="w-full"
            />
            <div className="text-center text-sm text-gray-600">{values.wasteReduction}%</div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              {language === 'en' ? 'Energy Savings (%)' :
               language === 'hu' ? 'Energiamegtakarítás (%)' :
               'Energieeinsparungen (%)'}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={values.energySavings}
              onChange={(e) => setValues(prev => ({ ...prev, energySavings: Number(e.target.value) }))}
              className="w-full"
            />
            <div className="text-center text-sm text-gray-600">{values.energySavings}%</div>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {calculateROI().toFixed(1)}%
          </div>
          <div className="text-gray-600">
            {language === 'en' ? 'Projected Annual ROI' :
             language === 'hu' ? 'Várható éves ROI' :
             'Prognostizierte jährliche Rendite'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Implementation Steps
const ImplementationSteps = () => {
  const { language } = useLanguage();
  
  const steps = [
    {
      phase: 1,
      title: { 
        en: 'Assessment & Planning', 
        hu: 'Értékelés és tervezés', 
        de: 'Bewertung und Planung' 
      },
      description: { 
        en: 'Conduct comprehensive audit of current processes and waste streams', 
        hu: 'Jelenlegi folyamatok és hulladékáramok átfogó auditjának elvégzése',
        de: 'Umfassende Prüfung aktueller Prozesse und Abfallströme durchführen'
      },
      duration: '2-4 weeks',
      deliverables: [
        { en: 'Waste audit report', hu: 'Hulladék audit jelentés', de: 'Abfall-Audit-Bericht' },
        { en: 'Process mapping', hu: 'Folyamat térképezés', de: 'Prozess-Mapping' },
        { en: 'Baseline metrics', hu: 'Alapmetrikák', de: 'Baseline-Metriken' }
      ]
    },
    {
      phase: 2,
      title: { 
        en: 'Strategy Development', 
        hu: 'Stratégia fejlesztés', 
        de: 'Strategieentwicklung' 
      },
      description: { 
        en: 'Design customized circular economy implementation roadmap', 
        hu: 'Testreszabott körforgásos gazdaság megvalósítási ütemterv tervezése',
        de: 'Angepasste Roadmap für Kreislaufwirtschafts-Implementierung entwerfen'
      },
      duration: '3-5 weeks',
      deliverables: [
        { en: 'Implementation roadmap', hu: 'Megvalósítási ütemterv', de: 'Implementierungs-Roadmap' },
        { en: 'Technology selection', hu: 'Technológia kiválasztás', de: 'Technologieauswahl' },
        { en: 'Investment plan', hu: 'Befektetési terv', de: 'Investitionsplan' }
      ]
    },
    {
      phase: 3,
      title: { 
        en: 'Pilot Implementation', 
        hu: 'Pilot megvalósítás', 
        de: 'Pilot-Implementierung' 
      },
      description: { 
        en: 'Execute small-scale circular processes to validate approach', 
        hu: 'Kis léptékű körforgásos folyamatok végrehajtása a megközelítés validálásához',
        de: 'Kleinmaßstäbliche Kreislaufprozesse zur Validierung des Ansatzes ausführen'
      },
      duration: '6-8 weeks',
      deliverables: [
        { en: 'Pilot results', hu: 'Pilot eredmények', de: 'Pilot-Ergebnisse' },
        { en: 'Process optimization', hu: 'Folyamat optimalizálás', de: 'Prozessoptimierung' },
        { en: 'ROI validation', hu: 'ROI validáció', de: 'ROI-Validierung' }
      ]
    },
    {
      phase: 4,
      title: { 
        en: 'Full Scale Rollout', 
        hu: 'Teljes léptékű bevezetés', 
        de: 'Vollständige Einführung' 
      },
      description: { 
        en: 'Deploy circular economy principles across all operations', 
        hu: 'Körforgásos gazdaság elvek telepítése minden műveletre',
        de: 'Kreislaufwirtschaftsprinzipien in allen Betrieben einsetzen'
      },
      duration: '3-6 months',
      deliverables: [
        { en: 'System integration', hu: 'Rendszer integráció', de: 'Systemintegration' },
        { en: 'Staff training', hu: 'Személyzet képzés', de: 'Mitarbeiterschulung' },
        { en: 'Performance monitoring', hu: 'Teljesítmény monitorozás', de: 'Leistungsüberwachung' }
      ]
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-6">
        {language === 'en' ? '4-Phase Implementation Framework' :
         language === 'hu' ? '4 fázisú megvalósítási keretrendszer' :
         '4-Phasen-Implementierungs-Framework'}
      </h3>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{step.phase}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{step.title[language]}</h4>
                    <p className="text-gray-600 mb-4">{step.description[language]}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">
                          {language === 'en' ? 'Duration' : language === 'hu' ? 'Időtartam' : 'Dauer'}
                        </div>
                        <div className="text-sm">{step.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">
                          {language === 'en' ? 'Key Deliverables' : language === 'hu' ? 'Fő eredmények' : 'Wichtige Ergebnisse'}
                        </div>
                        <ul className="text-sm space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {deliverable[language]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Success Stories
const SuccessStories = () => {
  const { language } = useLanguage();
  
  const stories = [
    {
      company: 'TechFlow Industries',
      industry: { en: 'Electronics', hu: 'Elektronika', de: 'Elektronik' },
      challenge: { 
        en: 'High plastic waste disposal costs', 
        hu: 'Magas műanyag hulladék ártalmatlanítási költségek',
        de: 'Hohe Entsorgungskosten für Kunststoffabfälle'
      },
      solution: { 
        en: 'Implemented closed-loop recycling system', 
        hu: 'Zárt hurkú újrahasznosítási rendszer bevezetése',
        de: 'Geschlossenes Recycling-System implementiert'
      },
      results: {
        wasteReduction: 75,
        costSavings: 240000,
        roi: 320
      }
    },
    {
      company: 'GreenPack Solutions',
      industry: { en: 'Packaging', hu: 'Csomagolás', de: 'Verpackung' },
      challenge: { 
        en: 'Meeting sustainability regulations', 
        hu: 'Fenntarthatósági szabályozásoknak való megfelelés',
        de: 'Einhaltung von Nachhaltigkeitsvorschriften'
      },
      solution: { 
        en: 'Bio-based material transition program', 
        hu: 'Bio-alapú anyag átállási program',
        de: 'Übergang zu biobasierten Materialien'
      },
      results: {
        wasteReduction: 68,
        costSavings: 180000,
        roi: 285
      }
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-6">
        {language === 'en' ? 'Real-World Success Stories' :
         language === 'hu' ? 'Valós sikertörténetek' :
         'Echte Erfolgsgeschichten'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{story.company}</CardTitle>
                <p className="text-sm text-gray-600">{story.industry[language]}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-red-600 mb-1">
                      {language === 'en' ? 'Challenge' : language === 'hu' ? 'Kihívás' : 'Herausforderung'}
                    </div>
                    <p className="text-sm text-gray-600">{story.challenge[language]}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-600 mb-1">
                      {language === 'en' ? 'Solution' : language === 'hu' ? 'Megoldás' : 'Lösung'}
                    </div>
                    <p className="text-sm text-gray-600">{story.solution[language]}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-green-600 mb-2">
                      {language === 'en' ? 'Results' : language === 'hu' ? 'Eredmények' : 'Ergebnisse'}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">{story.results.wasteReduction}%</div>
                        <div className="text-xs text-gray-600">
                          {language === 'en' ? 'Waste ↓' : language === 'hu' ? 'Hulladék ↓' : 'Abfall ↓'}
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">€{story.results.costSavings.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">
                          {language === 'en' ? 'Savings' : language === 'hu' ? 'Megtakarítás' : 'Einsparungen'}
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">{story.results.roi}%</div>
                        <div className="text-xs text-gray-600">ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CircularEconomyImplementationGuide = () => {
  const { language, translations } = useLanguage();
  
  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Article data
  const article = {
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
    author: {
      name: 'Mark Weber',
      role: { en: 'Sustainability Consultant', hu: 'Fenntarthatósági tanácsadó', de: 'Nachhaltigkeitsberater' }
    },
    date: '2024-03-15',
    readTime: 15,
    tags: ['circular-economy', 'implementation', 'sustainability', 'toolkit', 'interactive']
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
            <Link href="/resources/blog" className="hover:text-gray-900">{t('resources.blog') || 'Blog'}</Link>
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
                  <Lightbulb className="h-4 w-4 mr-2" />
                  <span>
                    {language === 'en' ? 'Interactive Guide' :
                     language === 'hu' ? 'Interaktív útmutató' :
                     'Interaktiver Leitfaden'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Download Implementation Kit' :
                   language === 'hu' ? 'Megvalósítási csomag letöltése' :
                   'Implementierungs-Kit herunterladen'}
                </Button>
                <Button variant="outline" size="lg">
                  {language === 'en' ? 'Schedule Consultation' :
                   language === 'hu' ? 'Konzultáció ütemezése' :
                   'Beratung planen'}
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
            <div className="aspect-video relative rounded-xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Recycle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">
                    {language === 'en' ? 'Circular Economy Implementation Framework' :
                     language === 'hu' ? 'Körforgásos gazdaság megvalósítási keretrendszer' :
                     'Kreislaufwirtschafts-Implementierungs-Framework'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-lg leading-relaxed mb-6">
              {language === 'en' ? 
                "The circular economy represents a fundamental shift from the traditional linear 'take-make-waste' model to a regenerative approach that eliminates waste and keeps materials in continuous use. This comprehensive guide provides manufacturers with the tools, frameworks, and practical insights needed to successfully implement circular economy principles." :
              language === 'hu' ?
                "A körforgásos gazdaság alapvető váltást jelent a hagyományos lineáris 'vedd-készítsd-dobd el' modellről egy regeneratív megközelítésre, amely kiküszöböli a hulladékot és folyamatos használatban tartja az anyagokat. Ez az átfogó útmutató biztosítja a gyártók számára az eszközöket, keretrendszereket és gyakorlati meglátásokat, amelyek szükségesek a körforgásos gazdaság elveinek sikeres megvalósításához." :
                "Die Kreislaufwirtschaft stellt einen fundamentalen Wandel vom traditionellen linearen 'Nehmen-Machen-Wegwerfen'-Modell zu einem regenerativen Ansatz dar, der Abfall eliminiert und Materialien in kontinuierlicher Nutzung hält. Dieser umfassende Leitfaden bietet Herstellern die Tools, Frameworks und praktischen Einblicke, die für eine erfolgreiche Implementierung von Kreislaufwirtschaftsprinzipien erforderlich sind."
              }
            </p>
          </motion.div>

          {/* Interactive Components */}
          <Tabs defaultValue="calculator" className="my-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="calculator">
                {language === 'en' ? 'ROI Calculator' : language === 'hu' ? 'ROI Kalkulátor' : 'ROI-Rechner'}
              </TabsTrigger>
              <TabsTrigger value="implementation">
                {language === 'en' ? 'Implementation' : language === 'hu' ? 'Megvalósítás' : 'Implementierung'}
              </TabsTrigger>
              <TabsTrigger value="success">
                {language === 'en' ? 'Success Stories' : language === 'hu' ? 'Sikertörténetek' : 'Erfolgsgeschichten'}
              </TabsTrigger>
              <TabsTrigger value="resources">
                {language === 'en' ? 'Resources' : language === 'hu' ? 'Források' : 'Ressourcen'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="calculator">
              <ROICalculator />
            </TabsContent>
            
            <TabsContent value="implementation">
              <ImplementationSteps />
            </TabsContent>
            
            <TabsContent value="success">
              <SuccessStories />
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {[
                  {
                    icon: <FileText className="h-6 w-6" />,
                    title: { en: 'Implementation Templates', hu: 'Megvalósítási sablonok', de: 'Implementierungsvorlagen' },
                    description: { en: 'Ready-to-use templates and checklists', hu: 'Használatra kész sablonok és ellenőrzőlisták', de: 'Gebrauchsfertige Vorlagen und Checklisten' }
                  },
                  {
                    icon: <BarChart3 className="h-6 w-6" />,
                    title: { en: 'Assessment Tools', hu: 'Értékelő eszközök', de: 'Bewertungstools' },
                    description: { en: 'Comprehensive audit and measurement tools', hu: 'Átfogó audit és mérőeszközök', de: 'Umfassende Audit- und Messtools' }
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    title: { en: 'Progress Tracking', hu: 'Előrehaladás követése', de: 'Fortschrittsverfolgung' },
                    description: { en: 'KPI dashboards and monitoring systems', hu: 'KPI műszerfalak és monitoring rendszerek', de: 'KPI-Dashboards und Überwachungssysteme' }
                  }
                ].map((resource, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4 text-blue-600">
                        {resource.icon}
                      </div>
                      <h4 className="font-semibold mb-2">{resource.title[language]}</h4>
                      <p className="text-sm text-gray-600 mb-4">{resource.description[language]}</p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Download' : language === 'hu' ? 'Letöltés' : 'Herunterladen'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Ready to Transform Your Operations?' :
               language === 'hu' ? 'Készen áll műveleteinek átalakítására?' :
               'Bereit, Ihre Betriebe zu transformieren?'}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === 'en' ? 'Our experts are ready to guide you through every step of your circular economy transformation journey.' :
               language === 'hu' ? 'Szakértőink készen állnak, hogy végigvezessék Önt körforgásos gazdaság átalakulási utjának minden lépésén.' :
               'Unsere Experten sind bereit, Sie durch jeden Schritt Ihrer Kreislaufwirtschafts-Transformationsreise zu führen.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                {language === 'en' ? 'Start Your Assessment' :
                 language === 'hu' ? 'Értékelés indítása' :
                 'Bewertung starten'}
              </Button>
              <Button variant="outline" size="lg">
                {language === 'en' ? 'Contact Our Experts' :
                 language === 'hu' ? 'Kapcsolat szakértőinkkel' :
                 'Unsere Experten kontaktieren'}
              </Button>
            </div>
          </motion.div>

          {/* Back to Blog */}
          <div className="pt-8 border-t">
            <Link 
              href="/resources/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Back to Blog' :
               language === 'hu' ? 'Vissza a bloghoz' :
               'Zurück zum Blog'}
            </Link>
          </div>
        </article>
      </ResourcesLayout>
    </>
  );
};

export default CircularEconomyImplementationGuide;
