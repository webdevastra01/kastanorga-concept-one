import Navbar from "../app/components/Header";
import Hero from "../app/sections/Hero";
import AboutSection from "../app/sections/AboutSection";
import ServicesSection from "../app/sections/ServicesSection";
import WhyKastanorgaSection from "./sections/WhyKastanorgaSection";
import ProcessSection from "./sections/ProcessSection";
import LanguageExpertiseSection from "./sections/LanguageExpertiseSection";
import TestimonialsSection from "./sections/TestimonialsSection";

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
      </main>
    </div>
  );
}
