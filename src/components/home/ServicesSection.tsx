
import React from 'react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { language } = useLanguage();

  const services = [
    {
      title: language === 'en' ? 'Precision Contract Manufacturing Solutions' : 'Precíziós szerződéses gyártási megoldások',
      description: language === 'en' 
        ? 'Unlock the full potential of your product ideas with our comprehensive contract manufacturing services.'
        : 'Valósítsa meg termékeit teljes potenciállal átfogó szerződéses gyártási szolgáltatásainkkal.',
      imageSrc: '/lovable-uploads/ccfa0b21-daed-4f1e-9f0b-042099f3ebc6.png'
    },
    {
      title: language === 'en' ? 'Leading Plastic Injection Moulding Expertise' : 'Vezető műanyag fröccsöntési szakértelem',
      description: language === 'en'
        ? 'Experience unparalleled quality and reliability with our plastic injection molding services.'
        : 'Tapasztalja meg a páratlan minőséget és megbízhatóságot műanyag fröccsöntési szolgáltatásainkkal.',
      imageSrc: '/lovable-uploads/ccfa0b21-daed-4f1e-9f0b-042099f3ebc6.png'
    },
    {
      title: language === 'en' ? 'Innovative Household Products' : 'Innovatív háztartási termékek',
      description: language === 'en'
        ? 'Explore our wide range of premium household products designed to enhance your everyday life.'
        : 'Fedezze fel prémium háztartási termékeink széles választékát a mindennapi élet jobbá tételéhez.',
      imageSrc: '/lovable-uploads/ccfa0b21-daed-4f1e-9f0b-042099f3ebc6.png'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
