import {
  MapPin,
  Navigation,
  Car,
  Plane,
  Train,
  School,
  Hospital,
} from "lucide-react";
import Reveal from "./Reveal";

const locations = [
  {
    icon: Car,
    title: "NH-56B",
    value: "Direct Connectivity",
  },
  {
    icon: Plane,
    title: "Lucknow Airport",
    value: "Easy Access",
  },
  {
    icon: Train,
    title: "Railway Station",
    value: "Well Connected",
  },
  {
    icon: School,
    title: "Schools & Colleges",
    value: "Nearby",
  },
  {
    icon: Hospital,
    title: "Hospitals",
    value: "Within Reach",
  },
  {
    icon: Navigation,
    title: "Future Growth",
    value: "High Appreciation Zone",
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="py-32 lg:py-40 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <Reveal className="text-center max-w-3xl mx-auto">

          <span className="text-gold uppercase tracking-[0.35em] text-xs font-medium">
            Project Location
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-emerald-deep mt-5 font-semibold">

            Strategically Located
            <br />
            For Your Convenience

          </h2>

          <div className="luxe-divider luxe-divider-center mt-8" />

          <p className="mt-8 text-gray-600 text-lg leading-8">

            Kanha Estate enjoys excellent connectivity
            through NH-56B, making it an ideal destination
            for both residential living and long-term
            investment.

          </p>

        </Reveal>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* Map */}

          <Reveal>

            <div className="overflow-hidden rounded-[30px] shadow-luxe border border-gray-100">

              <iframe
                title="Kanha Estate Location"
                src="https://maps.google.com/maps?q=26.6834854,80.7716828&z=15&output=embed"
                width="100%"
                height="550"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />

            </div>

          </Reveal>

          {/* Details */}

          <Reveal delay={150}>

            <div className="grid sm:grid-cols-2 gap-6">

              {locations.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="glass rounded-3xl p-7 shadow-soft hover:shadow-luxe transition-all duration-500 hover:-translate-y-2"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-emerald-deep flex items-center justify-center mb-5">

                      <Icon
                        size={28}
                        className="text-gold"
                      />

                    </div>

                    <h3 className="font-serif text-2xl text-emerald-deep">

                      {item.title}

                    </h3>

                    <p className="mt-2 text-gray-600">

                      {item.value}

                    </p>

                  </div>

                );

              })}

            </div>

            <div className="glass rounded-3xl p-8 mt-8">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">

                  <MapPin
                    size={28}
                    className="text-gold"
                  />

                </div>

                <div>

                  <h3 className="font-serif text-2xl text-emerald-deep">

                    Site Address

                  </h3>

                  <p className="mt-3 text-gray-600 leading-8">

                    Kanha Estate
                    <br />

                    NH-56B, Lucknow
                    <br />

                    Uttar Pradesh

                  </p>

                </div>

              </div>

              <a
                href="https://www.google.com/maps?q=26.6834854,80.7716828"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full font-semibold"
              >

                <Navigation size={18} />

                Get Directions

              </a>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}