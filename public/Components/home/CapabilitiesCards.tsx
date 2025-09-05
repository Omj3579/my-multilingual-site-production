import React, { useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';

interface Card {
  img: string;
  title: {
    en: string;
    hu: string;
  };
  link: string;
  description: {
    en: string;
    hu: string;
  };
  buttonText?: {
    en: string;
    hu: string;
  };
}

const cards: Card[] = [
  {
    img: 'https://flair-plastic.hu/wp-content/uploads/2024/09/2.png.webp',
    title: {
      en: 'Precision Contract Manufacturing Solutions',
      hu: 'Precíziós Szerződéses Gyártási Megoldások'
    },
    link: '/capabilities/contract-manufacturing',
    description: {
      en: 'Unlock the full potential of your product ideas with our comprehensive contract manufacturing services. Specializing in high-volume production, we leverage advanced injection and blow molding technologies to deliver precision plastic components and assemblies. From concept to completion, our team works closely with you to ensure your specifications and quality standards are met every step of the way.',
      hu: 'Bontakoztassa ki termékelképzeléseinek teljes potenciálját átfogó szerződéses gyártási szolgáltatásainkkal. A nagy volumenű gyártásra specializálódva fejlett fröccsöntési és fúvási technológiákat alkalmazunk precíziós műanyag alkatrészek és szerelvények előállításához. A koncepciótól a befejezésig csapatunk szorosan együttműködik Önnel, hogy minden lépésben megfeleljen az előírásoknak és minőségi szabványoknak.'
    },
    buttonText: {
      en: 'Discover Manufacturing Solutions',
      hu: 'Gyártási Megoldások Felfedezése'
    }
  },
  {
    img: 'https://flair-plastic.hu/wp-content/uploads/2024/09/1.png.webp',
    title: {
      en: 'Leading Plastic Injection Moulding Expertise',
      hu: 'Vezető Műanyag Fröccsöntési Szakértelem'
    },
    link: '/capabilities/plastic-injection',
    description: {
      en: 'Experience unparalleled quality and reliability with our plastic injection molding services. Our state-of-the-art facility is equipped with cutting-edge machinery capable of handling complex molds and a diverse range of materials. We focus on delivering high-precision parts and components, tailored to the needs of industries ranging from power tools to consumer goods.',
      hu: 'Tapasztalja meg a páratlan minőséget és megbízhatóságot műanyag fröccsöntési szolgáltatásainkkal. Csúcstechnológiás létesítményünk modern gépekkel van felszerelve, amelyek képesek komplex formák és különböző anyagok kezelésére. Kiemelt figyelmet fordítunk a nagy pontosságú alkatrészek és komponensek gyártására, az elektromos szerszámoktól a fogyasztási cikkekig terjedő iparágak igényeinek megfelelően.'
    },
    buttonText: {
      en: 'Explore Injection Moulding',
      hu: 'Fröccsöntési Technológia Felfedezése'
    }
  },
  {
    img: 'https://flair-plastic.hu/wp-content/uploads/2024/09/household-products.png.webp',
    title: {
      en: 'Innovative Household Products for Modern Living',
      hu: 'Innovatív Háztartási Termékek Modern Életvitelhez'
    },
    link: '/capabilities/household-products',
    description: {
      en: 'Explore our wide range of premium household products designed to enhance your everyday life. From kitchen essentials to storage solutions, our products combine functionality with style, made using eco-friendly practices and the highest quality recycled plastics. Each item reflects our commitment to innovation and sustainability.',
      hu: 'Fedezze fel prémium háztartási termékeink széles választékát, amelyeket a mindennapi élet megkönnyítésére terveztünk. A konyhai eszközöktől a tárolási megoldásokig termékeink ötvözik a funkcionalitást a stílussal, környezetbarát gyakorlatokkal és a legmagasabb minőségű újrahasznosított műanyagokból készülnek. Minden termék tükrözi az innováció és fenntarthatóság iránti elkötelezettségünket.'
    },
    buttonText: {
      en: 'View Our Product Range',
      hu: 'Termékválasztékunk Megtekintése'
    }
  }
];

const CapabilitiesCards = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 70, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 70,
        damping: 20
      }
    }
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#f8f8f8] to-[#f2f2f2] py-24 px-6">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block relative">
            <span className="relative z-10">{language === 'en' ? 'Our Services' : 'Szolgáltatásaink'}</span>
            <motion.span 
              className="absolute -bottom-3 left-0 right-0 h-3 bg-[#ffaa73]/30 -skew-y-3 z-0"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 300 } 
              }}
              className="relative min-h-[600px] rounded-2xl overflow-hidden transform-gpu group"
              style={{ 
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              }}
            >
              {/* Background Image with Gradient Overlay */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2.5 }}
              >
                <Image
                  src={card.img}
                  alt={`${card.title[language as keyof typeof card.title] || card.title['en']}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
                
                {/* Additional blur effect that appears on hover */}
                <motion.div 
                  className="absolute inset-0 backdrop-blur-[2px] opacity-0 transition-opacity duration-500"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
              
              {/* Content Container with Glassmorphism Effect */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                {/* Top Title Area */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ width: 60 }}
                    whileHover={{ width: 100 }}
                    className="h-1 bg-[#ffaa73] mb-4"
                  />
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    whileHover={{ x: 5 }}
                  >
                    {card.title[language]}
                  </motion.h3>
                </div>
                
                {/* Glassmorphism Content Area */}
                <motion.div 
                  className="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 transform-gpu"
                  initial={{ y: 20, opacity: 0.9 }}
                  whileHover={{ 
                    y: 0, 
                    opacity: 1,
                    backdropFilter: "blur(12px)",
                    backgroundColor: "rgba(255, 255, 255, 0.15)" 
                  }}
                >
                  <motion.p 
                    className="text-white/90 text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {/* Display first two sentences of description for better fit */}
                    {card.description[language].split('.').slice(0, 2).join('.') + '.'}
                  </motion.p>
                  
                  <Link href={card.link}>
                    <motion.button 
                      className="w-full backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-lg py-3 px-5 font-medium text-sm flex items-center justify-center space-x-2 transform-gpu transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>
                        {card.buttonText ? card.buttonText[language] : language === 'en' ? 'Explore Solution' : 'Megoldás Felfedezése'}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CapabilitiesCards;
