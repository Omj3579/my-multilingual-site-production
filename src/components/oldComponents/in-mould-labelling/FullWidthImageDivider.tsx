
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const FullWidthImageDivider = () => {
  const { language } = useLanguage();
  
  return (
    <section className="relative w-full overflow-hidden pt-15">
      {/* Full-width Image */}
      <div className="w-full h-[400px]">
        <img
          src="https://flair-plastic.hu/wp-content/uploads/2024/05/decoration-1.png"
          alt={language === 'en' ? "In-Mould Labelling Process" : "Szerszámon belüli címkézési folyamat"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Upward-pointing triangle cutting into the bottom of image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "70px solid transparent",
            borderRight: "70px solid transparent",
            borderBottom: "60px solid white",
          }}
        />
      </div>
    </section>
  );
};

export default FullWidthImageDivider;
