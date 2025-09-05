import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Sparkles, Target, Zap, Shield, Globe, Cog } from 'lucide-react';

// Card component for modern design
const ServiceCard = ({ 
  title, 
  content, 
  index,
  keyPoints = [],
  icon: Icon
}: { 
  title: string; 
  content: string; 
  index: number;
  keyPoints?: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
}) => {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative p-8">
        {/* Icon and number */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Icon size={24} />
          </div>
          <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-amber-700">{index + 1}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Content */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {content}
        </p>
        
        {/* Key points */}
        {keyPoints.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              {language === 'en' ? 'Key Benefits' : 'Főbb Előnyök'}
            </h4>
            <div className="space-y-2">
              {keyPoints.map((point, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-600">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Hover effect - bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        
        {/* Corner decoration */}
        <div className="absolute top-6 right-6 w-2 h-2 bg-amber-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const ContractManufacturingCards = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Services data with icons
  const servicesData = language === 'en' ? [
    {
      title: "Product Design",
      content: "With a dedicated team of engineers and designers, a collaborative approach between client and manufacturer, and adherence to all regulatory requirements, we ensure your design is optimized for manufacturability.",
      icon: Sparkles,
      keyPoints: [
        "Collaborative approach between client and manufacturer",
        "Adherence to all regulatory requirements",
        "Optimized for manufacturability"
      ]
    },
    {
      title: "Accelerated 3D Prototyping",
      content: "Rapid 3D prototyping has transformed the strategic manufacturing process, enabling companies to swiftly refine design concepts and efficiently produce parts. This technology is crucial for any business aiming to enhance its product development cycle.",
      icon: Target,
      keyPoints: [
        "Swift design concept refinement",
        "Efficient parts production",
        "Enhanced product development cycles"
      ]
    },
    {
      title: "Tooling Management Services",
      content: "Tooling management encompasses design, development, maintenance, and repair. An efficient tooling management system can significantly cut costs by minimizing the need for rework and reducing scrap. Consequently, it plays a crucial role in the success of any strategic manufacturing operation.",
      icon: Cog,
      keyPoints: [
        "Comprehensive design and development",
        "Regular maintenance and repair",
        "Cost reduction through efficiency"
      ]
    },
    {
      title: "Sourcing and Supply Chain Management",
      content: "With a network of suppliers from various countries and dedicated quality assurance teams, Flair-Plastic ensures a streamlined and flexible supply chain that significantly lowers your production costs and reduces lead times. We collaborate closely with you at every step of the process.",
      icon: Globe,
      keyPoints: [
        "Global supplier network",
        "Reduced production costs and lead times",
        "Dedicated quality assurance teams"
      ]
    },
    {
      title: "Moulding",
      content: "With decades of industry experience and cutting-edge moulding machines, We have the expertise, skills, and equipments necessary to handle almost any plastic injection moulding project.",
      icon: Shield,
      keyPoints: [
        "State-of-the-art moulding machines",
        "Diverse material services",
        "Complex geometry expertise"
      ]
    },
    {
      title: "Decoration and Labelling",
      content: "Our decoration and labelling services add the finishing touches that make your products stand out. From advanced printing techniques to precision labelling, we ensure your brand identity is perfectly represented.",
      icon: Zap,
      keyPoints: [
        "Advanced printing techniques",
        "Precision labelling solutions",
        "Brand identity optimization"
      ]
    }
  ] : [
    {
      title: "Termék tervezés",
      content: "Dedikált mérnökökből és tervezőkből álló csapattal, együttműködő megközelítéssel az ügyfél és a gyártó között, valamint minden szabályozási követelménynek való megfeleléssel biztosítjuk, hogy az Ön tervezése optimalizálva legyen a gyárthatóságra.",
      icon: Sparkles,
      keyPoints: [
        "Együttműködésen alapuló megközelítés az ügyfél és a gyártó között",
        "Minden szabályozási követelménynek való megfelelés",
        "Gyárthatóságra optimalizálva"
      ]
    },
    {
      title: "Gyorsított 3D prototípuskészítés",
      content: "A gyors 3D prototípuskészítés átalakította a stratégiai gyártási folyamatot, lehetővé téve a vállalatok számára, hogy gyorsan finomítsák a tervezési koncepciókat és hatékonyan állítsanak elő alkatrészeket. Ez a technológia kulcsfontosságú minden olyan vállalkozás számára, amely célja a termékfejlesztési ciklus javítása.",
      icon: Target,
      keyPoints: [
        "Gyors tervezési koncepció finomítás",
        "Hatékony alkatrészgyártás",
        "Javított termékfejlesztési ciklusok"
      ]
    },
    {
      title: "Szerszámkezelési szolgáltatások",
      content: "A szerszámkezelés magában foglalja a tervezést, fejlesztést, karbantartást és javítást. Egy hatékony szerszámkezelési rendszer jelentősen csökkentheti a költségeket az újramunkálás szükségességének minimalizálásával és a hulladék csökkentésével. Következésképpen kulcsszerepet játszik minden stratégiai gyártási művelet sikerében.",
      icon: Cog,
      keyPoints: [
        "Átfogó tervezés és fejlesztés",
        "Rendszeres karbantartás és javítás",
        "Költségcsökkentés a hatékonyság révén"
      ]
    },
    {
      title: "Beszerzés és ellátási lánc menedzsment",
      content: "Különböző országokból származó beszállítók hálózatával és dedikált minőségbiztosítási csapatokkal a Flair-Plastic biztosítja az egyszerűsített és rugalmas ellátási láncot, amely jelentősen csökkenti a gyártási költségeket és lerövidíti a szállítási határidőket. Szorosan együttműködünk Önnel a folyamat minden lépésében.",
      icon: Globe,
      keyPoints: [
        "Globális beszállítói hálózat",
        "Csökkentett gyártási költségek és átfutási idők",
        "Dedikált minőségbiztosítási csapatok"
      ]
    },
    {
      title: "Fröccsöntés",
      content: "Évtizedes ipari tapasztalattal és élvonalbeli fröccsöntő gépekkel rendelkezünk a szakértelemmel, készségekkel és berendezésekkel, amelyek szükségesek szinte bármilyen műanyag fröccsöntési projekt kezeléséhez.",
      icon: Shield,
      keyPoints: [
        "Legkorszerűbb fröccsöntő gépek",
        "Változatos anyagképességek",
        "Összetett geometriai szakértelem"
      ]
    },
    {
      title: "Dekoráció és címkézés",
      content: "Dekorációs és címkézési szolgáltatásaink hozzáadják azokat a befejező érintéseket, amelyek kiemelik termékeiket. A fejlett nyomtatási technikáktól a precíziós címkézésig biztosítjuk, hogy márkaazonosságát tökéletesen képviseljék.",
      icon: Zap,
      keyPoints: [
        "Fejlett nyomtatási technikák",
        "Precíziós címkézési megoldások",
        "Márkaidentitás optimalizálás"
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-100/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">
              {language === 'en' ? 'Our Services' : 'Szolgáltatásaink'}
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
              {language === 'en' ? 'Strategic Manufacturing Solutions' : 'Stratégiai Gyártási Megoldások'}
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
              ? 'Explore our comprehensive strategic manufacturing services designed to streamline your production process and ensure quality at every stage.'
              : 'Fedezze fel átfogó stratégiai gyártási szolgáltatásainkat, amelyek célja a gyártási folyamat egyszerűsítése és a minőség biztosítása minden szakaszban.'}
          </motion.p>
          
          <motion.div 
            className="h-1 w-24 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-8"
            initial={{ width: 0 }}
            animate={{ width: isInView ? "6rem" : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              content={service.content}
              keyPoints={service.keyPoints}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 italic">
            {language === 'en' 
              ? 'Contact us to discuss how our strategic manufacturing solutions can support your specific needs.'
              : 'Vegye fel velünk a kapcsolatot, hogy megvitassuk, hogyan támogathatják az Ön egyedi igényeit stratégiai gyártási megoldásaink.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContractManufacturingCards;
