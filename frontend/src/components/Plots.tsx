import { Ruler, Maximize, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const plots = [
  { area: '1000', unit: 'Sq Ft', dim: '20 × 50', frontage: '20 ft', depth: '50 ft' },
  { area: '1250', unit: 'Sq Ft', dim: '25 × 50', frontage: '25 ft', depth: '50 ft' },
  { area: '1500', unit: 'Sq Ft', dim: '30 × 50', frontage: '30 ft', depth: '50 ft' },
  { area: '2000', unit: 'Sq Ft', dim: '40 × 50', frontage: '40 ft', depth: '50 ft' },
  { area: '2500', unit: 'Sq Ft', dim: '50 × 50', frontage: '50 ft', depth: '50 ft' },
];

export default function Plots() {
  return (
    <section id="plots" className="py-32 lg:py-40 bg-emerald-deep relative overflow-hidden">
      {/* texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ background: 'radial-gradient(circle at 20% 30%, #c5a253 0, transparent 40%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ background: 'radial-gradient(circle at 80% 70%, #c5a253 0, transparent 40%)' }}
      />
      {/* subtle grid */}
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
            Plot Sizes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-5 font-semibold leading-[1.12]">
            Choose Your Perfect Plot
          </h2>
          <div className="luxe-divider luxe-divider-center mt-7" />
          <p className="text-white/65 mt-7 leading-[1.8] text-lg font-light">
            Standard depth is 50 feet while frontage changes according to plot
            area, giving you flexibility to build the home you envision.
          </p>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {plots.map((p, i) => (
            <Reveal key={p.area} delay={i * 90}>
              <div className="group relative glass-dark rounded-3xl p-9 h-full border border-gold/20 hover:border-gold/45 transition-all duration-700 ease-luxe hover:-translate-y-3 overflow-hidden">
                {/* hover sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all duration-700" />

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="font-serif text-6xl text-gold font-bold leading-none">
                      {p.area}
                    </p>
                    <p className="text-white/55 text-xs tracking-[0.25em] uppercase mt-3">
                      {p.unit}
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl border border-gold/40 flex items-center justify-center group-hover:bg-gold transition-all duration-700">
                    <Maximize size={24} className="text-gold group-hover:text-emerald-deep transition-colors duration-700" />
                  </div>
                </div>

                <div className="relative mt-9 pt-7 border-t border-white/12">
                  <p className="font-serif text-3xl text-white font-semibold">
                    {p.dim}
                    <span className="text-sm text-white/45 font-light ml-1.5">ft</span>
                  </p>
                  <div className="flex items-center gap-6 mt-4 text-xs text-white/65">
                    <span className="flex items-center gap-2">
                      <Ruler size={14} className="text-gold" /> Frontage {p.frontage}
                    </span>
                    <span className="flex items-center gap-2">
                      <Ruler size={14} className="text-gold" /> Depth {p.depth}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Info card */}
          <Reveal delay={plots.length * 90}>
            <div className="rounded-3xl p-9 h-full bg-gradient-to-br from-gold to-gold-dark text-emerald-deep flex flex-col justify-center shadow-gold-glow">
              <h3 className="font-serif text-3xl font-semibold leading-snug">
                Need a custom size?
              </h3>
              <p className="text-sm mt-4 text-emerald-deep/85 leading-[1.75]">
                Larger and corner plots are available on request. Talk to our
                team to find the right fit for your budget and plan.
              </p>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center justify-center gap-2.5 bg-emerald-deep text-gold font-medium px-7 py-3.5 rounded-full text-sm hover:bg-[#15503d] transition-all duration-500 ease-luxe hover:-translate-y-1 self-start"
              >
                Enquire Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
