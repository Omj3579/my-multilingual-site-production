import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Monitor, 
  Car, 
  Home, 
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Shield,
  Layers
} from 'lucide-react';

const ModernIMDApplications = () => {
  const { language } = useLanguage();

  const applications = [
    {
      icon: Monitor,
      title: language === 'en' ? 'Consumer Electronics' : 'Fogyasztói elektronika',
      description: language === 'en' 
        ? 'Enhanced device interfaces with durable, high-resolution graphics'
        : 'Fejlesztett eszközfelületek tartós, nagy felbontású grafikákkal',
      features: [
        language === 'en' ? 'High-resolution graphics' : 'Nagy felbontású grafika',
        language === 'en' ? 'Tactile feedback' : 'Tapintható visszajelzés',
        language === 'en' ? 'Scratch resistance' : 'Karcolásállóság'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Car,
      title: language === 'en' ? 'Automotive Interiors' : 'Autóipari belső terek',
      description: language === 'en'
        ? 'Create sophisticated control panels and decorative elements'
        : 'Kifinomult vezérlőpanelek és dekoratív elemek létrehozása',
      features: [
        language === 'en' ? 'UV resistant' : 'UV-álló',
        language === 'en' ? 'Temperature stable' : 'Hőmérséklet-stabil',
        language === 'en' ? 'Chemical resistant' : 'Vegyszerálló'
      ],
      gradient: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Home,
      title: language === 'en' ? 'Household Appliances' : 'Háztartási gépek',
      description: language === 'en'
        ? 'Elegant product aesthetics with scratch-resistant designs'
        : 'Elegáns termékesztétika karcolásálló tervezéssel',
      features: [
        language === 'en' ? 'Easy to clean' : 'Könnyen tisztítható',
        language === 'en' ? 'Wear resistant' : 'Kopásálló',
        language === 'en' ? 'Premium finish' : 'Prémium felület'
      ],
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: language === 'en' ? 'Film Preparation' : 'Film előkészítés',
      description: language === 'en' 
        ? 'High-quality decorative film with precise graphics preparation'
        : 'Kiváló minőségű dekoratív fólia pontos grafikai előkészítéssel'
    },
    {
      step: '02',
      title: language === 'en' ? 'Mold Integration' : 'Forma integráció',
      description: language === 'en'
        ? 'Careful placement and securing of decorative film in the mold'
        : 'A dekoratív fólia gondos elhelyezése és rögzítése a formában'
    },
    {
      step: '03',
      title: language === 'en' ? 'Injection Process' : 'Fröccsöntési folyamat',
      description: language === 'en'
        ? 'Precise injection molding creating seamless integration'
        : 'Precíz fröccsöntés zökkenőmentes integrációt eredményezve'
    },
    {
      step: '04',
      title: language === 'en' ? 'Quality Control' : 'Minőségellenőrzés',
      description: language === 'en'
        ? 'Comprehensive inspection ensuring perfect adhesion and finish'
        : 'Átfogó ellenőrzés a tökéletes tapadás és felület biztosításához'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: language === 'en' ? 'Enhanced Aesthetics' : 'Fokozott esztétika',
      description: language === 'en' ? 'Premium visual appeal with photo-realistic graphics' : 'Prémium vizuális megjelenés fotórealisztikus grafikákkal'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Superior Durability' : 'Kiváló tartósság',
      description: language === 'en' ? 'Long-lasting decoration resistant to wear and tear' : 'Hosszan tartó díszítés kopással és szakadással szemben'
    },
    {
      icon: Layers,
      title: language === 'en' ? 'Cost Efficiency' : 'Költséghatékonyság',
      description: language === 'en' ? 'Reduced assembly time and post-processing requirements' : 'Csökkentett összeszerelési idő és utófeldolgozási igények'
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
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            {language === 'en' ? 'Applications of IMD Technology' : 'IMD technológia alkalmazásai'}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Transforming Industries' : 'Iparágak átalakítása'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Our In-Mould Decoration technology revolutionizes product aesthetics across multiple industries, delivering unmatched quality and durability.'
              : 'Formában díszítési technológiánk forradalmasítja a termékek esztétikáját több iparágban, páratlan minőséget és tartósságot biztosítva.'
            }
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {applications.map((app, index) => (
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
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${app.gradient}`}>
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="p-2 rounded-full bg-gray-100 group-hover:bg-purple-100 transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {app.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {app.description}
              </p>
              
              <div className="space-y-3">
                {app.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'en' ? 'Key Benefits' : 'Főbb előnyök'}
            </h3>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              {language === 'en'
                ? 'Discover how IMD technology delivers superior results for your manufacturing needs'
                : 'Fedezze fel, hogyan nyújt kiváló eredményeket az IMD technológia gyártási igényeihez'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <benefit.icon className="w-8 h-8 text-purple-300" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{benefit.title}</h4>
                <p className="text-purple-200 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Our IMD Process' : 'IMD folyamatunk'}
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            {language === 'en'
              ? 'A streamlined approach ensuring precision and quality at every stage'
              : 'Áramvonalas megközelítés, amely pontosságot és minőséget biztosít minden szakaszban'
            }
          </p>

          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-white">{step.step}</span>
                  </div>
                  <h4 className="font-bold mb-2 text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernIMDApplications;
