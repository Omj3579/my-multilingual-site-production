import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, MapPin, Recycle, Cog, TrendingUp, Lightbulb, Users, CheckCircle } from 'lucide-react';

const ResultsSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('benefits');

  const resultsContent = {
    badge: {
      en: "Partnership Benefits",
      hu: "Partnerség Előnyei"
    },
    title: {
      en: "Delivering Excellence<br/>Through Collaboration",
      hu: "Kiválóság Elérése<br/>Együttműködésen Keresztül"
    },
    tabs: {
      benefits: {
        label: { en: "Benefits", hu: "Előnyök" },
        icon: <TrendingUp className="w-5 h-5" />
      },
      challenges: {
        label: { en: "Challenges", hu: "Kihívások" },
        icon: <Lightbulb className="w-5 h-5" />
      },
      solutions: {
        label: { en: "Solutions", hu: "Megoldások" },
        icon: <CheckCircle className="w-5 h-5" />
      }
    },
    content: {
      benefits: {
        title: {
          en: "Strategic Partnership Benefits",
          hu: "Strategiai Partnerség Előnyei"
        },
        description: {
          en: "This collaboration offers numerous advantages that drive innovation and operational excellence across all aspects of our partnership.",
          hu: "Ez az együttműködés számos előnyt kínál, amelyek innovációt és működési kiválóságot hajtanak minden partnerségünk területén."
        },
        items: [
          {
            icon: <Shield className="w-6 h-6" />,
            title: { en: "Quality Control", hu: "Minőségellenőrzés" },
            description: { en: "Rigorous quality assurance processes ensure all products consistently meet the highest standards.", hu: "Szigorú minőségbiztosítási folyamatok biztosítják, hogy minden termék következetesen megfeleljen a legmagasabb szabványoknak." },
            metric: "99.8%",
            metricLabel: { en: "Quality Rate", hu: "Minőségi Arány" }
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            title: { en: "Geographical Proximity", hu: "Földrajzi Közelség" },
            description: { en: "The close EU locations of our facilities streamline logistics, reduce lead times, and lower transportation costs.", hu: "Létesítményeink közeli EU helyszínei egyszerűsítik a logisztikát, csökkentik az átfutási időket és csökkentik a szállítási költségeket." },
            metric: "40%",
            metricLabel: { en: "Cost Reduction", hu: "Költségcsökkentés" }
          },
          {
            icon: <Recycle className="w-6 h-6" />,
            title: { en: "Sustainability Focus", hu: "Fenntarthatósági Fókusz" },
            description: { en: "Both companies prioritize sustainability, using recycled materials wherever possible while maintaining product quality.", hu: "Mindkét vállalat prioritásként kezeli a fenntarthatóságot, újrahasznosított anyagokat használ, ahol csak lehetséges, miközben fenntartja a termékminőséget." },
            metric: "30%",
            metricLabel: { en: "Recycled Materials", hu: "Újrahasznosított Anyagok" }
          },
          {
            icon: <Cog className="w-6 h-6" />,
            title: { en: "Comprehensive Manufacturing", hu: "Átfogó Gyártás" },
            description: { en: "Our advanced machinery supports the efficient production of both large and small components, allowing us to meet a variety of needs.", hu: "Fejlett gépeink támogatják mind a nagy, mind a kis alkatrészek hatékony gyártását, lehetővé téve számunkra a különféle igények kielégítését." },
            metric: "95%",
            metricLabel: { en: "Efficiency Rate", hu: "Hatékonysági Arány" }
          }
        ]
      },
      challenges: {
        title: {
          en: "Navigating Complex Challenges",
          hu: "Összetett Kihívások Kezelése"
        },
        description: {
          en: "Throughout our partnership, we have successfully addressed several operational and market challenges that tested our adaptability and innovation.",
          hu: "Partnerségünk során sikeresen kezeltünk több működési és piaci kihívást, amelyek próbára tették alkalmazkodóképességünket és innovációnkat."
        },
        items: [
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: { en: "Order Volume Variability", hu: "Rendelési Volumen Változékonyság" },
            description: { en: "Fluctuations in order sizes driven by seasonal demand and market trends required flexible production planning.", hu: "A szezonális kereslet és piaci trendek által vezérelt rendelési méret ingadozások rugalmas gyártástervezést igényeltek." },
            impact: "High",
            severity: "challenging"
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: { en: "Material Quality Consistency", hu: "Anyagminőség Konzisztencia" },
            description: { en: "Ensuring consistent quality when working with recycled materials, which can vary in composition and properties.", hu: "Konzisztens minőség biztosítása újrahasznosított anyagokkal való munka során, amelyek összetételben és tulajdonságokban változhatnak." },
            impact: "Medium",
            severity: "moderate"
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            title: { en: "Packaging Costs", hu: "Csomagolási Költségek" },
            description: { en: "Balancing the need for sustainable packaging with the associated costs and logistics requirements.", hu: "A fenntartható csomagolás iránti igény és a kapcsolódó költségek és logisztikai követelmények közötti egyensúly megteremtése." },
            impact: "Low",
            severity: "manageable"
          }
        ]
      },
      solutions: {
        title: {
          en: "Innovative Solutions & Lessons Learned",
          hu: "Innovatív Megoldások és Tanulságok"
        },
        description: {
          en: "Our collaborative approach has yielded breakthrough solutions that not only addressed immediate challenges but also established best practices for future growth.",
          hu: "Együttműködő megközelítésünk áttörő megoldásokat eredményezett, amelyek nemcsak a azonnali kihívásokat kezelték, hanem a jövőbeli növekedés legjobb gyakorlatait is kialakították."
        },
        items: [
          {
            icon: <Cog className="w-6 h-6" />,
            title: { en: "Flexible Production Systems", hu: "Rugalmas Gyártási Rendszerek" },
            description: { en: "Implemented modular production lines that can quickly adapt to varying order volumes and product specifications.", hu: "Moduláris gyártósorok bevezetése, amelyek gyorsan alkalmazkodhatnak a változó rendelési volumenekhez és termékspecifikációkhoz." },
            result: { en: "50% faster adaptation", hu: "50%-kal gyorsabb alkalmazkodás" }
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: { en: "Advanced Quality Testing", hu: "Fejlett Minőségi Tesztelés" },
            description: { en: "Developed comprehensive testing protocols for recycled materials to ensure consistent performance and quality.", hu: "Átfogó tesztelési protokollok kifejlesztése újrahasznosított anyagokhoz a konzisztens teljesítmény és minőség biztosítása érdekében." },
            result: { en: "99.8% quality consistency", hu: "99,8%-os minőségi konzisztencia" }
          },
          {
            icon: <Recycle className="w-6 h-6" />,
            title: { en: "Sustainable Packaging Innovation", hu: "Fenntartható Csomagolási Innováció" },
            description: { en: "Created cost-effective eco-friendly packaging solutions that reduce environmental impact while maintaining protection.", hu: "Költséghatékony környezetbarát csomagolási megoldások létrehozása, amelyek csökkentik a környezeti hatást, miközben fenntartják a védelmet." },
            result: { en: "35% cost reduction", hu: "35%-os költségcsökkentés" }
          }
        ]
      }
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'challenging': return 'from-red-500 to-orange-500';
      case 'moderate': return 'from-yellow-500 to-orange-500';
      case 'manageable': return 'from-green-500 to-blue-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            {resultsContent.badge[language]}
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: resultsContent.title[language] }}
          />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex bg-gray-100 rounded-full p-1">
            {Object.entries(resultsContent.tabs).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                data-hover="true"
              >
                {tab.icon}
                <span className="font-medium">{tab.label[language]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {resultsContent.content[activeTab].title[language]}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {resultsContent.content[activeTab].description[language]}
            </p>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resultsContent.content[activeTab].items.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${
                  activeTab === 'challenges' ? getSeverityColor(item.severity) : 'from-blue-500 to-cyan-500'
                } text-white rounded-xl mb-6 shadow-lg`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title[language]}
                </h4>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description[language]}
                </p>

                {/* Metric/Result/Impact */}
                {item.metric && (
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="text-sm font-medium text-blue-600">
                      {item.metricLabel[language]}
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      {item.metric}
                    </span>
                  </div>
                )}

                {item.impact && (
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-600">
                      {language === 'hu' ? "Hatás szintje" : "Impact Level"}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.impact === 'High' ? 'bg-red-100 text-red-600' :
                      item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {item.impact}
                    </span>
                  </div>
                )}

                {item.result && (
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <span className="text-sm font-medium text-green-600">
                      {language === 'hu' ? "Eredmény" : "Result"}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {item.result[language]}
                    </span>
                  </div>
                )}

                {/* Hover decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;