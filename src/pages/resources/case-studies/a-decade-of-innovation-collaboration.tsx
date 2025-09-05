import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

// Custom components for this case study
const CaseStudyHero = () => {
  const { language } = useLanguage();
  const title = language === 'hu' 
    ? "Az innováció évtizede: Együttműködés egy vezető EU-s kerti és elektromos szerszámgyártóval" 
    : "A Decade of Innovation: Collaborating with a Leading EU Manufacturer in Garden and Power Tools";
  
  // Parallax effect for hero
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.8, 0]);
  
  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-gray-900 flex items-center justify-center">
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y: y1, opacity }}
      >
        <Image
          src="/resources/caseStudies/Picture1.png"
          alt="Garden tools manufacturing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
      </motion.div>
      
      {/* Content with counter parallax */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y: y2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h5 className="text-amber-400 font-medium uppercase tracking-wider mb-4">
            {language === 'hu' ? "Esettanulmány" : "Case Study"}
          </h5>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto">
            {title}
          </h1>
          
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            {language === 'hu' 
              ? "Több mint egy évtized közös innováció, növekedés és kiemelkedő termékfejlesztés története"
              : "A story of over a decade of joint innovation, growth, and outstanding product development"}
          </p>
          
          <motion.div 
            className="mt-12 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <ChevronDown className="w-8 h-8 text-white mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const KeyProductsSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  
  // Products data
  const products = [
    {
      title: { en: "Lawnmower Housings", hu: "Fűnyíró Burkolatok" },
      description: { 
        en: "Robust and lightweight plastic housings that enhance the durability and performance of high-efficiency lawnmowers.", 
        hu: "Robusztus és könnyű műanyag burkolatok, amelyek növelik a nagy hatékonyságú fűnyírók tartósságát és teljesítményét." 
      },
      imagePath: "/resources/caseStudies/Picture2.png"
    },
    {
      title: { en: "Tool Storage Systems", hu: "Szerszámtároló Rendszerek" },
      description: { 
        en: "Custom-designed plastic storage solutions that ensure tools are organized and easily accessible.", 
        hu: "Egyedi tervezésű műanyag tárolási megoldások, amelyek biztosítják a szerszámok rendezettségét és könnyű hozzáférhetőségét." 
      },
      imagePath: "/resources/caseStudies/Picture3.png"
    },
    {
      title: { en: "Paint Spray System Components", hu: "Festékszóró Rendszer Alkatrészek" },
      description: { 
        en: "Precision parts for advanced paint spray systems, vital for consistent application and professional finishes.", 
        hu: "Precíziós alkatrészek korszerű festékszóró rendszerekhez, amelyek elengedhetetlenek a következetes alkalmazáshoz és a professzionális végeredményhez." 
      },
      imagePath: "/resources/caseStudies/Picture3.png"
    },
    {
      title: { en: "Sanding Tool Housings", hu: "Csiszolószerszám Burkolatok" },
      description: { 
        en: "Ergonomically designed housings for palm sanders, providing comfort and precision for detailed work.", 
        hu: "Ergonomikusan tervezett burkolatok tenyércsiszolókhoz, amelyek kényelmet és precizitást biztosítanak a részletes munkához." 
      },
      imagePath: "/resources/caseStudies/Picture4.png"
    }
  ];
  
  return (
    <div className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {language === 'hu' ? "Kulcstermékek" : "Key Products"}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-12"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 relative">
                <Image
                  src={product.imagePath} 
                  alt={product.title[language === 'hu' ? 'hu' : 'en']}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {product.title[language === 'hu' ? 'hu' : 'en']}
                </h3>
                <p className="text-gray-600">
                  {product.description[language === 'hu' ? 'hu' : 'en']}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PartnershipBenefitsSection = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Benefits data
  const benefits = [
    {
      title: { en: "Quality Control", hu: "Minőségellenőrzés" },
      description: { 
        en: "Rigorous quality assurance processes ensure all products consistently meet the highest standards.", 
        hu: "Szigorú minőségbiztosítási folyamatok garantálják, hogy minden termék következetesen megfeleljen a legmagasabb elvárásoknak." 
      },
      icon: "shield-check",
      color: "bg-blue-500"
    },
    {
      title: { en: "Sustainability Focus", hu: "Fenntarthatósági Fókusz" },
      description: { 
        en: "Both companies prioritize sustainability, using recycled materials wherever possible while maintaining product quality.", 
        hu: "Mindkét vállalat előtérbe helyezi a fenntarthatóságot, újrahasznosított anyagokat használva ahol lehetséges, miközben fenntartja a termékminőséget." 
      },
      icon: "leaf",
      color: "bg-green-500"
    },
    {
      title: { en: "Geographical Proximity", hu: "Földrajzi Közelség" },
      description: { 
        en: "The close EU locations of our facilities streamline logistics, reduce lead times, and lower transportation costs.", 
        hu: "Létesítményeink közeli EU-s elhelyezkedése egyszerűsíti a logisztikát, csökkenti a átfutási időket és az szállítási költségeket." 
      },
      icon: "map-pin",
      color: "bg-red-500"
    },
    {
      title: { en: "Comprehensive Manufacturing", hu: "Átfogó Gyártás" },
      description: { 
        en: "Our advanced machinery supports the efficient production of both large and small components, allowing us to meet a variety of needs.", 
        hu: "Korszerű gépeink támogatják mind a nagy, mind a kis alkatrészek hatékony gyártását, lehetővé téve a különböző igények kielégítését." 
      },
      icon: "settings",
      color: "bg-purple-500"
    }
  ];
  
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'hu' ? "Együttműködési Előnyök" : "Partnership Benefits"}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            {language === 'hu' 
              ? "Együttműködésünk számos kölcsönös előnyt kínál, amelyek hozzájárulnak a sikeres és hosszútávú partnerkapcsolathoz."
              : "Our collaboration offers numerous mutual benefits that contribute to a successful and long-lasting partnership."}
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Interactive benefit selector */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-medium mb-6 text-gray-800">
              {language === 'hu' ? "Fedezze fel az előnyöket" : "Explore the benefits"}
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-amber-50 border-l-4 border-amber-500' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${benefit.color} flex items-center justify-center mr-4`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-medium">
                      {benefit.title[language === 'hu' ? 'hu' : 'en']}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Benefit detail display */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            key={activeIndex} // Force re-render for animation
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-16 h-16 rounded-full ${benefits[activeIndex].color} flex items-center justify-center mb-6 mx-auto`}>
                <Check className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {benefits[activeIndex].title[language === 'hu' ? 'hu' : 'en']}
              </h3>
              
              <p className="text-gray-600 text-center text-lg">
                {benefits[activeIndex].description[language === 'hu' ? 'hu' : 'en']}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ChallengesSolutionsSection = () => {
  const { language } = useLanguage();
  const [tab, setTab] = useState('challenges');
  
  // Data
  const challenges = [
    {
      title: { en: "Order Volume Variability", hu: "Rendelési Mennyiség Változékonysága" },
      description: { 
        en: "Fluctuations in order sizes driven by seasonal demand and market trends.", 
        hu: "A rendelési mennyiségek ingadozása a szezonális kereslet és piaci trendek hatására." 
      }
    },
    {
      title: { en: "Material Quality Consistency", hu: "Anyagminőség Konzisztenciája" },
      description: { 
        en: "Ensuring consistent quality when working with recycled materials, which can vary in composition.", 
        hu: "A konzisztens minőség biztosítása újrahasznosított anyagokkal való munka során, amelyek összetétele változó lehet." 
      }
    },
    {
      title: { en: "Packaging Costs", hu: "Csomagolási Költségek" },
      description: { 
        en: "Balancing the need for sustainable packaging with the associated costs.", 
        hu: "A fenntartható csomagolás iránti igény és a kapcsolódó költségek egyensúlyának megteremtése." 
      }
    }
  ];
  
  const solutions = [
    {
      title: { en: "Adaptive Order Management", hu: "Adaptív Rendeléskezelés" },
      description: { 
        en: "A flexible order management system that allows quick adjustments to production schedules, ensuring responsiveness to demand changes.", 
        hu: "Rugalmas rendeléskezelési rendszer, amely lehetővé teszi a gyors módosításokat a gyártási ütemtervekben, biztosítva a keresleti változásokra való reagálóképességet." 
      }
    },
    {
      title: { en: "Enhanced Quality Control", hu: "Megerősített Minőségellenőrzés" },
      description: { 
        en: "Intensified inspections of incoming recycled materials to maintain consistent quality across all products.", 
        hu: "Fokozott ellenőrzések a beérkező újrahasznosított anyagokon a konzisztens minőség fenntartása érdekében minden terméknél." 
      }
    },
    {
      title: { en: "Sustainable Packaging Solutions", hu: "Fenntartható Csomagolási Megoldások" },
      description: { 
        en: "Optimized packaging designs and sourced eco-friendly materials to reduce costs while supporting environmental goals.", 
        hu: "Optimalizált csomagolási tervek és környezetbarát anyagok beszerzése a költségek csökkentése mellett a környezetvédelmi célok támogatására." 
      }
    }
  ];
  
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'hu' ? "Kihívások és Megoldások" : "Challenges & Solutions"}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
        </motion.div>
        
        {/* Interactive tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setTab('challenges')}
              className={`px-6 py-3 rounded-md font-medium text-sm transition-all duration-200 ${tab === 'challenges' ? 'bg-amber-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {language === 'hu' ? "Kihívások" : "Challenges"}
            </button>
            <button
              onClick={() => setTab('solutions')}
              className={`px-6 py-3 rounded-md font-medium text-sm transition-all duration-200 ${tab === 'solutions' ? 'bg-amber-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {language === 'hu' ? "Megoldások" : "Solutions"}
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="mt-8">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(tab === 'challenges' ? challenges : solutions).map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {item.title[language === 'hu' ? 'hu' : 'en']}
                  </h3>
                  <p className="text-gray-600">
                    {item.description[language === 'hu' ? 'hu' : 'en']}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FutureOutlookSection = () => {
  const { language } = useLanguage();
  
  return (
    <div className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-700/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {language === 'hu' ? "Jövőbeli Kilátások" : "Future Outlook"}
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            {language === 'hu' 
              ? "A Flair Plastic Kft. és EU-s partnerünk elkötelezettek a folyamatos innováció mellett. Továbbra is új anyagokat és gyártási technikákat fogunk felfedezni a termékminőség és hatékonyság további javítása érdekében, biztosítva, hogy továbbra is vezetők maradjunk a kerti és elektromos szerszámok iparágában."
              : "Looking ahead, Flair Plastic Ltd. and our EU partner are committed to ongoing innovation. We will continue exploring new materials and manufacturing techniques to further improve product quality and efficiency, ensuring we remain leaders in the garden and power tools industry."}
          </p>
          
          <motion.div
            className="mt-12 inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors">
              {language === 'hu' ? "Kapcsolatfelvétel" : "Get in Touch"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const CompetitiveAdvantageSection = () => {
  const { language } = useLanguage();
  
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'hu' ? "Versenyelőny" : "Competitive Advantage"}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {language === 'hu' 
              ? "Partnerségünk sikere a Flair Plastic Kft. stratégiai elhelyezkedésén, fejlett gyártási képességein és a minőség és fenntarthatóság iránti megingathatatlan elkötelezettségén alapul."
              : "Our partnership's success is built on Flair Plastic Ltd.'s strategic location, advanced manufacturing capabilities, and unwavering commitment to quality and sustainability."}
          </p>
        </motion.div>
        
        {/* Interactive timeline/progress indicator */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Timeline items */}
          <div className="space-y-24">
            {/* Item 1 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center">
                <div className="bg-amber-500 rounded-full w-8 h-8 z-10"></div>
              </div>
              
              <motion.div 
                className="mt-6 md:w-1/2 md:mx-auto bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {language === 'hu' ? "Stratégiai Elhelyezkedés" : "Strategic Location"}
                </h3>
                <p className="text-gray-600">
                  {language === 'hu' 
                    ? "Az EU-n belüli működésünk lehetővé teszi a gyors szállítást, az alacsonyabb logisztikai költségeket és a jobb kommunikációt."
                    : "Our operation within the EU enables fast shipping, lower logistics costs, and better communication."}
                </p>
              </motion.div>
            </motion.div>
            
            {/* Item 2 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center">
                <div className="bg-amber-500 rounded-full w-8 h-8 z-10"></div>
              </div>
              
              <motion.div 
                className="mt-6 md:w-1/2 md:ml-auto md:mr-0 bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {language === 'hu' ? "Fejlett Gyártási Képességek" : "Advanced Manufacturing Capabilities"}
                </h3>
                <p className="text-gray-600">
                  {language === 'hu' 
                    ? "Csúcstechnológiás berendezéseink és szakképzett csapatunk lehetővé teszi a komplex és precíz alkatrészek gyártását."
                    : "Our cutting-edge equipment and skilled team enable the production of complex and precise components."}
                </p>
              </motion.div>
            </motion.div>
            
            {/* Item 3 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center">
                <div className="bg-amber-500 rounded-full w-8 h-8 z-10"></div>
              </div>
              
              <motion.div 
                className="mt-6 md:w-1/2 md:mx-0 bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {language === 'hu' ? "Minőség és Fenntarthatóság" : "Quality and Sustainability"}
                </h3>
                <p className="text-gray-600">
                  {language === 'hu' 
                    ? "Kettős elkötelezettségünk a kiváló minőség és a környezeti felelősségvállalás mellett megkülönbözteti termékeinket a piacon."
                    : "Our dual commitment to excellence and environmental responsibility distinguishes our products in the market."}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConclusionSection = () => {
  const { language } = useLanguage();
  
  // Mouse follow effect
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div 
        className="fixed w-16 h-16 rounded-full border-2 border-amber-500/30 pointer-events-none z-50 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      <div className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-amber-500"></div>
            
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              {language === 'hu' ? "Következtetés" : "Conclusion"}
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {language === 'hu' 
                ? "A Flair Plastic Kft. és európai partnerünk évtizedes együttműködése a siker modelljeként szolgál, amely az innovációt előmozdítja és mindkét vállalat fenntartható növekedését biztosítja. Együtt következetesen olyan termékeket szállítottunk, amelyek meghaladják a piaci elvárásokat, és erősen pozicionálnak minket a jövőre nézve."
                : "The decade-long collaboration between Flair Plastic Ltd. and our European partner has been a model of success, driving innovation and ensuring sustained growth for both companies. Together, we have consistently delivered products that exceed market expectations and position us strongly for the future."}
            </p>
            
            <div className="mt-12 flex justify-center space-x-4">
              <motion.button
                className="px-6 py-3 bg-amber-500 text-white rounded-md font-medium hover:bg-amber-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {language === 'hu' ? "Kapcsolatfelvétel" : "Contact Us"}
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {language === 'hu' ? "További Esettanulmányok" : "More Case Studies"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const DecadeOfInnovationCase = () => {
  // Register scroll triggers for animations
  useEffect(() => {
    // Initial page fade in
    document.body.classList.add('animate-fadeIn');
    
    return () => {
      document.body.classList.remove('animate-fadeIn');
    };
  }, []);
  return (
    <ResourcesLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <CaseStudyHero />
        <KeyProductsSection />
        <PartnershipBenefitsSection />
        <ChallengesSolutionsSection />
        <FutureOutlookSection />
        <CompetitiveAdvantageSection />
        <ConclusionSection />
      </motion.div>
    </ResourcesLayout>
  );
};

export default DecadeOfInnovationCase;