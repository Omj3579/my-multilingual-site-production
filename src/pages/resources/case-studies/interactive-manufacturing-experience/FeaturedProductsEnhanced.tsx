import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, ArrowRight, Zap, Shield, Star } from 'lucide-react';

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
  ];
  
  return (
    <section id="products" className="py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50 overflow-hidden relative" ref={containerRef}>
      {/* Futuristic floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-200/20 to-orange-200/20 blur-2xl"
            initial={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
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
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-semibold tracking-wide mb-4 border border-amber-200"
            whileHover={{ scale: 1.05 }}
          >
            {language === 'hu' ? "Kiemelt termékek" : "Featured Products"}
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-amber-600 bg-clip-text text-transparent">
            {language === 'hu' ? "Mérnöki precizitás" : "Engineering Excellence"}
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed">
            {language === 'hu' 
              ? "Több mint egy évtizedes együttműködésünk eredményeként komplex műanyag alkatrészek széles skáláját fejlesztettük ki és gyártjuk, amelyek kulcsfontosságúak partnereink termékeinek teljesítményéhez."
              : "Over our decade-long partnership, we've developed and manufactured a diverse range of complex plastic components critical to our partner's product performance."
            }
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} inView={isInView} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced futuristic product card component
const ProductCard: React.FC<ProductCardProps> = ({ product, index, inView, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Enhanced 3D rotation physics
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 40 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 40 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -12;
    const rotateYValue = ((x - centerX) / centerX) * 12;
    
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    
    setMousePosition({ 
      x: (x / rect.width) * 100, 
      y: (y / rect.height) * 100 
    });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    setMousePosition({ x: 50, y: 50 });
  };

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
      rgba(255, 255, 255, 0.4) 0%, 
      rgba(255, 255, 255, 0.15) 30%, 
      transparent 60%)`,
  };

  const reflectionStyle = {
    background: `linear-gradient(${mousePosition.x + mousePosition.y}deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent)`,
    transform: `translate(${(mousePosition.x - 50) * 0.5}px, ${(mousePosition.y - 50) * 0.5}px)`,
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 1, 
        delay: index * 0.25, 
        type: "spring", 
        bounce: 0.2 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic background glow */}
      <motion.div
        className="absolute -inset-6 bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-red-500/30 rounded-3xl blur-2xl"
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.8 : 0.4,
          rotate: isHovered ? 2 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      {/* Main card with glass morphism */}
      <motion.div
        className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl overflow-hidden shadow-2xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ 
          boxShadow: "0 30px 60px rgba(245, 158, 11, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 40 }}
      >
        {/* Holographic overlay effect */}
        <div 
          className="absolute inset-0 opacity-60 pointer-events-none transition-opacity duration-300"
          style={gradientStyle}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-amber-400/70 rounded-full"
              initial={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: isHovered ? [0, -20, 0] : [0, -8, 0],
                opacity: isHovered ? [0.4, 1, 0.4] : [0.2, 0.5, 0.2],
                scale: isHovered ? [1, 1.8, 1] : [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        {/* Enhanced image section */}
        <div className="relative h-80 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent z-10" />
          
          {/* Main image with enhanced effects */}
          <motion.div
            className="relative h-full"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={product.imagePath}
              alt={product.title[language === 'hu' ? 'hu' : 'en']}
              fill
              className="object-cover transition-all duration-700"
              style={{
                filter: isHovered ? "brightness(1.15) contrast(1.2) saturate(1.3)" : "brightness(1) contrast(1) saturate(1)",
              }}
            />
          </motion.div>
          
          {/* Tech indicators with floating animation */}
          <motion.div
            className="absolute top-6 right-6 flex space-x-3 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 + index * 0.15 }}
          >
            {[Shield, Zap, Star].map((Icon, iconIndex) => (
              <motion.div
                key={iconIndex}
                className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg"
                whileHover={{ 
                  scale: 1.3, 
                  backgroundColor: "rgba(245, 158, 11, 0.4)",
                  borderColor: "rgba(245, 158, 11, 0.6)"
                }}
                animate={{
                  y: isHovered ? Math.sin(Date.now() * 0.003 + iconIndex * 1.2) * 8 : 0,
                  rotate: isHovered ? [0, 10, -10, 0] : 0,
                }}
                transition={{
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Icon className="w-5 h-5 text-white drop-shadow-lg" />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Dynamic reflection effect */}
          <motion.div
            className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-300"
            style={reflectionStyle}
            animate={{
              opacity: isHovered ? 0.7 : 0.3,
            }}
          />
        </div>
        
        {/* Content section with 3D layering */}
        <div className="p-8 relative">
          {/* Enhanced title */}
          <motion.h3 
            className="text-3xl font-bold text-gray-900 mb-5 tracking-tight"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {product.title[language === 'hu' ? 'hu' : 'en']}
          </motion.h3>
          
          {/* Description */}
          <motion.p 
            className="text-gray-600 mb-8 leading-relaxed text-lg"
            animate={{
              y: isHovered ? -1 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {product.description[language === 'hu' ? 'hu' : 'en']}
          </motion.p>
          
          {/* Features grid */}
          <div className="space-y-4 mb-8">
            {product.features.map((feature, featIndex) => (
              <motion.div 
                key={featIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + (index * 0.1) + (featIndex * 0.2),
                  type: "spring",
                  stiffness: 120
                }}
                className="flex items-center group/feature"
                whileHover={{ x: 4 }}
              >
                <motion.div 
                  className="mr-4"
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <Check className="w-4 h-4 text-white drop-shadow-sm" />
                  </div>
                </motion.div>
                <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors duration-200">
                  {feature[language === 'hu' ? 'hu' : 'en']}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced CTA button */}
          <motion.div
            animate={{
              y: isHovered ? -3 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.a 
              href="#"
              className="group/cta relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 25px 50px rgba(245, 158, 11, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              <span className="relative z-10 mr-3 text-lg">
                {language === 'hu' ? "Tudjon meg többet" : "Learn more"}
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/cta:translate-x-2 relative z-10" />
            </motion.a>
          </motion.div>
        </div>
        
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: "linear-gradient(45deg, transparent, rgba(245, 158, 11, 0.4), transparent)",
            padding: "2px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProducts;
