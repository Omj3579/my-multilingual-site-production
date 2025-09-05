import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// Add proper TypeScript interface for the milestone prop
interface Milestone {
  year: string;
  title: { en: string; hu: string };
  description: { en: string; hu: string };
}

interface TimelineMilestoneProps {
  milestone: Milestone;
  isEven: boolean;
  index: number;
  inView: boolean;
  language: string;
}

const PartnershipJourney = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  // Journey milestones
  const milestones = [
    {
      year: "2012",
      title: { 
        en: "Initial Partnership", 
        hu: "Kezdeti partnerség" 
      },
      description: { 
        en: "Began supplying specialized components for garden tool prototypes, establishing quality standards that would define our collaboration.", 
        hu: "Megkezdtük a speciális alkatrészek szállítását a kerti szerszám prototípusokhoz, meghatározva azokat a minőségi szabványokat, amelyek együttműködésünket jellemzik." 
      }
    },
    {
      year: "2014",
      title: { 
        en: "Full Production Integration", 
        hu: "Teljes gyártási integráció" 
      },
      description: { 
        en: "Scaled production to meet growing demand, integrating our manufacturing processes directly with the partner's supply chain.", 
        hu: "Gyártási kapacitásunkat a növekvő kereslethez igazítottuk, és gyártási folyamatainkat közvetlenül integráltuk a partner ellátási láncába." 
      }
    },
    {
      year: "2017",
      title: { 
        en: "Sustainability Initiative", 
        hu: "Fenntarthatósági kezdeményezés" 
      },
      description: { 
        en: "Jointly launched a program to incorporate recycled materials into product lines, reducing environmental impact without compromising quality.", 
        hu: "Közösen indítottunk programot az újrahasznosított anyagok terméksorokba való beépítésére, csökkentve a környezeti hatást a minőség veszélyeztetése nélkül." 
      }
    },
    {
      year: "2019",
      title: { 
        en: "Innovation Breakthrough", 
        hu: "Innovációs áttörés" 
      },
      description: { 
        en: "Co-developed a proprietary material blend that enhanced durability while reducing weight, leading to award-winning product releases.", 
        hu: "Közösen fejlesztettünk ki egy szabadalmaztatott anyagkeveréket, amely növelte a tartósságot a súly csökkentése mellett, díjnyertes termékek megjelenéséhez vezetve." 
      }
    },
    {
      year: "2022",
      title: { 
        en: "Expanded Collaboration", 
        hu: "Kibővített együttműködés" 
      },
      description: { 
        en: "Extended our partnership to include assembly services, further integrating our capabilities into the partner's manufacturing ecosystem.", 
        hu: "Partnerségünket kiterjesztettük az összeszerelési szolgáltatásokra is, tovább integrálva képességeinket a partner gyártási ökoszisztémájába." 
      }
    },
    {
      year: "2025",
      title: { 
        en: "Future Vision", 
        hu: "Jövőkép" 
      },
      description: { 
        en: "Currently exploring next-generation materials and IoT integration for smart garden tools, setting the stage for the next decade of innovation.", 
        hu: "Jelenleg új generációs anyagokat és IoT-integrációt vizsgálunk intelligens kerti szerszámokhoz, megalapozva az innováció következő évtizedét." 
      }
    }
  ];

  return (
    <section id="partnership" className="py-24 bg-gray-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium tracking-wide mb-3">
            {language === 'hu' ? "Partnerségi utazás" : "Partnership Journey"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {language === 'hu' ? "Évtizedes növekedés" : "A Decade of Growth"}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {language === 'hu' 
              ? "Közös utunk a kezdeti együttműködéstől a mély stratégiai partnerségig, amely az iparági innovációt formálja."
              : "Our journey from initial collaboration to a deep strategic partnership that shapes industry innovation."
            }
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-amber-300"></div>
          
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <TimelineMilestone 
                key={index}
                milestone={milestone}
                isEven={index % 2 === 0}
                index={index}
                inView={isInView}
                language={language}
              />
            ))}
          </div>
          
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: [0, 1.2, 1] } : {}}
            transition={{ duration: 0.5, delay: milestones.length * 0.2 }}
          >
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-300/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Individual timeline milestone component with proper TypeScript props
const TimelineMilestone: React.FC<TimelineMilestoneProps> = ({ milestone, isEven, index, inView, language }) => {
  return (
    <div className="relative">
      {/* Year marker */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 }}
      >
        <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-amber-300/30">
          {milestone.year}
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          className={cn(
            "bg-white p-8 rounded-2xl shadow-lg md:col-span-1",
            isEven ? "md:col-start-1" : "md:col-start-2"
          )}
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {milestone.title[language === 'hu' ? 'hu' : 'en']}
          </h3>
          <p className="text-gray-600">
            {milestone.description[language === 'hu' ? 'hu' : 'en']}
          </p>
        </motion.div>
        
        {/* Empty space for alternating layout */}
        <div className={cn(
          "hidden md:block",
          isEven ? "md:col-start-2" : "md:col-start-1"
        )}></div>
      </div>
    </div>
  );
};

export default PartnershipJourney;