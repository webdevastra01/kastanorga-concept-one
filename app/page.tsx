import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import WhyKastanorgaSection from "./sections/WhyKastanorgaSection";
import ProcessSection from "./sections/ProcessSection";
import LanguageExpertiseSection from "./sections/LanguageExpertiseSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import PhilosophyBanner from "./sections/PhilosophyBanner";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyKastanorgaSection />
        <ProcessSection />
        <LanguageExpertiseSection />
        <TestimonialsSection />
        <PhilosophyBanner />
        <FAQSection />
        <FinalCTASection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
