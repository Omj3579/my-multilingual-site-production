import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ArrowRightCircle, CheckCircle2, Clock } from 'lucide-react';

const CommitmentCallout = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityLayer1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7]);
  const opacityLayer2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const staggerDelay = 0.1;

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-neutral-100 to-amber-50/30"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(245, 158, 11, 0.03)" strokeWidth="0.5"></path>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Decorative floating elements */}
        <motion.div 
          className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-amber-100/10 to-amber-200/20 blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-50/10 to-amber-100/20 blur-[100px]"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0], 
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 z-10">
        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-md shadow-xl border border-white/20 overflow-hidden"
        >
          {/* Card top pattern */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          
          {/* Header section */}
          <div className="pt-16 pb-8 px-6 md:px-16">
            {/* Pre-heading tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>{language === 'en' ? 'Our Commitment' : 'Elkötelezettségünk'}</span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-700 bg-clip-text text-transparent leading-tight"
            >
              <span className="relative">
                {language === 'en' ? 'A Partner' : 'Egy Partner'}
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: isInView ? "100%" : 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="absolute -bottom-2 left-0 h-1 bg-amber-400 rounded-full"
                />
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-gray-700">
                {language === 'en' ? 'for Every Phase of Your Project' : 'projektje minden fázisában'}
              </span>
            </motion.h2>
          </div>
          
          {/* Content grid section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 px-6 md:px-16 pb-16">
            {/* Left column */}
            <div className="lg:col-span-5 space-y-8">
              {/* First paragraph block */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-100/20 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <ArrowRightCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-3">
                      {language === 'en' ? 'Dedicated Partnership' : 'Elkötelezett Partnerség'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {language === 'en' 
                        ? "As your dedicated partner, Flair-Plastic actively fosters and sustains strong relationships with each of our clients. We are committed to being an integral component of your success."
                        : "Mint az Ön elkötelezett partnere, a Flair-Plastic aktívan építi és fenntartja az erős kapcsolatokat minden ügyfelünkkel. Elkötelezettek vagyunk abban, hogy sikerének szerves részévé váljunk."}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Second paragraph block */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-100/20 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-3">
                      {language === 'en' ? 'Early Engagement' : 'Korai Együttműködés'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {language === 'en'
                        ? "To deliver the greatest value, it is advantageous to engage Flair-Plastic at the earliest stages of your product development—preferably during the design phase. This early collaboration allows us to identify potential challenges and opportunities ahead of time."
                        : "A legnagyobb érték nyújtása érdekében előnyös a Flair-Plastic bevonása a termékfejlesztés legkorábbi szakaszaiban - lehetőleg már a tervezési fázisban. Ez a korai együttműködés lehetővé teszi számunkra, hogy időben azonosítsuk a potenciális kihívásokat és lehetőségeket."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right column - image feature */}
            <div className="lg:col-span-7 relative">
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ y: imageTranslateY }}
                className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]"
              >
                {/* Image overlay gradients */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-black/30 z-10" 
                  style={{ opacity: opacityLayer1 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" 
                  style={{ opacity: opacityLayer2 }}
                />
                
                {/* Main image */}
                <img
                  src="https://flair-plastic.hu/wp-content/uploads/2024/05/Image-of-a-busy-injection-molding-tools-warehouse-in-a-manufacturing-company.-Workers-are-engaged-i.png.webp"
                  alt={language === 'en' ? "Manufacturing facility" : "Gyártóüzem"}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                
                {/* Corner decorations */}
                {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos, i) => (
                  <motion.div 
                    key={i}
                    className={`absolute w-16 h-16 pointer-events-none ${pos}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isInView ? 0.8 : 0, scale: isInView ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + (i * 0.1) }}
                  >
                    <div className={`absolute ${
                      i === 0 ? "top-0 left-0 border-t-2 border-l-2" : 
                      i === 1 ? "top-0 right-0 border-t-2 border-r-2" : 
                      i === 2 ? "bottom-0 left-0 border-b-2 border-l-2" : 
                      "bottom-0 right-0 border-b-2 border-r-2"
                    } w-full h-full rounded-md border-white/70`} />
                  </motion.div>
                ))}
                
                {/* Image content overlay - floating card */}
                <div className="absolute bottom-8 right-8 left-8 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg"
                  >
                    <h4 className="text-xl font-semibold text-amber-700 mb-3">
                      {language === 'en' ? 'Precision and Care' : 'Precizitás és Gondosság'}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {language === 'en'
                        ? "With a track record of successfully manufacturing millions of products, each item we produce at Flair-Plastic is crafted with utmost care and precision."
                        : "Több millió termék sikeres gyártási előzményével, a Flair-Plastic-nél minden egyes termékünket a legnagyobb gondossággal és precizitással készítjük."}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom section with key benefits */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-6 md:px-16">
            <div className="mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-12"
              >
                {language === 'en' 
                  ? 'Why Partner with Flair-Plastic?' 
                  : 'Miért érdemes együttműködni a Flair-Plastic-kal?'}
              </motion.h3>
              
              {/* Benefits grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Benefits items */}
                {(language === 'en' ? [
                  {
                    title: "Global Innovation Network",
                    description: "Strategic locations and innovation centres spanning the globe to serve your needs wherever you are."
                  },
                  {
                    title: "Efficient & Sustainable Solutions",
                    description: "We guide you towards efficient choices in material selection, product functionality, manufacturing, and more."
                  },
                  {
                    title: "Advanced Technologies",
                    description: "Our dedication to improvement ensures you benefit from the most advanced technologies in our industry."
                  }
                ] : [
                  {
                    title: "Globális Innovációs Hálózat",
                    description: "Stratégiai helyszínek és innovációs központok világszerte, hogy kiszolgáljuk igényeit bárhol is legyen."
                  },
                  {
                    title: "Hatékony és Fenntartható Megoldások",
                    description: "Hatékony választásokhoz vezetjük Önt az anyagválasztás, termékfunkcionalitás, gyártás és egyebek terén."
                  },
                  {
                    title: "Fejlett Technológiák",
                    description: "A fejlesztés iránti elkötelezettségünk biztosítja, hogy a legfejlettebb technológiákból profitáljon."
                  }
                ]).map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.7, delay: 1.1 + (i * staggerDelay) }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-12 text-center"
              >
                <a 
                  href={language === 'en' ? "/contact" : "/kapcsolat"} 
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  {language === 'en' ? 'Discuss Your Project' : 'Beszéljünk projektjéről'}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Triangle pointing to next section */}
        <motion.div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <div className="w-16 h-16 rotate-45 bg-white shadow-lg transform origin-center" />
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentCallout;
