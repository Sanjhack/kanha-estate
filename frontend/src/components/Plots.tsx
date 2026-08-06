import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

import heroVideo from "../assets/hero.mp4";

import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";

const gallery = [
  {
    image: gallery1,
    title: "Natural Green Surroundings",
    subtitle: "Kanha Estate",
    large: true,
  },
  {
    image: gallery2,
    title: "Residential Development",
    subtitle: "Kanha Estate",
  },
  {
    image: gallery3,
    title: "Project Infrastructure",
    subtitle: "Kanha Estate",
  },
  {
    image: gallery4,
    title: "Premium Township",
    subtitle: "Kanha Estate",
  },
  {
    image: gallery5,
    title: "Peaceful Environment",
    subtitle: "Kanha Estate",
    large: true,
  },
];

export default function Plots() {
  return (
    <section
      id="plots"
      className="py-32 lg:py-40 bg-emerald-deep relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute inset-0 opacity-10">

        <div className="absolute -top-40 -left-40 w-[35rem] h-[35rem] rounded-full bg-gold blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full bg-gold blur-[120px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-8">

        {/* Heading */}

        <Reveal className="text-center max-w-3xl mx-auto">

          <span className="text-gold uppercase tracking-[0.35em] text-xs font-medium">

            Experience Kanha Estate

          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-5 font-semibold">

            Explore The Project

          </h2>

          <div className="luxe-divider luxe-divider-center mt-8" />

          <p className="mt-8 text-white/70 text-lg leading-8">

            Explore the natural surroundings,
            premium location, ongoing development
            and future potential of Kanha Estate
            through our project video and gallery.

          </p>

        </Reveal>

        {/* Hero Video */}

        <Reveal delay={150}>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-gold/20 shadow-luxe">

            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-[300px] md:h-[520px] object-cover"
            />

          </div>

        </Reveal>

        {/* Gallery */}

        <div className="grid lg:grid-cols-3 gap-7 mt-20">

          {gallery.map((item, index) => (

            <Reveal
              key={index}
              delay={index * 80}
              className={item.large ? "lg:col-span-2" : ""}
            >

              <div className="group relative overflow-hidden rounded-[30px] shadow-luxe">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">

                  <p className="text-gold uppercase tracking-[0.25em] text-xs">

                    {item.subtitle}

                  </p>

                  <h3 className="font-serif text-3xl md:text-4xl text-white mt-3">

                    {item.title}

                  </h3>

                </div>

              </div>

            </Reveal>

          ))}
                  </div>

        {/* Bottom CTA */}

        <Reveal delay={500}>

          <div className="mt-24 rounded-[2rem] glass-dark border border-gold/20 p-12 text-center shadow-luxe">

            <span className="text-gold uppercase tracking-[0.35em] text-xs">

              Book Your Visit

            </span>

            <h3 className="font-serif text-4xl lg:text-5xl text-white mt-5 leading-tight">

              Experience Kanha Estate
              <br />
              In Person

            </h3>

            <div className="luxe-divider luxe-divider-center mt-8" />

            <p className="text-white/70 mt-8 max-w-3xl mx-auto text-lg leading-8">

              Visit our project site and explore the premium
              residential plots, wide internal roads, peaceful
              surroundings and future investment opportunities.

            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

              <a
                href="#contact"
                className="btn-gold inline-flex items-center gap-3 px-10 py-4 rounded-full text-emerald-deep font-semibold hover:-translate-y-1 transition-all duration-300"
              >

                Book Site Visit

                <ArrowRight size={18} />

              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-emerald-deep transition-all duration-300"
              >

                View Location

              </a>

            </div>

          </div>

        </Reveal>

      </div>

    </section>

  );

}
