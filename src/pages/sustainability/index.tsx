
import { useLanguage } from "@/contexts/LanguageContext";
import { CompleteSiteSEO } from "@/lib/seo/CompleteSiteSEO";
import Head from "next/head";
import HeroSection from '@/components/green-strategy/HeroSection';
import SustainableSection from '@/components/green-strategy/SustainableSection';
import SustainabilityPathwaySection from '@/components/green-strategy/SustainabilityPathwaySection';
import SustainableCycleSection from '@/components/green-strategy/SustainableCycleSection';

const Sustainability = () => {
  const { language } = useLanguage();

  // Get professional SEO configuration for sustainability page
  const sustainabilitySEO = CompleteSiteSEO.sustainability;
  const seoConfig = language === 'hu' && sustainabilitySEO.hu ? sustainabilitySEO.hu : sustainabilitySEO.en;

  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flair-plastic.hu/sustainability" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data */}
        {seoConfig.structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        
        <link rel="canonical" href="https://flair-plastic.hu/sustainability" />
      </Head>
      <div className="min-h-screen">
        <HeroSection />
        <SustainableSection />      
        <SustainabilityPathwaySection />
        <SustainableCycleSection />      
      </div>
    </>
  );
};

export default Sustainability;
