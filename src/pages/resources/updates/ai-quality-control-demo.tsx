import React, { useState, useEffect } from 'react';
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
  Brain, 
  Eye, 
  Shield, 
  Zap, 
  BarChart3,
  Camera,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Clock,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Download,
  Monitor
} from 'lucide-react';

// Data
import { customUpdates } from '../../../data/customUpdatesRegistry';

interface QualityMetric {
  id: string;
  label: { en: string; hu: string; de: string };
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

interface DefectType {
  id: string;
  name: { en: string; hu: string; de: string };
  count: number;
  severity: 'low' | 'medium' | 'high';
  confidence: number;
}

const AIQualityControlDemoPage: React.FC = () => {
  const { language, translations } = useLanguage();
  const router = useRouter();
  
  // Helper function to get translation
  const t = (key: string) => translations[key]?.[language] || key;
  
  const getCurrentLang = () => language;
  
  const [isLiveDemo, setIsLiveDemo] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState('camera-1');
  const [detectedDefects, setDetectedDefects] = useState<DefectType[]>([]);
  const [qualityScore, setQualityScore] = useState(98.5);
  const [processingSpeed, setProcessingSpeed] = useState(0);

  // Get the update data
  const updateData = customUpdates.find(update => update.slug === 'ai-quality-control-system-launch');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isLiveDemo) {
      interval = setInterval(() => {
        // Simulate real-time data updates
        setQualityScore(prev => Math.min(99.9, prev + (Math.random() - 0.5) * 0.2));
        setProcessingSpeed(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 10)));
        
        // Simulate defect detection
        if (Math.random() < 0.1) {
          const newDefect: DefectType = {
            id: `defect-${Date.now()}`,
            name: {
              en: ['Surface scratch', 'Color variation', 'Dimension mismatch', 'Material contamination'][Math.floor(Math.random() * 4)],
              hu: ['Felületi karcolás', 'Színeltérés', 'Méreteltérés', 'Anyag szennyeződés'][Math.floor(Math.random() * 4)],
              de: ['Oberflächenkratzer', 'Farbabweichung', 'Maßabweichung', 'Materialverunreinigung'][Math.floor(Math.random() * 4)]
            },
            count: Math.floor(Math.random() * 5) + 1,
            severity: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
            confidence: Math.floor(Math.random() * 20) + 80
          };
          
          setDetectedDefects(prev => [...prev.slice(-4), newDefect]);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLiveDemo]);

  const qualityMetrics: QualityMetric[] = [
    {
      id: 'accuracy',
      label: { en: 'Detection Accuracy', hu: 'Észlelési pontosság', de: 'Erkennungsgenauigkeit' },
      value: qualityScore,
      target: 98.0,
      unit: '%',
      trend: 'up',
      color: 'text-green-600'
    },
    {
      id: 'speed',
      label: { en: 'Processing Speed', hu: 'Feldolgozási sebesség', de: 'Verarbeitungsgeschwindigkeit' },
      value: processingSpeed,
      target: 85,
      unit: 'fps',
      trend: 'stable',
      color: 'text-blue-600'
    },
    {
      id: 'defects',
      label: { en: 'Defects Detected', hu: 'Észlelt hibák', de: 'Erkannte Defekte' },
      value: detectedDefects.length,
      target: 0,
      unit: '',
      trend: 'down',
      color: 'text-red-600'
    },
    {
      id: 'throughput',
      label: { en: 'Throughput', hu: 'Áteresztőképesség', de: 'Durchsatz' },
      value: 1250,
      target: 1200,
      unit: 'units/hr',
      trend: 'up',
      color: 'text-purple-600'
    }
  ];

  const cameraViews = [
    { id: 'camera-1', name: 'Station 1 - Injection', status: 'active' },
    { id: 'camera-2', name: 'Station 2 - Cooling', status: 'active' },
    { id: 'camera-3', name: 'Station 3 - Finishing', status: 'maintenance' },
    { id: 'camera-4', name: 'Station 4 - Packaging', status: 'active' }  ];

  const handleDemoToggle = () => {
    setIsLiveDemo(!isLiveDemo);
    if (!isLiveDemo) {
      setDetectedDefects([]);
      setQualityScore(98.5);
      setProcessingSpeed(75);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!updateData) {
    return <div>Update not found</div>;
  }
  return (
    <ResourcesLayout>
      <Head>
        <title>{updateData.title?.[getCurrentLang()]} | Star-Plus Plastics</title>
        <meta 
          name="description" 
          content={updateData.description?.[getCurrentLang()]} 
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
              onClick={() => router.push('/resources/updates')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToUpdates')}
            </Button>

            <Badge className="mb-4 bg-blue-500/20 text-blue-100 border-blue-400">
              {t('liveDemo')}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {updateData.title?.[getCurrentLang()]}
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {updateData.description?.[getCurrentLang()]}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={handleDemoToggle}
              >
                {isLiveDemo ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isLiveDemo ? t('pauseDemo') : t('startLiveDemo')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('downloadTechnicalSpecs')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Demo Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('liveDashboard')}
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className={`w-3 h-3 rounded-full ${isLiveDemo ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="font-semibold">
                {isLiveDemo ? t('liveDataStream') : t('demoStopped')}
              </span>
            </div>
          </motion.div>

          {/* Real-time Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {qualityMetrics.map((metric, index) => (
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
                        <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                          {metric.value.toFixed(1)}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-500">
                          {t('target')}: {metric.target}{metric.unit}
                        </div>
                      </div>

                      <Progress 
                        value={(metric.value / metric.target) * 100} 
                        className="h-2"
                      />
                      
                      <div className="flex items-center justify-center mt-2">
                        <TrendingUp className={`w-4 h-4 mr-1 ${
                          metric.trend === 'up' ? 'text-green-500' : 
                          metric.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                        }`} />
                        <span className="text-sm text-gray-600">{t(metric.trend)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Camera Views and Detection Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Camera View */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Camera className="w-5 h-5 mr-2" />
                    {t('cameraViews')}
                  </div>
                  <Badge variant={isLiveDemo ? "default" : "secondary"}>
                    {isLiveDemo ? t('live') : t('offline')}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {cameraViews.map((camera) => (
                      <Button
                        key={camera.id}
                        variant={selectedCamera === camera.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCamera(camera.id)}
                        className="text-xs"
                      >
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          camera.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        {camera.name}
                      </Button>
                    ))}
                  </div>

                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">{t('cameraFeed')}</p>
                      <p className="text-sm text-gray-500">{selectedCamera}</p>
                    </div>
                    
                    {isLiveDemo && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-blue-500/10 flex items-center justify-center"
                      >
                        <div className="bg-white/90 p-4 rounded-lg shadow-lg">
                          <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <p className="text-sm font-semibold">{t('aiProcessing')}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detection Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  {t('detectionResults')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {detectedDefects.length === 0 ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <p className="text-gray-600">{t('noDefectsDetected')}</p>
                      <p className="text-sm text-gray-500 mt-2">{t('qualityStandard')}</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {detectedDefects.map((defect) => (
                        <motion.div
                          key={defect.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`p-3 rounded-lg border ${getSeverityColor(defect.severity)}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">
                              {defect.name[getCurrentLang()]}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {defect.confidence}% {t('confidence')}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>{t('count')}: {defect.count}</span>
                            <span className="capitalize">{defect.severity} {t('severity')}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {isLiveDemo && (
                    <div className="flex justify-center space-x-2 pt-4 border-t">
                      <Button size="sm" variant="outline">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        {t('resetDetection')}
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        {t('configure')}
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Technology Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('aiTechnologyFeatures')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('aiTechnologyDescription')}
            </p>
          </motion.div>

          <Tabs defaultValue="detection" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="detection">
                <Eye className="w-4 h-4 mr-2" />
                {t('defectDetection')}
              </TabsTrigger>
              <TabsTrigger value="analysis">
                <BarChart3 className="w-4 h-4 mr-2" />
                {t('realTimeAnalysis')}
              </TabsTrigger>
              <TabsTrigger value="learning">
                <Brain className="w-4 h-4 mr-2" />
                {t('machineLearning')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="detection">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('advancedDefectDetection')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('defectDetectionDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('microscopicDefectDetection')}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('realTimeProcessing')}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('multiAngleInspection')}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('colorVariationDetection')}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Eye className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('visionSystemVisualization')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-gray-50 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('analyticsVisualization')}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('realTimeAnalytics')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('analyticsDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                          {t('trendAnalysis')}
                        </li>
                        <li className="flex items-center">
                          <BarChart3 className="w-4 h-4 text-green-500 mr-2" />
                          {t('performanceMetrics')}
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="w-4 h-4 text-green-500 mr-2" />
                          {t('predictiveAlerts')}
                        </li>
                        <li className="flex items-center">
                          <Clock className="w-4 h-4 text-green-500 mr-2" />
                          {t('historicalTracking')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="learning">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('adaptiveLearning')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('learningDescription')}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Brain className="w-4 h-4 text-purple-500 mr-2" />
                          {t('continuousImprovement')}
                        </li>
                        <li className="flex items-center">
                          <Zap className="w-4 h-4 text-purple-500 mr-2" />
                          {t('selfOptimization')}
                        </li>
                        <li className="flex items-center">
                          <Shield className="w-4 h-4 text-purple-500 mr-2" />
                          {t('falsePositiveReduction')}
                        </li>
                        <li className="flex items-center">
                          <Settings className="w-4 h-4 text-purple-500 mr-2" />
                          {t('customization')}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Brain className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('neuralNetworkVisualization')}</p>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('upgradeQualityControl')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('qualityControlUpgradeDescription')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                {t('scheduleConsultation')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('requestTechnicalDemo')}
              </Button>
            </div>
          </motion.div>
        </div>      </section>
    </ResourcesLayout>
  );
};

export default AIQualityControlDemoPage;
