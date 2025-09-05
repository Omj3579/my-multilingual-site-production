import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Globe,
  Users,
  Building,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
  ExternalLink,
  Handshake,
  Target,
  Zap,
  CheckCircle,
  Briefcase,
  Factory,        // Add this missing import
  Truck,          // Add this missing import
  Heart,          // Add this missing import
  Network,        // Add this missing import
  Search,         // Add this missing import
  Grid3X3,        // Add this missing import
  Map,            // Add this missing import
  Clock,          // Add this missing import
  Star,           // Add this missing import
  Activity,       // Add this missing import
  Mail,           // Add this missing import
  Phone,          // Add this missing import
  DollarSign      // Add this missing import
} from 'lucide-react';
import Image from 'next/image';

const GlobalPartnerships = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const networkRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [activePartner, setActivePartner] = useState(null);
  const [viewMode, setViewMode] = useState('network'); // 'network', 'grid', 'map', 'timeline'
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [animatingConnections, setAnimatingConnections] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [partnershipStats, setPartnershipStats] = useState({});

  // Advanced mouse tracking for 3D network interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 300, damping: 100 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 300, damping: 100 });

  // Scroll-based transforms
  const networkScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const partnershipsContent = {
    badge: {
      en: "Global Partnership Network",
      hu: "Globális Partnerségi Hálózat"
    },
    title: {
      en: "Powering Innovation Through<br/><span class='network-gradient'>Strategic Alliances</span>",
      hu: "Innováció Hajtása<br/><span class='network-gradient'>Stratégiai Szövetségekkel</span>"
    },
    subtitle: {
      en: "Explore our worldwide network of 250+ strategic partners, collaborators, and innovation ecosystems driving sustainable manufacturing excellence across 5 continents.",
      hu: "Fedezze fel világméretű hálózatunkat 250+ stratégiai partnerrel, együttműködővel és innovációs ökoszisztémával, amely fenntartható gyártási kiválóságot hajt 5 kontinensen."
    },
    stats: {
      totalPartners: 254,
      activeProjects: 89,
      countriesReached: 67,
      innovationHubs: 15,
      sustainabilityInitiatives: 43,
      revenueGenerated: 2.8, // billions
      jobsCreated: 12450,
      patentsShared: 156
    },
    categories: [
      {
        id: 'all',
        name: { en: 'All Partners', hu: 'Minden Partner' },
        icon: <Globe className="w-5 h-5" />,
        count: 254
      },
      {
        id: 'manufacturers',
        name: { en: 'Manufacturers', hu: 'Gyártók' },
        icon: <Factory className="w-5 h-5" />,
        count: 89
      },
      {
        id: 'distributors',
        name: { en: 'Distributors', hu: 'Forgalmazók' },
        icon: <Truck className="w-5 h-5" />,
        count: 67
      },
      {
        id: 'retailers',
        name: { en: 'Retailers', hu: 'Kiskereskedők' },
        icon: <Building className="w-5 h-5" />,
        count: 54
      },
      {
        id: 'tech-partners',
        name: { en: 'Technology Partners', hu: 'Technológiai Partnerek' },
        icon: <Zap className="w-5 h-5" />,
        count: 32
      },
      {
        id: 'sustainability',
        name: { en: 'Sustainability Partners', hu: 'Fenntarthatósági Partnerek' },
        icon: <Heart className="w-5 h-5" />,
        count: 12
      }
    ],
    keyPartners: [
      {
        id: 'ikea',
        name: 'IKEA',
        logo: '/images/partners/ikea-logo.svg',
        category: 'retailers',
        region: 'europe',
        country: 'Sweden',
        since: '2018',
        status: 'strategic',
        relationship: 'exclusive',
        description: {
          en: 'Global furniture retailer focusing on sustainable home solutions and innovative design partnerships.',
          hu: 'Globális bútor kiskereskedő, amely fenntartható otthoni megoldásokra és innovatív tervezési partnerségekre összpontosít.'
        },
        collaboration: {
          en: 'Co-development of recyclable kitchen containers and sustainable storage solutions',
          hu: 'Újrahasznosítható konyhai tárolók és fenntartható tárolási megoldások közös fejlesztése'
        },
        impact: {
          revenue: 450, // millions
          products: 156,
          sustainability: 89,
          innovation: 12
        },
        coordinates: [59.3293, 18.0686],
        connectionStrength: 95,
        projects: [
          {
            name: { en: 'VARIERA Kitchen Series', hu: 'VARIERA Konyhai Sorozat' },
            status: 'completed',
            impact: 'High'
          },
          {
            name: { en: 'Circular Storage Initiative', hu: 'Körforgásos Tárolási Kezdeményezés' },
            status: 'ongoing',
            impact: 'Very High'
          },
          {
            name: { en: 'Smart Home Integration', hu: 'Okos Otthon Integráció' },
            status: 'planning',
            impact: 'Medium'
          }
        ],
        contact: {
          primaryContact: 'Maria Andersson',
          role: 'Partnership Director',
          email: 'maria.andersson@ikea.com',
          phone: '+46 8 519 000 00'
        }
      },
      {
        id: 'unilever',
        name: 'Unilever',
        logo: '/images/partners/unilever-logo.svg',
        category: 'manufacturers',
        region: 'europe',
        country: 'Netherlands',
        since: '2019',
        status: 'strategic',
        relationship: 'preferred',
        description: {
          en: 'Multinational consumer goods company committed to sustainable living and environmental responsibility.',
          hu: 'Multinacionális fogyasztási cikkek gyártója, amely elkötelezett a fenntartható életmód és környezeti felelősség mellett.'
        },
        collaboration: {
          en: 'Development of eco-friendly packaging solutions for personal care products',
          hu: 'Környezetbarát csomagolási megoldások fejlesztése személyi higiéniai termékekhez'
        },
        impact: {
          revenue: 680,
          products: 234,
          sustainability: 94,
          innovation: 18
        },
        coordinates: [52.3676, 4.9041],
        connectionStrength: 92,
        projects: [
          {
            name: { en: 'Sustainable Packaging Revolution', hu: 'Fenntartható Csomagolási Forradalom' },
            status: 'ongoing',
            impact: 'Very High'
          },
          {
            name: { en: 'Refillable Container System', hu: 'Újratölthető Tárolórendszer' },
            status: 'completed',
            impact: 'High'
          },
          {
            name: { en: 'Biodegradable Materials Research', hu: 'Biológiailag Lebomló Anyagok Kutatása' },
            status: 'planning',
            impact: 'Very High'
          }
        ],
        contact: {
          primaryContact: 'James Wilson',
          role: 'Sustainable Innovation Lead',
          email: 'james.wilson@unilever.com',
          phone: '+31 20 217 4000'
        }
      },
      {
        id: 'walmart',
        name: 'Walmart',
        logo: '/images/partners/walmart-logo.svg',
        category: 'retailers',
        region: 'americas',
        country: 'United States',
        since: '2020',
        status: 'strategic',
        relationship: 'volume',
        description: {
          en: 'World\'s largest retailer driving sustainability initiatives and supply chain innovation.',
          hu: 'A világ legnagyobb kiskereskedője, amely fenntarthatósági kezdeményezéseket és ellátási lánc innovációt hajt.'
        },
        collaboration: {
          en: 'Large-scale deployment of sustainable household products across North American markets',
          hu: 'Fenntartható háztartási termékek nagyszabású telepítése észak-amerikai piacokon'
        },
        impact: {
          revenue: 1200,
          products: 567,
          sustainability: 76,
          innovation: 8
        },
        coordinates: [36.3741, -94.2088],
        connectionStrength: 88,
        projects: [
          {
            name: { en: 'Project Gigaton', hu: 'Gigaton Projekt' },
            status: 'ongoing',
            impact: 'Very High'
          },
          {
            name: { en: 'Zero Waste Initiative', hu: 'Nulla Hulladék Kezdeményezés' },
            status: 'completed',
            impact: 'High'
          },
          {
            name: { en: 'Smart Packaging Solutions', hu: 'Okos Csomagolási Megoldások' },
            status: 'ongoing',
            impact: 'Medium'
          }
        ],
        contact: {
          primaryContact: 'Sarah Johnson',
          role: 'Global Sourcing Director',
          email: 'sarah.johnson@walmart.com',
          phone: '+1 479 273 4000'
        }
      },
      {
        id: 'toyota',
        name: 'Toyota Motor Corporation',
        logo: '/images/partners/toyota-logo.svg',
        category: 'manufacturers',
        region: 'asia',
        country: 'Japan',
        since: '2021',
        status: 'innovation',
        relationship: 'technology',
        description: {
          en: 'Leading automotive manufacturer pioneering sustainable mobility and lean manufacturing principles.',
          hu: 'Vezető autógyártó, amely a fenntartható mobilitás és a lean gyártási elvek úttörője.'
        },
        collaboration: {
          en: 'Joint development of lightweight, sustainable automotive interior components',
          hu: 'Könnyű, fenntartható autóipari belső komponensek közös fejlesztése'
        },
        impact: {
          revenue: 320,
          products: 89,
          sustainability: 91,
          innovation: 24
        },
        coordinates: [35.6762, 139.6503],
        connectionStrength: 85,
        projects: [
          {
            name: { en: 'Eco-Interior Components', hu: 'Öko Belső Komponensek' },
            status: 'ongoing',
            impact: 'High'
          },
          {
            name: { en: 'Carbon Neutral Manufacturing', hu: 'Szén-semleges Gyártás' },
            status: 'planning',
            impact: 'Very High'
          },
          {
            name: { en: 'Circular Material Loop', hu: 'Körforgásos Anyaghurok' },
            status: 'completed',
            impact: 'Medium'
          }
        ],
        contact: {
          primaryContact: 'Hiroshi Tanaka',
          role: 'Innovation Partnership Manager',
          email: 'h.tanaka@toyota.com',
          phone: '+81 3 3817 7111'
        }
      },
      {
        id: 'basf',
        name: 'BASF',
        logo: '/images/partners/basf-logo.svg',
        category: 'tech-partners',
        region: 'europe',
        country: 'Germany',
        since: '2017',
        status: 'research',
        relationship: 'innovation',
        description: {
          en: 'World\'s largest chemical company focusing on sustainable chemistry and material science innovation.',
          hu: 'A világ legnagyobb vegyipari vállalata, amely fenntartható kémiára és anyagtudományi innovációra összpontosít.'
        },
        collaboration: {
          en: 'Advanced polymer research and development of next-generation biodegradable materials',
          hu: 'Fejlett polimer kutatás és következő generációs biológiailag lebomló anyagok fejlesztése'
        },
        impact: {
          revenue: 180,
          products: 45,
          sustainability: 97,
          innovation: 31
        },
        coordinates: [49.4925, 8.4614],
        connectionStrength: 93,
        projects: [
          {
            name: { en: 'Next-Gen Bioplastics', hu: 'Következő Generációs Bioműanyagok' },
            status: 'ongoing',
            impact: 'Very High'
          },
          {
            name: { en: 'Chemical Recycling Innovation', hu: 'Kémiai Újrahasznosítási Innováció' },
            status: 'completed',
            impact: 'High'
          },
          {
            name: { en: 'Smart Material Development', hu: 'Okos Anyagfejlesztés' },
            status: 'planning',
            impact: 'Very High'
          }
        ],
        contact: {
          primaryContact: 'Dr. Klaus Mueller',
          role: 'R&D Partnership Director',
          email: 'klaus.mueller@basf.com',
          phone: '+49 621 60 0'
        }
      },
      {
        id: 'amazon',
        name: 'Amazon',
        logo: '/images/partners/amazon-logo.svg',
        category: 'distributors',
        region: 'americas',
        country: 'United States',
        since: '2022',
        status: 'strategic',
        relationship: 'distribution',
        description: {
          en: 'Global e-commerce and cloud computing leader driving digital transformation and sustainable logistics.',
          hu: 'Globális e-kereskedelem és felhőalapú számítástechnika vezető, amely digitális átalakulást és fenntartható logisztikát hajt.'
        },
        collaboration: {
          en: 'Sustainable packaging solutions for e-commerce and climate pledge fulfillment centers',
          hu: 'Fenntartható csomagolási megoldások e-kereskedelemhez és klímavállalás teljesítési központokhoz'
        },
        impact: {
          revenue: 890,
          products: 345,
          sustainability: 82,
          innovation: 15
        },
        coordinates: [47.6062, -122.3321],
        connectionStrength: 87,
        projects: [
          {
            name: { en: 'Climate Pledge Packaging', hu: 'Klímavállalás Csomagolás' },
            status: 'ongoing',
            impact: 'Very High'
          },
          {
            name: { en: 'Frustration-Free Packaging', hu: 'Problémamentes Csomagolás' },
            status: 'completed',
            impact: 'High'
          },
          {
            name: { en: 'AI-Optimized Logistics', hu: 'AI-Optimalizált Logisztika' },
            status: 'planning',
            impact: 'Medium'
          }
        ],
        contact: {
          primaryContact: 'Michael Chen',
          role: 'Sustainability Partnerships Lead',
          email: 'mchen@amazon.com',
          phone: '+1 206 266 1000'
        }
      }
    ],
    regions: [
      {
        id: 'global',
        name: { en: 'Global View', hu: 'Globális Nézet' },
        partners: 254,
        revenue: 3.8,
        coordinates: [0, 0]
      },
      {
        id: 'europe',
        name: { en: 'Europe', hu: 'Európa' },
        partners: 89,
        revenue: 1.4,
        coordinates: [54.5260, 15.2551]
      },
      {
        id: 'americas',
        name: { en: 'Americas', hu: 'Amerika' },
        partners: 76,
        revenue: 1.6,
        coordinates: [54.5260, -105.2551]
      },
      {
        id: 'asia',
        name: { en: 'Asia Pacific', hu: 'Ázsia-Csendes-óceán' },
        partners: 65,
        revenue: 0.6,
        coordinates: [34.0479, 100.6197]
      },
      {
        id: 'africa',
        name: { en: 'Africa', hu: 'Afrika' },
        partners: 18,
        revenue: 0.15,
        coordinates: [0.7893, 11.8846]
      },
      {
        id: 'oceania',
        name: { en: 'Oceania', hu: 'Óceánia' },
        partners: 6,
        revenue: 0.05,
        coordinates: [-25.2744, 133.7751]
      }
    ]
  };

  // Filter partners based on search and category
  const filteredPartners = partnershipsContent.keyPartners.filter(partner => {
    const matchesCategory = filterCategory === 'all' || partner.category === filterCategory;
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'global' || partner.region === selectedRegion;
    
    return matchesCategory && matchesSearch && matchesRegion;
  });

  // Animate partnership statistics
  useEffect(() => {
    const interval = setInterval(() => {
      setPartnershipStats(prev => {
        const stats = { ...partnershipsContent.stats };
        Object.keys(stats).forEach(key => {
          if (typeof stats[key] === 'number') {
            const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
            stats[key] = Math.max(0, stats[key] * (1 + variation));
          }
        });
        return stats;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!networkRef.current) return;
    const rect = networkRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const currentStats = Object.keys(partnershipStats).length > 0 ? partnershipStats : partnershipsContent.stats;

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,theme(colors.indigo.500/20),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,theme(colors.purple.500/20),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/images/network-pattern.svg')] opacity-5"></div>
        
        {/* Floating network nodes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full shadow-lg">
              {/* Connection lines */}
              <div className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-indigo-400/50 to-transparent transform -translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 w-15 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent transform -translate-y-1/2 -rotate-45"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          style={{ scale: networkScale }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-500/10 backdrop-blur-xl border border-indigo-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(99, 102,241, 0.3)',
                '0 0 40px rgba(139, 92, 246, 0.3)',
                '0 0 20px rgba(99, 102, 241, 0.3)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Network className="w-5 h-5 text-indigo-300" />
            <span className="text-indigo-200 font-semibold">
              {partnershipsContent.badge[language]}
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: partnershipsContent.title[language] }}
          />

          <motion.p 
            className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {partnershipsContent.subtitle[language]}
          </motion.p>

          <style jsx>{`
            .network-gradient {
              background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7, #c084fc, #e879f9);
              background-size: 400% 400%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: network-flow 10s ease-in-out infinite;
            }
            
            @keyframes network-flow {
              0%, 100% { background-position: 0% 50%; }
              20% { background-position: 100% 0%; }
              40% { background-position: 100% 100%; }
              60% { background-position: 0% 100%; }
              80% { background-position: 50% 50%; }
            }
          `}</style>
        </motion.div>

        {/* Statistics Dashboard */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[
            { key: 'totalPartners', label: { en: 'Partners', hu: 'Partnerek' }, icon: <Users className="w-5 h-5" />, suffix: '', color: 'from-blue-500 to-cyan-500' },
            { key: 'activeProjects', label: { en: 'Active Projects', hu: 'Aktív Projektek' }, icon: <Briefcase className="w-5 h-5" />, suffix: '', color: 'from-green-500 to-emerald-500' },
            { key: 'countriesReached', label: { en: 'Countries', hu: 'Országok' }, icon: <Globe className="w-5 h-5" />, suffix: '', color: 'from-purple-500 to-pink-500' },
            { key: 'innovationHubs', label: { en: 'Innovation Hubs', hu: 'Innovációs Központok' }, icon: <Zap className="w-5 h-5" />, suffix: '', color: 'from-yellow-500 to-orange-500' },
            { key: 'sustainabilityInitiatives', label: { en: 'Sustainability', hu: 'Fenntarthatóság' }, icon: <Heart className="w-5 h-5" />, suffix: '', color: 'from-emerald-500 to-green-500' },
            { key: 'revenueGenerated', label: { en: 'Revenue', hu: 'Bevétel' }, icon: <DollarSign className="w-5 h-5" />, suffix: 'B', color: 'from-indigo-500 to-purple-500' },
            { key: 'jobsCreated', label: { en: 'Jobs Created', hu: 'Létrehozott Állások' }, icon: <TrendingUp className="w-5 h-5" />, suffix: '', color: 'from-cyan-500 to-blue-500' },
            { key: 'patentsShared', label: { en: 'Shared Patents', hu: 'Megosztott Szabadalmak' }, icon: <Award className="w-5 h-5" />, suffix: '', color: 'from-pink-500 to-red-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.key}
              className={`bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br ${stat.color} bg-opacity-10`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)'
              }}
              data-hover="true"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 10px rgba(255,255,255,0.3)',
                    '0 0 20px rgba(99,102,241,0.5)',
                    '0 0 10px rgba(255,255,255,0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {typeof currentStats[stat.key] === 'number' 
                  ? `${currentStats[stat.key].toFixed(stat.key === 'revenueGenerated' ? 1 : 0)}${stat.suffix}`
                  : currentStats[stat.key]
                }
              </motion.div>
              
              <div className="text-sm text-indigo-200">
                {stat.label[language]}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Control Panel */}
        <motion.div 
          className="flex flex-wrap items-center justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Search and Filter */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-indigo-400" />
              <input
                type="text"
                placeholder={language === 'hu' ? 'Partnerek keresése...' : 'Search partners...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-black/20 backdrop-blur-xl border border-indigo-400/30 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:border-indigo-400 transition-all duration-300 w-64"
              />
            </div>

            <div className="flex bg-black/20 backdrop-blur-xl border border-indigo-400/30 rounded-xl p-1">
              {partnershipsContent.categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setFilterCategory(category.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filterCategory === category.id 
                      ? 'bg-indigo-500 text-white shadow-lg' 
                      : 'text-indigo-200 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  data-hover="true"
                >
                  {category.icon}
                  <span className="hidden md:block">{category.name[language]}</span>
                  <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* View Mode Selector */}
          <div className="flex bg-black/20 backdrop-blur-xl border border-indigo-400/30 rounded-xl p-1">
            {[
              { id: 'network', icon: <Network className="w-4 h-4" />, label: { en: 'Network', hu: 'Hálózat' } },
              { id: 'grid', icon: <Grid3X3 className="w-4 h-4" />, label: { en: 'Grid', hu: 'Rács' } },
              { id: 'map', icon: <Map className="w-4 h-4" />, label: { en: 'Map', hu: 'Térkép' } },
              { id: 'timeline', icon: <Clock className="w-4 h-4" />, label: { en: 'Timeline', hu: 'Idővonal' } }
            ].map((mode) => (
              <motion.button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id 
                    ? 'bg-indigo-500 text-white shadow-lg' 
                    : 'text-indigo-200 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                {mode.icon}
                <span className="hidden lg:block">{mode.label[language]}</span>
              </motion.button>
            ))}
          </div>

          {/* Region Selector */}
          <div className="flex bg-black/20 backdrop-blur-xl border border-indigo-400/30 rounded-xl p-1">
            {partnershipsContent.regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedRegion === region.id 
                    ? 'bg-indigo-500 text-white' 
                    : 'text-indigo-200 hover:bg-white/10'
                }`}
                data-hover="true"
              >
                {region.name[language]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          {viewMode === 'network' && (
            <motion.div
              key="network"
              ref={networkRef}
              className="relative"
              style={{ 
                rotateX, 
                rotateY,
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              {/* 3D Network Visualization */}
              <div className="relative h-96 bg-black/20 backdrop-blur-xl border border-indigo-400/30 rounded-3xl p-8 mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10"></div>
                
                {/* Central Hub */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl"
                  animate={animatingConnections ? {
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 20px rgba(99, 102, 241, 0.5)',
                      '0 0 40px rgba(139, 92, 246, 0.8)',
                      '0 0 20px rgba(99, 102, 241, 0.5)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  HQ
                </motion.div>

                {/* Partner Nodes */}
                {filteredPartners.slice(0, 8).map((partner, index) => {
                  const angle = (index / 8) * Math.PI * 2;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={partner.id}
                      className="absolute cursor-pointer group"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.2, z: 50 }}
                      onClick={() => setActivePartner(partner)}
                      data-hover="true"
                    >
                      {/* Connection Line */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-indigo-400/60 to-transparent"
                        style={{
                          width: `${radius}px`,
                          transform: `translate(-100%, -50%) rotate(${angle + Math.PI}rad)`
                        }}
                        animate={animatingConnections ? {
                          opacity: [0.3, 0.8, 0.3],
                          scaleX: [0.8, 1.2, 0.8]
                        } : {}}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      />
                      
                      {/* Partner Node */}
                      <div className={`w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden shadow-lg group-hover:border-indigo-400 transition-all duration-300 ${
                        partner.status === 'strategic' ? 'ring-2 ring-yellow-400' : ''
                      }`}>
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                      
                      {/* Partner Info Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                          <div className="font-medium">{partner.name}</div>
                          <div className="text-indigo-300">{partner.country}</div>
                          <div className="text-emerald-300">
                            ${partner.impact.revenue}M {language === 'hu' ? 'bevétel' : 'revenue'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection Strength Indicator */}
                      <motion.div 
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center text-xs font-bold text-white"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {Math.round(partner.connectionStrength / 10)}
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Network Statistics Overlay */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="text-white font-medium mb-2">
                    {language === 'hu' ? 'Hálózat Erősség' : 'Network Strength'}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '87%' }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                    <span className="text-emerald-300 text-sm font-bold">87%</span>
                  </div>
                </div>

                {/* Active Connections Counter */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-4 text-center">
                  <motion.div 
                    className="text-2xl font-bold text-indigo-300 mb-1"
                    animate={{
                      scale: [1, 1.1, 1],
                      color: ['#a5b4fc', '#6366f1', '#a5b4fc']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {filteredPartners.length}
                  </motion.div>
                  <div className="text-xs text-white">
                    {language === 'hu' ? 'Aktív Kapcsolat' : 'Active Connections'}
                  </div>
                </div>

                {/* Animation Toggle */}
                <motion.button
                  onClick={() => setAnimatingConnections(!animatingConnections)}
                  className={`absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    animatingConnections 
                      ? 'bg-green-500 text-white' 
                      : 'bg-black/60 text-indigo-300 hover:bg-black/80'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-hover="true"
                >
                  <Activity className={`w-5 h-5 ${animatingConnections ? 'animate-pulse' : ''}`} />
                </motion.button>
              </div>

              {/* Filtered Partners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPartners.map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    className="bg-black/20 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-6 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)'
                    }}
                    onClick={() => setActivePartner(partner)}
                    data-hover="true"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-white">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-white font-semibold">{partner.name}</h3>
                          {partner.status === 'strategic' && (
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-indigo-200">
                          <span>{partner.country}</span>
                          <span>•</span>
                          <span>{language === 'hu' ? 'Kezdete:' : 'Since'} {partner.since}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald-300">
                          ${partner.impact.revenue}M
                        </div>
                        <div className="text-xs text-indigo-200">
                          {language === 'hu' ? 'bevétel' : 'revenue'}
                        </div>
                      </div>
                    </div>

                    <p className="text-indigo-100 text-sm mb-4 line-clamp-3">
                      {partner.description[language]}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          partner.status === 'strategic' ? 'bg-yellow-400' :
                          partner.status === 'innovation' ? 'bg-purple-400' :
                          partner.status === 'research' ? 'bg-cyan-400' : 'bg-green-400'
                        }`}></div>
                        <span className="text-xs text-indigo-200 capitalize">
                          {partner.status}
                        </span>
                      </div>
                      
                      <motion.button 
                        className="text-indigo-300 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        data-hover="true"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Progress Indicators */}
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-indigo-300 mb-1">
                          {language === 'hu' ? 'Termékek' : 'Products'}
                        </div>
                        <div className="text-lg font-bold text-white">
                          {partner.impact.products}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-indigo-300 mb-1">
                          {language === 'hu' ? 'Fenntarthatóság' : 'Sustainability'}
                        </div>
                        <div className="text-lg font-bold text-emerald-300">
                          {partner.impact.sustainability}%
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-indigo-300 mb-1">
                          {language === 'hu' ? 'Innováció' : 'Innovation'}
                        </div>
                        <div className="text-lg font-bold text-purple-300">
                          {partner.impact.innovation}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Additional view modes would go here (grid, map, timeline) */}
        </AnimatePresence>

        {/* Partner Detail Modal */}
        <AnimatePresence>
          {activePartner && (
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePartner(null)}
            >
              <motion.div 
                className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-indigo-400/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Partner detail content would go here */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border border-indigo-400/30 bg-white">
                        <Image
                          src={activePartner.logo}
                          alt={activePartner.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {activePartner.name}
                        </h2>
                        <div className="flex items-center gap-4 text-indigo-200">
                          <span>{activePartner.country}</span>
                          <span>•</span>
                          <span>{language === 'hu' ? 'Partner kezdete:' : 'Partner since'} {activePartner.since}</span>
                          <span>•</span>
                          <span className="capitalize">{activePartner.status} {language === 'hu' ? 'partner' : 'partner'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setActivePartner(null)}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                      data-hover="true"
                    >
                      ×
                    </button>
                  </div>
                  
                  {/* Add comprehensive partner details here */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {language === 'hu' ? 'Partnerség Részletei' : 'Partnership Details'}
                      </h3>
                      <p className="text-indigo-100 leading-relaxed">
                        {activePartner.description[language]}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {language === 'hu' ? 'Együttműködés' : 'Collaboration'}
                      </h3>
                      <p className="text-indigo-100 leading-relaxed">
                        {activePartner.collaboration[language]}
                      </p>
                    </div>

                    {/* Projects */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {language === 'hu' ? 'Aktív Projektek' : 'Active Projects'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activePartner.projects.map((project, index) => (
                          <div key={index} className="bg-white/5 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-white">
                                {project.name[language]}
                              </h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                project.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                                project.status === 'ongoing' ? 'bg-blue-500/20 text-blue-300' :
                                'bg-gray-500/20 text-gray-300'
                              }`}>
                                {project.status === 'completed' && (language === 'hu' ? 'Befejezve' : 'Completed')}
                                {project.status === 'ongoing' && (language === 'hu' ? 'Folyamatban' : 'Ongoing')}
                                {project.status === 'planning' && (language === 'hu' ? 'Tervezés' : 'Planning')}
                              </span>
                            </div>
                            <div className="text-sm text-indigo-200">
                              {language === 'hu' ? 'Hatás:' : 'Impact:'} {project.impact}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {language === 'hu' ? 'Kapcsolattartó' : 'Contact Information'}
                      </h3>
                      <div className="bg-white/5 rounded-xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                            {activePartner.contact.primaryContact.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-white font-medium">
                              {activePartner.contact.primaryContact}
                            </div>
                            <div className="text-indigo-200 text-sm">
                              {activePartner.contact.role}
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-indigo-300" />
                            <span className="text-indigo-100 text-sm">
                              {activePartner.contact.email}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-indigo-300" />
                            <span className="text-indigo-100 text-sm">
                              {activePartner.contact.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GlobalPartnerships;