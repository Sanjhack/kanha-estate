import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Kanha Estate", href: "#highlights" },
  { label: "Gallery", href: "#plots" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl shadow-2xl py-3"
          : "bg-black/25 backdrop-blur-md py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-4 group"
        >
          <img
            src={logo}
            alt="Shiv Sakhi Infra Ventures"
            className="w-14 h-14 object-contain transition duration-500 group-hover:scale-105"
          />

          <div className="leading-tight">

            <h2 className="font-serif text-xl text-white font-semibold tracking-wide">
              SHIV SAKHI
            </h2>

            <p className="text-gold text-sm tracking-[0.18em] uppercase">
              INFRA VENTURES
            </p>

            <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase">
              Lucknow
            </p>

          </div>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-10">

          {links.map((link) => (

            <li key={link.href}>

              <a
                href={link.href}
                className="relative text-white/85 hover:text-gold transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>

            </li>

          ))}

        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gold hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            <CalendarCheck size={18} />

            Schedule Site Visit

          </a>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >

        <div className="bg-black/90 backdrop-blur-xl">

          <ul className="px-8 py-6 flex flex-col gap-5">

            {links.map((link) => (

              <li key={link.href}>

                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-white hover:text-gold transition"
                >
                  {link.label}
                </a>

              </li>

            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-gold text-black font-semibold py-3 rounded-full"
            >
              <CalendarCheck size={18} />

              Schedule Site Visit

            </a>

          </ul>

        </div>

      </div>

    </header>
  );
}