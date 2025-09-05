import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, ArrowRight, Zap, Shield, Star } from 'lucide-react';
import styles from './FeaturedProducts.module.css';

interface Product {
  title: { en: string; hu: string };
  description: { en: string; hu: string };
  features: Array<{ en: string; hu: string }>;
  imagePath: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  inView: boolean;
  language: string;
}

const FeaturedProducts = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  // Products data with enhanced descriptions
  const products = [
    {
      title: { en: "Lawnmower Housings", hu: "Fűnyíró Burkolatok" },
      description: { 
        en: "Impact-resistant housings engineered to withstand outdoor conditions while maintaining optimal weight-to-durability ratio.", 
        hu: "Ütésálló burkolatok, amelyeket úgy terveztek, hogy ellenálljanak a kültéri körülményeknek, miközben optimális súly-tartósság arányt tartanak fenn." 
      },
      features: [
        { en: "UV-resistant materials", hu: "UV-álló anyagok" },
        { en: "Precision fit for internal components", hu: "Pontos illeszkedés a belső alkatrészekhez" },
        { en: "30% recycled content", hu: "30% újrahasznosított tartalom" }
      ],
      imagePath: "/resources/caseStudies/Picture3.png"
    },
    {
      title: { en: "Tool Storage Systems", hu: "Szerszámtároló Rendszerek" },
      description: { 
        en: "Modular storage solutions with customizable inserts designed for optimal organization and transportation of power tools.", 
        hu: "Moduláris tárolási megoldások testreszabható betétekkel, amelyeket az elektromos szerszámok optimális szervezése és szállítása érdekében terveztek." 
      },
      features: [
        { en: "Interlocking design", hu: "Összekapcsolható kialakítás" },
        { en: "High-impact resistance", hu: "Magas ütésállóság" },
        { en: "Ergonomic handles", hu: "Ergonomikus fogantyúk" }
      ],
      imagePath: "/resources/caseStudies/Picture2.png"
    },
    {
      title: { en: "Paint Spray System Components", hu: "Festékszóró Rendszer Alkatrészek" },
      description: { 
        en: "Precision-engineered components that ensure consistent paint flow and atomization for professional-grade finishes.", 
        hu: "Precíziós alkatrészek, amelyek következetes festékáramlást és porlasztást biztosítanak a professzionális minőségű felületkezeléshez." 
      },
      features: [
        { en: "Chemical resistance", hu: "Vegyszerállóság" },
        { en: "Micro-precision tolerances", hu: "Mikro-precíziós tűrések" },
        { en: "Optimized flow dynamics", hu: "Optimalizált áramlási dinamika" }
      ],
      imagePath: "/resources/caseStudies/Picture4.png"
    },
    {
      title: { en: "Sanding Tool Housings", hu: "Csiszolószerszám Burkolatok" },
      description: { 
        en: "Ergonomically designed housings that reduce vibration transfer to the user while providing optimal grip and control.", 
        hu: "Ergonomikusan tervezett burkolatok, amelyek csökkentik a felhasználóra ható rezgésátvitelt, miközben optimális fogást és irányítást biztosítanak." 
      },
      features: [
        { en: "Vibration-dampening properties", hu: "Rezgéscsillapító tulajdonságok" },
        { en: "Dust-resistant seals", hu: "Porálló tömítések" },
        { en: "Heat-dissipating design", hu: "Hőeloszlató kialakítás" }
      ],
      imagePath: "/resources/caseStudies/4.webp"
    }
  ];    return (
    <section id="products" className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-amber-50/20 overflow-hidden relative" ref={containerRef}>
      {/* Subtle floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-amber-100/20 to-orange-100/20 blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium tracking-wide mb-3">
            {language === 'hu' ? "Kiemelt termékek" : "Featured Products"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {language === 'hu' ? "Mérnöki precizitás" : "Engineering Excellence"}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {language === 'hu' 
              ? "Több mint egy évtizedes együttműködésünk eredményeként komplex műanyag alkatrészek széles skáláját fejlesztettük ki és gyártjuk, amelyek kulcsfontosságúak partnereink termékeinek teljesítményéhez."
              : "Over our decade-long partnership, we've developed and manufactured a diverse range of complex plastic components critical to our partner's product performance."
            }
          </p>
        </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} inView={isInView} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Interactive product card component with advanced futuristic UX
const ProductCard: React.FC<ProductCardProps> = ({ product, index, inView, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Enhanced mouse tracking with spring physics
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;
    
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${styles.cardContainer}`}
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >      {/* Subtle background glow */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-amber-300/10 via-orange-400/10 to-amber-300/10 rounded-3xl blur-2xl"
        animate={{
          scale: isHovered ? 1.05 : 1,
          opacity: isHovered ? 0.3 : 0.15,
        }}
        transition={{ duration: 0.4 }}
      />      {/* Main card container with enhanced background image design */}
      <motion.div
        className="relative h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-200 rounded-3xl overflow-hidden shadow-lg"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ 
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >        {/* Enhanced background image layer with maximum visibility */}
        <div className="absolute inset-0">
          <Image
            src={product.imagePath}
            alt={product.title[language === 'hu' ? 'hu' : 'en']}
            fill
            className="object-cover transition-all duration-700"
            style={{
              filter: isHovered 
                ? "brightness(0.8) contrast(1.2) saturate(1.3)" 
                : "brightness(0.7) contrast(1.1) saturate(1.1)",
              transform: isHovered ? "scale(1.08)" : "scale(1.02)",
            }}
          />
        </div>

        {/* Lighter gradient overlay for content readability while keeping image visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Subtle glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-white/5" />
        
        {/* Product image showcase with enhanced styling */}
        <div className="absolute top-6 right-6 w-36 h-36 z-10">
          <motion.div
            className="relative w-full h-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-white/20 shadow-2xl p-6"
            animate={{
              scale: isHovered ? 1.08 : 1,
              rotate: isHovered ? 3 : 0,
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-2 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl opacity-50" />
            
            <Image
              src={product.imagePath}
              alt={product.title[language === 'hu' ? 'hu' : 'en']}
              fill
              className="object-contain p-3 relative z-10"
            />
            
            {/* Floating highlight */}
            <motion.div
              className="absolute top-2 right-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg"
              animate={{
                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>        {/* Enhanced holographic overlay */}
        {isHovered && (
          <div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500 bg-gradient-radial from-amber-500/30 to-transparent" />
        )}
        
        {/* Enhanced tech indicators with better visibility */}
        <motion.div
          className="absolute top-4 left-4 flex space-x-2 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 + index * 0.15 }}
        >
          {[Shield, Zap, Star].map((Icon, iconIndex) => (
            <motion.div
              key={iconIndex}
              className="w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg"
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: "rgba(245, 158, 11, 0.9)",
              }}
              animate={{
                y: isHovered ? Math.sin(Date.now() * 0.002 + iconIndex * 2) * 2 : 0,
              }}
            >
              <Icon className="w-4 h-4 text-amber-600" />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced content section with better layering */}
        <div className="relative z-10 p-8 pt-12 h-full flex flex-col justify-between">
          {/* Content background glass effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-b-3xl backdrop-blur-sm" />
          
          {/* Title and description section */}
          <div className="relative z-10">
            <motion.h3 
              className="text-3xl font-bold text-white mb-4 tracking-tight pr-40 drop-shadow-lg"
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {product.title[language === 'hu' ? 'hu' : 'en']}
            </motion.h3>
            
            <motion.p 
              className="text-gray-200 mb-6 leading-relaxed pr-24 text-base drop-shadow-md"
              animate={{
                y: isHovered ? -1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {product.description[language === 'hu' ? 'hu' : 'en']}
            </motion.p>

            {/* Enhanced features list with better contrast */}
            <div className="space-y-3 mb-8">
              {product.features.map((feature, featIndex) => (
                <motion.div 
                  key={featIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.6 + (index * 0.1) + (featIndex * 0.15),
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex items-start group/feature"
                >
                  <motion.div 
                    className="mr-3 mt-1"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-xl border-2 border-white/20">
                      <Check className="w-3.5 h-3.5 text-white drop-shadow-sm" />
                    </div>
                  </motion.div>
                  <span className="text-sm text-gray-300 font-medium group-hover/feature:text-white transition-colors drop-shadow-sm">
                    {feature[language === 'hu' ? 'hu' : 'en']}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA button with glass effect */}
          <motion.div
            className="relative z-10 mt-auto"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.a 
              href="#"
              className="group/cta relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Enhanced shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/10 rounded-2xl" />
              
              <span className="relative z-10 mr-3 text-lg">
                {language === 'hu' ? "Tudjon meg többet" : "Learn more"}
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/cta:translate-x-2 relative z-10" />
            </motion.a>
          </motion.div>
        </div>        
        {/* Enhanced edge glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-amber-400/50 shadow-inner"
          animate={{
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered 
              ? "inset 0 0 30px rgba(245, 158, 11, 0.3), 0 0 30px rgba(245, 158, 11, 0.2)" 
              : "none",
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProducts;