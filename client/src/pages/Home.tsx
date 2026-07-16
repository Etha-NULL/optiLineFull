import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ParticleBackground />
      <Navigation />
      <main className="flex-1 relative z-10">
        <Hero />
        <Services />
        <About />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
