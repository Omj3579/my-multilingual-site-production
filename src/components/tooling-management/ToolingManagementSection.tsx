import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, Wrench, CalendarCheck, Gauge, ClipboardCheck, 
  SearchCheck, BarChart3, Hammer, Shield, RefreshCw
} from 'lucide-react';
import { cn } from "@/lib/utils";

const ToolingManagementSection = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("routine");

  // Feature cards with icons for the two main sections
  const maintenanceFeatures = [
    {
      icon: CalendarCheck,
      title: language === 'en' ? 'Regular Inspections' : 'Rendszeres ellenőrzések',
      description: language === 'en'
        ? "Scheduled inspections to assess tool wear and functionality, ensuring issues are identified promptly."
        : "Ütemezett ellenőrzések a szerszámkopás és funkcionalitás értékelésére, a problémák azonnali azonosítása."
    },
    {
      icon: Wrench,
      title: language === 'en' ? 'Cleaning & Lubrication' : 'Tisztítás és kenés',
      description: language === 'en'
        ? "Regular cleaning and lubrication to prevent dirt accumulation and friction that leads to premature wear."
        : "Rendszeres tisztítás és kenés a szennyeződések és súrlódás megelőzésére, amelyek idő előtti kopáshoz vezethetnek."
    },
    {
      icon: Gauge,
      title: language === 'en' ? 'Calibration' : 'Kalibrálás',
      description: language === 'en'
        ? "Routine calibration to meet precise specifications, maintaining accuracy and output quality."
        : "Rutinszerű kalibráció a pontos specifikációk teljesítésére, fenntartva a pontosságot és a kimenet minőségét."
    },
    {
      icon: SearchCheck,
      title: language === 'en' ? 'Component Checks' : 'Komponens ellenőrzések',
      description: language === 'en'
        ? "Critical components are checked for stress or damage, with timely replacements to avoid downtime."
        : "A kritikus alkatrészeket stressz és sérülés szempontjából ellenőrizzük, időben történő cserével az állásidő elkerülésére."
    },
    {
      icon: ClipboardCheck,
      title: language === 'en' ? 'Documentation' : 'Dokumentáció',
      description: language === 'en'
        ? "Thorough documentation of all maintenance activities for clear history tracking and analysis."
        : "Minden karbantartási tevékenység alapos dokumentálása a világos előzmények követése és elemzése érdekében."
    }
  ];

  const diagnosticFeatures = [
    {
      icon: SearchCheck,
      title: language === 'en' ? 'Advanced Diagnostics' : 'Fejlett diagnosztika',
      description: language === 'en'
        ? "State-of-the-art technologies to monitor tool conditions and detect early signs of wear."
        : "Csúcstechnológiák a szerszámok állapotának figyelésére és a kopás korai jeleinek felismerésére."
    },
    {
      icon: BarChart3,
      title: language === 'en' ? 'Predictive Maintenance' : 'Prediktív karbantartás',
      description: language === 'en'
        ? "Data-driven strategies that proactively extend tool life and optimize performance."
        : "Adatvezérelt stratégiák, amelyek proaktívan meghosszabbítják a szerszámok élettartamát és optimalizálják teljesítményüket."
    },
    {
      icon: Hammer,
      title: language === 'en' ? 'In-House Repairs' : 'Házon belüli javítások',
      description: language === 'en'
        ? "On-site facilities for immediate refurbishments, reducing delays in production."
        : "Helyszíni létesítmények azonnali felújításokra, csökkentve a termelési késéseket."
    },
    {
      icon: RefreshCw,
      title: language === 'en' ? 'Custom Refurbishment' : 'Egyedi felújítás',
      description: language === 'en'
        ? "Tailored refurbishment strategies for each tool's specific operational demands."
        : "Testreszabott felújítási stratégiák az egyes szerszámok specifikus üzemeltetési igényeihez."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-amber-50/50 to-white py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-radial from-amber-100/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-radial from-amber-100/20 to-transparent blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="tooling-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#tooling-grid)" />
          </svg>
        </div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm uppercase tracking-wider font-medium text-orange-600 mb-3"
          >
            {language === 'en' ? 'Maximizing Tool Performance' : 'Szerszámteljesítmény Maximalizálása'}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {language === 'en' ? (
              <>
                <span>Our Comprehensive </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Tooling Management</span>
                <span> Approach</span>
              </>
            ) : (
              <>
                <span>Átfogó </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Szerszámkezelési</span>
                <span> Megközelítésünk</span>
              </>
            )}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 rounded-full"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg text-gray-700"
          >
            {language === 'en' 
              ? "Our proactive and comprehensive tooling management ensures optimal performance, extended lifespan, and consistent quality in your production processes."
              : "Proaktív és átfogó szerszámkezelésünk optimális teljesítményt, meghosszabbított élettartamot és következetes minőséget biztosít a gyártási folyamatokban."}
          </motion.p>
        </div>
        
        {/* Main Image - Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="rounded-[30px] overflow-hidden shadow-xl relative">
            <img
              src="https://flair-plastic.hu/wp-content/uploads/2024/05/panoramic-cover-image-for-a-tooling-managemendcvt-web-page-with-dimensions-of-1745x571.-The-im-e1718879456789.png.webp"
              alt={language === 'en' ? "Tooling Management Process" : "Szerszámkezelési Folyamat"}
              className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Image overlay caption */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {language === 'en' ? "State-of-the-Art Tooling Facility" : "Csúcstechnológiás Szerszámüzem"}
              </h3>
              <p className="text-white/90 text-lg">
                {language === 'en' 
                  ? "Our advanced facility is equipped with the latest technology for comprehensive tooling management."
                  : "Fejlett létesítményünk a legmodernebb technológiával van felszerelve az átfogó szerszámkezeléshez."}
              </p>
            </div>
          </div>
          
          {/* Floating achievement cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-10 left-6 md:left-10 bg-white shadow-lg rounded-xl p-4 border border-amber-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <Shield className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {language === 'en' ? '40% Longer Lifespan' : '40% Hosszabb Élettartam'}
                </p>
                <p className="text-xs text-gray-500">
                  {language === 'en' ? 'With our maintenance protocols' : 'Karbantartási protokolljainkkal'}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="absolute bottom-10 right-6 md:right-10 bg-white shadow-lg rounded-xl p-4 border border-amber-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-2 rounded-full">
                <Settings className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {language === 'en' ? 'ISO 9001 Certified' : 'ISO 9001 Tanúsított'}
                </p>
                <p className="text-xs text-gray-500">
                  {language === 'en' ? 'Quality-assured processes' : 'Minőségbiztosított folyamatok'}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs Section for the two main content areas */}
        <Tabs 
          defaultValue="routine" 
          className="w-full max-w-6xl mx-auto"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
        >
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 w-[500px] bg-amber-100/50 p-1 rounded-xl">
              <TabsTrigger 
                value="routine" 
                className={cn(
                  "data-[state=active]:bg-white data-[state=active]:text-amber-700 data-[state=active]:shadow-sm rounded-lg text-gray-600",
                  "transition-all duration-200 py-3",
                  activeTab === "routine" ? "font-semibold" : ""
                )}
              >
                {language === 'en' ? 'Routine Maintenance' : 'Rutin Karbantartás'}
              </TabsTrigger>
              <TabsTrigger 
                value="advanced" 
                className={cn(
                  "data-[state=active]:bg-white data-[state=active]:text-amber-700 data-[state=active]:shadow-sm rounded-lg text-gray-600",
                  "transition-all duration-200 py-3",
                  activeTab === "advanced" ? "font-semibold" : ""
                )}
              >
                {language === 'en' ? 'Advanced Solutions' : 'Fejlett Megoldások'}
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Tab 1: Routine Maintenance */}
          <TabsContent value="routine" className="mt-0 outline-none">
            <div className="flex flex-col gap-12">
              {/* Introduction */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {language === 'en' ? (
                    <>Comprehensive <span className="text-amber-600">Routine Maintenance</span></>
                  ) : (
                    <>Átfogó <span className="text-amber-600">Rutin Karbantartás</span></>
                  )}
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {language === 'en' 
                    ? "At Flair-Plastic, our routine maintenance schedule is crafted to ensure each tool operates at its best, providing reliable performance and prolonging its operational lifespan. We prioritize preventive maintenance to avoid potential failures and ensure continuous production efficiency."
                    : "A Flair-Plastic-nál a rutin karbantartási ütemtervet úgy alakítottuk ki, hogy minden szerszám a legjobb teljesítményt nyújtsa, megbízható működést biztosítson, és meghosszabbítsa az üzemi élettartamát. Előnyben részesítjük a megelőző karbantartást a potenciális meghibásodások elkerülése és a folyamatos gyártási hatékonyság biztosítása érdekében."}
                </p>
                
                <h4 className="font-semibold text-amber-700 text-lg mb-2">
                  {language === 'en' ? "Key Aspects of Our Routine Maintenance:" : "Rutin karbantartásunk fő szempontjai:"}
                </h4>
              </motion.div>
              
              {/* Features Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {maintenanceFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-200"
                  >
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-xl inline-block mb-4">
                      <feature.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Bottom Statement */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-sm border border-amber-100"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-white rounded-full p-4 shadow-md">
                    <Shield className="h-8 w-8 text-orange-500" />
                  </div>
                  
                  <div>
                    <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                      {language === 'en'
                        ? "Our proactive approach to routine maintenance not only extends the life of our tools but also ensures they consistently produce high-quality results. By preventing breakdowns and reducing wear and tear, Flair-Plastic guarantees the efficiency and reliability of your production processes."
                        : "A rutin karbantartás proaktív megközelítése nemcsak meghosszabbítja szerszámaink élettartamát, hanem biztosítja, hogy következetesen kiváló minőségű eredményeket produkáljanak. A meghibásodások megelőzésével és a kopás csökkentésével a Flair-Plastic garantálja a gyártási folyamatok hatékonyságát és megbízhatóságát."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Tab 2: Advanced Solutions */}
          <TabsContent value="advanced" className="mt-0 outline-none">
            <div className="flex flex-col gap-12">
              {/* Introduction */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {language === 'en' ? (
                    <>Advanced <span className="text-orange-600">Diagnostics & Rapid Repair</span></>
                  ) : (
                    <>Fejlett <span className="text-orange-600">Diagnosztika & Gyors Javítás</span></>
                  )}
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {language === 'en'
                    ? "At Flair-Plastic, we leverage cutting-edge diagnostic tools and robust repair services to maintain tool integrity and operational efficiency. Our approach minimizes downtime and reduces costs, ensuring that your production line runs smoothly and effectively."
                    : "A Flair-Plastic-nál élvonalbeli diagnosztikai eszközöket és robusztus javítási szolgáltatásokat használunk a szerszámok integritásának és működési hatékonyságának fenntartása érdekében. Megközelítésünk minimalizálja az állásidőt és csökkenti a költségeket, biztosítva, hogy a gyártósor zökkenőmentesen és hatékonyan működjön."}
                </p>
                
                <h4 className="font-semibold text-orange-600 text-lg mb-2">
                  {language === 'en' ? "Our Diagnostic and Repair Services Include:" : "Diagnosztikai és javítási szolgáltatásaink:"}
                </h4>
              </motion.div>
              
              {/* Advanced Solutions Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {diagnosticFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-200"
                  >
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-xl inline-block mb-4">
                      <feature.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Process Timeline */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-amber-100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {language === 'en' ? "Our Advanced Repair Process" : "Fejlett Javítási Folyamatunk"}
                </h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-amber-300 to-orange-400"></div>
                  
                  <div className="space-y-10 relative ml-10">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="absolute -left-[46px] top-0 w-8 h-8 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center">
                        <span className="text-xs font-bold text-amber-700">1</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {language === 'en' ? "Initial Assessment" : "Kezdeti Felmérés"}
                      </h4>
                      <p className="text-gray-600">
                        {language === 'en'
                          ? "Our technicians perform a comprehensive assessment using advanced diagnostic tools to identify issues."
                          : "Technikusaink átfogó felmérést végeznek fejlett diagnosztikai eszközökkel a problémák azonosítására."}
                      </p>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="relative">
                      <div className="absolute -left-[46px] top-0 w-8 h-8 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-amber-700">2</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {language === 'en' ? "Custom Repair Plan" : "Egyedi Javítási Terv"}
                      </h4>
                      <p className="text-gray-600">
                        {language === 'en'
                          ? "We develop a tailored repair strategy based on the tool's specific requirements and operational context."
                          : "Egyedi javítási stratégiát dolgozunk ki a szerszám specifikus követelményei és működési környezete alapján."}
                      </p>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="relative">
                      <div className="absolute -left-[46px] top-0 w-8 h-8 rounded-full bg-amber-100 border-2 border-orange-400 flex items-center justify-center">
                        <span className="text-xs font-bold text-amber-700">3</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {language === 'en' ? "Rapid Implementation" : "Gyors Végrehajtás"}
                      </h4>
                      <p className="text-gray-600">
                        {language === 'en'
                          ? "Our on-site facilities allow for immediate repairs and refurbishments, minimizing production downtime."
                          : "Helyszíni létesítményeink lehetővé teszik az azonnali javításokat és felújításokat, minimalizálva a termelési állásidőt."}
                      </p>
                    </div>
                    
                    {/* Step 4 */}
                    <div className="relative">
                      <div className="absolute -left-[46px] top-0 w-8 h-8 rounded-full bg-amber-100 border-2 border-orange-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-amber-700">4</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {language === 'en' ? "Quality Verification" : "Minőség-ellenőrzés"}
                      </h4>
                      <p className="text-gray-600">
                        {language === 'en'
                          ? "Post-repair testing ensures the tool meets or exceeds original specifications and performance standards."
                          : "A javítás utáni tesztelés biztosítja, hogy a szerszám megfeleljen vagy meghaladja az eredeti specifikációkat és teljesítményszabványokat."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Advanced Benefits */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-sm border border-amber-100"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-white rounded-full p-4 shadow-md">
                    <Wrench className="h-8 w-8 text-orange-500" />
                  </div>
                  
                  <div>
                    <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                      {language === 'en'
                        ? "Trust in our expertise to maintain your tools in peak condition, minimizing costs and maximizing productivity. Our advanced diagnostic and repair capabilities ensure that your tools are always ready for optimal performance, contributing to the overall efficiency of your manufacturing process."
                        : "Bízzon szakértelmünkben, hogy szerszámait csúcsállapotban tartsa, minimalizálva a költségeket és maximalizálva a termelékenységet. Fejlett diagnosztikai és javítási képességeink biztosítják, hogy szerszámai mindig készen álljanak az optimális teljesítményre, hozzájárulva a gyártási folyamat általános hatékonyságához."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            {language === 'en' ? (
              <>Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">optimize</span> your tooling performance?</>
            ) : (
              <>Készen áll <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">optimalizálni</span> a szerszámteljesítményt?</>
            )}
          </h3>
          
          <a 
            href={language === 'en' ? '/contact' : '/kapcsolat'} 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg rounded-full transition-colors shadow-md hover:shadow-lg font-medium"
          >
            {language === 'en' ? 'Contact Our Tooling Experts' : 'Kapcsolatfelvétel Szerszámszakértőinkkel'}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolingManagementSection;
