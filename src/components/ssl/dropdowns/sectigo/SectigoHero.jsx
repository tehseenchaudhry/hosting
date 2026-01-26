import { useState } from "react";
import { ChevronDown } from "lucide-react";
import sectigoLogo from "../../../../assets/sectigo-logo-colors.svg";

export default function SectigoHero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* LOGO */}
            <img
              src={sectigoLogo}
              alt="Sectigo"
              className="h-10 mb-6 object-contain"
            />

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#061a3a] leading-tight">
              Sectigo SSL <br /> Certificates
            </h1>

            {/* SUBTEXT */}
            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
              Secure your website with globally trusted SSL certificates from
              Sectigo, the world’s largest certificate authority.
            </p>

            {/* DROPDOWN */}
            <div className="mt-8 border border-gray-200 rounded-xl overflow-hidden max-w-xl">
              <button
                onClick={() => setOpen(!open)}
                className="
                  w-full flex items-center justify-between
                  px-6 py-5
                  text-left font-semibold text-[#061a3a]
                  bg-gray-50 hover:bg-gray-100
                  transition
                "
              >
                <span>Sectigo</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN CONTENT */}
              <div
                className={`
                  px-6 overflow-hidden transition-all duration-500 ease-in-out
                  ${open ? "max-h-96 py-5" : "max-h-0"}
                `}
              >
                <p className="text-gray-600 leading-relaxed text-sm">
                  Sectigo is an American brand with more than 20 years of
                  experience in the internet security industry. It is considered
                  to be the largest certificate authority in the world.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className="bg-[#f5f8ff] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-[#061a3a] mb-4">
              Why choose Sectigo certificates?
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li>✔ Trusted by millions of websites worldwide</li>
              <li>✔ Fast issuance and strong encryption</li>
              <li>✔ Competitive pricing for all SSL types</li>
              <li>✔ Compatible with all major browsers</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
