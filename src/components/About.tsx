import { CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const aboutImg =
  'https://images.pexels.com/photos/34973977/pexels-photo-34973977.jpeg?auto=compress&cs=tinysrgb&w=1200';

const points = [
  'Gated community with secured entry and boundary wall',
  'Landscaped avenues and themed green pockets',
  'Clear titles and RERA-aligned documentation',
  'Strategic location with rapid infrastructural growth',
];

export default function About() {
  return (
    <section id="about" className="py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <Reveal className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-luxe shadow-emerald-900/15">
            <img
              src={aboutImg}
              alt="Kanha Estate township aerial view"
              className="w-full h-[480px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/45 via-transparent to-transparent" />
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-8 -left-2 sm:-left-8 glass rounded-3xl px-8 py-6 shadow-luxe max-w-[260px]">
            <p className="font-serif text-5xl text-gold font-bold leading-none">60</p>
            <p className="text-emerald-deep text-xs tracking-[0.18em] uppercase mt-2">
              Bigha Planned Expansion
            </p>
          </div>
          {/* decorative frame */}
          <div className="absolute -top-7 -right-5 w-28 h-28 border border-gold/40 rounded-3xl -z-10" />
        </Reveal>

        {/* Text */}
        <Reveal delay={120}>
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            About Kanha Estate
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-emerald-deep mt-5 font-semibold leading-[1.12]">
            A Visionary Township on Mohan Road
          </h2>
          <div className="luxe-divider mt-7" />
          <p className="text-gray-600 mt-7 leading-[1.8] text-lg font-light">
            Kanha Estate by SHIV SAKHI INFRA VENTURES is a premium residential plotting
            community designed for those who value space, security, and
            long-term growth. Set against the rapidly developing Mohan Road
            corridor, the township combines wide landscaped roads, modern
            infrastructure, and a strategic location adjoining the DRDO defence
            corridor.
          </p>
          <p className="text-gray-600 mt-5 leading-[1.8] font-light">
            With Phase 1 already completed and Phase 2 underway, Kanha Estate
            is scaling towards a 60 Bigha expansion, offering investors and
            home buyers an exceptional opportunity to own land in one of
            Lucknow's most promising growth corridors.
          </p>

          <ul className="mt-9 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-4 group">
                <span className="mt-1 w-6 h-6 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold transition-all duration-500">
                  <CheckCircle2 size={14} className="text-gold group-hover:text-white transition-colors duration-500" />
                </span>
                <span className="text-base text-gray-700">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="group mt-12 inline-flex items-center gap-2.5 bg-emerald-deep hover:bg-[#15503d] text-white font-medium px-8 py-4 rounded-full text-sm transition-all duration-500 ease-luxe shadow-soft hover:shadow-luxe hover:-translate-y-1"
          >
            Schedule a Site Visit
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
