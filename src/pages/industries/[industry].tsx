import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { CompleteSiteSEO, IndustrySpecificSEO } from "@/lib/seo/CompleteSiteSEO";
import { INDUSTRIES_SEO_DATA } from '@/lib/seo/industries-seo';
import Head from "next/head";

interface IndustryPageProps {
  industry: string;
}

const INDUSTRY_SLUGS = [
  'power-tools',
  'household-products',
  'hygiene-personal-care',
  'agriculture',
  'medical-healthcare',
  'consumer-electronics',
  'food-beverage-packaging',
  'toys-educational-products',
  'furniture',
  'packaging',
  'pharmaceutical-packaging',
  'caps-closures',
  'cosmetics-containers',
  'baby-products',
  'pet-products',
  'gardening-tools-accessories',
  'sanitary-products',
  'cleaning-tools-accessories',
  'waste-management-products'
];

export default function IndustryPage({ industry }: IndustryPageProps) {
  const { language } = useLanguage();
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const industryData = INDUSTRIES_SEO_DATA[industry as keyof typeof INDUSTRIES_SEO_DATA];
  
  if (!industryData) {
    return <div>Industry not found</div>;
  }

  // Get professional SEO for industry pages
  let seoConfig = null;
  if (industry === 'automotive' || industry.includes('automotive')) {
    const automotiveSEO = IndustrySpecificSEO.automotive;
    seoConfig = language === 'hu' && automotiveSEO.hu ? automotiveSEO.hu : automotiveSEO.en;
  } else if (industry === 'medical' || industry.includes('medical') || industry.includes('healthcare')) {
    const medicalSEO = IndustrySpecificSEO.medical;
    seoConfig = language === 'hu' && medicalSEO.hu ? medicalSEO.hu : medicalSEO.en;
  } else {
    // Fallback to original data for other industries
    seoConfig = {
      title: industryData.title[language],
      description: industryData.description[language],
      keywords: industryData.keywords[language],
      structuredData: []
    };
  }

  const formatIndustryName = (slug: string) => {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={Array.isArray(seoConfig.keywords) ? seoConfig.keywords.join(', ') : seoConfig.keywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://flair-plastic.hu/industries/${industry}`} />
        <meta property="og:image" content={`https://flair-plastic.hu/images/og/${industry}-og.jpg`} />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data */}
        {seoConfig.structuredData && seoConfig.structuredData.map((schema: Record<string, unknown>, index: number) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        
        <link rel="canonical" href={`https://flair-plastic.hu/industries/${industry}`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 left-1/2 w-60 h-60 bg-blue-400/20 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>

        {/* Floating Tech Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-white/60 mb-8">
              <span>Industries</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-cyan-300">{formatIndustryName(industry)}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Industry Badge */}
                <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-cyan-300 text-sm font-medium">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                  {language === 'en' ? 'Specialized Manufacturing' : 
                   language === 'hu' ? 'Specializált Gyártás' : 'Spezialisierte Fertigung'}
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                  {formatIndustryName(industry)}
                </h1>
                
                <div className="text-xl md:text-2xl text-cyan-100 font-light mb-8">
                  {language === 'en' ? 'Precision Plastic Manufacturing Excellence' : 
                   language === 'hu' ? 'Precíziós Műanyag Gyártási Kiválóság' : 'Präzisions-Kunststoff-Fertigungsexzellenz'}
                </div>
                
                <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl">
                  {industryData.description[language]}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="group bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center">
                    <span className="flex items-center">
                      {language === 'en' ? 'Request Quote' : 
                       language === 'hu' ? 'Ajánlatkérés' : 'Angebot Anfordern'}
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/services" className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-cyan-300 transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center">
                    {language === 'en' ? 'View Capabilities' : 
                     language === 'hu' ? 'Képességek Megtekintése' : 'Fähigkeiten Ansehen'}
                  </Link>
                </div>
              </div>

              {/* 3D Floating Card */}
              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-black text-cyan-300 mb-2">25+</div>
                        <div className="text-white/70 text-sm">
                          {language === 'en' ? 'Years Experience' : 
                           language === 'hu' ? 'Év Tapasztalat' : 'Jahre Erfahrung'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-purple-300 mb-2">ISO</div>
                        <div className="text-white/70 text-sm">
                          {language === 'en' ? 'Certified Quality' : 
                           language === 'hu' ? 'Tanúsított Minőség' : 'Zertifizierte Qualität'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-cyan-300 mb-2">99%</div>
                        <div className="text-white/70 text-sm">
                          {language === 'en' ? 'Quality Rate' : 
                           language === 'hu' ? 'Minőségi Arány' : 'Qualitätsrate'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-purple-300 mb-2">24/7</div>
                        <div className="text-white/70 text-sm">
                          {language === 'en' ? 'Support' : 
                           language === 'hu' ? 'Támogatás' : 'Support'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    {language === 'en' ? 'Industry-Specific Expertise' : 
                     language === 'hu' ? 'Iparág-specifikus Szakértelem' : 'Branchenspezifische Expertise'}
                  </h2>
                  <p className="text-white/80 text-lg mb-8 leading-relaxed">
                    {industryData.content[language]}
                  </p>
                  
                  {/* Feature Points */}
                  <div className="space-y-4">
                    {[
                      {
                        icon: "⚡",
                        title: language === 'en' ? 'Advanced Technology' : language === 'hu' ? 'Fejlett Technológia' : 'Fortschrittliche Technologie'
                      },
                      {
                        icon: "🔬",
                        title: language === 'en' ? 'Quality Testing' : language === 'hu' ? 'Minőségi Tesztelés' : 'Qualitätsprüfung'
                      },
                      {
                        icon: "🌱",
                        title: language === 'en' ? 'Sustainable Materials' : language === 'hu' ? 'Fenntartható Anyagok' : 'Nachhaltige Materialien'
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-4 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-xl">{feature.icon}</span>
                        </div>
                        <span className="text-white/90 font-medium">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Interactive Tech Display */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-3xl backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-pulse">⚙️</div>
                    <div className="text-white/60 text-lg">
                      {language === 'en' ? 'Advanced Manufacturing' : 
                       language === 'hu' ? 'Fejlett Gyártás' : 'Fortschrittliche Fertigung'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                {language === 'en' ? 'Why Choose Flair Plastic' : 
                 language === 'hu' ? 'Miért válassza a Flair Plastic-ot' : 'Warum Flair Plastic wählen'}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "✨",
                  title: language === 'en' ? 'Premium Quality' : language === 'hu' ? 'Prémium Minőség' : 'Premium Qualität',
                  desc: language === 'en' ? 'ISO certified manufacturing processes ensuring consistent, high-quality products.' : 
                        language === 'hu' ? 'ISO tanúsított gyártási folyamatok, következetes, magas minőségű termékeket biztosítanak.' : 
                        'ISO-zertifizierte Fertigungsprozesse gewährleisten konsistente, hochwertige Produkte.'
                },
                {
                  icon: "⚡",
                  title: language === 'en' ? 'Fast Delivery' : language === 'hu' ? 'Gyors Szállítás' : 'Schnelle Lieferung',
                  desc: language === 'en' ? 'Advanced production planning ensures on-time delivery for all projects.' : 
                        language === 'hu' ? 'Fejlett termelési tervezés biztosítja az időben történő szállítást minden projekthez.' : 
                        'Fortschrittliche Produktionsplanung gewährleistet pünktliche Lieferung für alle Projekte.'
                },
                {
                  icon: "🌍",
                  title: language === 'en' ? 'European Excellence' : language === 'hu' ? 'Európai Kiválóság' : 'Europäische Exzellenz',
                  desc: language === 'en' ? 'Strategic location provides easy access to European markets.' : 
                        language === 'hu' ? 'Stratégiai helyszín könnyű hozzáférést biztosít az európai piacokhoz.' : 
                        'Strategische Lage bietet einfachen Zugang zu europäischen Märkten.'
                }
              ].map((benefit, index) => (
                <div key={index} className="group">
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 h-full hover:scale-105 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent group-hover:from-white/20 group-hover:via-white/10 rounded-3xl transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">{benefit.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  {language === 'en' ? 'Ready to Start Your Project?' : 
                   language === 'hu' ? 'Készen áll a projekt indítására?' : 'Bereit, Ihr Projekt zu starten?'}
                </h2>
                
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                  {language === 'en' ? 'Get a personalized quote for your plastic manufacturing needs and transform your vision into reality.' : 
                   language === 'hu' ? 'Szerezzen személyre szabott ajánlatot műanyag gyártási igényeihez és alakítsa vízióját valósággá.' : 
                   'Erhalten Sie ein persönliches Angebot für Ihre Kunststofffertigung und verwandeln Sie Ihre Vision in Realität.'}
                </p>
                
                <Link href="/contact" className="group bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center">
                  <span className="flex items-center">
                    {language === 'en' ? 'Contact Our Experts' : 
                     language === 'hu' ? 'Kapcsolat Szakértőinkkel' : 'Kontakt zu unseren Experten'}
                    <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div> 
      </>
    );
  }

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = INDUSTRY_SLUGS.map((industry) => ({
    params: { industry },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const industry = params?.industry as string;

  if (!INDUSTRY_SLUGS.includes(industry)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      industry,
    },
  };
};
