import Navbar from "@/components/Navbar";
import EyePuneBanner from "@/components/EyePuneBanner";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IPOTimeline from "@/components/sections/IPOTimeline";
import StatsSection from "@/components/sections/StatsSection";
import ContactCTA from "@/components/sections/ContactCTA";
import TrustSection from "@/components/sections/TrustSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IPOTimeline />
      <TrustSection />
      <ContactCTA />
      <EyePuneBanner />
      <Footer />
    </main>
  );
}
