import React, { useState, useEffect, ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Progress } from '../../../components/ui/progress';

// Icons
import { 
  Cpu, 
  Zap, 
  Brain, 
  Camera, 
  BarChart3,
  Settings,
  Wrench,
  Eye,
  TrendingUp,
  Shield,
  ArrowLeft,
  Play,
  Pause,
  Monitor,
  Download,
  CheckCircle,
  Gauge,
  Network,
  Bot
} from 'lucide-react';

// Data
import { customCaseStudies } from '../../../data/customCaseStudiesRegistry';

interface SmartSystem {
  id: string;
  name: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  status: 'active' | 'maintenance' | 'offline';
  efficiency: number;
  icon: React.ReactNode;
}

interface ManufacturingMetric {
  id: string;
  label: { en: string; hu: string; de: string };
  current: number;
  target: number;
  previous: number;
  unit: string;
  trend: 'improving' | 'stable' | 'declining';
}

type PageWithLayout = {
  getLayout?: (page: ReactElement) => ReactNode;
};

const SmartManufacturingTransformationPage = () => {
  const { language, translations } = useLanguage();
  const router = useRouter();
  
  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };
  
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<string>('iot-sensors');
  const [realTimeData, setRealTimeData] = useState<{ [key: string]: number }>({});
  const [alertCount, setAlertCount] = useState(0);

  // Get the case study data
  const caseStudyData = customCaseStudies.find(study => study.slug === 'smart-manufacturing-transformation');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isMonitoring) {
      interval = setInterval(() => {
        // Simulate real-time manufacturing data
        setRealTimeData({
          efficiency: Math.max(85, Math.min(98, 92 + (Math.random() - 0.5) * 8)),
          energyConsumption: Math.max(60, Math.min(80, 70 + (Math.random() - 0.5) * 10)),
          predictiveAccuracy: Math.max(94, Math.min(99, 96 + (Math.random() - 0.5) * 4)),
          downtime: Math.max(0, Math.min(10, 2 + (Math.random() - 0.5) * 4))
        });
        
        // Simulate alerts
        if (Math.random() < 0.1) {
          setAlertCount(prev => prev + 1);
        }
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMonitoring]);

  const smartSystems: SmartSystem[] = [
    {
      id: 'iot-sensors',
      name: {
        en: 'IoT Sensor Network',
        hu: 'IoT érzékelő hálózat',
        de: 'IoT-Sensornetzwerk'
      },
      description: {
        en: 'Real-time monitoring of temperature, pressure, vibration, and environmental conditions across all production lines.',
        hu: 'Valós idejű hőmérséklet, nyomás, vibráció és környezeti feltételek monitorozása minden termelési soron.',
        de: 'Echtzeit-Überwachung von Temperatur, Druck, Vibration und Umgebungsbedingungen in allen Produktionslinien.'
      },
      status: 'active',
      efficiency: 96,
      icon: <Network className="w-6 h-6" />
    },
    {
      id: 'ai-vision',
      name: {
        en: 'AI Computer Vision',
        hu: 'AI számítógépes látás',
        de: 'KI-Computer-Vision'
      },
      description: {
        en: 'Advanced quality control with real-time defect detection, dimensional analysis, and automated sorting systems.',
        hu: 'Fejlett minőségirányítás valós idejű hibaészleléssel, méretanalízissel és automatizált válogatórendszerekkel.',
        de: 'Erweiterte Qualitätskontrolle mit Echtzeit-Fehlererkennung, Dimensionsanalyse und automatisierten Sortiersystemen.'
      },
      status: 'active',
      efficiency: 94,
      icon: <Camera className="w-6 h-6" />
    },
    {
      id: 'digital-twin',
      name: {
        en: 'Digital Twin Platform',
        hu: 'Digitális iker platform',
        de: 'Digital Twin Plattform'
      },
      description: {
        en: 'Virtual replica of the entire manufacturing process enabling simulation, optimization, and predictive maintenance.',
        hu: 'A teljes gyártási folyamat virtuális mása, amely lehetővé teszi a szimulációt, optimalizálást és prediktív karbantartást.',
        de: 'Virtuelle Nachbildung des gesamten Fertigungsprozesses für Simulation, Optimierung und vorausschauende Wartung.'
      },
      status: 'active',
      efficiency: 91,
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 'predictive-ai',
      name: {
        en: 'Predictive AI Analytics',
        hu: 'Prediktív AI analitika',
        de: 'Prädiktive KI-Analytik'
      },
      description: {
        en: 'Machine learning algorithms for equipment maintenance prediction, demand forecasting, and process optimization.',
        hu: 'Gépi tanulási algoritmusok berendezések karbantartásának előrejelzéséhez, kereslet-előrejelzéshez és folyamatoptimalizáláshoz.',
        de: 'Machine-Learning-Algorithmen für Gerätewartungsvorhersage, Nachfrageprognose und Prozessoptimierung.'
      },
      status: 'active',
      efficiency: 88,
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const manufacturingMetrics: ManufacturingMetric[] = [
    {
      id: 'efficiency',
      label: { en: 'Production Efficiency', hu: 'Termelési hatékonyság', de: 'Produktionseffizienz' },
      current: realTimeData.efficiency || 92,
      target: 95,
      previous: 75,
      unit: '%',
      trend: 'improving'
    },
    {
      id: 'energy',
      label: { en: 'Energy Consumption', hu: 'Energiafogyasztás', de: 'Energieverbrauch' },
      current: realTimeData.energyConsumption || 70,
      target: 65,
      previous: 100,
      unit: '%',
      trend: 'improving'
    },
    {
      id: 'accuracy',
      label: { en: 'Predictive Accuracy', hu: 'Prediktív pontosság', de: 'Vorhersagegenauigkeit' },
      current: realTimeData.predictiveAccuracy || 96,
      target: 95,
      previous: 60,
      unit: '%',
      trend: 'improving'
    },
    {
      id: 'downtime',
      label: { en: 'Unplanned Downtime', hu: 'Nem tervezett leállás', de: 'Ungeplante Ausfallzeit' },
      current: realTimeData.downtime || 2,
      target: 1,
      previous: 25,
      unit: '%',
      trend: 'improving'
    }
  ];

  const getCurrentLang = () => language as 'en' | 'hu' | 'de';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'offline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'declining': return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default: return <TrendingUp className="w-4 h-4 text-gray-500" />;
    }
  };

  if (!caseStudyData) {
    return <div>Case study not found</div>;
  }  return (
    <>
      <Head>
        <title>{caseStudyData.title?.[getCurrentLang()]} | Star-Plus Plastics</title>
        <meta 
          name="description" 
          content={caseStudyData.description?.[getCurrentLang()]} 
        />
      </Head>

      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
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

            <Badge className="mb-4 bg-blue-500/20 text-blue-100 border-blue-400">
              {t('smartManufacturing')}
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
                onClick={() => setIsMonitoring(!isMonitoring)}
              >
                {isMonitoring ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isMonitoring ? t('pauseMonitoring') : t('startLiveMonitoring')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('downloadTransformationGuide')}
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
                </div>                <div>
                  <span className="opacity-80">{t('projectDuration')}: </span>
                  <span className="font-semibold">{caseStudyData.projectDuration}</span>
                </div>
                <div>
                  <span className="opacity-80">{t('companySize')}: </span>
                  <span className="font-semibold">{caseStudyData.client?.size}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Manufacturing Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('liveManufacturingDashboard')}
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="font-semibold">
                {isMonitoring ? t('liveDataStream') : t('simulationStopped')}
              </span>
              {isMonitoring && alertCount > 0 && (
                <Badge className="bg-red-500 text-white">
                  {alertCount} {t('alerts')}
                </Badge>
              )}
            </div>
          </motion.div>

          {/* Real-time Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {manufacturingMetrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {metric.label[getCurrentLang()]}
                      </h3>
                      
                      <div className="mb-3">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {metric.current.toFixed(1)}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-500">
                          {t('target')}: {metric.target}{metric.unit}
                        </div>
                        <div className="text-xs text-gray-400">
                          {t('previous')}: {metric.previous}{metric.unit}
                        </div>
                      </div>

                      <Progress 
                        value={metric.id === 'downtime' ? 
                          100 - (metric.current / metric.previous * 100) : 
                          (metric.current / metric.target) * 100} 
                        className="h-2 mb-2"
                      />
                      
                      <div className="flex items-center justify-center">
                        {getTrendIcon(metric.trend)}
                        <span className="ml-1 text-sm text-gray-600">{t(metric.trend)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Smart Systems Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  {t('smartSystemsStatus')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {smartSystems.map((system) => (
                    <div
                      key={system.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedSystem(system.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="p-2 bg-blue-100 rounded-lg mr-3">
                            {system.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold">{system.name[getCurrentLang()]}</h4>
                            <Badge className={getStatusColor(system.status)}>
                              {t(system.status)}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">
                            {system.efficiency}%
                          </div>
                          <div className="text-xs text-gray-500">{t('efficiency')}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 ml-14">
                        {system.description[getCurrentLang()]}
                      </p>
                      <div className="ml-14 mt-2">
                        <Progress value={system.efficiency} className="h-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  {t('systemDetails')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {smartSystems.find(s => s.id === selectedSystem) && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {smartSystems.find(s => s.id === selectedSystem)?.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {smartSystems.find(s => s.id === selectedSystem)?.name[getCurrentLang()]}
                      </h3>
                      <Badge className={getStatusColor(smartSystems.find(s => s.id === selectedSystem)?.status || 'active')}>
                        {t(smartSystems.find(s => s.id === selectedSystem)?.status || 'active')}
                      </Badge>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{t('currentMetrics')}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">{t('efficiency')}: </span>
                          <span className="font-semibold">
                            {smartSystems.find(s => s.id === selectedSystem)?.efficiency}%
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">{t('uptime')}: </span>
                          <span className="font-semibold">99.8%</span>
                        </div>
                        <div>
                          <span className="text-gray-600">{t('alerts')}: </span>
                          <span className="font-semibold text-green-600">0 {t('active')}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">{t('lastMaintenance')}: </span>
                          <span className="font-semibold">2 days ago</span>
                        </div>
                      </div>
                    </div>

                    {isMonitoring && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                      >
                        <div className="flex items-center mb-2">
                          <Bot className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-semibold text-blue-800">{t('aiInsights')}</span>
                        </div>
                        <p className="text-sm text-blue-700">
                          {t('systemOptimalPerformance')}
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Results */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('transformationResults')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('transformationDescription')}
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
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {metric.value}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {metric.label[getCurrentLang()]}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {metric.improvement}
                    </p>
                    <div className="mt-4">
                      <Gauge className="w-6 h-6 text-purple-500 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('technologyStack')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('technologyDescription')}
            </p>
          </motion.div>

          <Tabs defaultValue="iot" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="iot">
                <Network className="w-4 h-4 mr-2" />
                {t('iotIntegration')}
              </TabsTrigger>
              <TabsTrigger value="ai">
                <Brain className="w-4 h-4 mr-2" />
                {t('aiMachineLearning')}
              </TabsTrigger>
              <TabsTrigger value="vision">
                <Camera className="w-4 h-4 mr-2" />
                {t('computerVision')}
              </TabsTrigger>
              <TabsTrigger value="twin">
                <Monitor className="w-4 h-4 mr-2" />
                {t('digitalTwin')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="iot">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('iotSensorNetwork')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('iotDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('realTimeMonitoring')}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('environmentalTracking')}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('equipmentHealthMonitoring')}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('energyOptimization')}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Network className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('iotNetworkVisualization')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Brain className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('aiAnalyticsVisualization')}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('aiPredictiveAnalytics')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('aiAnalyticsDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Brain className="w-4 h-4 text-purple-500 mr-2" />
                          {t('predictiveMaintenance')}
                        </li>
                        <li className="flex items-center">
                          <BarChart3 className="w-4 h-4 text-purple-500 mr-2" />
                          {t('demandForecasting')}
                        </li>
                        <li className="flex items-center">
                          <Zap className="w-4 h-4 text-purple-500 mr-2" />
                          {t('processOptimization')}
                        </li>
                        <li className="flex items-center">
                          <Shield className="w-4 h-4 text-purple-500 mr-2" />
                          {t('anomalyDetection')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vision">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('computerVisionSystem')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('visionSystemDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Camera className="w-4 h-4 text-green-500 mr-2" />
                          {t('qualityInspection')}
                        </li>
                        <li className="flex items-center">
                          <Eye className="w-4 h-4 text-green-500 mr-2" />
                          {t('defectDetection')}
                        </li>
                        <li className="flex items-center">
                          <Settings className="w-4 h-4 text-green-500 mr-2" />
                          {t('dimensionalAnalysis')}
                        </li>
                        <li className="flex items-center">
                          <Cpu className="w-4 h-4 text-green-500 mr-2" />
                          {t('automatedSorting')}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('visionSystemVisualization')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="twin">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Monitor className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('digitalTwinVisualization')}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('digitalTwinPlatform')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('digitalTwinDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Monitor className="w-4 h-4 text-indigo-500 mr-2" />
                          {t('virtualSimulation')}
                        </li>
                        <li className="flex items-center">
                          <BarChart3 className="w-4 h-4 text-indigo-500 mr-2" />
                          {t('performanceOptimization')}
                        </li>
                        <li className="flex items-center">
                          <Wrench className="w-4 h-4 text-indigo-500 mr-2" />
                          {t('maintenancePlanning')}
                        </li>
                        <li className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-indigo-500 mr-2" />
                          {t('scenarioTesting')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('readyForSmartTransformation')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('smartTransformationDescription')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                {t('scheduleConsultation')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('requestSmartFactoryDemo')}
              </Button>
            </div>
          </motion.div>        </div>
      </section>
    </>
  );
};

// Use the ResourcesLayout for this page
(SmartManufacturingTransformationPage as PageWithLayout).getLayout = function getLayout(page: ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default SmartManufacturingTransformationPage;
