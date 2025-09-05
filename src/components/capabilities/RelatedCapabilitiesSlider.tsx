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
import { SectionHeader } from './shared/SectionHeader';
import { BackgroundPattern } from './shared/BackgroundPattern';
import { relatedCapabilities } from './shared/constants';
import { ComponentProps } from './shared/types';

interface RelatedCapabilitiesSliderProps extends ComponentProps {
  currentPath: string;
}

const RelatedCapabilitiesSlider: React.FC<RelatedCapabilitiesSliderProps> = ({ 
  currentPath, 
  className = '' 
}) => {
  const { language } = useLanguage();
  const langKey = (['en', 'hu'].includes(language) ? language : 'en') as 'en' | 'hu';
  const relatedPages = relatedCapabilities.filter(page => page.path !== currentPath);
  const [isMounted, setIsMounted] = useState(false);
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={`relative w-full bg-gradient-to-b from-amber-50 to-amber-100/50 py-20 overflow-hidden ${className}`}>
      {/* Decorative elements - client-side only */}
      {isMounted && (
        <>
          <div className="absolute left-0 -top-20 w-[400px] h-[400px] rounded-full bg-gradient-radial from-orange-200/20 to-transparent blur-3xl"></div>
          <div className="absolute right-0 -bottom-20 w-[300px] h-[300px] rounded-full bg-gradient-radial from-orange-200/20 to-transparent blur-3xl"></div>
          
          <BackgroundPattern pattern="grid" opacity={0.02} />
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          subtitle={langKey === 'en' ? 'Explore More' : 'Fedezzen Fel Többet'}
          title={
            langKey === 'en' ? (
              <>
                Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Capabilities</span>
              </>
            ) : (
              <>
                Kapcsolódó <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Képességek</span>
              </>
            )
          }
          description={
            langKey === 'en' 
              ? 'Discover our full range of manufacturing capabilities and integrated solutions'
              : 'Fedezze fel gyártási képességeink teljes skáláját és integrált megoldásainkat'
          }
          className="text-center mb-14"
          subtitleColor="text-orange-600"
          underlineGradient="from-amber-400 to-orange-500"
        />
        
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
