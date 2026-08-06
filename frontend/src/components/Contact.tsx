import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;

    const data = new FormData(form);

    const enquiry = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      plot: data.get("plot"),
      message: data.get("message"),
    };

    try {
      const response = await fetch(
        "https://kanha-estate.onrender.com/api/enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enquiry),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
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
            Contact Us
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-emerald-deep mt-5 font-semibold leading-tight">

            Book Your Site Visit

          </h2>

          <div className="mt-8 w-24 h-[3px] bg-gold rounded-full mx-auto" />

          <p className="text-gray-600 mt-7 leading-8 text-lg">

            Visit Kanha Estate and explore premium
            residential plots with excellent connectivity,
            peaceful surroundings and promising
            investment opportunities.

          </p>

        </Reveal>

        <div className="mt-20 grid lg:grid-cols-5 gap-8">

          {/* Left Card */}

          <Reveal className="lg:col-span-2">

            <div className="bg-emerald-deep rounded-[2rem] p-10 h-full text-white shadow-luxe relative overflow-hidden">

              <span className="text-gold uppercase tracking-[0.3em] text-xs">

                Project Information

              </span>

              <h3 className="font-serif text-4xl text-white mt-4">

                Kanha Estate

              </h3>

              <p className="text-white/70 mt-3 leading-7">

                Premium Residential Plotting Project

                <br />

                NH-56B, Lucknow

              </p>

              <p className="text-white/40 text-sm mt-5">

                Developed by SS Infra Ventures

              </p>

              <div className="mt-10 space-y-8">

                <div className="flex gap-4">

                  <MapPin
                    size={22}
                    className="text-gold mt-1"
                  />

                  <div>

                    <p className="uppercase text-xs text-white/50">

                      Site Office

                    </p>

                    <p className="mt-2 leading-7">

                      Kanha Estate

                      <br />

                      NH-56B

                      <br />

                      Lucknow

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Phone
                    size={22}
                    className="text-gold mt-1"
                  />

                  <div>

                    <p className="uppercase text-xs text-white/50">

                      Phone

                    </p>

                    <p className="mt-2">

                      +91 92509 95854

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Mail
                    size={22}
                    className="text-gold mt-1"
                  />

                  <div>

                    <p className="uppercase text-xs text-white/50">

                      Email

                    </p>

                    <p className="mt-2">

                      shervyrealty@gmail.com

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

          {/* Contact Form */}

          <Reveal
            delay={120}
            className="lg:col-span-3"
          >

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
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                />

                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                />

                <Field
                  label="Preferred Plot Size"
                  name="plot"
                  type="text"
                  placeholder="1000 / 1250 / 1500 Sq.Ft."
                />
                              </div>

              <div className="mt-6">

                <label className="block text-xs font-medium tracking-[0.15em] uppercase text-emerald-deep mb-2">

                  Message

                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your requirement..."
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full inline-flex items-center justify-center gap-3 btn-gold text-emerald-deep font-semibold px-8 py-4 rounded-full hover:-translate-y-1 transition-all duration-300 disabled:opacity-60"
              >

                <Send size={18} />

                {loading
                  ? "Submitting..."
                  : "Submit Enquiry"}

              </button>

              {success ? (

                <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-6 text-center">

                  <h4 className="text-xl font-semibold text-green-700">

                    ✅ Thank You!

                  </h4>

                  <p className="mt-2 text-green-600 leading-7">

                    Your enquiry has been submitted successfully.

                    <br />

                    Our relationship manager will contact you shortly.

                  </p>

                </div>

              ) : (

                <p className="mt-5 text-center text-sm text-gray-500">

                  Your enquiry will be securely submitted to our sales team.

                </p>

              )}

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

      <label className="block text-xs uppercase tracking-[0.15em] text-emerald-deep font-medium mb-2">

        {label}

      </label>

      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-gold transition-all"
      />

    </div>

  );

}