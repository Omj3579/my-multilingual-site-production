import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, ArrowRight, Zap, Shield, Star, Award } from 'lucide-react';

interface Product {
  title: { en: string; hu: string };
  description: { en: string; hu: string };
  features: Array<{ en: string; hu: string }>;
  imagePath: string;
  color: string;
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
  
  // Products data with enhanced descriptions and color themes
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
      imagePath: "/resources/caseStudies/Picture3.png",
      color: "orange"
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
      imagePath: "/resources/caseStudies/Picture2.png",
      color: "teal"
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
      imagePath: "/resources/caseStudies/Picture4.png",
      color: "blue"
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
      imagePath: "/resources/caseStudies/4.webp",
      color: "red"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 overflow-hidden relative" ref={containerRef}>
      {/* Clean background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
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
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide mb-4">
            {language === 'hu' ? "KIEMELT TERMÉKEK" : "FEATURED PRODUCTS"}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            {language === 'hu' ? "Mérnöki Excelencia" : "Engineering Excellence"}
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

// Clean, modern product card inspired by the designs you showed
const ProductCard: React.FC<ProductCardProps> = ({ product, index, inView, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Spring physics for smooth 3D rotation
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
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

  // Color scheme based on product type
  const getColorScheme = (color: string) => {
    const schemes = {
      orange: {
        gradient: "from-orange-50 via-white to-amber-50",
        accent: "bg-gradient-to-r from-orange-400 to-amber-500",
        button: "from-orange-500 to-amber-600",
        border: "border-orange-200",
        glow: "shadow-orange-200/50"
      },
      teal: {
        gradient: "from-teal-50 via-white to-cyan-50",
        accent: "bg-gradient-to-r from-teal-400 to-cyan-500",
        button: "from-teal-500 to-cyan-600",
        border: "border-teal-200",
        glow: "shadow-teal-200/50"
      },
      blue: {
        gradient: "from-blue-50 via-white to-indigo-50",
        accent: "bg-gradient-to-r from-blue-400 to-indigo-500",
        button: "from-blue-500 to-indigo-600",
        border: "border-blue-200",
        glow: "shadow-blue-200/50"
      },
      red: {
        gradient: "from-red-50 via-white to-pink-50",
        accent: "bg-gradient-to-r from-red-400 to-pink-500",
        button: "from-red-500 to-pink-600",
        border: "border-red-200",
        glow: "shadow-red-200/50"
      }
    };
    return schemes[color as keyof typeof schemes] || schemes.blue;
  };

  const colorScheme = getColorScheme(product.color);

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${colorScheme.accent} rounded-3xl opacity-0 blur-xl ${colorScheme.glow}`}
        animate={{
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main card */}
      <motion.div
        className={`relative h-[520px] bg-gradient-to-br ${colorScheme.gradient} ${colorScheme.border} border rounded-3xl overflow-hidden shadow-xl`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ 
          boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {/* Header section with icon */}
        <div className="absolute top-8 left-8 z-20">
          <motion.div
            className={`w-16 h-16 ${colorScheme.accent} rounded-2xl shadow-lg flex items-center justify-center`}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Award className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Large product image - crystal clear and prominent */}
        <div className="absolute top-4 right-4 w-80 h-72 z-10">
          <motion.div
            className="relative w-full h-full"
            animate={{
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -8 : 0,
              rotate: isHovered ? 2 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={product.imagePath}
              alt={product.title[language === 'hu' ? 'hu' : 'en']}
              fill
              className="object-contain filter drop-shadow-2xl"
              style={{
                filter: "brightness(1) contrast(1.05) saturate(1.1)",
              }}
              priority
            />
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-6 right-6 w-4 h-4 bg-white rounded-full shadow-lg z-20 opacity-60" />
        <div className="absolute top-12 right-12 w-2 h-2 bg-gray-300 rounded-full shadow-lg z-20 opacity-40" />

        {/* Content section */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
          {/* Title */}
          <motion.h3 
            className="text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-tight max-w-xs"
            animate={{
              y: isHovered ? -3 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {product.title[language === 'hu' ? 'hu' : 'en']}
          </motion.h3>
          
          {/* Description */}
          <motion.p 
            className="text-gray-600 mb-6 leading-relaxed text-base max-w-sm"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {product.description[language === 'hu' ? 'hu' : 'en']}
          </motion.p>

          {/* Features list */}
          <div className="space-y-3 mb-8">
            {product.features.map((feature, featIndex) => (
              <motion.div 
                key={featIndex}
                initial={{ opacity: 0, x: -15 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + (index * 0.1) + (featIndex * 0.1),
                  type: "spring",
                  stiffness: 120
                }}
                className="flex items-center group/feature"
              >
                <motion.div 
                  className="mr-3"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-6 h-6 rounded-full ${colorScheme.accent} flex items-center justify-center shadow-lg`}>
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                </motion.div>
                <span className="text-sm text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors">
                  {feature[language === 'hu' ? 'hu' : 'en']}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            animate={{
              y: isHovered ? -3 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.a 
              href="#"
              className={`group/cta relative inline-flex items-center px-8 py-4 bg-gradient-to-r ${colorScheme.button} text-white font-bold rounded-2xl overflow-hidden shadow-xl border border-white/20`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative z-10 mr-3 text-lg">
                {language === 'hu' ? "Tudjon meg többet" : "Learn More"}
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/cta:translate-x-2 relative z-10" />
            </motion.a>
          </motion.div>
        </div>

        {/* Subtle border glow on hover */}
        <motion.div
          className={`absolute inset-0 rounded-3xl border-2 ${colorScheme.border}`}
          animate={{
            opacity: isHovered ? 1 : 0.5,
            borderColor: isHovered ? "rgba(59, 130, 246, 0.5)" : "rgba(229, 231, 235, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProducts;
