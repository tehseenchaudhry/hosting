import { useState } from "react";
import { ChevronDown } from "lucide-react";

// LOCAL LOGO
import geotrustLogo from "../../../../assets/geotrust-logo-colors.svg";

export default function GeoTrustHero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* BREADCRUMB */}
        <p className="text-sm text-gray-500 mb-6">
          Home / SSL Certificates / GeoTrust
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* DROPDOWN */}
            <div className="relative inline-block mb-6">
              <button
                onClick={() => setOpen(!open)}
                className="
                  flex items-center gap-3
                  border border-gray-300
                  px-4 py-2 rounded-lg
                  hover:bg-gray-50
                  transition
                "
              >
                <img
                  src={geotrustLogo}
                  alt="GeoTrust"
                  className="h-6 object-contain"
                />

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div
                  className="
                    absolute left-0 mt-3 w-[360px]
                    bg-white rounded-xl shadow-xl
                    border border-gray-200
                    p-5 z-20
                  "
                >
                  <div className="flex gap-4">
                    <img
                      src={geotrustLogo}
                      alt="GeoTrust"
                      className="h-8 object-contain"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        GeoTrust
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        GeoTrust is one of the largest certification authorities
                        in the world, offering a wide range of SSL certificates
                        suitable for all types of use.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#061a3a] leading-tight">
              GeoTrust SSL <br /> Certificates
            </h1>

            <a
              href="#offers"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Discover our offers →
            </a>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              GeoTrust is one of the world’s largest Certificate Authorities,
              offering SSL certificates that combine strong security with
              affordability. Used in over 150 countries, GeoTrust helps
              businesses secure their websites with trusted encryption.
            </p>

            <h3 className="font-semibold text-gray-900 mb-4">
              Why choose GeoTrust certificates?
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Reliable security at competitive prices</li>
              <li>✔ Fast delivery & easy installation</li>
              <li>✔ Trusted brand recognized worldwide</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
