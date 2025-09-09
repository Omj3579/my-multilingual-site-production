import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Recycle, Leaf, Target, Award } from 'lucide-react';

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const OperationCleanSweep = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Operation Clean Sweep",
      subtitle: "Our Commitment to Environmental Excellence",
      description: "Leading the industry in sustainable manufacturing practices and environmental stewardship.",
      features: [
        {
          icon: <Recycle className="w-8 h-8" />,
          title: "Zero Waste Initiative",
          description: "Committed to achieving zero waste to landfill across all operations."
        },
        {
          icon: <Leaf className="w-8 h-8" />,
          title: "Sustainable Materials",
          description: "Using eco-friendly materials and processes in our manufacturing."
        },
        {
          icon: <Target className="w-8 h-8" />,
          title: "Environmental Goals",
          description: "Setting and achieving ambitious environmental targets year over year."
        },
        {
          icon: <Award className="w-8 h-8" />,
          title: "Industry Recognition",
          description: "Recognized for excellence in environmental stewardship and sustainability."
        }
      ]
    },
    hu: {
      title: "Operation Clean Sweep",
      subtitle: "Elkötelezettségünk a Környezeti Kiválóság Iránt",
      description: "Az iparágat vezető fenntartható gyártási gyakorlatok és környezeti felelősségvállalás.",
      features: [
        {
          icon: <Recycle className="w-8 h-8" />,
          title: "Nulla Hulladék Kezdeményezés",
          description: "Elkötelezett vagyunk a nulla hulladék elérése iránt minden műveletben."
        },
        {
          icon: <Leaf className="w-8 h-8" />,
          title: "Fenntartható Anyagok",
          description: "Környezetbarát anyagok és folyamatok használata gyártásban."
        },
        {
          icon: <Target className="w-8 h-8" />,
          title: "Környezeti Célok",
          description: "Ambiciózus környezeti célok kitűzése és elérése évről évre."
        },
        {
          icon: <Award className="w-8 h-8" />,
          title: "Iparági Elismerés",
          description: "Elismerés a környezeti felelősségvállalás és fenntarthatóság kiválóságáért."
        }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.subtitle}
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.description}
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.map((feature: Feature, index: number) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OperationCleanSweep;
