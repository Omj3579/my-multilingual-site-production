import { useLanguage } from "@/contexts/LanguageContext";
import HeroSection from "@/components/HeroSection";
import ServicesCards from "@/components/home/ServicesCards";
import SustainabilityCarousel from "@/components/home/SustainabilityCarousel";
import ManufacturingSupport from "@/components/home/ManufacturingSupport";
import CapabilitiesPortraitCarousel from "@/components/home/CapabilitiesPortraitCarousel";
import WhyPartnerSection from "@/components/home/WhyPartnerSection";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <div className="relative">
        <HeroSection />
      </div>
      <ServicesCards />
      <SustainabilityCarousel />
      <ManufacturingSupport />
      <CapabilitiesPortraitCarousel />
      <WhyPartnerSection />
    </div>
  );
}
