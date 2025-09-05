import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Package, 
  Star, 
  ShoppingCart, 
  Eye, 
  Heart,
  Share2,
  Download,
  Play,
  Pause,
  Grid3X3,
  List
} from 'lucide-react';
import Image from 'next/image';

const ProductShowcase = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filterCategory, setFilterCategory] = useState('all');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favoriteProducts, setFavoriteProducts] = useState(new Set());

  // Advanced scroll transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);

  const showcaseContent = {
    badge: {
      en: "Product Innovation Gallery",
      hu: "Termékinnovációs Galéria"
    },
    title: {
      en: "Precision Crafted<br/><span class='text-gradient'>Household Excellence</span>",
      hu: "Precízen Kidolgozott<br/><span class='text-gradient'>Háztartási Kiválóság</span>"
    },
    subtitle: {
      en: "Explore our comprehensive collection of innovative household products, each designed with meticulous attention to detail and manufactured using cutting-edge injection molding technology.",
      hu: "Fedezze fel innovatív háztartási termékeink átfogó kollekcióját, amelyek mindegyike aprólékos figyelemmel a részletekre és élvonalbeli fröccsöntési technológiával készült."
    },
    filters: [
      { id: 'all', label: { en: 'All Products', hu: 'Minden Termék' }, count: 24 },
      { id: 'kitchen', label: { en: 'Kitchen', hu: 'Konyha' }, count: 8 },
      { id: 'bathroom', label: { en: 'Bathroom', hu: 'Fürdőszoba' }, count: 6 },
      { id: 'storage', label: { en: 'Storage', hu: 'Tárolás' }, count: 5 },
      { id: 'smart', label: { en: 'Smart Home', hu: 'Okos Otthon' }, count: 5 }
    ],
    products: [
      {
        id: 1,
        name: { en: "Smart Food Container Set", hu: "Okos Élelmiszer Tároló Szett" },
        category: "kitchen",
        price: "€45.99",
        rating: 4.8,
        reviews: 324,
        image: "/images/household/smart-container-main.jpg",
        gallery: [
          "/images/household/smart-container-1.jpg",
          "/images/household/smart-container-2.jpg",
          "/images/household/smart-container-3.jpg",
          "/images/household/smart-container-4.jpg"
        ],
        video: "/videos/smart-container-demo.mp4",
        features: [
          { en: "Airtight seal technology", hu: "Légmentes zárási technológia" },
          { en: "BPA-free materials", hu: "BPA-mentes anyagok" },
          { en: "Stackable design", hu: "Rakható dizájn" },
          { en: "Dishwasher safe", hu: "Mosogatógép-biztos" }
        ],
        description: {
          en: "Revolutionary food storage system with advanced airtight technology to keep your food fresh for longer periods.",
          hu: "Forradalmi élelmiszer-tárolási rendszer fejlett légmentes technológiával, hogy élelmiszereit hosszabb ideig frissen tartsa."
        },
        specs: {
          material: "Premium HDPE",
          capacity: "1.2L - 3.5L",
          temperature: "-20°C to +100°C",
          certification: "FDA Approved"
        },
        sustainability: {
          recycled: 30,
          recyclable: 100,
          carbonNeutral: true
        }
      },
      {
        id: 2,
        name: { en: "Modular Bathroom Organizer", hu: "Moduláris Fürdőszoba Rendszerező" },
        category: "bathroom",
        price: "€32.99",
        rating: 4.9,
        reviews: 198,
        image: "/images/household/bathroom-organizer-main.jpg",
        gallery: [
          "/images/household/bathroom-organizer-1.jpg",
          "/images/household/bathroom-organizer-2.jpg",
          "/images/household/bathroom-organizer-3.jpg"
        ],
        video: "/videos/bathroom-organizer-demo.mp4",
        features: [
          { en: "Modular configuration", hu: "Moduláris konfiguráció" },
          { en: "Water-resistant coating", hu: "Vízálló bevonat" },
          { en: "Easy installation", hu: "Könnyű telepítés" },
          { en: "Space optimization", hu: "Hely optimalizálás" }
        ],
        description: {
          en: "Innovative modular system that adapts to any bathroom space while maximizing storage efficiency.",
          hu: "Innovatív moduláris rendszer, amely alkalmazkodik bármilyen fürdőszoba térhez, miközben maximalizálja a tárolási hatékonyságot."
        },
        specs: {
          material: "ABS Composite",
          dimensions: "Customizable",
          mounting: "Wall/Suction",
          weight: "2.3kg"
        },
        sustainability: {
          recycled: 25,
          recyclable: 95,
          carbonNeutral: false
        }
      },
      {
        id: 3,
        name: { en: "Smart Laundry System", hu: "Okos Mosási Rendszer" },
        category: "storage",
        price: "€78.99",
        rating: 4.7,
        reviews: 156,
        image: "/images/household/laundry-system-main.jpg",
        gallery: [
          "/images/household/laundry-system-1.jpg",
          "/images/household/laundry-system-2.jpg",
          "/images/household/laundry-system-3.jpg",
          "/images/household/laundry-system-4.jpg",
          "/images/household/laundry-system-5.jpg"
        ],
        video: "/videos/laundry-system-demo.mp4",
        features: [
          { en: "IoT integration", hu: "IoT integráció" },
          { en: "Load balancing", hu: "Terhelés kiegyensúlyozás" },
          { en: "Ventilation system", hu: "Szellőzőrendszer" },
          { en: "Mobile app control", hu: "Mobil app vezérlés" }
        ],
        description: {
          en: "Next-generation laundry management system with smart features for modern households.",
          hu: "Következő generációs mosáskezelő rendszer okos funkciókkal modern háztartások számára."
        },
        specs: {
          material: "Reinforced PP",
          capacity: "45L",
          connectivity: "WiFi, Bluetooth",
          power: "Battery/USB-C"
        },
        sustainability: {
          recycled: 40,
          recyclable: 100,
          carbonNeutral: true
        }
      }
      // Add more products as needed...
    ]
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseContent.products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, showcaseContent.products.length]);

  const filteredProducts = filterCategory === 'all' 
    ? showcaseContent.products 
    : showcaseContent.products.filter(product => product.category === filterCategory);

  const toggleFavorite = (productId) => {
    setFavoriteProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,theme(colors.blue.200),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,theme(colors.purple.200),transparent_50%)]"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          style={{ rotateX, scale }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6 border border-purple-200/50"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.2)' }}
          >
            <Package className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">
              {showcaseContent.badge[language]}
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            dangerouslySetInnerHTML={{ __html: showcaseContent.title[language] }}
          />

          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {showcaseContent.subtitle[language]}
          </motion.p>

          <style jsx>{`
            .text-gradient {
              background: linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4);
              background-size: 200% 200%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: gradient-flow 4s ease-in-out infinite;
            }
          `}</style>
        </motion.div>

        {/* Controls and Filters */}
        <motion.div 
          className="flex flex-wrap items-center justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Filter Categories */}
          <div className="flex flex-wrap gap-3">
            {showcaseContent.filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setFilterCategory(filter.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  filterCategory === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                {filter.label[language]} ({filter.count})
              </motion.button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            {/* Auto-play toggle */}
            <motion.button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                isAutoPlay 
                  ? 'bg-green-100 text-green-600 border border-green-200' 
                  : 'bg-gray-100 text-gray-600 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              data-hover="true"
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </motion.button>

            {/* View mode toggle */}
            <div className="flex bg-white rounded-full border border-gray-200 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-600'
                }`}
                data-hover="true"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-600'
                }`}
                data-hover="true"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Product Grid/List */}
        <motion.div 
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProduct(product)}
                data-hover="true"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name[language]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <motion.button 
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle quick view
                      }}
                      data-hover="true"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button 
                      className={`w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors ${
                        favoriteProducts.has(product.id) ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      data-hover="true"
                    >
                      <Heart className={`w-5 h-5 ${favoriteProducts.has(product.id) ? 'fill-current' : ''}`} />
                    </motion.button>
                    
                    <motion.button 
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle share
                      }}
                      data-hover="true"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Sustainability badge */}
                  {product.sustainability.carbonNeutral && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {language === 'hu' ? 'Karbon Semleges' : 'Carbon Neutral'}
                    </div>
                  )}

                  {/* Category tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 capitalize">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {product.name[language]}
                    </h3>
                    <div className="text-2xl font-bold text-purple-600">
                      {product.price}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description[language]}
                  </p>

                  {/* Rating and Reviews */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {product.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({product.reviews} {language === 'hu' ? 'értékelés' : 'reviews'})
                    </span>
                  </div>

                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="line-clamp-1">{feature[language]}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button 
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => e.stopPropagation()}
                      data-hover="true"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {language === 'hu' ? 'Kosárba' : 'Add to Cart'}
                    </motion.button>
                    
                    <motion.button 
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      data-hover="true"
                    >
                      <Download className="w-4 h-4 text-gray-600" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover border effect */}
                <motion.div 
                  className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-3xl transition-colors duration-300 pointer-events-none"
                  whileHover={{ 
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)' 
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProducts.length > 6 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              {language === 'hu' ? 'További Termékek Betöltése' : 'Load More Products'}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content will be added here */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{selectedProduct.name[language]}</h2>
                <p>{selectedProduct.description[language]}</p>
                {/* Add more detailed product information */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;