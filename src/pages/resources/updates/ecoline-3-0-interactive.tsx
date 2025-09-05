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

// Icons
import { 
  Leaf, 
  Beaker, 
  TrendingUp, 
  Recycle, 
  ChevronRight,
  Play,
  Thermometer,
  Weight,
  Zap,
  Eye,
  Calculator,
  Download,
  ArrowLeft
} from 'lucide-react';

// Data
import { customUpdates } from '../../../data/customUpdatesRegistry';

interface EcoLineFeature {
  id: string;
  name: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  improvement: string;
  icon: React.ReactNode;
  color: string;
}

interface PerformanceMetric {
  label: { en: string; hu: string; de: string };
  current: number;
  previous: number;
  unit: string;
  improvement: number;
}

const EcoLine3InteractivePage: React.FC = () => {
  const { language, translations } = useLanguage();
  const router = useRouter();
  
  // Helper function to get translation
  const t = (key: string) => translations[key]?.[language] || key;
  
  const getCurrentLang = () => language;
    const [isPlaying, setIsPlaying] = useState(false);

  // Get the update data
  const updateData = customUpdates.find(update => update.slug === 'ecoline-3-0-interactive-update');

  useEffect(() => {
    // Animate performance metrics on load
    const timer = setTimeout(() => {
      setAnimatedValues({
        carbonReduction: 75,
        strengthIncrease: 30,
        costReduction: 15,
        temperatureRange: 160
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const features: EcoLineFeature[] = [
    {
      id: 'carbon-footprint',
      name: {
        en: 'Carbon Footprint Reduction',
        hu: 'Szénlábnyom csökkentés',
        de: 'CO2-Fußabdruck-Reduzierung'
      },
      description: {
        en: '75% reduction in carbon emissions through innovative bio-based materials and optimized manufacturing processes.',
        hu: '75%-os szén-dioxid-kibocsátás csökkentés innovatív bio-alapú anyagokkal és optimalizált gyártási folyamatokkal.',
        de: '75% Reduzierung der CO2-Emissionen durch innovative biobasierte Materialien und optimierte Herstellungsprozesse.'
      },
      improvement: '75%',
      icon: <Leaf className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      id: 'biodegradability',
      name: {
        en: 'Marine Biodegradability',
        hu: 'Tengeri biológiai lebomlás',
        de: 'Marine Biologische Abbaubarkeit'
      },
      description: {
        en: 'Certified for marine environments with complete biodegradation within 18 months under standard conditions.',
        hu: 'Tengeri környezetekben tanúsítva, standard körülmények között 18 hónapon belüli teljes biológiai lebomlással.',
        de: 'Zertifiziert für Meeresumgebungen mit vollständiger biologischer Abbaubarkeit innerhalb von 18 Monaten unter Standardbedingungen.'
      },
      improvement: '100%',
      icon: <Recycle className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'mechanical-properties',
      name: {
        en: 'Enhanced Strength',
        hu: 'Fokozott szilárdság',
        de: 'Verbesserte Festigkeit'
      },
      description: {
        en: '30% increase in tensile strength while maintaining flexibility and impact resistance.',
        hu: '30%-os növekedés a szakítószilárdságban, miközben megőrzi a rugalmasságot és ütésállóságot.',
        de: '30% Steigerung der Zugfestigkeit bei Beibehaltung von Flexibilität und Schlagfestigkeit.'
      },
      improvement: '+30%',
      icon: <Weight className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 'temperature-range',
      name: {
        en: 'Extended Temperature Range',
        hu: 'Kiterjesztett hőmérséklet tartomány',
        de: 'Erweiterte Temperaturbereich'
      },
      description: {
        en: 'Operational range from -40°C to +120°C, expanding application possibilities significantly.',
        hu: 'Működési tartomány -40°C-tól +120°C-ig, jelentősen kibővítve az alkalmazási lehetőségeket.',
        de: 'Betriebsbereich von -40°C bis +120°C, was die Anwendungsmöglichkeiten erheblich erweitert.'
      },
      improvement: '160°C',
      icon: <Thermometer className="w-6 h-6" />,
      color: 'bg-red-500'
    }
  ];

  const performanceMetrics: PerformanceMetric[] = [
    {
      label: { en: 'Carbon Reduction', hu: 'Széncsökkentés', de: 'CO2-Reduzierung' },
      current: 75,
      previous: 0,
      unit: '%',
      improvement: 75
    },
    {
      label: { en: 'Tensile Strength', hu: 'Szakítószilárdság', de: 'Zugfestigkeit' },
      current: 130,
      previous: 100,
      unit: 'MPa',
      improvement: 30
    },
    {
      label: { en: 'Cost Efficiency', hu: 'Költséghatékonyság', de: 'Kosteneffizienz' },
      current: 85,
      previous: 100,
      unit: '%',
      improvement: -15
    },
    {
      label: { en: 'Biodegradation Time', hu: 'Lebomlási idő', de: 'Abbauzeit' },
      current: 18,
      previous: 36,
      unit: 'months',
      improvement: -50
    }  ];

  const handleDemoPlay = () => {
    setIsPlaying(!isPlaying);
    // Simulate demo animation
    setTimeout(() => setIsPlaying(false), 3000);
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
              onClick={() => router.push('/resources/updates')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToUpdates')}
            </Button>

            <Badge className="mb-4 bg-green-500/20 text-green-100 border-green-400">
              {t('majorUpdate')}
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
                {t('downloadSpecs')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('performanceMetrics')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('performanceDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-800 mb-4">
                        {metric.label[getCurrentLang()]}
                      </h3>
                      
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {metric.current}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-500">
                          {t('previousVersion')}: {metric.previous}{metric.unit}
                        </div>
                      </div>

                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className={`w-4 h-4 ${
                          metric.improvement > 0 ? 'text-green-500' : 'text-red-500'
                        }`} />
                        <span className={`font-semibold ${
                          metric.improvement > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.improvement > 0 ? '+' : ''}{metric.improvement}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Explorer */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('interactiveFeatures')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('exploreFeatures')}
            </p>
          </motion.div>

          <Tabs defaultValue="carbon-footprint" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {features.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="text-sm"
                >
                  <span className="mr-2">{feature.icon}</span>
                  <span className="hidden sm:inline">
                    {feature.name[getCurrentLang()]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <Card>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-lg ${feature.color} text-white mr-4`}>
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">
                              {feature.name[getCurrentLang()]}
                            </h3>
                            <Badge variant="secondary" className="mt-1">
                              {feature.improvement} {t('improvement')}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 text-lg mb-6">
                          {feature.description[getCurrentLang()]}
                        </p>

                        <div className="space-y-4">
                          <Button className="mr-4">
                            <Eye className="w-4 h-4 mr-2" />
                            {t('view3DModel')}
                          </Button>
                          <Button variant="outline">
                            <Calculator className="w-4 h-4 mr-2" />
                            {t('openCalculator')}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 h-64 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                            {feature.icon}
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
                              <div className="animate-pulse text-green-600">
                                {t('simulationRunning')}
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

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t('technicalSpecifications')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Beaker className="w-5 h-5 mr-2" />
                    {t('materialProperties')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>{t('tensileStrength')}</span>
                      <span className="font-semibold">130 MPa</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('flexuralModulus')}</span>
                      <span className="font-semibold">2.8 GPa</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('impactStrength')}</span>
                      <span className="font-semibold">45 kJ/m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('density')}</span>
                      <span className="font-semibold">1.24 g/cm³</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    {t('performanceCharacteristics')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>{t('operatingTemp')}</span>
                      <span className="font-semibold">-40°C to +120°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('biodegradationTime')}</span>
                      <span className="font-semibold">18 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('carbonFootprint')}</span>
                      <span className="font-semibold text-green-600">-75%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('costEfficiency')}</span>
                      <span className="font-semibold text-blue-600">+15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('readyToUpgrade')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('upgradeDescription')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                {t('requestQuote')}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('scheduleDemo')}
              </Button>
            </div>        </motion.div>
        </div>
      </section>
    </ResourcesLayout>
  );
};

export default EcoLine3InteractivePage;
