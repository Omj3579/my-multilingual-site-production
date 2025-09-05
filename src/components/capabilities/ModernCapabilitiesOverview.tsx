import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Cpu, 
  Layers3, 
  Zap, 
  Shield, 
  Globe,
  ArrowUpRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const ModernCapabilitiesOverview = () => {
  const { language } = useLanguage();

  const capabilities = [
    {
      icon: Cpu,
      title: language === 'en' ? 'Multi-Component Injection' : 'Többkomponensű fröccsöntés',
      description: language === 'en' 
        ? 'Advanced multi-material injection molding for complex component requirements with enhanced properties.'
        : 'Fejlett többanyagú fröccsöntés összetett alkatrész-követelményekhez fokozott tulajdonságokkal.',
      stats: { value: '50+', label: language === 'en' ? 'Material Types' : 'Anyagtípus' },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Layers3,
      title: language === 'en' ? 'In-Mold Decoration' : 'Formában díszítés',
      description: language === 'en'
        ? 'Seamless integration of decorative elements directly during the molding process for superior aesthetics.'
        : 'A dekoratív elemek zökkenőmentes integrációja közvetlenül a formázási folyamat során kiváló esztétikumért.',
      stats: { value: '99.8%', label: language === 'en' ? 'Precision' : 'Pontosság' },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Precision Engineering' : 'Precíziós mérnöki munka',
      description: language === 'en'
        ? 'Ultra-high precision and dimensional accuracy for mission-critical applications and exacting standards.'
        : 'Rendkívül nagy pontosság és méretpontosság kritikus alkalmazásokhoz és szigorú szabványokhoz.',
      stats: { value: '±0.01mm', label: language === 'en' ? 'Tolerance' : 'Tűrés' },
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Material Innovation' : 'Anyag innováció',
      description: language === 'en'
        ? 'Cutting-edge material selection and optimization for enhanced performance in diverse applications.'
        : 'Élvonalbeli anyagválasztás és optimalizálás a fokozott teljesítményért különböző alkalmazásokban.',
      stats: { value: '24/7', label: language === 'en' ? 'Production' : 'Gyártás' },
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: language === 'en' ? 'Design & Engineering' : 'Tervezés és mérnöki munka',
      description: language === 'en' 
        ? 'Collaborative design optimization for manufacturability'
        : 'Együttműködő tervezés optimalizálás a gyárthatóságért'
    },
    {
      step: '02',
      title: language === 'en' ? 'Prototyping' : 'Prototípus készítés',
      description: language === 'en'
        ? 'Rapid prototyping to validate design and material selection'
        : 'Gyors prototípuskészítés a tervezés és anyagválasztás validálásához'
    },
    {
      step: '03',
      title: language === 'en' ? 'Tooling' : 'Szerszámozás',
      description: language === 'en'
        ? 'Precision tool creation with advanced CNC technology'
        : 'Precíziós szerszámkészítés fejlett CNC technológiával'
    },
    {
      step: '04',
      title: language === 'en' ? 'Production' : 'Gyártás',
      description: language === 'en'
        ? 'Automated high-volume manufacturing with quality assurance'
        : 'Automatizált nagyvolumenű gyártás minőségbiztosítással'
    },
    {
      step: '05',
      title: language === 'en' ? 'Quality Assurance' : 'Minőségbiztosítás',
      description: language === 'en'
        ? 'Comprehensive testing and inspection protocols'
        : 'Átfogó tesztelési és ellenőrzési protokollok'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            {language === 'en' ? 'Technology Capabilities' : 'Technológiai képességek'}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Advanced Injection Molding' : 'Fejlett fröccsöntés'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'At Flair-Plastic, we combine advanced technology with decades of expertise to deliver exceptional plastic injection molding solutions that meet the highest standards of quality and performance.'
              : 'A Flair-Plastic-nál fejlett technológiát kombinálunk évtizedes szakértelemmel, hogy kivételes műanyag fröccsöntési megoldásokat nyújtsunk, amelyek megfelelnek a legmagasabb minőségi és teljesítménystandardoknak.'
            }
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${capability.gradient}`}>
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {capability.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {capability.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">{language === 'en' ? 'Certified Process' : 'Tanúsított folyamat'}</span>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${capability.gradient} bg-clip-text text-transparent`}>
                    {capability.stats.value}
                  </div>
                  <div className="text-sm text-gray-500">{capability.stats.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'en' ? 'Our Process' : 'Folyamatunk'}
            </h3>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              {language === 'en'
                ? 'A streamlined approach from concept to delivery, ensuring quality at every step'
                : 'Áramvonalas megközelítés a koncepciótól a szállításig, minőségbiztosítással minden lépésben'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <span className="text-2xl font-bold text-blue-300">{step.step}</span>
                  </div>
                  <h4 className="font-bold mb-2 text-white">{step.title}</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-medium">
                {language === 'en' ? 'Technical Expertise' : 'Műszaki szakértelem'}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'en' 
                ? 'Engineering Excellence in Every Detail'
                : 'Mérnöki kiválóság minden részletben'
              }
            </h3>
            
            <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              {language === 'en'
                ? 'Our injection molding precision delivers cutting-edge machinery and industry to ensure competency and efficiency across production runs. With capacity ranging from small precision components to large-scale manufacturing, we have the expertise to meet your specific needs while maintaining exceptional standards throughout our production facilities, utilizing advanced molding techniques including multi-shot molding, overmolding, and gas-assisted molding technologies designed to ensure your product achieves optimal performance and cost-efficiency.'
                : 'Fröccsöntési pontosságunk élvonalbeli gépeket és iparágat biztosít a termelési futásokon keresztüli kompetencia és hatékonyság érdekében. A kis precíziós alkatrészektől a nagyüzemi gyártásig terjedő kapacitással rendelkezünk a szakértelemmel, hogy megfelelünk az Ön speciális igényeinek, miközben kivételes szabványokat tartunk fenn termelési létesítményeinkben, fejlett formázási technikákat alkalmazva, beleértve a többlövéses formázást, túlformázást és gázzal segített formázási technológiákat, amelyeket úgy terveztek, hogy biztosítsák termékének optimális teljesítményét és költséghatékonyságát.'
              }
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { number: '99.9%', label: language === 'en' ? 'Quality Rate' : 'Minőségi arány' },
                { number: '48h', label: language === 'en' ? 'Lead Time' : 'Átfutási idő' },
                { number: '500+', label: language === 'en' ? 'Projects' : 'Projektek' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernCapabilitiesOverview;
