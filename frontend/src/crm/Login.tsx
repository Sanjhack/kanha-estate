import { Building2, Lock, Mail } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#081b16] flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#184b3b_0%,transparent_55%)]" />

      <div className="relative w-full max-w-md">

        <div className="glass bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          <div className="flex justify-center mb-8">

            <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center">

              <Building2 className="text-[#081b16]" size={36} />

            </div>

          </div>

          <h1 className="text-4xl font-serif text-center text-white font-semibold">
            Shervy Realty
          </h1>

          <p className="text-center text-white/60 mt-2">
            CRM Login
          </p>

          <form className="mt-10 space-y-6">

            <div>

              <label className="text-white/70 text-sm mb-2 block">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                  size={18}
                />

                <input
                  type="email"
                  placeholder="admin@shervyrealty.com"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
                />

              </div>

            </div>

            <div>

              <label className="text-white/70 text-sm mb-2 block">
                Password
              </label>

              <div className="relative">

                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                  size={18}
                />

                <input
                  type="password"
                  placeholder="********"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
                />

              </div>

            </div>

            <button
              className="w-full py-4 rounded-2xl bg-gold text-[#081b16] font-semibold hover:scale-[1.02] transition-all"
            >
              Login
            </button>

          </form>

          <p className="text-center text-white/40 text-sm mt-8">
            © 2026 Shervy Realty CRM
          </p>

        </div>

      </div>

    </div>
  );
}