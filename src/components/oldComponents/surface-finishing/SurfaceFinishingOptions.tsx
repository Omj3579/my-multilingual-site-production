import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PaintRoller, 
  Zap, 
  Tag, 
  Printer, 
  PenTool, 
  Stamp
} from 'lucide-react';

const SurfaceFinishingOptions = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [headingRef, headingInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  
  // Parallax effects
  const headingY = useTransform(smoothProgress, [0, 0.3], [50, -20]);
  const cardsY = useTransform(smoothProgress, [0.1, 0.5], [70, -20]);

  const options = [
    {
      icon: PaintRoller,
      title: language === 'en' ? 'Painting' : 'Festés',
      description: language === 'en' ? 'From matte to high-gloss finishes with color matching precision' : 'Matt és magasfényű felületektől a színmegfelelési pontossággal',
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Laser Etching' : 'Lézeres Gravírozás',
      description: language === 'en' ? 'Precise, permanent markings with 0.01mm accuracy' : 'Precíz, tartós jelölések 0,01 mm-es pontossággal',
    },
    {
      icon: Tag,
      title: language === 'en' ? 'In-Mould Labelling' : 'Szerszámon Belüli Címkézés',
      description: language === 'en' ? 'Seamless label integration during the molding process' : 'Zökkenőmentes címkeintegráció a fröccsöntési folyamat során',
    },
    {
      icon: Printer,
      title: language === 'en' ? 'Tampo Printing' : 'Tamponnyomás',
      description: language === 'en' ? 'Multi-color printing on curved surfaces with exceptional detail' : 'Többszínű nyomtatás görbe felületeken kivételes részletességgel',
    },
    {
      icon: PenTool,
      title: language === 'en' ? 'In-Mould Decoration' : 'Szerszámon Belüli Dekoráció',
      description: language === 'en' ? 'Advanced surface graphics with durable, scratch-resistant finish' : 'Fejlett felületi grafikák tartós, karcálló kivitelben',
    },
    {
      icon: Stamp,
      title: language === 'en' ? 'Hot Stamping' : 'Melegpecsételés',
      description: language === 'en' ? 'Metallic and holographic finishes with precise application' : 'Fémes és holografikus felületek precíz alkalmazással',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Technical pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
        
        {/* Animated gradient shapes */}
        <motion.div 
          className="absolute -right-[10%] top-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-bl from-blue-100/20 via-indigo-50/10 to-transparent blur-[100px]"
          animate={{
            scale: [1, 1.07, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -left-[15%] bottom-[10%] w-[35%] h-[35%] rounded-full bg-gradient-to-tr from-amber-100/20 via-orange-50/10 to-transparent blur-[80px]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={headingRef}
          className="max-w-4xl mx-auto mb-16"
          style={{ y: headingY }}
        >
          {/* Section badge */}
          <motion.div 
            className="flex items-center gap-2 text-amber-600 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: headingInView ? 1 : 0, x: headingInView ? 0 : -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[2px] w-8 bg-amber-500"></div>
            <span className="uppercase tracking-wide text-sm font-medium">
              {language === 'en' ? 'Comprehensive Capabilities' : 'Átfogó Képességek'}
            </span>
          </motion.div>
          
          <motion.h3 
            className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {language === 'en' 
              ? "Diverse Surface Finishing Options at Flair–Plastic"
              : "Változatos felületkezelési lehetőségek a Flair-Plastic-nél"}
          </motion.h3>
          
          <motion.p
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {language === 'en'
              ? "Our state-of-the-art facilities allow us to provide an extensive range of surface treatments that can transform your products, adding both aesthetic appeal and functional benefits."
              : "Csúcstechnológiás létesítményeink lehetővé teszik, hogy kiterjedt felületkezelési kínálatot biztosítsunk, amelyek átalakítják termékeit, esztétikai vonzerőt és funkcionális előnyöket egyaránt nyújtva."}
          </motion.p>
        </motion.div>

        <motion.div
          ref={cardsRef}
          className="max-w-6xl mx-auto"
          style={{ y: cardsY }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {options.map((option, index) => (
              <motion.div 
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-amber-50/50 backdrop-blur-sm z-0" />
                
                {/* Card Content */}
                <div className="p-6 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                    <option.icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{option.title}</h4>
                  <p className="text-slate-600 text-sm">{option.description}</p>
                </div>
                
                {/* Hover shine effect */}
                <motion.div 
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    backgroundPosition: ["200% 50%", "-100% 50%"]
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{
                    backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%)",
                    backgroundSize: "200% 100%"
                  }}
                />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-amber-400/20 border-l-[40px] border-l-transparent transform rotate-90" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="mb-6 text-slate-700 max-w-2xl mx-auto">
              {language === 'en'
                ? "Can't find the specific surface finish you need? Our engineering team specializes in developing custom solutions for unique requirements."
                : "Nem találja a szükséges speciális felületkezelést? Mérnöki csapatunk egyedi megoldások kifejlesztésére specializálódott az egyedi igényekhez."}
            </p>
            <a 
              href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              {language === 'en' ? 'Contact Our Experts' : 'Lépjen kapcsolatba szakértőinkkel'}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurfaceFinishingOptions;
