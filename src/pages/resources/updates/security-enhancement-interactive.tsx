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
  Shield, 
  Lock, 
  Key, 
  Eye, 
  CheckCircle,
  AlertTriangle,
  Users,
  Globe,
  FileText,
  ArrowLeft,
  Settings,
  Download,
  BarChart3,
  UserCheck,
  Database
} from 'lucide-react';

// Data
import { customUpdates } from '../../../data/customUpdatesRegistry';

interface SecurityFeature {
  id: string;
  name: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  status: 'implemented' | 'in-progress' | 'planned';
  priority: 'critical' | 'high' | 'medium';
  icon: React.ReactNode;
}

interface ComplianceStandard {
  id: string;
  name: string;
  status: 'compliant' | 'partial' | 'pending';
  coverage: number;
}

const SecurityEnhancementInteractivePage: React.FC = () => {
  const { language, translations } = useLanguage();
  const router = useRouter();
    // Helper function to get translation
  const t = (key: string) => translations[key]?.[language] || key;
  
  const getCurrentLang = () => language;
    const [securityScore, setSecurityScore] = useState(95);
  const [threatLevel, setThreatLevel] = useState('low');
  const [isScanning, setIsScanning] = useState(false);

  // Get the update data
  const updateData = customUpdates.find(update => update.slug === 'security-enhancement-interactive-implementation');

  useEffect(() => {
    // Simulate security monitoring
    const interval = setInterval(() => {
      if (isScanning) {
        setSecurityScore(prev => Math.min(100, prev + (Math.random() - 0.3) * 2));
        
        const threats = ['low', 'medium', 'high'];
        const randomThreat = threats[Math.floor(Math.random() * threats.length)];
        setThreatLevel(randomThreat);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isScanning]);

  const securityFeatures: SecurityFeature[] = [
    {
      id: 'encryption',
      name: {
        en: 'Advanced Encryption',
        hu: 'Fejlett titkosítás',
        de: 'Erweiterte Verschlüsselung'
      },
      description: {
        en: 'End-to-end encryption with AES-256 and RSA-4096 for all data transmission and storage.',
        hu: 'Végpontok közötti titkosítás AES-256 és RSA-4096 technológiákkal minden adatátvitelhez és tároláshoz.',
        de: 'End-to-End-Verschlüsselung mit AES-256 und RSA-4096 für alle Datenübertragung und -speicherung.'
      },
      status: 'implemented',
      priority: 'critical',
      icon: <Lock className="w-6 h-6" />
    },
    {
      id: 'authentication',
      name: {
        en: 'Multi-Factor Authentication',
        hu: 'Többfaktoros hitelesítés',
        de: 'Multifaktor-Authentifizierung'
      },
      description: {
        en: 'Enhanced user verification with biometric authentication, hardware tokens, and adaptive security.',
        hu: 'Fokozott felhasználó-hitelesítés biometrikus hitelesítéssel, hardver tokenekkel és adaptív biztonsággal.',
        de: 'Verbesserte Benutzerverifizierung mit biometrischer Authentifizierung, Hardware-Token und adaptiver Sicherheit.'
      },
      status: 'implemented',
      priority: 'critical',
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      id: 'monitoring',
      name: {
        en: 'Real-time Security Monitoring',
        hu: 'Valós idejű biztonsági monitoring',
        de: 'Echtzeit-Sicherheitsüberwachung'
      },
      description: {
        en: 'AI-powered threat detection with 24/7 monitoring and automated incident response.',
        hu: 'AI-vezérelt fenyegetésészlelés 24/7 monitoringgal és automatizált incidenskezeléssel.',
        de: 'KI-gesteuerte Bedrohungserkennung mit 24/7-Überwachung und automatisierter Incident-Response.'
      },
      status: 'implemented',
      priority: 'high',
      icon: <Eye className="w-6 h-6" />
    },
    {
      id: 'access-control',
      name: {
        en: 'Zero Trust Access Control',
        hu: 'Zero Trust hozzáférés-szabályozás',
        de: 'Zero Trust Zugriffskontrolle'
      },
      description: {
        en: 'Role-based access control with dynamic permissions and continuous verification.',
        hu: 'Szerepalapú hozzáférés-szabályozás dinamikus jogosultságokkal és folyamatos ellenőrzéssel.',
        de: 'Rollenbasierte Zugriffskontrolle mit dynamischen Berechtigungen und kontinuierlicher Verifizierung.'
      },
      status: 'in-progress',
      priority: 'high',
      icon: <Key className="w-6 h-6" />
    }
  ];

  const complianceStandards: ComplianceStandard[] = [
    { id: 'iso27001', name: 'ISO 27001', status: 'compliant', coverage: 100 },
    { id: 'gdpr', name: 'GDPR', status: 'compliant', coverage: 100 },
    { id: 'sox', name: 'SOX', status: 'compliant', coverage: 95 },
    { id: 'hipaa', name: 'HIPAA', status: 'partial', coverage: 78 },
    { id: 'pci-dss', name: 'PCI DSS', status: 'compliant', coverage: 100 },
    { id: 'nist', name: 'NIST Framework', status: 'partial', coverage: 85 }  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'implemented': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'planned': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'compliant': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-red-500';
      default: return 'bg-gray-500';
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
      <section className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-20">
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

            <Badge className="mb-4 bg-red-500/20 text-red-100 border-red-400">
              {t('criticalSecurity')}
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
                className="bg-white text-red-600 hover:bg-gray-100"
                onClick={() => setIsScanning(!isScanning)}
              >
                <Shield className="w-5 h-5 mr-2" />
                {isScanning ? t('stopMonitoring') : t('startSecurityScan')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('downloadSecurityGuide')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('securityDashboard')}
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className={`w-3 h-3 rounded-full ${isScanning ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="font-semibold">
                {isScanning ? t('activeMonitoring') : t('monitoringInactive')}
              </span>
            </div>
          </motion.div>

          {/* Security Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  {securityScore.toFixed(1)}%
                </h3>
                <p className="text-gray-600">{t('securityScore')}</p>
                <Progress value={securityScore} className="mt-3" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <AlertTriangle className={`w-12 h-12 mx-auto mb-4 ${
                  threatLevel === 'low' ? 'text-green-600' :
                  threatLevel === 'medium' ? 'text-yellow-600' : 'text-red-600'
                }`} />
                <h3 className="text-2xl font-bold mb-2 capitalize">
                  {threatLevel}
                </h3>
                <p className="text-gray-600">{t('threatLevel')}</p>
                <div className={`w-full h-2 rounded-full mt-3 ${getThreatLevelColor(threatLevel)}`}></div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {securityFeatures.filter(f => f.status === 'implemented').length}/{securityFeatures.length}
                </h3>
                <p className="text-gray-600">{t('featuresImplemented')}</p>
                <Progress 
                  value={(securityFeatures.filter(f => f.status === 'implemented').length / securityFeatures.length) * 100} 
                  className="mt-3" 
                />
              </CardContent>
            </Card>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  {t('securityFeatures')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedFeature(feature.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          <div className="p-2 bg-blue-100 rounded-lg mr-3">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold">{feature.name[getCurrentLang()]}</h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className={getStatusColor(feature.status)}>
                                {t(feature.status)}
                              </Badge>
                              <span className={`text-sm font-medium ${getPriorityColor(feature.priority)}`}>
                                {t(feature.priority)} {t('priority')}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 ml-14">
                        {feature.description[getCurrentLang()]}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compliance Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  {t('complianceStatus')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceStandards.map((standard) => (
                    <div key={standard.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{standard.name}</span>
                        <Badge className={getStatusColor(standard.status)}>
                          {t(standard.status)}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>{t('coverage')}</span>
                        <span>{standard.coverage}%</span>
                      </div>
                      <Progress value={standard.coverage} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('implementationGuide')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('implementationDescription')}
            </p>
          </motion.div>

          <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">
                <BarChart3 className="w-4 h-4 mr-2" />
                {t('overview')}
              </TabsTrigger>
              <TabsTrigger value="network">
                <Globe className="w-4 h-4 mr-2" />
                {t('networkSecurity')}
              </TabsTrigger>
              <TabsTrigger value="data">
                <Database className="w-4 h-4 mr-2" />
                {t('dataProtection')}
              </TabsTrigger>
              <TabsTrigger value="access">
                <Users className="w-4 h-4 mr-2" />
                {t('accessManagement')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{t('securityOverview')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('securityOverviewDescription')}
                      </p>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <span>{t('multiLayerSecurity')}</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <span>{t('proactiveMonitoring')}</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <span>{t('incidentResponse')}</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <span>{t('continuousImprovement')}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-600">{t('securityArchitecture')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="network">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{t('networkSecurityMeasures')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('firewallProtection')}</h4>
                        <p className="text-sm text-gray-600">{t('firewallDescription')}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('intrusionDetection')}</h4>
                        <p className="text-sm text-gray-600">{t('intrusionDescription')}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('networkSegmentation')}</h4>
                        <p className="text-sm text-gray-600">{t('segmentationDescription')}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('vpnAccess')}</h4>
                        <p className="text-sm text-gray-600">{t('vpnDescription')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{t('dataProtectionMeasures')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('encryptionAtRest')}</h4>
                        <p className="text-sm text-gray-600">{t('encryptionRestDescription')}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('encryptionInTransit')}</h4>
                        <p className="text-sm text-gray-600">{t('encryptionTransitDescription')}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('dataBackup')}</h4>
                        <p className="text-sm text-gray-600">{t('backupDescription')}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('dataClassification')}</h4>
                        <p className="text-sm text-gray-600">{t('classificationDescription')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="access">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{t('accessManagementControls')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('roleBasedAccess')}</h4>
                        <p className="text-sm text-gray-600">{t('roleBasedDescription')}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('privilegedAccess')}</h4>
                        <p className="text-sm text-gray-600">{t('privilegedDescription')}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('sessionManagement')}</h4>
                        <p className="text-sm text-gray-600">{t('sessionDescription')}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{t('auditTrail')}</h4>
                        <p className="text-sm text-gray-600">{t('auditDescription')}</p>
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('enhanceYourSecurity')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('securityEnhancementDescription')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                {t('scheduleSecurityAudit')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('requestSecurityConsultation')}
              </Button>
            </div>
          </motion.div>        </div>
      </section>
    </ResourcesLayout>
  );
};

export default SecurityEnhancementInteractivePage;
