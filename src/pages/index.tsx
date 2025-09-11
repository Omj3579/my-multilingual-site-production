import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/lib/seo/SEOHead";
import { generateSEOData } from "@/lib/seo/utils";
import HeroSection from "@/components/HeroSection";
import ServicesCards from "@/components/home/ServicesCards";
import ManufacturingSupport from "@/components/home/ManufacturingSupport";
import WhyPartnerSection from "@/components/home/WhyPartnerSection";

export default function Home() {
  const { language } = useLanguage();

  // Generate SEO data for home page
  const seoData = generateSEOData({
    pageType: 'home',
    language,
    breadcrumbs: [
      { name: 'Home', url: '/' }
    ]
  });

  return (
    <>
      <SEOHead seoData={seoData} />
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
