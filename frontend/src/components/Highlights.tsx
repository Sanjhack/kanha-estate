import {
  MapPin,
  Route,
 ShieldCheck,
  Trees,
  Building2,
  Wallet,
  Home,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Strategically located on NH-56B with excellent connectivity to Lucknow and surrounding areas.",
  },
  {
    icon: Route,
    title: "Wide Internal Roads",
    desc: "Well-planned 30 & 40 ft internal roads with a 50 ft divider main road for smooth accessibility.",
  },
  {
    icon: ShieldCheck,
    title: "Registry Ready",
    desc: "Clear legal documentation with secure ownership for complete peace of mind.",
  },
  {
    icon: Trees,
    title: "Green Environment",
    desc: "A peaceful residential atmosphere with landscaped surroundings and open spaces.",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    desc: "Designed with quality infrastructure to support comfortable residential living.",
  },
  {
    icon: Wallet,
    title: "Easy Payment Plans",
    desc: "Flexible payment options designed to make property ownership simple and convenient.",
  },
  {
    icon: Home,
    title: "Perfect for Families",
    desc: "An ideal destination to build your dream home in a secure and well-planned community.",
  },
  {
    icon: TrendingUp,
    title: "High Investment Potential",
    desc: "Located in one of Lucknow's rapidly developing growth corridors with strong appreciation prospects.",
  },
];

export default function Highlights() {
  return (
    <section
      id="amenities"
      className="py-32 lg:py-40 bg-[#f7faf8] relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-emerald-50 blur-[6rem]" />
      <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-yellow-50 blur-[6rem]" />

      <div className="relative max-w-7xl mx-auto px-8">

        <Reveal className="text-center max-w-3xl mx-auto">

          <span className="text-gold uppercase tracking-[0.35em] text-xs font-medium">
            Why Choose Kanha Estate
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-emerald-deep mt-5 font-semibold leading-tight">
            Everything You Need
            <br />
            For a Better Tomorrow
          </h2>

          <div className="luxe-divider luxe-divider-center mt-8" />

          <p className="text-gray-600 mt-8 text-lg leading-8">
            Kanha Estate combines premium infrastructure,
            excellent connectivity, legal transparency,
            and future growth potential to deliver
            an exceptional residential investment.
          </p>

        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

          {highlights.map((item, index) => {

            const Icon = item.icon;

            return (

              <Reveal
                key={item.title}
                delay={index * 80}
              >

                <div className="group bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:border-gold/40 hover:shadow-luxe transition-all duration-500 hover:-translate-y-3 h-full">

                  <div className="w-16 h-16 rounded-2xl bg-emerald-deep flex items-center justify-center group-hover:bg-gold transition duration-500">

                    <Icon
                      size={30}
                      className="text-gold group-hover:text-emerald-deep transition"
                    />

                  </div>

                  <h3 className="font-serif text-2xl text-emerald-deep mt-7 font-semibold">

                    {item.title}

                  </h3>

                  <p className="text-gray-600 leading-7 mt-4">

                    {item.desc}

                  </p>

                  <div className="mt-6 h-[2px] w-10 bg-gold/40 group-hover:w-full transition-all duration-500" />

                </div>

              </Reveal>

            );

          })}

        </div>

      </div>
    </section>
  );
}