import {
  ArrowRight,
  CalendarCheck,
  MapPin,
  Route,
  IndianRupee,
  Ruler,
  ShieldCheck,
  Trees,
} from "lucide-react";

import heroVideo from "../assets/hero.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Video */}

      <div className="absolute inset-0 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105 hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/45" />

        {/* Premium Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/90 via-emerald-deep/60 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-transparent to-black/30" />

      </div>

      {/* Hero Content */}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-32 pb-24">

        <div className="max-w-3xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 glass-dark rounded-full px-6 py-3 mb-8">

            <MapPin
              size={16}
              className="text-gold"
            />

            <span className="uppercase tracking-[0.28em] text-xs text-white">

              Premium Residential Plotting Project

            </span>

          </div>

          {/* Heading */}

          <h1 className="font-serif text-[2.8rem] sm:text-6xl lg:text-[4.7rem] xl:text-[5.6rem] leading-[1.05] text-white font-semibold">

            Find Your Dream Plot

            <span className="block mt-4 text-gold">

              at Kanha Estate

            </span>

          </h1>

          <div className="mt-8 w-28 h-[3px] rounded-full bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500" />

          {/* Description */}

          <p className="mt-8 text-lg sm:text-xl text-white/85 leading-8 max-w-2xl">

            Discover premium residential plots with
            wide roads, excellent connectivity,
            peaceful surroundings and promising
            investment opportunities.

            Build your dream home or secure your
            future with one of Lucknow's most
            promising residential projects.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <a
              href="#gallery"
              className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-yellow-400 text-emerald-deep font-semibold px-9 py-4 rounded-full transition-all duration-500 hover:-translate-y-1"
            >

              View Project

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-white/40 hover:bg-white hover:text-emerald-deep text-white px-9 py-4 rounded-full transition-all duration-500 hover:-translate-y-1"
            >

              <CalendarCheck size={18} />

              Book Free Site Visit

            </a>

          </div>

          {/* Feature Chips */}

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              {
                icon: ShieldCheck,
                text: "Registry Ready",
              },
              {
                icon: Route,
                text: "Wide Roads",
              },
              {
                icon: Trees,
                text: "Green Environment",
              },
              {
                icon: IndianRupee,
                text: "Easy EMI",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.text}
                  className="glass-dark rounded-full px-5 py-2 flex items-center gap-2"
                >

                  <Icon
                    size={16}
                    className="text-gold"
                  />

                  <span className="text-white text-sm">

                    {item.text}

                  </span>

                </div>

              );

            })}

          </div>

          {/* Information Card */}

          <div className="mt-14 glass-dark rounded-3xl p-8 shadow-luxe">

            <div className="grid md:grid-cols-2 gap-8">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center">

                  <IndianRupee className="text-gold" />

                </div>

                <div>

                  <p className="text-white/50 uppercase text-xs">

                    Starting Price

                  </p>

                  <h3 className="font-serif text-3xl text-white">

                    ₹1,449

                    <span className="text-base text-white/60">

                      {" "}
                      / Sq. Ft.

                    </span>

                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center">

                  <Route className="text-gold" />

                </div>

                <div>

                  <p className="text-white/50 uppercase text-xs">

                    Main Road

                  </p>

                  <h3 className="font-serif text-3xl text-white">

                    50 Ft Divider Road

                  </h3>

                </div>

              </div>

              <div className="md:col-span-2">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center">

                    <Ruler className="text-gold" />

                  </div>

                  <div>

                    <p className="text-white/50 uppercase text-xs mb-3">

                      Available Plot Sizes

                    </p>

                    <div className="flex flex-wrap gap-3">

                      {[
                        "1000 Sq.Ft.",
                        "1250 Sq.Ft.",
                        "1500 Sq.Ft.",
                        "2000 Sq.Ft.",
                        "2500 Sq.Ft.",
                      ].map((size) => (

                        <span
                          key={size}
                          className="px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm"
                        >

                          {size}

                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

              <div className="md:col-span-2 border-t border-white/10 pt-6 flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center">

                  <MapPin className="text-gold" />

                </div>

                <div>

                  <p className="text-white/50 uppercase text-xs">

                    Project Location

                  </p>

                  <h3 className="text-white text-lg">

                    NH-56B, Lucknow

                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center">

        <span className="text-white/50 uppercase tracking-[0.35em] text-[10px]">

          Scroll

        </span>

        <div className="w-px h-14 mt-3 bg-gradient-to-b from-gold to-transparent animate-pulse" />

      </div>

    </section>
  );
}