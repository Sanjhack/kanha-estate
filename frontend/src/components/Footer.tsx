import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ArrowUp,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08221a] text-white/70 pt-20 pb-10 relative overflow-hidden">

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[5rem]" />

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="font-serif text-4xl font-semibold text-white">

              Kanha Estate

            </h2>

            <p className="text-gold uppercase tracking-[0.35em] text-xs mt-2">

              Premium Residential Plots

            </p>

            <p className="mt-6 text-sm leading-7">

              Discover premium residential plots in one of
              Lucknow's rapidly developing corridors.

              Wide roads, peaceful surroundings,
              secure investment and an excellent location
              make Kanha Estate an ideal choice for
              your dream home and future investment.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-serif text-xl text-white mb-6">

              Quick Links

            </h3>

            <div className="space-y-4">

              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Highlights", "#amenities"],
                ["Gallery", "#plots"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (

                <a
                  key={name}
                  href={link}
                  className="block hover:text-gold transition"
                >

                  {name}

                </a>

              ))}

            </div>

          </div>

          {/* Project */}

          <div>

            <h3 className="font-serif text-xl text-white mb-6">

              Project Highlights

            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">

                <Building2
                  size={18}
                  className="text-gold mt-1"
                />

                <span>Premium Residential Township</span>

              </div>

              <div className="flex gap-3">

                <Building2
                  size={18}
                  className="text-gold mt-1"
                />

                <span>Registry Ready Plots</span>

              </div>

              <div className="flex gap-3">

                <Building2
                  size={18}
                  className="text-gold mt-1"
                />

                <span>Wide Internal Roads</span>

              </div>

              <div className="flex gap-3">

                <Building2
                  size={18}
                  className="text-gold mt-1"
                />

                <span>High Investment Potential</span>

              </div>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-serif text-xl text-white mb-6">

              Contact Us

            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="text-gold mt-1"
                />

                <span>

                  Kanha Estate<br/>

                  NH-56B, Lucknow

                </span>

              </div>

              <div className="flex gap-3">

                <Phone
                  size={18}
                  className="text-gold"
                />

                <span>

                  +91 92509 95854

                </span>

              </div>

              <div className="flex gap-3">

                <Mail
                  size={18}
                  className="text-gold"
                />

                <span>

                  info@kanhaestate.in

                </span>

              </div>

              <div className="flex gap-3">

                <Globe
                  size={18}
                  className="text-gold"
                />

                <span>

                  www.kanhaestate.in

                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-white/40 text-sm">

            © {new Date().getFullYear()} Kanha Estate.
            All Rights Reserved.

          </p>

          <a
            href="#home"
            className="w-12 h-12 rounded-full bg-gold text-emerald-deep flex items-center justify-center hover:scale-110 transition"
          >

            <ArrowUp size={18} />

          </a>

        </div>

      </div>

    </footer>
  );
}