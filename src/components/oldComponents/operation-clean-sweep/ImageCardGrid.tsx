
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ImageCardGrid = () => {
  const { language } = useLanguage();

  const cards = [
    {
      image: "https://flair-plastic.hu/wp-content/uploads/2024/05/lady-engaging-in-reforestation-efforts-contr652ibuting-to-environmental-.png.webp",
      alt: language === 'en' ? "Green plastic pellets" : "Zöld műanyag granulátumok"
    },
    {
      image: "https://flair-plastic.hu/wp-content/uploads/2024/05/susta65120.png.webp",
      alt: language === 'en' ? "Material test object" : "Anyagvizsgálati tárgy"
    }
  ];

  return (
    <section className="bg-white px-6 md:px-20 py-16 md:py-24 -mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="rounded-xl overflow-hidden shadow-lg relative w-full"
            style={{ aspectRatio: '16/9' }}
          >
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCardGrid;
