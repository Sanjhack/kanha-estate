import logo from "../assets/logo.png";
import { MapPin, Phone, Mail, Building2, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08221a] text-white/70 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[5rem]" />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Shiv Sakhi Infra Ventures"
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="text-sm mt-6 leading-[1.8] font-light">
              Crafting premium residential communities with clear titles,
              modern infrastructure, and lasting investment value.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg text-white font-semibold mb-5">
              Explore
            </h4>
            <div className="h-px w-8 bg-gold/40 mb-5" />

            <ul className="space-y-3.5 text-sm">
              {[
                { l: "Home", h: "#home" },
                { l: "About", h: "#about" },
                { l: "Kanha Estate", h: "#highlights" },
                { l: "Plot Sizes", h: "#plots" },
                { l: "Contact", h: "#contact" },
              ].map((i) => (
                <li key={i.h}>
                  <a
                    href={i.h}
                    className="hover:text-gold transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project */}
          <div>
            <h4 className="font-serif text-lg text-white font-semibold mb-5">
              Kanha Estate
            </h4>
            <div className="h-px w-8 bg-gold/40 mb-5" />

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Building2 size={15} className="text-gold shrink-0" />
                Phase 1 Completed
              </li>

              <li className="flex items-center gap-2.5">
                <Building2 size={15} className="text-gold shrink-0" />
                Phase 2 Under Development
              </li>

              <li className="flex items-center gap-2.5">
                <Building2 size={15} className="text-gold shrink-0" />
                60 Bigha Expansion Plan
              </li>

              <li className="flex items-center gap-2.5">
                <Building2 size={15} className="text-gold shrink-0" />
                Near DRDO Defence Corridor
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white font-semibold mb-5">
              Reach Us
            </h4>
            <div className="h-px w-8 bg-gold/40 mb-5" />

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                Kanha Estate, NH 56B, Lucknow, Uttar Pradesh
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                +91 92509 95854
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                info@ssinfraventures.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SHIV SAKHI INFRA VENTURES. All rights
            reserved.
          </p>

          <p className="text-xs text-white/40">
            Kanha Estate · NH 56B · Lucknow
          </p>

          <a
            href="#home"
            className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-emerald-deep transition-all duration-500 ease-luxe"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="text-gold" />
          </a>
        </div>
      </div>
    </footer>
  );
}