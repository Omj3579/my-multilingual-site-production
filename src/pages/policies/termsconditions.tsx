import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layouts/PageLayout';
import { 
  Scale, 
  Building, 
  Shield, 
  Clock, 
  Globe, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  ExternalLink,
  Download,
  Bookmark,
  Eye,
  Calendar,
  MapPin,
  Zap,
  Star,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  const { language } = useLanguage();
  const [readingProgress, setReadingProgress] = useState(0);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const lastUpdated = new Date('2025-09-22');

  // Reading progress tracker with smooth animation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAcceptTerms = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleDownloadPDF = () => {
    alert(language === 'en' ? 'PDF download would be implemented here' : 'PDF letöltés itt lenne implementálva');
  };

  return (
    <PageLayout>
      {/* Futuristic Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 z-50 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full w-full bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
        </motion.div>
      </div>

      {/* Glassmorphism Background */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12">
          {/* Enhanced Hero Section with Advanced UX */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            {/* Hero Card with Enhanced Glassmorphism */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/40 via-white/30 to-white/20 border border-white/30 rounded-3xl p-12 mb-12 shadow-[0_32px_64px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-700 relative overflow-hidden">
              
              {/* Floating Orbs for Visual Appeal */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              
              {/* Badge with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8"
              >
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">
                  {language === 'en' ? 'Legal Framework 2025' : 'Jogi Keretrendszer 2025'}
                </span>
              </motion.div>

              {/* Main Title with Enhanced Animation */}
              <motion.div 
                className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div 
                  className="p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl shadow-xl"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
                  }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                >
                  <Scale className="h-12 w-12 text-white" />
                </motion.div>
                
                <div className="text-center lg:text-left">
                  <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight mb-2">
                    {language === 'en' ? 'Terms of Service' : 'Szolgáltatási'}
                  </h1>
                  <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                    {language === 'en' ? '& Conditions' : 'Feltételek'}
                  </h1>
                </div>
              </motion.div>
              
              {/* Enhanced Description with Better Typography */}
              <motion.p 
                className="text-2xl text-slate-700 max-w-5xl mx-auto mb-12 leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {language === 'en' 
                  ? 'Comprehensive legal framework governing your partnership with Flair-Plastic\'s innovative manufacturing ecosystem and digital infrastructure'
                  : 'Átfogó jogi keretrendszer, amely szabályozza az Ön partnerségét a Flair-Plastic innovatív gyártási ökoszisztémájával és digitális infrastruktúrájával'}
              </motion.p>

              {/* Enhanced Stats with Better Visual Design */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { 
                    icon: Calendar, 
                    label: language === 'en' ? 'Last Updated' : 'Utolsó frissítés', 
                    value: 'Sept 2025', 
                    color: 'from-blue-500 to-cyan-500',
                    bgColor: 'from-blue-50 to-cyan-50',
                    borderColor: 'border-blue-200'
                  },
                  { 
                    icon: Globe, 
                    label: language === 'en' ? 'Global Reach' : 'Globális elérhetőség', 
                    value: '25+ Countries', 
                    color: 'from-emerald-500 to-teal-500',
                    bgColor: 'from-emerald-50 to-teal-50',
                    borderColor: 'border-emerald-200'
                  },
                  { 
                    icon: Shield, 
                    label: language === 'en' ? 'GDPR Compliant' : 'GDPR megfelelő', 
                    value: '100%', 
                    color: 'from-purple-500 to-pink-500',
                    bgColor: 'from-purple-50 to-pink-50',
                    borderColor: 'border-purple-200'
                  },
                  { 
                    icon: Star, 
                    label: language === 'en' ? 'Trust Score' : 'Megbízhatósági index', 
                    value: 'AAA+', 
                    color: 'from-amber-500 to-orange-500',
                    bgColor: 'from-amber-50 to-orange-50',
                    borderColor: 'border-amber-200'
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className={`backdrop-blur-lg bg-gradient-to-br ${stat.bgColor} border-2 ${stat.borderColor} rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                  >
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button 
                    onClick={handleDownloadPDF}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl border-0 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Download className="h-5 w-5 mr-3 group-hover:animate-bounce" />
                    {language === 'en' ? 'Download PDF Version' : 'PDF verzió letöltése'}
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: acceptedTerms ? "0 20px 40px rgba(16, 185, 129, 0.3)" : "0 20px 40px rgba(99, 102, 241, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button 
                    onClick={handleAcceptTerms}
                    size="lg"
                    variant={acceptedTerms ? 'default' : 'outline'}
                    className={acceptedTerms 
                      ? 'bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl border-0 px-8 py-4 text-lg font-semibold rounded-2xl relative overflow-hidden' 
                      : 'border-3 border-slate-300 hover:border-indigo-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-slate-700 hover:text-indigo-700 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl'
                    }
                  >
                    {acceptedTerms && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                    {acceptedTerms ? (
                      <CheckCircle2 className="h-5 w-5 mr-3 group-hover:animate-spin" />
                    ) : (
                      <Bookmark className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                    )}
                    {acceptedTerms 
                      ? (language === 'en' ? 'Terms Accepted ✓' : 'Feltételek elfogadva ✓')
                      : (language === 'en' ? 'Accept Terms' : 'Feltételek elfogadása')
                    }
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                className="flex justify-center items-center gap-8 mt-8 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-slate-600">{language === 'en' ? 'SSL Secured' : 'SSL védett'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-slate-600">{language === 'en' ? 'GDPR Compliant' : 'GDPR megfelelő'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-600">{language === 'en' ? 'ISO Certified' : 'ISO minősített'}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Floating Navigation Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8">
                <Card className="backdrop-blur-xl bg-white/40 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                      <Eye className="h-5 w-5 text-blue-600" />
                      {language === 'en' ? 'Quick Navigation' : 'Gyors navigáció'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      { key: 'overview', label: language === 'en' ? 'Overview' : 'Áttekintés', icon: Info, gradient: 'from-blue-500 to-cyan-500' },
                      { key: 'company', label: language === 'en' ? 'Company Info' : 'Vállalati info', icon: Building, gradient: 'from-slate-500 to-gray-600' },
                      { key: 'terms', label: language === 'en' ? 'Terms Details' : 'Feltételek részletei', icon: FileText, gradient: 'from-purple-500 to-pink-500' },
                      { key: 'usage', label: language === 'en' ? 'Usage Rights' : 'Használati jogok', icon: Zap, gradient: 'from-emerald-500 to-teal-500' },
                      { key: 'liability', label: language === 'en' ? 'Liability' : 'Felelősség', icon: Shield, gradient: 'from-amber-500 to-orange-500' },
                      { key: 'jurisdiction', label: language === 'en' ? 'Jurisdiction' : 'Joghatóság', icon: Scale, gradient: 'from-red-500 to-rose-500' }
                    ].map((item, index) => (
                      <motion.button 
                        key={item.key}
                        onClick={() => {
                          setActiveSection(item.key);
                          document.getElementById(item.key)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-left text-sm transition-all duration-300 group ${
                          activeSection === item.key 
                            ? 'bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 shadow-lg' 
                            : 'hover:bg-white/50 hover:shadow-md'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center shadow-sm`}>
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className={activeSection === item.key ? 'font-semibold text-slate-800' : 'text-slate-600 group-hover:text-slate-800'}>
                          {item.label}
                        </span>
                        <ArrowRight className={`h-4 w-4 ml-auto transition-transform duration-300 ${
                          activeSection === item.key ? 'text-blue-600 translate-x-1' : 'text-slate-400 group-hover:translate-x-1 group-hover:text-slate-600'
                        }`} />
                      </motion.button>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Main Content Area - Column 2-4 of the grid */}
            <div className="lg:col-span-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                <div className="prose prose-lg max-w-none space-y-12">
                  
                  {/* Overview Section */}
                  <motion.section 
                    id="overview"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                        <Info className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
                        {language === 'en' ? 'Overview' : 'Áttekintés'}
                      </h2>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
                      <p className="text-slate-700 leading-relaxed text-lg">
                        {language === 'en'
                          ? 'These Terms of Service constitute a legal agreement between you and Flair-Plastic Kft., governing your access to and use of our website, digital content, online services, and any information or materials provided through our web platform. By accessing or using our website, you acknowledge and agree to be bound by these terms.'
                          : 'Ezek a Szolgáltatási Feltételek jogi megállapodást képeznek Ön és a Flair-Plastic Kft. között, amely szabályozza weboldalunk, digitális tartalmunk, online szolgáltatásaink, valamint webes platformunkon keresztül nyújtott információk vagy anyagok elérését és használatát. Weboldalunk elérésével vagy használatával elismeri és vállalja, hogy betartja ezeket a feltételeket.'}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      {language === 'en'
                        ? 'Our website serves as a digital showcase of our manufacturing capabilities and a platform for information sharing. These terms ensure a safe, respectful, and legally compliant online environment for all visitors and users of our digital services.'
                        : 'Weboldalunk gyártási képességeink digitális bemutatójaként és információmegosztó platformként szolgál. Ezek a feltételek biztonságos, tiszteletteljes és jogilag megfelelő online környezetet biztosítanak minden látogató és digitális szolgáltatásaink felhasználója számára.'}
                    </p>
                  </motion.section>

                  {/* Company Information Section */}
                  <motion.section 
                    id="company"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-gray-700 bg-clip-text text-transparent">
                        {language === 'en' ? 'Company Information' : 'Vállalati információk'}
                      </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-6 rounded-xl border border-slate-200">
                        <h4 className="font-semibold text-slate-800 mb-3">{language === 'en' ? 'Legal Entity' : 'Jogi személy'}</h4>
                        <p className="text-gray-600 mb-2"><strong>Flair-Plastic Kft.</strong></p>
                        <p className="text-gray-600 mb-2">{language === 'en' ? 'Registration:' : 'Nyilvántartás:'} Hungary</p>
                        <p className="text-gray-600">{language === 'en' ? 'VAT ID:' : 'Adószám:'} HU-123456789</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-3">{language === 'en' ? 'Contact Information' : 'Kapcsolati információk'}</h4>
                        <p className="text-blue-600 mb-2">📧 legal@flair-plastic.hu</p>
                        <p className="text-blue-600 mb-2">📞 +36 (46) 584 06 00</p>
                        <p className="text-blue-600">{language === 'en' ? '🕒 Business Hours: Mon-Fri 9:00-17:00 CET' : '🕒 Nyitvatartás: Hétfő-Péntek 9:00-17:00'}</p>
                      </div>
                    </div>
                  </motion.section>

                  {/* Terms Details Section */}
                  <motion.section 
                    id="terms"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-purple-700 bg-clip-text text-transparent">
                        {language === 'en' ? 'Terms Details' : 'Feltételek részletei'}
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {/* Website Terms Agreement */}
                      <div className="border-l-4 border-purple-500 pl-6">
                        <h4 className="text-xl font-semibold text-slate-800 mb-3">
                          {language === 'en' ? 'Website Usage Agreement' : 'Weboldal használati megállapodás'}
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {language === 'en'
                            ? 'By accessing our website, you agree to use it for lawful purposes only. Our website provides information about our manufacturing capabilities, company profile, and serves as a communication platform. All content is provided for informational purposes and does not constitute a binding offer for manufacturing services.'
                            : 'Weboldalunk elérésével vállalja, hogy csak törvényes célokra használja azt. Weboldalunk információt nyújt gyártási képességeinkről, vállalati profilunkról, és kommunikációs platformként szolgál. Minden tartalom tájékoztató jellegű, és nem minősül kötelező erejű ajánlatnak gyártási szolgáltatásokra.'}
                        </p>
                      </div>

                      {/* Content and Intellectual Property */}
                      <div className="border-l-4 border-emerald-500 pl-6">
                        <h4 className="text-xl font-semibold text-slate-800 mb-3">
                          {language === 'en' ? 'Content & Intellectual Property' : 'Tartalom és szellemi tulajdon'}
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {language === 'en'
                            ? 'All website content, including text, images, graphics, logos, videos, and design elements, is owned by Flair-Plastic Kft. and protected by copyright laws. You may view and download content for personal, non-commercial use only. Reproduction, distribution, or commercial use requires written permission.'
                            : 'A weboldal minden tartalma, beleértve a szövegeket, képeket, grafikákat, logókat, videókat és dizájn elemeket, a Flair-Plastic Kft. tulajdona, és szerzői jogi törvények védik. A tartalmat csak személyes, nem kereskedelmi célra tekintheti meg és töltheti le. A sokszorosítás, terjesztés vagy kereskedelmi használat írásos engedélyt igényel.'}
                        </p>
                      </div>
                    </div>
                  </motion.section>

                  {/* Usage Rights Section */}
                  <motion.section 
                    id="usage"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent">
                        {language === 'en' ? 'Usage Rights & Responsibilities' : 'Használati jogok és kötelezettségek'}
                      </h2>
                    </div>
                    
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-emerald-800 mb-4">{language === 'en' ? 'Your Rights as a Website User:' : 'Az Ön jogai weboldal felhasználóként:'}</h4>
                      <ul className="space-y-2 text-emerald-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          {language === 'en' ? 'Free access to public website content' : 'Ingyenes hozzáférés a nyilvános weboldal tartalomhoz'}
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          {language === 'en' ? 'Information about our manufacturing capabilities' : 'Információ gyártási képességeinkről'}
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          {language === 'en' ? 'Contact and inquiry submission' : 'Kapcsolatfelvétel és érdeklődés beküldése'}
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          {language === 'en' ? 'Privacy protection per our Privacy Policy' : 'Adatvédelem az Adatvédelmi Szabályzat szerint'}
                        </li>
                      </ul>
                    </div>

                    <h4 className="text-xl font-semibold text-slate-800 mb-3">
                      {language === 'en' ? 'Acceptable Use of Website' : 'Weboldal elfogadható használata'}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {language === 'en'
                        ? 'You may use our website for lawful purposes only, including viewing our product information, learning about our services, and contacting us for business inquiries. You agree not to use our website in any way that could damage, disable, or impair our website operations, attempt unauthorized access, introduce malicious software, or violate applicable laws and regulations.'
                        : 'Weboldalunkat csak törvényes célokra használhatja, beleértve termékinformációink megtekintését, szolgáltatásainkról való tájékozódást és üzleti megkeresések céljából történő kapcsolatfelvételt. Vállalja, hogy nem használja weboldalunkat olyan módon, amely károsíthatja, letilthatja vagy ronthatja weboldal-műveleteinket, jogosulatlan hozzáférést kísérel meg, rosszindulatú szoftvert vezet be, vagy sérti az alkalmazandó jogszabályokat.'}
                    </p>
                  </motion.section>

                  {/* Liability Section */}
                  <motion.section 
                    id="liability"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-amber-700 bg-clip-text text-transparent">
                        {language === 'en' ? 'Liability & Risk Management' : 'Felelősség és kockázatkezelés'}
                      </h2>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-amber-800 mb-3">
                        {language === 'en' ? '⚠️ Important Notice' : '⚠️ Fontos figyelmeztetés'}
                      </h4>
                      <p className="text-amber-700">
                        {language === 'en'
                          ? 'Our website content is provided "as is" for informational purposes. While we strive for accuracy, we do not guarantee that all information is current or error-free. For specific manufacturing inquiries, please contact us directly for detailed and up-to-date information.'
                          : 'Weboldalunk tartalma "adott állapotban" kerül nyújtásra, tájékoztató céllal. Bár törekszünk a pontosságra, nem garantáljuk, hogy minden információ aktuális vagy hibamentes. Konkrét gyártási érdeklődés esetén kérjük, vegye fel velünk közvetlenül a kapcsolatot részletes és naprakész információért.'}
                      </p>
                    </div>

                    <h4 className="text-xl font-semibold text-slate-800 mb-3">
                      {language === 'en' ? 'Limitation of Website Liability' : 'Weboldal felelősség korlátozása'}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {language === 'en'
                        ? 'Flair-Plastic Kft. shall not be liable for any damages arising from your use of this website, including but not limited to direct, indirect, incidental, or consequential damages. This includes technical issues, temporary unavailability, or inaccuracies in content, except where prohibited by law. Our website serves as an information platform and does not create binding agreements for manufacturing services.'
                        : 'A Flair-Plastic Kft. nem vállal felelősséget semmilyen, a weboldal használatából eredő kárért, beleértve, de nem kizárólagosan a közvetlen, közvetett, véletlen vagy következményes károkat. Ez magában foglalja a technikai problémákat, átmeneti elérhetetlenséget vagy a tartalom pontatlanságait, kivéve ahol ezt a jog tiltja. Weboldalunk információs platformként szolgál, és nem hoz létre kötelező erejű megállapodásokat gyártási szolgáltatásokra.'}
                    </p>
                  </motion.section>

                  {/* Jurisdiction Section */}
                  <motion.section 
                    id="jurisdiction"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl">
                        <Scale className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-red-700 bg-clip-text text-transparent">
                        {language === 'en' ? 'Legal Framework & Jurisdiction' : 'Jogi keret és joghatóság'}
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-800 mb-3">
                          {language === 'en' ? 'Governing Law' : 'Irányadó jog'}
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {language === 'en'
                            ? 'These website terms are governed by and construed in accordance with the laws of Hungary and the European Union. Any disputes arising from website usage will be resolved through Hungarian courts, with preference for mediation and arbitration when appropriate.'
                            : 'Ezeket a weboldal feltételeket Magyarország és az Európai Unió jogszabályai szabályozzák és értelmezik. A weboldal használatából eredő vitákat magyar bíróságok rendezik, megfelelő esetben előnyben részesítve a közvetítést és választottbírósági eljárást.'}
                        </p>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-red-800 mb-3">
                          {language === 'en' ? 'Dispute Resolution' : 'Vitarendezés'}
                        </h4>
                        <p className="text-red-700 mb-4">
                          {language === 'en'
                            ? 'We are committed to resolving any disputes amicably and efficiently:'
                            : 'Elkötelezettek vagyunk minden vita békés és hatékony rendezése mellett:'}
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-red-700">
                          <li>{language === 'en' ? 'Direct negotiation (30 days)' : 'Közvetlen tárgyalás (30 nap)'}</li>
                          <li>{language === 'en' ? 'Mediation (60 days)' : 'Közvetítés (60 nap)'}</li>
                          <li>{language === 'en' ? 'Arbitration or court proceedings' : 'Választottbírósági vagy bírósági eljárás'}</li>
                        </ol>
                      </div>

                      {/* Contact Section */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-8">
                        <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                          <Building className="w-5 h-5" />
                          {language === 'en' ? 'Legal Contact Information' : 'Jogi kapcsolati információk'}
                        </h4>
                        <div className="space-y-3 text-blue-700">
                          <p className="flex items-center gap-2">
                            <strong>📧 Email:</strong> legal@flair-plastic.hu
                          </p>
                          <p className="flex items-center gap-2">
                            <strong>📞 Phone:</strong> +36 (46) 584 06 00
                          </p>
                          <p className="flex items-center gap-2">
                            <strong>⏰ {language === 'en' ? 'Business Hours:' : 'Nyitvatartás:'}</strong>
                            {language === 'en' ? 'Monday - Friday, 9:00 - 17:00 CET' : 'Hétfő - Péntek, 9:00 - 17:00'}
                          </p>
                          <p className="text-sm italic mt-4">
                            {language === 'en'
                              ? '💡 For immediate assistance with urgent legal matters, please call during business hours.'
                              : '💡 Sürgős jogi kérdésekkel kapcsolatos azonnali segítségért hívjon nyitvatartási időben.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsConditions;
