import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Star, ChevronLeft, ChevronRight, Play, Users } from 'lucide-react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonialsContent = {
    badge: {
      en: "Client Testimonials",
      hu: "Ügyfél Vélemények"
    },
    title: {
      en: "Voices of Success",
      hu: "A Siker Hangjai"
    },
    subtitle: {
      en: "Hear from our partners about the impact of our collaboration",
      hu: "Hallgassa meg partnereink véleményét együttműködésünk hatásáról"
    },
    testimonials: [
      {
        id: 1,
        name: "Dr. Michael Schmidt",
        position: { en: "Chief Technology Officer", hu: "Műszaki Igazgató" },
        company: "EuroTools Manufacturing",
        content: {
          en: "Flair Plastic Ltd. has been an exceptional partner over the past decade. Their commitment to quality and innovation has been instrumental in our success in the European market. The precision and reliability of their components have exceeded our expectations consistently.",
          hu: "A Flair Plastic Kft. kivételes partner volt az elmúlt évtizedben. Minőség és innováció iránti elkötelezettségük kulcsfontosságú volt sikerünkben az európai piacon. Alkatrészeik pontossága és megbízhatósága következetesen felülmúlta elvárásainkat."
        },
        rating: 5,
        image: "/images/testimonials/michael-schmidt.jpg",
        video: "/videos/testimonial-schmidt.mp4"
      },
      {
        id: 2,
        name: "Sarah Williams",
        position: { en: "Head of Procurement", hu: "Beszerzési Vezető" },
        company: "GreenTech Solutions",
        content: {
          en: "Working with Flair Plastic has transformed our supply chain efficiency. Their ability to deliver high-quality components on time, every time, has allowed us to focus on innovation and market expansion. Their sustainability initiatives align perfectly with our corporate values.",
          hu: "A Flair Plastic-kal való együttműködés átalakította ellátási láncunk hatékonyságát. Képességük arra, hogy mindig időben szállítsanak kiváló minőségű alkatrészeket, lehetővé tette számunkra, hogy az innovációra és piaci terjeszkedésre koncentráljunk. Fenntarthatósági kezdeményezéseik tökéletesen összhangban állnak vállalati értékeinkkel."
        },
        rating: 5,
        image: "/images/testimonials/sarah-williams.jpg",
        video: "/videos/testimonial-williams.mp4"
      },
      {
        id: 3,
        name: "Antonio Rodriguez",
        position: { en: "Manufacturing Director", hu: "Gyártási Igazgató" },
        company: "Mediterranean Tools Co.",
        content: {
          en: "The technical expertise and customer service provided by Flair Plastic is unmatched. They understand our needs and consistently deliver solutions that improve our product performance. Their collaborative approach has made them feel like an extension of our own team.",
          hu: "A Flair Plastic által nyújtott műszaki szakértelem és ügyfélszolgálat páratlan. Megértik igényeinket és következetesen olyan megoldásokat szállítanak, amelyek javítják termékeink teljesítményét. Együttműködő megközelítésük miatt úgy érezzük, mintha saját csapatunk kiterjesztése lennének."
        },
        rating: 5,
        image: "/images/testimonials/antonio-rodriguez.jpg",
        video: "/videos/testimonial-rodriguez.mp4"
      }
    ]
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => 
        (prev + 1) % testimonialsContent.testimonials.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialsContent.testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      (prev + 1) % testimonialsContent.testimonials.length
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonialsContent.testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            {testimonialsContent.badge[language]}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {testimonialsContent.title[language]}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {testimonialsContent.subtitle[language]}
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              {/* Left: Person Info */}
              <div className="lg:col-span-1 text-center lg:text-left">
                <motion.div 
                  className="relative inline-block mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-32 h-32 mx-auto lg:mx-0">
                    <Image
                      src={testimonialsContent.testimonials[activeTestimonial].image}
                      alt={testimonialsContent.testimonials[activeTestimonial].name}
                      fill
                      className="object-cover rounded-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full" />
                  </div>
                  
                  {/* Video play button overlay */}
                  <button 
                    className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                    data-hover="true"
                  >
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </button>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {testimonialsContent.testimonials[activeTestimonial].name}
                </h3>
                
                <p className="text-blue-600 font-medium mb-1">
                  {testimonialsContent.testimonials[activeTestimonial].position[language]}
                </p>
                
                <p className="text-gray-600 text-sm mb-4">
                  {testimonialsContent.testimonials[activeTestimonial].company}
                </p>

                {/* Star Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-amber-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                    data-hover="true"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isAutoPlaying 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    data-hover="true"
                  >
                    {isAutoPlaying 
                      ? (language === 'hu' ? 'Automatikus' : 'Auto') 
                      : (language === 'hu' ? 'Manuális' : 'Manual')
                    }
                  </button>
                  
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                    data-hover="true"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right: Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonialsContent.testimonials[activeTestimonial].content[language]}"
                    </blockquote>
                  </div>

                  {/* Background decoration */}
                  <div className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <motion.div
            className="flex justify-center gap-3 mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {testimonialsContent.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                data-hover="true"
              />
            ))}
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "98%", label: { en: "Client Satisfaction", hu: "Ügyfél-elégedettség" } },
              { value: "10+", label: { en: "Years Partnership", hu: "Év Partnerség" } },
              { value: "50+", label: { en: "Projects Completed", hu: "Befejezett Projekt" } }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label[language]}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;