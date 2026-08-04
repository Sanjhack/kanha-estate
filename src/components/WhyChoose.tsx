import {
  Route,
  Split,
  ShieldCheck,
  TrainFront,
  Wallet,
  TrendingUp,
} from 'lucide-react';
import Reveal from './Reveal';

const features = [
  {
    icon: Route,
    title: '50 Ft Divider Main Road',
    desc: 'A grand divided carriageway gives the township a commanding entrance and effortless access.',
  },
  {
    icon: Split,
    title: '30 & 40 Ft Internal Roads',
    desc: 'Wide, well-lit internal roads ensure smooth movement to every plot and easy construction access.',
  },
  {
    icon: ShieldCheck,
    title: 'Near DRDO Defence Corridor',
    desc: 'Adjoining the DRDO defence corridor node, placing your investment in a high-priority growth belt.',
  },
  {
    icon: TrainFront,
    title: 'Near Harauni Railway Station',
    desc: 'Excellent rail connectivity via Harauni station keeps you linked to Lucknow and beyond.',
  },
  {
    icon: Wallet,
    title: 'Flexible Payment Plan',
    desc: 'Tailored instalment plans designed to suit every investor profile and budget comfortably.',
  },
  {
    icon: TrendingUp,
    title: 'High Future Growth Potential',
    desc: 'Rapid infrastructural development on Mohan Road promises strong appreciation for years to come.',
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="py-32 lg:py-40 bg-gradient-to-b from-emerald-deep via-[#0a3326] to-emerald-deep relative overflow-hidden"
    >
      {/* ambient glows */}
      <div className="absolute -top-24 left-1/4 w-[28rem] h-[28rem] rounded-full bg-gold/8 blur-[5rem]" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full bg-emerald-400/8 blur-[5rem]" />
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(197,162,83,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(197,162,83,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            The Kanha Advantage
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-5 font-semibold leading-[1.12]">
            Why Choose Kanha Estate
          </h2>
          <div className="luxe-divider luxe-divider-center mt-7" />
          <p className="text-white/65 mt-7 leading-[1.8] text-lg font-light">
            Six reasons that make Kanha Estate one of the most promising
            residential plot investments on Mohan Road, Lucknow.
          </p>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 100}>
                <div className="group relative glass-dark rounded-3xl p-9 h-full border border-gold/15 hover:border-gold/40 transition-all duration-700 ease-luxe hover:-translate-y-3 overflow-hidden">
                  {/* hover sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-transparent group-hover:from-gold/10 transition-all duration-700" />

                  <div className="relative flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold transition-all duration-700 ease-luxe">
                      <Icon
                        size={30}
                        className="text-gold group-hover:text-emerald-deep transition-colors duration-700"
                      />
                    </div>
                    <span className="font-serif text-6xl text-white/[0.07] font-bold leading-none">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="relative font-serif text-2xl text-white font-semibold mt-8 leading-snug">
                    {f.title}
                  </h3>
                  <p className="relative text-sm text-white/60 mt-3.5 leading-[1.75]">
                    {f.desc}
                  </p>

                  {/* bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-700 ease-luxe" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
