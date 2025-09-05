import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Clipboard, Building2, TruckIcon, Brain } from 'lucide-react';
import Image from 'next/image';

const EducationalInitiatives = () => {
  const { language } = useLanguage();

  // Training focus areas
  const trainingAreas = [
    {
      icon: Users,
      title: language === 'en' ? 'Employee Training' : 'Munkavállalói Képzés',
      description: language === 'en' 
        ? 'Comprehensive training for all relevant staff on proper pellet handling procedures'
        : 'Átfogó képzés minden érintett munkatárs számára a megfelelő granulátumkezelési eljárásokról'
    },
    {
      icon: Clipboard,
      title: language === 'en' ? 'Environmental Awareness' : 'Környezeti Tudatosság',
      description: language === 'en'
        ? 'Education on the environmental impact of plastic pellet loss and prevention methods'
        : 'Oktatás a műanyag granulátumveszteség környezeti hatásairól és a megelőzési módszerekről'
    },
    {
      icon: Building2,
      title: language === 'en' ? 'Facility-wide Implementation' : 'Létesítmény-szintű Megvalósítás',
      description: language === 'en'
        ? 'Consistent application of pellet loss prevention measures across all production facilities'
        : 'A granulátumveszteség megelőzési intézkedéseinek következetes alkalmazása minden gyártóüzemben'
    },
    {
      icon: TruckIcon,
      title: language === 'en' ? 'Contractor Education' : 'Alvállalkozói Oktatás',
      description: language === 'en'
        ? 'Training extended to external partners including drivers and distributors'
        : 'Képzés kiterjesztése külső partnerekre, beleértve a sofőröket és forgalmazókat'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Abstract education-themed pattern */}
        <div className="absolute -right-32 -top-32 w-[600px] h-[600px] opacity-[0.04]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0066CC" d="M45.7,-78.1C58.9,-71.6,69.3,-59.5,76.4,-45.7C83.4,-31.9,87.2,-16,86.8,-0.2C86.4,15.5,81.8,31,73.4,44.4C65,57.9,52.7,69.3,39,76.8C25.3,84.2,10.2,87.7,-4.8,86.4C-19.7,85,-39.3,78.8,-51.3,67.2C-63.2,55.6,-67.5,38.4,-70.5,22.4C-73.6,6.5,-75.5,-8.3,-73.5,-23.9C-71.4,-39.5,-65.5,-55,-54.3,-64.5C-43.1,-74,-28.5,-77.5,-13.6,-76.8C1.3,-76.1,16.5,-71.2,29.4,-70.5C42.3,-69.8,55.8,-73.3,67,-64.8C78.3,-56.3,77.4,-35.8,77.9,-16.2C78.5,3.5,80.7,22.3,74.5,37C68.3,51.6,53.8,62.1,39.8,69.8C25.8,77.5,12.3,82.4,-0.4,82.9C-13.1,83.3,-26.2,79.4,-39.7,73.9C-53.2,68.4,-67,61.5,-73.7,49.8C-80.4,38.1,-79.8,21.6,-78.9,6C-78,-9.6,-76.7,-24.1,-71,-36.9C-65.4,-49.6,-55.3,-60.4,-43.1,-70C-30.9,-79.5,-16.5,-87.7,-0.5,-87C15.5,-86.3,32.5,-76.8,45.9,-66.2C59.3,-55.7,69.2,-44.2,78.8,-30C88.4,-15.8,97.8,0.9,98.1,18.3C98.4,35.7,89.7,53.8,77.4,68C65.2,82.2,49.5,92.4,33.5,97.4C17.6,102.4,1.5,102.1,-14.8,98.5C-31,94.8,-47.4,87.8,-61.7,77.7C-76,67.5,-88.2,54.2,-92.3,39C-96.3,23.7,-92.2,6.5,-86.1,-8.1C-80,-22.7,-72,-34.6,-61.7,-44C-51.4,-53.4,-38.8,-60.2,-26,-66.9C-13.3,-73.7,-0.3,-80.5,14.2,-82.5C28.8,-84.4,44.9,-81.5,58.2,-74.2C71.5,-66.9,82,-55.1,82.4,-41.9C82.9,-28.7,73.4,-14.3,67,-2.2C60.5,9.8,57.1,19.5,52.7,29.8C48.4,40.1,43,50.9,35,59.5C27,68.2,16.3,74.7,4.4,77C-7.6,79.3,-20.8,77.4,-33.6,73.3C-46.4,69.2,-58.9,62.9,-66.6,52.9C-74.4,42.9,-77.4,29.2,-78.9,15.5C-80.3,1.8,-80.1,-11.9,-76.6,-25.1C-73.1,-38.3,-66.4,-51,-56.2,-59.4C-46,-67.9,-32.4,-72.2,-18.9,-72.1C-5.5,-72.1,7.8,-67.8,18.6,-62.4C29.4,-57,37.6,-50.5,47.6,-43.7C57.6,-37,69.5,-29.9,77.9,-19.3C86.3,-8.7,91.3,5.5,88.3,18C85.4,30.6,74.5,41.5,63.8,52.2C53,63,42.4,73.7,30,77.4C17.7,81.1,3.7,77.9,-10.9,75.9C-25.4,73.9,-40.6,73.2,-55,67.8C-69.4,62.3,-83,52.1,-85.8,39C-88.6,25.9,-80.6,10,-77.3,-5.3C-73.9,-20.6,-75.3,-35.2,-71.2,-50.1C-67,-64.9,-57.3,-79.9,-44.3,-88C-31.2,-96.2,-14.9,-97.5,0.2,-97.8C15.3,-98.1,29.4,-97.3,39.6,-89.2C49.7,-81,55.8,-65.5,66.9,-52.7C78,-39.9,94,-29.7,99.9,-16.2C105.9,-2.6,101.7,14.2,94.2,27.7C86.6,41.3,75.6,51.6,63.1,59C50.5,66.4,36.4,71,22.9,72.9C9.4,74.7,-3.5,73.8,-17.9,73.3C-32.3,72.8,-48.2,72.8,-59.3,66C-70.5,59.2,-76.9,45.6,-81.8,31.8C-86.7,18.1,-90.1,4.2,-89.2,-9.5C-88.3,-23.2,-83.2,-36.7,-74.8,-48.4C-66.3,-60.2,-54.6,-70.1,-41.5,-76.7C-28.3,-83.2,-13.7,-86.4,0.5,-87.1C14.6,-87.9,28.6,-86.3,41.9,-81.1C55.1,-76,67.7,-67.3,74.4,-55.2C81.1,-43.1,81.9,-27.6,82.1,-12.5C82.2,2.7,81.8,17.3,76.6,29.6C71.5,42,61.7,51.9,50.5,59.8C39.3,67.7,26.7,73.5,13.4,77.9C0.2,82.2,-13.7,85.2,-27.4,83.7C-41.1,82.3,-54.5,76.5,-62.2,66.5C-70,56.5,-72.1,42.5,-76.9,29.2C-81.7,15.8,-89.1,3.2,-90.3,-10C-91.5,-23.2,-86.5,-36.9,-78.1,-48C-69.8,-59.1,-58.2,-67.5,-45.3,-72.6C-32.5,-77.7,-18.5,-79.4,-3.1,-79.8C12.2,-80.1,28,-79.1,39.3,-72.3C50.6,-65.5,57.4,-53,66.6,-40.3C75.8,-27.6,87.3,-14.7,89.9,-0.1C92.6,14.5,86.4,30,77.1,42.2C67.8,54.5,55.6,63.7,42.5,69.7C29.5,75.7,15.5,78.7,0.8,80.1C-13.9,81.5,-29.2,81.3,-43,76.9C-56.8,72.5,-69.2,63.9,-78.1,52.2C-86.9,40.5,-92.3,25.7,-95,10.1C-97.7,-5.5,-97.6,-21.9,-91.8,-36.2C-86,-50.5,-74.4,-62.7,-61.1,-71.7C-47.8,-80.7,-32.8,-86.4,-17.5,-88C-2.2,-89.6,13.4,-87.1,25,-80.4C36.7,-73.7,44.4,-62.8,55,-53.2C65.6,-43.6,79,-35.4,84.3,-24.2C89.5,-13,86.5,1.1,81.6,14C76.6,26.9,69.8,38.5,60.9,48.5C52,58.4,41.1,66.5,29.3,70.3C17.5,74.1,4.9,73.6,-7,72.7C-18.9,71.9,-30.2,70.7,-40.2,65.9C-50.2,61.2,-58.9,52.9,-67.9,43.5C-76.9,34,-86.2,23.4,-88.2,11C-90.2,-1.4,-84.9,-15.6,-78.3,-29.2C-71.6,-42.9,-63.7,-56,-52.2,-62.8C-40.7,-69.6,-25.7,-70,-11.6,-72.1C2.5,-74.1,15.6,-77.8,26.7,-75.2C37.8,-72.7,46.9,-63.9,57,-55C67.1,-46.1,78.3,-37.1,82.6,-25.8C87,-14.4,84.6,-0.7,78.7,10.8C72.7,22.3,63.3,31.6,54.8,42C46.2,52.3,38.6,63.7,28.5,70.1C18.5,76.5,5.9,77.9,-5.3,77.6C-16.6,77.4,-26.5,75.5,-38.4,72.4C-50.2,69.3,-63.8,65,-71.6,55.9C-79.3,46.8,-81.1,33,-84.1,19.4C-87,5.8,-91,-7.7,-88.5,-19.9C-86,-32,-77,-42.9,-66.8,-51.7C-56.5,-60.5,-45,-67.4,-33,-71.9C-21,-76.3,-8.6,-78.3,4.7,-79.3C18,-80.3,32.1,-80.3,42,-74.9C51.9,-69.6,57.6,-58.9,62.1,-48C66.6,-37,70,-25.9,69.7,-15C69.3,-4,65.3,6.8,62.1,18.4C58.9,30.1,56.6,42.6,49.5,50.8C42.4,59,30.6,62.8,19.4,66.3C8.1,69.7,-2.5,72.8,-13.2,71.7C-23.9,70.6,-34.5,65.3,-45.3,59.1C-56,52.9,-66.7,45.9,-74.1,35.7C-81.5,25.4,-85.5,12,-86.2,-1.5C-86.9,-15.1,-84.3,-28.7,-77.3,-40.2C-70.4,-51.8,-59.1,-61.2,-46.2,-67.9C-33.4,-74.6,-19.1,-78.5,-3.7,-80.9C11.7,-83.3,28.3,-84.3,41.3,-79.2C54.3,-74.1,63.7,-62.9,72.7,-51C81.7,-39,90.4,-26.4,92.2,-12.7C94,-0.9,89.1,12.8,82.4,24.7C75.7,36.7,67.3,46.8,57.7,56.1C48,65.5,37.2,74.1,24.9,77.9C12.5,81.7,-1.4,80.7,-15.8,78.9C-30.2,77.1,-44.9,74.6,-55.9,66.9C-67,59.2,-74.3,46.3,-79.5,32.9C-84.7,19.5,-87.8,5.7,-87.3,-7.9C-86.8,-21.4,-82.7,-34.6,-75.3,-46.1C-67.9,-57.7,-57.3,-67.5,-44.8,-74.7C-32.2,-81.9,-17.6,-86.5,-1.8,-88.6C13.9,-90.8,30.9,-90.5,44.4,-83.9C57.9,-77.3,68.1,-64.4,74.9,-50.7C81.7,-37,85.2,-22.5,87.2,-7.7C89.2,7.1,89.8,22.1,84.4,34.5C79.1,46.9,67.8,56.5,56.1,64.3C44.3,72,32.2,77.8,19.5,80.6C6.8,83.4,-6.5,83.2,-19.2,80.8C-31.9,78.3,-44,73.7,-54.3,66C-64.6,58.3,-73.1,47.6,-79.2,35.4C-85.3,23.2,-88.9,9.6,-88.5,-3.7C-88,-17.1,-83.5,-30.3,-76,-42.1C-68.5,-53.8,-58.1,-64.1,-45.8,-70.3C-33.5,-76.6,-19.2,-78.8,-4.3,-79.8C10.6,-80.9,26.1,-80.9,38.9,-76C51.7,-71.1,61.9,-61.4,70.5,-50.3C79.1,-39.2,86.1,-26.7,88.6,-13.4C91.2,-0.1,89.3,14.1,83.5,25.8C77.7,37.6,67.9,47,58,57C48.1,67,38,77.6,25.6,81.3C13.2,85.1,-1.5,82,-15.1,77.8C-28.7,73.6,-41.1,68.3,-52.5,60.7C-64,53.1,-74.3,43.1,-80.2,31.1C-86.1,19,-87.5,4.7,-86.3,-8.9C-85.1,-22.6,-81.2,-35.7,-73.9,-47C-66.5,-58.4,-55.7,-68,-43.5,-75.2C-31.3,-82.4,-17.7,-87.1,-3.2,-88.8C11.3,-90.5,24.8,-89.2,36.7,-84.4C48.5,-79.7,58.8,-71.5,68.2,-61.9C77.5,-52.2,85.9,-41.1,89.5,-28.7C93.1,-16.3,91.8,-2.5,88,-12.3C84.2,-27,77.8,-40.8,70.5,-52.8C63.2,-64.7,54.9,-74.8,43.9,-80.2C32.9,-85.5,19.1,-86.2,5.2,-85.9C-8.7,-85.7,-23.7,-84.6,-37,-79.6C-50.4,-74.7,-62.1,-65.9,-70.2,-54.6C-78.3,-43.2,-82.8,-29.3,-84.5,-15.4C-86.2,-1.5,-85.1,12.3,-81.6,25.2C-78.1,38.1,-72.3,50,-63.7,60.2C-55.2,70.4,-44,78.8,-31.6,82.6C-19.2,86.3,-5.6,85.3,6.5,83C18.6,80.7,29.2,77.1,41.4,73.5C53.6,69.9,67.4,66.3,75.2,57.8C83,49.2,84.8,35.7,84.7,23.2C84.5,10.7,82.5,-0.8,79.8,-12.3C77.1,-23.7,73.8,-35.1,66.7,-44.3C59.6,-53.5,48.7,-60.5,37.4,-67.1C26.2,-73.7,14.7,-79.8,2.2,-81.5C-10.3,-83.2,-23.8,-80.4,-36.8,-75.4C-49.7,-70.4,-62.1,-63.1,-70.1,-52.4C-78.1,-41.7,-81.7,-27.6,-83.5,-13.6C-85.2,0.4,-85.1,14.3,-81.5,26.9C-77.9,39.6,-70.7,50.9,-61,59.9C-51.3,68.9,-39,75.4,-26.4,78.6C-13.7,81.7,-0.6,81.4,13.6,80.8C27.8,80.1,43.1,79,55.2,72.7C67.3,66.3,76.3,54.6,82.2,42.1C88,29.6,90.8,16.2,89.8,3.4C88.7,-9.4,83.9,-21.7,76.9,-32.9C69.9,-44.1,60.8,-54.3,50.2,-62.3C39.6,-70.3,27.3,-76.1,14.1,-78.6C0.9,-81.1,-13.1,-80.3,-26.6,-77C-40.2,-73.7,-53.3,-67.9,-63.9,-59C-74.5,-50.1,-82.6,-38.2,-87.3,-24.9C-92,-11.7,-93.3,2.8,-89.6,15.7C-85.9,28.6,-77.3,39.8,-67.7,50.1C-58.2,60.4,-47.7,69.7,-35.5,75.1C-23.4,80.5,-9.6,82.1,3.4,82.2C16.5,82.3,28.7,80.9,42.7,78.3" />
          </svg>
        </div>
        
        {/* Light dots pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%">
            <pattern id="educationPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#0066CC" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#educationPattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header section */}
          <div className="mb-16 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
            >
              <GraduationCap size={16} className="mr-2" />
              <span>{language === 'en' ? 'KNOWLEDGE TRANSFER' : 'TUDÁSÁTADÁS'}</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 max-w-4xl mx-auto"
            >
              {language === 'en' ? (
                <>
                  The Significance of <span className="text-blue-600">Educational Initiatives</span> and Workforce Training
                </>
              ) : (
                <>
                  Az <span className="text-blue-600">Oktatási kezdeményezések</span> és a munkavállalói képzés jelentősége
                </>
              )}
            </motion.h2>
          </div>

          {/* Main content with image */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left content column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {language === 'en' 
                    ? "Our commitment to minimizing pellet loss is applied consistently across all our production facilities. We've ensured that the relevant employees at each site are thoroughly trained to understand the importance of handling plastic resins responsibly."
                    : "A szemcseveszteség minimalizálása iránti elkötelezettségünket következetesen alkalmazzuk minden gyártóüzemünkben. Gondoskodtunk arról, hogy az egyes telephelyeken az érintett munkavállalók alapos képzést kapjanak a műanyag gyanták felelősségteljes kezeléséről."}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? "Furthermore, we extend this training to external contractors, including drivers and distributors, to guarantee that environmentally sound practices are adhered to throughout our entire value chain."
                    : "Továbbá ezt a képzést külső vállalkozókra, köztök sofőrökre és forgalmazókra is kiterjesztjük, hogy biztosítsuk a környezetvédelmi szempontból megfelelő gyakorlatok betartását teljes értékláncunkban."}
                </p>
              </div>
              
              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">
                    {language === 'en' ? 'Staff training completion' : 'Munkatársi képzés teljesítése'}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">4x</div>
                  <div className="text-gray-600">
                    {language === 'en' ? 'Annual refresher courses' : 'Éves frissítő tanfolyamok'}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right image column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                {/* Background shape */}
                <div className="absolute -right-6 -bottom-6 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Professional-instructor-delivering-plastic-pellet-handling-training-to-a-diverse.png"
                    alt={language === 'en' ? "Employee training session" : "Munkavállalói képzési alkalom"}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Image caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-5">
                    <p className="text-white font-medium">
                      {language === 'en' ? "Hands-on training for proper pellet handling" : "Gyakorlati képzés a megfelelő granulátumkezeléshez"}
                    </p>
                  </div>
                </div>
                
                {/* Floating education icon */}
                <div className="absolute -top-5 -right-5 bg-white rounded-full p-3 shadow-lg">
                  <div className="rounded-full bg-blue-600 p-3">
                    <Brain size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Training areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                {language === 'en' ? "Key Training Focus Areas" : "Fő Képzési Fókuszterületek"}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trainingAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl"
                  >
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                      <area.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{area.title}</h4>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Bottom commitment message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-blue-600 text-white inline-block rounded-full px-8 py-4 shadow-lg">
              <div className="flex items-center gap-3">
                <BookOpen size={20} />
                <span className="text-lg font-medium">
                  {language === 'en' 
                    ? "Investing in education for a pellet-free environment"
                    : "Befektetés az oktatásba egy szemcsementes környezetért"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationalInitiatives;
