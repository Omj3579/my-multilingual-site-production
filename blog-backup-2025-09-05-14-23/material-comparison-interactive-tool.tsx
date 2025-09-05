import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, Download, BookOpen, BarChart3, Zap, Leaf, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { customBlogHelpers } from '@/data/customBlogPostsRegistry';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';
import { useLanguage } from '../../../contexts/LanguageContext';

// Material properties interface
interface MaterialProperty {
  name: string;
  value: number;
  unit: string;
  category: 'mechanical' | 'thermal' | 'chemical' | 'cost' | 'environmental';
}

interface PostData {
  title?: { [key: string]: string };
  description?: { [key: string]: string };
  tags?: string[];
  [key: string]: unknown;
}

interface Material {
  id: string;
  name: string;
  category: string;
  description: string;
  properties: MaterialProperty[];
  applications: string[];
  sustainability: {
    recyclable: boolean;
    bioBased: boolean;
    carbonFootprint: number;
  };
  cost: {
    materialCost: number;
    processingCost: number;
    totalCost: number;
  };
  availability: 'excellent' | 'good' | 'limited';
  supplier: string;
  image?: string;
}

// Sample materials data
const materialsDatabase: Material[] = [
  {
    id: 'abs-1',
    name: 'ABS (High Impact)',
    category: 'Engineering Thermoplastics',
    description: 'High-impact ABS with excellent toughness and dimensional stability',
    properties: [
      { name: 'Tensile Strength', value: 45, unit: 'MPa', category: 'mechanical' },
      { name: 'Impact Strength', value: 25, unit: 'kJ/m²', category: 'mechanical' },
      { name: 'Heat Deflection', value: 95, unit: '°C', category: 'thermal' },
      { name: 'Chemical Resistance', value: 3, unit: '/5', category: 'chemical' }
    ],
    applications: ['Automotive parts', 'Electronics housings', 'Toys', 'Appliances'],
    sustainability: { recyclable: true, bioBased: false, carbonFootprint: 3.2 },
    cost: { materialCost: 2.5, processingCost: 1.2, totalCost: 3.7 },
    availability: 'excellent',
    supplier: 'Multiple suppliers available'
  },
  {
    id: 'pla-bio',
    name: 'PLA (Bio-based)',
    category: 'Biodegradable Polymers',
    description: 'Plant-based biodegradable polymer with good printability',
    properties: [
      { name: 'Tensile Strength', value: 50, unit: 'MPa', category: 'mechanical' },
      { name: 'Impact Strength', value: 5, unit: 'kJ/m²', category: 'mechanical' },
      { name: 'Heat Deflection', value: 55, unit: '°C', category: 'thermal' },
      { name: 'Chemical Resistance', value: 2, unit: '/5', category: 'chemical' }
    ],
    applications: ['Packaging', '3D printing', 'Disposable items', 'Food containers'],
    sustainability: { recyclable: false, bioBased: true, carbonFootprint: 1.8 },
    cost: { materialCost: 3.2, processingCost: 1.5, totalCost: 4.7 },
    availability: 'good',
    supplier: 'Specialized bio-plastic suppliers'
  },
  {
    id: 'pa6-gf30',
    name: 'PA6 (30% Glass Filled)',
    category: 'Engineering Thermoplastics',
    description: 'Glass-filled nylon with enhanced strength and stiffness',
    properties: [
      { name: 'Tensile Strength', value: 120, unit: 'MPa', category: 'mechanical' },
      { name: 'Impact Strength', value: 8, unit: 'kJ/m²', category: 'mechanical' },
      { name: 'Heat Deflection', value: 200, unit: '°C', category: 'thermal' },
      { name: 'Chemical Resistance', value: 4, unit: '/5', category: 'chemical' }
    ],
    applications: ['Automotive under-hood', 'Industrial gears', 'Electrical components'],
    sustainability: { recyclable: true, bioBased: false, carbonFootprint: 4.1 },
    cost: { materialCost: 4.8, processingCost: 2.1, totalCost: 6.9 },
    availability: 'excellent',
    supplier: 'Major chemical companies'
  },
  {
    id: 'peek',
    name: 'PEEK (Polyetheretherketone)',
    category: 'High Performance Thermoplastics',
    description: 'Ultra-high performance polymer for extreme conditions',
    properties: [
      { name: 'Tensile Strength', value: 90, unit: 'MPa', category: 'mechanical' },
      { name: 'Impact Strength', value: 6, unit: 'kJ/m²', category: 'mechanical' },
      { name: 'Heat Deflection', value: 315, unit: '°C', category: 'thermal' },
      { name: 'Chemical Resistance', value: 5, unit: '/5', category: 'chemical' }
    ],
    applications: ['Aerospace', 'Medical implants', 'Oil & gas', 'Electronics'],
    sustainability: { recyclable: true, bioBased: false, carbonFootprint: 8.5 },
    cost: { materialCost: 85, processingCost: 15, totalCost: 100 },
    availability: 'limited',
    supplier: 'Specialized high-performance suppliers'
  },
  {
    id: 'rpet',
    name: 'rPET (Recycled)',
    category: 'Recycled Thermoplastics',
    description: 'Recycled PET with good clarity and barrier properties',
    properties: [
      { name: 'Tensile Strength', value: 55, unit: 'MPa', category: 'mechanical' },
      { name: 'Impact Strength', value: 4, unit: 'kJ/m²', category: 'mechanical' },
      { name: 'Heat Deflection', value: 70, unit: '°C', category: 'thermal' },
      { name: 'Chemical Resistance', value: 3, unit: '/5', category: 'chemical' }
    ],
    applications: ['Bottles', 'Food packaging', 'Textiles', 'Containers'],
    sustainability: { recyclable: true, bioBased: false, carbonFootprint: 1.2 },
    cost: { materialCost: 1.8, processingCost: 1.0, totalCost: 2.8 },
    availability: 'good',
    supplier: 'Recycling companies'
  }
];

// Requirements interface
interface Requirements {
  tensileStrength: [number, number];
  impactStrength: [number, number];
  heatDeflection: [number, number];
  chemicalResistance: number;
  maxCost: number;
  sustainabilityRequired: boolean;
  applications: string[];
}

const MaterialComparisonTool: React.FC = () => {
  const router = useRouter();
  const { language, translations } = useLanguage();
  
  // Helper function to get translation
  const t = (key: string) => translations[key]?.[language] || key;
  const [postData, setPostData] = useState<PostData | null>(null);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('database');
  const [requirements, setRequirements] = useState<Requirements>({
    tensileStrength: [0, 200],
    impactStrength: [0, 50],
    heatDeflection: [0, 400],
    chemicalResistance: 1,
    maxCost: 50,
    sustainabilityRequired: false,
    applications: []
  });
  const [recommendations, setRecommendations] = useState<Material[]>([]);
  useEffect(() => {
    const post = customBlogHelpers.getBySlug('material-comparison-interactive-tool');
    if (post) {
      setPostData(post as PostData);
    }
  }, []);

  useEffect(() => {
    // Generate recommendations based on requirements
    const filtered = materialsDatabase.filter(material => {
      const tensileMatch = material.properties.find(p => p.name === 'Tensile Strength');
      const impactMatch = material.properties.find(p => p.name === 'Impact Strength');
      const heatMatch = material.properties.find(p => p.name === 'Heat Deflection');
      const chemicalMatch = material.properties.find(p => p.name === 'Chemical Resistance');

      const tensileOk = !tensileMatch || (tensileMatch.value >= requirements.tensileStrength[0] && tensileMatch.value <= requirements.tensileStrength[1]);
      const impactOk = !impactMatch || (impactMatch.value >= requirements.impactStrength[0] && impactMatch.value <= requirements.impactStrength[1]);
      const heatOk = !heatMatch || (heatMatch.value >= requirements.heatDeflection[0] && heatMatch.value <= requirements.heatDeflection[1]);
      const chemicalOk = !chemicalMatch || chemicalMatch.value >= requirements.chemicalResistance;
      const costOk = material.cost.totalCost <= requirements.maxCost;
      const sustainabilityOk = !requirements.sustainabilityRequired || material.sustainability.recyclable || material.sustainability.bioBased;

      return tensileOk && impactOk && heatOk && chemicalOk && costOk && sustainabilityOk;
    });

    setRecommendations(filtered.slice(0, 5));
  }, [requirements]);

  const filteredMaterials = materialsDatabase.filter(material =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMaterialSelection = (materialId: string) => {
    setSelectedMaterials(prev => 
      prev.includes(materialId)
        ? prev.filter(id => id !== materialId)
        : [...prev, materialId].slice(0, 4) // Limit to 4 materials for comparison
    );
  };

  const calculateSuitabilityScore = (material: Material): number => {
    let score = 0;
    let maxScore = 0;

    // Check each requirement
    const tensileProperty = material.properties.find(p => p.name === 'Tensile Strength');
    if (tensileProperty) {
      maxScore += 25;
      if (tensileProperty.value >= requirements.tensileStrength[0] && tensileProperty.value <= requirements.tensileStrength[1]) {
        score += 25;
      }
    }

    const impactProperty = material.properties.find(p => p.name === 'Impact Strength');
    if (impactProperty) {
      maxScore += 25;
      if (impactProperty.value >= requirements.impactStrength[0] && impactProperty.value <= requirements.impactStrength[1]) {
        score += 25;
      }
    }

    const heatProperty = material.properties.find(p => p.name === 'Heat Deflection');
    if (heatProperty) {
      maxScore += 25;
      if (heatProperty.value >= requirements.heatDeflection[0] && heatProperty.value <= requirements.heatDeflection[1]) {
        score += 25;
      }
    }

    // Cost factor
    maxScore += 25;
    if (material.cost.totalCost <= requirements.maxCost) {
      score += 25;
    }

    return maxScore > 0 ? (score / maxScore) * 100 : 0;
  };
  const breadcrumbItems = [
    { href: `/${language}`, label: t('nav.home') },
    { href: `/${language}/resources`, label: t('nav.resources') },
    { href: `/${language}/resources/blog`, label: t('nav.blog') },
    { label: postData?.title?.[language] || 'Material Comparison Tool' }
  ];

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <>      <Head>
        <title>{postData?.title?.[language] || 'Material Comparison Tool'} | Flair Plastic</title>
        <meta name="description" content={postData?.description?.[language] || 'Interactive material comparison tool'} />
        <meta name="keywords" content={postData?.tags?.join(', ') || 'materials, comparison, plastic'} />
        <link rel="canonical" href={`https://flairplastic.com${router.asPath}`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 py-8">
          <NavigationBreadcrumb items={breadcrumbItems} />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="mb-4 hover:bg-blue-100"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('common.back')}
            </Button>            <div className="text-center">              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {postData?.title?.[language] || 'Material Comparison Tool'}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                {postData?.description?.[language] || 'Interactive tool for comparing plastic materials'}
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {(postData?.readTime as number) || 10} min read
                </span>                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date((postData?.date as string) || Date.now()).toLocaleDateString(language)}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Tool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Tabs defaultValue="database" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="database">Material Database</TabsTrigger>
                <TabsTrigger value="requirements">Set Requirements</TabsTrigger>
                <TabsTrigger value="compare">Compare Materials</TabsTrigger>
                <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
              </TabsList>

              {/* Material Database Tab */}
              <TabsContent value="database" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      Material Database Explorer
                    </CardTitle>
                    <CardDescription>
                      Browse our comprehensive database of over 200+ plastic materials
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <Input
                        placeholder="Search materials by name, category, or application..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredMaterials.map((material) => (
                        <motion.div
                          key={material.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.02 }}
                          className="cursor-pointer"
                        >
                          <Card 
                            className={`h-full transition-all duration-200 ${
                              selectedMaterials.includes(material.id) 
                                ? 'ring-2 ring-blue-500 bg-blue-50' 
                                : 'hover:shadow-lg'
                            }`}
                            onClick={() => toggleMaterialSelection(material.id)}
                          >
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle className="text-lg">{material.name}</CardTitle>
                                  <Badge variant="secondary" className="mt-1">
                                    {material.category}
                                  </Badge>
                                </div>
                                <Checkbox 
                                  checked={selectedMaterials.includes(material.id)}
                                  onChange={() => {}}
                                />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-600 mb-3">
                                {material.description}
                              </p>
                              
                              <div className="space-y-2 mb-3">
                                {material.properties.slice(0, 2).map((prop) => (
                                  <div key={prop.name} className="flex justify-between text-sm">
                                    <span>{prop.name}:</span>
                                    <span className="font-medium">{prop.value} {prop.unit}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">
                                  ${material.cost.totalCost}/kg
                                </span>
                                <div className="flex space-x-1">
                                  {material.sustainability.recyclable && (
                                    <Badge variant="outline" className="text-xs">
                                      <Leaf className="w-3 h-3 mr-1" />
                                      Recyclable
                                    </Badge>
                                  )}
                                  {material.sustainability.bioBased && (
                                    <Badge variant="outline" className="text-xs">
                                      <Leaf className="w-3 h-3 mr-1" />
                                      Bio-based
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Requirements Tab */}
              <TabsContent value="requirements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Filter className="w-5 h-5 mr-2" />
                      Define Your Requirements
                    </CardTitle>
                    <CardDescription>
                      Set your specific performance and cost requirements to get personalized recommendations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Mechanical Properties */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Mechanical Properties</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Tensile Strength Range (MPa)
                          </label>                          <Slider
                            value={requirements.tensileStrength}
                            onValueChange={(value: number[]) => setRequirements(prev => ({ ...prev, tensileStrength: value as [number, number] }))}
                            max={200}
                            step={5}
                            className="mb-2"
                          />
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>{requirements.tensileStrength[0]} MPa</span>
                            <span>{requirements.tensileStrength[1]} MPa</span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Impact Strength Range (kJ/m²)
                          </label>                          <Slider
                            value={requirements.impactStrength}
                            onValueChange={(value: number[]) => setRequirements(prev => ({ ...prev, impactStrength: value as [number, number] }))}
                            max={50}
                            step={1}
                            className="mb-2"
                          />
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>{requirements.impactStrength[0]} kJ/m²</span>
                            <span>{requirements.impactStrength[1]} kJ/m²</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Thermal Properties */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Thermal Properties</h3>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Heat Deflection Temperature Range (°C)
                        </label>                        <Slider
                          value={requirements.heatDeflection}
                          onValueChange={(value: number[]) => setRequirements(prev => ({ ...prev, heatDeflection: value as [number, number] }))}
                          max={400}
                          step={10}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{requirements.heatDeflection[0]}°C</span>
                          <span>{requirements.heatDeflection[1]}°C</span>
                        </div>
                      </div>
                    </div>

                    {/* Chemical & Cost Requirements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Minimum Chemical Resistance (1-5 scale)
                        </label>
                        <Select 
                          value={requirements.chemicalResistance.toString()}
                          onValueChange={(value) => setRequirements(prev => ({ ...prev, chemicalResistance: parseInt(value) }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 - Poor</SelectItem>
                            <SelectItem value="2">2 - Fair</SelectItem>
                            <SelectItem value="3">3 - Good</SelectItem>
                            <SelectItem value="4">4 - Very Good</SelectItem>
                            <SelectItem value="5">5 - Excellent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Maximum Cost ($/kg): {requirements.maxCost}
                        </label>                        <Slider
                          value={[requirements.maxCost]}
                          onValueChange={(value: number[]) => setRequirements(prev => ({ ...prev, maxCost: value[0] }))}
                          max={100}
                          step={5}
                          className="mb-2"
                        />
                      </div>
                    </div>

                    {/* Sustainability Requirements */}
                    <div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="sustainability"
                          checked={requirements.sustainabilityRequired}
                          onCheckedChange={(checked) => setRequirements(prev => ({ ...prev, sustainabilityRequired: checked as boolean }))}
                        />
                        <label htmlFor="sustainability" className="text-sm font-medium">
                          Sustainability Required (Recyclable or Bio-based)
                        </label>
                      </div>
                    </div>

                    <Button 
                      onClick={() => setActiveTab('recommendations')}
                      className="w-full"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Generate Recommendations
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Compare Materials Tab */}
              <TabsContent value="compare" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Material Comparison
                    </CardTitle>
                    <CardDescription>
                      Compare selected materials side by side ({selectedMaterials.length}/4 selected)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedMaterials.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">
                          Select materials from the database to compare them here
                        </p>
                        <Button onClick={() => setActiveTab('database')}>
                          Go to Material Database
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Comparison Table */}
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-3 font-medium">Property</th>
                                {selectedMaterials.map(id => {
                                  const material = materialsDatabase.find(m => m.id === id);
                                  return (
                                    <th key={id} className="text-center p-3 font-medium min-w-32">
                                      {material?.name}
                                    </th>
                                  );
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              {['Tensile Strength', 'Impact Strength', 'Heat Deflection', 'Chemical Resistance'].map(propName => (
                                <tr key={propName} className="border-b">
                                  <td className="p-3 font-medium">{propName}</td>
                                  {selectedMaterials.map(id => {
                                    const material = materialsDatabase.find(m => m.id === id);
                                    const prop = material?.properties.find(p => p.name === propName);
                                    return (
                                      <td key={id} className="text-center p-3">
                                        {prop ? `${prop.value} ${prop.unit}` : 'N/A'}
                                      </td>
                                    );
                                  })}
                                </tr>
                              ))}
                              <tr className="border-b">
                                <td className="p-3 font-medium">Total Cost</td>
                                {selectedMaterials.map(id => {
                                  const material = materialsDatabase.find(m => m.id === id);
                                  return (
                                    <td key={id} className="text-center p-3">
                                      ${material?.cost.totalCost}/kg
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="border-b">
                                <td className="p-3 font-medium">Sustainability</td>
                                {selectedMaterials.map(id => {
                                  const material = materialsDatabase.find(m => m.id === id);
                                  return (
                                    <td key={id} className="text-center p-3">
                                      <div className="flex justify-center space-x-1">
                                        {material?.sustainability.recyclable && (
                                          <Badge variant="outline" className="text-xs">R</Badge>
                                        )}
                                        {material?.sustainability.bioBased && (
                                          <Badge variant="outline" className="text-xs">B</Badge>
                                        )}
                                      </div>
                                    </td>
                                  );
                                })}
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* Cost Analysis Chart */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Cost Breakdown Analysis</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {selectedMaterials.map(id => {
                              const material = materialsDatabase.find(m => m.id === id);
                              if (!material) return null;
                              
                              return (
                                <Card key={id}>
                                  <CardHeader className="pb-3">
                                    <CardTitle className="text-base">{material.name}</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="space-y-2">
                                      <div className="flex justify-between text-sm">
                                        <span>Material:</span>
                                        <span>${material.cost.materialCost}/kg</span>
                                      </div>
                                      <div className="flex justify-between text-sm">
                                        <span>Processing:</span>
                                        <span>${material.cost.processingCost}/kg</span>
                                      </div>
                                      <div className="border-t pt-2 flex justify-between font-medium">
                                        <span>Total:</span>
                                        <span>${material.cost.totalCost}/kg</span>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* AI Recommendations Tab */}
              <TabsContent value="recommendations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      AI-Powered Recommendations
                    </CardTitle>
                    <CardDescription>
                      Based on your requirements, here are the best material matches
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {recommendations.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">
                          Set your requirements to get personalized recommendations
                        </p>
                        <Button onClick={() => setActiveTab('requirements')}>
                          Define Requirements
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {recommendations.map((material, index) => {
                          const suitabilityScore = calculateSuitabilityScore(material);
                          return (
                            <motion.div
                              key={material.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Card className="border-l-4 border-l-blue-500">
                                <CardHeader>
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <CardTitle className="flex items-center">
                                        <span className="text-2xl font-bold text-blue-600 mr-3">
                                          #{index + 1}
                                        </span>
                                        {material.name}
                                      </CardTitle>
                                      <Badge variant="secondary" className="mt-1">
                                        {material.category}
                                      </Badge>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-sm text-gray-500">Suitability Score</div>
                                      <div className="text-2xl font-bold text-green-600">
                                        {suitabilityScore.toFixed(0)}%
                                      </div>
                                      <Progress value={suitabilityScore} className="w-20 mt-1" />
                                    </div>
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-gray-600 mb-4">{material.description}</p>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                      <h4 className="font-medium mb-2">Key Properties</h4>
                                      <ul className="text-sm space-y-1">
                                        {material.properties.slice(0, 3).map(prop => (
                                          <li key={prop.name}>
                                            {prop.name}: {prop.value} {prop.unit}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-medium mb-2">Cost Analysis</h4>
                                      <div className="text-sm space-y-1">
                                        <div>Total: ${material.cost.totalCost}/kg</div>
                                        <div>Availability: {material.availability}</div>
                                        <div className="text-xs text-gray-500">{material.supplier}</div>
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-medium mb-2">Sustainability</h4>
                                      <div className="flex flex-wrap gap-1">
                                        {material.sustainability.recyclable && (
                                          <Badge variant="outline" className="text-xs">
                                            <Leaf className="w-3 h-3 mr-1" />
                                            Recyclable
                                          </Badge>
                                        )}
                                        {material.sustainability.bioBased && (
                                          <Badge variant="outline" className="text-xs">
                                            <Leaf className="w-3 h-3 mr-1" />
                                            Bio-based
                                          </Badge>
                                        )}
                                        <div className="text-xs text-gray-500 mt-1">
                                          Carbon: {material.sustainability.carbonFootprint} kg CO2/kg
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <h4 className="font-medium text-sm">Common Applications:</h4>
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {material.applications.slice(0, 3).map(app => (
                                          <Badge key={app} variant="outline" className="text-xs">
                                            {app}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    
                                    <div className="flex space-x-2">
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => toggleMaterialSelection(material.id)}
                                      >
                                        {selectedMaterials.includes(material.id) ? 'Remove' : 'Compare'}
                                      </Button>
                                      <Button size="sm">
                                        <Download className="w-4 h-4 mr-1" />
                                        Datasheet
                                      </Button>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>About This Tool</CardTitle>
              </CardHeader>              <CardContent className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: (postData?.content as { [key: string]: string })?.[language] || '<p>Content loading...</p>' }} />
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Expert Material Selection Guidance?</h3>
                <p className="text-lg mb-6">
                  Our material scientists can help you choose the perfect plastic for your application
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="secondary" size="lg">
                    Contact Our Experts
                  </Button>
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-500">
                    Download Complete Material Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MaterialComparisonTool;
