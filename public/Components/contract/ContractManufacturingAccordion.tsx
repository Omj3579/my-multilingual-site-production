import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check } from 'lucide-react';

// Enhanced Plus/Minus icon with more sophisticated animation
const PlusMinusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative">
    <motion.div
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 border border-amber-200"
      animate={{ 
        backgroundColor: isOpen ? "rgb(254 243 199 / 1)" : "rgb(255 251 235 / 1)",
        borderColor: isOpen ? "rgb(245 158 11 / 0.6)" : "rgb(245 158 11 / 0.3)"
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-amber-600 rounded-full"
        style={{ transformOrigin: "center" }}
      />
      <motion.span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-5 bg-amber-600 rounded-full"
        style={{ transformOrigin: "center" }}
        animate={{ scaleY: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  </div>
);

// Enhanced Accordion Item component
const AccordionItem = ({ 
  title, 
  content, 
  image,
  isInView,
  index,
  keyPoints = []
}: { 
  title: string; 
  content: string; 
  image?: string;
  isInView: boolean;
  index: number;
  keyPoints?: string[];
}) => {
  const [isOpen, setIsOpen] = useState(index === 0);
  const [hovered, setHovered] = useState(false);
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Collapsible 
        open={isOpen} 
        onOpenChange={setIsOpen}
        className={`border border-gray-100 rounded-xl mb-6 overflow-hidden transition-all duration-300 ${
          isOpen 
            ? "bg-white shadow-xl" 
            : hovered 
              ? "bg-amber-50/30 shadow-md" 
              : "bg-white/60 shadow-sm"
        }`}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full py-6 px-6 md:px-8 text-left">
          <div className="flex items-center gap-4">
            <motion.div 
              className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full ${
                isOpen ? "bg-amber-500 text-white" : "bg-amber-100 text-amber-900"
              }`}
              animate={{ 
                backgroundColor: isOpen ? "#f59e0b" : "#fef3c7",
                color: isOpen ? "#ffffff" : "#78350f"
              }}
            >
              <span className="text-xl font-semibold">{index + 1}</span>
            </motion.div>
            
            <motion.h3 
              className={`text-xl md:text-2xl font-medium transition-colors ${
                isOpen ? "text-amber-600" : "text-gray-800"
              }`}
              layout
            >
              {title}
            </motion.h3>
          </div>
          
          <PlusMinusIcon isOpen={isOpen} />
        </CollapsibleTrigger>
        
        <AnimatePresence>
          {isOpen && (
            <CollapsibleContent 
              forceMount
              asChild
            >
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="px-6 md:px-8 pb-8"
              >
                {/* Content layout with optional image */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Use a more explicit approach for column spans */}
                  <div className={image ? "md:col-span-6 md:pr-4" : "md:col-span-12 md:pr-4"}>
                    <div className="prose prose-lg w-full max-w-none text-gray-600">
                      <p className="leading-relaxed">{content}</p>
                    </div>
                    
                    {/* Display key points if available */}
                    {keyPoints.length > 0 && (
                      <div className="mt-6 space-y-2">
                        <h4 className="text-lg font-medium text-gray-800">
                          {language === 'en' ? 'Key Benefits:' : 'Főbb előnyök:'}
                        </h4>
                        {keyPoints.map((point, i) => (
                          <motion.div 
                            key={i}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                          >
                            <Check className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Right column with image if available */}
                  {image && (
                    <motion.div 
                      className="md:col-span-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-white p-1.5">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 via-amber-50/10 to-white/20 z-0" />
                        
                        <div className="relative overflow-hidden rounded-lg">
                          {/* Enhanced shine effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 z-10"
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                          />
                        
                          <img
                            src={image}
                            alt={title}
                            className="w-full max-w-full h-auto rounded-lg shadow-md transform transition-all duration-700 hover:scale-[1.03] relative z-0"
                          />
                          
                          {/* Corner decorations */}
                          {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((position, i) => (
                            <motion.div 
                              key={i}
                              className={`absolute w-3 h-3 border-2 border-amber-300/50 rounded-full ${position}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.4 + (i * 0.1) }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </Collapsible>
    </motion.div>
  );
};

const ContractManufacturingAccordion = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const items = language === 'en' ? [
    {
      title: "Product Design",
      content: "We view product design as a collaborative effort between the customer and manufacturer. Our aim is to ensure that the final product not only meets all regulatory requirements but is also fine-tuned for optimal manufacturability.",
      keyPoints: [
        "Collaborative approach between customer and manufacturer",
        "Meeting all regulatory requirements",
        "Optimized for manufacturability"
      ]
    },
    {
      title: "Accelerated 3D Prototyping",
      content: "Rapid 3D prototyping has transformed the contract manufacturing process, enabling companies to swiftly refine design concepts and efficiently produce parts. This technology is crucial for any business aiming to enhance its product development cycle.",
      image: "https://flair-plastic.hu/wp-content/uploads/2024/04/Group-6903.png.webp",
      keyPoints: [
        "Swift design concept refinement",
        "Efficient parts production",
        "Enhanced product development cycles"
      ]
    },
    {
      title: "Tooling Management Services",
      content: "Tooling management encompasses design, development, maintenance, and repair. An efficient tooling management system can significantly cut costs by minimizing the need for rework and reducing scrap. Consequently, it plays a crucial role in the success of any contract manufacturing operation.",
      image: "https://flair-plastic.hu/wp-content/uploads/2024/04/Group-6904.png.webp",
      keyPoints: [
        "Comprehensive design and development",
        "Regular maintenance and repair",
        "Cost reduction through efficiency"
      ]
    },
    {
      title: "Sourcing and Supply Chain Management",
      content: "With a network of suppliers from various countries and dedicated quality assurance teams, Flair-Plastic ensures a streamlined and flexible supply chain that significantly lowers your production costs and reduces lead times. We collaborate closely with you at every step of the process.",
      image: "https://flair-plastic.hu/wp-content/uploads/2024/04/Group-6905.png.webp",
      keyPoints: [
        "Global supplier network",
        "Reduced production costs and lead times",
        "Dedicated quality assurance teams"
      ]
    },
    {
      title: "Moulding",
      content: "With decades of industry experience and cutting-edge moulding machines, We have the expertise, skills, and equipments necessary to handle almost any plastic injection moulding project.",
      keyPoints: [
        "State-of-the-art moulding machines",
        "Diverse material services",
        "Complex geometry expertise"
      ]
    },
    {
      title: "Decoration and Labelling",
      content: "Years of research and development have enabled us to refine methods that are effective, reliable, and cost-efficient, enhancing product design, recyclability, strength, and material variety. Thanks to our advanced automation technology, we achieve these improvements with exceptional efficiency and economy.",
      keyPoints: [
        "Enhanced product aesthetics and branding",
        "Improved recyclability and durability",
        "Advanced automation for cost-efficiency"
      ]
    }
  ] : [
    {
      title: "Terméktervezés",
      content: "A terméktervezést az ügyfél és a gyártó közötti együttműködésként kezeljük. Célunk annak biztosítása, hogy a végtermék ne csak megfeleljen minden szabályozási követelménynek, hanem optimalizálva legyen a gyárthatóságra is.",
      keyPoints: [
        "Együttműködésen alapuló megközelítés az ügyfél és a gyártó között",
        "Minden szabályozási követelménynek való megfelelés",
        "Gyárthatóságra optimalizálva"
      ]
    },
    {
      title: "Gyorsított 3D prototípuskészítés",
      content: "A gyors 3D prototípuskészítés átalakította a szerződéses gyártási folyamatot, lehetővé téve a vállalatok számára a tervezési koncepciók gyors finomítását és az alkatrészek hatékony gyártását. Ez a technológia kulcsfontosságú minden olyan vállalkozás számára, amely fejleszteni kívánja termékeinek fejlesztési ciklusát.",
      image: "https://flair-plastic.hu/wp-content/uploads/2024/04/Group-6903.png.webp",
      keyPoints: [
        "Gyors tervezési koncepciók finomítása",
        "Hatékony alkatrészgyártás",
        "Fejlett termékfejlesztési ciklusok"
      ]
    },
    {
      title: "Szerszámkezelési szolgáltatások",
      content: "A szerszámkezelés magában foglalja a tervezést, fejlesztést, karbantartást és javítást. Egy hatékony szerszámkezelési rendszer jelentősen csökkentheti a költségeket az újramunkálás szükségességének minimalizálásával és a hulladék csökkentésével. Következésképpen kulcsszerepet játszik minden szerződéses gyártási művelet sikerében.",
      image: "https://flair-plastic.hu/wp-content/uploads/2024/04/Group-6904.png.webp",
      keyPoints: [
        "Átfogó tervezés és fejlesztés",
        "Rendszeres karbantartás és javítás",
        "Költségcsökkentés hatékonyság révén"
      ]
    },
    {
      title: "Beszerzés és ellátási lánc menedzsment",
      content: "Különböző országokból származó beszállítói hálózattal és dedikált minőségbiztosítási csapatokkal a Flair-Plastic biztosítja a racionalizált és rugalmas ellátási láncot, amely jelentősen csökkenti a gyártási költségeket és az átfutási időket. Szorosan együttműködünk Önnel a folyamat minden lépésében.",
      image: "https://flair-plastic.hu/wp-content/uploads/2024/04/Group-6905.png.webp",
      keyPoints: [
        "Globális beszállítói hálózat",
        "Csökkentett gyártási költségek és átfutási idők",
        "Dedikált minőségbiztosítási csapatok"
      ]
    },
    {
      title: "Fröccsöntés",
      content: "Több évtizedes iparági tapasztalattal és csúcstechnológiás fröccsöntő gépekkel rendelkezünk, megvan a szükséges szakértelmünk, készségeink és berendezéseink szinte bármilyen műanyag fröccsöntési projekt kezeléséhez.",
      keyPoints: [
        "Csúcstechnológiás fröccsöntő gépek",
        "Sokféle anyag kezelésére való képesség",
        "Komplex geometriai szakértelem"
      ]
    },
    {
      title: "Dekoráció és címkézés",
      content: "A kutatás és fejlesztés évei lehetővé tették számunkra olyan módszerek finomítását, amelyek hatékonyak, megbízhatóak és költséghatékonyak, javítva a termék dizájnját, újrahasznosíthatóságát, szilárdságát és anyagválasztékát. Fejlett automatizálási technológiánknak köszönhetően ezeket a fejlesztéseket kivételes hatékonysággal és gazdaságossággal érjük el.",
      keyPoints: [
        "Javított termékesztétika és márkaépítés",
        "Jobb újrahasznosíthatóság és tartósság",
        "Fejlett automatizálás a költséghatékonyságért"
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute left-[5%] top-1/4 w-64 h-64 rounded-full bg-gradient-radial from-amber-100/20 to-transparent -z-10 hidden md:block" />
        <div className="absolute right-[10%] bottom-1/4 w-80 h-80 rounded-full bg-gradient-radial from-blue-50/20 to-transparent -z-10 hidden md:block" />
        
        {/* Animated elements */}
        <motion.div 
          className="absolute right-[15%] top-[20%] w-20 h-20 border border-dashed border-amber-300/30 rounded-full -z-10 hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div 
          className="absolute left-[12%] bottom-[15%] w-16 h-16 border-2 border-amber-200/20 rounded-full -z-10 hidden md:block"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Section indicator */}
          <motion.div 
            className="inline-flex mb-6 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-amber-500 mr-2"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium uppercase tracking-wider text-gray-700">
              {language === 'en' ? 'Our Services' : 'Szolgáltatásaink'}
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
              {language === 'en' ? 'Contract Manufacturing' : 'Szerződéses gyártás'}
            </span>
            <br />
            {language === 'en' ? 'Supporting Every Step of Your Journey' : 'Az Ön útjának minden lépését támogatva'}
          </h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {language === 'en' 
              ? 'Explore our comprehensive contract manufacturing services designed to streamline your production process and ensure quality at every stage.'
              : 'Fedezze fel átfogó szerződéses gyártási szolgáltatásainkat, amelyek célja a gyártási folyamat egyszerűsítése és a minőség biztosítása minden szakaszban.'}
          </motion.p>
          
          <motion.div 
            className="h-1 w-24 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-8"
            initial={{ width: 0 }}
            animate={{ width: isInView ? "6rem" : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        {/* Main content area with enhanced frame */}
        <div className="relative max-w-4xl mx-auto">
          {/* Side decoration line */}
          <motion.div 
            className="absolute top-0 bottom-0 left-[-30px] w-px hidden lg:block"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-px h-full bg-gradient-to-b from-transparent via-amber-300/50 to-transparent" />
          </motion.div>
          
          {/* Fancy corner decorations */}
          {[
            "top-0 left-0 border-t-2 border-l-2", 
            "top-0 right-0 border-t-2 border-r-2", 
            "bottom-0 left-0 border-b-2 border-l-2", 
            "bottom-0 right-0 border-b-2 border-r-2"
          ].map((cornerPos, i) => (
            <motion.div 
              key={i}
              className={`absolute w-12 h-12 ${cornerPos} border-amber-200/50 rounded-sm hidden lg:block`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isInView ? 0.7 : 0, scale: isInView ? 1 : 0.5 }}
              transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
            />
          ))}
          
          {/* Accordion items */}
          <div className="space-y-2">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                image={item.image}
                keyPoints={item.keyPoints}
                isInView={isInView}
              />
            ))}
          </div>
          
          {/* Footer note */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-gray-600 italic">
              {language === 'en' 
                ? 'Contact us to discuss how our contract manufacturing solutions can support your specific needs.'
                : 'Vegye fel velünk a kapcsolatot, hogy megvitassuk, hogyan támogathatják az Ön egyedi igényeit szerződéses gyártási megoldásaink.'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContractManufacturingAccordion;
