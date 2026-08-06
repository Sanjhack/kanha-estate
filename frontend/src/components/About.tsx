import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const aboutImg =
  "https://images.pexels.com/photos/34973977/pexels-photo-34973977.jpeg?auto=compress&cs=tinysrgb&w=1200";

const features = [
  "Prime location on NH-56B with excellent connectivity",
  "Wide internal roads with planned infrastructure",
  "Registry-ready plots with clear legal documentation",
  "Peaceful environment ideal for residential living",
  "Flexible payment options & investment opportunities",
  "High appreciation potential in a fast-growing corridor",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 lg:py-40 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}

        <Reveal className="relative">

          <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">

            <img
              src={aboutImg}
              alt="Kanha Estate"
              className="w-full h-[480px] lg:h-[620px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/45 via-transparent to-transparent" />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 -left-6 glass rounded-3xl px-8 py-6 shadow-luxe">

            <p className="font-serif text-5xl text-gold font-bold">
              60+
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-emerald-deep mt-2">
              Bigha Premium Township
            </p>

          </div>

        </Reveal>

        {/* Right Content */}

        <Reveal delay={150}>

          <span className="text-gold uppercase tracking-[0.35em] text-xs font-medium">

            About Kanha Estate

          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] text-emerald-deep font-semibold mt-5 leading-tight">

            Premium Residential Plots
            <br />

            Designed for Modern Living

          </h2>

          <div className="luxe-divider mt-8" />

          <p className="mt-8 text-gray-600 leading-8 text-lg">

            Kanha Estate is a thoughtfully planned residential plotting
            project developed for families and investors looking for
            quality infrastructure, excellent connectivity, and
            long-term value.

          </p>

          <p className="mt-6 text-gray-600 leading-8">

            Located on the rapidly developing NH-56B corridor,
            Kanha Estate combines modern planning with peaceful
            surroundings, making it an ideal destination to build
            your dream home or secure a valuable real estate
            investment for the future.

          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-start gap-3"
              >

                <CheckCircle2
                  size={20}
                  className="text-gold mt-1 shrink-0"
                />

                <p className="text-gray-700 leading-7">
                  {item}
                </p>

              </div>

            ))}

          </div>

          <a
            href="#contact"
            className="group mt-12 inline-flex items-center gap-3 bg-emerald-deep hover:bg-[#154d3d] text-white px-8 py-4 rounded-full transition-all duration-500 hover:-translate-y-1 shadow-luxe"
          >

            Book Your Site Visit

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />

          </a>

        </Reveal>

      </div>
    </section>
  );
}