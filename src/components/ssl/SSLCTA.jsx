import { Phone, Mail } from "lucide-react";

export default function SSLCTA() {
  return (
    <section className="bg-[#020d2a] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl bg-gradient-to-r from-[#04153d] to-[#061f5c] px-10 py-16 text-center md:text-left md:flex md:items-center md:justify-between gap-10">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Do you still have questions <br className="hidden sm:block" />
              about SSL certificates?
            </h2>

            <p className="mt-5 text-blue-100 text-lg leading-relaxed">
              Our security experts are here to help you choose the right SSL
              certificate and guide you through the installation process.
            </p>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="mt-10 md:mt-0 flex flex-col sm:flex-row gap-4">
            {/* PHONE */}
            <a
              href="tel:+123456789"
              className="
                inline-flex items-center justify-center gap-3
                px-7 py-4 rounded-xl
                bg-white text-[#061a3a] font-semibold
                transition-all duration-300 ease-out
                hover:bg-blue-100 hover:-translate-y-1
              "
            >
              <Phone size={18} />
              +1 234 567 89
            </a>

            {/* CONTACT */}
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center gap-3
                px-7 py-4 rounded-xl
                border border-white/40 text-white font-semibold
                transition-all duration-300 ease-out
                hover:bg-white hover:text-[#061a3a] hover:-translate-y-1
              "
            >
              <Mail size={18} />
              Contact us
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
