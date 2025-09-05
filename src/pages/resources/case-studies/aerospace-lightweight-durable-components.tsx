import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeftIcon, CalendarDaysIcon, ClockIcon, BuildingOfficeIcon, UserIcon, ArrowRightIcon, CheckCircleIcon, ChartBarIcon, ShieldCheckIcon, BoltIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/outline';
import { getCaseStudyBySlug } from '../../../data/caseStudiesData';
import type { CaseStudy } from '../../../data/caseStudiesData';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';

export default function AerospaceLightweightDurableComponents() {
  const router = useRouter();
  const [language, setLanguage] = useState<string>('en');
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Animation refs and setup
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    // Get language from router or localStorage
    const urlLang = router.locale || 'en';
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en';
    const currentLang = urlLang !== 'en' ? urlLang : storedLang;
    setLanguage(currentLang);

    // Fetch case study data
    const study = getCaseStudyBySlug('aerospace-lightweight-durable-components');
    if (study) {
      setCaseStudy(study);
    } else {
      // Redirect to case studies page if post not found
      router.push('/resources/case-studies');
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-6">The requested case study could not be found.</p>
          <Link
            href="/resources/case-studies"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string, lang: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'hu' ? 'hu-HU' : lang === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  const title = caseStudy.title[language as keyof typeof caseStudy.title];
  const description = caseStudy.description[language as keyof typeof caseStudy.description];
  const challenge = caseStudy.challenge[language as keyof typeof caseStudy.challenge];
  const solution = caseStudy.solution[language as keyof typeof caseStudy.solution];  return (
    <ResourcesLayout>
      <Head>
        <title>{title} | STAR-PLUS Case Study</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={caseStudy.tags.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={caseStudy.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://star-plus.com/resources/case-studies/aerospace-lightweight-durable-components`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={caseStudy.image} />
        
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": title,
              "description": description,
              "image": caseStudy.image,
              "datePublished": caseStudy.date,
              "dateModified": caseStudy.updatedAt || caseStudy.date,
              "author": {
                "@type": "Person",
                "name": typeof caseStudy.author.name === 'string' ? caseStudy.author.name : caseStudy.author.name[language as keyof typeof caseStudy.author.name],
                "jobTitle": caseStudy.author.role[language as keyof typeof caseStudy.author.role]
              },
              "publisher": {
                "@type": "Organization",
                "name": "STAR-PLUS",
                "logo": "https://star-plus.com/logo.png"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://star-plus.com/resources/case-studies/aerospace-lightweight-durable-components`
              }
            })
          }}
        />
      </Head>

      <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Immersive Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </motion.div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <motion.div 
            style={{ y: textY }}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Navigation breadcrumb */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Case Studies
                </Link>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {caseStudy.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
              >
                {title}
              </motion.h1>
                <motion.p 
                className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {description}
              </motion.p>              {/* Project Overview Integration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-6xl mx-auto border border-white/20"
              >
                <p className="text-blue-100 leading-relaxed text-lg mb-6">
                  AeroSpace Dynamics required next-generation components for their new aircraft design that could meet the most demanding aerospace standards while contributing to overall weight reduction goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <BoltIcon className="w-4 h-4 mr-2" />
                      Material Engineering
                    </h4>
                    <p className="text-sm text-blue-100">
                      Our materials science team developed a proprietary composite system that combines the best properties of multiple fiber types with advanced polymer matrices.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <ChartBarIcon className="w-4 h-4 mr-2" />
                      Weight Optimization
                    </h4>
                    <p className="text-sm text-blue-100">
                      Achieved significant weight reduction while maintaining structural integrity and meeting all aerospace certification requirements.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Meta information with icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center items-center gap-6 text-white/80"
              >
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CalendarDaysIcon className="h-4 w-4 mr-2" />
                  {formatDate(caseStudy.date, language as string)}
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  {caseStudy.readTime} min read
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <UserIcon className="h-4 w-4 mr-2" />
                  {typeof caseStudy.author.name === 'string' ? caseStudy.author.name : caseStudy.author.name[language as keyof typeof caseStudy.author.name]}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 group"
                >                  Explore Solutions
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >                  View Results
                  <ChartBarIcon className="ml-2 w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>        {/* QuickStats Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Project Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable results that transformed aerospace component manufacturing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {caseStudy.results.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                  }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 group cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: index * 0.1 + 0.3 
                    }}
                    viewport={{ once: true }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  >                    {index === 0 && <ChartBarIcon className="w-8 h-8 text-white" />}
                    {index === 1 && <ShieldCheckIcon className="w-8 h-8 text-white" />}
                    {index === 2 && <BoltIcon className="w-8 h-8 text-white" />}
                  </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-900 mb-2"
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.1 + 0.6,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {metric.value}
                    </motion.span>
                  </motion.div>
                  
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    {metric.label[language as keyof typeof metric.label]}
                  </div>
                  
                  <div className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full inline-block">
                    {metric.improvement}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Client Overview - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <BuildingOfficeIcon className="w-6 h-6 mr-3 text-blue-600" />
                    Client Overview
                  </h3>
                  <dl className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <dt className="text-sm font-medium text-gray-500">Company</dt>
                      <dd className="text-lg font-semibold text-gray-900">{caseStudy.client.name}</dd>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <dt className="text-sm font-medium text-gray-500">Industry</dt>
                      <dd className="text-lg font-semibold text-gray-900">{caseStudy.client.industry}</dd>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <dt className="text-sm font-medium text-gray-500">Company Size</dt>
                      <dd className="text-lg font-semibold text-gray-900">{caseStudy.client.size}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <BoltIcon className="w-5 h-5 mr-2 text-purple-600" />
                    Project Details
                  </h4>
                  <dl className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <dt className="text-sm font-medium text-gray-500">Project Duration</dt>
                      <dd className="text-lg font-semibold text-gray-900">{caseStudy.projectDuration}</dd>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <dt className="text-sm font-medium text-gray-500">Technologies</dt>
                      <dd className="flex flex-wrap gap-2 mt-2">
                        {caseStudy.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>            </motion.div>          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <ShieldCheckIcon className="w-10 h-10 mr-4 text-green-600" />
                Quality Assurance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All components underwent comprehensive quality assurance processes to ensure they meet the highest aerospace industry standards and customer expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Standards Compliance",
                  description: "Meeting aerospace certification requirements",
                  icon: CheckCircleIcon,
                  color: "from-green-500 to-green-600"
                },
                {
                  title: "Performance Validation", 
                  description: "Ensuring optimal component performance",
                  icon: ChartBarIcon,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Reliability Assurance",
                  description: "Long-term durability confirmation",
                  icon: ShieldCheckIcon,
                  color: "from-purple-500 to-purple-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg text-center group cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: index * 0.1 + 0.3 
                    }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Showcase Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">
                Technologies & Innovation
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Cutting-edge solutions that revolutionized aerospace component manufacturing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudy.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    rotateY: 5,
                  }}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {index === 0 && <BoltIcon className="w-8 h-8 text-white" />}
                    {index === 1 && <ShieldCheckIcon className="w-8 h-8 text-white" />}
                    {index === 2 && <GlobeAltIcon className="w-8 h-8 text-white" />}
                    {index === 3 && <ChartBarIcon className="w-8 h-8 text-white" />}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{tech}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {index === 0 && "Advanced polymer composite systems for superior strength-to-weight ratios"}
                    {index === 1 && "Aerospace-grade quality assurance and certification protocols"}
                    {index === 2 && "Precision injection molding with micron-level accuracy"}
                    {index === 3 && "Real-time monitoring and data analytics integration"}
                  </p>
                  
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  />
                </motion.div>              ))}
            </div>

            {/* Manufacturing Excellence Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent flex items-center justify-center">
                  <BoltIcon className="w-8 h-8 mr-3 text-purple-400" />
                  Manufacturing Excellence
                </h3>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                  Precision manufacturing processes with continuous quality monitoring to ensure every component meets exact specifications and aerospace certification requirements.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: "Precision Manufacturing", icon: BoltIcon },
                  { label: "Quality Assurance", icon: ShieldCheckIcon },
                  { label: "Aerospace Certified", icon: CheckCircleIcon },
                  { label: "Industry Standards", icon: ChartBarIcon }
                ].map((item, index) => (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Timeline Section */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Project Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial concept to successful implementation
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              
              <div className="space-y-16">
                {[
                  {
                    phase: "Discovery & Analysis",
                    description: "AeroSpace Dynamics required next-generation components for their new aircraft design that could meet demanding aerospace standards while contributing to weight reduction goals.",
                    icon: GlobeAltIcon,
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    phase: "Material Engineering",
                    description: "Our materials science team developed a proprietary composite system combining multiple fiber types with advanced polymer matrices.",
                    icon: ShieldCheckIcon,
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    phase: "Testing & Validation",
                    description: "All components underwent rigorous testing including thermal cycling, vibration testing, and long-term durability assessments under aerospace conditions.",
                    icon: ChartBarIcon,
                    color: "from-indigo-500 to-indigo-600"
                  },
                  {
                    phase: "Manufacturing Excellence",
                    description: "We implemented precision manufacturing processes with continuous quality monitoring to ensure every component meets exact specifications.",
                    icon: BoltIcon,
                    color: "from-teal-500 to-teal-600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                      >
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${item.color} mb-4`}>
                          Phase {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.phase}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Timeline node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute left-1/2 transform -translate-x-1/2 z-10"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Challenge & Solution
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                How we transformed complex aerospace requirements into innovative manufacturing solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              >                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">{challenge}</p>
                
                {/* Additional challenge points */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-100">Extreme temperature resistance requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-100">Weight reduction without compromising strength</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-100">Strict aerospace certification standards</span>
                  </div>
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              >                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <BoltIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Solution</h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">{solution}</p>
                
                {/* Additional solution points */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-100">Advanced polymer material selection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-100">Precision injection molding techniques</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-100">Comprehensive quality assurance protocols</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {caseStudy.results.testimonial && (
          <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
              >
                <div className="text-6xl text-blue-600 mb-6">&ldquo;</div>
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 leading-relaxed">
                  {caseStudy.results.testimonial.quote[language as keyof typeof caseStudy.results.testimonial.quote]}
                </blockquote>
                <div className="flex items-center justify-center">
                  <div>
                    <div className="font-bold text-xl text-gray-900">
                      {caseStudy.results.testimonial.author}
                    </div>
                    <div className="text-gray-600 text-lg">
                      {caseStudy.results.testimonial.position}
                    </div>
                  </div>
                </div>              </motion.div>
            </div>
          </section>        )}

        {/* Before/After Impact Comparison */}
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformation Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the dramatic improvements achieved through our innovative approach
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-red-500/10 backdrop-blur-sm rounded-3xl p-8 border border-red-500/20">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">Before</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Traditional Approach</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-red-200">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      <span>Heavy components affecting fuel efficiency</span>
                    </div>
                    <div className="flex items-center text-red-200">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      <span>Limited material options for aerospace applications</span>
                    </div>
                    <div className="flex items-center text-red-200">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      <span>Lengthy certification and testing processes</span>
                    </div>
                    <div className="flex items-center text-red-200">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      <span>Higher production costs and waste</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-red-400">45%</div>
                      <div className="text-red-200 text-sm">Heavier Components</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-red-400">8 weeks</div>
                      <div className="text-red-200 text-sm">Testing Duration</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-green-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">After</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">STAR-PLUS Solution</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-green-200">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                      <span>40% weight reduction with superior strength</span>
                    </div>
                    <div className="flex items-center text-green-200">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                      <span>Advanced composite materials meeting all standards</span>
                    </div>
                    <div className="flex items-center text-green-200">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                      <span>Accelerated certification through expertise</span>
                    </div>
                    <div className="flex items-center text-green-200">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                      <span>25% cost reduction through efficiency</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-400">40%</div>
                      <div className="text-green-200 text-sm">Lighter Components</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-400">3 weeks</div>
                      <div className="text-green-200 text-sm">Testing Duration</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>        </section>

        {/* Future Applications Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <ArrowRightIcon className="w-10 h-10 mr-4 text-indigo-600" />
                Future Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The success of this project has opened doors for additional aerospace applications and potential space exploration components.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-gray-100 shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Commercial Aviation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Expanding applications to commercial aircraft interiors and structural components, bringing the same lightweight durability benefits to passenger aviation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border border-gray-100 shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <BoltIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Space Exploration</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Potential applications in satellite components and space vehicle systems, where extreme lightweight and durability requirements are even more critical.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Call-to-Action Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 bg-white/5 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Manufacturing Process?
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Join industry leaders who have revolutionized their production with our advanced injection molding solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-50 transition-all duration-300 flex items-center"
                >
                  Start Your Project Today
                  <ArrowRightIcon className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center"
                >
                  Schedule Consultation
                  <BoltIcon className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </motion.button>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-blue-200">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.8%</div>
                  <div className="text-blue-200">Quality Achievement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-200">Expert Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>        </section>
      </div>
    </ResourcesLayout>
  );
}
