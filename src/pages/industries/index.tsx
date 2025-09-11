import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { SEOHead } from '../../lib/seo/SEOHead';
import { Language } from '../../lib/seo/config';

// Complete list of all 19 industries we serve
const INDUSTRIES_LIST = [
  {
    key: 'power-tools',
    nameEn: 'Power Tools',
    nameHu: 'Elektromos Szerszámok',
    nameDe: 'Elektrowerkzeuge',
    descriptionEn: 'Precision plastic components for professional power tools',
    descriptionHu: 'Precíziós műanyag alkatrészek professzionális elektromos szerszámokhoz',
    descriptionDe: 'Präzisions-Kunststoffkomponenten für professionelle Elektrowerkzeuge',
    icon: '🔧'
  },
  {
    key: 'household-products',
    nameEn: 'Household Products',
    nameHu: 'Háztartási Termékek',
    nameDe: 'Haushaltsprodukte',
    descriptionEn: 'Kitchen appliances, storage solutions, and home organization products',
    descriptionHu: 'Konyhai készülékek, tárolási megoldások és otthoni szervezési termékek',
    descriptionDe: 'Küchengeräte, Aufbewahrungslösungen und Hausorganisationsprodukte',
    icon: '🏠'
  },
  {
    key: 'hygiene-personal-care',
    nameEn: 'Hygiene & Personal Care',
    nameHu: 'Higiénia és Személyi Ápolás',
    nameDe: 'Hygiene & Körperpflege',
    descriptionEn: 'Premium packaging and components for personal care products',
    descriptionHu: 'Prémium csomagolás és alkatrészek személyi ápolási termékekhez',
    descriptionDe: 'Premium-Verpackungen und Komponenten für Körperpflegeprodukte',
    icon: '🧴'
  },
  {
    key: 'food-beverage-packaging',
    nameEn: 'Food & Beverage Packaging',
    nameHu: 'élelmiszer és Ital Csomagolás',
    nameDe: 'Lebensmittel & Getränkeverpackung',
    descriptionEn: 'Food-safe plastic packaging solutions for the F&B industry',
    descriptionHu: 'Élelmiszer-biztonságos műanyag csomagolási megoldások az F&B ipar számára',
    descriptionDe: 'Lebensmittelsichere Kunststoffverpackungslösungen für die F&B-Industrie',
    icon: '🥤'
  },
  {
    key: 'toys-recreational-products',
    nameEn: 'Toys & Recreational Products',
    nameHu: 'Játékok és Rekreációs Termékek',
    nameDe: 'Spielwaren & Freizeitprodukte',
    descriptionEn: 'Safe, durable plastic components for toys and recreational items',
    descriptionHu: 'Biztonságos, tartós műanyag alkatrészek játékokhoz és rekreációs cikkekhez',
    descriptionDe: 'Sichere, langlebige Kunststoffkomponenten für Spielwaren und Freizeitartikel',
    icon: '🎲'
  },
  {
    key: 'industrial-equipment-machinery',
    nameEn: 'Industrial Equipment & Machinery',
    nameHu: 'Ipari Berendezések és Gépek',
    nameDe: 'Industrielle Ausrüstung & Maschinen',
    descriptionEn: 'Heavy-duty plastic components for industrial applications',
    descriptionHu: 'Nagy teljesítményű műanyag alkatrészek ipari alkalmazásokhoz',
    descriptionDe: 'Hochleistungs-Kunststoffkomponenten für industrielle Anwendungen',
    icon: '⚙️'
  },
  {
    key: 'electronics-electrical-components',
    nameEn: 'Electronics & Electrical Components',
    nameHu: 'Elektronikai és Elektromos Alkatrészek',
    nameDe: 'Elektronik & Elektrische Komponenten',
    descriptionEn: 'Precision housings and components for electronic devices',
    descriptionHu: 'Precíziós burkolatok és alkatrészek elektronikai eszközökhöz',
    descriptionDe: 'Präzisions-Gehäuse und Komponenten für elektronische Geräte',
    icon: '⚡'
  },
  {
    key: 'construction-building-materials',
    nameEn: 'Construction & Building Materials',
    nameHu: 'Építőipar és Építőanyagok',
    nameDe: 'Bau & Baumaterialien',
    descriptionEn: 'Durable plastic solutions for construction and building applications',
    descriptionHu: 'Tartós műanyag megoldások építési és építőipari alkalmazásokhoz',
    descriptionDe: 'Langlebige Kunststofflösungen für Bau- und Gebäudeanwendungen',
    icon: '🏗️'
  },
  {
    key: 'furniture-home-decor',
    nameEn: 'Furniture & Home Decor',
    nameHu: 'Bútorok és Lakberendezés',
    nameDe: 'Möbel & Wohnkultur',
    descriptionEn: 'Stylish and functional plastic components for furniture and decor',
    descriptionHu: 'Stílusos és funkcionális műanyag alkatrészek bútorokhoz és dekorációkhoz',
    descriptionDe: 'Stilvolle und funktionale Kunststoffkomponenten für Möbel und Dekoration',
    icon: '🪑'
  },
  {
    key: 'sporting-goods-outdoor-equipment',
    nameEn: 'Sporting Goods & Outdoor Equipment',
    nameHu: 'Sportcikkek és Kültéri Felszerelések',
    nameDe: 'Sportartikel & Outdoor-Ausrüstung',
    descriptionEn: 'Weather-resistant components for sports and outdoor activities',
    descriptionHu: 'Időjárásálló alkatrészek sporthoz és szabadtéri tevékenységekhez',
    descriptionDe: 'Wetterbeständige Komponenten für Sport- und Outdoor-Aktivitäten',
    icon: '⚽'
  },
  {
    key: 'gardening-tools-accessories',
    nameEn: 'Gardening Tools & Accessories',
    nameHu: 'Kertészeti Eszközök és Kiegészítők',
    nameDe: 'Gartenwerkzeuge & Zubehör',
    descriptionEn: 'Durable plastic components for gardening tools and accessories',
    descriptionHu: 'Tartós műanyag alkatrészek kertészeti eszközökhöz és kiegészítőkhöz',
    descriptionDe: 'Langlebige Kunststoffkomponenten für Gartenwerkzeuge und Zubehör',
    icon: '🌱'
  },
  {
    key: 'cleaning-tools-accessories',
    nameEn: 'Cleaning Tools & Accessories',
    nameHu: 'Takarítóeszközök és Kiegészítők',
    nameDe: 'Reinigungswerkzeuge & Zubehör',
    descriptionEn: 'Chemical-resistant plastic components for cleaning equipment',
    descriptionHu: 'Vegyszerálló műanyag alkatrészek takarítóberendezésekhez',
    descriptionDe: 'Chemikalienbeständige Kunststoffkomponenten für Reinigungsgeräte',
    icon: '🧹'
  },
  {
    key: 'pet-products-accessories',
    nameEn: 'Pet Products & Accessories',
    nameHu: 'Kisállat Termékek és Kiegészítők',
    nameDe: 'Haustierbedarf & Zubehör',
    descriptionEn: 'Safe, durable plastic products for pets and animal care',
    descriptionHu: 'Biztonságos, tartós műanyag termékek kisállatokhoz és állatok gondozásához',
    descriptionDe: 'Sichere, langlebige Kunststoffprodukte für Haustiere und Tierpflege',
    icon: '🐕'
  },
  {
    key: 'office-school-supplies',
    nameEn: 'Office & School Supplies',
    nameHu: 'Irodai és Iskolai Kellékek',
    nameDe: 'Büro- & Schulbedarf',
    descriptionEn: 'Functional plastic components for office and educational products',
    descriptionHu: 'Funkcionális műanyag alkatrészek irodai és oktatási termékekhez',
    descriptionDe: 'Funktionale Kunststoffkomponenten für Büro- und Bildungsprodukte',
    icon: '📚'
  },
  {
    key: 'textile-apparel-accessories',
    nameEn: 'Textile, Apparel & Accessories',
    nameHu: 'Textíliák, Ruházat és Kiegészítők',
    nameDe: 'Textilien, Bekleidung & Accessoires',
    descriptionEn: 'Precision components for fashion and textile applications',
    descriptionHu: 'Precíziós alkatrészek divat és textilipari alkalmazásokhoz',
    descriptionDe: 'Präzisions-Komponenten für Mode- und Textilanwendungen',
    icon: '👕'
  },
  {
    key: 'packaging-materials-solutions',
    nameEn: 'Packaging Materials & Solutions',
    nameHu: 'Csomagolóanyagok és Megoldások',
    nameDe: 'Verpackungsmaterialien & Lösungen',
    descriptionEn: 'Innovative packaging solutions across multiple industries',
    descriptionHu: 'Innovatív csomagolási megoldások több iparág számára',
    descriptionDe: 'Innovative Verpackungslösungen für verschiedene Branchen',
    icon: '📦'
  },
  {
    key: 'promotional-gifts-novelty-items',
    nameEn: 'Promotional Gifts & Novelty Items',
    nameHu: 'Promóciós Ajándékok és Újdonság Cikkek',
    nameDe: 'Werbegeschenke & Neuheitenprodukte',
    descriptionEn: 'Custom plastic products for promotional and gift applications',
    descriptionHu: 'Egyedi műanyag termékek promóciós és ajándék alkalmazásokhoz',
    descriptionDe: 'Individuelle Kunststoffprodukte für Werbe- und Geschenkanwendungen',
    icon: '🎁'
  },
  {
    key: 'automotive-transportation',
    nameEn: 'Automotive & Transportation',
    nameHu: 'Gépjármű és Szállítás',
    nameDe: 'Automobil & Transport',
    descriptionEn: 'High-performance plastic components for vehicle applications',
    descriptionHu: 'Nagy teljesítményű műanyag alkatrészek járműipari alkalmazásokhoz',
    descriptionDe: 'Hochleistungs-Kunststoffkomponenten für Fahrzeuganwendungen',
    icon: '🚗'
  },
  {
    key: 'agricultural-farming-equipment',
    nameEn: 'Agricultural & Farming Equipment',
    nameHu: 'Mezőgazdasági és Gazdálkodási Felszerelések',
    nameDe: 'Landwirtschaftliche & Farmausrüstung',
    descriptionEn: 'Weather-resistant components for agricultural applications',
    descriptionHu: 'Időjárásálló alkatrészek mezőgazdasági alkalmazásokhoz',
    descriptionDe: 'Wetterbeständige Komponenten für landwirtschaftliche Anwendungen',
    icon: '🚜'
  }
];

interface IndustriesPageProps {
  locale: Language;
}

const IndustriesPage: React.FC<IndustriesPageProps> = ({ locale }) => {
  const seoTitle = {
    en: 'Industries We Serve - Manufacturing Excellence Across 19 Sectors | Flair Plastic',
    hu: 'Szolgált Iparágak - Gyártási Kiválóság 19 Szektorban | Flair Plastic',
    de: 'Branchen die wir bedienen - Fertigungsexzellenz in 19 Sektoren | Flair Plastic'
  };

  const seoDescription = {
    en: 'Discover our manufacturing expertise across 19 industries: power tools, household products, hygiene & personal care, food packaging, and more. Premium injection Moulding solutions.',
    hu: 'Fedezze fel gyártási szakértelmünket 19 iparágban: elektromos szerszámok, háztartási termékek, higiénia és személyi ápolás, élelmiszer-csomagolás és még sok más. Prémium fröccsöntési megoldások.',
    de: 'Entdecken Sie unsere Fertigungsexpertise in 19 Branchen: Elektrowerkzeuge, Haushaltsprodukte, Hygiene & Körperpflege, Lebensmittelverpackungen und mehr. Premium-Spritzgusslösungen.'
  };

  const pageTitle = {
    en: 'Industries We Serve',
    hu: 'Szolgált Iparágak',
    de: 'Branchen die wir bedienen'
  };

  const pageSubtitle = {
    en: 'Manufacturing Excellence Across 19 Industries',
    hu: 'Gyártási Kiválóság 19 Iparágban',
    de: 'Fertigungsexzellenz in 19 Branchen'
  };

  const pageDescription = {
    en: 'From power tools to household products, we deliver precision plastic manufacturing solutions across diverse industries. Explore our expertise and discover how we can transform your product vision into reality.',
    hu: 'Az elektromos szerszámoktól a háztartási termékekig, precíziós műanyag gyártási megoldásokat szállítunk változatos iparágakban. Fedezze fel szakértelmünket és látja meg, hogyan alakíthatjuk termékvízióját valósággá.',
    de: 'Von Elektrowerkzeugen bis zu Haushaltsprodukten liefern wir präzise Kunststoff-Fertigungslösungen für verschiedene Branchen. Entdecken Sie unsere Expertise und sehen Sie, wie wir Ihre Produktvision in die Realität umsetzen können.'
  };

  const ctaText = {
    en: 'Learn More',
    hu: 'Tudjon Meg Többet',
    de: 'Mehr Erfahren'
  };

  const getName = (industry: typeof INDUSTRIES_LIST[0]) => {
    switch (locale) {
      case 'hu': return industry.nameHu;
      case 'de': return industry.nameDe;
      default: return industry.nameEn;
    }
  };

  const getDescription = (industry: typeof INDUSTRIES_LIST[0]) => {
    switch (locale) {
      case 'hu': return industry.descriptionHu;
      case 'de': return industry.descriptionDe;
      default: return industry.descriptionEn;
    }
  };

  return (
    <>
      <SEOHead
        seoData={{
          title: seoTitle[locale],
          description: seoDescription[locale],
          keywords: ['industries', 'manufacturing', 'plastic injection Moulding', 'power tools', 'household products', 'hygiene personal care', 'food packaging'],
          canonical: `https://flair-plastic.hu/${locale}/industries`,
          ogTitle: seoTitle[locale],
          ogDescription: seoDescription[locale],
          ogImage: 'https://flair-plastic.hu/images/og-industries.jpg',
          ogType: 'website',
          twitterCard: 'summary_large_image',
          twitterTitle: seoTitle[locale],
          twitterDescription: seoDescription[locale],
          twitterImage: 'https://flair-plastic.hu/images/og-industries.jpg',
          hreflang: {
            en: 'https://flair-plastic.hu/en/industries',
            hu: 'https://flair-plastic.hu/hu/industries',
            de: 'https://flair-plastic.hu/de/industries'
          }
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl animate-bounce delay-1000"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/30 rounded-full animate-ping particle-${i}`}
            ></div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Futuristic Badge */}
              <div className="inline-flex items-center px-6 py-2 mb-8 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-cyan-300 text-sm font-medium">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                {locale === 'hu' ? '19 Iparág • Végtelen Lehetőségek' : locale === 'de' ? '19 Branchen • Unendliche Möglichkeiten' : '19 Industries • Infinite Possibilities'}
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
                {pageTitle[locale]}
              </h1>
              
              <p className="text-2xl md:text-3xl mb-6 text-white/80 font-light max-w-4xl mx-auto leading-tight">
                {pageSubtitle[locale]}
              </p>
              
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
                {pageDescription[locale]}
              </p>
              
              {/* Scroll Indicator */}
              <div className="animate-bounce">
                <svg className="w-6 h-6 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {INDUSTRIES_LIST.map((industry, index) => (
                <Link 
                  key={industry.key}
                  href={`/industries/${industry.key}`}
                  className="group"
                >
                  <div 
                    className={`relative h-72 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2 industry-card-${index}`}
                  >
                    {/* Glassmorphism Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent group-hover:from-white/20 group-hover:via-white/10 transition-all duration-500"></div>
                    
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      <div>
                        {/* Icon with Glow Effect */}
                        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                          <span className="inline-block group-hover:animate-pulse">
                            {industry.icon}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors line-clamp-2">
                          {getName(industry)}
                        </h3>
                        
                        <p className="text-white/70 text-sm leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors">
                          {getDescription(industry)}
                        </p>
                      </div>
                      
                      {/* CTA with Arrow */}
                      <div className="flex items-center justify-between mt-6">
                        <span className="text-cyan-300 font-medium text-sm group-hover:text-cyan-200 transition-colors">
                          {ctaText[locale]}
                        </span>
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:scale-110 transition-all duration-300">
                          <svg className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {/* Glassmorphism Container */}
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  {locale === 'hu' 
                    ? 'Nem találja az iparágát?' 
                    : locale === 'de'
                    ? 'Finden Sie Ihre Branche nicht?'
                    : 'Don\'t See Your Industry?'}
                </h2>
                
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                  {locale === 'hu' 
                    ? 'Lépjen kapcsolatba velünk, hogy megbeszéljük egyedi gyártási igényeit. Szakértő csapatunk készen áll új iparágakban is segíteni.'
                    : locale === 'de'
                    ? 'Kontaktieren Sie uns, um Ihre spezifischen Fertigungsanforderungen zu besprechen. Unser Expertenteam ist bereit, auch in neuen Branchen zu helfen.'
                    : 'Contact us to discuss your specific manufacturing needs. Our expert team is ready to help in new industries too.'}
                </p>
                
                <Link 
                  href="/contact"
                  className="group inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span>{locale === 'hu' ? 'Kapcsolat' : locale === 'de' ? 'Kontakt' : 'Contact Us'}</span>
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<IndustriesPageProps> = async ({ locale }) => {
  return {
    props: {
      locale: (locale as Language) || 'en',
    },
  };
};

export default IndustriesPage;
