import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useLanguage } from '../../../contexts/LanguageContext';
import { motion } from 'framer-motion';

// Components
import ResourcesLayout from '../../../components/layouts/ResourcesLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Progress } from '../../../components/ui/progress';

// Icons
import { 
  Recycle, 
  Leaf, 
  RotateCcw, 
  TreePine, 
  Droplets,
  Package,
  Factory,
  TrendingUp,
  Target,
  DollarSign,
  Users,
  ArrowLeft,
  Play,
  Eye,
  Download,
  CheckCircle,
  BarChart3,
  Zap,
  Globe,
  Lightbulb
} from 'lucide-react';

// Data
import { customCaseStudies } from '../../../data/customCaseStudiesRegistry';

interface CircularProcess {
  id: string;
  name: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  efficiency: number;
  status: 'active' | 'optimization' | 'complete';
  impact: string;
  icon: React.ReactNode;
}

interface LifecycleStage {
  id: string;
  name: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  completion: number;
  wasteReduction: number;
  energySavings: number;
}

const CircularEconomyImplementationShowcasePage: React.FC = () => {
  const { language, translations } = useLanguage();
  const router = useRouter();
  const { locale } = router;
  // Translation function
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };
  
  const [isTrackingActive, setIsTrackingActive] = useState(false);
  const [circularityScore, setCircularityScore] = useState(0);
  const [materialFlow, setMaterialFlow] = useState<{ [key: string]: number }>({});

  // Get the case study data
  const caseStudyData = customCaseStudies.find(study => study.slug === 'circular-economy-implementation-showcase');

  useEffect(() => {
    // Animate circularity score on load
    const timer = setTimeout(() => {
      setCircularityScore(85);
      setMaterialFlow({
        recovered: 78,
        recycled: 65,
        reused: 45,
        renewed: 32
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isTrackingActive) {
      interval = setInterval(() => {
        // Simulate real-time material flow tracking
        setMaterialFlow(prev => ({
          recovered: Math.max(70, Math.min(85, prev.recovered + (Math.random() - 0.5) * 2)),
          recycled: Math.max(60, Math.min(75, prev.recycled + (Math.random() - 0.5) * 2)),
          reused: Math.max(40, Math.min(55, prev.reused + (Math.random() - 0.5) * 2)),
          renewed: Math.max(25, Math.min(40, prev.renewed + (Math.random() - 0.5) * 2))
        }));
        
        // Update circularity score
        setCircularityScore(prev => Math.max(80, Math.min(90, prev + (Math.random() - 0.5) * 1)));
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTrackingActive]);

  const circularProcesses: CircularProcess[] = [
    {
      id: 'material-recovery',
      name: {
        en: 'Material Recovery System',
        hu: 'Anyag-visszanyerési rendszer',
        de: 'Material-Rückgewinnungssystem'
      },
      description: {
        en: 'Advanced sorting and recovery system capturing 95% of waste materials for reprocessing into new products.',
        hu: 'Fejlett válogatási és visszanyerési rendszer, amely a hulladékanyagok 95%-át gyűjti be új termékekké való újrafeldolgozáshoz.',
        de: 'Fortschrittliches Sortier- und Rückgewinnungssystem, das 95% der Abfallmaterialien für die Wiederaufbereitung zu neuen Produkten erfasst.'
      },
      efficiency: 95,
      status: 'active',
      impact: '78% waste reduction',
      icon: <Recycle className="w-6 h-6" />
    },
    {
      id: 'lifecycle-design',
      name: {
        en: 'Circular Design Integration',
        hu: 'Körforgásos tervezési integráció',
        de: 'Zirkuläre Design-Integration'
      },
      description: {
        en: 'Design-for-circularity principles embedded throughout product development ensuring end-of-life recyclability.',
        hu: 'A körforgásosságra tervezett elvek beépítése a termékfejlesztésbe, biztosítva az életciklus végén történő újrahasznosíthatóságot.',
        de: 'Design-für-Zirkularität-Prinzipien sind in die gesamte Produktentwicklung eingebettet und gewährleisten die Recycelbarkeit am Lebensende.'
      },
      efficiency: 88,
      status: 'complete',
      impact: '60% material efficiency',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 'supply-collaboration',
      name: {
        en: 'Supply Chain Collaboration',
        hu: 'Ellátási lánc együttműködés',
        de: 'Lieferketten-Zusammenarbeit'
      },
      description: {
        en: 'Collaborative network with suppliers and customers creating closed-loop material flows and shared value creation.',
        hu: 'Együttműködési hálózat beszállítókkal és ügyfelekkel, létrehozva zárt anyagáramlási köröket és közös értékteremtést.',
        de: 'Kollaboratives Netzwerk mit Lieferanten und Kunden, das geschlossene Materialkreisläufe und gemeinsame Wertschöpfung schafft.'
      },
      efficiency: 82,
      status: 'optimization',
      impact: '45% cost reduction',
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 'impact-tracking',
      name: {
        en: 'Impact Measurement System',
        hu: 'Hatásmérési rendszer',
        de: 'Impact-Messsystem'
      },
      description: {
        en: 'Real-time tracking and reporting of environmental and economic impacts across the entire circular economy implementation.',
        hu: 'Valós idejű nyomon követés és jelentés a környezeti és gazdasági hatásokról a teljes körforgásos gazdaság megvalósítás során.',
        de: 'Echtzeit-Verfolgung und Berichterstattung über Umwelt- und Wirtschaftsauswirkungen der gesamten Kreislaufwirtschafts-Implementierung.'
      },
      efficiency: 91,
      status: 'active',
      impact: '100% transparency',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const lifecycleStages: LifecycleStage[] = [
    {
      id: 'design',
      name: {
        en: 'Circular Design',
        hu: 'Körforgásos tervezés',
        de: 'Zirkuläres Design'
      },
      description: {
        en: 'Products designed for durability, repairability, and end-of-life recovery',
        hu: 'Termékek tervezése tartósságra, javíthatóságra és életciklus végi visszanyerésre',
        de: 'Produkte für Langlebigkeit, Reparierbarkeit und End-of-Life-Rückgewinnung konzipiert'
      },
      completion: 100,
      wasteReduction: 25,
      energySavings: 15
    },
    {
      id: 'production',
      name: {
        en: 'Efficient Production',
        hu: 'Hatékony gyártás',
        de: 'Effiziente Produktion'
      },
      description: {
        en: 'Minimal waste manufacturing with renewable energy and recycled materials',
        hu: 'Minimális hulladékú gyártás megújuló energiával és újrahasznosított anyagokkal',
        de: 'Minimale Abfallproduktion mit erneuerbaren Energien und recycelten Materialien'
      },
      completion: 95,
      wasteReduction: 35,
      energySavings: 40
    },
    {
      id: 'use',
      name: {
        en: 'Extended Use Phase',
        hu: 'Kiterjesztett használati fázis',
        de: 'Erweiterte Nutzungsphase'
      },
      description: {
        en: 'Product life extension through maintenance, repair, and upgrade services',
        hu: 'Termék élettartam kiterjesztése karbantartással, javítással és frissítési szolgáltatásokkal',
        de: 'Verlängerung der Produktlebensdauer durch Wartung, Reparatur und Upgrade-Services'
      },
      completion: 88,
      wasteReduction: 50,
      energySavings: 25
    },
    {
      id: 'recovery',
      name: {
        en: 'Material Recovery',
        hu: 'Anyag-visszanyerés',
        de: 'Material-Rückgewinnung'
      },
      description: {
        en: 'Complete material recovery and reintegration into new production cycles',
        hu: 'Teljes anyag-visszanyerés és újraintegrálás új termelési ciklusokba',
        de: 'Vollständige Materialrückgewinnung und Reintegration in neue Produktionszyklen'
      },
      completion: 92,
      wasteReduction: 78,
      energySavings: 30
    }
  ];

  const getCurrentLang = () => locale as 'en' | 'hu' | 'de';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'optimization': return 'bg-yellow-100 text-yellow-800';
      case 'complete': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!caseStudyData) {
    return <div>Case study not found</div>;
  }

  return (
    <ResourcesLayout>
      <Head>
        <title>{caseStudyData.title?.[getCurrentLang()]} | Star-Plus Plastics</title>
        <meta 
          name="description" 
          content={caseStudyData.description?.[getCurrentLang()]} 
        />
      </Head>

      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20">
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
              {t('circularEconomy')}
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
                className="bg-white text-green-600 hover:bg-gray-100"
                onClick={() => setIsTrackingActive(!isTrackingActive)}
              >
                {isTrackingActive ? <Eye className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isTrackingActive ? t('viewLiveTracking') : t('startMaterialTracking')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('downloadCircularGuide')}
              </Button>
            </div>

            {/* Client Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">{t('projectInformation')}</h3>
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
                  <span className="opacity-80">{t('projectDuration')}: </span>
                  <span className="font-semibold">{caseStudyData.projectDuration}</span>
                </div>
                <div>
                  <span className="opacity-80">{t('circularityScore')}: </span>
                  <span className="font-semibold">{circularityScore.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Circularity Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('circularityDashboard')}
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className={`w-3 h-3 rounded-full ${isTrackingActive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="font-semibold">
                {isTrackingActive ? t('realTimeMaterialTracking') : t('trackingInactive')}
              </span>
            </div>
          </motion.div>

          {/* Circularity Score */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="2"
                      />
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray={`${circularityScore}, 100`}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{circularityScore.toFixed(1)}%</div>
                        <div className="text-sm text-gray-600">{t('circularity')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{t('overallCircularityScore')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('circularityDescription')}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{materialFlow.recovered?.toFixed(0)}%</div>
                    <div className="text-gray-600">{t('materialRecovered')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{materialFlow.recycled?.toFixed(0)}%</div>
                    <div className="text-gray-600">{t('materialRecycled')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{materialFlow.reused?.toFixed(0)}%</div>
                    <div className="text-gray-600">{t('materialReused')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">{materialFlow.renewed?.toFixed(0)}%</div>
                    <div className="text-gray-600">{t('materialRenewed')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Material Flow Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Circular Processes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RotateCcw className="w-5 h-5 mr-2" />
                  {t('circularProcesses')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">                  {circularProcesses.map((process) => (
                    <div
                      key={process.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="p-2 bg-green-100 rounded-lg mr-3">
                            {process.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold">{process.name[getCurrentLang()]}</h4>
                            <Badge className={getStatusColor(process.status)}>
                              {t(process.status)}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">
                            {process.efficiency}%
                          </div>
                          <div className="text-xs text-gray-500">{process.impact}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 ml-14">
                        {process.description[getCurrentLang()]}
                      </p>
                      <div className="ml-14 mt-2">
                        <Progress value={process.efficiency} className="h-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Lifecycle Visualization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Recycle className="w-5 h-5 mr-2" />
                  {t('lifecycleVisualization')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {lifecycleStages.map((stage, index) => (
                    <div key={stage.id} className="relative">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <div className="ml-4 flex-grow">
                          <h4 className="font-semibold mb-1">{stage.name[getCurrentLang()]}</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            {stage.description[getCurrentLang()]}
                          </p>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>{t('completion')}</span>
                              <span>{stage.completion}%</span>
                            </div>
                            <Progress value={stage.completion} className="h-1" />
                            
                            <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                              <div className="flex items-center">
                                <Droplets className="w-3 h-3 mr-1 text-blue-500" />
                                <span>{t('wasteReduction')}: {stage.wasteReduction}%</span>
                              </div>
                              <div className="flex items-center">
                                <Zap className="w-3 h-3 mr-1 text-yellow-500" />
                                <span>{t('energySavings')}: {stage.energySavings}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {index < lifecycleStages.length - 1 && (
                        <div className="absolute left-5 top-12 w-0.5 h-6 bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Results */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('implementationResults')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('implementationDescription')}
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
                      <Leaf className="w-6 h-6 text-green-500 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Economy Implementation Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('circularEconomyShowcase')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('showcaseDescription')}
            </p>
          </motion.div>

          <Tabs defaultValue="material-flow" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="material-flow">
                <RotateCcw className="w-4 h-4 mr-2" />
                {t('materialFlow')}
              </TabsTrigger>
              <TabsTrigger value="impact-tracking">
                <BarChart3 className="w-4 h-4 mr-2" />
                {t('impactTracking')}
              </TabsTrigger>
              <TabsTrigger value="collaboration">
                <Users className="w-4 h-4 mr-2" />
                {t('collaboration')}
              </TabsTrigger>
              <TabsTrigger value="innovation">
                <Lightbulb className="w-4 h-4 mr-2" />
                {t('innovation')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="material-flow">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('materialFlowOptimization')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('materialFlowDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('closedLoopSystems')}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('materialTracking')}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('wasteElimination')}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('resourceOptimization')}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <RotateCcw className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('materialFlowVisualization')}</p>
                        {isTrackingActive && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="mt-4"
                          >
                            <div className="animate-pulse text-green-600">
                              {t('liveTrackingActive')}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="impact-tracking">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('impactDashboard')}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('realTimeImpactTracking')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('impactTrackingDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <BarChart3 className="w-4 h-4 text-blue-500 mr-2" />
                          {t('environmentalMetrics')}
                        </li>
                        <li className="flex items-center">
                          <DollarSign className="w-4 h-4 text-blue-500 mr-2" />
                          {t('economicIndicators')}
                        </li>
                        <li className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                          {t('performanceTrends')}
                        </li>
                        <li className="flex items-center">
                          <Target className="w-4 h-4 text-blue-500 mr-2" />
                          {t('goalTracking')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="collaboration">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">{t('stakeholderCollaboration')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Factory className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{t('suppliers')}</h4>
                      <p className="text-sm text-gray-600">{t('supplierCollaboration')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{t('customers')}</h4>
                      <p className="text-sm text-gray-600">{t('customerCollaboration')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{t('partners')}</h4>
                      <p className="text-sm text-gray-600">{t('partnerCollaboration')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="innovation">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('circularInnovations')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('innovationDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Lightbulb className="w-4 h-4 text-orange-500 mr-2" />
                          {t('designForCircularity')}
                        </li>
                        <li className="flex items-center">
                          <Package className="w-4 h-4 text-orange-500 mr-2" />
                          {t('modularDesign')}
                        </li>
                        <li className="flex items-center">
                          <TreePine className="w-4 h-4 text-orange-500 mr-2" />
                          {t('biomaterialInnovation')}
                        </li>
                        <li className="flex items-center">
                          <Recycle className="w-4 h-4 text-orange-500 mr-2" />
                          {t('advancedRecycling')}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Lightbulb className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('innovationShowcase')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('startYourCircularJourney')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('circularJourneyDescription')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                {t('scheduleCircularAssessment')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('exploreCircularSolutions')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </ResourcesLayout>
  );
};

export default CircularEconomyImplementationShowcasePage;
