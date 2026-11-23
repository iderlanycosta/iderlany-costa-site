import { MotionConfig } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import HighlightSection from "@/components/HighlightSection";
import PricingSection from "@/components/PricingSection";
import AvailabilitySection from "@/components/AvailabilitySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <MotionConfig reducedMotion="user">
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <HighlightSection />
      <PricingSection />
      <AvailabilitySection />
    </main>
    <Footer />
    <WhatsAppButton />
  </MotionConfig>
);

export default Index;
