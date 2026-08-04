import { ArrowRight, CalendarCheck, MapPin, Route, IndianRupee, Ruler } from 'lucide-react';

const heroImg =
  'https://images.pexels.com/photos/21230507/pexels-photo-21230507.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Kanha Estate residential plotting community"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/92 via-emerald-deep/72 to-emerald-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-transparent to-emerald-deep/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 glass-dark rounded-full pl-2 pr-5 py-2 mb-8">
            <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
              <MapPin size={13} className="text-gold" />
            </span>
            <span className="text-white/90 text-[11px] tracking-[0.28em] uppercase">
              Mohan Road, Lucknow
            </span>
          </div>

         <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] text-white leading-[1.08] font-semibold">
  Invest in the Future
  <br />
  <span className="block text-yellow-400 mt-3">
    Kanha Estate
  </span>
</h1>

          {/* Small Premium Divider */}
<div className="mt-8 w-24 h-[3px] rounded-full bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500" />

<p className="mt-7 text-lg sm:text-xl text-white/85 leading-[1.7] max-w-2xl font-light">
  <span className="text-yellow-400 font-semibold">Kanha Estate</span> offers premium
  residential plots on Mohan Road, Lucknow, with excellent connectivity,
  flexible payment plans, and outstanding future appreciation potential.
</p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#highlights"
              className="group inline-flex items-center justify-center gap-2.5 btn-gold text-emerald-deep font-medium px-9 py-4 rounded-full transition-all duration-500 ease-luxe hover:-translate-y-1"
            >
              Explore Project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1.5 transition-transform duration-500 ease-luxe"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 border border-white/40 text-white hover:bg-white hover:text-emerald-deep font-medium px-9 py-4 rounded-full transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-white"
            >
              <CalendarCheck size={18} />
              Book Site Visit
            </a>
          </div>

          {/* Premium info card */}
          <div className="mt-14 max-w-2xl glass-dark rounded-3xl p-7 sm:p-9 shadow-luxe">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {/* Starting price */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                  <IndianRupee size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] tracking-[0.22em] uppercase">
                    Starting Price
                  </p>
                  <p className="font-serif text-2xl text-white font-semibold leading-tight mt-0.5">
                    ₹1,449<span className="text-sm text-white/55 font-light"> /sq ft</span>
                  </p>
                </div>
              </div>

              {/* Divider road */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                  <Route size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] tracking-[0.22em] uppercase">
                    Main Road
                  </p>
                  <p className="font-serif text-2xl text-white font-semibold leading-tight mt-0.5">
                    50 Ft Divider Road
                  </p>
                </div>
              </div>

              {/* Plot sizes */}
              <div className="flex items-center gap-4 sm:col-span-2">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                  <Ruler size={20} className="text-gold" />
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-[10px] tracking-[0.22em] uppercase">
                    Plot Sizes
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-1">
                    {['1000', '1250', '1500', '2000', '2500'].map((s, idx) => (
                      <span key={s} className="flex items-center">
                        <span className="font-serif text-lg text-gold font-semibold">
                          {s}
                        </span>
                        <span className="text-white/45 text-xs ml-1">Sq Ft</span>
                        {idx < 4 && (
                          <span className="text-gold/35 mx-2">|</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 sm:col-span-2 pt-2 border-t border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 mt-1">
                  <MapPin size={20} className="text-gold" />
                </div>
                <p className="text-base text-white/85 mt-1">
                  Kanha Estate, Mohan Road, Lucknow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-3">
        <span className="text-white/50 text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
