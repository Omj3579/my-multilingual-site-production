import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Progress } from '../../../components/ui/progress';

// Icons
import { 
  Leaf, 
  TrendingUp, 
  Recycle, 
  Lightbulb,
  Target,
  ArrowLeft,
  Play,
  Eye,
  Calculator,
  Download,
  CheckCircle,
  Zap
} from 'lucide-react';

// Data
import { customCaseStudies } from '../../../data/customCaseStudiesRegistry';

interface ProjectPhase {
  id: string;
  name: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  duration: string;
  status: 'completed' | 'in-progress' | 'planned';
  completionRate: number;
}

interface Innovation {
  id: string;
  name: { en: string; hu: string; de: string };
  impact: { en: string; hu: string; de: string };
  metrics: string;
  icon: React.ReactNode;
}

const PackagingBreakthroughInteractivePage: React.FC = () => {
  const { language, translations } = useLanguage();
  const router = useRouter();
    // Helper function to get translation
  const t = (key: string) => translations[key]?.[language] || key;
    const [isPlaying, setIsPlaying] = useState(false);
  // Get the case study data
  const caseStudyData = customCaseStudies.find(study => study.slug === 'packaging-breakthrough-interactive');

  const projectPhases: ProjectPhase[] = [
    {
      id: 'research',
      name: {
        en: 'Research & Development',
        hu: 'Kutatás és fejlesztés',
        de: 'Forschung und Entwicklung'
      },
      description: {
        en: 'Material research, bio-compatibility testing, and initial prototyping phase.',
        hu: 'Anyagkutatás, bio-kompatibilitási tesztelés és kezdeti prototípuskészítési fázis.',
        de: 'Materialforschung, Bio-Kompatibilitätstests und erste Prototyping-Phase.'
      },
      duration: '3 months',
      status: 'completed',
      completionRate: 100
    },
    {
      id: 'design',
      name: {
        en: 'Design Optimization',
        hu: 'Tervezési optimalizálás',
        de: 'Design-Optimierung'
      },
      description: {
        en: 'AI-driven structural optimization and smart sensor integration design.',
        hu: 'AI-vezérelt szerkezeti optimalizálás és intelligens érzékelő integrációs tervezés.',
        de: 'KI-gesteuerte Strukturoptimierung und Smart-Sensor-Integrationsdesign.'
      },
      duration: '2 months',
      status: 'completed',
      completionRate: 100
    },
    {
      id: 'testing',
      name: {
        en: 'Testing & Validation',
        hu: 'Tesztelés és validálás',
        de: 'Testen und Validierung'
      },
      description: {
        en: 'Comprehensive testing including durability, barrier properties, and biodegradation.',
        hu: 'Átfogó tesztelés beleértve a tartósságot, barrier tulajdonságokat és biodegradációt.',
        de: 'Umfassende Tests einschließlich Haltbarkeit, Barriereeigenschaften und biologischer Abbau.'
      },
      duration: '2 months',
      status: 'completed',
      completionRate: 100
    },
    {
      id: 'production',
      name: {
        en: 'Production Scale-up',
        hu: 'Gyártási felfuttatás',
        de: 'Produktions-Skalierung'
      },
      description: {
        en: 'Manufacturing process optimization and quality control implementation.',
        hu: 'Gyártási folyamat optimalizálás és minőségirányítás megvalósítás.',
        de: 'Fertigungsprozessoptimierung und Qualitätskontroll-Implementierung.'
      },
      duration: '1 month',
      status: 'completed',
      completionRate: 100
    }
  ];

  const innovations: Innovation[] = [
    {
      id: 'biomaterials',
      name: {
        en: 'Bio-degradable Multi-layer Material',
        hu: 'Biológiailag lebomló többrétegű anyag',
        de: 'Biologisch abbaubares Mehrschichtmaterial'
      },
      impact: {
        en: 'Maintains product freshness while decomposing naturally in 6 months',
        hu: 'Fenntartja a termék frissességét, miközben 6 hónap alatt természetesen lebomlik',
        de: 'Erhält die Produktfrische und zersetzt sich natürlich in 6 Monaten'
      },
      metrics: '78% waste reduction',
      icon: <Leaf className="w-6 h-6" />
    },
    {
      id: 'sensors',
      name: {
        en: 'Integrated Smart Sensors',
        hu: 'Integrált intelligens érzékelők',
        de: 'Integrierte Smart-Sensoren'
      },
      impact: {
        en: 'Real-time freshness monitoring with mobile app connectivity',
        hu: 'Valós idejű frissesség monitorozás mobil app kapcsolattal',
        de: 'Echtzeit-Frische-Überwachung mit Mobile-App-Konnektivität'
      },
      metrics: '92% satisfaction rate',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'optimization',
      name: {
        en: 'AI-Driven Design Optimization',
        hu: 'AI-vezérelt tervezési optimalizálás',
        de: 'KI-gesteuerte Design-Optimierung'
      },
      impact: {
        en: 'Structural efficiency improvements reducing material usage by 25%',
        hu: 'Szerkezeti hatékonyság javítások 25%-kal csökkentik az anyagfelhasználást',
        de: 'Strukturelle Effizienzverbesserungen reduzieren Materialverbrauch um 25%'
      },
      metrics: '€2.3M annual savings',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 'lifecycle',
      name: {
        en: 'Lifecycle Analysis Integration',
        hu: 'Életciklus elemzés integráció',
        de: 'Lebenszyklus-Analyse-Integration'
      },
      impact: {
        en: 'Complete environmental impact tracking from production to disposal',
        hu: 'Teljes környezeti hatás követés a gyártástól az ártalmatlanításig',
        de: 'Vollständige Umweltauswirkungsverfolgung von der Produktion bis zur Entsorgung'
      },
      metrics: '45% faster deployment',
      icon: <Recycle className="w-6 h-6" />
    }
  ];

  const getCurrentLang = () => language;

  const handleDemoPlay = () => {
    setIsPlaying(!isPlaying);
    // Simulate demo animation
    setTimeout(() => setIsPlaying(false), 3000);
  };

  if (!caseStudyData) {
    return <div>Case study not found</div>;
  }

  return (    <ResourcesLayout>
      <Head>
        <title>{caseStudyData.title?.[getCurrentLang()]} | Star-Plus Plastics</title>
        <meta 
          name="description" 
          content={caseStudyData.description?.[getCurrentLang()]} 
        />
      </Head>

      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Button
              variant="ghost"
              className="mb-6 text-white hover:bg-white/20"
              onClick={() => router.push('/resources/case-studies')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToCaseStudies')}
            </Button>

            <Badge className="mb-4 bg-green-500/20 text-green-100 border-green-400">
              {t('interactiveCaseStudy')}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {caseStudyData.title?.[getCurrentLang()]}
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {caseStudyData.description?.[getCurrentLang()]}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={handleDemoPlay}
              >
                <Play className="w-5 h-5 mr-2" />
                {t('watchDemo')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('downloadCaseStudy')}
              </Button>
            </div>

            {/* Client Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">{t('clientInformation')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="opacity-80">{t('client')}: </span>
                  <span className="font-semibold">{caseStudyData.client?.name}</span>
                </div>
                <div>
                  <span className="opacity-80">{t('industry')}: </span>
                  <span className="font-semibold">{caseStudyData.client?.industry}</span>
                </div>
                <div>
                  <span className="opacity-80">{t('size')}: </span>
                  <span className="font-semibold">{caseStudyData.client?.size}</span>                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('projectResults')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('resultsDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudyData.results?.metrics?.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {metric.value}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {metric.label[getCurrentLang()]}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {metric.improvement}
                    </p>
                    <div className="mt-4">
                      <TrendingUp className="w-6 h-6 text-green-500 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('projectTimeline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('timelineDescription')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectPhases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold text-lg">
                          {phase.name[getCurrentLang()]}
                        </h3>
                        <Badge className="mt-2">
                          {phase.duration}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4">
                        {phase.description[getCurrentLang()]}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{t('progress')}</span>
                          <span>{phase.completionRate}%</span>
                        </div>
                        <Progress value={phase.completionRate} />
                        <Badge className={
                          phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                          phase.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }>
                          {t(phase.status)}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {index < projectPhases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-gray-300"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('keyInnovations')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('innovationsDescription')}
            </p>
          </motion.div>

          <Tabs defaultValue="biomaterials" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {innovations.map((innovation) => (
                <TabsTrigger 
                  key={innovation.id} 
                  value={innovation.id}
                  className="text-sm"
                >
                  <span className="mr-2">{innovation.icon}</span>
                  <span className="hidden sm:inline">
                    {innovation.name[getCurrentLang()].split(' ')[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {innovations.map((innovation) => (
              <TabsContent key={innovation.id} value={innovation.id}>
                <Card>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                            {innovation.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">
                              {innovation.name[getCurrentLang()]}
                            </h3>
                            <Badge variant="secondary" className="mt-1">
                              {innovation.metrics}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 text-lg mb-6">
                          {innovation.impact[getCurrentLang()]}
                        </p>

                        <div className="space-y-4">
                          <Button className="mr-4">
                            <Eye className="w-4 h-4 mr-2" />
                            {t('viewDetails')}
                          </Button>
                          <Button variant="outline">
                            <Calculator className="w-4 h-4 mr-2" />
                            {t('calculateImpact')}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                            {innovation.icon}
                          </div>
                          <p className="text-gray-600">
                            {t('interactiveVisualization')}
                          </p>
                          {isPlaying && (
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="mt-4"
                            >
                              <div className="animate-pulse text-blue-600">
                                {t('demonstrationActive')}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Target className="w-6 h-6 mr-2" />
                    {t('challenge')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {caseStudyData.challenge?.[getCurrentLang()]}
                  </p>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">{t('wasteReductionGoal')}: 70%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">{t('costReductionGoal')}: 25%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">{t('maintainQualityStandards')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    {t('solution')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {caseStudyData.solution?.[getCurrentLang()]}
                  </p>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-600">{t('bioDegradableMaterials')}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-600">{t('smartSensorIntegration')}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-600">{t('aiOptimizedStructure')}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-600">{t('lifecycleAnalysis')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('readyForInnovation')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('innovationDescription')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                {t('startYourProject')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('exploreMoreCaseStudies')}
              </Button>
            </div>
          </motion.div>        </div>
      </section>
    </ResourcesLayout>
  );
};

export default PackagingBreakthroughInteractivePage;
