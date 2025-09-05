import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, Heart, Clock, MapPin, Zap, Send, ChevronRight, Users, Coffee, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CareersPage() {
  const { language, translations } = useLanguage();
  
  // Translate function for convenience
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };
  
  // Current job openings data
 const jobOpenings = []; // Empty array indicates no current openings

  // Benefits data
  const benefits = [
    {
      icon: <Heart className="h-7 w-7 text-[#fa9b6b]" />,
      title: {
        en: 'Comprehensive Healthcare',
        hu: 'Átfogó Egészségügyi Csomag'
      },
      description: {
        en: 'Full medical, dental, and vision coverage for you and your family.',
        hu: 'Teljes orvosi, fogászati és szemészeti fedezet Önnek és családjának.'
      }
    },
    {
      icon: <Clock className="h-7 w-7 text-[#fa9b6b]" />,
      title: {
        en: 'Flexible Hours',
        hu: 'Rugalmas Munkaidő'
      },
      description: {
        en: 'Work-life balance matters. Choose hours that work for your lifestyle.',
        hu: 'A munka és a magánélet egyensúlya fontos. Válasszon az életmódjához illő munkaórákat.'
      }
    },
    {
      icon: <Award className="h-7 w-7 text-[#fa9b6b]" />,
      title: {
        en: 'Professional Development',
        hu: 'Szakmai Fejlődés'
      },
      description: {
        en: 'Continuous learning with training programs and education stipends.',
        hu: 'Folyamatos tanulás képzési programokkal és oktatási támogatással.'
      }
    },
    {
      icon: <Coffee className="h-7 w-7 text-[#fa9b6b]" />,
      title: {
        en: 'Modern Office Space',
        hu: 'Modern Irodai Tér'
      },
      description: {
        en: 'Ergonomic workspaces, cafeteria, and relaxation zones.',
        hu: 'Ergonomikus munkahelyek, étkezde és relaxációs zónák.'
      }
    },
    {
      icon: <Users className="h-7 w-7 text-[#fa9b6b]" />,
      title: {
        en: 'Team Building',
        hu: 'Csapatépítés'
      },
      description: {
        en: 'Regular social events and activities to strengthen team bonds.',
        hu: 'Rendszeres társasági események és tevékenységek a csapatszellem erősítésére.'
      }
    },
    {
      icon: <Zap className="h-7 w-7 text-[#fa9b6b]" />,
      title: {
        en: 'Performance Bonuses',
        hu: 'Teljesítménybónuszok'
      },
      description: {
        en: 'Recognize and reward outstanding contributions to our success.',
        hu: 'Elismerés és jutalom a sikerünkhöz való kiemelkedő hozzájárulásért.'
      }
    }
  ];
  
  // Values data
  const values = [
    {
      title: {
        en: 'Innovation',
        hu: 'Innováció'
      },
      description: {
        en: 'We constantly push boundaries to discover better solutions.',
        hu: 'Folyamatosan tágítjuk a határokat, hogy jobb megoldásokat találjunk.'
      }
    },
    {
      title: {
        en: 'Sustainability',
        hu: 'Fenntarthatóság'
      },
      description: {
        en: 'Environmental responsibility is at the heart of everything we do.',
        hu: 'A környezeti felelősség minden tevékenységünk középpontjában áll.'
      }
    },
    {
      title: {
        en: 'Quality',
        hu: 'Minőség'
      },
      description: {
        en: 'We never compromise on the excellence of our products.',
        hu: 'Soha nem alkuszunk meg termékeink kiválóságával kapcsolatban.'
      }
    },
    {
      title: {
        en: 'Teamwork',
        hu: 'Csapatmunka'
      },
      description: {
        en: 'Collaboration drives our success and fosters creativity.',
        hu: 'Az együttműködés hajtja sikerünket és táplálja kreativitásunkat.'
      }
    }
  ];
  
  // Testimonial data
  const testimonials = [
    {
      quote: {
        en: "Working here has given me the opportunity to develop my skills in a supportive environment while contributing to meaningful projects.",
        hu: "Az itt végzett munka lehetőséget adott számomra, hogy támogató környezetben fejlesszem készségeimet, miközben értelmes projektekben veszek részt."
      },
      name: {
        en: "Anna Kovács",
        hu: "Kovács Anna"
      },
      position: {
        en: "Production Lead, 4 years",
        hu: "Termelési vezető, 4 év"
      },
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: {
        en: "The company truly cares about innovation and sustainability, which aligns perfectly with my personal values.",
        hu: "A vállalat valóban törődik az innovációval és a fenntarthatósággal, ami tökéletesen összhangban van személyes értékeimmel."
      },
      name: {
        en: "Máté Szabó",
        hu: "Szabó Máté"
      },
      position: {
        en: "Engineering Specialist, 2 years",
        hu: "Mérnöki specialista, 2 év"
      },
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: {
        en: "The professional growth opportunities here are unmatched. I started as an intern and now lead a team of specialists.",
        hu: "A szakmai fejlődési lehetőségek itt páratlanok. Gyakornokként kezdtem, és most egy specialista csoportot vezetek."
      },
      name: {
        en: "Eszter Nagy",
        hu: "Nagy Eszter"
      },
      position: {
        en: "Quality Manager, 5 years",
        hu: "Minőségügyi vezető, 5 év"
      },
      image: "/images/testimonial-3.jpg"
    }
  ];
  
  // Animation controls for scroll animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [jobsRef, jobsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // FAQs
  const faqs = [
    {
      question: {
        en: "What is the application process like?",
        hu: "Milyen a jelentkezési folyamat?"
      },
      answer: {
        en: "Our application process typically involves submitting your CV and cover letter, followed by an initial screening call, a technical assessment relevant to your role, and finally an interview with the hiring team.",
        hu: "Jelentkezési folyamatunk általában az önéletrajz és motivációs levél beküldéséből áll, amelyet egy kezdeti szűrő hívás, egy, a szerepköréhez kapcsolódó technikai értékelés, végül pedig egy interjú követ a felvételi csapattal."
      }
    },
    {
      question: {
        en: "Do you offer relocation assistance?",
        hu: "Kínálnak költözési támogatást?"
      },
      answer: {
        en: "Yes, for certain positions we offer relocation packages to help new team members move to Hungary. Details are discussed during the final interview stage.",
        hu: "Igen, bizonyos pozíciókhoz költözési csomagokat kínálunk, hogy segítsük az új csapattagokat a Magyarországra való költözésben. A részleteket a végső interjú szakaszában tárgyaljuk meg."
      }
    },
    {
      question: {
        en: "Is remote work available?",
        hu: "Elérhető a távmunka?"
      },
      answer: {
        en: "We have a flexible hybrid work policy for most positions. Some roles are fully remote, while others require partial on-site presence. Each job listing specifies the work arrangement.",
        hu: "A legtöbb pozícióhoz rugalmas hibrid munkavégzési szabályzatunk van. Egyes szerepkörök teljesen távmunkában végezhetők, míg mások részleges helyszíni jelenlétet igényelnek. Minden álláshirdetés meghatározza a munkavégzési feltételeket."
      }
    },
    {
      question: {
        en: "What career development opportunities do you offer?",
        hu: "Milyen karrierfejlesztési lehetőségeket kínálnak?"
      },
      answer: {
        en: "We invest heavily in our team members' growth through mentorship programs, educational stipends, internal workshops, conference attendance, and clear career advancement paths.",
        hu: "Erősen befektetünk csapattagjaink fejlődésébe mentori programok, oktatási támogatások, belső műhelyfoglalkozások, konferencia-részvétel és világos karrierépítési utak révén."
      }
    }
  ];

  const [cultureDialogOpen, setCultureDialogOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{t('careers.meta.title')} | Flair Plastic</title>
        <meta name="description" content={t('careers.meta.description')} />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers-hero-bg.jpg"
            alt="Careers at Flair Plastic"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-3xl text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {t('careers.hero.title') || 'Join Our Team'}
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-100">
              {t('careers.hero.subtitle') || "Be part of a company that's shaping the future of sustainable manufacturing with innovative plastic solutions."}
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="bg-[#fa9b6b] hover:bg-[#e86e40] text-white border-none"
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('careers.hero.browseButton') || 'Browse Open Positions'}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent hover:bg-white/10 text-white border-white"
                onClick={() => setCultureDialogOpen(true)}
              >
                {t('careers.hero.cultureButton') || 'Our Culture'}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Company Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={valuesRef}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('careers.values.title') || 'Our Values'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('careers.values.subtitle') || 'The principles that guide our work and define our culture.'}
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {value.title[language as keyof typeof value.title]}
                </h3>
                <p className="text-gray-600">
                  {value.description[language as keyof typeof value.description]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={benefitsRef}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('careers.benefits.title') || 'Why Work With Us'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('careers.benefits.subtitle') || 'We offer competitive compensation and a range of benefits to support your professional growth and well-being.'}
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start"
              >
                <div className="bg-[#fef2ee] p-3 rounded-xl mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {benefit.title[language as keyof typeof benefit.title]}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description[language as keyof typeof benefit.description]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Current Openings Section */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={jobsRef}
            initial="hidden"
            animate={jobsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('careers.openings.title') || 'Current Openings'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('careers.openings.subtitle') || 'Explore our available positions and find your perfect role.'}
            </p>
          </motion.div>
          
          <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">
                {t('careers.openings.allTab') || 'All'}
              </TabsTrigger>
              <TabsTrigger value="engineering">
                {t('careers.openings.engineeringTab') || 'Engineering'}
              </TabsTrigger>
              <TabsTrigger value="operations">
                {t('careers.openings.operationsTab') || 'Operations'}
              </TabsTrigger>
              <TabsTrigger value="other">
                {t('careers.openings.otherTab') || 'Other'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              {jobOpenings.length > 0 ? (
                <motion.div 
                  initial="hidden"
                  animate={jobsInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-4"
                >
                  {jobOpenings.map((job) => (
                    <motion.div
                      key={job.id}
                      variants={fadeInUp}
                      className="border border-gray-200 rounded-lg p-6 hover:border-[#fa9b6b] hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {job.title[language as keyof typeof job.title]}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-600">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{job.department[language as keyof typeof job.department]}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{job.location[language as keyof typeof job.location]}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{job.type[language as keyof typeof job.type]}</span>
                            </div>
                          </div>
                          <p className="mt-3 text-gray-600">
                            {job.description[language as keyof typeof job.description]}
                          </p>
                        </div>
                        
                        <Button className="whitespace-nowrap bg-[#fa9b6b] hover:bg-[#e86e40] text-white">
                          {t('careers.openings.applyButton') || 'Apply Now'}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-lg border border-gray-200 text-center"
                >
                  <div className="flex justify-center mb-6 text-gray-300">
                    <Briefcase className="h-16 w-16" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {t('careers.openings.noPositions.title') || 'No Open Positions Currently'}
                  </h3>
                  <p className="text-gray-600 max-w-lg mx-auto mb-6">
                    {t('careers.openings.noPositions.message') || 'We don\'t have any open positions at the moment, but we\'re always looking for talented people to join our team. Please check back regularly as new opportunities become available.'}
                  </p>
                  <Button 
                    variant="outline"
                    className="border-[#fa9b6b] text-[#fa9b6b] hover:bg-[#fef2ee]"
                    onClick={() => {
                      // Replace with your actual contact form or HR email functionality
                      window.location.href = 'mailto:hr@flairplastic.com';
                    }}
                  >
                    {t('careers.openings.noPositions.contactButton') || 'Contact Our HR Team'}
                  </Button>
                </motion.div>
              )}
            </TabsContent>
            
            <TabsContent value="engineering" className="mt-6">
              {jobOpenings.filter(job => job.department.en === 'Engineering').length > 0 ? (
                <motion.div 
                  initial="hidden"
                  animate={jobsInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-4"
                >
                  {jobOpenings
                    .filter(job => job.department.en === 'Engineering')
                    .map((job) => (
                      <motion.div
                        key={job.id}
                        variants={fadeInUp}
                        className="border border-gray-200 rounded-lg p-6 hover:border-[#fa9b6b] hover:shadow-md transition-all"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800">
                              {job.title[language as keyof typeof job.title]}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-600">
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                                <span>{job.department[language as keyof typeof job.department]}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                                <span>{job.location[language as keyof typeof job.location]}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-gray-400" />
                                <span>{job.type[language as keyof typeof job.type]}</span>
                              </div>
                            </div>
                            <p className="mt-3 text-gray-600">
                              {job.description[language as keyof typeof job.description]}
                            </p>
                          </div>
                          
                          <Button className="whitespace-nowrap bg-[#fa9b6b] hover:bg-[#e86e40] text-white">
                            {t('careers.openings.applyButton') || 'Apply Now'}
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              ) : (
                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-lg border border-gray-200 text-center"
                >
                  <div className="flex justify-center mb-6 text-gray-300">
                    <Briefcase className="h-16 w-16" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {t('careers.openings.noPositions.title') || 'No Engineering Positions Currently'}
                  </h3>
                  <p className="text-gray-600 max-w-lg mx-auto mb-6">
                    {t('careers.openings.noPositions.message') || 'We don\'t have any open engineering positions at the moment, but we\'re always looking for talented people to join our team. Please check back regularly as new opportunities become available.'}
                  </p>
                  <Button 
                    variant="outline"
                    className="border-[#fa9b6b] text-[#fa9b6b] hover:bg-[#fef2ee]"
                    onClick={() => {
                      window.location.href = 'mailto:hr@flairplastic.com';
                    }}
                  >
                    {t('careers.openings.noPositions.contactButton') || 'Contact Our HR Team'}
                  </Button>
                </motion.div>
              )}
            </TabsContent>
            
            <TabsContent value="operations" className="mt-6">
              <motion.div 
                initial="hidden"
                animate={jobsInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 gap-4"
              >
                {jobOpenings
                  .filter(job => job.department.en === 'Operations')
                  .map((job) => (
                    <motion.div
                      key={job.id}
                      variants={fadeInUp}
                      className="border border-gray-200 rounded-lg p-6 hover:border-[#fa9b6b] hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {job.title[language as keyof typeof job.title]}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-600">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{job.department[language as keyof typeof job.department]}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{job.location[language as keyof typeof job.location]}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{job.type[language as keyof typeof job.type]}</span>
                            </div>
                          </div>
                          <p className="mt-3 text-gray-600">
                            {job.description[language as keyof typeof job.description]}
                          </p>
                        </div>
                        
                        <Button className="whitespace-nowrap bg-[#fa9b6b] hover:bg-[#e86e40] text-white">
                          {t('careers.openings.applyButton') || 'Apply Now'}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="other" className="mt-6">
              <motion.div 
                initial="hidden"
                animate={jobsInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 gap-4"
              >
                {jobOpenings
                  .filter(job => job.department.en !== 'Engineering' && job.department.en !== 'Operations')
                  .map((job) => (
                    <motion.div
                      key={job.id}
                      variants={fadeInUp}
                      className="border border-gray-200 rounded-lg p-6 hover:border-[#fa9b6b] hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {job.title[language as keyof typeof job.title]}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-600">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{job.department[language as keyof typeof job.department]}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{job.location[language as keyof typeof job.location]}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{job.type[language as keyof typeof job.type]}</span>
                            </div>
                          </div>
                          <p className="mt-3 text-gray-600">
                            {job.description[language as keyof typeof job.description]}
                          </p>
                        </div>
                        
                        <Button className="whitespace-nowrap bg-[#fa9b6b] hover:bg-[#e86e40] text-white">
                          {t('careers.openings.applyButton') || 'Apply Now'}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Application Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={processRef}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('careers.process.title') || 'Our Application Process'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('careers.process.subtitle') || 'A transparent look at how we hire new talent.'}
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="relative"
            >
              {/* Process Timeline */}
              <div className="absolute left-[22px] top-0 h-full w-0.5 bg-gray-200 md:left-1/2 md:-ml-0.5"></div>
              
              {/* Step 1 */}
              <motion.div
                variants={fadeInUp}
                className="relative mb-16"
              >
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">
                      {t('careers.process.step1.title') || 'Application Review'}
                    </h3>
                    <p className="text-gray-600">
                      {t('careers.process.step1.description') || 'Submit your CV and cover letter. Our recruitment team reviews all applications within 5 business days.'}
                    </p>
                  </div>
                  
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fa9b6b] text-white absolute left-0 -ml-1.5 mt-1.5 md:left-1/2 md:-ml-6">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-medium text-gray-700">
                        {t('careers.process.step1.tip.title') || 'Tips for success:'}
                      </h4>
                      <ul className="mt-2 ml-5 text-gray-600 list-disc">
                        <li>{t('careers.process.step1.tip.item1') || 'Highlight relevant skills and experience'}</li>
                        <li>{t('careers.process.step1.tip.item2') || 'Explain why you want to join our team'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                variants={fadeInUp}
                className="relative mb-16"
              >
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-5 rounded-lg shadow-sm md:ml-auto">
                      <h4 className="font-medium text-gray-700">
                        {t('careers.process.step2.tip.title') || 'What to expect:'}
                      </h4>
                      <ul className="mt-2 ml-5 text-gray-600 list-disc">
                        <li>{t('careers.process.step2.tip.item1') || '30-45 minute conversation'}</li>
                        <li>{t('careers.process.step2.tip.item2') || 'Background and experience questions'}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fa9b6b] text-white absolute left-0 -ml-1.5 mt-1.5 md:left-1/2 md:-ml-6">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">
                      {t('careers.process.step2.title') || 'Initial Interview'}
                    </h3>
                    <p className="text-gray-600">
                      {t('careers.process.step2.description') || 'Shortlisted candidates have a phone or video interview with our HR team to discuss your experience and expectations.'}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                variants={fadeInUp}
                className="relative mb-16"
              >
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">
                      {t('careers.process.step3.title') || 'Technical Assessment'}
                    </h3>
                    <p className="text-gray-600">
                      {t('careers.process.step3.description') || 'Depending on the role, we may ask you to complete a practical task or assessment to demonstrate relevant skills.'}
                    </p>
                  </div>
                  
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fa9b6b] text-white absolute left-0 -ml-1.5 mt-1.5 md:left-1/2 md:-ml-6">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-medium text-gray-700">
                        {t('careers.process.step3.tip.title') || 'Assessment formats:'}
                      </h4>
                      <ul className="mt-2 ml-5 text-gray-600 list-disc">
                        <li>{t('careers.process.step3.tip.item1') || 'Technical exercises'}</li>
                        <li>{t('careers.process.step3.tip.item2') || 'Case studies or presentations'}</li>
                        <li>{t('careers.process.step3.tip.item3') || 'Skills tests'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div
                variants={fadeInUp}
                className="relative"
              >
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-5 rounded-lg shadow-sm md:ml-auto">
                      <h4 className="font-medium text-gray-700">
                        {t('careers.process.step4.tip.title') || 'Final stage includes:'}
                      </h4>
                      <ul className="mt-2 ml-5 text-gray-600 list-disc">
                        <li>{t('careers.process.step4.tip.item1') || 'Meeting with team members'}</li>
                        <li>{t('careers.process.step4.tip.item2') || 'Discussion about compensation'}</li>
                        <li>{t('careers.process.step4.tip.item3') || 'Timeline for decision making'}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fa9b6b] text-white absolute left-0 -ml-1.5 mt-1.5 md:left-1/2 md:-ml-6">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">
                      {t('careers.process.step4.title') || 'Final Interview'}
                    </h3>
                    <p className="text-gray-600">
                      {t('careers.process.step4.description') || 'Meet with department managers and potential teammates to ensure mutual fit and discuss specific role details.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={testimonialsRef}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('careers.testimonials.title') || 'Meet Our Team'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('careers.testimonials.subtitle') || 'Hear from the people who make our company great.'}
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name[language as keyof typeof testimonial.name]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <blockquote className="text-center mb-6">
                  <p className="text-gray-700 italic">
                    "{testimonial.quote[language as keyof typeof testimonial.quote]}"
                  </p>
                </blockquote>
                
                <div className="text-center">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name[language as keyof typeof testimonial.name]}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position[language as keyof typeof testimonial.position]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              {t('careers.faq.title') || 'Frequently Asked Questions'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('careers.faq.subtitle') || 'Find answers to common questions about working with us.'}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question[language as keyof typeof faq.question]}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer[language as keyof typeof faq.answer]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#fa9b6b] to-[#e86e40] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('careers.cta.title') || 'Ready to Join Our Team?'}
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            {t('careers.cta.subtitle') || 'Take the first step towards an exciting career with us.'}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-[#e86e40] hover:bg-gray-100"
              onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('careers.cta.browseButton') || 'Browse Openings'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/20"
            >
              <Send className="mr-2 h-4 w-4" />
              {t('careers.cta.contactButton') || 'Contact Recruiting Team'}
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Dialog */}
      <Dialog open={cultureDialogOpen} onOpenChange={setCultureDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] bg-white p-0 overflow-hidden flex flex-col">
          <div className="bg-[#fa9b6b] p-6 text-white">
            <DialogTitle className="text-2xl font-bold">
              {t('careers.culture.title') || 'Our Company Culture'}
            </DialogTitle>
            <DialogDescription className="text-white/90 mt-2">
              {t('careers.culture.subtitle') || 'What makes working at Flair Plastic special'}
            </DialogDescription>
          </div>
          
          <div className="p-6 overflow-y-auto">
            <div className="space-y-8">
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#fa9b6b]">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('careers.culture.innovation.title') || 'Culture of Innovation'}
                </h3>
                <p className="text-gray-700">
                  {t('careers.culture.innovation.description') || 'At Flair Plastic, innovation is in our DNA. We encourage creative thinking and welcome new ideas from all team members regardless of their role or experience level. Our collaborative approach means that everyone has a voice in shaping our future.'}
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#fa9b6b]">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('careers.culture.balance.title') || 'Work-Life Balance'}
                </h3>
                <p className="text-gray-700">
                  {t('careers.culture.balance.description') || 'We understand that productivity thrives when people feel rested and fulfilled. Our flexible work arrangements, generous time-off policies, and focus on well-being help our team members maintain a healthy balance between their professional and personal lives.'}
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#fa9b6b]">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('careers.culture.growth.title') || 'Continuous Learning'}
                </h3>
                <p className="text-gray-700">
                  {t('careers.culture.growth.description') || 'We invest in our people through mentorship programs, training opportunities, and education support. Every team member has a personalized development plan to help them grow professionally and achieve their career goals.'}
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#fa9b6b]">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('careers.culture.diversity.title') || 'Embracing Diversity'}
                </h3>
                <p className="text-gray-700">
                  {t('careers.culture.diversity.description') || `We celebrate different perspectives, backgrounds, and ideas. Our diverse team brings together varied experiences that drive innovation and help us better understand global markets. We're committed to creating an inclusive environment where everyone feels valued and respected.`}
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="font-medium text-gray-800">
                {t('careers.culture.join') || 'Ready to be part of our dynamic team?'}
              </p>
              <div className="mt-4 mb-2">
                <Button 
                  className="bg-[#fa9b6b] hover:bg-[#e86e40] text-white px-6"
                  onClick={() => {
                    setCultureDialogOpen(false);
                    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('careers.culture.browseButton') || 'Browse Open Positions'}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}