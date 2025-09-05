import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

type CapabilityPage = {
  title: { en: string; hu: string };
  summary: { en: string; hu: string };
  path: string;
  image: string;
};

const ALL_CAPABILITIES: CapabilityPage[] = [
  {
    title: { en: 'Plastic Injection', hu: 'Műanyag Fröccsöntés' },
    summary: { 
      en: 'Advanced plastic injection molding solutions for precision manufacturing',
      hu: 'Fejlett műanyag fröccsöntési megoldások precíziós gyártáshoz'
    },
    path: '/capabilities/plastic-injection',
    image: 'https://flair-plastic.hu/wp-content/uploads/2024/04/DJI_0999.00_10_30_08.Still030-300x169.jpg.webp'
  },
  {
    title: { en: 'In-Mould Labelling', hu: 'Címkézés Fröccsöntés Közben' },
    summary: {
      en: 'Seamless integration of labels during the injection molding process',
      hu: 'Címkék zökkenőmentes integrálása a fröccsöntési folyamat során'
    },
    path: '/capabilities/in-mould-labelling',
    image: 'https://flair-plastic.hu/wp-content/uploads/2024/05/machine-performing-in-mould-decoration-on-white-plastic-parts-showcasing-the-process-of-1.png.webp'
  },
  {
    title: { en: 'In-Mould Decoration', hu: 'Dekoráció Fröccsöntés Közben' },
    summary: {
      en: 'High-quality decorative finishes applied during molding',
      hu: 'Kiváló minőségű dekoratív felületek alkalmazása fröccsöntés közben'
    },
    path: '/capabilities/in-mould-decoration',
    image: 'https://flair-plastic.hu/wp-content/uploads/2024/05/machine-performing-in-mould-decoration-on-white-plastic-parts-showcasing-the-process-of-1.png.webp'
  },
  {
    title: { en: 'Injection Blow', hu: 'Fröccsöntött Fújás' },
    summary: {
      en: 'Combined injection and blow molding for hollow plastic products',
      hu: 'Kombinált fröccsöntés és fúvás üreges műanyag termékekhez'
    },
    path: '/capabilities/injection-blow',
    image: 'https://flair-plastic.hu/wp-content/uploads/2024/05/machine-performing-in-mould-decoration-on-white-plastic-parts-showcasing-the-process-of-1.png.webp'
  },
  {
    title: { en: 'Surface Finishing', hu: 'Felületkezelés' },
    summary: {
      en: 'Expert surface treatment and finishing solutions',
      hu: 'Szakértői felületkezelési és -kikészítési megoldások'
    },
    path: '/capabilities/surface-finishing',
    image: 'https://flair-plastic.hu/wp-content/uploads/2024/05/machine-performing-in-mould-decoration-on-white-plastic-parts-showcasing-the-process-of-1.png.webp'
  }
];

interface RelatedCapabilitiesSliderProps {
  currentPath: string;
}

const RelatedCapabilitiesSlider = ({ currentPath }: RelatedCapabilitiesSliderProps) => {
  const { language } = useLanguage();
  const langKey = (['en', 'hu'].includes(language) ? language : 'en') as 'en' | 'hu';
  const relatedPages = ALL_CAPABILITIES.filter(page => page.path !== currentPath);
  const [isMounted, setIsMounted] = useState(false);
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-amber-50 to-amber-100/50 py-20 overflow-hidden">
      {/* Decorative elements - client-side only */}
      {isMounted && (
        <>
          <div className="absolute left-0 -top-20 w-[400px] h-[400px] rounded-full bg-gradient-radial from-orange-200/20 to-transparent blur-3xl"></div>
          <div className="absolute right-0 -bottom-20 w-[300px] h-[300px] rounded-full bg-gradient-radial from-orange-200/20 to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="related-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#related-grid)" />
            </svg>
          </div>
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm uppercase tracking-wider font-medium text-orange-600 mb-3 block">
            {langKey === 'en' ? 'Explore More' : 'Fedezzen Fel Többet'}
          </span>
          
          <h2 className="text-4xl font-bold mb-5">
            {langKey === 'en' ? (
              <>
                Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Capabilities</span>
              </>
            ) : (
              <>
                Kapcsolódó <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Képességek</span>
              </>
            )}
          </h2>
          
          <div className="w-40 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full my-5"></div>
          
          <p className="max-w-2xl mx-auto text-gray-600">
            {langKey === 'en' 
              ? 'Discover our full range of manufacturing capabilities and integrated solutions'
              : 'Fedezze fel gyártási képességeink teljes skáláját és integrált megoldásainkat'}
          </p>
        </motion.div>
        
        <div className="w-full max-w-6xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {relatedPages.map((page, index) => (
                <CarouselItem key={page.path} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Link href={page.path} className="block group">
                      <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                        <div className="aspect-[4/3] w-full relative rounded-t-2xl overflow-hidden">
                          <Image
                            src={page.image}
                            alt={page.title[langKey]}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-xl">
                              {page.title[langKey]}
                            </h3>
                          </div>
                        </div>
                        
                        <div className="p-5">
                          <p className="text-gray-700 line-clamp-2 mb-4 min-h-[48px]">
                            {page.summary[langKey]}
                          </p>
                          <div className="flex items-center justify-end text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                            <span>{langKey === 'en' ? 'Learn more' : 'Tudj meg többet'}</span>
                            <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-orange-200 bg-white text-orange-600 shadow-md hover:bg-orange-50 hover:text-orange-700" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-orange-200 bg-white text-orange-600 shadow-md hover:bg-orange-50 hover:text-orange-700" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RelatedCapabilitiesSlider;
