import Navbar from "../app/components/Header";
import Hero from "../app/sections/Hero";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}
