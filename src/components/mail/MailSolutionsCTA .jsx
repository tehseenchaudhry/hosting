import { ArrowRight } from "lucide-react";

const MailSolutionsCTA = () => {
  return (
    <section className="relative bg-[#020c2b] overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-[#0b4dff]/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-[#0b4dff]/20 rounded-full blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to upgrade <br /> your email experience?
            </h2>

            <p className="text-white/80 text-lg leading-7 max-w-xl mb-10">
              Choose a secure, professional and reliable email solution
              designed to grow with your business.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button className="group bg-[#0b4dff] hover:bg-[#0836cc] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg">
                Discover our offers
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <button className="border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#020c2b] transition font-semibold">
                Contact sales
              </button>
            </div>
          </div>

          {/* RIGHT STATS / CARDS */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="grid sm:grid-cols-2 gap-8"
          >
            {[
              { value: "99.9%", label: "Uptime guaranteed" },
              { value: "24/7", label: "Expert support" },
              { value: "100%", label: "Secure emails" },
              { value: "∞", label: "Scalable solutions" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-3xl font-extrabold text-white mb-2">
                  {item.value}
                </h3>
                <p className="text-white/70 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MailSolutionsCTA;
