import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronRight, Info } from 'lucide-react';

const ImageCardGrid = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('thermoplastics');
  
  // Material categories data
  const categories = [
    {
      id: 'thermoplastics',
      title: language === 'en' ? 'Thermoplastics' : 'Hőre lágyuló műanyagok',
      description: language === 'en' 
        ? 'Materials that can be repeatedly melted and reformed without significant degradation, offering versatility and recyclability.'
        : 'Olyan anyagok, amelyek ismételten megolvaszthatók és újraformálhatók jelentős lebomlás nélkül, sokoldalúságot és újrahasznosíthatóságot kínálva.',
      image: "https://flair-plastic.hu/wp-content/uploads/2024/05/pilletsgreen1-1024x790.png.webp",
      examples: language === 'en' 
        ? ['Polyethylene (PE)', 'Polypropylene (PP)', 'Polystyrene (PS)', 'ABS', 'Nylon (PA)']
        : ['Polietilén (PE)', 'Polipropilén (PP)', 'Polisztirol (PS)', 'ABS', 'Nejlon (PA)'],
      properties: language === 'en'
        ? ['Good chemical resistance', 'Easily processed', 'Recyclable', 'Versatile applications']
        : ['Jó vegyi ellenállás', 'Könnyen feldolgozható', 'Újrahasznosítható', 'Sokoldalú alkalmazások']
    },
    {
      id: 'thermosets',
      title: language === 'en' ? 'Thermosets' : 'Hőre keményedő műanyagok',
      description: language === 'en'
        ? 'Materials that undergo a chemical change when heated, creating strong cross-links that prevent remelting, providing excellent durability and heat resistance.'
        : 'Olyan anyagok, amelyek hevítéskor kémiai változáson mennek keresztül, erős keresztkötéseket hozva létre, amelyek megakadályozzák az újraolvasztást, kiváló tartósságot és hőállóságot biztosítva.',
      image: "https://flair-plastic.hu/wp-content/uploads/2024/05/thermoset-materials-1024x790.jpg",
      examples: language === 'en'
        ? ['Epoxy', 'Polyurethane (PU)', 'Phenolics', 'Melamine formaldehyde']
        : ['Epoxi', 'Poliuretán (PU)', 'Fenolok', 'Melamin-formaldehid'],
      properties: language === 'en'
        ? ['High thermal stability', 'Excellent chemical resistance', 'Good dimensional stability', 'High strength']
        : ['Magas hőstabilitás', 'Kiváló vegyi ellenállás', 'Jó méretstabilitás', 'Nagy szilárdság']
    },
    {
      id: 'elastomers',
      title: language === 'en' ? 'Elastomers' : 'Elasztomerek',
      description: language === 'en'
        ? 'Rubber-like materials with high elasticity that can stretch and return to their original shape, providing flexibility and impact resistance.'
        : 'Gumiszerű anyagok nagy rugalmassággal, amelyek nyújthatók és visszatérnek eredeti alakjukra, rugalmasságot és ütésállóságot biztosítva.',
      image: "https://flair-plastic.hu/wp-content/uploads/2024/05/elastomer-materials-1024x790.jpg",
      examples: language === 'en'
        ? ['Silicone rubber', 'Thermoplastic elastomers (TPE)', 'Polyurethane elastomers', 'Natural rubber']
        : ['Szilikon gumi', 'Hőre lágyuló elasztomerek (TPE)', 'Poliuretán elasztomerek', 'Természetes gumi'],
      properties: language === 'en'
        ? ['Excellent elasticity', 'Good vibration damping', 'Soft touch feel', 'Weather resistance']
        : ['Kiváló rugalmasság', 'Jó rezgéscsillapítás', 'Puha tapintás', 'Időjárás-állóság']
    },
    {
      id: 'engineering',
      title: language === 'en' ? 'Engineering Plastics' : 'Műszaki műanyagok',
      description: language === 'en'
        ? 'High-performance materials designed for demanding applications requiring superior mechanical properties, thermal resistance, and dimensional stability.'
        : 'Nagy teljesítményű anyagok, amelyeket olyan igényes alkalmazásokhoz terveztek, amelyek kiváló mechanikai tulajdonságokat, hőállóságot és méretstabilitást igényelnek.',
      image: "https://flair-plastic.hu/wp-content/uploads/2024/05/dfgt561-1024x790.png.webp",
      examples: language === 'en'
        ? ['Polycarbonate (PC)', 'Polyoxymethylene (POM)', 'Polyetheretherketone (PEEK)', 'Polysulfone (PSU)']
        : ['Polikarbonát (PC)', 'Polioximetilén (POM)', 'Poliétereterketon (PEEK)', 'Poliszulfon (PSU)'],
      properties: language === 'en'
        ? ['High strength-to-weight ratio', 'Excellent thermal stability', 'Good electrical properties', 'Tight dimensional tolerances']
        : ['Magas szilárdság-tömeg arány', 'Kiváló hőstabilitás', 'Jó elektromos tulajdonságok', 'Szoros mérettűrések']
    }
  ];
  
  // Get current active category data
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];
  
  return (
    <section className="relative bg-gradient-to-b from-white to-amber-50/30 py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-gradient-radial from-amber-100/20 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-0 w-[300px] h-[300px] bg-gradient-radial from-amber-100/20 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-wider font-medium text-amber-600 mb-3 block"
            >
              {language === 'en' ? 'Material Library' : 'Anyagkönyvtár'}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {language === 'en' ? 'Material Categories' : 'Anyagkategóriák'}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              {language === 'en' 
                ? 'Explore our comprehensive selection of materials optimized for various plastic injection molding applications.'
                : 'Fedezze fel átfogó anyagválasztékunkat, amelyet különböző műanyag fröccsöntési alkalmazásokhoz optimalizáltunk.'}
            </motion.p>
          </div>
          
          {/* Category Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium shadow-md'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-amber-200'
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </div>
          
          {/* Material Category Detail Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Image Side */}
            <motion.div
              key={`image-${currentCategory.id}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-white p-2 rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={currentCategory.image}
                    alt={currentCategory.title}
                    className="w-full h-full object-cover transition-transform duration-4000 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Material Info Floating Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-tl-2xl rounded-br-2xl shadow-lg p-4 border-t-2 border-l-2 border-amber-400"
              >
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-amber-500" />
                  <p className="text-gray-700 text-sm font-medium">
                    {language === 'en' ? 'Common applications' : 'Gyakori alkalmazások'}: 
                    <span className="font-normal"> {currentCategory.id === 'thermoplastics' 
                      ? language === 'en' ? 'Packaging, containers, toys' : 'Csomagolás, tárolók, játékok'
                      : currentCategory.id === 'thermosets'
                      ? language === 'en' ? 'Electronic components, automotive parts' : 'Elektronikai alkatrészek, autóalkatrészek'
                      : currentCategory.id === 'elastomers'
                      ? language === 'en' ? 'Seals, gaskets, soft-touch surfaces' : 'Tömítések, szigetelők, puha felületek'
                      : language === 'en' ? 'Medical devices, aerospace components' : 'Orvosi eszközök, repülőgép-alkatrészek'
                    }</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Content Side */}
            <motion.div
              key={`content-${currentCategory.id}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <div className="bg-white rounded-2xl shadow-md p-6 border border-amber-100 mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{currentCategory.title}</h3>
                <p className="text-gray-600 mb-5">{currentCategory.description}</p>
                
                {/* Key Properties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-amber-700 mb-3 flex items-center">
                    <span className="h-1 w-6 bg-gradient-to-r from-amber-400 to-orange-400 mr-2 rounded-full"></span>
                    {language === 'en' ? 'Key Properties' : 'Fő tulajdonságok'}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentCategory.properties.map((property, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"></div>
                        <span className="text-gray-700">{property}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Examples */}
                <div>
                  <h4 className="font-semibold text-amber-700 mb-3 flex items-center">
                    <span className="h-1 w-6 bg-gradient-to-r from-amber-400 to-orange-400 mr-2 rounded-full"></span>
                    {language === 'en' ? 'Common Examples' : 'Gyakori példák'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCategory.examples.map((example, index) => (
                      <span 
                        key={index} 
                        className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm border border-amber-200"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Selection Guide Prompt */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <ChevronRight className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {language === 'en' ? 'Need help choosing?' : 'Segítségre van szüksége a választásban?'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' 
                        ? 'Our material experts can help you select the optimal material for your specific application.'
                        : 'Anyagszakértőink segíthetnek kiválasztani az optimális anyagot az Ön speciális alkalmazásához.'}
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <a 
                    href={language === 'en' ? '/contact' : '/kapcsolat'} 
                    className="inline-flex items-center text-amber-700 font-medium hover:text-orange-600 transition-colors text-sm"
                  >
                    {language === 'en' ? 'Contact our experts' : 'Kapcsolatfelvétel szakértőinkkel'}
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCardGrid;
