import { MapPin, Phone, Mail, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const plot = data.get("plot");
    const message = data.get("message");

    const whatsappMessage = `🏡 *New Site Visit Enquiry*

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}

📐 Preferred Plot Size: ${plot}

💬 Message:
${message}

--------------------------------
Sent from Kanha Estate Website`;

    const whatsappURL = `https://wa.me/919250995854?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    form.reset();
  };

  return (
    <section
      id="contact"
      className="py-32 lg:py-40 bg-[#f6f9f6] relative overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] rounded-full bg-emerald-50/60 blur-[6rem]" />

      <div className="absolute -bottom-40 right-0 w-[36rem] h-[36rem] rounded-full bg-amber-50/40 blur-[6rem]" />

      <div className="relative max-w-6xl mx-auto px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            Get in Touch
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-emerald-deep mt-5 font-semibold leading-[1.12]">
            Book Your Site Visit
          </h2>

          <div className="mt-8 w-24 h-[3px] bg-gold rounded-full mx-auto" />

          <p className="text-gray-600 mt-7 leading-[1.8] text-lg font-light">
            Visit Kanha Estate and experience one of Lucknow's fastest-growing
            plotted developments.
          </p>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-5 gap-8">
          {/* Left Panel */}

          <Reveal className="lg:col-span-2">
            <div className="bg-emerald-deep rounded-[2rem] p-10 h-full text-white relative overflow-hidden shadow-luxe">
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                THE DEVELOPER
              </span>

              <h3 className="font-serif text-3xl font-semibold text-gold mt-4">
                SHIV SAKHI INFRA VENTURES
              </h3>

              <p className="text-white/70 mt-3">
                Developers of Kanha Estate, Lucknow
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-gold mt-1" size={22} />

                  <div>
                    <p className="text-xs uppercase text-white/50">
                      Site Office
                    </p>

                    <p className="mt-1">
                      Kanha Estate
                      <br />
                      Mohan Road
                      <br />
                      Lucknow
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-gold mt-1" size={22} />

                  <div>
                    <p className="text-xs uppercase text-white/50">Call</p>

                    <p className="mt-1">+91 92509 95854</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-gold mt-1" size={22} />

                  <div>
                    <p className="text-xs uppercase text-white/50">Email</p>

                    <p className="mt-1">
                      contact@ssinfraventures.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-[2rem] p-10 border border-white shadow-luxe"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />

                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+91..."
                />

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                />

                <Field
                  label="Preferred Plot Size"
                  name="plot"
                  type="text"
                  placeholder="1000 / 1250 / 1500 Sq Ft"
                />
              </div>

              <div className="mt-6">
                <label className="block text-xs text-emerald-deep font-medium tracking-[0.15em] uppercase mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your requirement..."
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full inline-flex items-center justify-center gap-3 btn-gold text-emerald-deep font-semibold px-8 py-4 rounded-full hover:-translate-y-1 transition-all"
              >
                <Send size={18} />

                Book Site Visit on WhatsApp
              </button>

              <p className="text-center text-sm text-gray-500 mt-5">
                Your enquiry will be sent directly to our WhatsApp for an
                instant response.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-xs text-emerald-deep font-medium tracking-[0.15em] uppercase mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}