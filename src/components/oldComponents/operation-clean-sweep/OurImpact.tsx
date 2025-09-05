import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Leaf, Globe, Droplet, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const OurImpact = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background gradient wave */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-blue-50 to-white"></div>
        
        {/* Abstract waves */}
        <div className="absolute top-0 left-0 w-full h-[40%] opacity-[0.1]">
          <svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path 
              fill="#0066CC" 
              d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,154.7C672,171,768,213,864,213.3C960,213,1056,171,1152,144C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top section with impact heading */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12"
            >
              {/* Left side with heading */}
              <div className="md:w-5/12">
                <div className="inline-flex items-center px-4 py-1.5 bg-green-100 text-green-700 rounded-full mb-6">
                  <Leaf size={16} className="mr-2" />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'ENVIRONMENTAL IMPACT' : 'KÖRNYEZETI HATÁS'}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
                  {language === 'en' ? (
                    <>
                      <span className="text-blue-600">Extending Our Impact</span>
                      <br /> Beyond Manufacturing
                    </>
                  ) : (
                    <>
                      <span className="text-blue-600">Hatásunk kiterjesztése</span>
                      <br /> a gyártáson túl
                    </>
                  )}
                </h2>
              </div>

              {/* Right side with paragraph */}
              <div className="md:w-7/12">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {language === 'en' 
                    ? "Flair-Plastic's dedication to sustainability extends beyond our manufacturing operations. We are devoted to enhancing sustainable practices throughout our entire supply chain, from the procurement of raw materials to the distribution of finished products."
                    : "A Flair-Plastic fenntarthatóság iránti elkötelezettsége túlmutat a gyártási műveleteinken. Elkötelezettek vagyunk a fenntartható gyakorlatok fejlesztése mellett a teljes ellátási láncunkban, a nyersanyagok beszerzésétől a késztermékek forgalmazásáig."}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Middle visual showcase section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 relative"
          >
            {/* Triple panel feature */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Feature panel 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="relative h-48">
                  <Image 
                    src="https://flair-plastic.hu/wp-content/uploads/2024/05/sustainability1-1024x576.png.webp"
                    alt={language === 'en' ? "Material reduction" : "Anyagcsökkentés"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-xl font-bold">
                      {language === 'en' ? "Material Reduction" : "Anyagcsökkentés"}
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">
                    {language === 'en' 
                      ? "Our ongoing efforts focus on reducing material usage while maintaining product integrity and performance."
                      : "Folyamatos erőfeszítéseink az anyagfelhasználás csökkentésére összpontosítanak, miközben megőrizzük a termék integritását és teljesítményét."}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center text-blue-600 font-medium">
                      <span className="text-sm">
                        {language === 'en' ? "30% reduction achieved" : "30% csökkentés elérve"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature panel 2 - Main/center */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col lg:transform lg:scale-110 lg:z-10 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-medium">
                  {language === 'en' ? "Featured" : "Kiemelt"}
                </div>
                <div className="relative h-48">
                  <Image 
                    src="https://flair-plastic.hu/wp-content/uploads/2024/05/sustainability-feature-1024x576.jpg.webp"
                    alt={language === 'en' ? "Recycling enhancement" : "Újrahasznosítás fejlesztése"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-xl font-bold">
                      {language === 'en' ? "Recycling Enhancement" : "Újrahasznosítás Fejlesztése"}
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">
                    {language === 'en' 
                      ? "We're enhancing recycling processes throughout our operations, with a commitment to circularity in our production system."
                      : "Fejlesztjük az újrahasznosítási folyamatokat teljes működésünkben, elköteleződve a körforgásos rendszer mellett a gyártásban."}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center text-blue-600 font-medium">
                      <span className="text-sm">
                        {language === 'en' ? "85% materials recycled" : "85% újrahasznosított anyag"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature panel 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="relative h-48">
                  <Image 
                    src="https://flair-plastic.hu/wp-content/uploads/2024/05/sustainability2-1024x576.jpg.webp"
                    alt={language === 'en' ? "Community impact" : "Közösségi hatás"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-xl font-bold">
                      {language === 'en' ? "Community Impact" : "Közösségi Hatás"}
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">
                    {language === 'en' 
                      ? "Making positive contributions to the communities where we operate through engagement and environmental initiatives."
                      : "Pozitív hozzájárulás a működési közösségeinkhez elkötelezettséggel és környezetvédelmi kezdeményezésekkel."}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center text-blue-600 font-medium">
                      <span className="text-sm">
                        {language === 'en' ? "12 local projects annually" : "Évi 12 helyi projekt"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="w-40 h-40 rounded-full bg-blue-50 opacity-60"></div>
            </div>
            <div className="absolute -z-10 bottom-0 right-0 transform translate-y-1/4 translate-x-1/4">
              <div className="w-60 h-60 rounded-full bg-green-50 opacity-60"></div>
            </div>
          </motion.div>

          {/* Bottom section with Operation Clean Sweep info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Left column with heading and program badge */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-blue-600 text-white p-1 rounded-lg inline-block mb-6">
                  <Globe size={24} />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {language === 'en' ? (
                    <>About <span className="text-blue-600">Operation Clean Sweep</span></>
                  ) : (
                    <>A <span className="text-blue-600">Tiszta Söprés Műveletről</span></>
                  )}
                </h2>
                
                {/* Program badge */}
                <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <Image 
                        src="https://www.opcleansweep.org/wp-content/uploads/2018/10/OCS_Logo_RGB.png"
                        alt="Operation Clean Sweep logo"
                        width={80}
                        height={80}
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {language === 'en' ? "Official Program Partner" : "Hivatalos Program Partner"}
                      </p>
                      <p className="text-base font-medium text-blue-600">
                        {language === 'en' ? "Since 2020" : "2020 óta"}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Statistics */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 rounded-full p-1.5">
                      <Droplet size={16} className="text-blue-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {language === 'en' ? "Global Impact" : "Globális Hatás"}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {language === 'en' 
                      ? "Hundreds of plastics companies worldwide have committed to the Operation Clean Sweep pledge."
                      : "Több száz műanyagipari vállalat kötelezte el magát világszerte a Tiszta Söprés Művelet mellett."}
                  </p>
                  <div className="h-1 w-full bg-blue-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "74%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="h-full bg-blue-600"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>500+</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column with program details */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {language === 'en'
                    ? "Initiated in 1991, Operation Clean Sweep is a program overseen by the Plastics Industry Association and the American Chemistry Council. The program generates comprehensive reports, conducts audits, and issues guidelines for adopting best practices to prevent plastic materials from entering waterways."
                    : "Az 1991-ben indított Tiszta Söprés Művelet egy olyan program, amelyet a Műanyagipari Szövetség és az Amerikai Kémiai Tanács felügyel. A program átfogó jelentéseket készít, auditokat végez, és irányelveket ad ki a legjobb gyakorlatok elfogadásához, hogy megakadályozza a műanyagok vízutakba jutását."}
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {language === 'en'
                    ? "Globally, hundreds of plastics companies have committed to the Operation Clean Sweep pledge, aiming to eliminate the loss of resin pellets, flakes, and powders."
                    : "Világszerte több száz műanyagipari vállalat kötelezte el magát a Tiszta Söprés Művelet mellett, azzal a céllal, hogy megszüntesse a gyantaszemcsék, pelyhek és porok veszteségét."}
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-8 rounded-r-lg">
                  <p className="text-gray-700 italic">
                    {language === 'en'
                      ? "Flair-Plastic is dedicated to lessening our environmental footprint and fostering a beneficial social legacy. Our green strategy encompasses measures to minimize waste, enhance recycling efforts, and operate synergistically with the communities where we are located."
                      : "A Flair-Plastic elkötelezett környezeti lábnyomunk csökkentése és a hasznos társadalmi örökség előmozdítása mellett. Zöld stratégiánk magában foglalja a hulladék minimalizálására, az újrahasznosítási erőfeszítések fokozására és a működési közösségeinkkel való szinergikus együttműködésre irányuló intézkedéseket."}
                  </p>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {language === 'en'
                    ? "Through initiatives such as Operation Clean Sweep, we are at the forefront of establishing best practices to preserve our planet. We encourage you to join us in our quest to create a brighter future for everyone."
                    : "Olyan kezdeményezések révén, mint a Tiszta Söprés Művelet, az élen járunk a bolygónk megőrzését szolgáló legjobb gyakorlatok kialakításában. Biztatjuk Önt, hogy csatlakozzon hozzánk küldetésünkben egy jobb jövő megteremtéséért mindenki számára."}
                </p>

                {/* Call to action */}
                <div className="mt-10">
                  <a 
                    href="https://www.opcleansweep.org/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-medium transition-colors group"
                  >
                    <span>
                      {language === 'en' ? "Learn more about the program" : "Tudjon meg többet a programról"}
                    </span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
