import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChoose from '@/components/WhyChoose';
import Highlights from '@/components/Highlights';
import About from '@/components/About';
import Plots from '@/components/Plots';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfdfb] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <Highlights />
        <About />
        <Plots />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
