import {
  Waypoints,
  Route,
  Building2,
  CheckCircle2,
  Construction,
  Maximize2,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import Reveal from './Reveal';

const highlights = [
  { icon: Waypoints, title: '50 Ft Divider Main Road', desc: 'A grand divided carriageway frames the township entrance.' },
  { icon: Route, title: '30 & 40 Ft Internal Roads', desc: 'Wide, well-lit internal roads for easy access to every plot.' },
  { icon: Building2, title: 'Premium Residential Township', desc: 'Thoughtfully planned gated community with modern infrastructure.' },
  { icon: CheckCircle2, title: 'Phase 1 Completed', desc: 'Delivered and ready for construction with all amenities in place.' },
  { icon: Construction, title: 'Phase 2 Under Development', desc: 'Ongoing development expanding the township with new blocks.' },
  { icon: Maximize2, title: 'Expansion Towards 60 Bigha', desc: 'A bold roadmap scaling the project to 60 Bigha of premium land.' },
  { icon: ShieldCheck, title: 'Near DRDO Defence Corridor', desc: 'Strategically located adjoining the DRDO defence corridor node.' },
  { icon: Wallet, title: 'Flexible Payment Plan', desc: 'Tailored instalment plans designed for every investor profile.' },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-32 lg:py-40 bg-[#f6f9f6] relative overflow-hidden">
      {/* decorative */}
      <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-emerald-50/60 blur-[5rem]" />
      <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-amber-50/40 blur-[5rem]" />

      <div className="relative max-w-7xl mx-auto px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            Project Highlights
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-emerald-deep mt-5 font-semibold leading-[1.12]">
            Crafted for Lasting Value
          </h2>
          <div className="luxe-divider luxe-divider-center mt-7" />
          <p className="text-gray-600 mt-7 leading-[1.8] text-lg font-light">
            Every detail of Kanha Estate is engineered to deliver a premium
            living experience and strong investment returns.
          </p>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={i * 80}>
                <div className="group glass rounded-3xl p-8 h-full border border-white/70 shadow-soft hover:shadow-luxe hover:shadow-emerald-900/10 transition-all duration-700 ease-luxe hover:-translate-y-2.5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-deep flex items-center justify-center mb-6 group-hover:bg-gold transition-all duration-700 ease-luxe group-hover:scale-110">
                    <Icon
                      size={26}
                      className="text-gold group-hover:text-emerald-deep transition-colors duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-emerald-deep font-semibold leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 leading-[1.75]">{h.desc}</p>
                  {/* accent line */}
                  <div className="mt-5 h-px w-8 bg-gold/30 group-hover:w-full group-hover:bg-gold transition-all duration-700 ease-luxe" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
