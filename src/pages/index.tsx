import { useLanguage } from "@/contexts/LanguageContext";
import { CompleteSiteSEO } from "@/lib/seo/CompleteSiteSEO";
import HeroSection from "@/components/HeroSection";
import ServicesCards from "@/components/home/ServicesCards";
import ManufacturingSupport from "@/components/home/ManufacturingSupport";
import WhyPartnerSection from "@/components/home/WhyPartnerSection";
import Head from "next/head";

export default function Home() {
  const { language } = useLanguage();

  // Get professional SEO configuration for homepage
  const homepageSEO = CompleteSiteSEO.homepage;
  const seoConfig = language === 'hu' && homepageSEO.hu ? homepageSEO.hu : homepageSEO.en;

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
        <meta property="og:url" content="https://flair-plastic.hu/" />
        
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
        
        <link rel="canonical" href="https://flair-plastic.hu/" />
      </Head>
      <div className="min-h-screen">
        <div className="relative">
          <HeroSection />
        </div>
        <ServicesCards />
        <ManufacturingSupport />
        <WhyPartnerSection />
      </div>
    </>
  );
}
