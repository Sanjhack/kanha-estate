import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Plots from "./components/Plots";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function WebsiteApp() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Plots />
      <Location />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}