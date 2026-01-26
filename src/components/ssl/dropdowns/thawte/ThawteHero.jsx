import thawteLogo from "../../../../assets/thawte-logo-colors.svg";
import { Check } from "lucide-react";

export default function ThawteHero() {
  return (
    <section className="bg-white pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* LOGO */}
            <img
              src={thawteLogo}
              alt="Thawte"
              className="h-10 mb-6"
            />

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#061a3a] leading-tight">
              Thawte SSL <br /> Certificates
            </h1>

            {/* CTA */}
            <a
              href="#certificates"
              className="
                inline-block mt-6
                text-[#1a73e8] font-medium
                hover:underline
              "
            >
              Discover our offers →
            </a>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-[#061a3a]">
            <p className="text-gray-600 leading-relaxed mb-6">
              Thawte first emerged in 1995 in South Africa. Thawte’s certificates
              are known for the ongoing upgrading of their various features as a
              result of customer feedback.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Thanks to consistent investment in research and development, their
              standard practices continue to be some of the most advanced in the
              industry, allowing them to be one-step ahead of ever-changing
              security risks.
            </p>

            {/* BULLETS */}
            <h4 className="font-semibold mb-4">
              Why choose Thawte certificates?
            </h4>

            <ul className="space-y-3">
              <li className="flex gap-3">
                <Check className="text-[#1a73e8]" size={18} />
                <span>
                  First Certification Authority to issue SSL certificates to
                  public organizations outside the United States.
                </span>
              </li>

              <li className="flex gap-3">
                <Check className="text-[#1a73e8]" size={18} />
                <span>Multilingual support.</span>
              </li>

              <li className="flex gap-3">
                <Check className="text-[#1a73e8]" size={18} />
                <span>A trusted label used by millions of people.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
