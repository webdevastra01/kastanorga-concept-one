import Navbar from "../app/components/Header";
import Hero from "../app/sections/Hero";
import AboutSection from "../app/sections/AboutSection";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <AboutSection/>
      </main>
    </div>
  );
}
